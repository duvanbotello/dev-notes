[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/06-concurrency.md)

# 06 - Concurrencia

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

La concurrencia no es una moda ni un detalle técnico aislado: es una forma de modelar mejor sistemas que viven en un mundo asíncrono. El capítulo diferencia concurrencia de paralelismo y enfatiza que el reto real no es lanzar más hilos, sino gestionar correctamente estado compartido, coordinación y orden temporal.

## Conceptos clave

- **Concurrencia vs. paralelismo:** concurrencia es estructura de software; paralelismo es ejecución simultánea habilitada por hardware.
- **Concurrencia "aparente":** dos o más porciones de código progresan como si fueran al mismo tiempo, aunque se alternen por planificación.
- **Paralelismo real:** ocurre cuando múltiples núcleos, CPUs o máquinas ejecutan trabajo simultáneamente.
- **Acoplamiento temporal:** imponer orden rígido donde el problema no lo exige vuelve el diseño más frágil.
- **Romper acoplamiento temporal:** separar tareas independientes permite reaccionar mejor a eventos del mundo real.
- **Identificar concurrencia es fácil; implementarla bien no:** la dificultad aparece al coordinar recursos compartidos.
- **Estado compartido como riesgo central:** condiciones de carrera, interbloqueos, inanición y visibilidad inconsistente son fallos típicos.
- **Sincronización y exclusión mutua:** semáforos, bloqueos y estructuras thread-safe ayudan, pero deben usarse con disciplina.
- **Transacciones sobre múltiples recursos:** cuando una operación toca varios recursos, la consistencia se vuelve más compleja.
- **Actores y procesos como estrategia válida:** encapsulan estado y se comunican por mensajes para reducir acoplamiento directo.
- **Sin concurrencia explícita:** colas, runtimes y frameworks pueden ocultar parte de la coordinación, pero no eliminan los riesgos de diseño.
- **Pizarras y flujos de eventos:** patrones tipo blackboard o plataformas como Kafka ayudan a desacoplar productores y consumidores.

## Citas (solo breves)

- "Concurrencia es un requisito para lidiar con el mundo real asíncrono." - Idea central del capítulo
- "Concurrencia es mecanismo de software; paralelismo, cuestión de hardware." - Distinción clave

## Mi interpretación

Me queda claro que "hacer concurrencia" no significa crear hilos por crear. El valor está en desacoplar temporalmente el sistema y controlar el estado compartido con reglas explícitas. Sobre actores y procesos: no son una bala de plata, pero sí siguen siendo útiles cuando queremos aislar estado y coordinar por mensajes en sistemas distribuidos o altamente asíncronos.

## Lecciones prácticas

- Antes de paralelizar, aclarar si el problema requiere concurrencia estructural o solo más capacidad de cómputo.
- Minimizar estado mutable compartido reduce gran parte de los errores de concurrencia.
- Preferir paso de mensajes o colas en límites de servicio puede simplificar coordinación.
- Si se usan locks/semaforos, definir orden de adquisición y tiempo de vida para evitar interbloqueos.
- Probar escenarios de carrera y carga es obligatorio: muchos fallos no aparecen en pruebas "felices".

## Preguntas

- ¿Qué flujos de mi sistema están acoplados por tiempo sin necesidad real?
- ¿Dónde tengo estado compartido que podría encapsularse o particionarse?
- ¿Qué partes se beneficiarían de mensajería asíncrona en lugar de llamadas síncronas directas?
- ¿Tengo pruebas específicas para detectar condiciones de carrera y bloqueos?

## Acciones

- [ ] Mapear un flujo crítico e identificar dependencias temporales innecesarias.
- [ ] Reducir un punto de estado compartido mutable en un módulo actual.
- [ ] Definir una estrategia de sincronización explícita (locks, semáforos o colas) para una sección crítica.
- [ ] Diseñar una prueba de estrés orientada a detectar condiciones de carrera.
- [ ] Evaluar en un caso real si actor/proceso o pub/sub reduce acoplamiento respecto al diseño actual.

## Notas relacionadas

- Capítulo 5: [05 - Doblar o romper](05-doblar-o-romper.es.md)
- Capítulo 4: [04 - Paranoia pragmática](04-paranoia-pragmatica.es.md)
- Revisión de código: [09 - Revisión de código](../../../software-engineering-at-google/chapters/ES/09-revision-de-codigo.es.md)
- Índice del libro: [The Pragmatic Programmer - README.es](../../README.es.md)

## Ver también

- Plantilla de capítulo: [chapter-template.es.md](../../../../templates/chapter-template.es.md)
- Índice del repositorio: [README.es.md](../../../../README.es.md)

---

**Navegación**

- Capítulo anterior: [05 - Doblar o romper](05-doblar-o-romper.es.md)
- Capítulo siguiente: [07 - Mientras escribe código](07-mientras-escribe-codigo.es.md)
- Notas relacionadas: [README del libro](../../README.es.md), [Versión en inglés](../EN/06-concurrency.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
