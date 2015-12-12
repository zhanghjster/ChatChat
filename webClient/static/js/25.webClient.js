webpackJsonp([25],{

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

/***/ }

});