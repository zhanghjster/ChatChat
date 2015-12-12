webpackJsonp([28,11,12,13,14,18,25,17,26],{

/***/ 260:
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(158);

	var _reactRedux = __webpack_require__(222);

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

/***/ },

/***/ 267:
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(222);

	var _actions = __webpack_require__(262);

	var Signup = (function (_React$Component) {
	    _inherits(Signup, _React$Component);

	    function Signup() {
	        _classCallCheck(this, Signup);

	        _get(Object.getPrototypeOf(Signup.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Signup, [{
	        key: 'doSignup',
	        value: function doSignup() {
	            var username = this.refs.username.value;
	            var password = this.refs.password.value;
	            this.props.dispatch((0, _actions.signup)(username, password));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var error = null;
	            if (this.props.signupError != null) {
	                error = _react2['default'].createElement(
	                    'div',
	                    { className: 'form-group has-error' },
	                    _react2['default'].createElement(
	                        'p',
	                        { className: 'help-block' },
	                        this.props.signupError
	                    )
	                );
	            }
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
	                        error,
	                        _react2['default'].createElement('input', { type: 'text',
	                            className: 'form-control',
	                            placeholder: 'UserName',
	                            ref: 'username',
	                            autofocus: true,
	                            name: 'username' }),
	                        _react2['default'].createElement('input', { type: 'password',
	                            className: 'form-control',
	                            placeholder: 'Password',
	                            ref: 'password',
	                            name: 'password' }),
	                        _react2['default'].createElement(
	                            'button',
	                            {
	                                className: 'btn btn-lg btn-login btn-block btn-danger btn-shadow',
	                                type: 'button',
	                                onClick: this.doSignup.bind(this)
	                            },
	                            'Sign Up'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Signup;
	})(_react2['default'].Component);

	var mapStateToProp = function mapStateToProp(state) {
	    return {
	        'signupError': state.auth.signupError
	    };
	};

	exports['default'] = (0, _reactRedux.connect)(mapStateToProp)(Signup);
	module.exports = exports['default'];

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	/** Created by ben on 15/11/18. **/
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(222);

	var _actions = __webpack_require__(262);

	var _utilsHistoryJs = __webpack_require__(257);

	var _utilsHistoryJs2 = _interopRequireDefault(_utilsHistoryJs);

	var _index = __webpack_require__(269);

	var _utils = __webpack_require__(265);

	var Chat = (function (_React$Component) {
	    _inherits(Chat, _React$Component);

	    function Chat() {
	        _classCallCheck(this, Chat);

	        _get(Object.getPrototypeOf(Chat.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Chat, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            (0, _utils.authCheck)(this.props.auth.isAuthenticated, '/login');
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._chatInitialize();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._chatInitialize();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            (0, _utils.authCheck)(this.props.auth.isAuthenticated, '/login');
	            this._tabChange();
	        }
	    }, {
	        key: '_chatInitialize',
	        value: function _chatInitialize() {
	            if (!this.props.chat.initialized) {
	                this._tabChange();
	                this.props.dispatch((0, _actions.chatInitialize)());
	            }
	        }
	    }, {
	        key: '_tabChange',
	        value: function _tabChange() {
	            var tabType = this.props.params.tabType;
	            var tabID = this.props.params.tabID;
	            if (!tabID) {
	                tabID = 0;
	            } // set default id to 0

	            var currentTab = this.props.chat.currentTab;
	            if (tabType && (tabType != currentTab.Type || tabID != currentTab.ID)) {
	                this.props.dispatch((0, _actions.changeTab)(tabType, tabID));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return Chat;
	})(_react2['default'].Component);

	exports['default'] = (0, _reactRedux.connect)(function (state) {
	    return { chat: state.chat, auth: state.auth };
	})(Chat);

	/*
	<div>{this.props.chat.initialized === true ? this.props.children : Loading }</div>\
	*/
	module.exports = exports['default'];

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Ben on 15/11/20.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _APP = __webpack_require__(259);

	var _APP2 = _interopRequireDefault(_APP);

	var _Home = __webpack_require__(274);

	var _Home2 = _interopRequireDefault(_Home);

	var _Chat = __webpack_require__(268);

	var _Chat2 = _interopRequireDefault(_Chat);

	var _Signup = __webpack_require__(267);

	var _Signup2 = _interopRequireDefault(_Signup);

	var _Login = __webpack_require__(260);

	var _Login2 = _interopRequireDefault(_Login);

	var _ChatHome = __webpack_require__(273);

	var _ChatHome2 = _interopRequireDefault(_ChatHome);

	var _ChatPage = __webpack_require__(434);

	var _ChatPage2 = _interopRequireDefault(_ChatPage);

	var _ChatRoom = __webpack_require__(271);

	var _ChatRoom2 = _interopRequireDefault(_ChatRoom);

	var _ChatPeer = __webpack_require__(272);

	var _ChatPeer2 = _interopRequireDefault(_ChatPeer);

	var _Loading = __webpack_require__(426);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _ChatLeftSide = __webpack_require__(427);

	var _ChatLeftSide2 = _interopRequireDefault(_ChatLeftSide);

	var _ChatMiddleSide = __webpack_require__(428);

	var _ChatMiddleSide2 = _interopRequireDefault(_ChatMiddleSide);

	var _ChatRightSide = __webpack_require__(429);

	var _ChatRightSide2 = _interopRequireDefault(_ChatRightSide);

	var _LobbyMiddle = __webpack_require__(431);

	var _LobbyMiddle2 = _interopRequireDefault(_LobbyMiddle);

	var _Logout = __webpack_require__(432);

	var _Logout2 = _interopRequireDefault(_Logout);

	var _MessageList = __webpack_require__(433);

	var _MessageList2 = _interopRequireDefault(_MessageList);

	exports.APP = _APP2['default'];
	exports.Home = _Home2['default'];
	exports.Chat = _Chat2['default'];
	exports.Signup = _Signup2['default'];
	exports.Login = _Login2['default'];
	exports.Chat = _Chat2['default'];
	exports.ChatHome = _ChatHome2['default'];
	exports.ChatPage = _ChatPage2['default'];
	exports.ChatRoom = _ChatRoom2['default'];
	exports.ChatPeer = _ChatPeer2['default'];
	exports.ChatLeftSide = _ChatLeftSide2['default'];
	exports.ChatMiddleSide = _ChatMiddleSide2['default'];
	exports.ChatRightSide = _ChatRightSide2['default'];
	exports.RoomList = _LobbyMiddle2['default'];
	exports.MessageList = _MessageList2['default'];
	exports.Loading = _Loading2['default'];

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/2.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(222);

	var _index = __webpack_require__(269);

	var _actions = __webpack_require__(262);

	var ChatPage = (function (_React$Component) {
	    _inherits(ChatPage, _React$Component);

	    function ChatPage(props) {
	        _classCallCheck(this, ChatPage);

	        _get(Object.getPrototypeOf(ChatPage.prototype), 'constructor', this).call(this, props);

	        this._middleSide = {
	            looby: _index.RoomList,
	            room: _index.MessageList
	        };
	    }

	    _createClass(ChatPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._initialize();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._initialize();
	        }
	    }, {
	        key: '_initialize',
	        value: function _initialize() {
	            var currentTab = this.props.chat.currentTab;
	            if (!currentTab.initialized) {
	                this.props.dispatch((0, _actions.tabInitialize)());
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2['default'].createElement(
	                'div',
	                { className: 'chat-room' },
	                _react2['default'].createElement(_index.ChatLeftSide, {
	                    roomList: this.props.chat.roomList,
	                    currentTab: this.props.chat.currentTab }),
	                this._middleSide[currentTab.Type],
	                _react2['default'].createElement(_index.ChatRightSide, null)
	            );
	        }
	    }]);

	    return ChatPage;
	})(_react2['default'].Component);

	exports['default'] = (0, _reactRedux.connect)(function (state) {
	    return { chat: state.chat };
	})(ChatPage);
	module.exports = exports['default'];

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/2.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var ChatRoom = (function (_React$Component) {
	    _inherits(ChatRoom, _React$Component);

	    function ChatRoom() {
	        _classCallCheck(this, ChatRoom);

	        _get(Object.getPrototypeOf(ChatRoom.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ChatRoom, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._initialize();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._initialize();
	        }
	    }, {
	        key: '_initialize',
	        value: function _initialize() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                'Room'
	            );
	        }
	    }]);

	    return ChatRoom;
	})(_react2['default'].Component);

	exports['default'] = ChatRoom;
	module.exports = exports['default'];

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/2.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var ChatPeer = (function (_React$Component) {
	    _inherits(ChatPeer, _React$Component);

	    function ChatPeer() {
	        _classCallCheck(this, ChatPeer);

	        _get(Object.getPrototypeOf(ChatPeer.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ChatPeer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._initialize();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._initialize();
	        }
	    }, {
	        key: '_initialize',
	        value: function _initialize() {}
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2['default'].createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return ChatPeer;
	})(_react2['default'].Component);

	exports['default'] = ChatPeer;
	module.exports = exports['default'];

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/2.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var ChatHome = (function (_React$Component) {
	    _inherits(ChatHome, _React$Component);

	    function ChatHome() {
	        _classCallCheck(this, ChatHome);

	        _get(Object.getPrototypeOf(ChatHome.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ChatHome, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'chat-room' },
	                _react2['default'].createElement(
	                    'aside',
	                    { className: 'left-side col-lg-2' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'user-head' },
	                        _react2['default'].createElement('i', { className: 'fa fa-comments-o' }),
	                        _react2['default'].createElement(
	                            'h3',
	                            null,
	                            'ChatChat'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'aside',
	                    { className: 'mid-side col-lg-8' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'chat-room-head' },
	                        _react2['default'].createElement(
	                            'form',
	                            { action: '#', className: 'pull-right position' },
	                            _react2['default'].createElement('input', { type: 'text', placeholder: 'Search', className: 'form-control search-btn ' })
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'aside',
	                    { className: 'right-side col-lg-2' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'user-head' },
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#', className: 'chat-tools btn-success' },
	                            _react2['default'].createElement('i', { className: 'fa fa-cog' }),
	                            ' '
	                        ),
	                        _react2['default'].createElement(
	                            'a',
	                            { href: '#', className: 'chat-tools btn-key' },
	                            _react2['default'].createElement('i', { className: 'fa fa-key' }),
	                            ' '
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ChatHome;
	})(_react2['default'].Component);

	exports['default'] = ChatHome;
	module.exports = exports['default'];

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Ben on 15/11/20.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(265);

	var _reactRedux = __webpack_require__(222);

	var Home = (function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home() {
	        _classCallCheck(this, Home);

	        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).apply(this, arguments);
	    }

	    _createClass(Home, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            (0, _utils.authCheck)(this.props.auth.isAuthenticated, "/login", "/chat");
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps() {
	            (0, _utils.authCheck)(this.props.auth.isAuthenticated, "/login", "/chat");
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement("div", null);
	        }
	    }]);

	    return Home;
	})(_react2["default"].Component);

	exports["default"] = (0, _reactRedux.connect)(function (state) {
	    return { auth: state.auth };
	})(Home);
	module.exports = exports["default"];

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/3.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var Loading = (function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading() {
	        _classCallCheck(this, Loading);

	        _get(Object.getPrototypeOf(Loading.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'container' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'chat-loading' },
	                    _react2['default'].createElement('img', { src: '/img/loader.gif' })
	                )
	            );
	        }
	    }]);

	    return Loading;
	})(_react2['default'].Component);

	exports.Loading = Loading;

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/27.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(158);

	var ChatLeftSide = (function (_React$Component) {
	    _inherits(ChatLeftSide, _React$Component);

	    function ChatLeftSide() {
	        _classCallCheck(this, ChatLeftSide);

	        _get(Object.getPrototypeOf(ChatLeftSide.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ChatLeftSide, [{
	        key: 'render',
	        value: function render() {
	            var currentTab = this.props.currentTab;
	            var roomList = this.props.roomList;

	            var roomItems = roomList.map(function (room) {
	                return _react2['default'].createElement(
	                    'li',
	                    { className: room.ID === currentTab.ID ? 'active' : null },
	                    _react2['default'].createElement(
	                        'a',
	                        { href: '#' },
	                        _react2['default'].createElement(
	                            'span',
	                            null,
	                            room.Name
	                        )
	                    )
	                );
	            });

	            return _react2['default'].createElement(
	                'aside',
	                { className: 'left-side col-lg-2' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'user-head' },
	                    _react2['default'].createElement('i', { className: 'fa fa-comments-o' }),
	                    _react2['default'].createElement(
	                        'h3',
	                        null,
	                        'ChatChat'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'ul',
	                    { className: 'chat-list' },
	                    _react2['default'].createElement(
	                        'li',
	                        { className: currentTab.Type == 'lobby' ? 'active' : null },
	                        _react2['default'].createElement(
	                            'a',
	                            { className: 'lobby', href: '#' },
	                            _react2['default'].createElement(
	                                'h4',
	                                null,
	                                _react2['default'].createElement('i', { className: 'fa fa-list' }),
	                                'Lobby'
	                            )
	                        )
	                    ),
	                    roomItems
	                )
	            );
	        }
	    }]);

	    return ChatLeftSide;
	})(_react2['default'].Component);

	exports['default'] = ChatLeftSide;
	module.exports = exports['default'];

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/27.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(158);

	var ChatMiddleSide = (function (_React$Component) {
	    _inherits(ChatMiddleSide, _React$Component);

	    function ChatMiddleSide() {
	        _classCallCheck(this, ChatMiddleSide);

	        _get(Object.getPrototypeOf(ChatMiddleSide.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ChatMiddleSide, [{
	        key: 'render',
	        value: function render() {

	            var time = ' at 1:55pm, 13th April 2013';
	            return _react2['default'].createElement(
	                'aside',
	                { className: 'mid-side col-lg-8' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'chat-room-head' },
	                    _react2['default'].createElement(
	                        'h3',
	                        null,
	                        'Water Cooler'
	                    ),
	                    _react2['default'].createElement(
	                        'form',
	                        { action: '#', className: 'pull-right position' },
	                        _react2['default'].createElement('input', { type: 'text', placeholder: 'Search', className: 'form-control search-btn ' })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'message-list' },
	                    _react2['default'].createElement(
	                        'section',
	                        { className: 'panel ' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'panel-body ' },
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity terques' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'ZHJ'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                ' Purchased new equipments for zonal office setup and stationaries.'
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity alt purple' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'ZHJ'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow-alt' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                'Lorem ipsum dolor sit amet consiquest dio'
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity blue' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'JAU'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                'Please note which location you will consider, or both. Reporting to the VP  you will be responsible for managing.. '
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity alt green' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'Lee'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow-alt' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                'Please note which location you will consider, or both.'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'footer' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'chat-form' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'input-cont ' },
	                            _react2['default'].createElement('textarea', { className: 'form-control', id: 'message', rows: '5', placeholder: 'Enter a message ...' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ChatMiddleSide;
	})(_react2['default'].Component);

	exports['default'] = ChatMiddleSide;
	module.exports = exports['default'];

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/27.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(158);

	var ChatRightSide = (function (_React$Component) {
	    _inherits(ChatRightSide, _React$Component);

	    function ChatRightSide() {
	        _classCallCheck(this, ChatRightSide);

	        _get(Object.getPrototypeOf(ChatRightSide.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ChatRightSide, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'aside',
	                { className: 'right-side col-lg-2' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'user-head' },
	                    _react2['default'].createElement(
	                        'a',
	                        { href: '#', className: 'chat-tools btn-success' },
	                        _react2['default'].createElement('i', { className: 'fa fa-cog' }),
	                        ' '
	                    ),
	                    _react2['default'].createElement(
	                        'a',
	                        { href: '#', className: 'chat-tools btn-key' },
	                        _react2['default'].createElement('i', { className: 'fa fa-key' }),
	                        ' '
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'invite-row' },
	                    _react2['default'].createElement(
	                        'h4',
	                        { className: 'pull-left' },
	                        'People'
	                    )
	                ),
	                _react2['default'].createElement(
	                    'ul',
	                    { className: 'chat-available-user' },
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: 'chat_room.html' },
	                            _react2['default'].createElement('i', { className: 'fa fa-circle text-success' }),
	                            'Jonathan Smith',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                '3h:22m'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: 'chat_room.html' },
	                            _react2['default'].createElement('i', { className: 'fa fa-circle text-success' }),
	                            'Jhone Due',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                '1h:2m'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: 'chat_room.html' },
	                            _react2['default'].createElement('i', { className: 'fa fa-circle text-success' }),
	                            'Franklyn Kalley',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                '2h:32m'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: 'chat_room.html' },
	                            _react2['default'].createElement('i', { className: 'fa fa-circle text-danger' }),
	                            'Anjelina joe',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                '3h:22m'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: 'chat_room.html' },
	                            _react2['default'].createElement('i', { className: 'fa fa-circle text-warning' }),
	                            'Aliace Stalvien',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                '1h:12m'
	                            )
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: 'chat_room.html' },
	                            _react2['default'].createElement('i', { className: 'fa fa-circle text-muted' }),
	                            'Stive jones'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'li',
	                        null,
	                        _react2['default'].createElement(
	                            'a',
	                            { href: 'chat_room.html' },
	                            _react2['default'].createElement('i', { className: 'fa fa-circle text-muted' }),
	                            'Jonathan Smith'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'footer' },
	                    _react2['default'].createElement(
	                        'a',
	                        { href: '#', className: 'guest-on' },
	                        _react2['default'].createElement('i', { className: 'fa fa-check' }),
	                        'Guest Access On'
	                    )
	                )
	            );
	        }
	    }]);

	    return ChatRightSide;
	})(_react2['default'].Component);

	exports['default'] = ChatRightSide;
	module.exports = exports['default'];

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/3.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(158);

	var LobbyMiddle = (function (_React$Component) {
	    _inherits(LobbyMiddle, _React$Component);

	    function LobbyMiddle() {
	        _classCallCheck(this, LobbyMiddle);

	        _get(Object.getPrototypeOf(LobbyMiddle.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(LobbyMiddle, [{
	        key: 'render',
	        value: function render() {

	            return _react2['default'].createElement(
	                'aside',
	                { className: 'mid-side col-lg-8' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'chat-room-head' },
	                    _react2['default'].createElement(
	                        'h3',
	                        null,
	                        'Lobby'
	                    ),
	                    _react2['default'].createElement(
	                        'form',
	                        { action: '#', className: 'pull-right position' },
	                        _react2['default'].createElement('input', { type: 'text', placeholder: 'Search', className: 'form-control search-btn ' })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'room-desk' },
	                    _react2['default'].createElement(
	                        'a',
	                        { href: '#', className: 'pull-right btn btn-default' },
	                        '+ Create Room'
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'room-box' },
	                        _react2['default'].createElement(
	                            'h5',
	                            { className: 'text-primary' },
	                            _react2['default'].createElement(
	                                'a',
	                                { href: 'chat_room.html' },
	                                'Marketing'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            'Welcome to our world of marketing. Lorem ipsum dolor sit amet'
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Admin :'
	                            ),
	                            ' Kally Brash | ',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Member :'
	                            ),
	                            ' 13 | ',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Last Activity :'
	                            ),
	                            ' 15 min ago'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'room-box' },
	                        _react2['default'].createElement(
	                            'h5',
	                            { className: 'text-primary' },
	                            _react2['default'].createElement(
	                                'a',
	                                { href: 'chat_room.html' },
	                                'Water Cooler'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            'Welcome to our world of marketing. Lorem ipsum dolor sit amet'
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Admin :'
	                            ),
	                            ' Kally Brash | ',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Member :'
	                            ),
	                            ' 13 | ',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Last Activity :'
	                            ),
	                            ' 15 min ago'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'room-box' },
	                        _react2['default'].createElement(
	                            'h5',
	                            { className: 'text-primary' },
	                            _react2['default'].createElement(
	                                'a',
	                                { href: 'chat_room.html' },
	                                'FlatLab'
	                            )
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            'Welcome to our world of marketing. Lorem ipsum dolor sit amet'
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Admin :'
	                            ),
	                            ' Kally Brash | ',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Member :'
	                            ),
	                            ' 13 | ',
	                            _react2['default'].createElement(
	                                'span',
	                                { className: 'text-muted' },
	                                'Last Activity :'
	                            ),
	                            ' 15 min ago'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return LobbyMiddle;
	})(_react2['default'].Component);

	exports['default'] = LobbyMiddle;
	module.exports = exports['default'];

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/3.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(222);

	var _actions = __webpack_require__(262);

	var Logout = (function (_React$Component) {
	    _inherits(Logout, _React$Component);

	    function Logout() {
	        _classCallCheck(this, Logout);

	        _get(Object.getPrototypeOf(Logout.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Logout, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.props.dispatch((0, _actions.logout)());
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                'Going to logout'
	            );
	        }
	    }]);

	    return Logout;
	})(_react2['default'].Component);

	exports['default'] = (0, _reactRedux.connect)(function (state) {
	    return { state: state };
	})(Logout);
	module.exports = exports['default'];

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/3.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(158);

	var MessageList = (function (_React$Component) {
	    _inherits(MessageList, _React$Component);

	    function MessageList() {
	        _classCallCheck(this, MessageList);

	        _get(Object.getPrototypeOf(MessageList.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(MessageList, [{
	        key: 'render',
	        value: function render() {

	            var time = ' at 1:55pm, 13th April 2013';
	            return _react2['default'].createElement(
	                'aside',
	                { className: 'mid-side col-lg-8' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'chat-room-head' },
	                    _react2['default'].createElement(
	                        'h3',
	                        null,
	                        'Water Cooler'
	                    ),
	                    _react2['default'].createElement(
	                        'form',
	                        { action: '#', className: 'pull-right position' },
	                        _react2['default'].createElement('input', { type: 'text', placeholder: 'Search', className: 'form-control search-btn ' })
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'message-list' },
	                    _react2['default'].createElement(
	                        'section',
	                        { className: 'panel ' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'panel-body ' },
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity terques' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'ZHJ'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                ' Purchased new equipments for zonal office setup and stationaries.'
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity alt purple' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'ZHJ'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow-alt' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                'Lorem ipsum dolor sit amet consiquest dio'
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity blue' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'JAU'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                'Please note which location you will consider, or both. Reporting to the VP  you will be responsible for managing.. '
	                                            )
	                                        )
	                                    )
	                                )
	                            ),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'activity alt green' },
	                                _react2['default'].createElement(
	                                    'span',
	                                    null,
	                                    'Lee'
	                                ),
	                                _react2['default'].createElement(
	                                    'div',
	                                    { className: 'activity-desk' },
	                                    _react2['default'].createElement(
	                                        'div',
	                                        { className: 'panel' },
	                                        _react2['default'].createElement(
	                                            'div',
	                                            { className: 'panel-body' },
	                                            _react2['default'].createElement('div', { className: 'arrow-alt' }),
	                                            _react2['default'].createElement(
	                                                'h5',
	                                                null,
	                                                _react2['default'].createElement(
	                                                    'a',
	                                                    { href: '#' },
	                                                    'Jhon Doe'
	                                                ),
	                                                _react2['default'].createElement(
	                                                    'div',
	                                                    { className: 'message_time' },
	                                                    time
	                                                )
	                                            ),
	                                            _react2['default'].createElement(
	                                                'p',
	                                                null,
	                                                'Please note which location you will consider, or both.'
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'footer' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'chat-form' },
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'input-cont ' },
	                            _react2['default'].createElement('textarea', { className: 'form-control', id: 'message', rows: '5', placeholder: 'Enter a message ...' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return MessageList;
	})(_react2['default'].Component);

	exports['default'] = MessageList;
	module.exports = exports['default'];

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/2.
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

	var _reactDom = __webpack_require__(221);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(222);

	var _index = __webpack_require__(269);

	var _actions = __webpack_require__(262);

	var ChatPage = (function (_React$Component) {
	    _inherits(ChatPage, _React$Component);

	    function ChatPage(props) {
	        _classCallCheck(this, ChatPage);

	        _get(Object.getPrototypeOf(ChatPage.prototype), 'constructor', this).call(this, props);

	        this._middleSide = {
	            looby: _index.RoomList,
	            room: _index.MessageList
	        };
	    }

	    _createClass(ChatPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._initialize();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this._initialize();
	        }
	    }, {
	        key: '_initialize',
	        value: function _initialize() {
	            var currentTab = this.props.chat.currentTab;
	            if (!currentTab.initialized) {
	                this.props.dispatch((0, _actions.tabInitialize)());
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2['default'].createElement(
	                'div',
	                { className: 'chat-room' },
	                _react2['default'].createElement(_index.ChatLeftSide, {
	                    roomList: this.props.chat.roomList,
	                    currentTab: this.props.chat.currentTab }),
	                this._middleSide[currentTab.Type],
	                _react2['default'].createElement(_index.ChatRightSide, null)
	            );
	        }
	    }]);

	    return ChatPage;
	})(_react2['default'].Component);

	exports['default'] = (0, _reactRedux.connect)(function (state) {
	    return { chat: state.chat };
	})(ChatPage);
	module.exports = exports['default'];

/***/ }

});