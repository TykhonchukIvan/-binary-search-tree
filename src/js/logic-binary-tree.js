import { Model } from './model.js';
import { AList, SuperLList } from './linkedlistinterface';

class LogicBinaryTree {
    constructor() {
        this._tree = new BinnaryTree();
        this._model = new Model();
        this._alist = new AList();
        this._superLList = new SuperLList();
    }

    binaryLinked = () => {

        let binaryTreeBtn = this._model._binaryTreeBtn;
        let binaryTreeDisplay =  this._model._binaryTreeDisplay;
        let binaryTreeInputPush = this._model._binaryTreeInputPush;
        let binaryTreeInputFind = this._model._binaryTreeInputFind;

        let linkedListInputPush = this._model._linkedListInputPush;
        let linkedListInputFind = this._model._linkedListInputFind;
        let linkedListDisplay = this._model._linkedListDisplay;
        let linkedListBtn  = this._model._linkedListBtn;
        let binaryTreeCompareDisplay = this._model._binaryTreeCompareDisplay;
        let linkedListCompareDisplay = this._model._linkedListCompareDisplay;


        const model = new Model();
        const tree = new BinnaryTree();

        let randArray = [];
        randArray = model.randomNums(500000);

        binaryTreeBtn.addEventListener('click', function () {

            tree.addToTree(binaryTreeInputPush.value, randArray);

            binaryTreeDisplay.innerHTML = tree.search(binaryTreeInputFind.value);
        });


        const linkedCompare = new SuperLList();
        const treeCompare = new BinnaryTree();

        let randArrayCompare = [];
        randArrayCompare = model.randomNums(500000);

        linkedListBtn.addEventListener('click' , function(){

            if(linkedListInputPush.value === '' || linkedListInputFind.value === '') {
                binaryTreeCompareDisplay.innerHTML = 'Введите количество чисел для поиска в левый input';
                linkedListCompareDisplay.innerHTML = 'Введите искомое число в правый input';
                return;
            }
            treeCompare.addToTree(linkedListInputPush.value, randArrayCompare);
            linkedCompare.addToArray(linkedListInputPush.value, randArrayCompare);
            compareLists();
        });

        let compareLists = () =>{
            let startList = performance.now();
            linkedCompare.findEl(linkedListInputFind.value,randArrayCompare);
            let endList = performance.now();
            let startTree = performance.now();
            treeCompare.search(linkedListInputFind.value,randArrayCompare);
            let endTree = performance.now();
            linkedListDisplay.innerHTML = linkedCompare.findEl(linkedListInputFind.value,randArrayCompare);
            linkedListCompareDisplay.innerHTML = "Linked List Search Time " + (endList - startList) + " milliseconds.";
            binaryTreeCompareDisplay.innerHTML = "Binnary Tree Search Time " + (endTree - startTree) + " milliseconds.";
        }

    }


}

class BinnaryTree {
    constructor() {
        this.root = null;
    }
}

class CreateTreeNode {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

BinnaryTree.prototype.addToTree = function (n, arr) {
    for (let i = 0; i <= n; i++) {
        this.push(arr[i])
    }
};

BinnaryTree.prototype.search = function (searchEl, nextStep) {

    let tmpNode;
    if (nextStep == undefined) {
        tmpNode = this.root;
    } else {
        tmpNode = nextStep;
    }
    if (tmpNode.data == searchEl) {
        return `элемент найден ${tmpNode.data}`;
    } else if (searchEl < tmpNode.data && tmpNode.left != null) {
        return this.search(searchEl, tmpNode.left)
    } else if (searchEl > tmpNode.data && tmpNode.right != null) {
        return this.search(searchEl, tmpNode.right)
    } else {
        return `элемент не найден ${searchEl}`;
    }
};

BinnaryTree.prototype.push = function (el, nextStep) {
    const noda = new CreateTreeNode(el);
    let tmpNoda;
    if (nextStep === undefined) {
        tmpNoda = this.root;
    } else {
        tmpNoda = nextStep
    }
    if (this.root == null) {
        this.root = noda;
    } else {
        if (el >= tmpNoda.data && tmpNoda.right != null) {
            return this.push(el, tmpNoda.right)
        } else if (el < tmpNoda.data && tmpNoda.left != null) {
            return this.push(el, tmpNoda.left)
        } else if (el >= tmpNoda.data) {
            tmpNoda.right = noda;
        } else if (el < tmpNoda.data) {
            tmpNoda.left = noda;
        }
    }
};

export default LogicBinaryTree;