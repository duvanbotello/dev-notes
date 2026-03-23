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
      01-chapter-name.md
      01-chapter-name.es.md

templates/
  book-template.md
  book-template.es.md
  chapter-template.md
  chapter-template.es.md
```

### Rules

* Use **kebab-case** for folders and files
* Each book has its own directory under `/books/`
* Each chapter must be inside `/chapters/`
* Chapter files must be numerically ordered (`01-`, `02-`, etc.)

---

## Language Rules (CRITICAL)

* Spanish (`.es.md`) is the **source of truth**
* English (`.md`) is a **translation**
* **DO NOT mix languages in the same file**
* Every Spanish file should have a corresponding English version
* `README.md` and `README.es.md` must always be synchronized in structure and meaning (language is the only difference)
* All bilingual note pairs (`*.es.md` and `*.md`) must stay synchronized in content, sections, links, and updates
* Any change in Spanish must be reflected in English in the same update cycle

---

## Writing Guidelines

When creating or updating notes:

* Write in a **clear, concise, and structured way**
* Avoid unnecessary verbosity
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
* Main topics
* Why this book matters
* Key takeaways
* Table of contents (chapters with links)
* Personal reflections

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

---

## File Creation Rules

When creating new content:

* Ensure both `.es.md` and `.md` files exist
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

This repository is a long-term knowledge system. Act accordingly.
