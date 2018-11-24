module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DeleteItem.js":
/*!**********************************!*\
  !*** ./components/DeleteItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Items */ "./components/Items.js");
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/wes-bos-graphql/sick-fits/frontend/components/DeleteItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var DELETE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var DeleteItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteItem, _Component);

  function DeleteItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      // manually update the cache on the client, so it matches the server.
      // 1. Read the cache for the items we want.
      var data = cache.readQuery({
        query: _Items__WEBPACK_IMPORTED_MODULE_3__["ALL_ITEMS_QUERY"]
      });
      console.log({
        data: data,
        payload: payload
      }); // 2. Filter the deleted item out of the page

      data.items = data.items.filter(function (item) {
        return item.id !== payload.data.deleteItem.id;
      }); // 3. Put the items back in the client cache.

      cache.writeQuery({
        query: _Items__WEBPACK_IMPORTED_MODULE_3__["ALL_ITEMS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: DELETE_ITEM_MUTATION,
        variables: {
          id: this.props.id
        },
        update: this.update,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, function (deleteItem, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: function onClick() {
            if (confirm("Are you sure you want to delete this item?")) {
              deleteItem();
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DeleteItem);

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/wes-bos-graphql/sick-fits/frontend/components/ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Item.js":
/*!****************************!*\
  !*** ./components/Item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeleteItem */ "./components/DeleteItem.js");
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/wes-bos-graphql/sick-fits/frontend/components/Item.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, item.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: item.image,
        alt: item.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: "/item",
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, item.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__["default"])(item.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, item.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttonList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: "update",
          query: {
            id: item.id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Add To Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: item.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Delete This Item")));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Item, "propTypes", {
  item: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/Items.js":
/*!*****************************!*\
  !*** ./components/Items.js ***!
  \*****************************/
/*! exports provided: default, ALL_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ITEMS_QUERY", function() { return ALL_ITEMS_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "./components/Item.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/wes-bos-graphql/sick-fits/frontend/components/Items.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int=", ") {\n    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var ALL_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Items__Center",
  componentId: "tikday-0"
})(["text-align:center;"]);
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "tikday-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      var page = this.props.page;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: ALL_ITEMS_QUERY,
        variables: {
          skip: page * _config__WEBPACK_IMPORTED_MODULE_6__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        console.log({
          data: data,
          error: error,
          loading: loading
        });
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, "Loading...");
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, "Error: ", error.message);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, data.items.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Item__WEBPACK_IMPORTED_MODULE_4__["default"], {
            item: item,
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          });
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        page: this.props.page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Items);


/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/wes-bos-graphql/sick-fits/frontend/components/Pagination.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var Pagination = function Pagination(_ref) {
  var page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: PAGINATION_QUERY,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        loading = _ref2.loading,
        error = _ref2.error;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      error: error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
    var count = data.itemsConnection.aggregate.count;
    var pages = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_7__["perPage"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Sick Fits! - Page ", page, " of ", pages)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      prefetch: true,
      href: {
        pathname: "items",
        query: {
          page: page - 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "prev",
      "aria-disabled": page <= 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Prev")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Page ", page, " of ", pages, "!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, count, " Items Total"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      prefetch: true,
      href: {
        pathname: "items",
        query: {
          page: page + 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "next",
      "aria-disabled": page >= pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Next")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ItemStyles__Item",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid ", ";box-shadow:", ";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ", ";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:", ";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ", ";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "nwbk6t-0"
})(["background:", ";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:", ";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"], function (props) {
  return props.theme.red;
});
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var perPage = 4;

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./node_modules/react-apollo/ApolloConsumer.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-apollo/ApolloConsumer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var invariant = __webpack_require__(/*! invariant */ "invariant");
var ApolloConsumer = function (props, context) {
    invariant(!!context.client, "Could not find \"client\" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>");
    return props.children(context.client);
};
ApolloConsumer.contextTypes = {
    client: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
};
ApolloConsumer.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
};
/* harmony default export */ __webpack_exports__["default"] = (ApolloConsumer);
//# sourceMappingURL=ApolloConsumer.js.map

/***/ }),

/***/ "./node_modules/react-apollo/ApolloProvider.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-apollo/ApolloProvider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var invariant = __webpack_require__(/*! invariant */ "invariant");
var ApolloProvider = (function (_super) {
    __extends(ApolloProvider, _super);
    function ApolloProvider(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.operations = new Map();
        invariant(props.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        if (!props.client.__operations_cache__) {
            props.client.__operations_cache__ = _this.operations;
        }
        return _this;
    }
    ApolloProvider.prototype.getChildContext = function () {
        return {
            client: this.props.client,
            operations: this.props.client.__operations_cache__,
        };
    };
    ApolloProvider.prototype.render = function () {
        return this.props.children;
    };
    ApolloProvider.propTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
        children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
    };
    ApolloProvider.childContextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
        operations: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    };
    return ApolloProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ApolloProvider);
//# sourceMappingURL=ApolloProvider.js.map

/***/ }),

/***/ "./node_modules/react-apollo/Mutation.js":
/*!***********************************************!*\
  !*** ./node_modules/react-apollo/Mutation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser */ "./node_modules/react-apollo/parser.js");
/* harmony import */ var _component_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-utils */ "./node_modules/react-apollo/component-utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "fbjs/lib/shallowEqual");


var initialState = {
    loading: false,
    called: false,
    error: undefined,
    data: undefined,
};
var Mutation = (function (_super) {
    __extends(Mutation, _super);
    function Mutation(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.hasMounted = false;
        _this.runMutation = function (options) {
            if (options === void 0) { options = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(options)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (e) {
                _this.onMutationError(e, mutationId);
                if (!_this.props.onError)
                    throw e;
            });
        };
        _this.mutate = function (options) {
            var _a = _this.props, mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c;
            var mutateOptions = __assign({}, options);
            var refetchQueries = mutateOptions.refetchQueries || _this.props.refetchQueries;
            if (refetchQueries && refetchQueries.length && Array.isArray(refetchQueries)) {
                refetchQueries = refetchQueries.map(function (x) {
                    if (typeof x === 'string' && _this.context.operations)
                        return _this.context.operations.get(x) || x;
                    return x;
                });
                delete mutateOptions.refetchQueries;
            }
            var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
            delete mutateOptions.variables;
            return _this.client.mutate(__assign({ mutation: mutation,
                optimisticResponse: optimisticResponse,
                refetchQueries: refetchQueries,
                awaitRefetchQueries: awaitRefetchQueries,
                update: update,
                context: context, variables: mutateVariables }, mutateOptions));
        };
        _this.onMutationStart = function () {
            if (!_this.state.loading && !_this.props.ignoreResults) {
                _this.setState({
                    loading: true,
                    error: undefined,
                    data: undefined,
                    called: true,
                });
            }
        };
        _this.onMutationCompleted = function (response, mutationId) {
            if (_this.hasMounted === false) {
                return;
            }
            var _a = _this.props, onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
            var data = response.data;
            var callOncomplete = function () { return (onCompleted ? onCompleted(data) : null); };
            if (_this.isMostRecentMutation(mutationId) && !ignoreResults) {
                _this.setState({ loading: false, data: data }, callOncomplete);
            }
            else {
                callOncomplete();
            }
        };
        _this.onMutationError = function (error, mutationId) {
            if (_this.hasMounted === false) {
                return;
            }
            var onError = _this.props.onError;
            var callOnError = function () { return (onError ? onError(error) : null); };
            if (_this.isMostRecentMutation(mutationId)) {
                _this.setState({ loading: false, error: error }, callOnError);
            }
            else {
                callOnError();
            }
        };
        _this.generateNewMutationId = function () {
            _this.mostRecentMutationId = _this.mostRecentMutationId + 1;
            return _this.mostRecentMutationId;
        };
        _this.isMostRecentMutation = function (mutationId) {
            return _this.mostRecentMutationId === mutationId;
        };
        _this.verifyDocumentIsMutation = function (mutation) {
            var operation = Object(_parser__WEBPACK_IMPORTED_MODULE_3__["parser"])(mutation);
            invariant__WEBPACK_IMPORTED_MODULE_2___default()(operation.type === _parser__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Mutation, "The <Mutation /> component requires a graphql mutation, but got a " + (operation.type === _parser__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Query ? 'query' : 'subscription') + ".");
        };
        _this.client = Object(_component_utils__WEBPACK_IMPORTED_MODULE_4__["getClient"])(props, context);
        _this.verifyDocumentIsMutation(props.mutation);
        _this.mostRecentMutationId = 0;
        _this.state = initialState;
        return _this;
    }
    Mutation.prototype.componentDidMount = function () {
        this.hasMounted = true;
    };
    Mutation.prototype.componentWillUnmount = function () {
        this.hasMounted = false;
    };
    Mutation.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var nextClient = Object(_component_utils__WEBPACK_IMPORTED_MODULE_4__["getClient"])(nextProps, nextContext);
        if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
            return;
        }
        if (this.props.mutation !== nextProps.mutation) {
            this.verifyDocumentIsMutation(nextProps.mutation);
        }
        if (this.client !== nextClient) {
            this.client = nextClient;
            this.setState(initialState);
        }
    };
    Mutation.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, loading = _a.loading, data = _a.data, error = _a.error, called = _a.called;
        var result = {
            called: called,
            loading: loading,
            data: data,
            error: error,
            client: this.client,
        };
        return children(this.runMutation, result);
    };
    Mutation.contextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
        operations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    };
    Mutation.propTypes = {
        mutation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        optimisticResponse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        refetchQueries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])),
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        ]),
        awaitRefetchQueries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    };
    return Mutation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (Mutation);
//# sourceMappingURL=Mutation.js.map

/***/ }),

/***/ "./node_modules/react-apollo/Query.js":
/*!********************************************!*\
  !*** ./node_modules/react-apollo/Query.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser */ "./node_modules/react-apollo/parser.js");
/* harmony import */ var _component_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-utils */ "./node_modules/react-apollo/component-utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "fbjs/lib/shallowEqual");
var invariant = __webpack_require__(/*! invariant */ "invariant");
function compact(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        if (obj[key] !== undefined) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
}
function observableQueryFields(observable) {
    var fields = {
        variables: observable.variables,
        refetch: observable.refetch.bind(observable),
        fetchMore: observable.fetchMore.bind(observable),
        updateQuery: observable.updateQuery.bind(observable),
        startPolling: observable.startPolling.bind(observable),
        stopPolling: observable.stopPolling.bind(observable),
        subscribeToMore: observable.subscribeToMore.bind(observable),
    };
    return fields;
}
var Query = (function (_super) {
    __extends(Query, _super);
    function Query(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.previousData = {};
        _this.hasMounted = false;
        _this.startQuerySubscription = function () {
            if (_this.querySubscription)
                return;
            var initial = _this.getQueryResult();
            _this.querySubscription = _this.queryObservable.subscribe({
                next: function (_a) {
                    var data = _a.data;
                    if (initial && initial.networkStatus === 7 && shallowEqual(initial.data, data)) {
                        initial = undefined;
                        return;
                    }
                    initial = undefined;
                    _this.updateCurrentData();
                },
                error: function (error) {
                    _this.resubscribeToQuery();
                    if (!error.hasOwnProperty('graphQLErrors'))
                        throw error;
                    _this.updateCurrentData();
                },
            });
        };
        _this.removeQuerySubscription = function () {
            if (_this.querySubscription) {
                _this.querySubscription.unsubscribe();
                delete _this.querySubscription;
            }
        };
        _this.updateCurrentData = function () {
            if (_this.hasMounted)
                _this.forceUpdate();
        };
        _this.getQueryResult = function () {
            var data = { data: Object.create(null) };
            Object.assign(data, observableQueryFields(_this.queryObservable));
            if (_this.props.skip) {
                data = __assign({}, data, { data: undefined, error: undefined, loading: false });
            }
            else {
                var currentResult = _this.queryObservable.currentResult();
                var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
                var error = currentResult.error;
                if (errors && errors.length > 0) {
                    error = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloError"]({ graphQLErrors: errors });
                }
                Object.assign(data, { loading: loading, networkStatus: networkStatus, error: error });
                if (loading) {
                    Object.assign(data.data, _this.previousData, currentResult.data);
                }
                else if (error) {
                    var lastResult = _this.queryObservable.getLastResult();
                    if (lastResult) {
                        Object.assign(data, {
                            data: lastResult.data,
                        });
                    }
                }
                else {
                    var fetchPolicy = _this.queryObservable.options.fetchPolicy;
                    var partialRefetch = _this.props.partialRefetch;
                    if (partialRefetch &&
                        Object.keys(currentResult.data).length === 0 &&
                        partial &&
                        fetchPolicy !== 'cache-only') {
                        Object.assign(data, { loading: true });
                        data.refetch();
                        return data;
                    }
                    Object.assign(data.data, currentResult.data);
                    _this.previousData = currentResult.data;
                }
            }
            if (!_this.querySubscription) {
                var oldRefetch_1 = data.refetch;
                data.refetch = function (args) {
                    if (_this.querySubscription) {
                        return oldRefetch_1(args);
                    }
                    else {
                        return new Promise(function (r, f) {
                            _this.refetcherQueue = { resolve: r, reject: f, args: args };
                        });
                    }
                };
            }
            data.client = _this.client;
            return data;
        };
        _this.client = Object(_component_utils__WEBPACK_IMPORTED_MODULE_4__["getClient"])(props, context);
        _this.initializeQueryObservable(props);
        return _this;
    }
    Query.prototype.fetchData = function () {
        if (this.props.skip)
            return false;
        var _a = this.props, children = _a.children, ssr = _a.ssr, displayName = _a.displayName, skip = _a.skip, client = _a.client, onCompleted = _a.onCompleted, onError = _a.onError, partialRefetch = _a.partialRefetch, opts = __rest(_a, ["children", "ssr", "displayName", "skip", "client", "onCompleted", "onError", "partialRefetch"]);
        var fetchPolicy = opts.fetchPolicy;
        if (ssr === false)
            return false;
        if (fetchPolicy === 'network-only' || fetchPolicy === 'cache-and-network') {
            fetchPolicy = 'cache-first';
        }
        var observable = this.client.watchQuery(__assign({}, opts, { fetchPolicy: fetchPolicy }));
        var result = this.queryObservable.currentResult();
        return result.loading ? observable.result() : false;
    };
    Query.prototype.componentDidMount = function () {
        this.hasMounted = true;
        if (this.props.skip)
            return;
        this.startQuerySubscription();
        if (this.refetcherQueue) {
            var _a = this.refetcherQueue, args = _a.args, resolve = _a.resolve, reject = _a.reject;
            this.queryObservable.refetch(args)
                .then(resolve)
                .catch(reject);
        }
    };
    Query.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if (nextProps.skip && !this.props.skip) {
            this.removeQuerySubscription();
            return;
        }
        var nextClient = Object(_component_utils__WEBPACK_IMPORTED_MODULE_4__["getClient"])(nextProps, nextContext);
        if (shallowEqual(this.props, nextProps) && this.client === nextClient) {
            return;
        }
        if (this.client !== nextClient) {
            this.client = nextClient;
            this.removeQuerySubscription();
            this.queryObservable = null;
            this.previousData = {};
            this.updateQuery(nextProps);
        }
        if (this.props.query !== nextProps.query) {
            this.removeQuerySubscription();
        }
        this.updateQuery(nextProps);
        if (nextProps.skip)
            return;
        this.startQuerySubscription();
    };
    Query.prototype.componentWillUnmount = function () {
        this.removeQuerySubscription();
        this.hasMounted = false;
    };
    Query.prototype.componentDidUpdate = function () {
        var _a = this.props, onCompleted = _a.onCompleted, onError = _a.onError;
        if (onCompleted || onError) {
            var currentResult = this.queryObservable.currentResult();
            var loading = currentResult.loading, error = currentResult.error, data = currentResult.data;
            if (onCompleted && !loading && !error) {
                onCompleted(data);
            }
            else if (onError && !loading && error) {
                onError(error);
            }
        }
    };
    Query.prototype.render = function () {
        var children = this.props.children;
        var queryResult = this.getQueryResult();
        return children(queryResult);
    };
    Query.prototype.extractOptsFromProps = function (props) {
        var variables = props.variables, pollInterval = props.pollInterval, fetchPolicy = props.fetchPolicy, errorPolicy = props.errorPolicy, notifyOnNetworkStatusChange = props.notifyOnNetworkStatusChange, query = props.query, _a = props.displayName, displayName = _a === void 0 ? 'Query' : _a, _b = props.context, context = _b === void 0 ? {} : _b;
        this.operation = Object(_parser__WEBPACK_IMPORTED_MODULE_3__["parser"])(query);
        invariant(this.operation.type === _parser__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Query, "The <Query /> component requires a graphql query, but got a " + (this.operation.type === _parser__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].Mutation ? 'mutation' : 'subscription') + ".");
        return compact({
            variables: variables,
            pollInterval: pollInterval,
            query: query,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            metadata: { reactComponent: { displayName: displayName } },
            context: context,
        });
    };
    Query.prototype.initializeQueryObservable = function (props) {
        var opts = this.extractOptsFromProps(props);
        if (this.context.operations) {
            this.context.operations.set(this.operation.name, {
                query: opts.query,
                variables: opts.variables,
            });
        }
        this.queryObservable = this.client.watchQuery(opts);
    };
    Query.prototype.updateQuery = function (props) {
        if (!this.queryObservable)
            this.initializeQueryObservable(props);
        this.queryObservable.setOptions(this.extractOptsFromProps(props))
            .catch(function () { return null; });
    };
    Query.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var lastError = this.queryObservable.getLastError();
        var lastResult = this.queryObservable.getLastResult();
        this.queryObservable.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.queryObservable, { lastError: lastError, lastResult: lastResult });
    };
    Query.contextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        operations: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    };
    Query.propTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
        fetchPolicy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        notifyOnNetworkStatusChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        onCompleted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        pollInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
        query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        ssr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
        partialRefetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    };
    return Query;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (Query);
//# sourceMappingURL=Query.js.map

/***/ }),

/***/ "./node_modules/react-apollo/Subscriptions.js":
/*!****************************************************!*\
  !*** ./node_modules/react-apollo/Subscriptions.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-utils */ "./node_modules/react-apollo/component-utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ "fbjs/lib/shallowEqual");
var invariant = __webpack_require__(/*! invariant */ "invariant");
var Subscription = (function (_super) {
    __extends(Subscription, _super);
    function Subscription(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initialize = function (props) {
            if (_this.queryObservable)
                return;
            _this.queryObservable = _this.client.subscribe({
                query: props.subscription,
                variables: props.variables,
            });
        };
        _this.startSubscription = function () {
            if (_this.querySubscription)
                return;
            _this.querySubscription = _this.queryObservable.subscribe({
                next: _this.updateCurrentData,
                error: _this.updateError,
            });
        };
        _this.getInitialState = function () { return ({
            loading: true,
            error: undefined,
            data: undefined,
        }); };
        _this.updateCurrentData = function (result) {
            var _a = _this, client = _a.client, onSubscriptionData = _a.props.onSubscriptionData;
            if (onSubscriptionData)
                onSubscriptionData({ client: client, subscriptionData: result });
            _this.setState({
                data: result.data,
                loading: false,
                error: undefined,
            });
        };
        _this.updateError = function (error) {
            _this.setState({
                error: error,
                loading: false,
            });
        };
        _this.endSubscription = function () {
            if (_this.querySubscription) {
                _this.querySubscription.unsubscribe();
                delete _this.querySubscription;
            }
        };
        _this.client = Object(_component_utils__WEBPACK_IMPORTED_MODULE_2__["getClient"])(props, context);
        _this.initialize(props);
        _this.state = _this.getInitialState();
        return _this;
    }
    Subscription.prototype.componentDidMount = function () {
        this.startSubscription();
    };
    Subscription.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        var nextClient = Object(_component_utils__WEBPACK_IMPORTED_MODULE_2__["getClient"])(nextProps, nextContext);
        if (shallowEqual(this.props.variables, nextProps.variables) &&
            this.client === nextClient &&
            this.props.subscription === nextProps.subscription) {
            return;
        }
        var shouldResubscribe = nextProps.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.props, nextProps);
        }
        var shouldNotResubscribe = shouldResubscribe === false;
        if (this.client !== nextClient) {
            this.client = nextClient;
        }
        if (!shouldNotResubscribe) {
            this.endSubscription();
            delete this.queryObservable;
            this.initialize(nextProps);
            this.startSubscription();
            this.setState(this.getInitialState());
            return;
        }
        this.initialize(nextProps);
        this.startSubscription();
    };
    Subscription.prototype.componentWillUnmount = function () {
        this.endSubscription();
    };
    Subscription.prototype.render = function () {
        var renderFn = this.props.children;
        if (!renderFn)
            return null;
        var result = Object.assign({}, this.state, {
            variables: this.props.variables,
        });
        return renderFn(result);
    };
    Subscription.contextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    };
    Subscription.propTypes = {
        subscription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
        variables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        onSubscriptionData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
        shouldResubscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
    };
    return Subscription;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (Subscription);
//# sourceMappingURL=Subscriptions.js.map

/***/ }),

/***/ "./node_modules/react-apollo/browser.js":
/*!**********************************************!*\
  !*** ./node_modules/react-apollo/browser.js ***!
  \**********************************************/
/*! exports provided: getDataFromTree, ApolloConsumer, ApolloProvider, Query, Mutation, Subscription, graphql, withApollo, compose, walkTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDataFromTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree */ "./node_modules/react-apollo/getDataFromTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _getDataFromTree__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walkTree", function() { return _getDataFromTree__WEBPACK_IMPORTED_MODULE_0__["walkTree"]; });

/* harmony import */ var _ApolloConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApolloConsumer */ "./node_modules/react-apollo/ApolloConsumer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _ApolloConsumer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _ApolloProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloProvider */ "./node_modules/react-apollo/ApolloProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _ApolloProvider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Query */ "./node_modules/react-apollo/Query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _Query__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Mutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Mutation */ "./node_modules/react-apollo/Mutation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return _Mutation__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Subscriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Subscriptions */ "./node_modules/react-apollo/Subscriptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _Subscriptions__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql */ "./node_modules/react-apollo/graphql.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return _graphql__WEBPACK_IMPORTED_MODULE_6__["graphql"]; });

/* harmony import */ var _withApollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withApollo */ "./node_modules/react-apollo/withApollo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return _withApollo__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* empty/unused harmony star reexport *//* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/flowRight */ "lodash/flowRight");
/* harmony import */ var lodash_flowRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_flowRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return lodash_flowRight__WEBPACK_IMPORTED_MODULE_8___default.a; });
















//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/react-apollo/component-utils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-apollo/component-utils.js ***!
  \******************************************************/
/*! exports provided: getClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClient", function() { return getClient; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "invariant");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);

function getClient(props, context) {
    var client = props.client || context.client;
    invariant__WEBPACK_IMPORTED_MODULE_0___default()(!!client, 'Could not find "client" in the context or passed in as a prop. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ' +
        'ApolloClient instance in via props.');
    return client;
}
//# sourceMappingURL=component-utils.js.map

/***/ }),

/***/ "./node_modules/react-apollo/getDataFromTree.js":
/*!******************************************************!*\
  !*** ./node_modules/react-apollo/getDataFromTree.js ***!
  \******************************************************/
/*! exports provided: walkTree, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkTree", function() { return walkTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getDataFromTree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getProps(element) {
    return element.props || element.attributes;
}
function isReactElement(element) {
    return !!element.type;
}
function isComponentClass(Comp) {
    return Comp.prototype && (Comp.prototype.render || Comp.prototype.isReactComponent);
}
function providesChildContext(instance) {
    return !!instance.getChildContext;
}
function walkTree(element, context, visitor) {
    if (Array.isArray(element)) {
        element.forEach(function (item) { return walkTree(item, context, visitor); });
        return;
    }
    if (!element) {
        return;
    }
    if (isReactElement(element)) {
        if (typeof element.type === 'function') {
            var Comp = element.type;
            var props = Object.assign({}, Comp.defaultProps, getProps(element));
            var childContext_1 = context;
            var child = void 0;
            if (isComponentClass(Comp)) {
                var instance_1 = new Comp(props, context);
                Object.defineProperty(instance_1, 'props', {
                    value: instance_1.props || props,
                });
                instance_1.context = instance_1.context || context;
                instance_1.state = instance_1.state || null;
                instance_1.setState = function (newState) {
                    if (typeof newState === 'function') {
                        newState = newState(instance_1.state, instance_1.props, instance_1.context);
                    }
                    instance_1.state = Object.assign({}, instance_1.state, newState);
                };
                if (Comp.getDerivedStateFromProps) {
                    var result = Comp.getDerivedStateFromProps(instance_1.props, instance_1.state);
                    if (result !== null) {
                        instance_1.state = Object.assign({}, instance_1.state, result);
                    }
                }
                else if (instance_1.UNSAFE_componentWillMount) {
                    instance_1.UNSAFE_componentWillMount();
                }
                else if (instance_1.componentWillMount) {
                    instance_1.componentWillMount();
                }
                if (providesChildContext(instance_1)) {
                    childContext_1 = Object.assign({}, context, instance_1.getChildContext());
                }
                if (visitor(element, instance_1, context, childContext_1) === false) {
                    return;
                }
                child = instance_1.render();
            }
            else {
                if (visitor(element, null, context) === false) {
                    return;
                }
                child = Comp(props, context);
            }
            if (child) {
                if (Array.isArray(child)) {
                    child.forEach(function (item) { return walkTree(item, childContext_1, visitor); });
                }
                else {
                    walkTree(child, childContext_1, visitor);
                }
            }
        }
        else if (element.type._context || element.type.Consumer) {
            if (visitor(element, null, context) === false) {
                return;
            }
            var child = void 0;
            if (element.type._context) {
                element.type._context._currentValue = element.props.value;
                child = element.props.children;
            }
            else {
                child = element.props.children(element.type._currentValue);
            }
            if (child) {
                if (Array.isArray(child)) {
                    child.forEach(function (item) { return walkTree(item, context, visitor); });
                }
                else {
                    walkTree(child, context, visitor);
                }
            }
        }
        else {
            if (visitor(element, null, context) === false) {
                return;
            }
            if (element.props && element.props.children) {
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(element.props.children, function (child) {
                    if (child) {
                        walkTree(child, context, visitor);
                    }
                });
            }
        }
    }
    else if (typeof element === 'string' || typeof element === 'number') {
        visitor(element, null, context);
    }
}
function hasFetchDataFunction(instance) {
    return typeof instance.fetchData === 'function';
}
function isPromise(promise) {
    return typeof promise.then === 'function';
}
function getPromisesFromTree(_a) {
    var rootElement = _a.rootElement, _b = _a.rootContext, rootContext = _b === void 0 ? {} : _b;
    var promises = [];
    walkTree(rootElement, rootContext, function (_, instance, context, childContext) {
        if (instance && hasFetchDataFunction(instance)) {
            var promise = instance.fetchData();
            if (isPromise(promise)) {
                promises.push({ promise: promise, context: childContext || context, instance: instance });
                return false;
            }
        }
    });
    return promises;
}
function getDataAndErrorsFromTree(rootElement, rootContext, storeError) {
    if (rootContext === void 0) { rootContext = {}; }
    var promises = getPromisesFromTree({ rootElement: rootElement, rootContext: rootContext });
    if (!promises.length) {
        return Promise.resolve();
    }
    var mappedPromises = promises.map(function (_a) {
        var promise = _a.promise, context = _a.context, instance = _a.instance;
        return promise
            .then(function (_) { return getDataAndErrorsFromTree(instance.render(), context, storeError); })
            .catch(function (e) { return storeError(e); });
    });
    return Promise.all(mappedPromises);
}
function processErrors(errors) {
    switch (errors.length) {
        case 0:
            break;
        case 1:
            throw errors.pop();
        default:
            var wrapperError = new Error(errors.length + " errors were thrown when executing your fetchData functions.");
            wrapperError.queryErrors = errors;
            throw wrapperError;
    }
}
function getDataFromTree(rootElement, rootContext) {
    if (rootContext === void 0) { rootContext = {}; }
    var errors = [];
    var storeError = function (error) { return errors.push(error); };
    return getDataAndErrorsFromTree(rootElement, rootContext, storeError).then(function (_) {
        return processErrors(errors);
    });
}
//# sourceMappingURL=getDataFromTree.js.map

/***/ }),

/***/ "./node_modules/react-apollo/graphql.js":
/*!**********************************************!*\
  !*** ./node_modules/react-apollo/graphql.js ***!
  \**********************************************/
/*! exports provided: graphql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./node_modules/react-apollo/parser.js");
/* harmony import */ var _query_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-hoc */ "./node_modules/react-apollo/query-hoc.js");
/* harmony import */ var _mutation_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation-hoc */ "./node_modules/react-apollo/mutation-hoc.js");
/* harmony import */ var _subscription_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription-hoc */ "./node_modules/react-apollo/subscription-hoc.js");




function graphql(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    switch (Object(_parser__WEBPACK_IMPORTED_MODULE_0__["parser"])(document).type) {
        case _parser__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation:
            return Object(_mutation_hoc__WEBPACK_IMPORTED_MODULE_2__["mutation"])(document, operationOptions);
        case _parser__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Subscription:
            return Object(_subscription_hoc__WEBPACK_IMPORTED_MODULE_3__["subscribe"])(document, operationOptions);
        case _parser__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Query:
        default:
            return Object(_query_hoc__WEBPACK_IMPORTED_MODULE_1__["query"])(document, operationOptions);
    }
}
//# sourceMappingURL=graphql.js.map

/***/ }),

/***/ "./node_modules/react-apollo/hoc-utils.js":
/*!************************************************!*\
  !*** ./node_modules/react-apollo/hoc-utils.js ***!
  \************************************************/
/*! exports provided: defaultMapPropsToOptions, defaultMapResultToProps, defaultMapPropsToSkip, getDisplayName, calculateVariablesFromProps, GraphQLBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMapPropsToOptions", function() { return defaultMapPropsToOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMapResultToProps", function() { return defaultMapResultToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMapPropsToSkip", function() { return defaultMapPropsToSkip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateVariablesFromProps", function() { return calculateVariablesFromProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLBase", function() { return GraphQLBase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./node_modules/react-apollo/parser.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var invariant = __webpack_require__(/*! invariant */ "invariant");

var defaultMapPropsToOptions = function () { return ({}); };
var defaultMapResultToProps = function (props) { return props; };
var defaultMapPropsToSkip = function () { return false; };
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function calculateVariablesFromProps(operation, props, graphQLDisplayName, wrapperName) {
    var variables = {};
    for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
        var _b = _a[_i], variable = _b.variable, type = _b.type;
        if (!variable.name || !variable.name.value)
            continue;
        var variableName = variable.name.value;
        var variableProp = props[variableName];
        if (typeof variableProp !== 'undefined') {
            variables[variableName] = variableProp;
            continue;
        }
        if (type.kind !== 'NonNullType') {
            variables[variableName] = null;
            continue;
        }
        if (operation.type === _parser__WEBPACK_IMPORTED_MODULE_1__["DocumentType"].Mutation)
            return;
        invariant(typeof variableProp !== 'undefined', "The operation '" + operation.name + "' wrapping '" + wrapperName + "' " +
            ("is expecting a variable: '" + variable.name.value + "' but it was not found in the props ") +
            ("passed to '" + graphQLDisplayName + "'"));
    }
    return variables;
}
var GraphQLBase = (function (_super) {
    __extends(GraphQLBase, _super);
    function GraphQLBase(props) {
        var _this = _super.call(this, props) || this;
        _this.withRef = false;
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
        return _this;
    }
    GraphQLBase.prototype.getWrappedInstance = function () {
        invariant(this.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
        return this.wrappedInstance;
    };
    GraphQLBase.prototype.setWrappedInstance = function (ref) {
        this.wrappedInstance = ref;
    };
    return GraphQLBase;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

//# sourceMappingURL=hoc-utils.js.map

/***/ }),

/***/ "./node_modules/react-apollo/index.js":
/*!********************************************!*\
  !*** ./node_modules/react-apollo/index.js ***!
  \********************************************/
/*! exports provided: renderToStringWithData, getDataFromTree, ApolloConsumer, ApolloProvider, Query, Mutation, Subscription, graphql, withApollo, compose, walkTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser */ "./node_modules/react-apollo/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["getDataFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["Mutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["Subscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["graphql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["withApollo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walkTree", function() { return _browser__WEBPACK_IMPORTED_MODULE_0__["walkTree"]; });

/* harmony import */ var _renderToStringWithData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderToStringWithData */ "./node_modules/react-apollo/renderToStringWithData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return _renderToStringWithData__WEBPACK_IMPORTED_MODULE_1__["renderToStringWithData"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-apollo/mutation-hoc.js":
/*!***************************************************!*\
  !*** ./node_modules/react-apollo/mutation-hoc.js ***!
  \***************************************************/
/*! exports provided: mutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutation", function() { return mutation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./node_modules/react-apollo/parser.js");
/* harmony import */ var _Mutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mutation */ "./node_modules/react-apollo/Mutation.js");
/* harmony import */ var _hoc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoc-utils */ "./node_modules/react-apollo/hoc-utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");



function mutation(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? _hoc_utils__WEBPACK_IMPORTED_MODULE_3__["defaultMapPropsToOptions"] : _a, _b = operationOptions.alias, alias = _b === void 0 ? 'Apollo' : _b;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            __extends(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var props = this.props;
                var opts = mapPropsToOptions(props);
                if (operationOptions.withRef) {
                    this.withRef = true;
                    props = Object.assign({}, props, {
                        ref: this.setWrappedInstance,
                    });
                }
                if (!opts.variables && operation.variables.length > 0) {
                    opts.variables = Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["calculateVariablesFromProps"])(operation, props, graphQLDisplayName, Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(WrappedComponent));
                }
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mutation__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({}, opts, { mutation: document, ignoreResults: true }), function (mutate, _result) {
                    var _a, _b;
                    var name = operationOptions.name || 'mutate';
                    var childProps = (_a = {}, _a[name] = mutate, _a);
                    if (operationOptions.props) {
                        var newResult = (_b = {},
                            _b[name] = mutate,
                            _b.ownProps = props,
                            _b);
                        childProps = operationOptions.props(newResult);
                    }
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["GraphQLBase"]));
        return hoistNonReactStatics(GraphQL, WrappedComponent, {});
    };
}
//# sourceMappingURL=mutation-hoc.js.map

/***/ }),

/***/ "./node_modules/react-apollo/parser.js":
/*!*********************************************!*\
  !*** ./node_modules/react-apollo/parser.js ***!
  \*********************************************/
/*! exports provided: DocumentType, parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
var invariant = __webpack_require__(/*! invariant */ "invariant");
var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
var cache = new Map();
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    invariant(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'query'; });
    var mutations = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'mutation'; });
    var subscriptions = document.definitions.filter(function (x) { return x.kind === 'OperationDefinition' && x.operation === 'subscription'; });
    invariant(!fragments.length || (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well");
    invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        (document + " had " + queries.length + " queries, " + subscriptions.length + " ") +
        ("subscriptions and " + mutations.length + " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
    invariant(definitions.length === 1, "react-apollo only supports one defintion per HOC. " + document + " had " +
        (definitions.length + " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/react-apollo/query-hoc.js":
/*!************************************************!*\
  !*** ./node_modules/react-apollo/query-hoc.js ***!
  \************************************************/
/*! exports provided: query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./node_modules/react-apollo/parser.js");
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Query */ "./node_modules/react-apollo/Query.js");
/* harmony import */ var _hoc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoc-utils */ "./node_modules/react-apollo/hoc-utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

var hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");



function query(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? _hoc_utils__WEBPACK_IMPORTED_MODULE_3__["defaultMapPropsToOptions"] : _a, _b = operationOptions.skip, skip = _b === void 0 ? _hoc_utils__WEBPACK_IMPORTED_MODULE_3__["defaultMapPropsToSkip"] : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function') {
        mapPropsToOptions = function () { return options; };
    }
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function') {
        mapPropsToSkip = function () { return skip; };
    }
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            __extends(GraphQL, _super);
            function GraphQL() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip ? Object.create(null) : __assign({}, mapPropsToOptions(props));
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["calculateVariablesFromProps"])(operation, props, graphQLDisplayName, Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(WrappedComponent));
                }
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Query__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, query: document, warnUnhandledError: true }), function (_a) {
                    var _ = _a.client, data = _a.data, r = __rest(_a, ["client", "data"]);
                    var _b, _c;
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance,
                        });
                    }
                    if (shouldSkip)
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, props));
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["GraphQLBase"]));
        return hoistNonReactStatics(GraphQL, WrappedComponent, {});
    };
}
//# sourceMappingURL=query-hoc.js.map

/***/ }),

/***/ "./node_modules/react-apollo/renderToStringWithData.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-apollo/renderToStringWithData.js ***!
  \*************************************************************/
/*! exports provided: renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getDataFromTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDataFromTree */ "./node_modules/react-apollo/getDataFromTree.js");


function renderToStringWithData(component) {
    return Object(_getDataFromTree__WEBPACK_IMPORTED_MODULE_1__["default"])(component).then(function () { return react_dom_server__WEBPACK_IMPORTED_MODULE_0___default.a.renderToString(component); });
}
//# sourceMappingURL=renderToStringWithData.js.map

/***/ }),

/***/ "./node_modules/react-apollo/subscription-hoc.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-apollo/subscription-hoc.js ***!
  \*******************************************************/
/*! exports provided: subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser */ "./node_modules/react-apollo/parser.js");
/* harmony import */ var _Subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscriptions */ "./node_modules/react-apollo/Subscriptions.js");
/* harmony import */ var _hoc_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoc-utils */ "./node_modules/react-apollo/hoc-utils.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

var hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");



function subscribe(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var operation = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["parser"])(document);
    var _a = operationOptions.options, options = _a === void 0 ? _hoc_utils__WEBPACK_IMPORTED_MODULE_3__["defaultMapPropsToOptions"] : _a, _b = operationOptions.skip, skip = _b === void 0 ? _hoc_utils__WEBPACK_IMPORTED_MODULE_3__["defaultMapPropsToSkip"] : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c, shouldResubscribe = operationOptions.shouldResubscribe;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function')
        mapPropsToSkip = function () { return skip; };
    var lastResultProps;
    return function (WrappedComponent) {
        var graphQLDisplayName = alias + "(" + Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            __extends(GraphQL, _super);
            function GraphQL(props) {
                var _this = _super.call(this, props) || this;
                _this.state = { resubscribe: false };
                return _this;
            }
            GraphQL.prototype.componentWillReceiveProps = function (nextProps) {
                if (!shouldResubscribe)
                    return;
                this.setState({
                    resubscribe: shouldResubscribe(this.props, nextProps),
                });
            };
            GraphQL.prototype.render = function () {
                var _this = this;
                var props = this.props;
                var shouldSkip = mapPropsToSkip(props);
                var opts = shouldSkip ? Object.create(null) : mapPropsToOptions(props);
                if (!shouldSkip && !opts.variables && operation.variables.length > 0) {
                    opts.variables = Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["calculateVariablesFromProps"])(operation, props, graphQLDisplayName, Object(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["getDisplayName"])(WrappedComponent));
                }
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Subscriptions__WEBPACK_IMPORTED_MODULE_2__["default"], __assign({}, opts, { displayName: graphQLDisplayName, skip: shouldSkip, subscription: document, shouldResubscribe: this.state.resubscribe }), function (_a) {
                    var data = _a.data, r = __rest(_a, ["data"]);
                    var _b, _c;
                    if (operationOptions.withRef) {
                        _this.withRef = true;
                        props = Object.assign({}, props, {
                            ref: _this.setWrappedInstance,
                        });
                    }
                    if (shouldSkip)
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, props));
                    var result = Object.assign(r, data || {});
                    var name = operationOptions.name || 'data';
                    var childProps = (_b = {}, _b[name] = result, _b);
                    if (operationOptions.props) {
                        var newResult = (_c = {},
                            _c[name] = result,
                            _c.ownProps = props,
                            _c);
                        lastResultProps = operationOptions.props(newResult, lastResultProps);
                        childProps = lastResultProps;
                    }
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, props, childProps));
                }));
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            return GraphQL;
        }(_hoc_utils__WEBPACK_IMPORTED_MODULE_3__["GraphQLBase"]));
        return hoistNonReactStatics(GraphQL, WrappedComponent, {});
    };
}
//# sourceMappingURL=subscription-hoc.js.map

/***/ }),

/***/ "./node_modules/react-apollo/withApollo.js":
/*!*************************************************!*\
  !*** ./node_modules/react-apollo/withApollo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApolloConsumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApolloConsumer */ "./node_modules/react-apollo/ApolloConsumer.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var invariant = __webpack_require__(/*! invariant */ "invariant");
var hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withApollo(WrappedComponent, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var withDisplayName = "withApollo(" + getDisplayName(WrappedComponent) + ")";
    var WithApollo = (function (_super) {
        __extends(WithApollo, _super);
        function WithApollo(props) {
            var _this = _super.call(this, props) || this;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            return _this;
        }
        WithApollo.prototype.getWrappedInstance = function () {
            invariant(operationOptions.withRef, "To access the wrapped instance, you need to specify " + "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        WithApollo.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        WithApollo.prototype.render = function () {
            var _this = this;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApolloConsumer__WEBPACK_IMPORTED_MODULE_1__["default"], null, function (client) {
                var props = Object.assign({}, _this.props, {
                    client: client,
                    ref: operationOptions.withRef ? _this.setWrappedInstance : undefined,
                });
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, __assign({}, props));
            }));
        };
        WithApollo.displayName = withDisplayName;
        WithApollo.WrappedComponent = WrappedComponent;
        return WithApollo;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
    return hoistNonReactStatics(WithApollo, WrappedComponent, {});
}
//# sourceMappingURL=withApollo.js.map

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Items */ "./components/Items.js");
/* harmony import */ var _node_modules_react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/react-apollo */ "./node_modules/react-apollo/index.js");
var _jsxFileName = "/Users/jamesgood/Desktop/dev-learning/web-dev-learning/wes-bos-graphql/sick-fits/frontend/pages/index.js";




var Home = function Home(_ref) {
  var query = _ref.query;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Items__WEBPACK_IMPORTED_MODULE_1__["default"], {
    page: parseFloat(query.page) || 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/items.js":
/*!************************!*\
  !*** ./pages/items.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./pages/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/items.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/items.js */"./pages/items.js");


/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "fbjs/lib/shallowEqual":
/*!****************************************!*\
  !*** external "fbjs/lib/shallowEqual" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/shallowEqual");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "lodash/flowRight":
/*!***********************************!*\
  !*** external "lodash/flowRight" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/flowRight");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=items.js.map