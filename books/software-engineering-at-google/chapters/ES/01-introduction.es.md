[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/01-introduction.md)

# 01 - ¿Qué es la ingeniería de software?

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

En un proyecto de ingeniería de software, la preocupación principal no es solo que algo funcione hoy, sino cómo se comporta con el paso del tiempo y con los cambios inevitables. La sostenibilidad de la base de código depende de poder cambiar lo necesario de forma segura durante toda su vida útil.

## Conceptos clave

- **Tiempo y cambio como eje:** el valor real de un sistema se mide por su capacidad de adaptación continua.
- **"Funciona ahora" vs. "se puede mantener":** no son lo mismo; mantener implica costo, seguridad y coordinación.
- **Sostenibilidad de la base de código:** una base de código es sostenible si puede cambiar lo que debe cambiar, de forma segura, durante su vida útil.
- **Escalado y costos organizacionales:** al crecer la organización y el producto, crece también el trabajo de ingeniería necesario para sostener el sistema.
- **Políticas de escalamiento:** procesos y límites claros permiten que la infraestructura escale sin asumir responsabilidad por usos no visibles en IC.
- **Decisiones revisables en el tiempo:** una decisión técnica no debe sostenerse por jerarquía ("porque yo lo digo"), sino por revisión periódica y contexto.
- **Programación vs. ingeniería de software:** programar es escribir código ahora; la ingeniería incluye políticas, prácticas y herramientas para que ese código siga siendo útil y colaborativo.

## Citas (solo breves)

- "Necesitamos ser capaces de cambiar."
- "No es lo mismo que funcione ahora a que funcione indefinidamente."
- "La ingeniería de software es el conjunto de políticas, prácticas y herramientas necesarias para que el código siga siendo útil en el tiempo."

## Mi interpretación

El capítulo obliga a cambiar el criterio de éxito: entregar una solución funcional no es el final, es apenas el comienzo. Lo difícil es sostener la capacidad de cambio sin romper el sistema ni disparar los costos de coordinación. Por eso la ingeniería de software se parece más a gestionar un sistema vivo que a cerrar tareas aisladas.

## Lecciones prácticas

- Evaluar decisiones por mantenibilidad futura, no solo por velocidad de implementación inmediata.
- Diseñar políticas de escalamiento que hagan viable el crecimiento con un número acotado de ingenieros.
- Definir responsabilidades claras entre equipos de producto, infraestructura e integración continua.
- Revisar decisiones técnicas de forma periódica durante la vida útil del sistema.
- Evitar la lógica de autoridad en decisiones críticas: priorizar evidencia, contexto y impacto.

## Preguntas

- ¿Qué partes de nuestro sistema "funcionan hoy" pero no escalarían con más cambios o más equipo?
- ¿Nuestra base de código puede cambiar de forma segura o solo con alto riesgo operativo?
- ¿Las políticas de escalamiento actuales siguen siendo factibles con el tamaño actual de la organización?
- ¿Qué decisiones técnicas deben revisarse este trimestre para evitar deuda estructural?

## Acciones

- [ ] Incluir en cada propuesta técnica una sección explícita de "impacto en mantenibilidad y cambio".
- [ ] Definir un ciclo de revisión de decisiones técnicas críticas (arquitectura, compilación, infraestructura).
- [ ] Añadir en PRs un chequeo: "¿esto funciona ahora o también se puede mantener?".
- [ ] Revisar con infraestructura qué usos críticos están realmente cubiertos por IC.

## Notas relacionadas

- Aprendizajes clave del libro: [Software Engineering at Google - Aprendizajes clave](../../README.es.md#aprendizajes-clave)
- Aplicaciones prácticas del libro: [Software Engineering at Google - Aplicaciones prácticas](../../README.es.md#aplicaciones-prácticas)
- Colaboración de equipo: [02 - Cómo trabajar bien en equipo](02-como-trabajar-bien-en-equipo.es.md)
- Liderazgo y gestión de equipo: [05 - Liderazgo de equipo](05-team-leadership.es.md)

## Ver también

- Formato reutilizable de capítulo: [Plantilla de capítulo](../../../../templates/chapter-template.es.md)
- Flujo y estructura del repositorio: [Dev Notes README en español](../../../../README.es.md)

---

**Navegación**

- Capítulo anterior: Ninguno (inicio del libro)
- Capítulo siguiente: [02 - Cómo trabajar bien en equipo](02-como-trabajar-bien-en-equipo.es.md)
- Notas relacionadas: [README del libro](../../README.es.md), [Capítulo en inglés](../EN/01-introduction.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
