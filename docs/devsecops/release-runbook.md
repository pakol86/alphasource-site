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

## 2026-06-27 - Google Translate Selector

- Environment: `alphasource.com.mx`
- Source branch: `main`
- Commit: `f8d5d0b`
- GitHub Actions run: `28304456849` (`https://github.com/pakol86/alphasource-site/actions/runs/28304456849`)
- Change summary: Added a header language control that keeps the curated English/Spanish copy and offers additional Google Translate page-translation links for Portuguese, French, German, Italian, Japanese, Korean, Simplified Chinese, and Traditional Chinese.
- DevSecOps checks: Static diff review completed; `node --check script.js` passed; desktop/mobile headless Chrome screenshots reviewed; deployment workflow completed successfully.
- Deployment target: `/home/vg6jiosnhg3v/public_html/alphasource.com.mx`
- Verification: `https://alphasource.com.mx/` returned HTTP 200 and live `index.html`, `script.js`, and `styles.css` include the new Google Translate selector assets.
- Rollback: Revert `f8d5d0b` and push to `main`, then confirm the deploy workflow succeeds.
- Risks/follow-ups: Google Translate output is machine-generated and not SEO-indexable localized content; use curated Spanish/English copy for primary messaging and consider dedicated localized pages if marketing campaigns require indexed multilingual landing pages.

## 2026-06-23 - Docs-Only Deploy Skip

- Environment: `alphasource.com.mx`
- Source branch: `main`
- Commit: `4c39ef6`
- GitHub Actions run: `28060546372`
- Change summary: Updated the main website deploy workflow so future docs-only pushes do not trigger production FTPS deploys.
- DevSecOps checks: Workflow-file change triggered `Deploy Alpha Source Site`, which completed successfully.
- Deployment target: `/home/vg6jiosnhg3v/public_html/alphasource.com.mx`
- Verification: GitHub Actions run `28060546372` completed successfully.
- Rollback: Revert `4c39ef6` if documentation-only commits should deploy again.
- Risks/follow-ups: None for current static-site deployment.

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
