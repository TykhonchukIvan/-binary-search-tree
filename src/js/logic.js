import { Model } from './model.js';

export class Counter {
    constructor() {
        this._model = new Model();
    }

    counterMethod = () => {
        this._model._counterBtn.addEventListener('click', () => {
            this._model._counterDisplay.innerHTML = count();
        });
        let count = makeCounter();

        function makeCounter() {
            function counter() {
                return counter.currentCount++;
            }

            counter.currentCount = 1;
            return counter;
        }
    }
}

export class Factorial {
    constructor() {
        this._model = new Model();
    }

    factorialMethod = () => {
        let factorialValue = this._model._factorialValue;
        let factorialDis = this._model._factorialDis;

        function factorial(n) {
            if (n === 1) return n;
            else return n * factorial(n - 1);
        }

        this._model._factorialBtn.addEventListener('click', function () {
            let n = factorialValue.value;
            if (n === '') return factorialDis.innerHTML = 'Введите число в поле слева';
            factorialDis.innerHTML = `Факториал  ${n} = ${factorial(n)}`;
        });
    }
}

export class Fibonacci {
    constructor() {
        this._model = new Model();
    }

    fibonacciMethod = () => {
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
        let fibonacciBtn = this._model._fibonacciBtn;
        let fibonacciValue = this._model._fibonacciValue;
        let fibonacciDis = this._model._fibonacciDis;
        fibonacciBtn.addEventListener('click', function () {
            if (fibonacciValue.value === '') {
                return fibonacciDis.innerHTML = 'Введите число в поле слева';
            }
            fibonacciDis.innerHTML = fibonacci(parseInt(fibonacciValue.value));
        });
    }
}

export class BinarySearch {
    constructor() {
        this._model = new Model();
    }

    binarySearchMethod = () => {
        function binarySearch(el, arr) {
            let search = Math.floor(arr.length / 2);
            console.log(search);
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

        let binarySearchInputHow = this._model._binarySearchInputHow;
        let binarySearchInputWhich = this._model._binarySearchInputWhich;
        let binarySearchDisplay = this._model._binarySearchDisplay;
        let binarySearchBtn = this._model._binarySearchBtn;
        let array = this._model._array;
        binarySearchBtn.addEventListener('click', function () {
            let witch = binarySearchInputWhich.value;
            let how = binarySearchInputHow.value;
            if (witch == '' || how == '') return binarySearchDisplay.innerHTML = 'Не заполнено какое-либо из полей слева';
            addToArray(how, array);
            binarySearchDisplay.innerHTML = 'Число ' + binarySearch(witch, array) + ' найдено';
        });
    };
}

