(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(":root{--white: #FFFFFF;--baby-powder: #FBFEF9;--light-night: #222222;--night: #0A0A0A;--raisin-black: #1F2433;--rich-black: #0A0F1E;--black: #000000;--gray: #777777;--paynes-gray: #56667A;--space-cadet: #1B264F;--azure: #4C7FE6;--vista-blue: #80A4ED;--sandy-brown: #FFA552;--raspberry-rose: #B8336A;--penn-red: #92140C;--engineering-orange: #BF0603}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.align-vertical{display:flex;flex-direction:column;gap:.5rem}.align-horizontal{display:flex;flex-direction:row;gap:.5rem}.block{margin-bottom:2rem}.align-center{display:flex;justify-content:center;align-items:center}.btn{transition-duration:.4s;cursor:pointer}.btn.default-circle{width:fit-content;max-width:100%;height:2rem;font-size:.9rem;padding:1rem;border-radius:2rem}.btn.default-rounded{width:fit-content;max-width:100%;height:2rem;font-size:.9rem;padding:1rem;border-radius:.5rem}.btn.default-squared{width:fit-content;max-width:100%;height:2rem;font-size:.9rem;padding:1rem;border-radius:0}.btn.default-square{width:fit-content;max-width:100%;height:2rem;font-size:.9rem;padding:1rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size0-circle{width:2rem;max-width:100%;height:1.6rem;font-size:.7rem;border-radius:1.6rem}.btn.size0-rounded{width:2rem;max-width:100%;height:1.6rem;font-size:.7rem;border-radius:.5rem}.btn.size0-squared{width:2rem;max-width:100%;height:1.6rem;font-size:.7rem;border-radius:0}.btn.size0-square{width:2rem;max-width:100%;height:1.6rem;font-size:.7rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size1-circle{width:4rem;max-width:100%;height:1.7rem;font-size:.74rem;border-radius:1.7rem}.btn.size1-rounded{width:4rem;max-width:100%;height:1.7rem;font-size:.74rem;border-radius:.5rem}.btn.size1-squared{width:4rem;max-width:100%;height:1.7rem;font-size:.74rem;border-radius:0}.btn.size1-square{width:4rem;max-width:100%;height:1.7rem;font-size:.74rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size2-circle{width:6rem;max-width:100%;height:1.8rem;font-size:.78rem;border-radius:1.8rem}.btn.size2-rounded{width:6rem;max-width:100%;height:1.8rem;font-size:.78rem;border-radius:.5rem}.btn.size2-squared{width:6rem;max-width:100%;height:1.8rem;font-size:.78rem;border-radius:0}.btn.size2-square{width:6rem;max-width:100%;height:1.8rem;font-size:.78rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size3-circle{width:8rem;max-width:100%;height:1.9rem;font-size:.82rem;border-radius:1.9rem}.btn.size3-rounded{width:8rem;max-width:100%;height:1.9rem;font-size:.82rem;border-radius:.5rem}.btn.size3-squared{width:8rem;max-width:100%;height:1.9rem;font-size:.82rem;border-radius:0}.btn.size3-square{width:8rem;max-width:100%;height:1.9rem;font-size:.82rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size4-circle{width:10rem;max-width:100%;height:2rem;font-size:.86rem;border-radius:2rem}.btn.size4-rounded{width:10rem;max-width:100%;height:2rem;font-size:.86rem;border-radius:.5rem}.btn.size4-squared{width:10rem;max-width:100%;height:2rem;font-size:.86rem;border-radius:0}.btn.size4-square{width:10rem;max-width:100%;height:2rem;font-size:.86rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size5-circle{width:12rem;max-width:100%;height:2.1rem;font-size:.9rem;border-radius:2.1rem}.btn.size5-rounded{width:12rem;max-width:100%;height:2.1rem;font-size:.9rem;border-radius:.5rem}.btn.size5-squared{width:12rem;max-width:100%;height:2.1rem;font-size:.9rem;border-radius:0}.btn.size5-square{width:12rem;max-width:100%;height:2.1rem;font-size:.9rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size6-circle{width:14rem;max-width:100%;height:2.2rem;font-size:.925rem;border-radius:2.2rem}.btn.size6-rounded{width:14rem;max-width:100%;height:2.2rem;font-size:.925rem;border-radius:.5rem}.btn.size6-squared{width:14rem;max-width:100%;height:2.2rem;font-size:.925rem;border-radius:0}.btn.size6-square{width:14rem;max-width:100%;height:2.2rem;font-size:.925rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size7-circle{width:16rem;max-width:100%;height:2.3rem;font-size:.95rem;border-radius:2.3rem}.btn.size7-rounded{width:16rem;max-width:100%;height:2.3rem;font-size:.95rem;border-radius:.5rem}.btn.size7-squared{width:16rem;max-width:100%;height:2.3rem;font-size:.95rem;border-radius:0}.btn.size7-square{width:16rem;max-width:100%;height:2.3rem;font-size:.95rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size8-circle{width:18rem;max-width:100%;height:2.4rem;font-size:.975rem;border-radius:2.4rem}.btn.size8-rounded{width:18rem;max-width:100%;height:2.4rem;font-size:.975rem;border-radius:.5rem}.btn.size8-squared{width:18rem;max-width:100%;height:2.4rem;font-size:.975rem;border-radius:0}.btn.size8-square{width:18rem;max-width:100%;height:2.4rem;font-size:.975rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.size9-circle{width:20rem;max-width:100%;height:2.5rem;font-size:1rem;border-radius:2.5rem}.btn.size9-rounded{width:20rem;max-width:100%;height:2.5rem;font-size:1rem;border-radius:.5rem}.btn.size9-squared{width:20rem;max-width:100%;height:2.5rem;font-size:1rem;border-radius:0}.btn.size9-square{width:20rem;max-width:100%;height:2.5rem;font-size:1rem;border-radius:0;height:auto;aspect-ratio:1/1}.btn.filled-red{box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--engineering-orange),white 80%);border:none;color:color-mix(in srgb,var(--engineering-orange),black 50%)}.btn.filled-red:hover,.btn.filled-red-selected{box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--engineering-orange),black 50%);border:none;color:color-mix(in srgb,var(--engineering-orange),white 80%)}.btn.filled-red:disabled{cursor:not-allowed!important;box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--engineering-orange),white 90%);border:none;color:color-mix(in srgb,var(--engineering-orange),white 80%)}.btn.bordered-red{background-color:#fff;border:2px solid color-mix(in srgb,var(--engineering-orange),white 50%);color:color-mix(in srgb,var(--engineering-orange),white 50%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),white 50%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),white 50%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),white 50%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),white 50%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),white 50%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),white 50%)}.btn.bordered-red:hover,.btn.bordered-red-selected{background-color:#fff;border:2px solid color-mix(in srgb,var(--engineering-orange),black 50%);color:color-mix(in srgb,var(--engineering-orange),black 50%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),black 50%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),black 50%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),black 50%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),black 50%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),black 50%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),black 50%)}.btn.bordered-red:disabled{cursor:not-allowed!important;background-color:#fff;border:2px solid color-mix(in srgb,var(--engineering-orange),white 80%);color:color-mix(in srgb,var(--engineering-orange),white 80%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),white 80%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),white 80%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),white 80%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),white 80%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--engineering-orange),white 80%),0 0 .2rem color-mix(in srgb,var(--engineering-orange),white 80%)}.btn.ghost-red{background-color:transparent;border:none;color:#000}.btn.ghost-red:hover,.btn.ghost-red-selected{background-color:color-mix(in srgb,var(--engineering-orange),white 80%);border:none;color:color-mix(in srgb,var(--engineering-orange),black 50%)}.btn.ghost-red:disabled{cursor:not-allowed!important;background-color:transparent;border:none;color:color-mix(in srgb,var(--engineering-orange),white 80%)}.btn.filled-blue{box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--azure),white 80%);border:none;color:color-mix(in srgb,var(--azure),black 40%)}.btn.filled-blue:hover,.btn.filled-blue-selected{box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--azure),black 40%);border:none;color:color-mix(in srgb,var(--azure),white 80%)}.btn.filled-blue:disabled{cursor:not-allowed!important;box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--azure),white 90%);border:none;color:color-mix(in srgb,var(--azure),white 80%)}.btn.bordered-blue{background-color:#fff;border:2px solid color-mix(in srgb,var(--azure),white 0%);color:color-mix(in srgb,var(--azure),white 0%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),white 0%),0 0 .2rem color-mix(in srgb,var(--azure),white 0%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),white 0%),0 0 .2rem color-mix(in srgb,var(--azure),white 0%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),white 0%),0 0 .2rem color-mix(in srgb,var(--azure),white 0%)}.btn.bordered-blue:hover,.btn.bordered-blue-selected{background-color:#fff;border:2px solid color-mix(in srgb,var(--azure),black 40%);color:color-mix(in srgb,var(--azure),black 40%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),black 40%),0 0 .2rem color-mix(in srgb,var(--azure),black 40%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),black 40%),0 0 .2rem color-mix(in srgb,var(--azure),black 40%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),black 40%),0 0 .2rem color-mix(in srgb,var(--azure),black 40%)}.btn.bordered-blue:disabled{cursor:not-allowed!important;background-color:#fff;border:2px solid color-mix(in srgb,var(--azure),white 80%);color:color-mix(in srgb,var(--azure),white 80%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),white 80%),0 0 .2rem color-mix(in srgb,var(--azure),white 80%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),white 80%),0 0 .2rem color-mix(in srgb,var(--azure),white 80%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--azure),white 80%),0 0 .2rem color-mix(in srgb,var(--azure),white 80%)}.btn.ghost-blue{background-color:transparent;border:none;color:#000}.btn.ghost-blue:hover,.btn.ghost-blue-selected{background-color:color-mix(in srgb,var(--azure),white 80%);border:none;color:color-mix(in srgb,var(--azure),black 40%)}.btn.ghost-blue:disabled{cursor:not-allowed!important;background-color:transparent;border:none;color:color-mix(in srgb,var(--azure),white 80%)}.btn.filled-gray{box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--paynes-gray),white 80%);border:none;color:color-mix(in srgb,var(--paynes-gray),black 40%)}.btn.filled-gray:hover,.btn.filled-gray-selected{box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--paynes-gray),black 40%);border:none;color:color-mix(in srgb,var(--paynes-gray),white 80%)}.btn.filled-gray:disabled{cursor:not-allowed!important;box-shadow:0 3px 3px #0003;background-color:color-mix(in srgb,var(--paynes-gray),white 90%);border:none;color:color-mix(in srgb,var(--paynes-gray),white 80%)}.btn.bordered-gray{background-color:#fff;border:2px solid color-mix(in srgb,var(--paynes-gray),white 0%);color:color-mix(in srgb,var(--paynes-gray),white 0%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),white 0%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),white 0%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),white 0%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),white 0%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),white 0%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),white 0%)}.btn.bordered-gray:hover,.btn.bordered-gray-selected{background-color:#fff;border:2px solid color-mix(in srgb,var(--paynes-gray),black 40%);color:color-mix(in srgb,var(--paynes-gray),black 40%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),black 40%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),black 40%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),black 40%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),black 40%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),black 40%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),black 40%)}.btn.bordered-gray:disabled{cursor:not-allowed!important;background-color:#fff;border:2px solid color-mix(in srgb,var(--paynes-gray),white 80%);color:color-mix(in srgb,var(--paynes-gray),white 80%);-webkit-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),white 80%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),white 80%);-moz-box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),white 80%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),white 80%);box-shadow:inset 0 0 .4rem color-mix(in srgb,var(--paynes-gray),white 80%),0 0 .2rem color-mix(in srgb,var(--paynes-gray),white 80%)}.btn.ghost-gray{background-color:transparent;border:none;color:#000}.btn.ghost-gray:hover,.btn.ghost-gray-selected{background-color:color-mix(in srgb,var(--paynes-gray),white 80%);border:none;color:color-mix(in srgb,var(--paynes-gray),black 40%)}.btn.ghost-gray:disabled{cursor:not-allowed!important;background-color:transparent;border:none;color:color-mix(in srgb,var(--paynes-gray),white 80%)}.main-container{display:flex;flex-direction:column;height:100dvh;width:100dvw;overflow:hidden}.tool-hub{display:flex;align-items:center;flex-shrink:0;height:4rem;width:100%;padding-left:1rem;background-color:var(--light-night)}.tool-hub .hub-icon{font-size:2rem;color:var(--gray)}.tool-hub .hub-icon:hover{cursor:pointer;color:var(--baby-powder)}.tool-hub .hub-title{color:var(--baby-powder);font-size:1rem;font-weight:700;padding-left:1rem}@media (min-width: 768px){.tool-hub .hub-title{font-size:1.5rem}}@media (min-width: 768px){.tool-hub{height:5rem}}.tool-content{flex:1 1 auto;margin:0;padding:1rem;overflow-y:scroll}@media (min-width: 768px){.tool-content{padding:2rem}}.tool-footer{display:flex;justify-content:center;align-items:center;margin:.5rem 0}")),document.head.appendChild(r)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import v from "react";
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
function le() {
  if (z) return _;
  z = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, i, l) {
    var d = null;
    if (l !== void 0 && (d = "" + l), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      l = {};
      for (var f in i)
        f !== "key" && (l[f] = i[f]);
    } else l = i;
    return i = l.ref, {
      $$typeof: r,
      type: a,
      key: d,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return _.Fragment = t, _.jsx = n, _.jsxs = n, _;
}
var h = {};
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
function se() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
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
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ne:
            return o = e.displayName || null, o !== null ? o : r(e.type) || "Memo";
          case Y:
            o = e._payload, e = e._init;
            try {
              return r(e(o));
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
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var c = o.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), t(e);
      }
    }
    function a(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Y)
        return "<...>";
      try {
        var o = r(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if ($.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, o) {
      function c() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function p() {
      var e = r(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function B(e, o, c, s, b, m, x, S) {
      return c = m.ref, e = {
        $$typeof: C,
        type: e,
        key: o,
        props: m,
        _owner: b
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
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
    function N(e, o, c, s, b, m, x, S) {
      var u = o.children;
      if (u !== void 0)
        if (s)
          if (ie(u)) {
            for (s = 0; s < u.length; s++)
              A(u[s]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(u);
      if ($.call(o, "key")) {
        u = r(e);
        var O = Object.keys(o).filter(function(ce) {
          return ce !== "key";
        });
        s = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", W[u + s] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          u,
          O,
          u
        ), W[u + s] = !0);
      }
      if (u = null, c !== void 0 && (n(c), u = "" + c), d(o) && (n(o.key), u = "" + o.key), "key" in o) {
        c = {};
        for (var k in o)
          k !== "key" && (c[k] = o[k]);
      } else c = o;
      return u && f(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), B(
        e,
        u,
        m,
        b,
        i(),
        c,
        x,
        S
      );
    }
    function A(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var R = v, C = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), K = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), Y = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), y = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ie = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var I, D = {}, F = R["react-stack-bottom-frame"].bind(
      R,
      l
    )(), L = w(a(l)), W = {};
    h.Fragment = T, h.jsx = function(e, o, c, s, b) {
      var m = 1e4 > y.recentlyCreatedOwnerStacks++;
      return N(
        e,
        o,
        c,
        !1,
        s,
        b,
        m ? Error("react-stack-top-frame") : F,
        m ? w(a(e)) : L
      );
    }, h.jsxs = function(e, o, c, s, b) {
      var m = 1e4 > y.recentlyCreatedOwnerStacks++;
      return N(
        e,
        o,
        c,
        !0,
        s,
        b,
        m ? Error("react-stack-top-frame") : F,
        m ? w(a(e)) : L
      );
    };
  }()), h;
}
var U;
function ue() {
  return U || (U = 1, process.env.NODE_ENV === "production" ? g.exports = le() : g.exports = se()), g.exports;
}
var E = ue();
const Re = ({
  children: r,
  onClick: t,
  size: n = "default",
  shape: a = "rounded",
  fill: i = "bordered",
  color: l = "gray",
  disabled: d,
  selected: f
}) => /* @__PURE__ */ E.jsx("button", { className: `btn align-center ${n}-${a} ${i}-${l}${f ? "-selected" : ""}`, disabled: d, onClick: t, children: r });
var q = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, V = v.createContext && /* @__PURE__ */ v.createContext(q), fe = ["attr", "size", "title"];
function me(r, t) {
  if (r == null) return {};
  var n = de(r, t), a, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(r);
    for (i = 0; i < l.length; i++)
      a = l[i], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(r, a) && (n[a] = r[a]);
  }
  return n;
}
function de(r, t) {
  if (r == null) return {};
  var n = {};
  for (var a in r)
    if (Object.prototype.hasOwnProperty.call(r, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = r[a];
    }
  return n;
}
function j() {
  return j = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
    }
    return r;
  }, j.apply(this, arguments);
}
function J(r, t) {
  var n = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    t && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function P(r) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J(Object(n), !0).forEach(function(a) {
      be(r, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach(function(a) {
      Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(n, a));
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
    var a = n.call(r, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function G(r) {
  return r && r.map((t, n) => /* @__PURE__ */ v.createElement(t.tag, P({
    key: n
  }, t.attr), G(t.child)));
}
function Ee(r) {
  return (t) => /* @__PURE__ */ v.createElement(Oe, j({
    attr: P({}, r.attr)
  }, t), G(r.child));
}
function Oe(r) {
  var t = (n) => {
    var {
      attr: a,
      size: i,
      title: l
    } = r, d = me(r, fe), f = i || n.size || "1em", p;
    return n.className && (p = n.className), r.className && (p = (p ? p + " " : "") + r.className), /* @__PURE__ */ v.createElement("svg", j({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, a, d, {
      className: p,
      style: P(P({
        color: r.color || n.color
      }, n.style), r.style),
      height: f,
      width: f,
      xmlns: "http://www.w3.org/2000/svg"
    }), l && /* @__PURE__ */ v.createElement("title", null, l), r.children);
  };
  return V !== void 0 ? /* @__PURE__ */ v.createElement(V.Consumer, null, (n) => t(n)) : t(q);
}
function _e(r) {
  return Ee({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" }, child: [] }] })(r);
}
const ge = ({ title: r, children: t, footer: n, className: a }) => {
  const i = (l) => {
    l.stopPropagation(), window.location.href = "/";
  };
  return /* @__PURE__ */ E.jsxs("div", { className: `main-container ${a}`, children: [
    /* @__PURE__ */ E.jsxs("div", { className: "tool-hub", children: [
      /* @__PURE__ */ E.jsx(_e, { className: "hub-icon", onClick: i }),
      /* @__PURE__ */ E.jsx("div", { className: "hub-title", children: r })
    ] }),
    /* @__PURE__ */ E.jsx("div", { className: "tool-content", children: t }),
    /* @__PURE__ */ E.jsx("div", { className: "tool-footer", children: n })
  ] });
};
export {
  Re as Button,
  ge as Hub
};
//# sourceMappingURL=index.js.map
