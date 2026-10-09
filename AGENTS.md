## Shared skill loading

This project's skills are stored in `.agents/skills/`. For a user task, read `docs/agents/skills-catalog.md` to identify applicable skills, then read the selected skill's `SKILL.md` and any references needed for the task. Load only the skills relevant to the task.

Select model-invoked skills when their description matches the task. Use user-invoked skills when the user explicitly requests that skill; otherwise recommend them when useful. Follow the invocation settings recorded in each skill's frontmatter and `agents/openai.yaml`.

These repository files are the shared source for Codex and Work. When a client has no native skill discovery, read the files directly through the available repository or filesystem tools. If a required file is inaccessible, identify the missing access before reporting that the skill has loaded.

## Agent skills

### Issue tracker

Issues and specs are tracked as local Markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Use a single-context layout with `GLOSSARY.md` and `docs/adr/` at the project root. See `docs/agents/domain.md`.
