[← Back to Book](../../README.md) | [↑ Back to Index](../../../../README.md) | [🌐 Switch Language](../ES/06-concurrencia.es.md)

# 06 - Concurrency

> Quick navigation: [Core idea](#core-idea) · [Key concepts](#key-concepts) · [Actions](#actions) · [Related notes](#related-notes)

## Core idea

Concurrency is not a trend or an isolated technical detail: it is a better way to model systems that operate in an asynchronous world. This chapter distinguishes concurrency from parallelism and stresses that the real challenge is not launching more threads, but managing shared state, coordination, and temporal ordering correctly.

## Key concepts

- **Concurrency vs. parallelism:** concurrency is software structure; parallelism is simultaneous execution enabled by hardware.
- **"Apparent" concurrency:** two or more code paths make progress as if at the same time, even when scheduled in turns.
- **Real parallelism:** happens when multiple cores, CPUs, or machines execute work simultaneously.
- **Temporal coupling:** forcing rigid order where the problem does not require it makes design fragile.
- **Break temporal coupling:** separating independent tasks improves responsiveness to real-world events.
- **Identifying concurrency is easy; implementing it well is hard:** complexity appears when coordinating shared resources.
- **Shared state as the central risk:** race conditions, deadlocks, starvation, and inconsistent visibility are typical failures.
- **Synchronization and mutual exclusion:** semaphores, locks, and thread-safe structures help, but require discipline.
- **Transactions across multiple resources:** consistency becomes harder when one operation touches many resources.
- **Actors and processes are a valid strategy:** they encapsulate state and communicate via messages to reduce direct coupling.
- **Without explicit concurrency:** queues, runtimes, and frameworks can hide some coordination, but they do not remove design risks.
- **Blackboards and event streams:** patterns like blackboard or platforms like Kafka help decouple producers and consumers.

## Quotes (short only)

- "Concurrency is a requirement for dealing with the asynchronous real world." - Core chapter idea
- "Concurrency is a software mechanism; parallelism is a hardware concern." - Key distinction

## My interpretation

I take away that "doing concurrency" does not mean creating threads by default. The value comes from reducing temporal coupling and controlling shared state with explicit rules. About actors and processes: they are not a silver bullet, but they are still useful when we need state isolation and message-based coordination in distributed or highly asynchronous systems.

## Practical lessons

- Before parallelizing, clarify whether the problem needs structural concurrency or only more compute capacity.
- Minimize shared mutable state to eliminate a large class of concurrency bugs.
- Prefer message passing or queues at service boundaries to simplify coordination.
- If using locks/semaphores, define acquisition order and lifetime to prevent deadlocks.
- Stress and race-focused tests are mandatory: many failures never appear in "happy path" tests.

## Questions

- Which flows in my system are temporally coupled without real need?
- Where do I have shared state that could be encapsulated or partitioned?
- Which parts would benefit from async messaging instead of direct synchronous calls?
- Do I have dedicated tests to detect race conditions and deadlocks?

## Actions

- [ ] Map one critical flow and identify unnecessary temporal dependencies.
- [ ] Reduce one shared mutable state point in a current module.
- [ ] Define one explicit synchronization strategy (locks, semaphores, or queues) for a critical section.
- [ ] Design one stress test focused on race-condition detection.
- [ ] Evaluate in one real case whether actor/process or pub/sub reduces coupling compared with the current design.

## Related notes

- Chapter 5: [05 - Bend, or break](05-bend-or-break.md)
- Chapter 4: [04 - Pragmatic paranoia](04-pragmatic-paranoia.md)
- Code review: [09 - Code review](../../../software-engineering-at-google/chapters/EN/09-code-review.md)
- Book index: [The Pragmatic Programmer - README](../../README.md)

## See also

- Chapter template: [chapter-template.md](../../../../templates/chapter-template.md)
- Repository index: [README.md](../../../../README.md)

---

**Navigation**

- Previous chapter: [05 - Bend, or break](05-bend-or-break.md)
- Next chapter: Planned
- Related notes: [Book README](../../README.md), [Spanish version](../ES/06-concurrencia.es.md)

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
