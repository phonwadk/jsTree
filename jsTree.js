"use strict"
    var Node = function (value, parent) {
        this.value = value;
        this.parent = parent;
        this.children = [];
    };
    var MyTree = function(){
        var root;
    }

        MyTree.prototype.returnNode = function(node, value){
            var tmpNode;
            if(node!= null && node.value === value){
                    tmpNode = node;
            }
            else{
                for(var i=0;i<node.children.length;i++){
                    return this.returnNode(node.children[i], value);
                }
            }
            return tmpNode;
        }

        MyTree.prototype.insert = function (value, parentValue) {
            if(parentValue === null){
                var node = new Node(value, null);
                this.root = node;
                console.log(node.value," :: ",null);
                return true;
            }
            var parentNode = this.returnNode(this.root, parentValue);
            if(parentNode != undefined){
                var node = new Node(value, parentNode);
                parentNode.children.push(node);
                console.log(node.value," :: ",parentNode.value);
            }
            else{
                console.log("received undefined");
            }
            return true;
        };

        MyTree.prototype.printTree = function(node){
            console.log(node.value," : ",node);
            for(var i=0;i<node.children.length;i++){
                this.printTree(node.children[i]);
            }
        }

        MyTree.prototype.printNode = function(node, value){
            var node = this.returnNode(node, value);
            console.log(node);
        }


var tree = new MyTree();
tree.insert(1, null);
tree.insert(2, 1);
tree.insert(3, 1);
tree.insert(4, 2);
tree.insert(5, 2);
tree.insert(6, 4);
tree.insert(7, 6);
// tree.insert(8, 5);
// tree.insert(9, 3);
// tree.insert(10, 8);
// tree.insert(11, 4);
// tree.insert(12, 9);
// tree.insert(13, 8);

tree.printTree(tree.root);

//tree.printNode(tree.root, 2);


