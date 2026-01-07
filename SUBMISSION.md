# Firefox Add-on Store Submission Guide

This document outlines the steps to submit Purelymail Enhancer to the Firefox Add-on Store.

## Pre-Submission Checklist

### Required Files ✓

- [x] `manifest.json` - Extension configuration
- [x] `content.js` - Main functionality
- [x] `content.css` - Styling
- [x] `icons/icon-48.svg` - Small icon
- [x] `icons/icon-96.svg` - Large icon
- [x] `README.md` - User documentation
- [x] `LICENSE` - MIT License
- [x] `CHANGELOG.md` - Version history with SemVer links
- [x] `CONTRIBUTING.md` - Contribution guidelines with SemVer policy
- [x] `SECURITY.md` - Security policy and vulnerability reporting
- [x] `SUPPORT.md` - Support and troubleshooting guide
- [x] `screenshots/README.md` - Screenshot capture instructions

### Before Submitting

1. **Verify Extension ID**
   - Current ID: `purelymail-enhancer@code.adptly.com`
   - This follows the recommended email address format for Firefox extensions
   - Located in `manifest.json` line 25

2. **Capture Screenshots**
   - [ ] Follow instructions in [screenshots/README.md](screenshots/README.md)
   - [ ] Capture at least 3-4 screenshots showing key features
   - [ ] Save screenshots to `screenshots/` directory

3. **Test the Extension**
   - [ ] Load as temporary add-on in Firefox (`about:debugging`)
   - [ ] Visit https://purelymail.com/manage/users
   - [ ] Verify all features work:
     - [ ] Domain grouping displays correctly
     - [ ] Search/filter works
     - [ ] Expand/Collapse All buttons work
     - [ ] Individual domain toggle works
     - [ ] Email links work
     - [ ] New User button works
     - [ ] Stats bar shows correct counts
   - [ ] Check browser console for errors (F12)
   - [ ] Test with different numbers of emails/domains

4. **Package the Extension**
   ```bash
   # Create a .zip file containing all necessary files
   # Do NOT include: .git, .cef, node_modules, SUBMISSION.md, docs/

   # From the project directory:
   zip -r purelymail-enhancer-v1.0.1.zip \
     manifest.json \
     content.js \
     content.css \
     icons/ \
     README.md \
     LICENSE \
     CHANGELOG.md \
     SECURITY.md
   ```

## Submission Process

### 1. Create Mozilla Developer Account

1. Go to https://addons.mozilla.org/
2. Click "Register" or "Log in" in the top right
3. Create an account if you don't have one

### 2. Submit Add-on

1. Visit https://addons.mozilla.org/en-US/developers/addon/submit/
2. Click "Upload Your Add-on"
3. Upload your `.zip` package file
4. Fill in the submission form:

   **Distribution Channel:**
   - Choose "On this site" (for public distribution)

   **Name:** Purelymail Enhancer

   **Add-on URL:** purelymail-enhancer

   **Summary:** (from manifest.json)
   > Improves Purelymail's user management by grouping emails by domain

   **Description:** (expanded from README)
   > Transform Purelymail's user management page into an organized, searchable interface. This extension groups email addresses by domain, adds search functionality, collapsible sections, and useful statistics - making it easy to manage 50+ emails across multiple domains.
   >
   > Features:
   > • Domain grouping with collapsible sections
   > • Instant search across all emails
   > • Email count per domain
   > • Expand/Collapse all controls
   > • Stats bar showing totals
   > • Purple theme matching Purelymail's design
   >
   > Privacy: This extension only runs on purelymail.com/manage/users and does not collect or transmit any data.

   **Categories:**
   - Productivity
   - Web Development (optional)

   **Tags:**
   - purelymail
   - email
   - management
   - organization
   - productivity

   **Screenshots:**
   - See [screenshots/README.md](screenshots/README.md) for detailed capture instructions
   - Required: Before/After, Search feature, Collapsed view
   - Upload 3-5 screenshots showing key features
   - Recommended size: 1280x800 or 1920x1080

   **Support Email:** code@adptly.com

   **Source Code:** No (this extension has no minification/obfuscation)

   **Version Notes:** (from CHANGELOG.md)
   > Version 1.0.1 - Domain cards now start collapsed by default

5. Review and submit

### 3. Review Process

- **Automated Review:** Usually completes in minutes
- **Manual Review:** If flagged, can take several days
- **Email Notifications:** You'll receive updates on review status

### 4. After Approval

- Add-on will be listed at: `https://addons.mozilla.org/firefox/addon/purelymail-enhancer/`
- Update your README.md with the installation link
- Share with the Purelymail community!

## Store Listing Optimization

### Good Screenshots to Include

1. **Before** - The default Purelymail user list (flat, unsorted)
2. **After** - Your enhanced view with grouped domains
3. **Search** - Demonstrating the search/filter feature
4. **Collapsed** - Showing the compact view with collapsed domains

### Writing a Good Description

Focus on:
- The problem it solves
- Key benefits for users
- Privacy and security (no data collection)
- Easy to use (works automatically)

## Privacy Policy

Since this extension:
- Only runs on purelymail.com
- Doesn't collect any data
- Doesn't make external requests
- Doesn't store any information

You can state in the submission:

> **Privacy Policy:** This extension does not collect, store, or transmit any user data. It only modifies the visual presentation of the Purelymail user management page locally in your browser.

## Support

After publication, monitor:
- Reviews on the Firefox Add-on store
- GitHub issues (if you publish the repository)
- Support email you provided

## Updating the Extension

When you release a new version:

1. Update `version` in `manifest.json`
2. Update `CHANGELOG.md`
3. Create new `.zip` package
4. Go to https://addons.mozilla.org/developers/
5. Click "Edit Product Page" for your add-on
6. Upload new version
7. Submit for review

## Resources

- [Firefox Extension Workshop](https://extensionworkshop.com/)
- [Submitting an Add-on Guide](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [Add-on Policies](https://extensionworkshop.com/documentation/publish/add-on-policies/)
- [Developer Hub](https://addons.mozilla.org/en-US/developers/)

## Troubleshooting Submission Issues

**Common Issues:**

| Issue | Solution |
|-------|----------|
| "Extension ID already exists" | Change the ID in manifest.json |
| "Missing required field" | Check all manifest.json required fields |
| "Icon size wrong" | Ensure icons are 48px and 96px |
| "Failed validation" | Run extension through [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) validator |

## Need Help?

- Mozilla Support: https://discourse.mozilla.org/c/add-ons/35
- Extension Workshop: https://extensionworkshop.com/
