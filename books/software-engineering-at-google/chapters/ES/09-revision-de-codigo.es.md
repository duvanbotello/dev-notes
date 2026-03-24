[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/09-code-review.md)

# 09 - Revisión de código

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

La revisión de código es un proceso donde alguien distinto al autor evalúa un cambio para proteger la salud de la base de código. Cuando el proceso está bien diseñado y se toma en serio, mejora calidad técnica, coherencia, colaboración y aprendizaje organizacional.

## Conceptos clave

- **Revisión como guardia de calidad:** valida corrección, comprensibilidad y consistencia antes de integrar cambios.
- **Optimizar para el lector:** el código lo mantendrán otras personas; por eso debe ser claro, coherente y fácil de extender.
- **Coherencia sobre estilo personal:** sin revisión, cada ingeniero tiende a su estilo; la revisión alinea con estándares del equipo.
- **Evitar complejidad innecesaria:** código más simple reduce costo de mantenimiento y facilita refactorización futura.
- **Comentarios con criterio técnico:** proponer alternativas no por gusto personal, sino por mejor comprensión, menor complejidad o mayor eficiencia.
- **Aceleración pragmática:** no esperar la solución perfecta por consenso; priorizar mejoras suficientes y seguras para avanzar.
- **Beneficio cultural:** refuerza que el código no es "mío", sino un activo compartido del equipo.
- **Difusión de conocimiento:** revisiones propagan prácticas de ingeniería y elevan a quienes tienen menos experiencia.
- **Registro histórico útil:** la revisión deja contexto de decisiones y facilita entender por qué cambió el código.

## Citas (solo breves)

- "La revisión de código es la primera prueba de comprensibilidad para una audiencia más amplia."
- "Un revisor no debe proponer alternativas como opinión personal."
- "Este no es tu código; es del equipo."

## Mi interpretación

Este capítulo muestra que revisar código no es solo detectar errores: es una práctica de escalamiento organizacional. Sirve para reducir riesgos técnicos, mantener estándares compartidos y construir una cultura donde la calidad no depende de héroes individuales.

## Lecciones prácticas

- Tratar cada comentario como una acción pendiente acelera cierres y evita discusiones difusas.
- Cambios pequeños y enfocados hacen que la revisión sea más rápida y de mayor calidad.
- La rapidez de respuesta del revisor es parte de la profesionalidad del proceso.
- Una buena descripción del cambio reduce malentendidos y tiempo de ida y vuelta.
- Automatizar validaciones repetitivas permite que la revisión humana se enfoque en diseño y claridad.

## Preguntas

- ¿Nuestras revisiones están evaluando comprensión y coherencia o solo errores obvios?
- ¿Estamos pidiendo cambios por preferencia personal o por impacto técnico real?
- ¿Los PR son lo suficientemente pequeños para revisar con profundidad?
- ¿El proceso actual promueve aprendizaje o solo aprobación mecánica?

## Acciones

- [ ] Limitar cada PR a un solo tema cuando sea posible.
- [ ] Incluir en cada PR una descripción clara del problema, cambio y criterio de validación.
- [ ] Tratar cada comentario de revisión como tarea explícita hasta su cierre.
- [ ] Definir tiempos objetivo de respuesta para revisores y autores.
- [ ] Automatizar checks repetitivos para liberar tiempo de revisión de diseño.
- [ ] Mantener el número mínimo de revisores necesarios para decidir con calidad.

## Notas relacionadas

- Capítulo 3 del libro: [03 - Compartir conocimientos](03-compartir-conocimientos.es.md)
- Capítulo 5 del libro: [05 - Liderazgo de equipo](05-team-leadership.es.md)
- Aprendizajes clave del libro: [Software Engineering at Google - Aprendizajes clave](../../README.es.md#aprendizajes-clave)

## Ver también

- Aplicaciones prácticas del libro: [Software Engineering at Google - Aplicaciones prácticas](../../README.es.md#aplicaciones-prácticas)
- Plantilla de capítulo: [chapter-template.es.md](../../../../templates/chapter-template.es.md)

---

**Navegación**

- Capítulo anterior: [05 - Liderazgo de equipo](05-team-leadership.es.md)
- Capítulo siguiente: Pendiente
- Notas relacionadas: [README del libro](../../README.es.md), [Versión en inglés](../EN/09-code-review.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
