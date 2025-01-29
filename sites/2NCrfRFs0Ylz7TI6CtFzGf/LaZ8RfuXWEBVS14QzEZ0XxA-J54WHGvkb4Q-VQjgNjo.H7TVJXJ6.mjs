import { a as Fe } from "./chunk-7KBJ6YIE.mjs";
import {
  $ as he,
  A as Z,
  C as Le,
  E as h,
  H as B,
  I as P,
  J as Re,
  K as J,
  L as q,
  M as te,
  O as X,
  P as ir,
  Q as sr,
  T as se,
  V as U,
  aa as lr,
  b as g,
  ca as $,
  d as Y,
  da as Pe,
  ea as Ve,
  f as K,
  fa as V,
  g as F,
  h as H,
  ha as mr,
  i as nr,
  ia as fr,
  j as A,
  ja as G,
  k as R,
  ka as ae,
  l as fe,
  la as cr,
  n as or,
  o as e,
  p as w,
  q as E,
  r as m,
  s as W,
} from "./chunk-QWYD5253.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as u } from "./chunk-RIUMFBNJ.mjs";
var xe = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Ye = {
    ...xe,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  Rr = {
    onClick: { type: h.EventHandler },
    onMouseEnter: { type: h.EventHandler },
    onMouseLeave: { type: h.EventHandler },
  },
  Vr = {
    type: h.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Fr = {
    font: {
      type: h.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: h.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: t }) => !t,
    },
    fontWeight: {
      type: h.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: t }) => !t,
    },
  };
function He() {
  return A(() => Le.current() === Le.canvas, []);
}
var Ur = {
  borderRadius: {
    title: "Radius",
    type: h.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var Nr = {
  padding: {
    type: h.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
function ve({ type: t, url: r, html: n, style: a = {} }) {
  return t === "url" && r
    ? e(Dr, { url: r, style: a })
    : t === "html" && n
    ? e(Br, { html: n, style: a })
    : e(qr, { style: a });
}
B(ve, {
  type: {
    type: h.Enum,
    defaultValue: "url",
    displaySegmentedControl: !0,
    options: ["url", "html"],
    optionTitles: ["URL", "HTML"],
  },
  url: {
    title: "URL",
    type: h.String,
    description: "Some websites don\u2019t support embedding.",
    hidden(t) {
      return t.type !== "url";
    },
  },
  html: {
    title: "HTML",
    type: h.String,
    displayTextArea: !0,
    hidden(t) {
      return t.type !== "html";
    },
  },
});
function qr({ style: t }) {
  return e("div", {
    style: { minHeight: gr(t), ...Ye, overflow: "hidden", ...t },
    children: e("div", {
      style: Ze,
      children:
        "To embed a website or widget, add it to the properties\xA0panel.",
    }),
  });
}
function Dr({ url: t, style: r }) {
  let n = !r.height;
  /[a-z]+:\/\//.test(t) || (t = "https://" + t);
  let a = He(),
    [o, l] = fe(a ? void 0 : !1);
  if (
    (F(() => {
      if (!a) return;
      let i = !0;
      l(void 0);
      async function f() {
        let c = await fetch(
          "https://api.framer.com/functions/check-iframe-url?url=" +
            encodeURIComponent(t)
        );
        if (c.status == 200) {
          let { isBlocked: s } = await c.json();
          i && l(s);
        } else {
          let s = await c.text();
          console.error(s);
          let d = new Error("This site can\u2019t be reached.");
          l(d);
        }
      }
      return (
        f().catch((c) => {
          console.error(c), l(c);
        }),
        () => {
          i = !1;
        }
      );
    }, [t]),
    a && n)
  )
    return e(Ee, {
      message: "URL embeds do not support auto height.",
      style: r,
    });
  if (!t.startsWith("https://"))
    return e(Ee, { message: "Unsupported protocol.", style: r });
  if (o === void 0) return e(Hr, {});
  if (o instanceof Error) return e(Ee, { message: o.message, style: r });
  if (o === !0) {
    let i = `Can\u2019t embed ${t} due to its content security policy.`;
    return e(Ee, { message: i, style: r });
  }
  return e("iframe", {
    src: t,
    style: { ...pr, ...r },
    loading: "lazy",
    fetchPriority: a ? "low" : "auto",
    referrerPolicy: "no-referrer",
    sandbox: Ar(a),
  });
}
var pr = { width: "100%", height: "100%", border: "none" };
function Ar(t) {
  let r = ["allow-same-origin", "allow-scripts"];
  return (
    t ||
      r.push(
        "allow-downloads",
        "allow-forms",
        "allow-modals",
        "allow-orientation-lock",
        "allow-pointer-lock",
        "allow-popups",
        "allow-popups-to-escape-sandbox",
        "allow-presentation",
        "allow-storage-access-by-user-activation",
        "allow-top-navigation-by-user-activation"
      ),
    r.join(" ")
  );
}
function Br({ html: t, ...r }) {
  if (t.includes("</script>")) {
    let a = t.includes("</spline-viewer>"),
      o = t.includes("<!-- framer-direct-embed -->");
    return a || o ? e(Pr, { html: t, ...r }) : e(Wr, { html: t, ...r });
  }
  return e(Yr, { html: t, ...r });
}
function Wr({ html: t, style: r }) {
  let n = R(),
    [a, o] = fe(0);
  F(() => {
    var c;
    let s = (c = n.current) === null || c === void 0 ? void 0 : c.contentWindow;
    function d(y) {
      if (y.source !== s) return;
      let x = y.data;
      if (typeof x != "object" || x === null) return;
      let C = x.embedHeight;
      typeof C == "number" && o(C);
    }
    return (
      u.addEventListener("message", d),
      s?.postMessage("getEmbedHeight", "*"),
      () => {
        u.removeEventListener("message", d);
      }
    );
  }, []);
  let l = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${t}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,
    i = { ...pr, ...r };
  return (
    !r.height && (i.height = a + "px"),
    e("iframe", { ref: n, style: i, srcDoc: l })
  );
}
function Pr({ html: t, style: r }) {
  let n = R();
  return (
    F(() => {
      let a = n.current;
      if (a)
        return (
          (a.innerHTML = t),
          hr(a),
          () => {
            a.innerHTML = "";
          }
        );
    }, [t]),
    e("div", { ref: n, style: { ...ur, ...r } })
  );
}
function Yr({ html: t, style: r }) {
  return e("div", {
    style: { ...ur, ...r },
    dangerouslySetInnerHTML: { __html: t },
  });
}
var ur = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
function hr(t) {
  if (t instanceof Element && t.tagName === "SCRIPT") {
    let r = document.createElement("script");
    r.text = t.innerHTML;
    for (let { name: n, value: a } of t.attributes) r.setAttribute(n, a);
    t.parentElement.replaceChild(r, t);
  } else for (let r of t.childNodes) hr(r);
}
function Hr() {
  return e("div", {
    className: "framerInternalUI-componentPlaceholder",
    style: { ...xe, overflow: "hidden" },
    children: e("div", { style: Ze, children: "Loading\u2026" }),
  });
}
function Ee({ message: t, style: r }) {
  return e("div", {
    className: "framerInternalUI-errorPlaceholder",
    style: { minHeight: gr(r), ...xe, overflow: "hidden", ...r },
    children: e("div", { style: Ze, children: t }),
  });
}
var Ze = { textAlign: "center", minWidth: 140 };
function gr(t) {
  if (!t.height) return 200;
}
function xr(t, r, n) {
  return Math.max(t, Math.min(r, n));
}
var Xe = class {
    constructor() {
      (this.isRunning = !1),
        (this.value = 0),
        (this.from = 0),
        (this.to = 0),
        (this.duration = 0),
        (this.currentTime = 0);
    }
    advance(r) {
      var n;
      if (!this.isRunning) return;
      let a = !1;
      if (this.duration && this.easing) {
        this.currentTime += r;
        let o = xr(0, this.currentTime / this.duration, 1);
        a = o >= 1;
        let l = a ? 1 : this.easing(o);
        this.value = this.from + (this.to - this.from) * l;
      } else
        this.lerp
          ? ((this.value = (function (l, i, f, c) {
              return (function (d, y, x) {
                return (1 - x) * d + x * y;
              })(l, i, 1 - Math.exp(-f * c));
            })(this.value, this.to, 60 * this.lerp, r)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (a = !0)))
          : ((this.value = this.to), (a = !0));
      a && this.stop(),
        (n = this.onUpdate) === null ||
          n === void 0 ||
          n.call(this, this.value, a);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(r, n, { lerp: a, duration: o, easing: l, onStart: i, onUpdate: f }) {
      (this.from = this.value = r),
        (this.to = n),
        (this.lerp = a),
        (this.duration = o),
        (this.easing = l),
        (this.currentTime = 0),
        (this.isRunning = !0),
        i?.(),
        (this.onUpdate = f);
    }
  },
  Ge = class {
    constructor({
      wrapper: r,
      content: n,
      autoResize: a = !0,
      debounce: o = 250,
    } = {}) {
      (this.width = 0),
        (this.height = 0),
        (this.scrollWidth = 0),
        (this.scrollHeight = 0),
        (this.resize = () => {
          this.onWrapperResize(), this.onContentResize();
        }),
        (this.onWrapperResize = () => {
          this.wrapper === u
            ? ((this.width = u.innerWidth), (this.height = u.innerHeight))
            : this.wrapper instanceof HTMLElement &&
              ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        }),
        (this.onContentResize = () => {
          this.wrapper === u
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : this.wrapper instanceof HTMLElement &&
              ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        }),
        (this.wrapper = r),
        (this.content = n),
        a &&
          ((this.debouncedResize = (function (i, f) {
            let c;
            return function () {
              let s = arguments,
                d = this;
              clearTimeout(c),
                (c = setTimeout(function () {
                  i.apply(d, s);
                }, f));
            };
          })(this.resize, o)),
          this.wrapper === u
            ? u.addEventListener("resize", this.debouncedResize, !1)
            : ((this.wrapperResizeObserver = new ResizeObserver(
                this.debouncedResize
              )),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(
            this.debouncedResize
          )),
          this.contentResizeObserver.observe(this.content)),
        this.resize();
    }
    destroy() {
      var r, n;
      (r = this.wrapperResizeObserver) === null ||
        r === void 0 ||
        r.disconnect(),
        (n = this.contentResizeObserver) === null ||
          n === void 0 ||
          n.disconnect(),
        u.removeEventListener("resize", this.debouncedResize, !1);
    }
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height,
      };
    }
  },
  ze = class {
    constructor() {
      this.events = {};
    }
    emit(r, ...n) {
      let a = this.events[r] || [];
      for (let o = 0, l = a.length; o < l; o++) a[o](...n);
    }
    on(r, n) {
      var a;
      return (
        (!((a = this.events[r]) === null || a === void 0) && a.push(n)) ||
          (this.events[r] = [n]),
        () => {
          var o;
          this.events[r] =
            (o = this.events[r]) === null || o === void 0
              ? void 0
              : o.filter((l) => n !== l);
        }
      );
    }
    off(r, n) {
      var a;
      this.events[r] =
        (a = this.events[r]) === null || a === void 0
          ? void 0
          : a.filter((o) => n !== o);
    }
    destroy() {
      this.events = {};
    }
  },
  yr = 100 / 6,
  Oe = class {
    constructor(r, { wheelMultiplier: n = 1, touchMultiplier: a = 1 }) {
      (this.lastDelta = { x: 0, y: 0 }),
        (this.windowWidth = 0),
        (this.windowHeight = 0),
        (this.onTouchStart = (o) => {
          let { clientX: l, clientY: i } = o.targetTouches
            ? o.targetTouches[0]
            : o;
          (this.touchStart.x = l),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: o });
        }),
        (this.onTouchMove = (o) => {
          var l, i, f, c;
          let { clientX: s, clientY: d } = o.targetTouches
              ? o.targetTouches[0]
              : o,
            y =
              -(
                s -
                ((i =
                  (l = this.touchStart) === null || l === void 0
                    ? void 0
                    : l.x) !== null && i !== void 0
                  ? i
                  : 0)
              ) * this.touchMultiplier,
            x =
              -(
                d -
                ((c =
                  (f = this.touchStart) === null || f === void 0
                    ? void 0
                    : f.y) !== null && c !== void 0
                  ? c
                  : 0)
              ) * this.touchMultiplier;
          (this.touchStart.x = s),
            (this.touchStart.y = d),
            (this.lastDelta = { x: y, y: x }),
            this.emitter.emit("scroll", { deltaX: y, deltaY: x, event: o });
        }),
        (this.onTouchEnd = (o) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: o,
          });
        }),
        (this.onWheel = (o) => {
          let { deltaX: l, deltaY: i, deltaMode: f } = o;
          (l *= f === 1 ? yr : f === 2 ? this.windowWidth : 1),
            (i *= f === 1 ? yr : f === 2 ? this.windowHeight : 1),
            (l *= this.wheelMultiplier),
            (i *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: l, deltaY: i, event: o });
        }),
        (this.onWindowResize = () => {
          (this.windowWidth = u.innerWidth),
            (this.windowHeight = u.innerHeight);
        }),
        (this.element = r),
        (this.wheelMultiplier = n),
        (this.touchMultiplier = a),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = new ze()),
        u.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
          passive: !1,
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
          passive: !1,
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
          passive: !1,
        });
    }
    on(r, n) {
      return this.emitter.on(r, n);
    }
    destroy() {
      this.emitter.destroy(),
        u.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel),
        this.element.removeEventListener("touchstart", this.onTouchStart),
        this.element.removeEventListener("touchmove", this.onTouchMove),
        this.element.removeEventListener("touchend", this.onTouchEnd);
    }
  },
  Ue = class {
    constructor({
      wrapper: r = u,
      content: n = document.documentElement,
      wheelEventsTarget: a = r,
      eventsTarget: o = a,
      smoothWheel: l = !0,
      syncTouch: i = !1,
      syncTouchLerp: f = 0.075,
      touchInertiaMultiplier: c = 35,
      duration: s,
      easing: d = (M) => Math.min(1, 1.001 - Math.pow(2, -10 * M)),
      lerp: y = 0.1,
      infinite: x = !1,
      orientation: C = "vertical",
      gestureOrientation: S = "vertical",
      touchMultiplier: k = 1,
      wheelMultiplier: I = 1,
      autoResize: z = !0,
      prevent: b,
      virtualScroll: p,
      __experimental__naiveDimensions: N = !1,
    } = {}) {
      (this.__isScrolling = !1),
        (this.__isStopped = !1),
        (this.__isLocked = !1),
        (this.userData = {}),
        (this.lastVelocity = 0),
        (this.velocity = 0),
        (this.direction = 0),
        (this.onPointerDown = (M) => {
          M.button === 1 && this.reset();
        }),
        (this.onVirtualScroll = (M) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(M) === !1
          )
            return;
          let { deltaX: L, deltaY: v, event: _ } = M;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: L,
              deltaY: v,
              event: _,
            }),
            _.ctrlKey)
          )
            return;
          let ee = _.type.includes("touch"),
            ne = _.type.includes("wheel");
          if (
            ((this.isTouching =
              _.type === "touchstart" || _.type === "touchmove"),
            this.options.syncTouch &&
              ee &&
              _.type === "touchstart" &&
              !this.isStopped &&
              !this.isLocked)
          )
            return void this.reset();
          let le = L === 0 && v === 0,
            Q =
              (this.options.gestureOrientation === "vertical" && v === 0) ||
              (this.options.gestureOrientation === "horizontal" && L === 0);
          if (le || Q) return;
          let oe = _.composedPath();
          oe = oe.slice(0, oe.indexOf(this.rootElement));
          let ie = this.options.prevent;
          if (
            oe.find((D) => {
              var O, De, Ae, Be, We;
              return (
                D instanceof Element &&
                ((typeof ie == "function" && ie?.(D)) ||
                  ((O = D.hasAttribute) === null || O === void 0
                    ? void 0
                    : O.call(D, "data-lenis-prevent")) ||
                  (ee &&
                    ((De = D.hasAttribute) === null || De === void 0
                      ? void 0
                      : De.call(D, "data-lenis-prevent-touch"))) ||
                  (ne &&
                    ((Ae = D.hasAttribute) === null || Ae === void 0
                      ? void 0
                      : Ae.call(D, "data-lenis-prevent-wheel"))) ||
                  (((Be = D.classList) === null || Be === void 0
                    ? void 0
                    : Be.contains("lenis")) &&
                    !(
                      !((We = D.classList) === null || We === void 0) &&
                      We.contains("lenis-stopped")
                    )))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) return void _.preventDefault();
          if (
            !(
              (this.options.syncTouch && ee) ||
              (this.options.smoothWheel && ne)
            )
          )
            return (this.isScrolling = "native"), void this.animate.stop();
          _.preventDefault();
          let re = v;
          this.options.gestureOrientation === "both"
            ? (re = Math.abs(v) > Math.abs(L) ? v : L)
            : this.options.gestureOrientation === "horizontal" && (re = L);
          let de = ee && this.options.syncTouch,
            pe = ee && _.type === "touchend" && Math.abs(re) > 5;
          pe && (re = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + re,
              Object.assign(
                { programmatic: !1 },
                de
                  ? { lerp: pe ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }
              )
            );
        }),
        (this.onNativeScroll = () => {
          if (
            (clearTimeout(this.__resetVelocityTimeout),
            delete this.__resetVelocityTimeout,
            this.__preventNextNativeScrollEvent)
          )
            delete this.__preventNextNativeScrollEvent;
          else if (this.isScrolling === !1 || this.isScrolling === "native") {
            let M = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - M),
              (this.direction = Math.sign(this.animatedScroll - M)),
              (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this.__resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        }),
        (u.lenisVersion = "1.1.9"),
        (r && r !== document.documentElement && r !== document.body) || (r = u),
        (this.options = {
          wrapper: r,
          content: n,
          wheelEventsTarget: a,
          eventsTarget: o,
          smoothWheel: l,
          syncTouch: i,
          syncTouchLerp: f,
          touchInertiaMultiplier: c,
          duration: s,
          easing: d,
          lerp: y,
          infinite: x,
          gestureOrientation: S,
          orientation: C,
          touchMultiplier: k,
          wheelMultiplier: I,
          autoResize: z,
          prevent: b,
          virtualScroll: p,
          __experimental__naiveDimensions: N,
        }),
        (this.animate = new Xe()),
        (this.emitter = new ze()),
        (this.dimensions = new Ge({ wrapper: r, content: n, autoResize: z })),
        this.updateClassName(),
        (this.userData = {}),
        (this.time = 0),
        (this.velocity = this.lastVelocity = 0),
        (this.isLocked = !1),
        (this.isStopped = !1),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener(
          "scroll",
          this.onNativeScroll,
          !1
        ),
        this.options.wrapper.addEventListener(
          "pointerdown",
          this.onPointerDown,
          !1
        ),
        (this.virtualScroll = new Oe(o, {
          touchMultiplier: k,
          wheelMultiplier: I,
        })),
        this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(),
        this.options.wrapper.removeEventListener(
          "scroll",
          this.onNativeScroll,
          !1
        ),
        this.options.wrapper.removeEventListener(
          "pointerdown",
          this.onPointerDown,
          !1
        ),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName();
    }
    on(r, n) {
      return this.emitter.on(r, n);
    }
    off(r, n) {
      return this.emitter.off(r, n);
    }
    setScroll(r) {
      this.isHorizontal
        ? (this.rootElement.scrollLeft = r)
        : (this.rootElement.scrollTop = r);
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop();
    }
    start() {
      this.isStopped && ((this.isStopped = !1), this.reset());
    }
    stop() {
      this.isStopped ||
        ((this.isStopped = !0), this.animate.stop(), this.reset());
    }
    raf(r) {
      let n = r - (this.time || r);
      (this.time = r), this.animate.advance(0.001 * n);
    }
    scrollTo(
      r,
      {
        offset: n = 0,
        immediate: a = !1,
        lock: o = !1,
        duration: l = this.options.duration,
        easing: i = this.options.easing,
        lerp: f = this.options.lerp,
        onStart: c,
        onComplete: s,
        force: d = !1,
        programmatic: y = !0,
        userData: x = {},
      } = {}
    ) {
      if ((!this.isStopped && !this.isLocked) || d) {
        if (typeof r == "string" && ["top", "left", "start"].includes(r)) r = 0;
        else if (typeof r == "string" && ["bottom", "right", "end"].includes(r))
          r = this.limit;
        else {
          let C;
          if (
            (typeof r == "string"
              ? (C = document.querySelector(r))
              : r instanceof HTMLElement && r?.nodeType && (C = r),
            C)
          ) {
            if (this.options.wrapper !== u) {
              let k = this.rootElement.getBoundingClientRect();
              n -= this.isHorizontal ? k.left : k.top;
            }
            let S = C.getBoundingClientRect();
            r = (this.isHorizontal ? S.left : S.top) + this.animatedScroll;
          }
        }
        if (
          typeof r == "number" &&
          ((r += n),
          (r = Math.round(r)),
          this.options.infinite
            ? y && (this.targetScroll = this.animatedScroll = this.scroll)
            : (r = xr(0, r, this.limit)),
          r !== this.targetScroll)
        ) {
          if (((this.userData = x), a))
            return (
              (this.animatedScroll = this.targetScroll = r),
              this.setScroll(this.scroll),
              this.reset(),
              this.preventNextNativeScrollEvent(),
              this.emit(),
              s?.(this),
              void (this.userData = {})
            );
          y || (this.targetScroll = r),
            this.animate.fromTo(this.animatedScroll, r, {
              duration: l,
              easing: i,
              lerp: f,
              onStart: () => {
                o && (this.isLocked = !0),
                  (this.isScrolling = "smooth"),
                  c?.(this);
              },
              onUpdate: (C, S) => {
                (this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = C - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = C),
                  this.setScroll(this.scroll),
                  y && (this.targetScroll = C),
                  S || this.emit(),
                  S &&
                    (this.reset(),
                    this.emit(),
                    s?.(this),
                    (this.userData = {}),
                    this.preventNextNativeScrollEvent());
              },
            });
        }
      }
    }
    preventNextNativeScrollEvent() {
      (this.__preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          delete this.__preventNextNativeScrollEvent;
        });
    }
    get rootElement() {
      return this.options.wrapper === u
        ? document.documentElement
        : this.options.wrapper;
    }
    get limit() {
      return this.options.__experimental__naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    get actualScroll() {
      return this.isHorizontal
        ? this.rootElement.scrollLeft
        : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite
        ? (function (n, a) {
            return ((n % a) + a) % a;
          })(this.animatedScroll, this.limit)
        : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(r) {
      this.__isScrolling !== r &&
        ((this.__isScrolling = r), this.updateClassName());
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(r) {
      this.__isStopped !== r &&
        ((this.__isStopped = r), this.updateClassName());
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(r) {
      this.__isLocked !== r && ((this.__isLocked = r), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    get className() {
      let r = "lenis";
      return (
        this.isStopped && (r += " lenis-stopped"),
        this.isLocked && (r += " lenis-locked"),
        this.isScrolling && (r += " lenis-scrolling"),
        this.isScrolling === "smooth" && (r += " lenis-smooth"),
        r
      );
    }
    updateClassName() {
      this.cleanUpClassName(),
        (this.rootElement.className =
          `${this.rootElement.className} ${this.className}`.trim());
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className
        .replace(/lenis(-\w+)?/g, "")
        .trim();
    }
  };
function ge(t) {
  let { intensity: r } = t,
    n = R(null);
  return (
    F(() => {
      n.current && n.current.scrollTo(0, { immediate: !0 });
    }, [n]),
    F(() => {
      let a = document.getElementById("overlay");
      if (a) {
        let o = () => {
            u.getComputedStyle(document.documentElement).overflow ===
              "hidden" && a.setAttribute("data-lenis-prevent", "true");
          },
          l = new MutationObserver((i) => {
            for (let f of i)
              f.type === "attributes" && f.attributeName === "style" && o();
          });
        return (
          l.observe(document.documentElement, {
            attributes: !0,
            attributeFilter: ["style"],
          }),
          o(),
          () => {
            l.disconnect();
          }
        );
      }
    }, []),
    F(() => {
      let a = document.getElementsByTagName("*");
      for (let o = 0; o < a.length; o++) {
        let l = a[o];
        u.getComputedStyle(l).getPropertyValue("overflow") === "auto" &&
          l.setAttribute("data-lenis-prevent", "true");
      }
    }, []),
    F(() => {
      n.current = new Ue({ duration: r / 10 });
      let a = (o) => {
        n.current && (n.current.raf(o), requestAnimationFrame(a));
      };
      return (
        requestAnimationFrame(a),
        () => {
          n.current && (n.current.destroy(), (n.current = null));
        }
      );
    }, []),
    F(() => {
      let a = document.createElement("style");
      return (
        (a.textContent = `
html.lenis {
height: auto;
}
.lenis.lenis-smooth {

scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {

overscroll-behavior: contain;
}
.lenis.lenis-stopped {

overflow: hidden;
}
.lenis.lenis-scrolling iframe {

pointer-events: none;
}
`),
        document.head.appendChild(a),
        () => {
          document.head.removeChild(a);
        }
      );
    }, []),
    F(() => {
      let a = [...document.querySelectorAll("a[href]")]
          .filter((i) => i.href.includes("#"))
          .map((i) => {
            let f = `#${i.href.split("#").pop()}`,
              c = decodeURIComponent(f),
              s = 0,
              d = document.querySelector(c);
            return (
              d && (s = parseInt(u.getComputedStyle(d).scrollMarginTop)),
              { href: f, scrollMargin: s, anchorElement: i }
            );
          }),
        o = (i, f, c) => {
          i.preventDefault(), n.current.scrollTo(f, { offset: -c });
        },
        l = a.map(
          ({ href: i, scrollMargin: f }) =>
            (c) =>
              o(c, i, f)
        );
      return (
        a.forEach(({ anchorElement: i }, f) => {
          i.addEventListener("click", l[f]);
        }),
        () => {
          a.forEach(({ anchorElement: i }, f) => {
            i.removeEventListener("click", l[f]);
          });
        }
      );
    }, [n]),
    e(or, {})
  );
}
ge.displayName = "Smooth Scroll";
B(ge, {
  intensity: {
    title: "Intensity",
    type: h.Number,
    defaultValue: 10,
    description:
      "More components at [Framer University](https://frameruni.link/cc).",
  },
});
var Zr = "abcdefghijklmnopqrstuvwxyz-.,+*!?@&%/=";
function ce(t) {
  return (r) => {
    let n = r.children.props.children.props.children,
      [a, o] = fe(!1),
      [l, i] = fe(0),
      f = R(null),
      c = (s) =>
        n
          .split("")
          .map((d, y) => (y < s ? n[y] : Zr[Math.floor(Math.random() * 38)]))
          .join("");
    return (
      F(() => {
        let s = new IntersectionObserver((d) => {
          d.forEach((y) => {
            y.isIntersecting ? o(!0) : o(!1);
          });
        });
        return s.observe(f.current), () => s.disconnect();
      }, []),
      F(() => {
        let s = null;
        return (
          a &&
            (s = setTimeout(() => {
              i((d) => d + 5 / 6),
                (s = setInterval(() => {
                  i((d) => d + 5 / 6);
                }, 50));
            }, 100)),
          () => clearInterval(s)
        );
      }, [a]),
      e(t, { ref: f, ...r, text: a ? c(l) : n })
    );
  };
}
var Xr = ce(V),
  Gr = [
    "UoEkFPwWQ",
    "yv11VXeXb",
    "sr1FYMtk0",
    "FFfH1YPeR",
    "po1U9Pv_R",
    "NnqSMZXTH",
  ],
  Or = "framer-0kQ7R",
  Qr = {
    FFfH1YPeR: "framer-v-ao41lu",
    NnqSMZXTH: "framer-v-1cuo0h9",
    po1U9Pv_R: "framer-v-1u0y0lp",
    sr1FYMtk0: "framer-v-1e9t0yl",
    UoEkFPwWQ: "framer-v-j0pbyo",
    yv11VXeXb: "framer-v-1wt3ap1",
  };
function Qe(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Kr = { delay: 0, duration: 0.5, ease: [0, 0, 1, 1], type: "tween" },
  Jr = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  vr = { duration: 0, type: "tween" },
  $r = ({ value: t, children: r }) => {
    let n = K(E),
      a = t ?? n.transition,
      o = A(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(E.Provider, { value: o, children: r });
  },
  et = m.create(g),
  rt = {
    "Dark Link: hover": "FFfH1YPeR",
    "Dark Link": "sr1FYMtk0",
    "Light Link: hover": "NnqSMZXTH",
    "Light Link": "po1U9Pv_R",
    "Underline Link: hover": "yv11VXeXb",
    "Underline Link": "UoEkFPwWQ",
  },
  tt = ({ color: t, height: r, id: n, link: a, width: o, ...l }) => {
    var i, f, c;
    return {
      ...l,
      diDBqZx1P: a ?? l.diDBqZx1P,
      variant:
        (f = (i = rt[l.variant]) !== null && i !== void 0 ? i : l.variant) !==
          null && f !== void 0
          ? f
          : "UoEkFPwWQ",
      XqeH23ibS:
        (c = t ?? l.XqeH23ibS) !== null && c !== void 0
          ? c
          : "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
    };
  },
  at = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  nt = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      {
        style: o,
        className: l,
        layoutId: i,
        variant: f,
        diDBqZx1P: c,
        XqeH23ibS: s,
        ...d
      } = tt(t),
      {
        baseVariant: y,
        classNames: x,
        clearLoadingGesture: C,
        gestureHandlers: S,
        gestureVariant: k,
        isLoading: I,
        setGestureState: z,
        setVariant: b,
        variants: p,
      } = $({
        cycleOrder: Gr,
        defaultVariant: "UoEkFPwWQ",
        variant: f,
        variantClassNames: Qr,
      }),
      N = at(t, p),
      { activeVariantCallback: M, delay: L } = he(y),
      v = M(async (...D) => {
        z({ isHovered: !0 }), b("yv11VXeXb");
      }),
      _ = M(async (...D) => {
        z({ isHovered: !1 }), b("UoEkFPwWQ");
      }),
      ee = M(async (...D) => {
        z({ isHovered: !0 }), b("FFfH1YPeR");
      }),
      ne = M(async (...D) => {
        z({ isHovered: !1 }), b("sr1FYMtk0");
      }),
      le = M(async (...D) => {
        z({ isHovered: !0 }), b("NnqSMZXTH");
      }),
      Q = M(async (...D) => {
        z({ isHovered: !1 }), b("po1U9Pv_R");
      }),
      oe = R(null),
      ie = () =>
        !["sr1FYMtk0", "FFfH1YPeR", "po1U9Pv_R", "NnqSMZXTH"].includes(y),
      re = H(),
      de = [],
      pe = J();
    return e(W, {
      id: i ?? re,
      children: e(et, {
        animate: p,
        initial: !1,
        children: e($r, {
          value: Kr,
          ...Qe(
            {
              NnqSMZXTH: { value: vr },
              po1U9Pv_R: { value: vr },
              sr1FYMtk0: { value: Jr },
            },
            y,
            k
          ),
          children: e(se, {
            href: c,
            nodeId: "UoEkFPwWQ",
            children: w(m.a, {
              ...d,
              ...S,
              className: `${P(
                Or,
                ...de,
                "framer-j0pbyo",
                l,
                x
              )} framer-14llnfm`,
              "data-framer-name": "Underline Link",
              "data-highlight": !0,
              layoutDependency: N,
              layoutId: "UoEkFPwWQ",
              onMouseEnter: v,
              ref: r ?? oe,
              style: { ...o },
              ...Qe(
                {
                  FFfH1YPeR: {
                    "data-framer-name": "Dark Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: ne,
                  },
                  NnqSMZXTH: {
                    "data-framer-name": "Light Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: Q,
                  },
                  po1U9Pv_R: {
                    "data-framer-name": "Light Link",
                    onMouseEnter: le,
                  },
                  sr1FYMtk0: {
                    "data-framer-name": "Dark Link",
                    onMouseEnter: ee,
                  },
                  yv11VXeXb: {
                    "data-framer-name": "Underline Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: _,
                  },
                },
                y,
                k
              ),
              children: [
                e(Xr, {
                  __fromCanvasComponent: !0,
                  children: e(g, {
                    children: e(m.p, {
                      style: {
                        "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                        "--framer-font-family": '"Martian Mono", monospace',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "300",
                        "--framer-line-height": "1.3em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--variable-reference-XqeH23ibS-nnJMLsONl))",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "Buy Now",
                    }),
                  }),
                  className: "framer-vvxr5",
                  fonts: ["GF;Martian Mono-300"],
                  layoutDependency: N,
                  layoutId: "YtFNTT4cD",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--variable-reference-XqeH23ibS-nnJMLsONl)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--variable-reference-XqeH23ibS-nnJMLsONl": s,
                  },
                  variants: {
                    NnqSMZXTH: {
                      "--extracted-r6o4lv": "rgba(255, 255, 255, 0.7)",
                    },
                    sr1FYMtk0: {
                      "--extracted-r6o4lv":
                        "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Qe(
                    {
                      NnqSMZXTH: {
                        children: e(g, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "12px",
                              "--framer-font-weight": "300",
                              "--framer-line-height": "1.3em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "Buy Now",
                          }),
                        }),
                      },
                      sr1FYMtk0: {
                        children: e(g, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "12px",
                              "--framer-font-weight": "300",
                              "--framer-line-height": "1.3em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "Buy Now",
                          }),
                        }),
                      },
                    },
                    y,
                    k
                  ),
                }),
                ie() &&
                  e(m.div, {
                    className: "framer-1kod2q9",
                    "data-framer-name": "Border right",
                    layoutDependency: N,
                    layoutId: "cd3x9k0kN",
                    style: { backgroundColor: s },
                  }),
                ie() &&
                  e(m.div, {
                    className: "framer-1poz1cm",
                    "data-framer-name": "Border left",
                    layoutDependency: N,
                    layoutId: "TSE8Dp9JV",
                    style: { backgroundColor: s },
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  ot = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-0kQ7R.framer-14llnfm, .framer-0kQ7R .framer-14llnfm { display: block; }",
    ".framer-0kQ7R.framer-j0pbyo { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-0kQ7R .framer-vvxr5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-0kQ7R .framer-1kod2q9 { bottom: 0px; flex: none; height: 1px; left: calc(49.50495049504953% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 1; }",
    ".framer-0kQ7R .framer-1poz1cm { bottom: 0px; flex: none; height: 1px; left: calc(-148.51485148514848% - 99.00990099009901% / 2); overflow: hidden; position: absolute; width: 99%; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0kQ7R.framer-j0pbyo { gap: 0px; } .framer-0kQ7R.framer-j0pbyo > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-0kQ7R.framer-j0pbyo > :first-child { margin-top: 0px; } .framer-0kQ7R.framer-j0pbyo > :last-child { margin-bottom: 0px; } }",
    ".framer-0kQ7R.framer-v-1wt3ap1 .framer-1kod2q9 { left: calc(152.4752475247525% - 100% / 2); }",
    ".framer-0kQ7R.framer-v-1wt3ap1 .framer-1poz1cm { left: unset; right: 0px; width: 100%; }",
  ],
  be = X(nt, ot, "framer-0kQ7R"),
  Ke = be;
be.displayName = "Links";
be.defaultProps = { height: 16, width: 84 };
B(be, {
  variant: {
    options: [
      "UoEkFPwWQ",
      "yv11VXeXb",
      "sr1FYMtk0",
      "FFfH1YPeR",
      "po1U9Pv_R",
      "NnqSMZXTH",
    ],
    optionTitles: [
      "Underline Link",
      "Underline Link: hover",
      "Dark Link",
      "Dark Link: hover",
      "Light Link",
      "Light Link: hover",
    ],
    title: "Variant",
    type: h.Enum,
  },
  diDBqZx1P: { title: "Link", type: h.Link },
  XqeH23ibS: {
    defaultValue:
      'var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)) /* {"name":"White"} */',
    title: "Color",
    type: h.Color,
  },
});
G(
  be,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY00u86TD75kdpF2.woff2",
          weight: "300",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var it = ae(Ke),
  st = ce(V),
  lt = ["atwzvm2Tz", "x71upxKda"],
  mt = "framer-WZcBr",
  ft = { atwzvm2Tz: "framer-v-95bnjd", x71upxKda: "framer-v-1e2pzn3" };
function ct(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var dt = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  pt = ({ value: t, children: r }) => {
    let n = K(E),
      a = t ?? n.transition,
      o = A(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(E.Provider, { value: o, children: r });
  },
  ut = m.create(g),
  ht = { Desktop: "atwzvm2Tz", Phone: "x71upxKda" },
  gt = ({ height: t, hoverCursor: r, id: n, width: a, ...o }) => {
    var l, i;
    return {
      ...o,
      OMRwfmwMQ: r ?? o.OMRwfmwMQ,
      variant:
        (i = (l = ht[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && i !== void 0
          ? i
          : "atwzvm2Tz",
    };
  },
  yt = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  xt = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      {
        style: o,
        className: l,
        layoutId: i,
        variant: f,
        OMRwfmwMQ: c,
        ...s
      } = gt(t),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: x,
        gestureHandlers: C,
        gestureVariant: S,
        isLoading: k,
        setGestureState: I,
        setVariant: z,
        variants: b,
      } = $({
        cycleOrder: lt,
        defaultVariant: "atwzvm2Tz",
        variant: f,
        variantClassNames: ft,
      }),
      p = yt(t, b),
      N = R(null),
      M = H(),
      L = [],
      v = J();
    return e(W, {
      id: i ?? M,
      children: e(ut, {
        animate: b,
        initial: !1,
        children: e(pt, {
          value: dt,
          children: w(m.nav, {
            ...s,
            ...C,
            className: P(mt, ...L, "framer-95bnjd", l, y),
            "data-framer-name": "Desktop",
            layoutDependency: p,
            layoutId: "atwzvm2Tz",
            ref: r ?? N,
            style: { ...o },
            ...ct({ x71upxKda: { "data-framer-name": "Phone" } }, d, S),
            children: [
              e(se, {
                href: { webPageId: "augiA20Il" },
                nodeId: "N_j9HCWCi",
                children: e(m.a, {
                  className: "framer-2zkpf8 framer-17tpxp2",
                  "data-framer-cursor": c,
                  "data-framer-name": "Big Heading",
                  layoutDependency: p,
                  layoutId: "N_j9HCWCi",
                  children: e(V, {
                    __fromCanvasComponent: !0,
                    children: e(g, {
                      children: e(m.h1, {
                        style: {
                          "--font-selector": "Q1VTVE9NO05ldWUgUmVncmFkZSBCb2xk",
                          "--framer-font-family":
                            '"Neue Regrade Bold", "Neue Regrade Bold Placeholder", sans-serif',
                          "--framer-font-size": "242.01338357536926px",
                          "--framer-letter-spacing": "-0.06em",
                          "--framer-text-color":
                            "var(--extracted-gdpscs, rgb(109, 211, 206))",
                        },
                        children: "ENVOY",
                      }),
                    }),
                    className: "framer-ur6hdq",
                    fonts: ["CUSTOM;Neue Regrade Bold"],
                    layoutDependency: p,
                    layoutId: "oPBoXB_pO",
                    style: {
                      "--extracted-gdpscs": "rgb(109, 211, 206)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      mask: "url('/images/3TNSK4uxV7XVxTTpt3z9rPR4CQ.gif') luminance no-repeat center / cover add",
                      WebkitMask:
                        "url('/images/3TNSK4uxV7XVxTTpt3z9rPR4CQ.gif') luminance no-repeat center / cover add",
                    },
                    verticalAlignment: "top",
                    viewBox: "0 0 761.5208030145221 290",
                    withExternalLayout: !0,
                  }),
                }),
              }),
              w(m.div, {
                className: "framer-1n8t6vu",
                "data-framer-name": "wrapper",
                layoutDependency: p,
                layoutId: "rlMOVVBot",
                children: [
                  e(m.div, {
                    className: "framer-160w7as",
                    "data-framer-name": "left",
                    layoutDependency: p,
                    layoutId: "tQ5d7dYde",
                    children: e(q, {
                      height: 16,
                      children: e(m.div, {
                        className: "framer-z4eqfd-container",
                        "data-framer-cursor": c,
                        layoutDependency: p,
                        layoutId: "QJqtV5ffQ-container",
                        children: e(Ke, {
                          diDBqZx1P: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                          height: "100%",
                          id: "QJqtV5ffQ",
                          layoutId: "QJqtV5ffQ",
                          variant: "UoEkFPwWQ",
                          width: "100%",
                          XqeH23ibS:
                            "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                        }),
                      }),
                    }),
                  }),
                  e(m.div, {
                    className: "framer-176ayqq",
                    "data-framer-name": "right",
                    layoutDependency: p,
                    layoutId: "rWtng43MP",
                    children: e(m.div, {
                      className: "framer-1pvmwso",
                      "data-framer-name": "time",
                      layoutDependency: p,
                      layoutId: "XZIHGJwwE",
                      children: e(st, {
                        __fromCanvasComponent: !0,
                        children: e(g, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "12px",
                              "--framer-font-weight": "300",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "2em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "All-in-one Mobile AI Agent Workshop",
                          }),
                        }),
                        className: "framer-1orkhy0",
                        fonts: ["GF;Martian Mono-300"],
                        layoutDependency: p,
                        layoutId: "SjM7e45bB",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  vt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-WZcBr.framer-17tpxp2, .framer-WZcBr .framer-17tpxp2 { display: block; }",
    ".framer-WZcBr.framer-95bnjd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-WZcBr .framer-2zkpf8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; text-decoration: none; width: 100%; }",
    ".framer-WZcBr .framer-ur6hdq { flex: 1.26 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }",
    ".framer-WZcBr .framer-1n8t6vu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: 100%; }",
    ".framer-WZcBr .framer-160w7as { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-WZcBr .framer-z4eqfd-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-WZcBr .framer-176ayqq { align-content: center; align-items: center; display: flex; flex: 1.5 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-WZcBr .framer-1pvmwso { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-WZcBr .framer-1orkhy0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WZcBr.framer-95bnjd, .framer-WZcBr .framer-2zkpf8, .framer-WZcBr .framer-1n8t6vu, .framer-WZcBr .framer-160w7as, .framer-WZcBr .framer-176ayqq, .framer-WZcBr .framer-1pvmwso { gap: 0px; } .framer-WZcBr.framer-95bnjd > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-WZcBr.framer-95bnjd > :first-child { margin-top: 0px; } .framer-WZcBr.framer-95bnjd > :last-child { margin-bottom: 0px; } .framer-WZcBr .framer-2zkpf8 > *, .framer-WZcBr .framer-1n8t6vu > *, .framer-WZcBr .framer-160w7as > *, .framer-WZcBr .framer-176ayqq > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-WZcBr .framer-2zkpf8 > :first-child, .framer-WZcBr .framer-1n8t6vu > :first-child, .framer-WZcBr .framer-160w7as > :first-child, .framer-WZcBr .framer-176ayqq > :first-child, .framer-WZcBr .framer-1pvmwso > :first-child { margin-left: 0px; } .framer-WZcBr .framer-2zkpf8 > :last-child, .framer-WZcBr .framer-1n8t6vu > :last-child, .framer-WZcBr .framer-160w7as > :last-child, .framer-WZcBr .framer-176ayqq > :last-child, .framer-WZcBr .framer-1pvmwso > :last-child { margin-right: 0px; } .framer-WZcBr .framer-1pvmwso > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } }",
    ".framer-WZcBr.framer-v-1e2pzn3.framer-95bnjd { width: 390px; }",
    ".framer-WZcBr.framer-v-1e2pzn3 .framer-2zkpf8 { padding: 0px 12px 0px 12px; }",
    ".framer-WZcBr.framer-v-1e2pzn3 .framer-1n8t6vu { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 10px; padding: 0px 12px 0px 12px; }",
    ".framer-WZcBr.framer-v-1e2pzn3 .framer-160w7as { flex: none; width: 100%; }",
    ".framer-WZcBr.framer-v-1e2pzn3 .framer-176ayqq { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 5px; justify-content: flex-start; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-WZcBr.framer-v-1e2pzn3 .framer-1n8t6vu, .framer-WZcBr.framer-v-1e2pzn3 .framer-176ayqq { gap: 0px; } .framer-WZcBr.framer-v-1e2pzn3 .framer-1n8t6vu > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-WZcBr.framer-v-1e2pzn3 .framer-1n8t6vu > :first-child, .framer-WZcBr.framer-v-1e2pzn3 .framer-176ayqq > :first-child { margin-top: 0px; } .framer-WZcBr.framer-v-1e2pzn3 .framer-1n8t6vu > :last-child, .framer-WZcBr.framer-v-1e2pzn3 .framer-176ayqq > :last-child { margin-bottom: 0px; } .framer-WZcBr.framer-v-1e2pzn3 .framer-176ayqq > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } }",
  ],
  we = X(xt, vt, "framer-WZcBr"),
  Je = we;
we.displayName = "Nav";
we.defaultProps = { height: 466, width: 1200 };
B(we, {
  variant: {
    options: ["atwzvm2Tz", "x71upxKda"],
    optionTitles: ["Desktop", "Phone"],
    title: "Variant",
    type: h.Enum,
  },
  OMRwfmwMQ: { title: "Hover Cursor", type: h.CustomCursor },
});
G(
  we,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Neue Regrade Bold",
          source: "custom",
          url: "/assets/LzzTnmUfqOWKpfTnXBXEH71aS4.woff2",
        },
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY00u86TD75kdpF2.woff2",
          weight: "300",
        },
      ],
    },
    ...it,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var bt = ["RUQoP_9qg", "boof3b2rQ"],
  wt = "framer-84YJ6",
  kt = { boof3b2rQ: "framer-v-1ej6fss", RUQoP_9qg: "framer-v-4y92fq" };
function Mt(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Ct = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  It = ({ value: t, children: r }) => {
    let n = K(E),
      a = t ?? n.transition,
      o = A(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(E.Provider, { value: o, children: r });
  },
  St = m.create(g),
  jt = { "Cursor Hover": "boof3b2rQ", Cursor: "RUQoP_9qg" },
  Tt = ({ height: t, id: r, width: n, ...a }) => {
    var o, l;
    return {
      ...a,
      variant:
        (l = (o = jt[a.variant]) !== null && o !== void 0 ? o : a.variant) !==
          null && l !== void 0
          ? l
          : "RUQoP_9qg",
    };
  },
  _t = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Lt = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      { style: o, className: l, layoutId: i, variant: f, ...c } = Tt(t),
      {
        baseVariant: s,
        classNames: d,
        clearLoadingGesture: y,
        gestureHandlers: x,
        gestureVariant: C,
        isLoading: S,
        setGestureState: k,
        setVariant: I,
        variants: z,
      } = $({
        cycleOrder: bt,
        defaultVariant: "RUQoP_9qg",
        variant: f,
        variantClassNames: kt,
      }),
      b = _t(t, z),
      p = R(null),
      N = H(),
      M = [],
      L = J();
    return e(W, {
      id: i ?? N,
      children: e(St, {
        animate: z,
        initial: !1,
        children: e(It, {
          value: Ct,
          children: e(m.div, {
            ...c,
            ...x,
            className: P(wt, ...M, "framer-4y92fq", l, d),
            "data-border": !0,
            "data-framer-name": "Cursor",
            layoutDependency: b,
            layoutId: "RUQoP_9qg",
            ref: r ?? p,
            style: {
              "--border-bottom-width": "2px",
              "--border-color": "rgb(109, 211, 206)",
              "--border-left-width": "2px",
              "--border-right-width": "2px",
              "--border-style": "solid",
              "--border-top-width": "2px",
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              ...o,
            },
            ...Mt({ boof3b2rQ: { "data-framer-name": "Cursor Hover" } }, s, C),
          }),
        }),
      }),
    });
  }),
  Rt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-84YJ6.framer-1bdp4wj, .framer-84YJ6 .framer-1bdp4wj { display: block; }",
    ".framer-84YJ6.framer-4y92fq { height: 20px; position: relative; width: 20px; }",
    ".framer-84YJ6.framer-v-1ej6fss.framer-4y92fq { height: 50px; width: 50px; }",
    '.framer-84YJ6[data-border="true"]::after, .framer-84YJ6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  ke = X(Lt, Rt, "framer-84YJ6"),
  Ne = ke;
ke.displayName = "Cursor dot";
ke.defaultProps = { height: 20, width: 20 };
B(ke, {
  variant: {
    options: ["RUQoP_9qg", "boof3b2rQ"],
    optionTitles: ["Cursor", "Cursor Hover"],
    title: "Variant",
    type: h.Enum,
  },
});
G(ke, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
Pe.loadFonts(["GF;Martian Mono-300", "GF;Martian Mono-regular"]);
var br = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY00u86TD75kdpF2.woff2",
          weight: "300",
        },
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY1qu86TD75kdpF2.woff2",
          weight: "400",
        },
      ],
    },
  ],
  wr = [
    '.framer-qNQrO .framer-styles-preset-1gcxfdv:not(.rich-text-wrapper), .framer-qNQrO .framer-styles-preset-1gcxfdv.rich-text-wrapper p { --framer-font-family: "Martian Mono", monospace; --framer-font-family-bold: "Martian Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-qNQrO .framer-styles-preset-1gcxfdv:not(.rich-text-wrapper), .framer-qNQrO .framer-styles-preset-1gcxfdv.rich-text-wrapper p { --framer-font-family: "Martian Mono", monospace; --framer-font-family-bold: "Martian Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 10px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }',
  ],
  kr = "framer-qNQrO";
var Ft = [
    "rcgayo24G",
    "iZ5_W92y5",
    "e2nvh98Xl",
    "kCZyoNnI2",
    "IaBtnVgdW",
    "Abn7gXqB9",
  ],
  Et = "framer-gwy4j",
  zt = {
    Abn7gXqB9: "framer-v-1n0wx29",
    e2nvh98Xl: "framer-v-1vsmvci",
    IaBtnVgdW: "framer-v-gq464q",
    iZ5_W92y5: "framer-v-gktqkf",
    kCZyoNnI2: "framer-v-wtesup",
    rcgayo24G: "framer-v-13uzkf3",
  };
function $e(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Ut = { delay: 0, duration: 0.5, ease: [0, 0, 1, 1], type: "tween" },
  Nt = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Mr = { duration: 0, type: "tween" },
  qt = ({ value: t, children: r }) => {
    let n = K(E),
      a = t ?? n.transition,
      o = A(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(E.Provider, { value: o, children: r });
  },
  Dt = m.create(g),
  At = {
    "Dark Link: hover": "kCZyoNnI2",
    "Dark Link": "e2nvh98Xl",
    "Light Link: hover": "Abn7gXqB9",
    "Light Link": "IaBtnVgdW",
    "Underline Link: hover": "iZ5_W92y5",
    "Underline Link": "rcgayo24G",
  },
  Bt = ({ color: t, height: r, id: n, link: a, title: o, width: l, ...i }) => {
    var f, c, s, d;
    return {
      ...i,
      diDBqZx1P: a ?? i.diDBqZx1P,
      variant:
        (c = (f = At[i.variant]) !== null && f !== void 0 ? f : i.variant) !==
          null && c !== void 0
          ? c
          : "rcgayo24G",
      XqeH23ibS:
        (s = t ?? i.XqeH23ibS) !== null && s !== void 0
          ? s
          : "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
      Y5evmdtWp:
        (d = o ?? i.Y5evmdtWp) !== null && d !== void 0 ? d : "BOOK CALL",
    };
  },
  Wt = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Pt = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      {
        style: o,
        className: l,
        layoutId: i,
        variant: f,
        Y5evmdtWp: c,
        diDBqZx1P: s,
        XqeH23ibS: d,
        ...y
      } = Bt(t),
      {
        baseVariant: x,
        classNames: C,
        clearLoadingGesture: S,
        gestureHandlers: k,
        gestureVariant: I,
        isLoading: z,
        setGestureState: b,
        setVariant: p,
        variants: N,
      } = $({
        cycleOrder: Ft,
        defaultVariant: "rcgayo24G",
        variant: f,
        variantClassNames: zt,
      }),
      M = Wt(t, N),
      { activeVariantCallback: L, delay: v } = he(x),
      _ = L(async (...O) => {
        b({ isHovered: !0 }), p("iZ5_W92y5");
      }),
      ee = L(async (...O) => {
        b({ isHovered: !1 }), p("rcgayo24G");
      }),
      ne = L(async (...O) => {
        b({ isHovered: !0 }), p("kCZyoNnI2");
      }),
      le = L(async (...O) => {
        b({ isHovered: !1 }), p("e2nvh98Xl");
      }),
      Q = L(async (...O) => {
        b({ isHovered: !0 }), p("Abn7gXqB9");
      }),
      oe = L(async (...O) => {
        b({ isHovered: !1 }), p("IaBtnVgdW");
      }),
      ie = R(null),
      re = () =>
        !["e2nvh98Xl", "kCZyoNnI2", "IaBtnVgdW", "Abn7gXqB9"].includes(x),
      de = H(),
      pe = [kr],
      D = J();
    return e(W, {
      id: i ?? de,
      children: e(Dt, {
        animate: N,
        initial: !1,
        children: e(qt, {
          value: Ut,
          ...$e(
            {
              Abn7gXqB9: { value: Mr },
              e2nvh98Xl: { value: Nt },
              IaBtnVgdW: { value: Mr },
            },
            x,
            I
          ),
          children: e(se, {
            href: s,
            nodeId: "rcgayo24G",
            children: w(m.a, {
              ...y,
              ...k,
              className: `${P(
                Et,
                ...pe,
                "framer-13uzkf3",
                l,
                C
              )} framer-plnppd`,
              "data-framer-name": "Underline Link",
              "data-highlight": !0,
              layoutDependency: M,
              layoutId: "rcgayo24G",
              onMouseEnter: _,
              ref: r ?? ie,
              style: { ...o },
              ...$e(
                {
                  Abn7gXqB9: {
                    "data-framer-name": "Light Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: oe,
                  },
                  e2nvh98Xl: {
                    "data-framer-name": "Dark Link",
                    onMouseEnter: ne,
                  },
                  IaBtnVgdW: {
                    "data-framer-name": "Light Link",
                    onMouseEnter: Q,
                  },
                  iZ5_W92y5: {
                    "data-framer-name": "Underline Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: ee,
                  },
                  kCZyoNnI2: {
                    "data-framer-name": "Dark Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: le,
                  },
                },
                x,
                I
              ),
              children: [
                e(V, {
                  __fromCanvasComponent: !0,
                  children: e(g, {
                    children: e(m.p, {
                      className: "framer-styles-preset-1gcxfdv",
                      "data-styles-preset": "jwfPXdwYC",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--variable-reference-XqeH23ibS-dSeG61N4k))",
                      },
                      children: "BOOK CALL",
                    }),
                  }),
                  className: "framer-ivyie5",
                  fonts: ["Inter"],
                  layoutDependency: M,
                  layoutId: "qy2Cjc30n",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--variable-reference-XqeH23ibS-dSeG61N4k)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--variable-reference-XqeH23ibS-dSeG61N4k": d,
                  },
                  text: c,
                  variants: {
                    Abn7gXqB9: {
                      "--extracted-r6o4lv": "rgba(255, 255, 255, 0.7)",
                    },
                    e2nvh98Xl: {
                      "--extracted-r6o4lv":
                        "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...$e(
                    {
                      Abn7gXqB9: {
                        children: e(g, {
                          children: e(m.p, {
                            className: "framer-styles-preset-1gcxfdv",
                            "data-styles-preset": "jwfPXdwYC",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
                            },
                            children: "BOOK CALL",
                          }),
                        }),
                      },
                      e2nvh98Xl: {
                        children: e(g, {
                          children: e(m.p, {
                            className: "framer-styles-preset-1gcxfdv",
                            "data-styles-preset": "jwfPXdwYC",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99)))",
                            },
                            children: "BOOK CALL",
                          }),
                        }),
                      },
                    },
                    x,
                    I
                  ),
                }),
                re() &&
                  e(m.div, {
                    className: "framer-28eool",
                    "data-framer-name": "Border right",
                    layoutDependency: M,
                    layoutId: "V3kon3l3I",
                    style: { backgroundColor: d },
                  }),
                re() &&
                  e(m.div, {
                    className: "framer-1p62rtl",
                    "data-framer-name": "Border left",
                    layoutDependency: M,
                    layoutId: "pfqtH8SKb",
                    style: { backgroundColor: d },
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Yt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-gwy4j.framer-plnppd, .framer-gwy4j .framer-plnppd { display: block; }",
    ".framer-gwy4j.framer-13uzkf3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-gwy4j .framer-ivyie5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-gwy4j .framer-28eool { bottom: 0px; flex: none; height: 1px; left: calc(49.50495049504953% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 1; }",
    ".framer-gwy4j .framer-1p62rtl { bottom: 0px; flex: none; height: 1px; left: calc(-148.51485148514848% - 99.00990099009901% / 2); overflow: hidden; position: absolute; width: 99%; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-gwy4j.framer-13uzkf3 { gap: 0px; } .framer-gwy4j.framer-13uzkf3 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-gwy4j.framer-13uzkf3 > :first-child { margin-top: 0px; } .framer-gwy4j.framer-13uzkf3 > :last-child { margin-bottom: 0px; } }",
    ".framer-gwy4j.framer-v-gktqkf .framer-28eool { left: calc(152.4752475247525% - 100% / 2); }",
    ".framer-gwy4j.framer-v-gktqkf .framer-1p62rtl { left: unset; right: 0px; width: 100%; }",
    ...wr,
  ],
  Me = X(Pt, Yt, "framer-gwy4j"),
  Ce = Me;
Me.displayName = "Links";
Me.defaultProps = { height: 16, width: 76 };
B(Me, {
  variant: {
    options: [
      "rcgayo24G",
      "iZ5_W92y5",
      "e2nvh98Xl",
      "kCZyoNnI2",
      "IaBtnVgdW",
      "Abn7gXqB9",
    ],
    optionTitles: [
      "Underline Link",
      "Underline Link: hover",
      "Dark Link",
      "Dark Link: hover",
      "Light Link",
      "Light Link: hover",
    ],
    title: "Variant",
    type: h.Enum,
  },
  Y5evmdtWp: {
    defaultValue: "BOOK CALL",
    displayTextArea: !1,
    title: "Title",
    type: h.String,
  },
  diDBqZx1P: { title: "Link", type: h.Link },
  XqeH23ibS: {
    defaultValue:
      'var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)) /* {"name":"White"} */',
    title: "Color",
    type: h.Color,
  },
});
G(
  Me,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
    ...cr(br),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var er = ce(V),
  Ht = ae(Ce),
  Zt = ["jelKSLQDp", "pjt0DRzgz", "f5YUgLnTW"],
  Xt = "framer-3dIMf",
  Gt = {
    f5YUgLnTW: "framer-v-2kqlnx",
    jelKSLQDp: "framer-v-wdkt57",
    pjt0DRzgz: "framer-v-dvmdjm",
  };
function ye(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var Ot = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Qt = ({ value: t, children: r }) => {
    let n = K(E),
      a = t ?? n.transition,
      o = A(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(E.Provider, { value: o, children: r });
  },
  Kt = m.create(g),
  Jt = { Desktop: "jelKSLQDp", Phone: "f5YUgLnTW", Tablet: "pjt0DRzgz" },
  $t = ({ height: t, hoverCursor: r, id: n, width: a, ...o }) => {
    var l, i;
    return {
      ...o,
      CI972pXW_: r ?? o.CI972pXW_,
      variant:
        (i = (l = Jt[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && i !== void 0
          ? i
          : "jelKSLQDp",
    };
  },
  ea = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  ra = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      {
        style: o,
        className: l,
        layoutId: i,
        variant: f,
        CI972pXW_: c,
        ...s
      } = $t(t),
      {
        baseVariant: d,
        classNames: y,
        clearLoadingGesture: x,
        gestureHandlers: C,
        gestureVariant: S,
        isLoading: k,
        setGestureState: I,
        setVariant: z,
        variants: b,
      } = $({
        cycleOrder: Zt,
        defaultVariant: "jelKSLQDp",
        variant: f,
        variantClassNames: Gt,
      }),
      p = ea(t, b),
      N = R(null),
      M = H(),
      L = [],
      v = J();
    return e(W, {
      id: i ?? M,
      children: e(Kt, {
        animate: b,
        initial: !1,
        children: e(Qt, {
          value: Ot,
          children: w(m.footer, {
            ...s,
            ...C,
            className: P(Xt, ...L, "framer-wdkt57", l, y),
            "data-framer-name": "Desktop",
            layoutDependency: p,
            layoutId: "jelKSLQDp",
            ref: r ?? N,
            style: { ...o },
            ...ye(
              {
                f5YUgLnTW: { "data-framer-name": "Phone" },
                pjt0DRzgz: { "data-framer-name": "Tablet" },
              },
              d,
              S
            ),
            children: [
              w(m.div, {
                className: "framer-180hp0j",
                "data-border": !0,
                "data-framer-name": "Container",
                layoutDependency: p,
                layoutId: "RebtxjbmH",
                style: {
                  "--border-bottom-width": "0px",
                  "--border-color":
                    "var(--token-9ee65e2b-2c21-404c-b13a-3f4d05fe9a6d, rgb(45, 45, 45))",
                  "--border-left-width": "1px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "0px",
                },
                children: [
                  e(er, {
                    __fromCanvasComponent: !0,
                    children: e(g, {
                      children: e(m.h4, {
                        style: {
                          "--font-selector": "R0Y7TWFydGlhbiBNb25vLXJlZ3VsYXI=",
                          "--framer-font-family": '"Martian Mono", monospace',
                          "--framer-font-size": "14px",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-text-color":
                            "var(--extracted-1eung3n, var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "Interested in Envoy?",
                      }),
                    }),
                    className: "framer-1et35eh",
                    fonts: ["GF;Martian Mono-regular"],
                    layoutDependency: p,
                    layoutId: "BpWqhvilS",
                    style: {
                      "--extracted-1eung3n":
                        "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  e(V, {
                    __fromCanvasComponent: !0,
                    children: w(g, {
                      children: [
                        e(m.div, {
                          style: {
                            "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                            "--framer-font-family": '"Martian Mono", monospace',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "300",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-text-color":
                              "var(--extracted-tcooor, rgb(99, 99, 99))",
                            "--framer-text-transform": "uppercase",
                          },
                          children:
                            "Discover how Envoy is transforming AI creation and ownership! Connect with us to learn more, ask questions, and be part of the innovation.",
                        }),
                        e(m.div, {
                          style: {
                            "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                            "--framer-font-family": '"Martian Mono", monospace',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "300",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-text-color":
                              "var(--extracted-1l8g7xg, rgb(99, 99, 99))",
                            "--framer-text-transform": "uppercase",
                          },
                          children: e(m.br, { className: "trailing-break" }),
                        }),
                        e(m.div, {
                          style: {
                            "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                            "--framer-font-family": '"Martian Mono", monospace',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "300",
                            "--framer-letter-spacing": "-0.02em",
                            "--framer-text-color":
                              "var(--extracted-39j9wk, rgb(99, 99, 99))",
                            "--framer-text-transform": "uppercase",
                          },
                          children:
                            "Contract: 0x0000000000000000000000000000000000000000",
                        }),
                      ],
                    }),
                    className: "framer-1mh5wsj",
                    "data-framer-cursor": c,
                    fonts: ["GF;Martian Mono-300"],
                    layoutDependency: p,
                    layoutId: "AeKyTeaBU",
                    style: {
                      "--extracted-1l8g7xg": "rgb(99, 99, 99)",
                      "--extracted-39j9wk": "rgb(99, 99, 99)",
                      "--extracted-tcooor": "rgb(99, 99, 99)",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...ye(
                      {
                        f5YUgLnTW: { viewBox: "0 0 1314.28 50" },
                        pjt0DRzgz: { viewBox: "0 0 1314.28 50" },
                      },
                      d,
                      S
                    ),
                  }),
                  w(m.div, {
                    className: "framer-134ok9c",
                    "data-framer-name": "wrapper",
                    layoutDependency: p,
                    layoutId: "CEWtZ7KcK",
                    children: [
                      w(m.div, {
                        className: "framer-bk54nr",
                        "data-framer-name": "contact details",
                        layoutDependency: p,
                        layoutId: "ALf103D3y",
                        children: [
                          e(er, {
                            __fromCanvasComponent: !0,
                            children: e(g, {
                              children: e(m.h5, {
                                style: {
                                  "--font-selector":
                                    "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                  "--framer-font-family":
                                    '"Martian Mono", monospace',
                                  "--framer-font-weight": "300",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-1lwpl3i, var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)))",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "Tokenomic",
                              }),
                            }),
                            className: "framer-elhljf",
                            fonts: ["GF;Martian Mono-300"],
                            layoutDependency: p,
                            layoutId: "MbQIwcCa6",
                            style: {
                              "--extracted-1lwpl3i":
                                "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          w(m.ul, {
                            className: "framer-192a0ig",
                            "data-framer-name": "wrapper",
                            layoutDependency: p,
                            layoutId: "Z16FihX07",
                            children: [
                              e(V, {
                                __fromCanvasComponent: !0,
                                as: "li",
                                children: e(g, {
                                  children: e(m.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                      "--framer-font-family":
                                        '"Martian Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "300",
                                      "--framer-line-height": "1.4em",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99)))",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children: "Total Supply: 1.000.000.000",
                                  }),
                                }),
                                className: "framer-1uuo4im",
                                fonts: ["GF;Martian Mono-300"],
                                layoutDependency: p,
                                layoutId: "o156HdJvF",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(V, {
                                __fromCanvasComponent: !0,
                                as: "li",
                                children: e(g, {
                                  children: e(m.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                      "--framer-font-family":
                                        '"Martian Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "300",
                                      "--framer-line-height": "1.4em",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99)))",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children: "ticker: $Envoy",
                                  }),
                                }),
                                className: "framer-112uv13",
                                fonts: ["GF;Martian Mono-300"],
                                layoutDependency: p,
                                layoutId: "fvnTMornE",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(V, {
                                __fromCanvasComponent: !0,
                                as: "li",
                                children: e(g, {
                                  children: e(m.p, {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                      "--framer-font-family":
                                        '"Martian Mono", monospace',
                                      "--framer-font-size": "10px",
                                      "--framer-font-weight": "300",
                                      "--framer-line-height": "1.4em",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99)))",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children: "Tax: 0% / 0%",
                                  }),
                                }),
                                className: "framer-tmhlw",
                                fonts: ["GF;Martian Mono-300"],
                                layoutDependency: p,
                                layoutId: "epfjZmoH_",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      w(m.div, {
                        className: "framer-1q349oz",
                        "data-framer-name": "social details",
                        layoutDependency: p,
                        layoutId: "hyygqHmrY",
                        children: [
                          e(er, {
                            __fromCanvasComponent: !0,
                            children: e(g, {
                              children: e(m.h5, {
                                style: {
                                  "--font-selector":
                                    "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                  "--framer-font-family":
                                    '"Martian Mono", monospace',
                                  "--framer-font-weight": "300",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-1lwpl3i, var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)))",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "Follow us",
                              }),
                            }),
                            className: "framer-c71m4r",
                            fonts: ["GF;Martian Mono-300"],
                            layoutDependency: p,
                            layoutId: "OL1bMROTa",
                            style: {
                              "--extracted-1lwpl3i":
                                "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          w(m.ul, {
                            className: "framer-1x1otwz",
                            "data-framer-name": "wrapper",
                            layoutDependency: p,
                            layoutId: "QYU0v3Ykr",
                            children: [
                              e(q, {
                                height: 16,
                                y:
                                  (v?.y || 0) +
                                  20 +
                                  ((v?.height || 561) - 40 - 869.2 + 0 + 0) +
                                  0 +
                                  328.8 +
                                  70 +
                                  0 +
                                  44.4 +
                                  0 +
                                  0,
                                ...ye(
                                  {
                                    f5YUgLnTW: { y: void 0 },
                                    pjt0DRzgz: { y: void 0 },
                                  },
                                  d,
                                  S
                                ),
                                children: e(m.li, {
                                  className: "framer-zslm9z-container",
                                  "data-framer-cursor": c,
                                  layoutDependency: p,
                                  layoutId: "N5UU3dCFW-container",
                                  children: e(Ce, {
                                    diDBqZx1P: "https://t.me/",
                                    height: "100%",
                                    id: "N5UU3dCFW",
                                    layoutId: "N5UU3dCFW",
                                    variant: "e2nvh98Xl",
                                    width: "100%",
                                    XqeH23ibS:
                                      "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                    Y5evmdtWp: "Telegram",
                                  }),
                                }),
                              }),
                              e(q, {
                                height: 16,
                                y:
                                  (v?.y || 0) +
                                  20 +
                                  ((v?.height || 561) - 40 - 869.2 + 0 + 0) +
                                  0 +
                                  328.8 +
                                  70 +
                                  0 +
                                  44.4 +
                                  0 +
                                  30,
                                ...ye(
                                  {
                                    f5YUgLnTW: { y: void 0 },
                                    pjt0DRzgz: { y: void 0 },
                                  },
                                  d,
                                  S
                                ),
                                children: e(m.li, {
                                  className: "framer-1787735-container",
                                  "data-framer-cursor": c,
                                  layoutDependency: p,
                                  layoutId: "KmkT7uxNn-container",
                                  children: e(Ce, {
                                    diDBqZx1P: "https://x.com/",
                                    height: "100%",
                                    id: "KmkT7uxNn",
                                    layoutId: "KmkT7uxNn",
                                    variant: "e2nvh98Xl",
                                    width: "100%",
                                    XqeH23ibS:
                                      "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                    Y5evmdtWp: "Twitter",
                                  }),
                                }),
                              }),
                              e(q, {
                                height: 16,
                                y:
                                  (v?.y || 0) +
                                  20 +
                                  ((v?.height || 561) - 40 - 869.2 + 0 + 0) +
                                  0 +
                                  328.8 +
                                  70 +
                                  0 +
                                  44.4 +
                                  0 +
                                  60,
                                ...ye(
                                  {
                                    f5YUgLnTW: { y: void 0 },
                                    pjt0DRzgz: { y: void 0 },
                                  },
                                  d,
                                  S
                                ),
                                children: e(m.li, {
                                  className: "framer-1v626fk-container",
                                  "data-framer-cursor": c,
                                  layoutDependency: p,
                                  layoutId: "LSJ_LwryE-container",
                                  children: e(Ce, {
                                    diDBqZx1P:
                                      "https://envoy-5.gitbook.io/envoy-whitepaper",
                                    height: "100%",
                                    id: "LSJ_LwryE",
                                    layoutId: "LSJ_LwryE",
                                    variant: "e2nvh98Xl",
                                    width: "100%",
                                    XqeH23ibS:
                                      "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                    Y5evmdtWp: "Whitepaper",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              w(m.div, {
                className: "framer-1cn3bzi",
                "data-framer-name": "bottom wrapper",
                layoutDependency: p,
                layoutId: "SFSvqTqFT",
                style: { backgroundColor: "rgb(109, 211, 206)" },
                children: [
                  e(se, {
                    href: { webPageId: "augiA20Il" },
                    nodeId: "dbF2BK_h7",
                    children: e(m.a, {
                      className: "framer-1gdvtia framer-oui647",
                      "data-framer-name": "Logo",
                      layoutDependency: p,
                      layoutId: "dbF2BK_h7",
                      children: e(Ve, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 1200,
                          intrinsicWidth: 1200,
                          loading: fr(
                            (v?.y || 0) +
                              20 +
                              ((v?.height || 561) - 40 - 869.2 + 681.2 + 20) +
                              40 +
                              0 +
                              0
                          ),
                          pixelHeight: 1200,
                          pixelWidth: 1200,
                          sizes: "88px",
                          src: "/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png",
                          srcSet:
                            "/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png?scale-down-to=512 512w,/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png?scale-down-to=1024 1024w,/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png 1200w",
                        },
                        className: "framer-gxtglh",
                        "data-framer-name": "Trans1",
                        layoutDependency: p,
                        layoutId: "GZ7cQNaM8",
                        ...ye(
                          {
                            f5YUgLnTW: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1200,
                                intrinsicWidth: 1200,
                                pixelHeight: 1200,
                                pixelWidth: 1200,
                                sizes: "88px",
                                src: "/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png",
                                srcSet:
                                  "/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png?scale-down-to=512 512w,/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png?scale-down-to=1024 1024w,/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png 1200w",
                              },
                            },
                            pjt0DRzgz: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 1200,
                                intrinsicWidth: 1200,
                                pixelHeight: 1200,
                                pixelWidth: 1200,
                                sizes: "88px",
                                src: "/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png",
                                srcSet:
                                  "/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png?scale-down-to=512 512w,/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png?scale-down-to=1024 1024w,/images/5pf6SvJBwG8TBNrYPzfxAr4tA.png 1200w",
                              },
                            },
                          },
                          d,
                          S
                        ),
                      }),
                    }),
                  }),
                  e(m.div, {
                    className: "framer-ctfujs",
                    "data-framer-name": "copyrights",
                    layoutDependency: p,
                    layoutId: "ectY9CzGt",
                    children: e(V, {
                      __fromCanvasComponent: !0,
                      children: e(g, {
                        children: e(m.p, {
                          style: {
                            "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                            "--framer-font-family": '"Martian Mono", monospace',
                            "--framer-font-size": "12px",
                            "--framer-font-weight": "300",
                            "--framer-line-height": "1.3em",
                            "--framer-text-alignment": "right",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(53, 30, 41))",
                            "--framer-text-transform": "uppercase",
                          },
                          children: "All rights reserved. Copyright \xA92025",
                        }),
                      }),
                      className: "framer-emkrux",
                      fonts: ["GF;Martian Mono-300"],
                      layoutDependency: p,
                      layoutId: "YovK8r3M0",
                      style: {
                        "--extracted-r6o4lv": "rgb(53, 30, 41)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ta = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-3dIMf.framer-oui647, .framer-3dIMf .framer-oui647 { display: block; }",
    ".framer-3dIMf.framer-wdkt57 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 20px; position: relative; width: 1200px; }",
    ".framer-3dIMf .framer-180hp0j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 20px; position: relative; width: 60%; }",
    ".framer-3dIMf .framer-1et35eh, .framer-3dIMf .framer-1mh5wsj, .framer-3dIMf .framer-elhljf, .framer-3dIMf .framer-1uuo4im, .framer-3dIMf .framer-112uv13, .framer-3dIMf .framer-tmhlw, .framer-3dIMf .framer-c71m4r { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-3dIMf .framer-134ok9c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 70px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-3dIMf .framer-bk54nr, .framer-3dIMf .framer-1q349oz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-3dIMf .framer-192a0ig, .framer-3dIMf .framer-1x1otwz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; list-style: none; margin: 0px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-3dIMf .framer-zslm9z-container, .framer-3dIMf .framer-1787735-container, .framer-3dIMf .framer-1v626fk-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-3dIMf .framer-1cn3bzi { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 100%; }",
    ".framer-3dIMf .framer-1gdvtia { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 1px; }",
    ".framer-3dIMf .framer-gxtglh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 88px); overflow: visible; position: relative; width: 88px; }",
    ".framer-3dIMf .framer-ctfujs { align-content: flex-end; align-items: flex-end; display: flex; flex: 1.485 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 0px 0px 20px; position: relative; width: 1px; }",
    ".framer-3dIMf .framer-emkrux { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3dIMf.framer-wdkt57, .framer-3dIMf .framer-180hp0j, .framer-3dIMf .framer-134ok9c, .framer-3dIMf .framer-bk54nr, .framer-3dIMf .framer-192a0ig, .framer-3dIMf .framer-1q349oz, .framer-3dIMf .framer-1x1otwz, .framer-3dIMf .framer-1cn3bzi, .framer-3dIMf .framer-1gdvtia, .framer-3dIMf .framer-ctfujs { gap: 0px; } .framer-3dIMf.framer-wdkt57 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-3dIMf.framer-wdkt57 > :first-child, .framer-3dIMf .framer-180hp0j > :first-child, .framer-3dIMf .framer-bk54nr > :first-child, .framer-3dIMf .framer-192a0ig > :first-child, .framer-3dIMf .framer-1q349oz > :first-child, .framer-3dIMf .framer-1x1otwz > :first-child { margin-top: 0px; } .framer-3dIMf.framer-wdkt57 > :last-child, .framer-3dIMf .framer-180hp0j > :last-child, .framer-3dIMf .framer-bk54nr > :last-child, .framer-3dIMf .framer-192a0ig > :last-child, .framer-3dIMf .framer-1q349oz > :last-child, .framer-3dIMf .framer-1x1otwz > :last-child { margin-bottom: 0px; } .framer-3dIMf .framer-180hp0j > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-3dIMf .framer-134ok9c > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-3dIMf .framer-134ok9c > :first-child, .framer-3dIMf .framer-1cn3bzi > :first-child, .framer-3dIMf .framer-1gdvtia > :first-child, .framer-3dIMf .framer-ctfujs > :first-child { margin-left: 0px; } .framer-3dIMf .framer-134ok9c > :last-child, .framer-3dIMf .framer-1cn3bzi > :last-child, .framer-3dIMf .framer-1gdvtia > :last-child, .framer-3dIMf .framer-ctfujs > :last-child { margin-right: 0px; } .framer-3dIMf .framer-bk54nr > *, .framer-3dIMf .framer-1q349oz > * { margin: 0px; margin-bottom: calc(22px / 2); margin-top: calc(22px / 2); } .framer-3dIMf .framer-192a0ig > *, .framer-3dIMf .framer-1x1otwz > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-3dIMf .framer-1cn3bzi > *, .framer-3dIMf .framer-1gdvtia > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-3dIMf .framer-ctfujs > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } }",
    ".framer-3dIMf.framer-v-dvmdjm.framer-wdkt57 { width: 810px; }",
    ".framer-3dIMf.framer-v-dvmdjm .framer-180hp0j { gap: 20px; }",
    ".framer-3dIMf.framer-v-dvmdjm .framer-1mh5wsj, .framer-3dIMf.framer-v-2kqlnx .framer-1mh5wsj { white-space: pre; }",
    ".framer-3dIMf.framer-v-dvmdjm .framer-134ok9c { padding: 50px 0px 0px 0px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3dIMf.framer-v-dvmdjm .framer-180hp0j { gap: 0px; } .framer-3dIMf.framer-v-dvmdjm .framer-180hp0j > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-3dIMf.framer-v-dvmdjm .framer-180hp0j > :first-child { margin-top: 0px; } .framer-3dIMf.framer-v-dvmdjm .framer-180hp0j > :last-child { margin-bottom: 0px; } }",
    ".framer-3dIMf.framer-v-2kqlnx.framer-wdkt57 { gap: 30px; padding: 12px; width: 390px; }",
    ".framer-3dIMf.framer-v-2kqlnx .framer-180hp0j { gap: 20px; padding: 0px 0px 0px 12px; width: 100%; }",
    ".framer-3dIMf.framer-v-2kqlnx .framer-134ok9c { flex-direction: column; padding: 30px 0px 0px 0px; }",
    ".framer-3dIMf.framer-v-2kqlnx .framer-bk54nr, .framer-3dIMf.framer-v-2kqlnx .framer-1q349oz { flex: none; gap: 16px; width: 100%; }",
    ".framer-3dIMf.framer-v-2kqlnx .framer-192a0ig, .framer-3dIMf.framer-v-2kqlnx .framer-1x1otwz { gap: 10px; }",
    ".framer-3dIMf.framer-v-2kqlnx .framer-1cn3bzi { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; padding: 100px 12px 20px 12px; }",
    ".framer-3dIMf.framer-v-2kqlnx .framer-1gdvtia, .framer-3dIMf.framer-v-2kqlnx .framer-emkrux { flex: none; width: 100%; }",
    ".framer-3dIMf.framer-v-2kqlnx .framer-ctfujs { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 16px; padding: 0px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3dIMf.framer-v-2kqlnx.framer-wdkt57, .framer-3dIMf.framer-v-2kqlnx .framer-180hp0j, .framer-3dIMf.framer-v-2kqlnx .framer-134ok9c, .framer-3dIMf.framer-v-2kqlnx .framer-bk54nr, .framer-3dIMf.framer-v-2kqlnx .framer-192a0ig, .framer-3dIMf.framer-v-2kqlnx .framer-1q349oz, .framer-3dIMf.framer-v-2kqlnx .framer-1x1otwz, .framer-3dIMf.framer-v-2kqlnx .framer-1cn3bzi, .framer-3dIMf.framer-v-2kqlnx .framer-ctfujs { gap: 0px; } .framer-3dIMf.framer-v-2kqlnx.framer-wdkt57 > *, .framer-3dIMf.framer-v-2kqlnx .framer-1cn3bzi > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-3dIMf.framer-v-2kqlnx.framer-wdkt57 > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-180hp0j > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-134ok9c > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-bk54nr > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-192a0ig > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-1q349oz > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-1x1otwz > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-1cn3bzi > :first-child, .framer-3dIMf.framer-v-2kqlnx .framer-ctfujs > :first-child { margin-top: 0px; } .framer-3dIMf.framer-v-2kqlnx.framer-wdkt57 > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-180hp0j > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-134ok9c > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-bk54nr > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-192a0ig > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-1q349oz > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-1x1otwz > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-1cn3bzi > :last-child, .framer-3dIMf.framer-v-2kqlnx .framer-ctfujs > :last-child { margin-bottom: 0px; } .framer-3dIMf.framer-v-2kqlnx .framer-180hp0j > *, .framer-3dIMf.framer-v-2kqlnx .framer-134ok9c > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-3dIMf.framer-v-2kqlnx .framer-bk54nr > *, .framer-3dIMf.framer-v-2kqlnx .framer-1q349oz > *, .framer-3dIMf.framer-v-2kqlnx .framer-ctfujs > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-3dIMf.framer-v-2kqlnx .framer-192a0ig > *, .framer-3dIMf.framer-v-2kqlnx .framer-1x1otwz > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    '.framer-3dIMf[data-border="true"]::after, .framer-3dIMf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ie = X(ra, ta, "framer-3dIMf"),
  rr = Ie;
Ie.displayName = "Footer";
Ie.defaultProps = { height: 561, width: 1200 };
B(Ie, {
  variant: {
    options: ["jelKSLQDp", "pjt0DRzgz", "f5YUgLnTW"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: h.Enum,
  },
  CI972pXW_: { title: "Hover Cursor", type: h.CustomCursor },
});
G(
  Ie,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY1qu86TD75kdpF2.woff2",
          weight: "400",
        },
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY00u86TD75kdpF2.woff2",
          weight: "300",
        },
      ],
    },
    ...Ht,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var aa = [
    "paIFpdnCe",
    "VsQBQ66FG",
    "SuImOvIiz",
    "GK_qtIDRY",
    "R2R9ZE_3a",
    "pprzSOpi0",
  ],
  na = "framer-s2yGt",
  oa = {
    GK_qtIDRY: "framer-v-cb5y9a",
    paIFpdnCe: "framer-v-awzcw0",
    pprzSOpi0: "framer-v-1jc7m2a",
    R2R9ZE_3a: "framer-v-5h53c5",
    SuImOvIiz: "framer-v-1vvutm1",
    VsQBQ66FG: "framer-v-uc8e18",
  };
function tr(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var ia = { delay: 0, duration: 0.5, ease: [0, 0, 1, 1], type: "tween" },
  sa = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Cr = { duration: 0, type: "tween" },
  la = ({ value: t, children: r }) => {
    let n = K(E),
      a = t ?? n.transition,
      o = A(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(E.Provider, { value: o, children: r });
  },
  ma = m.create(g),
  fa = {
    "Dark Link: hover": "GK_qtIDRY",
    "Dark Link": "SuImOvIiz",
    "Light Link: hover": "pprzSOpi0",
    "Light Link": "R2R9ZE_3a",
    "Underline Link: hover": "VsQBQ66FG",
    "Underline Link": "paIFpdnCe",
  },
  ca = ({ color: t, height: r, id: n, link: a, title: o, width: l, ...i }) => {
    var f, c, s, d;
    return {
      ...i,
      diDBqZx1P: a ?? i.diDBqZx1P,
      variant:
        (c = (f = fa[i.variant]) !== null && f !== void 0 ? f : i.variant) !==
          null && c !== void 0
          ? c
          : "paIFpdnCe",
      XqeH23ibS:
        (s = t ?? i.XqeH23ibS) !== null && s !== void 0
          ? s
          : "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
      Y5evmdtWp:
        (d = o ?? i.Y5evmdtWp) !== null && d !== void 0 ? d : "BOOK CALL",
    };
  },
  da = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  pa = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      {
        style: o,
        className: l,
        layoutId: i,
        variant: f,
        Y5evmdtWp: c,
        diDBqZx1P: s,
        XqeH23ibS: d,
        ...y
      } = ca(t),
      {
        baseVariant: x,
        classNames: C,
        clearLoadingGesture: S,
        gestureHandlers: k,
        gestureVariant: I,
        isLoading: z,
        setGestureState: b,
        setVariant: p,
        variants: N,
      } = $({
        cycleOrder: aa,
        defaultVariant: "paIFpdnCe",
        variant: f,
        variantClassNames: oa,
      }),
      M = da(t, N),
      { activeVariantCallback: L, delay: v } = he(x),
      _ = L(async (...O) => {
        b({ isHovered: !0 }), p("VsQBQ66FG");
      }),
      ee = L(async (...O) => {
        b({ isHovered: !1 }), p("paIFpdnCe");
      }),
      ne = L(async (...O) => {
        b({ isHovered: !0 }), p("GK_qtIDRY");
      }),
      le = L(async (...O) => {
        b({ isHovered: !1 }), p("SuImOvIiz");
      }),
      Q = L(async (...O) => {
        b({ isHovered: !0 }), p("pprzSOpi0");
      }),
      oe = L(async (...O) => {
        b({ isHovered: !1 }), p("R2R9ZE_3a");
      }),
      ie = R(null),
      re = () =>
        !["SuImOvIiz", "GK_qtIDRY", "R2R9ZE_3a", "pprzSOpi0"].includes(x),
      de = H(),
      pe = [],
      D = J();
    return e(W, {
      id: i ?? de,
      children: e(ma, {
        animate: N,
        initial: !1,
        children: e(la, {
          value: ia,
          ...tr(
            {
              pprzSOpi0: { value: Cr },
              R2R9ZE_3a: { value: Cr },
              SuImOvIiz: { value: sa },
            },
            x,
            I
          ),
          children: e(se, {
            href: s,
            nodeId: "paIFpdnCe",
            children: w(m.a, {
              ...y,
              ...k,
              className: `${P(na, ...pe, "framer-awzcw0", l, C)} framer-j16c9j`,
              "data-framer-name": "Underline Link",
              "data-highlight": !0,
              layoutDependency: M,
              layoutId: "paIFpdnCe",
              onMouseEnter: _,
              ref: r ?? ie,
              style: { ...o },
              ...tr(
                {
                  GK_qtIDRY: {
                    "data-framer-name": "Dark Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: le,
                  },
                  pprzSOpi0: {
                    "data-framer-name": "Light Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: oe,
                  },
                  R2R9ZE_3a: {
                    "data-framer-name": "Light Link",
                    onMouseEnter: Q,
                  },
                  SuImOvIiz: {
                    "data-framer-name": "Dark Link",
                    onMouseEnter: ne,
                  },
                  VsQBQ66FG: {
                    "data-framer-name": "Underline Link: hover",
                    onMouseEnter: void 0,
                    onMouseLeave: ee,
                  },
                },
                x,
                I
              ),
              children: [
                e(V, {
                  __fromCanvasComponent: !0,
                  children: e(g, {
                    children: e(m.p, {
                      style: {
                        "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                        "--framer-font-family": '"Martian Mono", monospace',
                        "--framer-font-size": "12px",
                        "--framer-font-weight": "300",
                        "--framer-line-height": "1.3em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--variable-reference-XqeH23ibS-lXa6hW0XG))",
                        "--framer-text-transform": "uppercase",
                      },
                      children: "BOOK CALL",
                    }),
                  }),
                  className: "framer-g61iex",
                  fonts: ["GF;Martian Mono-300"],
                  layoutDependency: M,
                  layoutId: "fHfIvZTOP",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--variable-reference-XqeH23ibS-lXa6hW0XG)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--variable-reference-XqeH23ibS-lXa6hW0XG": d,
                  },
                  text: c,
                  variants: {
                    pprzSOpi0: {
                      "--extracted-r6o4lv": "rgba(255, 255, 255, 0.7)",
                    },
                    SuImOvIiz: {
                      "--extracted-r6o4lv":
                        "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...tr(
                    {
                      pprzSOpi0: {
                        children: e(g, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "12px",
                              "--framer-font-weight": "300",
                              "--framer-line-height": "1.3em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.7))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "BOOK CALL",
                          }),
                        }),
                      },
                      SuImOvIiz: {
                        children: e(g, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "12px",
                              "--framer-font-weight": "300",
                              "--framer-line-height": "1.3em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "BOOK CALL",
                          }),
                        }),
                      },
                    },
                    x,
                    I
                  ),
                }),
                re() &&
                  e(m.div, {
                    className: "framer-xxph5c",
                    "data-framer-name": "Border right",
                    layoutDependency: M,
                    layoutId: "jAulSLrq0",
                    style: { backgroundColor: d },
                  }),
                re() &&
                  e(m.div, {
                    className: "framer-1kpf0qh",
                    "data-framer-name": "Border left",
                    layoutDependency: M,
                    layoutId: "wCHaEAGgD",
                    style: { backgroundColor: d },
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  ua = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-s2yGt.framer-j16c9j, .framer-s2yGt .framer-j16c9j { display: block; }",
    ".framer-s2yGt.framer-awzcw0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-s2yGt .framer-g61iex { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-s2yGt .framer-xxph5c { bottom: 0px; flex: none; height: 1px; left: calc(49.50495049504953% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: 1; }",
    ".framer-s2yGt .framer-1kpf0qh { bottom: 0px; flex: none; height: 1px; left: calc(-148.51485148514848% - 99.00990099009901% / 2); overflow: hidden; position: absolute; width: 99%; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-s2yGt.framer-awzcw0 { gap: 0px; } .framer-s2yGt.framer-awzcw0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-s2yGt.framer-awzcw0 > :first-child { margin-top: 0px; } .framer-s2yGt.framer-awzcw0 > :last-child { margin-bottom: 0px; } }",
    ".framer-s2yGt.framer-v-uc8e18 .framer-xxph5c { left: calc(152.4752475247525% - 100% / 2); }",
    ".framer-s2yGt.framer-v-uc8e18 .framer-1kpf0qh { left: unset; right: 0px; width: 100%; }",
  ],
  Se = X(pa, ua, "framer-s2yGt"),
  je = Se;
Se.displayName = "Links 2";
Se.defaultProps = { height: 16, width: 76 };
B(Se, {
  variant: {
    options: [
      "paIFpdnCe",
      "VsQBQ66FG",
      "SuImOvIiz",
      "GK_qtIDRY",
      "R2R9ZE_3a",
      "pprzSOpi0",
    ],
    optionTitles: [
      "Underline Link",
      "Underline Link: hover",
      "Dark Link",
      "Dark Link: hover",
      "Light Link",
      "Light Link: hover",
    ],
    title: "Variant",
    type: h.Enum,
  },
  Y5evmdtWp: {
    defaultValue: "BOOK CALL",
    displayTextArea: !1,
    title: "Title",
    type: h.String,
  },
  diDBqZx1P: { title: "Link", type: h.Link },
  XqeH23ibS: {
    defaultValue:
      'var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)) /* {"name":"White"} */',
    title: "Color",
    type: h.Color,
  },
});
G(
  Se,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY00u86TD75kdpF2.woff2",
          weight: "300",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ha = Re(Ve),
  ga = ["v3E7I0Qry", "XoK2Z7oFZ"],
  ya = "framer-eZ80g",
  xa = { v3E7I0Qry: "framer-v-mdlrqk", XoK2Z7oFZ: "framer-v-nz6scg" };
function Ir(t, ...r) {
  let n = {};
  return r?.forEach((a) => a && Object.assign(n, t[a])), n;
}
var va = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  ba = (t) => {
    if (typeof t != "number") return t;
    if (Number.isFinite(t)) return Math.max(0, t) + "px";
  },
  Sr = (t) =>
    typeof t == "object" && t !== null && typeof t.src == "string"
      ? t
      : typeof t == "string"
      ? { src: t }
      : void 0,
  wa = ({ value: t, children: r }) => {
    let n = K(E),
      a = t ?? n.transition,
      o = A(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
    return e(E.Provider, { value: o, children: r });
  },
  ka = m.create(g),
  Ma = { Desktop: "v3E7I0Qry", Phone: "XoK2Z7oFZ" },
  Ca = ({
    amount: t,
    caseImage: r,
    height: n,
    hoverCursor: a,
    id: o,
    imagePadding: l,
    tagline: i,
    title: f,
    width: c,
    ...s
  }) => {
    var d, y, x, C, S, k, I;
    return {
      ...s,
      A2RTm04yt:
        (d = f ?? s.A2RTm04yt) !== null && d !== void 0
          ? d
          : "DISY SYSTEM DESIGN",
      JXxw5wiQU:
        (y = l ?? s.JXxw5wiQU) !== null && y !== void 0
          ? y
          : "0px 0px 70px 20px",
      L6TZSDBLe:
        (x = r ?? s.L6TZSDBLe) !== null && x !== void 0
          ? x
          : {
              src: "/images/ISakrPH728034bhVYclLPrWboY.png",
              srcSet:
                "/images/ISakrPH728034bhVYclLPrWboY.png?scale-down-to=512 512w,/images/ISakrPH728034bhVYclLPrWboY.png?scale-down-to=1024 1024w,/images/ISakrPH728034bhVYclLPrWboY.png 1092w",
            },
      NENoPLY6l:
        (C = i ?? s.NENoPLY6l) !== null && C !== void 0
          ? C
          : "FIGMA DESIGN SYSTEM",
      sSr7Xg0DT: (S = t ?? s.sSr7Xg0DT) !== null && S !== void 0 ? S : "01",
      variant:
        (I = (k = Ma[s.variant]) !== null && k !== void 0 ? k : s.variant) !==
          null && I !== void 0
          ? I
          : "v3E7I0Qry",
      XIFul6MeQ: a ?? s.XIFul6MeQ,
    };
  },
  Ia = (t, r) =>
    t.layoutDependency ? r.join("-") + t.layoutDependency : r.join("-"),
  Sa = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      {
        style: o,
        className: l,
        layoutId: i,
        variant: f,
        A2RTm04yt: c,
        NENoPLY6l: s,
        L6TZSDBLe: d,
        JXxw5wiQU: y,
        XIFul6MeQ: x,
        sSr7Xg0DT: C,
        ...S
      } = Ca(t),
      {
        baseVariant: k,
        classNames: I,
        clearLoadingGesture: z,
        gestureHandlers: b,
        gestureVariant: p,
        isLoading: N,
        setGestureState: M,
        setVariant: L,
        variants: v,
      } = $({
        cycleOrder: ga,
        defaultVariant: "v3E7I0Qry",
        variant: f,
        variantClassNames: xa,
      }),
      _ = Ia(t, v),
      ee = R(null),
      ne = H(),
      le = [],
      Q = J();
    return e(W, {
      id: i ?? ne,
      children: e(ka, {
        animate: v,
        initial: !1,
        children: e(wa, {
          value: va,
          children: w(m.div, {
            ...S,
            ...b,
            className: P(ya, ...le, "framer-mdlrqk", l, I),
            "data-framer-cursor": x,
            "data-framer-name": "Desktop",
            layoutDependency: _,
            layoutId: "v3E7I0Qry",
            ref: r ?? ee,
            style: { ...o },
            ...Ir({ XoK2Z7oFZ: { "data-framer-name": "Phone" } }, k, p),
            children: [
              w(m.figcaption, {
                className: "framer-1piw7qh",
                "data-framer-name": "details",
                layoutDependency: _,
                layoutId: "Mml1980CS",
                children: [
                  w(m.div, {
                    className: "framer-4xi2my",
                    "data-framer-name": "title",
                    layoutDependency: _,
                    layoutId: "avYbQmc2i",
                    children: [
                      e(V, {
                        __fromCanvasComponent: !0,
                        children: e(g, {
                          children: e(m.h4, {
                            style: {
                              "--font-selector":
                                "R0Y7TWFydGlhbiBNb25vLXJlZ3VsYXI=",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "14px",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-text-color":
                                "var(--extracted-1eung3n, var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "DISY SYSTEM DESIGN",
                          }),
                        }),
                        className: "framer-it6tyl",
                        fonts: ["GF;Martian Mono-regular"],
                        layoutDependency: _,
                        layoutId: "xN2B4LX3E",
                        style: {
                          "--extracted-1eung3n":
                            "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: c,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(V, {
                        __fromCanvasComponent: !0,
                        children: e(g, {
                          children: e(m.p, {
                            style: {
                              "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "10px",
                              "--framer-font-weight": "300",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "FIGMA DESIGN SYSTEM",
                          }),
                        }),
                        className: "framer-111xzkk",
                        fonts: ["GF;Martian Mono-300"],
                        layoutDependency: _,
                        layoutId: "ScGKk3Ppp",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: s,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  w(m.div, {
                    className: "framer-1owoo01",
                    "data-framer-name": "numbering",
                    layoutDependency: _,
                    layoutId: "AATjEaNGJ",
                    children: [
                      e(V, {
                        __fromCanvasComponent: !0,
                        children: e(g, {
                          children: e(m.h3, {
                            style: {
                              "--font-selector": "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                              "--framer-font-family":
                                '"Martian Mono", monospace',
                              "--framer-font-size": "24px",
                              "--framer-font-weight": "300",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-text-color":
                                "var(--extracted-a0htzi, var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)))",
                              "--framer-text-transform": "uppercase",
                            },
                            children: "01",
                          }),
                        }),
                        className: "framer-1i9vbb8",
                        fonts: ["GF;Martian Mono-300"],
                        layoutDependency: _,
                        layoutId: "wOp6pDhM1",
                        style: {
                          "--extracted-a0htzi":
                            "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: C,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      e(mr, {
                        className: "framer-1f85old",
                        "data-framer-name": "Arrow-right",
                        layout: "position",
                        layoutDependency: _,
                        layoutId: "AWBP1LNFV",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><path d="M 5.833 14 L 22.167 14 M 15.167 21 L 22.167 14 M 15.167 7 L 22.167 14" fill="transparent" stroke-width="1.75" stroke="var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                        svgContentId: 10390883888,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
              e(m.div, {
                className: "framer-1kdq85k",
                "data-border": !0,
                "data-framer-name": "image",
                layoutDependency: _,
                layoutId: "a1Sec7Pe4",
                style: {
                  "--7il29p": ba(y),
                  "--border-bottom-width": "0px",
                  "--border-color":
                    "var(--token-9ee65e2b-2c21-404c-b13a-3f4d05fe9a6d, rgb(45, 45, 45))",
                  "--border-left-width": "1px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "0px",
                },
                variants: {
                  XoK2Z7oFZ: {
                    "--border-bottom-width": "0px",
                    "--border-left-width": "0px",
                    "--border-right-width": "0px",
                    "--border-top-width": "0px",
                  },
                },
                children: e(m.div, {
                  className: "framer-160agpb",
                  "data-framer-name": "image holder",
                  layoutDependency: _,
                  layoutId: "ReaMhE96x",
                  children: e(ha, {
                    __framer__spring: {
                      bounce: 0.2,
                      damping: 40,
                      delay: 0,
                      duration: 0.3,
                      durationBasedSpring: !1,
                      ease: [0.44, 0, 0.56, 1],
                      mass: 0.1,
                      stiffness: 500,
                      type: "spring",
                    },
                    __framer__styleTransformEffectEnabled: !0,
                    __framer__transformTargets: [
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1.2,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 0,
                        },
                      },
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 0,
                        },
                      },
                    ],
                    __framer__transformTrigger: "onInView",
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    as: "figure",
                    background: {
                      alt: "",
                      fit: "fill",
                      intrinsicHeight: 614,
                      intrinsicWidth: 1092,
                      pixelHeight: 614,
                      pixelWidth: 1092,
                      sizes: `max(max(${Q?.width || "100vw"} * 0.6024, 1px) - ${
                        y * 2
                      }px, 1px)`,
                      ...Sr(d),
                      positionX: "center",
                      positionY: "center",
                    },
                    className: "framer-81yiet",
                    "data-framer-name": "Works",
                    layoutDependency: _,
                    layoutId: "wJzD5EdD9",
                    ...Ir(
                      {
                        XoK2Z7oFZ: {
                          background: {
                            alt: "",
                            fit: "fill",
                            intrinsicHeight: 614,
                            intrinsicWidth: 1092,
                            pixelHeight: 614,
                            pixelWidth: 1092,
                            sizes: `max(${Q?.width || "100vw"}, 1px)`,
                            ...Sr(d),
                            positionX: "center",
                            positionY: "center",
                          },
                        },
                      },
                      k,
                      p
                    ),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ja = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-eZ80g.framer-1ixsuar, .framer-eZ80g .framer-1ixsuar { display: block; }",
    ".framer-eZ80g.framer-mdlrqk { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-eZ80g .framer-1piw7qh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 0px; position: relative; width: 1px; }",
    ".framer-eZ80g .framer-4xi2my { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-eZ80g .framer-it6tyl, .framer-eZ80g .framer-111xzkk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-eZ80g .framer-1owoo01 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-eZ80g .framer-1i9vbb8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-eZ80g .framer-1f85old { flex: none; height: 28px; position: relative; width: 28px; }",
    ".framer-eZ80g .framer-1kdq85k { align-content: center; align-items: center; display: flex; flex: 1.515 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: var(--7il29p); position: relative; width: 1px; }",
    ".framer-eZ80g .framer-160agpb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-eZ80g .framer-81yiet { aspect-ratio: 1.778501628664495 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 393px); overflow: visible; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eZ80g.framer-mdlrqk, .framer-eZ80g .framer-1piw7qh, .framer-eZ80g .framer-4xi2my, .framer-eZ80g .framer-1owoo01, .framer-eZ80g .framer-1kdq85k, .framer-eZ80g .framer-160agpb { gap: 0px; } .framer-eZ80g.framer-mdlrqk > *, .framer-eZ80g .framer-1owoo01 > *, .framer-eZ80g .framer-1kdq85k > *, .framer-eZ80g .framer-160agpb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-eZ80g.framer-mdlrqk > :first-child, .framer-eZ80g .framer-1piw7qh > :first-child, .framer-eZ80g .framer-1owoo01 > :first-child, .framer-eZ80g .framer-1kdq85k > :first-child, .framer-eZ80g .framer-160agpb > :first-child { margin-left: 0px; } .framer-eZ80g.framer-mdlrqk > :last-child, .framer-eZ80g .framer-1piw7qh > :last-child, .framer-eZ80g .framer-1owoo01 > :last-child, .framer-eZ80g .framer-1kdq85k > :last-child, .framer-eZ80g .framer-160agpb > :last-child { margin-right: 0px; } .framer-eZ80g .framer-1piw7qh > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-eZ80g .framer-4xi2my > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-eZ80g .framer-4xi2my > :first-child { margin-top: 0px; } .framer-eZ80g .framer-4xi2my > :last-child { margin-bottom: 0px; } }",
    ".framer-eZ80g.framer-v-nz6scg.framer-mdlrqk { flex-direction: column; gap: 20px; width: 390px; }",
    ".framer-eZ80g.framer-v-nz6scg .framer-1piw7qh { flex: none; order: 1; width: 100%; }",
    ".framer-eZ80g.framer-v-nz6scg .framer-1kdq85k { flex: none; height: 278px; order: 0; padding: 0px; width: 100%; }",
    ".framer-eZ80g.framer-v-nz6scg .framer-160agpb { height: 100%; }",
    ".framer-eZ80g.framer-v-nz6scg .framer-81yiet { aspect-ratio: unset; height: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eZ80g.framer-v-nz6scg.framer-mdlrqk { gap: 0px; } .framer-eZ80g.framer-v-nz6scg.framer-mdlrqk > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-eZ80g.framer-v-nz6scg.framer-mdlrqk > :first-child { margin-top: 0px; } .framer-eZ80g.framer-v-nz6scg.framer-mdlrqk > :last-child { margin-bottom: 0px; } }",
    '.framer-eZ80g[data-border="true"]::after, .framer-eZ80g [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Te = X(Sa, ja, "framer-eZ80g"),
  ue = Te;
Te.displayName = "Works/case";
Te.defaultProps = { height: 463, width: 1200 };
B(Te, {
  variant: {
    options: ["v3E7I0Qry", "XoK2Z7oFZ"],
    optionTitles: ["Desktop", "Phone"],
    title: "Variant",
    type: h.Enum,
  },
  A2RTm04yt: {
    defaultValue: "DISY SYSTEM DESIGN",
    displayTextArea: !1,
    title: "Title",
    type: h.String,
  },
  NENoPLY6l: {
    defaultValue: "FIGMA DESIGN SYSTEM",
    displayTextArea: !1,
    title: "Tagline",
    type: h.String,
  },
  L6TZSDBLe: {
    __defaultAssetReference:
      "data:framer/asset-reference,ISakrPH728034bhVYclLPrWboY.png?originalFilename=works.png&preferredSize=auto",
    title: "Case Image",
    type: h.ResponsiveImage,
  },
  JXxw5wiQU: {
    defaultValue: "0px 0px 70px 20px",
    title: "Image Padding",
    type: h.Padding,
  },
  XIFul6MeQ: { title: "Hover Cursor", type: h.CustomCursor },
  sSr7Xg0DT: {
    defaultValue: "01",
    displayTextArea: !1,
    title: "Amount",
    type: h.String,
  },
});
G(
  Te,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY1qu86TD75kdpF2.woff2",
          weight: "400",
        },
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY00u86TD75kdpF2.woff2",
          weight: "300",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ta = ae(ge),
  _a = ae(Je),
  La = ae(je),
  Ra = ae(ve),
  Va = Re(te),
  Fa = ce(V),
  Ea = ae(ue),
  za = ae(rr),
  Ua = ae(Ne),
  Na = {
    HWopbb0mz: "(min-width: 1200px)",
    nA1CMlh2G: "(min-width: 810px) and (max-width: 1199px)",
    TjUQbTwJq: "(max-width: 809px)",
  };
var jr = "framer-j7gyU",
  qa = {
    HWopbb0mz: "framer-v-1ugxi7c",
    nA1CMlh2G: "framer-v-slgulx",
    TjUQbTwJq: "framer-v-1qwojen",
  },
  Tr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  _e = (t, r) => {
    if (!(!t || typeof t != "object")) return { ...t, alt: r };
  },
  ar = Fe(),
  Da = { Desktop: "HWopbb0mz", Phone: "TjUQbTwJq", Tablet: "nA1CMlh2G" },
  Aa = ({ height: t, id: r, width: n, ...a }) => {
    var o, l;
    return {
      ...a,
      variant:
        (l = (o = Da[a.variant]) !== null && o !== void 0 ? o : a.variant) !==
          null && l !== void 0
          ? l
          : "HWopbb0mz",
    };
  },
  Ba = {
    alignment: "center",
    component: Ne,
    offset: { x: 0, y: 0 },
    placement: "bottom",
    transition: Tr,
    variant: "RUQoP_9qg",
  },
  Wa = {
    alignment: "center",
    component: Ne,
    offset: { x: 0, y: 0 },
    placement: "bottom",
    transition: Tr,
    variant: "boof3b2rQ",
  },
  Pa = Y(function (t, r) {
    let { activeLocale: n, setLocale: a } = Z(),
      { style: o, className: l, layoutId: i, variant: f, ...c } = Aa(t);
    F(() => {
      let k = Fe(void 0, n);
      if (k.robots) {
        let I = document.querySelector('meta[name="robots"]');
        I
          ? I.setAttribute("content", k.robots)
          : ((I = document.createElement("meta")),
            I.setAttribute("name", "robots"),
            I.setAttribute("content", k.robots),
            document.head.appendChild(I));
      }
    }, [void 0, n]),
      nr(() => {
        let k = Fe(void 0, n);
        if (((document.title = k.title || ""), k.viewport)) {
          var I;
          (I = document.querySelector('meta[name="viewport"]')) === null ||
            I === void 0 ||
            I.setAttribute("content", k.viewport);
        }
        let z = k.bodyClassName;
        if (z) {
          let b = document.body;
          b.classList.forEach(
            (p) => p.startsWith("framer-body-") && b.classList.remove(p)
          ),
            b.classList.add(`${k.bodyClassName}-framer-j7gyU`);
        }
        return () => {
          z &&
            document.body.classList.remove(`${k.bodyClassName}-framer-j7gyU`);
        };
      }, [void 0, n]);
    let [s, d] = lr(f, Na, !1),
      y = void 0,
      x = R(null),
      C = H(),
      S = [];
    return (
      ir({ "1513t11": Wa, "1sqcj7": Ba }),
      e(sr.Provider, {
        value: { primaryVariantId: "HWopbb0mz", variantClassNames: qa },
        children: w(W, {
          id: i ?? C,
          children: [
            w(m.div, {
              ...c,
              className: P(jr, ...S, "framer-1ugxi7c", l),
              "data-framer-cursor": "1sqcj7",
              ref: r ?? x,
              style: { ...o },
              children: [
                e(q, {
                  children: e(te, {
                    className: "framer-4ulmob-container",
                    children: e(ge, {
                      height: "100%",
                      id: "xAxipdFda",
                      intensity: 8,
                      layoutId: "xAxipdFda",
                      width: "100%",
                    }),
                  }),
                }),
                e(q, {
                  height: 466,
                  width: "100vw",
                  y: 200,
                  children: e(te, {
                    className: "framer-gngdm-container",
                    children: e(U, {
                      breakpoint: s,
                      overrides: { TjUQbTwJq: { variant: "x71upxKda" } },
                      children: e(Je, {
                        height: "100%",
                        id: "yN2opozE6",
                        layoutId: "yN2opozE6",
                        OMRwfmwMQ: "1513t11",
                        style: { width: "100%" },
                        variant: "atwzvm2Tz",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                w("main", {
                  className: "framer-1fy2as1",
                  "data-framer-name": "Main",
                  name: "Main",
                  children: [
                    w("section", {
                      className: "framer-1jcwhbi",
                      "data-framer-name": "Section - Hero",
                      name: "Section - Hero",
                      children: [
                        w("header", {
                          className: "framer-fi3e9m",
                          "data-framer-name": "container",
                          name: "container",
                          children: [
                            w("ul", {
                              className: "framer-1240b80",
                              "data-framer-name": "left",
                              name: "left",
                              children: [
                                e(U, {
                                  breakpoint: s,
                                  overrides: {
                                    nA1CMlh2G: { y: 989 },
                                    TjUQbTwJq: { y: 716 },
                                  },
                                  children: e(q, {
                                    height: 16,
                                    y: 869,
                                    children: e(te, {
                                      as: "li",
                                      className: "framer-ldz3s3-container",
                                      "data-framer-cursor": "1sqcj7",
                                      children: e(je, {
                                        diDBqZx1P: "https://t.me/",
                                        height: "100%",
                                        id: "RePPxyycl",
                                        layoutId: "RePPxyycl",
                                        variant: "paIFpdnCe",
                                        width: "100%",
                                        XqeH23ibS:
                                          "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                        Y5evmdtWp: "Telegram",
                                      }),
                                    }),
                                  }),
                                }),
                                e(U, {
                                  breakpoint: s,
                                  overrides: {
                                    nA1CMlh2G: { y: 989 },
                                    TjUQbTwJq: { y: 716 },
                                  },
                                  children: e(q, {
                                    height: 16,
                                    y: 869,
                                    children: e(te, {
                                      as: "li",
                                      className: "framer-12uzlr0-container",
                                      "data-framer-cursor": "1sqcj7",
                                      children: e(je, {
                                        diDBqZx1P: "https://x.com/",
                                        height: "100%",
                                        id: "CjeSAn88t",
                                        layoutId: "CjeSAn88t",
                                        variant: "paIFpdnCe",
                                        width: "100%",
                                        XqeH23ibS:
                                          "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                        Y5evmdtWp: "Twitter",
                                      }),
                                    }),
                                  }),
                                }),
                                e(U, {
                                  breakpoint: s,
                                  overrides: {
                                    nA1CMlh2G: { y: 989 },
                                    TjUQbTwJq: { y: 716 },
                                  },
                                  children: e(q, {
                                    height: 16,
                                    y: 869,
                                    children: e(te, {
                                      as: "li",
                                      className: "framer-vddy3t-container",
                                      "data-framer-cursor": "1sqcj7",
                                      children: e(je, {
                                        diDBqZx1P:
                                          "https://envoy-5.gitbook.io/envoy-whitepaper",
                                        height: "100%",
                                        id: "j2pSAmQDF",
                                        layoutId: "j2pSAmQDF",
                                        variant: "paIFpdnCe",
                                        width: "100%",
                                        XqeH23ibS:
                                          "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                        Y5evmdtWp: "Whitepaper",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            w("div", {
                              className: "framer-1bf4rn",
                              "data-framer-name": "right",
                              name: "right",
                              children: [
                                e("div", {
                                  className: "framer-1o8k3ow",
                                  "data-framer-name": "text left",
                                  name: "text left",
                                  children: e(V, {
                                    __fromCanvasComponent: !0,
                                    children: e(g, {
                                      children: w("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                          "--framer-font-family":
                                            '"Martian Mono", monospace',
                                          "--framer-font-size": "12px",
                                          "--framer-font-weight": "300",
                                          "--framer-letter-spacing": "-0.02em",
                                          "--framer-line-height": "2em",
                                          "--framer-text-color":
                                            "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: [
                                          e("span", {
                                            style: {
                                              "--framer-text-color":
                                                "var(--token-78d502e7-6feb-4f33-ae29-62bcd278e293, rgb(99, 99, 99))",
                                            },
                                            children: "Introducing Envoy",
                                          }),
                                          e("br", {}),
                                          e("br", {}),
                                          "Envoy is your all-in-one mobile solution for creating and managing AI-driven virtual agents.",
                                        ],
                                      }),
                                    }),
                                    className: "framer-1rbhbip",
                                    fonts: ["GF;Martian Mono-300"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e("div", {
                                  className: "framer-yq64yc",
                                  "data-framer-name": "text right",
                                  name: "text right",
                                  children: e(U, {
                                    breakpoint: s,
                                    overrides: {
                                      TjUQbTwJq: {
                                        children: e(g, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                              "--framer-font-family":
                                                '"Martian Mono", monospace',
                                              "--framer-font-size": "10px",
                                              "--framer-font-weight": "300",
                                              "--framer-letter-spacing":
                                                "-0.02em",
                                              "--framer-line-height": "2em",
                                              "--framer-text-color":
                                                "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                              "--framer-text-transform":
                                                "uppercase",
                                            },
                                            children:
                                              "empowering users to build custom agents that can evolve, interact, and generate revenue seamlessly.",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(V, {
                                      __fromCanvasComponent: !0,
                                      children: e(g, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                            "--framer-font-family":
                                              '"Martian Mono", monospace',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "300",
                                            "--framer-letter-spacing":
                                              "-0.02em",
                                            "--framer-line-height": "2em",
                                            "--framer-text-color":
                                              "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                            "--framer-text-transform":
                                              "uppercase",
                                          },
                                          children:
                                            "empowering users to build custom agents that can evolve, interact, and generate revenue seamlessly.",
                                        }),
                                      }),
                                      className: "framer-1sl5jx3",
                                      fonts: ["GF;Martian Mono-300"],
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-28mpmr",
                          "data-framer-name": "image holder",
                          name: "image holder",
                          children: e(q, {
                            children: e(Va, {
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -239,
                                  },
                                },
                              ],
                              __framer__transformTrigger: "onScroll",
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-17lr14e-container",
                              children: e(ve, {
                                height: "100%",
                                html: "",
                                id: "I40HRGIaI",
                                layoutId: "I40HRGIaI",
                                style: { height: "100%", width: "100%" },
                                type: "url",
                                url: "https://my.spline.design/retrofuturisticcircuitloop-1d5fd43f783cd22018b2a8d1f4656e04/",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        e("div", {
                          className: "framer-1fy0nto",
                          "data-framer-name": "bottom text",
                          name: "bottom text",
                          children: e("div", {
                            className: "framer-1dx59ll",
                            "data-framer-name": "wrapper",
                            name: "wrapper",
                            children: e(U, {
                              breakpoint: s,
                              overrides: {
                                TjUQbTwJq: {
                                  children: e(g, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                        "--framer-font-family":
                                          '"Martian Mono", monospace',
                                        "--framer-font-size": "10px",
                                        "--framer-font-weight": "300",
                                        "--framer-letter-spacing": "-0.02em",
                                        "--framer-line-height": "2em",
                                        "--framer-text-color":
                                          "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children:
                                        "The mobile-first solution for building and managing virtual agents directly within the mobile. With an intuitive interface, users can effortlessly create and customize a range of agents whether for customer support, automation, or other specialized tasks without the need for complex configurations. ",
                                    }),
                                  }),
                                },
                              },
                              children: e(V, {
                                __fromCanvasComponent: !0,
                                children: e(g, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                      "--framer-font-family":
                                        '"Martian Mono", monospace',
                                      "--framer-font-size": "12px",
                                      "--framer-font-weight": "300",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "2em",
                                      "--framer-text-color":
                                        "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                      "--framer-text-transform": "uppercase",
                                    },
                                    children:
                                      "The mobile-first solution for building and managing virtual agents directly within the mobile. With an intuitive interface, users can effortlessly create and customize a range of agents whether for customer support, automation, or other specialized tasks without the need for complex configurations. ",
                                  }),
                                }),
                                className: "framer-1qe5zwb",
                                fonts: ["GF;Martian Mono-300"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    w("section", {
                      className: "framer-eyvjby",
                      "data-framer-name": "Section - Works",
                      name: "Section - Works",
                      children: [
                        e(U, {
                          breakpoint: s,
                          overrides: {
                            TjUQbTwJq: {
                              children: e(g, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                    "--framer-font-family":
                                      '"Martian Mono", monospace',
                                    "--framer-font-size": "10px",
                                    "--framer-font-weight": "300",
                                    "--framer-letter-spacing": "-0.02em",
                                    "--framer-line-height": "2em",
                                    "--framer-text-color":
                                      "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                    "--framer-text-transform": "uppercase",
                                  },
                                  children: "What Makes Envoy Unique",
                                }),
                              }),
                            },
                          },
                          children: e(Fa, {
                            __fromCanvasComponent: !0,
                            children: e(g, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7TWFydGlhbiBNb25vLTMwMA==",
                                  "--framer-font-family":
                                    '"Martian Mono", monospace',
                                  "--framer-font-size": "12px",
                                  "--framer-font-weight": "300",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "2em",
                                  "--framer-text-color":
                                    "var(--token-e9f70aed-d77b-43b1-a510-6cf8aaad0258, rgb(255, 255, 255))",
                                  "--framer-text-transform": "uppercase",
                                },
                                children: "What Makes Envoy Unique",
                              }),
                            }),
                            className: "framer-7j4pt",
                            fonts: ["GF;Martian Mono-300"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        w("div", {
                          className: "framer-s2r10n",
                          children: [
                            e(U, {
                              breakpoint: s,
                              overrides: {
                                nA1CMlh2G: { y: 2646 },
                                TjUQbTwJq: {
                                  width: "calc(100vw - 24px)",
                                  y: 2493,
                                },
                              },
                              children: e(q, {
                                height: 463,
                                width: "calc(100vw - 40px)",
                                y: 2656,
                                children: e(te, {
                                  className: "framer-h76ai5-container",
                                  children: e(U, {
                                    breakpoint: s,
                                    overrides: {
                                      nA1CMlh2G: {
                                        JXxw5wiQU: "0px 0px 50px 20px",
                                      },
                                      TjUQbTwJq: {
                                        JXxw5wiQU: "0px",
                                        variant: "XoK2Z7oFZ",
                                      },
                                    },
                                    children: e(ue, {
                                      A2RTm04yt: "Custom Agent Creation",
                                      height: "100%",
                                      id: "AjouQ7xUW",
                                      JXxw5wiQU: "0px 0px 70px 20px",
                                      L6TZSDBLe: _e(
                                        {
                                          src: "/images/fwjeEGRlzBJH3rJU6Bo6uYX0kCc.gif",
                                          srcSet:
                                            "/images/fwjeEGRlzBJH3rJU6Bo6uYX0kCc.gif?scale-down-to=512 512w,/images/fwjeEGRlzBJH3rJU6Bo6uYX0kCc.gif 700w",
                                        },
                                        "DISY SYSTEM DESIGN"
                                      ),
                                      layoutId: "AjouQ7xUW",
                                      NENoPLY6l:
                                        "Envoy enables you to create a variety of virtual agents, each tailored to meet specific needs across different industries",
                                      sSr7Xg0DT: "01",
                                      style: { width: "100%" },
                                      variant: "v3E7I0Qry",
                                      width: "100%",
                                      XIFul6MeQ: "1513t11",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e(U, {
                              breakpoint: s,
                              overrides: {
                                nA1CMlh2G: { y: 3109 },
                                TjUQbTwJq: {
                                  width: "calc(100vw - 24px)",
                                  y: 2996,
                                },
                              },
                              children: e(q, {
                                height: 463,
                                width: "calc(100vw - 40px)",
                                y: 3119,
                                children: e(te, {
                                  className: "framer-ogv026-container",
                                  children: e(U, {
                                    breakpoint: s,
                                    overrides: {
                                      TjUQbTwJq: { variant: "XoK2Z7oFZ" },
                                    },
                                    children: e(ue, {
                                      A2RTm04yt: "Automation of Routine Tasks",
                                      height: "100%",
                                      id: "EohDJ9ooE",
                                      JXxw5wiQU: "0px 0px 70px 20px",
                                      L6TZSDBLe: _e(
                                        {
                                          src: "/images/ZXj4FnHuxiD1vbTf6bM6Xq4lk.gif",
                                          srcSet:
                                            "/images/ZXj4FnHuxiD1vbTf6bM6Xq4lk.gif?scale-down-to=512 512w,/images/ZXj4FnHuxiD1vbTf6bM6Xq4lk.gif 600w",
                                        },
                                        ""
                                      ),
                                      layoutId: "EohDJ9ooE",
                                      NENoPLY6l:
                                        "Envoy makes it easy to automate everyday tasks through custom virtual agents. These agents can take care of repetitive work like answering customer questions, managing schedules and even sending reminders. Instead of doing these tasks manually, you simply set up your agent, define its role, and let it handle the rest.",
                                      sSr7Xg0DT: "02",
                                      style: { width: "100%" },
                                      variant: "v3E7I0Qry",
                                      width: "100%",
                                      XIFul6MeQ: "1513t11",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e(U, {
                              breakpoint: s,
                              overrides: {
                                nA1CMlh2G: { y: 3572 },
                                TjUQbTwJq: {
                                  width: "calc(100vw - 24px)",
                                  y: 3499,
                                },
                              },
                              children: e(q, {
                                height: 463,
                                width: "calc(100vw - 40px)",
                                y: 3582,
                                children: e(te, {
                                  className: "framer-9utxwk-container",
                                  children: e(U, {
                                    breakpoint: s,
                                    overrides: {
                                      TjUQbTwJq: { variant: "XoK2Z7oFZ" },
                                    },
                                    children: e(ue, {
                                      A2RTm04yt: "Social Media Integration",
                                      height: "100%",
                                      id: "sPxqK8oA1",
                                      JXxw5wiQU: "0px 0px 70px 20px",
                                      L6TZSDBLe: _e(
                                        {
                                          src: "/images/kBxrRkvhwdo9W0NQd8K4tHcviqI.gif",
                                          srcSet:
                                            "/images/kBxrRkvhwdo9W0NQd8K4tHcviqI.gif?scale-down-to=512 512w,/images/kBxrRkvhwdo9W0NQd8K4tHcviqI.gif 800w",
                                        },
                                        ""
                                      ),
                                      layoutId: "sPxqK8oA1",
                                      NENoPLY6l:
                                        "Envoy makes it simple to integrate your custom virtual agents across various social media platforms. Whether you're using Telegram or X. Virtual agents can seamlessly interact with your audience, handle inquiries, and engage users in real-time.",
                                      sSr7Xg0DT: "03",
                                      style: { width: "100%" },
                                      variant: "v3E7I0Qry",
                                      width: "100%",
                                      XIFul6MeQ: "1513t11",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e(U, {
                              breakpoint: s,
                              overrides: {
                                nA1CMlh2G: { y: 4035 },
                                TjUQbTwJq: {
                                  width: "calc(100vw - 24px)",
                                  y: 4002,
                                },
                              },
                              children: e(q, {
                                height: 463,
                                width: "calc(100vw - 40px)",
                                y: 4045,
                                children: e(te, {
                                  className: "framer-1v2v5zx-container",
                                  children: e(U, {
                                    breakpoint: s,
                                    overrides: {
                                      TjUQbTwJq: { variant: "XoK2Z7oFZ" },
                                    },
                                    children: e(ue, {
                                      A2RTm04yt: "Performance Analytics",
                                      height: "100%",
                                      id: "rWbwFQ9J1",
                                      JXxw5wiQU: "0px 0px 70px 20px",
                                      L6TZSDBLe: _e(
                                        {
                                          src: "/images/W5x1QYKcaAPIzyt7MI49B0ojMKs.gif",
                                        },
                                        ""
                                      ),
                                      layoutId: "rWbwFQ9J1",
                                      NENoPLY6l:
                                        "Envoy provides powerful performance analytics to help you track and measure the effectiveness of your virtual agents. With our detailed insights, you can understand how well your agents are performing, identify areas for improvement, and optimize your strategies for better results.",
                                      sSr7Xg0DT: "04",
                                      style: { width: "100%" },
                                      variant: "v3E7I0Qry",
                                      width: "100%",
                                      XIFul6MeQ: "1513t11",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e(U, {
                              breakpoint: s,
                              overrides: {
                                nA1CMlh2G: { y: 4498 },
                                TjUQbTwJq: {
                                  width: "calc(100vw - 24px)",
                                  y: 4505,
                                },
                              },
                              children: e(q, {
                                height: 463,
                                width: "calc(100vw - 40px)",
                                y: 4508,
                                children: e(te, {
                                  className: "framer-fglife-container",
                                  children: e(U, {
                                    breakpoint: s,
                                    overrides: {
                                      TjUQbTwJq: { variant: "XoK2Z7oFZ" },
                                    },
                                    children: e(ue, {
                                      A2RTm04yt: "Revenue Generation",
                                      height: "100%",
                                      id: "Ep5C_rW5j",
                                      JXxw5wiQU: "0px 0px 70px 20px",
                                      L6TZSDBLe: _e(
                                        {
                                          src: "/images/zZU70MA0wGgw2oewflRFIceYTaQ.gif",
                                          srcSet:
                                            "/images/zZU70MA0wGgw2oewflRFIceYTaQ.gif?scale-down-to=512 512w,/images/zZU70MA0wGgw2oewflRFIceYTaQ.gif?scale-down-to=1024 1024w,/images/zZU70MA0wGgw2oewflRFIceYTaQ.gif 1400w",
                                        },
                                        ""
                                      ),
                                      layoutId: "Ep5C_rW5j",
                                      NENoPLY6l:
                                        "Envoy offers a unique way for creators and businesses to generate income through their Virtual agents by offering a co-ownership model. This allows you to earn money as your agents interact with users, complete tasks, and drive sales, with revenue being shared among co-owners based on their ownership stake.",
                                      sSr7Xg0DT: "05",
                                      style: { width: "100%" },
                                      variant: "v3E7I0Qry",
                                      width: "100%",
                                      XIFul6MeQ: "1513t11",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e(U, {
                  breakpoint: s,
                  overrides: { nA1CMlh2G: { y: 5111 }, TjUQbTwJq: { y: 5068 } },
                  children: e(q, {
                    height: 528,
                    width: "100vw",
                    y: 5171,
                    children: e(te, {
                      className: "framer-134mwgw-container",
                      children: e(U, {
                        breakpoint: s,
                        overrides: {
                          nA1CMlh2G: { variant: "pjt0DRzgz" },
                          TjUQbTwJq: { variant: "f5YUgLnTW" },
                        },
                        children: e(rr, {
                          CI972pXW_: "1513t11",
                          height: "100%",
                          id: "RXsj3tHmX",
                          layoutId: "RXsj3tHmX",
                          style: { width: "100%" },
                          variant: "jelKSLQDp",
                          width: "100%",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: P(jr, ...S), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ya = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${ar.bodyClassName}-framer-j7gyU { background: var(--token-8695a0ff-52a4-4c5d-b876-433b61e02bc8, rgb(0, 0, 0)) /* {"name":"Black"} */; }`,
    ".framer-j7gyU.framer-o7p85n, .framer-j7gyU .framer-o7p85n { display: block; }",
    ".framer-j7gyU.framer-1ugxi7c { align-content: center; align-items: center; background-color: var(--token-8695a0ff-52a4-4c5d-b876-433b61e02bc8, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-j7gyU .framer-4ulmob-container, .framer-j7gyU .framer-ldz3s3-container, .framer-j7gyU .framer-12uzlr0-container, .framer-j7gyU .framer-vddy3t-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-j7gyU .framer-gngdm-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }",
    ".framer-j7gyU .framer-1fy2as1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 20px 200px 20px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-1jcwhbi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-fi3e9m { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-1240b80 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; list-style: none; margin: 0px; overflow: hidden; padding: 0px 0px 1px 0px; position: relative; width: 1px; }",
    ".framer-j7gyU .framer-1bf4rn { align-content: flex-end; align-items: flex-end; display: flex; flex: 1.5 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-j7gyU .framer-1o8k3ow, .framer-j7gyU .framer-yq64yc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-j7gyU .framer-1rbhbip { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 380px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-j7gyU .framer-1sl5jx3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 286px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-j7gyU .framer-28mpmr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-17lr14e-container { flex: none; height: 1080px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-1fy0nto { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 50px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-1dx59ll { align-content: flex-end; align-items: flex-end; display: flex; flex: 0.6 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-j7gyU .framer-1qe5zwb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 520px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-j7gyU .framer-eyvjby { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-7j4pt { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 60%; word-break: break-word; word-wrap: break-word; }",
    ".framer-j7gyU .framer-s2r10n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-j7gyU .framer-h76ai5-container, .framer-j7gyU .framer-ogv026-container, .framer-j7gyU .framer-9utxwk-container, .framer-j7gyU .framer-1v2v5zx-container, .framer-j7gyU .framer-fglife-container, .framer-j7gyU .framer-134mwgw-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-j7gyU.framer-1ugxi7c, .framer-j7gyU .framer-1fy2as1, .framer-j7gyU .framer-1jcwhbi, .framer-j7gyU .framer-fi3e9m, .framer-j7gyU .framer-1240b80, .framer-j7gyU .framer-1bf4rn, .framer-j7gyU .framer-1o8k3ow, .framer-j7gyU .framer-yq64yc, .framer-j7gyU .framer-28mpmr, .framer-j7gyU .framer-1fy0nto, .framer-j7gyU .framer-1dx59ll, .framer-j7gyU .framer-eyvjby, .framer-j7gyU .framer-s2r10n { gap: 0px; } .framer-j7gyU.framer-1ugxi7c > *, .framer-j7gyU .framer-s2r10n > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-j7gyU.framer-1ugxi7c > :first-child, .framer-j7gyU .framer-1fy2as1 > :first-child, .framer-j7gyU .framer-1jcwhbi > :first-child, .framer-j7gyU .framer-eyvjby > :first-child, .framer-j7gyU .framer-s2r10n > :first-child { margin-top: 0px; } .framer-j7gyU.framer-1ugxi7c > :last-child, .framer-j7gyU .framer-1fy2as1 > :last-child, .framer-j7gyU .framer-1jcwhbi > :last-child, .framer-j7gyU .framer-eyvjby > :last-child, .framer-j7gyU .framer-s2r10n > :last-child { margin-bottom: 0px; } .framer-j7gyU .framer-1fy2as1 > * { margin: 0px; margin-bottom: calc(200px / 2); margin-top: calc(200px / 2); } .framer-j7gyU .framer-1jcwhbi > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-j7gyU .framer-fi3e9m > *, .framer-j7gyU .framer-1o8k3ow > *, .framer-j7gyU .framer-yq64yc > *, .framer-j7gyU .framer-28mpmr > *, .framer-j7gyU .framer-1fy0nto > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-j7gyU .framer-fi3e9m > :first-child, .framer-j7gyU .framer-1240b80 > :first-child, .framer-j7gyU .framer-1bf4rn > :first-child, .framer-j7gyU .framer-1o8k3ow > :first-child, .framer-j7gyU .framer-yq64yc > :first-child, .framer-j7gyU .framer-28mpmr > :first-child, .framer-j7gyU .framer-1fy0nto > :first-child, .framer-j7gyU .framer-1dx59ll > :first-child { margin-left: 0px; } .framer-j7gyU .framer-fi3e9m > :last-child, .framer-j7gyU .framer-1240b80 > :last-child, .framer-j7gyU .framer-1bf4rn > :last-child, .framer-j7gyU .framer-1o8k3ow > :last-child, .framer-j7gyU .framer-yq64yc > :last-child, .framer-j7gyU .framer-28mpmr > :last-child, .framer-j7gyU .framer-1fy0nto > :last-child, .framer-j7gyU .framer-1dx59ll > :last-child { margin-right: 0px; } .framer-j7gyU .framer-1240b80 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-j7gyU .framer-1bf4rn > *, .framer-j7gyU .framer-1dx59ll > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-j7gyU .framer-eyvjby > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .${ar.bodyClassName}-framer-j7gyU { background: var(--token-8695a0ff-52a4-4c5d-b876-433b61e02bc8, rgb(0, 0, 0)) /* {"name":"Black"} */; } .framer-j7gyU.framer-1ugxi7c { width: 810px; } .framer-j7gyU .framer-1fy2as1 { gap: 150px; padding: 70px 20px 150px 20px; } .framer-j7gyU .framer-1jcwhbi { gap: 30px; } .framer-j7gyU .framer-1bf4rn { flex-direction: column; } .framer-j7gyU .framer-1o8k3ow, .framer-j7gyU .framer-yq64yc { flex: none; width: 100%; } .framer-j7gyU .framer-1fy0nto { padding: 40px 0px 0px 0px; } .framer-j7gyU .framer-eyvjby { gap: 70px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-j7gyU .framer-1fy2as1, .framer-j7gyU .framer-1jcwhbi, .framer-j7gyU .framer-1bf4rn, .framer-j7gyU .framer-eyvjby { gap: 0px; } .framer-j7gyU .framer-1fy2as1 > * { margin: 0px; margin-bottom: calc(150px / 2); margin-top: calc(150px / 2); } .framer-j7gyU .framer-1fy2as1 > :first-child, .framer-j7gyU .framer-1jcwhbi > :first-child, .framer-j7gyU .framer-1bf4rn > :first-child, .framer-j7gyU .framer-eyvjby > :first-child { margin-top: 0px; } .framer-j7gyU .framer-1fy2as1 > :last-child, .framer-j7gyU .framer-1jcwhbi > :last-child, .framer-j7gyU .framer-1bf4rn > :last-child, .framer-j7gyU .framer-eyvjby > :last-child { margin-bottom: 0px; } .framer-j7gyU .framer-1jcwhbi > *, .framer-j7gyU .framer-1bf4rn > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-j7gyU .framer-eyvjby > * { margin: 0px; margin-bottom: calc(70px / 2); margin-top: calc(70px / 2); } }}`,
    `@media (max-width: 809px) { .${ar.bodyClassName}-framer-j7gyU { background: var(--token-8695a0ff-52a4-4c5d-b876-433b61e02bc8, rgb(0, 0, 0)) /* {"name":"Black"} */; } .framer-j7gyU.framer-1ugxi7c { width: 390px; } .framer-j7gyU .framer-1fy2as1 { gap: 100px; padding: 50px 12px 100px 12px; } .framer-j7gyU .framer-1jcwhbi { gap: 20px; } .framer-j7gyU .framer-fi3e9m { flex-direction: column; gap: 20px; } .framer-j7gyU .framer-1240b80, .framer-j7gyU .framer-1o8k3ow, .framer-j7gyU .framer-yq64yc { flex: none; width: 100%; } .framer-j7gyU .framer-1bf4rn { flex: none; flex-direction: column; width: 100%; } .framer-j7gyU .framer-1fy0nto { padding: 20px 0px 0px 0px; } .framer-j7gyU .framer-1dx59ll { flex: 1 0 0px; } .framer-j7gyU .framer-eyvjby { gap: 50px; } .framer-j7gyU .framer-7j4pt { width: 100%; } .framer-j7gyU .framer-s2r10n { gap: 40px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-j7gyU .framer-1fy2as1, .framer-j7gyU .framer-1jcwhbi, .framer-j7gyU .framer-fi3e9m, .framer-j7gyU .framer-1bf4rn, .framer-j7gyU .framer-eyvjby, .framer-j7gyU .framer-s2r10n { gap: 0px; } .framer-j7gyU .framer-1fy2as1 > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-j7gyU .framer-1fy2as1 > :first-child, .framer-j7gyU .framer-1jcwhbi > :first-child, .framer-j7gyU .framer-fi3e9m > :first-child, .framer-j7gyU .framer-1bf4rn > :first-child, .framer-j7gyU .framer-eyvjby > :first-child, .framer-j7gyU .framer-s2r10n > :first-child { margin-top: 0px; } .framer-j7gyU .framer-1fy2as1 > :last-child, .framer-j7gyU .framer-1jcwhbi > :last-child, .framer-j7gyU .framer-fi3e9m > :last-child, .framer-j7gyU .framer-1bf4rn > :last-child, .framer-j7gyU .framer-eyvjby > :last-child, .framer-j7gyU .framer-s2r10n > :last-child { margin-bottom: 0px; } .framer-j7gyU .framer-1jcwhbi > *, .framer-j7gyU .framer-fi3e9m > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-j7gyU .framer-1bf4rn > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-j7gyU .framer-eyvjby > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-j7gyU .framer-s2r10n > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }}`,
  ],
  qe = X(Pa, Ya, "framer-j7gyU"),
  gm = qe;
qe.displayName = "Page";
qe.defaultProps = { height: 5334, width: 1200 };
G(
  qe,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Martian Mono",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/martianmono/v3/2V08KIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnQzaVMIE6j15dYY00u86TD75kdpF2.woff2",
          weight: "300",
        },
      ],
    },
    ...Ta,
    ..._a,
    ...La,
    ...Ra,
    ...Ea,
    ...za,
    ...Ua,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ym = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Framerryay14bIY",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerIntrinsicWidth: "1200",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"nA1CMlh2G":{"layout":["fixed","auto"]},"TjUQbTwJq":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerIntrinsicHeight: "5334",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerComponentViewportWidth: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { ym as __FramerMetadata__, gm as default };
//# sourceMappingURL=LaZ8RfuXWEBVS14QzEZ0XxA-J54WHGvkb4Q-VQjgNjo.H7TVJXJ6.mjs.map
