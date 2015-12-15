webpackJsonp([3],{

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/8.
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

	var _reactDom = __webpack_require__(219);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(158);

	var _reactRedux = __webpack_require__(220);

	var _actions = __webpack_require__(262);

	var Login = (function (_React$Component) {
	    _inherits(Login, _React$Component);

	    function Login() {
	        _classCallCheck(this, Login);

	        _get(Object.getPrototypeOf(Login.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Login, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._showError();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._showError();
	        }
	    }, {
	        key: '_showError',
	        value: function _showError() {
	            if (this.props.loginError != null) {
	                this.refs.password.focus();
	            }
	        }
	    }, {
	        key: 'doLogin',
	        value: function doLogin() {
	            var username = this.refs.username.value;
	            var password = this.refs.password.value;
	            this.props.dispatch((0, _actions.login)(username, password));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'form-group' },
	                            _react2['default'].createElement('input', { ref: 'username',
	                                type: 'text',
	                                className: 'form-control',
	                                placeholder: 'UserName',
	                                autofocus: true,
	                                name: 'username' })
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            { className: this.props.loginError == null ? 'form-group' : 'form-group has-error' },
	                            _react2['default'].createElement('input', { ref: 'password',
	                                type: 'password',
	                                className: 'form-control',
	                                placeholder: 'Password',
	                                name: 'password' })
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { className: 'btn btn-lg btn-login btn-block btn-danger btn-shadow',
	                                type: 'button',
	                                onClick: this.doLogin.bind(this) },
	                            'Sign in'
	                        ),
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'registration' },
	                            _react2['default'].createElement(
	                                _reactRouter.Link,
	                                { to: '/signup' },
	                                'Create an account'
	                            ),
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'pull-right' },
	                                _react2['default'].createElement(
	                                    'a',
	                                    { 'data-toggle': 'modal', href: '#' },
	                                    ' Forgot Password?'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Login;
	})(_react2['default'].Component);

	var mapStateToProp = function mapStateToProp(state) {
	    return {
	        'loginError': state.auth.loginError
	    };
	};

	exports['default'] = (0, _reactRedux.connect)(mapStateToProp)(Login);
	module.exports = exports['default'];

/***/ }

});