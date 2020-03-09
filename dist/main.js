/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/style/main.less
var main = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/model.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function Model() {
  _classCallCheck(this, Model);

  this._counterBtn = document.getElementById('counterBtn');
  this._counterDisplay = document.getElementById('counterDisplay');
  this._factorialValue = document.getElementById('factorialValue');
  this._factorialDis = document.getElementById('factorialDis');
  this._factorialBtn = document.getElementById('factorialBtn');
  this._fibonacciValue = document.getElementById('fibonacciValue');
  this._fibonacciDis = document.getElementById('fibonacciDis');
  this._fibonacciBtn = document.getElementById('fibonacciBtn');
  this._binarySearchInputHow = document.getElementById('binarySearchInputHow');
  this._binarySearchInputWhich = document.getElementById('binarySearchInputWhich');
  this._binarySearchDisplay = document.getElementById('binarySearchDisplay');
  this._binarySearchBtn = document.getElementById('binarySearchBtn');
  this._array = [];
};

/* harmony default export */ var model = (Model);
// CONCATENATED MODULE: ./src/js/logic.js
function logic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var logic_Logic = function Logic() {
  var _this = this;

  logic_classCallCheck(this, Logic);

  _defineProperty(this, "counter", function () {
    _this.model._counterBtn.addEventListener('click', function () {
      _this.model._counterDisplay.innerHTML = count();
    });

    var count = makeCounter();

    function makeCounter() {
      function counter() {
        console.log(counter.currentCount);
        return counter.currentCount++;
      }

      counter.currentCount = 1;
      return counter;
    }
  });

  _defineProperty(this, "factorial", function () {
    var factorialValue = _this.model._factorialValue;
    var factorialDis = _this.model._factorialDis;

    function factorial(n) {
      if (n === 1) return n;else return n * factorial(n - 1);
    }

    _this.model._factorialBtn.addEventListener('click', function () {
      var n = factorialValue.value;
      if (n === '') return factorialDis.innerHTML = 'Введите число в поле слева';
      factorialDis.innerHTML = "\u0424\u0430\u043A\u0442\u043E\u0440\u0438\u0430\u043B  ".concat(n, " = ").concat(factorial(n));
    });
  });

  _defineProperty(this, "fibonacci", function () {
    var fibonacci = function fibonacci(n) {
      var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var second = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (n <= 2) return second + first;else {
        var count = second + first;
        first = second;
        second = count;
        n--;
        return fibonacci(n, first, second);
      }
    };

    var fibonacciBtn = _this.model._fibonacciBtn;
    var fibonacciValue = _this.model._fibonacciValue;
    var fibonacciDis = _this.model._fibonacciDis;
    fibonacciBtn.addEventListener('click', function () {
      if (fibonacciValue.value === '') {
        return fibonacciDis.innerHTML = 'Введите число в поле слева';
      }

      fibonacciDis.innerHTML = fibonacci(parseInt(fibonacciValue.value));
    });
  });

  _defineProperty(this, "binarySearch", function () {
    function binarySearch(el, arr) {
      console.log(arr);
      var search = Math.floor(arr.length / 2);
      console.log(search);
      console.log('5');

      if (el == arr[search]) {
        return arr[search];
      }

      if (arr[search] < el) {
        return binarySearch(el, arr.slice(search));
      }

      if (arr[search] > el) {
        return binarySearch(el, arr.slice(0, search));
      }
    }

    function addToArray(n, arr) {
      for (var i = 1; i <= n; i++) {
        arr.push(i);
      }

      return arr;
    }

    var binarySearchInputHow = _this.model._binarySearchInputHow;
    var binarySearchInputWhich = _this.model._binarySearchInputWhich;
    var binarySearchDisplay = _this.model._binarySearchDisplay;
    var binarySearchBtn = _this.model._binarySearchBtn;
    var array = _this.model._array;
    binarySearchBtn.addEventListener('click', function () {
      var witch = binarySearchInputWhich.value;
      var how = binarySearchInputHow.value;
      if (witch == '' || how == '') return binarySearchDisplay.innerHTML = 'Не заполнено какое-либо из полей слева';
      addToArray(how, array);
      binarySearchDisplay.innerHTML = 'Число ' + binarySearch(witch, array) + ' найдено';
    });
  });

  this.model = new model();
};

/* harmony default export */ var js_logic = (logic_Logic);
// CONCATENATED MODULE: ./src/index.js



var src_init = function init() {
  var logic = new js_logic();
  logic.counter();
  logic.factorial();
  logic.fibonacci();
  logic.binarySearch();
};

src_init();

/***/ })
/******/ ]);