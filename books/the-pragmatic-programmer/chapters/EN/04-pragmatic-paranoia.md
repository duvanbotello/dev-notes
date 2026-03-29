[← Back to Book](../../README.md) | [↑ Back to Index](../../../../README.md) | [🌐 Switch Language](../ES/04-paranoia-pragmatica.es.md)

# 04 - Pragmatic paranoia

> Quick navigation: [Core idea](#core-idea) · [Key concepts](#key-concepts) · [Actions](#actions) · [Related notes](#related-notes)

## Core idea

We cannot write perfect software, so we should design defenses against our own mistakes. Pragmatic paranoia means validating assumptions, defining explicit contracts, and stopping execution when something impossible appears, because a corrupted system causes more damage than one that fails fast.

## Key concepts

- **Do not blindly trust even yourself:** strong technical judgment still makes mistakes.
- **Correct program:** it does neither more nor less than what it claims to do.
- **Design by Contract (DBC):** make preconditions, postconditions, and invariants explicit to protect behavior.
- **Dead programs tell no lies:** if an impossible state appears, terminating early avoids spreading corruption.
- **Assertive programming:** every time we think "that could never happen," add an explicit check.
- **Finish what you start:** whoever allocates a resource should also release it to preserve system balance.
- **Nest allocations and releases:** symmetry reduces memory leaks and cleanup errors.
- **Exceptions with judgment:** avoid using exceptions as a general patch; enforce limits with contracts and balance.
- **Always verify:** if we trust no one, we validate inputs, state, and outcomes.
- **Small steps with feedback:** incremental progress lowers risk and enables adjustment before scaling.
- **Task too large:** any task that depends on guessing instead of evidence.
- **Black swans:** assume unexpected events will happen and prepare resilient systems.

## Quotes (short only)

- "Dead programs tell no lies." - Core chapter idea
- "If you think 'that could never happen,' add a check." - Recommended chapter practice

## My interpretation

This chapter grounds a concrete discipline for me: quality does not come from trusting that everything will go well, but from assuming something will fail and preparing defenses in design. The most valuable part is the combination of contracts, assertions, and resource cleanup to keep an isolated error from becoming a failure cascade.

## Practical lessons

- Designing contracts forces each function or object to define exactly what it promises.
- Failing fast on impossible states protects the system more than continuing with corrupted data.
- Assertions work as early alarms during development and testing.
- Releasing resources in the same flow where they are allocated prevents hard-to-trace issues.
- Breaking work into small increments improves learning, feedback, and continuous adjustment.

## Questions

- Which assumptions in my code are still not explicit in contracts or assertions?
- Where am I tolerating invalid states "just in case"?
- Do I have real symmetry between allocation and release of critical resources?
- Which current task is too large because it depends on guessing instead of validation?

## Actions

- [ ] Define contracts (preconditions, postconditions, invariants) in one critical module.
- [ ] Add assertions where I currently assume "this never happens."
- [ ] Review one resource-handling flow to guarantee allocation/release symmetry.
- [ ] Mark impossible states and enforce fail-fast behavior for those cases.
- [ ] Split one large current task into increments with review and feedback at each step.

## Related notes

- Chapter 2: [02 - A pragmatic approach](02-a-pragmatic-approach.md)
- Code review: [09 - Code review](../../../software-engineering-at-google/chapters/EN/09-code-review.md)
- Book index: [The Pragmatic Programmer - README](../../README.md)

## See also

- Chapter template: [chapter-template.md](../../../../templates/chapter-template.md)
- Repository index: [README.md](../../../../README.md)

---

**Navigation**

- Previous chapter: [02 - A pragmatic approach](02-a-pragmatic-approach.md)
- Next chapter: [05 - Bend, or break](05-bend-or-break.md)
- Related notes: [Book README](../../README.md), [Spanish version](../ES/04-paranoia-pragmatica.es.md)

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
