# The Pragmatic Programmer (El Programador Pragmático)

[![Language](https://img.shields.io/badge/Language-English-1f6feb)](README.md)
[![Español](https://img.shields.io/badge/ES-Disponible-0e8a16)](README.es.md)
[![Chapters](https://img.shields.io/badge/Chapters-7-f9a825)](#chapters)
[![Status](https://img.shields.io/badge/Status-Reading-6f42c1)](#metadata)

## Language portal

Choose how you want to read this book:

- English: [`README.md`](README.md)
- Español: [`README.es.md`](README.es.md)

## Metadata

- Title: The Pragmatic Programmer (El Programador Pragmático)
- Author: Not specified in these notes
- Status: reading
- Language: English

## Navigation

- Spanish version: [README.es.md](README.es.md)
- Back to repository index: [../../README.md](../../README.md)

## Quick navigation

- 📘 [Chapters](#chapters)
- 🎯 [Key takeaways](#key-takeaways)
- 🧪 [Practical applications](#practical-applications)
- 🔗 [Related books](#related-books)
- 🌐 [Switch to Spanish](README.es.md)
- ⬆️ [Back to repository index](../../README.md)

<details>
<summary><strong>Book quick map (expand/collapse)</strong></summary>

| Chapter | Core topic | EN | ES |
|---|---|---|---|
| 00 | Preface (first edition) | [Open](chapters/EN/00-preface.md) | [Abrir](chapters/ES/00-prefacio.es.md) |
| 01 | A pragmatic philosophy | [Open](chapters/EN/01-a-pragmatic-philosophy.md) | [Abrir](chapters/ES/01-una-filosofia-pragmatica.es.md) |
| 02 | A pragmatic approach | [Open](chapters/EN/02-a-pragmatic-approach.md) | [Abrir](chapters/ES/02-un-enfoque-pragmatico.es.md) |
| 04 | Pragmatic paranoia | [Open](chapters/EN/04-pragmatic-paranoia.md) | [Abrir](chapters/ES/04-paranoia-pragmatica.es.md) |
| 05 | Bend, or break | [Open](chapters/EN/05-bend-or-break.md) | [Abrir](chapters/ES/05-doblar-o-romper.es.md) |
| 06 | Concurrency | [Open](chapters/EN/06-concurrency.md) | [Abrir](chapters/ES/06-concurrencia.es.md) |
| 07 | While you are coding | [Open](chapters/EN/07-while-you-are-coding.md) | [Abrir](chapters/ES/07-mientras-escribe-codigo.es.md) |

</details>

## Main topics

- Professional responsibility without excuses
- Sustainable quality and code care
- Orthogonality and decoupling for safer change
- Continuous growth and critical thinking
- Effective communication in technical teams

## Why this book matters

These notes ground a simple but demanding idea: writing software well is not only shipping features, but also owning consequences, caring for the technical environment, and working with intention.

## Chapters

- [00 - Preface (first edition)](chapters/EN/00-preface.md) | [ES](chapters/ES/00-prefacio.es.md)
- [01 - A pragmatic philosophy](chapters/EN/01-a-pragmatic-philosophy.md) | [ES](chapters/ES/01-una-filosofia-pragmatica.es.md)
- [02 - A pragmatic approach](chapters/EN/02-a-pragmatic-approach.md) | [ES](chapters/ES/02-un-enfoque-pragmatico.es.md)
- [04 - Pragmatic paranoia](chapters/EN/04-pragmatic-paranoia.md) | [ES](chapters/ES/04-paranoia-pragmatica.es.md)
- [05 - Bend, or break](chapters/EN/05-bend-or-break.md) | [ES](chapters/ES/05-doblar-o-romper.es.md)
- [06 - Concurrency](chapters/EN/06-concurrency.md) | [ES](chapters/ES/06-concurrencia.es.md)
- [07 - While you are coding](chapters/EN/07-while-you-are-coding.md) | [ES](chapters/ES/07-mientras-escribe-codigo.es.md)

## Key takeaways

### Chapter 0 - Preface (first edition)

- There is no point in developing software without a real commitment to doing it well.

### Chapter 1 - A pragmatic philosophy

- Personal ownership reduces friction and speeds up solutions.
- Technical disorder grows when it is not corrected early.
- Consistent and diversified learning protects your career.
- Clear communication is also part of engineering work.

### Chapter 2 - A pragmatic approach

- Orthogonality makes it easier to change one component without unintended side effects.
- Tracer bullets validate end-to-end integration early and reduce technical uncertainty.
- Prototypes are useful for exploring architecture, performance, or UX, but they must be explicitly disposable.
- In estimation, align on the required level of accuracy before committing to a date.

### Chapter 4 - Pragmatic paranoia

- We do not write perfect software, so we must build defenses against our own mistakes.
- A correct program fulfills exactly its contract: neither more nor less.
- On impossible states, failing fast is safer than continuing with silent corruption.
- The combination of contracts, assertions, and continuous checks reduces avoidable failures.
- A task is too large when it depends on guessing instead of stepwise validation.

### Chapter 5 - Bend, or break

- Unnecessary coupling blocks change and makes code obsolete faster.
- For flexible software, each component should depend on as few others as possible.
- Global data and deep inheritance hierarchies often increase technical fragility.
- Events, FSMs, and pub/sub help decouple async flows and support safer evolution.
- Interfaces, delegation, mixins, and traits are useful alternatives to avoid inheritance "taxes."

### Chapter 6 - Concurrency

- Concurrency structures software for asynchronous systems; parallelism depends on hardware.
- The main challenge is not creating threads, but controlling shared state and temporal coordination.
- Unnecessary temporal coupling makes design rigid and harder to evolve.
- Actors, processes, queues, and pub/sub are valid strategies to reduce direct component dependency.
- Concurrency quality requires tests focused on races, deadlocks, and load behavior.

### Chapter 7 - While you are coding

- Deliberate coding avoids accidental solutions and strengthens engineering judgment.
- Small, test-backed refactors keep code flexible, understandable, and safer to evolve.
- Tests do not only catch failures; they provide early feedback on design and behavior.
- Security must be built in during development: minimal attack surface, least privilege, and encrypted sensitive data.
- Good naming and timely renaming improve clarity, maintenance, and long-term system evolution.

## Favorite ideas

- Focus on solutions, not excuses.
- Ask often: "Is there anything I can help you with?"

## Practical applications

### Chapter 0 - Preface (first edition)

- Align on minimum quality criteria before starting new deliveries.

### Chapter 1 - A pragmatic philosophy

- Review code "broken windows" in every iteration.
- Maintain a knowledge portfolio with weekly learning.
- Before adopting an idea, evaluate context, beneficiaries, and limits.

### Chapter 2 - A pragmatic approach

- Avoid global data and unnecessary coupling between modules.
- Design a tracer bullet to validate the system's critical flow early.
- Use explicitly disposable prototypes to explore architecture or performance decisions.
- Define estimates with range, assumptions, and the accuracy level requested by decision-makers.

### Chapter 4 - Pragmatic paranoia

- Define preconditions, postconditions, and invariants in critical modules.
- Add assertions at points where we currently assume "that never happens."
- Configure fail-fast behavior when impossible states appear.
- Review resource allocation/release flow to guarantee symmetry and cleanup.
- Break large tasks into short increments with early feedback.

### Chapter 5 - Bend, or break

- Audit strong coupling points and separate responsibilities that currently change as a block.
- Encapsulate global data behind APIs or interfaces with explicit boundaries.
- Model complex flows with finite state machines to control transitions.
- Implement pub/sub for async events where consumers need low-impact extensibility.
- Review existing subclasses and migrate suitable cases toward composition or delegation.

### Chapter 6 - Concurrency

- Identify temporally coupled flows and separate tasks that can progress independently.
- Reduce shared mutable state in critical modules before scaling concurrency.
- Define explicit synchronization policies for critical sections and multi-resource access.
- Introduce async messaging where it helps decouple producers and consumers.
- Build stress tests to detect race conditions, deadlocks, and starvation.

### Chapter 7 - While you are coding

- Turn implementation doubts into tests and small experiments before increasing complexity.
- Measure algorithmic complexity in critical flows and optimize only after confirming bottlenecks.
- Integrate small and frequent refactors into the normal delivery cycle.
- Strengthen unit, contract, and edge-case tests so end users are not your first testers.
- Audit sensitive-data paths, secrets handling, and privilege levels in critical components.

## Related books

- Software Engineering at Google

## Personal reflections

This book reminds me that technical excellence does not happen by accident: it is the result of small habits, conscious decisions, and honest communication.

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to the original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
