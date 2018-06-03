class Node(object):
    def __init__(self, parent, data):
        self.data = data
        self.children = []
        if not parent or not isinstance(self, Node):
            return
        parent.add_child(self)

    def add_child(self, node):
        self.children.append(node)
