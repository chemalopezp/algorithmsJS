class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const searchTree = (tree, query) => {
    // console.log('Searching for', query, 'in tree', tree);
    if (tree.value == undefined) {
        return false;
    } else if (tree.value == query) {
        return true;
    } else if (tree.value > query && tree.left != undefined) {
        // if (tree.left != undefined){
           return searchTree(tree.left, query);
        // } 
        // else
        //     return false;
    } else if (tree.value < query && tree.right != undefined) {
        return searchTree(tree.right, query);
    } else {
        return false;
    }
};

let tree = new Tree('A');
tree.left = new Tree('B');
tree.right = new Tree('C');
tree.right.right = new Tree('D');

console.log(searchTree(tree, 'C'));