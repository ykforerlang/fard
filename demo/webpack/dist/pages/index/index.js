/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * by 132yse Copyright 2019-07-06
 */



Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
var arrayfy = function arrayfy(arr) {
  return !arr ? [] : Array.isArray(arr) ? arr : [arr];
};
var isSame = function isSame(a, b) {
  return a.type === b.type || _typeof(a.type) === _typeof(b.type);
};
var isNew = function isNew(o, n) {
  return function (k) {
    return k !== 'children' && k !== 'key' && o[k] !== n[k];
  };
};
function hashfy(arr) {
  var out = {};
  var i = 0;
  arrayfy(arr).forEach(function (item) {
    var key = ((item || {}).props || {}).key;
    key ? out['.' + key] = item : (out['.' + i] = item) && i++;
  });
  return out;
}
function merge(a, b) {
  var out = {};
  for (var i in a) {
    out[i] = a[i];
  }
  for (var i in b) {
    out[i] = b[i];
  }
  return out;
}
var defer = typeof Promise === 'function' ? function (cb) {
  return Promise.resolve().then(cb);
} : setTimeout;

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
function h(type, props) {
  var rest = [];
  var children = [];
  var length = arguments.length;
  while (length-- > 2) {
    rest.push(arguments[length]);
  }
  while (rest.length) {
    var vnode = rest.pop();
    if (vnode && vnode.pop) {
      for (length = vnode.length; length--;) {
        rest.push(vnode[length]);
      }
    } else if (vnode === null || vnode === true || vnode === false) {
      vnode = {
        type: function type() {}
      };
    } else if (typeof vnode === 'function') {
      children = vnode;
    } else {
      children.push(_typeof$1(vnode) === 'object' ? vnode : {
        type: 'text',
        props: {
          nodeValue: vnode
        }
      });
    }
  }
  return {
    type: type,
    props: merge(props, {
      children: children
    }),
    key: props && props.key
  };
}

function updateProperty(element, name, value, newValue) {
  if (name === 'style') {
    for (key in newValue) {
      var style = !newValue || !newValue[key] ? '' : newValue[key];
      element[name][key] = style;
    }
  } else if (name[0] === 'o' && name[1] === 'n') {
    name = name.slice(2).toLowerCase();
    if (value) {
      element.removeEventListener(name, value);
    }
    element.addEventListener(name, newValue);
  } else {
    element.setAttribute(name, newValue);
  }
}
function updateElement(element, props, newProps) {
  Object.keys(newProps).filter(isNew(props, newProps))
  .forEach(function (key) {
    if (key === 'value' || key === 'nodeValue') {
      element[key] = newProps[key];
    } else {
      updateProperty(element, key, props[key], newProps[key]);
    }
  });
}
function createElement(fiber) {
  var element = fiber.type === 'text' ? document.createTextNode('') : document.createElement(fiber.type);
  updateElement(element, [], fiber.props);
  return element;
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var cursor = 0;
function update(key, reducer, value) {
  var current = this ? this : getCurrentFiber();
  value = reducer ? reducer(current.state[key], value) : value;
  current.state[key] = value;
  scheduleWork(current);
}
function resetCursor() {
  cursor = 0;
}
function useState(initState) {
  return useReducer(null, initState);
}
function useReducer(reducer, initState) {
  var current = getCurrentFiber();
  if (!current) return [initState, setter];
  var key = '$' + cursor;
  var setter = update.bind(current, key, reducer);
  cursor++;
  var state = current.state || {};
  if (key in state) {
    return [state[key], setter];
  } else {
    current.state[key] = initState;
    return [initState, setter];
  }
}
function useEffect(cb, inputs) {
  var current = getCurrentFiber();
  if (current) current.effect = useMemo(cb, inputs);
}
function useMemo(cb, inputs) {
  return function () {
    var current = getCurrentFiber();
    if (current) {
      var hasChaged = inputs ? (current.oldInputs || []).some(function (v, i) {
        return inputs[i] !== v;
      }) : true;
      if (inputs && !inputs.length && !current.isMounted) {
        hasChaged = true;
        current.isMounted = true;
      }
      if (hasChaged) cb();
      current.oldInputs = inputs;
    }
  };
}
function createContext() {
  var initContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var context = initContext;
  var setters = [];
  var update = function update(newContext) {
    return setters.forEach(function (fn) {
      return fn(newContext);
    });
  };
  var subscribe = function subscribe(fn) {
    return setters.push(fn);
  };
  var unSubscribe = function unSubscribe(fn) {
    return setters = setters.filter(function (f) {
      return f !== fn;
    });
  };
  return {
    context: context,
    update: update,
    subscribe: subscribe,
    unSubscribe: unSubscribe
  };
}
function useContext(ctx) {
  var _useState = useState(ctx.context),
      _useState2 = _slicedToArray(_useState, 2),
      context = _useState2[0],
      setContext = _useState2[1];
  ctx.subscribe(setContext);
  useEffect(function () {
    return ctx.unSubscribe(setContext);
  });
  return [context, ctx.update];
}

var HOST = 0,
    HOOK = 1,
    ROOT = 2,
    PLACE = 3,
    REPLACE = 4,
    UPDATE = 5,
    DELETE = 6;
var options = {};
var updateQueue = [];
var nextWork = null;
var pendingCommit = null;
var currentFiber = null;
function render(vnode, el) {
  var rootFiber = {
    tag: ROOT,
    base: el,
    props: {
      children: vnode
    }
  };
  scheduleWork(rootFiber);
}
function scheduleWork(fiber) {
  updateQueue.push(fiber);
  defer(workLoop);
}
function workLoop() {
  if (!nextWork && updateQueue.length) {
    var update = updateQueue.shift();
    if (!update) return;
    nextWork = update;
  }
  while (nextWork) {
    nextWork = performWork(nextWork);
  }
  if (pendingCommit) {
    options.commitWork ? options.commitWork(pendingCommit) : commitWork(pendingCommit);
  }
}
function performWork(WIP) {
  WIP.tag == HOOK ? updateHOOK(WIP) : updateHost(WIP);
  if (WIP.child) return WIP.child;
  while (WIP) {
    completeWork(WIP);
    if (WIP.sibling) return WIP.sibling;
    WIP = WIP.parent;
  }
}
function updateHost(WIP) {
  if (!options.end && !WIP.base) {
    WIP.base = createElement(WIP);
  }
  var parent = WIP.parent || {};
  WIP.insertPoint = parent.oldPoint;
  parent.oldPoint = WIP;
  var children = WIP.props.children;
  reconcileChildren(WIP, children);
}
function updateHOOK(WIP) {
  WIP.props = WIP.props || {};
  WIP.state = WIP.state || {};
  currentFiber = WIP;
  resetCursor();
  var children = WIP.type(WIP.props);
  reconcileChildren(WIP, children);
  currentFiber.patches = WIP.patches;
}
function fiberize(children, WIP) {
  return WIP.children = hashfy(children);
}
function reconcileChildren(WIP, children) {
  var oldFibers = WIP.children;
  var newFibers = fiberize(children, WIP);
  var reused = {};
  for (var k in oldFibers) {
    var newFiber = newFibers[k];
    var oldFiber = oldFibers[k];
    if (newFiber && isSame(newFiber, oldFiber)) {
      reused[k] = oldFiber;
    } else {
      oldFiber.patchTag = DELETE;
      WIP.patches.push(oldFiber);
    }
  }
  var prevFiber = null;
  var alternate = null;
  for (var _k in newFibers) {
    var _newFiber = newFibers[_k];
    var _oldFiber = reused[_k];
    if (_oldFiber) {
      if (isSame(_oldFiber, _newFiber)) {
        alternate = createFiber(_oldFiber, {
          patchTag: UPDATE
        });
        if (!options.end) _newFiber.patchTag = UPDATE;
        _newFiber = merge(alternate, _newFiber);
        _newFiber.alternate = alternate;
        if (_oldFiber.key) {
          _newFiber.patchTag = REPLACE;
        }
      }
    } else {
      _newFiber = createFiber(_newFiber, {
        patchTag: PLACE
      });
    }
    newFibers[_k] = _newFiber;
    _newFiber.parent = WIP;
    if (prevFiber) {
      prevFiber.sibling = _newFiber;
    } else {
      WIP.child = _newFiber;
    }
    prevFiber = _newFiber;
  }
  if (prevFiber) prevFiber.sibling = null;
}
function createFiber(vnode, data) {
  data.tag = typeof vnode.type === 'function' ? HOOK : HOST;
  vnode.props = vnode.props || {
    nodeValue: vnode.nodeValue
  };
  return merge(vnode, data);
}
function completeWork(fiber) {
  if (!options.end && fiber.parent) {
    fiber.parent.patches = (fiber.parent.patches || []).concat(fiber.patches || [], fiber.patchTag ? [fiber] : []);
  } else {
    pendingCommit = fiber;
  }
}
function commitWork(WIP) {
  WIP.patches.forEach(function (p) {
    return commit(p);
  });
  currentFiber.effect && currentFiber.effect();
  nextWork = pendingCommit = null;
}
function commit(fiber) {
  var parentFiber = fiber.parent;
  while (parentFiber.tag == HOOK) {
    parentFiber = parentFiber.parent;
  }
  var parent = parentFiber.base;
  var dom = fiber.base || fiber.child.base;
  var insertPoint = fiber.insertPoint,
      patchTag = fiber.patchTag;
  if (fiber.tag == HOOK) {
    if (patchTag == DELETE) parent.removeChild(dom);
  } else if (patchTag == UPDATE) {
    updateElement(dom, fiber.alternate.props, fiber.props);
  } else if (patchTag == DELETE) {
    parent.removeChild(dom);
  } else {
    var after = insertPoint ? patchTag == PLACE ? insertPoint.base.nextSibling : insertPoint.base.nextSibling || parent.firstChild : null;
    if (after == dom) return;
    parent.insertBefore(dom, after);
  }
  parentFiber.patches = fiber.patches = [];
}
function getCurrentFiber() {
  return currentFiber || null;
}

exports.createContext = createContext;
exports.createElement = h;
exports.h = h;
exports.options = options;
exports.render = render;
exports.scheduleWork = scheduleWork;
exports.useContext = useContext;
exports.useEffect = useEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useState = useState;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/fre/dist/fre.js
var fre = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/fard/packages/core/index.js


const ARRAYTYPE = '[object Array]'
const OBJECTTYPE = '[object Object]'
const FUNCTIONTYPE = '[object Function]'
const handlerMap = {}
let viewLevel = 0
let handlerId = 0
let context = null
let oldVdom = null

fre["options"].end = true // 开启跨端
fre["options"].commitWork = fiber => {
  let { type, props } = fiber.child.child
  let vdom = { type, props }

  const diffRes = diff(oldVdom, vdom)

  const update = () => {
    return new Promise((resolve, reject) => {
      if (!Object.keys(diffRes).length) {
        resolve(null)
        return
      }
      context.setData(diffRes, () => {
        resolve(diffRes)
      })
    })
  }

  if (!oldVdom) {
    context.setData({ vdom })
  } else {
    update().then(diff => {
      context.setData(diff)
    })
  }
  for (let k in handlerMap) {
    context[k] = handlerMap[k]
  }
  oldVdom = vdom
}

function render (vdom) {
  let props = vdom.props
  let hostCofig = {
    data: {
      vdom: {}
    },
    onLoad () {
      context = this
      props.onLoad && props.onLoad()
      Object(fre["scheduleWork"])({
        tag: 2,
        props: {
          children: vdom
        }
      })
    },
    onShow: () => props.onShow && props.onShow(),
    onReady: () => props.onReady && props.onReady(),
    onHide: () => props.onHide && props.onHide()
  }
  Page(hostCofig)
}

function diff (prevObj, nextObj) {
  // Largely inspired by:
  // * https://github.com/Tencent/westore/blob/master/packages/westore/utils/diff.js

  viewLevel = 0
  handlerId = 0
  const out = {}
  idiff(prevObj, nextObj, '', out)
  return out
}

function idiff (prev, next, path, out) {
  if (prev === next) return

  if (type(next) == OBJECTTYPE) {
    wireVnode(next)
    for (let key in next) {
      const nextValue = next[key]
      const prevValue = prev && prev[key]

      if (type(nextValue) !== ARRAYTYPE && type(nextValue) !== OBJECTTYPE) {
        if (prev && nextValue != prev[key]) {
          setOut(out, path + '.' + key, nextValue)
        }
      } else if (type(nextValue) == ARRAYTYPE) {
        if (prevValue && type(prevValue) != ARRAYTYPE) {
          setOut(out, path + '.' + key, nextValue)
        } else {
          nextValue.forEach((item, index) => {
            idiff(
              prevValue && prevValue[index],
              item,
              path + '.' + key + '[' + index + ']',
              out
            )
          })
        }
      } else if (type(nextValue) == OBJECTTYPE) {
        if (prevValue && type(prevValue) != OBJECTTYPE) {
          setOut(out, path + '.' + key, nextValue)
        } else {
          for (let name in nextValue) {
            if (name[0] === 'o' && name[1] === 'n') {
              let key = name.toLowerCase() + handlerId
              handlerMap[key] = nextValue[name]
              nextValue[name] = key
              handlerId++
            }
            idiff(
              prevValue && prevValue[name],
              nextValue[name],
              path + '.' + key + '.' + name,
              out
            )
          }
        }
      }
    }
  } else if (type(next) == ARRAYTYPE) {
    if (prev && type(prev) != ARRAYTYPE) {
      setOut(out, path, next)
    } else {
      const isContain = item => item.type == 'view' || item.render
      if (next.length && next.some(isContain)) {
        viewLevel++
      }
      for (let index in next) {
        let last = prev && prev[index]
        next[index] = wireVnode(next[index])

        idiff(
          last,
          next[index],
          (path == '' ? '' : path) + '[' + index + ']',
          out
        )
      }
    }
  } else {
    setOut(out, path, next)
  }
}

function setOut (out, key, value) {
  if (type(value) != FUNCTIONTYPE) {
    out['vdom' + key] = value
  }
}

function type (obj) {
  return Object.prototype.toString.call(obj)
}

function wireVnode (vnode) {
  if (type(vnode.type) == FUNCTIONTYPE) {
    if (vnode.render.type === 'view') {
      vnode.render.name = 'view' + viewLevel
    }
  } else {
    if (vnode.type == 'view') {
      vnode.type = 'view' + viewLevel
    }
    vnode.name = vnode.type
  }
  return vnode.render || vnode
}

function h (type, props) {
  let rest = []
  let children = []
  let length = arguments.length

  while (length-- > 2) rest.push(arguments[length])
  while (rest.length) {
    let vnode = rest.pop()
    if (vnode && vnode.pop) {
      for (length = vnode.length; length--;) rest.push(vnode[length])
    } else if (typeof vnode === 'function') {
      children = vnode
    } else {
      children.push(vnode)
    }
  }

  props = props || {}

  if (typeof children[0] === 'string' || typeof children[0] === 'number') {
    props.nodeValue = children[0]
    children = []
  }

  const isFn = typeof type === 'function'

  return {
    type,
    name: isFn ? 'component' : type,
    render: isFn ? type(props) : null,
    props: { ...props, children }
  }
}

const api = wx || my || tt || swan



// EXTERNAL MODULE: ./pages/index/index.styl
var index = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index/index.js




function Counter() {
  const [count, setCount] = Object(fre["useState"])(0);
  return h("view", null, h("text", {
    class: "text"
  }, count), h("button", {
    class: "btn",
    onClick: () => setCount(count + 1)
  }, "+"));
}

render(h(Counter, null));

/***/ })
/******/ ]);