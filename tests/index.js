const xml = require('../index')

class Visitor extends xml.Visitor {
  constructor() {
    super()
  }

  visitTerminal(ctx) {
    let text = ctx.getText()
    console.log(text)
    return this.visitChildren(ctx);
  }
}

const v = new Visitor()
xml.transform(`<div><span id="12312" checked>2</span><p>1<span></span></p></div>`, v)
