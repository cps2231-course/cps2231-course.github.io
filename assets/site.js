document.documentElement.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuToggle && navigation) {
  const setMenu = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  };
  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuToggle.focus();
    }
  });
}

const filters = document.querySelectorAll('[data-filter]');
const resources = document.querySelectorAll('[data-resource]');
const resourceCount = document.querySelector('[data-resource-count]');
const resourceControls = document.querySelector('[data-resource-controls]');

if (filters.length && resources.length && resourceCount && resourceControls) {
  resourceControls.hidden = false;
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visible = 0;
      resources.forEach((resource) => {
        const show = filter === 'all' || resource.dataset.resource === filter;
        resource.hidden = !show;
        if (show) visible += 1;
      });
      filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      resourceCount.textContent = `${visible} ${visible === 1 ? 'resource' : 'resources'}`;
    });
  });
}

const courseSearch = document.querySelector('.site-search');
const searchEntries = window.COURSE_SEARCH_INDEX || [];

if (courseSearch && searchEntries.length) {
  courseSearch.hidden = false;
  const input = courseSearch.querySelector('input[type="search"]');
  const results = courseSearch.querySelector('.search-results');
  const status = courseSearch.querySelector('[data-search-status]');
  const root = courseSearch.dataset.siteRoot || '';

  const closeSearch = () => {
    results.hidden = true;
    status.textContent = '';
  };

  const showResults = () => {
    const query = input.value.trim().toLowerCase();
    results.replaceChildren();
    if (!query) {
      closeSearch();
      return;
    }
    const words = query.split(/\s+/);
    const matches = searchEntries.map((entry) => {
      const title = entry.title.toLowerCase();
      const body = `${entry.title} ${entry.page} ${entry.text}`.toLowerCase();
      const score = words.every((word) => body.includes(word))
        ? (title.includes(query) ? 10 : 1) + words.filter((word) => title.includes(word)).length
        : 0;
      return { entry, score };
    }).filter((match) => match.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 7);

    if (!matches.length) {
      const empty = document.createElement('p');
      empty.className = 'search-empty';
      empty.textContent = 'No matching course pages. Try “labs”, “office hours” or “prerequisite”.';
      results.append(empty);
    }
    matches.forEach(({ entry }) => {
      const link = document.createElement('a');
      link.className = 'search-result';
      link.href = root + entry.href;
      const title = document.createElement('strong');
      title.textContent = entry.title;
      const description = document.createElement('small');
      description.textContent = entry.page + ' · ' + entry.text.slice(0, 135)
        + (entry.text.length > 135 ? '…' : '');
      link.append(title, description);
      results.append(link);
    });
    results.hidden = false;
    status.textContent = `${matches.length} ${matches.length === 1 ? 'result' : 'results'}`;
  };

  input.addEventListener('input', showResults);
  input.addEventListener('focus', () => {
    if (input.value.trim()) showResults();
  });
  courseSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    const first = results.querySelector('a');
    if (!results.hidden && first) first.click();
  });
  courseSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSearch();
      input.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!courseSearch.contains(event.target)) closeSearch();
  });
  document.addEventListener('keydown', (event) => {
    const target = event.target;
    const isTyping = target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
    if (event.key === '/' && !isTyping && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      input.focus();
    }
  });
}
