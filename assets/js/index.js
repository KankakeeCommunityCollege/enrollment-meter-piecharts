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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/_js/index.js":
/*!*****************************!*\
  !*** ./assets/_js/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var CountNumbers = {\n  currentHeadCount: 2300,\n  previousHeadCount: 2400,\n  currentCreditHours: 22000,\n  previousCreditHours: 20000\n};\n\nvar term = 'Summer 2018'; //Term variable requested\n\n(function () {\n  var graph = document.querySelector('#graph1'), //selects the graph blue circle\n    graphRadius = graph.r.baseVal.value, //Radius of the blue circle set to 100\n    strokeLength = 2 * Math.PI * graphRadius,\n    offset = strokeLength,\n    stopLength = Math.ceil(strokeLength - (strokeLength * 1.0)),\n    textValue = strokeLength;\n\n  function animate () {\n    if (offset > stopLength) {\n      offset -= 5;\n      textValue = Math.floor((1 - offset / strokeLength) * 100);\n      graph.style.strokeDashoffset = offset;\n      requestAnimationFrame(animate);\n    }\n  }\n\n  setTimeout(animate, 1000);\n\n})();\n\n(function () {\n  var current = CountNumbers.currentHeadCount,\n    previous = CountNumbers.previousHeadCount,\n    percentHeadcount = 1 - (current / previous),\n    graph = document.querySelector('#graph1-percent'),\n    text = document.querySelector('#headcountPercent'),\n    currentLabel = document.querySelector('#headcount-currentLabel'),\n    currentText = document.querySelector('#graph1-current'),\n    previousText = document.querySelector('#graph1-previous'),\n    termText = document.querySelector('#graph1-term'),\n    graphRadius = graph.r.baseVal.value,\n    strokeLength = 2 * Math.PI * graphRadius,\n    offset = strokeLength,\n    stopLength = Math.ceil(strokeLength - (strokeLength * percentHeadcount)),\n    textValue = strokeLength;\n\n  currentText.textContent = current;\n  previousText.textContent = previous;\n  termText.textContent = term;\n\n  if(current < previous){\n    text.textContent = '-' + Math.round(percentHeadcount * 100) + '%'; //This is where number is put together as visual percentage\n  } else if(current > previous){\n    text.textContent = '+' + Math.round((-(percentHeadcount)) * 100) + '%';\n    text.style.fill = '#008000';\n    currentLabel.style.fill = '#008000';\n    currentText.style.fill = '#008000';\n  } else if(current === previous){\n    text.textContent = Math.round(percentHeadcount * 100) + '%';\n    text.style.fill = '#008000';\n    currentLabel.style.fill = '#008000';\n    currentText.style.fill = '#008000';\n  }\n\n  function animate () {\n    if (offset > stopLength) {\n      offset -= 5;\n      textValue = Math.floor((1 - offset / strokeLength) * 100);\n\n      graph.style.strokeDashoffset = offset;\n      requestAnimationFrame(animate);\n\n    }\n  }\n\n  setTimeout(animate, 1000);\n\n})();\n\n(function () {\n  var graph = document.querySelector('#graph2'),\n    graphRadius = graph.r.baseVal.value,\n    strokeLength = 2 * Math.PI * graphRadius,\n    offset = strokeLength,\n    stopLength = Math.ceil(strokeLength - (strokeLength * 1.0)),\n    textValue = strokeLength;\n\n  function animate () {\n    if (offset > stopLength) {\n      offset -= 5;\n      textValue = Math.floor((1 - offset / strokeLength) * 100);\n\n      graph.style.strokeDashoffset = offset;\n\n      requestAnimationFrame(animate);\n\n    }\n  }\n\n  setTimeout(animate, 1000); //gives time to do animation\n\n})();\n\n//CREDIT HOURS red line section\n(function () {\n  var current = CountNumbers.currentCreditHours,\n    previous = CountNumbers.previousCreditHours,\n    percentCreditHours = 1 - (current / previous),\n    graph = document.querySelector('#graph2-percent'),\n    currentLabel = document.querySelector('#creditHours-currentLabel'),\n    currentText = document.querySelector('#graph2-current'),\n    previousText = document.querySelector('#graph2-previous'),\n    termText = document.querySelector('#graph2-term'),\n    text = document.querySelector('#creditHoursPercent2'),\n    graphRadius = graph.r.baseVal.value,\n    strokeLength = 2 * Math.PI * graphRadius,\n    offset = strokeLength,\n    stopLength = Math.ceil(strokeLength - (strokeLength * percentCreditHours)),\n    textValue = strokeLength; //This is the percent number seen\n\n  currentText.textContent = current;\n  previousText.textContent = previous;\n  termText.textContent = term;\n\n  if(current < previous){\n    text.textContent = '-' + Math.round(percentCreditHours * 100) + '%'; //This is where number is put together as visual percentage\n  } else if(current > previous){\n    text.textContent = '+' + Math.round((-(percentCreditHours)) * 100) + '%';\n    text.style.fill = '#008000';\n    currentLabel.style.fill = '#008000';\n    currentText.style.fill = '#008000';\n  } else if(current === previous){\n    text.textContent = Math.round(percentCreditHours * 100) + '%';\n    text.style.fill = '#008000';\n    currentLabel.style.fill = '#008000';\n    currentText.style.fill = '#008000';\n  }\n\n  function animate () {\n    if (offset > stopLength) {\n      offset -= 5;\n      textValue = Math.floor((1 - offset / strokeLength) * 100);\n\n      graph.style.strokeDashoffset = offset;\n      requestAnimationFrame(animate);\n\n    }\n  }\n\n  setTimeout(animate, 1000); //gives time to do animation\n\n})();\n\n\n//# sourceURL=webpack:///./assets/_js/index.js?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./assets/_js/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/rehmpke/repositories/enrollment-meter-piecharts/assets/_js/index.js */\"./assets/_js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/_js/index.js?");

/***/ })

/******/ });