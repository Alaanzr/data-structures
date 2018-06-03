class BinaryTree {
  constructor (root) {
    this.root = root
  }

  traverseDF (node) {
    console.log(`TRAVERSING DF ${node.data}`)
    node.children.forEach(childNode => {
      this.traverseDF(childNode)
    })
  }

  traverseBF (node) {
    let list = []
    while (node) {
      node.children.forEach(childNode => {
        list.push(childNode)
      })

      console.log(`TRAVERSING BF ${node.data}`)

      node = list.splice(0, 1)[0]
    }
  }
}

module.exports = BinaryTree
