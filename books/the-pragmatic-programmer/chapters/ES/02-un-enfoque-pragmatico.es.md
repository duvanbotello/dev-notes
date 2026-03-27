[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/02-a-pragmatic-approach.md)

# 02 - Un enfoque pragmático

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

Un enfoque pragmático reduce riesgo con aprendizaje temprano: diseña sistemas ortogonales para cambiar sin romper, usa balas trazadoras para validar integración de extremo a extremo, prototipa para explorar rápido y estima con criterio para evitar sorpresas.

## Conceptos clave

- **Beneficio de la ortogonalidad:** mejora control, mantenibilidad y velocidad de cambio.
- **Costo del acoplamiento:** en sistemas no ortogonales, una decisión local impacta múltiples partes.
- **Aislamiento por interfaces:** si las interfaces externas se mantienen estables, un componente puede evolucionar con menos riesgo.
- **Balas trazadoras:** implementar un camino delgado, funcional y de extremo a extremo para obtener feedback temprano de integración.
- **Balas trazadoras vs. prototipos:** la bala trazadora busca evolucionar sobre código real; el prototipo explora ideas y se desecha.
- **Prototipos de alto valor:** arquitectura, nueva funcionalidad sobre sistemas existentes, estructura o contenido de datos externos, componentes de terceros, rendimiento y diseño de interfaz.
- **Prototipo explícitamente desechable:** debe quedar claro para todos que está incompleto y no se convierte en base de producción.
- **Lenguaje del dominio:** el vocabulario del problema puede sugerir directamente una solución de programación.
- **Estimación como gestión de riesgo:** estimar no adivina el futuro, pero reduce sorpresas y mejora conversaciones.
- **Exactitud suficiente:** antes de estimar, preguntar si necesitan precisión alta o una cifra aproximada.
- **Qué decir al pedirte una estimación:** evitar respuestas improvisadas; tomar tiempo para pensar y responder con más contexto.

## Citas (solo breves)

- "Nada es más peligroso que una idea si es la única que tienes."
- "En vez de grabar decisiones en piedra, escríbelas en la arena de la playa."

## Mi interpretación

Este capítulo me deja una idea práctica: no todo se resuelve construyendo más rápido, muchas veces se resuelve aprendiendo antes. Por eso combiné tres hábitos: desacoplar para cambiar con seguridad, prototipar para explorar sin autoengaño y estimar con pausa para no comprometer fechas desde la intuición.

## Lecciones prácticas

- Cada línea de código puede subir o bajar el acoplamiento: hay que revisar ese impacto de forma intencional.
- Si uso una bala trazadora, debo cubrir flujo real de extremo a extremo, no solo una maqueta técnica aislada.
- Si hago un prototipo, debo etiquetarlo como desechable para evitar que termine en producción por presión de tiempo.
- En estimaciones, primero defino nivel de precisión requerido y luego el horizonte temporal correcto (horas, días, semanas o meses).
- Una estimación pensada con calma vale más que una cifra rápida dada "junto a la máquina de café".

## Preguntas

- ¿Qué partes de mi sistema cambian juntas por diseño deficiente y no por necesidad real?
- ¿Estoy usando una bala trazadora cuando necesito integración real, o un prototipo cuando solo necesito explorar?
- ¿Quedó explícito para el equipo qué código es desechable y qué código evoluciona a producción?
- ¿Estoy pidiendo el nivel correcto de precisión antes de comprometer una estimación?

## Acciones

- [ ] Revisar un módulo actual e identificar acoplamientos innecesarios entre componentes.
- [ ] Diseñar una bala trazadora para validar un flujo crítico de extremo a extremo esta semana.
- [ ] Preparar un prototipo de arquitectura o rendimiento y marcar explícitamente su carácter desechable.
- [ ] Definir una plantilla corta de estimación con rango, supuestos y nivel de precisión requerido.
- [ ] Evitar comprometer estimaciones instantáneas: responder siempre después de una breve reflexión.

## Notas relacionadas

- Capítulo 1: [01 - Una filosofía pragmática](01-una-filosofia-pragmatica.es.md)
- Prefacio: [00 - Prefacio (primera edición)](00-prefacio.es.md)
- Revisión de código: [09 - Revisión de código](../../../software-engineering-at-google/chapters/ES/09-revision-de-codigo.es.md)
- Índice del libro: [The Pragmatic Programmer - README.es](../../README.es.md)

## Ver también

- Plantilla de capítulo: [chapter-template.es.md](../../../../templates/chapter-template.es.md)
- Índice del repositorio: [README.es.md](../../../../README.es.md)

---

**Navegación**

- Capítulo anterior: [01 - Una filosofía pragmática](01-una-filosofia-pragmatica.es.md)
- Capítulo siguiente: Pendiente
- Notas relacionadas: [README del libro](../../README.es.md), [Versión en inglés](../EN/02-a-pragmatic-approach.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
