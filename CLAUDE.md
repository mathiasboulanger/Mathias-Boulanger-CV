@AGENTS.md

## Notes specific to Claude Code

The file above is the project contract and applies to any agent. What follows only concerns this environment.

### Verification before claiming done

There is no test suite here, so the gate is short and non negotiable:

```bash
npm run lint && npm run build
```

`next build` is the only type check in the project. If it passes, the deploy will pass. If it fails, main is broken and so is the live site, because a push to main deploys straight to production with no staging in between.

Never claim a change works without running the build. A dev server that renders correctly proves nothing about the static export: `basePath` resolution and image handling behave differently between `next dev` and `next build`.

### Local only files

`_local/` is excluded through `.git/info/exclude`, which is not versioned. It holds positioning notes and drafts that stay off GitHub. Do not move anything from `_local/` into the repo, do not reference its contents in committed files, and do not add it to `.gitignore`, since that would advertise that it exists.

### Rewriting history

If history ever needs rewriting again, commit or stash the working tree first. `git filter-repo` resets the working tree to the rewritten HEAD and silently discards uncommitted changes.

### Writing copy

Any visible text on this site is Mathias speaking in public about his own work. The voice rules live in the `humanizar` skill and a PostToolUse hook checks markdown files against them. The ones that get violated most often here: no em dashes in any language, no negated contrast constructions where a denied half props up the affirmed one, no bold labels opening list items, and no claim that cannot be traced to something that actually happened.

Content changes are worth more than code changes in this repo. The copy is what a hiring manager actually reads, and it is the part that goes stale.

### Git

Personal repo, so the identity is mathiasboulanger. A hook blocks commits made with the work identity. If it fires, check `git config user.email` and `gh auth status` rather than working around it.

Commit messages describe the change and nothing about how it was produced. No co-author trailers.
