from binarytree.binary_tree import BinaryTree
from binarytree.node import Node

ROOT = Node(None, 'root node')
NODE1 = Node(ROOT, 'node1')
NODE2 = Node(ROOT, 'node2')
NODE3 = Node(NODE1, 'node3')
NODE4 = Node(NODE2, 'node4')
NODE5 = Node(NODE3, 'node5')

TREE = BinaryTree(ROOT)
TREE.traverse_df(ROOT)
TREE.traverse_bf(ROOT)
