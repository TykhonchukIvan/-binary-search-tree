import Model from './model.js';

class Logic {
    constructor() {
        this.model = new Model();
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

    };
}

export default Logic;