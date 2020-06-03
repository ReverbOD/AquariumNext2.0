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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/core.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/core.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Roboto+Mono&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Jost&display=swap);\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Parisienne&display=swap);\"]);\n// Module\nexports.push([module.i, \"/* Google Fonts Import */\\r\\n\\r\\n/* Main */\\r\\n\\r\\nbody {\\r\\n    font-family: 'Roboto Mono', sans-serif;\\r\\n    background: #373839;\\r\\n}\\r\\n\\r\\na, a:hover, a:focus {\\r\\n    color: inherit;\\r\\n    text-decoration: none;\\r\\n    transition: all 0.3s;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n    padding: 15px 10px;\\r\\n    background: #2c2c2d;\\r\\n    border: none;\\r\\n    border-radius: 0;\\r\\n    margin-bottom: 40px;\\r\\n    /*box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);*/\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n.navbar-btn {\\r\\n    box-shadow: none;\\r\\n    outline: none !important;\\r\\n    border: none;\\r\\n}\\r\\n\\r\\n.line {\\r\\n    width: 100%;\\r\\n    height: 1px;\\r\\n    border-bottom: 1px dashed #ddd;\\r\\n    margin: 40px 0;\\r\\n}\\r\\n\\r\\n/* Sidebar */\\r\\n\\r\\n.wrapper {\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    align-items: stretch;\\r\\n    perspective: 1500px;\\r\\n}\\r\\n\\r\\n\\r\\n#sidebar {\\r\\n    min-width: 250px;\\r\\n    max-width: 250px;\\r\\n    background: #242526;\\r\\n    color: #008bff;\\r\\n    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);\\r\\n    transform-origin: bottom left;\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n    font-size: 15px;\\r\\n    font-family: 'Jost', sans-serif;\\r\\n}\\r\\n\\r\\n#sidebar.active {\\r\\n    margin-left: -250px;\\r\\n    transform: rotateY(100deg);\\r\\n}\\r\\n\\r\\n#sidebar .sidebar-header {\\r\\n    padding: 20px;\\r\\n    background: #2c2c2d;\\r\\n    font-family: 'Parisienne', cursive;\\r\\n}\\r\\n\\r\\n#sidebar ul.components {\\r\\n    padding: 20px 0;\\r\\n    border-bottom: 1px solid #424244;\\r\\n}\\r\\n\\r\\n#sidebar ul p {\\r\\n    color: #008bff;\\r\\n    padding: 10px;\\r\\n}\\r\\n\\r\\n#sidebar ul li a {\\r\\n    padding: 10px;\\r\\n    font-size: 1.1em;\\r\\n    display: block;\\r\\n}\\r\\n#sidebar ul li a:hover {\\r\\n    color: #424244;\\r\\n    background: #008bff;\\r\\n}\\r\\n\\r\\n#sidebar ul li.active > a, a[aria-expanded=\\\"true\\\"] {\\r\\n    color: #008bff;\\r\\n    background: #424244;\\r\\n}\\r\\n\\r\\n\\r\\na[data-toggle=\\\"collapse\\\"] {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.dropdown-toggle::after {\\r\\n    display: block;\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    right: 20px;\\r\\n    transform: translateY(-50%);\\r\\n}\\r\\n\\r\\nul ul a {\\r\\n    font-size: 0.9em !important;\\r\\n    padding-left: 30px !important;\\r\\n    background: #2d2d2e;\\r\\n}\\r\\n\\r\\nul.CTAs {\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\nul.CTAs a {\\r\\n    text-align: center;\\r\\n    font-size: 0.9em !important;\\r\\n    display: block;\\r\\n    border-radius: 5px;\\r\\n    margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/* Sidebar Content */\\r\\n#content {\\r\\n    width: 100%;\\r\\n    padding: 20px;\\r\\n    min-height: 100vh;\\r\\n    transition: all 0.3s;\\r\\n}\\r\\n\\r\\n#sidebarCollapse {\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    background: #2c2c2d;\\r\\n    color: #229aff;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n#sidebarCollapse span {\\r\\n    width: 80%;\\r\\n    height: 2px;\\r\\n    margin: 0 auto;\\r\\n    display: block;\\r\\n    background: #555;\\r\\n    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);\\r\\n    transition-delay: 0.2s;\\r\\n}\\r\\n\\r\\n#sidebarCollapse span:first-of-type {\\r\\n    transform: rotate(45deg) translate(2px, 2px);\\r\\n}\\r\\n#sidebarCollapse span:nth-of-type(2) {\\r\\n    opacity: 0;\\r\\n}\\r\\n#sidebarCollapse span:last-of-type {\\r\\n    transform: rotate(-45deg) translate(1px, -1px);\\r\\n}\\r\\n\\r\\n\\r\\n#sidebarCollapse.active span {\\r\\n    transform: none;\\r\\n    opacity: 1;\\r\\n    margin: 5px auto;\\r\\n}\\r\\n\\r\\n\\r\\n/* Mediaqueries */\\r\\n@media (max-width: 768px) {\\r\\n    #sidebar {\\r\\n        margin-left: -250px;\\r\\n        transform: rotateY(90deg);\\r\\n    }\\r\\n    #sidebar.active {\\r\\n        margin-left: 0;\\r\\n        transform: none;\\r\\n    }\\r\\n    #sidebarCollapse span:first-of-type,\\r\\n    #sidebarCollapse span:nth-of-type(2),\\r\\n    #sidebarCollapse span:last-of-type {\\r\\n        transform: none;\\r\\n        opacity: 1;\\r\\n        margin: 5px auto;\\r\\n    }\\r\\n    #sidebarCollapse.active span {\\r\\n        margin: 0 auto;\\r\\n    }\\r\\n    #sidebarCollapse.active span:first-of-type {\\r\\n        transform: rotate(45deg) translate(2px, 2px);\\r\\n    }\\r\\n    #sidebarCollapse.active span:nth-of-type(2) {\\r\\n        opacity: 0;\\r\\n    }\\r\\n    #sidebarCollapse.active span:last-of-type {\\r\\n        transform: rotate(-45deg) translate(1px, -1px);\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n/* Home */\\r\\n\\r\\n/*.flex-container {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    padding: 30px;\\r\\n  }*/\\r\\n\\r\\n.card{\\r\\n    display: flex;\\r\\n    padding: 10px;\\r\\n    margin: 10px;\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n/* article */\\r\\n\\r\\n.main{\\r\\n    background-color: #fff;\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n.article{\\r\\n    padding:15px;\\r\\n    margin: 20px;\\r\\n    color: #242526;\\r\\n}\\r\\n\\r\\n.title{\\r\\n    text-align: center;\\r\\n    background-color: #fff;\\r\\n}\\r\\n\\r\\n/* Calculator */\\r\\n\\r\\n.form-label-group>input,\\r\\n.form-label-group>label {\\r\\n    padding: var(--input-padding-y) var(--input-padding-x);\\r\\n    height: auto;\\r\\n    border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.form-label-group>label {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    margin-bottom: 0;\\r\\n    /* Override default `<label>` margin */\\r\\n    line-height: 1.5;\\r\\n    color: #495057;\\r\\n    cursor: text;\\r\\n    /* Match the input under the label */\\r\\n    border: 1px solid transparent;\\r\\n    border-radius: .25rem;\\r\\n    transition: all .1s ease-in-out;\\r\\n}\\r\\n\\r\\n/* Calc */\\r\\n\\r\\n\\r\\n.form-label-group {\\r\\n    margin-bottom: 1rem;\\r\\n    border-radius: 2rem;\\r\\n    position: relative;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n\\r\\n.calc{\\r\\n    font-size: 0.9rem;\\r\\n    letter-spacing: 0.05rem;\\r\\n    padding: 0.75rem 1rem;\\r\\n    border-radius: 2rem;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.reset{\\r\\n    font-size: 0.9rem;\\r\\n    letter-spacing: 0.05rem;\\r\\n    padding: 0.75rem 1rem;\\r\\n    border-radius: 2rem;\\r\\n}\\r\\n\\r\\n/* Login */\\r\\n\\r\\n:root {\\r\\n    --input-padding-x: 1.5rem;\\r\\n    --input-padding-y: 0.75rem;\\r\\n}\\r\\n\\r\\n.login,\\r\\n.image {\\r\\n    min-height: 100vh;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.login-heading {\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.btn-login {\\r\\n    font-size: 0.9rem;\\r\\n    letter-spacing: 0.05rem;\\r\\n    padding: 0.75rem 1rem;\\r\\n    border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.form-label-group {\\r\\n    position: relative;\\r\\n    margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.form-label-group>input,\\r\\n.form-label-group>label {\\r\\n    padding: var(--input-padding-y) var(--input-padding-x);\\r\\n    height: auto;\\r\\n    border-radius: 2rem;\\r\\n}\\r\\n\\r\\n.form-label-group>label {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    margin-bottom: 0;\\r\\n    /* Override default `<label>` margin */\\r\\n    line-height: 1.5;\\r\\n    color: #495057;\\r\\n    cursor: text;\\r\\n    /* Match the input under the label */\\r\\n    border: 1px solid transparent;\\r\\n    border-radius: .25rem;\\r\\n    transition: all .1s ease-in-out;\\r\\n}\\r\\n\\r\\n.form-label-group input::-webkit-input-placeholder {\\r\\n    color: transparent;\\r\\n}\\r\\n\\r\\n.form-label-group input:-ms-input-placeholder {\\r\\n    color: transparent;\\r\\n}\\r\\n\\r\\n.form-label-group input::-ms-input-placeholder {\\r\\n    color: transparent;\\r\\n}\\r\\n\\r\\n.form-label-group input::-moz-placeholder {\\r\\n    color: transparent;\\r\\n}\\r\\n\\r\\n.form-label-group input::placeholder {\\r\\n    color: transparent;\\r\\n}\\r\\n\\r\\n.form-label-group input:not(:placeholder-shown) {\\r\\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\\r\\n    padding-bottom: calc(var(--input-padding-y) / 3);\\r\\n}\\r\\n\\r\\n.form-label-group input:not(:placeholder-shown)~label {\\r\\n    padding-top: calc(var(--input-padding-y) / 3);\\r\\n    padding-bottom: calc(var(--input-padding-y) / 3);\\r\\n    font-size: 12px;\\r\\n    color: #777;\\r\\n}\\r\\n\\r\\n/* Footer */\\r\\n\\r\\n#sticky-footer {\\r\\n    flex-shrink: none;\\r\\n    background-color: #242526;\\r\\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  }\\r\\n\\r\\n.designed{\\r\\n    margin-top: 10px;\\r\\n    padding-left: 30px;\\r\\n    text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./public/css/core.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/css/core.css":
/*!*****************************!*\
  !*** ./public/css/core.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./core.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/core.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./public/css/core.css?");

/***/ }),

/***/ "./public/js/core.js":
/*!***************************!*\
  !*** ./public/js/core.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Toggle button\n$(document).ready(function () {\n  $('#sidebarCollapse').on('click', function () {\n    $('#sidebar').toggleClass('active');\n    $(this).toggleClass('active');\n  });\n}); // end Toggle Button\n\n/* Datables */\n\n$(document).ready(function () {\n  $('#data').DataTable({\n    columnDefs: [{\n      orderable: false,\n      targets: [4]\n    }],\n    pageLength: 15,\n    lengthMenu: [[15, 30, 50, -1], [15, 30, 50, \"Tutti\"]]\n  });\n  /*  search form */\n\n  $('.dataTables_filter input').attr('placeholder', 'Cerca');\n});\n/* end Datables */\n// Calculator\n//litrages calculator\n\n$('#calcLt').on('submit', function (e) {\n  e.preventDefault();\n  $('#resultLt').addClass('d-none');\n  var num1 = parseInt($('#lenght').val());\n  var num2 = parseInt($('#high').val());\n  var num3 = parseInt($('#deep').val());\n  var num4 = 1000;\n  var result = 'La tua vasca avrà un litraggio di ' + num1 * num2 * num3 / num4 + \" lt\";\n  $('#resultLt').html(result);\n  $('#resultLt').removeClass('d-none');\n});\n$('#calcLt').on('reset', function () {\n  $('#resultLt').addClass('d-none');\n}); // END litrages calc\n// biological calculator\n\n$('#calcFiltraggio').on('submit', function (e) {\n  e.preventDefault();\n  $('#resultFiltraggio').addClass('d-none');\n  var num1 = parseInt($('#litraggio').val());\n  var num2 = 10;\n  var result = 'Per un filtraggio biologico ottimale avrai bisogno di gr ' + num1 * num2 + \" di materiale filtrante\";\n  $('#resultFiltraggio').html(result);\n  $('#resultFiltraggio').removeClass('d-none');\n});\n$('#calcFiltraggio').on('reset', function () {\n  $('#resultFiltraggio').addClass('d-none');\n}); // END biological Calc\n// pump calculator\n\n$('#calcPompa').on('submit', function (e) {\n  e.preventDefault();\n  $('#resultPompa').addClass('d-none');\n  var num1 = parseInt($('#litraggio').val());\n  var num2 = 4;\n  var result = 'Per una circolazione ottimale avrai bisogno di una pompa con ' + num1 * num2 + \" lt/h\";\n  $('#resultPompa').html(result);\n  $('#resultPompa').removeClass('d-none');\n});\n$('#calcPompa').on('reset', function () {\n  $('#resultPompa').addClass('d-none');\n}); // END pump calc\n// lumen calculator\n\n$('#calcLumen').on('submit', function (e) {\n  e.preventDefault();\n  $('#resultLumen').addClass('d-none');\n  var num1 = parseInt($('#litraggio').val());\n  var num2 = parseInt($('#lumen').val());\n  var result = 'Il rapporto Lumen/Litri è di ' + num2 / num1;\n  $('#resultLumen').html(result);\n  $('#resultLumen').removeClass('d-none');\n});\n$('#calcLumen').on('reset', function () {\n  $('#resultLumen').addClass('d-none');\n}); //if (sumLum < 40) {\n//    minimum = \"hai un valore basso\";\n//} else if (sumLum > 40 && < 60) {\n//    medium = \"Hai un buon valore\";\n//} else(sumLum > 60) {\n//    high = \"hai un valore alto\";\n//};\n// END lumen calc\n// ground calculator\n\n$('#calcFondo').on('submit', function (e) {\n  e.preventDefault();\n  $('#resultFondo').addClass('d-none');\n  var num1 = parseInt($('#lenght').val());\n  var num2 = parseInt($('#high').val());\n  var num3 = parseInt($('#deep').val());\n  var num4 = 1000;\n  var result = \"Per l'altezza del fondo desiderata avrai bisogno di kg \" + num1 * num2 * num3 / num4;\n  $('#resultFondo').html(result);\n  $('#resultFondo').removeClass('d-none');\n});\n$('#calcFondo').on('reset', function () {\n  $('#resultFondo').addClass('d-none');\n}); // END ground calc\n// water change calculator\n\n$('#calcChange').on('submit', function (e) {\n  e.preventDefault();\n  $('#resultChange').addClass('d-none');\n  var change = parseInt($('#change').val());\n  var kh = parseInt($('#kh').val());\n  var gh = parseInt($('#gh').val());\n  var khDesire = parseInt($('#khDesire').val());\n  var result = ' L acqua sarà composta al ' + change / khDesire * kh + ' % di osmosi su ' + change + ' lt, e avrai un gH di ' + gh / change * (change / khDesire * kh);\n  $('#resultChange').html(result);\n  $('#resultChange').removeClass('d-none');\n});\n$('#calcChange').on('reset', function () {\n  $('#resultChange').addClass('d-none');\n}); // END water change Calc\n// termos calculator\n\n$('#calcTermos').on('submit', function (e) {\n  e.preventDefault();\n  $('#resultTermos').addClass('d-none');\n  var num1 = parseInt($('#litraggio').val());\n  var num2 = 2;\n  var result = 'Avrai bisogno di un riscaldatore con un wattaggio di ' + num1 * num2 + 'o superiore';\n  $('#resultTermos').html(result);\n  $('#resultTermos').removeClass('d-none');\n});\n$('#calcTermos').on('reset', function () {\n  $('#resultTermos').addClass('d-none');\n}); // END termos calc\n//end Calculator\n\n//# sourceURL=webpack:///./public/js/core.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/core.css */ \"./public/css/core.css\");\n/* harmony import */ var _css_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_core_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ \"./public/js/core.js\");\n/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ })

/******/ });