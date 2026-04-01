# The Pragmatic Programmer (El Programador Pragmático)

[![Language](https://img.shields.io/badge/Language-English-1f6feb)](README.md)
[![Español](https://img.shields.io/badge/ES-Disponible-0e8a16)](README.es.md)
[![Chapters](https://img.shields.io/badge/Chapters-10-f9a825)](#chapters)
[![Status](https://img.shields.io/badge/Status-Completed-2ea043)](#metadata)

## Language portal

Choose how you want to read this book:

- English: [`README.md`](README.md)
- Español: [`README.es.md`](README.es.md)

## Metadata

- Title: The Pragmatic Programmer (El Programador Pragmático)
- Author: Not specified in these notes
- Status: completed
- Language: English

## Navigation

- Spanish version: [README.es.md](README.es.md)
- Back to repository index: [../../README.md](../../README.md)

## Quick navigation

- 📘 [Chapters](#chapters)
- 🎯 [Key takeaways](#key-takeaways)
- 🧪 [Practical applications](#practical-applications)
- 🧭 [Explore by concepts and paths](#explore-by-concepts-and-paths)
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
| 08 | Before the project | [Open](chapters/EN/08-before-the-project.md) | [Abrir](chapters/ES/08-antes-del-proyecto.es.md) |
| 09 | Pragmatic projects | [Open](chapters/EN/09-pragmatic-projects.md) | [Abrir](chapters/ES/09-proyectos-pragmaticos.es.md) |
| 10 | Postface | [Open](chapters/EN/10-postface.md) | [Abrir](chapters/ES/10-postfacio.es.md) |

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
- [08 - Before the project](chapters/EN/08-before-the-project.md) | [ES](chapters/ES/08-antes-del-proyecto.es.md)
- [09 - Pragmatic projects](chapters/EN/09-pragmatic-projects.md) | [ES](chapters/ES/09-proyectos-pragmaticos.es.md)
- [10 - Postface](chapters/EN/10-postface.md) | [ES](chapters/ES/10-postfacio.es.md)

## Explore by concepts and paths

- Global concepts index: [docs/concepts-index.md](../../docs/concepts-index.md) | [ES](../../docs/concepts-index.es.md)
- Suggested reading paths: [docs/reading-paths.md](../../docs/reading-paths.md) | [ES](../../docs/reading-paths.es.md)

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

### Chapter 8 - Before the project

- Requirements are discovered through continuous conversation; they do not arrive complete or stable from day one.
- The developer's job includes helping the client understand implications, limits, and trade-offs.
- Short iterations with direct feedback reduce interpretation errors and improve decisions.
- Requirements describe needs; they should not prematurely become design, architecture, or UI.
- Real agility means responding to change, supported by design that makes adjustment easier.

### Chapter 9 - Pragmatic projects

- A pragmatic team is small, accountable, and coherent: it avoids "broken windows," shares information with low friction, and automates repeatable work.
- Continuous learning needs explicit time to fix process leaks, evaluate technologies through prototypes, and adapt practices to real context.
- There is no single best methodology: take the best parts of each approach and avoid copying companies operating at radically different scale.
- Code is not done until all tests run, at minimum unit, integration, validation/verification, and performance tests.
- Every manually found bug must become an automated test to prevent regressions and preserve time for building new value.

### Chapter 10 - Postface

- Building software means helping build the future; that privilege carries power and proportional responsibility.
- Professional responsibility is personal and non-transferable: our technical decisions have real-world consequences.
- Before shipping code, two mandatory questions help calibrate integrity: "Have I protected the user?" and "Would I use this myself?"
- Nobody is perfect, but sincere diligence to anticipate consequences and protect users is still required.
- If we cannot honestly claim that preventive effort, we share responsibility when things fail.

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

### Chapter 8 - Before the project

- Structure requirements gathering as discovery sessions with questions about consequences and context.
- Establish short iterations with functional demos to collect early client feedback.
- Keep a living domain glossary to align language across business and engineering.
- Separate changing policies from core logic to adapt without high-risk deployments.
- Use pair or group work to debate solutions and improve design resilience.

### Chapter 9 - Pragmatic projects

- Keep teams under 10-12 people to strengthen coordination, shared context, and real quality ownership.
- Establish a continuous-improvement routine with reserved time to evaluate candidate tools, frameworks, or libraries through prototypes.
- Define a delivery policy where "done" requires a minimum suite: unit, integration, validation/verification, and performance tests.
- Turn every manually discovered defect into an automated regression test without exceptions.
- Prioritize practices and architecture that fit business context instead of imitating operating models built for different scale.

### Chapter 10 - Postface

- Add a minimal ethical checkpoint to each delivery together with technical review.
- Require explicit user-protection evidence in high-impact PRs.
- Evaluate foreseeable security, privacy, and misuse risks before deployment.
- Document sensitive decisions with context, trade-offs, and owners to keep accountability traceable.
- Treat each incident as a chance to strengthen preventive diligence and professional ownership.

## Related books

- Software Engineering at Google

## Personal reflections

This book reminds me that technical excellence does not happen by accident: it is the result of small habits, conscious decisions, and honest communication.

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to the original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
