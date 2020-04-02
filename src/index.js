import './style/main.less';
import { Counter, Factorial, Fibonacci, BinarySearch } from './js/logic';
import LogicBinaryTree from './js/logic-binary-tree';
import Reset from './js/reset';


const init = () => {
    const reset  = new Reset();
    const counter = new Counter();
    const factorial = new Factorial();
    const fibonacci = new Fibonacci();
    const binarySearch = new BinarySearch();
    const logicbinarytree = new LogicBinaryTree();


    reset.resetMethod();
    counter.counterMethod();
    factorial.factorialMethod();
    fibonacci.fibonacciMethod();
    binarySearch.binarySearchMethod();
    logicbinarytree.binaryLinked()
};

init();