[← Back to Book](../../README.md) | [↑ Back to Index](../../../../README.md) | [🌐 Switch Language](../ES/07-mientras-escribe-codigo.es.md)

# 07 - While you are coding

> Quick navigation: [Core idea](#core-idea) · [Key concepts](#key-concepts) · [Actions](#actions) · [Related notes](#related-notes)

## Core idea

While coding, we make decisions continuously. This chapter proposes doing it intentionally: think deliberately, listen to technical instinct, refactor in small steps, and use tests as constant feedback to keep code clear, secure, easy to reason about, and ready to change.

## Key concepts

- **Code with intent, not by accident:** finding an answer that "fits" is not the same as finding the right answer.
- **Continuous critical thinking:** review your own code with the same pragmatic scrutiny.
- **Listen to the "lizard brain":** discomfort while coding is often a useful signal to pause, validate, and rethink.
- **Readable and explainable code:** if you cannot explain it clearly to a junior developer, you may be relying on coincidence.
- **Do not let past code dictate future code:** any code can be replaced when it is no longer appropriate.
- **Be conscious of algorithms and complexity:** estimate growth order before optimizing.
- **Avoid premature optimization:** first confirm there is a real bottleneck.
- **Refactor early and often:** make small, safe, test-backed improvements.
- **Refactoring is not full rewrites:** a week of "refactoring" is often a hidden rewrite.
- **Tests are the first user of your code:** they do not only find bugs, they also shape design.
- **Testing culture matters:** "test later" usually turns into "never test."
- **Security by design:** minimize attack surface, apply least privilege, and encrypt sensitive data.
- **Inputs/outputs and debug info are attack vectors:** every data channel should be treated as a security boundary.
- **Naming matters:** good names express intent, improve maintainability, and reduce reasoning errors.

## Quotes (short only)

- "Refactor early, refactor often." - Recommended chapter practice
- "Test your software, or your users will." - Pragmatic chapter rule

## My interpretation

This chapter combines multiple disciplines into one operating principle: code with awareness. It is not enough for software to work today; it must remain understandable, testable, refactorable, and protectable tomorrow. The most useful takeaway for me is balance: keep moving, but with deliberate pauses to think, measure, test, and fix in time.

## Practical lessons

- When a solution "feels wrong," pause and validate with tests before adding more code.
- Choose algorithms with scale in mind (thousand vs. million records).
- Treat refactoring as a continuous low-risk activity, not as a mega-project.
- Keep a reliable test suite to enable frequent changes with confidence.
- Build in basic security from the start: less surface, fewer privileges, encrypted sensitive data.

## Questions

- Which parts of my current code rely more on luck than explicit reasoning?
- Which module should I refactor today to avoid a more expensive debt later?
- Which tests are missing so the team can change code safely?
- Where am I exposing information or services with more privileges than required?

## Actions

- [ ] Review one code section and simplify it until it can be clearly explained to a junior developer.
- [ ] Measure complexity on one critical flow and validate whether optimization is actually needed.
- [ ] Execute one small, step-by-step refactor backed by automated tests.
- [ ] Add or improve contract and edge-case tests in one sensitive module.
- [ ] Audit one sensitive-data path to confirm encryption, access control, and no secrets in source code.
- [ ] Rename ambiguous symbols in one key file to improve semantic clarity.

## Related notes

- Chapter 6: [06 - Concurrency](06-concurrency.md)
- Chapter 5: [05 - Bend, or break](05-bend-or-break.md)
- Code review: [09 - Code review](../../../software-engineering-at-google/chapters/EN/09-code-review.md)
- Book index: [The Pragmatic Programmer - README](../../README.md)

## See also

- Chapter template: [chapter-template.md](../../../../templates/chapter-template.md)
- Repository index: [README.md](../../../../README.md)

---

**Navigation**

- Previous chapter: [06 - Concurrency](06-concurrency.md)
- Next chapter: Planned
- Related notes: [Book README](../../README.md), [Spanish version](../ES/07-mientras-escribe-codigo.es.md)

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
