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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const homePage = (() => {
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

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
	title.innerHTML = todo.title;
	title.onclick = function () {
		let editTitleDiv = document.createElement("input");
		editTitleDiv.type = "text";
		editTitleDiv.value = todo.title;

		let saveTitle = document.createElement("button");
		saveTitle.innerHTML = "Save";
		saveTitle.onclick = function () {};

		let cancelTitle = document.createElement("button");
		cancelTitle.innerHTML = "Cancel";
		cancelTitle.onclick = function () {};

		title.innerHTML = "";
		title.append(editTitleDiv, saveTitle, cancelTitle);
	};

	let description = document.createElement("div");
	description.innerHTML = todo.description;

	let dueDate = document.createElement("div");
	dueDate.innerHTML = todo.dueDate;

	let priority = document.createElement("div");
	priority.innerHTML = todo.priority;

	let notes = document.createElement("div");
	notes.innerHTML = todo.notes;


	todoInformation.append(title, description, dueDate, priority, notes)
	// todoInformation.innerHTML += `<ul>
	//         <li>${title}</li>
	//         <li>${description}</li>
	//         <li>${dueDate}</li>
	//         <li>${priority}</li>
	//         <li>${notes}</li>
	//     </ul>`;

	content.appendChild(detailsModal);

	return content;
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

const todoItem = (title, description, dueDate, priority, notes) => {
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
		notes,
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








let defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)("Default Project");
_project__WEBPACK_IMPORTED_MODULE_1__.projectList.addProject(defaultProject);
console.log(defaultProject);

let secondaryProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)("Secondary Project");
_project__WEBPACK_IMPORTED_MODULE_1__.projectList.addProject(secondaryProject);

const potato = (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.todoItem)(
	"Potato Title",
	"this is description",
	"12/04/2025",
	"Top priority",
	"Random Notes",
	"Complete"
);

const potato2 = (0,_todoItems__WEBPACK_IMPORTED_MODULE_0__.todoItem)(
	"Potato Title",
	"this is description",
	"12/04/2025",
	"Top priority",
	"Random Notes",
	"Complete"
);

potato.editTitle("newPotatoTitle");
defaultProject.addTodoItem(potato);
defaultProject.addTodoItem(potato2);

(0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProject)(defaultProject);
(0,_displayProject__WEBPACK_IMPORTED_MODULE_2__.displayProjectNames)();

console.log(_project__WEBPACK_IMPORTED_MODULE_1__.projectList);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDN0I7QUFDbkUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsa0RBQTZCO0FBQ3RHO0FBQ0Esa0ZBQWtGLDhCQUE4Qix5RUFBeUUscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsY0FBYyxlQUFlLEdBQUcsV0FBVyw4REFBOEQsdUJBQXVCLDhEQUE4RCxHQUFHLFFBQVEsZUFBZSwwQkFBMEIsR0FBRyxzQ0FBc0MsaUJBQWlCLDRFQUE0RSx1REFBdUQsNkRBQTZELDZCQUE2QixrQ0FBa0MsOEJBQThCLG1CQUFtQix1QkFBdUIscURBQXFELEdBQUcsb0JBQW9CLDhEQUE4RCw4QkFBOEIsMEJBQTBCLG9CQUFvQixtQkFBbUIsbUJBQW1CLEdBQUcsbUJBQW1CLDhEQUE4RCw4QkFBOEIsMEJBQTBCLG9CQUFvQixtQkFBbUIsbUJBQW1CLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixpQkFBaUIscUJB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVvQjs7Ozs7OztVQ2hDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7QUFDVTtBQUNzQjtBQUMxQjtBQUNBO0FBQ3pCOzs7QUFHcEIscUJBQXFCLGlEQUFPO0FBQzVCLDREQUFzQjtBQUN0Qjs7QUFFQSx1QkFBdUIsaURBQU87QUFDOUIsNERBQXNCOztBQUV0QixlQUFlLG9EQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixvREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQWM7QUFDZCxvRUFBbUI7O0FBRW5CLFlBQVksaURBQVciLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL09wZW5TYW5zLVJlZ3VsYXIudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3R5bGUgcGFnZSBjb250ZW50ICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJPcGVuU2Fuc1xcXCI7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRtYXJnaW4tbGVmdDogMzAwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXFxuXFx0cGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG51bCB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cXG4uc2lkZU5hdiB7XFxuXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXFxcImF1dG9cXFwiIGhlaWdodCAqL1xcblxcdHdpZHRoOiAzMDBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgU2lkZWJhciAoc3RheSBpbiBwbGFjZSBvbiBzY3JvbGwpICovXFxuXFx0ei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cXG5cXHR0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG5cXHRjb2xvcjogI2FhYWFhYTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG5cXHRtYXJnaW4tdG9wOiA0NXB4O1xcbn1cXG5cXG4uc2lkZU5hdkhlYWRlciB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Y29sb3I6ICMzMzMzMzM7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlTmF2TGlua3Mge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGNvbG9yOiAjMzMzMzMzO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZU5hdkxpbmtzOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5cXG4udG9wTmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MDAwO1xcblxcdHBhZGRpbmc6IDBweDtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvcE5hdiBhIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGNvbG9yOiAjZmZmOWNhO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxNHB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLnRvcE5hdiBhOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjMzO1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvSXRlbUxpc3Q6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU0OTtcXG59XFxuXFxuLnRvZG9JdGVtTGlzdEhlYWRlciB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogUHJvamVjdCBEaXNwbGF5IHJlbW92ZSB0b2RvIGJ1dHRvbiAqL1xcbi5yZW1vdmUtdG9kbyB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y29sb3I6ICNhYWE7XFxuXFx0YWxpZ24taXRlbXM6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlbW92ZS10b2RvOmhvdmVyLFxcbi5yZW1vdmUtdG9kbzpmb2N1cyB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1vZGFsIHRvZG8gaW5mb3JtYXRpb24gc3R5bGVzICovXFxuXFxuLm1vZGFsIHtcXG5cXHRkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG5cXHR6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG5cXHRoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuXFx0b3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcblxcdG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcblxcdHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcblxcdGNvbG9yOiAjYWFhO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHVCQUF1Qjs7QUFFdkI7Q0FDQyx1QkFBdUI7Q0FDdkIsMERBQWdEO0NBQ2hELGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBO0NBQ0MsdURBQXVEO0NBQ3ZELGtCQUFrQixFQUFFLHFDQUFxQztDQUN6RCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YscUJBQXFCO0FBQ3RCOztBQUVBLHFCQUFxQjtBQUNyQjtDQUNDLFlBQVksRUFBRSx1REFBdUQ7Q0FDckUsWUFBWSxFQUFFLGlDQUFpQztDQUMvQyxlQUFlLEVBQUUsNENBQTRDO0NBQzdELFVBQVUsRUFBRSxnQkFBZ0I7Q0FDNUIsTUFBTSxFQUFFLG9CQUFvQjtDQUM1QixPQUFPO0NBQ1AseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxrQkFBa0IsRUFBRSw4QkFBOEI7Q0FDbEQsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdURBQXVEO0NBQ3ZELHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx1REFBdUQ7Q0FDdkQseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHVEQUF1RDtDQUN2RCxXQUFXO0NBQ1gsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsdURBQXVEO0NBQ3ZELHFCQUFxQjtDQUNyQixZQUFZO0NBQ1osNkJBQTZCO0NBQzdCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsdURBQXVEO0NBQ3ZELFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBLHVDQUF1QztBQUN2QztDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQSxrQ0FBa0M7O0FBRWxDO0NBQ0MsY0FBYyxFQUFFLHNCQUFzQjtDQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0NBQ25DLFVBQVUsRUFBRSxlQUFlO0NBQzNCLE9BQU87Q0FDUCxNQUFNO0NBQ04sV0FBVyxFQUFFLGVBQWU7Q0FDNUIsWUFBWSxFQUFFLGdCQUFnQjtDQUM5QixjQUFjLEVBQUUsNEJBQTRCO0NBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtDQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7QUFDNUQ7O0FBRUEsc0JBQXNCO0FBQ3RCO0NBQ0MseUJBQXlCO0NBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztDQUNwRCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDakU7O0FBRUEscUJBQXFCO0FBQ3JCO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZSBwYWdlIGNvbnRlbnQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIk9wZW5TYW5zXFxcIjtcXG5cXHRzcmM6IHVybChcXFwiLi9PcGVuU2Fucy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRtYXJnaW4tbGVmdDogMzAwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXFxuXFx0cGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG5cXG51bCB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cXG4uc2lkZU5hdiB7XFxuXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXFxcImF1dG9cXFwiIGhlaWdodCAqL1xcblxcdHdpZHRoOiAzMDBweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgU2lkZWJhciAoc3RheSBpbiBwbGFjZSBvbiBzY3JvbGwpICovXFxuXFx0ei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cXG5cXHR0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xcblxcdGxlZnQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG5cXHRjb2xvcjogI2FhYWFhYTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cXG5cXHRtYXJnaW4tdG9wOiA0NXB4O1xcbn1cXG5cXG4uc2lkZU5hdkhlYWRlciB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Y29sb3I6ICMzMzMzMzM7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlTmF2TGlua3Mge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxMnB4O1xcblxcdGNvbG9yOiAjMzMzMzMzO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZU5hdkxpbmtzOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xcbn1cXG5cXG4udG9wTmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5MDAwO1xcblxcdHBhZGRpbmc6IDBweDtcXG5cXHRoZWlnaHQ6IDQ1cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRvcE5hdiBhIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdGZsb2F0OiBsZWZ0O1xcblxcdGNvbG9yOiAjZmZmOWNhO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxNHB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLnRvcE5hdiBhOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjMzO1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcXG5cXHRmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi50b2RvSXRlbUxpc3Q6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU0OTtcXG59XFxuXFxuLnRvZG9JdGVtTGlzdEhlYWRlciB7XFxuXFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLyogUHJvamVjdCBEaXNwbGF5IHJlbW92ZSB0b2RvIGJ1dHRvbiAqL1xcbi5yZW1vdmUtdG9kbyB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y29sb3I6ICNhYWE7XFxuXFx0YWxpZ24taXRlbXM6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJlbW92ZS10b2RvOmhvdmVyLFxcbi5yZW1vdmUtdG9kbzpmb2N1cyB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1vZGFsIHRvZG8gaW5mb3JtYXRpb24gc3R5bGVzICovXFxuXFxuLm1vZGFsIHtcXG5cXHRkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG5cXHR6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDA7XFxuXFx0d2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG5cXHRoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuXFx0b3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcblxcdG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcblxcdHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcblxcdGNvbG9yOiAjYWFhO1xcblxcdGZsb2F0OiByaWdodDtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCwgZGlzcGxheVByb2plY3ROYW1lcyB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0XCI7XG5pbXBvcnQgeyB0b2RvSXRlbSB9IGZyb20gXCIuL3RvZG9JdGVtc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgaG9tZVBhZ2UgPSAoKCkgPT4ge1xuXHQvLyBob21lIHBhZ2UgZXh0cmEgaW5mb3JtYXRpb24gZGlzcGxheVxuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblx0Y29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuXHRsZXQgdG9wTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dG9wTmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJ0b3BOYXZcIik7XG5cblx0bGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bG9nby5pbm5lckhUTUwgPSBcIlRyZWxsaXN0XCI7XG5cblx0bGV0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0YWRkVGFzay5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cdGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQvLyBQcm9qZWN0IGFkZCB0b2RvIGl0ZW0gRE9NIGVsZW1lbnQgd2hpY2ggdGhlbiBjYWxscyB0aGUgcHJvamVjdCBhZGQgdG9kbyBpdGVtIGV2ZW50XG5cdFx0aW5wdXRUYXNrKCk7XG5cdFx0Y29uc29sZS5sb2coXCJQcm9qZWN0IGFkZCB0b2RvIGl0ZW1cIik7XG5cdH0pO1xuXG5cdGxldCBzaWRlTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2lkZU5hdkJhci5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdlwiKTtcblxuXHRsZXQgcHJvamVjdE5hdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRwcm9qZWN0TmF2VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXHRwcm9qZWN0TmF2VGl0bGUuY2xhc3NMaXN0LmFkZChcInNpZGVOYXZIZWFkZXJcIik7XG5cblx0bGV0IHByb2plY3ROYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdE5hdkxpc3QuaWQgPSBcInByb2plY3ROYXZMaXN0XCI7XG5cblx0bGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0YWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdkxpbmtzXCIpO1xuXHRhZGRQcm9qZWN0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcblx0YWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIENhbGxzIG5ldyBET00gZXZlbnQgdG8gaGFuZGxlIHByb2plY3QgYWRkIHdoaWNoIHRoZW4gY2FsbHMgdGhlIG5ldyBwcm9qZWN0IGZ1bmN0aW9uXG5cdFx0aW5wdXRQcm9qZWN0KCk7XG5cdFx0Y29uc29sZS5sb2coXCJDcmVhdGUgbmV3IHByb2plY3RcIik7XG5cdH0pO1xuXG5cdHRvcE5hdkJhci5hcHBlbmQobG9nbywgYWRkVGFzayk7XG5cdHNpZGVOYXZCYXIuYXBwZW5kKHByb2plY3ROYXZUaXRsZSwgcHJvamVjdE5hdkxpc3QsIGFkZFByb2plY3QpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZCh0b3BOYXZCYXIsIHNpZGVOYXZCYXIsIGNvbnRlbnQpO1xufSkoKTtcblxuY29uc3QgaW5wdXRUYXNrID0gKCkgPT4ge1xuXHQvLyBjcmVhdGVzIERPTSBlbGVtZW50cyB3aGljaCBjYW4gdGFrZSBpbnB1dHMgZm9yIG5ldyB0YXNrIHdoaWNoIGNhbiB0aGVuIGNhbGwgdG9kbyBpdGVtIGZ1bmN0aW9uc1xuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXHRsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0dGl0bGVJbnB1dC5pZCA9IFwidGl0bGVJbnB1dFwiO1xuXHR0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0dGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG5cblx0bGV0IHNlbGVjdFByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0c2VsZWN0UHJvamVjdE1lbnUuaWQgPSBcInNlbGVjdFByb2plY3RNZW51XCI7XG5cdHNlbGVjdFByb2plY3RNZW51Lm5hbWUgPSBcInByb2plY3RTZWxlY3RlZFwiO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBzaW1wbGlmeSBwcm9qZWN0IGxpc3Qgb3V0cHV0XG5cdFx0bGV0IHNlbGVjdFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RQcm9qZWN0KTtcblxuXHRcdGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdG9wdGlvbi5pbm5lckhUTUwgPSBzZWxlY3RQcm9qZWN0Lm5hbWU7XG5cblx0XHRzZWxlY3RQcm9qZWN0TWVudS5hcHBlbmQob3B0aW9uKTtcblx0fVxuXG5cdGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRsZXQgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0TWVudVwiKS5zZWxlY3RlZEluZGV4O1xuXHRcdGxldCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtzZWxlY3RlZFByb2plY3RJbmRleF07XG5cblx0XHRsZXQgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcblxuXHRcdGxldCBuZXdUb2RvSXRlbSA9IHRvZG9JdGVtKGAke3RvZG9JdGVtVGl0bGV9YCk7XG5cdFx0c2VsZWN0ZWRQcm9qZWN0LmFkZFRvZG9JdGVtKG5ld1RvZG9JdGVtKTtcblxuXHRcdGRpc3BsYXlQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG5cdH0pO1xuXG5cdGNvbnRlbnQuYXBwZW5kKHRpdGxlSW5wdXQsIHNlbGVjdFByb2plY3RNZW51LCBhZGRUYXNrQnRuKTtcbn07XG5cbmNvbnN0IGlucHV0UHJvamVjdCA9ICgpID0+IHtcblx0Ly8gY3JlYXRlcyBET00gZWxlbWVudHMgd2hpY2ggY2FuIHRha2UgaW5wdXRzIGZvciBuZXcgcHJvamVjdCB0byBjYWxsIG5ldyBwcm9qZWN0IGZ1bmN0aW9uXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRsZXQgaW5wdXRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRsZXQgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHByb2plY3RUaXRsZUlucHV0LmlkID0gXCJwcm9qZWN0VGl0bGVJbnB1dFwiO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHByb2plY3RUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lXCI7XG5cblx0bGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XG5cdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG5cdFx0bGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGAke3Byb2plY3RUaXRsZUlucHV0LnZhbHVlfWApO1xuXHRcdGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXHRcdHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZXMoKTtcblx0XHRpbnB1dFByb2plY3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRyZXR1cm4gbmV3UHJvamVjdDtcblx0fSk7XG5cblx0aW5wdXRQcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCwgYWRkUHJvamVjdEJ0bik7XG5cdGNvbnRlbnQuYXBwZW5kKGlucHV0UHJvamVjdERpdik7XG59O1xuXG5leHBvcnQgeyBob21lUGFnZSwgaW5wdXRUYXNrLCBpbnB1dFByb2plY3QgfTtcbiIsImltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIGRpc3BsYXlzIGluZGl2aWR1YWwgcHJvamVjdHMgb24gcGFnZVxuY29uc3QgZGlzcGxheVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuXHRjb25zdCB0b2RvSXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXHQvLyBjbGVhciBjb250ZW50XG5cdGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvSXRlbUxpc3RIZWFkZXJcIik7XG5cdHByb2plY3ROYW1lLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgdG9kb0l0ZW0gPSBwcm9qZWN0LnByb2plY3RMaXN0W2ldO1xuXHRcdGxldCB0b2RvSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHR0b2RvSXRlbURpdi5jbGFzc0xpc3QuYWRkKFwidG9kb0l0ZW1MaXN0XCIpO1xuXG5cdFx0dG9kb0l0ZW1EaXYub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIGNhbGxzIG1vcmUgaW5mb3JtYXRpb24gdG8gdGhlIHBhZ2UgaW4gZm9ybSBvZiBtb2RhbCB3aGljaCBjYW4gdGhlbiBiZSBlZGl0ZWRcblx0XHRcdHRvZG9QYWdlKHRvZG9JdGVtKTtcblx0XHR9O1xuXG5cdFx0bGV0IHRvZG9JdGVtTWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdFx0bGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dG9kb1RpdGxlLmlubmVySFRNTCA9IHRvZG9JdGVtLnRpdGxlO1xuXG5cdFx0Ly8gTWFrZSBpdCBjaGVjayBpZiB0aGVyZSBpcyBzY2hlZHVsZWQgZGF0ZTogaWYgc2NoZWR1bGVkIGRpc3BsYXkgZGF0ZSwgaWYgbm90IHRoZW4gZGlzcGxheSBidXR0b24gdG8gc2NoZWR1bGUgdGFza1xuXHRcdGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0aWYgKHRvZG9JdGVtLmR1ZURhdGUgPT0gbnVsbCkge1xuXHRcdFx0dG9kb0l0ZW1NYWluSW5mby5hcHBlbmQodG9kb1RpdGxlKTtcblx0XHRcdGNvbnNvbGUubG9nKFwibm8gZHVlIGRhdGVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRvZG9EdWVEYXRlLmlubmVySFRNTCA9IHRvZG9JdGVtLmR1ZURhdGU7XG5cdFx0XHR0b2RvSXRlbU1haW5JbmZvLmFwcGVuZCh0b2RvVGl0bGUsIHRvZG9EdWVEYXRlKTtcblx0XHR9XG5cblx0XHRjb25zdCByZW1vdmVUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdFx0cmVtb3ZlVG9kb0J0bi5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcblx0XHRyZW1vdmVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtdG9kb1wiKTtcblxuXHRcdHJlbW92ZVRvZG9CdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHByb2plY3QucmVtb3ZlVG9kb0l0ZW0oYCR7aX1gKTtcblx0XHRcdGRpc3BsYXlQcm9qZWN0KHByb2plY3QpO1xuXHRcdH07XG5cblx0XHR0b2RvSXRlbURpdi5hcHBlbmQodG9kb0l0ZW1NYWluSW5mbywgcmVtb3ZlVG9kb0J0bik7XG5cblx0XHR0b2RvSXRlbUxpc3QuYXBwZW5kKHRvZG9JdGVtRGl2KTtcblx0fVxuXHRjb250ZW50LmFwcGVuZChwcm9qZWN0TmFtZSwgdG9kb0l0ZW1MaXN0KTtcblxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmFtZXMgPSBmdW5jdGlvbiAoKSB7XG5cdGxldCBnZXRQcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0O1xuXG5cdGxldCBkaXNwbGF5UHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYXZMaXN0XCIpO1xuXHQvLyBjbGVhcnMgcHJvamVjdCBsaXN0XG5cdGRpc3BsYXlQcm9qZWN0TGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGxldCBkaXNwbGF5UHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBnZXRQcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBjdXJyZW50UHJvamVjdCA9IGdldFByb2plY3RMaXN0W2ldO1xuXHRcdGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblx0XHRsZXQgZGlzcGxheVByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdkxpbmtzXCIpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5pbm5lckhUTUwgPSBjdXJyZW50UHJvamVjdC5nZXROYW1lKCk7XG5cdFx0ZGlzcGxheVByb2plY3ROYW1lLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkaXNwbGF5UHJvamVjdChjdXJyZW50UHJvamVjdCk7XG5cdFx0fTtcblx0XHRkaXNwbGF5UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3ROYW1lKTtcblx0XHRjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdE5hbWUpO1xuXHR9XG5cdGNvbnNvbGUubG9nKGRpc3BsYXlQcm9qZWN0TGlzdCk7XG5cdGRpc3BsYXlQcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdExpc3QpO1xuXHRyZXR1cm4gZGlzcGxheVByb2plY3RMaXN0RGl2O1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlQcm9qZWN0TmFtZXMgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBEaXNwbGF5IGRlc3RhaWxlZCBpbmZvcm1hdGlvbiBmb3IgdG9kbyBpdGVtXG5cbmNvbnN0IHRvZG9QYWdlID0gKHRvZG8pID0+IHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblx0bGV0IGRldGFpbHNNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRldGFpbHNNb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG5cdGxldCBkZXRhaWxzTW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGV0YWlsc01vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcblx0bGV0IHNwYW5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRzcGFuQ2xvc2UuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cdHNwYW5DbG9zZS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5cblx0c3BhbkNsb3NlLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0ZGV0YWlsc01vZGFsLnJlbW92ZSgpO1xuXHR9O1xuXG5cdHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LnRhcmdldCA9PSBkZXRhaWxzTW9kYWwpIHtcblx0XHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0bGV0IHRvZG9JbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGRldGFpbHNNb2RhbC5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxDb250ZW50KTtcblx0ZGV0YWlsc01vZGFsQ29udGVudC5hcHBlbmQoc3BhbkNsb3NlLCB0b2RvSW5mb3JtYXRpb24pO1xuXG5cdGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRpdGxlLmlubmVySFRNTCA9IHRvZG8udGl0bGU7XG5cdHRpdGxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGVkaXRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRlZGl0VGl0bGVEaXYudHlwZSA9IFwidGV4dFwiO1xuXHRcdGVkaXRUaXRsZURpdi52YWx1ZSA9IHRvZG8udGl0bGU7XG5cblx0XHRsZXQgc2F2ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRzYXZlVGl0bGUuaW5uZXJIVE1MID0gXCJTYXZlXCI7XG5cdFx0c2F2ZVRpdGxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxuXHRcdGxldCBjYW5jZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0Y2FuY2VsVGl0bGUuaW5uZXJIVE1MID0gXCJDYW5jZWxcIjtcblx0XHRjYW5jZWxUaXRsZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge307XG5cblx0XHR0aXRsZS5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdHRpdGxlLmFwcGVuZChlZGl0VGl0bGVEaXYsIHNhdmVUaXRsZSwgY2FuY2VsVGl0bGUpO1xuXHR9O1xuXG5cdGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRvZG8uZGVzY3JpcHRpb247XG5cblx0bGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkdWVEYXRlLmlubmVySFRNTCA9IHRvZG8uZHVlRGF0ZTtcblxuXHRsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLnByaW9yaXR5O1xuXG5cdGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG5vdGVzLmlubmVySFRNTCA9IHRvZG8ubm90ZXM7XG5cblxuXHR0b2RvSW5mb3JtYXRpb24uYXBwZW5kKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKVxuXHQvLyB0b2RvSW5mb3JtYXRpb24uaW5uZXJIVE1MICs9IGA8dWw+XG5cdC8vICAgICAgICAgPGxpPiR7dGl0bGV9PC9saT5cblx0Ly8gICAgICAgICA8bGk+JHtkZXNjcmlwdGlvbn08L2xpPlxuXHQvLyAgICAgICAgIDxsaT4ke2R1ZURhdGV9PC9saT5cblx0Ly8gICAgICAgICA8bGk+JHtwcmlvcml0eX08L2xpPlxuXHQvLyAgICAgICAgIDxsaT4ke25vdGVzfTwvbGk+XG5cdC8vICAgICA8L3VsPmA7XG5cblx0Y29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWwpO1xuXG5cdHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgdG9kb1BhZ2UgfTtcbiIsIi8vIFByb2plY3RzIHdoZXJlIHRvZG8gbGlzdCBpdGVtcyBjYW4gYmUga2VwdC4gUHJvamVjdHMgY2FuIGJlIGNyZWF0ZWQgYW5kIGRlbGV0ZWQuIERlZmF1bHQgcHJvamVjdCBjcmVhdGVkIGluaXRpYWxseSBhbmQgdG9kbyBpdGVtcyBhcmUgYXV0byBhZGRlZFxuXG5jb25zdCBwcm9qZWN0ID0gKG5hbWUpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107IC8vIHNob3VsZCBjaGFuZ2UgdG8gdG9kb2xpc3RcblxuXHRjb25zdCBhZGRUb2RvSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5wcm9qZWN0TGlzdCk7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKGl0ZW0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlbW92ZVRvZG9JdGVtID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZW1vdmVkIHRvZG8gaXRlbSBzdWNjZXNzIHlheSFcIik7XG5cdFx0Y29uc29sZS5sb2coYCR7dGhpcy5wcm9qZWN0TGlzdFtpbmRleF19YCk7XG5cdFx0Ly8gcmVtb3ZlIHRvZG8gaXRlbSAodXNlIGxvY2FsIHN0b3JhZ2Ugd2l0aCBpbmRleCBvZilcblx0XHR0aGlzLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmFtZTtcblx0fTtcblxuXHRyZXR1cm4geyBnZXROYW1lLCBuYW1lLCBwcm9qZWN0TGlzdCwgYWRkVG9kb0l0ZW0sIHJlbW92ZVRvZG9JdGVtIH07XG59O1xuXG4vLyBQcm9qZWN0IGxpc3Qgb2YgYWxsIHRoZSBwcm9qZWN0czpcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKCkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuXHRjb25zdCBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcblx0XHR0aGlzLnByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG5cdH07XG5cblx0Y29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSBmdW5jdGlvbiAoKSB7fTtcblxuXHRyZXR1cm4geyBwcm9qZWN0TGlzdCwgYWRkUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH07XG4iLCIvLyBDcmVhdGVzIHRoZSB0b2RvIGl0ZW1zIHVzaW5nIGEgZmFjdG9yeSBmdW5jdGlvbi5cblxuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcblx0Ly8gdG9kbyBJdGVtIGNvbnN0cnVjdG9yXG5cblx0Y29uc3QgZWRpdFRpdGxlID0gZnVuY3Rpb24gKHVwZGF0ZWRUaXRsZSkge1xuXHRcdHRoaXMudGl0bGUgPSB1cGRhdGVkVGl0bGU7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdH07XG5cblx0Y29uc3QgZWRpdERlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHVwZGF0ZWREZXNjcmlwdGlvbikge1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSB1cGRhdGVkRGVzY3JpcHRpb247XG5cdFx0cmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG5cdH07XG5cblx0Y29uc3QgZWRpdER1ZURhdGUgPSBmdW5jdGlvbiAodXBkYXRlZER1ZURhdGUpIHtcblx0XHR0aGlzLmR1ZURhdGUgPSB1cGRhdGVkRHVlRGF0ZTtcblx0XHRyZXR1cm4gdGhpcy5kdWVEYXRlO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZHVlRGF0ZSxcblx0XHRwcmlvcml0eSxcblx0XHRub3Rlcyxcblx0XHRlZGl0VGl0bGUsXG5cdFx0ZWRpdERlc2NyaXB0aW9uLFxuXHRcdGVkaXREdWVEYXRlLFxuXHR9O1xufTtcblxuZXhwb3J0IHsgdG9kb0l0ZW0gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlQcm9qZWN0TmFtZXMgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5SG9tZVBhZ2VcIjtcbmltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5cbmxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbmNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxubGV0IHNlY29uZGFyeVByb2plY3QgPSBwcm9qZWN0KFwiU2Vjb25kYXJ5IFByb2plY3RcIik7XG5wcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHNlY29uZGFyeVByb2plY3QpO1xuXG5jb25zdCBwb3RhdG8gPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbmNvbnN0IHBvdGF0bzIgPSB0b2RvSXRlbShcblx0XCJQb3RhdG8gVGl0bGVcIixcblx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG5cdFwiMTIvMDQvMjAyNVwiLFxuXHRcIlRvcCBwcmlvcml0eVwiLFxuXHRcIlJhbmRvbSBOb3Rlc1wiLFxuXHRcIkNvbXBsZXRlXCJcbik7XG5cbnBvdGF0by5lZGl0VGl0bGUoXCJuZXdQb3RhdG9UaXRsZVwiKTtcbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0byk7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8yKTtcblxuZGlzcGxheVByb2plY3QoZGVmYXVsdFByb2plY3QpO1xuZGlzcGxheVByb2plY3ROYW1lcygpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9