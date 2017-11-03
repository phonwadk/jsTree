var tree = require('./jsTree');

var myTree = new tree.MyTree();
myTree.insert(1, null);
myTree.insert(2, 1);
myTree.insert(3, 1);
myTree.insert(4, 2);
myTree.insert(5, 2);
myTree.insert(6, 4);
myTree.insert(14, 4);
myTree.insert(15, 4);

myTree.printTree(myTree.root);

// console.log("--------------------updated tree--------------------------");

// myTree.delete(5);
// myTree.printTree(myTree.root);




