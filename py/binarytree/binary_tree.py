class BinaryTree(object):
    def __init__(self, root):
        self.root = root

    def traverse_df(self, node):
        print(f'TRAVERSING DF {node.data}')
        for child_node in node.children:
            self.traverse_df(child_node)

    def traverse_bf(self, node):
        lst = []
        while node:
            for child_node in node.children:
                lst.append(child_node)

            print(f'TRAVERSING BF {node.data}')

            node = lst.pop(0) if len(lst) > 0 else None
