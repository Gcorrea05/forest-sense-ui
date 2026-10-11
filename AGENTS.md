<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep visual components, deterministic fixtures/scoring, shared state and the data-service interface separate under the operator feature; this makes the preview adapter replaceable without changing UI domain rules.
- Use one root-level OperatorProvider and the local OperatorDataService adapter for all manager and OnePager routes; shared criteria and storage events keep tab comparisons consistent.
- Derive charts, map position, alerts and scoring from the same staged observations; this prevents competing versions of operational truth.
- Rank within family and source using common valid stages, and never overwrite events when changing criteria or restarting a run; this ensures comparable scores and auditable history.
