import 'https://cdn.jsdelivr.net/npm/js-md5@0.8.3/src/md5.min.js'
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/button/button.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/card/card.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/carousel/carousel.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/carousel-item/carousel-item.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/copy-button/copy-button.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/dialog/dialog.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/dropdown/dropdown.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/tab/tab.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/tab-group/tab-group.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace/cdn/components/tab-panel/tab-panel.js';

const isStatic = ['true', ''].includes(new URLSearchParams(window.location.search).get('static'));
let isMobile = ('ontouchstart' in document.documentElement && /mobi/i.test(navigator.userAgent) )

let imageServiceUrl = 'https://d1co2zgwaj21sl.cloudfront.net/image';

/**
 * Parse a CSS style string into a plain object.
 * @param {string} styleString — e.g. "color: red; margin: 10px;"
 * @returns {Object} — { color: "red", margin: "10px" }
 */
const parseStyleString = (styleString) => {
  return styleString
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length)
    .reduce((obj, declaration) => {
      const [prop, ...vals] = declaration.split(':');
      obj[prop.trim()] = vals.join(':').trim();
      return obj;
    }, {});
}

/**
 * Serialize a style-object back into a CSS style string.
 * @param {Object} styleObj — e.g. { color: "red", margin: "10px" }
 * @returns {string} — "color: red; margin: 10px;"
 */
const serializeStyleObject = (styleObj) => {
  return Object
    .entries(styleObj)
    .map(([prop, value]) => `${prop}: ${value};`)
    .join(' ');
}

// const classes = new Set('small medium large left right center shadow'.split(' '))
const parseCodeEl = (el) => {
  let tokens = []
  el.textContent.replace(/”/g,'"').replace(/”/g,'"').replace(/’/g,"'").match(/[^\s"]+|"([^"]*)"/gmi)?.filter(t => t).forEach(token => {
    if (tokens.length > 0 && tokens[tokens.length-1].indexOf('=') === tokens[tokens.length-1].length-1) tokens[tokens.length-1] = `${tokens[tokens.length-1]}${token}`
    else tokens.push(token)
  })
  let parsed = {el, tag:null, id:null, kwargs:{}, classes:[], booleans:[], data:[]}
  let styleAttr = el.parentElement.getAttribute('style')
  if (styleAttr) parsed.style = parseStyleString(styleAttr)
  let tokenIdx = 0
  while (tokenIdx < tokens.length) {
    let token = tokens[tokenIdx].replace(/<em>/g, '_').replace(/<\/em>/g, '_')
    if (tokenIdx == 0) {
      if (token !== '-') parsed.tag = token
    }
    else if (/#\w+/.test(token)) parsed['id'] = token.slice(1)
    else if (token.indexOf('=') > 0 && /^[\w-:]+=/.test(token)) {
      let idx = token.indexOf('=')
      let key = token.slice(0, idx)
      let value = token.slice(idx+1)
      value = value[0] === '"' && value[value.length-1] === '"' ? value.slice(1, -1) : value
      if (parsed.kwargs[key]) parsed.kwargs[key] += `|${value}`
      else parsed.kwargs[key] = value
    }
    else if (token.indexOf('.') === 0) {
      parsed.classes.push(token.slice(1))
    }
    // else if (classes.has(token)) parsed.classes.push(token)
    else parsed.booleans.push(token)
    tokenIdx++
  }

  let parent = el.parentElement
  let nonCodeChildren = Array.from(parent.childNodes).filter(c => c.textContent.trim()).filter(c => c.tagName !== 'CODE')
  parsed.inline = nonCodeChildren.length > 0

  // if (parent?.nextElementSibling?.tagName === 'UL' && parent?.nextElementSibling?.getAttribute('data') === '')
  //   parsed.kwargs.data = encodeURIComponent(parent.nextElementSibling.outerHTML.trim().replace(/\n/g, '').replace(/ data=\"\" style=\"display:none;\"/, ''))

  if (parsed.tag) {
    let [owner, repo, branch, ...path] = document.getElementById('junctureScript')?.dataset.ghbase.split('/')
    let dir = path[0] !== '404.html' ? `/${path.filter(p => !/\.md$/.test(p)).join('/')}` : ''
    parsed.kwargs.ghbase = `${owner}/${repo}/${branch}${dir}`
  }
  return parsed
}

const junctureComponentsPrefix = location.port === '4200'
  ? 'http://localhost:4200/components'
  : location.port === '4100'
    ? 'http://localhost:3000/_components'
    : 'https://www.juncture-digital.io/components'

const computedCaption = (code) => {
  let captionHeight = code.booleans?.indexOf('nocaption') >= 0 ? 0 : 35.2 // 16px font * 1.2 line height + 8px padding * 2 sides
  let contentAspect = code.kwargs.aspect || 1
  let contentWidth = code.kwargs.width || code.el.parentElement.clientWidth || '100%'
  let contentHeight = code.kwargs.height || contentWidth / contentAspect
  return contentWidth/(contentWidth / (contentWidth/contentHeight) + captionHeight)
}

const makeIframe = (code) => {
  let tag = code.tag || code.kwargs.tag || 'iframe'
  let iframe = document.createElement('iframe')
  iframe.setAttribute('loading', 'lazy')
  iframe.setAttribute('allowfullscreen', '')
  iframe.setAttribute('allow', 'clipboard-write')
  iframe.setAttribute('title', `${tag} viewer`)
  if (isStatic) code.booleans.push('static')
  iframe.setAttribute('width', code.kwargs.width || '100%')
  if (code.kwargs.height) iframe.setAttribute('height', code.kwargs.height)
  if (code.kwargs.aspect && !['header'].includes(tag)) iframe.style.aspectRatio = computedCaption(code)
  if (tag === 'audio') iframe.setAttribute('allow', 'autoplay')
  if (code.id) iframe.id = code.id
  else if (code.kwargs.id) iframe.id = code.kwargs.id
  if (code.classes?.length > 0) iframe.className = code.classes.join(' ')
  let ignoreArgs = ['width', 'height']
  if (tag === 'iframe') ignoreArgs.push('src', 'tag', 'ghbase', 'in-dialog', 'aspect', 'id')
  let args = [
    ...Object.entries(code.kwargs)
      .filter(([key, value]) => !ignoreArgs.includes(key)) // iframe attributes not passed to component
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`), ...(code.booleans || [])
    ].join('&')

  iframe.src = tag === 'iframe' ? `${code.kwargs.src}${args ? '?' + args : ''}` : `${junctureComponentsPrefix}/${tag}?${args}`

  let isOnlyChild = code.el.parentElement?.children.length === 1 && code.el.parentElement?.children[0] === code.el
  if (isOnlyChild && code.el.parentElement.tagName !== 'SL-DIALOG') code.el.parentElement.replaceWith(iframe)
  else {
    let nonCodeElements = Array.from(code.el.parentElement?.children).filter(c => c.tagName !== 'CODE').length
    if (!nonCodeElements) code.el.parentElement.classList.add('flex-grid')
    code.el.replaceWith(iframe)
  }
}

/**
 * Restructure an HTML element (generated from Markdown) so that each heading
 * and its following content are wrapped in nested <section> elements according to heading level.
 * Additionally, any id, class, or style attributes applied to a heading (using Kramdown IAL syntax)
 * are transferred to the corresponding section.
 *
 * @param {element} contentEl - The HTML element from your Markdown.
 * @returns {element} - The new HTML element with nested sections.
 */
const restructureMarkdownToSections = (contentEl) => {
  // Create a container element to hold the content.
  const container = document.createElement(contentEl.tagName);

  if (contentEl.id) container.id = contentEl.id
  if (contentEl.className) container.className = contentEl.className
  if (contentEl.getAttribute('style')) container.setAttribute('style', contentEl.getAttribute('style'))
  container.innerHTML = contentEl.innerHTML;

  // Convert paragraphs with only hashtags into headings.
  Array.from(container.querySelectorAll('p'))
    .filter(p => /^#+\s*$/.test(p.textContent))
    .forEach(p => {
      let heading = document.createElement(`h${p.textContent.match(/^#+/)[0].length}`);
      // Transfer any id, class, and style attributes from the heading to the section.
      ['id', 'class', 'style'].forEach(attr => {
        if (p.hasAttribute(attr)) heading.setAttribute(attr, p.getAttribute(attr));
      });
      p.replaceWith(heading)
    })
  
  // Use a stack to keep track of the current section levels.
  // The stack starts with the container (level 0).
  const stack = [{ level: 0, element: container }];
  
  // Get a static list of the container’s children.
  const nodes = Array.from(container.childNodes);
  
  nodes.forEach(node => {
    // Check if the node is an element
    if (node.nodeType === Node.ELEMENT_NODE) {

      // Pop stack if the node is a closing section tag (e.g., ^#)
      if (/^\^#+\s*$/.test(node.textContent)) {
        let endOfSectionNumber = node.textContent.slice(1).trim().length
        node.style.display = 'none'
        while (stack.length > 0 && stack[stack.length - 1].level >= endOfSectionNumber) stack.pop();
      }

      // Check if heading (H1 - H6)
      if (/^H[1-6]$/.test(node.tagName)) {
        node.textContent = node.textContent.replace(/^\s+$/, '')
        // Determine the heading level (e.g., "H2" -> 2)
        const headingLevel = parseInt(node.tagName[1], 10);
        
        // Pop sections from the stack until we find one with a lower level.
        while (stack.length > 0 && stack[stack.length - 1].level >= headingLevel) {
          stack.pop();
        }
        
        // Create a new section and move the heading into it.
        const section = document.createElement('section');
        
        // Transfer any id, class, and style attributes from the heading to the section.
        ['id', 'class', 'style'].forEach(attr => {
          if (node.hasAttribute(attr)) {
            section.setAttribute(attr, node.getAttribute(attr));
            node.removeAttribute(attr);
          }
        });
        section.classList.add(`section${headingLevel}`)

        // Add "Back to top" link to section heading
        // if (section.id) node.innerHTML = '<a href="#top" title="Back to top" style="font-size:80%; text-decoration: none;">⬆</a> ' + node.innerHTML
      
        // Move the heading into the new section.
        section.appendChild(node);

        // Append the new section to the element at the top of the stack.
        stack[stack.length - 1].element.appendChild(section);
        
        // Push the new section onto the stack with its heading level.
        stack.push({ level: headingLevel, element: section });

      } else {
        // For non-heading nodes, append them to the current (top of the stack) section.
        stack[stack.length - 1].element.appendChild(node);
      }
    }
  });

  if (!isMobile) {
    container.querySelectorAll('section.wrap').forEach(section => {
      const heading = section.firstElementChild;
      if (!heading) return;

      // Find all direct children (paragraphs, blockquotes, iframes, lists, subsections, etc).
      // The :scope pseudo-class ensures we only select direct children of `section`.
      const children = section.querySelectorAll(':scope > *');

      if (children.length > 1) {
        // Get the very last candidate from the list.
        const lastElementToMove = children[children.length - 1];

        // Use the .after() method to move the last element to be
        // immediately after the heading. This is a clean, modern way to re-insert nodes.
        heading.after(lastElementToMove);
      }
    });
  }

  container.querySelector('hr.footnotes-sep')?.remove()
  let footnotes = container.querySelector('section.footnotes')
  if (footnotes) container.appendChild(footnotes)

  // return container.innerHTML;
  return container
}

/**
 * Convert sub-sections inside a '.cards' section into a responsive grid of Shoelace cards.
 * Each card uses:
 * - The sub-section heading as the card header.
 * - The first image as the card image.
 * - All paragraphs and lists as the card content.
 */
const makeCards = (rootEl) => {
  rootEl.querySelectorAll('section.cards').forEach(cardsSection => {

    // Create a container for the card grid.
    const cardGrid = document.createElement('div');
    cardGrid.className = 'card-grid';

    // Get all direct sub-sections within the cards section (skip the main heading).
    const subsections = Array.from(cardsSection.querySelectorAll('section'));

    subsections.forEach(sub => {
      // Create a new sl-card element.
      const card = document.createElement('sl-card');

      // --- Card Header ---
      const subHeading = sub.querySelector('h1, h2, h3, h4, h5, h6');
      const firstLink = sub.querySelector('a[href]');
      const title = firstLink?.innerHTML || `<strong>${subHeading.textContent}</strong>`

      if (subHeading) {
        const header = document.createElement('div');
        header.setAttribute('slot', 'header');
        
        if (firstLink) {
          const link = document.createElement('a');
          link.href = firstLink.getAttribute('href');
          link.innerHTML = title;
          header.appendChild(link);
          firstLink.parentElement.remove()
        } else {
          header.innerHTML = title;
        }
        card.appendChild(header);
      }

      // --- Card Image ---
      const image = sub.querySelector('img');
      if (image) {
        if (image.src.startsWith('wc:')) image.src = mwImage(image.src, 300)
        let imgParent = image.parentElement
        image.setAttribute('slot', 'image');
        card.appendChild(image);
        imgParent.remove()
      }

      // --- Card Content ---
      // Create a container for any paragraphs or lists.
      const contentWrapper = document.createElement('div');
      // Gather any paragraphs or lists (skip headings and images)
      const contentElements = Array.from(sub.children).filter(el => {
        return !/^H[1-6]$/.test(el.tagName) && el.tagName.toLowerCase() !== 'img';
      });
      if (contentElements.length > 1) {
        let details = document.createElement('details')
        contentWrapper.appendChild(details)
        let summary = document.createElement('summary')
        summary.innerHTML = contentElements[0].innerHTML
        details.appendChild(summary)
        for (let i = 1; i < contentElements.length; i++) {
          details.appendChild(contentElements[i].cloneNode(true))
        }
      } else {
        contentElements.forEach(el => {
          contentWrapper.appendChild(el.cloneNode(true));
        });      
      }
      card.appendChild(contentWrapper);

      // Add the card to the grid.
      cardGrid.appendChild(card);
    });

    // Optionally, remove the original sub-sections.
    subsections.forEach(sub => sub.remove());

    // Append the card grid to the cards section.
    cardsSection.appendChild(cardGrid);
  })
}

const makeTabs = (rootEl) => {
  rootEl.querySelectorAll('section.tabs').forEach(section => {
    let tabGroup = document.createElement('sl-tab-group');
    Array.from(section.classList).forEach(cls => tabGroup.classList.add(cls))
    Array.from(section.attributes).forEach(attr => tabGroup.setAttribute(attr.name, attr.value))
    
    Array.from(section.querySelectorAll(':scope > section'))
    .forEach((tabSection, idx) => {
      let tab = document.createElement('sl-tab')
      tab.setAttribute('slot', 'nav')
      tab.setAttribute('panel', `tab${idx+1}`)
      if (idx === 0) tab.setAttribute('active', '')
      tab.innerHTML = tabSection.querySelector('h1, h2, h3, h4, h5, h6')?.innerHTML || ''
      tabGroup.appendChild(tab)      
    })

    Array.from(section.querySelectorAll(':scope > section'))
    .forEach((tabSection, idx) => {
      let tabPanel = document.createElement('sl-tab-panel')
      tabPanel.setAttribute('name', `tab${idx+1}`)
      if (idx === 0) tabPanel.setAttribute('active', '')
      let tabContent = Array.from(tabSection.children).slice(1).map(el => el.outerHTML).join(' ')
      tabPanel.innerHTML = tabContent
      tabGroup.appendChild(tabPanel)
      tabSection.remove()
    })

    // section.replaceWith(tabGroup)
    section.appendChild(tabGroup)
  })
}

const makeDetails = (rootEl) => {
  rootEl.querySelectorAll('.details, .example').forEach(el => {
    let details = document.createElement('details')
    // details.setAttribute('markdown', '1')
    if (el.className.indexOf('example') >= 0) details.classList.add('example')
    if (el.tagName === 'SECTION') {
      details.innerHTML = el.innerHTML
        .replace(/<h[1-6]>/,'<summary>')
        .replace(/<\/h[1-6]>/,'</summary>')
        .replace(/<\/summary>/, '</summary><div class="details-content">')
        + '</div>'
      el.replaceWith(details)
    } else if (el.tagName == 'UL') {
      el.querySelectorAll('li').forEach(li => {
        let firstParaLines = li.children[0].childNodes.item(0).textContent.split('\n')
        let heading = firstParaLines[0]
        let content = firstParaLines.length === 1
          ? li.innerHTML.trim().slice(heading.length+7)
          : `<p>${li.innerHTML.trim().slice(heading.length+3).trim()}`
        details.innerHTML = `<summary>${heading}</summary><div class="details-content">${content}</div>`
        li.innerHTML = details.outerHTML
      })
    }
  })
  // Add sl-copy-button to each example
  rootEl.querySelectorAll('pre').forEach((el, idx) => {
    el.style.position = 'relative'
    el.id = `cb-${idx}`
    let cb = document.createElement('sl-copy-button')
    cb.setAttribute('from', el.id)
    el.appendChild(cb)
  })
}

let dialog
const showDialog = (props) => {
  if (dialog) return
  let aspectRatio = props.kwargs.aspect || 1.0

  // Aspect ratio with caption height
  let aspectRatioWithCaption = window.innerWidth/(window.innerWidth/aspectRatio + 36)

  let width = aspectRatioWithCaption > 1.0
    ? window.innerWidth * 0.93
    : window.innerHeight * aspectRatioWithCaption * 0.93

  dialog = document.createElement('sl-dialog')
  dialog.id = 'junctureDialog'
  dialog.setAttribute('size', 'large')
  dialog.setAttribute('no-header', '')
  dialog.setAttribute('style', `--width: ${width}px;`)
  dialog.addEventListener('sl-after-hide', () => dialog = dialog.remove())
  let closeButton = document.createElement('sl-button')
  closeButton.setAttribute('slot', 'footer')
  closeButton.setAttribute('variant', 'primary')
  closeButton.setAttribute('size', 'small')
  closeButton.textContent = 'Close'
  closeButton.addEventListener('click', () => dialog.hide())
  dialog.appendChild(closeButton)
  let el = document.createElement('div')
  dialog.appendChild(el)
  props.kwargs['in-dialog'] = ''
  props.kwargs.width = width
  makeIframe({ el, tag: props.tag, kwargs: props.kwargs })
  document.body.appendChild(dialog)
  dialog.show()
}

const addMessageHandler = () => {
  window.addEventListener('message', (event) => {
    if (event.data.type === 'setAspect') {
      const sendingIframe = Array.from(document.querySelectorAll('iframe')).find((iframe) => iframe.contentWindow === event.source)
      if (sendingIframe) {
        sendingIframe.style.aspectRatio = event.data.aspect
      }
    } else if (event.data.type === 'showDialog') {
      // if (event.origin !== location.origin) return;
      showDialog(event.data.props)
    } else if (event.data.type === 'openLink') {
      window.open(event.data.url, event.data.newtab ? '_blank' : '_self')
    } else if (event.data.type === 'getPath') {
      // if (event.origin !== location.origin) return;
      let msg = { event: 'path', path: location.pathname }
      event.source.postMessage(JSON.stringify(msg), '*')
    } else if (event.data.type === 'getId') {
      // if (event.origin !== location.origin) return;
      const iframes = document.querySelectorAll('iframe');
      for (const iframe of iframes) {
        if (iframe.contentWindow === event.source) {
          let msg = { event: 'id', id: iframe.id || iframe.getAttribute('data-id') }
          event.source.postMessage(JSON.stringify(msg), '*')
          break;
        }
      }
    } else if (event.data.type === 'getElementById') {
      // if (event.origin !== location.origin) return;
      let el = document.getElementById(event.data.id)
      event.source.postMessage(JSON.stringify({ event: 'element', id: event.data.id, html: el?.outerHTML }), '*')
    }
  })
}

// setup action links to iframes (e.g., zoomto, flyto, play)
const addActionLinks = (rootEl) => {
  rootEl.querySelectorAll('iframe').forEach(iframe => {
    if (!iframe.id) return
    rootEl.querySelectorAll('a').forEach(a => {
      let href = a.href || a.getAttribute('data-href')
      let path = href?.split('/').slice(3).filter(p => p !== '#' && p !== '')
      const targetIdx = path?.findIndex(p => p == iframe.id)
      if (targetIdx >= 0) {
        if (isStatic) {
          a.removeAttribute('href')
          a.style.color = 'inherit'
        } else{
          path = path.slice(targetIdx)
          let action = path[1]
          let args = path.slice(2)
          let text = a.getAttribute('label') || a.dataset.label || a.textContent
          if (a.href) {
            a.setAttribute('data-href', href)
            a.classList.add('trigger')
            a.removeAttribute('href')
            a.style.cursor = 'pointer'
            a.addEventListener('click', () => {
              let msg = { event: 'action', action, text, args }
              document.getElementById(iframe.id)?.contentWindow.postMessage(JSON.stringify(msg), '*')
            })
          }
        }
      }
    })
  })
}

/**
 * Pack an array of IFRAMES into rows of equal total height.
 * Each iframe may show or hide its caption:
 *   – default = caption ON  (fixed 16-px text + 8-px padding each side)
 *   – add '?nocaption' to the src URL ⇒ caption OFF
 *
 * @param {HTMLElement[]} elements        array of <iframe> or <figure>
 * @param {number}        rowWidth        available width for every row (px)
 * @param {number}        spacing         gap between items and between rows (px)
 * @param {number}        targetRowHeight desired total iframe height (px)
 */
function packIframes(elements, rowWidth, spacing, targetRowHeight) {
  /* --- caption metrics -------------------------------------------------- */
  const CAP_FONT = 16;          // px
  const LINE_H   = 1.2;         // multiplier
  const PAD      = 8;           // px (per side)

  const CAPTION_H = CAP_FONT * LINE_H + PAD * 2; // 35.2 px

  /* --- row policy -------------------------------------------------------- */
  const TARGET_ROW_H     = targetRowHeight;     // desired total iframe height
  const MAX_SINGLE_ROW_H = TARGET_ROW_H * 1.5;  // cap when only one row

  /* -----------------------------------------------------------------------
     1.  Build rows greedily (as before, using TARGET_ROW_H for projection)
         For each element store its image aspect and its caption height
  ------------------------------------------------------------------------*/
  const rows = [];
  let current = [], sumAR = 0;

  const hasNoCaption = src => {
    try   { return new URL(src, location.href).searchParams.has('nocaption'); }
    catch { return false; }   // malformed URL? assume caption present
  };

  elements.forEach((el, idx) => {
    // const imgAR = parseFloat(el.dataset.aspect || '1.5');
    const imgAR = parseFloat(new URL(el.src).searchParams.get('aspect')) || 1.5;
    const capH  = hasNoCaption(el.getAttribute('src')) ? 0 : CAPTION_H;

    const proj =
      sumAR * (TARGET_ROW_H - capH) +
      imgAR * (TARGET_ROW_H - capH) +
      spacing * current.length;

    if (proj > rowWidth && current.length) {
      rows.push({ items: current, totalAR: sumAR, isLast: false });
      current = [{ el, imgAR, capH }];
      sumAR   = imgAR;
    } else {
      current.push({ el, imgAR, capH });
      sumAR += imgAR;
    }

    if (idx === elements.length - 1) {
      rows.push({ items: current, totalAR: sumAR, isLast: true });
    }
  });

  /* -----------------------------------------------------------------------
     2.  Helper to compute the *exact* row height that will justify a row,
         given its members (some with caption, some without).
         Formula:  H = ( W - gaps + Σ(imgAR·capH) ) / Σ(imgAR)
  ------------------------------------------------------------------------*/
  const justifyRowHeight = (row, isSingleRow = false) => {
    const gaps = spacing * (row.items.length - 1);
    const sumAR_cap = row.items.reduce((t, it) => t + it.imgAR * it.capH, 0);
    const fullH = (rowWidth - gaps + sumAR_cap) / row.totalAR;
    if (isSingleRow) return Math.min(fullH, MAX_SINGLE_ROW_H);
    return fullH;
  };

  /* -----------------------------------------------------------------------
     3.  Single-row case  (fill width, but respect the 150 % cap)
  ------------------------------------------------------------------------*/
  if (rows.length === 1) {
    const row   = rows[0];
    const H     = justifyRowHeight(row, true);

    row.items.forEach(({ el, imgAR, capH }, i) => {
      const imgH = H - capH;
      el.style.width        = `${imgAR * imgH}px`;
      el.style.height       = `${H}px`;
      el.style.marginRight  = i < row.items.length - 1 ? `${spacing}px` : '0';
      el.style.marginBottom = '0';
    });
    return;
  }

  /* -----------------------------------------------------------------------
     4.  Multi-row layout: fully justify every row except the last
  ------------------------------------------------------------------------*/
  rows.forEach(row => {
    const isLast = row.isLast;
    const H = isLast ? TARGET_ROW_H : justifyRowHeight(row, false);

    row.items.forEach(({ el, imgAR, capH }, i) => {
      const imgH = H - capH;
      el.style.width        = `${imgAR * imgH}px`;
      el.style.height       = `${H}px`;
      el.style.marginRight  = i < row.items.length - 1 ? `${spacing}px` : '0';
      el.style.marginBottom = `${spacing}px`;
    });
  });
}

////////// Start Wikidata Entity functions //////////

async function getEntityData(qids, language) {
  language = language || 'en'
  let entities = {}
  let summaryUrls = {}
  let entityUrls = qids.map(qid => `(wd:${qid})`)
  let query = `
    SELECT ?item (SAMPLE(?label) AS ?label) (SAMPLE(?description) AS ?description) (GROUP_CONCAT(?alias; separator=" | ") AS ?aliases) 
        (SAMPLE(?image) AS ?image) (SAMPLE(?logoImage) AS ?logoImage) 
        (SAMPLE(?coords) AS ?coords) (SAMPLE(?pageBanner) AS ?pageBanner)
        (SAMPLE(?whosOnFirst) AS ?whosOnFirst) (SAMPLE(?wikipedia) AS ?wikipedia)
    WHERE {
      VALUES (?item) { ${entityUrls.join(' ')} }

      # BIND(NOW() AS ?timestamp)  # Forces fresh evaluation

      ?item rdfs:label ?label . FILTER (LANG(?label) = "en")
      OPTIONAL { ?item schema:description ?description . FILTER (LANG(?description) = "en") }
      OPTIONAL { ?item skos:altLabel ?alias . FILTER (LANG(?alias) = "en") }
      OPTIONAL { ?item wdt:P625 ?coords . }
      OPTIONAL { ?item wdt:P18 ?image . }
      OPTIONAL { ?item wdt:P154 ?logoImage . }
      OPTIONAL { ?item wdt:P948 ?pageBanner . }
      OPTIONAL { ?item wdt:P6766 ?whosOnFirst . }
      OPTIONAL { ?wikipedia schema:about ?item; schema:isPartOf <https://en.wikipedia.org/> . }
    }
    GROUP BY ?item
    `
  let resp = await fetch('https://query.wikidata.org/sparql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/sparql-results+json'
    },
    body: `query=${encodeURIComponent(query)}`
  })
  if (resp.ok) {
    let sparqlResp = await resp.json()
    sparqlResp.results.bindings.forEach(rec => {
      let qid = rec.item.value.split('/').pop()
      let _entityData = {id: qid, label: rec.label.value}
      if (rec.description) _entityData.description = rec.description.value
      if (rec.alias) _entityData.aliases = [rec.alias.value]
      if (rec.coords) _entityData.coords = rec.coords.value.slice(6,-1).split(' ').reverse().join(',')
      if (rec.wikipedia) _entityData.wikipedia = rec.wikipedia.value
      if (rec.pageBanner) _entityData.pageBanner = rec.pageBanner.value
      if (rec.image) {
        _entityData.image = rec.image.value
        _entityData.thumbnail = mwImage(rec.image.value, 300)
      }
      if (rec.logoImage) {
        _entityData.logoImage = rec.logoImage.value
        if (!_entityData.thumbnail) _entityData.thumbnail = mwImage(rec.logoImage.value, 300)
      }
      if (rec.whosOnFirst) _entityData.geojson = whosOnFirstUrl(rec.whosOnFirst.value)
      
      if (_entityData.wikipedia) {
        let page = _entityData.wikipedia.replace(/\/w\//, '/wiki').split('/wiki/').pop()
        summaryUrls[`https://${language}.wikipedia.org/api/rest_v1/page/summary/${page}`] = qid
      }
      entities[qid] = _entityData
    })
    await Promise.all(Object.keys(summaryUrls).map(url => fetch(url)))
      .then(responses => { return Promise.all(responses.map(resp => resp.json())) })
      .then(data => {
        data.forEach((data, idx) => {
          let qid = summaryUrls[Object.keys(summaryUrls)[idx]]
          if (data.extract_html) entities[qid].summaryText = data.extract_html
          else if (data.extract) entities[qid].summaryText = data.extract
        })
      })
      .catch(err => console.error('Error fetching summaries:', err))
  }

  return entities
}

function mwImage(mwImg, width) {
  width = width || 0
  // Converts Wikimedia commons image URL to a thumbnail link
  mwImg = mwImg.replace(/^wc:/,'').replace(/Special:FilePath\//, 'File:').split('File:').pop()
  mwImg = decodeURIComponent(mwImg).replace(/ /g,'_')
  const _md5 = md5(mwImg)
  const extension = mwImg.split('.').pop()
  let url = `https://upload.wikimedia.org/wikipedia/commons${width ? '/thumb' : ''}`
  url += `/${_md5.slice(0,1)}/${_md5.slice(0,2)}/${mwImg}`
  if (width > 0) {
    url += `/${width}px-${mwImg}`
    if (extension === 'svg') {
      url += '.png'
    } else if (extension === 'tif' || extension === 'tiff') {
      url += '.jpg'
    }
  }
  return url
}

// Creates a GeoJSON file URL from a Who's on First ID 
function whosOnFirstUrl(wof) {
  let wofParts = []
  for (let i = 0; i < wof.length; i += 3) {
    wofParts.push(wof.slice(i,i+3))
  }
  return `https://data.whosonfirst.org/${wofParts.join('/')}/${wof}.geojson`
}

// For cropping regular images
export async function imageDataUrl(url, region, dest) {
  return new Promise((resolve) => {
    let {x, y, w, h} = region
    let {width, height} = dest

    let image = new Image()
    image.crossOrigin = 'anonymous'
    x = x ? x/100 : 0
    y = y ? y/100 : 0
    w = w ? w/100 : 0
    h = h ? h/100 : 0

    image.onload = () => {
      let sw = image.width
      let sh = image.height
      let swScaled = w > 0 ? sw * w : sw - (sw * x)
      let shScaled =  h > 0 ? sh * h : sh - (sh * y)
      let ratio = swScaled/shScaled
      if (ratio > 1) height = width/ratio
      else width = height * ratio
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height
      x = x*sw
      y = y*sh
      ctx?.drawImage(image, x, y, swScaled, shScaled, 0, 0, width, height)
      let dataUrl = canvas.toDataURL()
      resolve(dataUrl)
    }
    image.src = url

  })
}

const makeEntityPopups = async () => {
  let qids = new Set()
  Array.from(document.body.querySelectorAll('a')).forEach(async a => {
    let path = a.href?.split('/').slice(3).filter(p => p !== '#' && p !== '')
    let qid = path?.find(p => /Q\d+$/.test(p))?.split('#').pop()
    if (qid) {
      if (isStatic) {
        a.removeAttribute('href')
        a.style.color = 'inherit'
      }
      else qids.add(qid)
    }
  })
  let entities = await getEntityData(Array.from(qids), 'en')
  Array.from(document.body.querySelectorAll('a')).forEach(async a => {
    let path = a.href?.split('/').slice(3).filter(p => p !== '#' && p !== '')
    let qid = path?.find(p => /Q\d+$/.test(p))?.split('#').pop()
    let entity = entities[qid]
    if (!entity) return
    let dd = document.createElement('sl-dropdown')
    dd.className = 'entity-popup'
    dd.setAttribute('placement', 'top')
    dd.setAttribute('distance', '12')
    
    let trigger = document.createElement('div')
    trigger.setAttribute('slot', 'trigger')
    trigger.innerHTML = a.textContent
    dd.appendChild(trigger)

    let card = document.createElement('sl-card')
    card.setAttribute('hoist', '')
    if (entity.thumbnail) {
      let img = document.createElement('img')
      img.setAttribute('slot', 'image')
      img.src = entity.thumbnail
      img.setAttribute('alt', entity.label)
      card.appendChild(img)
    }
    let content = document.createElement('div')
    content.className = 'content'
    if (entity.label) {
      let heading = document.createElement('h2')
      heading.textContent = entity.label
      content.appendChild(heading)
    }
    if (entity.description) {
      let description = document.createElement('p')
      description.className = 'description'
      description.innerHTML = entity.description
      content.appendChild(description)
    }
    if (entity.summaryText) {
      let summaryText = document.createElement('div')
      summaryText.className = 'description'
      summaryText.innerHTML = entity.summaryText
      content.appendChild(summaryText)
    }
    card.appendChild(content)
    let footer = document.createElement('div')
    footer.setAttribute('slot', 'footer')
    if (entity.wikipedia)
      footer.innerHTML = `<a href="${entity.wikipedia}" target="_blank">View on Wikipedia</a>`
    card.appendChild(footer)
    dd.appendChild(card)
    
    a.replaceWith(dd)
    
  })
}

////////// End Wikidata Entity functions //////////

const processPage = (content) => {
  let newContent = restructureMarkdownToSections(content)
  content.innerHTML = newContent.innerHTML

  addMessageHandler()

  Array.from(content.querySelectorAll('p > code'))
    .map(codeEl => parseCodeEl(codeEl))
    .reduce((acc, parsed) => {
      if (parsed.tag) acc.push(parsed)
      else {
        acc[acc.length-1].data.push([...Object.entries(parsed.kwargs).map(([key, value]) => `${key}=${encodeURIComponent(value)}`), ...(parsed.booleans || [])].join('&'))
        parsed.el.remove()
      }
      return acc
    }, [])
    .forEach(codeEl => {
      if (codeEl.data.length > 0) codeEl.kwargs.data = codeEl.data.join('|')
      if (!codeEl.inline) makeIframe(codeEl)
    })

  if (!isStatic) makeDetails(content)
  makeCards(content)
  makeTabs(content)
  makeEntityPopups()
  addActionLinks(content)

  document.querySelectorAll('.flex-grid').forEach(container => {
    packIframes(Array.from(container.children), content.clientWidth, 8, container.dataset?.target || 260)
  })
}

// Handle drag-and-drop and copy/paste URLs from GitHub.  This provides a convenient way to view Juncture pages using a GitHub source.
const processGitHubUrl = (url) => {
  if (new URL(url.trim()).hostname !== 'github.com') return
  let [owner, repo, branch, ...path] = url.split('/').slice(3).filter(p => p !== 'blob' && p !== 'tree')
  path = path.filter(p => p !== 'README.md' && p !== 'index.md').map(p => p.replace(/\.md$/, '')).join('/')
  let redirect = `${location.origin}/${owner}/${repo}${branch === 'main' ? '' : ('/' + branch)}`
  if (path) redirect += `/${path}`
  location.href = redirect
}

const githubSearchArg = new URLSearchParams(window.location.search).get('github');
if (githubSearchArg) {
  processGitHubUrl(githubSearchArg);
}

// Attach event listeners
document.addEventListener('drop', (e) => {
  e.preventDefault();
  processGitHubUrl(e.dataTransfer.getData('text/plain'));
});
document.addEventListener('paste', () => {
  navigator.clipboard.readText().then((text) => {
    processGitHubUrl(text);
  });
});

// Prevent default browser behavior on dragover to allow drop
document.addEventListener('dragover', (e) => e.preventDefault());

let ghbase = document.getElementById('junctureScript')?.dataset.ghbase
let [owner, repo, branch, ...rest] = ghbase.split('/')
document.querySelectorAll('.post-image').forEach((el) => {
  if (el.dataset?.src) {
    if (el.dataset?.src.startsWith('wc:') || el.dataset?.src.startsWith('http')) {
      el.src = `${imageServiceUrl}/${el.dataset?.src}/w_250`;
    } else {
      let postPath = el.parentElement.dataset?.path?.split('/').slice(0,-1) || []
      el.src = postPath.length 
        ? `${imageServiceUrl}/gh:${owner}/${repo}/${branch}/${postPath.join('/')}/${el.dataset?.src}/w_250`
        : `${imageServiceUrl}/gh:${owner}/${repo}/${branch}/${el.dataset?.src}/w_250`;
    }
  }
});

let path = rest.slice(0, -1).join('/')
document.querySelectorAll('img').forEach((img) => {
  let src = new URL(img.src)
  if (location.origin !== src.origin) return
  let imgSrc = src.pathname.split('/').pop()
  if (['favicon.ico', 'favicon.png', 'favicon.svg'].includes(imgSrc)) return
  let extension = imgSrc.split('.').pop()
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].indexOf(extension) < 0) return
  let width = img.clientWidth || img.parentElement.clientWidth || 1000
  img.width = width
  img.src = `${imageServiceUrl}/gh:${owner}/${repo}/${branch}/${path}/${imgSrc}`
});

let selectors = ['.post-content', '.page-content', 'body']
if (document.getElementById('junctureScript')?.dataset.selector) selectors = [document.getElementById('junctureScript').dataset.selector, ...selectors]
for (let selector of selectors) {
  let el = document.querySelector(selector)
  if (el) {
    document.body.style.opacity = 0;
    document.body.transition = 'opacity 0.5s ease-in-out';
    processPage(el)
    document.body.style.opacity = 1
    break
  }
}

// document.querySelectorAll('[id$="-csv"],[id$="-tsv"]').forEach(el => { console.log(el.textContent) })