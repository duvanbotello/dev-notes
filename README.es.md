# Dev Notes

> Base de conocimiento bilingue (espanol primero) para notas personales sobre libros de ingenieria de software.

[![Idioma principal](https://img.shields.io/badge/Idioma-Espanol-1f6feb)](README.es.md)
[![Traduccion](https://img.shields.io/badge/Translation-English-0e8a16)](README.md)
[![Licencia](https://img.shields.io/badge/License-CC--BY--4.0-f9a825)](LICENSE)

## Portada

### Accesos rapidos

- Ir a este archivo (README en espanol): [`README.es.md`](README.es.md)
- Cambiar a ingles: [`README.md`](README.md)
- Ver libro de ejemplo (ES): [`books/software-engineering-at-google/README.es.md`](books/software-engineering-at-google/README.es.md)
- Crear nuevas notas desde plantillas: [`templates/`](templates/)

### Navegacion interactiva

- [Por que existe este repositorio](#por-que-existe-este-repositorio)
- [Indice de libros](#indice-de-libros)
- [Como navegar](#como-navegar)
- [Como usar este repositorio](#como-usar-este-repositorio)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Licencia](#licencia)
- [Aviso legal](#aviso-legal)

<details>
<summary><strong>Flujo recomendado (abrir/cerrar)</strong></summary>

1. Entra al libro desde el [Indice de libros](#indice-de-libros).
2. Abre su README para ver la tabla de capitulos.
3. En cada capitulo usa `← Volver al libro`, `↑ Volver al indice` y `🌐 Cambiar idioma`.
4. Usa `Notas relacionadas` y `Ver tambien` para saltar entre conceptos.

</details>

## Por que existe este repositorio

Este repositorio existe para convertir notas de lectura en un manual practico de ingenieria:

- Capturar reflexiones personales, aprendizajes e ideas accionables.
- Mantener los conceptos faciles de encontrar por libro, capitulo y tema.
- Compartir notas publicamente con una traduccion profesional al ingles.
- Construir una referencia de largo plazo que siga siendo util con el tiempo.

## Politica de idioma

- El espanol es la fuente de verdad.
- El ingles es una traduccion limpia y profesional.
- Cada archivo usa un solo idioma.

## Indice de libros

- `software-engineering-at-google`
  - Ingles: [`books/software-engineering-at-google/README.md`](books/software-engineering-at-google/README.md)
  - Espanol: [`books/software-engineering-at-google/README.es.md`](books/software-engineering-at-google/README.es.md)

## Como se organizan las notas

Las notas se organizan en tres niveles:

1. Indice del repositorio (`README.md`, `README.es.md`)
2. Indice por libro (`books/<book-name>/README*.md`)
3. Notas por capitulo (`books/<book-name>/chapters/*.md`)

Cada capitulo incluye navegacion superior e inferior, cambio de idioma y enlaces cruzados.

## Estructura del repositorio

```text
.
├── LICENSE
├── README.es.md
├── README.md
├── books/
│   └── software-engineering-at-google/
│       ├── README.es.md
│       ├── README.md
│       └── chapters/
│           ├── 01-introduction.es.md
│           └── 01-introduction.md
└── templates/
    ├── book-template.es.md
    ├── book-template.md
    ├── chapter-template.es.md
    └── chapter-template.md
```

## Como navegar

Usa esta ruta para navegar rapido:

1. Empieza desde el indice de libros en este archivo.
2. Abre el README de un libro para ver la tabla de contenidos por capitulos.
3. Abre un capitulo y usa:
   - `← Volver al libro`
   - `↑ Volver al indice`
   - `🌐 Cambiar idioma`
4. Muevete entre capitulos desde la navegacion inferior:
   - `Capitulo anterior`
   - `Capitulo siguiente`
   - `Notas relacionadas`

## Como usar este repositorio

- Usa las plantillas en `templates/` para agregar libros y capitulos.
- Actualiza primero los archivos en espanol y despues traduce al ingles.
- Agrega citas breves y acciones practicas.
- Mantener enlaces cruzados entre conceptos relacionados.

## Licencia

Este proyecto esta licenciado bajo Creative Commons Attribution 4.0 International (CC BY 4.0).

Consulta [`LICENSE`](LICENSE).

## Aviso legal

- Estas notas son interpretaciones personales y material de aprendizaje.
- Cualquier contenido citado pertenece a sus autores y editoriales originales.
- Las citas son breves y se incluyen con fines educativos.
