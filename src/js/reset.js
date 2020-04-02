import { Model } from './model.js';

class Reset {

    constructor(){
        this._model = new Model();
    }

    resetMethod = () =>{

        const resetBtn =  this._model._resetBtn;
        let counterDisplay =  this._model._counterDisplay;
        let factorialDis = this._model._factorialDis;
        let fibonacciDis = this._model._fibonacciDis;
        let binarySearchDisplay = this._model._binarySearchDisplay;
        let binaryTreeDisplay = this._model._binaryTreeDisplay;
        let linkedListDisplay = this._model._linkedListDisplay;
        let binaryTreeCompareDisplay = this._model._binaryTreeCompareDisplay;
        let linkedListCompareDisplay = this._model._linkedListCompareDisplay;

        let factorialValue = this._model._factorialValue;
        let fibonacciValue = this._model._fibonacciValue;
        let binaryTreeInputPush = this._model._binaryTreeInputPush;
        let binaryTreeInputFind = this._model._binaryTreeInputFind;
        let linkedListInputPush = this._model._linkedListInputPush;
        let linkedListInputFind = this._model._linkedListInputFind;
        let binarySearchInputHow = this._model._binarySearchInputHow;
        let binarySearchInputWhich = this._model._binarySearchInputWhich;

        resetBtn.addEventListener('click', function () {

            counterDisplay.innerText = '0';
            factorialDis.innerText = '';
            fibonacciDis.innerText = '';
            binarySearchDisplay.innerText = '';
            binaryTreeDisplay.innerText = '';
            linkedListDisplay.innerText = '';
            binaryTreeCompareDisplay.innerText = 'Время поиска Binary tree collection';
            linkedListCompareDisplay.innerText = 'Время поиска Linked List collection';

            factorialValue.value ='';
            fibonacciValue.value ='';
            binaryTreeInputPush.value ='';
            binaryTreeInputFind.value = '';
            linkedListInputPush.value = '';
            linkedListInputFind.value ='';
            binarySearchInputHow.value ='';
            binarySearchInputWhich.value = '';

        });
    }
}

export default Reset