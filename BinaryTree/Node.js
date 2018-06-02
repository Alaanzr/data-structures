class Node {
  constructor (parent, data) {
    this.data = data
    this.children = []
    if (!parent || parent.constructor !== Node) return
    parent.addChild(this)
  }

  addChild (node) {
    this.children.push(node)
  }
}

module.exports = Node
