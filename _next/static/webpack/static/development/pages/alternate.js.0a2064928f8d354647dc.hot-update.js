webpackHotUpdate("static\\development\\pages\\alternate.js",{

/***/ "./src/screens/alternate.js":
/*!**********************************!*\
  !*** ./src/screens/alternate.js ***!
  \**********************************/
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
var _jsxFileName = "C:\\Users\\Egis\\Desktop\\DEV\\act\\web\\src\\screens\\alternate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MainScreen(props) {
  var _Actstore = actstore__WEBPACK_IMPORTED_MODULE_3___default()({}, ['count']),
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
  }, "React Native for Web & Next.js"), __jsx(Styled.Link, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Go back to Main Screen"), __jsx(Styled.Cont, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(Styled.Text, {
    "aria-level": "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "Subheader"), __jsx(Styled.Button, {
    onPress: action('APP_COUNT'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Click Me ", store.get('count'))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainScreen);
var Styled = actheme__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  Wrap: 'ai,jc:c fg:1',
  Cont: 'mt:s4',
  Text: ['Text', 'fs,mb:s6 ta:c', {
    small: 'fs:s3'
  }],
  Button: 'fs,mb:s6 c:green'
});

/***/ })

})
//# sourceMappingURL=alternate.js.0a2064928f8d354647dc.hot-update.js.map