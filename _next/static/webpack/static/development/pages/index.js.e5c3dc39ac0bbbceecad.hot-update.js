webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/screens/main.js":
/*!*****************************!*\
  !*** ./src/screens/main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pack */ "./node_modules/pack/index.js");
/* harmony import */ var actheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actheme */ "./node_modules/actheme/index.js");
/* harmony import */ var actheme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(actheme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actstore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actstore */ "./node_modules/actstore/out/index.js");
/* harmony import */ var actstore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(actstore__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Egis\\Desktop\\DEV\\act\\web\\src\\screens\\main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MainScreen(props) {
  var _Actstore = actstore__WEBPACK_IMPORTED_MODULE_3___default()({
    actions: actions
  }, ['count']),
      store = _Actstore.store,
      action = _Actstore.action;

  return __jsx(Styled.Wrap, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(Styled.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "React Native for Web with Actheme and Actstore"), __jsx(pack__WEBPACK_IMPORTED_MODULE_1__["Elems"].Link, {
    href: "/alternate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Go to Alternate Screen"), __jsx(Styled.Cont, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(Styled.Button, {
    onPress: action('MAIN_COUNT'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Click Me to increase number ", store.get('count')), __jsx(Styled.Text, {
    small: true,
    "aria-level": "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "act", " ", "0.0.1")));
}

/* harmony default export */ __webpack_exports__["default"] = (MainScreen);
var Styled = actheme__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  Wrap: 'ai,jc:c fg:1',
  Cont: 'mt:s4',
  Text: ['Text', 'fs,mb:s6', {
    small: 'fs:s3'
  }],
  Button: 'fs,mb:s6 c:green'
});

var actions = function actions(_ref) {
  var store = _ref.store;
  return {
    MAIN_COUNT: function MAIN_COUNT() {
      return store.set({
        count: store.get('count') + 2
      });
    }
  };
};

/***/ })

})
//# sourceMappingURL=index.js.e5c3dc39ac0bbbceecad.hot-update.js.map