[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/05-bend-or-break.md)

# 05 - Doblar o romper

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

Si queremos software que sobreviva al cambio, tenemos que diseñarlo para doblarse sin romperse. Este capítulo insiste en reducir el acoplamiento, evitar dependencias innecesarias y preferir arquitecturas donde cada componente pueda evolucionar sin arrastrar a los demás.

## Conceptos clave

- **El acoplamiento es enemigo del cambio:** cuando dos piezas cambian en paralelo por diseño, el costo de evolución sube.
- **Software vs. puentes:** un puente busca rigidez; el software busca flexibilidad para adaptarse con el tiempo.
- **Ley de Demeter (mínimo conocimiento):** un método debería hablar con "amigos cercanos" y evitar cadenas largas de llamadas.
- **Evitar datos globales:** lo global conecta demasiados módulos entre sí y vuelve frágil la base de código.
- **Si algo debe compartirse, exponerlo con límites claros:** una API explícita reduce acoplamiento frente a acceso global directo.
- **Eventos y FSM (máquinas de estado finitas):** ayudan a modelar transiciones y comportamientos sin dependencias rígidas.
- **Observador vs. Publish/Subscribe:** observador introduce acoplamiento por registro directo; pub/sub desacopla mejor cuando hay un intermediario.
- **Programación reactiva, streams y eventos:** clarifica flujos asíncronos y favorece composición desacoplada.
- **Transformar programación en procesos:** si no puedes describir un proceso con claridad, probablemente aún no entiendes bien el problema.
- **Impuestos sobre la herencia:** la herencia puede ser útil, pero también aumenta acoplamiento y costo de mantenimiento.
- **Alternativas a herencia profunda:** interfaces, delegación, mixins y traits suelen ofrecer extensión con menos dependencia estructural.
- **No escribir código Dodo:** el código que no se adapta al cambio termina extinguiéndose.

## Citas (solo breves)

- "El acoplamiento es el enemigo del cambio." - Idea central del capítulo
- "Si las cosas no ocurren, haz que ocurran." - John F. Kennedy (cita usada en el capítulo)

## Mi interpretación

Este capítulo me refuerza una regla de diseño: cada decisión que simplifica hoy pero acopla de más, se convierte en deuda mañana. Lo más útil para mí es pensar en flexibilidad como una propiedad intencional: menos globales, menos herencia rígida y más límites explícitos entre componentes.

## Lecciones prácticas

- Antes de agregar una dependencia entre módulos, validar si realmente es necesaria o solo conveniente en el corto plazo.
- Revisar llamadas encadenadas largas porque suelen esconder conocimiento excesivo entre clases.
- Usar pub/sub para eventos asíncronos cuando necesitemos sustituir o extender consumidores con bajo impacto.
- Tratar la herencia como última opción cuando existan alternativas por composición, interfaces o delegación.
- Diseñar código con capacidad de cambio explícita para evitar que se vuelva "código Dodo".

## Preguntas

- ¿Qué partes de mi sistema cambian juntas por acoplamiento accidental?
- ¿Dónde tengo datos globales que debería encapsular detrás de una API?
- ¿Qué jerarquías de herencia podrían simplificarse con interfaces o delegación?
- ¿Qué flujo asíncrono actual sería más claro con eventos o programación reactiva?

## Acciones

- [ ] Identificar y reducir un acoplamiento fuerte en un módulo que hoy dificulta cambios.
- [ ] Reemplazar un dato global crítico por un acceso explícito con interfaz o API.
- [ ] Revisar una subclase actual y evaluar si composición o delegación reduce dependencias.
- [ ] Modelar un flujo complejo con una máquina de estados finita para hacer visibles las transiciones.
- [ ] Definir un pequeño experimento con eventos pub/sub para desacoplar productores y consumidores.

## Notas relacionadas

- Capítulo 2: [02 - Un enfoque pragmático](02-un-enfoque-pragmatico.es.md)
- Capítulo 4: [04 - Paranoia pragmática](04-paranoia-pragmatica.es.md)
- Revisión de código: [09 - Revisión de código](../../../software-engineering-at-google/chapters/ES/09-revision-de-codigo.es.md)
- Índice del libro: [The Pragmatic Programmer - README.es](../../README.es.md)

## Ver también

- Plantilla de capítulo: [chapter-template.es.md](../../../../templates/chapter-template.es.md)
- Índice del repositorio: [README.es.md](../../../../README.es.md)

---

**Navegación**

- Capítulo anterior: [04 - Paranoia pragmática](04-paranoia-pragmatica.es.md)
- Capítulo siguiente: Pendiente
- Notas relacionadas: [README del libro](../../README.es.md), [Versión en inglés](../EN/05-bend-or-break.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
