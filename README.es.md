# Dev Notes

> Base de conocimiento bilingüe (español primero) para notas personales sobre libros de ingeniería de software.

[![Idioma principal](https://img.shields.io/badge/Idioma-Español-1f6feb)](README.es.md)
[![Traducción](https://img.shields.io/badge/Translation-English-0e8a16)](README.md)
[![Licencia](https://img.shields.io/badge/License-CC--BY--4.0-f9a825)](LICENSE)

## Portada

### Accesos rápidos

- Ir a este archivo (README en español): [`README.es.md`](README.es.md)
- Cambiar a inglés: [`README.md`](README.md)
- Ver libro de ejemplo (ES): [`books/software-engineering-at-google/README.es.md`](books/software-engineering-at-google/README.es.md)
- Crear nuevas notas desde plantillas: [`templates/`](templates/)

### Navegación interactiva

- [Por qué existe este repositorio](#por-qué-existe-este-repositorio)
- [Índice de libros](#índice-de-libros)
- [Cómo navegar](#cómo-navegar)
- [Cómo usar este repositorio](#cómo-usar-este-repositorio)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Licencia](#licencia)
- [Aviso legal](#aviso-legal)

<details>
<summary><strong>Flujo recomendado (abrir/cerrar)</strong></summary>

1. Entra al libro desde el [Índice de libros](#índice-de-libros).
2. Abre su README para ver la tabla de capítulos.
3. En cada capítulo usa `← Volver al libro`, `↑ Volver al índice` y `🌐 Cambiar idioma`.
4. Usa `Notas relacionadas` y `Ver también` para saltar entre conceptos.

</details>

## Por qué existe este repositorio

Este repositorio existe para convertir notas de lectura en un manual práctico de ingeniería:

- Capturar reflexiones personales, aprendizajes e ideas accionables.
- Mantener los conceptos fáciles de encontrar por libro, capítulo y tema.
- Compartir notas públicamente con una traducción profesional al inglés.
- Construir una referencia de largo plazo que siga siendo útil con el tiempo.

## Política de idioma

- El español es la fuente de verdad.
- El inglés es una traducción limpia y profesional.
- Cada archivo usa un solo idioma.

## Índice de libros

- `software-engineering-at-google`
  - Inglés: [`books/software-engineering-at-google/README.md`](books/software-engineering-at-google/README.md)
  - Español: [`books/software-engineering-at-google/README.es.md`](books/software-engineering-at-google/README.es.md)
- `the-pragmatic-programmer`
  - Inglés: [`books/the-pragmatic-programmer/README.md`](books/the-pragmatic-programmer/README.md)
  - Español: [`books/the-pragmatic-programmer/README.es.md`](books/the-pragmatic-programmer/README.es.md)

## Cómo se organizan las notas

Las notas se organizan en tres niveles:

1. Índice del repositorio (`README.md`, `README.es.md`)
2. Índice por libro (`books/<book-name>/README*.md`)
3. Notas por capítulo (`books/<book-name>/chapters/ES/*.es.md` y `books/<book-name>/chapters/EN/*.md`)

Cada capítulo incluye navegación superior e inferior, cambio de idioma y enlaces cruzados.

## Estructura del repositorio

```text
.
├── LICENSE
├── README.es.md
├── README.md
├── books/
│   ├── software-engineering-at-google/
│   │   ├── README.es.md
│   │   ├── README.md
│   │   └── chapters/
│   │       ├── EN/
│   │       │   ├── 01-introduction.md
│   │       │   └── 05-team-leadership.md
│   │       └── ES/
│   │           ├── 01-introduction.es.md
│   │           └── 05-team-leadership.es.md
│   └── the-pragmatic-programmer/
│       ├── README.es.md
│       ├── README.md
│       └── chapters/
│           ├── EN/
│           │   ├── 00-preface.md
│           │   └── 01-a-pragmatic-philosophy.md
│           └── ES/
│               ├── 00-prefacio.es.md
│               └── 01-una-filosofia-pragmatica.es.md
└── templates/
    ├── book-template.es.md
    ├── book-template.md
    ├── chapter-template.es.md
    └── chapter-template.md
```

## Cómo navegar

Usa esta ruta para navegar rápido:

1. Empieza desde el índice de libros en este archivo.
2. Abre el README de un libro para ver la tabla de contenidos por capítulos.
3. Abre un capítulo y usa:
   - `← Volver al libro`
   - `↑ Volver al índice`
   - `🌐 Cambiar idioma`
4. Muévete entre capítulos desde la navegación inferior:
   - `Capítulo anterior`
   - `Capítulo siguiente`
   - `Notas relacionadas`

## Cómo usar este repositorio

- Usa las plantillas en `templates/` para agregar libros y capítulos.
- Actualiza primero los archivos en español y después traduce al inglés.
- Agrega citas breves y acciones prácticas.
- Mantén enlaces cruzados entre conceptos relacionados.

## Licencia

Este proyecto está licenciado bajo Creative Commons Attribution 4.0 International (CC BY 4.0).

Consulta [`LICENSE`](LICENSE).

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves y se incluyen con fines educativos.
