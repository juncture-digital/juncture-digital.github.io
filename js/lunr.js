  let idx, store, ready = false;
  const input   = document.getElementById('search-input');
  const suggest = document.getElementById('search-suggestions');

  // 1) Debounce helper
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // 2) Lazy-load Lunr & JSON index
  function init() {
    if (ready) return;
    ready = true;
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/lunr/lunr.js';
    s.onload = fetchIndex;
    document.head.appendChild(s);
  }

  function fetchIndex() {
    // const url = {{ "/search.json" | relative_url | jsonify }};
    const url = '/search.json';

    fetch(url)
      .then(r => r.ok ? r.json() : Promise.reject(r.statusText))
      .then(docs => {
        store = docs;
        idx   = lunr(function() {
          this.field('title',   { boost: 10 });
          this.field('excerpt', { boost:  5 });
          this.field('content');       // index full content
          this.ref('url');
          docs.forEach(doc => this.add(doc));
        });
      })
      .catch(err => console.error('[Search] index load failed:', err));
  }

  // 3) Escape regex metacharacters
  function escapeForRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 4) Multi-snippet builder: up to maxSnips matches
  function makeSnippetMulti(text, query, radius = 30, maxSnips = 3) {
    const q    = query.replace(/\*$/, '');       // drop trailing wildcard
    const eq   = escapeForRegex(q);
    const re   = new RegExp(`(.{0,${radius}})(${eq})(.{0,${radius}})`, 'gi');
    let match, snippets = [], count = 0;

    while ((match = re.exec(text)) && count < maxSnips) {
      const [ , before, term, after ] = match;
      snippets.push('…' + before + '<mark>' + term + '</mark>' + after + '…');
      count++;
    }

    if (!snippets.length) {
      const head = text.slice(0, radius * 2);
      return head + (text.length > head.length ? '…' : '');
    }
    // join multiple snippets with a space (or <br> if you prefer)
    return snippets.join(' ');
  }

  // 5) Render suggestions with multiple snippets
  function renderSuggestions(results, query) {
    suggest.innerHTML = results.map(hit => {
      const doc     = store.find(d => d.url === hit.ref);
      const source  = doc.content || doc.excerpt || '';
      const snippet = makeSnippetMulti(source, query, 40, 3);
      return `
        <li data-url="${doc.url}">
          <a href="${doc.url}">${doc.title}</a>
          <p class="snippet">${snippet}</p>
        </li>`;
    }).join('');
    suggest.style.display = 'block';
  }

  // 6) Handle input events
  function onInput(e) {
    const q = e.target.value.trim();
    if (!idx || q.length < 2) {
      suggest.style.display = 'none';
      return;
    }
    const hits = idx.search(q + '*').slice(0, 10);
    if (!hits.length) {
      suggest.style.display = 'none';
      return;
    }
    renderSuggestions(hits, q);
  }

  // 7) Wire it all up
  input.addEventListener('focus', init);
  input.addEventListener('input', debounce(evt => {
    if (!ready) init();
    onInput(evt);
  }, 200));

  suggest.addEventListener('click', e => {
    const li = e.target.closest('li[data-url]');
    if (li) window.location.href = li.dataset.url;
  });

  input.addEventListener('blur', () => {
    setTimeout(() => suggest.style.display = 'none', 200);
  });
