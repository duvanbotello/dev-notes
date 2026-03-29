[← Back to Book](../../README.md) | [↑ Back to Index](../../../../README.md) | [🌐 Switch Language](../ES/05-doblar-o-romper.es.md)

# 05 - Bend, or break

> Quick navigation: [Core idea](#core-idea) · [Key concepts](#key-concepts) · [Actions](#actions) · [Related notes](#related-notes)

## Core idea

If we want software that survives change, we need to design it to bend without breaking. This chapter emphasizes reducing coupling, avoiding unnecessary dependencies, and preferring architectures where each component can evolve without dragging the others.

## Key concepts

- **Coupling is the enemy of change:** when two parts must change together by design, evolution cost rises.
- **Software vs. bridges:** bridges aim for rigidity; software should aim for flexibility over time.
- **Law of Demeter (minimum knowledge):** a method should talk to "close friends" and avoid long call chains.
- **Avoid global data:** global state connects too many modules and makes the codebase fragile.
- **If something must be shared, expose it with clear boundaries:** an explicit API reduces coupling compared to direct global access.
- **Events and FSMs (finite state machines):** they help model transitions and behavior without rigid dependencies.
- **Observer vs. Publish/Subscribe:** observer introduces coupling through direct registration; pub/sub decouples better with an intermediary.
- **Reactive programming, streams, and events:** they make async flows clearer and support decoupled composition.
- **Transform programming into processes:** if you cannot clearly describe the process, you likely do not understand the problem yet.
- **Inheritance tax:** inheritance can help, but it also increases coupling and maintenance cost.
- **Alternatives to deep inheritance:** interfaces, delegation, mixins, and traits often provide extension with less structural dependency.
- **Do not write Dodo code:** code that cannot adapt to change eventually goes extinct.

## Quotes (short only)

- "Coupling is the enemy of change." - Core chapter idea
- "If things do not happen, make them happen." - John F. Kennedy (quote used in the chapter)

## My interpretation

This chapter reinforces one design rule for me: every decision that simplifies today but over-couples the system becomes debt tomorrow. The most useful takeaway is to treat flexibility as an intentional property: fewer globals, less rigid inheritance, and clearer boundaries between components.

## Practical lessons

- Before adding a dependency between modules, verify whether it is truly necessary or only convenient short-term.
- Review long chained calls because they usually signal excessive cross-class knowledge.
- Use pub/sub for async events when we need to replace or extend consumers with low impact.
- Treat inheritance as a last option when composition, interfaces, or delegation can work.
- Design for explicit changeability to avoid code turning into "Dodo code."

## Questions

- Which parts of my system change together because of accidental coupling?
- Where do I have global data that should be encapsulated behind an API?
- Which inheritance hierarchies could be simplified with interfaces or delegation?
- Which current async flow would be clearer with events or reactive programming?

## Actions

- [ ] Identify and reduce one strong coupling point in a module that currently blocks changes.
- [ ] Replace one critical global data access with explicit access through an interface or API.
- [ ] Review one current subclass and evaluate whether composition or delegation reduces dependencies.
- [ ] Model one complex flow as a finite state machine to make transitions explicit.
- [ ] Define one small pub/sub event experiment to decouple producers and consumers.

## Related notes

- Chapter 2: [02 - A pragmatic approach](02-a-pragmatic-approach.md)
- Chapter 4: [04 - Pragmatic paranoia](04-pragmatic-paranoia.md)
- Code review: [09 - Code review](../../../software-engineering-at-google/chapters/EN/09-code-review.md)
- Book index: [The Pragmatic Programmer - README](../../README.md)

## See also

- Chapter template: [chapter-template.md](../../../../templates/chapter-template.md)
- Repository index: [README.md](../../../../README.md)

---

**Navigation**

- Previous chapter: [04 - Pragmatic paranoia](04-pragmatic-paranoia.md)
- Next chapter: Planned
- Related notes: [Book README](../../README.md), [Spanish version](../ES/05-doblar-o-romper.es.md)

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
