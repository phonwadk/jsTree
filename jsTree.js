"use strict"
var Node = function (value, parent) {
    this.value = value;
    this.parent = parent;
    this.children = [];
};
var MyTree = function () {
    var root;
}

MyTree.prototype.returnNode = (function (node, value) {
    var tmpNode;
    return function(node, value){
        if (node != null && node.value === value) {
            tmpNode = node;
        } else if (node.children.length) {
            for (var i = 0; i < node.children.length; i++) {
                var parent = this.returnNode(node.children[i], value);
                if (value === parent.value) {
                    tmpNode = parent;
                }
            }
        }
        return tmpNode;
    }
})();

MyTree.prototype.insert = function (value, parentValue) {
    if (parentValue === null) {
        var node = new Node(value, null);
        this.root = node;
        console.log(node.value, " :: ", null);
        return true;
    }
    var parentNode = this.returnNode(this.root, parentValue);
    if (parentNode != undefined) {
        var node = new Node(value, parentNode);
        parentNode.children.push(node);
        console.log(node.value, " :: ", parentNode.value);
    } else {
        console.log("received undefined");
    }
    return true;
};

MyTree.prototype.delete = function (value){
    var node = this.returnNode(this.root, value);
    node.parent.children.pop(node);
}

MyTree.prototype.changeParent = function(value, newParentValue){
    var node = this.returnNode(this.root, value);
    var newParentNode = this.returnNode(this.root, newParentValue);
    node.parent.children.pop(node);
    node.parent = newParentNode;
    newParentNode.children.push(node);
}

MyTree.prototype.printTree = function (node) {
    console.log(node.value, " : ", node);
    for (var i = 0; i < node.children.length; i++) {
        this.printTree(node.children[i]);
    }
}

MyTree.prototype.printNode = function (node, value) {
    var node = this.returnNode(node, value);
    if(node.value === value){
        console.log(node);
    }
    else{
        console.log("Node not found");
    }
}



var tree = new MyTree();
tree.insert(1, null);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);
tree.insert(6, 4);
tree.insert(14, 4);
tree.insert(15, 4);
// tree.insert(7, 6);
// tree.insert(8, 5);
// tree.insert(9, 3);
// tree.insert(10, 8);
// tree.insert(11, 4);
// tree.insert(12, 9);
// tree.insert(13, 8);
// tree.insert(16, 1);
// tree.insert(17, 1);

tree.printTree(tree.root);

// tree.delete(17);
// tree.delete(5);
// tree.printNode(tree.root, 8);
// tree.changeParent(5, 17);
// console.log("------------------------Updated Tree-----------------------------------");
// tree.printTree(tree.root);

//tree.printNode(tree.root, 2);

