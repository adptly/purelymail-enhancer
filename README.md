# Purelymail Enhancer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Firefox](https://img.shields.io/badge/Firefox-140.0+-orange.svg)](https://www.mozilla.org/firefox/)

A Firefox extension that improves Purelymail's user management interface by grouping email addresses by domain.

## The Problem

Purelymail's default user management page displays all email addresses in a flat, unsorted list. When you have 50+ emails across multiple domains, it becomes difficult to:
- Find emails for a specific domain
- See how many emails exist per domain
- Manage related emails together

## The Solution

This extension transforms the user list into an organized, searchable interface with emails grouped by domain.

## Features

| Feature | Description |
|---------|-------------|
| **Domain Grouping** | Emails organized into collapsible domain sections |
| **Search/Filter** | Instantly find emails across all domains |
| **Email Count** | See how many emails per domain at a glance |
| **Expand/Collapse All** | Quickly show or hide all domains |
| **Alphabetical Sorting** | Domains and emails sorted A-Z |
| **Stats Bar** | Shows total users and domain count |
| **Matching Theme** | Purple styling that fits Purelymail's design |

## Before & After

### Before
A flat list with no organization:
```
deez@purelymail.com
ghian@vssets.com
accounting@vssets.com
admin@modularlabs.ai
support@modularlabs.ai
info@modularlabs.ai
... (50+ more emails mixed together)
```

### After
Grouped by domain with search and stats:
```
[Search emails...] [Expand All] [Collapse All] [+ New User]

52 users across 9 domains

▼ adptly.com (6)
   accounts@adptly.com
   code@adptly.com
   ghian@adptly.com
   hello@adptly.com
   test@adptly.com
   tiffany@adptly.com

▼ comebaek.com (15)
   apple@comebaek.com
   cloud@comebaek.com
   ...

▶ modularlabs.ai (12)  [collapsed]

▶ vssets.com (8)  [collapsed]
```

## Installation

### Temporary Installation (Development)

1. Open Firefox and navigate to `about:debugging`
2. Click **"This Firefox"** in the left sidebar
3. Click **"Load Temporary Add-on..."**
4. Select `manifest.json` from the extension folder
5. Navigate to [purelymail.com/manage/users](https://purelymail.com/manage/users)
6. The page will automatically transform

### Permanent Installation

1. Package the extension as a `.xpi` file
2. Submit to [Firefox Add-ons](https://addons.mozilla.org/) for signing
3. Install the signed extension

## Usage

The extension automatically activates when you visit the Purelymail users page.

### Search
- Type in the search box to filter emails
- Matches against both local part and domain
- Domain cards auto-expand when they contain matches
- Count updates to show "matching/total"

### Navigation
- **Click domain header** - Toggle expand/collapse for that domain
- **Expand All** - Show all emails in all domains
- **Collapse All** - Hide all email lists
- **+ New User** - Opens Purelymail's add user page

### Keyboard Shortcuts
- **Tab** - Navigate between controls
- **Enter** - Activate focused button

## File Structure

```
purelymail-enhancer/
├── manifest.json       # Extension manifest (v2)
├── content.js          # Main script - parses table, creates UI
├── content.css         # Enhanced styling
├── icons/
│   ├── icon-48.svg     # Toolbar icon
│   └── icon-96.svg     # Large icon
├── README.md           # This file
├── CHANGELOG.md        # Version history
└── docs/
    └── DEVELOPMENT.md  # Developer documentation
```

## Permissions

| Permission | Purpose |
|------------|---------|
| `activeTab` | Access the current tab to modify the page |

This extension only runs on `purelymail.com/manage/users*` and does not collect or transmit any data.

## How It Works

1. Content script injects when page loads on `purelymail.com/manage/users`
2. Finds the existing `<table class="striped">` containing emails
3. Parses all `<a href="/manage/user/{id}">` links
4. Extracts domain from each email address
5. Groups and sorts emails by domain
6. Replaces the table with enhanced card-based UI
7. All original links preserved - clicking emails works normally

## Browser Compatibility

- Firefox 140.0 or later (required for data privacy declarations)
- Uses Manifest V2 for maximum compatibility

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Extension not working | Ensure you're on `purelymail.com/manage/users` (not `/manage/` or other pages) |
| Page looks broken | Try refreshing the page (Ctrl+R) |
| Search not finding emails | Search matches email addresses only, not user IDs |
| Extension disappeared | Temporary add-ons are removed on browser restart; reload via `about:debugging` |

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## Security

For information about reporting security vulnerabilities, please see our [Security Policy](SECURITY.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

Need help? See our [Support Guide](SUPPORT.md) for:
- Getting help and asking questions
- Reporting bugs
- Requesting features
- Common troubleshooting steps

Quick links:
- **Bug Reports:** [Open an issue](https://github.com/adptly/purelymail-enhancer/issues/new?template=bug_report.md)
- **Feature Requests:** [Request a feature](https://github.com/adptly/purelymail-enhancer/issues/new?template=feature_request.md)
- **Questions:** [Ask a question](https://github.com/adptly/purelymail-enhancer/issues/new?template=question.md)
