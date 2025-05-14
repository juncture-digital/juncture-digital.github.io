window.ghbase = "{{site.github.owner_name}}/{{site.github.repository_name}}/{{site.github.source.branch}}/{{page.path}}";
document.write('<link rel="stylesheet" href="https://www.juncture-digital.io/css/index.css">');
if (document.readyState === 'interactive') document.body.appendChild(Object.assign(document.createElement('script'), { src: 'https://www.juncture-digital.io/js/index.js', type: 'module' }));
else document.addEventListener('readystatechange', () => { if (document.readyState === 'interactive') document.body.appendChild(Object.assign(document.createElement('script'), { src: 'https://www.juncture-digital.io/js/index.js', type: 'module' })); })
