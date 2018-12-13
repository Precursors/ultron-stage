/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _components = __webpack_require__(4);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _Configuration2 = __webpack_require__(22);
	
	var _Configuration3 = _interopRequireDefault(_Configuration2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.MAPPING = _components2.default;
	window.cleanObject = function (obj) {
	  if (!obj) return;
	  obj = deepCopy({}, obj);
	  var result = {};
	  Object.keys(obj).forEach(function (key) {
	    switch (obj[key].type) {
	      case 'logogram':
	        var items = obj[key].items;
	        // 删掉复合属性
	        delete obj[key];
	        // 对每个属性分别设置
	        Object.entries(items).forEach(function (_ref) {
	          var _ref2 = _slicedToArray(_ref, 2),
	              k = _ref2[0],
	              v = _ref2[1];
	
	          obj[key + '-' + k] = v;
	        });
	        // 就是说类似于 padding 会生成
	        // padding-left,padding-right...
	        break;
	      default:
	        result[key] = obj[key].value;
	    }
	  });
	
	  return result;
	};
	
	var deepCopy = window.deepCopy = function (target, source) {
	  for (var key in source) {
	    if (_typeof(source[key]) === 'object' && !Array.isArray(source[key])) {
	      target[key] = deepCopy({}, source[key]);
	    } else {
	      target[key] = source[key];
	    }
	  }
	
	  return target;
	};
	
	var mapping = groupMapping(Array.from(_components2.default));
	// 删除私有的组件
	delete mapping.private;
	
	var treeList = ['Layout', 'Block', 'Inline'].map(function (key) {
	  var result = {
	    title: key,
	    items: mapping[key]
	  };
	  return result;
	});
	
	(0, _reactDom.render)(_react2.default.createElement(_Configuration3.default, { mapping: treeList }), document.getElementById('root'));
	
	function groupMapping(mapping) {
	  var result = {};
	  mapping.forEach(function (item) {
	    var type = item.type;
	    var child = result[type] = result[type] || [];
	    child.push(item);
	  });
	
	  return result;
	}
	
	/**
	 * 为了实现拖拽上传的，需要将这几个事件禁用掉
	 */
	function initDrapEvent() {
	  document.body.addEventListener('dragleave', function (e) {
	    e.preventDefault();
	  });
	  document.body.addEventListener('drop', function (e) {
	    e.preventDefault();
	  });
	  document.body.addEventListener('dragenter', function (e) {
	    e.preventDefault();
	  });
	  document.body.addEventListener('dragover', function (e) {
	    e.preventDefault();
	  });
	}
	
	initDrapEvent();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = lib;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(33);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Automatically generated files
	 * Please do not modify
	 * @author Jarvis
	 */
	
	/*eslint-disable */
	
	var Mapping = [];
	Mapping.push(Object.assign({ components: __webpack_require__(5) }, { 'nameCn': '按钮', 'type': 'Inline', 'default': { 'text': 'Button' }, 'name': 'Button' }));
	Mapping.push(Object.assign({ components: __webpack_require__(6) }, { 'nameCn': '容器', 'type': 'Layout', 'styles': { 'color': { 'value': '#000000', 'type': 'color' }, 'font-size': { 'value': '16px', 'type': 'size' }, 'display': { 'value': 'block', 'type': 'select', 'items': ['block', 'inline', 'inline-block', 'none'] }, 'position': { 'value': 'relative', 'type': 'select', 'items': ['relative', 'absolute', 'fixed', 'none', 'static'] }, 'width': { 'value': '100%', 'type': 'size' }, 'height': { 'value': '100%', 'type': 'size' }, 'top': { 'value': 'auto', 'type': 'size' }, 'right': { 'value': 'auto', 'type': 'size' }, 'bottom': { 'value': 'auto', 'type': 'size' }, 'left': { 'value': 'auto', 'type': 'size' } }, 'attrs': { 'name': { 'value': 'container' } }, 'name': 'Container' }));
	Mapping.push(Object.assign({ components: __webpack_require__(11) }, { 'nameCn': '图像', 'type': 'Inline', 'attrs': { 'src': { 'type': 'file' } }, 'styles': { 'display': { 'value': 'block', 'type': 'select', 'items': ['block', 'inline', 'inline-block', 'none'] }, 'position': { 'value': 'relative', 'type': 'select', 'items': ['relative', 'absolute', 'fixed', 'none', 'static'] }, 'width': { 'value': '100%', 'type': 'size' }, 'height': { 'value': '100%', 'type': 'size' }, 'top': { 'value': 'auto', 'type': 'size' }, 'right': { 'value': 'auto', 'type': 'size' }, 'bottom': { 'value': 'auto', 'type': 'size' }, 'left': { 'value': 'auto', 'type': 'size' } }, 'name': 'Image' }));
	Mapping.push(Object.assign({ components: __webpack_require__(12) }, { 'nameCn': '块级超链接', 'type': 'Block', 'name': 'LinkBlock' }));
	Mapping.push(Object.assign({ components: __webpack_require__(15) }, { 'nameCn': '文本', 'type': 'Inline', 'attrs': { 'text': { 'type': 'text', 'value': 'hello world' } }, 'styles': { 'display': { 'type': 'select', 'value': 'block', 'items': ['block', 'inline', 'inline-block', 'none'] }, 'position': { 'type': 'select', 'value': 'relative', 'items': ['relative', 'absolute', 'fixed', 'none', 'static'] }, 'width': { 'type': 'size', 'value': '100%' }, 'height': { 'type': 'size', 'value': '100%' }, 'top': { 'type': 'size', 'value': 'auto' }, 'right': { 'type': 'size', 'value': 'auto' }, 'bottom': { 'type': 'size', 'value': 'auto' }, 'left': { 'type': 'size', 'value': 'auto' }, 'padding': { 'type': 'logogram', 'itemType': 'size', 'items': { 'top': '10px', 'right': '10px', 'bottom': '10px', 'left': '10px' } }, 'color': { 'type': 'color', 'value': '#000' }, 'background-color': { 'type': 'color' } }, 'name': 'Text' }));
	Mapping.push(Object.assign({ components: __webpack_require__(18) }, { 'nameCn': '文本链接', 'type': 'Inline', 'default': { 'text': 'Link', 'title': 'Blued', 'href': '#' }, 'name': 'TextLink' }));
	Mapping.push(Object.assign({ components: __webpack_require__(19) }, { 'type': 'private', 'name': '_Attr' }));
	Mapping.push(Object.assign({ components: __webpack_require__(22) }, { 'type': 'private', 'name': '_Configuration' }));
	Mapping.push(Object.assign({ components: __webpack_require__(23) }, { 'type': 'private', 'name': '_Preview' }));
	Mapping.push(Object.assign({ components: __webpack_require__(24) }, { 'type': 'private', 'name': '_Tree' }));
	Mapping.push(Object.assign({ components: __webpack_require__(25) }, { 'type': 'private', 'name': '_TreeNode' }));
	Mapping.push(Object.assign({ components: __webpack_require__(21) }, { 'type': 'private', 'name': '_Upload' }));
	module.exports = Mapping;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_Component) {
	  _inherits(Button, _Component);
	
	  function Button() {
	    _classCallCheck(this, Button);
	
	    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	  }
	
	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var text = this.props.text;
	
	      return _react2.default.createElement(
	        'button',
	        null,
	        text
	      );
	    }
	  }]);
	
	  return Button;
	}(_react.Component);
	
	exports.default = Button;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Container = function (_Component) {
	  _inherits(Container, _Component);
	
	  function Container() {
	    _classCallCheck(this, Container);
	
	    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
	  }
	
	  _createClass(Container, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          __env = _props.__env,
	          styles = _props.styles,
	          attrs = _props.attrs;
	
	      return _react2.default.createElement(
	        'div',
	        _extends({ className: [_index.container].concat(__env === 'preview' ? 'element' : '').join(' '), style: styles }, attrs),
	        children
	      );
	    }
	  }]);
	
	  return Container;
	}(_react.Component);
	
	exports.default = Container;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "._3Z-Vs {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"container": "_3Z-Vs"
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Image = function (_Component) {
	  _inherits(Image, _Component);
	
	  function Image() {
	    _classCallCheck(this, Image);
	
	    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
	  }
	
	  _createClass(Image, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          src = _props.src,
	          styles = _props.styles;
	
	      return _react2.default.createElement('img', { src: src, style: styles });
	    }
	  }]);
	
	  return Image;
	}(_react.Component);
	
	exports.default = Image;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(13);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _Container = __webpack_require__(6);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LinkBlock = function (_Component) {
	  _inherits(LinkBlock, _Component);
	
	  function LinkBlock() {
	    _classCallCheck(this, LinkBlock);
	
	    return _possibleConstructorReturn(this, (LinkBlock.__proto__ || Object.getPrototypeOf(LinkBlock)).apply(this, arguments));
	  }
	
	  _createClass(LinkBlock, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          href = _props.href,
	          children = _props.children;
	
	      return _react2.default.createElement(
	        _Container2.default,
	        null,
	        _react2.default.createElement(
	          'a',
	          { className: _index2.default['link-wrap'], href: href },
	          children
	        )
	      );
	    }
	  }]);
	
	  return LinkBlock;
	}(_react.Component);
	
	exports.default = LinkBlock;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".nuEX0 {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%; }\n", ""]);
	
	// exports
	exports.locals = {
		"link-wrap": "nuEX0"
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Text = function (_Component) {
	  _inherits(Text, _Component);
	
	  function Text() {
	    _classCallCheck(this, Text);
	
	    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
	  }
	
	  _createClass(Text, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          text = _props.text,
	          styles = _props.styles;
	
	      return _react2.default.createElement(
	        'span',
	        { className: _index.container, style: styles },
	        text
	      );
	    }
	  }]);
	
	  return Text;
	}(_react.Component);
	
	exports.default = Text;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "._3LEFF {\n  position: relative; }\n", ""]);
	
	// exports
	exports.locals = {
		"container": "_3LEFF"
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextLink = function (_Component) {
	  _inherits(TextLink, _Component);
	
	  function TextLink() {
	    _classCallCheck(this, TextLink);
	
	    return _possibleConstructorReturn(this, (TextLink.__proto__ || Object.getPrototypeOf(TextLink)).apply(this, arguments));
	  }
	
	  _createClass(TextLink, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          href = _props.href,
	          text = _props.text,
	          title = _props.title;
	
	      return _react2.default.createElement(
	        'a',
	        { href: href, title: title },
	        text
	      );
	    }
	  }]);
	
	  return TextLink;
	}(_react.Component);
	
	exports.default = TextLink;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(20);
	
	var _Upload2 = __webpack_require__(21);
	
	var _Upload3 = _interopRequireDefault(_Upload2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Preview = function (_Component) {
	  _inherits(_Preview, _Component);
	
	  function _Preview(props) {
	    _classCallCheck(this, _Preview);
	
	    var _this = _possibleConstructorReturn(this, (_Preview.__proto__ || Object.getPrototypeOf(_Preview)).call(this, props));
	
	    _this.state = {
	      tabs: props.tabs || {}
	    };
	    return _this;
	  }
	
	  _createClass(_Preview, [{
	    key: 'saveData',
	    value: function saveData() {
	      this.props.complete(this.state.tabs);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(props) {
	      this.state.tabs = props.tabs;
	      this.state.cursor = Object.keys(props.tabs).filter(function (key) {
	        return props.tabs[key];
	      })[0];
	    }
	
	    /**
	     * 自己实现了切换tab的方法，主要为了保存当前选中的tab页
	     * 以及在重新生成时改变该cursor的值
	     */
	
	  }, {
	    key: 'changeTab',
	    value: function changeTab(key) {
	      this.setState({ cursor: key });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var state = this.state,
	          changeTab = this.changeTab,
	          saveData = this.saveData;
	      var tabs = state.tabs,
	          cursor = state.cursor;
	
	      var keys = Object.keys(tabs).filter(function (key) {
	        return tabs[key];
	      });
	      saveData = saveData.bind(this);
	      changeTab = changeTab.bind(this);
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Tabs,
	          { defaultActiveKey: keys[0], unmountOnExit: true, animation: true, activeKey: cursor, onSelect: changeTab },
	          keys.map(function (key, index) {
	            var item = tabs[key];
	            return item ? _react2.default.createElement(
	              _reactBootstrap.Tab,
	              { eventKey: key, title: key },
	              _react2.default.createElement(
	                _reactBootstrap.Form,
	                { horizontal: true, style: { 'margin-top': '15px' } },
	                Object.keys(item).map(function (k) {
	                  var info = item[k];
	                  var type = info.type;
	                  var methods = {};
	                  methods.onChange = function (_ref) {
	                    var v = _ref.target.value;
	
	                    info.value = v;
	                    saveData();
	                  };
	
	                  // 对特殊表单的一些处理
	                  // 比如size添加上下箭头的事件监听
	                  // file添加弹出层的数据捕获
	                  if (type === 'size') {
	                    methods.onKeyDown = function (_ref2) {
	                      var keyCode = _ref2.keyCode,
	                          v = _ref2.target.value;
	
	                      if (Number(keyCode) === 38) {
	                        // up
	                        item[k].value = addNumber(v);
	                      } else if (Number(keyCode) === 40) {
	                        item[k].value = subNumber(v);
	                      } else {
	                        return;
	                      }
	                      saveData();
	                    };
	                  } else if (type === 'file') {
	                    methods.openFilePanel = function () {
	                      _this2.setState({
	                        show: true,
	                        onFileChange: function onFileChange(value) {
	                          info.value = value;
	                          _this2.setState({
	                            show: false,
	                            onFileChange: ''
	                          });
	                          saveData();
	                        }
	                      });
	                    };
	                  }
	                  return _react2.default.createElement(
	                    _reactBootstrap.FormGroup,
	                    null,
	                    _react2.default.createElement(
	                      _reactBootstrap.Col,
	                      { componentClass: _reactBootstrap.ControlLabel, sm: 4 },
	                      k
	                    ),
	                    _react2.default.createElement(
	                      _reactBootstrap.Col,
	                      { sm: 8 },
	                      getInputType(info, methods)
	                    )
	                  );
	                })
	              )
	            ) : null;
	          })
	        ),
	        _react2.default.createElement(_Upload3.default, { show: this.state.show, onChange: this.state.onFileChange })
	      );
	    }
	  }]);
	
	  return _Preview;
	}(_react.Component);
	
	exports.default = _Preview;
	
	
	function getInputType(info, methods) {
	  switch (info.type) {
	    case 'select':
	      return _react2.default.createElement(
	        _reactBootstrap.FormControl,
	        _extends({ componentClass: 'select', placeholder: 'select', value: info.value }, methods),
	        [].map.call(info.items, function (item) {
	          return _react2.default.createElement(
	            'option',
	            { value: item },
	            item
	          );
	        })
	      );
	    case 'file':
	      return _react2.default.createElement(
	        _reactBootstrap.InputGroup,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.InputGroup.Button,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: methods.openFilePanel },
	            '\u4E0A\u4F20\u56FE\u7247'
	          )
	        ),
	        _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', disabled: true, value: info.value })
	      );
	    case 'logogram':
	      return _react2.default.createElement(_reactBootstrap.FormControl, _extends({ type: info.itemType, value: info.value }, methods));
	    default:
	      return _react2.default.createElement(_reactBootstrap.FormControl, _extends({ type: info.type, value: info.value }, methods));
	  }
	}
	
	function addNumber(val) {
	  return val.replace(/^\d+/, function (val) {
	    return Number(val) + 1;
	  });
	}
	
	function subNumber(val) {
	  return val.replace(/^\d+/, function (val) {
	    return Math.max(0, Number(val) - 1);
	  });
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(730);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Upload = function (_Component) {
	  _inherits(_Upload, _Component);
	
	  function _Upload() {
	    _classCallCheck(this, _Upload);
	
	    var _this = _possibleConstructorReturn(this, (_Upload.__proto__ || Object.getPrototypeOf(_Upload)).call(this));
	
	    _this.state = {
	      show: false,
	      data: ''
	    };
	    return _this;
	  }
	
	  _createClass(_Upload, [{
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(props) {
	      this.state.show = props.show;
	      this.state.data = '';
	    }
	  }, {
	    key: 'loadFile',
	    value: function loadFile(file) {
	      var _this2 = this;
	
	      var reader = new FileReader();
	      reader.addEventListener('load', function () {
	        _this2.setState({
	          data: reader.result
	        });
	      });
	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(_ref) {
	      var target = _ref.target;
	
	      this.loadFile(target.files[0]);
	    }
	  }, {
	    key: 'onDrop',
	    value: function onDrop(e) {
	      e.preventDefault();
	      var fileList = e.dataTransfer.files; // 获取文件对象
	      // 检测是否是拖拽文件到页面的操作
	      if (fileList.length === 0) {
	        return false;
	      }
	      // 检测文件是不是图片
	      if (fileList[0].type.indexOf('image') === -1) {
	        alert('您拖的不是图片！');
	        return false;
	      }
	
	      this.loadFile(fileList[0]);
	    }
	  }, {
	    key: 'onSave',
	    value: function onSave() {
	      this.props.onChange(this.state.data);
	      this.setState({
	        show: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var onChange = this.onChange.bind(this);
	      var onDrop = this.onDrop.bind(this);
	      var onSave = this.onSave.bind(this);
	      var close = function close() {
	        return _this3.setState({ show: false });
	      };
	
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        {
	          show: this.state.show,
	          onHide: close,
	          'aria-labelledby': 'contained-modal-title'
	        },
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            { id: 'contained-modal-title' },
	            '\u4E0A\u4F20\u56FE\u7247\uFF08\u53EF\u62D6\u62FD\uFF09'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          { onDrop: onDrop },
	          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'file', onChange: onChange })
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { onClick: close },
	            'Close'
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Button,
	            { bsStyle: 'success', onClick: onSave },
	            'Save'
	          )
	        )
	      );
	    }
	  }]);
	
	  return _Upload;
	}(_react.Component);
	
	exports.default = _Upload;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Preview2 = __webpack_require__(23);
	
	var _Preview3 = _interopRequireDefault(_Preview2);
	
	var _Tree2 = __webpack_require__(24);
	
	var _Tree3 = _interopRequireDefault(_Tree2);
	
	var _Attr2 = __webpack_require__(19);
	
	var _Attr3 = _interopRequireDefault(_Attr2);
	
	var _index = __webpack_require__(30);
	
	var _reactBootstrap = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Configuration = function (_Component) {
	  _inherits(_Configuration, _Component);
	
	  function _Configuration() {
	    _classCallCheck(this, _Configuration);
	
	    // 根节点的属性配置
	    // config里边会有两项被映射到界面中
	    //
	    // items 是生成时使用的
	    // elements 是Preview展示时使用的
	    // elements会将attrs和styles里边的属性进行处理
	    var _this = _possibleConstructorReturn(this, (_Configuration.__proto__ || Object.getPrototypeOf(_Configuration)).call(this));
	
	    _this.state = {
	      key: 'Window',
	      config: {
	        attrs: {
	          title: {
	            value: 'New Window'
	          }
	        }
	      },
	      items: [],
	      editors: {}
	    };
	    return _this;
	  }
	
	  /**
	   * 这里会接收到当前结构的数据，如果不执行setState，则整个树的结构都不会发生改变
	   * 虽说每一个Tree都实现了addItem之类的方法，用于添加新的节点
	   * 其实只是将新的节点拼接到这个节点的自节点中，然后将整个树返回到顶层，由顶层来决定是否重新渲染
	   * 优点在于比较好控制，只有顶层来处理数据的更新
	   * 缺点在于层级多了以后，中间数据传递函数调用会有很多次（希望全寄托在React的比较算法上了-.-）
	   */
	
	
	  _createClass(_Configuration, [{
	    key: 'changeData',
	    value: function changeData(data) {
	      this.setState({
	        items: data
	      });
	    }
	
	    /**
	     * 这里获得的是一个下标的集合
	     * 如果参数是null 则是Window的一些属性配置
	     */
	
	  }, {
	    key: 'editorItem',
	    value: function editorItem(indexList) {
	      var self = this;
	      var item = self.state;
	
	      indexList && indexList.filter(function (i) {
	        return i !== undefined;
	      }).forEach(function (index, level) {
	        if (!item) throw new Error('wrong index at level[' + level + ']');
	        item = item.items[index];
	      });
	
	      // 将获取到的节点的 attrs和styles俩属性塞到state里边
	      // 并且生成一个回调用来保存修改
	      this.setState({
	        editors: {
	          tabs: {
	            attrs: item.config.attrs && Object.assign({}, item.config.attrs),
	            styles: item.config.styles && Object.assign({}, item.config.styles)
	          },
	          complete: function complete(result) {
	            item.config = Object.assign(item.config, result);
	
	            self.changeData(self.state.items);
	          }
	        }
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.editorItem();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var editorItem = this.editorItem,
	          props = this.props,
	          state = this.state;
	      var mapping = props.mapping;
	      var key = state.key,
	          items = state.items,
	          editors = state.editors;
	
	
	      return _react2.default.createElement(
	        _reactBootstrap.Grid,
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { sm: 8, xs: 12 },
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            { header: 'Preview' },
	            _react2.default.createElement(_Preview3.default, { items: items })
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Col,
	          { sm: 4, xs: 12 },
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            { header: 'Components', className: _index.panel },
	            _react2.default.createElement(
	              'div',
	              { className: _index.title },
	              _react2.default.createElement(
	                'span',
	                null,
	                key
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _index.toolWrap },
	                _react2.default.createElement('i', { className: [_index.tools].concat('fa fa-edit').join(' '), onClick: editorItem.bind(this, null) }),
	                _react2.default.createElement('i', { className: [_index.tools].concat('fa fa-trash').join(' '), style: { color: '#ccc', cursor: 'not-allowed' } })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _index.container },
	              _react2.default.createElement(_Tree3.default, { mapping: mapping, changeData: this.changeData.bind(this), items: items, editorItem: this.editorItem.bind(this) })
	            )
	          ),
	          _react2.default.createElement(
	            _reactBootstrap.Panel,
	            { header: 'Configurations' },
	            _react2.default.createElement(_Attr3.default, editors)
	          )
	        )
	      );
	    }
	  }]);
	
	  return _Configuration;
	}(_react.Component);
	
	exports.default = _Configuration;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Preview = function (_Component) {
	  _inherits(_Preview, _Component);
	
	  function _Preview() {
	    _classCallCheck(this, _Preview);
	
	    return _possibleConstructorReturn(this, (_Preview.__proto__ || Object.getPrototypeOf(_Preview)).apply(this, arguments));
	  }
	
	  _createClass(_Preview, [{
	    key: 'render',
	    value: function render() {
	      var items = this.props.items;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        items.map(buildElement)
	      );
	    }
	  }]);
	
	  return _Preview;
	}(_react.Component);
	
	exports.default = _Preview;
	
	
	function buildElement(_ref) {
	  var config = _ref.config,
	      items = _ref.items;
	
	  var children = items.map(buildElement);
	
	  return _react2.default.createElement(config.components.default, Object.assign({}, config, window.cleanObject(config.attrs), {
	    styles: window.cleanObject(config.styles)
	  }, { __env: 'preview' }), children);
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TreeNode2 = __webpack_require__(25);
	
	var _TreeNode3 = _interopRequireDefault(_TreeNode2);
	
	var _index = __webpack_require__(28);
	
	var _reactBootstrap = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _Tree = function (_Component) {
	  _inherits(_Tree, _Component);
	
	  function _Tree(props) {
	    _classCallCheck(this, _Tree);
	
	    // 默认为close状态
	    // 隐藏选择组件的区域
	    var _this = _possibleConstructorReturn(this, (_Tree.__proto__ || Object.getPrototypeOf(_Tree)).call(this, props));
	
	    _this.state = {
	      onOpen: false
	    };
	
	    _this.onSelect = _this.onSelect.bind(_this);
	    return _this;
	  }
	
	  /**
	   * 获取到选择的组件，将其添加至列表中
	   */
	
	
	  _createClass(_Tree, [{
	    key: 'onSelect',
	    value: function onSelect(key) {
	      var items = Array.from(this.props.items);
	      items.push({
	        key: key,
	        config: getItem(key),
	        items: []
	      });
	
	      this.setState({ onOpen: false });
	
	      this.setChange(items);
	    }
	
	    /**
	     * 移除选择的组件
	     */
	
	  }, {
	    key: 'removeItem',
	    value: function removeItem(index) {
	      var items = Array.from(this.props.items);
	      items.splice(index, 1);
	      this.setChange(items);
	    }
	
	    /**
	     * 上移
	     */
	
	  }, {
	    key: 'changeUp',
	    value: function changeUp(index) {
	      // 如果当前下标为第一个，点击无效
	      if (index === 0) return;
	
	      var items = Array.from(this.props.items);
	      var before = index - 1;
	
	      items.splice.apply(items, [before, 2].concat(_toConsumableArray(items.slice(before, index + 1).reverse())));
	      this.setChange(items);
	    }
	
	    /**
	     * 下移
	     */
	
	  }, {
	    key: 'changeDown',
	    value: function changeDown(index) {
	      var items = Array.from(this.props.items);
	
	      // 如果当前下标为最后一个，点击无效
	      if (index === items.length) return;
	
	      var after = index + 2;
	      items.splice.apply(items, [index, 2].concat(_toConsumableArray(items.slice(index, after).reverse())));
	
	      this.setChange(items);
	    }
	
	    /**
	     * 传入子组件的方法，默认已经bind了index
	     * 拿到data以后更新对应的数据，并传递变化
	     */
	
	  }, {
	    key: 'changeData',
	    value: function changeData(index, data) {
	      var items = Array.from(this.props.items);
	      var cursor = items[index];
	
	      cursor.items = data;
	
	      this.setChange(items);
	    }
	  }, {
	    key: 'editorItem',
	    value: function editorItem(cursor, indexList) {
	      this.props.editorItem(indexList !== undefined ? [cursor].concat(indexList) : [cursor]);
	    }
	
	    /**
	     * 将当前的组件结构传递至顶层
	     * 由顶层来触发更新
	     */
	
	  }, {
	    key: 'setChange',
	    value: function setChange(items) {
	      this.props.changeData(items);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(props) {
	      // 这种情况说明上一次新增加的节点是在这下边的，手动调用editorItem的方法
	      if (props.items.length > this.props.items.length) {
	        this.editorItem(this.props.items.length);
	      }
	
	      if (props.items.length < this.props.items.length) {
	        this.editorItem();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _ref,
	          _this2 = this,
	          _ref2;
	
	      var props = this.props,
	          removeItem = this.removeItem,
	          changeUp = this.changeUp,
	          changeDown = this.changeDown,
	          changeData = this.changeData,
	          editorItem = this.editorItem,
	          onSelect = this.onSelect;
	      var mapping = props.mapping,
	          items = props.items;
	
	      var maxLen = mapping.length - 1;
	      var itemLength = items.length;
	
	      console.log((_ref = []).concat.apply(_ref, _toConsumableArray(mapping.map(function (item, index, map) {
	        return [_react2.default.createElement(
	          _reactBootstrap.MenuItem,
	          { header: true },
	          item.title
	        )].concat(item.items.map(function (component) {
	          return _react2.default.createElement(
	            _reactBootstrap.MenuItem,
	            { eventKey: component.name },
	            component.name
	          );
	        }), index !== maxLen ? _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }) : null);
	      }))).length);
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'ul',
	          { className: _index.container },
	          items.map(function (item, index) {
	            var childMethods = {
	              removeItem: removeItem.bind(_this2, index),
	              changeUp: changeUp.bind(_this2, index),
	              changeDown: changeDown.bind(_this2, index),
	              changeData: changeData.bind(_this2, index),
	              editorItem: editorItem.bind(_this2, index)
	            };
	            return _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(_TreeNode3.default, _extends({ item: item, items: item.items, index: index, itemLength: itemLength, mapping: mapping }, childMethods))
	            );
	          })
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.ButtonToolbar,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.DropdownButton,
	            { bsStyle: 'link', title: 'Add', noCaret: true, onSelect: onSelect, bsSize: 'xsmall', className: [_index.buttonWrap].concat('fa fa-plus').join(' ') },
	            (_ref2 = []).concat.apply(_ref2, _toConsumableArray(mapping.map(function (item, index, map) {
	              return [_react2.default.createElement(
	                _reactBootstrap.MenuItem,
	                { header: true },
	                item.title
	              )].concat(item.items.map(function (component) {
	                return _react2.default.createElement(
	                  _reactBootstrap.MenuItem,
	                  { eventKey: component.name },
	                  component.name
	                );
	              }), index !== maxLen ? _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }) : null);
	            })))
	          )
	        )
	      );
	    }
	  }]);
	
	  return _Tree;
	}(_react.Component);
	
	exports.default = _Tree;
	
	
	function getItem(key) {
	  var mapping = Object.assign({}, window.MAPPING);
	  for (var index in mapping) {
	    var item = mapping[index];
	    if (item.name === key) {
	      return window.deepCopy({}, item);
	    }
	  }
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Tree2 = __webpack_require__(24);
	
	var _Tree3 = _interopRequireDefault(_Tree2);
	
	var _index = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _TreeNode = function (_Component) {
	  _inherits(_TreeNode, _Component);
	
	  function _TreeNode(props) {
	    _classCallCheck(this, _TreeNode);
	
	    var _this = _possibleConstructorReturn(this, (_TreeNode.__proto__ || Object.getPrototypeOf(_TreeNode)).call(this, props));
	
	    _this.changeData = _this.changeData.bind(_this);
	    return _this;
	  }
	
	  _createClass(_TreeNode, [{
	    key: 'changeData',
	    value: function changeData(items) {
	      this.props.changeData(items);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props,
	          changeData = this.changeData;
	      var item = props.item,
	          index = props.index,
	          itemLength = props.itemLength,
	          mapping = props.mapping,
	          removeItem = props.removeItem,
	          changeUp = props.changeUp,
	          changeDown = props.changeDown,
	          editorItem = props.editorItem;
	      var items = props.items;
	
	
	      var disableStyle = {
	        color: '#ccc',
	        cursor: 'not-allowed'
	      };
	      return _react2.default.createElement(
	        'div',
	        { className: _index.element },
	        _react2.default.createElement(
	          'div',
	          { className: _index.title },
	          _react2.default.createElement(
	            'span',
	            null,
	            item.key
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _index.toolWrap },
	            _react2.default.createElement('i', { className: [_index.tools].concat('fa fa-arrow-up').join(' '), onClick: changeUp, style: index === 0 ? disableStyle : null }),
	            _react2.default.createElement('i', { className: [_index.tools].concat('fa fa-arrow-down').join(' '), onClick: changeDown, style: index === itemLength - 1 ? disableStyle : null }),
	            _react2.default.createElement('i', { className: [_index.tools].concat('fa fa-edit').join(' '), onClick: function onClick() {
	                return editorItem();
	              } }),
	            _react2.default.createElement('i', { className: [_index.tools].concat('fa fa-trash').join(' '), onClick: removeItem })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _index.container },
	          _react2.default.createElement(_Tree3.default, { mapping: mapping, changeData: changeData, items: items, editorItem: editorItem })
	        )
	      );
	    }
	  }]);
	
	  return _TreeNode;
	}(_react.Component);
	
	exports.default = _TreeNode;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".zWCkA {\n  position: relative; }\n\n._1mIB- {\n  position: relative;\n  height: 25px;\n  line-height: 25px; }\n  ._1mIB- ._343wI {\n    display: inline-block;\n    margin: 0 5px;\n    cursor: pointer; }\n\n._3X7NH {\n  position: relative; }\n\n._307S9 {\n  margin: 8px 0; }\n\n._3HCTC {\n  position: absolute;\n  right: 0;\n  top: 0; }\n", ""]);
	
	// exports
	exports.locals = {
		"element": "zWCkA",
		"title": "_1mIB-",
		"tools": "_343wI",
		"container": "_3X7NH",
		"listitem": "_307S9",
		"toolWrap": "_3HCTC"
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "._3iDtt {\n  margin: 8px 0; }\n\n.u_F_Y {\n  height: 25px;\n  padding-left: 15px !important; }\n\n._1O8_5 {\n  position: relative;\n  padding-left: 15px;\n  margin: 0; }\n", ""]);
	
	// exports
	exports.locals = {
		"listitem": "_3iDtt",
		"buttonWrap": "u_F_Y",
		"container": "_1O8_5"
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?module&localIdentName=[hash:base64:5]&-url!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "._25__2 {\n  position: relative;\n  background-color: #f3f6fa;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(50%, transparent), color-stop(50%, white), color-stop(50%, white));\n  background-image: linear-gradient(transparent 50%, white 50%, white);\n  background-size: 50px 50px; }\n\n._1cRHn {\n  position: relative;\n  margin-right: 400px;\n  padding-right: 50px; }\n\n.pC1mq {\n  position: absolute;\n  width: 400px;\n  height: 100%;\n  right: 0;\n  top: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px dotted #061625; }\n\n.wTvtS {\n  position: relative;\n  height: 25px;\n  line-height: 25px; }\n  .wTvtS ._25hPw {\n    display: inline-block;\n    margin: 0 5px;\n    cursor: pointer; }\n\n._255QP {\n  position: absolute;\n  right: 0;\n  top: 0; }\n", ""]);
	
	// exports
	exports.locals = {
		"container": "_25__2",
		"preview": "_1cRHn",
		"tree": "pC1mq",
		"title": "wTvtS",
		"tools": "_25hPw",
		"toolWrap": "_255QP"
	};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map