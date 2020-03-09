import './style/main.less';
import Logic from './js/logic';

const init = () => {

    const logic = new Logic();
    logic.counter();
    logic.factorial();
    logic.fibonacci();
    logic.binarySearch();
    logic.binaryTree();
};

init();