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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenSans-Regular.ttf */ "./src/OpenSans-Regular.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_OpenSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Style page content */\n\n@font-face {\n\tfont-family: \"OpenSans\";\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.main {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tmargin-left: 300px; /* Same as the width of the sidebar */\n\tpadding-left: 40px;\n}\n\nul {\n\tpadding: 0;\n\tlist-style-type: none;\n}\n\n/* The sidebar menu */\n.sideNav {\n\theight: 100%; /* Full-height: remove this if you want \"auto\" height */\n\twidth: 300px; /* Set the width of the sidebar */\n\tposition: fixed; /* Fixed Sidebar (stay in place on scroll) */\n\tz-index: 1; /* Stay on top */\n\ttop: 0; /* Stay at the top */\n\tleft: 0;\n\tbackground-color: #fafafa;\n\tcolor: #aaaaaa;\n\toverflow-x: hidden; /* Disable horizontal scroll */\n\tmargin-top: 45px;\n}\n\n.sideNavHeader {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tpadding: 6px 8px 6px 16px;\n\ttext-decoration: none;\n\tfont-size: 20px;\n\tcolor: #333333;\n\tdisplay: block;\n}\n\n.sideNavLinks {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tpadding: 6px 8px 6px 16px;\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tcolor: #333333;\n\tdisplay: block;\n}\n\n.sideNavLinks:hover {\n\tbackground-color: #ececec;\n}\n\n.topNav {\n\tbackground-color: #ff9000;\n\tpadding: 0px;\n\theight: 45px;\n\toverflow: hidden;\n}\n\n.topNav a {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tfloat: left;\n\tcolor: #fff9ca;\n\ttext-align: center;\n\tpadding: 14px 16px;\n\ttext-decoration: none;\n\tfont-size: 17px;\n}\n\n.topNav a:hover {\n\tbackground-color: #ffa633;\n}\n\n.todoItemList {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-right: 40px;\n\tlist-style-type: none;\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\ttext-decoration: none;\n\tpadding: 7px;\n\tborder-top: 1px solid #cccccc;\n\tfont-size: 14px;\n}\n\n.todoItemList:hover {\n\tbackground-color: #bebebe49;\n}\n\n.todoItemListHeader {\n\tmargin-right: 40px;\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tpadding: 5px;\n\tfont-size: 20px;\n}\n\n/* Project Display remove todo button */\n.remove-todo {\n\tpadding: 0;\n\tmargin: 0;\n\tcolor: #aaa;\n\talign-items: right;\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.remove-todo:hover,\n.remove-todo:focus {\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n/* Modal todo information styles */\n\n.modal {\n\tdisplay: block; /* Hidden by default */\n\tposition: fixed; /* Stay in place */\n\tz-index: 1; /* Sit on top */\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%; /* Full width */\n\theight: 100%; /* Full height */\n\toverflow: auto; /* Enable scroll if needed */\n\tbackground-color: rgb(0, 0, 0); /* Fallback color */\n\tbackground-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n\tbackground-color: #fefefe;\n\tmargin: 15% auto; /* 15% from the top and centered */\n\tpadding: 20px;\n\tborder: 1px solid #888;\n\twidth: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n\tcolor: #aaa;\n\tfloat: right;\n\tfont-size: 28px;\n\tfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAEvB;CACC,uBAAuB;CACvB,0DAAgD;CAChD,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,SAAS;CACT,UAAU;AACX;;AAEA;CACC,uDAAuD;CACvD,kBAAkB,EAAE,qCAAqC;CACzD,kBAAkB;AACnB;;AAEA;CACC,UAAU;CACV,qBAAqB;AACtB;;AAEA,qBAAqB;AACrB;CACC,YAAY,EAAE,uDAAuD;CACrE,YAAY,EAAE,iCAAiC;CAC/C,eAAe,EAAE,4CAA4C;CAC7D,UAAU,EAAE,gBAAgB;CAC5B,MAAM,EAAE,oBAAoB;CAC5B,OAAO;CACP,yBAAyB;CACzB,cAAc;CACd,kBAAkB,EAAE,8BAA8B;CAClD,gBAAgB;AACjB;;AAEA;CACC,uDAAuD;CACvD,yBAAyB;CACzB,qBAAqB;CACrB,eAAe;CACf,cAAc;CACd,cAAc;AACf;;AAEA;CACC,uDAAuD;CACvD,yBAAyB;CACzB,qBAAqB;CACrB,eAAe;CACf,cAAc;CACd,cAAc;AACf;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;CACzB,YAAY;CACZ,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,uDAAuD;CACvD,WAAW;CACX,cAAc;CACd,kBAAkB;CAClB,kBAAkB;CAClB,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,kBAAkB;CAClB,qBAAqB;CACrB,uDAAuD;CACvD,qBAAqB;CACrB,YAAY;CACZ,6BAA6B;CAC7B,eAAe;AAChB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,kBAAkB;CAClB,uDAAuD;CACvD,YAAY;CACZ,eAAe;AAChB;;AAEA,uCAAuC;AACvC;CACC,UAAU;CACV,SAAS;CACT,WAAW;CACX,kBAAkB;CAClB,eAAe;CACf,iBAAiB;AAClB;;AAEA;;CAEC,YAAY;CACZ,qBAAqB;CACrB,eAAe;AAChB;;AAEA,kCAAkC;;AAElC;CACC,cAAc,EAAE,sBAAsB;CACtC,eAAe,EAAE,kBAAkB;CACnC,UAAU,EAAE,eAAe;CAC3B,OAAO;CACP,MAAM;CACN,WAAW,EAAE,eAAe;CAC5B,YAAY,EAAE,gBAAgB;CAC9B,cAAc,EAAE,4BAA4B;CAC5C,8BAA8B,EAAE,mBAAmB;CACnD,oCAAoC,EAAE,qBAAqB;AAC5D;;AAEA,sBAAsB;AACtB;CACC,yBAAyB;CACzB,gBAAgB,EAAE,kCAAkC;CACpD,aAAa;CACb,sBAAsB;CACtB,UAAU,EAAE,oDAAoD;AACjE;;AAEA,qBAAqB;AACrB;CACC,WAAW;CACX,YAAY;CACZ,eAAe;CACf,iBAAiB;AAClB;;AAEA;;CAEC,YAAY;CACZ,qBAAqB;CACrB,eAAe;AAChB","sourcesContent":["/* Style page content */\n\n@font-face {\n\tfont-family: \"OpenSans\";\n\tsrc: url(\"./OpenSans-Regular.ttf\") format(\"ttf\");\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.main {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tmargin-left: 300px; /* Same as the width of the sidebar */\n\tpadding-left: 40px;\n}\n\nul {\n\tpadding: 0;\n\tlist-style-type: none;\n}\n\n/* The sidebar menu */\n.sideNav {\n\theight: 100%; /* Full-height: remove this if you want \"auto\" height */\n\twidth: 300px; /* Set the width of the sidebar */\n\tposition: fixed; /* Fixed Sidebar (stay in place on scroll) */\n\tz-index: 1; /* Stay on top */\n\ttop: 0; /* Stay at the top */\n\tleft: 0;\n\tbackground-color: #fafafa;\n\tcolor: #aaaaaa;\n\toverflow-x: hidden; /* Disable horizontal scroll */\n\tmargin-top: 45px;\n}\n\n.sideNavHeader {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tpadding: 6px 8px 6px 16px;\n\ttext-decoration: none;\n\tfont-size: 20px;\n\tcolor: #333333;\n\tdisplay: block;\n}\n\n.sideNavLinks {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tpadding: 6px 8px 6px 16px;\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tcolor: #333333;\n\tdisplay: block;\n}\n\n.sideNavLinks:hover {\n\tbackground-color: #ececec;\n}\n\n.topNav {\n\tbackground-color: #ff9000;\n\tpadding: 0px;\n\theight: 45px;\n\toverflow: hidden;\n}\n\n.topNav a {\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tfloat: left;\n\tcolor: #fff9ca;\n\ttext-align: center;\n\tpadding: 14px 16px;\n\ttext-decoration: none;\n\tfont-size: 17px;\n}\n\n.topNav a:hover {\n\tbackground-color: #ffa633;\n}\n\n.todoItemList {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-right: 40px;\n\tlist-style-type: none;\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\ttext-decoration: none;\n\tpadding: 7px;\n\tborder-top: 1px solid #cccccc;\n\tfont-size: 14px;\n}\n\n.todoItemList:hover {\n\tbackground-color: #bebebe49;\n}\n\n.todoItemListHeader {\n\tmargin-right: 40px;\n\tfont-family: \"Lucida Sans\", Geneva, Verdana, sans-serif;\n\tpadding: 5px;\n\tfont-size: 20px;\n}\n\n/* Project Display remove todo button */\n.remove-todo {\n\tpadding: 0;\n\tmargin: 0;\n\tcolor: #aaa;\n\talign-items: right;\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.remove-todo:hover,\n.remove-todo:focus {\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n/* Modal todo information styles */\n\n.modal {\n\tdisplay: block; /* Hidden by default */\n\tposition: fixed; /* Stay in place */\n\tz-index: 1; /* Sit on top */\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%; /* Full width */\n\theight: 100%; /* Full height */\n\toverflow: auto; /* Enable scroll if needed */\n\tbackground-color: rgb(0, 0, 0); /* Fallback color */\n\tbackground-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n\tbackground-color: #fefefe;\n\tmargin: 15% auto; /* 15% from the top and centered */\n\tpadding: 20px;\n\tborder: 1px solid #888;\n\twidth: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button */\n.close {\n\tcolor: #aaa;\n\tfloat: right;\n\tfont-size: 28px;\n\tfont-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n\tcolor: black;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
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

module.exports = getTarget;

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

/***/ "./src/OpenSans-Regular.ttf":
/*!**********************************!*\
  !*** ./src/OpenSans-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b0809d519837cb7aad3.ttf";

/***/ }),

/***/ "./src/displayHomePage.js":
/*!********************************!*\
  !*** ./src/displayHomePage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "inputTask": () => (/* binding */ inputTask),
/* harmony export */   "inputProject": () => (/* binding */ inputProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject */ "./src/displayProject.js");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const homePage = (() => {
	// Initiate local storage
	
	// home page extra information display
	let content = document.createElement("div");
	content.id = "content";
	content.classList.add("main");

	let topNavBar = document.createElement("div");
	topNavBar.classList.add("topNav");

	let logo = document.createElement("a");
	logo.innerHTML = "Trellist";

	let addTask = document.createElement("a");
	addTask.innerHTML = "Add Task";
	addTask.addEventListener("click", () => {
		// Project add todo item DOM element which then calls the project add todo item event
		inputTask();
		console.log("Project add todo item");
	});

	let sideNavBar = document.createElement("div");
	sideNavBar.classList.add("sideNav");

	let projectNavTitle = document.createElement("h3");
	projectNavTitle.innerHTML = "Projects";
	projectNavTitle.classList.add("sideNavHeader");

	let projectNavList = document.createElement("div");
	projectNavList.id = "projectNavList";

	let addProject = document.createElement("a");
	addProject.classList.add("sideNavLinks");
	addProject.innerHTML = "Add Project";
	addProject.addEventListener("click", () => {
		// Calls new DOM event to handle project add which then calls the new project function
		inputProject();
		console.log("Create new project");
	});

	topNavBar.append(logo, addTask);
	sideNavBar.append(projectNavTitle, projectNavList, addProject);
	document.body.append(topNavBar, sideNavBar, content);

	
})();

const inputTask = () => {
	// creates DOM elements which can take inputs for new task which can then call todo item functions
	let content = document.getElementById("content");

	let titleInput = document.createElement("input");
	titleInput.id = "titleInput";
	titleInput.type = "text";
	titleInput.placeholder = "Task name";

	let selectProjectMenu = document.createElement("select");
	selectProjectMenu.id = "selectProjectMenu";
	selectProjectMenu.name = "projectSelected";

	for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList.length; i++) {
		// simplify project list output
		let selectProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList[i];
		console.log(selectProject);

		let option = document.createElement("option");
		option.innerHTML = selectProject.name;

		selectProjectMenu.append(option);
	}

	let addTaskBtn = document.createElement("button");
	addTaskBtn.innerHTML = "Add Task";
	addTaskBtn.addEventListener("click", () => {
		let selectedProjectIndex =
			document.getElementById("selectProjectMenu").selectedIndex;
		let selectedProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList[selectedProjectIndex];

		let todoItemTitle = document.getElementById("titleInput").value;

		let newTodoItem = (0,_todoItems__WEBPACK_IMPORTED_MODULE_2__.todoItem)(`${todoItemTitle}`);
		selectedProject.addTodoItem(newTodoItem);

		(0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProject)(selectedProject);
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList);
	});

	content.append(titleInput, selectProjectMenu, addTaskBtn);
};

const inputProject = () => {
	// creates DOM elements which can take inputs for new project to call new project function
	let content = document.getElementById("content");
	let inputProjectDiv = document.createElement("div");

	let projectTitleInput = document.createElement("input");
	projectTitleInput.id = "projectTitleInput";
	projectTitleInput.type = "text";
	projectTitleInput.placeholder = "New Project Name";

	let addProjectBtn = document.createElement("button");
	addProjectBtn.innerHTML = "Create New Project";
	addProjectBtn.addEventListener("click", () => {
		console.log(projectTitleInput.value);
		let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.project)(`${projectTitleInput.value}`);
		console.log(newProject);
		_project__WEBPACK_IMPORTED_MODULE_0__.projectList.addProject(newProject);
		console.log(_project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList);
		(0,_displayProject__WEBPACK_IMPORTED_MODULE_1__.displayProjectNames)();
		inputProjectDiv.innerHTML = "";
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(_project__WEBPACK_IMPORTED_MODULE_0__.projectList.projectList);
		return newProject;
	});

	inputProjectDiv.append(projectTitleInput, addProjectBtn);
	content.append(inputProjectDiv);
};




/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProject": () => (/* binding */ displayProject),
/* harmony export */   "displayProjectNames": () => (/* binding */ displayProjectNames)
/* harmony export */ });
/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTodoItem */ "./src/displayTodoItem.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// displays individual projects on page
const displayProject = function (project) {
	const todoItemList = document.createElement("ul");

	const content = document.getElementById("content");

	// clear content
	content.innerHTML = "";

	let projectName = document.createElement("h2");
	projectName.classList.add("todoItemListHeader");
	projectName.innerHTML = project.name;

	for (let i = 0; i < project.projectList.length; i++) {
		let todoItem = project.projectList[i];
		let todoItemDiv = document.createElement("li");
		todoItemDiv.classList.add("todoItemList");

		todoItemDiv.onclick = function () {
			// calls more information to the page in form of modal which can then be edited
			(0,_displayTodoItem__WEBPACK_IMPORTED_MODULE_0__.todoPage)(todoItem);
		};

		let todoItemMainInfo = document.createElement("div");

		let todoTitle = document.createElement("div");
		todoTitle.innerHTML = todoItem.title;

		// Make it check if there is scheduled date: if scheduled display date, if not then display button to schedule task
		let todoDueDate = document.createElement("div");
		if (todoItem.dueDate == null) {
			todoItemMainInfo.append(todoTitle);
			console.log("no due date");
		} else {
			todoDueDate.innerHTML = todoItem.dueDate;
			todoItemMainInfo.append(todoTitle, todoDueDate);
		}

		const removeTodoBtn = document.createElement("span");
		removeTodoBtn.innerHTML = "&times;";
		removeTodoBtn.classList.add("remove-todo");

		removeTodoBtn.onclick = function () {
			project.removeTodoItem(`${i}`);
			displayProject(project);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.updateStorage)(_project__WEBPACK_IMPORTED_MODULE_1__.projectList.projectList);
		};

		todoItemDiv.append(todoItemMainInfo, removeTodoBtn);

		todoItemList.append(todoItemDiv);
	}
	content.append(projectName, todoItemList);

	return content;
};

const displayProjectNames = function () {
	let getProjectList = _project__WEBPACK_IMPORTED_MODULE_1__.projectList.projectList;

	let displayProjectListDiv = document.getElementById("projectNavList");
	// clears project list
	displayProjectListDiv.innerHTML = "";

	let displayProjectList = document.createElement("ul");

	for (let i = 0; i < getProjectList.length; i++) {
		let currentProject = getProjectList[i];
		console.log(currentProject);
		let displayProjectName = document.createElement("li");
		displayProjectName.classList.add("sideNavLinks");
		displayProjectName.innerHTML = currentProject.getName();
		displayProjectName.onclick = function () {
			displayProject(currentProject);
		};
		displayProjectList.appendChild(displayProjectName);
		console.log(displayProjectName);
	}
	console.log(displayProjectList);
	displayProjectListDiv.appendChild(displayProjectList);
	return displayProjectListDiv;
};




/***/ }),

/***/ "./src/displayTodoItem.js":
/*!********************************!*\
  !*** ./src/displayTodoItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoPage": () => (/* binding */ todoPage)
/* harmony export */ });
/* harmony import */ var _displayHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayHomePage */ "./src/displayHomePage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/project.js");





// Display destailed information for todo item

const todoPage = (todo) => {
	let content = document.getElementById("content");

	let detailsModal = document.createElement("div");
	detailsModal.classList.add("modal");
	let detailsModalContent = document.createElement("div");
	detailsModalContent.classList.add("modal-content");
	let spanClose = document.createElement("span");
	spanClose.innerHTML = "&times;";
	spanClose.classList.add("close");

	spanClose.onclick = () => {
		detailsModal.remove();
	};

	window.onclick = function (event) {
		if (event.target == detailsModal) {
			detailsModal.remove();
		}
	};

	let todoInformation = document.createElement("p");

	detailsModal.appendChild(detailsModalContent);
	detailsModalContent.append(spanClose, todoInformation);

	let title = document.createElement("div");
	title.id = "title";

	title.innerHTML = todo.title;
	title.onclick = function () {
		title.onclick = "";

		let editTitleDiv = document.createElement("input");
		editTitleDiv.type = "text";
		editTitleDiv.value = todo.title;

		let saveTitle = document.createElement("button");
		saveTitle.innerHTML = "Save";
		saveTitle.onclick = function () {
			let updatedTitle = editTitleDiv.value;
			console.log(updatedTitle);
			todo.editTitle(updatedTitle);
			detailsModal.remove();
			todoPage(todo);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(_project__WEBPACK_IMPORTED_MODULE_4__.projectList.projectList);

			// Find a way to reload the project list page after closing modal
		};

		let cancelTitle = document.createElement("button");
		cancelTitle.innerHTML = "Cancel";
		cancelTitle.onclick = function () {
			detailsModal.remove();
			todoPage(todo);
		};

		title.innerHTML = "";
		title.append(editTitleDiv, saveTitle, cancelTitle);
	};

	let description = document.createElement("div");
	description.innerHTML = todo.description;
	description.onclick = function () {
		description.onclick = "";

		let editDescriptionDiv = document.createElement("input");
		editDescriptionDiv.type = "text";
		editDescriptionDiv.value = todo.description;

		let saveDescription = document.createElement("button");
		saveDescription.innerHTML = "Save";
		saveDescription.onclick = function () {
			let updatedDescription = editDescriptionDiv.value;
			todo.editDescription(updatedDescription);
			detailsModal.remove();
			todoPage(todo);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(_project__WEBPACK_IMPORTED_MODULE_4__.projectList.projectList);
		};

		let cancelDescription = document.createElement("button");
		cancelDescription.innerHTML = "Cancel";
		cancelDescription.onclick = function () {
			detailsModal.remove();
			todoPage(todo);
		};

		description.innerHTML = "";
		description.append(
			editDescriptionDiv,
			saveDescription,
			cancelDescription
		);
	};

	let dueDate = document.createElement("div");
	dueDate.innerHTML = todo.dueDate;

	dueDate.onclick = function () {
		dueDate.onclick = "";

		let editDateDiv = document.createElement("input");
		editDateDiv.type = "date";
		editDateDiv.value = todo.dueDate;

		let saveDate = document.createElement("button");
		saveDate.innerHTML = "Save";
		saveDate.onclick = function () {
			let updatedDate = editDateDiv.value;
			todo.editDueDate(updatedDate);
			detailsModal.remove();
			todoPage(todo);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.updateStorage)(_project__WEBPACK_IMPORTED_MODULE_4__.projectList.projectList);
		};

		let cancelDate = document.createElement("button");
		cancelDate.innerHTML = "Cancel";
		cancelDate.onclick = function () {
			detailsModal.remove();
			todoPage(todo);
		};

		dueDate.innerHTML = "";
		dueDate.append(editDateDiv, saveDate, cancelDate);
	};

	let priority = document.createElement("div");
	priority.innerHTML = todo.priority;

	todoInformation.append(title, description, dueDate, priority);

	content.appendChild(detailsModal);

	return content;
};




/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage),
/* harmony export */   "initiateStorage": () => (/* binding */ initiateStorage)
/* harmony export */ });
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



const updateStorage = function (data) {
	const APP_DATA_KEY = "projectData";

	if (typeof data == "object") {
		data = JSON.stringify(data);
	}

	localStorage.setItem(APP_DATA_KEY, data);
};

const initiateStorage = function () {
	// Get data;
	// loop through array and create new projects;
	// loop through project lists and create new todo items
	
	const APP_DATA_KEY = "projectData";

	let data = localStorage.getItem(APP_DATA_KEY);
	

	let initialData = JSON.parse(data);
	for (let i = 0; i < initialData.length; i++) {
		let newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(initialData[i].name);
		console.log(initialData[i].name);
		console.log(newProject);
		for (let j = 0; j < initialData[i].projectList.length; j++) {
			let getTodo = initialData[i].projectList[j];
			let newTodo = (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.todoItem)(getTodo.title, getTodo.description, getTodo.dueDate, getTodo.priority);
			console.log(initialData[i].projectList[j]);
			console.log(newTodo);
			newProject.addTodoItem(newTodo);
			console.log(newProject);
		}
		console.log(newProject)
		_project__WEBPACK_IMPORTED_MODULE_1__.projectList.addProject(newProject);
	}

	console.log(_project__WEBPACK_IMPORTED_MODULE_1__.projectList.projectList);
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
// Projects where todo list items can be kept. Projects can be created and deleted. Default project created initially and todo items are auto added

const project = (name) => {
	let projectList = []; // should change to todolist

	const addTodoItem = function (item) {
		console.log(this.projectList);
		this.projectList.push(item);
	};

	const removeTodoItem = function (index) {
		console.log("removed todo item success yay!");
		console.log(`${this.projectList[index]}`);
		// remove todo item (use local storage with index of)
		this.projectList.splice(index, 1);
	};

	const getName = function () {
		return name;
	};

	return { getName, name, projectList, addTodoItem, removeTodoItem };
};

// Project list of all the projects:

const projectList = (() => {
	let projectList = [];

	const addProject = function (project) {
		this.projectList.push(project);
	};

	const getCurrentProject = function () {};

	return { projectList, addProject, getCurrentProject };
})();




/***/ }),

/***/ "./src/todoItems.js":
/*!**************************!*\
  !*** ./src/todoItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
// Creates the todo items using a factory function.

const todoItem = (title, description, dueDate, priority) => {
	// todo Item constructor

	const editTitle = function (updatedTitle) {
		this.title = updatedTitle;
		return this.title;
	};

	const editDescription = function (updatedDescription) {
		this.description = updatedDescription;
		return this.description;
	};

	const editDueDate = function (updatedDueDate) {
		this.dueDate = updatedDueDate;
		return this.dueDate;
	};

	return {
		title,
		description,
		dueDate,
		priority,
		editTitle,
		editDescription,
		editDueDate,
	};
};




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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItems */ "./src/todoItems.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _displayProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProject */ "./src/displayProject.js");
/* harmony import */ var _displayHomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayHomePage */ "./src/displayHomePage.js");
/* harmony import */ var _displayTodoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayTodoItem */ "./src/displayTodoItem.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








// let defaultProject = project("Default Project");
// projectList.addProject(defaultProject);
// console.log(defaultProject);

// let secondaryProject = project("Secondary Project");
// projectList.addProject(secondaryProject);

// const potato = todoItem(
// 	"Potato Title",
// 	"this is description",
// 	"12/04/2025",
// 	"Top priority"
// );

// const potato2 = todoItem(
// 	"Potato Title",
// 	"this is description",
// 	"12/04/2025",
// 	"Top priority"
// );

// potato.editTitle("newPotatoTitle");
// defaultProject.addTodoItem(potato);
// defaultProject.addTodoItem(potato2);
(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.initiateStorage)();
(0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProject)(_project__WEBPACK_IMPORTED_MODULE_1__.projectList.projectList[0]);
(0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProjectNames)();

// console.log(projectList);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDTztBQUM3QjtBQUNuRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxrREFBNkI7QUFDdEc7QUFDQSxrRkFBa0YsOEJBQThCLHlFQUF5RSxxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSxjQUFjLGVBQWUsR0FBRyxXQUFXLDhEQUE4RCx1QkFBdUIsOERBQThELEdBQUcsUUFBUSxlQUFlLDBCQUEwQixHQUFHLHNDQUFzQyxpQkFBaUIsNEVBQTRFLHVEQUF1RCw2REFBNkQsNkJBQTZCLGtDQUFrQyw4QkFBOEIsbUJBQW1CLHVCQUF1QixxREFBcUQsR0FBRyxvQkFBb0IsOERBQThELDhCQUE4QiwwQkFBMEIsb0JBQW9CLG1CQUFtQixtQkFBbUIsR0FBRyxtQkFBbUIsOERBQThELDhCQUE4QiwwQkFBMEIsb0JBQW9CLG1CQUFtQixtQkFBbUIsR0FBRyx5QkFB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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ1U7QUFDc0I7QUFDMUI7QUFDQTtBQUNrQjtBQUMxQzs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4REFBZTtBQUNmLCtEQUFjLENBQUMsZ0VBQTBCO0FBQ3pDLG9FQUFtQjs7QUFFbkIiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL09wZW5TYW5zLVJlZ3VsYXIudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3R5bGUgcGFnZSBjb250ZW50ICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJPcGVuU2Fuc1xcXCI7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRtYXJnaW4tbGVmdDogMzAwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXFxuXFx0cGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG51bCB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cXG4uc2lkZU5hdiB7XFxuXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXFxcImF1dG9cXFwiIGhlaWdodCAqL1xcblxcdHdpZHRoOiAzMDBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgU2lkZWJhciAoc3RheSBpbiBwbGFjZSBvbiBzY3JvbGwpICovXFxuXFx0ei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cXG5cXHR0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG5cXHRjb2xvcjogI2FhYWFhYTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG5cXHRtYXJnaW4tdG9wOiA0NXB4O1xcbn1cXG5cXG4uc2lkZU5hdkhlYWRlciB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Y29sb3I6ICMzMzMzMzM7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlTmF2TGlua3Mge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGNvbG9yOiAjMzMzMzMzO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZU5hdkxpbmtzOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5cXG4udG9wTmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MDAwO1xcblxcdHBhZGRpbmc6IDBweDtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvcE5hdiBhIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGNvbG9yOiAjZmZmOWNhO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxNHB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLnRvcE5hdiBhOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjMzO1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvSXRlbUxpc3Q6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU0OTtcXG59XFxuXFxuLnRvZG9JdGVtTGlzdEhlYWRlciB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogUHJvamVjdCBEaXNwbGF5IHJlbW92ZSB0b2RvIGJ1dHRvbiAqL1xcbi5yZW1vdmUtdG9kbyB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y29sb3I6ICNhYWE7XFxuXFx0YWxpZ24taXRlbXM6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlbW92ZS10b2RvOmhvdmVyLFxcbi5yZW1vdmUtdG9kbzpmb2N1cyB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1vZGFsIHRvZG8gaW5mb3JtYXRpb24gc3R5bGVzICovXFxuXFxuLm1vZGFsIHtcXG5cXHRkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG5cXHR6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG5cXHRoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuXFx0b3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcblxcdG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcblxcdHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcblxcdGNvbG9yOiAjYWFhO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1Qjs7QUFFdkI7Q0FDQyx1QkFBdUI7Q0FDdkIsMERBQWdEO0NBQ2hELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBO0NBQ0MsdURBQXVEO0NBQ3ZELGtCQUFrQixFQUFFLHFDQUFxQztDQUN6RCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YscUJBQXFCO0FBQ3RCOztBQUVBLHFCQUFxQjtBQUNyQjtDQUNDLFlBQVksRUFBRSx1REFBdUQ7Q0FDckUsWUFBWSxFQUFFLGlDQUFpQztDQUMvQyxlQUFlLEVBQUUsNENBQTRDO0NBQzdELFVBQVUsRUFBRSxnQkFBZ0I7Q0FDNUIsTUFBTSxFQUFFLG9CQUFvQjtDQUM1QixPQUFPO0NBQ1AseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxrQkFBa0IsRUFBRSw4QkFBOEI7Q0FDbEQsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdURBQXVEO0NBQ3ZELHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx1REFBdUQ7Q0FDdkQseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHVEQUF1RDtDQUN2RCxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsdURBQXVEO0NBQ3ZELHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osNkJBQTZCO0NBQzdCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsdURBQXVEO0NBQ3ZELFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBLHVDQUF1QztBQUN2QztDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQSxrQ0FBa0M7O0FBRWxDO0NBQ0MsY0FBYyxFQUFFLHNCQUFzQjtDQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0NBQ25DLFVBQVUsRUFBRSxlQUFlO0NBQzNCLE9BQU87Q0FDUCxNQUFNO0NBQ04sV0FBVyxFQUFFLGVBQWU7Q0FDNUIsWUFBWSxFQUFFLGdCQUFnQjtDQUM5QixjQUFjLEVBQUUsNEJBQTRCO0NBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtDQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7QUFDNUQ7O0FBRUEsc0JBQXNCO0FBQ3RCO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztDQUNwRCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDakU7O0FBRUEscUJBQXFCO0FBQ3JCO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZSBwYWdlIGNvbnRlbnQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIk9wZW5TYW5zXFxcIjtcXG5cXHRzcmM6IHVybChcXFwiLi9PcGVuU2Fucy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRtYXJnaW4tbGVmdDogMzAwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXFxuXFx0cGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG51bCB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cXG4uc2lkZU5hdiB7XFxuXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXFxcImF1dG9cXFwiIGhlaWdodCAqL1xcblxcdHdpZHRoOiAzMDBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgU2lkZWJhciAoc3RheSBpbiBwbGFjZSBvbiBzY3JvbGwpICovXFxuXFx0ei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cXG5cXHR0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG5cXHRjb2xvcjogI2FhYWFhYTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG5cXHRtYXJnaW4tdG9wOiA0NXB4O1xcbn1cXG5cXG4uc2lkZU5hdkhlYWRlciB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Y29sb3I6ICMzMzMzMzM7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlTmF2TGlua3Mge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGNvbG9yOiAjMzMzMzMzO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZU5hdkxpbmtzOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5cXG4udG9wTmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MDAwO1xcblxcdHBhZGRpbmc6IDBweDtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvcE5hdiBhIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGNvbG9yOiAjZmZmOWNhO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxNHB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLnRvcE5hdiBhOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjMzO1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvSXRlbUxpc3Q6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU0OTtcXG59XFxuXFxuLnRvZG9JdGVtTGlzdEhlYWRlciB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogUHJvamVjdCBEaXNwbGF5IHJlbW92ZSB0b2RvIGJ1dHRvbiAqL1xcbi5yZW1vdmUtdG9kbyB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y29sb3I6ICNhYWE7XFxuXFx0YWxpZ24taXRlbXM6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlbW92ZS10b2RvOmhvdmVyLFxcbi5yZW1vdmUtdG9kbzpmb2N1cyB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1vZGFsIHRvZG8gaW5mb3JtYXRpb24gc3R5bGVzICovXFxuXFxuLm1vZGFsIHtcXG5cXHRkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG5cXHR6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG5cXHRoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuXFx0b3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcblxcdG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcblxcdHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcblxcdGNvbG9yOiAjYWFhO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVByb2plY3ROYW1lcyB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgaW5pdGlhdGVTdG9yYWdlLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgoKSA9PiB7XG5cdC8vIEluaXRpYXRlIGxvY2FsIHN0b3JhZ2Vcblx0XG5cdC8vIGhvbWUgcGFnZSBleHRyYSBpbmZvcm1hdGlvbiBkaXNwbGF5XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXHRjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG5cdGxldCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0b3BOYXZCYXIuY2xhc3NMaXN0LmFkZChcInRvcE5hdlwiKTtcblxuXHRsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvLmlubmVySFRNTCA9IFwiVHJlbGxpc3RcIjtcblxuXHRsZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRhZGRUYXNrLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblx0YWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIFByb2plY3QgYWRkIHRvZG8gaXRlbSBET00gZWxlbWVudCB3aGljaCB0aGVuIGNhbGxzIHRoZSBwcm9qZWN0IGFkZCB0b2RvIGl0ZW0gZXZlbnRcblx0XHRpbnB1dFRhc2soKTtcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3QgYWRkIHRvZG8gaXRlbVwiKTtcblx0fSk7XG5cblx0bGV0IHNpZGVOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzaWRlTmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlTmF2XCIpO1xuXG5cdGxldCBwcm9qZWN0TmF2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHByb2plY3ROYXZUaXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cdHByb2plY3ROYXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdkhlYWRlclwiKTtcblxuXHRsZXQgcHJvamVjdE5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0TmF2TGlzdC5pZCA9IFwicHJvamVjdE5hdkxpc3RcIjtcblxuXHRsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlTmF2TGlua3NcIik7XG5cdGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gQ2FsbHMgbmV3IERPTSBldmVudCB0byBoYW5kbGUgcHJvamVjdCBhZGQgd2hpY2ggdGhlbiBjYWxscyB0aGUgbmV3IHByb2plY3QgZnVuY3Rpb25cblx0XHRpbnB1dFByb2plY3QoKTtcblx0XHRjb25zb2xlLmxvZyhcIkNyZWF0ZSBuZXcgcHJvamVjdFwiKTtcblx0fSk7XG5cblx0dG9wTmF2QmFyLmFwcGVuZChsb2dvLCBhZGRUYXNrKTtcblx0c2lkZU5hdkJhci5hcHBlbmQocHJvamVjdE5hdlRpdGxlLCBwcm9qZWN0TmF2TGlzdCwgYWRkUHJvamVjdCk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvcE5hdkJhciwgc2lkZU5hdkJhciwgY29udGVudCk7XG5cblx0XG59KSgpO1xuXG5jb25zdCBpbnB1dFRhc2sgPSAoKSA9PiB7XG5cdC8vIGNyZWF0ZXMgRE9NIGVsZW1lbnRzIHdoaWNoIGNhbiB0YWtlIGlucHV0cyBmb3IgbmV3IHRhc2sgd2hpY2ggY2FuIHRoZW4gY2FsbCB0b2RvIGl0ZW0gZnVuY3Rpb25zXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHR0aXRsZUlucHV0LmlkID0gXCJ0aXRsZUlucHV0XCI7XG5cdHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHR0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcblxuXHRsZXQgc2VsZWN0UHJvamVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXHRzZWxlY3RQcm9qZWN0TWVudS5pZCA9IFwic2VsZWN0UHJvamVjdE1lbnVcIjtcblx0c2VsZWN0UHJvamVjdE1lbnUubmFtZSA9IFwicHJvamVjdFNlbGVjdGVkXCI7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdC8vIHNpbXBsaWZ5IHByb2plY3QgbGlzdCBvdXRwdXRcblx0XHRsZXQgc2VsZWN0UHJvamVjdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0W2ldO1xuXHRcdGNvbnNvbGUubG9nKHNlbGVjdFByb2plY3QpO1xuXG5cdFx0bGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0b3B0aW9uLmlubmVySFRNTCA9IHNlbGVjdFByb2plY3QubmFtZTtcblxuXHRcdHNlbGVjdFByb2plY3RNZW51LmFwcGVuZChvcHRpb24pO1xuXHR9XG5cblx0bGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRUYXNrQnRuLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblx0YWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGxldCBzZWxlY3RlZFByb2plY3RJbmRleCA9XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RNZW51XCIpLnNlbGVjdGVkSW5kZXg7XG5cdFx0bGV0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0W3NlbGVjdGVkUHJvamVjdEluZGV4XTtcblxuXHRcdGxldCB0b2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlO1xuXG5cdFx0bGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW0oYCR7dG9kb0l0ZW1UaXRsZX1gKTtcblx0XHRzZWxlY3RlZFByb2plY3QuYWRkVG9kb0l0ZW0obmV3VG9kb0l0ZW0pO1xuXG5cdFx0ZGlzcGxheVByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcblx0XHR1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0LnByb2plY3RMaXN0KTtcblx0fSk7XG5cblx0Y29udGVudC5hcHBlbmQodGl0bGVJbnB1dCwgc2VsZWN0UHJvamVjdE1lbnUsIGFkZFRhc2tCdG4pO1xufTtcblxuY29uc3QgaW5wdXRQcm9qZWN0ID0gKCkgPT4ge1xuXHQvLyBjcmVhdGVzIERPTSBlbGVtZW50cyB3aGljaCBjYW4gdGFrZSBpbnB1dHMgZm9yIG5ldyBwcm9qZWN0IHRvIGNhbGwgbmV3IHByb2plY3QgZnVuY3Rpb25cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGxldCBpbnB1dFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGxldCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0cHJvamVjdFRpdGxlSW5wdXQuaWQgPSBcInByb2plY3RUaXRsZUlucHV0XCI7XG5cdHByb2plY3RUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0cHJvamVjdFRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWVcIjtcblxuXHRsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHByb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcblx0XHRsZXQgbmV3UHJvamVjdCA9IHByb2plY3QoYCR7cHJvamVjdFRpdGxlSW5wdXQudmFsdWV9YCk7XG5cdFx0Y29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cdFx0cHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdCk7XG5cdFx0ZGlzcGxheVByb2plY3ROYW1lcygpO1xuXHRcdGlucHV0UHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXHRcdHJldHVybiBuZXdQcm9qZWN0O1xuXHR9KTtcblxuXHRpbnB1dFByb2plY3REaXYuYXBwZW5kKHByb2plY3RUaXRsZUlucHV0LCBhZGRQcm9qZWN0QnRuKTtcblx0Y29udGVudC5hcHBlbmQoaW5wdXRQcm9qZWN0RGl2KTtcbn07XG5cbmV4cG9ydCB7IGhvbWVQYWdlLCBpbnB1dFRhc2ssIGlucHV0UHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgdG9kb1BhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgaW5pdGlhdGVTdG9yYWdlLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBkaXNwbGF5cyBpbmRpdmlkdWFsIHByb2plY3RzIG9uIHBhZ2VcbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0Y29uc3QgdG9kb0l0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0Ly8gY2xlYXIgY29udGVudFxuXHRjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cblx0bGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHRwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kb0l0ZW1MaXN0SGVhZGVyXCIpO1xuXHRwcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBwcm9qZWN0Lm5hbWU7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IHRvZG9JdGVtID0gcHJvamVjdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRsZXQgdG9kb0l0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cdFx0dG9kb0l0ZW1EaXYuY2xhc3NMaXN0LmFkZChcInRvZG9JdGVtTGlzdFwiKTtcblxuXHRcdHRvZG9JdGVtRGl2Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBjYWxscyBtb3JlIGluZm9ybWF0aW9uIHRvIHRoZSBwYWdlIGluIGZvcm0gb2YgbW9kYWwgd2hpY2ggY2FuIHRoZW4gYmUgZWRpdGVkXG5cdFx0XHR0b2RvUGFnZSh0b2RvSXRlbSk7XG5cdFx0fTtcblxuXHRcdGxldCB0b2RvSXRlbU1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRcdGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRvZG9UaXRsZS5pbm5lckhUTUwgPSB0b2RvSXRlbS50aXRsZTtcblxuXHRcdC8vIE1ha2UgaXQgY2hlY2sgaWYgdGhlcmUgaXMgc2NoZWR1bGVkIGRhdGU6IGlmIHNjaGVkdWxlZCBkaXNwbGF5IGRhdGUsIGlmIG5vdCB0aGVuIGRpc3BsYXkgYnV0dG9uIHRvIHNjaGVkdWxlIHRhc2tcblx0XHRsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGlmICh0b2RvSXRlbS5kdWVEYXRlID09IG51bGwpIHtcblx0XHRcdHRvZG9JdGVtTWFpbkluZm8uYXBwZW5kKHRvZG9UaXRsZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIm5vIGR1ZSBkYXRlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2RvRHVlRGF0ZS5pbm5lckhUTUwgPSB0b2RvSXRlbS5kdWVEYXRlO1xuXHRcdFx0dG9kb0l0ZW1NYWluSW5mby5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRHVlRGF0ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVtb3ZlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdHJlbW92ZVRvZG9CdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cdFx0cmVtb3ZlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXRvZG9cIik7XG5cblx0XHRyZW1vdmVUb2RvQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRwcm9qZWN0LnJlbW92ZVRvZG9JdGVtKGAke2l9YCk7XG5cdFx0XHRkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcblx0XHRcdHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXHRcdH07XG5cblx0XHR0b2RvSXRlbURpdi5hcHBlbmQodG9kb0l0ZW1NYWluSW5mbywgcmVtb3ZlVG9kb0J0bik7XG5cblx0XHR0b2RvSXRlbUxpc3QuYXBwZW5kKHRvZG9JdGVtRGl2KTtcblx0fVxuXHRjb250ZW50LmFwcGVuZChwcm9qZWN0TmFtZSwgdG9kb0l0ZW1MaXN0KTtcblxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmFtZXMgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBnZXRQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0O1xuXG5cdGxldCBkaXNwbGF5UHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYXZMaXN0XCIpO1xuXHQvLyBjbGVhcnMgcHJvamVjdCBsaXN0XG5cdGRpc3BsYXlQcm9qZWN0TGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGxldCBkaXNwbGF5UHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBnZXRQcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBjdXJyZW50UHJvamVjdCA9IGdldFByb2plY3RMaXN0W2ldO1xuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblx0XHRsZXQgZGlzcGxheVByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdkxpbmtzXCIpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdC5nZXROYW1lKCk7XG5cdFx0ZGlzcGxheVByb2plY3ROYW1lLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkaXNwbGF5UHJvamVjdChjdXJyZW50UHJvamVjdCk7XG5cdFx0fTtcblx0XHRkaXNwbGF5UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3ROYW1lKTtcblx0XHRjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdE5hbWUpO1xuXHR9XG5cdGNvbnNvbGUubG9nKGRpc3BsYXlQcm9qZWN0TGlzdCk7XG5cdGRpc3BsYXlQcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdExpc3QpO1xuXHRyZXR1cm4gZGlzcGxheVByb2plY3RMaXN0RGl2O1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlQcm9qZWN0TmFtZXMgfTtcbiIsImltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUhvbWVQYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IGluaXRpYXRlU3RvcmFnZSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG4vLyBEaXNwbGF5IGRlc3RhaWxlZCBpbmZvcm1hdGlvbiBmb3IgdG9kbyBpdGVtXG5cbmNvbnN0IHRvZG9QYWdlID0gKHRvZG8pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0bGV0IGRldGFpbHNNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRldGFpbHNNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cdGxldCBkZXRhaWxzTW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGV0YWlsc01vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcblx0bGV0IHNwYW5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRzcGFuQ2xvc2UuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cdHNwYW5DbG9zZS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5cblx0c3BhbkNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0ZGV0YWlsc01vZGFsLnJlbW92ZSgpO1xuXHR9O1xuXG5cdHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnRhcmdldCA9PSBkZXRhaWxzTW9kYWwpIHtcblx0XHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IHRvZG9JbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGRldGFpbHNNb2RhbC5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxDb250ZW50KTtcblx0ZGV0YWlsc01vZGFsQ29udGVudC5hcHBlbmQoc3BhbkNsb3NlLCB0b2RvSW5mb3JtYXRpb24pO1xuXG5cdGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRpdGxlLmlkID0gXCJ0aXRsZVwiO1xuXG5cdHRpdGxlLmlubmVySFRNTCA9IHRvZG8udGl0bGU7XG5cdHRpdGxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGl0bGUub25jbGljayA9IFwiXCI7XG5cblx0XHRsZXQgZWRpdFRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGVkaXRUaXRsZURpdi50eXBlID0gXCJ0ZXh0XCI7XG5cdFx0ZWRpdFRpdGxlRGl2LnZhbHVlID0gdG9kby50aXRsZTtcblxuXHRcdGxldCBzYXZlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdHNhdmVUaXRsZS5pbm5lckhUTUwgPSBcIlNhdmVcIjtcblx0XHRzYXZlVGl0bGUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCB1cGRhdGVkVGl0bGUgPSBlZGl0VGl0bGVEaXYudmFsdWU7XG5cdFx0XHRjb25zb2xlLmxvZyh1cGRhdGVkVGl0bGUpO1xuXHRcdFx0dG9kby5lZGl0VGl0bGUodXBkYXRlZFRpdGxlKTtcblx0XHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0XHRcdHRvZG9QYWdlKHRvZG8pO1xuXHRcdFx0dXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdCk7XG5cblx0XHRcdC8vIEZpbmQgYSB3YXkgdG8gcmVsb2FkIHRoZSBwcm9qZWN0IGxpc3QgcGFnZSBhZnRlciBjbG9zaW5nIG1vZGFsXG5cdFx0fTtcblxuXHRcdGxldCBjYW5jZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0Y2FuY2VsVGl0bGUuaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcblx0XHRjYW5jZWxUaXRsZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZGV0YWlsc01vZGFsLnJlbW92ZSgpO1xuXHRcdFx0dG9kb1BhZ2UodG9kbyk7XG5cdFx0fTtcblxuXHRcdHRpdGxlLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0dGl0bGUuYXBwZW5kKGVkaXRUaXRsZURpdiwgc2F2ZVRpdGxlLCBjYW5jZWxUaXRsZSk7XG5cdH07XG5cblx0bGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdG9kby5kZXNjcmlwdGlvbjtcblx0ZGVzY3JpcHRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRkZXNjcmlwdGlvbi5vbmNsaWNrID0gXCJcIjtcblxuXHRcdGxldCBlZGl0RGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0ZWRpdERlc2NyaXB0aW9uRGl2LnR5cGUgPSBcInRleHRcIjtcblx0XHRlZGl0RGVzY3JpcHRpb25EaXYudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG5cdFx0bGV0IHNhdmVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0c2F2ZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiU2F2ZVwiO1xuXHRcdHNhdmVEZXNjcmlwdGlvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHVwZGF0ZWREZXNjcmlwdGlvbiA9IGVkaXREZXNjcmlwdGlvbkRpdi52YWx1ZTtcblx0XHRcdHRvZG8uZWRpdERlc2NyaXB0aW9uKHVwZGF0ZWREZXNjcmlwdGlvbik7XG5cdFx0XHRkZXRhaWxzTW9kYWwucmVtb3ZlKCk7XG5cdFx0XHR0b2RvUGFnZSh0b2RvKTtcblx0XHRcdHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXHRcdH07XG5cblx0XHRsZXQgY2FuY2VsRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGNhbmNlbERlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XG5cdFx0Y2FuY2VsRGVzY3JpcHRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0XHRcdHRvZG9QYWdlKHRvZG8pO1xuXHRcdH07XG5cblx0XHRkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGRlc2NyaXB0aW9uLmFwcGVuZChcblx0XHRcdGVkaXREZXNjcmlwdGlvbkRpdixcblx0XHRcdHNhdmVEZXNjcmlwdGlvbixcblx0XHRcdGNhbmNlbERlc2NyaXB0aW9uXG5cdFx0KTtcblx0fTtcblxuXHRsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGR1ZURhdGUuaW5uZXJIVE1MID0gdG9kby5kdWVEYXRlO1xuXG5cdGR1ZURhdGUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRkdWVEYXRlLm9uY2xpY2sgPSBcIlwiO1xuXG5cdFx0bGV0IGVkaXREYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGVkaXREYXRlRGl2LnR5cGUgPSBcImRhdGVcIjtcblx0XHRlZGl0RGF0ZURpdi52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcblxuXHRcdGxldCBzYXZlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0c2F2ZURhdGUuaW5uZXJIVE1MID0gXCJTYXZlXCI7XG5cdFx0c2F2ZURhdGUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCB1cGRhdGVkRGF0ZSA9IGVkaXREYXRlRGl2LnZhbHVlO1xuXHRcdFx0dG9kby5lZGl0RHVlRGF0ZSh1cGRhdGVkRGF0ZSk7XG5cdFx0XHRkZXRhaWxzTW9kYWwucmVtb3ZlKCk7XG5cdFx0XHR0b2RvUGFnZSh0b2RvKTtcblx0XHRcdHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXHRcdH07XG5cblx0XHRsZXQgY2FuY2VsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0Y2FuY2VsRGF0ZS5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xuXHRcdGNhbmNlbERhdGUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0XHRcdHRvZG9QYWdlKHRvZG8pO1xuXHRcdH07XG5cblx0XHRkdWVEYXRlLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0ZHVlRGF0ZS5hcHBlbmQoZWRpdERhdGVEaXYsIHNhdmVEYXRlLCBjYW5jZWxEYXRlKTtcblx0fTtcblxuXHRsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLnByaW9yaXR5O1xuXG5cdHRvZG9JbmZvcm1hdGlvbi5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cblx0Y29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWwpO1xuXG5cdHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgdG9kb1BhZ2UgfTtcbiIsImltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgdXBkYXRlU3RvcmFnZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdGNvbnN0IEFQUF9EQVRBX0tFWSA9IFwicHJvamVjdERhdGFcIjtcblxuXHRpZiAodHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIikge1xuXHRcdGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFQUF9EQVRBX0tFWSwgZGF0YSk7XG59O1xuXG5jb25zdCBpbml0aWF0ZVN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIEdldCBkYXRhO1xuXHQvLyBsb29wIHRocm91Z2ggYXJyYXkgYW5kIGNyZWF0ZSBuZXcgcHJvamVjdHM7XG5cdC8vIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGxpc3RzIGFuZCBjcmVhdGUgbmV3IHRvZG8gaXRlbXNcblx0XG5cdGNvbnN0IEFQUF9EQVRBX0tFWSA9IFwicHJvamVjdERhdGFcIjtcblxuXHRsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEFQUF9EQVRBX0tFWSk7XG5cdFxuXG5cdGxldCBpbml0aWFsRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdGlhbERhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgbmV3UHJvamVjdCA9IHByb2plY3QoaW5pdGlhbERhdGFbaV0ubmFtZSk7XG5cdFx0Y29uc29sZS5sb2coaW5pdGlhbERhdGFbaV0ubmFtZSk7XG5cdFx0Y29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBpbml0aWFsRGF0YVtpXS5wcm9qZWN0TGlzdC5sZW5ndGg7IGorKykge1xuXHRcdFx0bGV0IGdldFRvZG8gPSBpbml0aWFsRGF0YVtpXS5wcm9qZWN0TGlzdFtqXTtcblx0XHRcdGxldCBuZXdUb2RvID0gdG9kb0l0ZW0oZ2V0VG9kby50aXRsZSwgZ2V0VG9kby5kZXNjcmlwdGlvbiwgZ2V0VG9kby5kdWVEYXRlLCBnZXRUb2RvLnByaW9yaXR5KTtcblx0XHRcdGNvbnNvbGUubG9nKGluaXRpYWxEYXRhW2ldLnByb2plY3RMaXN0W2pdKTtcblx0XHRcdGNvbnNvbGUubG9nKG5ld1RvZG8pO1xuXHRcdFx0bmV3UHJvamVjdC5hZGRUb2RvSXRlbShuZXdUb2RvKTtcblx0XHRcdGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhuZXdQcm9qZWN0KVxuXHRcdHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cdH1cblxuXHRjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdCk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVTdG9yYWdlLCBpbml0aWF0ZVN0b3JhZ2UgfTtcbiIsIi8vIFByb2plY3RzIHdoZXJlIHRvZG8gbGlzdCBpdGVtcyBjYW4gYmUga2VwdC4gUHJvamVjdHMgY2FuIGJlIGNyZWF0ZWQgYW5kIGRlbGV0ZWQuIERlZmF1bHQgcHJvamVjdCBjcmVhdGVkIGluaXRpYWxseSBhbmQgdG9kbyBpdGVtcyBhcmUgYXV0byBhZGRlZFxuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107IC8vIHNob3VsZCBjaGFuZ2UgdG8gdG9kb2xpc3RcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZW1vdmVkIHRvZG8gaXRlbSBzdWNjZXNzIHlheSFcIik7XG5cdFx0Y29uc29sZS5sb2coYCR7dGhpcy5wcm9qZWN0TGlzdFtpbmRleF19YCk7XG5cdFx0Ly8gcmVtb3ZlIHRvZG8gaXRlbSAodXNlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBpbmRleCBvZilcblx0XHR0aGlzLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmFtZTtcblx0fTtcblxuXHRyZXR1cm4geyBnZXROYW1lLCBuYW1lLCBwcm9qZWN0TGlzdCwgYWRkVG9kb0l0ZW0sIHJlbW92ZVRvZG9JdGVtIH07XG59O1xuXG4vLyBQcm9qZWN0IGxpc3Qgb2YgYWxsIHRoZSBwcm9qZWN0czpcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0XHR0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAoKSB7fTtcblxuXHRyZXR1cm4geyBwcm9qZWN0TGlzdCwgYWRkUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH07XG4iLCIvLyBDcmVhdGVzIHRoZSB0b2RvIGl0ZW1zIHVzaW5nIGEgZmFjdG9yeSBmdW5jdGlvbi5cblxuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuXHQvLyB0b2RvIEl0ZW0gY29uc3RydWN0b3JcblxuXHRjb25zdCBlZGl0VGl0bGUgPSBmdW5jdGlvbiAodXBkYXRlZFRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHVwZGF0ZWRUaXRsZTtcblx0XHRyZXR1cm4gdGhpcy50aXRsZTtcblx0fTtcblxuXHRjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodXBkYXRlZERlc2NyaXB0aW9uKSB7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IHVwZGF0ZWREZXNjcmlwdGlvbjtcblx0XHRyZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcblx0fTtcblxuXHRjb25zdCBlZGl0RHVlRGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGVkRHVlRGF0ZSkge1xuXHRcdHRoaXMuZHVlRGF0ZSA9IHVwZGF0ZWREdWVEYXRlO1xuXHRcdHJldHVybiB0aGlzLmR1ZURhdGU7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHR0aXRsZSxcblx0XHRkZXNjcmlwdGlvbixcblx0XHRkdWVEYXRlLFxuXHRcdHByaW9yaXR5LFxuXHRcdGVkaXRUaXRsZSxcblx0XHRlZGl0RGVzY3JpcHRpb24sXG5cdFx0ZWRpdER1ZURhdGUsXG5cdH07XG59O1xuXG5leHBvcnQgeyB0b2RvSXRlbSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVByb2plY3ROYW1lcyB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlIb21lUGFnZVwiO1xuaW1wb3J0IHsgdG9kb1BhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIjtcbmltcG9ydCB7IHVwZGF0ZVN0b3JhZ2UsIGluaXRpYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBsZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xuLy8gcHJvamVjdExpc3QuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG4vLyBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbi8vIGxldCBzZWNvbmRhcnlQcm9qZWN0ID0gcHJvamVjdChcIlNlY29uZGFyeSBQcm9qZWN0XCIpO1xuLy8gcHJvamVjdExpc3QuYWRkUHJvamVjdChzZWNvbmRhcnlQcm9qZWN0KTtcblxuLy8gY29uc3QgcG90YXRvID0gdG9kb0l0ZW0oXG4vLyBcdFwiUG90YXRvIFRpdGxlXCIsXG4vLyBcdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuLy8gXHRcIjEyLzA0LzIwMjVcIixcbi8vIFx0XCJUb3AgcHJpb3JpdHlcIlxuLy8gKTtcblxuLy8gY29uc3QgcG90YXRvMiA9IHRvZG9JdGVtKFxuLy8gXHRcIlBvdGF0byBUaXRsZVwiLFxuLy8gXHRcInRoaXMgaXMgZGVzY3JpcHRpb25cIixcbi8vIFx0XCIxMi8wNC8yMDI1XCIsXG4vLyBcdFwiVG9wIHByaW9yaXR5XCJcbi8vICk7XG5cbi8vIHBvdGF0by5lZGl0VGl0bGUoXCJuZXdQb3RhdG9UaXRsZVwiKTtcbi8vIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0byk7XG4vLyBkZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8yKTtcbmluaXRpYXRlU3RvcmFnZSgpO1xuZGlzcGxheVByb2plY3QocHJvamVjdExpc3QucHJvamVjdExpc3RbMF0pO1xuZGlzcGxheVByb2plY3ROYW1lcygpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==