webpackJsonp([3],{

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsConstantsJs = __webpack_require__(220);

	var _utilsConstantsJs2 = _interopRequireDefault(_utilsConstantsJs);

	var Dispatcher = __webpack_require__(222).Dispatcher;
	var assign = __webpack_require__(225);

	var AppDispatcher = assign(new Dispatcher(), {
	    handleServerAction: function performServerAction(action) {
	        var payload = {
	            source: PayloadSources.SERVER_ACTION,
	            action: action
	        };
	        this.dispatch(payload);
	    },

	    handleViewAction: function performViewAction(action) {
	        var payload = {
	            source: PayloadSources.VIEW_ACTION,
	            action: action
	        };
	        this.dispatch(payload);
	    },

	    showTest: function showTest() {
	        console.log('dispatcher working');
	    }
	});

	exports['default'] = AppDispatcher;
	module.exports = exports['default'];

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var keyMirror = __webpack_require__(221);

	var Constants = {
	    Pages: keyMirror({
	        Login: null,
	        Signup: null,
	        Chat: null
	    }),
	    PayloadSources: keyMirror({
	        SERVER_ACTION: null,
	        VIEW_ACTION: null
	    }),
	    ActionTypes: keyMirror({
	        PAGE_CHANGE: null
	    })
	};
	exports.Constants = Constants;

/***/ },

/***/ 221:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },

/***/ 225:
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/15.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(215);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _dispatcherAppDispatcherJs = __webpack_require__(219);

	var _dispatcherAppDispatcherJs2 = _interopRequireDefault(_dispatcherAppDispatcherJs);

	var Signup = (function (_React$Component) {
	    _inherits(Signup, _React$Component);

	    function Signup() {
	        _classCallCheck(this, Signup);

	        _get(Object.getPrototypeOf(Signup.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Signup, [{
	        key: 'render',
	        value: function render() {
	            _dispatcherAppDispatcherJs2['default'].showTest();

	            return _react2['default'].createElement(
	                'div',
	                { className: 'container login-body' },
	                _react2['default'].createElement(
	                    'form',
	                    { className: 'form-signin' },
	                    _react2['default'].createElement(
	                        'h2',
	                        { className: 'form-signin-heading' },
	                        'ChatChat'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'login-wrap' },
	                        _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: 'UserName', autofocus: true, name: 'username' }),
	                        _react2['default'].createElement('input', { type: 'password', className: 'form-control', placeholder: 'Password', name: 'password' }),
	                        _react2['default'].createElement(
	                            'button',
	                            { className: 'btn btn-lg btn-login btn-block', type: 'submit' },
	                            'Sign Up'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Signup;
	})(_react2['default'].Component);

	exports['default'] = Signup;
	module.exports = exports['default'];

/***/ }

});