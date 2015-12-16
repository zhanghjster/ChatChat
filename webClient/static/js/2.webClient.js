webpackJsonp([2],{

<<<<<<< HEAD
/***/ 258:
=======
/***/ 262:
>>>>>>> f293e4ad7326621b3d0b97265e09fef102a30945
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

<<<<<<< HEAD
	var _utils = __webpack_require__(259);

	var _reactRedux = __webpack_require__(220);
=======
	var _utils = __webpack_require__(263);

	var _reactRedux = __webpack_require__(216);
>>>>>>> f293e4ad7326621b3d0b97265e09fef102a30945

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

/***/ }

});