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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDTztBQUM3QjtBQUNuRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxrREFBNkI7QUFDdEc7QUFDQSxrRkFBa0YsOEJBQThCLHlFQUF5RSxxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSxjQUFjLGVBQWUsR0FBRyxXQUFXLDhEQUE4RCx1QkFBdUIsOERBQThELEdBQUcsUUFBUSxlQUFlLDBCQUEwQixHQUFHLHNDQUFzQyxpQkFBaUIsNEVBQTRFLHVEQUF1RCw2REFBNkQsNkJBQTZCLGtDQUFrQyw4QkFBOEIsbUJBQW1CLHVCQUF1QixxREFBcUQsR0FBRyxvQkFBb0IsOERBQThELDhCQUE4QiwwQkFBMEIsb0JBQW9CLG1CQUFtQixtQkFBbUIsR0FBRyxtQkFBbUIsOERBQThELDhCQUE4QiwwQkFBMEIsb0JBQW9CLG1CQUFtQixtQkFBbUIsR0FBRyx5QkFB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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z1QztBQUNVO0FBQ3NCO0FBQzFCO0FBQ0E7QUFDa0I7QUFDMUM7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOERBQWU7QUFDZiwrREFBYyxDQUFDLGdFQUEwQjtBQUN6QyxvRUFBbUI7O0FBRW5CIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9PcGVuU2Fucy1SZWd1bGFyLnR0ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiT3BlblNhbnNcXFwiO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4ge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0bWFyZ2luLWxlZnQ6IDMwMHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxudWwge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4vKiBUaGUgc2lkZWJhciBtZW51ICovXFxuLnNpZGVOYXYge1xcblxcdGhlaWdodDogMTAwJTsgLyogRnVsbC1oZWlnaHQ6IHJlbW92ZSB0aGlzIGlmIHlvdSB3YW50IFxcXCJhdXRvXFxcIiBoZWlnaHQgKi9cXG5cXHR3aWR0aDogMzAwcHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xcblxcdHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXFxuXFx0dG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cXG5cXHRsZWZ0OiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuXFx0Y29sb3I6ICNhYWFhYWE7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXFxuXFx0bWFyZ2luLXRvcDogNDVweDtcXG59XFxuXFxuLnNpZGVOYXZIZWFkZXIge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGNvbG9yOiAjMzMzMzMzO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZU5hdkxpbmtzIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRjb2xvcjogIzMzMzMzMztcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNpZGVOYXZMaW5rczpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuXFxuLnRvcE5hdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOTAwMDtcXG5cXHRwYWRkaW5nOiAwcHg7XFxuXFx0aGVpZ2h0OiA0NXB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50b3BOYXYgYSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRjb2xvcjogI2ZmZjljYTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTRweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi50b3BOYXYgYTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYTYzMztcXG59XFxuXFxuLnRvZG9JdGVtTGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRwYWRkaW5nOiA3cHg7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmViZWJlNDk7XFxufVxcblxcbi50b2RvSXRlbUxpc3RIZWFkZXIge1xcblxcdG1hcmdpbi1yaWdodDogNDBweDtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIFByb2plY3QgRGlzcGxheSByZW1vdmUgdG9kbyBidXR0b24gKi9cXG4ucmVtb3ZlLXRvZG8ge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGNvbG9yOiAjYWFhO1xcblxcdGFsaWduLWl0ZW1zOiByaWdodDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZW1vdmUtdG9kbzpob3ZlcixcXG4ucmVtb3ZlLXRvZG86Zm9jdXMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNb2RhbCB0b2RvIGluZm9ybWF0aW9uIHN0eWxlcyAqL1xcblxcbi5tb2RhbCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuXFx0cG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuXFx0ei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcblxcdG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG5cXHRtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzg4ODtcXG5cXHR3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5cXHRjb2xvcjogI2FhYTtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1QkFBdUI7O0FBRXZCO0NBQ0MsdUJBQXVCO0NBQ3ZCLDBEQUFnRDtDQUNoRCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLHVEQUF1RDtDQUN2RCxrQkFBa0IsRUFBRSxxQ0FBcUM7Q0FDekQsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsVUFBVTtDQUNWLHFCQUFxQjtBQUN0Qjs7QUFFQSxxQkFBcUI7QUFDckI7Q0FDQyxZQUFZLEVBQUUsdURBQXVEO0NBQ3JFLFlBQVksRUFBRSxpQ0FBaUM7Q0FDL0MsZUFBZSxFQUFFLDRDQUE0QztDQUM3RCxVQUFVLEVBQUUsZ0JBQWdCO0NBQzVCLE1BQU0sRUFBRSxvQkFBb0I7Q0FDNUIsT0FBTztDQUNQLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCLEVBQUUsOEJBQThCO0NBQ2xELGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHVEQUF1RDtDQUN2RCx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBO0NBQ0MsdURBQXVEO0NBQ3ZELHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx1REFBdUQ7Q0FDdkQsV0FBVztDQUNYLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLHVEQUF1RDtDQUN2RCxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLDZCQUE2QjtDQUM3QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHVEQUF1RDtDQUN2RCxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQSx1Q0FBdUM7QUFDdkM7Q0FDQyxVQUFVO0NBQ1YsU0FBUztDQUNULFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUEsa0NBQWtDOztBQUVsQztDQUNDLGNBQWMsRUFBRSxzQkFBc0I7Q0FDdEMsZUFBZSxFQUFFLGtCQUFrQjtDQUNuQyxVQUFVLEVBQUUsZUFBZTtDQUMzQixPQUFPO0NBQ1AsTUFBTTtDQUNOLFdBQVcsRUFBRSxlQUFlO0NBQzVCLFlBQVksRUFBRSxnQkFBZ0I7Q0FDOUIsY0FBYyxFQUFFLDRCQUE0QjtDQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7Q0FDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzVEOztBQUVBLHNCQUFzQjtBQUN0QjtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7Q0FDcEQsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixVQUFVLEVBQUUsb0RBQW9EO0FBQ2pFOztBQUVBLHFCQUFxQjtBQUNyQjtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU3R5bGUgcGFnZSBjb250ZW50ICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJPcGVuU2Fuc1xcXCI7XFxuXFx0c3JjOiB1cmwoXFxcIi4vT3BlblNhbnMtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4ge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0bWFyZ2luLWxlZnQ6IDMwMHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxudWwge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4vKiBUaGUgc2lkZWJhciBtZW51ICovXFxuLnNpZGVOYXYge1xcblxcdGhlaWdodDogMTAwJTsgLyogRnVsbC1oZWlnaHQ6IHJlbW92ZSB0aGlzIGlmIHlvdSB3YW50IFxcXCJhdXRvXFxcIiBoZWlnaHQgKi9cXG5cXHR3aWR0aDogMzAwcHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cXG5cXHRwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xcblxcdHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXFxuXFx0dG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cXG5cXHRsZWZ0OiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuXFx0Y29sb3I6ICNhYWFhYWE7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXFxuXFx0bWFyZ2luLXRvcDogNDVweDtcXG59XFxuXFxuLnNpZGVOYXZIZWFkZXIge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGNvbG9yOiAjMzMzMzMzO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2lkZU5hdkxpbmtzIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTJweDtcXG5cXHRjb2xvcjogIzMzMzMzMztcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNpZGVOYXZMaW5rczpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcXG59XFxuXFxuLnRvcE5hdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmOTAwMDtcXG5cXHRwYWRkaW5nOiAwcHg7XFxuXFx0aGVpZ2h0OiA0NXB4O1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50b3BOYXYgYSB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRmbG9hdDogbGVmdDtcXG5cXHRjb2xvcjogI2ZmZjljYTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTRweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi50b3BOYXYgYTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYTYzMztcXG59XFxuXFxuLnRvZG9JdGVtTGlzdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRwYWRkaW5nOiA3cHg7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2NjY2M7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmViZWJlNDk7XFxufVxcblxcbi50b2RvSXRlbUxpc3RIZWFkZXIge1xcblxcdG1hcmdpbi1yaWdodDogNDBweDtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi8qIFByb2plY3QgRGlzcGxheSByZW1vdmUgdG9kbyBidXR0b24gKi9cXG4ucmVtb3ZlLXRvZG8ge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGNvbG9yOiAjYWFhO1xcblxcdGFsaWduLWl0ZW1zOiByaWdodDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yZW1vdmUtdG9kbzpob3ZlcixcXG4ucmVtb3ZlLXRvZG86Zm9jdXMge1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNb2RhbCB0b2RvIGluZm9ybWF0aW9uIHN0eWxlcyAqL1xcblxcbi5tb2RhbCB7XFxuXFx0ZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuXFx0cG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuXFx0ei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuXFx0aGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcblxcdG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG5cXHRtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzg4ODtcXG5cXHR3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG5cXHRjb2xvcjogI2FhYTtcXG5cXHRmbG9hdDogcmlnaHQ7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImltcG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QsIGRpc3BsYXlQcm9qZWN0TmFtZXMgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdFwiO1xuaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IGluaXRpYXRlU3RvcmFnZSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgaG9tZVBhZ2UgPSAoKCkgPT4ge1xuXHQvLyBJbml0aWF0ZSBsb2NhbCBzdG9yYWdlXG5cdFxuXHQvLyBob21lIHBhZ2UgZXh0cmEgaW5mb3JtYXRpb24gZGlzcGxheVxuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcblx0Y29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuXHRsZXQgdG9wTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dG9wTmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJ0b3BOYXZcIik7XG5cblx0bGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bG9nby5pbm5lckhUTUwgPSBcIlRyZWxsaXN0XCI7XG5cblx0bGV0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0YWRkVGFzay5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cdGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHQvLyBQcm9qZWN0IGFkZCB0b2RvIGl0ZW0gRE9NIGVsZW1lbnQgd2hpY2ggdGhlbiBjYWxscyB0aGUgcHJvamVjdCBhZGQgdG9kbyBpdGVtIGV2ZW50XG5cdFx0aW5wdXRUYXNrKCk7XG5cdFx0Y29uc29sZS5sb2coXCJQcm9qZWN0IGFkZCB0b2RvIGl0ZW1cIik7XG5cdH0pO1xuXG5cdGxldCBzaWRlTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2lkZU5hdkJhci5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdlwiKTtcblxuXHRsZXQgcHJvamVjdE5hdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRwcm9qZWN0TmF2VGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXHRwcm9qZWN0TmF2VGl0bGUuY2xhc3NMaXN0LmFkZChcInNpZGVOYXZIZWFkZXJcIik7XG5cblx0bGV0IHByb2plY3ROYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdE5hdkxpc3QuaWQgPSBcInByb2plY3ROYXZMaXN0XCI7XG5cblx0bGV0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0YWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdkxpbmtzXCIpO1xuXHRhZGRQcm9qZWN0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcblx0YWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIENhbGxzIG5ldyBET00gZXZlbnQgdG8gaGFuZGxlIHByb2plY3QgYWRkIHdoaWNoIHRoZW4gY2FsbHMgdGhlIG5ldyBwcm9qZWN0IGZ1bmN0aW9uXG5cdFx0aW5wdXRQcm9qZWN0KCk7XG5cdFx0Y29uc29sZS5sb2coXCJDcmVhdGUgbmV3IHByb2plY3RcIik7XG5cdH0pO1xuXG5cdHRvcE5hdkJhci5hcHBlbmQobG9nbywgYWRkVGFzayk7XG5cdHNpZGVOYXZCYXIuYXBwZW5kKHByb2plY3ROYXZUaXRsZSwgcHJvamVjdE5hdkxpc3QsIGFkZFByb2plY3QpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZCh0b3BOYXZCYXIsIHNpZGVOYXZCYXIsIGNvbnRlbnQpO1xuXG5cdFxufSkoKTtcblxuY29uc3QgaW5wdXRUYXNrID0gKCkgPT4ge1xuXHQvLyBjcmVhdGVzIERPTSBlbGVtZW50cyB3aGljaCBjYW4gdGFrZSBpbnB1dHMgZm9yIG5ldyB0YXNrIHdoaWNoIGNhbiB0aGVuIGNhbGwgdG9kbyBpdGVtIGZ1bmN0aW9uc1xuXHRsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuXHRsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0dGl0bGVJbnB1dC5pZCA9IFwidGl0bGVJbnB1dFwiO1xuXHR0aXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0dGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFzayBuYW1lXCI7XG5cblx0bGV0IHNlbGVjdFByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0c2VsZWN0UHJvamVjdE1lbnUuaWQgPSBcInNlbGVjdFByb2plY3RNZW51XCI7XG5cdHNlbGVjdFByb2plY3RNZW51Lm5hbWUgPSBcInByb2plY3RTZWxlY3RlZFwiO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBzaW1wbGlmeSBwcm9qZWN0IGxpc3Qgb3V0cHV0XG5cdFx0bGV0IHNlbGVjdFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zb2xlLmxvZyhzZWxlY3RQcm9qZWN0KTtcblxuXHRcdGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdG9wdGlvbi5pbm5lckhUTUwgPSBzZWxlY3RQcm9qZWN0Lm5hbWU7XG5cblx0XHRzZWxlY3RQcm9qZWN0TWVudS5hcHBlbmQob3B0aW9uKTtcblx0fVxuXG5cdGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRsZXQgc2VsZWN0ZWRQcm9qZWN0SW5kZXggPVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0TWVudVwiKS5zZWxlY3RlZEluZGV4O1xuXHRcdGxldCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFtzZWxlY3RlZFByb2plY3RJbmRleF07XG5cblx0XHRsZXQgdG9kb0l0ZW1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKS52YWx1ZTtcblxuXHRcdGxldCBuZXdUb2RvSXRlbSA9IHRvZG9JdGVtKGAke3RvZG9JdGVtVGl0bGV9YCk7XG5cdFx0c2VsZWN0ZWRQcm9qZWN0LmFkZFRvZG9JdGVtKG5ld1RvZG9JdGVtKTtcblxuXHRcdGRpc3BsYXlQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG5cdFx0dXBkYXRlU3RvcmFnZShwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdCk7XG5cdH0pO1xuXG5cdGNvbnRlbnQuYXBwZW5kKHRpdGxlSW5wdXQsIHNlbGVjdFByb2plY3RNZW51LCBhZGRUYXNrQnRuKTtcbn07XG5cbmNvbnN0IGlucHV0UHJvamVjdCA9ICgpID0+IHtcblx0Ly8gY3JlYXRlcyBET00gZWxlbWVudHMgd2hpY2ggY2FuIHRha2UgaW5wdXRzIGZvciBuZXcgcHJvamVjdCB0byBjYWxsIG5ldyBwcm9qZWN0IGZ1bmN0aW9uXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRsZXQgaW5wdXRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuXHRsZXQgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdHByb2plY3RUaXRsZUlucHV0LmlkID0gXCJwcm9qZWN0VGl0bGVJbnB1dFwiO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHByb2plY3RUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdCBOYW1lXCI7XG5cblx0bGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IFwiQ3JlYXRlIE5ldyBQcm9qZWN0XCI7XG5cdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG5cdFx0bGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0KGAke3Byb2plY3RUaXRsZUlucHV0LnZhbHVlfWApO1xuXHRcdGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuXHRcdHByb2plY3RMaXN0LmFkZFByb2plY3QobmV3UHJvamVjdCk7XG5cdFx0Y29uc29sZS5sb2cocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZXMoKTtcblx0XHRpbnB1dFByb2plY3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblx0XHR1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0LnByb2plY3RMaXN0KTtcblx0XHRyZXR1cm4gbmV3UHJvamVjdDtcblx0fSk7XG5cblx0aW5wdXRQcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0VGl0bGVJbnB1dCwgYWRkUHJvamVjdEJ0bik7XG5cdGNvbnRlbnQuYXBwZW5kKGlucHV0UHJvamVjdERpdik7XG59O1xuXG5leHBvcnQgeyBob21lUGFnZSwgaW5wdXRUYXNrLCBpbnB1dFByb2plY3QgfTtcbiIsImltcG9ydCB7IHRvZG9QYWdlIH0gZnJvbSBcIi4vZGlzcGxheVRvZG9JdGVtXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGluaXRpYXRlU3RvcmFnZSwgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gZGlzcGxheXMgaW5kaXZpZHVhbCBwcm9qZWN0cyBvbiBwYWdlXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdGNvbnN0IHRvZG9JdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdC8vIGNsZWFyIGNvbnRlbnRcblx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0cHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInRvZG9JdGVtTGlzdEhlYWRlclwiKTtcblx0cHJvamVjdE5hbWUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0b2RvSXRlbSA9IHByb2plY3QucHJvamVjdExpc3RbaV07XG5cdFx0bGV0IHRvZG9JdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdHRvZG9JdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvSXRlbUxpc3RcIik7XG5cblx0XHR0b2RvSXRlbURpdi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gY2FsbHMgbW9yZSBpbmZvcm1hdGlvbiB0byB0aGUgcGFnZSBpbiBmb3JtIG9mIG1vZGFsIHdoaWNoIGNhbiB0aGVuIGJlIGVkaXRlZFxuXHRcdFx0dG9kb1BhZ2UodG9kb0l0ZW0pO1xuXHRcdH07XG5cblx0XHRsZXQgdG9kb0l0ZW1NYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0b2RvVGl0bGUuaW5uZXJIVE1MID0gdG9kb0l0ZW0udGl0bGU7XG5cblx0XHQvLyBNYWtlIGl0IGNoZWNrIGlmIHRoZXJlIGlzIHNjaGVkdWxlZCBkYXRlOiBpZiBzY2hlZHVsZWQgZGlzcGxheSBkYXRlLCBpZiBub3QgdGhlbiBkaXNwbGF5IGJ1dHRvbiB0byBzY2hlZHVsZSB0YXNrXG5cdFx0bGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRpZiAodG9kb0l0ZW0uZHVlRGF0ZSA9PSBudWxsKSB7XG5cdFx0XHR0b2RvSXRlbU1haW5JbmZvLmFwcGVuZCh0b2RvVGl0bGUpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJubyBkdWUgZGF0ZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9kb0R1ZURhdGUuaW5uZXJIVE1MID0gdG9kb0l0ZW0uZHVlRGF0ZTtcblx0XHRcdHRvZG9JdGVtTWFpbkluZm8uYXBwZW5kKHRvZG9UaXRsZSwgdG9kb0R1ZURhdGUpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlbW92ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0XHRyZW1vdmVUb2RvQnRuLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuXHRcdHJlbW92ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcInJlbW92ZS10b2RvXCIpO1xuXG5cdFx0cmVtb3ZlVG9kb0J0bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cHJvamVjdC5yZW1vdmVUb2RvSXRlbShgJHtpfWApO1xuXHRcdFx0ZGlzcGxheVByb2plY3QocHJvamVjdCk7XG5cdFx0XHR1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0LnByb2plY3RMaXN0KTtcblx0XHR9O1xuXG5cdFx0dG9kb0l0ZW1EaXYuYXBwZW5kKHRvZG9JdGVtTWFpbkluZm8sIHJlbW92ZVRvZG9CdG4pO1xuXG5cdFx0dG9kb0l0ZW1MaXN0LmFwcGVuZCh0b2RvSXRlbURpdik7XG5cdH1cblx0Y29udGVudC5hcHBlbmQocHJvamVjdE5hbWUsIHRvZG9JdGVtTGlzdCk7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdE5hbWVzID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgZ2V0UHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdDtcblxuXHRsZXQgZGlzcGxheVByb2plY3RMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmF2TGlzdFwiKTtcblx0Ly8gY2xlYXJzIHByb2plY3QgbGlzdFxuXHRkaXNwbGF5UHJvamVjdExpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRsZXQgZGlzcGxheVByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0UHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY3VycmVudFByb2plY3QgPSBnZXRQcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cdFx0bGV0IGRpc3BsYXlQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInNpZGVOYXZMaW5rc1wiKTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWUuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuZ2V0TmFtZSgpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZGlzcGxheVByb2plY3QoY3VycmVudFByb2plY3QpO1xuXHRcdH07XG5cdFx0ZGlzcGxheVByb2plY3RMaXN0LmFwcGVuZENoaWxkKGRpc3BsYXlQcm9qZWN0TmFtZSk7XG5cdFx0Y29uc29sZS5sb2coZGlzcGxheVByb2plY3ROYW1lKTtcblx0fVxuXHRjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdExpc3QpO1xuXHRkaXNwbGF5UHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3RMaXN0KTtcblx0cmV0dXJuIGRpc3BsYXlQcm9qZWN0TGlzdERpdjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5UHJvamVjdE5hbWVzIH07XG4iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlIb21lUGFnZVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgeyBpbml0aWF0ZVN0b3JhZ2UsIHVwZGF0ZVN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuLy8gRGlzcGxheSBkZXN0YWlsZWQgaW5mb3JtYXRpb24gZm9yIHRvZG8gaXRlbVxuXG5jb25zdCB0b2RvUGFnZSA9ICh0b2RvKSA9PiB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdGxldCBkZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkZXRhaWxzTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXHRsZXQgZGV0YWlsc01vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRldGFpbHNNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG5cdGxldCBzcGFuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c3BhbkNsb3NlLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuXHRzcGFuQ2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuXG5cdHNwYW5DbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0fTtcblxuXHR3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGlmIChldmVudC50YXJnZXQgPT0gZGV0YWlsc01vZGFsKSB7XG5cdFx0XHRkZXRhaWxzTW9kYWwucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCB0b2RvSW5mb3JtYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRkZXRhaWxzTW9kYWwuYXBwZW5kQ2hpbGQoZGV0YWlsc01vZGFsQ29udGVudCk7XG5cdGRldGFpbHNNb2RhbENvbnRlbnQuYXBwZW5kKHNwYW5DbG9zZSwgdG9kb0luZm9ybWF0aW9uKTtcblxuXHRsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0aXRsZS5pZCA9IFwidGl0bGVcIjtcblxuXHR0aXRsZS5pbm5lckhUTUwgPSB0b2RvLnRpdGxlO1xuXHR0aXRsZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdHRpdGxlLm9uY2xpY2sgPSBcIlwiO1xuXG5cdFx0bGV0IGVkaXRUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRlZGl0VGl0bGVEaXYudHlwZSA9IFwidGV4dFwiO1xuXHRcdGVkaXRUaXRsZURpdi52YWx1ZSA9IHRvZG8udGl0bGU7XG5cblx0XHRsZXQgc2F2ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRzYXZlVGl0bGUuaW5uZXJIVE1MID0gXCJTYXZlXCI7XG5cdFx0c2F2ZVRpdGxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgdXBkYXRlZFRpdGxlID0gZWRpdFRpdGxlRGl2LnZhbHVlO1xuXHRcdFx0Y29uc29sZS5sb2codXBkYXRlZFRpdGxlKTtcblx0XHRcdHRvZG8uZWRpdFRpdGxlKHVwZGF0ZWRUaXRsZSk7XG5cdFx0XHRkZXRhaWxzTW9kYWwucmVtb3ZlKCk7XG5cdFx0XHR0b2RvUGFnZSh0b2RvKTtcblx0XHRcdHVwZGF0ZVN0b3JhZ2UocHJvamVjdExpc3QucHJvamVjdExpc3QpO1xuXG5cdFx0XHQvLyBGaW5kIGEgd2F5IHRvIHJlbG9hZCB0aGUgcHJvamVjdCBsaXN0IHBhZ2UgYWZ0ZXIgY2xvc2luZyBtb2RhbFxuXHRcdH07XG5cblx0XHRsZXQgY2FuY2VsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGNhbmNlbFRpdGxlLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XG5cdFx0Y2FuY2VsVGl0bGUub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0XHRcdHRvZG9QYWdlKHRvZG8pO1xuXHRcdH07XG5cblx0XHR0aXRsZS5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdHRpdGxlLmFwcGVuZChlZGl0VGl0bGVEaXYsIHNhdmVUaXRsZSwgY2FuY2VsVGl0bGUpO1xuXHR9O1xuXG5cdGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRvZG8uZGVzY3JpcHRpb247XG5cdGRlc2NyaXB0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0ZGVzY3JpcHRpb24ub25jbGljayA9IFwiXCI7XG5cblx0XHRsZXQgZWRpdERlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdGVkaXREZXNjcmlwdGlvbkRpdi50eXBlID0gXCJ0ZXh0XCI7XG5cdFx0ZWRpdERlc2NyaXB0aW9uRGl2LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcblxuXHRcdGxldCBzYXZlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdHNhdmVEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlNhdmVcIjtcblx0XHRzYXZlRGVzY3JpcHRpb24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCB1cGRhdGVkRGVzY3JpcHRpb24gPSBlZGl0RGVzY3JpcHRpb25EaXYudmFsdWU7XG5cdFx0XHR0b2RvLmVkaXREZXNjcmlwdGlvbih1cGRhdGVkRGVzY3JpcHRpb24pO1xuXHRcdFx0ZGV0YWlsc01vZGFsLnJlbW92ZSgpO1xuXHRcdFx0dG9kb1BhZ2UodG9kbyk7XG5cdFx0XHR1cGRhdGVTdG9yYWdlKHByb2plY3RMaXN0LnByb2plY3RMaXN0KTtcblx0XHR9O1xuXG5cdFx0bGV0IGNhbmNlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRjYW5jZWxEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkNhbmNlbFwiO1xuXHRcdGNhbmNlbERlc2NyaXB0aW9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkZXRhaWxzTW9kYWwucmVtb3ZlKCk7XG5cdFx0XHR0b2RvUGFnZSh0b2RvKTtcblx0XHR9O1xuXG5cdFx0ZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJcIjtcblx0XHRkZXNjcmlwdGlvbi5hcHBlbmQoXG5cdFx0XHRlZGl0RGVzY3JpcHRpb25EaXYsXG5cdFx0XHRzYXZlRGVzY3JpcHRpb24sXG5cdFx0XHRjYW5jZWxEZXNjcmlwdGlvblxuXHRcdCk7XG5cdH07XG5cblx0bGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkdWVEYXRlLmlubmVySFRNTCA9IHRvZG8uZHVlRGF0ZTtcblxuXHRsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLnByaW9yaXR5O1xuXG5cblx0dG9kb0luZm9ybWF0aW9uLmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcblxuXHRjb250ZW50LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbCk7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyB0b2RvUGFnZSB9O1xuIiwiaW1wb3J0IHsgdG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvSXRlbXNcIjtcbmltcG9ydCB7IHByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCB1cGRhdGVTdG9yYWdlID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0Y29uc3QgQVBQX0RBVEFfS0VZID0gXCJwcm9qZWN0RGF0YVwiO1xuXG5cdGlmICh0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiKSB7XG5cdFx0ZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oQVBQX0RBVEFfS0VZLCBkYXRhKTtcbn07XG5cbmNvbnN0IGluaXRpYXRlU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gR2V0IGRhdGE7XG5cdC8vIGxvb3AgdGhyb3VnaCBhcnJheSBhbmQgY3JlYXRlIG5ldyBwcm9qZWN0cztcblx0Ly8gbG9vcCB0aHJvdWdoIHByb2plY3QgbGlzdHMgYW5kIGNyZWF0ZSBuZXcgdG9kbyBpdGVtc1xuXHRcblx0Y29uc3QgQVBQX0RBVEFfS0VZID0gXCJwcm9qZWN0RGF0YVwiO1xuXG5cdGxldCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQVBQX0RBVEFfS0VZKTtcblx0XG5cblx0bGV0IGluaXRpYWxEYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbml0aWFsRGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdChpbml0aWFsRGF0YVtpXS5uYW1lKTtcblx0XHRjb25zb2xlLmxvZyhpbml0aWFsRGF0YVtpXS5uYW1lKTtcblx0XHRjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGluaXRpYWxEYXRhW2ldLnByb2plY3RMaXN0Lmxlbmd0aDsgaisrKSB7XG5cdFx0XHRsZXQgZ2V0VG9kbyA9IGluaXRpYWxEYXRhW2ldLnByb2plY3RMaXN0W2pdO1xuXHRcdFx0bGV0IG5ld1RvZG8gPSB0b2RvSXRlbShnZXRUb2RvLnRpdGxlLCBnZXRUb2RvLmRlc2NyaXB0aW9uLCBnZXRUb2RvLmR1ZURhdGUsIGdldFRvZG8ucHJpb3JpdHkpO1xuXHRcdFx0Y29uc29sZS5sb2coaW5pdGlhbERhdGFbaV0ucHJvamVjdExpc3Rbal0pO1xuXHRcdFx0Y29uc29sZS5sb2cobmV3VG9kbyk7XG5cdFx0XHRuZXdQcm9qZWN0LmFkZFRvZG9JdGVtKG5ld1RvZG8pO1xuXHRcdFx0Y29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKG5ld1Byb2plY3QpXG5cdFx0cHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RMaXN0KTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZVN0b3JhZ2UsIGluaXRpYXRlU3RvcmFnZSB9O1xuIiwiLy8gUHJvamVjdHMgd2hlcmUgdG9kbyBsaXN0IGl0ZW1zIGNhbiBiZSBrZXB0LiBQcm9qZWN0cyBjYW4gYmUgY3JlYXRlZCBhbmQgZGVsZXRlZC4gRGVmYXVsdCBwcm9qZWN0IGNyZWF0ZWQgaW5pdGlhbGx5IGFuZCB0b2RvIGl0ZW1zIGFyZSBhdXRvIGFkZGVkXG5cbmNvbnN0IHByb2plY3QgPSAobmFtZSkgPT4ge1xuXHRsZXQgcHJvamVjdExpc3QgPSBbXTsgLy8gc2hvdWxkIGNoYW5nZSB0byB0b2RvbGlzdFxuXG5cdGNvbnN0IGFkZFRvZG9JdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb2plY3RMaXN0KTtcblx0XHR0aGlzLnByb2plY3RMaXN0LnB1c2goaXRlbSk7XG5cdH07XG5cblx0Y29uc3QgcmVtb3ZlVG9kb0l0ZW0gPSBmdW5jdGlvbiAoaW5kZXgpIHtcblx0XHRjb25zb2xlLmxvZyhcInJlbW92ZWQgdG9kbyBpdGVtIHN1Y2Nlc3MgeWF5IVwiKTtcblx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLnByb2plY3RMaXN0W2luZGV4XX1gKTtcblx0XHQvLyByZW1vdmUgdG9kbyBpdGVtICh1c2UgbG9jYWwgc3RvcmFnZSB3aXRoIGluZGV4IG9mKVxuXHRcdHRoaXMucHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0fTtcblxuXHRjb25zdCBnZXROYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9O1xuXG5cdHJldHVybiB7IGdldE5hbWUsIG5hbWUsIHByb2plY3RMaXN0LCBhZGRUb2RvSXRlbSwgcmVtb3ZlVG9kb0l0ZW0gfTtcbn07XG5cbi8vIFByb2plY3QgbGlzdCBvZiBhbGwgdGhlIHByb2plY3RzOlxuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgoKSA9PiB7XG5cdGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5cdGNvbnN0IGFkZFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuXHRcdHRoaXMucHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcblx0fTtcblxuXHRjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5cdHJldHVybiB7IHByb2plY3RMaXN0LCBhZGRQcm9qZWN0LCBnZXRDdXJyZW50UHJvamVjdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgcHJvamVjdCwgcHJvamVjdExpc3QgfTtcbiIsIi8vIENyZWF0ZXMgdGhlIHRvZG8gaXRlbXMgdXNpbmcgYSBmYWN0b3J5IGZ1bmN0aW9uLlxuXG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG5cdC8vIHRvZG8gSXRlbSBjb25zdHJ1Y3RvclxuXG5cdGNvbnN0IGVkaXRUaXRsZSA9IGZ1bmN0aW9uICh1cGRhdGVkVGl0bGUpIHtcblx0XHR0aGlzLnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGVkRGVzY3JpcHRpb24pIHtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlZERlc2NyaXB0aW9uO1xuXHRcdHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREdWVEYXRlID0gZnVuY3Rpb24gKHVwZGF0ZWREdWVEYXRlKSB7XG5cdFx0dGhpcy5kdWVEYXRlID0gdXBkYXRlZER1ZURhdGU7XG5cdFx0cmV0dXJuIHRoaXMuZHVlRGF0ZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0ZWRpdFRpdGxlLFxuXHRcdGVkaXREZXNjcmlwdGlvbixcblx0XHRlZGl0RHVlRGF0ZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7IHRvZG9JdGVtIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5UHJvamVjdE5hbWVzIH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUhvbWVQYWdlXCI7XG5pbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuaW1wb3J0IHsgdXBkYXRlU3RvcmFnZSwgaW5pdGlhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIGxldCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoXCJEZWZhdWx0IFByb2plY3RcIik7XG4vLyBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbi8vIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KTtcblxuLy8gbGV0IHNlY29uZGFyeVByb2plY3QgPSBwcm9qZWN0KFwiU2Vjb25kYXJ5IFByb2plY3RcIik7XG4vLyBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHNlY29uZGFyeVByb2plY3QpO1xuXG4vLyBjb25zdCBwb3RhdG8gPSB0b2RvSXRlbShcbi8vIFx0XCJQb3RhdG8gVGl0bGVcIixcbi8vIFx0XCJ0aGlzIGlzIGRlc2NyaXB0aW9uXCIsXG4vLyBcdFwiMTIvMDQvMjAyNVwiLFxuLy8gXHRcIlRvcCBwcmlvcml0eVwiXG4vLyApO1xuXG4vLyBjb25zdCBwb3RhdG8yID0gdG9kb0l0ZW0oXG4vLyBcdFwiUG90YXRvIFRpdGxlXCIsXG4vLyBcdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuLy8gXHRcIjEyLzA0LzIwMjVcIixcbi8vIFx0XCJUb3AgcHJpb3JpdHlcIlxuLy8gKTtcblxuLy8gcG90YXRvLmVkaXRUaXRsZShcIm5ld1BvdGF0b1RpdGxlXCIpO1xuLy8gZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0ocG90YXRvKTtcbi8vIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG9JdGVtKHBvdGF0bzIpO1xuaW5pdGlhdGVTdG9yYWdlKCk7XG5kaXNwbGF5UHJvamVjdChwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdFswXSk7XG5kaXNwbGF5UHJvamVjdE5hbWVzKCk7XG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9