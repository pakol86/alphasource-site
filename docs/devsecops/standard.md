# DevSecOps Standard

This standard applies to the Alpha Source main website.

## Principles

- Production documentation is part of every release.
- GitHub Actions is the source of truth for repeatable deployment.
- The cPanel master password is not a deployment credential.
- The deploy-only FTP account is scoped to the website root.
- The main website deploy must preserve the labs beta subdirectory and domain validation files.

## Required Gates

- Static review for credentials, private notes, internal-only links, and accidental test content.
- GitHub Actions deployment must succeed.
- Live URL verification must be performed after deployment.
- Release documentation must be updated for each promotion.

## Change Classification

- Low risk: copy or style changes to `index.html`, `styles.css`, or `script.js`.
- Medium risk: analytics tags, forms, external links, deploy workflow exclusions, or SEO metadata.
- High risk: cPanel credentials, deploy account scope, DNS, SSL, `.well-known/`, or anything that might affect `labs/`.

## Minimum Evidence

Each release or promotion must record:

- Commit SHA
- GitHub Actions run ID or link
- Static/security review result
- Live verification result
- Rollback path

