class Model {
    constructor() {
        this._counterBtn = document.getElementById('counterBtn');
        this._counterDisplay = document.getElementById('counterDisplay');

        this._factorialDis = document.getElementById('factorialDis');
        this._factorialBtn = document.getElementById('factorialBtn');
        this._factorialValue = document.getElementById('factorialValue');

        this._fibonacciDis = document.getElementById('fibonacciDis');
        this._fibonacciBtn = document.getElementById('fibonacciBtn');
        this._fibonacciValue = document.getElementById('fibonacciValue');

        this._array = [];
        this._binarySearchBtn = document.getElementById('binarySearchBtn');
        this._binarySearchDisplay = document.getElementById('binarySearchDisplay');
        this._binarySearchInputHow = document.getElementById('binarySearchInputHow');
        this._binarySearchInputWhich = document.getElementById('binarySearchInputWhich');

        this._binaryTreeBtn = document.getElementById('binaryTreeBtn');
        this._binaryTreeDisplay = document.getElementById('binaryTreeDisplay');
        this._binaryTreeInputPush = document.getElementById('binaryTreeInputPush');
        this._binaryTreeInputFind = document.getElementById('binaryTreeInputFind');
    }
}
export default Model;

class BinnaryTree {
    constructor(){
        this.root = null;
    }
}
export default BinnaryTree;

class CreateTreeNode {
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;

    }
}
export default CreateTreeNode;