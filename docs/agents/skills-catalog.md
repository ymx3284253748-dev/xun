# Shared skills catalog

This index lists the 27 skills installed from `mattpocock/skills`. Each linked `SKILL.md` is authoritative for its workflow; read it before using the skill. “可自动选择” means the agent may select the skill for a matching task. “用户点名” means explicit user invocation is required.

| Skill | 调用方式 | 原版说明 |
| --- | --- | --- |
| [ask-matt](../../.agents/skills/ask-matt/SKILL.md) | 用户点名 | Ask which skill or flow fits your situation. A router over the skills in this repo. |
| [code-review](../../.agents/skills/code-review/SKILL.md) | 可自动选择 | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match what the originating issue/spec asked for?). Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to "review since X". |
| [codebase-design](../../.agents/skills/codebase-design/SKILL.md) | 可自动选择 | Shared vocabulary for designing deep modules. Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-navigable, or when another skill needs the deep-module vocabulary. |
| [diagnosing-bugs](../../.agents/skills/diagnosing-bugs/SKILL.md) | 可自动选择 | Diagnosis loop for hard bugs and performance regressions. Use when the user says "diagnose"/"debug this", or reports something broken/throwing/failing/slow. |
| [domain-modeling](../../.agents/skills/domain-modeling/SKILL.md) | 可自动选择 | Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a GLOSSARY.md, or recording or editing an ADR. |
| [grill-me](../../.agents/skills/grill-me/SKILL.md) | 用户点名 | A relentless interview to sharpen a plan or design. |
| [grill-with-docs](../../.agents/skills/grill-with-docs/SKILL.md) | 用户点名 | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. |
| [grilling](../../.agents/skills/grilling/SKILL.md) | 可自动选择 | Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases. |
| [handoff](../../.agents/skills/handoff/SKILL.md) | 用户点名 | Compact the current conversation into a handoff document for another agent to pick up. |
| [implement](../../.agents/skills/implement/SKILL.md) | 用户点名 | Implement a piece of work based on a spec or set of tickets. |
| [implement-spec](../../.agents/skills/implement-spec/SKILL.md) | 用户点名 | Implement the result of /to-spec and /to-tickets in code. |
| [improve-codebase-architecture](../../.agents/skills/improve-codebase-architecture/SKILL.md) | 用户点名 | Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick. |
| [pr](../../.agents/skills/pr/SKILL.md) | 可自动选择 | Use when writing a PR body. |
| [prototype](../../.agents/skills/prototype/SKILL.md) | 可自动选择 | Build a throwaway prototype to answer a design question. Use when the user wants to sanity-check whether a state model or logic feels right, or explore what a UI should look like. |
| [research](../../.agents/skills/research/SKILL.md) | 可自动选择 | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. Use when the user wants a topic researched, docs or API facts gathered, or reading legwork delegated to a background agent. |
| [retro](../../.agents/skills/retro/SKILL.md) | 用户点名 | Conduct a retrospective on a coding session. |
| [setup-matt-pocock-skills](../../.agents/skills/setup-matt-pocock-skills/SKILL.md) | 用户点名 | Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. Run once before first use of the other engineering skills. |
| [tdd](../../.agents/skills/tdd/SKILL.md) | 可自动选择 | Test-driven development. Use when the user wants to build features or fix bugs test-first, mentions "red-green-refactor", or wants integration tests. |
| [teach](../../.agents/skills/teach/SKILL.md) | 用户点名 | Teach the user a new skill or concept, within this workspace. |
| [to-questionnaire](../../.agents/skills/to-questionnaire/SKILL.md) | 用户点名 | Turn a decision you can't fully answer into a questionnaire for someone else to fill in. |
| [to-spec](../../.agents/skills/to-spec/SKILL.md) | 用户点名 | Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed. |
| [to-tickets](../../.agents/skills/to-tickets/SKILL.md) | 用户点名 | Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker (edges as text in one file per ticket locally, or native blocking links on a real tracker). |
| [triage](../../.agents/skills/triage/SKILL.md) | 用户点名 | Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs. |
| [wait-what](../../.agents/skills/wait-what/SKILL.md) | 用户点名 | Stop. That last message did not land: re-pitch it. |
| [wayfinder](../../.agents/skills/wayfinder/SKILL.md) | 用户点名 | Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear. |
| [wizard](../../.agents/skills/wizard/SKILL.md) | 可自动选择 | Generate an interactive bash wizard that walks a human through steps only they can perform. Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cutover. Don't invoke this for steps the agent can perform itself. |
| [writing-for-agents](../../.agents/skills/writing-for-agents/SKILL.md) | 可自动选择 | Writing documents for agents. Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md. |
