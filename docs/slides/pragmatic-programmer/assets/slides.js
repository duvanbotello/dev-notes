window.PRAGMATIC_SLIDES = [
  {
    chapter: "Apertura",
    subtitle: "Por qué esta charla",
    title: "Lo mas importante que me llevo de The Pragmatic Programmer",
    narrative:
      "El objetivo de esta tertulia es compartir interpretaciones personales del libro que considero valiosas. La idea es abrir una conversación honesta donde podamos aprender y cuestionarnos sobre cómo estamos haciendo las cosas hoy.",
    bullets: [
      "No es obligatorio ni es 'la mejor forma': hay muchas maneras de desarrollar software.",
      "Si algo de aqui mejora una conversacion, una practica o una entrega, ya valio la pena."
    ],
    takeaway: "Busco abrir reflexión, criterio y mejora consciente.",
    visualTitle: "Lo que me gustaria lograr con esta conversacion",
    visualItems: [
      "Que cada persona se lleve 1-2 ideas que puedan aplicar en su contexto."
    ],
    theme: "vision",
    mode: "hero"
  },
  {
    chapter: "Autores",
    subtitle: "En 20 segundos",
    title: "Quienes escribieron The Pragmatic Programmer",
    narrative:
      "David Thomas y Andrew Hunt son dos de las voces mas reconocidas en la comunidad de desarrollo de software. Su mirada combina experiencia practica, formacion de equipos y liderazgo intelectual en la evolucion del desarrollo agil.",
    bullets: [
      "Son ponentes y conferenciantes en comunidades y eventos tecnicos alrededor del mundo.",
      "Fundaron Pragmatic Bookshelf, una coleccion editorial enfocada en libros tecnicos de referencia para desarrolladores.",
      "Tambien participaron como firmantes y autores del Manifiesto Agil, una base clave para metodologias agiles modernas.",
      "Su opinion importa porque conecta practica real, principios de equipo y decisiones de largo plazo."
    ],
    takeaway: "Leer con criterio nos hace crecer; siempre debemos tomar lo útil, cuestionar lo demás e intentar adaptarlo a nuestra realidad.",
    visualTitle: "Por que vale la pena escucharlos",
    visualItems: [
      "Experiencia real en software",
      "Influencia global en la comunidad",
      "Aporte directo al pensamiento agil",
      "Ideas que aterrizan en el dia a dia"
    ],
    theme: "context"
  },
  {
    chapter: "Interaccion",
    subtitle: "",
    title: "¿Que nos esta costando mas: construir nuevas cosas o sostener lo que ya existe?",
    narrative: "menti.com | Codigo: ________",
    bullets: [],
    takeaway: "",
    visualTitle: "",
    visualItems: [],
    theme: "closing",
    mode: "question"
  },
  {
    chapter: "Capitulo 0",
    subtitle: "Prefacio",
    title: "No tiene sentido desarrollar software si no nos preocupamos por hacerlo bien.",
    narrative:
      "No tiene sentido desarrollar software si no hay compromiso real con hacerlo bien. El punto de partida no es la tecnologia, sino la actitud profesional frente a la calidad.",
    bullets: [
      "El criterio de calidad se define antes de la velocidad.",
      "Las decisiones pequeñas de hoy se convierten en deuda o en solidez mañana.",
      "Si no acordamos estandar, cada entrega abre una discusion nueva."
    ],
    questions: [
      "¿Que significa 'hacerlo bien' en el contexto de mi equipo actual?",
      "¿Que concesiones estamos normalizando que luego nos van a frenar?"
    ],
    actions: [
      "Acordar criterios minimos de calidad para nuevas entregas.",
      "Revisar en cada entrega si el resultado cumple intencion, no solo funcionalidad."
    ],
    takeaway: "Primero se decide el estandar; luego se ejecuta.",
    visualTitle: "Cambio de mentalidad",
    visualItems: ["De 'cumplir'", "a 'responder'", "De 'salir del paso'", "a 'sostener valor'"],
    theme: "preface"
  },
  {
    chapter: "Capitulo 1",
    subtitle: "Una filosofia pragmatica",
    title: "Ser pragmatico no es improvisar, es hacerse cargo.",
    narrative:
      "Cuando alguien deja de justificar errores y empieza a aceptarlos y hacerse cargo, mejora no solo su codigo, tambien su reputacion y su impacto en el equipo.",
    bullets: [
      "Asumir lo que hacemos, evitar culpas externas y responder con soluciones.",
      "Admitir errores o desconocimiento fortalece confianza y crecimiento.",
      "El desorden tecnico se expande si se toleran 'ventanas rotas'.",
      "No dejar ventanas rotas.",
      "No necesitas saber todo, pero si saber quien sabe."
    ],
    questions: [
      "¿Estoy explicando problemas o resolviendolos?",
      "¿Que 'ventanas rotas' estoy tolerando hoy por comodidad?",
      "¿Se adaptar mi mensaje al publico que lo necesita?"
    ],
    actions: ["Corregir una 'ventana rota' pequeña en el repo."],
    takeaway:
      "La responsabilidad acelera decisiones, reduce discusiones defensivas y mejora la calidad del equipo.",
    visualTitle: "Lecciones aprendidas",
    visualItems: [
      "Admitir 'no se' abre aprendizaje y evita errores por orgullo",
      "Cuidar el diseño temprano evita que el desorden se vuelva cultura",
      "Aprender poco y constante rinde mas que aprender mucho una vez",
      "Comunicar sin contexto puede arruinar una buena idea tecnica"
    ],
    theme: "philosophy"
  },
  {
    chapter: "Interaccion",
    subtitle: "Despues del capitulo 1",
    title: "¿Que 'ventana rota' estamos normalizando hoy en nuestro equipo y que costo nos esta generando?",
    narrative: "menti.com | Codigo: ________",
    bullets: [],
    takeaway: "",
    visualTitle: "",
    visualItems: [],
    theme: "closing",
    mode: "question"
  },
  {
    chapter: "Capitulo 2",
    subtitle: "Un enfoque pragmatico",
    title: "Nada es mas peligroso que una idea si es la unica que tienes.",
    narrative:
      "No todo se resuelve construyendo mas rapido; muchas veces se resuelve aprendiendo antes. Por eso siempre hay que desacoplar para ser mas flexibles al cambio, prototipar para explorar y estimar con calma para no comprometer fechas desde la intuicion.",
    bullets: [
      "En sistemas no ortogonales, una decision local impacta multiples partes.",
      "Si las interfaces externas se mantienen estables, un componente puede evolucionar con menos riesgo.",
      "Prototipo explicitamente desechable: debe quedar claro para todos que esta incompleto y no se convierte en base de produccion.",
      "Antes de estimar, preguntar si necesitan precision alta o una cifra aproximada.",
      "Evitar respuestas improvisadas; tomar tiempo para pensar y responder con mas contexto."
    ],
    questions: [
      "¿Que partes de mi sistema cambian juntas por diseño deficiente y no por necesidad real?"
    ],
    actions: [
      "Revisar un modulo actual e identificar acoplamientos innecesarios entre componentes."
    ],
    takeaway: "Aprender antes y decidir con contexto evita costos que luego parecen inevitables.",
    visualTitle: "Lecciones aprendidas",
    visualItems: [
      "Cada linea de codigo puede subir o bajar el acoplamiento: hay que revisar ese impacto de forma intencional.",
      "Si hago un prototipo, debo etiquetarlo como desechable para evitar que termine en produccion por presion de tiempo.",
      "Una estimacion pensada con calma vale mas que una cifra rapida dada 'junto a la maquina de cafe'."
    ],
    theme: "approach"
  },
  {
    chapter: "Capitulo 4",
    subtitle: "Paranoia pragmatica",
    title: "No podemos escribir software perfecto, asi que debemos diseñar defensas contra nuestros propios errores.",
    narrative:
      "La paranoia pragmatica propone validar supuestos, definir contratos claros y detener la ejecucion cuando aparece algo imposible, porque un sistema corrupto hace mas daño que un sistema que falla rapido.",
    bullets: [
      "No confiar ciegamente ni en uno mismo: incluso un buen criterio tecnico comete errores.",
      "Programacion asertiva: cada vez que pensemos 'eso nunca podria ocurrir', agregar una verificacion explicita.",
      "Pasos pequeños con feedback: avanzar por incrementos reduce riesgo y permite ajustar antes de escalar.",
      "Asumir que habra eventos inesperados y preparar sistemas resilientes."
    ],
    questions: [
      "¿Que tarea actual es demasiado grande porque depende de adivinar y no esta todo claro?"
    ],
    actions: [
      "Dividir una tarea grande actual en incrementos con revision y feedback en cada paso."
    ],
    takeaway: "La robustez no aparece sola; se diseña con validacion y disciplina.",
    visualTitle: "Lecciones aprendidas",
    visualItems: ["Dividir trabajo en pasos pequeños mejora aprendizaje, feedback y ajuste continuo."],
    theme: "paranoia",
    compact: true
  },
  {
    chapter: "Cierre",
    subtitle: "Para llevarnos hoy",
    title: "No se trata de programar mas rapido, se trata de programar con intencion.",
    narrative:
      "Si este espacio te deja algo, que sea esto: cada decision que tomamos dicta la calidad del producto, la cultura del equipo y la confianza del usuario.",
    bullets: [
      "Tomemos las ideas que nos parecieron mas interesantes y reflexionemos internamente.",
      "No hace falta que cambiemos todo lo negativo de una vez; podemos ir mejorando cada dia."
    ],
    takeaway: "La mejora real no empieza en el sprint o la proxima semana, empieza en la forma en que elegimos actuar desde hoy.",
    visualTitle: "",
    visualItems: [],
    theme: "closing"
  }
];
