/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    background-color: #244c8c;\n    color: #FFF;\n    text-shadow: 2px 2px rgb(33, 33, 33);\n    font-family: sans-serif;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n    \n}\n\nnav {\n    background-color: rgb(33, 33, 33);\n    height: 100px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.validity {\n    position: absolute;\n    bottom: 0;\n    left: 30em;\n    background-color: rgb(131, 34, 34);\n    padding: 0.2em;\n    opacity: 0;\n}\n\n.search {\n    margin: 0 auto 0 auto;\n}\n\n.search input {\n    width: 500px;\n    height: 40px;\n    font-size: 24px;\n    text-align: center;\n}\n\n.search button {\n    height: 40px;\n    margin-left: 0.5em;\n    margin-right: auto;\n    width: 100px;\n    font-size: 24px;\n    background-color: #ff7f50;\n    border: none;\n    border-radius: 5px;\n    outline: 1px solid black;\n}\n\n.search button:hover {\n    background-color: #fd9d7a;\n    cursor: pointer;\n}\n\n.temp-measurement {\n    justify-self: flex-end;\n    height: 40px;\n    width: 100px;\n    margin: 0 auto 0 0;\n    font-size: 24px;\n}\n\n.temp-measurement:hover {\n    cursor: pointer;\n    outline: none;\n    background-color: white;\n    border-radius: inherit;\n}\n\n.weather-container {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n}\n\n.weather-header {\n    width: 300px;\n    height: auto;\n    margin: 0.5em 1em 0 1em;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    background-color: rgba(133, 148, 171, 0.2);\n    transition: all 0.3s;\n}\n\n.weather-header:hover {\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.name {\n    font-size: 32px;\n    margin-bottom: 0;\n    margin-top: 10px;    \n}\n\n.current-weather {\n    margin-top: 0;\n    margin-bottom: 0.3em;\n}\n\n.temp {\n    font-size: 88px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding-left: 0.6em;\n}\n\n.min-max-container {\n    display: flex;\n    flex-flow: row;\n    font-size: 16px;\n}\n\n.min-max {\n    margin-top: 0;\n    margin-left: 10px;\n    flex-flow: row;\n}\n\n.current-icon {\n    height: 300px;\n    width: 300px;\n    margin: 0 0 0 0;\n}\n.current-desc {\n    margin: 0 auto 0 0 ;\n    align-self: center;\n    font-size: 24px;\n}\n\n.weather-stats {\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(2, 15em);\n    grid-column-gap: 5em;\n    font-size: 1.2rem;\n    margin: 0.5em 1em 0 0;\n    background-color: rgba(133, 148, 171, 0.2);\n    transition: all 0.3s;\n}\n\n.weather-stats:hover {\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.weather-info {\n    margin: 0.7em 0 0 2em;\n    color: rgba(102, 202, 253, 1);\n    font-size: 1rem;\n}\n\n.weather-info span {\n    color: white;\n    font-size: 1.2rem;\n    margin: 0 0 0 0.2em;\n}\n\n.weather-hourly {\n    width: 100%;\n    height: 11em;\n    margin: 3em auto 0 auto;\n    display: grid;\n    grid-template-columns: repeat(24, 100px);\n    text-align: center;\n    background-color: rgba(133, 148, 171, 0.1);\n    overflow-x: scroll;\n    overflow-y: hidden;\n    scrollbar-width: none;\n    cursor: grab;\n    outline: 1px solid rgba(255, 255, 255, 0.56);\n    transition: all 0.3s;\n}\n\n.weather-hourly:hover {\n    height: 12em;\n    padding-top: 0.5em;\n    outline: 1px solid rgb(255, 255, 255);\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.weather-hourly::-webkit-scrollbar {\ndisplay: none;\n}\n\n.hourly-time {\n    margin-bottom: 0;\n}\n\n.hourly-temp {\n    margin-top: 0;\n}\n\n.weather-daily {\n    width: auto;\n    height: auto;\n    display: grid;\n    grid-template-columns: repeat(7, 250px);\n    text-align: center;\n    margin: 2em 2em 2em 1em;\n}\n\n.daily-cell {\n    display: flex;\n    flex-flow: column;\n    height: 300px;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(133, 148, 171, 0.1);\n    margin-right: 1em;\n    transition: all 0.3s;\n}\n\n.daily-cell:hover {\n    transform: scale(1.05, 1.05);\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.daily-day {\n    font-size: 1.6rem;\n    \n}\n\n.daily-icon {\n    height: 150px;\n    width: 150px;\n}\n\n.daily-temp-container {\n    display: flex;\n    flex-flow: row;\n    justify-content: center;\n    gap: 0.8em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,yBAAyB;IACzB,WAAW;IACX,oCAAoC;IACpC,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;;AAEvB;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kCAAkC;IAClC,cAAc;IACd,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,cAAc;IACd,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,0CAA0C;IAC1C,oBAAoB;AACxB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sCAAsC;IACtC,oBAAoB;IACpB,iBAAiB;IACjB,qBAAqB;IACrB,0CAA0C;IAC1C,oBAAoB;AACxB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,qBAAqB;IACrB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,wCAAwC;IACxC,kBAAkB;IAClB,0CAA0C;IAC1C,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,4CAA4C;IAC5C,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qCAAqC;IACrC,0CAA0C;AAC9C;;AAEA;AACA,aAAa;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uCAAuC;IACvC,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0CAA0C;IAC1C,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,UAAU;AACd","sourcesContent":["body {\n    margin: 0;\n    background-color: #244c8c;\n    color: #FFF;\n    text-shadow: 2px 2px rgb(33, 33, 33);\n    font-family: sans-serif;\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    box-sizing: inherit;\n    \n}\n\nnav {\n    background-color: rgb(33, 33, 33);\n    height: 100px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n.validity {\n    position: absolute;\n    bottom: 0;\n    left: 30em;\n    background-color: rgb(131, 34, 34);\n    padding: 0.2em;\n    opacity: 0;\n}\n\n.search {\n    margin: 0 auto 0 auto;\n}\n\n.search input {\n    width: 500px;\n    height: 40px;\n    font-size: 24px;\n    text-align: center;\n}\n\n.search button {\n    height: 40px;\n    margin-left: 0.5em;\n    margin-right: auto;\n    width: 100px;\n    font-size: 24px;\n    background-color: #ff7f50;\n    border: none;\n    border-radius: 5px;\n    outline: 1px solid black;\n}\n\n.search button:hover {\n    background-color: #fd9d7a;\n    cursor: pointer;\n}\n\n.temp-measurement {\n    justify-self: flex-end;\n    height: 40px;\n    width: 100px;\n    margin: 0 auto 0 0;\n    font-size: 24px;\n}\n\n.temp-measurement:hover {\n    cursor: pointer;\n    outline: none;\n    background-color: white;\n    border-radius: inherit;\n}\n\n.weather-container {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n}\n\n.weather-header {\n    width: 300px;\n    height: auto;\n    margin: 0.5em 1em 0 1em;\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    background-color: rgba(133, 148, 171, 0.2);\n    transition: all 0.3s;\n}\n\n.weather-header:hover {\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.name {\n    font-size: 32px;\n    margin-bottom: 0;\n    margin-top: 10px;    \n}\n\n.current-weather {\n    margin-top: 0;\n    margin-bottom: 0.3em;\n}\n\n.temp {\n    font-size: 88px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding-left: 0.6em;\n}\n\n.min-max-container {\n    display: flex;\n    flex-flow: row;\n    font-size: 16px;\n}\n\n.min-max {\n    margin-top: 0;\n    margin-left: 10px;\n    flex-flow: row;\n}\n\n.current-icon {\n    height: 300px;\n    width: 300px;\n    margin: 0 0 0 0;\n}\n.current-desc {\n    margin: 0 auto 0 0 ;\n    align-self: center;\n    font-size: 24px;\n}\n\n.weather-stats {\n    height: 300px;\n    display: grid;\n    grid-template-columns: repeat(2, 15em);\n    grid-column-gap: 5em;\n    font-size: 1.2rem;\n    margin: 0.5em 1em 0 0;\n    background-color: rgba(133, 148, 171, 0.2);\n    transition: all 0.3s;\n}\n\n.weather-stats:hover {\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.weather-info {\n    margin: 0.7em 0 0 2em;\n    color: rgba(102, 202, 253, 1);\n    font-size: 1rem;\n}\n\n.weather-info span {\n    color: white;\n    font-size: 1.2rem;\n    margin: 0 0 0 0.2em;\n}\n\n.weather-hourly {\n    width: 100%;\n    height: 11em;\n    margin: 3em auto 0 auto;\n    display: grid;\n    grid-template-columns: repeat(24, 100px);\n    text-align: center;\n    background-color: rgba(133, 148, 171, 0.1);\n    overflow-x: scroll;\n    overflow-y: hidden;\n    scrollbar-width: none;\n    cursor: grab;\n    outline: 1px solid rgba(255, 255, 255, 0.56);\n    transition: all 0.3s;\n}\n\n.weather-hourly:hover {\n    height: 12em;\n    padding-top: 0.5em;\n    outline: 1px solid rgb(255, 255, 255);\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.weather-hourly::-webkit-scrollbar {\ndisplay: none;\n}\n\n.hourly-time {\n    margin-bottom: 0;\n}\n\n.hourly-temp {\n    margin-top: 0;\n}\n\n.weather-daily {\n    width: auto;\n    height: auto;\n    display: grid;\n    grid-template-columns: repeat(7, 250px);\n    text-align: center;\n    margin: 2em 2em 2em 1em;\n}\n\n.daily-cell {\n    display: flex;\n    flex-flow: column;\n    height: 300px;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(133, 148, 171, 0.1);\n    margin-right: 1em;\n    transition: all 0.3s;\n}\n\n.daily-cell:hover {\n    transform: scale(1.05, 1.05);\n    background-color: rgba(133, 148, 171, 0.3);\n}\n\n.daily-day {\n    font-size: 1.6rem;\n    \n}\n\n.daily-icon {\n    height: 150px;\n    width: 150px;\n}\n\n.daily-temp-container {\n    display: flex;\n    flex-flow: row;\n    justify-content: center;\n    gap: 0.8em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHour": () => (/* binding */ getHour),
/* harmony export */   "getDay": () => (/* binding */ getDay),
/* harmony export */   "getDayName": () => (/* binding */ getDayName),
/* harmony export */   "appendHourlyIcon": () => (/* binding */ appendHourlyIcon),
/* harmony export */   "appendHourlyTemp": () => (/* binding */ appendHourlyTemp),
/* harmony export */   "appendDailyIcon": () => (/* binding */ appendDailyIcon),
/* harmony export */   "appendDailyTemp": () => (/* binding */ appendDailyTemp)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");



//default init
let units = "imperial"
let cityname = ""

const changeTemp = document.querySelector('.temp-measurement')
changeTemp.addEventListener('click', () => {
    changeMeasurement()
})

const search = document.querySelector('.search')
search.addEventListener('submit', (e) => {
    e.preventDefault()
    cityname = search.elements[0].value
    getLocation(cityname, units)
})

async function getLocation(cityname, units) {
    const validityCheck = document.querySelector('.validity')
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=${units}&APPID=8da6e4702fef427379c1ed0387c3fc89`, {mode: 'cors'})
    //check to make sure valid response
    if (response.status === 404 || response.status === 400) {
        validityCheck.setAttribute("style", "opacity: 1")
        return;
    }
    validityCheck.setAttribute("style", "opacity: 0")
    const weatherLocation = await response.json()
    getData(weatherLocation)
}

async function getData(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coord['lat']}&lon=${location.coord['lon']}&units=${units}&appid=8da6e4702fef427379c1ed0387c3fc89`, {mode: 'cors'})
    const weatherData = await response.json()
    ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderData)(location, weatherData, units)
}

function changeMeasurement() {
    if (units === "imperial") {
        units = "metric"
        changeTemp.textContent = "C\xB0"
    } else {
        units = "imperial"
        changeTemp.textContent = "F\xB0"
    }
    getLocation(cityname, units)
}

function getHour() {
    let time = new Date()
    let h = time.getHours()
    return h
}

function getDay() {
    let time = new Date()
    let day = time.getDay()
    if (day === 6) {
        day = 0
    }
    return day
}

function getDayName(day) {
    let result = ''
    switch(day) {
        case 0:
            result = "Sunday";
            break;
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;   
    }
    return result
}

function appendHourlyIcon(data, i, cell) {
    let icon = document.createElement('img')
    icon.src = `https://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png`
    icon.alt = `${data.hourly[i].weather[0].description}`
    icon.classList.add('hourly-icon')
    cell.appendChild(icon)
}

function appendHourlyTemp(data, i, cell) {
    let temp = document.createElement('p')
    temp.textContent = `${Math.round(data.hourly[i].temp)}\xB0`
    temp.classList.add('hourly-temp')
    cell.appendChild(temp)
}

function appendDailyIcon(data, i, cell) {
    let icon = document.createElement('img')
    icon.src = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`
    icon.alt = `${data.daily[i].weather[0].description}`
    icon.classList.add('daily-icon')
    cell.appendChild(icon)
}

function appendDailyTemp(data, i, cell) {
    let tempContainer = document.createElement('div')
    tempContainer.classList.add('daily-temp-container')
    let tempH = document.createElement('p')
    tempH.classList.add('daily-tempH')
    tempH.textContent = `H:${Math.round(data.daily[i].temp['max'])}\xB0`

    let tempL = document.createElement('p')
    tempL.classList.add('daily-tempL')
    tempL.textContent = `L:${Math.round(data.daily[i].temp['min'])}\xB0`

    tempContainer.appendChild(tempH)
    tempContainer.appendChild(tempL)
    cell.appendChild(tempContainer)
}

//dragging function
const el = document.querySelector('.weather-hourly')
let x = 0, left = 0;
let draggingFunction = (e) => {
    document.addEventListener('mouseup', () => {
        document.removeEventListener("mousemove", draggingFunction);
    });
    el.scrollLeft = left - e.pageX + x;
};

el.addEventListener('mousedown', (e) => {
    e.preventDefault();
    x = e.pageX;
    left = el.scrollLeft;
    document.addEventListener('mousemove', draggingFunction);
});

//init page
getLocation("New York", units)




/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderData": () => (/* binding */ renderData)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function renderData(location, data, units) {
    renderCityName(location.name)
    renderHeaderData(data)
    renderMainData(data, units)
    renderHourly(data)
    renderForecast(data)
}


function renderCityName(locationName) {
    const name = document.querySelector('.name')
    name.textContent = locationName
}

function renderHeaderData(data) {
    const currentWeather = document.querySelector('.current-weather')
    currentWeather.textContent = data.current.weather[0]['main']

    const temp = document.querySelector('.temp')
    temp.textContent = `${Math.round(data.current['temp'])}\xB0`

    const maxTemp = document.querySelector('#maxTemp')
    maxTemp.textContent = `H:${Math.round(data.daily[0].temp['max'])}\xB0`

    const minTemp = document.querySelector('#minTemp')
    minTemp.textContent = `L:${Math.round(data.daily[0].temp['min'])}\xB0`

    const currentIcon = document.querySelector('.current-icon')
    currentIcon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`
    currentIcon.alt = `${data.current.weather[0].description}`

    const currentDesc = document.querySelector('.current-desc')
    const desc = data.current.weather[0].description
    const capitalDesc = desc.charAt(0).toUpperCase() + desc.slice(1)
    currentDesc.textContent = `Today: ${capitalDesc} currently.`
}

function renderMainData(data, units) {
    const sunrise = document.querySelector('#sunrise')
    //convert from utc time to 12hr clock
    let sunriseTime = new Date(data.current.sunrise *1000)
    let sunriseHour = sunriseTime.getHours() % 12 || 12
    let sunriseMinutes = sunriseTime.getMinutes()
    if (sunriseMinutes < 10) {
        sunriseMinutes = "0" + sunriseMinutes
    }
    sunrise.textContent = `${sunriseHour}:${sunriseMinutes}AM`

    const sunset = document.querySelector('#sunset')
    let sunsetTime = new Date(data.current.sunset *1000)
    let sunsetHour = sunsetTime.getHours() % 12 || 12
    let sunsetMinutes = sunsetTime.getMinutes()
    if (sunsetMinutes < 10) {
        sunsetMinutes = "0" + sunsetMinutes
    }
    sunset.textContent = `${sunsetHour}:${sunsetMinutes}PM`

    const humidity = document.querySelector('#humidity')
    humidity.textContent = `${data.current.humidity}%`

    const feelsLike = document.querySelector('#feels-like')
    feelsLike.textContent = `${Math.round(data.current.feels_like)}\xB0`

    const pop = document.querySelector('#pop')
    pop.textContent = `${data.hourly[0].pop}%`

    const percipitation = document.querySelector('#percipitation')
    //sometimes percipitation value isn't added to the response
    percipitation.textContent = data.daily[0].rain ? `${data.daily[0].rain} in` : '0 in'

    const windspeed = document.querySelector('#windspeed')
    let measurement = ''
    if (units === "imperial") {
        measurement = 'mph'
    } else {
        measurement = 'mps'
    }
    windspeed.textContent = `${data.current.wind_speed} ${measurement}`

    const pressure = document.querySelector('#pressure')
    pressure.textContent = `${data.current.pressure} hPa`

    const visibility = document.querySelector('#visibility')
    visibility.textContent = `${data.current.visibility} meters`

    const uvIndex = document.querySelector('#uv-index')
    uvIndex.textContent = `${data.current.uvi}`

}

function renderHourly(data) {
    const container = document.querySelector('.weather-hourly')
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    //math to convert to a 24 hour period in local time
    let h = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getHour)()
    let period = ''
    if (h >= 0 && h <= 11) {
        period = "am"
    } else {
        period = "pm"
    }
    let currentHour =  h % 12 || 12

    for (let i = 0; i < 24; i++) {
        let cell = document.createElement('div')
        cell.classList.add('hourly-cell')

        let time = document.createElement('p')
        if (i !== 0) {
            if (currentHour === 12) {
            currentHour = 0
            if (period === "pm") {
                period = "am"
            } else {
                period = "pm"
            }
            }
        }
       
        if(i === 0) {
            time.textContent = "Now"
        } else {
            currentHour += 1
            time.textContent = `${currentHour}${period}`
        }
        time.classList = "hourly-time"
        cell.appendChild(time)
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.appendHourlyIcon)(data, i, cell)
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.appendHourlyTemp)(data, i, cell)
        container.appendChild(cell)
    }
}

function renderForecast(data) {
    const container = document.querySelector('.weather-daily')
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    let day = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getDay)()
    for (let i = 1; i <= 7; i++) {
        let cell = document.createElement('div')
        cell.classList.add('daily-cell')

        let dayTitle = document.createElement('div')
        dayTitle.classList.add('daily-day')
        let dayName = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getDayName)(day)
        dayTitle.textContent = dayName
        if(day === 6) {
            day = 0
        } else {
            day++
        }
        cell.appendChild(dayTitle)
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.appendDailyIcon)(data, i, cell)      
        ;(0,_index__WEBPACK_IMPORTED_MODULE_0__.appendDailyTemp)(data, i, cell)  
        container.appendChild(cell)
    }
}






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGdCQUFnQixnQ0FBZ0Msa0JBQWtCLDJDQUEyQyw4QkFBOEIsR0FBRyxVQUFVLDZCQUE2QixHQUFHLDRCQUE0QiwwQkFBMEIsU0FBUyxTQUFTLHdDQUF3QyxvQkFBb0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixHQUFHLGVBQWUseUJBQXlCLGdCQUFnQixpQkFBaUIseUNBQXlDLHFCQUFxQixpQkFBaUIsR0FBRyxhQUFhLDRCQUE0QixHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxvQkFBb0IsbUJBQW1CLHlCQUF5Qix5QkFBeUIsbUJBQW1CLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLHlCQUF5QiwrQkFBK0IsR0FBRywwQkFBMEIsZ0NBQWdDLHNCQUFzQixHQUFHLHVCQUF1Qiw2QkFBNkIsbUJBQW1CLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsNkJBQTZCLHNCQUFzQixvQkFBb0IsOEJBQThCLDZCQUE2QixHQUFHLHdCQUF3QixvQkFBb0IscUJBQXFCLHFDQUFxQyxHQUFHLHFCQUFxQixtQkFBbUIsbUJBQW1CLDhCQUE4QixvQkFBb0Isd0JBQXdCLDBCQUEwQixpREFBaUQsMkJBQTJCLEdBQUcsMkJBQTJCLGlEQUFpRCxHQUFHLFdBQVcsc0JBQXNCLHVCQUF1QiwyQkFBMkIsR0FBRyxzQkFBc0Isb0JBQW9CLDJCQUEyQixHQUFHLFdBQVcsc0JBQXNCLHVCQUF1QiwwQkFBMEIsMEJBQTBCLEdBQUcsd0JBQXdCLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0Isd0JBQXdCLHFCQUFxQixHQUFHLG1CQUFtQixvQkFBb0IsbUJBQW1CLHNCQUFzQixHQUFHLGlCQUFpQiwwQkFBMEIseUJBQXlCLHNCQUFzQixHQUFHLG9CQUFvQixvQkFBb0Isb0JBQW9CLDZDQUE2QywyQkFBMkIsd0JBQXdCLDRCQUE0QixpREFBaUQsMkJBQTJCLEdBQUcsMEJBQTBCLGlEQUFpRCxHQUFHLG1CQUFtQiw0QkFBNEIsb0NBQW9DLHNCQUFzQixHQUFHLHdCQUF3QixtQkFBbUIsd0JBQXdCLDBCQUEwQixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLDhCQUE4QixvQkFBb0IsK0NBQStDLHlCQUF5QixpREFBaUQseUJBQXlCLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLG1EQUFtRCwyQkFBMkIsR0FBRywyQkFBMkIsbUJBQW1CLHlCQUF5Qiw0Q0FBNEMsaURBQWlELEdBQUcsd0NBQXdDLGdCQUFnQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsb0JBQW9CLGtCQUFrQixtQkFBbUIsb0JBQW9CLDhDQUE4Qyx5QkFBeUIsOEJBQThCLEdBQUcsaUJBQWlCLG9CQUFvQix3QkFBd0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsaURBQWlELHdCQUF3QiwyQkFBMkIsR0FBRyx1QkFBdUIsbUNBQW1DLGlEQUFpRCxHQUFHLGdCQUFnQix3QkFBd0IsU0FBUyxpQkFBaUIsb0JBQW9CLG1CQUFtQixHQUFHLDJCQUEyQixvQkFBb0IscUJBQXFCLDhCQUE4QixpQkFBaUIsR0FBRyxPQUFPLGdGQUFnRixVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsK0JBQStCLGdCQUFnQixnQ0FBZ0Msa0JBQWtCLDJDQUEyQyw4QkFBOEIsR0FBRyxVQUFVLDZCQUE2QixHQUFHLDRCQUE0QiwwQkFBMEIsU0FBUyxTQUFTLHdDQUF3QyxvQkFBb0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixHQUFHLGVBQWUseUJBQXlCLGdCQUFnQixpQkFBaUIseUNBQXlDLHFCQUFxQixpQkFBaUIsR0FBRyxhQUFhLDRCQUE0QixHQUFHLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRyxvQkFBb0IsbUJBQW1CLHlCQUF5Qix5QkFBeUIsbUJBQW1CLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLHlCQUF5QiwrQkFBK0IsR0FBRywwQkFBMEIsZ0NBQWdDLHNCQUFzQixHQUFHLHVCQUF1Qiw2QkFBNkIsbUJBQW1CLG1CQUFtQix5QkFBeUIsc0JBQXNCLEdBQUcsNkJBQTZCLHNCQUFzQixvQkFBb0IsOEJBQThCLDZCQUE2QixHQUFHLHdCQUF3QixvQkFBb0IscUJBQXFCLHFDQUFxQyxHQUFHLHFCQUFxQixtQkFBbUIsbUJBQW1CLDhCQUE4QixvQkFBb0Isd0JBQXdCLDBCQUEwQixpREFBaUQsMkJBQTJCLEdBQUcsMkJBQTJCLGlEQUFpRCxHQUFHLFdBQVcsc0JBQXNCLHVCQUF1QiwyQkFBMkIsR0FBRyxzQkFBc0Isb0JBQW9CLDJCQUEyQixHQUFHLFdBQVcsc0JBQXNCLHVCQUF1QiwwQkFBMEIsMEJBQTBCLEdBQUcsd0JBQXdCLG9CQUFvQixxQkFBcUIsc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0Isd0JBQXdCLHFCQUFxQixHQUFHLG1CQUFtQixvQkFBb0IsbUJBQW1CLHNCQUFzQixHQUFHLGlCQUFpQiwwQkFBMEIseUJBQXlCLHNCQUFzQixHQUFHLG9CQUFvQixvQkFBb0Isb0JBQW9CLDZDQUE2QywyQkFBMkIsd0JBQXdCLDRCQUE0QixpREFBaUQsMkJBQTJCLEdBQUcsMEJBQTBCLGlEQUFpRCxHQUFHLG1CQUFtQiw0QkFBNEIsb0NBQW9DLHNCQUFzQixHQUFHLHdCQUF3QixtQkFBbUIsd0JBQXdCLDBCQUEwQixHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLDhCQUE4QixvQkFBb0IsK0NBQStDLHlCQUF5QixpREFBaUQseUJBQXlCLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLG1EQUFtRCwyQkFBMkIsR0FBRywyQkFBMkIsbUJBQW1CLHlCQUF5Qiw0Q0FBNEMsaURBQWlELEdBQUcsd0NBQXdDLGdCQUFnQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsb0JBQW9CLGtCQUFrQixtQkFBbUIsb0JBQW9CLDhDQUE4Qyx5QkFBeUIsOEJBQThCLEdBQUcsaUJBQWlCLG9CQUFvQix3QkFBd0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsaURBQWlELHdCQUF3QiwyQkFBMkIsR0FBRyx1QkFBdUIsbUNBQW1DLGlEQUFpRCxHQUFHLGdCQUFnQix3QkFBd0IsU0FBUyxpQkFBaUIsb0JBQW9CLG1CQUFtQixHQUFHLDJCQUEyQixvQkFBb0IscUJBQXFCLDhCQUE4QixpQkFBaUIsR0FBRyxtQkFBbUI7QUFDdHRWO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNjOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0ZBQXNGLFNBQVMsU0FBUyxNQUFNLDJDQUEyQyxhQUFhO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdGQUF3RixzQkFBc0IsT0FBTyxzQkFBc0IsU0FBUyxNQUFNLDJDQUEyQyxhQUFhO0FBQ2xOO0FBQ0EsSUFBSSxvREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELCtCQUErQjtBQUNuRixrQkFBa0Isc0NBQXNDO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCw4QkFBOEI7QUFDbEYsa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQ0FBc0M7O0FBRW5FO0FBQ0E7QUFDQSw2QkFBNkIsc0NBQXNDOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGlDQUFpQzs7QUFFM0Q7QUFDQSwrQkFBK0Isc0NBQXNDOztBQUVyRTtBQUNBLCtCQUErQixzQ0FBc0M7O0FBRXJFO0FBQ0EsMkRBQTJELDZCQUE2QjtBQUN4Rix5QkFBeUIsb0NBQW9DOztBQUU3RDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsWUFBWSxHQUFHLGVBQWU7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVcsR0FBRyxjQUFjOztBQUV4RDtBQUNBLDhCQUE4QixzQkFBc0I7O0FBRXBEO0FBQ0EsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQSx5QkFBeUIsbUJBQW1COztBQUU1QztBQUNBO0FBQ0Esd0RBQXdELG9CQUFvQjs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLCtCQUErQix5QkFBeUIsRUFBRSxZQUFZOztBQUV0RTtBQUNBLDhCQUE4Qix1QkFBdUI7O0FBRXJEO0FBQ0EsZ0NBQWdDLHlCQUF5Qjs7QUFFekQ7QUFDQSw2QkFBNkIsaUJBQWlCOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtDQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxrQ0FBa0MsWUFBWSxFQUFFLE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBZ0I7QUFDeEIsUUFBUSx5REFBZ0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFNO0FBQ3BCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixrREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBZTtBQUN2QixRQUFRLHdEQUFlO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7OztVQzNLbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ0YzhjO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggcmdiKDMzLCAzMywgMzMpO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgICBcXG59XFxuXFxubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzMywgMzMpO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnZhbGlkaXR5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDMwZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDM0LCAzNCk7XFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0IHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjUwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2VhcmNoIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZDlkN2E7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRlbXAtbWVhc3VyZW1lbnQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gMCAwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi50ZW1wLW1lYXN1cmVtZW50OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG59XFxuXFxuLndlYXRoZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLndlYXRoZXItaGVhZGVyIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjogMC41ZW0gMWVtIDAgMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDE0OCwgMTcxLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLndlYXRoZXItaGVhZGVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDE0OCwgMTcxLCAwLjMpO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgICAgXFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG59XFxuXFxuLnRlbXAge1xcbiAgICBmb250LXNpemU6IDg4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMC42ZW07XFxufVxcblxcbi5taW4tbWF4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5taW4tbWF4IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbn1cXG5cXG4uY3VycmVudC1pY29uIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxufVxcbi5jdXJyZW50LWRlc2Mge1xcbiAgICBtYXJnaW46IDAgYXV0byAwIDAgO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLndlYXRoZXItc3RhdHMge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxNWVtKTtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiA1ZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW46IDAuNWVtIDFlbSAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMzLCAxNDgsIDE3MSwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi53ZWF0aGVyLXN0YXRzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDE0OCwgMTcxLCAwLjMpO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHtcXG4gICAgbWFyZ2luOiAwLjdlbSAwIDAgMmVtO1xcbiAgICBjb2xvcjogcmdiYSgxMDIsIDIwMiwgMjUzLCAxKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1pbmZvIHNwYW4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW46IDAgMCAwIDAuMmVtO1xcbn1cXG5cXG4ud2VhdGhlci1ob3VybHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMWVtO1xcbiAgICBtYXJnaW46IDNlbSBhdXRvIDAgYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMjQsIDEwMHB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMywgMTQ4LCAxNzEsIDAuMSk7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41Nik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ud2VhdGhlci1ob3VybHk6aG92ZXIge1xcbiAgICBoZWlnaHQ6IDEyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDE0OCwgMTcxLCAwLjMpO1xcbn1cXG5cXG4ud2VhdGhlci1ob3VybHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5kaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG91cmx5LXRpbWUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uaG91cmx5LXRlbXAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ud2VhdGhlci1kYWlseSB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDI1MHB4KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDJlbSAyZW0gMmVtIDFlbTtcXG59XFxuXFxuLmRhaWx5LWNlbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMzLCAxNDgsIDE3MSwgMC4xKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uZGFpbHktY2VsbDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMzLCAxNDgsIDE3MSwgMC4zKTtcXG59XFxuXFxuLmRhaWx5LWRheSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBcXG59XFxuXFxuLmRhaWx5LWljb24ge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5kYWlseS10ZW1wLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjhlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDBDQUEwQztJQUMxQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osNENBQTRDO0lBQzVDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLDBDQUEwQztBQUM5Qzs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDRjOGM7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCByZ2IoMzMsIDMzLCAzMyk7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAgIFxcbn1cXG5cXG5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDMzLCAzMyk7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udmFsaWRpdHkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMzBlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMzQsIDM0KTtcXG4gICAgcGFkZGluZzogMC4yZW07XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxufVxcblxcbi5zZWFyY2ggaW5wdXQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2ggYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdmNTA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zZWFyY2ggYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOWQ3YTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGVtcC1tZWFzdXJlbWVudCB7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAwIDA7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnRlbXAtbWVhc3VyZW1lbnQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbn1cXG5cXG4ud2VhdGhlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ud2VhdGhlci1oZWFkZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiAwLjVlbSAxZW0gMCAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMywgMTQ4LCAxNzEsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4ud2VhdGhlci1oZWFkZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMywgMTQ4LCAxNzEsIDAuMyk7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyAgICBcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbn1cXG5cXG4udGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogODhweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjZlbTtcXG59XFxuXFxuLm1pbi1tYXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLm1pbi1tYXgge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxufVxcblxcbi5jdXJyZW50LWljb24ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuLmN1cnJlbnQtZGVzYyB7XFxuICAgIG1hcmdpbjogMCBhdXRvIDAgMCA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ud2VhdGhlci1zdGF0cyB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDE1ZW0pO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDVlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbjogMC41ZW0gMWVtIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDE0OCwgMTcxLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLndlYXRoZXItc3RhdHM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMywgMTQ4LCAxNzEsIDAuMyk7XFxufVxcblxcbi53ZWF0aGVyLWluZm8ge1xcbiAgICBtYXJnaW46IDAuN2VtIDAgMCAyZW07XFxuICAgIGNvbG9yOiByZ2JhKDEwMiwgMjAyLCAyNTMsIDEpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi53ZWF0aGVyLWluZm8gc3BhbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgMC4yZW07XFxufVxcblxcbi53ZWF0aGVyLWhvdXJseSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDExZW07XFxuICAgIG1hcmdpbjogM2VtIGF1dG8gMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyNCwgMTAwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMzLCAxNDgsIDE3MSwgMC4xKTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi53ZWF0aGVyLWhvdXJseTpob3ZlciB7XFxuICAgIGhlaWdodDogMTJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMywgMTQ4LCAxNzEsIDAuMyk7XFxufVxcblxcbi53ZWF0aGVyLWhvdXJseTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbmRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob3VybHktdGltZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5ob3VybHktdGVtcCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi53ZWF0aGVyLWRhaWx5IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMjUwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMmVtIDJlbSAyZW0gMWVtO1xcbn1cXG5cXG4uZGFpbHktY2VsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDE0OCwgMTcxLCAwLjEpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5kYWlseS1jZWxsOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzMsIDE0OCwgMTcxLCAwLjMpO1xcbn1cXG5cXG4uZGFpbHktZGF5IHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIFxcbn1cXG5cXG4uZGFpbHktaWNvbiB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmRhaWx5LXRlbXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuOGVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3JlbmRlckRhdGF9IGZyb20gJy4vcmVuZGVyJ1xuXG4vL2RlZmF1bHQgaW5pdFxubGV0IHVuaXRzID0gXCJpbXBlcmlhbFwiXG5sZXQgY2l0eW5hbWUgPSBcIlwiXG5cbmNvbnN0IGNoYW5nZVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1tZWFzdXJlbWVudCcpXG5jaGFuZ2VUZW1wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNoYW5nZU1lYXN1cmVtZW50KClcbn0pXG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKVxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY2l0eW5hbWUgPSBzZWFyY2guZWxlbWVudHNbMF0udmFsdWVcbiAgICBnZXRMb2NhdGlvbihjaXR5bmFtZSwgdW5pdHMpXG59KVxuXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihjaXR5bmFtZSwgdW5pdHMpIHtcbiAgICBjb25zdCB2YWxpZGl0eUNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhbGlkaXR5JylcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eW5hbWV9JnVuaXRzPSR7dW5pdHN9JkFQUElEPThkYTZlNDcwMmZlZjQyNzM3OWMxZWQwMzg3YzNmYzg5YCwge21vZGU6ICdjb3JzJ30pXG4gICAgLy9jaGVjayB0byBtYWtlIHN1cmUgdmFsaWQgcmVzcG9uc2VcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgdmFsaWRpdHlDaGVjay5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIm9wYWNpdHk6IDFcIilcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWxpZGl0eUNoZWNrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwib3BhY2l0eTogMFwiKVxuICAgIGNvbnN0IHdlYXRoZXJMb2NhdGlvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGdldERhdGEod2VhdGhlckxvY2F0aW9uKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bG9jYXRpb24uY29vcmRbJ2xhdCddfSZsb249JHtsb2NhdGlvbi5jb29yZFsnbG9uJ119JnVuaXRzPSR7dW5pdHN9JmFwcGlkPThkYTZlNDcwMmZlZjQyNzM3OWMxZWQwMzg3YzNmYzg5YCwge21vZGU6ICdjb3JzJ30pXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZW5kZXJEYXRhKGxvY2F0aW9uLCB3ZWF0aGVyRGF0YSwgdW5pdHMpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1lYXN1cmVtZW50KCkge1xuICAgIGlmICh1bml0cyA9PT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgICAgIHVuaXRzID0gXCJtZXRyaWNcIlxuICAgICAgICBjaGFuZ2VUZW1wLnRleHRDb250ZW50ID0gXCJDXFx4QjBcIlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHVuaXRzID0gXCJpbXBlcmlhbFwiXG4gICAgICAgIGNoYW5nZVRlbXAudGV4dENvbnRlbnQgPSBcIkZcXHhCMFwiXG4gICAgfVxuICAgIGdldExvY2F0aW9uKGNpdHluYW1lLCB1bml0cylcbn1cblxuZnVuY3Rpb24gZ2V0SG91cigpIHtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKClcbiAgICBsZXQgaCA9IHRpbWUuZ2V0SG91cnMoKVxuICAgIHJldHVybiBoXG59XG5cbmZ1bmN0aW9uIGdldERheSgpIHtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKClcbiAgICBsZXQgZGF5ID0gdGltZS5nZXREYXkoKVxuICAgIGlmIChkYXkgPT09IDYpIHtcbiAgICAgICAgZGF5ID0gMFxuICAgIH1cbiAgICByZXR1cm4gZGF5XG59XG5cbmZ1bmN0aW9uIGdldERheU5hbWUoZGF5KSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnXG4gICAgc3dpdGNoKGRheSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXN1bHQgPSBcIlN1bmRheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmVzdWx0ID0gXCJUdWVzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmVzdWx0ID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXN1bHQgPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmVzdWx0ID0gXCJGcmlkYXlcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXN1bHQgPSBcIlNhdHVyZGF5XCI7XG4gICAgICAgICAgICBicmVhazsgICBcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBhcHBlbmRIb3VybHlJY29uKGRhdGEsIGksIGNlbGwpIHtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF0YS5ob3VybHlbaV0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgXG4gICAgaWNvbi5hbHQgPSBgJHtkYXRhLmhvdXJseVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWBcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS1pY29uJylcbiAgICBjZWxsLmFwcGVuZENoaWxkKGljb24pXG59XG5cbmZ1bmN0aW9uIGFwcGVuZEhvdXJseVRlbXAoZGF0YSwgaSwgY2VsbCkge1xuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5ob3VybHlbaV0udGVtcCl9XFx4QjBgXG4gICAgdGVtcC5jbGFzc0xpc3QuYWRkKCdob3VybHktdGVtcCcpXG4gICAgY2VsbC5hcHBlbmRDaGlsZCh0ZW1wKVxufVxuXG5mdW5jdGlvbiBhcHBlbmREYWlseUljb24oZGF0YSwgaSwgY2VsbCkge1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmRhaWx5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYFxuICAgIGljb24uYWx0ID0gYCR7ZGF0YS5kYWlseVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWBcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWljb24nKVxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoaWNvbilcbn1cblxuZnVuY3Rpb24gYXBwZW5kRGFpbHlUZW1wKGRhdGEsIGksIGNlbGwpIHtcbiAgICBsZXQgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS10ZW1wLWNvbnRhaW5lcicpXG4gICAgbGV0IHRlbXBIID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVtcEguY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcEgnKVxuICAgIHRlbXBILnRleHRDb250ZW50ID0gYEg6JHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbaV0udGVtcFsnbWF4J10pfVxceEIwYFxuXG4gICAgbGV0IHRlbXBMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGVtcEwuY2xhc3NMaXN0LmFkZCgnZGFpbHktdGVtcEwnKVxuICAgIHRlbXBMLnRleHRDb250ZW50ID0gYEw6JHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbaV0udGVtcFsnbWluJ10pfVxceEIwYFxuXG4gICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wSClcbiAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBMKVxuICAgIGNlbGwuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcilcbn1cblxuLy9kcmFnZ2luZyBmdW5jdGlvblxuY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1ob3VybHknKVxubGV0IHggPSAwLCBsZWZ0ID0gMDtcbmxldCBkcmFnZ2luZ0Z1bmN0aW9uID0gKGUpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWdnaW5nRnVuY3Rpb24pO1xuICAgIH0pO1xuICAgIGVsLnNjcm9sbExlZnQgPSBsZWZ0IC0gZS5wYWdlWCArIHg7XG59O1xuXG5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB4ID0gZS5wYWdlWDtcbiAgICBsZWZ0ID0gZWwuc2Nyb2xsTGVmdDtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkcmFnZ2luZ0Z1bmN0aW9uKTtcbn0pO1xuXG4vL2luaXQgcGFnZVxuZ2V0TG9jYXRpb24oXCJOZXcgWW9ya1wiLCB1bml0cylcblxuXG5leHBvcnQge1xuICAgIGdldEhvdXIsXG4gICAgZ2V0RGF5LFxuICAgIGdldERheU5hbWUsXG4gICAgYXBwZW5kSG91cmx5SWNvbixcbiAgICBhcHBlbmRIb3VybHlUZW1wLFxuICAgIGFwcGVuZERhaWx5SWNvbixcbiAgICBhcHBlbmREYWlseVRlbXBcbn0iLCJpbXBvcnQge1xuICAgIGdldEhvdXIsXG4gICAgZ2V0RGF5LFxuICAgIGdldERheU5hbWUsXG4gICAgYXBwZW5kSG91cmx5SWNvbixcbiAgICBhcHBlbmRIb3VybHlUZW1wLFxuICAgIGFwcGVuZERhaWx5SWNvbixcbiAgICBhcHBlbmREYWlseVRlbXBcbn0gZnJvbSAnLi9pbmRleCdcblxuZnVuY3Rpb24gcmVuZGVyRGF0YShsb2NhdGlvbiwgZGF0YSwgdW5pdHMpIHtcbiAgICByZW5kZXJDaXR5TmFtZShsb2NhdGlvbi5uYW1lKVxuICAgIHJlbmRlckhlYWRlckRhdGEoZGF0YSlcbiAgICByZW5kZXJNYWluRGF0YShkYXRhLCB1bml0cylcbiAgICByZW5kZXJIb3VybHkoZGF0YSlcbiAgICByZW5kZXJGb3JlY2FzdChkYXRhKVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlckNpdHlOYW1lKGxvY2F0aW9uTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uTmFtZVxufVxuXG5mdW5jdGlvbiByZW5kZXJIZWFkZXJEYXRhKGRhdGEpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXdlYXRoZXInKVxuICAgIGN1cnJlbnRXZWF0aGVyLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LndlYXRoZXJbMF1bJ21haW4nXVxuXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJylcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnRbJ3RlbXAnXSl9XFx4QjBgXG5cbiAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21heFRlbXAnKVxuICAgIG1heFRlbXAudGV4dENvbnRlbnQgPSBgSDoke01hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wWydtYXgnXSl9XFx4QjBgXG5cbiAgICBjb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pblRlbXAnKVxuICAgIG1pblRlbXAudGV4dENvbnRlbnQgPSBgTDoke01hdGgucm91bmQoZGF0YS5kYWlseVswXS50ZW1wWydtaW4nXSl9XFx4QjBgXG5cbiAgICBjb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWljb24nKVxuICAgIGN1cnJlbnRJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmN1cnJlbnQud2VhdGhlclswXS5pY29ufUA0eC5wbmdgXG4gICAgY3VycmVudEljb24uYWx0ID0gYCR7ZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb259YFxuXG4gICAgY29uc3QgY3VycmVudERlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1kZXNjJylcbiAgICBjb25zdCBkZXNjID0gZGF0YS5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICBjb25zdCBjYXBpdGFsRGVzYyA9IGRlc2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBkZXNjLnNsaWNlKDEpXG4gICAgY3VycmVudERlc2MudGV4dENvbnRlbnQgPSBgVG9kYXk6ICR7Y2FwaXRhbERlc2N9IGN1cnJlbnRseS5gXG59XG5cbmZ1bmN0aW9uIHJlbmRlck1haW5EYXRhKGRhdGEsIHVuaXRzKSB7XG4gICAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdW5yaXNlJylcbiAgICAvL2NvbnZlcnQgZnJvbSB1dGMgdGltZSB0byAxMmhyIGNsb2NrXG4gICAgbGV0IHN1bnJpc2VUaW1lID0gbmV3IERhdGUoZGF0YS5jdXJyZW50LnN1bnJpc2UgKjEwMDApXG4gICAgbGV0IHN1bnJpc2VIb3VyID0gc3VucmlzZVRpbWUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyXG4gICAgbGV0IHN1bnJpc2VNaW51dGVzID0gc3VucmlzZVRpbWUuZ2V0TWludXRlcygpXG4gICAgaWYgKHN1bnJpc2VNaW51dGVzIDwgMTApIHtcbiAgICAgICAgc3VucmlzZU1pbnV0ZXMgPSBcIjBcIiArIHN1bnJpc2VNaW51dGVzXG4gICAgfVxuICAgIHN1bnJpc2UudGV4dENvbnRlbnQgPSBgJHtzdW5yaXNlSG91cn06JHtzdW5yaXNlTWludXRlc31BTWBcblxuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdW5zZXQnKVxuICAgIGxldCBzdW5zZXRUaW1lID0gbmV3IERhdGUoZGF0YS5jdXJyZW50LnN1bnNldCAqMTAwMClcbiAgICBsZXQgc3Vuc2V0SG91ciA9IHN1bnNldFRpbWUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyXG4gICAgbGV0IHN1bnNldE1pbnV0ZXMgPSBzdW5zZXRUaW1lLmdldE1pbnV0ZXMoKVxuICAgIGlmIChzdW5zZXRNaW51dGVzIDwgMTApIHtcbiAgICAgICAgc3Vuc2V0TWludXRlcyA9IFwiMFwiICsgc3Vuc2V0TWludXRlc1xuICAgIH1cbiAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBgJHtzdW5zZXRIb3VyfToke3N1bnNldE1pbnV0ZXN9UE1gXG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWBcblxuICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlJylcbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc19saWtlKX1cXHhCMGBcblxuICAgIGNvbnN0IHBvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3AnKVxuICAgIHBvcC50ZXh0Q29udGVudCA9IGAke2RhdGEuaG91cmx5WzBdLnBvcH0lYFxuXG4gICAgY29uc3QgcGVyY2lwaXRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJjaXBpdGF0aW9uJylcbiAgICAvL3NvbWV0aW1lcyBwZXJjaXBpdGF0aW9uIHZhbHVlIGlzbid0IGFkZGVkIHRvIHRoZSByZXNwb25zZVxuICAgIHBlcmNpcGl0YXRpb24udGV4dENvbnRlbnQgPSBkYXRhLmRhaWx5WzBdLnJhaW4gPyBgJHtkYXRhLmRhaWx5WzBdLnJhaW59IGluYCA6ICcwIGluJ1xuXG4gICAgY29uc3Qgd2luZHNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRzcGVlZCcpXG4gICAgbGV0IG1lYXN1cmVtZW50ID0gJydcbiAgICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikge1xuICAgICAgICBtZWFzdXJlbWVudCA9ICdtcGgnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVhc3VyZW1lbnQgPSAnbXBzJ1xuICAgIH1cbiAgICB3aW5kc3BlZWQudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQud2luZF9zcGVlZH0gJHttZWFzdXJlbWVudH1gXG5cbiAgICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVzc3VyZScpXG4gICAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQucHJlc3N1cmV9IGhQYWBcblxuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlzaWJpbGl0eScpXG4gICAgdmlzaWJpbGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC52aXNpYmlsaXR5fSBtZXRlcnNgXG5cbiAgICBjb25zdCB1dkluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3V2LWluZGV4JylcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LnV2aX1gXG5cbn1cblxuZnVuY3Rpb24gcmVuZGVySG91cmx5KGRhdGEpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1ob3VybHknKVxuICAgIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG4gICAgLy9tYXRoIHRvIGNvbnZlcnQgdG8gYSAyNCBob3VyIHBlcmlvZCBpbiBsb2NhbCB0aW1lXG4gICAgbGV0IGggPSBnZXRIb3VyKClcbiAgICBsZXQgcGVyaW9kID0gJydcbiAgICBpZiAoaCA+PSAwICYmIGggPD0gMTEpIHtcbiAgICAgICAgcGVyaW9kID0gXCJhbVwiXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGVyaW9kID0gXCJwbVwiXG4gICAgfVxuICAgIGxldCBjdXJyZW50SG91ciA9ICBoICUgMTIgfHwgMTJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG91cmx5LWNlbGwnKVxuXG4gICAgICAgIGxldCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGlmIChpICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEhvdXIgPT09IDEyKSB7XG4gICAgICAgICAgICBjdXJyZW50SG91ciA9IDBcbiAgICAgICAgICAgIGlmIChwZXJpb2QgPT09IFwicG1cIikge1xuICAgICAgICAgICAgICAgIHBlcmlvZCA9IFwiYW1cIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJpb2QgPSBcInBtXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBpZihpID09PSAwKSB7XG4gICAgICAgICAgICB0aW1lLnRleHRDb250ZW50ID0gXCJOb3dcIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudEhvdXIgKz0gMVxuICAgICAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIb3VyfSR7cGVyaW9kfWBcbiAgICAgICAgfVxuICAgICAgICB0aW1lLmNsYXNzTGlzdCA9IFwiaG91cmx5LXRpbWVcIlxuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRpbWUpXG4gICAgICAgIGFwcGVuZEhvdXJseUljb24oZGF0YSwgaSwgY2VsbClcbiAgICAgICAgYXBwZW5kSG91cmx5VGVtcChkYXRhLCBpLCBjZWxsKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0KGRhdGEpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kYWlseScpXG4gICAgd2hpbGUgKGNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKVxuICAgIH1cbiAgICBsZXQgZGF5ID0gZ2V0RGF5KClcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWNlbGwnKVxuXG4gICAgICAgIGxldCBkYXlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRheVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWRheScpXG4gICAgICAgIGxldCBkYXlOYW1lID0gZ2V0RGF5TmFtZShkYXkpXG4gICAgICAgIGRheVRpdGxlLnRleHRDb250ZW50ID0gZGF5TmFtZVxuICAgICAgICBpZihkYXkgPT09IDYpIHtcbiAgICAgICAgICAgIGRheSA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRheSsrXG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChkYXlUaXRsZSlcbiAgICAgICAgYXBwZW5kRGFpbHlJY29uKGRhdGEsIGksIGNlbGwpICAgICAgXG4gICAgICAgIGFwcGVuZERhaWx5VGVtcChkYXRhLCBpLCBjZWxsKSAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKVxuICAgIH1cbn1cblxuZXhwb3J0IHtyZW5kZXJEYXRhfVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==