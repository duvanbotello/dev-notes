# The Pragmatic Programmer (El Programador Pragmático)

[![Idioma](https://img.shields.io/badge/Idioma-Español-1f6feb)](README.es.md)
[![English](https://img.shields.io/badge/EN-Disponible-0e8a16)](README.md)
[![Capítulos](https://img.shields.io/badge/Capítulos-7-f9a825)](#capítulos)
[![Estado](https://img.shields.io/badge/Estado-Leyendo-6f42c1)](#metadatos)

## Portal de idioma

Elige cómo quieres leer este libro:

- Español: [`README.es.md`](README.es.md)
- English: [`README.md`](README.md)

## Metadatos

- Título: The Pragmatic Programmer (El Programador Pragmático)
- Autor: No especificado en estas notas
- Estado: leyendo
- Idioma: Español

## Navegación

- Versión en inglés: [README.md](README.md)
- Volver al índice del repositorio: [../../README.es.md](../../README.es.md)

## Navegación rápida

- 📘 [Capítulos](#capítulos)
- 🎯 [Aprendizajes clave](#aprendizajes-clave)
- 🧪 [Aplicaciones prácticas](#aplicaciones-prácticas)
- 🔗 [Libros relacionados](#libros-relacionados)
- 🌐 [Cambiar a inglés](README.md)
- ⬆️ [Volver al índice del repositorio](../../README.es.md)

<details>
<summary><strong>Mapa rápido del libro (abrir/cerrar)</strong></summary>

| Capítulo | Tema central | ES | EN |
|---|---|---|---|
| 00 | Prefacio (primera edición) | [Abrir](chapters/ES/00-prefacio.es.md) | [Open](chapters/EN/00-preface.md) |
| 01 | Una filosofía pragmática | [Abrir](chapters/ES/01-una-filosofia-pragmatica.es.md) | [Open](chapters/EN/01-a-pragmatic-philosophy.md) |
| 02 | Un enfoque pragmático | [Abrir](chapters/ES/02-un-enfoque-pragmatico.es.md) | [Open](chapters/EN/02-a-pragmatic-approach.md) |
| 04 | Paranoia pragmática | [Abrir](chapters/ES/04-paranoia-pragmatica.es.md) | [Open](chapters/EN/04-pragmatic-paranoia.md) |
| 05 | Doblar o romper | [Abrir](chapters/ES/05-doblar-o-romper.es.md) | [Open](chapters/EN/05-bend-or-break.md) |
| 06 | Concurrencia | [Abrir](chapters/ES/06-concurrencia.es.md) | [Open](chapters/EN/06-concurrency.md) |
| 07 | Mientras escribe código | [Abrir](chapters/ES/07-mientras-escribe-codigo.es.md) | [Open](chapters/EN/07-while-you-are-coding.md) |

</details>

## Temas principales

- Responsabilidad profesional sin excusas
- Calidad sostenible y cuidado del código
- Ortogonalidad y desacoplamiento para cambiar con menos riesgo
- Crecimiento continuo y pensamiento crítico
- Comunicación efectiva en equipos técnicos

## Por qué importa este libro

Estas notas aterrizan una idea simple pero exigente: programar bien no es solo entregar funcionalidad, sino asumir consecuencias, cuidar el entorno técnico y trabajar con intención.

## Capítulos

- [00 - Prefacio (primera edición)](chapters/ES/00-prefacio.es.md) | [EN](chapters/EN/00-preface.md)
- [01 - Una filosofía pragmática](chapters/ES/01-una-filosofia-pragmatica.es.md) | [EN](chapters/EN/01-a-pragmatic-philosophy.md)
- [02 - Un enfoque pragmático](chapters/ES/02-un-enfoque-pragmatico.es.md) | [EN](chapters/EN/02-a-pragmatic-approach.md)
- [04 - Paranoia pragmática](chapters/ES/04-paranoia-pragmatica.es.md) | [EN](chapters/EN/04-pragmatic-paranoia.md)
- [05 - Doblar o romper](chapters/ES/05-doblar-o-romper.es.md) | [EN](chapters/EN/05-bend-or-break.md)
- [06 - Concurrencia](chapters/ES/06-concurrencia.es.md) | [EN](chapters/EN/06-concurrency.md)
- [07 - Mientras escribe código](chapters/ES/07-mientras-escribe-codigo.es.md) | [EN](chapters/EN/07-while-you-are-coding.md)

## Aprendizajes clave

### Capítulo 0 - Prefacio (primera edición)

- No tiene sentido desarrollar software sin compromiso real con hacerlo bien.

### Capítulo 1 - Una filosofía pragmática

- La responsabilidad personal reduce fricción y acelera soluciones.
- El desorden técnico crece si no se corrige temprano.
- Aprender de forma constante y diversa protege la carrera.
- Comunicar bien también es parte del trabajo de ingeniería.

### Capítulo 2 - Un enfoque pragmático

- La ortogonalidad facilita cambiar un componente sin generar impactos colaterales.
- Las balas trazadoras validan integración de extremo a extremo desde temprano y reducen incertidumbre técnica.
- Los prototipos son útiles para explorar arquitectura, rendimiento o UX, pero deben declararse como desechables.
- En estimaciones, primero hay que acordar el nivel de exactitud requerido antes de comprometer una fecha.

### Capítulo 4 - Paranoia pragmática

- No escribimos software perfecto: por eso hay que diseñar defensas contra errores propios.
- Un programa correcto cumple exactamente su contrato: ni más ni menos.
- Ante estados imposibles, fallar rápido protege más que continuar con corrupción silenciosa.
- La combinación de contratos, aserciones y validaciones continuas reduce fallos evitables.
- Una tarea es demasiado grande cuando obliga a adivinar en lugar de validar por pasos.

### Capítulo 5 - Doblar o romper

- El acoplamiento innecesario bloquea cambios y acelera la obsolescencia del código.
- Para software flexible, cada componente debe depender de la menor cantidad posible de otros.
- Datos globales y jerarquías de herencia profundas suelen aumentar fragilidad técnica.
- Eventos, FSM y pub/sub ayudan a desacoplar flujos asíncronos y facilitan la evolución.
- Interfaces, delegación, mixins y traits son alternativas útiles para evitar "impuestos" de herencia.

### Capítulo 6 - Concurrencia

- La concurrencia organiza software para sistemas asíncronos; el paralelismo depende del hardware.
- El problema principal no es crear hilos, sino controlar estado compartido y coordinación temporal.
- El acoplamiento temporal innecesario vuelve el diseño más rígido y difícil de evolucionar.
- Actores, procesos, colas y pub/sub son estrategias válidas para reducir dependencia directa entre componentes.
- La calidad en concurrencia exige pruebas orientadas a carreras, bloqueos y escenarios de carga.

### Capítulo 7 - Mientras escribe código

- Programar deliberadamente evita depender de casualidades y mejora el criterio técnico.
- Refactorizar en cambios pequeños, guiados por pruebas, mantiene el código flexible y seguro.
- Las pruebas no solo detectan fallos: entregan feedback temprano sobre diseño y comportamiento.
- La seguridad debe incluirse desde el desarrollo: mínima superficie de ataque, mínimo privilegio y cifrado de datos sensibles.
- Poner buenos nombres y corregirlos a tiempo mejora comprensión, mantenimiento y evolución del sistema.

## Ideas favoritas

- Enfocarse en soluciones, no en excusas.
- Preguntar con frecuencia: "¿Hay algo en lo que pueda ayudarte?".

## Aplicaciones prácticas

### Capítulo 0 - Prefacio (primera edición)

- Acordar criterios mínimos de calidad antes de iniciar nuevas entregas.

### Capítulo 1 - Una filosofía pragmática

- Revisar "ventanas rotas" del código en cada iteración.
- Definir una cartera de conocimiento con aprendizaje semanal.
- Antes de adoptar una idea, evaluar contexto, beneficiarios y límites.

### Capítulo 2 - Un enfoque pragmático

- Evitar datos globales y acoplamientos innecesarios entre módulos.
- Diseñar una bala trazadora para validar temprano el flujo crítico del sistema.
- Usar prototipos explícitamente desechables para explorar decisiones de arquitectura o rendimiento.
- Definir estimaciones con rango, supuestos y nivel de exactitud solicitado por quien decide.

### Capítulo 4 - Paranoia pragmática

- Definir precondiciones, postcondiciones e invariantes en módulos críticos.
- Añadir aserciones en puntos donde hoy asumimos que "eso nunca pasa".
- Configurar fallo rápido cuando aparezcan estados imposibles.
- Revisar asignación y liberación de recursos para asegurar simetría y limpieza.
- Dividir tareas grandes en incrementos cortos con feedback temprano.

### Capítulo 5 - Doblar o romper

- Auditar acoplamientos fuertes y separar responsabilidades que hoy cambian en bloque.
- Encapsular datos globales detrás de APIs o interfaces con límites explícitos.
- Modelar flujos complejos con máquinas de estado finitas para controlar transiciones.
- Implementar pub/sub en eventos asíncronos donde se necesite extender consumidores sin impacto alto.
- Revisar subclases existentes para migrar casos adecuados hacia composición o delegación.

### Capítulo 6 - Concurrencia

- Identificar flujos con acoplamiento temporal y separar tareas que pueden progresar de forma independiente.
- Reducir estado mutable compartido en módulos críticos antes de escalar la concurrencia.
- Definir políticas explícitas de sincronización para secciones críticas y accesos multi-recurso.
- Introducir mensajería asíncrona donde ayude a desacoplar productores y consumidores.
- Crear pruebas de estrés para detectar condiciones de carrera, interbloqueos e inanición.

### Capítulo 7 - Mientras escribe código

- Convertir dudas de implementación en pruebas y experimentos antes de escalar complejidad.
- Medir complejidad algorítmica en flujos críticos y optimizar solo ante cuellos de botella confirmados.
- Incorporar refactorizaciones pequeñas y frecuentes en el ciclo normal de entrega.
- Fortalecer suite de pruebas unitarias, de contrato y de casos borde para evitar que el usuario final "pruebe" por nosotros.
- Auditar rutas de datos sensibles, secretos y niveles de privilegio en componentes críticos.

## Libros relacionados

- Software Engineering at Google

## Reflexiones personales

Este libro me recuerda que la excelencia técnica no aparece por accidente: es una suma de hábitos pequeños, decisiones conscientes y comunicación honesta.

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a autores y editoriales originales.
- Las citas son breves, se atribuyen cuando es posible y se usan con fines educativos.
- Este repositorio no republica capítulos completos ni extractos sustanciales con copyright.
