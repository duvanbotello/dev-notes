[← Volver al libro](../../README.es.md) | [↑ Volver al índice](../../../../README.es.md) | [🌐 Cambiar idioma](../EN/09-pragmatic-projects.md)

# 09 - Proyectos pragmáticos

> Navegación rápida: [Idea central](#idea-central) · [Conceptos clave](#conceptos-clave) · [Acciones](#acciones) · [Notas relacionadas](#notas-relacionadas)

## Idea central

Los proyectos pragmáticos no dependen de rituales ni de modas: dependen de equipos pequeños, responsables y cohesionados que aprenden de forma continua, automatizan su trabajo, prueban de manera temprana y sistemática, y adaptan sus prácticas al contexto real del negocio para entregar valor cuando el usuario lo necesita.

## Conceptos clave

- **Equipos pragmáticos y tamaño efectivo:** los equipos técnicos suelen reunir perfiles inteligentes, tenaces, obstinados e independientes; para coordinar mejor esa energía, el equipo debe mantenerse pequeño (idealmente menos de 10-12 personas) y escalar con criterio.
- **Cero tolerancia a "ventanas rotas":** pequeñas imperfecciones no atendidas se acumulan y normalizan mediocridad; el equipo completo asume la responsabilidad de la calidad del producto.
- **Inversión continua en conocimiento:** el éxito sostenido exige tiempo explícito para mejorar habilidades, observar qué funciona y qué no, y cambiar en consecuencia.
- **No solo apagar incendios:** muchos equipos pasan el tiempo "achicando agua"; la mejora real exige programar y reparar la fuga de raíz.
- **Adopción tecnológica con criterio:** no adoptar tecnologías, frameworks o bibliotecas solo porque están de moda; evaluar candidatas con prototipos y reservar tareas en agenda para experimentar y medir resultados.
- **Hablar con una sola voz:** los equipos fuertes proyectan coherencia hacia otros equipos y desarrollan una personalidad técnica clara, incluso con sentido del humor.
- **Trabajo sin fisuras:** si hay que esperar una reunión semanal para preguntar o compartir estado, hay una grieta grave; preguntar, reportar progreso, compartir problemas, opiniones y aprendizajes debe ser fácil y sin ceremonias pesadas.
- **Automatizar todo lo repetible:** la forma más efectiva de mantener coherencia y exactitud en el equipo es automatizar al máximo los procesos operativos.
- **Equipo = individuos que brillan:** se necesita estructura suficiente para apoyar a cada persona, permitir su crecimiento individual y, al mismo tiempo, asegurar entrega de valor.
- **Hacer lo que funciona, no lo que está de moda:** no existe metodología única; conviene tomar lo mejor de cada enfoque y adaptarlo al contexto del proyecto y del negocio.
- **Contexto sobre imitación:** "operar como Netflix" no tiene sentido si no existe escala equivalente de infraestructura y usuarios; las prácticas deben ajustarse a la realidad propia.
- **Entrega orientada al usuario:** se entrega cuando el usuario lo necesita, no cuando el proceso interno "se siente terminado".
- **Probar pronto, probar seguido y probar de forma automática:** encontrar fallos temprano evita costos y vergüenza futura; invertir en pruebas termina siendo más barato en el largo plazo.
- **Definición estricta de terminado:** el código no está acabado hasta ejecutar todas las pruebas; como mínimo: pruebas unitarias, pruebas de integración, validación y verificación, y pruebas de rendimiento. Ese mínimo es obligatorio.
- **Integración después de validar módulos:** cuando cada módulo pasa sus pruebas individuales, se habilitan pruebas de integración para validar el comportamiento conjunto.
- **Rendimiento en condiciones reales:** no basta con que "funcione"; hay que comprobar si cumple requisitos de rendimiento en escenarios del mundo real.
- **Validar que la prueba realmente detecta fallos:** al crear una prueba para un bug específico, hay que provocar el fallo intencionalmente y confirmar que la prueba lo captura.
- **Un bug humano, una automatización permanente:** si un probador humano detecta un fallo, debe ser la última vez manualmente; desde ese momento, una prueba automatizada lo debe verificar siempre, sin excepciones.
- **Tiempo para crear valor nuevo y menos defectos:** automatizar regresiones evita gastar energía en perseguir fallos repetidos, permite enfocarse en código nuevo y acerca al objetivo de productos con casi cero defectos.
- **Objetivo ético del producto:** el objetivo es deleitar a los usuarios; no extraer datos, inflar métricas vacías o vaciar sus carteras.
- **Visión transversal del desarrollador:** quienes ven múltiples áreas de la organización suelen conectar piezas del negocio que no son evidentes para departamentos aislados.
- **Responsabilidad profesional explícita:** los programadores pragmáticos no evaden responsabilidad; aceptan retos y construyen diseño y código del que puedan sentirse orgullosos.

## Citas (solo breves)

- "Los programadores se parecen un poco a los gatos: inteligentes, tenaces, obstinados e independientes." - Idea del capítulo
- "Haga lo que funcione, no lo que esté de moda." - Principio del capítulo
- "El código no está acabado hasta que no se ejecuten todas las pruebas." - Regla central del capítulo

## Mi interpretación

Este capítulo me aterriza una idea muy directa: la calidad no sale de un héroe individual, sale de hábitos de equipo. Si no cuidamos cómo aprendemos, cómo decidimos y cómo validamos, bajo presión vamos a fallar. Lo que más me queda es la definición estricta de "acabado" (unitarias, integración, validación/verificación y rendimiento) y la disciplina de convertir cada bug humano en una prueba automática permanente.

## Lecciones prácticas

- Cuidar el tamaño del equipo para que la comunicación sea rápida y la responsabilidad realmente compartida.
- Reservar tiempo visible en agenda para evaluar tecnologías candidatas con prototipos y evidencia.
- Automatizar trabajo operativo y de calidad para reducir fricción y errores repetibles.
- Tratar como regla de entrega que ningún cambio está "terminado" sin pruebas mínimas (unitarias, integración, validación/verificación y rendimiento), sin excepciones.
- Convertir cada fallo detectado manualmente en una prueba automatizada de regresión.
- Elegir prácticas por efectividad en el contexto del proyecto, no por prestigio externo o tendencia.
- Mantener el foco en deleitar al usuario, evitando métricas vanidosas como criterio principal.

## Preguntas

- ¿Nuestro equipo actual es lo suficientemente pequeño para coordinarse sin burocracia excesiva?
- ¿Qué "ventanas rotas" estamos tolerando hoy y por qué no las hemos corregido?
- ¿Tenemos tiempo explícito para reparar fugas sistémicas o solo respondemos urgencias?
- ¿Qué tecnologías adoptamos por moda y no por evidencia contextual?
- ¿Qué tan automática es nuestra cadena de pruebas y qué tipo de fallos aún dependen de detección manual?
- ¿Estamos verificando rendimiento en escenarios reales o solo en entornos ideales?

## Acciones

- [ ] Auditar el tamaño, la estructura y los canales de comunicación del equipo para reducir fricción.
- [ ] Crear un backlog de "ventanas rotas" técnicas y cerrarlo de forma iterativa con responsables claros.
- [ ] Bloquear tiempo quincenal para prototipos de tecnologías candidatas y análisis de resultados.
- [ ] Automatizar tareas repetitivas de build, pruebas, validación y reporte de calidad.
- [ ] Formalizar una checklist de "definición de terminado" con pruebas unitarias, integración, validación/verificación y rendimiento como mínimo obligatorio.
- [ ] Para cada bug detectado manualmente, agregar de inmediato una prueba automatizada de regresión.
- [ ] Incluir pruebas de rendimiento con datos y cargas representativas del mundo real.
- [ ] Revisar una práctica de metodología actual y adaptarla explícitamente al contexto del negocio.

## Notas relacionadas

- Capítulo 1: [01 - Una filosofía pragmática](01-una-filosofia-pragmatica.es.md)
- Capítulo 4: [04 - Paranoia pragmática](04-paranoia-pragmatica.es.md)
- Capítulo 7: [07 - Mientras escribe código](07-mientras-escribe-codigo.es.md)
- Capítulo 8: [08 - Antes del proyecto](08-antes-del-proyecto.es.md)
- Trabajo en equipo: [02 - Cómo trabajar bien en equipo](../../../software-engineering-at-google/chapters/ES/02-como-trabajar-bien-en-equipo.es.md)

## Ver también

- Índice global de conceptos: [docs/concepts-index.es.md](../../../../docs/concepts-index.es.md)
- Rutas de lectura: [docs/reading-paths.es.md](../../../../docs/reading-paths.es.md)

---

**Navegación**

- Capítulo anterior: [08 - Antes del proyecto](08-antes-del-proyecto.es.md)
- Capítulo siguiente: [10 - Postfacio](10-postfacio.es.md)
- Notas relacionadas: [README del libro](../../README.es.md), [Versión en inglés](../EN/09-pragmatic-projects.md)

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
