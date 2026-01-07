# Changelog

All notable changes to Purelymail Enhancer are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-01-01

### Changed
- Domain cards now start collapsed by default
- Click to expand the domain you want to view

## [1.0.0] - 2026-01-01

### Added
- Initial release
- Domain grouping - emails organized by domain
- Collapsible domain sections with click-to-toggle
- Search/filter functionality with real-time results
- Expand All / Collapse All buttons
- Stats bar showing total users and domains
- Email count badges per domain
- Alphabetical sorting (domains and emails)
- Purple theme matching Purelymail's design
- New User button integration
- Auto-expand domains when search matches found
- Search count indicator (showing matching/total)

### Technical
- Content script architecture
- Runs on `purelymail.com/manage/users*`
- Parses existing table structure
- Preserves original links and functionality
- Minimal permissions (activeTab only)

[1.0.1]: https://github.com/adptly/purelymail-enhancer/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/adptly/purelymail-enhancer/releases/tag/v1.0.0
