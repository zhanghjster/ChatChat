webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(215);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(216);

	var _reduxRouter = __webpack_require__(233);

	var _routes = __webpack_require__(246);

	var _routes2 = _interopRequireDefault(_routes);

	var _storeConfigureStore = __webpack_require__(280);

	var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

	var _actions = __webpack_require__(266);

	var store = (0, _storeConfigureStore2['default'])(window.__INITIAL_STATE__);

	var token = localStorage.getItem('token');
	if (token != null) {
	    store.dispatch((0, _actions.loginSuccess)(token));
	}

	var debugPannel = null;
	if (true) {
	    var _require = __webpack_require__(288);

	    var DevTools = _require.DevTools;
	    var DebugPanel = _require.DebugPanel;
	    var LogMonitor = _require.LogMonitor;

	    debugPannel = _react2['default'].createElement(
	        DebugPanel,
	        { top: true, right: true, bottom: true },
	        _react2['default'].createElement(DevTools, { store: store, monitor: LogMonitor })
	    );
	    _reactDom2['default'].render(_react2['default'].createElement(
	        'div',
	        { classNmae: 'container' },
	        _react2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'col-md-10' },
	                _react2['default'].createElement(
	                    _reactRedux.Provider,
	                    { store: store },
	                    _routes2['default']
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'col-md-2' },
	                debugPannel
	            )
	        )
	    ), document.getElementById('APP'));
	} else {
	    _reactDom2['default'].render(_react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	            _reactRedux.Provider,
	            { store: store },
	            _routes2['default']
	        )
	    ), document.getElementById('APP'));
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _componentsProvider = __webpack_require__(217);

	exports.Provider = _interopRequire(_componentsProvider);

	var _componentsConnect = __webpack_require__(219);

	exports.connect = _interopRequire(_componentsConnect);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _utilsStoreShape = __webpack_require__(218);

	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }

	  didWarnAboutReceivingStore = true;
	  console.error( // eslint-disable-line no-console
	  '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = (function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    _Component.call(this, props, context);
	    this.store = props.store;
	  }

	  Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	})(_react.Component);

	exports['default'] = Provider;

	Provider.propTypes = {
	  store: _utilsStoreShape2['default'].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _utilsStoreShape2['default'].isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports['default'] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = connect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilsStoreShape = __webpack_require__(218);

	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);

	var _utilsShallowEqual = __webpack_require__(220);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(221);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(222);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(232);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	  var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	  var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  function computeStateProps(store, props) {
	    var state = store.getState();
	    var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	    _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	    return stateProps;
	  }

	  function computeDispatchProps(store, props) {
	    var dispatch = store.dispatch;

	    var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	    _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	    return dispatchProps;
	  }

	  function _computeNextState(stateProps, dispatchProps, parentProps) {
	    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	    _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	    return mergedProps;
	  }

	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = (function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        if (!pure) {
	          this.updateStateProps(nextProps);
	          this.updateDispatchProps(nextProps);
	          this.updateState(nextProps);
	          return true;
	        }

	        var storeChanged = nextState.storeState !== this.state.storeState;
	        var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	        var mapStateProducedChange = false;
	        var dispatchPropsChanged = false;

	        if (storeChanged || propsChanged && shouldUpdateStateProps) {
	          mapStateProducedChange = this.updateStateProps(nextProps);
	        }

	        if (propsChanged && shouldUpdateDispatchProps) {
	          dispatchPropsChanged = this.updateDispatchProps(nextProps);
	        }

	        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	          this.updateState(nextProps);
	          return true;
	        }

	        return false;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        _Component.call(this, props, context);
	        this.version = version;
	        this.store = props.store || context.store;

	        _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

	        this.stateProps = computeStateProps(this.store, props);
	        this.dispatchProps = computeDispatchProps(this.store, props);
	        this.state = { storeState: null };
	        this.updateState();
	      }

	      Connect.prototype.computeNextState = function computeNextState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        return _computeNextState(this.stateProps, this.dispatchProps, props);
	      };

	      Connect.prototype.updateStateProps = function updateStateProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        var nextStateProps = computeStateProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        var nextDispatchProps = computeDispatchProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateState = function updateState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        this.nextState = this.computeNextState(props);
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        this.setState({
	          storeState: this.store.getState()
	        });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        _invariant2['default'](withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var ref = withRef ? 'wrappedInstance' : null;
	        return _react2['default'].createElement(WrappedComponent, _extends({}, this.nextState, { ref: ref }));
	      };

	      return Connect;
	    })(_react.Component);

	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _utilsStoreShape2['default']
	    };
	    Connect.propTypes = {
	      store: _utilsStoreShape2['default']
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;

	        // Update the state and bindings.
	        this.trySubscribe();
	        this.updateStateProps();
	        this.updateDispatchProps();
	        this.updateState();
	      };
	    }

	    return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 220 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(223);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(224);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(226);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(229);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(230);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(231);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(225);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	    var isSubscribed = true;

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(224);

	var _utilsIsPlainObject = __webpack_require__(225);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsMapValues = __webpack_require__(227);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	var _utilsPick = __webpack_require__(228);

	var _utilsPick2 = _interopRequireDefault(_utilsPick);

	/* eslint-disable no-console */

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var finalReducers = _utilsPick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;

	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  var defaultState = _utilsMapValues2['default'](finalReducers, function () {
	    return undefined;
	  });

	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;

	    if (sanityError) {
	      throw sanityError;
	    }

	    var hasChanged = false;
	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return hasChanged ? finalState : state;
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 227 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = mapValues;

	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 228 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = pick;

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMapValues = __webpack_require__(227);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */

	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    // eslint-disable-line no-eq-null
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(231);

	var _compose2 = _interopRequireDefault(_compose);

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 232 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerStateReducer2 = __webpack_require__(234);

	var _routerStateReducer3 = _interopRequireDefault(_routerStateReducer2);

	exports.routerStateReducer = _routerStateReducer3['default'];

	var _ReduxRouter2 = __webpack_require__(236);

	var _ReduxRouter3 = _interopRequireDefault(_ReduxRouter2);

	exports.ReduxRouter = _ReduxRouter3['default'];

	var _client = __webpack_require__(239);

	var _client2 = _interopRequireDefault(_client);

	exports.reduxReactRouter = _client2['default'];

	var _isActive2 = __webpack_require__(245);

	var _isActive3 = _interopRequireDefault(_isActive2);

	exports.isActive = _isActive3['default'];

	var _actionCreators = __webpack_require__(238);

	exports.historyAPI = _actionCreators.historyAPI;
	exports.pushState = _actionCreators.pushState;
	exports.replaceState = _actionCreators.replaceState;
	exports.setState = _actionCreators.setState;
	exports.go = _actionCreators.go;
	exports.goBack = _actionCreators.goBack;
	exports.goForward = _actionCreators.goForward;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = routerStateReducer;

	var _constants = __webpack_require__(235);

	/**
	 * Reducer of ROUTER_DID_CHANGE actions. Returns a state object
	 * with { pathname, query, params, navigationType }
	 * @param  {Object} state - Previous state
	 * @param  {Object} action - Action
	 * @return {Object} New state
	 */

	function routerStateReducer(state, action) {
	  if (state === undefined) state = null;

	  var _extends2;

	  switch (action.type) {
	    case _constants.ROUTER_DID_CHANGE:
	      return action.payload;
	    case _constants.REPLACE_ROUTES:
	      if (!state) return state;
	      return _extends({}, state, (_extends2 = {}, _extends2[_constants.DOES_NEED_REFRESH] = true, _extends2));
	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports) {

	// Signals that the router's state has changed. It should
	// never be called by the application, only as an implementation detail of
	// redux-react-router.
	'use strict';

	exports.__esModule = true;
	var ROUTER_DID_CHANGE = '@@reduxReactRouter/routerDidChange';

	exports.ROUTER_DID_CHANGE = ROUTER_DID_CHANGE;
	var HISTORY_API = '@@reduxReactRouter/historyAPI';
	exports.HISTORY_API = HISTORY_API;
	var MATCH = '@@reduxReactRouter/match';
	exports.MATCH = MATCH;
	var REPLACE_ROUTES = '@@reduxReactRouter/replaceRoutes';

	exports.REPLACE_ROUTES = REPLACE_ROUTES;
	var ROUTER_STATE_SELECTOR = '@@reduxReactRouter/routerStateSelector';

	exports.ROUTER_STATE_SELECTOR = ROUTER_STATE_SELECTOR;
	var DOES_NEED_REFRESH = '@@reduxReactRouter/doesNeedRefresh';
	exports.DOES_NEED_REFRESH = DOES_NEED_REFRESH;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(216);

	var _reactRouter = __webpack_require__(157);

	var _routerStateEquals = __webpack_require__(237);

	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);

	var _constants = __webpack_require__(235);

	var _actionCreators = __webpack_require__(238);

	function memoizeRouterStateSelector(selector) {
	  var previousRouterState = null;

	  return function (state) {
	    var nextRouterState = selector(state);
	    if (_routerStateEquals2['default'](previousRouterState, nextRouterState)) {
	      return previousRouterState;
	    }
	    previousRouterState = nextRouterState;
	    return nextRouterState;
	  };
	}

	function getRoutesFromProps(props) {
	  return props.routes || props.children;
	}

	var ReduxRouter = (function (_Component) {
	  _inherits(ReduxRouter, _Component);

	  _createClass(ReduxRouter, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.node
	    },
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: {
	      store: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);

	  function ReduxRouter(props, context) {
	    _classCallCheck(this, ReduxRouter);

	    _Component.call(this, props, context);
	    this.receiveRoutes(getRoutesFromProps(props));
	  }

	  ReduxRouter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    this.receiveRoutes(getRoutesFromProps(nextProps));
	  };

	  ReduxRouter.prototype.receiveRoutes = function receiveRoutes(routes) {
	    if (!routes) return;

	    var store = this.context.store;

	    store.dispatch(_actionCreators.replaceRoutes(routes));
	  };

	  ReduxRouter.prototype.render = function render() {
	    var store = this.context.store;

	    if (!store) {
	      throw new Error('Redux store missing from context of <ReduxRouter>. Make sure you\'re ' + 'using a <Provider>');
	    }

	    var history = store.history;
	    var routerStateSelector = store[_constants.ROUTER_STATE_SELECTOR];

	    if (!history || !routerStateSelector) {
	      throw new Error('Redux store not configured properly for <ReduxRouter>. Make sure ' + 'you\'re using the reduxReactRouter() store enhancer.');
	    }

	    return _react2['default'].createElement(ReduxRouterContext, _extends({
	      history: history,
	      routerStateSelector: memoizeRouterStateSelector(routerStateSelector)
	    }, this.props));
	  };

	  return ReduxRouter;
	})(_react.Component);

	var ReduxRouterContext = (function (_Component2) {
	  _inherits(ReduxRouterContext, _Component2);

	  function ReduxRouterContext() {
	    _classCallCheck(this, _ReduxRouterContext);

	    _Component2.apply(this, arguments);
	  }

	  ReduxRouterContext.prototype.render = function render() {
	    return _react2['default'].createElement(_reactRouter.RoutingContext, this.props);
	  };

	  var _ReduxRouterContext = ReduxRouterContext;
	  ReduxRouterContext = _reactRedux.connect(function (state, _ref) {
	    var routerStateSelector = _ref.routerStateSelector;
	    return routerStateSelector(state) || {};
	  })(ReduxRouterContext) || ReduxRouterContext;
	  return ReduxRouterContext;
	})(_react.Component);

	exports['default'] = ReduxRouter;
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = routerStateEquals;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(168);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _constants = __webpack_require__(235);

	/**
	 * Check if two router states are equal. Ignores `location.key`.
	 * @returns {Boolean}
	 */

	function routerStateEquals(a, b) {
	  if (!a && !b) return true;
	  if (a && !b || !a && b) return false;
	  if (a[_constants.DOES_NEED_REFRESH] || b[_constants.DOES_NEED_REFRESH]) return false;

	  return a.location.pathname === b.location.pathname && a.location.search === b.location.search && _deepEqual2['default'](a.location.state, b.location.state);
	}

	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routerDidChange = routerDidChange;
	exports.replaceRoutes = replaceRoutes;
	exports.historyAPI = historyAPI;

	var _constants = __webpack_require__(235);

	/**
	 * Action creator for signaling that the router has changed.
	 * @private
	 * @param  {RouterState} state - New router state
	 * @return {Action} Action object
	 */

	function routerDidChange(state) {
	  return {
	    type: _constants.ROUTER_DID_CHANGE,
	    payload: state
	  };
	}

	/**
	 * Action creator that replaces the current route config
	 * @private
	 * @param {Array<Route>|ReactElement} routes - New routes
	 */

	function replaceRoutes(routes) {
	  return {
	    type: _constants.REPLACE_ROUTES,
	    payload: routes
	  };
	}

	/**
	 * Creates an action creator for calling a history API method.
	 * @param {string} method - Name of method
	 * @returns {ActionCreator} Action creator with same parameters as corresponding
	 * history method
	 */

	function historyAPI(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return {
	      type: _constants.HISTORY_API,
	      payload: {
	        method: method,
	        args: args
	      }
	    };
	  };
	}

	var pushState = historyAPI('pushState');
	exports.pushState = pushState;
	var push = historyAPI('push');
	exports.push = push;
	var replaceState = historyAPI('replaceState');
	exports.replaceState = replaceState;
	var replace = historyAPI('replace');
	exports.replace = replace;
	var setState = historyAPI('setState');
	exports.setState = setState;
	var go = historyAPI('go');
	exports.go = go;
	var goBack = historyAPI('goBack');
	exports.goBack = goBack;
	var goForward = historyAPI('goForward');
	exports.goForward = goForward;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(223);

	var _actionCreators = __webpack_require__(238);

	var _routerStateEquals = __webpack_require__(237);

	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);

	var _reduxReactRouter = __webpack_require__(240);

	var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);

	var _useDefaults = __webpack_require__(242);

	var _useDefaults2 = _interopRequireDefault(_useDefaults);

	var _routeReplacement = __webpack_require__(243);

	var _routeReplacement2 = _interopRequireDefault(_routeReplacement);

	function historySynchronization(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var onError = options.onError;
	        var routerStateSelector = options.routerStateSelector;

	        var store = next(options)(createStore)(reducer, initialState);
	        var history = store.history;

	        var routerState = undefined;

	        history.listen(function (error, nextRouterState) {
	          if (error) {
	            onError(error);
	            return;
	          }

	          var prevRouterState = routerStateSelector(store.getState());

	          if (!_routerStateEquals2['default'](prevRouterState, nextRouterState)) {
	            store.dispatch(_actionCreators.routerDidChange(nextRouterState));
	          }
	        });

	        store.subscribe(function () {
	          var nextRouterState = routerStateSelector(store.getState());

	          if (nextRouterState && !_routerStateEquals2['default'](routerState, nextRouterState)) {
	            var _nextRouterState$location = nextRouterState.location;
	            var state = _nextRouterState$location.state;
	            var pathname = _nextRouterState$location.pathname;
	            var query = _nextRouterState$location.query;

	            history.replaceState(state, pathname, query);
	          }

	          routerState = nextRouterState;
	        });

	        return store;
	      };
	    };
	  };
	}

	exports['default'] = _redux.compose(_useDefaults2['default'], _routeReplacement2['default'], historySynchronization)(_reduxReactRouter2['default']);
	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = reduxReactRouter;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(223);

	var _reactRouter = __webpack_require__(157);

	var _historyMiddleware = __webpack_require__(241);

	var _historyMiddleware2 = _interopRequireDefault(_historyMiddleware);

	var _constants = __webpack_require__(235);

	function reduxReactRouter(_ref) {
	  var routes = _ref.routes;
	  var createHistory = _ref.createHistory;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var routerStateSelector = _ref.routerStateSelector;

	  return function (createStore) {
	    return function (reducer, initialState) {
	      var history = _reactRouter.useRoutes(createHistory)({
	        routes: routes,
	        parseQueryString: parseQueryString,
	        stringifyQuery: stringifyQuery
	      });

	      var store = _redux.applyMiddleware(_historyMiddleware2['default'](history))(createStore)(reducer, initialState);

	      store.history = history;
	      store[_constants.ROUTER_STATE_SELECTOR] = routerStateSelector;

	      return store;
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = historyMiddleware;

	var _constants = __webpack_require__(235);

	/**
	 * Middleware for interacting with the history API
	 * @param {History} History object
	 */

	function historyMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === _constants.HISTORY_API) {
	          var _action$payload = action.payload;
	          var method = _action$payload.method;
	          var args = _action$payload.args;

	          return history[method].apply(history, args);
	        }
	        return next(action);
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = useDefaults;
	var defaults = {
	  onError: function onError(error) {
	    throw error;
	  },
	  routerStateSelector: function routerStateSelector(state) {
	    return state.router;
	  }
	};

	function useDefaults(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var optionsWithDefaults = _extends({}, defaults, options);

	        var baseCreateHistory = optionsWithDefaults.createHistory;
	        var baseHistory = optionsWithDefaults.history;

	        var createHistory = undefined;
	        if (typeof baseCreateHistory === 'function') {
	          createHistory = baseCreateHistory;
	        } else if (baseHistory) {
	          createHistory = function () {
	            return baseHistory;
	          };
	        } else {
	          createHistory = null;
	        }

	        return next(_extends({}, optionsWithDefaults, {
	          createHistory: createHistory
	        }))(createStore)(reducer, initialState);
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = routeReplacement;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(223);

	var _reactRouter = __webpack_require__(157);

	var _replaceRoutesMiddleware = __webpack_require__(244);

	var _replaceRoutesMiddleware2 = _interopRequireDefault(_replaceRoutesMiddleware);

	function routeReplacement(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var baseRoutes = options.routes;
	        var getRoutes = options.getRoutes;
	        var routerStateSelector = options.routerStateSelector;

	        var store = undefined;

	        var childRoutes = [];
	        var areChildRoutesResolved = false;
	        var childRoutesCallbacks = [];

	        function replaceRoutes(r) {
	          childRoutes = _reactRouter.createRoutes(r);

	          var routerState = routerStateSelector(store.getState());
	          if (routerState) {
	            var _routerState$location = routerState.location;
	            var state = _routerState$location.state;
	            var pathname = _routerState$location.pathname;
	            var query = _routerState$location.query;

	            store.history.replaceState(state, pathname, query);
	          }

	          if (!areChildRoutesResolved) {
	            areChildRoutesResolved = true;
	            childRoutesCallbacks.forEach(function (cb) {
	              return cb(null, childRoutes);
	            });
	          }
	        }

	        var routes = undefined;
	        if (baseRoutes) {
	          routes = baseRoutes;
	        } else if (getRoutes) {
	          routes = getRoutes({
	            dispatch: function dispatch(action) {
	              return store.dispatch(action);
	            },
	            getState: function getState() {
	              return store.getState();
	            }
	          });
	        } else {
	          routes = [{
	            getChildRoutes: function getChildRoutes(location, cb) {
	              if (!areChildRoutesResolved) {
	                childRoutesCallbacks.push(cb);
	                return;
	              }

	              cb(null, childRoutes);
	            }
	          }];
	        }

	        store = _redux.compose(_redux.applyMiddleware(_replaceRoutesMiddleware2['default'](replaceRoutes)), next(_extends({}, options, {
	          routes: _reactRouter.createRoutes(routes)
	        })))(createStore)(reducer, initialState);

	        return store;
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = replaceRoutesMiddleware;

	var _constants = __webpack_require__(235);

	function replaceRoutesMiddleware(replaceRoutes) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === _constants.REPLACE_ROUTES) {
	          replaceRoutes(action.payload);
	        }
	        return next(action);
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isActive;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouterLibIsActive = __webpack_require__(187);

	var _reactRouterLibIsActive2 = _interopRequireDefault(_reactRouterLibIsActive);

	/**
	 * Creates a router state selector that returns whether or not the given
	 * pathname and query are active.
	 * @param {String} pathname
	 * @param {Object} query
	 * @param {Boolean} indexOnly
	 * @return {Boolean}
	 */

	function isActive(pathname, query) {
	  var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  return function (state) {
	    if (!state) return false;
	    var location = state.location;
	    var params = state.params;
	    var routes = state.routes;

	    return _reactRouterLibIsActive2['default'](pathname, query, indexOnly, location, routes, params);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 246 */
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

	var _reactRedux = __webpack_require__(216);

	var _reactRouter = __webpack_require__(157);

	var _utilsHistoryJs = __webpack_require__(247);

	var _utilsHistoryJs2 = _interopRequireDefault(_utilsHistoryJs);

	function requireAuth(Component) {
	    var AuthenticatedComponent = (function (_React$Component) {
	        _inherits(AuthenticatedComponent, _React$Component);

	        function AuthenticatedComponent() {
	            _classCallCheck(this, AuthenticatedComponent);

	            _get(Object.getPrototypeOf(AuthenticatedComponent.prototype), 'constructor', this).apply(this, arguments);
	        }

	        _createClass(AuthenticatedComponent, [{
	            key: 'componentWillMount',
	            value: function componentWillMount() {
	                this.checkAuth();
	            }
	        }, {
	            key: 'componentWillReceiveProps',
	            value: function componentWillReceiveProps(nextProps) {
	                this.checkAuth();
	            }
	        }, {
	            key: 'checkAuth',
	            value: function checkAuth() {
	                if (!this.props.auth.isAuthenticated) {
	                    _utilsHistoryJs2['default'].pushState(null, '/login');
	                } else {
	                    _utilsHistoryJs2['default'].pushState(null, '/chat');
	                }
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return _react2['default'].createElement(
	                    'div',
	                    null,
	                    this.props.isAuthenticated === true ? _react2['default'].createElement(Component, this.props) : null
	                );
	            }
	        }]);

	        return AuthenticatedComponent;
	    })(_react2['default'].Component);

	    var mapStateToProps = function mapStateToProps(state) {
	        return { auth: state.auth };
	    };

	    return (0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent);
	}

	var routeConfig = [{
	    path: '/',
	    componet: __webpack_require__(261),
	    indexRoute: { getComponent: function getComponent(location, cb) {
	            __webpack_require__.e/* nsure */(2, function (require) {
	                cb(null, __webpack_require__(262));
	            });
	        } },
	    childRoutes: [{
	        path: '/login',
	        getComponent: function getComponent(location, cb) {
	            __webpack_require__.e/* nsure */(3, function (require) {
	                cb(null, __webpack_require__(265));
	            });
	        }
	    }, {
	        path: '/logout',
	        getComponent: function getComponent(location, cb) {
	            __webpack_require__.e/* nsure */(4, function (require) {
	                cb(null, __webpack_require__(269));
	            });
	        }
	    }, { path: '/signup',
	        getComponent: function getComponent(location, cb) {
	            __webpack_require__.e/* nsure */(5, function (require) {
	                cb(null, __webpack_require__(270));
	            });
	        }
	    }, { path: '/chat',
	        getComponent: function getComponent(location, cb) {
	            __webpack_require__.e/* nsure */(6, function (require) {
	                cb(null, __webpack_require__(271));
	            });
	        }
	    }]
	}];

	exports['default'] = _react2['default'].createElement(_reactRouter.Router, { routes: routeConfig, history: _utilsHistoryJs2['default'] });
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/12/3.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _historyLibCreateBrowserHistory = __webpack_require__(248);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	exports['default'] = (0, _historyLibCreateBrowserHistory2['default'])();
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(249);

	var _ExecutionEnvironment = __webpack_require__(250);

	var _DOMUtils = __webpack_require__(251);

	var _DOMStateStorage = __webpack_require__(252);

	var _createDOMHistory = __webpack_require__(253);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _parsePath = __webpack_require__(257);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 249 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 250 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 251 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  // FIXME: Work around our browser history not working correctly on Chrome
	  // iOS: https://github.com/rackt/react-router/issues/2565
	  if (ua.indexOf('CriOS') !== -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(159);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';
	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(250);

	var _DOMUtils = __webpack_require__(251);

	var _createHistory = __webpack_require__(254);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(168);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AsyncUtils = __webpack_require__(255);

	var _Actions = __webpack_require__(249);

	var _createLocation2 = __webpack_require__(256);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(259);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(257);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(260);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      //warning(
	      //  false,
	      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
	      //  'location descriptor instead'
	      //)

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Actions = __webpack_require__(249);

	var _parsePath = __webpack_require__(257);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _parsePath2['default'](location);

	  if (typeof action === 'object') {
	    //warning(
	    //  false,
	    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
	    //  'location descriptor instead'
	    //)

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(159);

	var _warning2 = _interopRequireDefault(_warning);

	var _extractPath = __webpack_require__(258);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	function parsePath(path) {
	  var pathname = _extractPath2['default'](path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}

	exports['default'] = parsePath;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 258 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	exports["default"] = extractPath;
	module.exports = exports["default"];

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(159);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 260 */
/***/ function(module, exports) {

	//import warning from 'warning'

	"use strict";

	exports.__esModule = true;
	function deprecate(fn) {
	  return fn;
	  //return function () {
	  //  warning(false, '[history] ' + message)
	  //  return fn.apply(this, arguments)
	  //}
	}

	exports["default"] = deprecate;
	module.exports = exports["default"];

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Ben on 15/11/19.
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

	var APP = (function (_React$Component) {
	    _inherits(APP, _React$Component);

	    function APP() {
	        _classCallCheck(this, APP);

	        _get(Object.getPrototypeOf(APP.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(APP, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);

	    return APP;
	})(_react2['default'].Component);

	exports['default'] = APP;
	module.exports = exports['default'];

/***/ },
/* 262 */,
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/18.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _roomData = __webpack_require__(264);

	var _roomData2 = _interopRequireDefault(_roomData);

	var _history = __webpack_require__(247);

	var _history2 = _interopRequireDefault(_history);

	var createReducer = function createReducer(initialState, reducerMap) {
	    return function (state, action) {
	        if (state === undefined) state = initialState;

	        var reducer = reducerMap[action.type];

	        return reducer ? reducer(state, action.payload) : state;
	    };
	};

	var createConstants = function createConstants() {
	    for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
	        constants[_key] = arguments[_key];
	    }

	    return constants.reduce(function (acc, constant) {
	        acc[constant] = constant;
	        return acc;
	    }, {});
	};

	var checkHttpStatus = function checkHttpStatus(response) {
	    if (response.status >= 200 && response.status < 300) {
	        return response;
	    } else {
	        var error = new Error(response.statusText);
	        error.response = response;
	        throw error;
	    }
	};

	var parseJSON = function parseJSON(response) {
	    return response.json();
	};

	var arrayContains = function arrayContains(array, obj) {
	    for (var i = 0; i < array.length; i++) {
	        if (array[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	};

	var authCheck = function authCheck(authenticated, failUrl, sucUrl) {
	    console.log(authenticated);
	    if (!authenticated) {
	        console.log('goto ' + failUrl);
	        _history2['default'].pushState(null, failUrl);
	    } else if (typeof sucUrl != 'undefined') {
	        _history2['default'].pushState(null, sucUrl);
	    }
	};

	exports.createReducer = createReducer;
	exports.createConstants = createConstants;
	exports.checkHttpStatus = checkHttpStatus;
	exports.parseJSON = parseJSON;
	exports.roomData = _roomData2['default'];
	exports.arrayContains = arrayContains;
	exports.authCheck = authCheck;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/25.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _indexJs = __webpack_require__(263);

	var RoomData = (function () {
	    function RoomData() {
	        _classCallCheck(this, RoomData);

	        this._messages = {};
	        this._members = {};
	    }

	    _createClass(RoomData, [{
	        key: "addMember",
	        value: function addMember(roomID, member) {
	            if (this._members[roomID] == null) {
	                this._members[roomID] = {};
	            }
	            this._members[roomID][member.userID] = member;
	        }
	    }, {
	        key: "removeMember",
	        value: function removeMember(roomID, memberID) {
	            delete this._members[roomID][memberID];
	        }
	    }, {
	        key: "addMessage",
	        value: function addMessage(roomID, message) {
	            if (this._messages[roomID] == null) {
	                this._messages[roomID] = [];
	            }

	            if ((0, _indexJs.arrayContains)(this._members[roomID], message)) {
	                return;
	            }
	            this._messages[roomID].push(message);
	        }
	    }, {
	        key: "getMember",
	        value: function getMember(roomID, userID) {
	            return this._members[roomID][userID];
	        }
	    }, {
	        key: "getMembers",
	        value: function getMembers(roomID) {
	            var members = [];
	            for (var m in this._members[roomID]) {
	                if (this._members[roomID].hasOwnProperty(m)) {
	                    members.push(this._members[roomID][m]);
	                }
	            }
	            return members;
	        }
	    }, {
	        key: "getMessages",
	        value: function getMessages(roomID) {
	            if (typeof this._messages[roomID] == "undefined") {
	                return [];
	            }
	            return this._messages[roomID];
	        }
	    }]);

	    return RoomData;
	})();

	var roomData = new RoomData();

	exports["default"] = roomData;
	module.exports = exports["default"];

/***/ },
/* 265 */,
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {/**
	 * Created by Ben on 15/11/18.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.login = login;
	exports.loginSuccess = loginSuccess;
	exports.loginFail = loginFail;
	exports.loginRequest = loginRequest;
	exports.changeTab = changeTab;
	exports.signup = signup;
	exports.signupFail = signupFail;
	exports.chatInitialize = chatInitialize;
	exports.chatInitializeFail = chatInitializeFail;
	exports.chatInitializeSuccess = chatInitializeSuccess;
	exports.logout = logout;
	exports.tabInitialize = tabInitialize;
	exports.lobbyInitialize = lobbyInitialize;
	exports.roomInitialize = roomInitialize;
	exports.tabInitiallizeSuccess = tabInitiallizeSuccess;
	exports.createRoom = createRoom;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reduxRouter = __webpack_require__(233);

	var _constants = __webpack_require__(268);

	var _utils = __webpack_require__(263);

	var _utilsHistoryJs = __webpack_require__(247);

	var _utilsHistoryJs2 = _interopRequireDefault(_utilsHistoryJs);

	var API_BASE = 'http://localhost:3001/api/v1';

	// login

	function login(username, password) {
	    return function (dispatch) {
	        dispatch(loginRequest());
	        return fetch(API_BASE + '/login', {
	            method: 'post',
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
	            body: JSON.stringify({ username: username, password: password })
	        }).then(_utils.checkHttpStatus).then(_utils.parseJSON).then(function (response) {
	            dispatch(loginSuccess(response.TOKEN));
	            _utilsHistoryJs2['default'].pushState(null, '/chat');
	        })['catch'](function (err) {
	            if (err.response != null) {
	                err.response.json().then(function (json) {
	                    dispatch(loginFail(json.ERR));
	                });
	            } else {
	                console.log(err);
	            }
	        });
	    };
	}

	function loginSuccess(token) {
	    return {
	        type: _constants.LOGIN_SUCCESS,
	        payload: {
	            token: token
	        }
	    };
	}

	function loginFail(error) {
	    return {
	        type: _constants.LOGIN_FAIL,
	        payload: {
	            loginError: error
	        }
	    };
	}

	function loginRequest() {
	    return {
	        type: _constants.LOGIN_REQUEST
	    };
	}

	function changeTab(newType, newID, name) {
	    return function (dispatch, getState) {
	        var state = getState();
	        console.log(state.chat.initializedTab);

	        dispatch({
	            type: _constants.TAB_CHANGED,
	            payload: {
	                initialized: state.chat.initializedTab[newID],
	                Type: newType,
	                ID: newID,
	                Name: name,
	                messageList: _utils.roomData.getMessages(newID),
	                memberList: _utils.roomData.getMembers(newID)
	            }
	        });

	        // call api save current tab
	        fetch(API_BASE + '/save_current_tab', {
	            method: 'post',
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json',
	                'Authorization': 'Bearer ' + state.auth.token
	            },
	            body: JSON.stringify({ ID: newID, Type: newType })
	        }).then(_utils.checkHttpStatus).then(_utils.parseJSON).then(function (response) {
	            console.log(response);
	        })['catch'](function (err) {
	            if (err.response != null) {
	                err.response.json().then(function (json) {
	                    console.log(json);
	                });
	            } else {
	                console.log(err);
	            }
	        });
	    };
	}

	// signup

	function signup(username, password) {
	    return function (dispatch) {
	        return fetch(API_BASE + '/signup', {
	            method: 'post',
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json'
	            },
	            body: JSON.stringify({ username: username, password: password })
	        }).then(_utils.checkHttpStatus).then(_utils.parseJSON).then(function (response) {
	            // do login after signup
	            dispatch(loginSuccess(response.TOKEN));
	            _utilsHistoryJs2['default'].pushState(null, '/chat');
	        })['catch'](function (err) {
	            if (err.response != null) {
	                err.response.json().then(function (json) {
	                    dispatch(signupFail(json.ERR));
	                });
	            } else {
	                console.log(err);
	            }
	        });
	    };
	}

	function signupFail(error) {
	    return {
	        type: _constants.SIGNUP_FAIL,
	        payload: {
	            signupError: error
	        }
	    };
	}

	// chat page initialization functions

	function chatInitialize() {
	    return function (dispatch, getState) {
	        var state = getState();
	        var token = state.auth.token;

	        fetch(API_BASE + '/chat_initialize', {
	            method: 'get',
	            headers: {
	                'Authorization': 'Bearer ' + token
	            }
	        }).then(_utils.checkHttpStatus).then(_utils.parseJSON).then(function (response) {
	            var currentTab = response.currentTab;
	            for (var i in response.roomList) {
	                var room = response.roomList[i];
	                if (room.ID == currentTab.ID) {
	                    currentTab.Name = room.Name;
	                }
	            }

	            dispatch(chatInitializeSuccess({
	                initialized: true,
	                currentTab: currentTab,
	                roomList: response.roomList
	            }));
	        })['catch'](function (err) {
	            if (err.response != null) {
	                err.response.json().then(function (json) {
	                    dispatch(chatInitializeFail(json.ERR));
	                });
	            } else {
	                console.log(err);
	            }
	        });
	    };
	}

	function chatInitializeFail(error) {
	    return {
	        type: CHAT_INITIALIZE_FAIL,
	        payload: {
	            signupError: error
	        }
	    };
	}

	function chatInitializeSuccess(payload) {
	    return {
	        type: _constants.CHAT_INITIALIZE_SUCCESS,
	        payload: payload
	    };
	}

	function logout() {
	    return function (dispatch) {
	        localStorage.removeItem('token');
	        dispatch({ type: _constants.LOGOUT });
	        _utilsHistoryJs2['default'].replaceState('/login');
	    };
	}

	// channel initialization functions

	function tabInitialize() {
	    return function (dispatch, getstate) {
	        var state = getstate();
	        switch (state.chat.currentTab.Type) {
	            case _constants.TAB_LOBBY:
	                lobbyInitialize(dispatch, state);
	                return;
	            case _constants.TAB_ROOM:
	                roomInitialize(dispatch, state);
	                return;
	            case _constants.TAB_PEER:
	                return;

	        }
	    };
	}

	function lobbyInitialize(dispatch, state) {
	    var currentTab = state.chat.currentTab;
	    var token = state.auth.token;

	    //fetch the roomlist
	    fetch(API_BASE + '/lobby_initialize', {
	        method: 'get',
	        headers: {
	            'Authorization': 'Bearer ' + token
	        }
	    }).then(_utils.checkHttpStatus).then(_utils.parseJSON).then(function (response) {
	        dispatch(tabInitiallizeSuccess(currentTab.ID));
	        dispatch({
	            type: _constants.LOBBY_INITIALIZE_SUCCESS,
	            payload: {
	                lobbyRoomList: response.roomList,
	                ID: currentTab.ID
	            }
	        });
	    })['catch'](function (err) {
	        if (err.response != null) {
	            err.response.json().then(function (json) {});
	        } else {
	            console.log(err);
	        }
	    });
	}

	function roomInitialize(dispatch, state) {
	    var token = state.auth.token;
	    var roomID = state.chat.currentTab.ID;

	    fetch(API_BASE + '/room_initialize?roomID=' + roomID, {
	        method: 'get',
	        headers: {
	            'Authorization': 'Bearer ' + token
	        }
	    }).then(_utils.checkHttpStatus).then(_utils.parseJSON).then(function (response) {
	        // save memberList and message list to cache
	        for (var i in response.memberList) {
	            _utils.roomData.addMember(roomID, response.memberList[i]);
	        }
	        for (var i in response.messageList) {
	            _utils.roomData.addMessage(roomID, response.messageList[i]);
	        }

	        // initialize success
	        dispatch(tabInitiallizeSuccess(roomID));
	        dispatch({
	            type: _constants.ROOM_INITIALIZE_SUCCESS,
	            payload: {
	                messageList: _utils.roomData.getMessages(roomID),
	                memberList: _utils.roomData.getMembers(roomID),
	                ID: roomID
	            }
	        });
	    })['catch'](function (err) {
	        if (err.response != null) {
	            err.response.json().then(function (json) {
	                console.log(json.ERR);
	            });
	        } else {
	            console.log(err);
	        }
	    });
	}

	function tabInitiallizeSuccess(tabID) {
	    return {
	        type: _constants.TAB_INITIALIZE_SUCCESS,
	        payload: { ID: tabID }
	    };
	}

	function createRoom(data) {
	    return function (dispatch, getState) {
	        console.log(data);
	        var state = getState();
	        var token = state.auth.token;
	        fetch(API_BASE + '/create_room', {
	            method: 'post',
	            headers: {
	                'Accept': 'application/json',
	                'Content-Type': 'application/json',
	                'Authorization': 'Bearer ' + token
	            },
	            body: JSON.stringify({ name: data.name, description: data.description })
	        }).then(_utils.checkHttpStatus).then(_utils.parseJSON).then(function (response) {
	            if (data.modalCb) {
	                data.modalCb();
	            }
	            dispatch({
	                type: _constants.ROOM_CREATED,
	                payload: {
	                    ID: response.ID, Name: response.Name
	                }
	            });
	            console.log(response);
	            dispatch(changeTab(_constants.TAB_ROOM, response.ID, data.name));
	        })['catch'](function (err) {
	            if (err.response != null) {
	                err.response.json().then(function (json) {
	                    console.log(json);
	                });
	            } else {
	                console.log(err);
	            }
	        });
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(267)))

/***/ },
/* 267 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
	(function() {

	(function() {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function Body() {
	    this.bodyUsed = false


	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return;
	      }

	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})();


	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.fetch
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/18.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _utils = __webpack_require__(263);

	exports['default'] = (0, _utils.createConstants)('LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAIL', 'LOGOUT', 'LOGOUT', 'SIGNUP_REQUEST', 'SIGNUP_FAIL', 'CHAT_INITIALIZE_FAIL', 'CHAT_INITIALIZE_SUCCESS', 'TAB_INITIALIZE_FAIL', 'TAB_INITIALIZE_SUCCESS', 'ROOM_INITIALIZED', 'ROOM_CHANGING', 'ROOM_CHANGED', 'ROOMLIST_INITIALIZED', 'LEAVE_ROOM', 'JOIN_ROOM', 'CREATE_ROOM', 'NEW_MESSAGE', 'MEMBER_ACTIVE', 'MEMBER_UNACTIVE', 'MEMBER_JOIN', 'MEMBER_LEAVE', 'TAB_LOBBY', 'TAB_ROOM', 'TAB_PEER', 'TAB_CHANGED', 'CHANGE_TAB', 'ROOM_CREATED', 'LOBBY_INITIALIZE_SUCCESS', 'ROOM_INITIALIZE_SUCCESS');
	module.exports = exports['default'];

/***/ },
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/18.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(223);

	var _reduxThunk = __webpack_require__(281);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _routes = __webpack_require__(246);

	var _routes2 = _interopRequireDefault(_routes);

	var _reducers = __webpack_require__(282);

	var _reducers2 = _interopRequireDefault(_reducers);

	function configureStore(initialState) {

	    var ceateStoreWithMiddleware = undefined;

	    if (true) {
	        var _require = __webpack_require__(285);

	        var persistState = _require.persistState;
	        var devTools = _require.devTools;

	        ceateStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default']), devTools(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)));
	    } else {
	        ceateStoreWithMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default'], createLogger));
	    }

	    var store = ceateStoreWithMiddleware(_redux.createStore)(_reducers2['default'], initialState);

	    return store;
	}

	module.exports = exports['default'];

/***/ },
/* 281 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = thunkMiddleware;

	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/18.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(223);

	var _auth = __webpack_require__(283);

	var _auth2 = _interopRequireDefault(_auth);

	var _chat = __webpack_require__(284);

	var _chat2 = _interopRequireDefault(_chat);

	exports['default'] = (0, _redux.combineReducers)({
	  auth: _auth2['default'], chat: _chat2['default']
	});
	module.exports = exports['default'];

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/18.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createReducer;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utils = __webpack_require__(263);

	var _constants = __webpack_require__(268);

	var initialState = {
	    token: null,
	    userName: null,
	    isAuthenticated: false,
	    loginError: null
	};

	exports['default'] = (0, _utils.createReducer)(initialState, (_createReducer = {}, _defineProperty(_createReducer, _constants.LOGIN_REQUEST, function (state, payload) {
	    return Object.assign({}, state, {
	        'isAuthenticating': true,
	        'loginError': null
	    });
	}), _defineProperty(_createReducer, _constants.LOGIN_SUCCESS, function (state, payload) {
	    localStorage.setItem('token', payload.token);
	    try {
	        return Object.assign({}, state, {
	            'isAuthenticated': true,
	            'token': payload.token
	        });
	    } catch (e) {
	        localStorage.removeItem('token');
	        return Object.assign({}, state, {
	            'isAuthenticated': false,
	            'token': null
	        });
	    }
	}), _defineProperty(_createReducer, _constants.LOGIN_FAIL, function (state, payload) {
	    return Object.assign({}, state, {
	        'isAuthenticated': false,
	        'token': null,
	        'loginError': payload.loginError,
	        'isAuthenticating': false
	    });
	}), _defineProperty(_createReducer, _constants.SIGNUP_FAIL, function (state, payload) {
	    return Object.assign({}, state, {
	        'isAuthenticated': false,
	        'token': null,
	        'signupError': payload.signupError,
	        'isAuthenticating': false
	    });
	}), _defineProperty(_createReducer, _constants.SIGNUP_REQUEST, function (state, payload) {
	    return Object.assign({}, state, {
	        'isAuthenticated': false,
	        'token': null,
	        'signupError': null,
	        'isAuthenticating': false
	    });
	}), _defineProperty(_createReducer, _constants.LOGOUT, function (state) {
	    return Object.assign({}, state, initialState);
	}), _createReducer));
	module.exports = exports['default'];

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ben on 15/11/27.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createReducer, _createReducer2, _createReducer3, _createReducer4, _createReducer6;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _utils = __webpack_require__(263);

	var _redux = __webpack_require__(223);

	var _constants = __webpack_require__(268);

	var tabInitialState = {
	    initialized: false,
	    Type: null,
	    ID: null,
	    Name: ''
	};

	var initialized = (0, _utils.createReducer)(false, (_createReducer = {}, _defineProperty(_createReducer, _constants.CHAT_INITIALIZE_SUCCESS, function (state, payload) {
	    return true;
	}), _defineProperty(_createReducer, _constants.LOGOUT, function (state) {
	    return false;
	}), _createReducer));

	var currentTab = (0, _utils.createReducer)(tabInitialState, (_createReducer2 = {}, _defineProperty(_createReducer2, _constants.CHAT_INITIALIZE_SUCCESS, function (state, payload) {
	    return {
	        initialized: false,
	        Type: payload.currentTab.Type,
	        ID: payload.currentTab.ID,
	        Name: payload.currentTab.Name
	    };
	}), _defineProperty(_createReducer2, _constants.TAB_INITIALIZE_SUCCESS, function (state, payload) {
	    return Object.assign({}, state, {
	        initialized: true
	    });
	}), _defineProperty(_createReducer2, _constants.TAB_CHANGING, function (state, payload) {
	    return Object.assign({}, state, {
	        initialized: false
	    });
	}), _defineProperty(_createReducer2, _constants.TAB_CHANGED, function (state, payload) {
	    return Object.assign({}, state, {
	        initialized: payload.initialized,
	        Type: payload.Type,
	        ID: payload.ID,
	        Name: payload.Name
	    });
	}), _createReducer2));

	var roomList = (0, _utils.createReducer)([], (_createReducer3 = {}, _defineProperty(_createReducer3, _constants.CHAT_INITIALIZE_SUCCESS, function (state, payload) {
	    return payload.roomList;
	}), _defineProperty(_createReducer3, _constants.LEAVE_ROOM, function (state, payload) {
	    return [].concat(_toConsumableArray(state.slice(0, payload.index)), _toConsumableArray(state.slice(payload.index + 1)));
	}), _defineProperty(_createReducer3, _constants.JOIN_ROOM, function (state, payload) {
	    return [payload.room].concat(_toConsumableArray(state));
	}), _defineProperty(_createReducer3, _constants.ROOM_CREATED, function (state, payload) {
	    return [{
	        ID: payload.ID,
	        Name: payload.Name
	    }].concat(_toConsumableArray(state));
	}), _createReducer3));

	var messageList = (0, _utils.createReducer)([], (_createReducer4 = {}, _defineProperty(_createReducer4, _constants.ROOM_INITIALIZE_SUCCESS, function (state, payload) {
	    return [].concat(_toConsumableArray(payload.messageList));
	}), _defineProperty(_createReducer4, _constants.NEW_MESSAGE, function (state, payload) {
	    return [].concat(_toConsumableArray(state), [payload.message]);
	}), _defineProperty(_createReducer4, _constants.TAB_CHANGING, function (state, payload) {
	    return [];
	}), _createReducer4));

	var initializedTab = (0, _utils.createReducer)([], _defineProperty({}, _constants.TAB_INITIALIZE_SUCCESS, function (state, payload) {
	    state[payload.ID] = true;
	    return Object.assign({}, state);
	}));

	var memberList = (0, _utils.createReducer)([], (_createReducer6 = {}, _defineProperty(_createReducer6, _constants.ROOM_INITIALIZE_SUCCESS, function (state, payload) {
	    return [].concat(_toConsumableArray(payload.memberList));
	}), _defineProperty(_createReducer6, _constants.MEMBER_ACTIVE, function (state, payload) {
	    return [].concat(_toConsumableArray(payload.memberList));
	}), _defineProperty(_createReducer6, _constants.MEMBER_UNACTIVE, function (state, payload) {
	    return [].concat(_toConsumableArray(payload.memberList));
	}), _defineProperty(_createReducer6, _constants.MEMBER_JOIN, function (state, payload) {
	    return [].concat(_toConsumableArray(payload.memberList));
	}), _defineProperty(_createReducer6, _constants.MEMBER_LEAVE, function (sate, payload) {
	    return [].concat(_toConsumableArray(payload.memberList));
	}), _defineProperty(_createReducer6, _constants.TAB_CHANGING, function (state, payload) {
	    return [];
	}), _defineProperty(_createReducer6, _constants.TAB_CHANGED, function (state, payload) {
	    return [].concat(_toConsumableArray(payload.memberList));
	}), _createReducer6));

	var lobbyRoomList = (0, _utils.createReducer)([], _defineProperty({}, _constants.LOBBY_INITIALIZE_SUCCESS, function (stated, payload) {
	    return payload.lobbyRoomList;
	}));

	exports['default'] = (0, _redux.combineReducers)({
	    initialized: initialized,
	    currentTab: currentTab,
	    roomList: roomList,
	    messageList: messageList,
	    memberList: memberList,
	    initializedTab: initializedTab,
	    lobbyRoomList: lobbyRoomList
	});
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _devTools = __webpack_require__(286);

	exports.devTools = _interopRequire(_devTools);

	var _persistState = __webpack_require__(287);

	exports.persistState = _interopRequire(_persistState);

/***/ },
/* 286 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = devTools;
	var ActionTypes = {
	  PERFORM_ACTION: 'PERFORM_ACTION',
	  RESET: 'RESET',
	  ROLLBACK: 'ROLLBACK',
	  COMMIT: 'COMMIT',
	  SWEEP: 'SWEEP',
	  TOGGLE_ACTION: 'TOGGLE_ACTION',
	  JUMP_TO_STATE: 'JUMP_TO_STATE',
	  SET_MONITOR_STATE: 'SET_MONITOR_STATE',
	  RECOMPUTE_STATES: 'RECOMPUTE_STATES'
	};

	var INIT_ACTION = {
	  type: '@@INIT'
	};

	function toggle(obj, key) {
	  var clone = _extends({}, obj);
	  if (clone[key]) {
	    delete clone[key];
	  } else {
	    clone[key] = true;
	  }
	  return clone;
	}

	/**
	 * Computes the next entry in the log by applying an action.
	 */
	function computeNextEntry(reducer, action, state, error) {
	  if (error) {
	    return {
	      state: state,
	      error: 'Interrupted by an error up the chain'
	    };
	  }

	  var nextState = state;
	  var nextError = undefined;
	  try {
	    nextState = reducer(state, action);
	  } catch (err) {
	    nextError = err.toString();
	    console.error(err.stack || err);
	  }

	  return {
	    state: nextState,
	    error: nextError
	  };
	}

	/**
	 * Runs the reducer on all actions to get a fresh computation log.
	 * It's probably a good idea to do this only if the code has changed,
	 * but until we have some tests we'll just do it every time an action fires.
	 */
	function recomputeStates(reducer, committedState, stagedActions, skippedActions) {
	  var computedStates = [];

	  for (var i = 0; i < stagedActions.length; i++) {
	    var action = stagedActions[i];

	    var previousEntry = computedStates[i - 1];
	    var previousState = previousEntry ? previousEntry.state : committedState;
	    var previousError = previousEntry ? previousEntry.error : undefined;

	    var shouldSkip = Boolean(skippedActions[i]);
	    var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError);

	    computedStates.push(entry);
	  }

	  return computedStates;
	}

	/**
	 * Lifts the app state reducer into a DevTools state reducer.
	 */
	function liftReducer(reducer, initialState) {
	  var initialLiftedState = {
	    committedState: initialState,
	    stagedActions: [INIT_ACTION],
	    skippedActions: {},
	    currentStateIndex: 0,
	    monitorState: {
	      isVisible: true
	    },
	    timestamps: [Date.now()]
	  };

	  /**
	   * Manages how the DevTools actions modify the DevTools state.
	   */
	  return function liftedReducer(liftedState, liftedAction) {
	    if (liftedState === undefined) liftedState = initialLiftedState;

	    var shouldRecomputeStates = true;
	    var committedState = liftedState.committedState;
	    var stagedActions = liftedState.stagedActions;
	    var skippedActions = liftedState.skippedActions;
	    var computedStates = liftedState.computedStates;
	    var currentStateIndex = liftedState.currentStateIndex;
	    var monitorState = liftedState.monitorState;
	    var timestamps = liftedState.timestamps;

	    switch (liftedAction.type) {
	      case ActionTypes.RESET:
	        committedState = initialState;
	        stagedActions = [INIT_ACTION];
	        skippedActions = {};
	        currentStateIndex = 0;
	        timestamps = [liftedAction.timestamp];
	        break;
	      case ActionTypes.COMMIT:
	        committedState = computedStates[currentStateIndex].state;
	        stagedActions = [INIT_ACTION];
	        skippedActions = {};
	        currentStateIndex = 0;
	        timestamps = [liftedAction.timestamp];
	        break;
	      case ActionTypes.ROLLBACK:
	        stagedActions = [INIT_ACTION];
	        skippedActions = {};
	        currentStateIndex = 0;
	        timestamps = [liftedAction.timestamp];
	        break;
	      case ActionTypes.TOGGLE_ACTION:
	        skippedActions = toggle(skippedActions, liftedAction.index);
	        break;
	      case ActionTypes.JUMP_TO_STATE:
	        currentStateIndex = liftedAction.index;
	        // Optimization: we know the history has not changed.
	        shouldRecomputeStates = false;
	        break;
	      case ActionTypes.SWEEP:
	        stagedActions = stagedActions.filter(function (_, i) {
	          return !skippedActions[i];
	        });
	        timestamps = timestamps.filter(function (_, i) {
	          return !skippedActions[i];
	        });
	        skippedActions = {};
	        currentStateIndex = Math.min(currentStateIndex, stagedActions.length - 1);
	        break;
	      case ActionTypes.PERFORM_ACTION:
	        if (currentStateIndex === stagedActions.length - 1) {
	          currentStateIndex++;
	        }

	        stagedActions = [].concat(stagedActions, [liftedAction.action]);
	        timestamps = [].concat(timestamps, [liftedAction.timestamp]);

	        // Optimization: we know that the past has not changed.
	        shouldRecomputeStates = false;
	        // Instead of recomputing the states, append the next one.
	        var previousEntry = computedStates[computedStates.length - 1];
	        var nextEntry = computeNextEntry(reducer, liftedAction.action, previousEntry.state, previousEntry.error);
	        computedStates = [].concat(computedStates, [nextEntry]);
	        break;
	      case ActionTypes.SET_MONITOR_STATE:
	        monitorState = liftedAction.monitorState;
	        break;
	      case ActionTypes.RECOMPUTE_STATES:
	        stagedActions = liftedAction.stagedActions;
	        timestamps = liftedAction.timestamps;
	        committedState = liftedAction.committedState;
	        currentStateIndex = stagedActions.length - 1;
	        skippedActions = {};
	        break;
	      default:
	        break;
	    }

	    if (shouldRecomputeStates) {
	      computedStates = recomputeStates(reducer, committedState, stagedActions, skippedActions);
	    }

	    return {
	      committedState: committedState,
	      stagedActions: stagedActions,
	      skippedActions: skippedActions,
	      computedStates: computedStates,
	      currentStateIndex: currentStateIndex,
	      monitorState: monitorState,
	      timestamps: timestamps
	    };
	  };
	}

	/**
	 * Lifts an app action to a DevTools action.
	 */
	function liftAction(action) {
	  var liftedAction = {
	    type: ActionTypes.PERFORM_ACTION,
	    action: action,
	    timestamp: Date.now()
	  };
	  return liftedAction;
	}

	/**
	 * Unlifts the DevTools state to the app state.
	 */
	function unliftState(liftedState) {
	  var computedStates = liftedState.computedStates;
	  var currentStateIndex = liftedState.currentStateIndex;
	  var state = computedStates[currentStateIndex].state;

	  return state;
	}

	/**
	 * Unlifts the DevTools store to act like the app's store.
	 */
	function unliftStore(liftedStore, reducer) {
	  var lastDefinedState = undefined;
	  return _extends({}, liftedStore, {
	    devToolsStore: liftedStore,
	    dispatch: function dispatch(action) {
	      liftedStore.dispatch(liftAction(action));
	      return action;
	    },
	    getState: function getState() {
	      var state = unliftState(liftedStore.getState());
	      if (state !== undefined) {
	        lastDefinedState = state;
	      }
	      return lastDefinedState;
	    },
	    getReducer: function getReducer() {
	      return reducer;
	    },
	    replaceReducer: function replaceReducer(nextReducer) {
	      liftedStore.replaceReducer(liftReducer(nextReducer));
	    }
	  });
	}

	/**
	 * Action creators to change the DevTools state.
	 */
	var ActionCreators = {
	  reset: function reset() {
	    return { type: ActionTypes.RESET, timestamp: Date.now() };
	  },
	  rollback: function rollback() {
	    return { type: ActionTypes.ROLLBACK, timestamp: Date.now() };
	  },
	  commit: function commit() {
	    return { type: ActionTypes.COMMIT, timestamp: Date.now() };
	  },
	  sweep: function sweep() {
	    return { type: ActionTypes.SWEEP };
	  },
	  toggleAction: function toggleAction(index) {
	    return { type: ActionTypes.TOGGLE_ACTION, index: index };
	  },
	  jumpToState: function jumpToState(index) {
	    return { type: ActionTypes.JUMP_TO_STATE, index: index };
	  },
	  setMonitorState: function setMonitorState(monitorState) {
	    return { type: ActionTypes.SET_MONITOR_STATE, monitorState: monitorState };
	  },
	  recomputeStates: function recomputeStates(committedState, stagedActions) {
	    return {
	      type: ActionTypes.RECOMPUTE_STATES,
	      committedState: committedState,
	      stagedActions: stagedActions
	    };
	  }
	};

	exports.ActionCreators = ActionCreators;
	/**
	 * Redux DevTools middleware.
	 */

	function devTools() {
	  return function (next) {
	    return function (reducer, initialState) {
	      var liftedReducer = liftReducer(reducer, initialState);
	      var liftedStore = next(liftedReducer);
	      var store = unliftStore(liftedStore, reducer);
	      return store;
	    };
	  };
	}

/***/ },
/* 287 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = persistState;

	function persistState(sessionId) {
	  var stateDeserializer = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var actionDeserializer = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  if (!sessionId) {
	    return function (next) {
	      return function () {
	        return next.apply(undefined, arguments);
	      };
	    };
	  }

	  function deserializeState(fullState) {
	    return _extends({}, fullState, {
	      committedState: stateDeserializer(fullState.committedState),
	      computedStates: fullState.computedStates.map(function (computedState) {
	        return _extends({}, computedState, {
	          state: stateDeserializer(computedState.state)
	        });
	      })
	    });
	  }

	  function deserializeActions(fullState) {
	    return _extends({}, fullState, {
	      stagedActions: fullState.stagedActions.map(function (action) {
	        return actionDeserializer(action);
	      })
	    });
	  }

	  function deserialize(fullState) {
	    if (!fullState) {
	      return fullState;
	    }
	    var deserializedState = fullState;
	    if (typeof stateDeserializer === 'function') {
	      deserializedState = deserializeState(deserializedState);
	    }
	    if (typeof actionDeserializer === 'function') {
	      deserializedState = deserializeActions(deserializedState);
	    }
	    return deserializedState;
	  }

	  return function (next) {
	    return function (reducer, initialState) {
	      var key = 'redux-dev-session-' + sessionId;

	      var finalInitialState = undefined;
	      try {
	        finalInitialState = deserialize(JSON.parse(localStorage.getItem(key))) || initialState;
	        next(reducer, initialState);
	      } catch (e) {
	        console.warn('Could not read debug session from localStorage:', e);
	        try {
	          localStorage.removeItem(key);
	        } finally {
	          finalInitialState = undefined;
	        }
	      }

	      var store = next(reducer, finalInitialState);

	      return _extends({}, store, {
	        dispatch: function dispatch(action) {
	          store.dispatch(action);

	          try {
	            localStorage.setItem(key, JSON.stringify(store.getState()));
	          } catch (e) {
	            console.warn('Could not write debug session to localStorage:', e);
	          }

	          return action;
	        }
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _createDevTools = __webpack_require__(289);

	var _createDevTools2 = _interopRequireDefault(_createDevTools);

	var DevTools = _createDevTools2['default'](_react2['default']);
	exports.DevTools = DevTools;

	var _LogMonitor = __webpack_require__(297);

	exports.LogMonitor = _interopRequire(_LogMonitor);

	var _DebugPanel = __webpack_require__(428);

	exports.DebugPanel = _interopRequire(_DebugPanel);

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = createDevTools;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactReduxLibComponentsCreateAll = __webpack_require__(290);

	var _reactReduxLibComponentsCreateAll2 = _interopRequireDefault(_reactReduxLibComponentsCreateAll);

	var _devTools = __webpack_require__(286);

	function createDevTools(React) {
	  var PropTypes = React.PropTypes;
	  var Component = React.Component;

	  var _createAll = _reactReduxLibComponentsCreateAll2['default'](React);

	  var connect = _createAll.connect;

	  var DevTools = (function (_Component) {
	    _inherits(DevTools, _Component);

	    function DevTools() {
	      _classCallCheck(this, _DevTools);

	      _Component.apply(this, arguments);
	    }

	    DevTools.prototype.render = function render() {
	      var Monitor = this.props.monitor;

	      return React.createElement(Monitor, this.props);
	    };

	    var _DevTools = DevTools;
	    DevTools = connect(function (state) {
	      return state;
	    }, _devTools.ActionCreators)(DevTools) || DevTools;
	    return DevTools;
	  })(Component);

	  return (function (_Component2) {
	    _inherits(DevToolsWrapper, _Component2);

	    _createClass(DevToolsWrapper, null, [{
	      key: 'propTypes',
	      value: {
	        monitor: PropTypes.func.isRequired,
	        store: PropTypes.shape({
	          devToolsStore: PropTypes.shape({
	            dispatch: PropTypes.func.isRequired
	          }).isRequired
	        }).isRequired
	      },
	      enumerable: true
	    }]);

	    function DevToolsWrapper(props, context) {
	      _classCallCheck(this, DevToolsWrapper);

	      if (props.store && !props.store.devToolsStore) {
	        console.error('Could not find the devTools store inside your store. ' + 'Have you applied devTools() store enhancer?');
	      }
	      _Component2.call(this, props, context);
	    }

	    DevToolsWrapper.prototype.render = function render() {
	      return React.createElement(DevTools, _extends({}, this.props, {
	        store: this.props.store.devToolsStore }));
	    };

	    return DevToolsWrapper;
	  })(Component);
	}

	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createProvider = __webpack_require__(291);

	var _createProvider2 = _interopRequireDefault(_createProvider);

	var _createConnect = __webpack_require__(293);

	var _createConnect2 = _interopRequireDefault(_createConnect);

	function createAll(React) {
	  var Provider = _createProvider2['default'](React);
	  var connect = _createConnect2['default'](React);

	  return { Provider: Provider, connect: connect };
	}

	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createProvider;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(292);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	function isUsingOwnerContext(React) {
	  var version = React.version;

	  if (typeof version !== 'string') {
	    return true;
	  }

	  var sections = version.split('.');
	  var major = parseInt(sections[0], 10);
	  var minor = parseInt(sections[1], 10);

	  return major === 0 && minor === 13;
	}

	function createProvider(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;
	  var Children = React.Children;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
	  var requireFunctionChild = isUsingOwnerContext(React);

	  var didWarnAboutChild = false;
	  function warnAboutFunctionChild() {
	    if (didWarnAboutChild || requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.14 and later versions, you no longer need to ' + 'wrap <Provider> child into a function.');
	  }
	  function warnAboutElementChild() {
	    if (didWarnAboutChild || !requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.13, you need to ' + 'wrap <Provider> child into a function. ' + 'This restriction will be removed with React 0.14.');
	  }

	  var didWarnAboutReceivingStore = false;
	  function warnAboutReceivingStore() {
	    if (didWarnAboutReceivingStore) {
	      return;
	    }

	    didWarnAboutReceivingStore = true;
	    console.error( // eslint-disable-line no-console
	    '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }

	  var Provider = (function (_Component) {
	    _inherits(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	      return { store: this.store };
	    };

	    function Provider(props, context) {
	      _classCallCheck(this, Provider);

	      _Component.call(this, props, context);
	      this.store = props.store;
	    }

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var store = this.store;
	      var nextStore = nextProps.store;

	      if (store !== nextStore) {
	        warnAboutReceivingStore();
	      }
	    };

	    Provider.prototype.render = function render() {
	      var children = this.props.children;

	      if (typeof children === 'function') {
	        warnAboutFunctionChild();
	        children = children();
	      } else {
	        warnAboutElementChild();
	      }

	      return Children.only(children);
	    };

	    return Provider;
	  })(Component);

	  Provider.childContextTypes = {
	    store: storeShape.isRequired
	  };
	  Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: (requireFunctionChild ? PropTypes.func : PropTypes.element).isRequired
	  };

	  return Provider;
	}

	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createStoreShape;

	function createStoreShape(PropTypes) {
	  return PropTypes.shape({
	    subscribe: PropTypes.func.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    getState: PropTypes.func.isRequired
	  });
	}

	module.exports = exports["default"];

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createConnect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(292);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	var _utilsShallowEqual = __webpack_require__(294);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(295);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(296);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(232);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(161);

	var _invariant2 = _interopRequireDefault(_invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function createConnect(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    var shouldSubscribe = Boolean(mapStateToProps);
	    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	    var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	    var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	    var _options$pure = options.pure;
	    var pure = _options$pure === undefined ? true : _options$pure;

	    // Helps track hot reloading.
	    var version = nextVersion++;

	    function computeStateProps(store, props) {
	      var state = store.getState();
	      var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	      _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	      return stateProps;
	    }

	    function computeDispatchProps(store, props) {
	      var dispatch = store.dispatch;

	      var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	      _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	      return dispatchProps;
	    }

	    function _computeNextState(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	      return mergedProps;
	    }

	    return function wrapWithConnect(WrappedComponent) {
	      var Connect = (function (_Component) {
	        _inherits(Connect, _Component);

	        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	          if (!pure) {
	            this.updateStateProps(nextProps);
	            this.updateDispatchProps(nextProps);
	            this.updateState(nextProps);
	            return true;
	          }

	          var storeChanged = nextState.storeState !== this.state.storeState;
	          var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	          var mapStateProducedChange = false;
	          var dispatchPropsChanged = false;

	          if (storeChanged || propsChanged && shouldUpdateStateProps) {
	            mapStateProducedChange = this.updateStateProps(nextProps);
	          }

	          if (propsChanged && shouldUpdateDispatchProps) {
	            dispatchPropsChanged = this.updateDispatchProps(nextProps);
	          }

	          if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	            this.updateState(nextProps);
	            return true;
	          }

	          return false;
	        };

	        function Connect(props, context) {
	          _classCallCheck(this, Connect);

	          _Component.call(this, props, context);
	          this.version = version;
	          this.store = props.store || context.store;

	          _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

	          this.stateProps = computeStateProps(this.store, props);
	          this.dispatchProps = computeDispatchProps(this.store, props);
	          this.state = { storeState: null };
	          this.updateState();
	        }

	        Connect.prototype.computeNextState = function computeNextState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          return _computeNextState(this.stateProps, this.dispatchProps, props);
	        };

	        Connect.prototype.updateStateProps = function updateStateProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextStateProps = computeStateProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	            return false;
	          }

	          this.stateProps = nextStateProps;
	          return true;
	        };

	        Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextDispatchProps = computeDispatchProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	            return false;
	          }

	          this.dispatchProps = nextDispatchProps;
	          return true;
	        };

	        Connect.prototype.updateState = function updateState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          this.nextState = this.computeNextState(props);
	        };

	        Connect.prototype.isSubscribed = function isSubscribed() {
	          return typeof this.unsubscribe === 'function';
	        };

	        Connect.prototype.trySubscribe = function trySubscribe() {
	          if (shouldSubscribe && !this.unsubscribe) {
	            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	            this.handleChange();
	          }
	        };

	        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        };

	        Connect.prototype.componentDidMount = function componentDidMount() {
	          this.trySubscribe();
	        };

	        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	          this.tryUnsubscribe();
	        };

	        Connect.prototype.handleChange = function handleChange() {
	          if (!this.unsubscribe) {
	            return;
	          }

	          this.setState({
	            storeState: this.store.getState()
	          });
	        };

	        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	          return this.refs.wrappedInstance;
	        };

	        Connect.prototype.render = function render() {
	          return React.createElement(WrappedComponent, _extends({ ref: 'wrappedInstance'
	          }, this.nextState));
	        };

	        return Connect;
	      })(Component);

	      Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	      Connect.WrappedComponent = WrappedComponent;
	      Connect.contextTypes = {
	        store: storeShape
	      };
	      Connect.propTypes = {
	        store: storeShape
	      };

	      if (process.env.NODE_ENV !== 'production') {
	        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	          if (this.version === version) {
	            return;
	          }

	          // We are hot reloading!
	          this.version = version;

	          // Update the state and bindings.
	          this.trySubscribe();
	          this.updateStateProps();
	          this.updateDispatchProps();
	          this.updateState();
	        };
	      }

	      return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	    };
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 295 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(223);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LogMonitorEntry = __webpack_require__(298);

	var _LogMonitorEntry2 = _interopRequireDefault(_LogMonitorEntry);

	var _LogMonitorButton = __webpack_require__(387);

	var _LogMonitorButton2 = _interopRequireDefault(_LogMonitorButton);

	var _themes = __webpack_require__(389);

	var themes = _interopRequireWildcard(_themes);

	var styles = {
	  container: {
	    fontFamily: 'monaco, Consolas, Lucida Console, monospace',
	    position: 'relative',
	    overflowY: 'hidden',
	    width: '100%',
	    height: '100%',
	    minWidth: 300
	  },
	  buttonBar: {
	    textAlign: 'center',
	    borderBottomWidth: 1,
	    borderBottomStyle: 'solid',
	    borderColor: 'transparent',
	    zIndex: 1,
	    display: 'flex',
	    flexDirection: 'row'
	  },
	  elements: {
	    position: 'absolute',
	    left: 0,
	    right: 0,
	    top: 38,
	    bottom: 0,
	    overflowX: 'hidden',
	    overflowY: 'auto'
	  }
	};

	var LogMonitor = (function (_Component) {
	  _inherits(LogMonitor, _Component);

	  function LogMonitor(props) {
	    _classCallCheck(this, LogMonitor);

	    _Component.call(this, props);
	    if (typeof window !== 'undefined') {
	      window.addEventListener('keydown', this.handleKeyPress.bind(this));
	    }
	  }

	  LogMonitor.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var node = _react.findDOMNode(this.refs.elements);
	    if (!node) {
	      this.scrollDown = true;
	    } else if (this.props.stagedActions.length < nextProps.stagedActions.length) {
	      var scrollTop = node.scrollTop;
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;

	      this.scrollDown = Math.abs(scrollHeight - (scrollTop + offsetHeight)) < 20;
	    } else {
	      this.scrollDown = false;
	    }
	  };

	  LogMonitor.prototype.componentDidUpdate = function componentDidUpdate() {
	    var node = _react.findDOMNode(this.refs.elements);
	    if (!node) {
	      return;
	    }
	    if (this.scrollDown) {
	      var offsetHeight = node.offsetHeight;
	      var scrollHeight = node.scrollHeight;

	      node.scrollTop = scrollHeight - offsetHeight;
	      this.scrollDown = false;
	    }
	  };

	  LogMonitor.prototype.componentWillMount = function componentWillMount() {
	    var visibleOnLoad = this.props.visibleOnLoad;
	    var monitorState = this.props.monitorState;

	    this.props.setMonitorState(_extends({}, monitorState, {
	      isVisible: visibleOnLoad
	    }));
	  };

	  LogMonitor.prototype.handleRollback = function handleRollback() {
	    this.props.rollback();
	  };

	  LogMonitor.prototype.handleSweep = function handleSweep() {
	    this.props.sweep();
	  };

	  LogMonitor.prototype.handleCommit = function handleCommit() {
	    this.props.commit();
	  };

	  LogMonitor.prototype.handleToggleAction = function handleToggleAction(index) {
	    this.props.toggleAction(index);
	  };

	  LogMonitor.prototype.handleReset = function handleReset() {
	    this.props.reset();
	  };

	  LogMonitor.prototype.handleKeyPress = function handleKeyPress(event) {
	    var monitorState = this.props.monitorState;

	    if (event.ctrlKey && event.keyCode === 72) {
	      // Ctrl+H
	      event.preventDefault();
	      this.props.setMonitorState(_extends({}, monitorState, {
	        isVisible: !monitorState.isVisible
	      }));
	    }
	  };

	  LogMonitor.prototype.render = function render() {
	    var elements = [];
	    var _props = this.props;
	    var monitorState = _props.monitorState;
	    var skippedActions = _props.skippedActions;
	    var stagedActions = _props.stagedActions;
	    var computedStates = _props.computedStates;
	    var select = _props.select;

	    var theme = undefined;
	    if (typeof this.props.theme === 'string') {
	      if (typeof themes[this.props.theme] !== 'undefined') {
	        theme = themes[this.props.theme];
	      } else {
	        console.warn('DevTools theme ' + this.props.theme + ' not found, defaulting to nicinabox');
	        theme = themes.nicinabox;
	      }
	    } else {
	      theme = this.props.theme;
	    }
	    if (!monitorState.isVisible) {
	      return null;
	    }

	    for (var i = 0; i < stagedActions.length; i++) {
	      var action = stagedActions[i];
	      var _computedStates$i = computedStates[i];
	      var state = _computedStates$i.state;
	      var error = _computedStates$i.error;

	      var previousState = undefined;
	      if (i > 0) {
	        previousState = computedStates[i - 1].state;
	      }
	      elements.push(_react2['default'].createElement(_LogMonitorEntry2['default'], { key: i,
	        index: i,
	        theme: theme,
	        select: select,
	        action: action,
	        state: state,
	        previousState: previousState,
	        collapsed: skippedActions[i],
	        error: error,
	        onActionClick: this.handleToggleAction.bind(this) }));
	    }

	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({}, styles.container, { backgroundColor: theme.base00 }) },
	      _react2['default'].createElement(
	        'div',
	        { style: _extends({}, styles.buttonBar, { borderColor: theme.base02 }) },
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleReset.bind(this) },
	          'Reset'
	        ),
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleRollback.bind(this), enabled: computedStates.length },
	          'Revert'
	        ),
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleSweep.bind(this), enabled: Object.keys(skippedActions).some(function (key) {
	              return skippedActions[key];
	            }) },
	          'Sweep'
	        ),
	        _react2['default'].createElement(
	          _LogMonitorButton2['default'],
	          { theme: theme, onClick: this.handleCommit.bind(this), enabled: computedStates.length > 1 },
	          'Commit'
	        )
	      ),
	      _react2['default'].createElement(
	        'div',
	        { style: styles.elements, ref: 'elements' },
	        elements
	      )
	    );
	  };

	  _createClass(LogMonitor, null, [{
	    key: 'propTypes',
	    value: {
	      computedStates: _react.PropTypes.array.isRequired,
	      currentStateIndex: _react.PropTypes.number.isRequired,
	      monitorState: _react.PropTypes.object.isRequired,
	      stagedActions: _react.PropTypes.array.isRequired,
	      skippedActions: _react.PropTypes.object.isRequired,
	      reset: _react.PropTypes.func.isRequired,
	      commit: _react.PropTypes.func.isRequired,
	      rollback: _react.PropTypes.func.isRequired,
	      sweep: _react.PropTypes.func.isRequired,
	      toggleAction: _react.PropTypes.func.isRequired,
	      jumpToState: _react.PropTypes.func.isRequired,
	      setMonitorState: _react.PropTypes.func.isRequired,
	      select: _react.PropTypes.func.isRequired,
	      visibleOnLoad: _react.PropTypes.bool,
	      theme: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      select: function select(state) {
	        return state;
	      },
	      monitorState: { isVisible: true },
	      theme: 'nicinabox',
	      visibleOnLoad: true
	    },
	    enumerable: true
	  }]);

	  return LogMonitor;
	})(_react.Component);

	exports['default'] = LogMonitor;
	module.exports = exports['default'];

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsonTree = __webpack_require__(299);

	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

	var _LogMonitorEntryAction = __webpack_require__(386);

	var _LogMonitorEntryAction2 = _interopRequireDefault(_LogMonitorEntryAction);

	var styles = {
	  entry: {
	    display: 'block',
	    WebkitUserSelect: 'none'
	  },
	  tree: {
	    paddingLeft: 0
	  }
	};

	var LogMonitorEntry = (function (_Component) {
	  _inherits(LogMonitorEntry, _Component);

	  function LogMonitorEntry() {
	    _classCallCheck(this, LogMonitorEntry);

	    _Component.apply(this, arguments);
	  }

	  LogMonitorEntry.prototype.printState = function printState(state, error) {
	    var errorText = error;
	    if (!errorText) {
	      try {
	        return _react2['default'].createElement(_reactJsonTree2['default'], {
	          theme: this.props.theme,
	          keyName: 'state',
	          data: this.props.select(state),
	          previousData: this.props.select(this.props.previousState),
	          style: styles.tree });
	      } catch (err) {
	        errorText = 'Error selecting state.';
	      }
	    }
	    return _react2['default'].createElement(
	      'div',
	      { style: {
	          color: this.props.theme.base08,
	          paddingTop: 20,
	          paddingLeft: 30,
	          paddingRight: 30,
	          paddingBottom: 35
	        } },
	      errorText
	    );
	  };

	  LogMonitorEntry.prototype.handleActionClick = function handleActionClick() {
	    var _props = this.props;
	    var index = _props.index;
	    var onActionClick = _props.onActionClick;

	    if (index > 0) {
	      onActionClick(index);
	    }
	  };

	  LogMonitorEntry.prototype.render = function render() {
	    var _props2 = this.props;
	    var index = _props2.index;
	    var error = _props2.error;
	    var action = _props2.action;
	    var state = _props2.state;
	    var collapsed = _props2.collapsed;

	    var styleEntry = {
	      opacity: collapsed ? 0.5 : 1,
	      cursor: index > 0 ? 'pointer' : 'default'
	    };
	    return _react2['default'].createElement(
	      'div',
	      { style: { textDecoration: collapsed ? 'line-through' : 'none' } },
	      _react2['default'].createElement(_LogMonitorEntryAction2['default'], {
	        theme: this.props.theme,
	        collapsed: collapsed,
	        action: action,
	        onClick: this.handleActionClick.bind(this),
	        style: _extends({}, styles.entry, styleEntry) }),
	      !collapsed && _react2['default'].createElement(
	        'div',
	        null,
	        this.printState(state, error)
	      )
	    );
	  };

	  _createClass(LogMonitorEntry, null, [{
	    key: 'propTypes',
	    value: {
	      index: _react.PropTypes.number.isRequired,
	      state: _react.PropTypes.object.isRequired,
	      action: _react.PropTypes.object.isRequired,
	      select: _react.PropTypes.func.isRequired,
	      error: _react.PropTypes.string,
	      onActionClick: _react.PropTypes.func.isRequired,
	      collapsed: _react.PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  return LogMonitorEntry;
	})(_react.Component);

	exports['default'] = LogMonitorEntry;
	module.exports = exports['default'];

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// ES6 + inline style port of JSONViewer https://bitbucket.org/davevedder/react-json-viewer/
	// all credits and original code to the author
	// Dave Vedder <veddermatic@gmail.com> http://www.eskimospy.com/
	// port by Daniele Zannotti http://www.github.com/dzannotti <dzannotti@me.com>

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _createClass = __webpack_require__(315)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _grabNode = __webpack_require__(330);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var _themesSolarized = __webpack_require__(385);

	var _themesSolarized2 = _interopRequireDefault(_themesSolarized);

	var styles = {
	  tree: {
	    border: 0,
	    padding: 0,
	    marginTop: 8,
	    marginBottom: 8,
	    marginLeft: 2,
	    marginRight: 0,
	    fontSize: '0.90em',
	    listStyle: 'none',
	    MozUserSelect: 'none',
	    WebkitUserSelect: 'none'
	  }
	};

	var JSONTree = (function (_React$Component) {
	  _inherits(JSONTree, _React$Component);

	  _createClass(JSONTree, null, [{
	    key: 'propTypes',
	    value: {
	      data: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object]).isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      theme: _themesSolarized2['default']
	    },
	    enumerable: true
	  }]);

	  function JSONTree(props) {
	    _classCallCheck(this, JSONTree);

	    _React$Component.call(this, props);
	  }

	  JSONTree.prototype.render = function render() {
	    var keyName = this.props.keyName || 'root';
	    var rootNode = _grabNode2['default'](keyName, this.props.data, this.props.previousData, this.props.theme, true);
	    return _react2['default'].createElement(
	      'ul',
	      { style: _extends({}, styles.tree, this.props.style) },
	      rootNode
	    );
	  };

	  return JSONTree;
	})(_react2['default'].Component);

	exports['default'] = JSONTree;
	module.exports = exports['default'];

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(301)["default"];

	var _Object$setPrototypeOf = __webpack_require__(304)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(302), __esModule: true };

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(303);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 303 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(305), __esModule: true };

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(306);
	module.exports = __webpack_require__(309).Object.setPrototypeOf;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(307);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(312).set});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(308)
	  , core      = __webpack_require__(309)
	  , ctx       = __webpack_require__(310)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 308 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 309 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(311);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 311 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(303).getDesc
	  , isObject = __webpack_require__(313)
	  , anObject = __webpack_require__(314);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(310)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(313);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(316)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(317), __esModule: true };

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(303);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 318 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(320)["default"];

	exports["default"] = _Object$assign || function (target) {
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

	exports.__esModule = true;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(321), __esModule: true };

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(322);
	module.exports = __webpack_require__(309).Object.assign;

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(307);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(323)});

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(303)
	  , toObject = __webpack_require__(324)
	  , IObject  = __webpack_require__(326);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(328)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(325);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 325 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(327);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 327 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 329 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _objType = __webpack_require__(331);

	var _objType2 = _interopRequireDefault(_objType);

	var _JSONObjectNode = __webpack_require__(355);

	var _JSONObjectNode2 = _interopRequireDefault(_JSONObjectNode);

	var _JSONArrayNode = __webpack_require__(368);

	var _JSONArrayNode2 = _interopRequireDefault(_JSONArrayNode);

	var _JSONIterableNode = __webpack_require__(369);

	var _JSONIterableNode2 = _interopRequireDefault(_JSONIterableNode);

	var _JSONStringNode = __webpack_require__(379);

	var _JSONStringNode2 = _interopRequireDefault(_JSONStringNode);

	var _JSONNumberNode = __webpack_require__(381);

	var _JSONNumberNode2 = _interopRequireDefault(_JSONNumberNode);

	var _JSONBooleanNode = __webpack_require__(382);

	var _JSONBooleanNode2 = _interopRequireDefault(_JSONBooleanNode);

	var _JSONNullNode = __webpack_require__(383);

	var _JSONNullNode2 = _interopRequireDefault(_JSONNullNode);

	var _JSONDateNode = __webpack_require__(384);

	var _JSONDateNode2 = _interopRequireDefault(_JSONDateNode);

	exports['default'] = function (key, value, prevValue, theme) {
	  var initialExpanded = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

	  var nodeType = _objType2['default'](value);
	  if (nodeType === 'Object') {
	    return _react2['default'].createElement(_JSONObjectNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key });
	  } else if (nodeType === 'Array') {
	    return _react2['default'].createElement(_JSONArrayNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key });
	  } else if (nodeType === 'Iterable') {
	    return _react2['default'].createElement(_JSONIterableNode2['default'], { data: value, previousData: prevValue, theme: theme, initialExpanded: initialExpanded, keyName: key, key: key });
	  } else if (nodeType === 'String') {
	    return _react2['default'].createElement(_JSONStringNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Number') {
	    return _react2['default'].createElement(_JSONNumberNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Boolean') {
	    return _react2['default'].createElement(_JSONBooleanNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Date') {
	    return _react2['default'].createElement(_JSONDateNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  } else if (nodeType === 'Null') {
	    return _react2['default'].createElement(_JSONNullNode2['default'], { keyName: key, previousValue: prevValue, theme: theme, value: value, key: key });
	  }
	  return false;
	};

	module.exports = exports['default'];

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol$iterator = __webpack_require__(332)['default'];

	exports.__esModule = true;

	exports['default'] = function (obj) {
	  if (obj !== null && typeof obj === 'object' && !Array.isArray(obj) && typeof obj[_Symbol$iterator] === 'function') {
	    return 'Iterable';
	  }
	  return Object.prototype.toString.call(obj).slice(8, -1);
	};

	module.exports = exports['default'];

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(333), __esModule: true };

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(334);
	__webpack_require__(350);
	module.exports = __webpack_require__(347)('iterator');

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(335)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(337)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(336)
	  , defined   = __webpack_require__(325);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 336 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(338)
	  , $export        = __webpack_require__(307)
	  , redefine       = __webpack_require__(339)
	  , hide           = __webpack_require__(340)
	  , has            = __webpack_require__(343)
	  , Iterators      = __webpack_require__(344)
	  , $iterCreate    = __webpack_require__(345)
	  , setToStringTag = __webpack_require__(346)
	  , getProto       = __webpack_require__(303).getProto
	  , ITERATOR       = __webpack_require__(347)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 338 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(340);

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(303)
	  , createDesc = __webpack_require__(341);
	module.exports = __webpack_require__(342) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(328)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 343 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 344 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(303)
	  , descriptor     = __webpack_require__(341)
	  , setToStringTag = __webpack_require__(346)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(340)(IteratorPrototype, __webpack_require__(347)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(303).setDesc
	  , has = __webpack_require__(343)
	  , TAG = __webpack_require__(347)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(348)('wks')
	  , uid    = __webpack_require__(349)
	  , Symbol = __webpack_require__(308).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(308)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 349 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(351);
	var Iterators = __webpack_require__(344);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(352)
	  , step             = __webpack_require__(353)
	  , Iterators        = __webpack_require__(344)
	  , toIObject        = __webpack_require__(354);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(337)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 352 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 353 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(326)
	  , defined = __webpack_require__(325);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _Object$keys = __webpack_require__(356)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _JSONArrow = __webpack_require__(367);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	var _grabNode = __webpack_require__(330);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};

	var JSONObjectNode = (function (_React$Component) {
	  _inherits(JSONObjectNode, _React$Component);

	  function JSONObjectNode(props) {
	    _classCallCheck(this, _JSONObjectNode);

	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.itemString = false;
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }

	  // Returns the child nodes for each element in the object. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.

	  JSONObjectNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var obj = this.props.data;
	      var childNodes = [];
	      for (var k in obj) {
	        if (obj.hasOwnProperty(k)) {
	          var prevData = undefined;
	          if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	            prevData = this.props.previousData[k];
	          }
	          var node = _grabNode2['default'](k, obj[k], prevData, this.props.theme);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };

	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.

	  JSONObjectNode.prototype.getItemString = function getItemString() {
	    if (!this.itemString) {
	      var len = _Object$keys(this.props.data).length;
	      this.itemString = len + ' key' + (len !== 1 ? 's' : '');
	    }
	    return this.itemString;
	  };

	  JSONObjectNode.prototype.render = function render() {
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0B
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: spanStyle, onClick: this.handleClick.bind(this) },
	        _react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '{}'
	        ),
	        this.getItemString()
	      ),
	      _react2['default'].createElement(
	        'ul',
	        { style: childListStyle },
	        this.getChildNodes()
	      )
	    );
	  };

	  var _JSONObjectNode = JSONObjectNode;
	  JSONObjectNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONObjectNode) || JSONObjectNode;
	  return JSONObjectNode;
	})(_react2['default'].Component);

	exports['default'] = JSONObjectNode;
	module.exports = exports['default'];

	// cache store for the number of items string we display

	// flag to see if we still need to render our child nodes

	// cache store for our child nodes

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(357), __esModule: true };

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(358);
	module.exports = __webpack_require__(309).Object.keys;

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(324);

	__webpack_require__(359)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(307)
	  , core    = __webpack_require__(309)
	  , fails   = __webpack_require__(328);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(361);
	var assign = __webpack_require__(362);

	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});

	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;

	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();

	    delete reactMixin.getDefaultProps;
	  }
	}

	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;

	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }

	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }

	    delete reactMixin.getInitialState;
	  }
	}

	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);

	  var prototypeMethods = {};
	  var staticProps = {};

	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });

	  mixinProto(reactClass.prototype, prototypeMethods);

	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;

	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });

	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });

	    return result;
	  };

	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);

	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];

	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }

	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }

	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }

	  return reactClass;
	}

	module.exports = (function() {
	  var reactMixin = mixinProto;

	  reactMixin.onClass = function(reactClass, mixin) {
	    return mixinClass(reactClass, mixin);
	  };

	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };

	  return reactMixin;
	})();


/***/ },
/* 361 */
/***/ function(module, exports) {

	var objToStr = function(x){ return Object.prototype.toString.call(x); };

	var thrower = function(error){
	    throw error;
	};

	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }

	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = function(left, right, key){
	            if (left !== undefined && right !== undefined) {
	                var getTypeName = function(obj){
	                    if (obj && obj.constructor && obj.constructor.name) {
	                        return obj.constructor.name;
	                    }
	                    else {
	                        return objToStr(obj).slice(8, -1);
	                    }
	                };
	                throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                        + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	            }
	            return left === undefined ? right : left;
	        };
	    }

	    function setNonEnumerable(target, key, value){
	        if (key in target){
	            target[key] = value;
	        }
	        else {
	            Object.defineProperty(target, key, {
	                value: value,
	                writable: true,
	                configurable: true
	            });
	        }
	    }

	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];

	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;

	            var wrapIfFunction = function(thing){
	                return typeof thing !== "function" ? thing
	                : function(){
	                    return thing.call(this, arguments);
	                };
	            };

	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }

	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";

	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }

	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};

	mixins._mergeObjects = function(obj1, obj2) {
	    var assertObject = function(obj, obj2){
	        var type = objToStr(obj);
	        if (type !== '[object Object]') {
	            var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	            var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	            thrower('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	        }
	    };

	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }

	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);

	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            thrower('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });

	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;

	}

	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }

	    var fn = left || right;

	    return function(args){
	        return fn.apply(this, args);
	    };
	};

	mixins.MANY = function(left, right, key){
	    return function(args){
	        if (right) right.apply(this, args);
	        return left ? left.apply(this, args) : undefined;
	    };
	};

	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if(left && right) {
	        return mixins._mergeObjects(left, right);
	    }

	    return left || right;
	}

	mixins.MANY_MERGED = function(left, right, key){
	    return function(args){
	        var res1 = right && right.apply(this, args);
	        var res2 = left && left.apply(this, args);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};


	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return right.call(this, left.apply(this, args));
	    };
	};

	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || function(x){ return x };
	    var right = _right || function(x){ return x };
	    return function(args){
	        return left.call(this, right.apply(this, args));
	    };
	};



/***/ },
/* 362 */
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequire = __webpack_require__(364)['default'];

	exports.__esModule = true;

	var _squashClickEvent = __webpack_require__(365);

	exports.SquashClickEventMixin = _interopRequire(_squashClickEvent);

	var _expandedStateHandler = __webpack_require__(366);

	exports.ExpandedStateHandlerMixin = _interopRequire(_expandedStateHandler);

/***/ },
/* 364 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj["default"] : obj;
	};

	exports.__esModule = true;

/***/ },
/* 365 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 366 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  handleClick: function handleClick(e) {
	    e.stopPropagation();
	    this.setState({
	      expanded: !this.state.expanded
	    });
	  },

	  componentWillReceiveProps: function componentWillReceiveProps() {
	    // resets our caches and flags we need to build child nodes again
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.needsChildNodes = true;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var styles = {
	  base: {
	    display: 'inline-block',
	    marginLeft: 0,
	    marginTop: 8,
	    marginRight: 5,
	    'float': 'left',
	    transition: '150ms',
	    WebkitTransition: '150ms',
	    MozTransition: '150ms',
	    borderLeft: '5px solid transparent',
	    borderRight: '5px solid transparent',
	    borderTopWidth: 5,
	    borderTopStyle: 'solid',
	    WebkitTransform: 'rotateZ(-90deg)',
	    MozTransform: 'rotateZ(-90deg)',
	    transform: 'rotateZ(-90deg)'
	  },
	  open: {
	    WebkitTransform: 'rotateZ(0deg)',
	    MozTransform: 'rotateZ(0deg)',
	    transform: 'rotateZ(0deg)'
	  }
	};

	var JSONArrow = (function (_React$Component) {
	  _inherits(JSONArrow, _React$Component);

	  function JSONArrow() {
	    _classCallCheck(this, JSONArrow);

	    _React$Component.apply(this, arguments);
	  }

	  JSONArrow.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      borderTopColor: this.props.theme.base0D
	    });
	    if (this.props.open) {
	      style = _extends({}, style, styles.open);
	    }
	    return _react2['default'].createElement('div', { style: style, onClick: this.props.onClick });
	  };

	  return JSONArrow;
	})(_react2['default'].Component);

	exports['default'] = JSONArrow;
	module.exports = exports['default'];

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _JSONArrow = __webpack_require__(367);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	var _grabNode = __webpack_require__(330);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};

	var JSONArrayNode = (function (_React$Component) {
	  _inherits(JSONArrayNode, _React$Component);

	  function JSONArrayNode(props) {
	    _classCallCheck(this, _JSONArrayNode);

	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }

	  // Returns the child nodes for each element in the array. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.

	  JSONArrayNode.prototype.getChildNodes = function getChildNodes() {
	    var _this = this;

	    if (this.state.expanded && this.needsChildNodes) {
	      (function () {
	        var childNodes = [];
	        _this.props.data.forEach(function (element, idx) {
	          var prevData = undefined;
	          if (typeof _this.props.previousData !== 'undefined' && _this.props.previousData !== null) {
	            prevData = _this.props.previousData[idx];
	          }
	          var node = _grabNode2['default'](idx, element, prevData, _this.props.theme);
	          if (node !== false) {
	            childNodes.push(node);
	          }
	        });
	        _this.needsChildNodes = false;
	        _this.renderedChildren = childNodes;
	      })();
	    }
	    return this.renderedChildren;
	  };

	  // Returns the "n Items" string for this node, generating and
	  // caching it if it hasn't been created yet.

	  JSONArrayNode.prototype.getItemString = function getItemString() {
	    if (!this.itemString) {
	      this.itemString = this.props.data.length + ' item' + (this.props.data.length !== 1 ? 's' : '');
	    }
	    return this.itemString;
	  };

	  JSONArrayNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: spanStyle, onClick: this.handleClick.bind(this) },
	        _react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '[]'
	        ),
	        this.getItemString()
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: childListStyle },
	        childNodes
	      )
	    );
	  };

	  var _JSONArrayNode = JSONArrayNode;
	  JSONArrayNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONArrayNode) || JSONArrayNode;
	  return JSONArrayNode;
	})(_react2['default'].Component);

	exports['default'] = JSONArrayNode;
	module.exports = exports['default'];

	// flag to see if we still need to render our child nodes

	// cache store for our child nodes

	// cache store for the number of items string we display

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _getIterator = __webpack_require__(370)['default'];

	var _Number$isSafeInteger = __webpack_require__(375)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _JSONArrow = __webpack_require__(367);

	var _JSONArrow2 = _interopRequireDefault(_JSONArrow);

	var _grabNode = __webpack_require__(330);

	var _grabNode2 = _interopRequireDefault(_grabNode);

	var styles = {
	  base: {
	    position: 'relative',
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    margin: 0,
	    padding: 0,
	    display: 'inline-block'
	  },
	  span: {
	    cursor: 'default'
	  },
	  spanType: {
	    marginLeft: 5,
	    marginRight: 5
	  }
	};

	var JSONIterableNode = (function (_React$Component) {
	  _inherits(JSONIterableNode, _React$Component);

	  function JSONIterableNode(props) {
	    _classCallCheck(this, _JSONIterableNode);

	    _React$Component.call(this, props);
	    this.defaultProps = {
	      data: [],
	      initialExpanded: false
	    };
	    this.needsChildNodes = true;
	    this.renderedChildren = [];
	    this.itemString = false;
	    this.state = {
	      expanded: this.props.initialExpanded,
	      createdChildNodes: false
	    };
	  }

	  // Returns the child nodes for each entry in iterable. If we have
	  // generated them previously, we return from cache, otherwise we create
	  // them.

	  JSONIterableNode.prototype.getChildNodes = function getChildNodes() {
	    if (this.state.expanded && this.needsChildNodes) {
	      var childNodes = [];
	      for (var _iterator = this.props.data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var entry = _ref;

	        var key = null;
	        var value = null;
	        if (Array.isArray(entry)) {
	          key = entry[0];
	          value = entry[1];
	        } else {
	          key = childNodes.length;
	          value = entry;
	        }

	        var prevData = undefined;
	        if (typeof this.props.previousData !== 'undefined' && this.props.previousData !== null) {
	          prevData = this.props.previousData[key];
	        }
	        var node = _grabNode2['default'](key, value, prevData, this.props.theme);
	        if (node !== false) {
	          childNodes.push(node);
	        }
	      }
	      this.needsChildNodes = false;
	      this.renderedChildren = childNodes;
	    }
	    return this.renderedChildren;
	  };

	  // Returns the "n entries" string for this node, generating and
	  // caching it if it hasn't been created yet.

	  JSONIterableNode.prototype.getItemString = function getItemString() {
	    if (!this.itemString) {
	      var data = this.props.data;

	      var count = 0;
	      if (_Number$isSafeInteger(data.size)) {
	        count = data.size;
	      } else {
	        for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
	          var _ref2;

	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }

	          var entry = _ref2;
	          // eslint-disable-line no-unused-vars
	          count += 1;
	        }
	      }
	      this.itemString = count + ' entr' + (count !== 1 ? 'ies' : 'y');
	    }
	    return this.itemString;
	  };

	  JSONIterableNode.prototype.render = function render() {
	    var childNodes = this.getChildNodes();
	    var childListStyle = {
	      padding: 0,
	      margin: 0,
	      listStyle: 'none',
	      display: this.state.expanded ? 'block' : 'none'
	    };
	    var containerStyle = undefined;
	    var spanStyle = _extends({}, styles.span, {
	      color: this.props.theme.base0E
	    });
	    containerStyle = _extends({}, styles.base);
	    if (this.state.expanded) {
	      spanStyle = _extends({}, spanStyle, {
	        color: this.props.theme.base03
	      });
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: containerStyle },
	      _react2['default'].createElement(_JSONArrow2['default'], { theme: this.props.theme, open: this.state.expanded, onClick: this.handleClick.bind(this) }),
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }), onClick: this.handleClick.bind(this) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: spanStyle, onClick: this.handleClick.bind(this) },
	        _react2['default'].createElement(
	          'span',
	          { style: styles.spanType },
	          '()'
	        ),
	        this.getItemString()
	      ),
	      _react2['default'].createElement(
	        'ol',
	        { style: childListStyle },
	        childNodes
	      )
	    );
	  };

	  var _JSONIterableNode = JSONIterableNode;
	  JSONIterableNode = _reactMixin2['default'].decorate(_mixins.ExpandedStateHandlerMixin)(JSONIterableNode) || JSONIterableNode;
	  return JSONIterableNode;
	})(_react2['default'].Component);

	exports['default'] = JSONIterableNode;
	module.exports = exports['default'];

	// flag to see if we still need to render our child nodes

	// cache store for our child nodes

	// cache store for the number of items string we display

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(371), __esModule: true };

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(350);
	__webpack_require__(334);
	module.exports = __webpack_require__(372);

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(314)
	  , get      = __webpack_require__(373);
	module.exports = __webpack_require__(309).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(374)
	  , ITERATOR  = __webpack_require__(347)('iterator')
	  , Iterators = __webpack_require__(344);
	module.exports = __webpack_require__(309).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(327)
	  , TAG = __webpack_require__(347)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(376), __esModule: true };

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(377);
	module.exports = __webpack_require__(309).Number.isSafeInteger;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(307)
	  , isInteger = __webpack_require__(378)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(313)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _utilsHexToRgb = __webpack_require__(380);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONStringNode = (function (_React$Component) {
	  _inherits(JSONStringNode, _React$Component);

	  function JSONStringNode() {
	    _classCallCheck(this, _JSONStringNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONStringNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base0B } },
	        '"',
	        this.props.value,
	        '"'
	      )
	    );
	  };

	  var _JSONStringNode = JSONStringNode;
	  JSONStringNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONStringNode) || JSONStringNode;
	  return JSONStringNode;
	})(_react2['default'].Component);

	exports['default'] = JSONStringNode;
	module.exports = exports['default'];

/***/ },
/* 380 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports["default"] = function (hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? {
	    r: parseInt(result[1], 16),
	    g: parseInt(result[2], 16),
	    b: parseInt(result[3], 16)
	  } : null;
	};

	module.exports = exports["default"];

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _utilsHexToRgb = __webpack_require__(380);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONNumberNode = (function (_React$Component) {
	  _inherits(JSONNumberNode, _React$Component);

	  function JSONNumberNode() {
	    _classCallCheck(this, _JSONNumberNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONNumberNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base09 } },
	        this.props.value
	      )
	    );
	  };

	  var _JSONNumberNode = JSONNumberNode;
	  JSONNumberNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNumberNode) || JSONNumberNode;
	  return JSONNumberNode;
	})(_react2['default'].Component);

	exports['default'] = JSONNumberNode;
	module.exports = exports['default'];

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _utilsHexToRgb = __webpack_require__(380);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONBooleanNode = (function (_React$Component) {
	  _inherits(JSONBooleanNode, _React$Component);

	  function JSONBooleanNode() {
	    _classCallCheck(this, _JSONBooleanNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONBooleanNode.prototype.render = function render() {
	    var truthString = this.props.value ? 'true' : 'false';
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base09 } },
	        truthString
	      )
	    );
	  };

	  var _JSONBooleanNode = JSONBooleanNode;
	  JSONBooleanNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONBooleanNode) || JSONBooleanNode;
	  return JSONBooleanNode;
	})(_react2['default'].Component);

	exports['default'] = JSONBooleanNode;
	module.exports = exports['default'];

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _utilsHexToRgb = __webpack_require__(380);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONNullNode = (function (_React$Component) {
	  _inherits(JSONNullNode, _React$Component);

	  function JSONNullNode() {
	    _classCallCheck(this, _JSONNullNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONNullNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base08 } },
	        'null'
	      )
	    );
	  };

	  var _JSONNullNode = JSONNullNode;
	  JSONNullNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONNullNode) || JSONNullNode;
	  return JSONNullNode;
	})(_react2['default'].Component);

	exports['default'] = JSONNullNode;
	module.exports = exports['default'];

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _inherits = __webpack_require__(300)['default'];

	var _classCallCheck = __webpack_require__(318)['default'];

	var _extends = __webpack_require__(319)['default'];

	var _interopRequireDefault = __webpack_require__(329)['default'];

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMixin = __webpack_require__(360);

	var _reactMixin2 = _interopRequireDefault(_reactMixin);

	var _mixins = __webpack_require__(363);

	var _utilsHexToRgb = __webpack_require__(380);

	var _utilsHexToRgb2 = _interopRequireDefault(_utilsHexToRgb);

	var styles = {
	  base: {
	    paddingTop: 3,
	    paddingBottom: 3,
	    paddingRight: 0,
	    marginLeft: 14
	  },
	  label: {
	    display: 'inline-block',
	    marginRight: 5
	  }
	};

	var JSONDateNode = (function (_React$Component) {
	  _inherits(JSONDateNode, _React$Component);

	  function JSONDateNode() {
	    _classCallCheck(this, _JSONDateNode);

	    _React$Component.apply(this, arguments);
	  }

	  JSONDateNode.prototype.render = function render() {
	    var backgroundColor = 'transparent';
	    if (this.props.previousValue !== this.props.value) {
	      var bgColor = _utilsHexToRgb2['default'](this.props.theme.base06);
	      backgroundColor = 'rgba(' + bgColor.r + ', ' + bgColor.g + ', ' + bgColor.b + ', 0.1)';
	    }
	    return _react2['default'].createElement(
	      'li',
	      { style: _extends({}, styles.base, { backgroundColor: backgroundColor }), onClick: this.handleClick.bind(this) },
	      _react2['default'].createElement(
	        'label',
	        { style: _extends({}, styles.label, {
	            color: this.props.theme.base0D
	          }) },
	        this.props.keyName,
	        ':'
	      ),
	      _react2['default'].createElement(
	        'span',
	        { style: { color: this.props.theme.base0B } },
	        this.props.value.toISOString()
	      )
	    );
	  };

	  var _JSONDateNode = JSONDateNode;
	  JSONDateNode = _reactMixin2['default'].decorate(_mixins.SquashClickEventMixin)(JSONDateNode) || JSONDateNode;
	  return JSONDateNode;
	})(_react2['default'].Component);

	exports['default'] = JSONDateNode;
	module.exports = exports['default'];

/***/ },
/* 385 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactJsonTree = __webpack_require__(299);

	var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

	var styles = {
	  actionBar: {
	    paddingTop: 8,
	    paddingBottom: 7,
	    paddingLeft: 16
	  },
	  payload: {
	    margin: 0,
	    overflow: 'auto'
	  }
	};

	var LogMonitorAction = (function (_React$Component) {
	  _inherits(LogMonitorAction, _React$Component);

	  function LogMonitorAction() {
	    _classCallCheck(this, LogMonitorAction);

	    _React$Component.apply(this, arguments);
	  }

	  LogMonitorAction.prototype.renderPayload = function renderPayload(payload) {
	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({}, styles.payload, {
	          backgroundColor: this.props.theme.base00
	        }) },
	      Object.keys(payload).length > 0 ? _react2['default'].createElement(_reactJsonTree2['default'], { theme: this.props.theme, keyName: 'action', data: payload }) : ''
	    );
	  };

	  LogMonitorAction.prototype.render = function render() {
	    var _props$action = this.props.action;
	    var type = _props$action.type;

	    var payload = _objectWithoutProperties(_props$action, ['type']);

	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({
	          backgroundColor: this.props.theme.base02,
	          color: this.props.theme.base06
	        }, this.props.style) },
	      _react2['default'].createElement(
	        'div',
	        { style: styles.actionBar,
	          onClick: this.props.onClick },
	        type
	      ),
	      !this.props.collapsed ? this.renderPayload(payload) : ''
	    );
	  };

	  return LogMonitorAction;
	})(_react2['default'].Component);

	exports['default'] = LogMonitorAction;
	module.exports = exports['default'];

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilsBrighten = __webpack_require__(388);

	var _utilsBrighten2 = _interopRequireDefault(_utilsBrighten);

	var styles = {
	  base: {
	    cursor: 'pointer',
	    fontWeight: 'bold',
	    borderRadius: 3,
	    padding: 4,
	    marginLeft: 3,
	    marginRight: 3,
	    marginTop: 5,
	    marginBottom: 5,
	    flexGrow: 1,
	    display: 'inline-block',
	    fontSize: '0.8em',
	    color: 'white',
	    textDecoration: 'none'
	  }
	};

	var LogMonitorButton = (function (_React$Component) {
	  _inherits(LogMonitorButton, _React$Component);

	  function LogMonitorButton(props) {
	    _classCallCheck(this, LogMonitorButton);

	    _React$Component.call(this, props);
	    this.state = {
	      hovered: false,
	      active: false
	    };
	  }

	  LogMonitorButton.prototype.handleMouseEnter = function handleMouseEnter() {
	    this.setState({ hovered: true });
	  };

	  LogMonitorButton.prototype.handleMouseLeave = function handleMouseLeave() {
	    this.setState({ hovered: false });
	  };

	  LogMonitorButton.prototype.handleMouseDown = function handleMouseDown() {
	    this.setState({ active: true });
	  };

	  LogMonitorButton.prototype.handleMouseUp = function handleMouseUp() {
	    this.setState({ active: false });
	  };

	  LogMonitorButton.prototype.onClick = function onClick() {
	    if (!this.props.enabled) {
	      return;
	    }
	    if (this.props.onClick) {
	      this.props.onClick();
	    }
	  };

	  LogMonitorButton.prototype.render = function render() {
	    var style = _extends({}, styles.base, {
	      backgroundColor: this.props.theme.base02
	    });
	    if (this.props.enabled && this.state.hovered) {
	      style = _extends({}, style, {
	        backgroundColor: _utilsBrighten2['default'](this.props.theme.base02, 0.2)
	      });
	    }
	    if (!this.props.enabled) {
	      style = _extends({}, style, {
	        opacity: 0.2,
	        cursor: 'text',
	        backgroundColor: 'transparent'
	      });
	    }
	    return _react2['default'].createElement(
	      'a',
	      { onMouseEnter: this.handleMouseEnter.bind(this),
	        onMouseLeave: this.handleMouseLeave.bind(this),
	        onMouseDown: this.handleMouseDown.bind(this),
	        onMouseUp: this.handleMouseUp.bind(this),
	        style: style, onClick: this.onClick.bind(this) },
	      this.props.children
	    );
	  };

	  return LogMonitorButton;
	})(_react2['default'].Component);

	exports['default'] = LogMonitorButton;
	module.exports = exports['default'];

/***/ },
/* 388 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (hexColor, lightness) {
	  var hex = String(hexColor).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex.replace(/(.)/g, '$1$1');
	  }
	  var lum = lightness || 0;

	  var rgb = '#';
	  var c = undefined;
	  for (var i = 0; i < 3; ++i) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }
	  return rgb;
	};

	module.exports = exports['default'];

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _threezerotwofour = __webpack_require__(390);

	exports.threezerotwofour = _interopRequire(_threezerotwofour);

	var _apathy = __webpack_require__(391);

	exports.apathy = _interopRequire(_apathy);

	var _ashes = __webpack_require__(392);

	exports.ashes = _interopRequire(_ashes);

	var _atelierDune = __webpack_require__(393);

	exports.atelierDune = _interopRequire(_atelierDune);

	var _atelierForest = __webpack_require__(394);

	exports.atelierForest = _interopRequire(_atelierForest);

	var _atelierHeath = __webpack_require__(395);

	exports.atelierHeath = _interopRequire(_atelierHeath);

	var _atelierLakeside = __webpack_require__(396);

	exports.atelierLakeside = _interopRequire(_atelierLakeside);

	var _atelierSeaside = __webpack_require__(397);

	exports.atelierSeaside = _interopRequire(_atelierSeaside);

	var _bespin = __webpack_require__(398);

	exports.bespin = _interopRequire(_bespin);

	var _brewer = __webpack_require__(399);

	exports.brewer = _interopRequire(_brewer);

	var _bright = __webpack_require__(400);

	exports.bright = _interopRequire(_bright);

	var _chalk = __webpack_require__(401);

	exports.chalk = _interopRequire(_chalk);

	var _codeschool = __webpack_require__(402);

	exports.codeschool = _interopRequire(_codeschool);

	var _colors = __webpack_require__(403);

	exports.colors = _interopRequire(_colors);

	var _default = __webpack_require__(404);

	exports['default'] = _interopRequire(_default);

	var _eighties = __webpack_require__(405);

	exports.eighties = _interopRequire(_eighties);

	var _embers = __webpack_require__(406);

	exports.embers = _interopRequire(_embers);

	var _flat = __webpack_require__(407);

	exports.flat = _interopRequire(_flat);

	var _google = __webpack_require__(408);

	exports.google = _interopRequire(_google);

	var _grayscale = __webpack_require__(409);

	exports.grayscale = _interopRequire(_grayscale);

	var _greenscreen = __webpack_require__(410);

	exports.greenscreen = _interopRequire(_greenscreen);

	var _harmonic = __webpack_require__(411);

	exports.harmonic = _interopRequire(_harmonic);

	var _hopscotch = __webpack_require__(412);

	exports.hopscotch = _interopRequire(_hopscotch);

	var _isotope = __webpack_require__(413);

	exports.isotope = _interopRequire(_isotope);

	var _marrakesh = __webpack_require__(414);

	exports.marrakesh = _interopRequire(_marrakesh);

	var _mocha = __webpack_require__(415);

	exports.mocha = _interopRequire(_mocha);

	var _monokai = __webpack_require__(416);

	exports.monokai = _interopRequire(_monokai);

	var _ocean = __webpack_require__(417);

	exports.ocean = _interopRequire(_ocean);

	var _paraiso = __webpack_require__(418);

	exports.paraiso = _interopRequire(_paraiso);

	var _pop = __webpack_require__(419);

	exports.pop = _interopRequire(_pop);

	var _railscasts = __webpack_require__(420);

	exports.railscasts = _interopRequire(_railscasts);

	var _shapeshifter = __webpack_require__(421);

	exports.shapeshifter = _interopRequire(_shapeshifter);

	var _solarized = __webpack_require__(422);

	exports.solarized = _interopRequire(_solarized);

	var _summerfruit = __webpack_require__(423);

	exports.summerfruit = _interopRequire(_summerfruit);

	var _tomorrow = __webpack_require__(424);

	exports.tomorrow = _interopRequire(_tomorrow);

	var _tube = __webpack_require__(425);

	exports.tube = _interopRequire(_tube);

	var _twilight = __webpack_require__(426);

	exports.twilight = _interopRequire(_twilight);

	var _nicinabox = __webpack_require__(427);

	exports.nicinabox = _interopRequire(_nicinabox);

/***/ },
/* 390 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'threezerotwofour',
	  author: 'jan t. sott (http://github.com/idleberg)',
	  base00: '#090300',
	  base01: '#3a3432',
	  base02: '#4a4543',
	  base03: '#5c5855',
	  base04: '#807d7c',
	  base05: '#a5a2a2',
	  base06: '#d6d5d4',
	  base07: '#f7f7f7',
	  base08: '#db2d20',
	  base09: '#e8bbd0',
	  base0A: '#fded02',
	  base0B: '#01a252',
	  base0C: '#b5e4f4',
	  base0D: '#01a0e4',
	  base0E: '#a16a94',
	  base0F: '#cdab53'
	};
	module.exports = exports['default'];

/***/ },
/* 391 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'apathy',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#031A16',
	  base01: '#0B342D',
	  base02: '#184E45',
	  base03: '#2B685E',
	  base04: '#5F9C92',
	  base05: '#81B5AC',
	  base06: '#A7CEC8',
	  base07: '#D2E7E4',
	  base08: '#3E9688',
	  base09: '#3E7996',
	  base0A: '#3E4C96',
	  base0B: '#883E96',
	  base0C: '#963E4C',
	  base0D: '#96883E',
	  base0E: '#4C963E',
	  base0F: '#3E965B'
	};
	module.exports = exports['default'];

/***/ },
/* 392 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ashes',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#1C2023',
	  base01: '#393F45',
	  base02: '#565E65',
	  base03: '#747C84',
	  base04: '#ADB3BA',
	  base05: '#C7CCD1',
	  base06: '#DFE2E5',
	  base07: '#F3F4F5',
	  base08: '#C7AE95',
	  base09: '#C7C795',
	  base0A: '#AEC795',
	  base0B: '#95C7AE',
	  base0C: '#95AEC7',
	  base0D: '#AE95C7',
	  base0E: '#C795AE',
	  base0F: '#C79595'
	};
	module.exports = exports['default'];

/***/ },
/* 393 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier dune',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)',
	  base00: '#20201d',
	  base01: '#292824',
	  base02: '#6e6b5e',
	  base03: '#7d7a68',
	  base04: '#999580',
	  base05: '#a6a28c',
	  base06: '#e8e4cf',
	  base07: '#fefbec',
	  base08: '#d73737',
	  base09: '#b65611',
	  base0A: '#cfb017',
	  base0B: '#60ac39',
	  base0C: '#1fad83',
	  base0D: '#6684e1',
	  base0E: '#b854d4',
	  base0F: '#d43552'
	};
	module.exports = exports['default'];

/***/ },
/* 394 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier forest',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)',
	  base00: '#1b1918',
	  base01: '#2c2421',
	  base02: '#68615e',
	  base03: '#766e6b',
	  base04: '#9c9491',
	  base05: '#a8a19f',
	  base06: '#e6e2e0',
	  base07: '#f1efee',
	  base08: '#f22c40',
	  base09: '#df5320',
	  base0A: '#d5911a',
	  base0B: '#5ab738',
	  base0C: '#00ad9c',
	  base0D: '#407ee7',
	  base0E: '#6666ea',
	  base0F: '#c33ff3'
	};
	module.exports = exports['default'];

/***/ },
/* 395 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier heath',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)',
	  base00: '#1b181b',
	  base01: '#292329',
	  base02: '#695d69',
	  base03: '#776977',
	  base04: '#9e8f9e',
	  base05: '#ab9bab',
	  base06: '#d8cad8',
	  base07: '#f7f3f7',
	  base08: '#ca402b',
	  base09: '#a65926',
	  base0A: '#bb8a35',
	  base0B: '#379a37',
	  base0C: '#159393',
	  base0D: '#516aec',
	  base0E: '#7b59c0',
	  base0F: '#cc33cc'
	};
	module.exports = exports['default'];

/***/ },
/* 396 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier lakeside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)',
	  base00: '#161b1d',
	  base01: '#1f292e',
	  base02: '#516d7b',
	  base03: '#5a7b8c',
	  base04: '#7195a8',
	  base05: '#7ea2b4',
	  base06: '#c1e4f6',
	  base07: '#ebf8ff',
	  base08: '#d22d72',
	  base09: '#935c25',
	  base0A: '#8a8a0f',
	  base0B: '#568c3b',
	  base0C: '#2d8f6f',
	  base0D: '#257fad',
	  base0E: '#5d5db1',
	  base0F: '#b72dd2'
	};
	module.exports = exports['default'];

/***/ },
/* 397 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'atelier seaside',
	  author: 'bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)',
	  base00: '#131513',
	  base01: '#242924',
	  base02: '#5e6e5e',
	  base03: '#687d68',
	  base04: '#809980',
	  base05: '#8ca68c',
	  base06: '#cfe8cf',
	  base07: '#f0fff0',
	  base08: '#e6193c',
	  base09: '#87711d',
	  base0A: '#c3c322',
	  base0B: '#29a329',
	  base0C: '#1999b3',
	  base0D: '#3d62f5',
	  base0E: '#ad2bee',
	  base0F: '#e619c3'
	};
	module.exports = exports['default'];

/***/ },
/* 398 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bespin',
	  author: 'jan t. sott',
	  base00: '#28211c',
	  base01: '#36312e',
	  base02: '#5e5d5c',
	  base03: '#666666',
	  base04: '#797977',
	  base05: '#8a8986',
	  base06: '#9d9b97',
	  base07: '#baae9e',
	  base08: '#cf6a4c',
	  base09: '#cf7d34',
	  base0A: '#f9ee98',
	  base0B: '#54be0d',
	  base0C: '#afc4db',
	  base0D: '#5ea6ea',
	  base0E: '#9b859d',
	  base0F: '#937121'
	};
	module.exports = exports['default'];

/***/ },
/* 399 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'brewer',
	  author: 'timothée poisot (http://github.com/tpoisot)',
	  base00: '#0c0d0e',
	  base01: '#2e2f30',
	  base02: '#515253',
	  base03: '#737475',
	  base04: '#959697',
	  base05: '#b7b8b9',
	  base06: '#dadbdc',
	  base07: '#fcfdfe',
	  base08: '#e31a1c',
	  base09: '#e6550d',
	  base0A: '#dca060',
	  base0B: '#31a354',
	  base0C: '#80b1d3',
	  base0D: '#3182bd',
	  base0E: '#756bb1',
	  base0F: '#b15928'
	};
	module.exports = exports['default'];

/***/ },
/* 400 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'bright',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#303030',
	  base02: '#505050',
	  base03: '#b0b0b0',
	  base04: '#d0d0d0',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ffffff',
	  base08: '#fb0120',
	  base09: '#fc6d24',
	  base0A: '#fda331',
	  base0B: '#a1c659',
	  base0C: '#76c7b7',
	  base0D: '#6fb3d2',
	  base0E: '#d381c3',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 401 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'chalk',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#f5f5f5',
	  base08: '#fb9fb1',
	  base09: '#eda987',
	  base0A: '#ddb26f',
	  base0B: '#acc267',
	  base0C: '#12cfc0',
	  base0D: '#6fc2ef',
	  base0E: '#e1a3ee',
	  base0F: '#deaf8f'
	};
	module.exports = exports['default'];

/***/ },
/* 402 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'codeschool',
	  author: 'brettof86',
	  base00: '#232c31',
	  base01: '#1c3657',
	  base02: '#2a343a',
	  base03: '#3f4944',
	  base04: '#84898c',
	  base05: '#9ea7a6',
	  base06: '#a7cfa3',
	  base07: '#b5d8f6',
	  base08: '#2a5491',
	  base09: '#43820d',
	  base0A: '#a03b1e',
	  base0B: '#237986',
	  base0C: '#b02f30',
	  base0D: '#484d79',
	  base0E: '#c59820',
	  base0F: '#c98344'
	};
	module.exports = exports['default'];

/***/ },
/* 403 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'colors',
	  author: 'mrmrs (http://clrs.cc)',
	  base00: '#111111',
	  base01: '#333333',
	  base02: '#555555',
	  base03: '#777777',
	  base04: '#999999',
	  base05: '#bbbbbb',
	  base06: '#dddddd',
	  base07: '#ffffff',
	  base08: '#ff4136',
	  base09: '#ff851b',
	  base0A: '#ffdc00',
	  base0B: '#2ecc40',
	  base0C: '#7fdbff',
	  base0D: '#0074d9',
	  base0E: '#b10dc9',
	  base0F: '#85144b'
	};
	module.exports = exports['default'];

/***/ },
/* 404 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'default',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#181818',
	  base01: '#282828',
	  base02: '#383838',
	  base03: '#585858',
	  base04: '#b8b8b8',
	  base05: '#d8d8d8',
	  base06: '#e8e8e8',
	  base07: '#f8f8f8',
	  base08: '#ab4642',
	  base09: '#dc9656',
	  base0A: '#f7ca88',
	  base0B: '#a1b56c',
	  base0C: '#86c1b9',
	  base0D: '#7cafc2',
	  base0E: '#ba8baf',
	  base0F: '#a16946'
	};
	module.exports = exports['default'];

/***/ },
/* 405 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'eighties',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2d2d2d',
	  base01: '#393939',
	  base02: '#515151',
	  base03: '#747369',
	  base04: '#a09f93',
	  base05: '#d3d0c8',
	  base06: '#e8e6df',
	  base07: '#f2f0ec',
	  base08: '#f2777a',
	  base09: '#f99157',
	  base0A: '#ffcc66',
	  base0B: '#99cc99',
	  base0C: '#66cccc',
	  base0D: '#6699cc',
	  base0E: '#cc99cc',
	  base0F: '#d27b53'
	};
	module.exports = exports['default'];

/***/ },
/* 406 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'embers',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#16130F',
	  base01: '#2C2620',
	  base02: '#433B32',
	  base03: '#5A5047',
	  base04: '#8A8075',
	  base05: '#A39A90',
	  base06: '#BEB6AE',
	  base07: '#DBD6D1',
	  base08: '#826D57',
	  base09: '#828257',
	  base0A: '#6D8257',
	  base0B: '#57826D',
	  base0C: '#576D82',
	  base0D: '#6D5782',
	  base0E: '#82576D',
	  base0F: '#825757'
	};
	module.exports = exports['default'];

/***/ },
/* 407 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'flat',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2C3E50',
	  base01: '#34495E',
	  base02: '#7F8C8D',
	  base03: '#95A5A6',
	  base04: '#BDC3C7',
	  base05: '#e0e0e0',
	  base06: '#f5f5f5',
	  base07: '#ECF0F1',
	  base08: '#E74C3C',
	  base09: '#E67E22',
	  base0A: '#F1C40F',
	  base0B: '#2ECC71',
	  base0C: '#1ABC9C',
	  base0D: '#3498DB',
	  base0E: '#9B59B6',
	  base0F: '#be643c'
	};
	module.exports = exports['default'];

/***/ },
/* 408 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'google',
	  author: 'seth wright (http://sethawright.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#CC342B',
	  base09: '#F96A38',
	  base0A: '#FBA922',
	  base0B: '#198844',
	  base0C: '#3971ED',
	  base0D: '#3971ED',
	  base0E: '#A36AC7',
	  base0F: '#3971ED'
	};
	module.exports = exports['default'];

/***/ },
/* 409 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'grayscale',
	  author: 'alexandre gavioli (https://github.com/alexx2/)',
	  base00: '#101010',
	  base01: '#252525',
	  base02: '#464646',
	  base03: '#525252',
	  base04: '#ababab',
	  base05: '#b9b9b9',
	  base06: '#e3e3e3',
	  base07: '#f7f7f7',
	  base08: '#7c7c7c',
	  base09: '#999999',
	  base0A: '#a0a0a0',
	  base0B: '#8e8e8e',
	  base0C: '#868686',
	  base0D: '#686868',
	  base0E: '#747474',
	  base0F: '#5e5e5e'
	};
	module.exports = exports['default'];

/***/ },
/* 410 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'green screen',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#001100',
	  base01: '#003300',
	  base02: '#005500',
	  base03: '#007700',
	  base04: '#009900',
	  base05: '#00bb00',
	  base06: '#00dd00',
	  base07: '#00ff00',
	  base08: '#007700',
	  base09: '#009900',
	  base0A: '#007700',
	  base0B: '#00bb00',
	  base0C: '#005500',
	  base0D: '#009900',
	  base0E: '#00bb00',
	  base0F: '#005500'
	};
	module.exports = exports['default'];

/***/ },
/* 411 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'harmonic16',
	  author: 'jannik siebert (https://github.com/janniks)',
	  base00: '#0b1c2c',
	  base01: '#223b54',
	  base02: '#405c79',
	  base03: '#627e99',
	  base04: '#aabcce',
	  base05: '#cbd6e2',
	  base06: '#e5ebf1',
	  base07: '#f7f9fb',
	  base08: '#bf8b56',
	  base09: '#bfbf56',
	  base0A: '#8bbf56',
	  base0B: '#56bf8b',
	  base0C: '#568bbf',
	  base0D: '#8b56bf',
	  base0E: '#bf568b',
	  base0F: '#bf5656'
	};
	module.exports = exports['default'];

/***/ },
/* 412 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'hopscotch',
	  author: 'jan t. sott',
	  base00: '#322931',
	  base01: '#433b42',
	  base02: '#5c545b',
	  base03: '#797379',
	  base04: '#989498',
	  base05: '#b9b5b8',
	  base06: '#d5d3d5',
	  base07: '#ffffff',
	  base08: '#dd464c',
	  base09: '#fd8b19',
	  base0A: '#fdcc59',
	  base0B: '#8fc13e',
	  base0C: '#149b93',
	  base0D: '#1290bf',
	  base0E: '#c85e7c',
	  base0F: '#b33508'
	};
	module.exports = exports['default'];

/***/ },
/* 413 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'isotope',
	  author: 'jan t. sott',
	  base00: '#000000',
	  base01: '#404040',
	  base02: '#606060',
	  base03: '#808080',
	  base04: '#c0c0c0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#ff0000',
	  base09: '#ff9900',
	  base0A: '#ff0099',
	  base0B: '#33ff00',
	  base0C: '#00ffff',
	  base0D: '#0066ff',
	  base0E: '#cc00ff',
	  base0F: '#3300ff'
	};
	module.exports = exports['default'];

/***/ },
/* 414 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'marrakesh',
	  author: 'alexandre gavioli (http://github.com/alexx2/)',
	  base00: '#201602',
	  base01: '#302e00',
	  base02: '#5f5b17',
	  base03: '#6c6823',
	  base04: '#86813b',
	  base05: '#948e48',
	  base06: '#ccc37a',
	  base07: '#faf0a5',
	  base08: '#c35359',
	  base09: '#b36144',
	  base0A: '#a88339',
	  base0B: '#18974e',
	  base0C: '#75a738',
	  base0D: '#477ca1',
	  base0E: '#8868b3',
	  base0F: '#b3588e'
	};
	module.exports = exports['default'];

/***/ },
/* 415 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'mocha',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#3B3228',
	  base01: '#534636',
	  base02: '#645240',
	  base03: '#7e705a',
	  base04: '#b8afad',
	  base05: '#d0c8c6',
	  base06: '#e9e1dd',
	  base07: '#f5eeeb',
	  base08: '#cb6077',
	  base09: '#d28b71',
	  base0A: '#f4bc87',
	  base0B: '#beb55b',
	  base0C: '#7bbda4',
	  base0D: '#8ab3b5',
	  base0E: '#a89bb9',
	  base0F: '#bb9584'
	};
	module.exports = exports['default'];

/***/ },
/* 416 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'monokai',
	  author: 'wimer hazenberg (http://www.monokai.nl)',
	  base00: '#272822',
	  base01: '#383830',
	  base02: '#49483e',
	  base03: '#75715e',
	  base04: '#a59f85',
	  base05: '#f8f8f2',
	  base06: '#f5f4f1',
	  base07: '#f9f8f5',
	  base08: '#f92672',
	  base09: '#fd971f',
	  base0A: '#f4bf75',
	  base0B: '#a6e22e',
	  base0C: '#a1efe4',
	  base0D: '#66d9ef',
	  base0E: '#ae81ff',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 417 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'ocean',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#2b303b',
	  base01: '#343d46',
	  base02: '#4f5b66',
	  base03: '#65737e',
	  base04: '#a7adba',
	  base05: '#c0c5ce',
	  base06: '#dfe1e8',
	  base07: '#eff1f5',
	  base08: '#bf616a',
	  base09: '#d08770',
	  base0A: '#ebcb8b',
	  base0B: '#a3be8c',
	  base0C: '#96b5b4',
	  base0D: '#8fa1b3',
	  base0E: '#b48ead',
	  base0F: '#ab7967'
	};
	module.exports = exports['default'];

/***/ },
/* 418 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'paraiso',
	  author: 'jan t. sott',
	  base00: '#2f1e2e',
	  base01: '#41323f',
	  base02: '#4f424c',
	  base03: '#776e71',
	  base04: '#8d8687',
	  base05: '#a39e9b',
	  base06: '#b9b6b0',
	  base07: '#e7e9db',
	  base08: '#ef6155',
	  base09: '#f99b15',
	  base0A: '#fec418',
	  base0B: '#48b685',
	  base0C: '#5bc4bf',
	  base0D: '#06b6ef',
	  base0E: '#815ba4',
	  base0F: '#e96ba8'
	};
	module.exports = exports['default'];

/***/ },
/* 419 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'pop',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#000000',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#b0b0b0',
	  base05: '#d0d0d0',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#eb008a',
	  base09: '#f29333',
	  base0A: '#f8ca12',
	  base0B: '#37b349',
	  base0C: '#00aabb',
	  base0D: '#0e5a94',
	  base0E: '#b31e8d',
	  base0F: '#7a2d00'
	};
	module.exports = exports['default'];

/***/ },
/* 420 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'railscasts',
	  author: 'ryan bates (http://railscasts.com)',
	  base00: '#2b2b2b',
	  base01: '#272935',
	  base02: '#3a4055',
	  base03: '#5a647e',
	  base04: '#d4cfc9',
	  base05: '#e6e1dc',
	  base06: '#f4f1ed',
	  base07: '#f9f7f3',
	  base08: '#da4939',
	  base09: '#cc7833',
	  base0A: '#ffc66d',
	  base0B: '#a5c261',
	  base0C: '#519f50',
	  base0D: '#6d9cbe',
	  base0E: '#b6b3eb',
	  base0F: '#bc9458'
	};
	module.exports = exports['default'];

/***/ },
/* 421 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'shapeshifter',
	  author: 'tyler benziger (http://tybenz.com)',
	  base00: '#000000',
	  base01: '#040404',
	  base02: '#102015',
	  base03: '#343434',
	  base04: '#555555',
	  base05: '#ababab',
	  base06: '#e0e0e0',
	  base07: '#f9f9f9',
	  base08: '#e92f2f',
	  base09: '#e09448',
	  base0A: '#dddd13',
	  base0B: '#0ed839',
	  base0C: '#23edda',
	  base0D: '#3b48e3',
	  base0E: '#f996e2',
	  base0F: '#69542d'
	};
	module.exports = exports['default'];

/***/ },
/* 422 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'solarized',
	  author: 'ethan schoonover (http://ethanschoonover.com/solarized)',
	  base00: '#002b36',
	  base01: '#073642',
	  base02: '#586e75',
	  base03: '#657b83',
	  base04: '#839496',
	  base05: '#93a1a1',
	  base06: '#eee8d5',
	  base07: '#fdf6e3',
	  base08: '#dc322f',
	  base09: '#cb4b16',
	  base0A: '#b58900',
	  base0B: '#859900',
	  base0C: '#2aa198',
	  base0D: '#268bd2',
	  base0E: '#6c71c4',
	  base0F: '#d33682'
	};
	module.exports = exports['default'];

/***/ },
/* 423 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'summerfruit',
	  author: 'christopher corley (http://cscorley.github.io/)',
	  base00: '#151515',
	  base01: '#202020',
	  base02: '#303030',
	  base03: '#505050',
	  base04: '#B0B0B0',
	  base05: '#D0D0D0',
	  base06: '#E0E0E0',
	  base07: '#FFFFFF',
	  base08: '#FF0086',
	  base09: '#FD8900',
	  base0A: '#ABA800',
	  base0B: '#00C918',
	  base0C: '#1faaaa',
	  base0D: '#3777E6',
	  base0E: '#AD00A1',
	  base0F: '#cc6633'
	};
	module.exports = exports['default'];

/***/ },
/* 424 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'tomorrow',
	  author: 'chris kempson (http://chriskempson.com)',
	  base00: '#1d1f21',
	  base01: '#282a2e',
	  base02: '#373b41',
	  base03: '#969896',
	  base04: '#b4b7b4',
	  base05: '#c5c8c6',
	  base06: '#e0e0e0',
	  base07: '#ffffff',
	  base08: '#cc6666',
	  base09: '#de935f',
	  base0A: '#f0c674',
	  base0B: '#b5bd68',
	  base0C: '#8abeb7',
	  base0D: '#81a2be',
	  base0E: '#b294bb',
	  base0F: '#a3685a'
	};
	module.exports = exports['default'];

/***/ },
/* 425 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'london tube',
	  author: 'jan t. sott',
	  base00: '#231f20',
	  base01: '#1c3f95',
	  base02: '#5a5758',
	  base03: '#737171',
	  base04: '#959ca1',
	  base05: '#d9d8d8',
	  base06: '#e7e7e8',
	  base07: '#ffffff',
	  base08: '#ee2e24',
	  base09: '#f386a1',
	  base0A: '#ffd204',
	  base0B: '#00853e',
	  base0C: '#85cebc',
	  base0D: '#009ddc',
	  base0E: '#98005d',
	  base0F: '#b06110'
	};
	module.exports = exports['default'];

/***/ },
/* 426 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'twilight',
	  author: 'david hart (http://hart-dev.com)',
	  base00: '#1e1e1e',
	  base01: '#323537',
	  base02: '#464b50',
	  base03: '#5f5a60',
	  base04: '#838184',
	  base05: '#a7a7a7',
	  base06: '#c3c3c3',
	  base07: '#ffffff',
	  base08: '#cf6a4c',
	  base09: '#cda869',
	  base0A: '#f9ee98',
	  base0B: '#8f9d6a',
	  base0C: '#afc4db',
	  base0D: '#7587a6',
	  base0E: '#9b859d',
	  base0F: '#9b703f'
	};
	module.exports = exports['default'];

/***/ },
/* 427 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  scheme: 'nicinabox',
	  author: 'nicinabox (http://github.com/nicinabox)',
	  base00: '#2A2F3A',
	  base01: '#3C444F',
	  base02: '#4F5A65',
	  base03: '#BEBEBE',
	  base04: '#b0b0b0', // unmodified
	  base05: '#d0d0d0', // unmodified
	  base06: '#FFFFFF',
	  base07: '#f5f5f5', // unmodified
	  base08: '#fb9fb1', // unmodified
	  base09: '#FC6D24',
	  base0A: '#ddb26f', // unmodified
	  base0B: '#A1C659',
	  base0C: '#12cfc0', // unmodified
	  base0D: '#6FB3D2',
	  base0E: '#D381C3',
	  base0F: '#deaf8f' // unmodified
	};
	module.exports = exports['default'];

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.getDefaultStyle = getDefaultStyle;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function getDefaultStyle(props) {
	  var left = props.left;
	  var right = props.right;
	  var bottom = props.bottom;
	  var top = props.top;

	  if (typeof left === 'undefined' && typeof right === 'undefined') {
	    right = true;
	  }
	  if (typeof top === 'undefined' && typeof bottom === 'undefined') {
	    bottom = true;
	  }

	  return {
	    position: 'fixed',
	    zIndex: 10000,
	    fontSize: 17,
	    overflow: 'hidden',
	    opacity: 1,
	    color: 'white',
	    left: left ? 0 : undefined,
	    right: right ? 0 : undefined,
	    top: top ? 0 : undefined,
	    bottom: bottom ? 0 : undefined,
	    maxHeight: bottom && top ? '100%' : '30%',
	    maxWidth: left && right ? '100%' : '30%',
	    wordWrap: 'break-word',
	    boxSizing: 'border-box',
	    boxShadow: '-2px 0 7px 0 rgba(0, 0, 0, 0.5)'
	  };
	}

	var DebugPanel = (function (_Component) {
	  _inherits(DebugPanel, _Component);

	  function DebugPanel() {
	    _classCallCheck(this, DebugPanel);

	    _Component.apply(this, arguments);
	  }

	  DebugPanel.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: _extends({}, this.props.getStyle(this.props), this.props.style) },
	      this.props.children
	    );
	  };

	  _createClass(DebugPanel, null, [{
	    key: 'propTypes',
	    value: {
	      left: _react.PropTypes.bool,
	      right: _react.PropTypes.bool,
	      bottom: _react.PropTypes.bool,
	      top: _react.PropTypes.bool,
	      getStyle: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      getStyle: getDefaultStyle
	    },
	    enumerable: true
	  }]);

	  return DebugPanel;
	})(_react.Component);

	exports['default'] = DebugPanel;

/***/ }
]);