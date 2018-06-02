const { BinaryTree, Node } = require('./BinaryTree')

const root = new Node(null, 'root node')
const node1 = new Node(root, 'node1')
const node2 = new Node(root, 'node2')
const node3 = new Node(node1, 'node3')
const node4 = new Node(node2, 'node4')
const node5 = new Node(node3,  'node5')

const tree = new BinaryTree(root)
tree.traverseDF(root)
tree.traverseBF(root)
