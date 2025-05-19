(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".main-container{display:flex;flex-direction:column;height:100dvh;width:100dvw;overflow:hidden}.tool-hub{display:flex;align-items:center;flex-shrink:0;height:4rem;width:100%;padding-left:1rem;background-color:var(--light-night)}.tool-hub .hub-icon{font-size:2rem;color:var(--gray)}.tool-hub .hub-icon:hover{cursor:pointer;color:var(--baby-powder)}.tool-hub .hub-title{color:var(--baby-powder);font-size:1rem;font-weight:700;padding-left:1rem}.tool-content{flex:1 1 auto;margin:0;padding:1rem;overflow:scroll}@media (min-width: 1024px){.tool-hub{height:5rem}.tool-hub .hub-title{font-size:1.5rem}.tool-content{padding:2rem}}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import b from "react";
var g = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function se() {
  if (z) return _;
  z = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, c, s) {
    var v = null;
    if (s !== void 0 && (v = "" + s), c.key !== void 0 && (v = "" + c.key), "key" in c) {
      s = {};
      for (var m in c)
        m !== "key" && (s[m] = c[m]);
    } else s = c;
    return c = s.ref, {
      $$typeof: r,
      type: o,
      key: v,
      ref: c !== void 0 ? c : null,
      props: s
    };
  }
  return _.Fragment = t, _.jsx = n, _.jsxs = n, _;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function le() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case Z:
          return "Profiler";
        case X:
          return "StrictMode";
        case re:
          return "Suspense";
        case te:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case H:
            return "Portal";
          case K:
            return (e.displayName || "Context") + ".Provider";
          case Q:
            return (e._context.displayName || "Context") + ".Consumer";
          case ee:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ne:
            return a = e.displayName || null, a !== null ? a : r(e.type) || "Memo";
          case Y:
            a = e._payload, e = e._init;
            try {
              return r(e(a));
            } catch {
            }
        }
      return null;
    }
    function t(e) {
      return "" + e;
    }
    function n(e) {
      try {
        t(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var i = a.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), t(e);
      }
    }
    function o(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var a = r(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function v(e) {
      if (I.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, a) {
      function i() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function p() {
      var e = r(this.type);
      return F[e] || (F[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function B(e, a, i, l, d, f, x, S) {
      return i = f.ref, e = {
        $$typeof: C,
        type: e,
        key: a,
        props: f,
        _owner: d
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, a, i, l, d, f, x, S) {
      var u = a.children;
      if (u !== void 0)
        if (l)
          if (ie(u)) {
            for (l = 0; l < u.length; l++)
              A(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(u);
      if (I.call(a, "key")) {
        u = r(e);
        var E = Object.keys(a).filter(function(ce) {
          return ce !== "key";
        });
        l = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", $[u + l] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          E,
          u
        ), $[u + l] = !0);
      }
      if (u = null, i !== void 0 && (n(i), u = "" + i), v(a) && (n(a.key), u = "" + a.key), "key" in a) {
        i = {};
        for (var k in a)
          k !== "key" && (i[k] = a[k]);
      } else i = a;
      return u && m(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), B(
        e,
        u,
        f,
        d,
        c(),
        i,
        x,
        S
      );
    }
    function A(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var h = b, C = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), P = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, ie = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var D, F = {}, L = h["react-stack-bottom-frame"].bind(
      h,
      s
    )(), W = w(o(s)), $ = {};
    R.Fragment = y, R.jsx = function(e, a, i, l, d) {
      var f = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        a,
        i,
        !1,
        l,
        d,
        f ? Error("react-stack-top-frame") : L,
        f ? w(o(e)) : W
      );
    }, R.jsxs = function(e, a, i, l, d) {
      var f = 1e4 > P.recentlyCreatedOwnerStacks++;
      return N(
        e,
        a,
        i,
        !0,
        l,
        d,
        f ? Error("react-stack-top-frame") : L,
        f ? w(o(e)) : W
      );
    };
  }()), R;
}
var U;
function ue() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? g.exports = se() : g.exports = le()), g.exports;
}
var O = ue();
const he = ({ children: r, onClick: t }) => /* @__PURE__ */ O.jsx("button", { className: "nerdy-button", onClick: t, children: r });
var q = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, V = b.createContext && /* @__PURE__ */ b.createContext(q), fe = ["attr", "size", "title"];
function me(r, t) {
  if (r == null) return {};
  var n = de(r, t), o, c;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (c = 0; c < s.length; c++)
      o = s[c], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(r, o) && (n[o] = r[o]);
  }
  return n;
}
function de(r, t) {
  if (r == null) return {};
  var n = {};
  for (var o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      if (t.indexOf(o) >= 0) continue;
      n[o] = r[o];
    }
  return n;
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
    }
    return r;
  }, j.apply(this, arguments);
}
function J(r, t) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function T(r) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J(Object(n), !0).forEach(function(o) {
      be(r, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return r;
}
function be(r, t, n) {
  return t = ve(t), t in r ? Object.defineProperty(r, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = n, r;
}
function ve(r) {
  var t = pe(r, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pe(r, t) {
  if (typeof r != "object" || !r) return r;
  var n = r[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(r, t);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function G(r) {
  return r && r.map((t, n) => /* @__PURE__ */ b.createElement(t.tag, T({
    key: n
  }, t.attr), G(t.child)));
}
function Ee(r) {
  return (t) => /* @__PURE__ */ b.createElement(Oe, j({
    attr: T({}, r.attr)
  }, t), G(r.child));
}
function Oe(r) {
  var t = (n) => {
    var {
      attr: o,
      size: c,
      title: s
    } = r, v = me(r, fe), m = c || n.size || "1em", p;
    return n.className && (p = n.className), r.className && (p = (p ? p + " " : "") + r.className), /* @__PURE__ */ b.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, o, v, {
      className: p,
      style: T(T({
        color: r.color || n.color
      }, n.style), r.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ b.createElement("title", null, s), r.children);
  };
  return V !== void 0 ? /* @__PURE__ */ b.createElement(V.Consumer, null, (n) => t(n)) : t(q);
}
function _e(r) {
  return Ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" }, child: [] }] })(r);
}
const ge = ({ title: r, handleClickHome: t, children: n }) => /* @__PURE__ */ O.jsxs("div", { className: "main-container", children: [
  /* @__PURE__ */ O.jsxs("div", { className: "tool-hub", children: [
    /* @__PURE__ */ O.jsx(_e, { className: "hub-icon", onClick: t }),
    /* @__PURE__ */ O.jsx("div", { className: "hub-title", children: r })
  ] }),
  /* @__PURE__ */ O.jsx("div", { className: "tool-content", children: n })
] });
export {
  he as Button,
  ge as Hub
};
//# sourceMappingURL=index.js.map
