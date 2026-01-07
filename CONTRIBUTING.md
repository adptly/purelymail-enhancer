# Contributing to Purelymail Enhancer

Thank you for considering contributing to Purelymail Enhancer! This document provides guidelines for contributing to the project.

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please be respectful and constructive in all interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear description** of the issue
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Firefox version** you're using
- **Screenshots** if applicable

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Clear description** of the feature
- **Use case** - why would this be useful?
- **Mockups or examples** if applicable

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes**
   - Follow the existing code style
   - Test your changes thoroughly
   - Update documentation if needed
3. **Test the extension**
   - Load it as a temporary add-on in Firefox (`about:debugging`)
   - Verify it works on https://purelymail.com/manage/users
   - Check browser console for errors
4. **Commit your changes**
   - Use clear, descriptive commit messages
   - Reference issue numbers if applicable
5. **Submit a pull request**
   - Describe what you changed and why
   - Link any related issues

## Development Setup

### Prerequisites

- Firefox 142.0 or later (required for data privacy declarations)
- A Purelymail account with access to the user management page
- Basic knowledge of HTML, CSS, and JavaScript

### Local Development

1. Clone the repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the sidebar
4. Click "Load Temporary Add-on"
5. Select `manifest.json` from your local repository
6. Navigate to https://purelymail.com/manage/users
7. Make changes to the code
8. Click "Reload" in `about:debugging` to test changes

### File Structure

```
purelymail-enhancer/
├── manifest.json       # Extension configuration
├── content.js          # Main functionality
├── content.css         # Styling
├── icons/              # Extension icons
├── docs/               # Documentation
│   └── DEVELOPMENT.md  # Technical details
├── README.md           # User documentation
├── CHANGELOG.md        # Version history
├── LICENSE             # MIT License
└── CONTRIBUTING.md     # This file
```

## Code Style Guidelines

### JavaScript

- Use `const` and `let` instead of `var`
- Use descriptive variable names
- Add comments for complex logic
- Keep functions focused and single-purpose

### CSS

- Follow existing naming conventions
- Use CSS variables for colors
- Keep selectors specific but not overly complex
- Add comments for non-obvious styling decisions

### Testing Checklist

Before submitting a PR, verify:

- [ ] Extension loads without errors
- [ ] Domain grouping works correctly
- [ ] Search/filter functionality works
- [ ] Expand/collapse works for individual domains
- [ ] Expand All / Collapse All buttons work
- [ ] Stats bar shows correct counts
- [ ] Email links still work
- [ ] "New User" button works
- [ ] Styling matches Purelymail's theme
- [ ] No console errors
- [ ] Works with varying numbers of domains/emails

## Questions?

If you have questions about contributing, feel free to:

- Open an issue with the "question" label
- Check the [DEVELOPMENT.md](docs/DEVELOPMENT.md) documentation

## Versioning

This project follows [Semantic Versioning](https://semver.org/) (SemVer):

- **Major version** (X.0.0) - Breaking changes or major new features
- **Minor version** (0.X.0) - New features, backward compatible
- **Patch version** (0.0.X) - Bug fixes, backward compatible

Examples:
- `1.0.0` → `1.0.1` - Bug fix
- `1.0.1` → `1.1.0` - New feature (search added)
- `1.1.0` → `2.0.0` - Breaking change (manifest v3 migration)

When submitting changes, indicate in your PR description whether it should be a major, minor, or patch release.

## License

By contributing to Purelymail Enhancer, you agree that your contributions will be licensed under the MIT License.
