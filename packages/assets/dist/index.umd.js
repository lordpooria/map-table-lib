(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define('@hesaba/assets', ['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@hesaba/assets'] = {}, global.React));
}(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function toVal(mix) {
    	var k, y, str='';

    	if (typeof mix === 'string' || typeof mix === 'number') {
    		str += mix;
    	} else if (typeof mix === 'object') {
    		if (Array.isArray(mix)) {
    			for (k=0; k < mix.length; k++) {
    				if (mix[k]) {
    					if (y = toVal(mix[k])) {
    						str && (str += ' ');
    						str += y;
    					}
    				}
    			}
    		} else {
    			for (k in mix) {
    				if (mix[k]) {
    					str && (str += ' ');
    					str += k;
    				}
    			}
    		}
    	}

    	return str;
    }

    function clsx () {
    	var i=0, tmp, x, str='';
    	while (i < arguments.length) {
    		if (tmp = arguments[i++]) {
    			if (x = toVal(tmp)) {
    				str && (str += ' ');
    				str += x;
    			}
    		}
    	}
    	return str;
    }

    var common = {
      black: '#000',
      white: '#fff'
    };

    var red = {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000'
    };

    var pink = {
      50: '#fce4ec',
      100: '#f8bbd0',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#e91e63',
      600: '#d81b60',
      700: '#c2185b',
      800: '#ad1457',
      900: '#880e4f',
      A100: '#ff80ab',
      A200: '#ff4081',
      A400: '#f50057',
      A700: '#c51162'
    };

    var indigo = {
      50: '#e8eaf6',
      100: '#c5cae9',
      200: '#9fa8da',
      300: '#7986cb',
      400: '#5c6bc0',
      500: '#3f51b5',
      600: '#3949ab',
      700: '#303f9f',
      800: '#283593',
      900: '#1a237e',
      A100: '#8c9eff',
      A200: '#536dfe',
      A400: '#3d5afe',
      A700: '#304ffe'
    };

    var blue = {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      A100: '#82b1ff',
      A200: '#448aff',
      A400: '#2979ff',
      A700: '#2962ff'
    };

    var green = {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      A100: '#b9f6ca',
      A200: '#69f0ae',
      A400: '#00e676',
      A700: '#00c853'
    };

    var orange = {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#ff9800',
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
      A100: '#ffd180',
      A200: '#ffab40',
      A400: '#ff9100',
      A700: '#ff6d00'
    };

    var grey = {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    };

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _typeof$1(obj) {
      "@babel/helpers - typeof";

      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof$1 = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof$1 = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof$1(obj);
    }

    function isPlainObject(item) {
      return item && _typeof$1(item) === 'object' && item.constructor === Object;
    }
    function deepmerge(target, source) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        clone: true
      };
      var output = options.clone ? _extends({}, target) : target;

      if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach(function (key) {
          // Avoid prototype pollution
          if (key === '__proto__') {
            return;
          }

          if (isPlainObject(source[key]) && key in target) {
            output[key] = deepmerge(target[key], source[key], options);
          } else {
            output[key] = source[key];
          }
        });
      }

      return output;
    }

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    /** @license React v16.13.1
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b$1="function"===typeof Symbol&&Symbol.for,c$1=b$1?Symbol.for("react.element"):60103,d$1=b$1?Symbol.for("react.portal"):60106,e$1=b$1?Symbol.for("react.fragment"):60107,f$1=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h$1=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$1=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
    Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
    function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$1:case m$1:case e$1:case g$1:case f$1:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t:case r$1:case h$1:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l$1;var ConcurrentMode=m$1;var ContextConsumer$1=k$1;var ContextProvider$1=h$1;var Element$1=c$1;var ForwardRef$1=n$1;var Fragment$1=e$1;var Lazy$1=t;var Memo$1=r$1;var Portal$1=d$1;
    var Profiler$1=g$1;var StrictMode$1=f$1;var Suspense$1=p$1;var isAsyncMode$1=function(a){return A$1(a)||z$1(a)===l$1};var isConcurrentMode$1=A$1;var isContextConsumer$1=function(a){return z$1(a)===k$1};var isContextProvider$1=function(a){return z$1(a)===h$1};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef$1=function(a){return z$1(a)===n$1};var isFragment$1=function(a){return z$1(a)===e$1};var isLazy$1=function(a){return z$1(a)===t};
    var isMemo$1=function(a){return z$1(a)===r$1};var isPortal$1=function(a){return z$1(a)===d$1};var isProfiler$1=function(a){return z$1(a)===g$1};var isStrictMode$1=function(a){return z$1(a)===f$1};var isSuspense$1=function(a){return z$1(a)===p$1};
    var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f$1||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r$1||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};var typeOf$1=z$1;

    var reactIs_production_min$1 = {
    	AsyncMode: AsyncMode,
    	ConcurrentMode: ConcurrentMode,
    	ContextConsumer: ContextConsumer$1,
    	ContextProvider: ContextProvider$1,
    	Element: Element$1,
    	ForwardRef: ForwardRef$1,
    	Fragment: Fragment$1,
    	Lazy: Lazy$1,
    	Memo: Memo$1,
    	Portal: Portal$1,
    	Profiler: Profiler$1,
    	StrictMode: StrictMode$1,
    	Suspense: Suspense$1,
    	isAsyncMode: isAsyncMode$1,
    	isConcurrentMode: isConcurrentMode$1,
    	isContextConsumer: isContextConsumer$1,
    	isContextProvider: isContextProvider$1,
    	isElement: isElement$1,
    	isForwardRef: isForwardRef$1,
    	isFragment: isFragment$1,
    	isLazy: isLazy$1,
    	isMemo: isMemo$1,
    	isPortal: isPortal$1,
    	isProfiler: isProfiler$1,
    	isStrictMode: isStrictMode$1,
    	isSuspense: isSuspense$1,
    	isValidElementType: isValidElementType$1,
    	typeOf: typeOf$1
    };

    /** @license React v16.13.1
     * react-is.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var reactIs_development$1 = createCommonjsModule(function (module, exports) {



    if (process.env.NODE_ENV !== "production") {
      (function() {

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
      })();
    }
    });

    var reactIs$1 = createCommonjsModule(function (module) {

    if (process.env.NODE_ENV === 'production') {
      module.exports = reactIs_production_min$1;
    } else {
      module.exports = reactIs_development$1;
    }
    });

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var printWarning$1 = function() {};

    if (process.env.NODE_ENV !== 'production') {
      var ReactPropTypesSecret = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
      var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (has$1(typeSpecs, typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning$1(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;

              var stack = getStack ? getStack() : '';

              printWarning$1(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== 'production') {
        loggedTypeFailures = {};
      }
    };

    var checkPropTypes_1 = checkPropTypes;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */







    var has = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning = function() {};

    if (process.env.NODE_ENV !== 'production') {
      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;

      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;

          if (secret !== ReactPropTypesSecret_1) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!reactIs$1.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== 'production') {
            if (arguments.length > 1) {
              printWarning(
                'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
              );
            } else {
              printWarning('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }

          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }

        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
              return null;
            }
          }

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from
          // props.
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }

            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }

            return true;
          default:
            return false;
        }
      }

      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }

        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }

      ReactPropTypes.checkPropTypes = checkPropTypes_1;
      ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */



    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;

    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,

        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,

        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };

      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var propTypes = createCommonjsModule(function (module) {
    if (process.env.NODE_ENV !== 'production') {
      var ReactIs = reactIs$1;

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    } else {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
    });

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    // This module is based on https://github.com/airbnb/prop-types-exact repository.
    // However, in order to reduce the number of dependencies and to remove some extra safe checks
    // the module was forked.
    // Only exported for test purposes.
    var specialProperty = "exact-prop: \u200B";
    function exactProp(propTypes) {
      if (process.env.NODE_ENV === 'production') {
        return propTypes;
      }

      return _extends({}, propTypes, _defineProperty({}, specialProperty, function (props) {
        var unsupportedProps = Object.keys(props).filter(function (prop) {
          return !propTypes.hasOwnProperty(prop);
        });

        if (unsupportedProps.length > 0) {
          return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
            return "`".concat(prop, "`");
          }).join(', '), ". Please remove them."));
        }

        return null;
      }));
    }

    /**
     * WARNING: Don't import this directly.
     * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
     * @param {number} code
     */
    function formatMuiErrorMessage(code) {
      // Apply babel-plugin-transform-template-literals in loose mode
      // loose mode is safe iff we're concatenating primitives
      // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

      /* eslint-disable prefer-template */
      var url = 'https://material-ui.com/production-error/?code=' + code;

      for (var i = 1; i < arguments.length; i += 1) {
        // rest params over-transpile for this case
        // eslint-disable-next-line prefer-rest-params
        url += '&args[]=' + encodeURIComponent(arguments[i]);
      }

      return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
      /* eslint-enable prefer-template */
    }

    /** @license React v17.0.2
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
    if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden");}
    function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;var ContextConsumer=h;var ContextProvider=z;var Element=A;var ForwardRef=B;var Fragment=C;var Lazy=D;var Memo=E;var Portal=F;var Profiler=G;var StrictMode=H;
    var Suspense=I;var isAsyncMode=function(){return !1};var isConcurrentMode=function(){return !1};var isContextConsumer=function(a){return y(a)===h};var isContextProvider=function(a){return y(a)===g};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};var isForwardRef=function(a){return y(a)===k};var isFragment=function(a){return y(a)===d};var isLazy=function(a){return y(a)===p};var isMemo=function(a){return y(a)===n};
    var isPortal=function(a){return y(a)===c};var isProfiler=function(a){return y(a)===f};var isStrictMode=function(a){return y(a)===e};var isSuspense=function(a){return y(a)===l};var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
    var typeOf=y;

    var reactIs_production_min = {
    	ContextConsumer: ContextConsumer,
    	ContextProvider: ContextProvider,
    	Element: Element,
    	ForwardRef: ForwardRef,
    	Fragment: Fragment,
    	Lazy: Lazy,
    	Memo: Memo,
    	Portal: Portal,
    	Profiler: Profiler,
    	StrictMode: StrictMode,
    	Suspense: Suspense,
    	isAsyncMode: isAsyncMode,
    	isConcurrentMode: isConcurrentMode,
    	isContextConsumer: isContextConsumer,
    	isContextProvider: isContextProvider,
    	isElement: isElement,
    	isForwardRef: isForwardRef,
    	isFragment: isFragment,
    	isLazy: isLazy,
    	isMemo: isMemo,
    	isPortal: isPortal,
    	isProfiler: isProfiler,
    	isStrictMode: isStrictMode,
    	isSuspense: isSuspense,
    	isValidElementType: isValidElementType,
    	typeOf: typeOf
    };

    /** @license React v17.0.2
     * react-is.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var reactIs_development = createCommonjsModule(function (module, exports) {

    if (process.env.NODE_ENV !== "production") {
      (function() {

    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      symbolFor('react.scope');
      symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
        return true;
      }

      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    }
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }

      return false;
    }
    function isConcurrentMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
          hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
        }
      }

      return false;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
      })();
    }
    });

    var reactIs = createCommonjsModule(function (module) {

    if (process.env.NODE_ENV === 'production') {
      module.exports = reactIs_production_min;
    } else {
      module.exports = reactIs_development;
    }
    });

    // https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

    var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
    function getFunctionName(fn) {
      var match = "".concat(fn).match(fnNameMatchRegex);
      var name = match && match[1];
      return name || '';
    }
    /**
     * @param {function} Component
     * @param {string} fallback
     * @returns {string | undefined}
     */

    function getFunctionComponentName(Component) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return Component.displayName || Component.name || getFunctionName(Component) || fallback;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = getFunctionComponentName(innerType);
      return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
    }
    /**
     * cherry-pick from
     * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
     * originally forked from recompose/getDisplayName with added IE 11 support
     *
     * @param {React.ReactType} Component
     * @returns {string | undefined}
     */


    function getDisplayName(Component) {
      if (Component == null) {
        return undefined;
      }

      if (typeof Component === 'string') {
        return Component;
      }

      if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
      }

      if (_typeof$1(Component) === 'object') {
        switch (Component.$$typeof) {
          case reactIs.ForwardRef:
            return getWrappedName(Component, Component.render, 'ForwardRef');

          case reactIs.Memo:
            return getWrappedName(Component, Component.type, 'memo');

          default:
            return undefined;
        }
      }

      return undefined;
    }

    /* eslint-disable no-use-before-define */

    /**
     * Returns a number whose value is limited to the given range.
     *
     * @param {number} value The value to be clamped
     * @param {number} min The lower boundary of the output range
     * @param {number} max The upper boundary of the output range
     * @returns {number} A number in the range [min, max]
     */
    function clamp(value) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      if (process.env.NODE_ENV !== 'production') {
        if (value < min || value > max) {
          console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
        }
      }

      return Math.min(Math.max(min, value), max);
    }
    /**
     * Converts a color from CSS hex format to CSS rgb format.
     *
     * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
     * @returns {string} A CSS rgb color string
     */


    function hexToRgb(color) {
      color = color.substr(1);
      var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
      var colors = color.match(re);

      if (colors && colors[0].length === 1) {
        colors = colors.map(function (n) {
          return n + n;
        });
      }

      return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
        return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
      }).join(', '), ")") : '';
    }
    /**
     * Converts a color from hsl format to rgb format.
     *
     * @param {string} color - HSL color values
     * @returns {string} rgb color values
     */

    function hslToRgb(color) {
      color = decomposeColor(color);
      var _color = color,
          values = _color.values;
      var h = values[0];
      var s = values[1] / 100;
      var l = values[2] / 100;
      var a = s * Math.min(l, 1 - l);

      var f = function f(n) {
        var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
        return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      };

      var type = 'rgb';
      var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

      if (color.type === 'hsla') {
        type += 'a';
        rgb.push(values[3]);
      }

      return recomposeColor({
        type: type,
        values: rgb
      });
    }
    /**
     * Returns an object with the type and values of a color.
     *
     * Note: Does not support rgb % values.
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @returns {object} - A MUI color object: {type: string, values: number[]}
     */

    function decomposeColor(color) {
      // Idempotent
      if (color.type) {
        return color;
      }

      if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
      }

      var marker = color.indexOf('(');
      var type = color.substring(0, marker);

      if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
        throw new Error(process.env.NODE_ENV !== "production" ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : formatMuiErrorMessage(3, color));
      }

      var values = color.substring(marker + 1, color.length - 1).split(',');
      values = values.map(function (value) {
        return parseFloat(value);
      });
      return {
        type: type,
        values: values
      };
    }
    /**
     * Converts a color object with type and values to a string.
     *
     * @param {object} color - Decomposed color
     * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
     * @param {array} color.values - [n,n,n] or [n,n,n,n]
     * @returns {string} A CSS color string
     */

    function recomposeColor(color) {
      var type = color.type;
      var values = color.values;

      if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = values.map(function (n, i) {
          return i < 3 ? parseInt(n, 10) : n;
        });
      } else if (type.indexOf('hsl') !== -1) {
        values[1] = "".concat(values[1], "%");
        values[2] = "".concat(values[2], "%");
      }

      return "".concat(type, "(").concat(values.join(', '), ")");
    }
    /**
     * Calculates the contrast ratio between two colors.
     *
     * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
     *
     * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @returns {number} A contrast ratio value in the range 0 - 21.
     */

    function getContrastRatio(foreground, background) {
      var lumA = getLuminance(foreground);
      var lumB = getLuminance(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    /**
     * The relative brightness of any point in a color space,
     * normalized to 0 for darkest black and 1 for lightest white.
     *
     * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @returns {number} The relative brightness of the color in the range 0 - 1
     */

    function getLuminance(color) {
      color = decomposeColor(color);
      var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
      rgb = rgb.map(function (val) {
        val /= 255; // normalized

        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      }); // Truncate at 3 digits

      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    /**
     * Darkens a color.
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @param {number} coefficient - multiplier in the range 0 - 1
     * @returns {string} A CSS color string. Hex input values are returned as rgb
     */

    function darken(color, coefficient) {
      color = decomposeColor(color);
      coefficient = clamp(coefficient);

      if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
      } else if (color.type.indexOf('rgb') !== -1) {
        for (var i = 0; i < 3; i += 1) {
          color.values[i] *= 1 - coefficient;
        }
      }

      return recomposeColor(color);
    }
    /**
     * Lightens a color.
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @param {number} coefficient - multiplier in the range 0 - 1
     * @returns {string} A CSS color string. Hex input values are returned as rgb
     */

    function lighten(color, coefficient) {
      color = decomposeColor(color);
      coefficient = clamp(coefficient);

      if (color.type.indexOf('hsl') !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
      } else if (color.type.indexOf('rgb') !== -1) {
        for (var i = 0; i < 3; i += 1) {
          color.values[i] += (255 - color.values[i]) * coefficient;
        }
      }

      return recomposeColor(color);
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

    function createBreakpoints(breakpoints) {
      var _breakpoints$values = breakpoints.values,
          values = _breakpoints$values === void 0 ? {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      } : _breakpoints$values,
          _breakpoints$unit = breakpoints.unit,
          unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
          _breakpoints$step = breakpoints.step,
          step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
          other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

      function up(key) {
        var value = typeof values[key] === 'number' ? values[key] : key;
        return "@media (min-width:".concat(value).concat(unit, ")");
      }

      function down(key) {
        var endIndex = keys.indexOf(key) + 1;
        var upperbound = values[keys[endIndex]];

        if (endIndex === keys.length) {
          // xl down applies to all sizes
          return up('xs');
        }

        var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
        return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
      }

      function between(start, end) {
        var endIndex = keys.indexOf(end);

        if (endIndex === keys.length - 1) {
          return up(start);
        }

        return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
      }

      function only(key) {
        return between(key, key);
      }

      function width(key) {
        return values[key];
      }

      return _extends({
        keys: keys,
        values: values,
        up: up,
        down: down,
        between: between,
        only: only,
        width: width
      }, other);
    }

    function createMixins(breakpoints, spacing, mixins) {
      var _toolbar;

      return _extends({
        gutters: function gutters() {
          var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // To deprecate in v4.1
          //       warning(
          //         false,
          //         [
          //           'Material-UI: Theme.mixins.gutters() is deprecated.',
          //           'You can use the source of the mixin directly:',
          //           `
          // paddingLeft: theme.spacing(2),
          // paddingRight: theme.spacing(2),
          // [theme.breakpoints.up('sm')]: {
          //   paddingLeft: theme.spacing(3),
          //   paddingRight: theme.spacing(3),
          // },
          // `,
          //         ].join('\n'),
          //       );
          return _extends({
            paddingLeft: spacing(2),
            paddingRight: spacing(2)
          }, styles, _defineProperty({}, breakpoints.up('sm'), _extends({
            paddingLeft: spacing(3),
            paddingRight: spacing(3)
          }, styles[breakpoints.up('sm')])));
        },
        toolbar: (_toolbar = {
          minHeight: 56
        }, _defineProperty(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
          minHeight: 48
        }), _defineProperty(_toolbar, breakpoints.up('sm'), {
          minHeight: 64
        }), _toolbar)
      }, mixins);
    }

    var light = {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: 'rgba(0, 0, 0, 0.87)',
        // Secondary text.
        secondary: 'rgba(0, 0, 0, 0.54)',
        // Disabled text have even lower visual prominence.
        disabled: 'rgba(0, 0, 0, 0.38)',
        // Text hints.
        hint: 'rgba(0, 0, 0, 0.38)'
      },
      // The color used to divide different elements.
      divider: 'rgba(0, 0, 0, 0.12)',
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common.white,
        default: grey[50]
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: 'rgba(0, 0, 0, 0.54)',
        // The color of an hovered action.
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: 'rgba(0, 0, 0, 0.26)',
        // The background color of a disabled action.
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
    var dark = {
      text: {
        primary: common.white,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)'
      },
      divider: 'rgba(255, 255, 255, 0.12)',
      background: {
        paper: grey[800],
        default: '#303030'
      },
      action: {
        active: common.white,
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };

    function addLightOrDark(intent, direction, shade, tonalOffset) {
      var tonalOffsetLight = tonalOffset.light || tonalOffset;
      var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

      if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
          intent[direction] = intent[shade];
        } else if (direction === 'light') {
          intent.light = lighten(intent.main, tonalOffsetLight);
        } else if (direction === 'dark') {
          intent.dark = darken(intent.main, tonalOffsetDark);
        }
      }
    }

    function createPalette(palette) {
      var _palette$primary = palette.primary,
          primary = _palette$primary === void 0 ? {
        light: indigo[300],
        main: indigo[500],
        dark: indigo[700]
      } : _palette$primary,
          _palette$secondary = palette.secondary,
          secondary = _palette$secondary === void 0 ? {
        light: pink.A200,
        main: pink.A400,
        dark: pink.A700
      } : _palette$secondary,
          _palette$error = palette.error,
          error = _palette$error === void 0 ? {
        light: red[300],
        main: red[500],
        dark: red[700]
      } : _palette$error,
          _palette$warning = palette.warning,
          warning = _palette$warning === void 0 ? {
        light: orange[300],
        main: orange[500],
        dark: orange[700]
      } : _palette$warning,
          _palette$info = palette.info,
          info = _palette$info === void 0 ? {
        light: blue[300],
        main: blue[500],
        dark: blue[700]
      } : _palette$info,
          _palette$success = palette.success,
          success = _palette$success === void 0 ? {
        light: green[300],
        main: green[500],
        dark: green[700]
      } : _palette$success,
          _palette$type = palette.type,
          type = _palette$type === void 0 ? 'light' : _palette$type,
          _palette$contrastThre = palette.contrastThreshold,
          contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
          _palette$tonalOffset = palette.tonalOffset,
          tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
          other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
      // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
      // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


      function getContrastText(background) {
        var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

        if (process.env.NODE_ENV !== 'production') {
          var contrast = getContrastRatio(background, contrastText);

          if (contrast < 3) {
            console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
          }
        }

        return contrastText;
      }

      var augmentColor = function augmentColor(color) {
        var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
        var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
        color = _extends({}, color);

        if (!color.main && color[mainShade]) {
          color.main = color[mainShade];
        }

        if (!color.main) {
          throw new Error(process.env.NODE_ENV !== "production" ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : formatMuiErrorMessage(4, mainShade));
        }

        if (typeof color.main !== 'string') {
          throw new Error(process.env.NODE_ENV !== "production" ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createMuiTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createMuiTheme({ palette: {\n  primary: { main: green[500] },\n} });") : formatMuiErrorMessage(5, JSON.stringify(color.main)));
        }

        addLightOrDark(color, 'light', lightShade, tonalOffset);
        addLightOrDark(color, 'dark', darkShade, tonalOffset);

        if (!color.contrastText) {
          color.contrastText = getContrastText(color.main);
        }

        return color;
      };

      var types = {
        dark: dark,
        light: light
      };

      if (process.env.NODE_ENV !== 'production') {
        if (!types[type]) {
          console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
        }
      }

      var paletteOutput = deepmerge(_extends({
        // A collection of common colors.
        common: common,
        // The palette type, can be light or dark.
        type: type,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor(primary),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor(error),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: augmentColor(warning),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: augmentColor(info),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: augmentColor(success),
        // The grey colors.
        grey: grey,
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: contrastThreshold,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText: getContrastText,
        // Generate a rich color object.
        augmentColor: augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: tonalOffset
      }, types[type]), other);
      return paletteOutput;
    }

    function round(value) {
      return Math.round(value * 1e5) / 1e5;
    }

    var caseAllCaps = {
      textTransform: 'uppercase'
    };
    var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
    /**
     * @see @link{https://material.io/design/typography/the-type-system.html}
     * @see @link{https://material.io/design/typography/understanding-typography.html}
     */

    function createTypography(palette, typography) {
      var _ref = typeof typography === 'function' ? typography(palette) : typography,
          _ref$fontFamily = _ref.fontFamily,
          fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
          _ref$fontSize = _ref.fontSize,
          fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
          _ref$fontWeightLight = _ref.fontWeightLight,
          fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
          _ref$fontWeightRegula = _ref.fontWeightRegular,
          fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
          _ref$fontWeightMedium = _ref.fontWeightMedium,
          fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
          _ref$fontWeightBold = _ref.fontWeightBold,
          fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
          _ref$htmlFontSize = _ref.htmlFontSize,
          htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
          allVariants = _ref.allVariants,
          pxToRem2 = _ref.pxToRem,
          other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

      if (process.env.NODE_ENV !== 'production') {
        if (typeof fontSize !== 'number') {
          console.error('Material-UI: `fontSize` is required to be a number.');
        }

        if (typeof htmlFontSize !== 'number') {
          console.error('Material-UI: `htmlFontSize` is required to be a number.');
        }
      }

      var coef = fontSize / 14;

      var pxToRem = pxToRem2 || function (size) {
        return "".concat(size / htmlFontSize * coef, "rem");
      };

      var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
        return _extends({
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          fontSize: pxToRem(size),
          // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
          lineHeight: lineHeight
        }, fontFamily === defaultFontFamily ? {
          letterSpacing: "".concat(round(letterSpacing / size), "em")
        } : {}, casing, allVariants);
      };

      var variants = {
        h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
      };
      return deepmerge(_extends({
        htmlFontSize: htmlFontSize,
        pxToRem: pxToRem,
        round: round,
        // TODO v5: remove
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeightLight: fontWeightLight,
        fontWeightRegular: fontWeightRegular,
        fontWeightMedium: fontWeightMedium,
        fontWeightBold: fontWeightBold
      }, variants), other, {
        clone: false // No need to clone deep

      });
    }

    var shadowKeyUmbraOpacity = 0.2;
    var shadowKeyPenumbraOpacity = 0.14;
    var shadowAmbientShadowOpacity = 0.12;

    function createShadow() {
      return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
    } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


    var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

    var shape = {
      borderRadius: 4
    };

    var responsivePropType = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object, propTypes.array]) : {};

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
    function createUnarySpacing(theme) {
      var themeSpacing = theme.spacing || 8;

      if (typeof themeSpacing === 'number') {
        return function (abs) {
          if (process.env.NODE_ENV !== 'production') {
            if (typeof abs !== 'number') {
              console.error("Material-UI: Expected spacing argument to be a number, got ".concat(abs, "."));
            }
          }

          return themeSpacing * abs;
        };
      }

      if (Array.isArray(themeSpacing)) {
        return function (abs) {
          if (process.env.NODE_ENV !== 'production') {
            if (abs > themeSpacing.length - 1) {
              console.error(["Material-UI: The value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n'));
            }
          }

          return themeSpacing[abs];
        };
      }

      if (typeof themeSpacing === 'function') {
        return themeSpacing;
      }

      if (process.env.NODE_ENV !== 'production') {
        console.error(["Material-UI: The `theme.spacing` value (".concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n'));
      }

      return function () {
        return undefined;
      };
    }

    process.env.NODE_ENV !== 'production' ? spacingKeys.reduce(function (obj, key) {
      obj[key] = responsivePropType;
      return obj;
    }, {}) : {};

    var warnOnce;
    function createSpacing() {
      var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

      // Already transformed.
      if (spacingInput.mui) {
        return spacingInput;
      } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
      // Smaller components, such as icons and type, can align to a 4dp grid.
      // https://material.io/design/layout/understanding-layout.html#usage


      var transform = createUnarySpacing({
        spacing: spacingInput
      });

      var spacing = function spacing() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (process.env.NODE_ENV !== 'production') {
          if (!(args.length <= 4)) {
            console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
          }
        }

        if (args.length === 0) {
          return transform(1);
        }

        if (args.length === 1) {
          return transform(args[0]);
        }

        return args.map(function (argument) {
          if (typeof argument === 'string') {
            return argument;
          }

          var output = transform(argument);
          return typeof output === 'number' ? "".concat(output, "px") : output;
        }).join(' ');
      }; // Backward compatibility, to remove in v5.


      Object.defineProperty(spacing, 'unit', {
        get: function get() {
          if (process.env.NODE_ENV !== 'production') {
            if (!warnOnce || process.env.NODE_ENV === 'test') {
              console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
            }

            warnOnce = true;
          }

          return spacingInput;
        }
      });
      spacing.mui = true;
      return spacing;
    }

    // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
    // to learn the context in which each easing should be used.
    var easing = {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
    // to learn when use what timing

    var duration = {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    };

    function formatMs(milliseconds) {
      return "".concat(Math.round(milliseconds), "ms");
    }
    /**
     * @param {string|Array} props
     * @param {object} param
     * @param {string} param.prop
     * @param {number} param.duration
     * @param {string} param.easing
     * @param {number} param.delay
     */


    var transitions = {
      easing: easing,
      duration: duration,
      create: function create() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$duration = options.duration,
            durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
            _options$easing = options.easing,
            easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
            _options$delay = options.delay,
            delay = _options$delay === void 0 ? 0 : _options$delay,
            other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);

        if (process.env.NODE_ENV !== 'production') {
          var isString = function isString(value) {
            return typeof value === 'string';
          };

          var isNumber = function isNumber(value) {
            return !isNaN(parseFloat(value));
          };

          if (!isString(props) && !Array.isArray(props)) {
            console.error('Material-UI: Argument "props" must be a string or Array.');
          }

          if (!isNumber(durationOption) && !isString(durationOption)) {
            console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
          }

          if (!isString(easingOption)) {
            console.error('Material-UI: Argument "easing" must be a string.');
          }

          if (!isNumber(delay) && !isString(delay)) {
            console.error('Material-UI: Argument "delay" must be a number or a string.');
          }

          if (Object.keys(other).length !== 0) {
            console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
          }
        }

        return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
          return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
        }).join(',');
      },
      getAutoHeightDuration: function getAutoHeightDuration(height) {
        if (!height) {
          return 0;
        }

        var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

        return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
      }
    };

    // We need to centralize the zIndex definitions as they work
    // like global values in the browser.
    var zIndex = {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    };

    function createMuiTheme() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _options$breakpoints = options.breakpoints,
          breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
          _options$mixins = options.mixins,
          mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
          _options$palette = options.palette,
          paletteInput = _options$palette === void 0 ? {} : _options$palette,
          spacingInput = options.spacing,
          _options$typography = options.typography,
          typographyInput = _options$typography === void 0 ? {} : _options$typography,
          other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

      var palette = createPalette(paletteInput);
      var breakpoints = createBreakpoints(breakpointsInput);
      var spacing = createSpacing(spacingInput);
      var muiTheme = deepmerge({
        breakpoints: breakpoints,
        direction: 'ltr',
        mixins: createMixins(breakpoints, spacing, mixinsInput),
        overrides: {},
        // Inject custom styles
        palette: palette,
        props: {},
        // Provide default props
        shadows: shadows,
        typography: createTypography(palette, typographyInput),
        spacing: spacing,
        shape: shape,
        transitions: transitions,
        zIndex: zIndex
      }, other);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      muiTheme = args.reduce(function (acc, argument) {
        return deepmerge(acc, argument);
      }, muiTheme);

      if (process.env.NODE_ENV !== 'production') {
        var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

        var traverse = function traverse(node, parentKey) {
          var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

          for (key in node) {
            var child = node[key];

            if (depth === 1) {
              if (key.indexOf('Mui') === 0 && child) {
                traverse(child, key, depth + 1);
              }
            } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
              if (process.env.NODE_ENV !== 'production') {
                console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
                  root: _defineProperty({}, "&$".concat(key), child)
                }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
              } // Remove the style to prevent global conflicts.


              node[key] = {};
            }
          }
        };

        traverse(muiTheme.overrides);
      }

      return muiTheme;
    }

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

    /**
     * This is the list of the style rule name we use as drop in replacement for the built-in
     * pseudo classes (:checked, :disabled, :focused, etc.).
     *
     * Why do they exist in the first place?
     * These classes are used at a specificity of 2.
     * It allows them to override previously definied styles as well as
     * being untouched by simple user overrides.
     */

    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
    // When new generator function is created, rule counter is reset.
    // We need to reset the rule counter for SSR for each request.
    //
    // It's inspired by
    // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

    function createGenerateClassName() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$disableGloba = options.disableGlobal,
          disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
          _options$productionPr = options.productionPrefix,
          productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
          _options$seed = options.seed,
          seed = _options$seed === void 0 ? '' : _options$seed;
      var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
      var ruleCounter = 0;

      var getNextCounterId = function getNextCounterId() {
        ruleCounter += 1;

        if (process.env.NODE_ENV !== 'production') {
          if (ruleCounter >= 1e10) {
            console.warn(['Material-UI: You might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
          }
        }

        return ruleCounter;
      };

      return function (rule, styleSheet) {
        var name = styleSheet.options.name; // Is a global static MUI style?

        if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
          // We can use a shorthand class name, we never use the keys to style the components.
          if (pseudoClasses.indexOf(rule.key) !== -1) {
            return "Mui-".concat(rule.key);
          }

          var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

          if (!styleSheet.options.theme[nested] || seed !== '') {
            return prefix;
          }

          return "".concat(prefix, "-").concat(getNextCounterId());
        }

        if (process.env.NODE_ENV === 'production') {
          return "".concat(seedPrefix).concat(productionPrefix).concat(getNextCounterId());
        }

        var suffix = "".concat(rule.key, "-").concat(getNextCounterId()); // Help with debuggability.

        if (styleSheet.options.classNamePrefix) {
          return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
        }

        return "".concat(seedPrefix).concat(suffix);
      };
    }

    function createStyles$1(styles) {
      return styles;
    }

    var isProduction = process.env.NODE_ENV === 'production';
    function warning(condition, message) {
      if (!isProduction) {
        if (condition) {
          return;
        }

        var text = "Warning: " + message;

        if (typeof console !== 'undefined') {
          console.warn(text);
        }

        try {
          throw Error(text);
        } catch (x) {}
      }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    var plainObjectConstrurctor = {}.constructor;
    function cloneStyle(style) {
      if (style == null || typeof style !== 'object') return style;
      if (Array.isArray(style)) return style.map(cloneStyle);
      if (style.constructor !== plainObjectConstrurctor) return style;
      var newStyle = {};

      for (var name in style) {
        newStyle[name] = cloneStyle(style[name]);
      }

      return newStyle;
    }

    /**
     * Create a rule instance.
     */

    function createRule(name, decl, options) {
      if (name === void 0) {
        name = 'unnamed';
      }

      var jss = options.jss;
      var declCopy = cloneStyle(decl);
      var rule = jss.plugins.onCreateRule(name, declCopy, options);
      if (rule) return rule; // It is an at-rule and it has no instance.

      if (name[0] === '@') {
        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown rule " + name) : void 0;
      }

      return null;
    }

    var join = function join(value, by) {
      var result = '';

      for (var i = 0; i < value.length; i++) {
        // Remove !important from the value, it will be readded later.
        if (value[i] === '!important') break;
        if (result) result += by;
        result += value[i];
      }

      return result;
    };

    /**
     * Converts array values to string.
     *
     * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
     * `border: ['1px', '2px']` > `border: 1px, 2px;`
     * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
     * `color: ['red', !important]` > `color: red !important;`
     */
    var toCssValue = function toCssValue(value, ignoreImportant) {
      if (ignoreImportant === void 0) {
        ignoreImportant = false;
      }

      if (!Array.isArray(value)) return value;
      var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

      if (Array.isArray(value[0])) {
        for (var i = 0; i < value.length; i++) {
          if (value[i] === '!important') break;
          if (cssValue) cssValue += ', ';
          cssValue += join(value[i], ' ');
        }
      } else cssValue = join(value, ', '); // Add !important, because it was ignored.


      if (!ignoreImportant && value[value.length - 1] === '!important') {
        cssValue += ' !important';
      }

      return cssValue;
    };

    /**
     * Indent a string.
     * http://jsperf.com/array-join-vs-for
     */
    function indentStr(str, indent) {
      var result = '';

      for (var index = 0; index < indent; index++) {
        result += '  ';
      }

      return result + str;
    }
    /**
     * Converts a Rule to CSS string.
     */


    function toCss(selector, style, options) {
      if (options === void 0) {
        options = {};
      }

      var result = '';
      if (!style) return result;
      var _options = options,
          _options$indent = _options.indent,
          indent = _options$indent === void 0 ? 0 : _options$indent;
      var fallbacks = style.fallbacks;
      if (selector) indent++; // Apply fallbacks first.

      if (fallbacks) {
        // Array syntax {fallbacks: [{prop: value}]}
        if (Array.isArray(fallbacks)) {
          for (var index = 0; index < fallbacks.length; index++) {
            var fallback = fallbacks[index];

            for (var prop in fallback) {
              var value = fallback[prop];

              if (value != null) {
                if (result) result += '\n';
                result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
              }
            }
          }
        } else {
          // Object syntax {fallbacks: {prop: value}}
          for (var _prop in fallbacks) {
            var _value = fallbacks[_prop];

            if (_value != null) {
              if (result) result += '\n';
              result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
            }
          }
        }
      }

      for (var _prop2 in style) {
        var _value2 = style[_prop2];

        if (_value2 != null && _prop2 !== 'fallbacks') {
          if (result) result += '\n';
          result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
        }
      } // Allow empty style in this case, because properties will be added dynamically.


      if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

      if (!selector) return result;
      indent--;
      if (result) result = "\n" + result + "\n";
      return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
    }

    var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
    var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
    var escape = (function (str) {
      return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
    });

    var BaseStyleRule =
    /*#__PURE__*/
    function () {
      function BaseStyleRule(key, style, options) {
        this.type = 'style';
        this.key = void 0;
        this.isProcessed = false;
        this.style = void 0;
        this.renderer = void 0;
        this.renderable = void 0;
        this.options = void 0;
        var sheet = options.sheet,
            Renderer = options.Renderer;
        this.key = key;
        this.options = options;
        this.style = style;
        if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
      }
      /**
       * Get or set a style property.
       */


      var _proto = BaseStyleRule.prototype;

      _proto.prop = function prop(name, value, options) {
        // It's a getter.
        if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

        var force = options ? options.force : false;
        if (!force && this.style[name] === value) return this;
        var newValue = value;

        if (!options || options.process !== false) {
          newValue = this.options.jss.plugins.onChangeValue(value, name, this);
        }

        var isEmpty = newValue == null || newValue === false;
        var isDefined = name in this.style; // Value is empty and wasn't defined before.

        if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

        var remove = isEmpty && isDefined;
        if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

        if (this.renderable && this.renderer) {
          if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
          return this;
        }

        var sheet = this.options.sheet;

        if (sheet && sheet.attached) {
          process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
        }

        return this;
      };

      return BaseStyleRule;
    }();
    var StyleRule =
    /*#__PURE__*/
    function (_BaseStyleRule) {
      _inheritsLoose(StyleRule, _BaseStyleRule);

      function StyleRule(key, style, options) {
        var _this;

        _this = _BaseStyleRule.call(this, key, style, options) || this;
        _this.selectorText = void 0;
        _this.id = void 0;
        _this.renderable = void 0;
        var selector = options.selector,
            scoped = options.scoped,
            sheet = options.sheet,
            generateId = options.generateId;

        if (selector) {
          _this.selectorText = selector;
        } else if (scoped !== false) {
          _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
          _this.selectorText = "." + escape(_this.id);
        }

        return _this;
      }
      /**
       * Set selector string.
       * Attention: use this with caution. Most browsers didn't implement
       * selectorText setter, so this may result in rerendering of entire Style Sheet.
       */


      var _proto2 = StyleRule.prototype;

      /**
       * Apply rule to an element inline.
       */
      _proto2.applyTo = function applyTo(renderable) {
        var renderer = this.renderer;

        if (renderer) {
          var json = this.toJSON();

          for (var prop in json) {
            renderer.setProperty(renderable, prop, json[prop]);
          }
        }

        return this;
      }
      /**
       * Returns JSON representation of the rule.
       * Fallbacks are not supported.
       * Useful for inline styles.
       */
      ;

      _proto2.toJSON = function toJSON() {
        var json = {};

        for (var prop in this.style) {
          var value = this.style[prop];
          if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
        }

        return json;
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto2.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.selectorText, this.style, opts);
      };

      _createClass(StyleRule, [{
        key: "selector",
        set: function set(selector) {
          if (selector === this.selectorText) return;
          this.selectorText = selector;
          var renderer = this.renderer,
              renderable = this.renderable;
          if (!renderable || !renderer) return;
          var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

          if (!hasChanged) {
            renderer.replaceRule(renderable, this);
          }
        }
        /**
         * Get selector string.
         */
        ,
        get: function get() {
          return this.selectorText;
        }
      }]);

      return StyleRule;
    }(BaseStyleRule);
    var pluginStyleRule = {
      onCreateRule: function onCreateRule(name, style, options) {
        if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
          return null;
        }

        return new StyleRule(name, style, options);
      }
    };

    var defaultToStringOptions = {
      indent: 1,
      children: true
    };
    var atRegExp = /@([\w-]+)/;
    /**
     * Conditional rule for @media, @supports
     */

    var ConditionalRule =
    /*#__PURE__*/
    function () {
      function ConditionalRule(key, styles, options) {
        this.type = 'conditional';
        this.at = void 0;
        this.key = void 0;
        this.query = void 0;
        this.rules = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        var atMatch = key.match(atRegExp);
        this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

        this.query = options.name || "@" + this.at;
        this.options = options;
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */


      var _proto = ConditionalRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Create and register rule, run plugins.
       */
      ;

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions;
        }

        if (options.indent == null) options.indent = defaultToStringOptions.indent;
        if (options.children == null) options.children = defaultToStringOptions.children;

        if (options.children === false) {
          return this.query + " {}";
        }

        var children = this.rules.toString(options);
        return children ? this.query + " {\n" + children + "\n}" : '';
      };

      return ConditionalRule;
    }();
    var keyRegExp = /@media|@supports\s+/;
    var pluginConditionalRule = {
      onCreateRule: function onCreateRule(key, styles, options) {
        return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
      }
    };

    var defaultToStringOptions$1 = {
      indent: 1,
      children: true
    };
    var nameRegExp = /@keyframes\s+([\w-]+)/;
    /**
     * Rule for @keyframes
     */

    var KeyframesRule =
    /*#__PURE__*/
    function () {
      function KeyframesRule(key, frames, options) {
        this.type = 'keyframes';
        this.at = '@keyframes';
        this.key = void 0;
        this.name = void 0;
        this.id = void 0;
        this.rules = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        var nameMatch = key.match(nameRegExp);

        if (nameMatch && nameMatch[1]) {
          this.name = nameMatch[1];
        } else {
          this.name = 'noname';
          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Bad keyframes name " + key) : void 0;
        }

        this.key = this.type + "-" + this.name;
        this.options = options;
        var scoped = options.scoped,
            sheet = options.sheet,
            generateId = options.generateId;
        this.id = scoped === false ? this.name : escape(generateId(this, sheet));
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var name in frames) {
          this.rules.add(name, frames[name], _extends({}, options, {
            parent: this
          }));
        }

        this.rules.process();
      }
      /**
       * Generates a CSS string.
       */


      var _proto = KeyframesRule.prototype;

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions$1;
        }

        if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
        if (options.children == null) options.children = defaultToStringOptions$1.children;

        if (options.children === false) {
          return this.at + " " + this.id + " {}";
        }

        var children = this.rules.toString(options);
        if (children) children = "\n" + children + "\n";
        return this.at + " " + this.id + " {" + children + "}";
      };

      return KeyframesRule;
    }();
    var keyRegExp$1 = /@keyframes\s+/;
    var refRegExp$1 = /\$([\w-]+)/g;

    var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
      if (typeof val === 'string') {
        return val.replace(refRegExp$1, function (match, name) {
          if (name in keyframes) {
            return keyframes[name];
          }

          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : void 0;
          return match;
        });
      }

      return val;
    };
    /**
     * Replace the reference for a animation name.
     */


    var replaceRef = function replaceRef(style, prop, keyframes) {
      var value = style[prop];
      var refKeyframe = findReferencedKeyframe(value, keyframes);

      if (refKeyframe !== value) {
        style[prop] = refKeyframe;
      }
    };

    var plugin = {
      onCreateRule: function onCreateRule(key, frames, options) {
        return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
      },
      // Animation name ref replacer.
      onProcessStyle: function onProcessStyle(style, rule, sheet) {
        if (rule.type !== 'style' || !sheet) return style;
        if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
        if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
        return style;
      },
      onChangeValue: function onChangeValue(val, prop, rule) {
        var sheet = rule.options.sheet;

        if (!sheet) {
          return val;
        }

        switch (prop) {
          case 'animation':
            return findReferencedKeyframe(val, sheet.keyframes);

          case 'animation-name':
            return findReferencedKeyframe(val, sheet.keyframes);

          default:
            return val;
        }
      }
    };

    var KeyframeRule =
    /*#__PURE__*/
    function (_BaseStyleRule) {
      _inheritsLoose(KeyframeRule, _BaseStyleRule);

      function KeyframeRule() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
        _this.renderable = void 0;
        return _this;
      }

      var _proto = KeyframeRule.prototype;

      /**
       * Generates a CSS string.
       */
      _proto.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.key, this.style, opts);
      };

      return KeyframeRule;
    }(BaseStyleRule);
    var pluginKeyframeRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        if (options.parent && options.parent.type === 'keyframes') {
          return new KeyframeRule(key, style, options);
        }

        return null;
      }
    };

    var FontFaceRule =
    /*#__PURE__*/
    function () {
      function FontFaceRule(key, style, options) {
        this.type = 'font-face';
        this.at = '@font-face';
        this.key = void 0;
        this.style = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */


      var _proto = FontFaceRule.prototype;

      _proto.toString = function toString(options) {
        if (Array.isArray(this.style)) {
          var str = '';

          for (var index = 0; index < this.style.length; index++) {
            str += toCss(this.at, this.style[index]);
            if (this.style[index + 1]) str += '\n';
          }

          return str;
        }

        return toCss(this.at, this.style, options);
      };

      return FontFaceRule;
    }();
    var keyRegExp$2 = /@font-face/;
    var pluginFontFaceRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
      }
    };

    var ViewportRule =
    /*#__PURE__*/
    function () {
      function ViewportRule(key, style, options) {
        this.type = 'viewport';
        this.at = '@viewport';
        this.key = void 0;
        this.style = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */


      var _proto = ViewportRule.prototype;

      _proto.toString = function toString(options) {
        return toCss(this.key, this.style, options);
      };

      return ViewportRule;
    }();
    var pluginViewportRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
      }
    };

    var SimpleRule =
    /*#__PURE__*/
    function () {
      function SimpleRule(key, value, options) {
        this.type = 'simple';
        this.key = void 0;
        this.value = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        this.value = value;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */
      // eslint-disable-next-line no-unused-vars


      var _proto = SimpleRule.prototype;

      _proto.toString = function toString(options) {
        if (Array.isArray(this.value)) {
          var str = '';

          for (var index = 0; index < this.value.length; index++) {
            str += this.key + " " + this.value[index] + ";";
            if (this.value[index + 1]) str += '\n';
          }

          return str;
        }

        return this.key + " " + this.value + ";";
      };

      return SimpleRule;
    }();
    var keysMap = {
      '@charset': true,
      '@import': true,
      '@namespace': true
    };
    var pluginSimpleRule = {
      onCreateRule: function onCreateRule(key, value, options) {
        return key in keysMap ? new SimpleRule(key, value, options) : null;
      }
    };

    var plugins$1 = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

    var defaultUpdateOptions = {
      process: true
    };
    var forceUpdateOptions = {
      force: true,
      process: true
      /**
       * Contains rules objects and allows adding/removing etc.
       * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
       */

    };

    var RuleList =
    /*#__PURE__*/
    function () {
      // Rules registry for access by .get() method.
      // It contains the same rule registered by name and by selector.
      // Original styles object.
      // Used to ensure correct rules order.
      function RuleList(options) {
        this.map = {};
        this.raw = {};
        this.index = [];
        this.counter = 0;
        this.options = void 0;
        this.classes = void 0;
        this.keyframes = void 0;
        this.options = options;
        this.classes = options.classes;
        this.keyframes = options.keyframes;
      }
      /**
       * Create and register rule.
       *
       * Will not render after Style Sheet was rendered the first time.
       */


      var _proto = RuleList.prototype;

      _proto.add = function add(name, decl, ruleOptions) {
        var _this$options = this.options,
            parent = _this$options.parent,
            sheet = _this$options.sheet,
            jss = _this$options.jss,
            Renderer = _this$options.Renderer,
            generateId = _this$options.generateId,
            scoped = _this$options.scoped;

        var options = _extends({
          classes: this.classes,
          parent: parent,
          sheet: sheet,
          jss: jss,
          Renderer: Renderer,
          generateId: generateId,
          scoped: scoped,
          name: name,
          keyframes: this.keyframes,
          selector: undefined
        }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
        // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
        // we need to make the key unique within this RuleList instance scope.


        var key = name;

        if (name in this.raw) {
          key = name + "-d" + this.counter++;
        } // We need to save the original decl before creating the rule
        // because cache plugin needs to use it as a key to return a cached rule.


        this.raw[key] = decl;

        if (key in this.classes) {
          // E.g. rules inside of @media container
          options.selector = "." + escape(this.classes[key]);
        }

        var rule = createRule(key, decl, options);
        if (!rule) return null;
        this.register(rule);
        var index = options.index === undefined ? this.index.length : options.index;
        this.index.splice(index, 0, rule);
        return rule;
      }
      /**
       * Get a rule.
       */
      ;

      _proto.get = function get(name) {
        return this.map[name];
      }
      /**
       * Delete a rule.
       */
      ;

      _proto.remove = function remove(rule) {
        this.unregister(rule);
        delete this.raw[rule.key];
        this.index.splice(this.index.indexOf(rule), 1);
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.index.indexOf(rule);
      }
      /**
       * Run `onProcessRule()` plugins on every rule.
       */
      ;

      _proto.process = function process() {
        var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
        // we end up with very hard-to-track-down side effects.

        this.index.slice(0).forEach(plugins.onProcessRule, plugins);
      }
      /**
       * Register a rule in `.map`, `.classes` and `.keyframes` maps.
       */
      ;

      _proto.register = function register(rule) {
        this.map[rule.key] = rule;

        if (rule instanceof StyleRule) {
          this.map[rule.selector] = rule;
          if (rule.id) this.classes[rule.key] = rule.id;
        } else if (rule instanceof KeyframesRule && this.keyframes) {
          this.keyframes[rule.name] = rule.id;
        }
      }
      /**
       * Unregister a rule.
       */
      ;

      _proto.unregister = function unregister(rule) {
        delete this.map[rule.key];

        if (rule instanceof StyleRule) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        } else if (rule instanceof KeyframesRule) {
          delete this.keyframes[rule.name];
        }
      }
      /**
       * Update the function values with a new data.
       */
      ;

      _proto.update = function update() {
        var name;
        var data;
        var options;

        if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
          name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

          data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe[invalid-tuple-index]

          options = arguments.length <= 2 ? undefined : arguments[2];
        } else {
          data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

          options = arguments.length <= 1 ? undefined : arguments[1];
          name = null;
        }

        if (name) {
          this.updateOne(this.map[name], data, options);
        } else {
          for (var index = 0; index < this.index.length; index++) {
            this.updateOne(this.index[index], data, options);
          }
        }
      }
      /**
       * Execute plugins, update rule props.
       */
      ;

      _proto.updateOne = function updateOne(rule, data, options) {
        if (options === void 0) {
          options = defaultUpdateOptions;
        }

        var _this$options2 = this.options,
            plugins = _this$options2.jss.plugins,
            sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

        if (rule.rules instanceof RuleList) {
          rule.rules.update(data, options);
          return;
        }

        var styleRule = rule;
        var style = styleRule.style;
        plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

        if (options.process && style && style !== styleRule.style) {
          // We need to run the plugins in case new `style` relies on syntax plugins.
          plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

          for (var prop in styleRule.style) {
            var nextValue = styleRule.style[prop];
            var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (nextValue !== prevValue) {
              styleRule.prop(prop, nextValue, forceUpdateOptions);
            }
          } // Remove props.


          for (var _prop in style) {
            var _nextValue = styleRule.style[_prop];
            var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (_nextValue == null && _nextValue !== _prevValue) {
              styleRule.prop(_prop, null, forceUpdateOptions);
            }
          }
        }
      }
      /**
       * Convert rules to a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        var str = '';
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;

        for (var index = 0; index < this.index.length; index++) {
          var rule = this.index[index];
          var css = rule.toString(options); // No need to render an empty rule.

          if (!css && !link) continue;
          if (str) str += '\n';
          str += css;
        }

        return str;
      };

      return RuleList;
    }();

    var StyleSheet =
    /*#__PURE__*/
    function () {
      function StyleSheet(styles, options) {
        this.options = void 0;
        this.deployed = void 0;
        this.attached = void 0;
        this.rules = void 0;
        this.renderer = void 0;
        this.classes = void 0;
        this.keyframes = void 0;
        this.queue = void 0;
        this.attached = false;
        this.deployed = false;
        this.classes = {};
        this.keyframes = {};
        this.options = _extends({}, options, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes
        });

        if (options.Renderer) {
          this.renderer = new options.Renderer(this);
        }

        this.rules = new RuleList(this.options);

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Attach renderable to the render tree.
       */


      var _proto = StyleSheet.prototype;

      _proto.attach = function attach() {
        if (this.attached) return this;
        if (this.renderer) this.renderer.attach();
        this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

        if (!this.deployed) this.deploy();
        return this;
      }
      /**
       * Remove renderable from render tree.
       */
      ;

      _proto.detach = function detach() {
        if (!this.attached) return this;
        if (this.renderer) this.renderer.detach();
        this.attached = false;
        return this;
      }
      /**
       * Add a rule to the current stylesheet.
       * Will insert a rule also after the stylesheet has been rendered first time.
       */
      ;

      _proto.addRule = function addRule(name, decl, options) {
        var queue = this.queue; // Plugins can create rules.
        // In order to preserve the right order, we need to queue all `.addRule` calls,
        // which happen after the first `rules.add()` call.

        if (this.attached && !queue) this.queue = [];
        var rule = this.rules.add(name, decl, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);

        if (this.attached) {
          if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.

          if (queue) queue.push(rule);else {
            this.insertRule(rule);

            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = undefined;
            }
          }
          return rule;
        } // We can't add rules to a detached style node.
        // We will redeploy the sheet once user will attach it.


        this.deployed = false;
        return rule;
      }
      /**
       * Insert rule into the StyleSheet
       */
      ;

      _proto.insertRule = function insertRule(rule) {
        if (this.renderer) {
          this.renderer.insertRule(rule);
        }
      }
      /**
       * Create and add rules.
       * Will render also after Style Sheet was rendered the first time.
       */
      ;

      _proto.addRules = function addRules(styles, options) {
        var added = [];

        for (var name in styles) {
          var rule = this.addRule(name, styles[name], options);
          if (rule) added.push(rule);
        }

        return added;
      }
      /**
       * Get a rule by name.
       */
      ;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Delete a rule by name.
       * Returns `true`: if rule has been deleted from the DOM.
       */
      ;

      _proto.deleteRule = function deleteRule(name) {
        var rule = typeof name === 'object' ? name : this.rules.get(name);

        if (!rule || // Style sheet was created without link: true and attached, in this case we
        // won't be able to remove the CSS rule from the DOM.
        this.attached && !rule.renderable) {
          return false;
        }

        this.rules.remove(rule);

        if (this.attached && rule.renderable && this.renderer) {
          return this.renderer.deleteRule(rule.renderable);
        }

        return true;
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Deploy pure CSS string to a renderable.
       */
      ;

      _proto.deploy = function deploy() {
        if (this.renderer) this.renderer.deploy();
        this.deployed = true;
        return this;
      }
      /**
       * Update the function values with a new data.
       */
      ;

      _proto.update = function update() {
        var _this$rules;

        (_this$rules = this.rules).update.apply(_this$rules, arguments);

        return this;
      }
      /**
       * Updates a single rule.
       */
      ;

      _proto.updateOne = function updateOne(rule, data, options) {
        this.rules.updateOne(rule, data, options);
        return this;
      }
      /**
       * Convert rules to a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };

      return StyleSheet;
    }();

    var PluginsRegistry =
    /*#__PURE__*/
    function () {
      function PluginsRegistry() {
        this.plugins = {
          internal: [],
          external: []
        };
        this.registry = void 0;
      }

      var _proto = PluginsRegistry.prototype;

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
      _proto.onCreateRule = function onCreateRule(name, decl, options) {
        for (var i = 0; i < this.registry.onCreateRule.length; i++) {
          var rule = this.registry.onCreateRule[i](name, decl, options);
          if (rule) return rule;
        }

        return null;
      }
      /**
       * Call `onProcessRule` hooks.
       */
      ;

      _proto.onProcessRule = function onProcessRule(rule) {
        if (rule.isProcessed) return;
        var sheet = rule.options.sheet;

        for (var i = 0; i < this.registry.onProcessRule.length; i++) {
          this.registry.onProcessRule[i](rule, sheet);
        }

        if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
        rule.isProcessed = true;
      }
      /**
       * Call `onProcessStyle` hooks.
       */
      ;

      _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
        for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
          // $FlowFixMe[prop-missing]
          rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
        }
      }
      /**
       * Call `onProcessSheet` hooks.
       */
      ;

      _proto.onProcessSheet = function onProcessSheet(sheet) {
        for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
          this.registry.onProcessSheet[i](sheet);
        }
      }
      /**
       * Call `onUpdate` hooks.
       */
      ;

      _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
        for (var i = 0; i < this.registry.onUpdate.length; i++) {
          this.registry.onUpdate[i](data, rule, sheet, options);
        }
      }
      /**
       * Call `onChangeValue` hooks.
       */
      ;

      _proto.onChangeValue = function onChangeValue(value, prop, rule) {
        var processedValue = value;

        for (var i = 0; i < this.registry.onChangeValue.length; i++) {
          processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
        }

        return processedValue;
      }
      /**
       * Register a plugin.
       */
      ;

      _proto.use = function use(newPlugin, options) {
        if (options === void 0) {
          options = {
            queue: 'external'
          };
        }

        var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

        if (plugins.indexOf(newPlugin) !== -1) {
          return;
        }

        plugins.push(newPlugin);
        this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
          for (var name in plugin) {
            if (name in registry) {
              registry[name].push(plugin[name]);
            } else {
              process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown hook \"" + name + "\".") : void 0;
            }
          }

          return registry;
        }, {
          onCreateRule: [],
          onProcessRule: [],
          onProcessStyle: [],
          onProcessSheet: [],
          onChangeValue: [],
          onUpdate: []
        });
      };

      return PluginsRegistry;
    }();

    /**
     * Sheets registry to access them all at one place.
     */
    var SheetsRegistry =
    /*#__PURE__*/
    function () {
      function SheetsRegistry() {
        this.registry = [];
      }

      var _proto = SheetsRegistry.prototype;

      /**
       * Register a Style Sheet.
       */
      _proto.add = function add(sheet) {
        var registry = this.registry;
        var index = sheet.options.index;
        if (registry.indexOf(sheet) !== -1) return;

        if (registry.length === 0 || index >= this.index) {
          registry.push(sheet);
          return;
        } // Find a position.


        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      }
      /**
       * Reset the registry.
       */
      ;

      _proto.reset = function reset() {
        this.registry = [];
      }
      /**
       * Remove a Style Sheet.
       */
      ;

      _proto.remove = function remove(sheet) {
        var index = this.registry.indexOf(sheet);
        this.registry.splice(index, 1);
      }
      /**
       * Convert all attached sheets to a CSS string.
       */
      ;

      _proto.toString = function toString(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
            attached = _ref.attached,
            options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

        var css = '';

        for (var i = 0; i < this.registry.length; i++) {
          var sheet = this.registry[i];

          if (attached != null && sheet.attached !== attached) {
            continue;
          }

          if (css) css += '\n';
          css += sheet.toString(options);
        }

        return css;
      };

      _createClass(SheetsRegistry, [{
        key: "index",

        /**
         * Current highest index number.
         */
        get: function get() {
          return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
        }
      }]);

      return SheetsRegistry;
    }();

    /**
     * This is a global sheets registry. Only DomRenderer will add sheets to it.
     * On the server one should use an own SheetsRegistry instance and add the
     * sheets to it, because you need to make sure to create a new registry for
     * each request in order to not leak sheets across requests.
     */

    var registry = new SheetsRegistry();

    /* eslint-disable */

    /**
     * Now that `globalThis` is available on most platforms
     * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
     * we check for `globalThis` first. `globalThis` is necessary for jss
     * to run in Agoric's secure version of JavaScript (SES). Under SES,
     * `globalThis` exists, but `window`, `self`, and `Function('return
     * this')()` are all undefined for security reasons.
     *
     * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
     */
    var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

    var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
    if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
    // the current version with just one short number and use it for classes generation
    // we use a counter. Also it is more accurate, because user can manually reevaluate
    // the module.

    var moduleId = globalThis$1[ns]++;

    var maxRules = 1e10;

    /**
     * Returns a function which generates unique class names based on counters.
     * When new generator function is created, rule counter is reseted.
     * We need to reset the rule counter for SSR for each request.
     */
    var createGenerateId = function createGenerateId(options) {
      if (options === void 0) {
        options = {};
      }

      var ruleCounter = 0;
      return function (rule, sheet) {
        ruleCounter += 1;

        if (ruleCounter > maxRules) {
          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
        }

        var jssId = '';
        var prefix = '';

        if (sheet) {
          if (sheet.options.classNamePrefix) {
            prefix = sheet.options.classNamePrefix;
          }

          if (sheet.options.jss.id != null) {
            jssId = String(sheet.options.jss.id);
          }
        }

        if (options.minify) {
          // Using "c" because a number can't be the first char in a class name.
          return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
        }

        return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
      };
    };

    /**
     * Cache the value from the first time a function is called.
     */
    var memoize = function memoize(fn) {
      var value;
      return function () {
        if (!value) value = fn();
        return value;
      };
    };

    /**
     * Get a style property value.
     */
    var getPropertyValue = function getPropertyValue(cssRule, prop) {
      try {
        // Support CSSTOM.
        if (cssRule.attributeStyleMap) {
          return cssRule.attributeStyleMap.get(prop);
        }

        return cssRule.style.getPropertyValue(prop);
      } catch (err) {
        // IE may throw if property is unknown.
        return '';
      }
    };

    /**
     * Set a style property.
     */
    var setProperty = function setProperty(cssRule, prop, value) {
      try {
        var cssValue = value;

        if (Array.isArray(value)) {
          cssValue = toCssValue(value, true);

          if (value[value.length - 1] === '!important') {
            cssRule.style.setProperty(prop, cssValue, 'important');
            return true;
          }
        } // Support CSSTOM.


        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.set(prop, cssValue);
        } else {
          cssRule.style.setProperty(prop, cssValue);
        }
      } catch (err) {
        // IE may throw if property is unknown.
        return false;
      }

      return true;
    };

    /**
     * Remove a style property.
     */
    var removeProperty = function removeProperty(cssRule, prop) {
      try {
        // Support CSSTOM.
        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.delete(prop);
        } else {
          cssRule.style.removeProperty(prop);
        }
      } catch (err) {
        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : void 0;
      }
    };

    /**
     * Set the selector.
     */
    var setSelector = function setSelector(cssRule, selectorText) {
      cssRule.selectorText = selectorText; // Return false if setter was not successful.
      // Currently works in chrome only.

      return cssRule.selectorText === selectorText;
    };
    /**
     * Gets the `head` element upon the first call and caches it.
     * We assume it can't be null.
     */


    var getHead = memoize(function () {
      return document.querySelector('head');
    });
    /**
     * Find attached sheet with an index higher than the passed one.
     */

    function findHigherSheet(registry, options) {
      for (var i = 0; i < registry.length; i++) {
        var sheet = registry[i];

        if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }

      return null;
    }
    /**
     * Find attached sheet with the highest index.
     */


    function findHighestSheet(registry, options) {
      for (var i = registry.length - 1; i >= 0; i--) {
        var sheet = registry[i];

        if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }

      return null;
    }
    /**
     * Find a comment with "jss" inside.
     */


    function findCommentNode(text) {
      var head = getHead();

      for (var i = 0; i < head.childNodes.length; i++) {
        var node = head.childNodes[i];

        if (node.nodeType === 8 && node.nodeValue.trim() === text) {
          return node;
        }
      }

      return null;
    }

    /**
     * Find a node before which we can insert the sheet.
     */
    function findPrevNode(options) {
      var registry$1 = registry.registry;

      if (registry$1.length > 0) {
        // Try to insert before the next higher sheet.
        var sheet = findHigherSheet(registry$1, options);

        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element
          };
        } // Otherwise insert after the last attached.


        sheet = findHighestSheet(registry$1, options);

        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element.nextSibling
          };
        }
      } // Try to find a comment placeholder if registry is empty.


      var insertionPoint = options.insertionPoint;

      if (insertionPoint && typeof insertionPoint === 'string') {
        var comment = findCommentNode(insertionPoint);

        if (comment) {
          return {
            parent: comment.parentNode,
            node: comment.nextSibling
          };
        } // If user specifies an insertion point and it can't be found in the document -
        // bad specificity issues may appear.


        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : void 0;
      }

      return false;
    }
    /**
     * Insert style element into the DOM.
     */


    function insertStyle(style, options) {
      var insertionPoint = options.insertionPoint;
      var nextNode = findPrevNode(options);

      if (nextNode !== false && nextNode.parent) {
        nextNode.parent.insertBefore(style, nextNode.node);
        return;
      } // Works with iframes and any node types.


      if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
        // https://stackoverflow.com/questions/41328728/force-casting-in-flow
        var insertionPointElement = insertionPoint;
        var parentNode = insertionPointElement.parentNode;
        if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Insertion point is not in the DOM.') : void 0;
        return;
      }

      getHead().appendChild(style);
    }
    /**
     * Read jss nonce setting from the page if the user has set it.
     */


    var getNonce = memoize(function () {
      var node = document.querySelector('meta[property="csp-nonce"]');
      return node ? node.getAttribute('content') : null;
    });

    var _insertRule = function insertRule(container, rule, index) {
      try {
        if ('insertRule' in container) {
          var c = container;
          c.insertRule(rule, index);
        } // Keyframes rule.
        else if ('appendRule' in container) {
            var _c = container;

            _c.appendRule(rule);
          }
      } catch (err) {
        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] " + err.message) : void 0;
        return false;
      }

      return container.cssRules[index];
    };

    var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
      var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

      if (index === undefined || index > maxIndex) {
        // eslint-disable-next-line no-param-reassign
        return maxIndex;
      }

      return index;
    };

    var createStyle = function createStyle() {
      var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
      // insert rules after we insert the style tag.
      // It seems to kick-off the source order specificity algorithm.

      el.textContent = '\n';
      return el;
    };

    var DomRenderer =
    /*#__PURE__*/
    function () {
      // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
      // Will be empty if link: true option is not set, because
      // it is only for use together with insertRule API.
      function DomRenderer(sheet) {
        this.getPropertyValue = getPropertyValue;
        this.setProperty = setProperty;
        this.removeProperty = removeProperty;
        this.setSelector = setSelector;
        this.element = void 0;
        this.sheet = void 0;
        this.hasInsertedRules = false;
        this.cssRules = [];
        // There is no sheet when the renderer is used from a standalone StyleRule.
        if (sheet) registry.add(sheet);
        this.sheet = sheet;

        var _ref = this.sheet ? this.sheet.options : {},
            media = _ref.media,
            meta = _ref.meta,
            element = _ref.element;

        this.element = element || createStyle();
        this.element.setAttribute('data-jss', '');
        if (media) this.element.setAttribute('media', media);
        if (meta) this.element.setAttribute('data-meta', meta);
        var nonce = getNonce();
        if (nonce) this.element.setAttribute('nonce', nonce);
      }
      /**
       * Insert style element into render tree.
       */


      var _proto = DomRenderer.prototype;

      _proto.attach = function attach() {
        // In the case the element node is external and it is already in the DOM.
        if (this.element.parentNode || !this.sheet) return;
        insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
        // most browsers create a new CSSStyleSheet, except of all IEs.

        var deployed = Boolean(this.sheet && this.sheet.deployed);

        if (this.hasInsertedRules && deployed) {
          this.hasInsertedRules = false;
          this.deploy();
        }
      }
      /**
       * Remove style element from render tree.
       */
      ;

      _proto.detach = function detach() {
        if (!this.sheet) return;
        var parentNode = this.element.parentNode;
        if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
        // Though IE will keep them and we need a consistent behavior.

        if (this.sheet.options.link) {
          this.cssRules = [];
          this.element.textContent = '\n';
        }
      }
      /**
       * Inject CSS string into element.
       */
      ;

      _proto.deploy = function deploy() {
        var sheet = this.sheet;
        if (!sheet) return;

        if (sheet.options.link) {
          this.insertRules(sheet.rules);
          return;
        }

        this.element.textContent = "\n" + sheet.toString() + "\n";
      }
      /**
       * Insert RuleList into an element.
       */
      ;

      _proto.insertRules = function insertRules(rules, nativeParent) {
        for (var i = 0; i < rules.index.length; i++) {
          this.insertRule(rules.index[i], i, nativeParent);
        }
      }
      /**
       * Insert a rule into element.
       */
      ;

      _proto.insertRule = function insertRule(rule, index, nativeParent) {
        if (nativeParent === void 0) {
          nativeParent = this.element.sheet;
        }

        if (rule.rules) {
          var parent = rule;
          var latestNativeParent = nativeParent;

          if (rule.type === 'conditional' || rule.type === 'keyframes') {
            var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


            latestNativeParent = _insertRule(nativeParent, parent.toString({
              children: false
            }), _insertionIndex);

            if (latestNativeParent === false) {
              return false;
            }

            this.refCssRule(rule, _insertionIndex, latestNativeParent);
          }

          this.insertRules(parent.rules, latestNativeParent);
          return latestNativeParent;
        }

        var ruleStr = rule.toString();
        if (!ruleStr) return false;
        var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

        var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

        if (nativeRule === false) {
          return false;
        }

        this.hasInsertedRules = true;
        this.refCssRule(rule, insertionIndex, nativeRule);
        return nativeRule;
      };

      _proto.refCssRule = function refCssRule(rule, index, cssRule) {
        rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
        // like rules inside media queries or keyframes

        if (rule.options.parent instanceof StyleSheet) {
          this.cssRules[index] = cssRule;
        }
      }
      /**
       * Delete a rule.
       */
      ;

      _proto.deleteRule = function deleteRule(cssRule) {
        var sheet = this.element.sheet;
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        sheet.deleteRule(index);
        this.cssRules.splice(index, 1);
        return true;
      }
      /**
       * Get index of a CSS Rule.
       */
      ;

      _proto.indexOf = function indexOf(cssRule) {
        return this.cssRules.indexOf(cssRule);
      }
      /**
       * Generate a new CSS rule and replace the existing one.
       *
       * Only used for some old browsers because they can't set a selector.
       */
      ;

      _proto.replaceRule = function replaceRule(cssRule, rule) {
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        this.element.sheet.deleteRule(index);
        this.cssRules.splice(index, 1);
        return this.insertRule(rule, index);
      }
      /**
       * Get all rules elements.
       */
      ;

      _proto.getRules = function getRules() {
        return this.element.sheet.cssRules;
      };

      return DomRenderer;
    }();

    var instanceCounter = 0;

    var Jss =
    /*#__PURE__*/
    function () {
      function Jss(options) {
        this.id = instanceCounter++;
        this.version = "10.6.0";
        this.plugins = new PluginsRegistry();
        this.options = {
          id: {
            minify: false
          },
          createGenerateId: createGenerateId,
          Renderer: isBrowser ? DomRenderer : null,
          plugins: []
        };
        this.generateId = createGenerateId({
          minify: false
        });

        for (var i = 0; i < plugins$1.length; i++) {
          this.plugins.use(plugins$1[i], {
            queue: 'internal'
          });
        }

        this.setup(options);
      }
      /**
       * Prepares various options, applies plugins.
       * Should not be used twice on the same instance, because there is no plugins
       * deduplication logic.
       */


      var _proto = Jss.prototype;

      _proto.setup = function setup(options) {
        if (options === void 0) {
          options = {};
        }

        if (options.createGenerateId) {
          this.options.createGenerateId = options.createGenerateId;
        }

        if (options.id) {
          this.options.id = _extends({}, this.options.id, options.id);
        }

        if (options.createGenerateId || options.id) {
          this.generateId = this.options.createGenerateId(this.options.id);
        }

        if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

        if ('Renderer' in options) {
          this.options.Renderer = options.Renderer;
        } // eslint-disable-next-line prefer-spread


        if (options.plugins) this.use.apply(this, options.plugins);
        return this;
      }
      /**
       * Create a Style Sheet.
       */
      ;

      _proto.createStyleSheet = function createStyleSheet(styles, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
            index = _options.index;

        if (typeof index !== 'number') {
          index = registry.index === 0 ? 0 : registry.index + 1;
        }

        var sheet = new StyleSheet(styles, _extends({}, options, {
          jss: this,
          generateId: options.generateId || this.generateId,
          insertionPoint: this.options.insertionPoint,
          Renderer: this.options.Renderer,
          index: index
        }));
        this.plugins.onProcessSheet(sheet);
        return sheet;
      }
      /**
       * Detach the Style Sheet and remove it from the registry.
       */
      ;

      _proto.removeStyleSheet = function removeStyleSheet(sheet) {
        sheet.detach();
        registry.remove(sheet);
        return this;
      }
      /**
       * Create a rule without a Style Sheet.
       * [Deprecated] will be removed in the next major version.
       */
      ;

      _proto.createRule = function createRule$1(name, style, options) {
        if (style === void 0) {
          style = {};
        }

        if (options === void 0) {
          options = {};
        }

        // Enable rule without name for inline styles.
        if (typeof name === 'object') {
          // $FlowFixMe[incompatible-call]
          return this.createRule(undefined, name, style);
        } // $FlowFixMe[incompatible-type]


        var ruleOptions = _extends({}, options, {
          name: name,
          jss: this,
          Renderer: this.options.Renderer
        });

        if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
        if (!ruleOptions.classes) ruleOptions.classes = {};
        if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

        var rule = createRule(name, style, ruleOptions);

        if (rule) this.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Register plugin. Passed function will be invoked with a rule instance.
       */
      ;

      _proto.use = function use() {
        var _this = this;

        for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
          plugins[_key] = arguments[_key];
        }

        plugins.forEach(function (plugin) {
          _this.plugins.use(plugin);
        });
        return this;
      };

      return Jss;
    }();

    /**
     * Extracts a styles object with only props that contain function values.
     */
    function getDynamicStyles(styles) {
      var to = null;

      for (var key in styles) {
        var value = styles[key];
        var type = typeof value;

        if (type === 'function') {
          if (!to) to = {};
          to[key] = value;
        } else if (type === 'object' && value !== null && !Array.isArray(value)) {
          var extracted = getDynamicStyles(value);

          if (extracted) {
            if (!to) to = {};
            to[key] = extracted;
          }
        }
      }

      return to;
    }

    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */

    /**
     * Export a constant indicating if this browser has CSSTOM support.
     * https://developers.google.com/web/updates/2018/03/cssom
     */
    var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;
    /**
     * Creates a new instance of Jss.
     */

    var create = function create(options) {
      return new Jss(options);
    };
    /**
     * A global Jss instance.
     */

    create();

    var now = Date.now();
    var fnValuesNs = "fnValues" + now;
    var fnRuleNs = "fnStyle" + ++now;

    var functionPlugin = function functionPlugin() {
      return {
        onCreateRule: function onCreateRule(name, decl, options) {
          if (typeof decl !== 'function') return null;
          var rule = createRule(name, {}, options);
          rule[fnRuleNs] = decl;
          return rule;
        },
        onProcessStyle: function onProcessStyle(style, rule) {
          // We need to extract function values from the declaration, so that we can keep core unaware of them.
          // We need to do that only once.
          // We don't need to extract functions on each style update, since this can happen only once.
          // We don't support function values inside of function rules.
          if (fnValuesNs in rule || fnRuleNs in rule) return style;
          var fnValues = {};

          for (var prop in style) {
            var value = style[prop];
            if (typeof value !== 'function') continue;
            delete style[prop];
            fnValues[prop] = value;
          } // $FlowFixMe[prop-missing]


          rule[fnValuesNs] = fnValues;
          return style;
        },
        onUpdate: function onUpdate(data, rule, sheet, options) {
          var styleRule = rule; // $FlowFixMe[prop-missing]

          var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
          // will be returned from that function.

          if (fnRule) {
            // Empty object will remove all currently defined props
            // in case function rule returns a falsy value.
            styleRule.style = fnRule(data) || {};

            if (process.env.NODE_ENV === 'development') {
              for (var prop in styleRule.style) {
                if (typeof styleRule.style[prop] === 'function') {
                  process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Function values inside function rules are not supported.') : void 0;
                  break;
                }
              }
            }
          } // $FlowFixMe[prop-missing]


          var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

          if (fnValues) {
            for (var _prop in fnValues) {
              styleRule.prop(_prop, fnValues[_prop](data), options);
            }
          }
        }
      };
    };

    var at = '@global';
    var atPrefix = '@global ';

    var GlobalContainerRule =
    /*#__PURE__*/
    function () {
      function GlobalContainerRule(key, styles, options) {
        this.type = 'global';
        this.at = at;
        this.rules = void 0;
        this.options = void 0;
        this.key = void 0;
        this.isProcessed = false;
        this.key = key;
        this.options = options;
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var selector in styles) {
          this.rules.add(selector, styles[selector]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */


      var _proto = GlobalContainerRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Create and register rule, run plugins.
       */
      ;

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        if (rule) this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto.toString = function toString() {
        return this.rules.toString();
      };

      return GlobalContainerRule;
    }();

    var GlobalPrefixedRule =
    /*#__PURE__*/
    function () {
      function GlobalPrefixedRule(key, style, options) {
        this.type = 'global';
        this.at = at;
        this.options = void 0;
        this.rule = void 0;
        this.isProcessed = false;
        this.key = void 0;
        this.key = key;
        this.options = options;
        var selector = key.substr(atPrefix.length);
        this.rule = options.jss.createRule(selector, style, _extends({}, options, {
          parent: this
        }));
      }

      var _proto2 = GlobalPrefixedRule.prototype;

      _proto2.toString = function toString(options) {
        return this.rule ? this.rule.toString(options) : '';
      };

      return GlobalPrefixedRule;
    }();

    var separatorRegExp$1 = /\s*,\s*/g;

    function addScope(selector, scope) {
      var parts = selector.split(separatorRegExp$1);
      var scoped = '';

      for (var i = 0; i < parts.length; i++) {
        scoped += scope + " " + parts[i].trim();
        if (parts[i + 1]) scoped += ', ';
      }

      return scoped;
    }

    function handleNestedGlobalContainerRule(rule, sheet) {
      var options = rule.options,
          style = rule.style;
      var rules = style ? style[at] : null;
      if (!rules) return;

      for (var name in rules) {
        sheet.addRule(name, rules[name], _extends({}, options, {
          selector: addScope(name, rule.selector)
        }));
      }

      delete style[at];
    }

    function handlePrefixedGlobalRule(rule, sheet) {
      var options = rule.options,
          style = rule.style;

      for (var prop in style) {
        if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
        var selector = addScope(prop.substr(at.length), rule.selector);
        sheet.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
        delete style[prop];
      }
    }
    /**
     * Convert nested rules to separate, remove them from original styles.
     *
     * @param {Rule} rule
     * @api public
     */


    function jssGlobal() {
      function onCreateRule(name, styles, options) {
        if (!name) return null;

        if (name === at) {
          return new GlobalContainerRule(name, styles, options);
        }

        if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
          return new GlobalPrefixedRule(name, styles, options);
        }

        var parent = options.parent;

        if (parent) {
          if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
            options.scoped = false;
          }
        }

        if (options.scoped === false) {
          options.selector = name;
        }

        return null;
      }

      function onProcessRule(rule, sheet) {
        if (rule.type !== 'style' || !sheet) return;
        handleNestedGlobalContainerRule(rule, sheet);
        handlePrefixedGlobalRule(rule, sheet);
      }

      return {
        onCreateRule: onCreateRule,
        onProcessRule: onProcessRule
      };
    }

    var separatorRegExp = /\s*,\s*/g;
    var parentRegExp = /&/g;
    var refRegExp = /\$([\w-]+)/g;
    /**
     * Convert nested rules to separate, remove them from original styles.
     *
     * @param {Rule} rule
     * @api public
     */

    function jssNested() {
      // Get a function to be used for $ref replacement.
      function getReplaceRef(container, sheet) {
        return function (match, key) {
          var rule = container.getRule(key) || sheet && sheet.getRule(key);

          if (rule) {
            rule = rule;
            return rule.selector;
          }

          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : void 0;
          return key;
        };
      }

      function replaceParentRefs(nestedProp, parentProp) {
        var parentSelectors = parentProp.split(separatorRegExp);
        var nestedSelectors = nestedProp.split(separatorRegExp);
        var result = '';

        for (var i = 0; i < parentSelectors.length; i++) {
          var parent = parentSelectors[i];

          for (var j = 0; j < nestedSelectors.length; j++) {
            var nested = nestedSelectors[j];
            if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

            result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
          }
        }

        return result;
      }

      function getOptions(rule, container, prevOptions) {
        // Options has been already created, now we only increase index.
        if (prevOptions) return _extends({}, prevOptions, {
          index: prevOptions.index + 1 // $FlowFixMe[prop-missing]

        });
        var nestingLevel = rule.options.nestingLevel;
        nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

        var options = _extends({}, rule.options, {
          nestingLevel: nestingLevel,
          index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

        });

        delete options.name;
        return options;
      }

      function onProcessStyle(style, rule, sheet) {
        if (rule.type !== 'style') return style;
        var styleRule = rule;
        var container = styleRule.options.parent;
        var options;
        var replaceRef;

        for (var prop in style) {
          var isNested = prop.indexOf('&') !== -1;
          var isNestedConditional = prop[0] === '@';
          if (!isNested && !isNestedConditional) continue;
          options = getOptions(styleRule, container, options);

          if (isNested) {
            var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
            // all nested rules within the sheet.

            if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

            selector = selector.replace(refRegExp, replaceRef);
            container.addRule(selector, style[prop], _extends({}, options, {
              selector: selector
            }));
          } else if (isNestedConditional) {
            // Place conditional right after the parent rule to ensure right ordering.
            container.addRule(prop, {}, options) // Flow expects more options but they aren't required
            // And flow doesn't know this will always be a StyleRule which has the addRule method
            // $FlowFixMe[incompatible-use]
            // $FlowFixMe[prop-missing]
            .addRule(styleRule.key, style[prop], {
              selector: styleRule.selector
            });
          }

          delete style[prop];
        }

        return style;
      }

      return {
        onProcessStyle: onProcessStyle
      };
    }

    /* eslint-disable no-var, prefer-template */
    var uppercasePattern = /[A-Z]/g;
    var msPattern = /^ms-/;
    var cache$2 = {};

    function toHyphenLower(match) {
      return '-' + match.toLowerCase()
    }

    function hyphenateStyleName(name) {
      if (cache$2.hasOwnProperty(name)) {
        return cache$2[name]
      }

      var hName = name.replace(uppercasePattern, toHyphenLower);
      return (cache$2[name] = msPattern.test(hName) ? '-' + hName : hName)
    }

    /**
     * Convert camel cased property names to dash separated.
     *
     * @param {Object} style
     * @return {Object}
     */

    function convertCase(style) {
      var converted = {};

      for (var prop in style) {
        var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
        converted[key] = style[prop];
      }

      if (style.fallbacks) {
        if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
      }

      return converted;
    }
    /**
     * Allow camel cased property names by converting them back to dasherized.
     *
     * @param {Rule} rule
     */


    function camelCase() {
      function onProcessStyle(style) {
        if (Array.isArray(style)) {
          // Handle rules like @font-face, which can have multiple styles in an array
          for (var index = 0; index < style.length; index++) {
            style[index] = convertCase(style[index]);
          }

          return style;
        }

        return convertCase(style);
      }

      function onChangeValue(value, prop, rule) {
        if (prop.indexOf('--') === 0) {
          return value;
        }

        var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

        if (prop === hyphenatedProp) return value;
        rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

        return null;
      }

      return {
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
    var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
    var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
    /**
     * Generated jss-plugin-default-unit CSS property units
     *
     * @type object
     */

    var defaultUnits = {
      // Animation properties
      'animation-delay': ms,
      'animation-duration': ms,
      // Background properties
      'background-position': px,
      'background-position-x': px,
      'background-position-y': px,
      'background-size': px,
      // Border Properties
      border: px,
      'border-bottom': px,
      'border-bottom-left-radius': px,
      'border-bottom-right-radius': px,
      'border-bottom-width': px,
      'border-left': px,
      'border-left-width': px,
      'border-radius': px,
      'border-right': px,
      'border-right-width': px,
      'border-top': px,
      'border-top-left-radius': px,
      'border-top-right-radius': px,
      'border-top-width': px,
      'border-width': px,
      'border-block': px,
      'border-block-end': px,
      'border-block-end-width': px,
      'border-block-start': px,
      'border-block-start-width': px,
      'border-block-width': px,
      'border-inline': px,
      'border-inline-end': px,
      'border-inline-end-width': px,
      'border-inline-start': px,
      'border-inline-start-width': px,
      'border-inline-width': px,
      'border-start-start-radius': px,
      'border-start-end-radius': px,
      'border-end-start-radius': px,
      'border-end-end-radius': px,
      // Margin properties
      margin: px,
      'margin-bottom': px,
      'margin-left': px,
      'margin-right': px,
      'margin-top': px,
      'margin-block': px,
      'margin-block-end': px,
      'margin-block-start': px,
      'margin-inline': px,
      'margin-inline-end': px,
      'margin-inline-start': px,
      // Padding properties
      padding: px,
      'padding-bottom': px,
      'padding-left': px,
      'padding-right': px,
      'padding-top': px,
      'padding-block': px,
      'padding-block-end': px,
      'padding-block-start': px,
      'padding-inline': px,
      'padding-inline-end': px,
      'padding-inline-start': px,
      // Mask properties
      'mask-position-x': px,
      'mask-position-y': px,
      'mask-size': px,
      // Width and height properties
      height: px,
      width: px,
      'min-height': px,
      'max-height': px,
      'min-width': px,
      'max-width': px,
      // Position properties
      bottom: px,
      left: px,
      top: px,
      right: px,
      inset: px,
      'inset-block': px,
      'inset-block-end': px,
      'inset-block-start': px,
      'inset-inline': px,
      'inset-inline-end': px,
      'inset-inline-start': px,
      // Shadow properties
      'box-shadow': px,
      'text-shadow': px,
      // Column properties
      'column-gap': px,
      'column-rule': px,
      'column-rule-width': px,
      'column-width': px,
      // Font and text properties
      'font-size': px,
      'font-size-delta': px,
      'letter-spacing': px,
      'text-decoration-thickness': px,
      'text-indent': px,
      'text-stroke': px,
      'text-stroke-width': px,
      'word-spacing': px,
      // Motion properties
      motion: px,
      'motion-offset': px,
      // Outline properties
      outline: px,
      'outline-offset': px,
      'outline-width': px,
      // Perspective properties
      perspective: px,
      'perspective-origin-x': percent,
      'perspective-origin-y': percent,
      // Transform properties
      'transform-origin': percent,
      'transform-origin-x': percent,
      'transform-origin-y': percent,
      'transform-origin-z': percent,
      // Transition properties
      'transition-delay': ms,
      'transition-duration': ms,
      // Alignment properties
      'vertical-align': px,
      'flex-basis': px,
      // Some random properties
      'shape-margin': px,
      size: px,
      gap: px,
      // Grid properties
      grid: px,
      'grid-gap': px,
      'row-gap': px,
      'grid-row-gap': px,
      'grid-column-gap': px,
      'grid-template-rows': px,
      'grid-template-columns': px,
      'grid-auto-rows': px,
      'grid-auto-columns': px,
      // Not existing properties.
      // Used to avoid issues with jss-plugin-expand integration.
      'box-shadow-x': px,
      'box-shadow-y': px,
      'box-shadow-blur': px,
      'box-shadow-spread': px,
      'font-line-height': px,
      'text-shadow-x': px,
      'text-shadow-y': px,
      'text-shadow-blur': px
    };

    /**
     * Clones the object and adds a camel cased property version.
     */
    function addCamelCasedVersion(obj) {
      var regExp = /(-[a-z])/g;

      var replace = function replace(str) {
        return str[1].toUpperCase();
      };

      var newObj = {};

      for (var _key in obj) {
        newObj[_key] = obj[_key];
        newObj[_key.replace(regExp, replace)] = obj[_key];
      }

      return newObj;
    }

    var units = addCamelCasedVersion(defaultUnits);
    /**
     * Recursive deep style passing function
     */

    function iterate(prop, value, options) {
      if (value == null) return value;

      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          value[i] = iterate(prop, value[i], options);
        }
      } else if (typeof value === 'object') {
        if (prop === 'fallbacks') {
          for (var innerProp in value) {
            value[innerProp] = iterate(innerProp, value[innerProp], options);
          }
        } else {
          for (var _innerProp in value) {
            value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
          }
        } // eslint-disable-next-line no-restricted-globals

      } else if (typeof value === 'number' && isNaN(value) === false) {
        var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

        if (unit && !(value === 0 && unit === px)) {
          return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
        }

        return value.toString();
      }

      return value;
    }
    /**
     * Add unit to numeric values.
     */


    function defaultUnit(options) {
      if (options === void 0) {
        options = {};
      }

      var camelCasedOptions = addCamelCasedVersion(options);

      function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;

        for (var prop in style) {
          style[prop] = iterate(prop, style[prop], camelCasedOptions);
        }

        return style;
      }

      function onChangeValue(value, prop) {
        return iterate(prop, value, camelCasedOptions);
      }

      return {
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    // Export javascript style and css style vendor prefixes.
    var js = '';
    var css = '';
    var vendor = '';
    var browser = '';
    var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

    if (isBrowser) {
      // Order matters. We need to check Webkit the last one because
      // other vendors use to add Webkit prefixes to some properties
      var jsCssMap = {
        Moz: '-moz-',
        ms: '-ms-',
        O: '-o-',
        Webkit: '-webkit-'
      };

      var _document$createEleme = document.createElement('p'),
          style$1 = _document$createEleme.style;

      var testProp = 'Transform';

      for (var key in jsCssMap) {
        if (key + testProp in style$1) {
          js = key;
          css = jsCssMap[key];
          break;
        }
      } // Correctly detect the Edge browser.


      if (js === 'Webkit' && 'msHyphens' in style$1) {
        js = 'ms';
        css = jsCssMap.ms;
        browser = 'edge';
      } // Correctly detect the Safari browser.


      if (js === 'Webkit' && '-apple-trailing-word' in style$1) {
        vendor = 'apple';
      }
    }
    /**
     * Vendor prefix string for the current browser.
     *
     * @type {{js: String, css: String, vendor: String, browser: String}}
     * @api public
     */


    var prefix = {
      js: js,
      css: css,
      vendor: vendor,
      browser: browser,
      isTouch: isTouch
    };

    /**
     * Test if a keyframe at-rule should be prefixed or not
     *
     * @param {String} vendor prefix string for the current browser.
     * @return {String}
     * @api public
     */

    function supportedKeyframes(key) {
      // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
      if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
      // https://caniuse.com/#search=keyframes

      if (prefix.js === 'ms') return key;
      return "@" + prefix.css + "keyframes" + key.substr(10);
    }

    // https://caniuse.com/#search=appearance

    var appearence = {
      noPrefill: ['appearance'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'appearance') return false;
        if (prefix.js === 'ms') return "-webkit-" + prop;
        return prefix.css + prop;
      }
    };

    // https://caniuse.com/#search=color-adjust

    var colorAdjust = {
      noPrefill: ['color-adjust'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'color-adjust') return false;
        if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
        return prop;
      }
    };

    var regExp = /[-\s]+(.)?/g;
    /**
     * Replaces the letter with the capital letter
     *
     * @param {String} match
     * @param {String} c
     * @return {String}
     * @api private
     */

    function toUpper(match, c) {
      return c ? c.toUpperCase() : '';
    }
    /**
     * Convert dash separated strings to camel-cased.
     *
     * @param {String} str
     * @return {String}
     * @api private
     */


    function camelize(str) {
      return str.replace(regExp, toUpper);
    }

    /**
     * Convert dash separated strings to pascal cased.
     *
     * @param {String} str
     * @return {String}
     * @api private
     */

    function pascalize(str) {
      return camelize("-" + str);
    }

    // but we can use a longhand property instead.
    // https://caniuse.com/#search=mask

    var mask = {
      noPrefill: ['mask'],
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^mask/.test(prop)) return false;

        if (prefix.js === 'Webkit') {
          var longhand = 'mask-image';

          if (camelize(longhand) in style) {
            return prop;
          }

          if (prefix.js + pascalize(longhand) in style) {
            return prefix.css + prop;
          }
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=text-orientation

    var textOrientation = {
      noPrefill: ['text-orientation'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'text-orientation') return false;

        if (prefix.vendor === 'apple' && !prefix.isTouch) {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=transform

    var transform = {
      noPrefill: ['transform'],
      supportedProperty: function supportedProperty(prop, style, options) {
        if (prop !== 'transform') return false;

        if (options.transform) {
          return prop;
        }

        return prefix.css + prop;
      }
    };

    // https://caniuse.com/#search=transition

    var transition = {
      noPrefill: ['transition'],
      supportedProperty: function supportedProperty(prop, style, options) {
        if (prop !== 'transition') return false;

        if (options.transition) {
          return prop;
        }

        return prefix.css + prop;
      }
    };

    // https://caniuse.com/#search=writing-mode

    var writingMode = {
      noPrefill: ['writing-mode'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'writing-mode') return false;

        if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=user-select

    var userSelect = {
      noPrefill: ['user-select'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'user-select') return false;

        if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=multicolumn
    // https://github.com/postcss/autoprefixer/issues/491
    // https://github.com/postcss/autoprefixer/issues/177

    var breakPropsOld = {
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^break-/.test(prop)) return false;

        if (prefix.js === 'Webkit') {
          var jsProp = "WebkitColumn" + pascalize(prop);
          return jsProp in style ? prefix.css + "column-" + prop : false;
        }

        if (prefix.js === 'Moz') {
          var _jsProp = "page" + pascalize(prop);

          return _jsProp in style ? "page-" + prop : false;
        }

        return false;
      }
    };

    // See https://github.com/postcss/autoprefixer/issues/324.

    var inlineLogicalOld = {
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^(border|margin|padding)-inline/.test(prop)) return false;
        if (prefix.js === 'Moz') return prop;
        var newProp = prop.replace('-inline', '');
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
    };

    // Camelization is required because we can't test using.
    // CSS syntax for e.g. in FF.

    var unprefixed = {
      supportedProperty: function supportedProperty(prop, style) {
        return camelize(prop) in style ? prop : false;
      }
    };

    var prefixed = {
      supportedProperty: function supportedProperty(prop, style) {
        var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

        if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

        if (prop[0] === '-' && prop[1] === '-') return prop;
        if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

        if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
        return false;
      }
    };

    // https://caniuse.com/#search=scroll-snap

    var scrollSnap = {
      supportedProperty: function supportedProperty(prop) {
        if (prop.substring(0, 11) !== 'scroll-snap') return false;

        if (prefix.js === 'ms') {
          return "" + prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=overscroll-behavior

    var overscrollBehavior = {
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'overscroll-behavior') return false;

        if (prefix.js === 'ms') {
          return prefix.css + "scroll-chaining";
        }

        return prop;
      }
    };

    var propMap = {
      'flex-grow': 'flex-positive',
      'flex-shrink': 'flex-negative',
      'flex-basis': 'flex-preferred-size',
      'justify-content': 'flex-pack',
      order: 'flex-order',
      'align-items': 'flex-align',
      'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

    }; // Support old flex spec from 2012.

    var flex2012 = {
      supportedProperty: function supportedProperty(prop, style) {
        var newProp = propMap[prop];
        if (!newProp) return false;
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
    };

    var propMap$1 = {
      flex: 'box-flex',
      'flex-grow': 'box-flex',
      'flex-direction': ['box-orient', 'box-direction'],
      order: 'box-ordinal-group',
      'align-items': 'box-align',
      'flex-flow': ['box-orient', 'box-direction'],
      'justify-content': 'box-pack'
    };
    var propKeys = Object.keys(propMap$1);

    var prefixCss = function prefixCss(p) {
      return prefix.css + p;
    }; // Support old flex spec from 2009.


    var flex2009 = {
      supportedProperty: function supportedProperty(prop, style, _ref) {
        var multiple = _ref.multiple;

        if (propKeys.indexOf(prop) > -1) {
          var newProp = propMap$1[prop];

          if (!Array.isArray(newProp)) {
            return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
          }

          if (!multiple) return false;

          for (var i = 0; i < newProp.length; i++) {
            if (!(prefix.js + pascalize(newProp[0]) in style)) {
              return false;
            }
          }

          return newProp.map(prefixCss);
        }

        return false;
      }
    };

    // plugins = [
    //   ...plugins,
    //    breakPropsOld,
    //    inlineLogicalOld,
    //    unprefixed,
    //    prefixed,
    //    scrollSnap,
    //    flex2012,
    //    flex2009
    // ]
    // Plugins without 'noPrefill' value, going last.
    // 'flex-*' plugins should be at the bottom.
    // 'flex2009' going after 'flex2012'.
    // 'prefixed' going after 'unprefixed'

    var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
    var propertyDetectors = plugins.filter(function (p) {
      return p.supportedProperty;
    }).map(function (p) {
      return p.supportedProperty;
    });
    var noPrefill = plugins.filter(function (p) {
      return p.noPrefill;
    }).reduce(function (a, p) {
      a.push.apply(a, _toConsumableArray(p.noPrefill));
      return a;
    }, []);

    var el;
    var cache = {};

    if (isBrowser) {
      el = document.createElement('p'); // We test every property on vendor prefix requirement.
      // Once tested, result is cached. It gives us up to 70% perf boost.
      // http://jsperf.com/element-style-object-access-vs-plain-object
      //
      // Prefill cache with known css properties to reduce amount of
      // properties we need to feature test at runtime.
      // http://davidwalsh.name/vendor-prefix

      var computed = window.getComputedStyle(document.documentElement, '');

      for (var key$1 in computed) {
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
      } // Properties that cannot be correctly detected using the
      // cache prefill method.


      noPrefill.forEach(function (x) {
        return delete cache[x];
      });
    }
    /**
     * Test if a property is supported, returns supported property with vendor
     * prefix if required. Returns `false` if not supported.
     *
     * @param {String} prop dash separated
     * @param {Object} [options]
     * @return {String|Boolean}
     * @api public
     */


    function supportedProperty(prop, options) {
      if (options === void 0) {
        options = {};
      }

      // For server-side rendering.
      if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

      if (process.env.NODE_ENV !== 'benchmark' && cache[prop] != null) {
        return cache[prop];
      } // Check if 'transition' or 'transform' natively supported in browser.


      if (prop === 'transition' || prop === 'transform') {
        options[prop] = prop in el.style;
      } // Find a plugin for current prefix property.


      for (var i = 0; i < propertyDetectors.length; i++) {
        cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

        if (cache[prop]) break;
      } // Reset styles for current property.
      // Firefox can even throw an error for invalid properties, e.g., "0".


      try {
        el.style[prop] = '';
      } catch (err) {
        return false;
      }

      return cache[prop];
    }

    var cache$1 = {};
    var transitionProperties = {
      transition: 1,
      'transition-property': 1,
      '-webkit-transition': 1,
      '-webkit-transition-property': 1
    };
    var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
    var el$1;
    /**
     * Returns prefixed value transition/transform if needed.
     *
     * @param {String} match
     * @param {String} p1
     * @param {String} p2
     * @return {String}
     * @api private
     */

    function prefixTransitionCallback(match, p1, p2) {
      if (p1 === 'var') return 'var';
      if (p1 === 'all') return 'all';
      if (p2 === 'all') return ', all';
      var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
      if (!prefixedValue) return p1 || p2;
      return prefixedValue;
    }

    if (isBrowser) el$1 = document.createElement('p');
    /**
     * Returns prefixed value if needed. Returns `false` if value is not supported.
     *
     * @param {String} property
     * @param {String} value
     * @return {String|Boolean}
     * @api public
     */

    function supportedValue(property, value) {
      // For server-side rendering.
      var prefixedValue = value;
      if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
      // We want only prefixable values here.
      // eslint-disable-next-line no-restricted-globals

      if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
        return prefixedValue;
      } // Create cache key for current value.


      var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

      if (process.env.NODE_ENV !== 'benchmark' && cache$1[cacheKey] != null) {
        return cache$1[cacheKey];
      } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


      try {
        // Test value as it is.
        el$1.style[property] = prefixedValue;
      } catch (err) {
        // Return false if value not supported.
        cache$1[cacheKey] = false;
        return false;
      } // If 'transition' or 'transition-property' property.


      if (transitionProperties[property]) {
        prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
      } else if (el$1.style[property] === '') {
        // Value with a vendor prefix.
        prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

        if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

        el$1.style[property] = prefixedValue; // Return false if value not supported.

        if (el$1.style[property] === '') {
          cache$1[cacheKey] = false;
          return false;
        }
      } // Reset styles for current property.


      el$1.style[property] = ''; // Write current value to cache.

      cache$1[cacheKey] = prefixedValue;
      return cache$1[cacheKey];
    }

    /**
     * Add vendor prefix to a property name when needed.
     *
     * @api public
     */

    function jssVendorPrefixer() {
      function onProcessRule(rule) {
        if (rule.type === 'keyframes') {
          var atRule = rule;
          atRule.at = supportedKeyframes(atRule.at);
        }
      }

      function prefixStyle(style) {
        for (var prop in style) {
          var value = style[prop];

          if (prop === 'fallbacks' && Array.isArray(value)) {
            style[prop] = value.map(prefixStyle);
            continue;
          }

          var changeProp = false;
          var supportedProp = supportedProperty(prop);
          if (supportedProp && supportedProp !== prop) changeProp = true;
          var changeValue = false;
          var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
          if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

          if (changeProp || changeValue) {
            if (changeProp) delete style[prop];
            style[supportedProp || prop] = supportedValue$1 || value;
          }
        }

        return style;
      }

      function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;
        return prefixStyle(style);
      }

      function onChangeValue(value, prop) {
        return supportedValue(prop, toCssValue(value)) || value;
      }

      return {
        onProcessRule: onProcessRule,
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    /**
     * Sort props by length.
     */
    function jssPropsSort() {
      var sort = function sort(prop0, prop1) {
        if (prop0.length === prop1.length) {
          return prop0 > prop1 ? 1 : -1;
        }

        return prop0.length - prop1.length;
      };

      return {
        onProcessStyle: function onProcessStyle(style, rule) {
          if (rule.type !== 'style') return style;
          var newStyle = {};
          var props = Object.keys(style).sort(sort);

          for (var i = 0; i < props.length; i++) {
            newStyle[props[i]] = style[props[i]];
          }

          return newStyle;
        }
      };
    }

    function jssPreset() {
      return {
        plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
        // This way, we can get a performance boost.
        // In the documentation, we are using `autoprefixer` to solve this problem.
        typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
      };
    }

    function mergeClasses() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var baseClasses = options.baseClasses,
          newClasses = options.newClasses,
          Component = options.Component;

      if (!newClasses) {
        return baseClasses;
      }

      var nextClasses = _extends({}, baseClasses);

      if (process.env.NODE_ENV !== 'production') {
        if (typeof newClasses === 'string') {
          console.error(["Material-UI: The value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(getDisplayName(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
          return baseClasses;
        }
      }

      Object.keys(newClasses).forEach(function (key) {
        if (process.env.NODE_ENV !== 'production') {
          if (!baseClasses[key] && newClasses[key]) {
            console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
          }

          if (newClasses[key] && typeof newClasses[key] !== 'string') {
            console.error(["Material-UI: The key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
          }
        }

        if (newClasses[key]) {
          nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
        }
      });
      return nextClasses;
    }

    // Used https://github.com/thinkloop/multi-key-cache as inspiration
    var multiKeyStore = {
      set: function set(cache, key1, key2, value) {
        var subCache = cache.get(key1);

        if (!subCache) {
          subCache = new Map();
          cache.set(key1, subCache);
        }

        subCache.set(key2, value);
      },
      get: function get(cache, key1, key2) {
        var subCache = cache.get(key1);
        return subCache ? subCache.get(key2) : undefined;
      },
      delete: function _delete(cache, key1, key2) {
        var subCache = cache.get(key1);
        subCache.delete(key2);
      }
    };

    var ThemeContext = React__default['default'].createContext(null);

    if (process.env.NODE_ENV !== 'production') {
      ThemeContext.displayName = 'ThemeContext';
    }

    function useTheme() {
      var theme = React__default['default'].useContext(ThemeContext);

      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React__default['default'].useDebugValue(theme);
      }

      return theme;
    }

    var jss = create(jssPreset()); // Use a singleton or the provided one by the context.
    //
    // The counter-based approach doesn't tolerate any mistake.
    // It's much safer to use the same counter everywhere.

    var generateClassName = createGenerateClassName(); // Exported for test purposes

    var sheetsManager = new Map();
    var defaultOptions = {
      disableGeneration: false,
      generateClassName: generateClassName,
      jss: jss,
      sheetsCache: null,
      sheetsManager: sheetsManager,
      sheetsRegistry: null
    };
    var StylesContext = React__default['default'].createContext(defaultOptions);

    if (process.env.NODE_ENV !== 'production') {
      StylesContext.displayName = 'StylesContext';
    }

    var injectFirstNode;
    function StylesProvider(props) {
      var children = props.children,
          _props$injectFirst = props.injectFirst,
          injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
          _props$disableGenerat = props.disableGeneration,
          disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
          localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);

      var outerOptions = React__default['default'].useContext(StylesContext);

      var context = _extends({}, outerOptions, {
        disableGeneration: disableGeneration
      }, localOptions);

      if (process.env.NODE_ENV !== 'production') {
        if (typeof window === 'undefined' && !context.sheetsManager) {
          console.error('Material-UI: You need to use the ServerStyleSheets API when rendering on the server.');
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        if (context.jss.options.insertionPoint && injectFirst) {
          console.error('Material-UI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        if (injectFirst && localOptions.jss) {
          console.error('Material-UI: You cannot use the jss and injectFirst props at the same time.');
        }
      }

      if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
        if (!injectFirstNode) {
          var head = document.head;
          injectFirstNode = document.createComment('mui-inject-first');
          head.insertBefore(injectFirstNode, head.firstChild);
        }

        context.jss = create({
          plugins: jssPreset().plugins,
          insertionPoint: injectFirstNode
        });
      }

      return /*#__PURE__*/React__default['default'].createElement(StylesContext.Provider, {
        value: context
      }, children);
    }
    process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = {
      /**
       * Your component tree.
       */
      children: propTypes.node.isRequired,

      /**
       * You can disable the generation of the styles with this option.
       * It can be useful when traversing the React tree outside of the HTML
       * rendering step on the server.
       * Let's say you are using react-apollo to extract all
       * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
       */
      disableGeneration: propTypes.bool,

      /**
       * JSS's class name generator.
       */
      generateClassName: propTypes.func,

      /**
       * By default, the styles are injected last in the <head> element of the page.
       * As a result, they gain more specificity than any other style sheet.
       * If you want to override Material-UI's styles, set this prop.
       */
      injectFirst: propTypes.bool,

      /**
       * JSS's instance.
       */
      jss: propTypes.object,

      /**
       * @ignore
       */
      serverGenerateClassName: propTypes.func,

      /**
       * @ignore
       *
       * Beta feature.
       *
       * Cache for the sheets.
       */
      sheetsCache: propTypes.object,

      /**
       * @ignore
       *
       * The sheetsManager is used to deduplicate style sheet injection in the page.
       * It's deduplicating using the (theme, styles) couple.
       * On the server, you should provide a new instance for each request.
       */
      sheetsManager: propTypes.object,

      /**
       * @ignore
       *
       * Collect the sheets.
       */
      sheetsRegistry: propTypes.object
    } : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = exactProp(StylesProvider.propTypes) : void 0;
    }

    /* eslint-disable import/prefer-default-export */
    // Global index counter to preserve source order.
    // We create the style sheet during the creation of the component,
    // children are handled after the parents, so the order of style elements would be parent->child.
    // It is a problem though when a parent passes a className
    // which needs to override any child's styles.
    // StyleSheet of the child has a higher specificity, because of the source order.
    // So our solution is to render sheets them in the reverse order child->sheet, so
    // that parent has a higher specificity.
    var indexCounter = -1e9;
    function increment() {
      indexCounter += 1;

      if (process.env.NODE_ENV !== 'production') {
        if (indexCounter >= 0) {
          console.warn(['Material-UI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
        }
      }

      return indexCounter;
    }

    // We use the same empty object to ref count the styles that don't need a theme object.
    var noopTheme = {};

    function getStylesCreator(stylesOrCreator) {
      var themingEnabled = typeof stylesOrCreator === 'function';

      if (process.env.NODE_ENV !== 'production') {
        if (_typeof$1(stylesOrCreator) !== 'object' && !themingEnabled) {
          console.error(['Material-UI: The `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
        }
      }

      return {
        create: function create(theme, name) {
          var styles;

          try {
            styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
          } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
              if (themingEnabled === true && theme === noopTheme) {
                // TODO: prepend error message/name instead
                console.error(['Material-UI: The `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
              }
            }

            throw err;
          }

          if (!name || !theme.overrides || !theme.overrides[name]) {
            return styles;
          }

          var overrides = theme.overrides[name];

          var stylesWithOverrides = _extends({}, styles);

          Object.keys(overrides).forEach(function (key) {
            if (process.env.NODE_ENV !== 'production') {
              if (!stylesWithOverrides[key]) {
                console.warn(['Material-UI: You are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
              }
            }

            stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
          });
          return stylesWithOverrides;
        },
        options: {}
      };
    }

    function getClasses(_ref, classes, Component) {
      var state = _ref.state,
          stylesOptions = _ref.stylesOptions;

      if (stylesOptions.disableGeneration) {
        return classes || {};
      }

      if (!state.cacheClasses) {
        state.cacheClasses = {
          // Cache for the finalized classes value.
          value: null,
          // Cache for the last used classes prop pointer.
          lastProp: null,
          // Cache for the last used rendered classes pointer.
          lastJSS: {}
        };
      } // Tracks if either the rendered classes or classes prop has changed,
      // requiring the generation of a new finalized classes object.


      var generate = false;

      if (state.classes !== state.cacheClasses.lastJSS) {
        state.cacheClasses.lastJSS = state.classes;
        generate = true;
      }

      if (classes !== state.cacheClasses.lastProp) {
        state.cacheClasses.lastProp = classes;
        generate = true;
      }

      if (generate) {
        state.cacheClasses.value = mergeClasses({
          baseClasses: state.cacheClasses.lastJSS,
          newClasses: classes,
          Component: Component
        });
      }

      return state.cacheClasses.value;
    }

    function attach(_ref2, props) {
      var state = _ref2.state,
          theme = _ref2.theme,
          stylesOptions = _ref2.stylesOptions,
          stylesCreator = _ref2.stylesCreator,
          name = _ref2.name;

      if (stylesOptions.disableGeneration) {
        return;
      }

      var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

      if (!sheetManager) {
        sheetManager = {
          refs: 0,
          staticSheet: null,
          dynamicStyles: null
        };
        multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
      }

      var options = _extends({}, stylesCreator.options, stylesOptions, {
        theme: theme,
        flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
      });

      options.generateId = options.serverGenerateClassName || options.generateClassName;
      var sheetsRegistry = stylesOptions.sheetsRegistry;

      if (sheetManager.refs === 0) {
        var staticSheet;

        if (stylesOptions.sheetsCache) {
          staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
        }

        var styles = stylesCreator.create(theme, name);

        if (!staticSheet) {
          staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
            link: false
          }, options));
          staticSheet.attach();

          if (stylesOptions.sheetsCache) {
            multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
          }
        }

        if (sheetsRegistry) {
          sheetsRegistry.add(staticSheet);
        }

        sheetManager.staticSheet = staticSheet;
        sheetManager.dynamicStyles = getDynamicStyles(styles);
      }

      if (sheetManager.dynamicStyles) {
        var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
          link: true
        }, options));
        dynamicSheet.update(props);
        dynamicSheet.attach();
        state.dynamicSheet = dynamicSheet;
        state.classes = mergeClasses({
          baseClasses: sheetManager.staticSheet.classes,
          newClasses: dynamicSheet.classes
        });

        if (sheetsRegistry) {
          sheetsRegistry.add(dynamicSheet);
        }
      } else {
        state.classes = sheetManager.staticSheet.classes;
      }

      sheetManager.refs += 1;
    }

    function update(_ref3, props) {
      var state = _ref3.state;

      if (state.dynamicSheet) {
        state.dynamicSheet.update(props);
      }
    }

    function detach(_ref4) {
      var state = _ref4.state,
          theme = _ref4.theme,
          stylesOptions = _ref4.stylesOptions,
          stylesCreator = _ref4.stylesCreator;

      if (stylesOptions.disableGeneration) {
        return;
      }

      var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
      sheetManager.refs -= 1;
      var sheetsRegistry = stylesOptions.sheetsRegistry;

      if (sheetManager.refs === 0) {
        multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
        stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

        if (sheetsRegistry) {
          sheetsRegistry.remove(sheetManager.staticSheet);
        }
      }

      if (state.dynamicSheet) {
        stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

        if (sheetsRegistry) {
          sheetsRegistry.remove(state.dynamicSheet);
        }
      }
    }

    function useSynchronousEffect(func, values) {
      var key = React__default['default'].useRef([]);
      var output; // Store "generation" key. Just returns a new object every time

      var currentKey = React__default['default'].useMemo(function () {
        return {};
      }, values); // eslint-disable-line react-hooks/exhaustive-deps
      // "the first render", or "memo dropped the value"

      if (key.current !== currentKey) {
        key.current = currentKey;
        output = func();
      }

      React__default['default'].useEffect(function () {
        return function () {
          if (output) {
            output();
          }
        };
      }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
      );
    }

    function makeStyles$1(stylesOrCreator) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var name = options.name,
          classNamePrefixOption = options.classNamePrefix,
          Component = options.Component,
          _options$defaultTheme = options.defaultTheme,
          defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
          stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

      var stylesCreator = getStylesCreator(stylesOrCreator);
      var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
      stylesCreator.options = {
        index: increment(),
        name: name,
        meta: classNamePrefix,
        classNamePrefix: classNamePrefix
      };

      var useStyles = function useStyles() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var theme = useTheme() || defaultTheme;

        var stylesOptions = _extends({}, React__default['default'].useContext(StylesContext), stylesOptions2);

        var instance = React__default['default'].useRef();
        var shouldUpdate = React__default['default'].useRef();
        useSynchronousEffect(function () {
          var current = {
            name: name,
            state: {},
            stylesCreator: stylesCreator,
            stylesOptions: stylesOptions,
            theme: theme
          };
          attach(current, props);
          shouldUpdate.current = false;
          instance.current = current;
          return function () {
            detach(current);
          };
        }, [theme, stylesCreator]);
        React__default['default'].useEffect(function () {
          if (shouldUpdate.current) {
            update(instance.current, props);
          }

          shouldUpdate.current = true;
        });
        var classes = getClasses(instance.current, props.classes, Component);

        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          React__default['default'].useDebugValue(classes);
        }

        return classes;
      };

      return useStyles;
    }

    // To remove in v5

    function createStyles(styles) {
      // warning(
      //   warnOnce,
      //   [
      //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
      //     'Please use @material-ui/styles/createStyles',
      //   ].join('\n'),
      // );
      // warnOnce = true;
      return createStyles$1(styles);
    }

    var defaultTheme = createMuiTheme();

    function makeStyles(stylesOrCreator) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return makeStyles$1(stylesOrCreator, _extends({
        defaultTheme: defaultTheme
      }, options));
    }

    var style = makeStyles(function (theme) {
        return createStyles({
            root: {
                userSelect: "none",
                width: "1em",
                height: "1em",
                display: "inline-block",
                fill: "currentColor",
                flexShrink: 0,
                fontSize: 24,
                transition: theme.transitions.create("fill", {
                    duration: theme.transitions.duration.shorter,
                }),
            },
        });
    });

    var SvgIcon = React.memo(function (_a) {
        var className = _a.className, id = _a.id, children = _a.children, SvgProps = __rest(_a, ["className", "id", "children"]);
        var classes = style();
        return (React__default['default'].createElement("svg", __assign({ className: clsx(classes.root, className), id: id, width: "24", height: "24", viewBox: "0 0 24 24" }, SvgProps), children));
    });

    var ArrowDown = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-arrow-down" },
            React__default['default'].createElement("path", { d: "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" })));
    };

    var ArrowLeftIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-chevron-left" },
            React__default['default'].createElement("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" })));
    };

    var ArrowRightIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-chevron-right" },
            React__default['default'].createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })));
    };

    var ArrowUp = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-arrow-up" },
            React__default['default'].createElement("path", { d: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" })));
    };

    var ClearIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-notification-clear-all" },
            React__default['default'].createElement("path", { d: "M5,13H19V11H5M3,17H17V15H3M7,7V9H21V7" })));
    };

    var CloseIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-close" },
            React__default['default'].createElement("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }),
            " "));
    };

    var DividerIcon = function (_a) {
        var className = _a.className, rest = __rest(_a, ["className"]);
        return (React__default['default'].createElement(SvgIcon, __assign({ className: className, id: "mdi-dots-vertical" }, rest),
            React__default['default'].createElement("path", { d: "M11 24V5h2v24z" })));
    };

    var FilterIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-filter" },
            React__default['default'].createElement("path", { d: "M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" })));
    };

    var GaugeIcon = function (_a) {
        var className = _a.className, style = _a.style;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-gauge", style: style },
            React__default['default'].createElement("path", { d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z" })));
    };

    var MoreVert = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-dots-vertical" },
            React__default['default'].createElement("path", { d: "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" })));
    };

    var NextIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-skip-next" },
            React__default['default'].createElement("path", { d: "M16,18H18V6H16M6,18L14.5,12L6,6V18Z" })));
    };

    var PauseIcon = function (_a) {
        var className = _a.className, style = _a.style;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-pause", style: style },
            React__default['default'].createElement("path", { d: "M14,19H18V5H14M6,19H10V5H6V19Z" })));
    };

    var PinIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-pin" },
            React__default['default'].createElement("path", { d: "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z" })));
    };

    var PlayCircleIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-play-outline" },
            React__default['default'].createElement("path", { d: "M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 22 C 6.476562 22 2 17.523438 2 12 C 2 6.476562 6.476562 2 12 2 C 17.523438 2 22 6.476562 22 12 C 22 17.523438 17.523438 22 12 22 Z M 12 22 " }),
            React__default['default'].createElement("path", { d: "M 17.601562 11.199219 L 9.601562 5.199219 C 8.941406 4.707031 8 5.175781 8 6 L 8 18 C 8 18.824219 8.941406 19.292969 9.601562 18.800781 L 17.601562 12.800781 C 18.132812 12.398438 18.132812 11.601562 17.601562 11.199219 Z M 10 16 L 10 8 L 15.332031 12 Z M 10 16 " })));
    };

    var PlayIcon = function (_a) {
        var className = _a.className, style = _a.style;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-play", style: style },
            React__default['default'].createElement("path", { d: "M8,5.14V19.14L19,12.14L8,5.14Z" })));
    };

    var PlayReverseIcon = function (_a) {
        var className = _a.className, style = _a.style;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-step-backward-2", style: style },
            React__default['default'].createElement("path", { d: "M17,5H14V19H17V5M12,5L1,12L12,19V5M22,5H19V19H22V5Z" })));
    };

    var PreviousIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-skip-previous" },
            React__default['default'].createElement("path", { d: "M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" })));
    };

    var SearchIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-database-search" },
            React__default['default'].createElement("path", { d: "M18.68,12.32C16.92,10.56 14.07,10.57 12.32,12.33C10.56,14.09 10.56,16.94 12.32,18.69C13.81,20.17 16.11,20.43 17.89,19.32L21,22.39L22.39,21L19.3,17.89C20.43,16.12 20.17,13.8 18.68,12.32M17.27,17.27C16.29,18.25 14.71,18.24 13.73,17.27C12.76,16.29 12.76,14.71 13.74,13.73C14.71,12.76 16.29,12.76 17.27,13.73C18.24,14.71 18.24,16.29 17.27,17.27M10.9,20.1C10.25,19.44 9.74,18.65 9.42,17.78C6.27,17.25 4,15.76 4,14V17C4,19.21 7.58,21 12,21V21C11.6,20.74 11.23,20.44 10.9,20.1M4,9V12C4,13.68 6.07,15.12 9,15.7C9,15.63 9,15.57 9,15.5C9,14.57 9.2,13.65 9.58,12.81C6.34,12.3 4,10.79 4,9M12,3C7.58,3 4,4.79 4,7C4,9 7,10.68 10.85,11H10.9C12.1,9.74 13.76,9 15.5,9C16.41,9 17.31,9.19 18.14,9.56C19.17,9.09 19.87,8.12 20,7C20,4.79 16.42,3 12,3Z" }),
            " "));
    };

    var SearchTableIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-table-search" },
            React__default['default'].createElement("path", { d: "M19.3,17.89C20.62,15.79 20,13 17.89,11.68C15.79,10.36 13,11 11.68,13.09C10.36,15.2 11,18 13.09,19.3C14.56,20.22 16.42,20.22 17.89,19.3L21,22.39L22.39,21L19.3,17.89M17.3,17.27C16.32,18.25 14.74,18.24 13.76,17.27C12.79,16.29 12.79,14.71 13.77,13.73C14.74,12.76 16.32,12.76 17.3,13.73C18.26,14.72 18.25,16.3 17.27,17.27H17.3M19,4H5A2,2 0 0,0 3,6V18A2,2 0 0,0 5,20H10.81C10.25,19.42 9.8,18.74 9.5,18H5V14H9.18C9.34,13.29 9.61,12.61 10,12H5V8H11V10.81C11.58,10.25 12.26,9.8 13,9.5V8H19V10C19.4,10.25 19.77,10.55 20.1,10.88C20.44,11.22 20.74,11.59 21,12V6A2,2 0 0,0 19,4Z" })));
    };

    var TrashIcon = function (_a) {
        var className = _a.className;
        return (React__default['default'].createElement(SvgIcon, { className: className, id: "mdi-trash-can-outline" },
            React__default['default'].createElement("path", { d: "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" }),
            " "));
    };

    exports.ArrowDownIcon = ArrowDown;
    exports.ArrowLeftIcon = ArrowLeftIcon;
    exports.ArrowRightIcon = ArrowRightIcon;
    exports.ArrowUpIcon = ArrowUp;
    exports.ClearIcon = ClearIcon;
    exports.CloseIcon = CloseIcon;
    exports.DividerIcon = DividerIcon;
    exports.FilterIcon = FilterIcon;
    exports.GaugeIcon = GaugeIcon;
    exports.MoreVertIcon = MoreVert;
    exports.NextIcon = NextIcon;
    exports.PauseIcon = PauseIcon;
    exports.PinIcon = PinIcon;
    exports.PlayCircleIcon = PlayCircleIcon;
    exports.PlayIcon = PlayIcon;
    exports.PlayReverseIcon = PlayReverseIcon;
    exports.PreviousIcon = PreviousIcon;
    exports.SearchIcon = SearchIcon;
    exports.SearchTableIcon = SearchTableIcon;
    exports.SvgIcon = SvgIcon;
    exports.TrashIcon = TrashIcon;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
