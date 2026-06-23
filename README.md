# Alpha Source Site

Static marketing site for `alphasource.com.mx`.

## Deployment

This repository deploys to the live cPanel-hosted site for `https://alphasource.com.mx/`
through `.github/workflows/deploy-pages.yml`.

The workflow publishes the site over `FTPS` on every push to `main`.

Repository secrets required by the workflow:

- `CPANEL_FTP_SERVER`
- `CPANEL_FTP_USERNAME`
- `CPANEL_FTP_PASSWORD`

The deploy user is scoped to the addon-domain document root:

- `/home/vg6jiosnhg3v/public_html/alphasource.com.mx`

The workflow intentionally excludes repo metadata files and does not use a clean-slate
delete, so remote directories such as `labs/` and `.well-known/` remain intact.

## DevSecOps Release Documentation

Release and production-promotion context lives in [docs/devsecops](./docs/devsecops/README.md).
Every deployment to `https://alphasource.com.mx/` should update the release runbook
with the commit, workflow run, checks, verification, rollback path, and known risks.

## Custom Domain

The repository still includes a `CNAME` file for `alphasource.com.mx`, but the live
site now publishes to the existing GoDaddy/cPanel hosting instead of GitHub Pages.
