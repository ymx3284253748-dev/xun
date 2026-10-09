# Codex 与 Work 共用的 skills 配置

配置保存在项目仓库 [ymx3284253748-dev/xun](https://github.com/ymx3284253748-dev/xun) 中，随 Git 提交管理版本。

共享范围是这个项目。文件保存在仓库后，两边读取同一个项目及提交版本即可使用同一套内容；它不把 skills 安装到账号、其他项目或其他设备的全局目录中。

## Codex

在电脑上克隆或更新本项目，然后从项目根目录启动支持 Agent Skills 的 Codex CLI；它会发现 `.agents/skills/` 下的 skills。本项目的根目录 AGENTS.md 指向技能索引和项目配置。

## Work

让 Work 连接并访问这个项目仓库。Work 能读取根目录的 AGENTS.md 时，可按其中的说明读取技能索引和相关 SKILL.md。原生 skill 目录没有自动发现这些文件时，可在任务开头说明：

> 请先读取这个项目的 AGENTS.md 和 docs/agents/skills-catalog.md，再为我的任务选择允许自动调用的 skill；需要我点名的 skill，请先推荐。

新对话需要有这个仓库的访问权限。仅在没有连接该仓库的新对话中提到 skill 名字，不能证明文件已加载。

## 项目配置

工单保存在 `.scratch/<feature-slug>/`，使用默认分流标签。领域文档采用单一上下文：根目录 GLOSSARY.md 与 docs/adr/。配置见 docs/agents/issue-tracker.md、triage-labels.md 和 domain.md。

这些是已确认的默认值，可直接编辑 docs/agents/ 中的配置文件调整。

## 来源与维护

上游：https://github.com/mattpocock/skills

已安装 27 个官方发布的 skills，具体来源和哈希记录在 skills-lock.json，MIT 许可保存在 .agents/skills/LICENSE.mattpocock。

更新现有 skills 可在项目根目录执行 `npx skills@latest update --project --yes`。更新后审核差异并提交；新技能需另行选择安装，调用方式变化时更新技能索引。
