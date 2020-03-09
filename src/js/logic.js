import Model from './model.js';

class Logic {
    constructor() {
        this.model = new Model();

        this.root = null;


        this.left = null;
        this.right = null;
        this.data = data;
    }

    counter = () => {
        this.model._counterBtn.addEventListener('click', () => {
            this.model._counterDisplay.innerHTML = count();
        });
        let count = makeCounter();

        function makeCounter() {
            function counter() {
                console.log(counter.currentCount);
                return counter.currentCount++;
            }

            counter.currentCount = 1;
            return counter;
        }
    };

    factorial = () => {

        let factorialValue = this.model._factorialValue;
        let factorialDis = this.model._factorialDis;

        function factorial(n) {
            if (n === 1) return n;
            else return n * factorial(n - 1);
        }

        this.model._factorialBtn.addEventListener('click', function () {
            let n = factorialValue.value;
            if (n === '') return factorialDis.innerHTML = 'Введите число в поле слева';
            factorialDis.innerHTML = `Факториал  ${n} = ${factorial(n)}`;
        });
    };

    fibonacci = () => {

        const fibonacci = (n, first = 0, second = 1) => {
            if (n <= 2) return second + first;
            else {
                let count = second + first;
                first = second;
                second = count;
                n--;
                return fibonacci(n, first, second)
            }
        };

        let fibonacciBtn = this.model._fibonacciBtn;
        let fibonacciValue = this.model._fibonacciValue;
        let fibonacciDis = this.model._fibonacciDis;

        fibonacciBtn.addEventListener('click', function () {
            if (fibonacciValue.value === '') {
                return fibonacciDis.innerHTML = 'Введите число в поле слева';
            }
            fibonacciDis.innerHTML = fibonacci(parseInt(fibonacciValue.value));
        });
    };

    binarySearch = () => {

        function binarySearch(el, arr) {
            console.log(arr);
            let search = Math.floor(arr.length / 2);
            console.log(search);
            console.log('5')
            if (el == arr[search]) {
                return arr[search];
            }
            if (arr[search] < el) {
                return binarySearch(el, arr.slice(search))
            }

            if (arr[search] > el) {
                return binarySearch(el, arr.slice(0, search))
            }
        }

        function addToArray(n, arr) {
            for (let i = 1; i <= n; i++) {
                arr.push(i);
            }
            return arr;
        }

        let binarySearchInputHow = this.model._binarySearchInputHow;
        let binarySearchInputWhich = this.model._binarySearchInputWhich;
        let binarySearchDisplay = this.model._binarySearchDisplay;
        let binarySearchBtn = this.model._binarySearchBtn;
        let array = this.model._array;


        binarySearchBtn.addEventListener('click', function () {
            let witch = binarySearchInputWhich.value;
            let how = binarySearchInputHow.value;
            if (witch == '' || how == '') return binarySearchDisplay.innerHTML = 'Не заполнено какое-либо из полей слева';
            addToArray(how, array);
            binarySearchDisplay.innerHTML = 'Число ' + binarySearch(witch, array) + ' найдено';
        });
    };

    binaryTree = () => {

        let binaryTreeBtn = this.model._binaryTreeBtn;
        let binaryTreeDisplay = this.model._binaryTreeDisplay;
        let binaryTreeInputPush = this.model._binaryTreeInputPush;
        let binaryTreeInputFind = this.model._binaryTreeInputFind;


    }
}

export default Logic;