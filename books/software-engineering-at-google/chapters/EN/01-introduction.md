[← Back to Book](../../README.md) | [↑ Back to Index](../../../../README.md) | [🌐 Switch Language](../ES/01-introduction.es.md)

# 01 - What is software engineering?

## Core idea

In a software engineering project, the main concern is not only whether something works today, but how it behaves over time and through inevitable change. Codebase sustainability depends on being able to change what must change, safely, during its full useful life.

## Key concepts

- **Time and change as the core axis:** real system value is measured by continuous adaptability.
- **"Works now" vs. "can be maintained":** they are not the same; maintainability includes cost, safety, and coordination.
- **Codebase sustainability:** a codebase is sustainable when it can change what it needs to change, safely, throughout its lifecycle.
- **Scaling and organizational costs:** as the organization and product grow, engineering work needed to sustain the system also grows.
- **Scaling policies:** clear processes and limits let infrastructure scale without owning responsibility for unknown uses outside CI visibility.
- **Revisable decisions over time:** technical decisions should not be kept by hierarchy ("because I said so"), but by periodic review and context.
- **Programming vs. software engineering:** programming is writing code now; software engineering includes policies, practices, and tools so that code remains useful and collaborative over time.

## Quotes (short only)

- "We need to be able to change."
- "It is not the same to work now as to work indefinitely."
- "Software engineering is the set of policies, practices, and tools needed to keep code useful over time."

## My interpretation

The chapter forces a shift in success criteria: delivering a working solution is not the end, it is the beginning. The hard part is sustaining change capacity without breaking the system or exploding coordination costs. That is why software engineering looks more like managing a living system than closing isolated tasks.

## Practical lessons

- Evaluate decisions by future maintainability, not only immediate implementation speed.
- Design scaling policies that keep growth feasible with a bounded number of engineers.
- Define clear responsibilities across product, infrastructure, and continuous integration teams.
- Revisit technical decisions periodically throughout system lifetime.
- Avoid authority-driven logic in critical decisions: prioritize evidence, context, and impact.

## Questions

- Which parts of our system "work today" but would not scale with more changes or a bigger team?
- Can our codebase change safely, or only with high operational risk?
- Do current scaling policies remain feasible at our current organizational size?
- Which technical decisions should we revisit this quarter to prevent structural debt?

## Actions

- [ ] Include an explicit "maintainability and change impact" section in every technical proposal.
- [ ] Define a review cycle for critical technical decisions (architecture, build, infrastructure).
- [ ] Add a PR check: "does this only work now, or is it also maintainable?".
- [ ] Review with infrastructure which critical use cases are actually covered by CI.

## Related notes

- Book key takeaways: [Software Engineering at Google - Key takeaways](../../README.md#key-takeaways)
- Practical applications: [Software Engineering at Google - Practical applications](../../README.md#practical-applications)
- Leadership and team management: [05 - Team Leadership](05-team-leadership.md)

## See also

- Reusable chapter format: [Chapter template](../../../../templates/chapter-template.md)
- Repository workflow and structure: [Dev Notes README](../../../../README.md)

---

**Navigation**

- Previous chapter: None (start of book)
- Next chapter: [05 - Team Leadership](05-team-leadership.md)
- Related notes: [Book README](../../README.md), [Spanish chapter](../ES/01-introduction.es.md)

## Disclaimer

- These notes are personal interpretations and learning material.
- Any quoted content belongs to its respective authors.
- Quotes are short and used for educational purposes.
