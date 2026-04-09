(function () {
  const deck = document.getElementById("deck");
  const agenda = document.getElementById("agenda");
  const counter = document.getElementById("counter");
  const progress = document.getElementById("progress-fill");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const fullscreen = document.getElementById("fullscreen");
  const slides = window.PRAGMATIC_SLIDES || [];

  let index = 0;
  let previousIndex = -1;
  let revealIndex = 0;
  let revealables = [];
  const INITIAL_REVEAL = 3;

  const labels = {
    fullscreen: document.documentElement.lang === "en" ? "Fullscreen" : "Pantalla completa",
    exitFullscreen: document.documentElement.lang === "en" ? "Exit fullscreen" : "Salir de pantalla"
  };

  let idleTimer = null;
  const resetIdleState = () => {
    if (!document.fullscreenElement) {
      document.body.classList.remove("presentation-idle");
      return;
    }
    document.body.classList.remove("presentation-idle");
    if (idleTimer) window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(() => {
      document.body.classList.add("presentation-idle");
    }, 2600);
  };

  const updateFullscreenLabel = () => {
    if (!fullscreen) return;
    fullscreen.textContent = document.fullscreenElement ? labels.exitFullscreen : labels.fullscreen;
  };

  const renderAgenda = () => {
    if (!agenda) return;
    agenda.innerHTML = "";
    const title = document.createElement("p");
    title.className = "agenda-title";
    title.textContent =
      document.documentElement.lang === "en" ? "Conversation path" : "Ruta de conversacion";

    const list = document.createElement("div");
    list.className = "agenda-list";

    slides.forEach((slide, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "agenda-item";
      button.dataset.index = String(i);
      button.innerHTML = `<span>${String(i + 1).padStart(2, "0")}</span>${slide.chapter}`;
      button.addEventListener("click", () => {
        index = i;
        render();
      });
      list.appendChild(button);
    });

    agenda.append(title, list);
  };

  const render = () => {
    if (!deck || slides.length === 0) return;
    const slide = slides[index];

    deck.innerHTML = "";
    const article = document.createElement("article");
    article.className = `slide theme-${slide.theme || "vision"} ${slide.mode ? `mode-${slide.mode}` : ""}${slide.compact ? " is-compact" : ""}`;

    const chapter = document.createElement("p");
    chapter.className = "chapter";
    chapter.textContent = slide.chapter;

    const subtitle = document.createElement("p");
    subtitle.className = "subtitle";
    subtitle.textContent = slide.subtitle;

    const title = document.createElement("h1");
    title.textContent = slide.title;

    const narrative = document.createElement("p");
    narrative.className = "narrative";
    narrative.textContent = slide.narrative;

    const list = document.createElement("ul");
    const bulletNodes = [];
    slide.bullets.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
      bulletNodes.push(li);
    });

    const createSubsection = (heading, items, kind) => {
      if (!Array.isArray(items) || items.length === 0) return null;
      const section = document.createElement("section");
      section.className = "subsection";
      if (kind) section.classList.add(`subsection-${kind}`);

      const h = document.createElement("p");
      h.className = "subsection-title";
      h.textContent = heading;

      const ul = document.createElement("ul");
      ul.className = "subsection-list";
      items.forEach((item) => {
        const li = document.createElement("li");
        const marker = document.createElement("span");
        marker.className = "subsection-marker";
        marker.textContent = kind === "actions" ? "A" : "Q";

        const text = document.createElement("span");
        text.className = "subsection-text";
        text.textContent = item;

        li.append(marker, text);
        ul.appendChild(li);
      });

      section.append(h, ul);
      return section;
    };

    const questionsSection = createSubsection("Preguntas", slide.questions, "questions");
    const actionsSection = createSubsection("Acciones", slide.actions, "actions");

    const qaGrid =
      questionsSection || actionsSection
        ? document.createElement("div")
        : null;
    if (qaGrid) {
      qaGrid.className = "qa-grid";
      if (questionsSection) qaGrid.appendChild(questionsSection);
      if (actionsSection) qaGrid.appendChild(actionsSection);
    }

    const takeaway = document.createElement("p");
    takeaway.className = "takeaway";
    takeaway.textContent = slide.takeaway;

    if (slide.mode === "question") {
      takeaway.textContent = "";
      narrative.dataset.cta =
        document.documentElement.lang === "en" ? "Join now" : "Participa ahora";
    }

    const hasVisual =
      Boolean((slide.visualTitle || "").trim()) ||
      (Array.isArray(slide.visualItems) && slide.visualItems.length > 0);

    let visual = null;
    if (hasVisual) {
      visual = document.createElement("aside");
      visual.className = "visual";

      const visualTitle = document.createElement("p");
      visualTitle.className = "visual-title";
      visualTitle.textContent = slide.visualTitle;

      if (String(slide.visualTitle || "").toLowerCase().includes("lecciones aprendidas")) {
        visual.classList.add("visual-lessons");
      }

      if (String(slide.visualTitle || "").toLowerCase().includes("pregunta de salida")) {
        visual.classList.add("visual-question");
      }

      const diagram = document.createElement("div");
      diagram.className = "diagram";

      const visualList = document.createElement("ul");
      visualList.className = "visual-list";
      ;(slide.visualItems || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        visualList.appendChild(li);
      });

      visual.append(visualTitle, diagram, visualList);
    }

    const content = document.createElement("section");
    content.className = "content";
    content.append(chapter, subtitle, title, narrative);
    if (bulletNodes.length > 0) content.append(list);
    if (qaGrid) content.appendChild(qaGrid);
    if (String(slide.takeaway || "").trim()) content.append(takeaway);

    if (visual) {
      article.append(content, visual);
    } else {
      article.classList.add("no-visual");
      article.append(content);
    }
    deck.appendChild(article);

    revealables = [chapter, subtitle, title, narrative, ...bulletNodes];
    if (qaGrid) revealables.push(qaGrid);
    if (String(slide.takeaway || "").trim()) revealables.push(takeaway);
    if (visual) revealables.push(visual);

    revealables.forEach((el) => el.classList.add("reveal-item"));
    revealIndex = Math.min(INITIAL_REVEAL, revealables.length);
    revealables.forEach((el, i) => {
      el.classList.toggle("is-visible", i < revealIndex);
    });

    if (counter) counter.textContent = `${index + 1} / ${slides.length} · ${slide.chapter}`;
    if (progress) progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    if (agenda) {
      const pathProgress = slides.length > 1 ? (index / (slides.length - 1)) * 100 : 100;
      agenda.style.setProperty("--timeline-progress", `${pathProgress}%`);
    }

    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === slides.length - 1;

    const agendaItems = agenda?.querySelectorAll(".agenda-item");
    let activeItem = null;
    agendaItems?.forEach((item, i) => {
      const isActive = i === index;
      item.classList.toggle("active", isActive);
      if (isActive) activeItem = item;
    });

    if (activeItem && previousIndex !== index) {
      activeItem.classList.remove("active-pulse");
      void activeItem.offsetWidth;
      activeItem.classList.add("active-pulse");
    }
    previousIndex = index;

    activeItem?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const revealStep = (step) => {
    if (step > 0) {
      if (revealIndex < revealables.length) {
        revealIndex += 1;
        revealables.forEach((el, i) => {
          el.classList.toggle("is-visible", i < revealIndex);
        });
        return;
      }
      index = Math.max(0, Math.min(slides.length - 1, index + 1));
      render();
      return;
    }

    if (revealIndex > INITIAL_REVEAL) {
      revealIndex -= 1;
      revealables.forEach((el, i) => {
        el.classList.toggle("is-visible", i < revealIndex);
      });
      return;
    }

    index = Math.max(0, Math.min(slides.length - 1, index - 1));
    render();
    revealIndex = revealables.length;
    revealables.forEach((el) => el.classList.add("is-visible"));
  };

  prev?.addEventListener("click", () => revealStep(-1));
  next?.addEventListener("click", () => revealStep(1));

  fullscreen?.addEventListener("click", async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
      updateFullscreenLabel();
      resetIdleState();
    } catch {
      updateFullscreenLabel();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    updateFullscreenLabel();
    resetIdleState();
  });

  ["mousemove", "pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, resetIdleState, { passive: true });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown") revealStep(1);
    if (event.key === "ArrowLeft" || event.key === "PageUp") revealStep(-1);
    if (event.key === "Home") {
      index = 0;
      render();
    }
    if (event.key === "End") {
      index = slides.length - 1;
      render();
    }
  });

  renderAgenda();
  updateFullscreenLabel();
  render();
})();
