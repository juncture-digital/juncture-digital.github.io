// Prism.languages.juncture = Prism.languages.extend('markdown', {
Prism.languages.juncture = {

    // Component type: image, map, etc. — must appear at the beginning
    'component': {
      pattern: /^\s*`\s*(header|image|map|youtube|iframe|audio|component-name|-)\b/,
      lookbehind: false
    },
  
    // ID syntax (e.g., #my-id)
    'id': {
      pattern: /#[a-zA-Z0-9\-_]+/,
      alias: 'symbol'
    },
  
    // Class names (e.g., .highlight .centered)
    'class-name': {
      pattern: /\s+\.[a-zA-Z0-9\-_]+/,
      alias: 'class-name'
    },
  
    // Attribute keys (e.g., src=, caption=)
    'attr-name': {
      pattern: /\b[a-zA-Z_][a-zA-Z0-9_-]*(?==)/,
      alias: 'attr-name'
    },
  
    // Attribute values: quoted or unquoted (after =)
    'attr-value': {
        pattern: /(?<==)\s*(?:"[^"]*"|'[^']*'|[^\s"']+)/,
        alias: 'attr-value'
    },
  
    // Boolean-style flags (e.g., center, medium)
    'boolean': {
      pattern: /\b(autoplay|bottom|center|cover|left|marker|muted|nocaption|right|showannos|top|boolean-property)\b/,
      alias: 'keyword'
    }

  };
//});
