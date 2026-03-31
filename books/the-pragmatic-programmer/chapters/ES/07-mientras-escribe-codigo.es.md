[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/07-while-you-are-coding.md)

# 07 - Mientras escribe código

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

Mientras programamos, tomamos decisiones continuamente. Este capítulo propone hacerlo con intención: pensar de forma deliberada, escuchar el instinto técnico, refactorizar en pequeño y usar pruebas como feedback constante para mantener código claro, seguro, fácil de razonar y preparado para cambiar.

## Conceptos clave

- **Programar con criterio, no por accidente:** que algo "encaje" no significa que sea la respuesta correcta.
- **Pensamiento crítico continuo:** revisar también nuestro propio código con mirada pragmática.
- **Escuchar el "cerebro reptiliano":** una incomodidad al codificar suele ser una señal útil para pausar, validar y repensar.
- **Código legible y razonable:** si no puedes explicarlo con claridad a un junior, probablemente depende de casualidades.
- **No dejar que el pasado dicte el futuro:** cualquier código puede reemplazarse si ya no es apropiado.
- **Ser consciente de algoritmos y complejidad:** estimar orden de crecimiento antes de optimizar.
- **Evitar optimización prematura:** primero confirmar que existe un cuello de botella real.
- **Refactorizar temprano y frecuente:** cambios pequeños, seguros y guiados por pruebas.
- **Refactorizar no es reescribir todo:** una semana de "refactorización" suele ser una reescritura encubierta.
- **Pruebas como primer usuario del código:** no solo detectan fallos, también guían diseño y arquitectura.
- **Cultura de pruebas:** "probar después" normalmente termina en "no probar".
- **Seguridad desde el diseño:** minimizar superficie de ataque, aplicar mínimo privilegio y cifrar datos sensibles.
- **Entradas/salidas y depuración son vectores de ataque:** todo canal de datos debe tratarse como frontera de seguridad.
- **Los nombres importan:** nombrar bien expresa intención, facilita mantenimiento y reduce errores de razonamiento.

## Citas (solo breves)

- "Refactorice pronto y refactorice con frecuencia." - Práctica recomendada del capítulo
- "Pruebe su software o lo harán sus usuarios." - Regla pragmática del capítulo

## Mi interpretación

Este capítulo une varias disciplinas en una sola idea operativa: escribir código con conciencia. No basta con que funcione hoy; debe poder entenderse, probarse, refactorizarse y protegerse mañana. Lo más valioso para mí es el equilibrio: avanzar, pero con pausas deliberadas para pensar, medir, probar y corregir a tiempo.

## Lecciones prácticas

- Cuando una solución "huele raro", detenerse y validar con pruebas antes de seguir agregando código.
- Elegir algoritmos con perspectiva de escala (mil vs. un millón de registros).
- Tratar la refactorización como actividad continua de bajo riesgo, no como megaproyecto.
- Mantener una suite de pruebas confiable para habilitar cambios frecuentes sin miedo.
- Diseñar con seguridad básica desde el inicio: menos superficie, menos privilegios y datos sensibles cifrados.

## Preguntas

- ¿Qué partes de mi código actual dependen de suerte más que de razonamiento explícito?
- ¿Qué módulo debería refactorizar hoy para evitar una deuda más cara después?
- ¿Qué pruebas faltan para que el equipo pueda cambiar código con seguridad?
- ¿Dónde estoy exponiendo información o servicios con más privilegios de los necesarios?

## Acciones

- [ ] Revisar una sección de código y simplificarla hasta poder explicarla claramente a una persona junior.
- [ ] Medir complejidad de un flujo crítico y validar si realmente requiere optimización.
- [ ] Ejecutar una refactorización pequeña (paso a paso) respaldada por pruebas automatizadas.
- [ ] Agregar o mejorar pruebas de contrato y casos borde en un módulo sensible.
- [ ] Auditar una ruta de datos sensibles para confirmar cifrado, control de acceso y ausencia de secretos en código.
- [ ] Renombrar símbolos ambiguos en un archivo clave para mejorar claridad semántica.

## Notas relacionadas

- Capítulo 6: [06 - Concurrencia](06-concurrencia.es.md)
- Capítulo 5: [05 - Doblar o romper](05-doblar-o-romper.es.md)
- Revisión de código: [09 - Revisión de código](../../../software-engineering-at-google/chapters/ES/09-revision-de-codigo.es.md)
- Índice del libro: [The Pragmatic Programmer - README.es](../../README.es.md)

## Ver también

- Plantilla de capítulo: [chapter-template.es.md](../../../../templates/chapter-template.es.md)
- Índice del repositorio: [README.es.md](../../../../README.es.md)

---

**Navegación**

- Capítulo anterior: [06 - Concurrencia](06-concurrencia.es.md)
- Capítulo siguiente: [08 - Antes del proyecto](08-antes-del-proyecto.es.md)
- Notas relacionadas: [README del libro](../../README.es.md), [Versión en inglés](../EN/07-while-you-are-coding.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
