(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\alternate.js"],{

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!*******************************************************!*\
  !*** ./node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/fbjs/lib/camelize.js":
/*!*******************************************!*\
  !*** ./node_modules/fbjs/lib/camelize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var _hyphenPattern = /-(.)/g;
/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */

function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),

/***/ "./node_modules/fbjs/lib/camelizeStyleName.js":
/*!****************************************************!*\
  !*** ./node_modules/fbjs/lib/camelizeStyleName.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */


var camelize = __webpack_require__(/*! ./camelize */ "./node_modules/fbjs/lib/camelize.js");

var msPattern = /^-ms-/;
/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */

function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat =  true ? function (format) {} : undefined;
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Warning: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // --- Welcome to debugging React ---
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
  } catch (x) {}
}

var warning =  true ? function (condition, format) {
  if (format === undefined) {
    throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
  }

  if (!condition) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    printWarning.apply(void 0, [format].concat(args));
  }
} : undefined;
module.exports = warning;

/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/createPrefixer.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/createPrefixer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(/*! ./utils/prefixProperty */ "./node_modules/inline-style-prefixer/lib/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! ./utils/prefixValue */ "./node_modules/inline-style-prefixer/lib/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(/*! ./utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ./utils/isObject */ "./node_modules/inline-style-prefixer/lib/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  };
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundClip;

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/crossFade.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/crossFade.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/cursor.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/cursor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/filter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flex.js":
/*!****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/flex.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
  // Full expanded syntax is flex-grow | flex-shrink | flex-basis.
};var flexShorthandMappings = {
  auto: '1 1 auto',
  inherit: 'inherit',
  initial: '0 1 auto',
  none: '0 0 auto',
  unset: 'unset'
};
var isUnitlessNumber = /^\d+(\.\d+)?$/;

function flexboxIE(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
  if (property === 'flex') {
    // For certain values we can do straight mappings based on the spec
    // for the expansions.
    if (Object.prototype.hasOwnProperty.call(flexShorthandMappings, value)) {
      style.msFlex = flexShorthandMappings[value];
      return;
    }
    // Here we have no direct mapping, so we favor looking for a
    // unitless positive number as that will be the most common use-case.
    if (isUnitlessNumber.test(value)) {
      style.msFlex = value + ' 1 0%';
      return;
    }

    // The next thing we can look for is if there are multiple values.
    var flexValues = value.split(/\s/);
    // If we only have a single value that wasn't a positive unitless
    // or a pre-mapped value, then we can assume it is a unit value.
    switch (flexValues.length) {
      case 1:
        style.msFlex = '1 1 ' + value;
        return;
      case 2:
        // If we have 2 units, then we expect that the first will
        // always be a unitless number and represents flex-grow.
        // The second unit will represent flex-shrink for a unitless
        // value, or flex-basis otherwise.
        if (isUnitlessNumber.test(flexValues[1])) {
          style.msFlex = flexValues[0] + ' ' + flexValues[1] + ' 0%';
        } else {
          style.msFlex = flexValues[0] + ' 1 ' + flexValues[1];
        }
        return;
      default:
        style.msFlex = value;
    }
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/gradient.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/gradient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/grid.js":
/*!****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/grid.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = grid;
function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isComplexSpanValue(value) {
  return typeof value === 'string' && value.includes('/');
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];

var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};

var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },

  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split = value.split('/'),
          _value$split2 = _slicedToArray(_value$split, 2),
          start = _value$split2[0],
          end = _value$split2[1];

      propertyConverters.gridColumnStart(+start, style);

      var _end$split = end.split(/ ?span /),
          _end$split2 = _slicedToArray(_end$split, 2),
          maybeSpan = _end$split2[0],
          maybeNumber = _end$split2[1];

      if (maybeSpan === '') {
        propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridColumnEnd(+end, style);
      }
    } else {
      propertyConverters.gridColumnStart(value, style);
    }
  },

  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },

  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },

  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split3 = value.split('/'),
          _value$split4 = _slicedToArray(_value$split3, 2),
          start = _value$split4[0],
          end = _value$split4[1];

      propertyConverters.gridRowStart(+start, style);

      var _end$split3 = end.split(/ ?span /),
          _end$split4 = _slicedToArray(_end$split3, 2),
          maybeSpan = _end$split4[0],
          maybeNumber = _end$split4[1];

      if (maybeSpan === '') {
        propertyConverters.gridRowEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridRowEnd(+end, style);
      }
    } else {
      propertyConverters.gridRowStart(value, style);
    }
  },

  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },

  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },

  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },

  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },

  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/imageSet.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/imageSet.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/logical.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/logical.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logical;
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/position.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/position.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/sizing.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/sizing.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/transition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/transition.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/isObject.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/isObject.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/prefixProperty.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/prefixProperty.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/prefixValue.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/prefixValue.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Falternate&absolutePagePath=C%3A%5CUsers%5CEgis%5CDesktop%5CDEV%5Cbet%5Cpages%5Calternate.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Falternate&absolutePagePath=C%3A%5CUsers%5CEgis%5CDesktop%5CDEV%5Cbet%5Cpages%5Calternate.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/alternate", function() {
      var mod = __webpack_require__(/*! ./pages/alternate.js */ "./pages/alternate.js")
      if(true) {
        module.hot.accept(/*! ./pages/alternate.js */ "./pages/alternate.js", function() {
          if(!next.router.components["/alternate"]) return
          var updatedPage = __webpack_require__(/*! ./pages/alternate.js */ "./pages/alternate.js")
          next.router.update("/alternate", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/normalize-css-color/index.js":
/*!***************************************************!*\
  !*** ./node_modules/normalize-css-color/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-unstable-native-dependencies.development.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-unstable-native-dependencies.development.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom-unstable-native-dependencies.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

{
  // In DEV mode, we swap out invokeGuardedCallback for a special version
  // that plays more nicely with the browser's DevTools. The idea is to preserve
  // "Pause on exceptions" behavior. Because React wraps all user-provided
  // functions in invokeGuardedCallback, and the production version of
  // invokeGuardedCallback uses a try-catch, all user exceptions are treated
  // like caught exceptions, and the DevTools won't pause unless the developer
  // takes the extra step of enabling pause on caught exceptions. This is
  // unintuitive, though, because even though React has caught the error, from
  // the developer's perspective, the error is uncaught.
  //
  // To preserve the expected "Pause on exceptions" behavior, we don't use a
  // try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
  // DOM node, and call the user-provided callback from inside an event handler
  // for that fake event. If the callback throws, the error is "captured" using
  // a global event handler. But because the error happens in a different
  // event loop context, it does not interrupt the normal program flow.
  // Effectively, this gives us try-catch behavior without actually using
  // try-catch. Neat!
  // Check that the browser supports the APIs we need to implement our special
  // DEV version of invokeGuardedCallback
  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');
  }
}

var getFiberCurrentPropsFromNode = null;
var getInstanceFromNode = null;
var getNodeFromInstance = null;
function setComponentTree(getFiberCurrentPropsFromNodeImpl, getInstanceFromNodeImpl, getNodeFromInstanceImpl) {
  getFiberCurrentPropsFromNode = getFiberCurrentPropsFromNodeImpl;
  getInstanceFromNode = getInstanceFromNodeImpl;
  getNodeFromInstance = getNodeFromInstanceImpl;

  {
    if (!getNodeFromInstance || !getInstanceFromNode) {
      error('EventPluginUtils.setComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.');
    }
  }
}
var validateEventDispatches;

{
  validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;
    var listenersIsArr = Array.isArray(dispatchListeners);
    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
    var instancesIsArr = Array.isArray(dispatchInstances);
    var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;

    if (instancesIsArr !== listenersIsArr || instancesLen !== listenersLen) {
      error('EventPluginUtils: Invalid `event`.');
    }
  };
}
/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */

function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;

  {
    validateEventDispatches(event);
  }

  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      } // Listeners and Instances are two parallel arrays that are always in sync.


      if (dispatchListeners[i](event, dispatchInstances[i])) {
        return dispatchInstances[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchInstances)) {
      return dispatchInstances;
    }
  }

  return null;
}
/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */


function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchInstances = null;
  event._dispatchListeners = null;
  return ret;
}
/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */

function executeDirectDispatch(event) {
  {
    validateEventDispatches(event);
  }

  var dispatchListener = event._dispatchListeners;
  var dispatchInstance = event._dispatchInstances;

  if (!!Array.isArray(dispatchListener)) {
    {
      throw Error( "executeDirectDispatch(...): Invalid `event`." );
    }
  }

  event.currentTarget = dispatchListener ? getNodeFromInstance(dispatchInstance) : null;
  var res = dispatchListener ? dispatchListener(event) : null;
  event.currentTarget = null;
  event._dispatchListeners = null;
  event._dispatchInstances = null;
  return res;
}
/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */

function hasDispatches(event) {
  return !!event._dispatchListeners;
}

var HostComponent = 5;

function getParent(inst) {
  do {
    inst = inst.return; // TODO: If this is a HostRoot we might want to bail out.
    // That is depending on if we want nested subtrees (layers) to bubble
    // events to their parent. We could also go through parentNode on the
    // host node but that wouldn't work for React Native and doesn't let us
    // do the portal feature.
  } while (inst && inst.tag !== HostComponent);

  if (inst) {
    return inst;
  }

  return null;
}
/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */


function getLowestCommonAncestor(instA, instB) {
  var depthA = 0;

  for (var tempA = instA; tempA; tempA = getParent(tempA)) {
    depthA++;
  }

  var depthB = 0;

  for (var tempB = instB; tempB; tempB = getParent(tempB)) {
    depthB++;
  } // If A is deeper, crawl up.


  while (depthA - depthB > 0) {
    instA = getParent(instA);
    depthA--;
  } // If B is deeper, crawl up.


  while (depthB - depthA > 0) {
    instB = getParent(instB);
    depthB--;
  } // Walk in lockstep until we find a match.


  var depth = depthA;

  while (depth--) {
    if (instA === instB || instA === instB.alternate) {
      return instA;
    }

    instA = getParent(instA);
    instB = getParent(instB);
  }

  return null;
}
/**
 * Return if A is an ancestor of B.
 */

function isAncestor(instA, instB) {
  while (instB) {
    if (instA === instB || instA === instB.alternate) {
      return true;
    }

    instB = getParent(instB);
  }

  return false;
}
/**
 * Return the parent instance of the passed-in instance.
 */

function getParentInstance(inst) {
  return getParent(inst);
}
/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */

function traverseTwoPhase(inst, fn, arg) {
  var path = [];

  while (inst) {
    path.push(inst);
    inst = getParent(inst);
  }

  var i;

  for (i = path.length; i-- > 0;) {
    fn(path[i], 'captured', arg);
  }

  for (i = 0; i < path.length; i++) {
    fn(path[i], 'bubbled', arg);
  }
}

function isInteractive(tag) {
  return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
}

function shouldPreventMouseEvent(name, type, props) {
  switch (name) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      return !!(props.disabled && isInteractive(type));

    default:
      return false;
  }
}
/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */


function getListener(inst, registrationName) {
  var listener; // TODO: shouldPreventMouseEvent is DOM-specific and definitely should not
  // live here; needs to be moved to a better place soon

  var stateNode = inst.stateNode;

  if (!stateNode) {
    // Work in progress (ex: onload events in incremental mode).
    return null;
  }

  var props = getFiberCurrentPropsFromNode(stateNode);

  if (!props) {
    // Work in progress.
    return null;
  }

  listener = props[registrationName];

  if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
    return null;
  }

  if (!(!listener || typeof listener === 'function')) {
    {
      throw Error( "Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type." );
    }
  }

  return listener;
}

/**
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  if (!(next != null)) {
    {
      throw Error( "accumulateInto(...): Accumulated items must not be null or undefined." );
    }
  }

  if (current == null) {
    return next;
  } // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).


  if (Array.isArray(current)) {
    if (Array.isArray(next)) {
      current.push.apply(current, next);
      return current;
    }

    current.push(next);
    return current;
  }

  if (Array.isArray(next)) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 * @param {function} cb Callback invoked with each element or a collection.
 * @param {?} [scope] Scope used as `this` in a callback.
 */
function forEachAccumulated(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
}

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(inst, event, propagationPhase) {
  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(inst, registrationName);
}
/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing even a
 * single one.
 */

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */


function accumulateDirectionalDispatches(inst, phase, event) {
  {
    if (!inst) {
      error('Dispatching inst must not be null');
    }
  }

  var listener = listenerAtPhase(inst, event, phase);

  if (listener) {
    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
  }
}
/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */


function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
  }
}
/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */


function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var targetInst = event._targetInst;
    var parentInst = targetInst ? getParentInstance(targetInst) : null;
    traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
  }
}
/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */


function accumulateDispatches(inst, ignoredDirection, event) {
  if (inst && event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(inst, registrationName);

    if (listener) {
      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
    }
  }
}
/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */


function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event._targetInst, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}
function accumulateTwoPhaseDispatchesSkipTarget(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
}
function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}

var EVENT_POOL_SIZE = 10;
/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */

var EventInterface = {
  type: null,
  target: null,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: function () {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

function functionThatReturnsTrue() {
  return true;
}

function functionThatReturnsFalse() {
  return false;
}
/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */


function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
  {
    // these have a getter/setter for warnings
    delete this.nativeEvent;
    delete this.preventDefault;
    delete this.stopPropagation;
    delete this.isDefaultPrevented;
    delete this.isPropagationStopped;
  }

  this.dispatchConfig = dispatchConfig;
  this._targetInst = targetInst;
  this.nativeEvent = nativeEvent;
  var Interface = this.constructor.Interface;

  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }

    {
      delete this[propName]; // this has a getter/setter for warnings
    }

    var normalize = Interface[propName];

    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      if (propName === 'target') {
        this.target = nativeEventTarget;
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;

  if (defaultPrevented) {
    this.isDefaultPrevented = functionThatReturnsTrue;
  } else {
    this.isDefaultPrevented = functionThatReturnsFalse;
  }

  this.isPropagationStopped = functionThatReturnsFalse;
  return this;
}

_assign(SyntheticEvent.prototype, {
  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;

    if (!event) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    } else if (typeof event.returnValue !== 'unknown') {
      event.returnValue = false;
    }

    this.isDefaultPrevented = functionThatReturnsTrue;
  },
  stopPropagation: function () {
    var event = this.nativeEvent;

    if (!event) {
      return;
    }

    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (typeof event.cancelBubble !== 'unknown') {
      // The ChangeEventPlugin registers a "propertychange" event for
      // IE. This event does not support bubbling or cancelling, and
      // any references to cancelBubble throw "Member not found".  A
      // typeof check of "unknown" circumvents this issue (and is also
      // IE specific).
      event.cancelBubble = true;
    }

    this.isPropagationStopped = functionThatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = functionThatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: functionThatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;

    for (var propName in Interface) {
      {
        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
      }
    }

    this.dispatchConfig = null;
    this._targetInst = null;
    this.nativeEvent = null;
    this.isDefaultPrevented = functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    this._dispatchListeners = null;
    this._dispatchInstances = null;

    {
      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
      Object.defineProperty(this, 'isDefaultPrevented', getPooledWarningPropertyDefinition('isDefaultPrevented', functionThatReturnsFalse));
      Object.defineProperty(this, 'isPropagationStopped', getPooledWarningPropertyDefinition('isPropagationStopped', functionThatReturnsFalse));
      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', function () {}));
      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', function () {}));
    }
  }
});

SyntheticEvent.Interface = EventInterface;
/**
 * Helper to reduce boilerplate when creating subclasses.
 */

SyntheticEvent.extend = function (Interface) {
  var Super = this;

  var E = function () {};

  E.prototype = Super.prototype;
  var prototype = new E();

  function Class() {
    return Super.apply(this, arguments);
  }

  _assign(prototype, Class.prototype);

  Class.prototype = prototype;
  Class.prototype.constructor = Class;
  Class.Interface = _assign({}, Super.Interface, Interface);
  Class.extend = Super.extend;
  addEventPoolingTo(Class);
  return Class;
};

addEventPoolingTo(SyntheticEvent);
/**
 * Helper to nullify syntheticEvent instance properties when destructing
 *
 * @param {String} propName
 * @param {?object} getVal
 * @return {object} defineProperty object
 */

function getPooledWarningPropertyDefinition(propName, getVal) {
  var isFunction = typeof getVal === 'function';
  return {
    configurable: true,
    set: set,
    get: get
  };

  function set(val) {
    var action = isFunction ? 'setting the method' : 'setting the property';
    warn(action, 'This is effectively a no-op');
    return val;
  }

  function get() {
    var action = isFunction ? 'accessing the method' : 'accessing the property';
    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
    warn(action, result);
    return getVal;
  }

  function warn(action, result) {
    {
      error("This synthetic event is reused for performance reasons. If you're seeing this, " + "you're %s `%s` on a released/nullified synthetic event. %s. " + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result);
    }
  }
}

function getPooledEvent(dispatchConfig, targetInst, nativeEvent, nativeInst) {
  var EventConstructor = this;

  if (EventConstructor.eventPool.length) {
    var instance = EventConstructor.eventPool.pop();
    EventConstructor.call(instance, dispatchConfig, targetInst, nativeEvent, nativeInst);
    return instance;
  }

  return new EventConstructor(dispatchConfig, targetInst, nativeEvent, nativeInst);
}

function releasePooledEvent(event) {
  var EventConstructor = this;

  if (!(event instanceof EventConstructor)) {
    {
      throw Error( "Trying to release an event instance into a pool of a different type." );
    }
  }

  event.destructor();

  if (EventConstructor.eventPool.length < EVENT_POOL_SIZE) {
    EventConstructor.eventPool.push(event);
  }
}

function addEventPoolingTo(EventConstructor) {
  EventConstructor.eventPool = [];
  EventConstructor.getPooled = getPooledEvent;
  EventConstructor.release = releasePooledEvent;
}

/**
 * `touchHistory` isn't actually on the native event, but putting it in the
 * interface will ensure that it is cleaned up when pooled/destroyed. The
 * `ResponderEventPlugin` will populate it appropriately.
 */

var ResponderSyntheticEvent = SyntheticEvent.extend({
  touchHistory: function (nativeEvent) {
    return null; // Actually doesn't even look at the native event.
  }
});

// Note: ideally these would be imported from DOMTopLevelEventTypes,
// but our build system currently doesn't let us do that from a fork.
var TOP_TOUCH_START = 'touchstart';
var TOP_TOUCH_MOVE = 'touchmove';
var TOP_TOUCH_END = 'touchend';
var TOP_TOUCH_CANCEL = 'touchcancel';
var TOP_SCROLL = 'scroll';
var TOP_SELECTION_CHANGE = 'selectionchange';
var TOP_MOUSE_DOWN = 'mousedown';
var TOP_MOUSE_MOVE = 'mousemove';
var TOP_MOUSE_UP = 'mouseup';
function isStartish(topLevelType) {
  return topLevelType === TOP_TOUCH_START || topLevelType === TOP_MOUSE_DOWN;
}
function isMoveish(topLevelType) {
  return topLevelType === TOP_TOUCH_MOVE || topLevelType === TOP_MOUSE_MOVE;
}
function isEndish(topLevelType) {
  return topLevelType === TOP_TOUCH_END || topLevelType === TOP_TOUCH_CANCEL || topLevelType === TOP_MOUSE_UP;
}
var startDependencies = [TOP_TOUCH_START, TOP_MOUSE_DOWN];
var moveDependencies = [TOP_TOUCH_MOVE, TOP_MOUSE_MOVE];
var endDependencies = [TOP_TOUCH_CANCEL, TOP_TOUCH_END, TOP_MOUSE_UP];

/**
 * Tracks the position and time of each active touch by `touch.identifier`. We
 * should typically only see IDs in the range of 1-20 because IDs get recycled
 * when touches end and start again.
 */

var MAX_TOUCH_BANK = 20;
var touchBank = [];
var touchHistory = {
  touchBank: touchBank,
  numberActiveTouches: 0,
  // If there is only one active touch, we remember its location. This prevents
  // us having to loop through all of the touches all the time in the most
  // common case.
  indexOfSingleActiveTouch: -1,
  mostRecentTimeStamp: 0
};

function timestampForTouch(touch) {
  // The legacy internal implementation provides "timeStamp", which has been
  // renamed to "timestamp". Let both work for now while we iron it out
  // TODO (evv): rename timeStamp to timestamp in internal code
  return touch.timeStamp || touch.timestamp;
}
/**
 * TODO: Instead of making gestures recompute filtered velocity, we could
 * include a built in velocity computation that can be reused globally.
 */


function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}

function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}

function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;

  if (!(identifier != null)) {
    {
      throw Error( "Touch object is missing identifier." );
    }
  }

  {
    if (identifier > MAX_TOUCH_BANK) {
      error('Touch identifier %s is greater than maximum supported %s which causes ' + 'performance issues backfilling array locations for all of the indices.', identifier, MAX_TOUCH_BANK);
    }
  }

  return identifier;
}

function recordTouchStart(touch) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchBank[identifier];

  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchBank[identifier] = createTouchRecord(touch);
  }

  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}

function recordTouchMove(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    {
      warn('Cannot record touch move without a touch start.\n' + 'Touch Move: %s\n' + 'Touch Bank: %s', printTouch(touch), printTouchBank());
    }
  }
}

function recordTouchEnd(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    {
      warn('Cannot record touch end without a touch start.\n' + 'Touch End: %s\n' + 'Touch Bank: %s', printTouch(touch), printTouchBank());
    }
  }
}

function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}

function printTouchBank() {
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));

  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += ' (original size: ' + touchBank.length + ')';
  }

  return printed;
}

var ResponderTouchHistoryStore = {
  recordTouchTrack: function (topLevelType, nativeEvent) {
    if (isMoveish(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchMove);
    } else if (isStartish(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchStart);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (isEndish(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchEnd);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];

          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }

        {
          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];

          if (activeRecord == null || !activeRecord.touchActive) {
            error('Cannot find single active touch.');
          }
        }
      }
    }
  },
  touchHistory: touchHistory
};

/**
 * Accumulates items that must not be null or undefined.
 *
 * This is used to conserve memory by avoiding array allocations.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulate(current, next) {
  if (!(next != null)) {
    {
      throw Error( "accumulate(...): Accumulated items must not be null or undefined." );
    }
  }

  if (current == null) {
    return next;
  } // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).


  if (Array.isArray(current)) {
    return current.concat(next);
  }

  if (Array.isArray(next)) {
    return [current].concat(next);
  }

  return [current, next];
}

/**
 * Instance of element that should respond to touch/move types of interactions,
 * as indicated explicitly by relevant callbacks.
 */

var responderInst = null;
/**
 * Count of current touches. A textInput should become responder iff the
 * selection changes while there is a touch on the screen.
 */

var trackedTouchCount = 0;

var changeResponder = function (nextResponderInst, blockHostResponder) {
  var oldResponderInst = responderInst;
  responderInst = nextResponderInst;

  if (ResponderEventPlugin.GlobalResponderHandler !== null) {
    ResponderEventPlugin.GlobalResponderHandler.onChange(oldResponderInst, nextResponderInst, blockHostResponder);
  }
};

var eventTypes = {
  /**
   * On a `touchStart`/`mouseDown`, is it desired that this element become the
   * responder?
   */
  startShouldSetResponder: {
    phasedRegistrationNames: {
      bubbled: 'onStartShouldSetResponder',
      captured: 'onStartShouldSetResponderCapture'
    },
    dependencies: startDependencies
  },

  /**
   * On a `scroll`, is it desired that this element become the responder? This
   * is usually not needed, but should be used to retroactively infer that a
   * `touchStart` had occurred during momentum scroll. During a momentum scroll,
   * a touch start will be immediately followed by a scroll event if the view is
   * currently scrolling.
   *
   * TODO: This shouldn't bubble.
   */
  scrollShouldSetResponder: {
    phasedRegistrationNames: {
      bubbled: 'onScrollShouldSetResponder',
      captured: 'onScrollShouldSetResponderCapture'
    },
    dependencies: [TOP_SCROLL]
  },

  /**
   * On text selection change, should this element become the responder? This
   * is needed for text inputs or other views with native selection, so the
   * JS view can claim the responder.
   *
   * TODO: This shouldn't bubble.
   */
  selectionChangeShouldSetResponder: {
    phasedRegistrationNames: {
      bubbled: 'onSelectionChangeShouldSetResponder',
      captured: 'onSelectionChangeShouldSetResponderCapture'
    },
    dependencies: [TOP_SELECTION_CHANGE]
  },

  /**
   * On a `touchMove`/`mouseMove`, is it desired that this element become the
   * responder?
   */
  moveShouldSetResponder: {
    phasedRegistrationNames: {
      bubbled: 'onMoveShouldSetResponder',
      captured: 'onMoveShouldSetResponderCapture'
    },
    dependencies: moveDependencies
  },

  /**
   * Direct responder events dispatched directly to responder. Do not bubble.
   */
  responderStart: {
    registrationName: 'onResponderStart',
    dependencies: startDependencies
  },
  responderMove: {
    registrationName: 'onResponderMove',
    dependencies: moveDependencies
  },
  responderEnd: {
    registrationName: 'onResponderEnd',
    dependencies: endDependencies
  },
  responderRelease: {
    registrationName: 'onResponderRelease',
    dependencies: endDependencies
  },
  responderTerminationRequest: {
    registrationName: 'onResponderTerminationRequest',
    dependencies: []
  },
  responderGrant: {
    registrationName: 'onResponderGrant',
    dependencies: []
  },
  responderReject: {
    registrationName: 'onResponderReject',
    dependencies: []
  },
  responderTerminate: {
    registrationName: 'onResponderTerminate',
    dependencies: []
  }
};
/**
 *
 * Responder System:
 * ----------------
 *
 * - A global, solitary "interaction lock" on a view.
 * - If a node becomes the responder, it should convey visual feedback
 *   immediately to indicate so, either by highlighting or moving accordingly.
 * - To be the responder means, that touches are exclusively important to that
 *   responder view, and no other view.
 * - While touches are still occurring, the responder lock can be transferred to
 *   a new view, but only to increasingly "higher" views (meaning ancestors of
 *   the current responder).
 *
 * Responder being granted:
 * ------------------------
 *
 * - Touch starts, moves, and scrolls can cause an ID to become the responder.
 * - We capture/bubble `startShouldSetResponder`/`moveShouldSetResponder` to
 *   the "appropriate place".
 * - If nothing is currently the responder, the "appropriate place" is the
 *   initiating event's `targetID`.
 * - If something *is* already the responder, the "appropriate place" is the
 *   first common ancestor of the event target and the current `responderInst`.
 * - Some negotiation happens: See the timing diagram below.
 * - Scrolled views automatically become responder. The reasoning is that a
 *   platform scroll view that isn't built on top of the responder system has
 *   began scrolling, and the active responder must now be notified that the
 *   interaction is no longer locked to it - the system has taken over.
 *
 * - Responder being released:
 *   As soon as no more touches that *started* inside of descendants of the
 *   *current* responderInst, an `onResponderRelease` event is dispatched to the
 *   current responder, and the responder lock is released.
 *
 * TODO:
 * - on "end", a callback hook for `onResponderEndShouldRemainResponder` that
 *   determines if the responder lock should remain.
 * - If a view shouldn't "remain" the responder, any active touches should by
 *   default be considered "dead" and do not influence future negotiations or
 *   bubble paths. It should be as if those touches do not exist.
 * -- For multitouch: Usually a translate-z will choose to "remain" responder
 *  after one out of many touches ended. For translate-y, usually the view
 *  doesn't wish to "remain" responder after one of many touches end.
 * - Consider building this on top of a `stopPropagation` model similar to
 *   `W3C` events.
 * - Ensure that `onResponderTerminate` is called on touch cancels, whether or
 *   not `onResponderTerminationRequest` returns `true` or `false`.
 *
 */

/*                                             Negotiation Performed
                                             +-----------------------+
                                            /                         \
Process low level events to    +     Current Responder      +   wantsResponderID
determine who to perform negot-|   (if any exists at all)   |
iation/transition              | Otherwise just pass through|
-------------------------------+----------------------------+------------------+
Bubble to find first ID        |                            |
to return true:wantsResponderID|                            |
                               |                            |
     +-------------+           |                            |
     | onTouchStart|           |                            |
     +------+------+     none  |                            |
            |            return|                            |
+-----------v-------------+true| +------------------------+ |
|onStartShouldSetResponder|----->|onResponderStart (cur)  |<-----------+
+-----------+-------------+    | +------------------------+ |          |
            |                  |                            | +--------+-------+
            | returned true for|       false:REJECT +-------->|onResponderReject
            | wantsResponderID |                    |       | +----------------+
            | (now attempt     | +------------------+-----+ |
            |  handoff)        | |   onResponder          | |
            +------------------->|      TerminationRequest| |
                               | +------------------+-----+ |
                               |                    |       | +----------------+
                               |         true:GRANT +-------->|onResponderGrant|
                               |                            | +--------+-------+
                               | +------------------------+ |          |
                               | |   onResponderTerminate |<-----------+
                               | +------------------+-----+ |
                               |                    |       | +----------------+
                               |                    +-------->|onResponderStart|
                               |                            | +----------------+
Bubble to find first ID        |                            |
to return true:wantsResponderID|                            |
                               |                            |
     +-------------+           |                            |
     | onTouchMove |           |                            |
     +------+------+     none  |                            |
            |            return|                            |
+-----------v-------------+true| +------------------------+ |
|onMoveShouldSetResponder |----->|onResponderMove (cur)   |<-----------+
+-----------+-------------+    | +------------------------+ |          |
            |                  |                            | +--------+-------+
            | returned true for|       false:REJECT +-------->|onResponderRejec|
            | wantsResponderID |                    |       | +----------------+
            | (now attempt     | +------------------+-----+ |
            |  handoff)        | |   onResponder          | |
            +------------------->|      TerminationRequest| |
                               | +------------------+-----+ |
                               |                    |       | +----------------+
                               |         true:GRANT +-------->|onResponderGrant|
                               |                            | +--------+-------+
                               | +------------------------+ |          |
                               | |   onResponderTerminate |<-----------+
                               | +------------------+-----+ |
                               |                    |       | +----------------+
                               |                    +-------->|onResponderMove |
                               |                            | +----------------+
                               |                            |
                               |                            |
      Some active touch started|                            |
      inside current responder | +------------------------+ |
      +------------------------->|      onResponderEnd    | |
      |                        | +------------------------+ |
  +---+---------+              |                            |
  | onTouchEnd  |              |                            |
  +---+---------+              |                            |
      |                        | +------------------------+ |
      +------------------------->|     onResponderEnd     | |
      No active touches started| +-----------+------------+ |
      inside current responder |             |              |
                               |             v              |
                               | +------------------------+ |
                               | |    onResponderRelease  | |
                               | +------------------------+ |
                               |                            |
                               +                            + */

/**
 * A note about event ordering in the `EventPluginRegistry`.
 *
 * Suppose plugins are injected in the following order:
 *
 * `[R, S, C]`
 *
 * To help illustrate the example, assume `S` is `SimpleEventPlugin` (for
 * `onClick` etc) and `R` is `ResponderEventPlugin`.
 *
 * "Deferred-Dispatched Events":
 *
 * - The current event plugin system will traverse the list of injected plugins,
 *   in order, and extract events by collecting the plugin's return value of
 *   `extractEvents()`.
 * - These events that are returned from `extractEvents` are "deferred
 *   dispatched events".
 * - When returned from `extractEvents`, deferred-dispatched events contain an
 *   "accumulation" of deferred dispatches.
 * - These deferred dispatches are accumulated/collected before they are
 *   returned, but processed at a later time by the `EventPluginRegistry` (hence the
 *   name deferred).
 *
 * In the process of returning their deferred-dispatched events, event plugins
 * themselves can dispatch events on-demand without returning them from
 * `extractEvents`. Plugins might want to do this, so that they can use event
 * dispatching as a tool that helps them decide which events should be extracted
 * in the first place.
 *
 * "On-Demand-Dispatched Events":
 *
 * - On-demand-dispatched events are not returned from `extractEvents`.
 * - On-demand-dispatched events are dispatched during the process of returning
 *   the deferred-dispatched events.
 * - They should not have side effects.
 * - They should be avoided, and/or eventually be replaced with another
 *   abstraction that allows event plugins to perform multiple "rounds" of event
 *   extraction.
 *
 * Therefore, the sequence of event dispatches becomes:
 *
 * - `R`s on-demand events (if any)   (dispatched by `R` on-demand)
 * - `S`s on-demand events (if any)   (dispatched by `S` on-demand)
 * - `C`s on-demand events (if any)   (dispatched by `C` on-demand)
 * - `R`s extracted events (if any)   (dispatched by `EventPluginRegistry`)
 * - `S`s extracted events (if any)   (dispatched by `EventPluginRegistry`)
 * - `C`s extracted events (if any)   (dispatched by `EventPluginRegistry`)
 *
 * In the case of `ResponderEventPlugin`: If the `startShouldSetResponder`
 * on-demand dispatch returns `true` (and some other details are satisfied) the
 * `onResponderGrant` deferred dispatched event is returned from
 * `extractEvents`. The sequence of dispatch executions in this case
 * will appear as follows:
 *
 * - `startShouldSetResponder` (`ResponderEventPlugin` dispatches on-demand)
 * - `touchStartCapture`       (`EventPluginRegistry` dispatches as usual)
 * - `touchStart`              (`EventPluginRegistry` dispatches as usual)
 * - `responderGrant/Reject`   (`EventPluginRegistry` dispatches as usual)
 */

function setResponderAndExtractTransfer(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var shouldSetEventType = isStartish(topLevelType) ? eventTypes.startShouldSetResponder : isMoveish(topLevelType) ? eventTypes.moveShouldSetResponder : topLevelType === TOP_SELECTION_CHANGE ? eventTypes.selectionChangeShouldSetResponder : eventTypes.scrollShouldSetResponder; // TODO: stop one short of the current responder.

  var bubbleShouldSetFrom = !responderInst ? targetInst : getLowestCommonAncestor(responderInst, targetInst); // When capturing/bubbling the "shouldSet" event, we want to skip the target
  // (deepest ID) if it happens to be the current responder. The reasoning:
  // It's strange to get an `onMoveShouldSetResponder` when you're *already*
  // the responder.

  var skipOverBubbleShouldSetFrom = bubbleShouldSetFrom === responderInst;
  var shouldSetEvent = ResponderSyntheticEvent.getPooled(shouldSetEventType, bubbleShouldSetFrom, nativeEvent, nativeEventTarget);
  shouldSetEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;

  if (skipOverBubbleShouldSetFrom) {
    accumulateTwoPhaseDispatchesSkipTarget(shouldSetEvent);
  } else {
    accumulateTwoPhaseDispatches(shouldSetEvent);
  }

  var wantsResponderInst = executeDispatchesInOrderStopAtTrue(shouldSetEvent);

  if (!shouldSetEvent.isPersistent()) {
    shouldSetEvent.constructor.release(shouldSetEvent);
  }

  if (!wantsResponderInst || wantsResponderInst === responderInst) {
    return null;
  }

  var extracted;
  var grantEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderGrant, wantsResponderInst, nativeEvent, nativeEventTarget);
  grantEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
  accumulateDirectDispatches(grantEvent);
  var blockHostResponder = executeDirectDispatch(grantEvent) === true;

  if (responderInst) {
    var terminationRequestEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderTerminationRequest, responderInst, nativeEvent, nativeEventTarget);
    terminationRequestEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
    accumulateDirectDispatches(terminationRequestEvent);
    var shouldSwitch = !hasDispatches(terminationRequestEvent) || executeDirectDispatch(terminationRequestEvent);

    if (!terminationRequestEvent.isPersistent()) {
      terminationRequestEvent.constructor.release(terminationRequestEvent);
    }

    if (shouldSwitch) {
      var terminateEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderTerminate, responderInst, nativeEvent, nativeEventTarget);
      terminateEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
      accumulateDirectDispatches(terminateEvent);
      extracted = accumulate(extracted, [grantEvent, terminateEvent]);
      changeResponder(wantsResponderInst, blockHostResponder);
    } else {
      var rejectEvent = ResponderSyntheticEvent.getPooled(eventTypes.responderReject, wantsResponderInst, nativeEvent, nativeEventTarget);
      rejectEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
      accumulateDirectDispatches(rejectEvent);
      extracted = accumulate(extracted, rejectEvent);
    }
  } else {
    extracted = accumulate(extracted, grantEvent);
    changeResponder(wantsResponderInst, blockHostResponder);
  }

  return extracted;
}
/**
 * A transfer is a negotiation between a currently set responder and the next
 * element to claim responder status. Any start event could trigger a transfer
 * of responderInst. Any move event could trigger a transfer.
 *
 * @param {string} topLevelType Record from `BrowserEventConstants`.
 * @return {boolean} True if a transfer of responder could possibly occur.
 */


function canTriggerTransfer(topLevelType, topLevelInst, nativeEvent) {
  return topLevelInst && ( // responderIgnoreScroll: We are trying to migrate away from specifically
  // tracking native scroll events here and responderIgnoreScroll indicates we
  // will send topTouchCancel to handle canceling touch events instead
  topLevelType === TOP_SCROLL && !nativeEvent.responderIgnoreScroll || trackedTouchCount > 0 && topLevelType === TOP_SELECTION_CHANGE || isStartish(topLevelType) || isMoveish(topLevelType));
}
/**
 * Returns whether or not this touch end event makes it such that there are no
 * longer any touches that started inside of the current `responderInst`.
 *
 * @param {NativeEvent} nativeEvent Native touch end event.
 * @return {boolean} Whether or not this touch end event ends the responder.
 */


function noResponderTouches(nativeEvent) {
  var touches = nativeEvent.touches;

  if (!touches || touches.length === 0) {
    return true;
  }

  for (var i = 0; i < touches.length; i++) {
    var activeTouch = touches[i];
    var target = activeTouch.target;

    if (target !== null && target !== undefined && target !== 0) {
      // Is the original touch location inside of the current responder?
      var targetInst = getInstanceFromNode(target);

      if (isAncestor(responderInst, targetInst)) {
        return false;
      }
    }
  }

  return true;
}

var ResponderEventPlugin = {
  /* For unit testing only */
  _getResponder: function () {
    return responderInst;
  },
  eventTypes: eventTypes,

  /**
   * We must be resilient to `targetInst` being `null` on `touchMove` or
   * `touchEnd`. On certain platforms, this means that a native scroll has
   * assumed control and the original touch targets are destroyed.
   */
  extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags) {
    if (isStartish(topLevelType)) {
      trackedTouchCount += 1;
    } else if (isEndish(topLevelType)) {
      if (trackedTouchCount >= 0) {
        trackedTouchCount -= 1;
      } else {
        {
          warn('Ended a touch event which was not counted in `trackedTouchCount`.');
        }

        return null;
      }
    }

    ResponderTouchHistoryStore.recordTouchTrack(topLevelType, nativeEvent);
    var extracted = canTriggerTransfer(topLevelType, targetInst, nativeEvent) ? setResponderAndExtractTransfer(topLevelType, targetInst, nativeEvent, nativeEventTarget) : null; // Responder may or may not have transferred on a new touch start/move.
    // Regardless, whoever is the responder after any potential transfer, we
    // direct all touch start/move/ends to them in the form of
    // `onResponderMove/Start/End`. These will be called for *every* additional
    // finger that move/start/end, dispatched directly to whoever is the
    // current responder at that moment, until the responder is "released".
    //
    // These multiple individual change touch events are are always bookended
    // by `onResponderGrant`, and one of
    // (`onResponderRelease/onResponderTerminate`).

    var isResponderTouchStart = responderInst && isStartish(topLevelType);
    var isResponderTouchMove = responderInst && isMoveish(topLevelType);
    var isResponderTouchEnd = responderInst && isEndish(topLevelType);
    var incrementalTouch = isResponderTouchStart ? eventTypes.responderStart : isResponderTouchMove ? eventTypes.responderMove : isResponderTouchEnd ? eventTypes.responderEnd : null;

    if (incrementalTouch) {
      var gesture = ResponderSyntheticEvent.getPooled(incrementalTouch, responderInst, nativeEvent, nativeEventTarget);
      gesture.touchHistory = ResponderTouchHistoryStore.touchHistory;
      accumulateDirectDispatches(gesture);
      extracted = accumulate(extracted, gesture);
    }

    var isResponderTerminate = responderInst && topLevelType === TOP_TOUCH_CANCEL;
    var isResponderRelease = responderInst && !isResponderTerminate && isEndish(topLevelType) && noResponderTouches(nativeEvent);
    var finalTouch = isResponderTerminate ? eventTypes.responderTerminate : isResponderRelease ? eventTypes.responderRelease : null;

    if (finalTouch) {
      var finalEvent = ResponderSyntheticEvent.getPooled(finalTouch, responderInst, nativeEvent, nativeEventTarget);
      finalEvent.touchHistory = ResponderTouchHistoryStore.touchHistory;
      accumulateDirectDispatches(finalEvent);
      extracted = accumulate(extracted, finalEvent);
      changeResponder(null);
    }

    return extracted;
  },
  GlobalResponderHandler: null,
  injection: {
    /**
     * @param {{onChange: (ReactID, ReactID) => void} GlobalResponderHandler
     * Object that handles any change in responder. Use this to inject
     * integration with an existing touch handling system etc.
     */
    injectGlobalResponderHandler: function (GlobalResponderHandler) {
      ResponderEventPlugin.GlobalResponderHandler = GlobalResponderHandler;
    }
  }
};

// Keep in sync with ReactDOM.js, ReactTestUtils.js, and ReactTestUtilsAct.js:

var _ReactDOM$__SECRET_IN = ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
    getInstanceFromNode$1 = _ReactDOM$__SECRET_IN[0],
    getNodeFromInstance$1 = _ReactDOM$__SECRET_IN[1],
    getFiberCurrentPropsFromNode$1 = _ReactDOM$__SECRET_IN[2],
    injectEventPluginsByName = _ReactDOM$__SECRET_IN[3];
setComponentTree(getFiberCurrentPropsFromNode$1, getInstanceFromNode$1, getNodeFromInstance$1);

var ReactDOMUnstableNativeDependencies = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ResponderEventPlugin: ResponderEventPlugin,
  ResponderTouchHistoryStore: ResponderTouchHistoryStore,
  injectEventPluginsByName: injectEventPluginsByName
});

var unstableNativeDependencies = ReactDOMUnstableNativeDependencies;

module.exports = unstableNativeDependencies;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-dom/unstable-native-dependencies.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/unstable-native-dependencies.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-unstable-native-dependencies.development.js */ "./node_modules/react-dom/cjs/react-dom-unstable-native-dependencies.development.js");
}


/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/I18nManager/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/I18nManager/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ExecutionEnvironment = _interopRequireDefault(__webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var doLeftAndRightSwapInRTL = true;
var isPreferredLanguageRTL = false;
var isRTLAllowed = true;
var isRTLForced = false;

var isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }

  return isRTLAllowed && isPreferredLanguageRTL;
};

var onDirectionChange = function onDirectionChange() {
  if (_ExecutionEnvironment.default.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
    }
  }
};

var I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    onDirectionChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    onDirectionChange();
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onDirectionChange();
  },
  swapLeftAndRightInRTL: function swapLeftAndRightInRTL(bool) {
    doLeftAndRightSwapInRTL = bool;
  },

  get doLeftAndRightSwapInRTL() {
    return doLeftAndRightSwapInRTL;
  },

  get isRTL() {
    return isRTL();
  }

};
var _default = I18nManager;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/StyleSheet.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/StyleSheet.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ReactNativePropRegistry = _interopRequireDefault(__webpack_require__(/*! ../../modules/ReactNativePropRegistry */ "./node_modules/react-native-web/dist/cjs/modules/ReactNativePropRegistry/index.js"));

var _flattenStyle = _interopRequireDefault(__webpack_require__(/*! ./flattenStyle */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/flattenStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

var absoluteFill = _ReactNativePropRegistry.default.register(absoluteFillObject);

var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  compose: function compose(style1, style2) {
    if (true) {
      /* eslint-disable prefer-rest-params */
      var len = arguments.length;

      if (len > 2) {
        var readableStyles = Array.prototype.slice.call(arguments).map(function (a) {
          return (0, _flattenStyle.default)(a);
        });
        throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
      }
      /* eslint-enable prefer-rest-params */

    }

    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    var result = {};
    Object.keys(styles).forEach(function (key) {
      if (true) {
        var validate = __webpack_require__(/*! ./validate */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/validate.js");

        var interopValidate = validate.default ? validate.default : validate;
        interopValidate(key, styles);
      }

      var id = styles[key] && _ReactNativePropRegistry.default.register(styles[key]);

      result[key] = id;
    });
    return result;
  },
  flatten: _flattenStyle.default,
  // `hairlineWidth` is not implemented using screen density as browsers may
  // round sub-pixel values down to `0`, causing the line not to be rendered.
  hairlineWidth: 1
};
var _default = StyleSheet;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/compile.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/compile.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.atomic = atomic;
exports.classic = classic;
exports.inline = inline;
exports.stringifyValueWithProperty = stringifyValueWithProperty;

var _createReactDOMStyle = _interopRequireDefault(__webpack_require__(/*! ./createReactDOMStyle */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createReactDOMStyle.js"));

var _hash = _interopRequireDefault(__webpack_require__(/*! ../../vendor/hash */ "./node_modules/react-native-web/dist/cjs/vendor/hash/index.js"));

var _hyphenateStyleName = _interopRequireDefault(__webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"));

var _normalizeValueWithProperty = _interopRequireDefault(__webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/normalizeValueWithProperty.js"));

var _prefixStyles = _interopRequireWildcard(__webpack_require__(/*! ../../modules/prefixStyles */ "./node_modules/react-native-web/dist/cjs/modules/prefixStyles/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var cache = {
  get: function get(property, value) {
    if (cache[property] != null && cache[property].hasOwnProperty(value) && cache[property][value] != null) {
      return cache[property][value];
    }
  },
  set: function set(property, value, object) {
    if (cache[property] == null) {
      cache[property] = {};
    }

    return cache[property][value] = object;
  }
};
/**
 * Compile style to atomic CSS rules.
 */

function atomic(style) {
  return Object.keys(style).sort().reduce(function (acc, property) {
    var value = style[property];

    if (value != null) {
      var valueString = stringifyValueWithProperty(value, property);
      var cachedResult = cache.get(property, valueString);

      if (cachedResult != null) {
        var identifier = cachedResult.identifier;
        acc[identifier] = cachedResult;
      } else {
        var _identifier = createIdentifier('r', property, value);

        var rules = createAtomicRules(_identifier, property, value);

        var _cachedResult = cache.set(property, valueString, {
          property: property,
          value: stringifyValueWithProperty(value, property),
          identifier: _identifier,
          rules: rules
        });

        acc[_identifier] = _cachedResult;
      }
    }

    return acc;
  }, {});
}
/**
 * Compile simple style object to classic CSS rules.
 * No support for 'placeholderTextColor', 'scrollbarWidth', or 'pointerEvents'.
 */


function classic(style, name) {
  var _ref;

  var identifier = createIdentifier('css', name, style);

  var animationKeyframes = style.animationKeyframes,
      rest = _objectWithoutPropertiesLoose(style, ["animationKeyframes"]);

  var rules = [];
  var selector = "." + identifier;
  var animationName;

  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes),
        animationNames = _processKeyframesValu.animationNames,
        keyframesRules = _processKeyframesValu.rules;

    animationName = animationNames.join(',');
    rules.push.apply(rules, keyframesRules);
  }

  var block = createDeclarationBlock(_objectSpread({}, rest, {
    animationName: animationName
  }));
  rules.push("" + selector + block);
  return _ref = {}, _ref[identifier] = {
    identifier: identifier,
    rules: rules
  }, _ref;
}
/**
 * Compile simple style object to inline DOM styles.
 * No support for 'animationKeyframes', 'placeholderTextColor', 'scrollbarWidth', or 'pointerEvents'.
 */


function inline(style) {
  return (0, _prefixStyles.prefixInlineStyles)((0, _createReactDOMStyle.default)(style));
}
/**
 * Create a value string that normalizes different input values with a common
 * output.
 */


function stringifyValueWithProperty(value, property) {
  // e.g., 0 => '0px', 'black' => 'rgba(0,0,0,1)'
  var normalizedValue = (0, _normalizeValueWithProperty.default)(value, property);
  return typeof normalizedValue !== 'string' ? JSON.stringify(normalizedValue || '') : normalizedValue;
}
/**
 * Create the Atomic CSS rules needed for a given StyleSheet rule.
 * Translates StyleSheet declarations to CSS.
 */


function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier; // Handle non-standard properties and object values that require multiple
  // CSS rules to be created.

  switch (property) {
    case 'animationKeyframes':
      {
        var _processKeyframesValu2 = processKeyframesValue(value),
            animationNames = _processKeyframesValu2.animationNames,
            keyframesRules = _processKeyframesValu2.rules;

        var block = createDeclarationBlock({
          animationName: animationNames.join(',')
        });
        rules.push.apply(rules, ["" + selector + block].concat(keyframesRules));
        break;
      }

    case 'placeholderTextColor':
      {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });

        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/

    case 'scrollbarWidth':
      {
        if (value === 'none') {
          rules.push(selector + "::-webkit-scrollbar{display:none}", selector + "{overflow:-moz-scrollbars-none;-ms-overflow-style:none;scrollbar-width:none;}");
        }

        break;
      }
    // See #513

    case 'pointerEvents':
      {
        var _createDeclarationBlo3;

        var finalValue = value;

        if (value === 'auto' || value === 'box-only') {
          finalValue = 'auto!important';

          if (value === 'box-only') {
            var _createDeclarationBlo;

            var _block3 = createDeclarationBlock((_createDeclarationBlo = {}, _createDeclarationBlo[property] = 'none', _createDeclarationBlo));

            rules.push(selector + ">*" + _block3);
          }
        } else if (value === 'none' || value === 'box-none') {
          finalValue = 'none!important';

          if (value === 'box-none') {
            var _createDeclarationBlo2;

            var _block4 = createDeclarationBlock((_createDeclarationBlo2 = {}, _createDeclarationBlo2[property] = 'auto', _createDeclarationBlo2));

            rules.push(selector + ">*" + _block4);
          }
        }

        var _block2 = createDeclarationBlock((_createDeclarationBlo3 = {}, _createDeclarationBlo3[property] = finalValue, _createDeclarationBlo3));

        rules.push("" + selector + _block2);
        break;
      }

    default:
      {
        var _createDeclarationBlo4;

        var _block5 = createDeclarationBlock((_createDeclarationBlo4 = {}, _createDeclarationBlo4[property] = value, _createDeclarationBlo4));

        rules.push("" + selector + _block5);
        break;
      }
  }

  return rules;
}
/**
 * Creates a CSS declaration block from a StyleSheet object.
 */


function createDeclarationBlock(style) {
  var domStyle = (0, _prefixStyles.default)((0, _createReactDOMStyle.default)(style));
  var declarationsString = Object.keys(domStyle).map(function (property) {
    var value = domStyle[property];
    var prop = (0, _hyphenateStyleName.default)(property); // The prefixer may return an array of values:
    // { display: [ '-webkit-flex', 'flex' ] }
    // to represent "fallback" declarations
    // { display: -webkit-flex; display: flex; }

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return prop + ":" + v;
      }).join(';');
    } else {
      return prop + ":" + value;
    }
  }) // Once properties are hyphenated, this will put the vendor
  // prefixed and short-form properties first in the list.
  .sort().join(';');
  return "{" + declarationsString + ";}";
}
/**
 * An identifier is associated with a unique set of styles.
 */


function createIdentifier(prefix, name, value) {
  var hashedString = (0, _hash.default)(name + stringifyValueWithProperty(value, name));
  return  true ? prefix + "-" + name + "-" + hashedString : undefined;
}
/**
 * Create individual CSS keyframes rules.
 */


function createKeyframes(keyframes) {
  var prefixes = ['-webkit-', ''];
  var identifier = createIdentifier('r', 'animation', keyframes);
  var steps = '{' + Object.keys(keyframes).map(function (stepName) {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join('') + '}';
  var rules = prefixes.map(function (prefix) {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return {
    identifier: identifier,
    rules: rules
  };
}
/**
 * Create CSS keyframes rules and names from a StyleSheet keyframes object.
 */


function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === 'number') {
    throw new Error('Invalid CSS keyframes type');
  }

  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach(function (keyframes) {
    if (typeof keyframes === 'string') {
      // Support external animation libraries (identifiers only)
      animationNames.push(keyframes);
    } else {
      // Create rules for each of the keyframes
      var _createKeyframes = createKeyframes(keyframes),
          identifier = _createKeyframes.identifier,
          keyframesRules = _createKeyframes.rules;

      animationNames.push(identifier);
      rules.push.apply(rules, keyframesRules);
    }
  });
  return {
    animationNames: animationNames,
    rules: rules
  };
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/constants.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/constants.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SYSTEM_FONT_STACK = exports.MONOSPACE_FONT_STACK = exports.STYLE_SHORT_FORM_EXPANSIONS = exports.STYLE_GROUPS = exports.STYLE_ELEMENT_ID = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var STYLE_ELEMENT_ID = 'react-native-stylesheet';
exports.STYLE_ELEMENT_ID = STYLE_ELEMENT_ID;
var STYLE_GROUPS = {
  reset: 0,
  modality: 0.1,
  classicReset: 0.5,
  classic: 1,
  atomic: 2.2,
  custom: {
    borderColor: 2,
    borderRadius: 2,
    borderStyle: 2,
    borderWidth: 2,
    display: 2,
    flex: 2,
    margin: 2,
    overflow: 2,
    overscrollBehavior: 2,
    padding: 2,
    marginHorizontal: 2.1,
    marginVertical: 2.1,
    paddingHorizontal: 2.1,
    paddingVertical: 2.1
  }
};
exports.STYLE_GROUPS = STYLE_GROUPS;
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom']
};
exports.STYLE_SHORT_FORM_EXPANSIONS = STYLE_SHORT_FORM_EXPANSIONS;
var MONOSPACE_FONT_STACK = 'monospace,monospace';
exports.MONOSPACE_FONT_STACK = MONOSPACE_FONT_STACK;
var SYSTEM_FONT_STACK = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif';
exports.SYSTEM_FONT_STACK = SYSTEM_FONT_STACK;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createCSSStyleSheet.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createCSSStyleSheet.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createCSSStyleSheet;

var _ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// $FlowFixMe: HTMLStyleElement is incorrectly typed - https://github.com/facebook/flow/issues/2696
function createCSSStyleSheet(id) {
  if (_ExecutionEnvironment.canUseDOM) {
    var element = document.getElementById(id);

    if (element != null) {
      // $FlowFixMe: HTMLElement is incorrectly typed
      return element.sheet;
    } else {
      var _element = document.createElement('style');

      _element.setAttribute('id', id);

      var head = document.head;

      if (head) {
        head.insertBefore(_element, head.firstChild);
      }

      return _element.sheet;
    }
  } else {
    return null;
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createCompileableStyle.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createCompileableStyle.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeValueWithProperty = _interopRequireDefault(__webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/normalizeValueWithProperty.js"));

var _resolveShadowValue = _interopRequireDefault(__webpack_require__(/*! ./resolveShadowValue */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/resolveShadowValue.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultOffset = {
  height: 0,
  width: 0
};

function boxShadowReducer(resolvedStyle, style) {
  var boxShadow = style.boxShadow;
  var shadow = (0, _resolveShadowValue.default)(style);

  if (shadow != null) {
    resolvedStyle.boxShadow = boxShadow ? boxShadow + ", " + shadow : shadow;
  }
}

function textShadowReducer(resolvedStyle, style) {
  var textShadowColor = style.textShadowColor,
      textShadowOffset = style.textShadowOffset,
      textShadowRadius = style.textShadowRadius;

  var _ref = textShadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var radius = textShadowRadius || 0;
  var offsetX = (0, _normalizeValueWithProperty.default)(width);
  var offsetY = (0, _normalizeValueWithProperty.default)(height);
  var blurRadius = (0, _normalizeValueWithProperty.default)(radius);
  var color = (0, _normalizeValueWithProperty.default)(textShadowColor, 'textShadowColor');

  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    resolvedStyle.textShadow = offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}

var createCompileableStyle = function createCompileableStyle(styles) {
  var shadowColor = styles.shadowColor,
      shadowOffset = styles.shadowOffset,
      shadowOpacity = styles.shadowOpacity,
      shadowRadius = styles.shadowRadius,
      textShadowColor = styles.textShadowColor,
      textShadowOffset = styles.textShadowOffset,
      textShadowRadius = styles.textShadowRadius,
      nextStyles = _objectWithoutPropertiesLoose(styles, ["shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "textShadowColor", "textShadowOffset", "textShadowRadius"]);

  if (shadowColor != null || shadowOffset != null || shadowOpacity != null || shadowRadius != null) {
    boxShadowReducer(nextStyles, styles);
  }

  if (textShadowColor != null || textShadowOffset != null || textShadowRadius != null) {
    textShadowReducer(nextStyles, styles);
  }

  return nextStyles;
};

var _default = createCompileableStyle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createOrderedCSSStyleSheet.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createOrderedCSSStyleSheet.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createOrderedCSSStyleSheet;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var slice = Array.prototype.slice;
/**
 * Order-based insertion of CSS.
 *
 * Each rule is associated with a numerically defined group.
 * Groups are ordered within the style sheet according to their number, with the
 * lowest first.
 *
 * Groups are implemented using marker rules. The selector of the first rule of
 * each group is used only to encode the group number for hydration. An
 * alternative implementation could rely on CSSMediaRule, allowing groups to be
 * treated as a sub-sheet, but the Edge implementation of CSSMediaRule is
 * broken.
 * https://developer.mozilla.org/en-US/docs/Web/API/CSSMediaRule
 * https://gist.github.com/necolas/aa0c37846ad6bd3b05b727b959e82674
 */

function createOrderedCSSStyleSheet(sheet) {
  var groups = {};
  var selectors = {};
  /**
   * Hydrate approximate record from any existing rules in the sheet.
   */

  if (sheet != null) {
    var group;
    slice.call(sheet.cssRules).forEach(function (cssRule, i) {
      var cssText = cssRule.cssText; // Create record of existing selectors and rules

      if (cssText.indexOf('stylesheet-group') > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);

        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }

  function sheetInsert(sheet, group, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex]; // Insert rule before the next group, or at the end of the stylesheet

    var position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet.cssRules.length;
    var isInserted = insertRuleAt(sheet, text, position);

    if (isInserted) {
      // Set the starting index of the new group
      if (groups[group].start == null) {
        groups[group].start = position;
      } // Increment the starting index of all subsequent groups


      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start;
        groups[groupNumber].start = previousStart + 1;
      }
    }

    return isInserted;
  }

  var OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent: function getTextContent() {
      return getOrderedGroups(groups).map(function (group) {
        var rules = groups[group].rules;
        return rules.join('\n');
      }).join('\n');
    },

    /**
     * Insert a rule into the style sheet
     */
    insert: function insert(cssText, groupValue) {
      var group = Number(groupValue); // Create a new group.

      if (groups[group] == null) {
        var markerRule = encodeGroupRule(group); // Create the internal record.

        groups[group] = {
          start: null,
          rules: [markerRule]
        }; // Update CSSOM.

        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      } // selectorText is more reliable than cssText for insertion checks. The
      // browser excludes vendor-prefixed properties and rewrites certain values
      // making cssText more likely to be different from what was inserted.


      var selectorText = getSelectorText(cssText);

      if (selectorText != null && selectors[selectorText] == null) {
        // Update the internal records.
        selectors[selectorText] = true;
        groups[group].rules.push(cssText); // Update CSSOM.

        if (sheet != null) {
          var isInserted = sheetInsert(sheet, group, cssText);

          if (!isInserted) {
            // Revert internal record change if a rule was rejected (e.g.,
            // unrecognized pseudo-selector)
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}
/**
 * Helper functions
 */


function encodeGroupRule(group) {
  return "[stylesheet-group=\"" + group + "\"]{}";
}

function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(/["']/)[1]);
}

function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}

var pattern = /\s*([,])\s*/g;

function getSelectorText(cssText) {
  var selector = cssText.split('{')[0].trim();
  return selector !== '' ? selector.replace(pattern, '$1') : null;
}

function insertRuleAt(root, cssText, position) {
  try {
    // $FlowFixMe: Flow is missing CSSOM types needed to type 'root'.
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    // JSDOM doesn't support `CSSSMediaRule#insertRule`.
    // Also ignore errors that occur from attempting to insert vendor-prefixed selectors.
    return false;
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createReactDOMStyle.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createReactDOMStyle.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/constants.js");

var _normalizeValueWithProperty = _interopRequireDefault(__webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/normalizeValueWithProperty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The browser implements the CSS cascade, where the order of properties is a
 * factor in determining which styles to paint. React Native is different. It
 * gives giving precedence to the more specific style property. For example,
 * the value of `paddingTop` takes precedence over that of `padding`.
 *
 * This module creates mutally exclusive style declarations by expanding all of
 * React Native's supported shortform properties (e.g. `padding`) to their
 * longfrom equivalents.
 */
var emptyObject = {};
var supportsCSS3TextDecoration = !_ExecutionEnvironment.canUseDOM || window.CSS != null && window.CSS.supports != null && (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'));
/**
 * Transform
 */
// { scale: 2 } => 'scale(2)'
// { translateX: 20 } => 'translateX(20px)'

var mapTransform = function mapTransform(transform) {
  var type = Object.keys(transform)[0];
  var value = (0, _normalizeValueWithProperty.default)(transform[type], type);
  return type + "(" + value + ")";
}; // [1,2,3,4,5,6] => 'matrix3d(1,2,3,4,5,6)'


var convertTransformMatrix = function convertTransformMatrix(transformMatrix) {
  var matrix = transformMatrix.join(',');
  return "matrix3d(" + matrix + ")";
};

var resolveTransform = function resolveTransform(resolvedStyle, style) {
  var transform = style.transform;

  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(' ');
  } else if (style.transformMatrix) {
    transform = convertTransformMatrix(style.transformMatrix);
  }

  resolvedStyle.transform = transform;
};
/**
 * Reducer
 */


var createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return emptyObject;
  }

  var resolvedStyle = {};
  Object.keys(style).sort().forEach(function (prop) {
    var value = (0, _normalizeValueWithProperty.default)(style[prop], prop); // Ignore everything else with a null value

    if (value == null) {
      return;
    }

    switch (prop) {
      // Ignore some React Native styles
      case 'aspectRatio':
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor':
        {
          break;
        }
      // TODO: remove once this issue is fixed
      // https://github.com/rofrischmann/inline-style-prefixer/issues/159

      case 'backgroundClip':
        {
          if (value === 'text') {
            resolvedStyle.backgroundClip = value;
            resolvedStyle.WebkitBackgroundClip = value;
          }

          break;
        }
      // The 'flex' property value in React Native must be a positive integer,
      // 0, or -1.

      case 'flex':
        {
          if (value > 0) {
            resolvedStyle.flexGrow = value;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = '0%';
          } else if (value === 0) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 0;
            resolvedStyle.flexBasis = '0%';
          } else if (value === -1) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = 'auto';
          }

          break;
        }

      case 'font':
        {
          resolvedStyle[prop] = value.replace('System', _constants.SYSTEM_FONT_STACK);
          break;
        }

      case 'fontFamily':
        {
          if (value.indexOf('System') > -1) {
            var stack = value.split(/,\s*/);
            stack[stack.indexOf('System')] = _constants.SYSTEM_FONT_STACK;
            resolvedStyle[prop] = stack.join(',');
          } else if (value === 'monospace') {
            resolvedStyle[prop] = _constants.MONOSPACE_FONT_STACK;
          } else {
            resolvedStyle[prop] = value;
          }

          break;
        }

      case 'fontVariant':
        {
          if (Array.isArray(value) && value.length > 0) {
            resolvedStyle.fontVariant = value.join(' ');
          }

          break;
        }

      case 'textAlignVertical':
        {
          resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
          break;
        }

      case 'textDecorationLine':
        {
          // use 'text-decoration' for browsers that only support CSS2
          // text-decoration (e.g., IE, Edge)
          if (!supportsCSS3TextDecoration) {
            resolvedStyle.textDecoration = value;
          } else {
            resolvedStyle.textDecorationLine = value;
          }

          break;
        }

      case 'transform':
      case 'transformMatrix':
        {
          resolveTransform(resolvedStyle, style);
          break;
        }

      case 'writingDirection':
        {
          resolvedStyle.direction = value;
          break;
        }

      default:
        {
          var longFormProperties = _constants.STYLE_SHORT_FORM_EXPANSIONS[prop];

          if (longFormProperties) {
            longFormProperties.forEach(function (longForm, i) {
              // The value of any longform property in the original styles takes
              // precedence over the shortform's value.
              if (typeof style[longForm] === 'undefined') {
                resolvedStyle[longForm] = value;
              }
            });
          } else {
            resolvedStyle[prop] = Array.isArray(value) ? value.join(',') : value;
          }
        }
    }
  });
  return resolvedStyle;
};

var _default = createReactDOMStyle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createStyleResolver.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createStyleResolver.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createStyleResolver;

var _ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _createCSSStyleSheet = _interopRequireDefault(__webpack_require__(/*! ./createCSSStyleSheet */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createCSSStyleSheet.js"));

var _createCompileableStyle = _interopRequireDefault(__webpack_require__(/*! ./createCompileableStyle */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createCompileableStyle.js"));

var _createOrderedCSSStyleSheet = _interopRequireDefault(__webpack_require__(/*! ./createOrderedCSSStyleSheet */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createOrderedCSSStyleSheet.js"));

var _flattenArray = _interopRequireDefault(__webpack_require__(/*! ../../modules/flattenArray */ "./node_modules/react-native-web/dist/cjs/modules/flattenArray/index.js"));

var _flattenStyle = _interopRequireDefault(__webpack_require__(/*! ./flattenStyle */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/flattenStyle.js"));

var _I18nManager = _interopRequireDefault(__webpack_require__(/*! ../I18nManager */ "./node_modules/react-native-web/dist/cjs/exports/I18nManager/index.js"));

var _i18nStyle = _interopRequireDefault(__webpack_require__(/*! ./i18nStyle */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/i18nStyle.js"));

var _compile = __webpack_require__(/*! ./compile */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/compile.js");

var _initialRules = _interopRequireDefault(__webpack_require__(/*! ./initialRules */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/initialRules.js"));

var _modality = _interopRequireDefault(__webpack_require__(/*! ./modality */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/modality.js"));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emptyObject = {};

function createStyleResolver() {
  var inserted, sheet, lookup;
  var resolved = {
    css: {},
    ltr: {},
    rtl: {},
    rtlNoSwap: {}
  };

  var init = function init() {
    inserted = {
      css: {},
      ltr: {},
      rtl: {},
      rtlNoSwap: {}
    };
    sheet = (0, _createOrderedCSSStyleSheet.default)((0, _createCSSStyleSheet.default)(_constants.STYLE_ELEMENT_ID));
    lookup = {
      byClassName: {},
      byProp: {}
    };
    (0, _modality.default)(function (rule) {
      return sheet.insert(rule, _constants.STYLE_GROUPS.modality);
    });

    _initialRules.default.forEach(function (rule) {
      sheet.insert(rule, _constants.STYLE_GROUPS.reset);
    });
  };

  init();

  function addToLookup(className, prop, value) {
    if (!lookup.byProp[prop]) {
      lookup.byProp[prop] = {};
    }

    lookup.byProp[prop][value] = className;
    lookup.byClassName[className] = {
      prop: prop,
      value: value
    };
  }

  function getClassName(prop, value) {
    var val = (0, _compile.stringifyValueWithProperty)(value, prop);
    var cache = lookup.byProp;
    return cache[prop] && cache[prop].hasOwnProperty(val) && cache[prop][val];
  }

  function _injectRegisteredStyle(id) {
    var doLeftAndRightSwapInRTL = _I18nManager.default.doLeftAndRightSwapInRTL,
        isRTL = _I18nManager.default.isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (!inserted[dir][id]) {
      var style = (0, _createCompileableStyle.default)((0, _i18nStyle.default)((0, _flattenStyle.default)(id)));
      var results = (0, _compile.atomic)(style);
      Object.keys(results).forEach(function (key) {
        var _results$key = results[key],
            identifier = _results$key.identifier,
            property = _results$key.property,
            rules = _results$key.rules,
            value = _results$key.value;
        addToLookup(identifier, property, value);
        rules.forEach(function (rule) {
          var group = _constants.STYLE_GROUPS.custom[property] || _constants.STYLE_GROUPS.atomic;
          sheet.insert(rule, group);
        });
      });
      inserted[dir][id] = true;
    }
  }
  /**
   * Resolves a React Native style object to DOM attributes
   */


  function resolve(style, classList) {
    var nextClassList = [];
    var props = {};

    if (!style && !classList) {
      return props;
    }

    if (Array.isArray(classList)) {
      (0, _flattenArray.default)(classList).forEach(function (identifier) {
        if (identifier) {
          if (inserted.css[identifier] == null && resolved.css[identifier] != null) {
            var item = resolved.css[identifier];
            item.rules.forEach(function (rule) {
              sheet.insert(rule, item.group);
            });
            inserted.css[identifier] = true;
          }

          nextClassList.push(identifier);
        }
      });
    }

    if (typeof style === 'number') {
      // fast and cachable
      _injectRegisteredStyle(style);

      var key = createCacheKey(style);
      props = _resolveStyle(style, key);
    } else if (!Array.isArray(style)) {
      // resolve a plain RN style object
      props = _resolveStyle(style);
    } else {
      // flatten the style array
      // cache resolved props when all styles are registered
      // otherwise fallback to resolving
      var flatArray = (0, _flattenArray.default)(style);
      var isArrayOfNumbers = true;
      var cacheKey = '';

      for (var i = 0; i < flatArray.length; i++) {
        var id = flatArray[i];

        if (typeof id !== 'number') {
          isArrayOfNumbers = false;
        } else {
          if (isArrayOfNumbers) {
            cacheKey += id + '-';
          }

          _injectRegisteredStyle(id);
        }
      }

      var _key = isArrayOfNumbers ? createCacheKey(cacheKey) : null;

      props = _resolveStyle(flatArray, _key);
    }

    nextClassList.push.apply(nextClassList, props.classList);
    var finalProps = {
      className: classListToString(nextClassList),
      classList: nextClassList
    };

    if (props.style) {
      finalProps.style = props.style;
    }

    return finalProps;
  }
  /**
   * Resolves a React Native style object to DOM attributes, accounting for
   * the existing styles applied to the DOM node.
   *
   * To determine the next style, some of the existing DOM state must be
   * converted back into React Native styles.
   */


  function resolveWithNode(rnStyleNext, node) {
    function getDeclaration(className) {
      return lookup.byClassName[className] || emptyObject;
    }

    var _getDOMStyleInfo = getDOMStyleInfo(node),
        rdomClassList = _getDOMStyleInfo.classList,
        rdomStyle = _getDOMStyleInfo.style; // Convert the DOM classList back into a React Native form
    // Preserves unrecognized class names.


    var _rdomClassList$reduce = rdomClassList.reduce(function (styleProps, className) {
      var _getDeclaration = getDeclaration(className),
          prop = _getDeclaration.prop,
          value = _getDeclaration.value;

      if (prop) {
        styleProps.style[prop] = value;
      } else {
        styleProps.classList.push(className);
      }

      return styleProps;
    }, {
      classList: [],
      style: {}
    }),
        rnClassList = _rdomClassList$reduce.classList,
        rnStyle = _rdomClassList$reduce.style; // Create next DOM style props from current and next RN styles


    var _resolve = resolve([(0, _i18nStyle.default)(rnStyle), rnStyleNext]),
        rdomClassListNext = _resolve.classList,
        rdomStyleNext = _resolve.style; // Final className
    // Add the current class names not managed by React Native


    var className = classListToString(rdomClassListNext.concat(rnClassList)); // Final style
    // Next class names take priority over current inline styles

    var style = _objectSpread({}, rdomStyle);

    rdomClassListNext.forEach(function (className) {
      var _getDeclaration2 = getDeclaration(className),
          prop = _getDeclaration2.prop;

      if (style[prop]) {
        style[prop] = '';
      }
    }); // Next inline styles take priority over current inline styles

    Object.assign(style, rdomStyleNext);
    return {
      className: className,
      style: style
    };
  }
  /**
   * Resolves a React Native style object
   */


  function _resolveStyle(style, key) {
    var doLeftAndRightSwapInRTL = _I18nManager.default.doLeftAndRightSwapInRTL,
        isRTL = _I18nManager.default.isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr'; // faster: memoized

    if (key != null && resolved[dir][key] != null) {
      return resolved[dir][key];
    }

    var flatStyle = (0, _flattenStyle.default)(style);
    var localizedStyle = (0, _createCompileableStyle.default)((0, _i18nStyle.default)(flatStyle)); // slower: convert style object to props and cache

    var props = Object.keys(localizedStyle).sort().reduce(function (props, styleProp) {
      var value = localizedStyle[styleProp];

      if (value != null) {
        var className = getClassName(styleProp, value);

        if (className) {
          props.classList.push(className);
        } else {
          // Certain properties and values are not transformed by 'createReactDOMStyle' as they
          // require more complex transforms into multiple CSS rules. Here we assume that StyleManager
          // can bind these styles to a className, and prevent them becoming invalid inline-styles.
          if (styleProp === 'animationKeyframes' || styleProp === 'placeholderTextColor' || styleProp === 'pointerEvents' || styleProp === 'scrollbarWidth') {
            var _atomic;

            var a = (0, _compile.atomic)((_atomic = {}, _atomic[styleProp] = value, _atomic));
            Object.keys(a).forEach(function (key) {
              var _a$key = a[key],
                  identifier = _a$key.identifier,
                  rules = _a$key.rules;
              props.classList.push(identifier);
              rules.forEach(function (rule) {
                sheet.insert(rule, _constants.STYLE_GROUPS.atomic);
              });
            });
          } else {
            if (!props.style) {
              props.style = {};
            } // 4x slower render


            props.style[styleProp] = value;
          }
        }
      }

      return props;
    }, {
      classList: []
    });

    if (props.style) {
      props.style = (0, _compile.inline)(props.style);
    }

    if (key != null) {
      resolved[dir][key] = props;
    }

    return props;
  }

  return {
    getStyleSheet: function getStyleSheet() {
      var textContent = sheet.getTextContent(); // Reset state on the server so critical css is always the result

      if (!_ExecutionEnvironment.canUseDOM) {
        init();
      }

      return {
        id: _constants.STYLE_ELEMENT_ID,
        textContent: textContent
      };
    },
    createCSS: function createCSS(rules, group) {
      var result = {};
      Object.keys(rules).forEach(function (name) {
        var style = rules[name];
        var compiled = (0, _compile.classic)(style, name);
        Object.keys(compiled).forEach(function (key) {
          var _compiled$key = compiled[key],
              identifier = _compiled$key.identifier,
              rules = _compiled$key.rules;
          resolved.css[identifier] = {
            group: group || _constants.STYLE_GROUPS.classic,
            rules: rules
          };
          result[name] = identifier;
        });
      });
      return result;
    },
    resolve: resolve,
    sheet: sheet,
    resolveWithNode: resolveWithNode
  };
}
/**
 * Misc helpers
 */


var createCacheKey = function createCacheKey(id) {
  var prefix = 'rn';
  return prefix + "-" + id;
};

var classListToString = function classListToString(list) {
  return list.join(' ').trim();
};
/**
 * Copies classList and style data from a DOM node
 */


var hyphenPattern = /-([a-z])/g;

var toCamelCase = function toCamelCase(str) {
  return str.replace(hyphenPattern, function (m) {
    return m[1].toUpperCase();
  });
};

var getDOMStyleInfo = function getDOMStyleInfo(node) {
  var nodeStyle = node.style;
  var classList = Array.prototype.slice.call(node.classList);
  var style = {}; // DOM style is a CSSStyleDeclaration
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration

  for (var i = 0; i < nodeStyle.length; i += 1) {
    var property = nodeStyle.item(i);

    if (property) {
      // DOM style uses hyphenated prop names and may include vendor prefixes
      // Transform back into React DOM style.
      style[toCamelCase(property)] = nodeStyle.getPropertyValue(property);
    }
  }

  return {
    classList: classList,
    style: style
  };
};

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/css.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/css.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _styleResolver = _interopRequireDefault(__webpack_require__(/*! ./styleResolver */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/styleResolver.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * A simple (and dangerous) CSS system.
 * The order of CSS rule insertion is not guaranteed.
 * Avoiding combining 2 or more classes that modify the same property.
 */
var css = {
  /**
   * const classes = css.create({ base: {}, extra: {} })
   */
  create: function create(rules, group) {
    return _styleResolver.default.createCSS(rules, group);
  }
};
var _default = css;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/flattenStyle.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/flattenStyle.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ReactNativePropRegistry = _interopRequireDefault(__webpack_require__(/*! ../../modules/ReactNativePropRegistry */ "./node_modules/react-native-web/dist/cjs/modules/ReactNativePropRegistry/index.js"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function getStyle(style) {
  if (typeof style === 'number') {
    return _ReactNativePropRegistry.default.getByID(style);
  }

  return style;
}

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (true) {
    (0, _invariant.default)(style !== true, 'style may be false but not true');
  }

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  var result = {};

  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);

    if (computedStyle) {
      for (var key in computedStyle) {
        var value = computedStyle[key];
        result[key] = value;
      }
    }
  }

  return result;
}

var _default = flattenStyle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/i18nStyle.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/i18nStyle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _I18nManager = _interopRequireDefault(__webpack_require__(/*! ../I18nManager */ "./node_modules/react-native-web/dist/cjs/exports/I18nManager/index.js"));

var _multiplyStyleLengthValue = _interopRequireDefault(__webpack_require__(/*! ../../modules/multiplyStyleLengthValue */ "./node_modules/react-native-web/dist/cjs/modules/multiplyStyleLengthValue/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var emptyObject = {};
var borderTopLeftRadius = 'borderTopLeftRadius';
var borderTopRightRadius = 'borderTopRightRadius';
var borderBottomLeftRadius = 'borderBottomLeftRadius';
var borderBottomRightRadius = 'borderBottomRightRadius';
var borderLeftColor = 'borderLeftColor';
var borderLeftStyle = 'borderLeftStyle';
var borderLeftWidth = 'borderLeftWidth';
var borderRightColor = 'borderRightColor';
var borderRightStyle = 'borderRightStyle';
var borderRightWidth = 'borderRightWidth';
var right = 'right';
var marginLeft = 'marginLeft';
var marginRight = 'marginRight';
var paddingLeft = 'paddingLeft';
var paddingRight = 'paddingRight';
var left = 'left'; // Map of LTR property names to their BiDi equivalent.

var PROPERTIES_FLIP = {
  borderTopLeftRadius: borderTopRightRadius,
  borderTopRightRadius: borderTopLeftRadius,
  borderBottomLeftRadius: borderBottomRightRadius,
  borderBottomRightRadius: borderBottomLeftRadius,
  borderLeftColor: borderRightColor,
  borderLeftStyle: borderRightStyle,
  borderLeftWidth: borderRightWidth,
  borderRightColor: borderLeftColor,
  borderRightStyle: borderLeftStyle,
  borderRightWidth: borderLeftWidth,
  left: right,
  marginLeft: marginRight,
  marginRight: marginLeft,
  paddingLeft: paddingRight,
  paddingRight: paddingLeft,
  right: left
}; // Map of I18N property names to their LTR equivalent.

var PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left
};
var PROPERTIES_VALUE = {
  clear: true,
  float: true,
  textAlign: true
}; // Invert the sign of a numeric-like value

var additiveInverse = function additiveInverse(value) {
  return (0, _multiplyStyleLengthValue.default)(value, -1);
};

var i18nStyle = function i18nStyle(originalStyle) {
  var doLeftAndRightSwapInRTL = _I18nManager.default.doLeftAndRightSwapInRTL,
      isRTL = _I18nManager.default.isRTL;
  var style = originalStyle || emptyObject;
  var frozenProps = {};
  var nextStyle = {};

  for (var originalProp in style) {
    if (!Object.prototype.hasOwnProperty.call(style, originalProp)) {
      continue;
    }

    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue; // BiDi flip properties

    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      // convert start/end
      var convertedProp = PROPERTIES_I18N[originalProp];
      prop = isRTL ? PROPERTIES_FLIP[convertedProp] : convertedProp;
    } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalProp]) {
      prop = PROPERTIES_FLIP[originalProp];
    } // BiDi flip values


    if (PROPERTIES_VALUE.hasOwnProperty(originalProp)) {
      if (originalValue === 'start') {
        value = isRTL ? 'right' : 'left';
      } else if (originalValue === 'end') {
        value = isRTL ? 'left' : 'right';
      } else if (isRTL && doLeftAndRightSwapInRTL) {
        if (originalValue === 'left') {
          value = 'right';
        } else if (originalValue === 'right') {
          value = 'left';
        }
      }
    } // BiDi flip transitionProperty value


    if (prop === 'transitionProperty') {
      // BiDi flip properties
      if (PROPERTIES_I18N.hasOwnProperty(value)) {
        // convert start/end
        var convertedValue = PROPERTIES_I18N[originalValue];
        value = isRTL ? PROPERTIES_FLIP[convertedValue] : convertedValue;
      } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalValue]) {
        value = PROPERTIES_FLIP[originalValue];
      }
    } // Create finalized style


    if (isRTL && prop === 'textShadowOffset') {
      nextStyle[prop] = value;
      nextStyle[prop].width = additiveInverse(value.width);
    } else if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }

    if (PROPERTIES_I18N[originalProp]) {
      frozenProps[prop] = true;
    }
  }

  return nextStyle;
};

var _default = i18nStyle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _StyleSheet = _interopRequireDefault(__webpack_require__(/*! ./StyleSheet */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/StyleSheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// allow original component styles to be inspected in React Dev Tools
if (_ExecutionEnvironment.canUseDOM && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = _StyleSheet.default.flatten;
}

var _default = _StyleSheet.default;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/initialRules.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/initialRules.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var resets = [// minimal top-level reset
'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}', // minimal form pseudo-element reset
'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,' + 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,' + 'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];
var _default = resets;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/modality.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/modality.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

/**
 * Adapts focus styles based on the user's active input modality (i.e., how
 * they are interacting with the UI right now).
 *
 * Focus styles are only relevant when using the keyboard to interact with the
 * page. If we only show the focus ring when relevant, we can avoid user
 * confusion without compromising accessibility.
 *
 * The script uses two heuristics to determine whether the keyboard is being used:
 *
 * 1. a keydown event occurred immediately before a focus event;
 * 2. a focus event happened on an element which requires keyboard interaction (e.g., a text field);
 *
 * This software or document includes material copied from or derived from https://github.com/WICG/focus-visible.
 * Copyright © 2018 W3C® (MIT, ERCIM, Keio, Beihang).
 * W3C Software Notice and License: https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * 
 */
var focusVisibleAttributeName = 'data-focusvisible-polyfill';
var rule = ":focus:not([" + focusVisibleAttributeName + "]){outline: none;}";

var modality = function modality(insertRule) {
  insertRule(rule);

  if (!_ExecutionEnvironment.canUseDOM) {
    return;
  }

  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` attribute being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    var isReadOnly = el.readOnly;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !isReadOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !isReadOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` attribute to the given element if it was not added by
   * the author.
   */


  function addFocusVisibleAttribute(el) {
    if (el.hasAttribute(focusVisibleAttributeName)) {
      return;
    }

    el.setAttribute(focusVisibleAttributeName, true);
  }
  /**
   * Remove the `focus-visible` attribute from the given element if it was not
   * originally added by the author.
   */


  function removeFocusVisibleAttribute(el) {
    el.removeAttribute(focusVisibleAttributeName);
  }
  /**
   * Remove the `focus-visible` attribute from all elements in the document.
   */


  function removeAllFocusVisibleAttributes() {
    var list = document.querySelectorAll("[" + focusVisibleAttributeName + "]");

    for (var i = 0; i < list.length; i += 1) {
      removeFocusVisibleAttribute(list[i]);
    }
  }
  /**
   * Treat `keydown` as a signal that the user is in keyboard modality.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   */


  function onKeyDown(e) {
    if (e.key !== 'Tab' && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
      return;
    }

    if (isValidFocusTarget(document.activeElement)) {
      addFocusVisibleAttribute(document.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * It also avoids the situation where a user presses on an element within a
   * previously keyboard-focused element (i.e., `e.target` is not the previously
   * focused element, but one of its descendants) and we need to remove the
   * focus ring because a `blur` event doesn't occur.
   */


  function onPointerDown(e) {
    if (hadKeyboardEvent === true) {
      removeAllFocusVisibleAttributes();
    }

    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` attribute to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleAttribute(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` attribute from the target.
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.hasAttribute(focusVisibleAttributeName)) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
      removeFocusVisibleAttribute(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had the focus-visible attribute.
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the attribute when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName === 'HTML') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();
};

var _default = modality;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/normalizeValueWithProperty.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/normalizeValueWithProperty.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = normalizeValueWithProperty;

var _unitlessNumbers = _interopRequireDefault(__webpack_require__(/*! ../../modules/unitlessNumbers */ "./node_modules/react-native-web/dist/cjs/modules/unitlessNumbers/index.js"));

var _normalizeColor = _interopRequireDefault(__webpack_require__(/*! ../../modules/normalizeColor */ "./node_modules/react-native-web/dist/cjs/modules/normalizeColor/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};

function normalizeValueWithProperty(value, property) {
  var returnValue = value;

  if ((property == null || !_unitlessNumbers.default[property]) && typeof value === 'number') {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = (0, _normalizeColor.default)(value);
  }

  return returnValue;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/resolveShadowValue.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/resolveShadowValue.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeColor = _interopRequireDefault(__webpack_require__(/*! ../../modules/normalizeColor */ "./node_modules/react-native-web/dist/cjs/modules/normalizeColor/index.js"));

var _normalizeValueWithProperty = _interopRequireDefault(__webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/normalizeValueWithProperty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var defaultOffset = {
  height: 0,
  width: 0
};

var resolveShadowValue = function resolveShadowValue(style) {
  var shadowColor = style.shadowColor,
      shadowOffset = style.shadowOffset,
      shadowOpacity = style.shadowOpacity,
      shadowRadius = style.shadowRadius;

  var _ref = shadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var offsetX = (0, _normalizeValueWithProperty.default)(width);
  var offsetY = (0, _normalizeValueWithProperty.default)(height);
  var blurRadius = (0, _normalizeValueWithProperty.default)(shadowRadius || 0);
  var color = (0, _normalizeColor.default)(shadowColor || 'black', shadowOpacity);

  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};

var _default = resolveShadowValue;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/styleResolver.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/styleResolver.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _createStyleResolver = _interopRequireDefault(__webpack_require__(/*! ./createStyleResolver */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/createStyleResolver.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var styleResolver = (0, _createStyleResolver.default)();
var _default = styleResolver;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/validate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/StyleSheet/validate.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = validate;

var _warning = _interopRequireDefault(__webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};

function error(message) {
  (0, _warning.default)(false, message);
}

function validate(key, styles) {
  var obj = styles[key];

  for (var k in obj) {
    var prop = k.trim();
    var value = obj[prop];
    var isInvalid = false;

    if (value === null) {
      continue;
    }

    if (typeof value === 'string' && value.indexOf('!important') > -1) {
      error("Invalid style declaration \"" + prop + ":" + value + "\". Values cannot include \"!important\"");
      isInvalid = true;
    } else {
      var suggestion = '';

      if (prop === 'animation' || prop === 'animationName') {
        suggestion = 'Did you mean "animationKeyframes"?'; // } else if (prop === 'boxShadow') {
        //  suggestion = 'Did you mean "shadow{Color,Offset,Opacity,Radius}"?';

        isInvalid = true;
      } else if (prop === 'direction') {
        suggestion = 'Did you mean "writingDirection"?';
        isInvalid = true;
      } else if (prop === 'verticalAlign') {
        suggestion = 'Did you mean "textAlignVertical"?';
        isInvalid = true;
      } else if (invalidShortforms[prop]) {
        suggestion = 'Please use long-form properties.';
        isInvalid = true;
      }

      if (suggestion !== '') {
        error("Invalid style property of \"" + prop + "\". " + suggestion);
      }
    }

    if (isInvalid) {
      delete obj[k];
    }
  }
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/Text/TextAncestorContext.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/Text/TextAncestorContext.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var TextAncestorContext = React.createContext(false);
var _default = TextAncestorContext;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/Text/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/Text/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _applyLayout = _interopRequireDefault(__webpack_require__(/*! ../../modules/applyLayout */ "./node_modules/react-native-web/dist/cjs/modules/applyLayout/index.js"));

var _applyNativeMethods = _interopRequireDefault(__webpack_require__(/*! ../../modules/applyNativeMethods */ "./node_modules/react-native-web/dist/cjs/modules/applyNativeMethods/index.js"));

var _createElement = _interopRequireDefault(__webpack_require__(/*! ../createElement */ "./node_modules/react-native-web/dist/cjs/exports/createElement/index.js"));

var _css = _interopRequireDefault(__webpack_require__(/*! ../StyleSheet/css */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/css.js"));

var _filterSupportedProps = _interopRequireDefault(__webpack_require__(/*! ../View/filterSupportedProps */ "./node_modules/react-native-web/dist/cjs/exports/View/filterSupportedProps.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _StyleSheet = _interopRequireDefault(__webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js"));

var _TextAncestorContext = _interopRequireDefault(__webpack_require__(/*! ./TextAncestorContext */ "./node_modules/react-native-web/dist/cjs/exports/Text/TextAncestorContext.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Text, _React$Component);

  function Text() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Text.prototype;

  _proto.renderText = function renderText(hasTextAncestor) {
    var _this$props = this.props,
        dir = _this$props.dir,
        forwardedRef = _this$props.forwardedRef,
        numberOfLines = _this$props.numberOfLines,
        onPress = _this$props.onPress,
        selectable = _this$props.selectable,
        style = _this$props.style;
    var supportedProps = (0, _filterSupportedProps.default)(this.props);

    if (onPress) {
      supportedProps.accessible = true;
      supportedProps.onClick = this._createPressHandler(onPress);
      supportedProps.onKeyDown = this._createEnterHandler(onPress);
    }

    supportedProps.classList = [classes.text, hasTextAncestor === true && classes.textHasAncestor, numberOfLines === 1 && classes.textOneLine, numberOfLines != null && numberOfLines > 1 && classes.textMultiLine]; // allow browsers to automatically infer the language writing direction

    supportedProps.dir = dir !== undefined ? dir : 'auto';
    supportedProps.ref = forwardedRef;
    supportedProps.style = [style, numberOfLines != null && numberOfLines > 1 && {
      WebkitLineClamp: numberOfLines
    }, selectable === false && styles.notSelectable, onPress && styles.pressable];
    var component = hasTextAncestor ? 'span' : 'div';
    return (0, _createElement.default)(component, supportedProps);
  };

  _proto.render = function render() {
    var _this = this;

    return _react.default.createElement(_TextAncestorContext.default.Consumer, null, function (hasTextAncestor) {
      var element = _this.renderText(hasTextAncestor);

      return hasTextAncestor ? element : _react.default.createElement(_TextAncestorContext.default.Provider, {
        value: true
      }, element);
    });
  };

  _proto._createEnterHandler = function _createEnterHandler(fn) {
    return function (e) {
      if (e.keyCode === 13) {
        fn && fn(e);
      }
    };
  };

  _proto._createPressHandler = function _createPressHandler(fn) {
    return function (e) {
      e.stopPropagation();
      fn && fn(e);
    };
  };

  return Text;
}(_react.default.Component);

Text.displayName = 'Text';

var classes = _css.default.create({
  text: {
    border: '0 solid black',
    boxSizing: 'border-box',
    color: 'black',
    display: 'inline',
    font: '14px System',
    margin: 0,
    padding: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  textHasAncestor: {
    color: 'inherit',
    font: 'inherit',
    whiteSpace: 'inherit'
  },
  textOneLine: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  // See #13
  textMultiLine: {
    display: '-webkit-box',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical'
  }
});

var styles = _StyleSheet.default.create({
  notSelectable: {
    userSelect: 'none'
  },
  pressable: {
    cursor: 'pointer'
  }
});

var _default = (0, _applyLayout.default)((0, _applyNativeMethods.default)(Text));

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/UIManager/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/UIManager/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _getBoundingClientRect = _interopRequireDefault(__webpack_require__(/*! ../../modules/getBoundingClientRect */ "./node_modules/react-native-web/dist/cjs/modules/getBoundingClientRect/index.js"));

var _setValueForStyles = _interopRequireDefault(__webpack_require__(/*! ../../vendor/react-dom/setValueForStyles */ "./node_modules/react-native-web/dist/cjs/vendor/react-dom/setValueForStyles/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var getRect = function getRect(node) {
  // Unlike the DOM's getBoundingClientRect, React Native layout measurements
  // for "height" and "width" ignore scale transforms.
  // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
  var _getBoundingClientRec = (0, _getBoundingClientRect.default)(node),
      x = _getBoundingClientRec.x,
      y = _getBoundingClientRec.y,
      top = _getBoundingClientRec.top,
      left = _getBoundingClientRec.left;

  var width = node.offsetWidth;
  var height = node.offsetHeight;
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    top: top,
    left: left
  };
};

var _measureLayout = function measureLayout(node, relativeToNativeNode, callback) {
  var relativeNode = relativeToNativeNode || node && node.parentNode;

  if (node && relativeNode) {
    setTimeout(function () {
      var relativeRect = (0, _getBoundingClientRect.default)(relativeNode);

      var _getRect = getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

var focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      var name = node.nodeName; // A tabIndex of -1 allows element to be programmatically focused but
      // prevents keyboard focus, so we don't want to set the value on elements
      // that support keyboard focus by default.

      if (node.getAttribute('tabIndex') == null && focusableElements[name] == null) {
        node.setAttribute('tabIndex', '-1');
      }

      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    if (node) {
      setTimeout(function () {
        var _getRect2 = getRect(node),
            height = _getRect2.height,
            left = _getRect2.left,
            top = _getRect2.top,
            width = _getRect2.width;

        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props, component
  /* only needed to surpress React errors in development */
  ) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      var value = props[prop];

      switch (prop) {
        case 'style':
          {
            (0, _setValueForStyles.default)(node, value, component._reactInternalInstance);
            break;
          }

        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }

        case 'text':
        case 'value':
          // native platforms use `text` prop to replace text input value
          node.value = value;
          break;

        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation: function configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental: function setLayoutAnimationEnabledExperimental() {}
};
var _default = UIManager;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/View/filterSupportedProps.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/View/filterSupportedProps.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var supportedProps = {
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRelationship: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessible: true,
  children: true,
  disabled: true,
  importantForAccessibility: true,
  nativeID: true,
  onBlur: true,
  onContextMenu: true,
  onFocus: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onResponderEnd: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onResponderRelease: true,
  onResponderStart: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onScrollShouldSetResponder: true,
  onScrollShouldSetResponderCapture: true,
  onSelectionChangeShouldSetResponder: true,
  onSelectionChangeShouldSetResponderCapture: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true,
  pointerEvents: true,
  style: true,
  testID: true,

  /* @platform web */
  onScroll: true,
  onWheel: true,
  // keyboard events
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  // mouse events (e.g, hover effects)
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true,
  // unstable escape-hatches for web
  href: true,
  itemID: true,
  itemRef: true,
  itemProp: true,
  itemScope: true,
  itemType: true,
  onClick: true,
  onClickCapture: true,
  rel: true,
  target: true
};

var filterSupportedProps = function filterSupportedProps(props) {
  var safeProps = {};

  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (supportedProps[prop] || prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
        safeProps[prop] = props[prop];
      }
    }
  }

  return safeProps;
};

var _default = filterSupportedProps;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/View/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/View/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _applyLayout = _interopRequireDefault(__webpack_require__(/*! ../../modules/applyLayout */ "./node_modules/react-native-web/dist/cjs/modules/applyLayout/index.js"));

var _applyNativeMethods = _interopRequireDefault(__webpack_require__(/*! ../../modules/applyNativeMethods */ "./node_modules/react-native-web/dist/cjs/modules/applyNativeMethods/index.js"));

var _createElement = _interopRequireDefault(__webpack_require__(/*! ../createElement */ "./node_modules/react-native-web/dist/cjs/exports/createElement/index.js"));

var _css = _interopRequireDefault(__webpack_require__(/*! ../StyleSheet/css */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/css.js"));

var _filterSupportedProps = _interopRequireDefault(__webpack_require__(/*! ./filterSupportedProps */ "./node_modules/react-native-web/dist/cjs/exports/View/filterSupportedProps.js"));

var _StyleSheet = _interopRequireDefault(__webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js"));

var _TextAncestorContext = _interopRequireDefault(__webpack_require__(/*! ../Text/TextAncestorContext */ "./node_modules/react-native-web/dist/cjs/exports/Text/TextAncestorContext.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var calculateHitSlopStyle = function calculateHitSlopStyle(hitSlop) {
  var hitStyle = {};

  for (var prop in hitSlop) {
    if (hitSlop.hasOwnProperty(prop)) {
      var value = hitSlop[prop];
      hitStyle[prop] = value > 0 ? -1 * value : 0;
    }
  }

  return hitStyle;
};

var View =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(View, _React$Component);

  function View() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = View.prototype;

  _proto.renderView = function renderView(hasTextAncestor) {
    var hitSlop = this.props.hitSlop;
    var supportedProps = (0, _filterSupportedProps.default)(this.props);

    if (true) {
      _react.default.Children.toArray(this.props.children).forEach(function (item) {
        if (typeof item === 'string') {
          console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
        }
      });
    }

    supportedProps.classList = [classes.view];
    supportedProps.ref = this.props.forwardedRef;
    supportedProps.style = _StyleSheet.default.compose(hasTextAncestor && styles.inline, this.props.style);

    if (hitSlop) {
      var hitSlopStyle = calculateHitSlopStyle(hitSlop);
      var hitSlopChild = (0, _createElement.default)('span', {
        classList: [classes.hitSlop],
        style: hitSlopStyle
      });
      supportedProps.children = _react.default.Children.toArray([hitSlopChild, supportedProps.children]);
    }

    return (0, _createElement.default)('div', supportedProps);
  };

  _proto.render = function render() {
    var _this = this;

    return _react.default.createElement(_TextAncestorContext.default.Consumer, null, function (hasTextAncestor) {
      return _this.renderView(hasTextAncestor);
    });
  };

  return View;
}(_react.default.Component);

View.displayName = 'View';

var classes = _css.default.create({
  view: {
    alignItems: 'stretch',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    zIndex: 0
  },
  // this zIndex-ordering positions the hitSlop above the View but behind
  // its children
  hitSlop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
});

var styles = _StyleSheet.default.create({
  inline: {
    display: 'inline-flex'
  }
});

var _default = (0, _applyLayout.default)((0, _applyNativeMethods.default)(View));

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/createElement/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/createElement/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _AccessibilityUtil = _interopRequireDefault(__webpack_require__(/*! ../../modules/AccessibilityUtil */ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/index.js"));

var _ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _createDOMProps = _interopRequireDefault(__webpack_require__(/*! ../../modules/createDOMProps */ "./node_modules/react-native-web/dist/cjs/modules/createDOMProps/index.js"));

var _unstableNativeDependencies = __webpack_require__(/*! react-dom/unstable-native-dependencies */ "./node_modules/react-dom/unstable-native-dependencies.js");

var _normalizeNativeEvent = _interopRequireDefault(__webpack_require__(/*! ../../modules/normalizeNativeEvent */ "./node_modules/react-native-web/dist/cjs/modules/normalizeNativeEvent/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ResponderEventPlugin = _interopRequireDefault(__webpack_require__(/*! ../../modules/ResponderEventPlugin */ "./node_modules/react-native-web/dist/cjs/modules/ResponderEventPlugin/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
if (_ExecutionEnvironment.canUseDOM) {
  try {
    (0, _unstableNativeDependencies.injectEventPluginsByName)({
      ResponderEventPlugin: _ResponderEventPlugin.default
    });
  } catch (error) {// Ignore errors caused by attempting to re-inject the plugin when app
    // scripts are being re-evaluated (e.g., development hot reloading) while
    // the ReactDOM instance is preserved.
  }
}

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};
/**
 * Ensure event handlers receive an event of the expected shape. The 'button'
 * role – for accessibility reasons and functional equivalence to the native
 * button element – must also support synthetic keyboard activation of onclick,
 * and remove event handlers when disabled.
 */


var eventHandlerNames = {
  onBlur: true,
  onClick: true,
  onClickCapture: true,
  onContextMenu: true,
  onFocus: true,
  onResponderRelease: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};

var adjustProps = function adjustProps(domProps) {
  var onClick = domProps.onClick,
      onResponderRelease = domProps.onResponderRelease,
      role = domProps.role;
  var isButtonLikeRole = _AccessibilityUtil.default.buttonLikeRoles[role];

  var isDisabled = _AccessibilityUtil.default.isDisabled(domProps);

  var isLinkRole = role === 'link';
  Object.keys(domProps).forEach(function (propName) {
    var prop = domProps[propName];
    var isEventHandler = typeof prop === 'function' && eventHandlerNames[propName];

    if (isEventHandler) {
      if (isButtonLikeRole && isDisabled) {
        domProps[propName] = undefined;
      } else {
        // TODO: move this out of the render path
        domProps[propName] = function (e) {
          e.nativeEvent = (0, _normalizeNativeEvent.default)(e.nativeEvent);
          return prop(e);
        };
      }
    }
  }); // Cancel click events if the responder system is being used on a link
  // element. Click events are not an expected part of the React Native API,
  // and browsers dispatch click events that cannot otherwise be cancelled from
  // preceding mouse events in the responder system.

  if (isLinkRole && onResponderRelease) {
    domProps.onClick = function (e) {
      if (!e.isDefaultPrevented() && !isModifiedEvent(e.nativeEvent) && !domProps.target) {
        e.preventDefault();
      }
    };
  } // Button-like roles should trigger 'onClick' if SPACE or ENTER keys are pressed.


  if (isButtonLikeRole && !isDisabled) {
    domProps.onKeyPress = function (e) {
      if (!e.isDefaultPrevented() && (e.which === 13 || e.which === 32)) {
        e.preventDefault();

        if (onClick) {
          onClick(e);
        }
      }
    };
  }
};

var createElement = function createElement(component, props) {
  // use equivalent platform elements where possible
  var accessibilityComponent;

  if (component && component.constructor === String) {
    accessibilityComponent = _AccessibilityUtil.default.propsToAccessibilityComponent(props);
  }

  var Component = accessibilityComponent || component;
  var domProps = (0, _createDOMProps.default)(Component, props);
  adjustProps(domProps);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return _react.default.createElement.apply(_react.default, [Component, domProps].concat(children));
};

var _default = createElement;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/findNodeHandle/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/findNodeHandle/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var findNodeHandle = function findNodeHandle(component) {
  var node;

  try {
    node = (0, _reactDom.findDOMNode)(component);
  } catch (e) {}

  return node;
};

var _default = findNodeHandle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/exports/processColor/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/exports/processColor/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeCssColor = _interopRequireDefault(__webpack_require__(/*! normalize-css-color */ "./node_modules/normalize-css-color/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var processColor = function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  } // convert number and hex


  var int32Color = (0, _normalizeCssColor.default)(color);

  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

var _default = processColor;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/buttonLikeRoles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/buttonLikeRoles.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var buttonLikeRoles = {
  // ARIA button behaves like native 'button' element
  button: true,
  // ARIA menuitem responds to Enter/Space like a button. Spec requires AT to
  // ignore ARIA roles of any children.
  // https://www.w3.org/WAI/GL/wiki/Using_ARIA_menus
  menuitem: true
};
var _default = buttonLikeRoles;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _buttonLikeRoles = _interopRequireDefault(__webpack_require__(/*! ./buttonLikeRoles */ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/buttonLikeRoles.js"));

var _isDisabled = _interopRequireDefault(__webpack_require__(/*! ./isDisabled */ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/isDisabled.js"));

var _propsToAccessibilityComponent = _interopRequireDefault(__webpack_require__(/*! ./propsToAccessibilityComponent */ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/propsToAccessibilityComponent.js"));

var _propsToAriaRole = _interopRequireDefault(__webpack_require__(/*! ./propsToAriaRole */ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/propsToAriaRole.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var AccessibilityUtil = {
  buttonLikeRoles: _buttonLikeRoles.default,
  isDisabled: _isDisabled.default,
  propsToAccessibilityComponent: _propsToAccessibilityComponent.default,
  propsToAriaRole: _propsToAriaRole.default
};
var _default = AccessibilityUtil;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/isDisabled.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/isDisabled.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var isDisabled = function isDisabled(props) {
  return props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
};

var _default = isDisabled;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/propsToAccessibilityComponent.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/propsToAccessibilityComponent.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propsToAriaRole = _interopRequireDefault(__webpack_require__(/*! ./propsToAriaRole */ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/propsToAriaRole.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var roleComponents = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};
var emptyObject = {};

var propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = emptyObject;
  }

  // special-case for "label" role which doesn't map to an ARIA role
  if (props.accessibilityRole === 'label') {
    return 'label';
  }

  var role = (0, _propsToAriaRole.default)(props);

  if (role) {
    if (role === 'heading') {
      var level = props['aria-level'] || 1;
      return "h" + level;
    }

    return roleComponents[role];
  }
};

var _default = propsToAccessibilityComponent;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/propsToAriaRole.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/propsToAriaRole.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var accessibilityRoleToWebRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region',
  text: null
};

var propsToAriaRole = function propsToAriaRole(_ref) {
  var accessibilityRole = _ref.accessibilityRole;

  if (accessibilityRole) {
    var inferredRole = accessibilityRoleToWebRole[accessibilityRole];

    if (inferredRole !== null) {
      // ignore roles that don't map to web
      return inferredRole || accessibilityRole;
    }
  }
};

var _default = propsToAriaRole;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/NativeMethodsMixin/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/NativeMethodsMixin/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _createDOMProps = _interopRequireDefault(__webpack_require__(/*! ../createDOMProps */ "./node_modules/react-native-web/dist/cjs/modules/createDOMProps/index.js"));

var _findNodeHandle = _interopRequireDefault(__webpack_require__(/*! ../../exports/findNodeHandle */ "./node_modules/react-native-web/dist/cjs/exports/findNodeHandle/index.js"));

var _styleResolver = _interopRequireDefault(__webpack_require__(/*! ../../exports/StyleSheet/styleResolver */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/styleResolver.js"));

var _UIManager = _interopRequireDefault(__webpack_require__(/*! ../../exports/UIManager */ "./node_modules/react-native-web/dist/cjs/exports/UIManager/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var NativeMethodsMixin = {
  /**
   * Removes focus from an input or view. This is the opposite of `focus()`.
   */
  blur: function blur() {
    _UIManager.default.blur((0, _findNodeHandle.default)(this));
  },

  /**
   * Requests focus for the given input or view.
   * The exact behavior triggered will depend the type of view.
   */
  focus: function focus() {
    _UIManager.default.focus((0, _findNodeHandle.default)(this));
  },

  /**
   * Determines the position and dimensions of the view
   */
  measure: function measure(callback) {
    _UIManager.default.measure((0, _findNodeHandle.default)(this), callback);
  },

  /**
   * Determines the location of the given view in the window and returns the
   * values via an async callback. If the React root view is embedded in
   * another native view, this will give you the absolute coordinates. If
   * successful, the callback will be called be called with the following
   * arguments:
   *
   *  - x
   *  - y
   *  - width
   *  - height
   *
   * Note that these measurements are not available until after the rendering
   * has been completed.
   */
  measureInWindow: function measureInWindow(callback) {
    _UIManager.default.measureInWindow((0, _findNodeHandle.default)(this), callback);
  },

  /**
   * Measures the view relative to another view (usually an ancestor)
   */
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    _UIManager.default.measureLayout((0, _findNodeHandle.default)(this), relativeToNativeNode, onFail, onSuccess);
  },

  /**
   * This function sends props straight to the underlying DOM node.
   * This works as if all styles were set as inline styles. Since a DOM node
   * may aleady be styled with class names and inline styles, we need to get
   * the initial styles from the DOM node and merge them with incoming props.
   */
  setNativeProps: function setNativeProps(nativeProps) {
    if (!nativeProps) {
      return;
    }

    var node = (0, _findNodeHandle.default)(this);

    if (node) {
      // Next state is determined by comparison to existing state (in the DOM).
      // Existing state has already gone through i18n transform
      var domProps = (0, _createDOMProps.default)(null, nativeProps, function (style) {
        return _styleResolver.default.resolveWithNode(style, node);
      });

      _UIManager.default.updateView(node, domProps, this);
    }
  }
};
var _default = NativeMethodsMixin;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/ReactNativePropRegistry/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/ReactNativePropRegistry/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var emptyObject = {};
var objects = {};
var prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return prefix + "-" + id;
};

var ReactNativePropRegistry =
/*#__PURE__*/
function () {
  function ReactNativePropRegistry() {}

  ReactNativePropRegistry.register = function register(object) {
    var id = uniqueID++;

    if (true) {
      Object.freeze(object);
    }

    var key = createKey(id);
    objects[key] = object;
    return id;
  };

  ReactNativePropRegistry.getByID = function getByID(id) {
    if (!id) {
      // Used in the style={[condition && id]} pattern,
      // we want it to be a no-op when the value is false or null
      return emptyObject;
    }

    var key = createKey(id);
    var object = objects[key];

    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }

    return object;
  };

  return ReactNativePropRegistry;
}();

exports.default = ReactNativePropRegistry;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/ResponderEventPlugin/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/ResponderEventPlugin/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _normalizeNativeEvent = _interopRequireDefault(__webpack_require__(/*! ../normalizeNativeEvent */ "./node_modules/react-native-web/dist/cjs/modules/normalizeNativeEvent/index.js"));

var _unstableNativeDependencies = _interopRequireDefault(__webpack_require__(/*! react-dom/unstable-native-dependencies */ "./node_modules/react-dom/unstable-native-dependencies.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// based on https://github.com/facebook/react/pull/4303/files
var ResponderEventPlugin = _unstableNativeDependencies.default.ResponderEventPlugin,
    ResponderTouchHistoryStore = _unstableNativeDependencies.default.ResponderTouchHistoryStore; // On older versions of React (< 16.4) we have to inject the dependencies in
// order for the plugin to work properly in the browser. This version still
// uses `top*` strings to identify the internal event names.
// https://github.com/facebook/react/pull/12629

if (!ResponderEventPlugin.eventTypes.responderMove.dependencies) {
  var topMouseDown = 'topMouseDown';
  var topMouseMove = 'topMouseMove';
  var topMouseUp = 'topMouseUp';
  var topScroll = 'topScroll';
  var topSelectionChange = 'topSelectionChange';
  var topTouchCancel = 'topTouchCancel';
  var topTouchEnd = 'topTouchEnd';
  var topTouchMove = 'topTouchMove';
  var topTouchStart = 'topTouchStart';
  var endDependencies = [topTouchCancel, topTouchEnd, topMouseUp];
  var moveDependencies = [topTouchMove, topMouseMove];
  var startDependencies = [topTouchStart, topMouseDown];
  /**
   * Setup ResponderEventPlugin dependencies
   */

  ResponderEventPlugin.eventTypes.responderMove.dependencies = moveDependencies;
  ResponderEventPlugin.eventTypes.responderEnd.dependencies = endDependencies;
  ResponderEventPlugin.eventTypes.responderStart.dependencies = startDependencies;
  ResponderEventPlugin.eventTypes.responderRelease.dependencies = endDependencies;
  ResponderEventPlugin.eventTypes.responderTerminationRequest.dependencies = [];
  ResponderEventPlugin.eventTypes.responderGrant.dependencies = [];
  ResponderEventPlugin.eventTypes.responderReject.dependencies = [];
  ResponderEventPlugin.eventTypes.responderTerminate.dependencies = [];
  ResponderEventPlugin.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
  ResponderEventPlugin.eventTypes.selectionChangeShouldSetResponder.dependencies = [topSelectionChange];
  ResponderEventPlugin.eventTypes.scrollShouldSetResponder.dependencies = [topScroll];
  ResponderEventPlugin.eventTypes.startShouldSetResponder.dependencies = startDependencies;
}

var lastActiveTouchTimestamp = null; // The length of time after a touch that we ignore the browser's emulated mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

var EMULATED_MOUSE_THERSHOLD_MS = 1000;
var originalExtractEvents = ResponderEventPlugin.extractEvents;

ResponderEventPlugin.extractEvents = function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var hasActiveTouches = ResponderTouchHistoryStore.touchHistory.numberActiveTouches > 0;
  var eventType = nativeEvent.type;
  var shouldSkipMouseAfterTouch = false;

  if (eventType.indexOf('touch') > -1) {
    lastActiveTouchTimestamp = Date.now();
  } else if (lastActiveTouchTimestamp && eventType.indexOf('mouse') > -1) {
    var now = Date.now();
    shouldSkipMouseAfterTouch = now - lastActiveTouchTimestamp < EMULATED_MOUSE_THERSHOLD_MS;
  }

  if ( // Filter out mousemove and mouseup events when a touch hasn't started yet
  (eventType === 'mousemove' || eventType === 'mouseup') && !hasActiveTouches || // Filter out events from wheel/middle and right click.
  nativeEvent.button === 1 || nativeEvent.button === 2 || // Filter out mouse events that browsers dispatch immediately after touch events end
  // Prevents the REP from calling handlers twice for touch interactions.
  // See #802 and #932.
  shouldSkipMouseAfterTouch) {
    return;
  }

  var normalizedEvent = (0, _normalizeNativeEvent.default)(nativeEvent);
  return originalExtractEvents.call(ResponderEventPlugin, topLevelType, targetInst, normalizedEvent, nativeEventTarget);
};

var _default = ResponderEventPlugin;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/applyLayout/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/applyLayout/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _debounce = _interopRequireDefault(__webpack_require__(/*! debounce */ "./node_modules/debounce/index.js"));

var _findNodeHandle = _interopRequireDefault(__webpack_require__(/*! ../../exports/findNodeHandle */ "./node_modules/react-native-web/dist/cjs/exports/findNodeHandle/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var emptyObject = {};
var registry = {};
var id = 1;

var guid = function guid() {
  return "r-" + id++;
};

var resizeObserver;

if (_ExecutionEnvironment.canUseDOM) {
  if (typeof window.ResizeObserver !== 'undefined') {
    resizeObserver = new window.ResizeObserver(function (entries) {
      entries.forEach(function (_ref) {
        var target = _ref.target;
        var instance = registry[target._layoutId];
        instance && instance._handleLayout();
      });
    });
  } else {
    if (true) {
      console.warn('onLayout relies on ResizeObserver which is not supported by your browser. ' + 'Please include a polyfill, e.g., https://github.com/que-etc/resize-observer-polyfill. ' + 'Falling back to window.onresize.');
    }

    var triggerAll = function triggerAll() {
      Object.keys(registry).forEach(function (key) {
        var instance = registry[key];

        instance._handleLayout();
      });
    };

    window.addEventListener('resize', (0, _debounce.default)(triggerAll, 16), false);
  }
}

var observe = function observe(instance) {
  var id = guid();
  registry[id] = instance;

  if (resizeObserver) {
    var node = (0, _findNodeHandle.default)(instance);

    if (node) {
      node._layoutId = id;
      resizeObserver.observe(node);
    }
  } else {
    instance._layoutId = id;

    instance._handleLayout();
  }
};

var unobserve = function unobserve(instance) {
  if (resizeObserver) {
    var node = (0, _findNodeHandle.default)(instance);

    if (node) {
      delete registry[node._layoutId];
      delete node._layoutId;
      resizeObserver.unobserve(node);
    }
  } else {
    delete registry[instance._layoutId];
    delete instance._layoutId;
  }
};

var safeOverride = function safeOverride(original, next) {
  if (original) {
    return function prototypeOverride() {
      /* eslint-disable prefer-rest-params */
      original.call(this, arguments);
      next.call(this, arguments);
      /* eslint-enable prefer-rest-params */
    };
  }

  return next;
};

var applyLayout = function applyLayout(Component) {
  var componentDidMount = Component.prototype.componentDidMount;
  var componentDidUpdate = Component.prototype.componentDidUpdate;
  var componentWillUnmount = Component.prototype.componentWillUnmount;
  Component.prototype.componentDidMount = safeOverride(componentDidMount, function componentDidMount() {
    this._layoutState = emptyObject;
    this._isMounted = true;

    if (this.props.onLayout) {
      observe(this);
    }
  });
  Component.prototype.componentDidUpdate = safeOverride(componentDidUpdate, function componentDidUpdate(prevProps) {
    if (this.props.onLayout && !prevProps.onLayout) {
      observe(this);
    } else if (!this.props.onLayout && prevProps.onLayout) {
      unobserve(this);
    }
  });
  Component.prototype.componentWillUnmount = safeOverride(componentWillUnmount, function componentWillUnmount() {
    this._isMounted = false;

    if (this.props.onLayout) {
      unobserve(this);
    }
  });

  Component.prototype._handleLayout = function () {
    var _this = this;

    var layout = this._layoutState;
    var onLayout = this.props.onLayout;

    if (onLayout) {
      this.measure(function (x, y, width, height) {
        if (_this._isMounted) {
          if (layout.x !== x || layout.y !== y || layout.width !== width || layout.height !== height) {
            _this._layoutState = {
              x: x,
              y: y,
              width: width,
              height: height
            };
            var nativeEvent = {
              layout: _this._layoutState
            };
            Object.defineProperty(nativeEvent, 'target', {
              enumerable: true,
              get: function get() {
                return (0, _findNodeHandle.default)(_this);
              }
            });
            onLayout({
              nativeEvent: nativeEvent,
              timeStamp: Date.now()
            });
          }
        }
      });
    }
  };

  return Component;
};

var _default = applyLayout;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/applyNativeMethods/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/applyNativeMethods/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _NativeMethodsMixin = _interopRequireDefault(__webpack_require__(/*! ../NativeMethodsMixin */ "./node_modules/react-native-web/dist/cjs/modules/NativeMethodsMixin/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var applyNativeMethods = function applyNativeMethods(Component) {
  Object.keys(_NativeMethodsMixin.default).forEach(function (method) {
    if (!Component.prototype[method]) {
      Component.prototype[method] = _NativeMethodsMixin.default[method];
    }
  });
  return Component;
};

var _default = applyNativeMethods;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/createDOMProps/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/createDOMProps/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _AccessibilityUtil = _interopRequireDefault(__webpack_require__(/*! ../AccessibilityUtil */ "./node_modules/react-native-web/dist/cjs/modules/AccessibilityUtil/index.js"));

var _css = _interopRequireDefault(__webpack_require__(/*! ../../exports/StyleSheet/css */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/css.js"));

var _StyleSheet = _interopRequireDefault(__webpack_require__(/*! ../../exports/StyleSheet */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js"));

var _styleResolver2 = _interopRequireDefault(__webpack_require__(/*! ../../exports/StyleSheet/styleResolver */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/styleResolver.js"));

var _constants = __webpack_require__(/*! ../../exports/StyleSheet/constants */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var emptyObject = {}; // Reset styles for heading, link, and list DOM elements

var classes = _css.default.create({
  reset: {
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    listStyle: 'none',
    margin: 0,
    textAlign: 'inherit',
    textDecoration: 'none'
  },
  cursor: {
    cursor: 'pointer'
  }
}, _constants.STYLE_GROUPS.classicReset);

var pointerEventsStyles = _StyleSheet.default.create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});

var defaultStyleResolver = function defaultStyleResolver(style, classList) {
  return _styleResolver2.default.resolve(style, classList);
};

var createDOMProps = function createDOMProps(component, props, styleResolver) {
  if (!styleResolver) {
    styleResolver = defaultStyleResolver;
  }

  if (!props) {
    props = emptyObject;
  }

  var _props = props,
      accessibilityLabel = _props.accessibilityLabel,
      accessibilityLiveRegion = _props.accessibilityLiveRegion,
      accessibilityRelationship = _props.accessibilityRelationship,
      accessibilityState = _props.accessibilityState,
      classList = _props.classList,
      deprecatedClassName = _props.className,
      providedDisabled = _props.disabled,
      importantForAccessibility = _props.importantForAccessibility,
      nativeID = _props.nativeID,
      pointerEvents = _props.pointerEvents,
      providedStyle = _props.style,
      testID = _props.testID,
      accessible = _props.accessible,
      accessibilityRole = _props.accessibilityRole,
      domProps = _objectWithoutPropertiesLoose(_props, ["accessibilityLabel", "accessibilityLiveRegion", "accessibilityRelationship", "accessibilityState", "classList", "className", "disabled", "importantForAccessibility", "nativeID", "pointerEvents", "style", "testID", "accessible", "accessibilityRole"]);

  var disabled = accessibilityState != null && accessibilityState.disabled === true || providedDisabled;

  var role = _AccessibilityUtil.default.propsToAriaRole(props); // accessibilityLabel


  if (accessibilityLabel != null) {
    domProps['aria-label'] = accessibilityLabel;
  } // accessibilityLiveRegion


  if (accessibilityLiveRegion != null) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  } // accessibilityRelationship


  if (accessibilityRelationship != null) {
    for (var prop in accessibilityRelationship) {
      var value = accessibilityRelationship[prop];

      if (value != null) {
        domProps["aria-" + prop] = value;
      }
    }
  } // accessibilityRole


  if (role != null) {
    domProps.role = role;
  } // accessibilityState


  if (accessibilityState != null) {
    for (var _prop in accessibilityState) {
      var _value = accessibilityState[_prop];

      if (_value != null) {
        if (_prop === 'disabled' || _prop === 'hidden') {
          if (_value === true) {
            domProps["aria-" + _prop] = _value; // also set prop directly to pick up host component behaviour

            domProps[_prop] = _value;
          }
        } else {
          domProps["aria-" + _prop] = _value;
        }
      }
    }
  } // legacy fallbacks


  if (importantForAccessibility === 'no-hide-descendants') {
    domProps['aria-hidden'] = true;
  }

  if (disabled === true) {
    domProps['aria-disabled'] = true;
    domProps.disabled = true;
  } // FOCUS
  // Assume that 'link' is focusable by default (uses <a>).
  // Assume that 'button' is not (uses <div role='button'>) but must be treated as such.


  var focusable = !disabled && importantForAccessibility !== 'no' && importantForAccessibility !== 'no-hide-descendants';

  if (role === 'link' || component === 'a' || component === 'button' || component === 'input' || component === 'select' || component === 'textarea') {
    if (accessible === false || !focusable) {
      domProps.tabIndex = '-1';
    } else {
      domProps['data-focusable'] = true;
    }
  } else if (_AccessibilityUtil.default.buttonLikeRoles[role] || role === 'textbox') {
    if (accessible !== false && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  } else {
    if (accessible === true && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  } // STYLE


  var reactNativeStyle = _StyleSheet.default.compose(pointerEvents && pointerEventsStyles[pointerEvents], providedStyle); // Additional style resets for interactive elements


  var needsCursor = (role === 'button' || role === 'link') && !disabled;
  var needsReset = component === 'a' || component === 'button' || component === 'li' || component === 'ul' || role === 'heading'; // Classic CSS styles

  var finalClassList = [deprecatedClassName, needsReset && classes.reset, needsCursor && classes.cursor, classList]; // Resolve styles

  var _styleResolver = styleResolver(reactNativeStyle, finalClassList),
      className = _styleResolver.className,
      style = _styleResolver.style;

  if (className != null && className !== '') {
    domProps.className = className;
  }

  if (style) {
    domProps.style = style;
  } // OTHER
  // Native element ID


  if (nativeID && nativeID.constructor === String) {
    domProps.id = nativeID;
  } // Link security
  // https://mathiasbynens.github.io/rel-noopener/
  // Note: using "noreferrer" doesn't impact referrer tracking for https
  // transfers (i.e., from https to https).


  if (component === 'a' && domProps.target === '_blank') {
    domProps.rel = (domProps.rel || '') + " noopener noreferrer";
  } // Automated test IDs


  if (testID && testID.constructor === String) {
    domProps['data-testid'] = testID;
  }

  return domProps;
};

var _default = createDOMProps;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/flattenArray/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/flattenArray/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function flattenArray(array) {
  function flattenDown(array, result) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      if (Array.isArray(value)) {
        flattenDown(value, result);
      } else if (value != null && value !== false) {
        result.push(value);
      }
    }

    return result;
  }

  return flattenDown(array, []);
}

var _default = flattenArray;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/getBoundingClientRect/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/getBoundingClientRect/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* global HTMLElement */
var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node) {
    var isElement = node.nodeType === 1;
    /* Node.ELEMENT_NODE */

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

var _default = getBoundingClientRect;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/isWebColor/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/isWebColor/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
};

var _default = isWebColor;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/multiplyStyleLengthValue/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/multiplyStyleLengthValue/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;

var getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    var number = parseFloat(value) * multiple;
    var unit = getUnit(value);
    return "" + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};

var _default = multiplyStyleLengthValue;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/normalizeColor/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/normalizeColor/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _isWebColor = _interopRequireDefault(__webpack_require__(/*! ../isWebColor */ "./node_modules/react-native-web/dist/cjs/modules/isWebColor/index.js"));

var _processColor = _interopRequireDefault(__webpack_require__(/*! ../../exports/processColor */ "./node_modules/react-native-web/dist/cjs/exports/processColor/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var normalizeColor = function normalizeColor(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color == null) return;

  if (typeof color === 'string' && (0, _isWebColor.default)(color)) {
    return color;
  }

  var colorInt = (0, _processColor.default)(color);

  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};

var _default = normalizeColor;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/normalizeNativeEvent/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/normalizeNativeEvent/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _getBoundingClientRect = _interopRequireDefault(__webpack_require__(/*! ../getBoundingClientRect */ "./node_modules/react-native-web/dist/cjs/modules/getBoundingClientRect/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var emptyArray = [];

var emptyFunction = function emptyFunction() {}; // Mobile Safari re-uses touch objects, so we copy the properties we want and normalize the identifier


var normalizeTouches = function normalizeTouches(touches) {
  if (!touches) {
    return emptyArray;
  }

  return Array.prototype.slice.call(touches).map(function (touch) {
    var identifier = touch.identifier > 20 ? touch.identifier % 20 : touch.identifier;
    var rect;
    return {
      _normalized: true,
      clientX: touch.clientX,
      clientY: touch.clientY,
      force: touch.force,

      get locationX() {
        rect = rect || (0, _getBoundingClientRect.default)(touch.target);

        if (rect) {
          return touch.pageX - rect.left;
        }
      },

      get locationY() {
        rect = rect || (0, _getBoundingClientRect.default)(touch.target);

        if (rect) {
          return touch.pageY - rect.top;
        }
      },

      identifier: identifier,
      pageX: touch.pageX,
      pageY: touch.pageY,
      radiusX: touch.radiusX,
      radiusY: touch.radiusY,
      rotationAngle: touch.rotationAngle,
      screenX: touch.screenX,
      screenY: touch.screenY,
      target: touch.target,
      // normalize the timestamp
      // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
      timestamp: Date.now()
    };
  });
};

function normalizeTouchEvent(nativeEvent) {
  var changedTouches = normalizeTouches(nativeEvent.changedTouches);
  var touches = normalizeTouches(nativeEvent.touches);
  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;
  var singleChangedTouch = changedTouches[0];
  var event = {
    _normalized: true,
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    changedTouches: changedTouches,
    defaultPrevented: nativeEvent.defaultPrevented,
    identifier: singleChangedTouch ? singleChangedTouch.identifier : undefined,

    get locationX() {
      return singleChangedTouch ? singleChangedTouch.locationX : undefined;
    },

    get locationY() {
      return singleChangedTouch ? singleChangedTouch.locationY : undefined;
    },

    pageX: singleChangedTouch ? singleChangedTouch.pageX : nativeEvent.pageX,
    pageY: singleChangedTouch ? singleChangedTouch.pageY : nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    // normalize the timestamp
    // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
    timestamp: Date.now(),
    touches: touches,
    type: nativeEvent.type,
    which: nativeEvent.which
  };
  return event;
}

function normalizeMouseEvent(nativeEvent) {
  var rect;
  var touches = [{
    _normalized: true,
    clientX: nativeEvent.clientX,
    clientY: nativeEvent.clientY,
    force: nativeEvent.force,
    identifier: 0,

    get locationX() {
      rect = rect || (0, _getBoundingClientRect.default)(nativeEvent.target);

      if (rect) {
        return nativeEvent.pageX - rect.left;
      }
    },

    get locationY() {
      rect = rect || (0, _getBoundingClientRect.default)(nativeEvent.target);

      if (rect) {
        return nativeEvent.pageY - rect.top;
      }
    },

    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    screenX: nativeEvent.screenX,
    screenY: nativeEvent.screenY,
    target: nativeEvent.target,
    timestamp: Date.now()
  }];
  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;
  return {
    _normalized: true,
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    changedTouches: touches,
    defaultPrevented: nativeEvent.defaultPrevented,
    identifier: touches[0].identifier,

    get locationX() {
      return touches[0].locationX;
    },

    get locationY() {
      return touches[0].locationY;
    },

    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    timestamp: touches[0].timestamp,
    touches: nativeEvent.type === 'mouseup' ? emptyArray : touches,
    type: nativeEvent.type,
    which: nativeEvent.which
  };
} // TODO: how to best handle keyboard events?


function normalizeNativeEvent(nativeEvent) {
  if (!nativeEvent || nativeEvent._normalized) {
    return nativeEvent;
  }

  var eventType = nativeEvent.type || '';
  var mouse = eventType.indexOf('mouse') >= 0;

  if (mouse) {
    return normalizeMouseEvent(nativeEvent);
  } else {
    return normalizeTouchEvent(nativeEvent);
  }
}

var _default = normalizeNativeEvent;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/prefixStyles/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/prefixStyles/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.prefixInlineStyles = exports.default = void 0;

var _createPrefixer = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/createPrefixer */ "./node_modules/inline-style-prefixer/lib/createPrefixer.js"));

var _static = _interopRequireDefault(__webpack_require__(/*! ./static */ "./node_modules/react-native-web/dist/cjs/modules/prefixStyles/static.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var prefixAll = (0, _createPrefixer.default)(_static.default);
var _default = prefixAll;
exports.default = _default;

var prefixInlineStyles = function prefixInlineStyles(style) {
  var prefixedStyles = prefixAll(style); // React@15 removed undocumented support for fallback values in
  // inline-styles. Revert array values to the standard CSS value

  Object.keys(prefixedStyles).forEach(function (prop) {
    var value = prefixedStyles[prop];

    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });
  return prefixedStyles;
};

exports.prefixInlineStyles = prefixInlineStyles;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/prefixStyles/static.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/prefixStyles/static.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _backgroundClip = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/backgroundClip */ "./node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js"));

var _crossFade = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/crossFade */ "./node_modules/inline-style-prefixer/lib/plugins/crossFade.js"));

var _cursor = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/cursor */ "./node_modules/inline-style-prefixer/lib/plugins/cursor.js"));

var _filter = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/filter */ "./node_modules/inline-style-prefixer/lib/plugins/filter.js"));

var _flex = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/flex */ "./node_modules/inline-style-prefixer/lib/plugins/flex.js"));

var _flexboxIE = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js"));

var _flexboxOld = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js"));

var _gradient = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/gradient */ "./node_modules/inline-style-prefixer/lib/plugins/gradient.js"));

var _grid = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/grid */ "./node_modules/inline-style-prefixer/lib/plugins/grid.js"));

var _imageSet = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/imageSet */ "./node_modules/inline-style-prefixer/lib/plugins/imageSet.js"));

var _logical = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/logical */ "./node_modules/inline-style-prefixer/lib/plugins/logical.js"));

var _position = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/position */ "./node_modules/inline-style-prefixer/lib/plugins/position.js"));

var _sizing = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/sizing */ "./node_modules/inline-style-prefixer/lib/plugins/sizing.js"));

var _transition = _interopRequireDefault(__webpack_require__(/*! inline-style-prefixer/lib/plugins/transition */ "./node_modules/inline-style-prefixer/lib/plugins/transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
var _default = {
  plugins: [_backgroundClip.default, _crossFade.default, _cursor.default, _filter.default, _flex.default, _flexboxIE.default, _flexboxOld.default, _gradient.default, _grid.default, _imageSet.default, _logical.default, _position.default, _sizing.default, _transition.default],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textOrientation: w,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    textSizeAdjust: ['ms', 'Webkit'],
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
};
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/modules/unitlessNumbers/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/modules/unitlessNumbers/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var unitlessNumbers = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridColumn: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */

var prefixes = ['ms', 'Moz', 'O', 'Webkit'];

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

Object.keys(unitlessNumbers).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
var _default = unitlessNumbers;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/vendor/hash/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/vendor/hash/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/* eslint-disable */

/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 */
function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

var hash = function hash(str) {
  return murmurhash2_32_gc(str, 1).toString(36);
};

var _default = hash;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/vendor/react-dom/dangerousStyleValue/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/vendor/react-dom/dangerousStyleValue/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _unitlessNumbers = _interopRequireDefault(__webpack_require__(/*! ../../../modules/unitlessNumbers */ "./node_modules/react-native-web/dist/cjs/modules/unitlessNumbers/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * From React 16.0.0
 * 
 */

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(_unitlessNumbers.default.hasOwnProperty(name) && _unitlessNumbers.default[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var _default = dangerousStyleValue;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/vendor/react-dom/setValueForStyles/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/vendor/react-dom/setValueForStyles/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dangerousStyleValue = _interopRequireDefault(__webpack_require__(/*! ../dangerousStyleValue */ "./node_modules/react-native-web/dist/cjs/vendor/react-dom/dangerousStyleValue/index.js"));

var _hyphenateStyleName = _interopRequireDefault(__webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js"));

var _warnValidStyle = _interopRequireDefault(__webpack_require__(/*! ../warnValidStyle */ "./node_modules/react-native-web/dist/cjs/vendor/react-dom/warnValidStyle/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * From React 16.3.0
 * 
 */

/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */
function setValueForStyles(node, styles, getStack) {
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;

    if (true) {
      if (!isCustomProperty) {
        (0, _warnValidStyle.default)(styleName, styles[styleName], getStack);
      }
    }

    var styleValue = (0, _dangerousStyleValue.default)(styleName, styles[styleName], isCustomProperty);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    if (isCustomProperty) {
      var name = isCustomProperty ? styleName : (0, _hyphenateStyleName.default)(styleName);
      style.setProperty(name, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

var _default = setValueForStyles;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/cjs/vendor/react-dom/warnValidStyle/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/cjs/vendor/react-dom/warnValidStyle/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/* eslint-disable */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * From React 16.0.0
 * 
 */
var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

var warnValidStyle = emptyFunction;

if (true) {
  var getComponentName = function getComponentName(instanceOrFiber) {
    if (typeof instanceOrFiber.getName === 'function') {
      // Stack reconciler
      var instance = instanceOrFiber;
      return instance.getName();
    }

    if (typeof instanceOrFiber.tag === 'number') {
      // Fiber reconciler
      var fiber = instanceOrFiber;
      var type = fiber.type;

      if (typeof type === 'string') {
        return type;
      }

      if (typeof type === 'function') {
        return type.displayName || type.name;
      }
    }

    return null;
  }; // 'msTransform' is correct, but the other prefixes should be capitalized


  var camelizeStyleName = __webpack_require__(/*! fbjs/lib/camelizeStyleName */ "./node_modules/fbjs/lib/camelizeStyleName.js");

  var warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner));
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner));
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var warnStyleValueIsInfinity = function warnStyleValueIsInfinity(name, value, owner) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    var ownerName;

    if (owner != null) {
      // Stack passes the owner manually all the way to CSSPropertyOperations.
      ownerName = getComponentName(owner);
    } else {// Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
      // It is only enabled in development and tracks host components too.
      // var {getCurrentFiberOwnerName} = require('ReactDebugCurrentFiber');
      //  ownerName = getCurrentFiberOwnerName();
      // TODO: also report the stack.
    }

    if (ownerName) {
      return '\n\nCheck the render method of `' + ownerName + '`.';
    }

    return '';
  };

  warnValidStyle = function warnValidStyle(name, value, component) {
    var owner;

    if (component) {// TODO: this only works with Stack. Seems like we need to add unit tests?
      // owner = component._currentElement._owner;
    }

    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, owner);
      }
    }
  };
}

var _default = warnValidStyle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/alternate.js":
/*!****************************!*\
  !*** ./pages/alternate.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/StyleSheet */ "./node_modules/react-native-web/dist/cjs/exports/StyleSheet/index.js");
/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/Text */ "./node_modules/react-native-web/dist/cjs/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-native-web/dist/cjs/exports/View */ "./node_modules/react-native-web/dist/cjs/exports/View/index.js");
/* harmony import */ var react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Egis\\Desktop\\DEV\\bet\\pages\\alternate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




function App(props) {
  return __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {
    accessibilityRole: "header",
    style: styles.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "React Native for Web & Next.js Alt"), __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: styles.link,
    accessibilityRole: "link",
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "back"), __jsx(react_native_web_dist_cjs_exports_View__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: styles.textContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(react_native_web_dist_cjs_exports_Text__WEBPACK_IMPORTED_MODULE_2___default.a, {
    accessibilityRole: "header",
    "aria-level": "2",
    style: styles.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "Subheader")));
}
var styles = react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  link: {
    color: 'blue'
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24
  }
});

/***/ }),

/***/ 2:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Falternate&absolutePagePath=C%3A%5CUsers%5CEgis%5CDesktop%5CDEV%5Cbet%5Cpages%5Calternate.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Falternate&absolutePagePath=C%3A%5CUsers%5CEgis%5CDesktop%5CDEV%5Cbet%5Cpages%5Calternate.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Falternate&absolutePagePath=C%3A%5CUsers%5CEgis%5CDesktop%5CDEV%5Cbet%5Cpages%5Calternate.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=alternate.js.map