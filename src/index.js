import './style/main.less';
import { Counter, Factorial, Fibonacci, BinarySearch } from './js/logic';
import LogicBinaryTree from './js/logic-binary-tree';

const init = () => {
    const counter = new Counter();
    const factorial = new Factorial();
    const fibonacci = new Fibonacci();
    const binarySearch = new BinarySearch();
    const logicbinarytree = new LogicBinaryTree();

    counter.counterMethod();
    factorial.factorialMethod();
    fibonacci.fibonacciMethod();
    binarySearch.binarySearchMethod();
    logicbinarytree.binaryLinked()
};

init();