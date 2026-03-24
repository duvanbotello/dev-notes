# AGENTS.md

## Purpose

This repository (`dev-notes`) is a bilingual (Spanish + English) knowledge base containing structured notes, insights, and reflections from software engineering books.

The goal is to:

* Capture high-value ideas without needing to reread full books
* Organize knowledge in a clear, reusable way
* Enable fast navigation across books, chapters, and concepts
* Be useful both personally and for others

---

## Core Principles

* Notes are **concise, structured, and insight-driven**
* Focus on **understanding, not copying**
* Prioritize **clarity, navigation, and long-term usability**
* This repository behaves like a **technical handbook / wiki**

---

## Repository Structure

All content must follow this structure:

```
books/
  <book-name>/
    README.md
    README.es.md
    chapters/
      EN/
        01-chapter-name.md
      ES/
        01-chapter-name.es.md

templates/
  book-template.md
  book-template.es.md
  chapter-template.md
  chapter-template.es.md
```

### Template Paths and Usage

Use templates from `/templates/` exactly as follows:

* Book README in Spanish (`/books/<book-name>/README.es.md`) → `templates/book-template.es.md`
* Book README in English (`/books/<book-name>/README.md`) → `templates/book-template.md`
* Chapter in Spanish (`/books/<book-name>/chapters/ES/<nn>-<chapter>.es.md`) → `templates/chapter-template.es.md`
* Chapter in English (`/books/<book-name>/chapters/EN/<nn>-<chapter>.md`) → `templates/chapter-template.md`
* Templates are the canonical guide for structure when creating new files
* If a file already has the required structure and synchronized sections, do not re-template it; use templates to fill missing sections or create new content

### Rules

* Use **kebab-case** for folders and files
* Each book has its own directory under `/books/`
* Each chapter must be inside `/chapters/`
* Chapter language files must be separated by folder: `/chapters/EN/` and `/chapters/ES/`
* Chapter files must be numerically ordered (`01-`, `02-`, etc.)

---

## Language Rules (CRITICAL)

* Spanish (`.es.md`) is the **source of truth**
* English (`.md`) is a **translation**
* **DO NOT mix languages in the same file**
* Every Spanish file should have a corresponding English version
* Spanish files must use correct Spanish orthography (including `ñ`, accents, and opening punctuation like `¿` and `¡` when applicable)
* `README.md` and `README.es.md` must always be synchronized in structure and meaning (language is the only difference)
* All bilingual note pairs (`*.es.md` and `*.md`) must stay synchronized in content, sections, links, and updates
* Any change in Spanish must be reflected in English in the same update cycle
* All chapter links in book indexes must point to `/chapters/ES/...` and `/chapters/EN/...` accordingly

---

## Writing Guidelines

When creating or updating notes:

* Write in a **clear, concise, and structured way**
* Avoid unnecessary verbosity
* Follow the corresponding template structure exactly (book or chapter)
* Do not invent new section structures or break the existing format
* Focus on:

  * Core ideas
  * Key concepts
  * Practical insights
  * Personal interpretation

### Do:

* Summarize concepts in your own words
* Extract actionable insights
* Connect ideas across chapters/books

### Do NOT:

* Copy large portions of text from books
* Reconstruct full chapters
* Include copyrighted content beyond short quotes

---

## Quotes and References

* Quotes must be **short**
* Always include attribution when possible
* Use quotes only to support ideas, not replace explanations

Example:

> "Programs must be written for people to read..." — Harold Abelson

---

## Navigation Requirements (MANDATORY)

All notes must be easily navigable.

### Each chapter file MUST include:

At the top:

* ← Link to Book README
* ↑ Link to Repository README
* 🌐 Language switch (EN ↔ ES)

At the bottom:

* Previous chapter link (if exists)
* Next chapter link (if exists)
* "Related notes" section

---

## Cross-Linking

Notes should behave like a knowledge graph.

Each chapter should include:

* Related chapters (same book)
* Related concepts (other books if applicable)
* "See also" references

---

## Book-Level Requirements

Each book (`README.md` and `README.es.md`) must include:

* Book title and author
* Status (reading, completed, revisiting)
* Language portal section to choose English or Spanish
* Quick navigation links for major sections
* Expandable quick map table with chapter links in both languages
* Main topics
* Why this book matters
* Key takeaways
* Table of contents (chapters with links)
* Personal reflections
* `Key takeaways` / `Aprendizajes clave` organized by chapter using subsection headings (`### Chapter/Capítulo N - ...`)
* `Practical applications` / `Aplicaciones prácticas` organized by chapter using subsection headings (`### Chapter/Capítulo N - ...`)

---

## Repository README Updates

When any book content is added or updated (book README or chapter files), both root files `README.es.md` and `README.md` must be updated in the same cycle:

* Keep a `Novedades` / `What's new` section in the root README files
* Show **only the latest 3 updates** in those sections
* Each update entry should link to the affected book/chapter
* Refresh the list order so newest updates appear first

---

## Chapter-Level Requirements

Each chapter must follow the template and include:

* Chapter title
* Core idea
* Key concepts
* Short quotes (optional)
* Personal interpretation
* Practical lessons
* Questions or doubts
* Actions or experiments
* Related notes

---

## Content Evolution Rules (MANDATORY)

When updating an existing book or chapter:

* **Do not remove important existing content** unless explicitly requested
* **Do not replace prior ideas**; integrate new information with existing context
* Preserve the history of ideas and keep continuity across updates
* Merge overlaps to avoid duplication while keeping key insights
* If a new idea appears to conflict with earlier notes, add context and clarify tradeoffs instead of deleting prior content

---

## Update Workflow (Book + Chapter)

Whenever new notes are added for a chapter:

1. Read the full current chapter file before editing
2. Review the corresponding book README (`README.es.md` and `README.md`) for sections that should be enriched
3. Update affected sections (from templates) to keep content coherent and connected
4. Keep `Key takeaways` and `Practical applications` in book READMEs grouped by chapter and synchronized in both languages
5. Improve clarity and grouping where possible, without changing the chapter's core focus
6. Keep Spanish as source of truth, then synchronize English in the same cycle

---

## Agent Behavior

When the agent receives notes:

1. Identify the **book**
2. Identify or create the correct **chapter**
3. Create files if they do not exist
4. Follow the defined **structure and templates**
5. Always write the **Spanish version first**
6. Then generate the **English version**
7. Maintain navigation links
8. Keep formatting consistent
9. When updating existing notes, integrate and enrich; do not overwrite prior context

---

## File Creation Rules

When creating new content:

* Ensure both `.es.md` and `.md` files exist
* Place Spanish chapter files in `/chapters/ES/` and English chapter files in `/chapters/EN/`
* Follow naming conventions strictly
* Do not create duplicate or inconsistent structures
* Do not place files outside the defined structure

---

## Consistency Rules

* Maintain consistent formatting across all notes
* Reuse templates
* Keep headings predictable and scannable
* Avoid structural deviations

---

## License and Legal

* All original content in this repository is licensed under **CC BY 4.0**
* Notes are **personal interpretations and summaries**
* Any referenced material belongs to its respective authors
* Quotes are used for **educational and reference purposes only**

---

## Final Rule

If unsure:

* Prioritize **clarity**
* Follow the **existing structure**
* Maintain **consistency**
* Optimize for **future readability and navigation**
* Treat the repository as a living knowledge system: every update should improve clarity and preserve important context

This repository is a long-term knowledge system. Act accordingly.
