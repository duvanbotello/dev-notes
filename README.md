# Dev Notes

A bilingual (Spanish-first) knowledge base for personal notes on software engineering books.

- Spanish version: [`README.es.md`](README.es.md)

## Why this repository exists

This repository exists to turn book notes into a practical engineering handbook:

- Capture personal reflections, lessons, and actionable ideas.
- Keep ideas easy to find by book, chapter, and concept.
- Share notes publicly in a clean English translation.
- Build a long-term reference that remains useful over time.

## Language policy

- Spanish is the source of truth.
- English is a clean, professional translation.
- Each file uses only one language.

## Books index

- `software-engineering-at-google`
  - English: [`books/software-engineering-at-google/README.md`](books/software-engineering-at-google/README.md)
  - Spanish: [`books/software-engineering-at-google/README.es.md`](books/software-engineering-at-google/README.es.md)

## How notes are organized

Notes are organized in three levels:

1. Repository index (`README.md`, `README.es.md`)
2. Book index (`books/<book-name>/README*.md`)
3. Chapter notes (`books/<book-name>/chapters/*.md`)

Each chapter includes top and bottom navigation, language switching, and cross-links.

## Repository structure

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

## How to navigate

Use this route for fast navigation:

1. Start from the books index in this file.
2. Open a book README for chapter-level table of contents.
3. Open a chapter and use:
   - `← Back to Book`
   - `↑ Back to Index`
   - `🌐 Switch Language`
4. Move between chapters from the bottom navigation:
   - `Previous chapter`
   - `Next chapter`
   - `Related notes`

## How to use this repository

- Use templates in `templates/` to add new books and chapters.
- Keep Spanish files updated first, then translate to English.
- Add concise quotes and practical actions.
- Maintain cross-links between related concepts.

## License

This project is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).

See [`LICENSE`](LICENSE).

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short and included for educational purposes.
