[← Back to Book](../../README.md) | [↑ Back to Index](../../../../README.md) | [🌐 Switch Language](../ES/02-un-enfoque-pragmatico.es.md)

# 02 - A pragmatic approach

> Quick navigation: [Core idea](#core-idea) · [Key concepts](#key-concepts) · [Actions](#actions) · [Related notes](#related-notes)

## Core idea

A pragmatic approach reduces risk through early learning: design orthogonal systems so changes stay safe, use tracer bullets to validate end-to-end integration, prototype to explore quickly, and estimate with intent to avoid surprises.

## Key concepts

- **Orthogonality benefit:** better control, maintainability, and speed of change.
- **Coupling cost:** in non-orthogonal systems, a local decision impacts many other parts.
- **Isolation through interfaces:** if external interfaces stay stable, a component can evolve with lower risk.
- **Tracer bullets:** implement a thin, functional, end-to-end path to get early integration feedback.
- **Tracer bullets vs. prototypes:** tracer bullets evolve on real code; prototypes are for exploration and should be discarded.
- **High-value prototypes:** architecture, new functionality over existing systems, structure or content of external data, third-party components, performance concerns, and UI design.
- **Explicitly disposable prototype:** it must be clear to everyone that it is incomplete and not production foundation.
- **Domain language:** the problem-domain vocabulary can directly suggest a programming solution.
- **Estimation as risk management:** estimates do not predict the future, but they reduce surprises and improve planning conversations.
- **Sufficient accuracy:** before estimating, ask whether high precision or a rough number is needed.
- **What to say when asked for an estimate:** avoid improvised answers; take time to think and respond with context.

## Quotes (short only)

- "Nothing is more dangerous than an idea if it is the only one you have."
- "Instead of carving decisions in stone, write them in beach sand."

## My interpretation

This chapter leaves me with a practical idea: not everything is solved by building faster; many things are solved by learning earlier. That is why I combine three habits: decouple to change safely, prototype to explore without self-deception, and estimate deliberately instead of committing dates from intuition.

## Practical lessons

- Every line of code can increase or reduce coupling, so this impact should be reviewed intentionally.
- If I use tracer bullets, they should cover a real end-to-end flow, not just an isolated technical mock.
- If I build a prototype, I should label it as disposable to avoid it slipping into production under schedule pressure.
- In estimates, first define required precision and then the right time horizon (hours, days, weeks, or months).
- A thoughtful estimate is more reliable than a quick number given "next to the coffee machine."

## Questions

- Which parts of my system change together because of weak design instead of real need?
- Am I using a tracer bullet when I need real integration, or a prototype when I only need exploration?
- Is it explicit for the team which code is disposable and which code should evolve toward production?
- Am I requesting the right level of precision before committing to an estimate?

## Actions

- [ ] Review one current module and identify unnecessary coupling between components.
- [ ] Design one tracer bullet this week to validate a critical end-to-end flow.
- [ ] Prepare one architecture or performance prototype and mark its disposable nature explicitly.
- [ ] Define a short estimation template with range, assumptions, and required precision.
- [ ] Avoid instant estimate commitments: always respond after a brief reflection.

## Related notes

- Chapter 1: [01 - A pragmatic philosophy](01-a-pragmatic-philosophy.md)
- Preface: [00 - Preface (first edition)](00-preface.md)
- Code review: [09 - Code review](../../../software-engineering-at-google/chapters/EN/09-code-review.md)
- Book index: [The Pragmatic Programmer - README](../../README.md)

## See also

- Chapter template: [chapter-template.md](../../../../templates/chapter-template.md)
- Repository index: [README.md](../../../../README.md)

---

**Navigation**

- Previous chapter: [01 - A pragmatic philosophy](01-a-pragmatic-philosophy.md)
- Next chapter: Planned
- Related notes: [Book README](../../README.md), [Spanish version](../ES/02-un-enfoque-pragmatico.es.md)

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
