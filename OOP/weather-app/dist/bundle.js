(() => {
  var t = {
      743: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => c });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          t.id,
          "body {\n  background: #43c6ac; /* fallback for old browsers */\n  background: -webkit-linear-gradient(\n    to right,\n    #191654,\n    #43c6ac\n  ); /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(\n    to right,\n    #191654,\n    #43c6ac\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n",
          "",
        ]);
        const c = i;
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < t.length; u++) {
                var d = [].concat(t[u]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      601: (t) => {
        "use strict";
        t.exports = function (t) {
          return t[1];
        };
      },
      440: (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, { default: () => g });
        var r = n(72),
          o = n.n(r),
          a = n(825),
          i = n.n(a),
          c = n(659),
          s = n.n(c),
          u = n(56),
          d = n.n(u),
          l = n(540),
          h = n.n(l),
          p = n(113),
          f = n.n(p),
          y = n(743),
          m = {};
        (m.styleTagTransform = f()),
          (m.setAttributes = d()),
          (m.insert = s().bind(null, "head")),
          (m.domAPI = i()),
          (m.insertStyleElement = h()),
          o()(y.A, m);
        const g = y.A && y.A.locals ? y.A.locals : void 0;
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, i = [], c = 0; c < t.length; c++) {
            var s = t[c],
              u = r.base ? s[0] + r.base : s[0],
              d = a[u] || 0,
              l = "".concat(u, " ").concat(d);
            a[u] = d + 1;
            var h = n(l),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(p);
            else {
              var f = o(p, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: f, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var c = n(a[i]);
              e[c].references--;
            }
            for (var s = r(t, o), u = 0; u < a.length; u++) {
              var d = n(a[u]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = s;
          };
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      537: (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, { Store: () => r });
        class r {
          constructor() {
            this.city,
              this.countryCode,
              (this.defaultCity = "Kiev"),
              (this.defaultCountry = "ua");
          }
          getLocationData() {
            return (
              null === localStorage.getItem("city")
                ? (this.city = this.defaultCity)
                : (this.city = localStorage.getItem("city")),
              null === localStorage.getItem("countryCode")
                ? (this.countryCode = this.defaultCountry)
                : (this.countryCode = localStorage.getItem("countryCode")),
              { city: this.city, countryCode: this.countryCode }
            );
          }
          setLocationData(t, e) {
            localStorage.setItem("city", t),
              localStorage.setItem("countryCode", e);
          }
        }
      },
      400: (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, { UI: () => r });
        class r {
          constructor() {
            (this.location = document.getElementById("weather-location")),
              (this.desc = document.getElementById("weather-description")),
              (this.string = document.getElementById("weather-string")),
              (this.humidity = document.getElementById("weather-humidity")),
              (this.wind = document.getElementById("weather-wind"));
          }
          render(t) {
            (this.location.textContent = t.name + " / " + t.sys.country),
              (this.desc.textContent = t.weather[0].description),
              (this.string.textContent = t.main.temp + " C°"),
              (this.humidity.textContent =
                "Humidity: " + t.main.humidity + " %"),
              (this.wind.textContent = "Wind: " + t.wind.speed + " m/s");
          }
        }
      },
      824: (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, { Weather: () => r });
        class r {
          constructor(t, e) {
            (this.apikey = "085e3f81585d7f07f172b6dd80103def"),
              (this.city = t),
              (this.countryCode = e);
          }
          async getWeather() {
            const t = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`,
              e = await fetch(t);
            return await e.json();
          }
          changeLocation(t, e) {
            (this.city = t), (this.countryCode = e);
          }
        }
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.nc = void 0),
    (() => {
      const { Weather: t } = n(824),
        { UI: e } = n(400),
        { Store: r } = n(537),
        o = new r(),
        { city: a, countryCode: i } = o.getLocationData(),
        c = new e(),
        s = new t(a, i);
      async function u() {
        const t = await s.getWeather();
        console.log(t), c.render(t);
      }
      n(440),
        document
          .getElementById("w-change-btn")
          .addEventListener("click", (t) => {
            const e = document.getElementById("city").value,
              n = document.getElementById("country-code").value;
            s.changeLocation(e, n),
              o.setLocationData(e, n),
              u(),
              t.preventDefault();
          }),
        document.addEventListener("DOMContentLoaded", u);
    })();
})();
