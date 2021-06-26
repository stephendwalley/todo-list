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
			console.log("no due date")
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
	}

	window.onclick = function(event) {
		if (event.target == detailsModal) {
		  detailsModal.remove();
		}
	  }

	let todoInformation = document.createElement("p");

	detailsModal.appendChild(detailsModalContent);
	detailsModalContent.append(spanClose, todoInformation);

	let title = todo.title;
	let description = todo.description;
	let dueDate = todo.dueDate;
	let priority = todo.priority;
	let notes = todo.notes;

	todoInformation.innerHTML += `<ul>
            <li>${title}</li>
            <li>${description}</li>
            <li>${dueDate}</li>
            <li>${priority}</li>
            <li>${notes}</li>
        </ul>`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDN0I7QUFDbkUsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCLENBQUMsa0RBQTZCO0FBQ3RHO0FBQ0Esa0ZBQWtGLDhCQUE4Qix5RUFBeUUscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsY0FBYyxlQUFlLEdBQUcsV0FBVyw4REFBOEQsdUJBQXVCLDhEQUE4RCxHQUFHLFFBQVEsZUFBZSwwQkFBMEIsR0FBRyxzQ0FBc0MsaUJBQWlCLDRFQUE0RSx1REFBdUQsNkRBQTZELDZCQUE2QixrQ0FBa0MsOEJBQThCLG1CQUFtQix1QkFBdUIscURBQXFELEdBQUcsb0JBQW9CLDhEQUE4RCw4QkFBOEIsMEJBQTBCLG9CQUFvQixtQkFBbUIsbUJBQW1CLEdBQUcsbUJBQW1CLDhEQUE4RCw4QkFBOEIsMEJBQTBCLG9CQUFvQixtQkFBbUIsbUJBQW1CLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLGFBQWEsOEJBQThCLGlCQUFpQixpQkFBaUIscUJB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z1QztBQUNVO0FBQ3NCO0FBQzFCO0FBQ0E7QUFDekI7OztBQUdwQixxQkFBcUIsaURBQU87QUFDNUIsNERBQXNCO0FBQ3RCOztBQUVBLHVCQUF1QixpREFBTztBQUM5Qiw0REFBc0I7O0FBRXRCLGVBQWUsb0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG9EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwrREFBYztBQUNkLG9FQUFtQjs7QUFFbkIsWUFBWSxpREFBVyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vT3BlblNhbnMtUmVndWxhci50dGZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTdHlsZSBwYWdlIGNvbnRlbnQgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogXFxcIk9wZW5TYW5zXFxcIjtcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdG1hcmdpbi1sZWZ0OiAzMDBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbnVsIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogVGhlIHNpZGViYXIgbWVudSAqL1xcbi5zaWRlTmF2IHtcXG5cXHRoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcXFwiYXV0b1xcXCIgaGVpZ2h0ICovXFxuXFx0d2lkdGg6IDMwMHB4OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXFxuXFx0cG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cXG5cXHR6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xcblxcdHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXFxuXFx0bGVmdDogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcblxcdGNvbG9yOiAjYWFhYWFhO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xcblxcdG1hcmdpbi10b3A6IDQ1cHg7XFxufVxcblxcbi5zaWRlTmF2SGVhZGVyIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRjb2xvcjogIzMzMzMzMztcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNpZGVOYXZMaW5rcyB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Y29sb3I6ICMzMzMzMzM7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlTmF2TGlua3M6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxufVxcblxcbi50b3BOYXYge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZjkwMDA7XFxuXFx0cGFkZGluZzogMHB4O1xcblxcdGhlaWdodDogNDVweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9wTmF2IGEge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0Y29sb3I6ICNmZmY5Y2E7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBhZGRpbmc6IDE0cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4udG9wTmF2IGE6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmE2MzM7XFxufVxcblxcbi50b2RvSXRlbUxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbi1yaWdodDogNDBweDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvZG9JdGVtTGlzdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JlYmViZTQ5O1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0SGVhZGVyIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0IERpc3BsYXkgcmVtb3ZlIHRvZG8gYnV0dG9uICovXFxuLnJlbW92ZS10b2RvIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRjb2xvcjogI2FhYTtcXG5cXHRhbGlnbi1pdGVtczogcmlnaHQ7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVtb3ZlLXRvZG86aG92ZXIsXFxuLnJlbW92ZS10b2RvOmZvY3VzIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTW9kYWwgdG9kbyBpbmZvcm1hdGlvbiBzdHlsZXMgKi9cXG5cXG4ubW9kYWwge1xcblxcdGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcblxcdHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcblxcdGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG5cXHRvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuXFx0bWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuXFx0d2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuXFx0Y29sb3I6ICNhYWE7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsdUJBQXVCOztBQUV2QjtDQUNDLHVCQUF1QjtDQUN2QiwwREFBZ0Q7Q0FDaEQsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyx1REFBdUQ7Q0FDdkQsa0JBQWtCLEVBQUUscUNBQXFDO0NBQ3pELGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixxQkFBcUI7QUFDdEI7O0FBRUEscUJBQXFCO0FBQ3JCO0NBQ0MsWUFBWSxFQUFFLHVEQUF1RDtDQUNyRSxZQUFZLEVBQUUsaUNBQWlDO0NBQy9DLGVBQWUsRUFBRSw0Q0FBNEM7Q0FDN0QsVUFBVSxFQUFFLGdCQUFnQjtDQUM1QixNQUFNLEVBQUUsb0JBQW9CO0NBQzVCLE9BQU87Q0FDUCx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLGtCQUFrQixFQUFFLDhCQUE4QjtDQUNsRCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx1REFBdUQ7Q0FDdkQseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsY0FBYztDQUNkLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHVEQUF1RDtDQUN2RCx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdURBQXVEO0NBQ3ZELFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQix1REFBdUQ7Q0FDdkQscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWiw2QkFBNkI7Q0FDN0IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix1REFBdUQ7Q0FDdkQsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0NBQ0MsVUFBVTtDQUNWLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBLGtDQUFrQzs7QUFFbEM7Q0FDQyxjQUFjLEVBQUUsc0JBQXNCO0NBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7Q0FDbkMsVUFBVSxFQUFFLGVBQWU7Q0FDM0IsT0FBTztDQUNQLE1BQU07Q0FDTixXQUFXLEVBQUUsZUFBZTtDQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0NBQzlCLGNBQWMsRUFBRSw0QkFBNEI7Q0FDNUMsOEJBQThCLEVBQUUsbUJBQW1CO0NBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM1RDs7QUFFQSxzQkFBc0I7QUFDdEI7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCLEVBQUUsa0NBQWtDO0NBQ3BELGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNqRTs7QUFFQSxxQkFBcUI7QUFDckI7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiT3BlblNhbnNcXFwiO1xcblxcdHNyYzogdXJsKFxcXCIuL09wZW5TYW5zLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdG1hcmdpbi1sZWZ0OiAzMDBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbnVsIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogVGhlIHNpZGViYXIgbWVudSAqL1xcbi5zaWRlTmF2IHtcXG5cXHRoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcXFwiYXV0b1xcXCIgaGVpZ2h0ICovXFxuXFx0d2lkdGg6IDMwMHB4OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXFxuXFx0cG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cXG5cXHR6LWluZGV4OiAxOyAvKiBTdGF5IG9uIHRvcCAqL1xcblxcdHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXFxuXFx0bGVmdDogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcblxcdGNvbG9yOiAjYWFhYWFhO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xcblxcdG1hcmdpbi10b3A6IDQ1cHg7XFxufVxcblxcbi5zaWRlTmF2SGVhZGVyIHtcXG5cXHRmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRjb2xvcjogIzMzMzMzMztcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNpZGVOYXZMaW5rcyB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDEycHg7XFxuXFx0Y29sb3I6ICMzMzMzMzM7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaWRlTmF2TGlua3M6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XFxufVxcblxcbi50b3BOYXYge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZjkwMDA7XFxuXFx0cGFkZGluZzogMHB4O1xcblxcdGhlaWdodDogNDVweDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udG9wTmF2IGEge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0ZmxvYXQ6IGxlZnQ7XFxuXFx0Y29sb3I6ICNmZmY5Y2E7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBhZGRpbmc6IDE0cHggMTZweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4udG9wTmF2IGE6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmE2MzM7XFxufVxcblxcbi50b2RvSXRlbUxpc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbi1yaWdodDogNDBweDtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRvZG9JdGVtTGlzdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JlYmViZTQ5O1xcbn1cXG5cXG4udG9kb0l0ZW1MaXN0SGVhZGVyIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0IERpc3BsYXkgcmVtb3ZlIHRvZG8gYnV0dG9uICovXFxuLnJlbW92ZS10b2RvIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRjb2xvcjogI2FhYTtcXG5cXHRhbGlnbi1pdGVtczogcmlnaHQ7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmVtb3ZlLXRvZG86aG92ZXIsXFxuLnJlbW92ZS10b2RvOmZvY3VzIHtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTW9kYWwgdG9kbyBpbmZvcm1hdGlvbiBzdHlsZXMgKi9cXG5cXG4ubW9kYWwge1xcblxcdGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcblxcdHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcblxcdHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcblxcdGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG5cXHRvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuXFx0bWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuXFx0d2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuXFx0Y29sb3I6ICNhYWE7XFxuXFx0ZmxvYXQ6IHJpZ2h0O1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5UHJvamVjdE5hbWVzIH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcbmltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgoKSA9PiB7XG5cdC8vIGhvbWUgcGFnZSBleHRyYSBpbmZvcm1hdGlvbiBkaXNwbGF5XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGVudC5pZCA9IFwiY29udGVudFwiO1xuXHRjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG5cdGxldCB0b3BOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0b3BOYXZCYXIuY2xhc3NMaXN0LmFkZChcInRvcE5hdlwiKTtcblxuXHRsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvLmlubmVySFRNTCA9IFwiVHJlbGxpc3RcIjtcblxuXHRsZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRhZGRUYXNrLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblx0YWRkVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdC8vIFByb2plY3QgYWRkIHRvZG8gaXRlbSBET00gZWxlbWVudCB3aGljaCB0aGVuIGNhbGxzIHRoZSBwcm9qZWN0IGFkZCB0b2RvIGl0ZW0gZXZlbnRcblx0XHRpbnB1dFRhc2soKTtcblx0XHRjb25zb2xlLmxvZyhcIlByb2plY3QgYWRkIHRvZG8gaXRlbVwiKTtcblx0fSk7XG5cblx0bGV0IHNpZGVOYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzaWRlTmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlTmF2XCIpO1xuXG5cdGxldCBwcm9qZWN0TmF2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHByb2plY3ROYXZUaXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cdHByb2plY3ROYXZUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2lkZU5hdkhlYWRlclwiKTtcblxuXHRsZXQgcHJvamVjdE5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0TmF2TGlzdC5pZCA9IFwicHJvamVjdE5hdkxpc3RcIjtcblxuXHRsZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlTmF2TGlua3NcIik7XG5cdGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuXHRhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gQ2FsbHMgbmV3IERPTSBldmVudCB0byBoYW5kbGUgcHJvamVjdCBhZGQgd2hpY2ggdGhlbiBjYWxscyB0aGUgbmV3IHByb2plY3QgZnVuY3Rpb25cblx0XHRpbnB1dFByb2plY3QoKTtcblx0XHRjb25zb2xlLmxvZyhcIkNyZWF0ZSBuZXcgcHJvamVjdFwiKTtcblx0fSk7XG5cblx0dG9wTmF2QmFyLmFwcGVuZChsb2dvLCBhZGRUYXNrKTtcblx0c2lkZU5hdkJhci5hcHBlbmQocHJvamVjdE5hdlRpdGxlLCBwcm9qZWN0TmF2TGlzdCwgYWRkUHJvamVjdCk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvcE5hdkJhciwgc2lkZU5hdkJhciwgY29udGVudCk7XG59KSgpO1xuXG5jb25zdCBpbnB1dFRhc2sgPSAoKSA9PiB7XG5cdC8vIGNyZWF0ZXMgRE9NIGVsZW1lbnRzIHdoaWNoIGNhbiB0YWtlIGlucHV0cyBmb3IgbmV3IHRhc2sgd2hpY2ggY2FuIHRoZW4gY2FsbCB0b2RvIGl0ZW0gZnVuY3Rpb25zXG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHR0aXRsZUlucHV0LmlkID0gXCJ0aXRsZUlucHV0XCI7XG5cdHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHR0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIG5hbWVcIjtcblxuXHRsZXQgc2VsZWN0UHJvamVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXHRzZWxlY3RQcm9qZWN0TWVudS5pZCA9IFwic2VsZWN0UHJvamVjdE1lbnVcIjtcblx0c2VsZWN0UHJvamVjdE1lbnUubmFtZSA9IFwicHJvamVjdFNlbGVjdGVkXCI7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdC8vIHNpbXBsaWZ5IHByb2plY3QgbGlzdCBvdXRwdXRcblx0XHRsZXQgc2VsZWN0UHJvamVjdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0W2ldO1xuXHRcdGNvbnNvbGUubG9nKHNlbGVjdFByb2plY3QpO1xuXG5cdFx0bGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdFx0b3B0aW9uLmlubmVySFRNTCA9IHNlbGVjdFByb2plY3QubmFtZTtcblxuXHRcdHNlbGVjdFByb2plY3RNZW51LmFwcGVuZChvcHRpb24pO1xuXHR9XG5cblx0bGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRhZGRUYXNrQnRuLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblx0YWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGxldCBzZWxlY3RlZFByb2plY3RJbmRleCA9XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RNZW51XCIpLnNlbGVjdGVkSW5kZXg7XG5cdFx0bGV0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RMaXN0LnByb2plY3RMaXN0W3NlbGVjdGVkUHJvamVjdEluZGV4XTtcblxuXHRcdGxldCB0b2RvSXRlbVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlO1xuXG5cdFx0bGV0IG5ld1RvZG9JdGVtID0gdG9kb0l0ZW0oYCR7dG9kb0l0ZW1UaXRsZX1gKTtcblx0XHRzZWxlY3RlZFByb2plY3QuYWRkVG9kb0l0ZW0obmV3VG9kb0l0ZW0pO1xuXG5cdFx0ZGlzcGxheVByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcblx0fSk7XG5cblx0Y29udGVudC5hcHBlbmQodGl0bGVJbnB1dCwgc2VsZWN0UHJvamVjdE1lbnUsIGFkZFRhc2tCdG4pO1xufTtcblxuY29uc3QgaW5wdXRQcm9qZWN0ID0gKCkgPT4ge1xuXHQvLyBjcmVhdGVzIERPTSBlbGVtZW50cyB3aGljaCBjYW4gdGFrZSBpbnB1dHMgZm9yIG5ldyBwcm9qZWN0IHRvIGNhbGwgbmV3IHByb2plY3QgZnVuY3Rpb25cblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGxldCBpbnB1dFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdGxldCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0cHJvamVjdFRpdGxlSW5wdXQuaWQgPSBcInByb2plY3RUaXRsZUlucHV0XCI7XG5cdHByb2plY3RUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0cHJvamVjdFRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWVcIjtcblxuXHRsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHByb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcblx0XHRsZXQgbmV3UHJvamVjdCA9IHByb2plY3QoYCR7cHJvamVjdFRpdGxlSW5wdXQudmFsdWV9YCk7XG5cdFx0Y29uc29sZS5sb2cobmV3UHJvamVjdCk7XG5cdFx0cHJvamVjdExpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblx0XHRjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdCk7XG5cdFx0ZGlzcGxheVByb2plY3ROYW1lcygpO1xuXHRcdGlucHV0UHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdHJldHVybiBuZXdQcm9qZWN0O1xuXHR9KTtcblxuXHRpbnB1dFByb2plY3REaXYuYXBwZW5kKHByb2plY3RUaXRsZUlucHV0LCBhZGRQcm9qZWN0QnRuKTtcblx0Y29udGVudC5hcHBlbmQoaW5wdXRQcm9qZWN0RGl2KTtcbn07XG5cbmV4cG9ydCB7IGhvbWVQYWdlLCBpbnB1dFRhc2ssIGlucHV0UHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgdG9kb1BhZ2UgfSBmcm9tIFwiLi9kaXNwbGF5VG9kb0l0ZW1cIjtcbmltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gZGlzcGxheXMgaW5kaXZpZHVhbCBwcm9qZWN0cyBvbiBwYWdlXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdGNvbnN0IHRvZG9JdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdC8vIGNsZWFyIGNvbnRlbnRcblx0Y29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0cHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInRvZG9JdGVtTGlzdEhlYWRlclwiKTtcblx0cHJvamVjdE5hbWUuaW5uZXJIVE1MID0gcHJvamVjdC5uYW1lO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCB0b2RvSXRlbSA9IHByb2plY3QucHJvamVjdExpc3RbaV07XG5cdFx0bGV0IHRvZG9JdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdHRvZG9JdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvSXRlbUxpc3RcIik7XG5cblx0XHR0b2RvSXRlbURpdi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gY2FsbHMgbW9yZSBpbmZvcm1hdGlvbiB0byB0aGUgcGFnZSBpbiBmb3JtIG9mIG1vZGFsIHdoaWNoIGNhbiB0aGVuIGJlIGVkaXRlZFxuXHRcdFx0dG9kb1BhZ2UodG9kb0l0ZW0pO1xuXHRcdH07XG5cblx0XHRsZXQgdG9kb0l0ZW1NYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHR0b2RvVGl0bGUuaW5uZXJIVE1MID0gdG9kb0l0ZW0udGl0bGU7XG5cblx0XHQvLyBNYWtlIGl0IGNoZWNrIGlmIHRoZXJlIGlzIHNjaGVkdWxlZCBkYXRlOiBpZiBzY2hlZHVsZWQgZGlzcGxheSBkYXRlLCBpZiBub3QgdGhlbiBkaXNwbGF5IGJ1dHRvbiB0byBzY2hlZHVsZSB0YXNrXG5cdFx0bGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRpZiAodG9kb0l0ZW0uZHVlRGF0ZSA9PSBudWxsKSB7XG5cdFx0XHR0b2RvSXRlbU1haW5JbmZvLmFwcGVuZCh0b2RvVGl0bGUpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJubyBkdWUgZGF0ZVwiKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b2RvRHVlRGF0ZS5pbm5lckhUTUwgPSB0b2RvSXRlbS5kdWVEYXRlO1xuXHRcdFx0dG9kb0l0ZW1NYWluSW5mby5hcHBlbmQodG9kb1RpdGxlLCB0b2RvRHVlRGF0ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVtb3ZlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRcdHJlbW92ZVRvZG9CdG4uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG5cdFx0cmVtb3ZlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXRvZG9cIik7XG5cblx0XHRyZW1vdmVUb2RvQnRuLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRwcm9qZWN0LnJlbW92ZVRvZG9JdGVtKGAke2l9YCk7XG5cdFx0XHRkaXNwbGF5UHJvamVjdChwcm9qZWN0KTtcblx0XHR9O1xuXG5cdFx0dG9kb0l0ZW1EaXYuYXBwZW5kKHRvZG9JdGVtTWFpbkluZm8sIHJlbW92ZVRvZG9CdG4pO1xuXG5cdFx0dG9kb0l0ZW1MaXN0LmFwcGVuZCh0b2RvSXRlbURpdik7XG5cdH1cblx0Y29udGVudC5hcHBlbmQocHJvamVjdE5hbWUsIHRvZG9JdGVtTGlzdCk7XG5cblx0cmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdE5hbWVzID0gZnVuY3Rpb24gKCkge1xuXHRsZXQgZ2V0UHJvamVjdExpc3QgPSBwcm9qZWN0TGlzdC5wcm9qZWN0TGlzdDtcblxuXHRsZXQgZGlzcGxheVByb2plY3RMaXN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmF2TGlzdFwiKTtcblx0Ly8gY2xlYXJzIHByb2plY3QgbGlzdFxuXHRkaXNwbGF5UHJvamVjdExpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRsZXQgZGlzcGxheVByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0UHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgY3VycmVudFByb2plY3QgPSBnZXRQcm9qZWN0TGlzdFtpXTtcblx0XHRjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cdFx0bGV0IGRpc3BsYXlQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInNpZGVOYXZMaW5rc1wiKTtcblx0XHRkaXNwbGF5UHJvamVjdE5hbWUuaW5uZXJIVE1MID0gY3VycmVudFByb2plY3QuZ2V0TmFtZSgpO1xuXHRcdGRpc3BsYXlQcm9qZWN0TmFtZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZGlzcGxheVByb2plY3QoY3VycmVudFByb2plY3QpO1xuXHRcdH07XG5cdFx0ZGlzcGxheVByb2plY3RMaXN0LmFwcGVuZENoaWxkKGRpc3BsYXlQcm9qZWN0TmFtZSk7XG5cdFx0Y29uc29sZS5sb2coZGlzcGxheVByb2plY3ROYW1lKTtcblx0fVxuXHRjb25zb2xlLmxvZyhkaXNwbGF5UHJvamVjdExpc3QpO1xuXHRkaXNwbGF5UHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3RMaXN0KTtcblx0cmV0dXJuIGRpc3BsYXlQcm9qZWN0TGlzdERpdjtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5UHJvamVjdE5hbWVzIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLy8gRGlzcGxheSBkZXN0YWlsZWQgaW5mb3JtYXRpb24gZm9yIHRvZG8gaXRlbVxuXG5jb25zdCB0b2RvUGFnZSA9ICh0b2RvKSA9PiB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cdGxldCBkZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkZXRhaWxzTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXHRsZXQgZGV0YWlsc01vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRldGFpbHNNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG5cdGxldCBzcGFuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c3BhbkNsb3NlLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuXHRzcGFuQ2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuXG5cdHNwYW5DbG9zZS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdGRldGFpbHNNb2RhbC5yZW1vdmUoKTtcblx0fVxuXG5cdHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQudGFyZ2V0ID09IGRldGFpbHNNb2RhbCkge1xuXHRcdCAgZGV0YWlsc01vZGFsLnJlbW92ZSgpO1xuXHRcdH1cblx0ICB9XG5cblx0bGV0IHRvZG9JbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGRldGFpbHNNb2RhbC5hcHBlbmRDaGlsZChkZXRhaWxzTW9kYWxDb250ZW50KTtcblx0ZGV0YWlsc01vZGFsQ29udGVudC5hcHBlbmQoc3BhbkNsb3NlLCB0b2RvSW5mb3JtYXRpb24pO1xuXG5cdGxldCB0aXRsZSA9IHRvZG8udGl0bGU7XG5cdGxldCBkZXNjcmlwdGlvbiA9IHRvZG8uZGVzY3JpcHRpb247XG5cdGxldCBkdWVEYXRlID0gdG9kby5kdWVEYXRlO1xuXHRsZXQgcHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xuXHRsZXQgbm90ZXMgPSB0b2RvLm5vdGVzO1xuXG5cdHRvZG9JbmZvcm1hdGlvbi5pbm5lckhUTUwgKz0gYDx1bD5cbiAgICAgICAgICAgIDxsaT4ke3RpdGxlfTwvbGk+XG4gICAgICAgICAgICA8bGk+JHtkZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgPGxpPiR7ZHVlRGF0ZX08L2xpPlxuICAgICAgICAgICAgPGxpPiR7cHJpb3JpdHl9PC9saT5cbiAgICAgICAgICAgIDxsaT4ke25vdGVzfTwvbGk+XG4gICAgICAgIDwvdWw+YDtcblxuXHRjb250ZW50LmFwcGVuZENoaWxkKGRldGFpbHNNb2RhbCk7XG5cdFxuXHRyZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7IHRvZG9QYWdlIH07XG4iLCIvLyBQcm9qZWN0cyB3aGVyZSB0b2RvIGxpc3QgaXRlbXMgY2FuIGJlIGtlcHQuIFByb2plY3RzIGNhbiBiZSBjcmVhdGVkIGFuZCBkZWxldGVkLiBEZWZhdWx0IHByb2plY3QgY3JlYXRlZCBpbml0aWFsbHkgYW5kIHRvZG8gaXRlbXMgYXJlIGF1dG8gYWRkZWRcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiB7XG5cdGxldCBwcm9qZWN0TGlzdCA9IFtdOyAvLyBzaG91bGQgY2hhbmdlIHRvIHRvZG9saXN0XG5cblx0Y29uc3QgYWRkVG9kb0l0ZW0gPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvamVjdExpc3QpO1xuXHRcdHRoaXMucHJvamVjdExpc3QucHVzaChpdGVtKTtcblx0fTtcblxuXHRjb25zdCByZW1vdmVUb2RvSXRlbSA9IGZ1bmN0aW9uIChpbmRleCkge1xuXHRcdGNvbnNvbGUubG9nKFwicmVtb3ZlZCB0b2RvIGl0ZW0gc3VjY2VzcyB5YXkhXCIpO1xuXHRcdGNvbnNvbGUubG9nKGAke3RoaXMucHJvamVjdExpc3RbaW5kZXhdfWApO1xuXHRcdC8vIHJlbW92ZSB0b2RvIGl0ZW0gKHVzZSBsb2NhbCBzdG9yYWdlIHdpdGggaW5kZXggb2YpXG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9O1xuXG5cdGNvbnN0IGdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH07XG5cblx0cmV0dXJuIHsgZ2V0TmFtZSwgbmFtZSwgcHJvamVjdExpc3QsIGFkZFRvZG9JdGVtLCByZW1vdmVUb2RvSXRlbSB9O1xufTtcblxuLy8gUHJvamVjdCBsaXN0IG9mIGFsbCB0aGUgcHJvamVjdHM6XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCgpID0+IHtcblx0bGV0IHByb2plY3RMaXN0ID0gW107XG5cblx0Y29uc3QgYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG5cdFx0dGhpcy5wcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuXHR9O1xuXG5cdGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge307XG5cblx0cmV0dXJuIHsgcHJvamVjdExpc3QsIGFkZFByb2plY3QsIGdldEN1cnJlbnRQcm9qZWN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9O1xuIiwiLy8gQ3JlYXRlcyB0aGUgdG9kbyBpdGVtcyB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24uXG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG5cdC8vIHRvZG8gSXRlbSBjb25zdHJ1Y3RvclxuXG5cdGNvbnN0IGVkaXRUaXRsZSA9IGZ1bmN0aW9uICh1cGRhdGVkVGl0bGUpIHtcblx0XHR0aGlzLnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh1cGRhdGVkRGVzY3JpcHRpb24pIHtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gdXBkYXRlZERlc2NyaXB0aW9uO1xuXHRcdHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuXHR9O1xuXG5cdGNvbnN0IGVkaXREdWVEYXRlID0gZnVuY3Rpb24gKHVwZGF0ZWREdWVEYXRlKSB7XG5cdFx0dGhpcy5kdWVEYXRlID0gdXBkYXRlZER1ZURhdGU7XG5cdFx0cmV0dXJuIHRoaXMuZHVlRGF0ZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdHRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGUsXG5cdFx0cHJpb3JpdHksXG5cdFx0bm90ZXMsXG5cdFx0ZWRpdFRpdGxlLFxuXHRcdGVkaXREZXNjcmlwdGlvbixcblx0XHRlZGl0RHVlRGF0ZSxcblx0fTtcbn07XG5cbmV4cG9ydCB7IHRvZG9JdGVtIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kb0l0ZW1zXCI7XG5pbXBvcnQgeyBwcm9qZWN0LCBwcm9qZWN0TGlzdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0LCBkaXNwbGF5UHJvamVjdE5hbWVzIH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vZGlzcGxheUhvbWVQYWdlXCI7XG5pbXBvcnQgeyB0b2RvUGFnZSB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvSXRlbVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuXG5sZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdCk7XG5cbmxldCBzZWNvbmRhcnlQcm9qZWN0ID0gcHJvamVjdChcIlNlY29uZGFyeSBQcm9qZWN0XCIpO1xucHJvamVjdExpc3QuYWRkUHJvamVjdChzZWNvbmRhcnlQcm9qZWN0KTtcblxuY29uc3QgcG90YXRvID0gdG9kb0l0ZW0oXG5cdFwiUG90YXRvIFRpdGxlXCIsXG5cdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuXHRcIjEyLzA0LzIwMjVcIixcblx0XCJUb3AgcHJpb3JpdHlcIixcblx0XCJSYW5kb20gTm90ZXNcIixcblx0XCJDb21wbGV0ZVwiXG4pO1xuXG5jb25zdCBwb3RhdG8yID0gdG9kb0l0ZW0oXG5cdFwiUG90YXRvIFRpdGxlXCIsXG5cdFwidGhpcyBpcyBkZXNjcmlwdGlvblwiLFxuXHRcIjEyLzA0LzIwMjVcIixcblx0XCJUb3AgcHJpb3JpdHlcIixcblx0XCJSYW5kb20gTm90ZXNcIixcblx0XCJDb21wbGV0ZVwiXG4pO1xuXG5wb3RhdG8uZWRpdFRpdGxlKFwibmV3UG90YXRvVGl0bGVcIik7XG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvSXRlbShwb3RhdG8pO1xuZGVmYXVsdFByb2plY3QuYWRkVG9kb0l0ZW0ocG90YXRvMik7XG5cbmRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbmRpc3BsYXlQcm9qZWN0TmFtZXMoKTtcblxuY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==