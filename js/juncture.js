var baseUrl = (window.location.port === '4100') ? 'http://localhost:3000' : 'https://www.juncture-digital.io';
document.write('<link rel="stylesheet" href="https://www.juncture-digital.io/css/index.css">');
const ghbase = document.getElementById('loader')?.dataset.ghbase || '{{site.github.owner_name}}/{{site.github.repository_name}}/{{site.github.source.branch}}/{{page.path}}';
const selector = document.getElementById('loader')?.dataset.selector;
console.log(`Juncture loader: ghbase=${ghbase} selector=${selector}`);
let added = false;
const addScript = () => {
  if (!added) { 
    document.body.style.opacity = 0;
    const scriptEl = Object.assign(document.createElement('script'), { id: 'junctureScript', src: `${baseUrl}/js/index.js`, type: 'module' } );
    if (ghbase) scriptEl.dataset.ghbase = ghbase;
    if (selector) scriptEl.dataset.selector = selector;
    document.body.appendChild(scriptEl);
    added = true;
  }
}
if (document.readyState !== 'loading') addScript();
else document.addEventListener('readystatechange', () => { addScript() });