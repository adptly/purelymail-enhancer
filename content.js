/**
 * Purelymail Enhancer
 * Transforms the Purelymail user management page by grouping emails by domain
 * and adding search, filtering, and organization features.
 */
(function() {
  'use strict';

  // Wait for DOM to be ready before initializing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /**
   * Main initialization function
   * Finds the user table, parses emails, groups by domain, and replaces with enhanced UI
   */
  function init() {
    const table = document.querySelector('table.striped');
    if (!table) return;

    const emails = parseEmails(table);
    if (emails.length === 0) return;

    const grouped = groupByDomain(emails);
    const container = createEnhancedUI(grouped);

    // Replace the original table with our enhanced UI
    const main = document.querySelector('main');
    if (main) {
      // Preserve the page title
      const title = main.querySelector('h2');
      main.innerHTML = '';
      if (title) main.appendChild(title);
      main.appendChild(container);

      // Expand main container to fit the enhanced UI
      main.style.maxWidth = '900px';
    }
  }

  /**
   * Parses the existing Purelymail user table and extracts email information
   * @param {HTMLElement} table - The table element containing user emails
   * @returns {Array} Array of email objects with email, href, domain, and localPart
   */
  function parseEmails(table) {
    const emails = [];
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
      // Find links that point to user management pages
      const link = row.querySelector('a[href^="/manage/user/"]');
      if (link && link.textContent.includes('@')) {
        const email = link.textContent.trim();
        const href = link.getAttribute('href');
        const domain = email.split('@')[1];
        const localPart = email.split('@')[0];

        emails.push({ email, href, domain, localPart });
      }
    });

    return emails;
  }

  /**
   * Groups emails by domain and sorts them alphabetically
   * @param {Array} emails - Array of email objects
   * @returns {Array} Array of domain groups, each containing domain name and sorted emails
   */
  function groupByDomain(emails) {
    const groups = {};

    // Group emails by domain
    emails.forEach(item => {
      if (!groups[item.domain]) {
        groups[item.domain] = [];
      }
      groups[item.domain].push(item);
    });

    // Sort emails alphabetically within each domain group
    Object.keys(groups).forEach(domain => {
      groups[domain].sort((a, b) => a.localPart.localeCompare(b.localPart));
    });

    // Convert to sorted array of domain groups (domains sorted A-Z)
    return Object.keys(groups)
      .sort()
      .map(domain => ({
        domain,
        emails: groups[domain]
      }));
  }

  /**
   * Creates the enhanced UI with toolbar, stats, and domain cards
   * @param {Array} grouped - Array of domain groups
   * @returns {HTMLElement} The complete enhanced UI container
   */
  function createEnhancedUI(grouped) {
    const container = document.createElement('div');
    container.className = 'pm-enhancer';

    // Create toolbar with search and control buttons
    const toolbar = document.createElement('div');
    toolbar.className = 'pm-toolbar';
    toolbar.innerHTML = `
      <input type="text" id="pm-search" placeholder="Search emails..." class="pm-search">
      <button id="pm-expand-all" class="pm-btn pm-btn-secondary">Expand All</button>
      <button id="pm-collapse-all" class="pm-btn pm-btn-secondary">Collapse All</button>
      <a href="/manage/user/new" class="pm-btn pm-btn-primary">+ New User</a>
    `;
    container.appendChild(toolbar);

    // Create stats bar showing total counts
    const totalEmails = grouped.reduce((sum, g) => sum + g.emails.length, 0);
    const stats = document.createElement('div');
    stats.className = 'pm-stats';
    stats.textContent = `${totalEmails} users across ${grouped.length} domains`;
    container.appendChild(stats);

    // Create domain cards container
    const groupsContainer = document.createElement('div');
    groupsContainer.id = 'pm-groups';

    grouped.forEach(group => {
      const card = createDomainCard(group);
      groupsContainer.appendChild(card);
    });

    container.appendChild(groupsContainer);

    // Setup event listeners after DOM is ready
    setTimeout(() => {
      setupEventListeners(container, grouped);
    }, 0);

    return container;
  }

  /**
   * Creates a collapsible domain card with header and email list
   * @param {Object} group - Domain group object containing domain name and emails
   * @returns {HTMLElement} The domain card element
   */
  function createDomainCard(group) {
    const card = document.createElement('div');
    card.className = 'pm-domain-card collapsed';
    card.dataset.domain = group.domain;

    // Create clickable header with domain name and email count
    const header = document.createElement('div');
    header.className = 'pm-domain-header';
    header.innerHTML = `
      <span class="pm-domain-toggle">▶</span>
      <span class="pm-domain-name">${group.domain}</span>
      <span class="pm-domain-count">${group.emails.length}</span>
    `;

    // Create list of emails for this domain
    const emailList = document.createElement('div');
    emailList.className = 'pm-email-list';

    group.emails.forEach(item => {
      const emailRow = document.createElement('div');
      emailRow.className = 'pm-email-row';
      emailRow.dataset.email = item.email.toLowerCase();
      emailRow.innerHTML = `
        <a href="${item.href}" class="pm-email-link">
          <span class="pm-local-part">${item.localPart}</span><span class="pm-at">@</span><span class="pm-domain-part">${item.domain}</span>
        </a>
      `;
      emailList.appendChild(emailRow);
    });

    card.appendChild(header);
    card.appendChild(emailList);

    // Toggle expand/collapse when header is clicked
    header.addEventListener('click', () => {
      card.classList.toggle('collapsed');
      const toggle = header.querySelector('.pm-domain-toggle');
      toggle.textContent = card.classList.contains('collapsed') ? '▶' : '▼';
    });

    return card;
  }

  /**
   * Sets up event listeners for search, expand all, and collapse all functionality
   * @param {HTMLElement} container - The main container element
   * @param {Array} grouped - Array of domain groups (not currently used but available)
   */
  function setupEventListeners(container, grouped) {
    const searchInput = container.querySelector('#pm-search');
    const expandAllBtn = container.querySelector('#pm-expand-all');
    const collapseAllBtn = container.querySelector('#pm-collapse-all');

    // Real-time search filtering
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterEmails(query);
    });

    // Expand all domain cards
    expandAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.pm-domain-card').forEach(card => {
        card.classList.remove('collapsed');
        card.querySelector('.pm-domain-toggle').textContent = '▼';
      });
    });

    // Collapse all domain cards
    collapseAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.pm-domain-card').forEach(card => {
        card.classList.add('collapsed');
        card.querySelector('.pm-domain-toggle').textContent = '▶';
      });
    });
  }

  /**
   * Filters emails based on search query
   * Matches against both email address and domain name
   * Auto-expands domains with matches and updates counts
   * @param {string} query - The search query string
   */
  function filterEmails(query) {
    const cards = document.querySelectorAll('.pm-domain-card');

    cards.forEach(card => {
      const domain = card.dataset.domain.toLowerCase();
      const emailRows = card.querySelectorAll('.pm-email-row');
      let visibleCount = 0;

      // Check each email row for matches
      emailRows.forEach(row => {
        const email = row.dataset.email;
        const matches = email.includes(query) || domain.includes(query);
        row.style.display = matches ? '' : 'none';
        if (matches) visibleCount++;
      });

      // Hide entire card if no emails match
      card.style.display = visibleCount > 0 ? '' : 'none';

      // Update email count badge (show matching/total when filtering)
      const countEl = card.querySelector('.pm-domain-count');
      if (query) {
        countEl.textContent = `${visibleCount}/${card.querySelectorAll('.pm-email-row').length}`;
      } else {
        countEl.textContent = card.querySelectorAll('.pm-email-row').length;
      }

      // Auto-expand domains that have matches
      if (query && visibleCount > 0) {
        card.classList.remove('collapsed');
        card.querySelector('.pm-domain-toggle').textContent = '▼';
      }
    });
  }

})();
