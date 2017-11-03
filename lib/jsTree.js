"use strict"
var Node = function (value, parent) {
    this.value = value;
    this.parent = parent;
    this.children = [];
};
var MyTree = function () {
    var root;
}

exports.Node = Node;
exports.MyTree = MyTree;

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

