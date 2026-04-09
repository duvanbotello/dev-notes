window.PRAGMATIC_SLIDES = [
  {
    chapter: "Opening",
    subtitle: "Kickoff",
    title: "What I value most from The Pragmatic Programmer",
    narrative:
      "The goal of this talk is to share personal interpretations from the book that I consider valuable. The idea is to open an honest conversation where we can learn and question how we are doing things today.",
    bullets: [
      "It is not mandatory and it is not the only way: there are many ways to build software.",
      "If one idea from this talk improves a conversation, a practice, or a delivery, it is already worth it."
    ],
    takeaway: "I seek to open reflection, judgment, and conscious improvement.",
    visualTitle: "What I want to achieve with this conversation",
    visualItems: ["That each person leaves with 1-2 ideas they can apply in context."],
    theme: "vision",
    mode: "hero"
  },
  {
    chapter: "Authors",
    subtitle: "In 20 seconds",
    title: "Who wrote The Pragmatic Programmer",
    narrative:
      "David Thomas and Andrew Hunt are two highly recognized voices in software development. Their perspective combines real-world practice, team coaching, and long-term engineering thinking.",
    bullets: [
      "They are speakers in technical communities and conferences worldwide.",
      "They founded Pragmatic Bookshelf, a respected technical publishing collection.",
      "They also signed and authored the Agile Manifesto, a key reference for modern agile practice.",
      "Their opinion matters because it connects real practice, team principles, and sustainable decisions."
    ],
    takeaway: "Reading with judgment helps us grow: we should always take what is useful, question the rest, and adapt it to our reality.",
    visualTitle: "Why they are worth listening to",
    visualItems: [
      "Real software experience",
      "Global community impact",
      "Direct contribution to agile thinking",
      "Ideas grounded in daily work"
    ],
    theme: "context"
  },
  {
    chapter: "Interaction",
    subtitle: "",
    title: "What is costing us more today: building new things or sustaining what already exists?",
    narrative: "menti.com | Code: ________",
    bullets: [],
    takeaway: "",
    visualTitle: "",
    visualItems: [],
    theme: "closing",
    mode: "question"
  },
  {
    chapter: "Chapter 0",
    subtitle: "Preface",
    title: "There is no point in building software if we do not care about doing it well.",
    narrative:
      "There is no point in building software without real commitment to quality. The starting point is not technology; it is professional attitude toward quality.",
    bullets: [
      "Quality criteria must be defined before speed pressure.",
      "Small decisions today become debt or stability tomorrow.",
      "Without shared standards, each delivery reopens the same arguments."
    ],
    questions: [
      "What does 'doing it well' mean in my current team context?",
      "Which concessions are we normalizing that will slow us down later?"
    ],
    actions: [
      "Align on minimum quality criteria for upcoming deliveries.",
      "Review each delivery for intent, not only functionality."
    ],
    takeaway: "First we define standards, then we execute.",
    visualTitle: "Mindset shift",
    visualItems: ["From 'just ship'", "to 'own outcomes'", "From 'patchwork'", "to 'sustained value'"],
    theme: "preface"
  },
  {
    chapter: "Chapter 1",
    subtitle: "A pragmatic philosophy",
    title: "Being pragmatic is not improvising, it is taking ownership.",
    narrative:
      "When someone stops justifying mistakes and starts owning them, not only code improves; reputation and team impact improve too.",
    bullets: [
      "Own what we do, avoid blame, and respond with solutions.",
      "Admitting errors or uncertainty strengthens trust and growth.",
      "Technical disorder expands when we tolerate broken windows.",
      "Do not leave broken windows.",
      "You do not need to know everything, but you need to know who knows."
    ],
    questions: [
      "Am I explaining problems or solving them?",
      "Which broken windows am I tolerating today out of convenience?",
      "Can I adapt my message to the audience that needs it?"
    ],
    actions: ["Fix one small broken window in the repo."],
    takeaway:
      "Ownership accelerates decisions, reduces defensive discussions, and improves overall quality.",
    visualTitle: "Lessons learned",
    visualItems: [
      "Admitting 'I do not know' opens learning and avoids ego-driven mistakes",
      "Caring for design early prevents disorder from becoming culture",
      "Small, consistent learning beats occasional intense learning",
      "Communication without context can ruin a good technical idea"
    ],
    theme: "philosophy"
  },
  {
    chapter: "Interaction",
    subtitle: "After chapter 1",
    title: "Which 'broken window' are we normalizing today, and what cost is it generating?",
    narrative: "menti.com | Code: ________",
    bullets: [],
    takeaway: "",
    visualTitle: "",
    visualItems: [],
    theme: "closing",
    mode: "question"
  },
  {
    chapter: "Chapter 2",
    subtitle: "A pragmatic approach",
    title: "Nothing is more dangerous than an idea if it is the only one you have.",
    narrative:
      "Not everything is solved by building faster; many problems are solved by learning earlier. That is why we should decouple for flexibility, prototype for exploration, and estimate calmly instead of committing from intuition.",
    bullets: [
      "In non-orthogonal systems, one local decision impacts multiple parts.",
      "If external interfaces stay stable, a component can evolve with less risk.",
      "Disposable prototypes must be explicit, so they do not become production by pressure.",
      "Before estimating, ask whether high precision or a rough number is needed.",
      "Avoid improvised answers; take time and answer with context."
    ],
    questions: ["Which parts of my system change together because of weak design, not real need?"],
    actions: ["Review one current module and identify unnecessary coupling between components."],
    takeaway: "Learning early and deciding with context avoids costs that later look inevitable.",
    visualTitle: "Lessons learned",
    visualItems: [
      "Every line can increase or reduce coupling; review this impact intentionally.",
      "If I build a prototype, I must label it disposable to keep it out of production pressure.",
      "A calm estimate is more valuable than a quick number 'next to the coffee machine'."
    ],
    theme: "approach"
  },
  {
    chapter: "Chapter 4",
    subtitle: "Pragmatic paranoia",
    title: "We cannot write perfect software, so we must design defenses against our own mistakes.",
    narrative:
      "Pragmatic paranoia means validating assumptions, defining clear contracts, and stopping execution when impossible states appear, because a corrupted system causes more damage than a fast-failing system.",
    bullets: [
      "Do not trust blindly, even your own technical judgment can fail.",
      "Assertive programming: when you think 'this should never happen,' add explicit validation.",
      "Small steps with feedback reduce risk and allow adjustment before scaling.",
      "Assume unexpected events will happen and prepare resilient systems."
    ],
    questions: ["Which current task is too large because it depends on guessing instead of clarity?"],
    actions: ["Split one current large task into smaller increments with review and feedback at each step."],
    takeaway: "Robustness does not appear by itself; it is designed with validation and discipline.",
    visualTitle: "Lessons learned",
    visualItems: ["Breaking work into small steps improves learning, feedback, and continuous adjustment."],
    theme: "paranoia"
  },
  {
    chapter: "Closing",
    subtitle: "Takeaway",
    title: "It is not about coding faster, it is about coding with intention.",
    narrative:
      "If this space leaves one thing, let it be this: each decision we make shapes product quality, team culture, and user trust.",
    bullets: [
      "Take the ideas that felt most relevant and reflect on them internally.",
      "We do not need to fix everything at once; we can improve day by day."
    ],
    takeaway: "Real improvement does not start in the next sprint; it starts in how we choose to act today.",
    visualTitle: "",
    visualItems: [],
    theme: "closing"
  }
];
