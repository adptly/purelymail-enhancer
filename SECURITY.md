# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Purelymail Enhancer seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them privately via one of these methods:

1. **GitHub Security Advisory** (Preferred)
   - Go to the [Security tab](https://github.com/adptly/purelymail-enhancer/security/advisories)
   - Click "Report a vulnerability"
   - Fill in the details

2. **Email**
   - Send an email to: code@adptly.com
   - Subject line: "[SECURITY] Purelymail Enhancer Vulnerability"

### What to Include

Please include the following information in your report:

- Type of vulnerability (e.g., XSS, CSRF, injection)
- Full paths of source file(s) related to the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to Expect

- **Acknowledgment:** Within 48 hours of your report
- **Initial Assessment:** Within 7 days we'll provide an initial assessment
- **Updates:** We'll keep you informed of our progress
- **Fix Timeline:** Critical issues will be patched ASAP, typically within 7-14 days
- **Credit:** With your permission, we'll credit you in the release notes

## Security Update Process

1. The security issue is received and assigned a primary handler
2. The problem is confirmed and affected versions are identified
3. Code is audited to find any similar problems
4. Fixes are prepared for all supported versions
5. New versions are released and announced

## Security Best Practices for Users

When using this extension:

- **Keep Updated:** Always use the latest version from the Firefox Add-on Store
- **Verify Source:** Only install from official sources (Firefox Add-on Store or this GitHub repository)
- **Check Permissions:** This extension only requires `activeTab` permission - if it asks for more, don't install it
- **Review Changes:** Check the CHANGELOG when updates are released to understand what changed

## Known Security Considerations

### What This Extension Does

- Modifies the visual presentation of purelymail.com/manage/users page
- Runs only on `https://purelymail.com/manage/users*`
- Does not make external network requests
- Does not collect or transmit any data
- Does not store any information (no localStorage, cookies, etc.)
- Does not inject or modify any forms or sensitive inputs

### Privacy

This extension:
- ✅ Runs only on Purelymail pages
- ✅ Has no analytics or tracking
- ✅ Makes no external requests
- ✅ Stores no user data
- ✅ Is open source and auditable

## Contact

For security-related questions that are not vulnerabilities, you can:
- Open a discussion on GitHub
- Email: code@adptly.com

## Attribution

We follow the principles of [Responsible Disclosure](https://en.wikipedia.org/wiki/Responsible_disclosure).
