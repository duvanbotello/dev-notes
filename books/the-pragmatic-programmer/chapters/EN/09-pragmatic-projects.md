[← Back to Book](../../README.md) | [↑ Back to Index](../../../../README.md) | [🌐 Switch Language](../ES/09-proyectos-pragmaticos.es.md)

# 09 - Pragmatic projects

> Quick navigation: [Core idea](#core-idea) · [Key concepts](#key-concepts) · [Actions](#actions) · [Related notes](#related-notes)

## Core idea

Pragmatic projects do not depend on rituals or trends: they depend on small, accountable, cohesive teams that keep learning, automate their work, test early and systematically, and adapt their practices to real business context to deliver value when users need it.

## Key concepts

- **Pragmatic teams and effective size:** software teams often bring smart, persistent, stubborn, and independent profiles; to coordinate that energy well, teams should stay small (ideally under 10-12 people) and scale with intention.
- **Zero tolerance for broken windows:** small unattended imperfections accumulate and normalize mediocrity; the whole team owns product quality.
- **Continuous investment in knowledge:** sustained success requires explicit time to improve skills, observe what works and what does not, and adjust.
- **Not only fire-fighting:** many teams spend all their time "bailing water"; real improvement requires scheduling and fixing the leak at the source.
- **Technology adoption with judgment:** do not adopt technologies, frameworks, or libraries just because they are trendy; evaluate candidates with prototypes and reserve calendar tasks to experiment and analyze outcomes.
- **Speak with one voice:** strong teams project coherence to other teams and build a clear technical personality, sometimes even with humor.
- **Seamless collaboration:** if you must wait for a weekly meeting to ask questions or share status, that is a major crack; asking questions, sharing progress, problems, opinions, and learning should be easy and ceremony-light.
- **Automate everything repeatable:** the best way to guarantee team-wide consistency and accuracy is broad automation.
- **Team = individuals who can shine:** provide enough structure to support each person, enable individual growth, and still guarantee value delivery.
- **Do what works, not what is fashionable:** there is no single best methodology; extract the best elements from each approach and adapt them to project and business reality.
- **Context over imitation:** "operating like Netflix" makes no sense without comparable infrastructure and user scale; practices must match your own reality.
- **User-timed delivery:** ship when users need it, not when the internal process "feels complete."
- **Test early, test often, and test automatically:** finding defects now avoids future cost and embarrassment; testing investment is cheaper in the long run.
- **Strict definition of done:** code is not done until all tests run; at minimum: unit tests, integration tests, validation and verification, and performance tests. That minimum is mandatory.
- **Integrate after module validation:** once each module passes its own tests, it is ready for integration testing as a system.
- **Real-world performance checks:** it is not enough that software "works"; verify performance requirements under realistic conditions.
- **Ensure tests actually catch failures:** when writing a test for a specific bug, intentionally trigger the bug and confirm the test detects it.
- **One human-found bug, one permanent automation:** if a human tester finds a defect, it should be the last manual occurrence; automated tests should check that exact defect from then on, every time, no exceptions.
- **Preserve time for new value and fewer defects:** automated regression checks prevent repeated defect hunting, free time to build new code, and support the goal of near-zero-defect products.
- **Ethical product purpose:** our goal is to delight users, not extract data, inflate vanity traffic, or empty their wallets.
- **Cross-functional developer perspective:** developers exposed to many parts of the organization often connect business pieces that are invisible to isolated departments.
- **Explicit professional responsibility:** pragmatic programmers do not avoid ownership; they accept challenges and produce design and code they are proud of.

## Quotes (short only)

- "Programmers are a little like cats: smart, persistent, stubborn, and independent." - Chapter idea
- "Do what works, not what is fashionable." - Chapter principle
- "Code is not done until all tests have run." - Central rule in this chapter

## My interpretation

This chapter lands one direct idea for me: quality does not come from individual heroes, it comes from team habits. If we do not care for how we learn, decide, and validate, we will fail under pressure. What stays with me most is the strict "done" definition (unit, integration, validation/verification, and performance) and the discipline of turning every human-found bug into a permanent automated check.

## Practical lessons

- Keep team size small enough for fast communication and real shared accountability.
- Reserve visible calendar time to evaluate candidate technologies through prototypes and evidence.
- Automate operational and quality work to reduce friction and repeated errors.
- Treat it as a delivery rule that no change is "done" without minimum tests (unit, integration, validation/verification, and performance), with no exceptions.
- Turn every manually detected defect into an automated regression test.
- Choose practices based on effectiveness in project context, not external prestige or trends.
- Keep the focus on delighting users, avoiding vanity metrics as the main criterion.

## Questions

- Is our current team small enough to coordinate without excess bureaucracy?
- Which "broken windows" are we tolerating today, and why?
- Do we have explicit time to fix systemic leaks, or do we only react to urgencies?
- Which technologies did we adopt for trend reasons instead of contextual evidence?
- How automated is our test chain, and which failures still depend on manual detection?
- Are we validating performance in real scenarios or only in ideal environments?

## Actions

- [ ] Audit team size, structure, and communication channels to reduce friction.
- [ ] Build a backlog of technical "broken windows" and close it iteratively with clear owners.
- [ ] Block biweekly time for candidate-technology prototypes and result analysis.
- [ ] Automate repetitive build, testing, validation, and quality reporting tasks.
- [ ] Formalize a "definition of done" checklist with unit, integration, validation/verification, and performance tests as mandatory minimum.
- [ ] For every manually detected bug, immediately add an automated regression test.
- [ ] Add performance tests with representative real-world data and load.
- [ ] Review one current methodology practice and explicitly adapt it to business context.

## Related notes

- Chapter 1: [01 - A pragmatic philosophy](01-a-pragmatic-philosophy.md)
- Chapter 4: [04 - Pragmatic paranoia](04-pragmatic-paranoia.md)
- Chapter 7: [07 - While you are coding](07-while-you-are-coding.md)
- Chapter 8: [08 - Before the project](08-before-the-project.md)
- Teamwork: [02 - Working well in teams](../../../software-engineering-at-google/chapters/EN/02-working-well-in-teams.md)

## See also

- Global concepts index: [docs/concepts-index.md](../../../../docs/concepts-index.md)
- Reading paths: [docs/reading-paths.md](../../../../docs/reading-paths.md)

---

**Navigation**

- Previous chapter: [08 - Before the project](08-before-the-project.md)
- Next chapter: Planned
- Related notes: [Book README](../../README.md), [Spanish version](../ES/09-proyectos-pragmaticos.es.md)

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its original authors and publishers.
- Quotes are short, attributed when possible, and used for educational purposes.
- This repository does not republish full chapters or substantial copyrighted excerpts.
