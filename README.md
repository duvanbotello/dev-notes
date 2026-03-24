# Dev Notes

> A bilingual knowledge base (Spanish-first) for personal notes on software engineering books.

[![Primary language](https://img.shields.io/badge/Language-Spanish-1f6feb)](README.es.md)
[![Translation](https://img.shields.io/badge/Translation-English-0e8a16)](README.md)
[![License](https://img.shields.io/badge/License-CC--BY--4.0-f9a825)](LICENSE)

## Cover

### Quick access

- Go to this file (README in English): [`README.md`](README.md)
- Switch to Spanish: [`README.es.md`](README.es.md)
- Open example book (EN): [`books/software-engineering-at-google/README.md`](books/software-engineering-at-google/README.md)
- Create new notes from templates: [`templates/`](templates/)

### Interactive navigation

- [Why this repository exists](#why-this-repository-exists)
- [Books index](#books-index)
- [How to navigate](#how-to-navigate)
- [How to use this repository](#how-to-use-this-repository)
- [Repository structure](#repository-structure)
- [License](#license)
- [Disclaimer](#disclaimer)

<details>
<summary><strong>Recommended flow (expand/collapse)</strong></summary>

1. Enter a book from the [Books index](#books-index).
2. Open its README to view the chapter table of contents.
3. In each chapter use `← Back to Book`, `↑ Back to Index`, and `🌐 Switch Language`.
4. Use `Related notes` and `See also` to jump between concepts.

</details>

## Why this repository exists

This repository exists to turn reading notes into a practical engineering handbook:

- Capture personal reflections, lessons, and actionable ideas.
- Keep concepts easy to find by book, chapter, and topic.
- Share notes publicly with a professional English translation.
- Build a long-term reference that remains useful over time.

## Language policy

- Spanish is the source of truth.
- English is a clean and professional translation.
- Each file uses only one language.

## Books index

- `software-engineering-at-google`
  - English: [`books/software-engineering-at-google/README.md`](books/software-engineering-at-google/README.md)
  - Spanish: [`books/software-engineering-at-google/README.es.md`](books/software-engineering-at-google/README.es.md)
- `the-pragmatic-programmer`
  - English: [`books/the-pragmatic-programmer/README.md`](books/the-pragmatic-programmer/README.md)
  - Spanish: [`books/the-pragmatic-programmer/README.es.md`](books/the-pragmatic-programmer/README.es.md)

## How notes are organized

Notes are organized in three levels:

1. Repository index (`README.md`, `README.es.md`)
2. Book index (`books/<book-name>/README*.md`)
3. Chapter notes (`books/<book-name>/chapters/ES/*.es.md` and `books/<book-name>/chapters/EN/*.md`)

Each chapter includes top and bottom navigation, language switching, and cross-links.

## Repository structure

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

## How to navigate

Use this route for quick navigation:

1. Start from the books index in this file.
2. Open a book README to see the chapter table of contents.
3. Open a chapter and use:
   - `← Back to Book`
   - `↑ Back to Index`
   - `🌐 Switch Language`
4. Move between chapters from the bottom navigation:
   - `Previous chapter`
   - `Next chapter`
   - `Related notes`

## How to use this repository

- Use templates in `templates/` to add books and chapters.
- Update Spanish files first and then translate into English.
- Add short quotes and practical actions.
- Keep cross-links between related concepts.

## License

This project is licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).

See [`LICENSE`](LICENSE).

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short and included for educational purposes.
