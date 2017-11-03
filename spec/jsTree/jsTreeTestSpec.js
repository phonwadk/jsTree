var t = require('../../lib/jsTree');

describe("JS tree test suite", function() {
    var tree = new t.MyTree();
    var node = new t.Node();

    it("should be having complete structure of tree.", function() {
        expect(tree).toBeDefined();
        expect(node).toBeDefined();
        expect(tree.returnNode).toBeDefined();
        expect(tree.insert).toBeDefined();
        expect(tree.delete).toBeDefined();
        expect(tree.changeParent).toBeDefined();
        expect(tree.printTree).toBeDefined();
        expect(tree.printNode).toBeDefined();
    });

    it("should add root node to tree", function() {
        tree.insert('rootNode', null);
        expect(tree.root).toBeDefined();
        expect(tree.root.parent).toBe(null);
        expect(tree.root.value).toBe('rootNode');
    });

    it("should add child1 to root", function() {
        tree.insert('childNode1', 'rootNode');
        expect(tree.root.children[0].parent.value).toBe('rootNode');
        expect(tree.root.children[0].value).toBe('childNode1');
        expect(tree.root.children.length).toBe(1);
    });

    it("should add child2 to root", function() {
        tree.insert('childNode2', 'rootNode');
        expect(tree.root.children[1].parent.value).toBe('rootNode');
        expect(tree.root.children[1].value).toBe('childNode2');
        expect(tree.root.children.length).toBe(2);
    });

    it("should add grandChild1 to root", function() {
        tree.insert('grandChildNode1', 'childNode1');
        expect(tree.root.children[0].children[0].parent.value).toBe('childNode1');
        expect(tree.root.children[0].children[0].value).toBe('grandChildNode1');
        expect(tree.root.children[0].children.length).toBe(1);
    });

    it("should add grandChild2 to root", function() {
        tree.insert('grandChildNode2', 'childNode1');
        expect(tree.root.children[0].children[1].parent.value).toBe('childNode1');
        expect(tree.root.children[0].children[1].value).toBe('grandChildNode2');
        expect(tree.root.children[0].children.length).toBe(2);
    });

    it("should delete child1 from root", function() {
        tree.delete('childNode1');
        expect(tree.root.children.length).toBe(1);
        expect(tree.root.children[0].value).toBe('childNode1');
    });


});
