# antlrv4-js-html

## 使用antlrv4的js api 解析html

### 快速开始

```bash
$ npm i antlrv4-js-html
```

### 示例
```javascript
const antlrv4_js_html = require('antlrv4-js-html')

class Visitor extends antlrv4_js_html.Visitor {
  constructor() {
    super()
  }

  visitTerminal(ctx) {
    let text = ctx.getText()
    console.log(text)
    return this.visitChildren(ctx);
  }
}

antlrv4_js_html.transform(`<div><span id="12312" checked>2</span><p>1<span></span></p></div>`, new Visitor())
```

### 浏览器中使用

```html
<script src="../dist/index-umd.js"></script>
<script>
  console.log(antlrv4_js_html)
</script>
```

### 其他模块的支持

- [v] es
- [v] esm
- [v] umd

### API
```javascript
// Visit a parse tree produced by HTMLParser#htmlDocument.
visitHtmlDocument(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#scriptletOrSeaWs.
visitScriptletOrSeaWs(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#htmlElements.
visitHtmlElements(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#htmlElement.
visitHtmlElement(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#htmlContent.
visitHtmlContent(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#htmlAttribute.
visitHtmlAttribute(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#htmlChardata.
visitHtmlChardata(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#htmlMisc.
visitHtmlMisc(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#htmlComment.
visitHtmlComment(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#script.
visitScript(ctx) {
    return this.visitChildren(ctx);
}

// Visit a parse tree produced by HTMLParser#style.
visitStyle(ctx) {
    return this.visitChildren(ctx);
}
```

### 其他库
- [css3](https://github.com/schizobulia/antlrv4-js-css)
- [xml](https://github.com/schizobulia/antlrv4-js-xml)