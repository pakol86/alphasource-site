# Alpha Source Main Website DevSecOps

This folder documents the operating context for the public Alpha Source marketing website at `https://alphasource.com.mx/`.

## Current Context

- Repository: `pakol86/alphasource-site`
- Default branch: `main`
- Production URL: `https://alphasource.com.mx/`
- cPanel addon-domain root: `/home/vg6jiosnhg3v/public_html/alphasource.com.mx`
- Deployment protocol: FTPS through GitHub Actions
- Deploy account: `alphasourcedeploy@alphasource.com.mx`

## Deployment

Workflow:

- `.github/workflows/deploy-pages.yml`

Deployment details:

- Uses `SamKirkland/FTP-Deploy-Action@v4.4.0`
- Protocol: `ftps`
- Port: `21`
- Remote directory: `./`
- Does not use clean-slate deletion
- Preserves remote `labs/` and `.well-known/`

Required GitHub secrets:

- `CPANEL_FTP_SERVER`
- `CPANEL_FTP_USERNAME`
- `CPANEL_FTP_PASSWORD`

## Release Documentation Rule

Every release or production promotion must add a release entry to `release-runbook.md` with:

- Date
- Environment
- Branch and commit SHA
- GitHub Actions run ID or link
- DevSecOps checks performed
- Deployment target
- Live verification evidence
- Rollback path
- Risks or follow-ups

Raw passwords, tokens, and deploy secrets must never be written into repo files, wiki pages, issues, project cards, or memory files.

