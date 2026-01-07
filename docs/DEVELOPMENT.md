# Development Guide

Technical documentation for developing and extending Purelymail Enhancer.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                  purelymail.com/manage/users            │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │ content.js  │───▶│  Parse DOM  │───▶│  Group by   │  │
│  │  (entry)    │    │   table     │    │   domain    │  │
│  └─────────────┘    └─────────────┘    └──────┬──────┘  │
│                                               │         │
│                                               ▼         │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │ content.css │───▶│  Replace    │◀───│  Create     │  │
│  │  (styles)   │    │   table     │    │  new UI     │  │
│  └─────────────┘    └─────────────┘    └─────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Page Structure (Original)

The extension targets this DOM structure on `purelymail.com/manage/users`:

```html
<main>
  <h2>Users</h2>
  <table class="striped">
    <tbody>
      <tr>
        <td>
          <button onclick="location.href='/manage/user/new'">
            Create new user
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/manage/user/2146">deez@purelymail.com</a>
        </td>
      </tr>
      <tr>
        <td>
          <a href="/manage/user/2147">ghian@vssets.com</a>
        </td>
      </tr>
      <!-- ... more emails ... -->
    </tbody>
  </table>
</main>
```

## Data Structures

### Parsed Email Object
```javascript
{
  email: "ghian@vssets.com",      // Full email address
  href: "/manage/user/2147",      // Link to edit page
  domain: "vssets.com",           // Extracted domain
  localPart: "ghian"              // Part before @
}
```

### Grouped Structure
```javascript
[
  {
    domain: "adptly.com",
    emails: [
      { email: "accounts@adptly.com", href: "/manage/user/254960", ... },
      { email: "code@adptly.com", href: "/manage/user/254962", ... },
      // ... sorted alphabetically by localPart
    ]
  },
  {
    domain: "comebaek.com",
    emails: [ ... ]
  },
  // ... sorted alphabetically by domain
]
```

## Core Functions

### `init()`
Entry point. Finds the table, parses emails, creates enhanced UI.

### `parseEmails(table)`
Extracts email data from table rows.
- Finds all `<a href="/manage/user/{id}">` links
- Filters to only those containing `@`
- Returns array of email objects

### `groupByDomain(emails)`
Groups emails by domain.
- Creates object with domain keys
- Sorts emails within each domain by localPart
- Converts to sorted array of group objects

### `createEnhancedUI(grouped)`
Builds the new interface.
- Creates toolbar (search, buttons)
- Creates stats bar
- Creates domain cards
- Sets up event listeners

### `createDomainCard(group)`
Creates a single domain section.
- Header with toggle, name, count
- Email list with links
- Click handler for collapse/expand

### `filterEmails(query)`
Handles search functionality.
- Filters emails by query
- Shows/hides rows and cards
- Updates count badges
- Auto-expands matching cards

## CSS Classes

| Class | Purpose |
|-------|---------|
| `.pm-enhancer` | Root container |
| `.pm-toolbar` | Search and buttons row |
| `.pm-search` | Search input |
| `.pm-btn` | Button base styles |
| `.pm-btn-primary` | Purple primary button |
| `.pm-btn-secondary` | Gray secondary button |
| `.pm-stats` | Stats bar |
| `.pm-domain-card` | Domain section container |
| `.pm-domain-card.collapsed` | Collapsed state |
| `.pm-domain-header` | Clickable domain header |
| `.pm-domain-toggle` | Expand/collapse arrow |
| `.pm-domain-name` | Domain text |
| `.pm-domain-count` | Email count badge |
| `.pm-email-list` | Container for email rows |
| `.pm-email-row` | Single email row |
| `.pm-email-link` | Email link |
| `.pm-local-part` | Part before @ (purple) |
| `.pm-at` | @ symbol (gray) |
| `.pm-domain-part` | Domain part (gray) |

## Extending

### Adding New Features

#### Bulk Actions
```javascript
// Add checkboxes to email rows
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className = 'pm-email-checkbox';
emailRow.prepend(checkbox);

// Add bulk action buttons to toolbar
const bulkDelete = document.createElement('button');
bulkDelete.textContent = 'Delete Selected';
bulkDelete.addEventListener('click', handleBulkDelete);
```

#### Favorite Domains
```javascript
// Store favorites in localStorage
const favorites = JSON.parse(localStorage.getItem('pm-favorites') || '[]');

// Add star button to domain header
const starBtn = document.createElement('button');
starBtn.className = 'pm-star-btn';
starBtn.textContent = favorites.includes(domain) ? '★' : '☆';
```

#### Export to CSV
```javascript
function exportToCSV(grouped) {
  const rows = ['Email,Domain'];
  grouped.forEach(group => {
    group.emails.forEach(item => {
      rows.push(`${item.email},${item.domain}`);
    });
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
  // ... download logic
}
```

### Supporting Other Pages

To extend to other Purelymail pages, update `manifest.json`:

```json
{
  "content_scripts": [
    {
      "matches": [
        "https://purelymail.com/manage/users*",
        "https://purelymail.com/manage/domains*",
        "https://purelymail.com/manage/routing*"
      ],
      "js": ["content.js"],
      "css": ["content.css"]
    }
  ]
}
```

Then add page detection in `content.js`:

```javascript
function init() {
  const path = window.location.pathname;

  if (path.startsWith('/manage/users')) {
    enhanceUsersPage();
  } else if (path.startsWith('/manage/domains')) {
    enhanceDomainsPage();
  } else if (path.startsWith('/manage/routing')) {
    enhanceRoutingPage();
  }
}
```

## Testing

### Manual Testing Checklist

- [ ] Extension loads on `/manage/users`
- [ ] All emails are parsed correctly
- [ ] Domains are sorted alphabetically
- [ ] Emails within domains are sorted
- [ ] Email counts are accurate
- [ ] Search filters correctly
- [ ] Search count updates (matching/total)
- [ ] Expand/Collapse All buttons work
- [ ] Individual domain toggle works
- [ ] Clicking email opens edit page
- [ ] New User button works
- [ ] Responsive on mobile widths

### Console Debugging

```javascript
// Check if content script loaded
console.log('Purelymail Enhancer loaded');

// Log parsed emails
console.log('Parsed emails:', emails);

// Log grouped structure
console.log('Grouped by domain:', grouped);
```

## Building for Distribution

### Package as XPI

```bash
cd purelymail-enhancer
zip -r ../purelymail-enhancer.xpi * -x "*.md" -x "docs/*"
```

### Submit to AMO

1. Create account at [addons.mozilla.org](https://addons.mozilla.org)
2. Submit the `.xpi` file
3. Wait for review and signing
4. Distribute signed extension

## Troubleshooting

### Extension Not Loading

1. Check `about:debugging` for errors
2. Verify URL pattern matches
3. Check console for JavaScript errors

### Styles Not Applying

1. Check CSS file is listed in manifest
2. Verify selectors match created elements
3. Check for CSS specificity conflicts with page styles

### Emails Not Parsing

1. Verify table structure hasn't changed
2. Check selector: `table.striped`
3. Verify link format: `/manage/user/{id}`
