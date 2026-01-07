# Support

Need help with Purelymail Enhancer? Here's where to get support based on your needs.

## Documentation

Before asking for help, please check our documentation:

- **[README.md](README.md)** - Installation, usage, and features overview
- **[DEVELOPMENT.md](docs/DEVELOPMENT.md)** - Technical documentation for developers
- **[CHANGELOG.md](CHANGELOG.md)** - Version history and changes
- **[TROUBLESHOOTING](#troubleshooting)** - Common issues and solutions (below)

## Questions

Have a question about using the extension? Here are your options:

### GitHub Discussions (Preferred)
- Visit: [GitHub Discussions](https://github.com/adptly/purelymail-enhancer/discussions)
- Best for: General questions, feature discussions, usage help
- Response time: Usually within 1-3 days

### GitHub Issues (Question Label)
- Create an issue with the "question" label
- Use the [question template](https://github.com/adptly/purelymail-enhancer/issues/new?template=question.md)
- Best for: Specific usage questions or clarifications

### Email Support
- Email: code@adptly.com
- Best for: Private questions or concerns
- Response time: Usually within 2-5 business days

## Bug Reports

Found a bug? Please report it!

1. **Check existing issues** first: [GitHub Issues](https://github.com/adptly/purelymail-enhancer/issues)
2. **Create a new bug report** using our template: [Bug Report](https://github.com/adptly/purelymail-enhancer/issues/new?template=bug_report.md)
3. Include:
   - Firefox version
   - Extension version
   - Steps to reproduce
   - Screenshots if applicable
   - Browser console errors

## Feature Requests

Have an idea for a new feature?

1. **Check existing requests** first: [GitHub Issues - Enhancement](https://github.com/adptly/purelymail-enhancer/issues?q=is%3Aissue+label%3Aenhancement)
2. **Submit a feature request**: [Feature Request](https://github.com/adptly/purelymail-enhancer/issues/new?template=feature_request.md)
3. Describe:
   - The feature you'd like
   - Why it would be useful
   - How you envision it working

## Security Vulnerabilities

**DO NOT report security vulnerabilities in public issues.**

Please see our [Security Policy](SECURITY.md) for instructions on reporting security issues privately.

## Contributing

Want to contribute code or documentation?

- Read our [Contributing Guidelines](CONTRIBUTING.md)
- Check out open issues labeled ["good first issue"](https://github.com/adptly/purelymail-enhancer/labels/good%20first%20issue)
- Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## Troubleshooting

### Extension Not Working

**Problem:** Extension doesn't activate on Purelymail page

**Solutions:**
- Ensure you're on `https://purelymail.com/manage/users` (not just `/manage/`)
- Check `about:debugging` to verify extension is loaded
- Try refreshing the page (Ctrl+R or Cmd+R)
- Check browser console (F12) for errors

### Search Not Finding Emails

**Problem:** Search doesn't show expected results

**Solutions:**
- Search matches email addresses only, not user IDs
- Try searching for just the domain or local part
- Check if emails are actually on the page (scroll through original table if needed)

### Extension Disappeared After Restart

**Problem:** Extension not showing after Firefox restart

**Solutions:**
- Temporary add-ons are removed on browser restart (by Firefox design)
- Reload via `about:debugging` → "Load Temporary Add-on"
- For permanent installation, install from Firefox Add-ons store

### Styling Issues

**Problem:** Page looks broken or styling conflicts

**Solutions:**
- Refresh the page (Ctrl+R or Cmd+R)
- Clear browser cache
- Disable other extensions that might conflict
- Check if Purelymail updated their page structure

### Performance Issues

**Problem:** Page is slow with many emails

**Solutions:**
- The extension is optimized for 100+ emails
- Try collapsing all domains when not searching
- Check Firefox performance settings
- Report the issue with your email count for investigation

## Response Times

| Channel | Expected Response |
|---------|-------------------|
| GitHub Issues (Bug) | 1-3 days |
| GitHub Issues (Question) | 1-3 days |
| GitHub Discussions | 1-5 days |
| Email | 2-5 business days |
| Security Reports | 48 hours (acknowledgment) |

## Community Guidelines

When seeking support:

- ✅ Be respectful and patient
- ✅ Provide detailed information
- ✅ Check documentation first
- ✅ Search existing issues before creating new ones
- ✅ Follow our [Code of Conduct](CODE_OF_CONDUCT.md)

## Additional Resources

- **Firefox Add-ons Support:** [Mozilla Support](https://support.mozilla.org/products/firefox/add-ons)
- **Purelymail Help:** [Purelymail Documentation](https://purelymail.com/)

---

**Not finding what you need?** Open an issue on [GitHub](https://github.com/adptly/purelymail-enhancer/issues) and we'll help you out!
