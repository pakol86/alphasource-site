# Release and Production Promotion Runbook

This runbook is required context for every release or production promotion to `https://alphasource.com.mx/`.

## Promotion Checklist

1. Confirm release scope and affected files.
2. Review changed static assets for credentials, private notes, and unintended test content.
3. Confirm the change does not overwrite or depend on `labs/` or `.well-known/`.
4. Commit to `main`.
5. Confirm the `Deploy Alpha Source Site` GitHub Actions run passes.
6. Verify the live site at `https://alphasource.com.mx/`.
7. Add a release entry to this file and to the GitHub wiki when the wiki is available.

## Release Entry Template

```markdown
## YYYY-MM-DD - Release Name

- Environment: `alphasource.com.mx`
- Source branch: `main`
- Commit: `<sha>`
- GitHub Actions run: `<run id or link>`
- Change summary: `<short summary>`
- DevSecOps checks: `<static review, workflow result, live verification>`
- Deployment target: `/home/vg6jiosnhg3v/public_html/alphasource.com.mx`
- Verification: `<live URL checks and evidence>`
- Rollback: `<previous known-good commit or workflow rerun>`
- Risks/follow-ups: `<known issues or none>`
```

## Release Log

## 2026-06-23 - DevSecOps Documentation Standard

- Environment: `alphasource.com.mx`
- Source branch: `main`
- Commit: `00146a9`
- GitHub Actions run: `28060285838`
- Change summary: Added versioned DevSecOps release documentation and linked it from the repository README.
- DevSecOps checks: Static documentation review completed; GitHub Actions deployment succeeded; no production content asset change was made.
- Deployment target: `/home/vg6jiosnhg3v/public_html/alphasource.com.mx`
- Verification: `Deploy Alpha Source Site` completed successfully.
- Rollback: Revert the documentation commit if needed.
- Risks/follow-ups: Docs-only commits now skip the production deploy workflow.

## 2026-06-23 - Initial cPanel FTPS Pipeline

- Environment: `alphasource.com.mx`
- Source branch: `main`
- Commits: `35ca5fa`, `11b316d`
- GitHub Actions runs: `28055568698`, `28055633005`
- Change summary: Replaced GitHub Pages deployment with an FTPS deployment to the cPanel-hosted main website.
- DevSecOps checks: Deploy-only FTP account scoped to the addon-domain docroot; repo secrets stored in GitHub; workflow excludes repo metadata and preserves `labs/` plus `.well-known/`; live checksum verification completed.
- Deployment target: `/home/vg6jiosnhg3v/public_html/alphasource.com.mx`
- Verification: Remote `index.html` checksum matched repository file, and `https://alphasource.com.mx/` returned expected site HTML.
- Rollback: Re-run the workflow from a previous known-good commit or revert the workflow/content change on `main`.
- Risks/follow-ups: Add stronger automated content/security checks if the website grows beyond a simple static site.
