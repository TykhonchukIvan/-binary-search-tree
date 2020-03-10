import './style/main.less';
import { Counter, Factorial, Fibonacci, BinarySearch, BinaryTreelogic } from './js/logic';


const init = () => {
    const counter = new Counter();
    const factorial = new Factorial();
    const fibonacci = new Fibonacci();
    const binarySearch = new BinarySearch();
    const binaryTreelogic = new BinaryTreelogic();

    counter.counterMethod();
    factorial.factorialMethod();
    fibonacci.fibonacciMethod();
    binarySearch.binarySearchMethod();
    binaryTreelogic.binaryTreeMethod()
};

init();