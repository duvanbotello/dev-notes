[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/04-pragmatic-paranoia.md)

# 04 - Paranoia pragmática

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

No podemos escribir software perfecto, así que debemos diseñar defensas contra nuestros propios errores. La paranoia pragmática propone validar supuestos, definir contratos claros y detener la ejecución cuando aparece algo imposible, porque un sistema corrupto hace más daño que un sistema que falla rápido.

## Conceptos clave

- **No confiar ciegamente ni en uno mismo:** incluso un buen criterio técnico comete errores.
- **Programa correcto:** no hace ni más ni menos de lo que afirma hacer.
- **Diseño por contrato (DBC):** explicitar precondiciones, postcondiciones e invariantes para blindar comportamiento.
- **Programas muertos no mienten:** si aparece un estado imposible, terminar pronto evita propagar corrupción.
- **Programación asertiva:** cada vez que pensemos "eso nunca podría ocurrir", agregar una verificación explícita.
- **Acabar lo que empezamos:** quien reserva un recurso también debe liberarlo para mantener equilibrio del sistema.
- **Anidar asignaciones y liberaciones:** mantener simetría reduce fugas de memoria y errores de limpieza.
- **Excepciones con criterio:** no usar excepciones como parche general; medir límites con contratos y equilibrio.
- **Comprobar siempre:** si no confiamos en nadie, validamos entradas, estado y resultados.
- **Pasos pequeños con feedback:** avanzar por incrementos reduce riesgo y permite ajustar antes de escalar.
- **Tarea demasiado grande:** cualquier tarea que dependa de adivinación en lugar de evidencia.
- **Cisnes negros:** asumir que habrá eventos inesperados y preparar sistemas resilientes.

## Citas (solo breves)

- "Los programas muertos no mienten." - Idea central del capítulo
- "Si piensas 'eso nunca podría ocurrir', añade una comprobación." - Práctica recomendada del capítulo

## Mi interpretación

Este capítulo me aterriza una disciplina concreta: la calidad no nace de confiar en que todo saldrá bien, sino de suponer que algo saldrá mal y preparar defensas desde el diseño. Lo más valioso es la combinación de contratos, aserciones y limpieza de recursos para evitar que un error aislado se convierta en una cascada de fallos.

## Lecciones prácticas

- Diseñar contratos obliga a definir claramente qué promete cada función u objeto.
- Fallar rápido ante estados imposibles protege más que intentar continuar con datos corruptos.
- Las aserciones funcionan como alarmas tempranas durante desarrollo y pruebas.
- La disciplina de liberar recursos en el mismo flujo donde se asignan evita errores difíciles de rastrear.
- Dividir trabajo en pasos pequeños mejora aprendizaje, feedback y ajuste continuo.

## Preguntas

- ¿Qué supuestos de mi código no están explícitos todavía en contratos o aserciones?
- ¿En qué partes del sistema estoy tolerando estados inválidos "por si acaso"?
- ¿Tengo simetría real entre asignación y liberación de recursos críticos?
- ¿Qué tarea actual es demasiado grande porque depende de adivinar en vez de validar?

## Acciones

- [ ] Definir contratos (precondiciones, postcondiciones e invariantes) en un módulo crítico.
- [ ] Agregar aserciones en puntos donde hoy asumo que "esto nunca pasa".
- [ ] Revisar un flujo de manejo de recursos para garantizar asignación/liberación simétrica.
- [ ] Marcar estados imposibles y configurar fallo rápido en esos casos.
- [ ] Dividir una tarea grande actual en incrementos con revisión y feedback en cada paso.

## Notas relacionadas

- Capítulo 2: [02 - Un enfoque pragmático](02-un-enfoque-pragmatico.es.md)
- Revisión de código: [09 - Revisión de código](../../../software-engineering-at-google/chapters/ES/09-revision-de-codigo.es.md)
- Índice del libro: [The Pragmatic Programmer - README.es](../../README.es.md)

## Ver también

- Plantilla de capítulo: [chapter-template.es.md](../../../../templates/chapter-template.es.md)
- Índice del repositorio: [README.es.md](../../../../README.es.md)

---

**Navegación**

- Capítulo anterior: [02 - Un enfoque pragmático](02-un-enfoque-pragmatico.es.md)
- Capítulo siguiente: [05 - Doblar o romper](05-doblar-o-romper.es.md)
- Notas relacionadas: [README del libro](../../README.es.md), [Versión en inglés](../EN/04-pragmatic-paranoia.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
