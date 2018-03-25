! function(A, e, t) {
    function n(A, e) {
        return typeof A === e
    }

    function o(A) {
        var e = g.className,
            t = y._config.classPrefix || "";
        if (R && (e = e.baseVal), y._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            e = e.replace(n, "$1" + t + "js$2")
        }
        y._config.enableClasses && (e += " " + t + A.join(" " + t), R ? g.className.baseVal = e : g.className = e)
    }

    function l() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : R ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function i() {
        var A = e.body;
        return A || ((A = l(R ? "svg" : "body")).fake = !0), A
    }

    function a(A, t, n, o) {
        var a, r, s, c, u = "modernizr",
            d = l("div"),
            p = i();
        if (parseInt(n, 10))
            for (; n--;)(s = l("div")).id = o ? o[n] : u + (n + 1), d.appendChild(s);
        return a = l("style"), a.type = "text/css", a.id = "s" + u, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = A : a.appendChild(e.createTextNode(A)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = g.style.overflow, g.style.overflow = "hidden", g.appendChild(p)), r = t(d, A), p.fake ? (p.parentNode.removeChild(p), g.style.overflow = c, g.offsetHeight) : d.parentNode.removeChild(d), !!r
    }

    function r(A, e) {
        if ("object" == typeof A)
            for (var t in A) B(A, t) && r(t, A[t]);
        else {
            var n = (A = A.toLowerCase()).split("."),
                l = y[n[0]];
            if (2 == n.length && (l = l[n[1]]), void 0 !== l) return y;
            e = "function" == typeof e ? e() : e, 1 == n.length ? y[n[0]] = e : (!y[n[0]] || y[n[0]] instanceof Boolean || (y[n[0]] = new Boolean(y[n[0]])), y[n[0]][n[1]] = e), o([(e && 0 != e ? "" : "no-") + n.join("-")]), y._trigger(A, e)
        }
        return y
    }

    function s(A, e) {
        return !!~("" + A).indexOf(e)
    }

    function c(A) {
        return A.replace(/([A-Z])/g, function(A, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function u(e, t, n) {
        var o;
        if ("getComputedStyle" in A) {
            o = getComputedStyle.call(A, e, t);
            var l = A.console;
            null !== o ? n && (o = o.getPropertyValue(n)) : l && l[l.error ? "error" : "log"].call(l, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
        } else o = !t && e.currentStyle && e.currentStyle[n];
        return o
    }

    function d(e, n) {
        var o = e.length;
        if ("CSS" in A && "supports" in A.CSS) {
            for (; o--;)
                if (A.CSS.supports(c(e[o]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in A) {
            for (var l = []; o--;) l.push("(" + c(e[o]) + ":" + n + ")");
            return l = l.join(" or "), a("@supports (" + l + ") { #modernizr { position: absolute; } }", function(A) {
                return "absolute" == u(A, null, "position")
            })
        }
        return t
    }

    function p(A) {
        return A.replace(/([a-z])-([a-z])/g, function(A, e, t) {
            return e + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function h(A, e, o, i) {
        function a() {
            c && (delete F.style, delete F.modElem)
        }
        if (i = !n(i, "undefined") && i, !n(o, "undefined")) {
            var r = d(A, o);
            if (!n(r, "undefined")) return r
        }
        for (var c, u, h, f, m, y = ["modernizr", "tspan", "samp"]; !F.style && y.length;) c = !0, F.modElem = l(y.shift()), F.style = F.modElem.style;
        for (h = A.length, u = 0; u < h; u++)
            if (f = A[u], m = F.style[f], s(f, "-") && (f = p(f)), F.style[f] !== t) {
                if (i || n(o, "undefined")) return a(), "pfx" != e || f;
                try {
                    F.style[f] = o
                } catch (A) {}
                if (F.style[f] != m) return a(), "pfx" != e || f
            }
        return a(), !1
    }
    var f = [],
        m = {
            _version: "3.5.0",
            _config: {
                classPrefix: "modernizr_",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(A, e) {
                var t = this;
                setTimeout(function() {
                    e(t[A])
                }, 0)
            },
            addTest: function(A, e, t) {
                f.push({
                    name: A,
                    fn: e,
                    options: t
                })
            },
            addAsyncTest: function(A) {
                f.push({
                    name: null,
                    fn: A
                })
            }
        },
        y = function() {};
    y.prototype = m, y = new y;
    var w = [],
        g = e.documentElement,
        R = "svg" === g.nodeName.toLowerCase(),
        E = m._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    m._prefixes = E;
    var B, T = m.testStyles = a;
    ! function() {
        var A = {}.hasOwnProperty;
        B = n(A, "undefined") || n(A.call, "undefined") ? function(A, e) {
            return e in A && n(A.constructor.prototype[e], "undefined")
        } : function(e, t) {
            return A.call(e, t)
        }
    }(), m._l = {}, m.on = function(A, e) {
        this._l[A] || (this._l[A] = []), this._l[A].push(e), y.hasOwnProperty(A) && setTimeout(function() {
            y._trigger(A, y[A])
        }, 0)
    }, m._trigger = function(A, e) {
        if (this._l[A]) {
            var t = this._l[A];
            setTimeout(function() {
                var A;
                for (A = 0; A < t.length; A++)(0, t[A])(e)
            }, 0), delete this._l[A]
        }
    }, y._q.push(function() {
        m.addTest = r
    });
    var v = {
        elem: l("modernizr")
    };
    y._q.push(function() {
        delete v.elem
    });
    var F = {
        style: v.elem.style
    };
    y._q.unshift(function() {
        delete F.style
    });
    m.testProp = function(A, e, n) {
        return h([A], t, e, n)
    };
    y.addTest("details", function() {
        var A, e = l("details");
        return "open" in e && (T("#modernizr details{display:block}", function(t) {
            t.appendChild(e), e.innerHTML = "<summary>a</summary>b", A = e.offsetHeight, e.open = !0, A = A != e.offsetHeight
        }), A)
    });
    var G = l("input"),
        C = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        Q = {};
    y.inputtypes = function(A) {
            for (var n, o, l, i = A.length, a = 0; a < i; a++) G.setAttribute("type", n = A[a]), (l = "text" !== G.type && "style" in G) && (G.value = "1)", G.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && G.style.WebkitAppearance !== t ? (g.appendChild(G), l = (o = e.defaultView).getComputedStyle && "textfield" !== o.getComputedStyle(G, null).WebkitAppearance && 0 !== G.offsetHeight, g.removeChild(G)) : /^(search|tel)$/.test(n) || (l = /^(url|email)$/.test(n) ? G.checkValidity && !1 === G.checkValidity() : "1)" != G.value)), Q[A[a]] = !!l;
            return Q
        }(C), y.addTest("touchevents", function() {
            var t;
            if ("ontouchstart" in A || A.DocumentTouch && e instanceof DocumentTouch) t = !0;
            else {
                var n = ["@media (", E.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                T(n, function(A) {
                    t = 9 === A.offsetTop
                })
            }
            return t
        }), y.addTest("video", function() {
            var A = l("video"),
                e = !1;
            try {
                (e = !!A.canPlayType) && ((e = new Boolean(e)).ogg = A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), e.vp9 = A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), e.hls = A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
            } catch (A) {}
            return e
        }), y.addAsyncTest(function() {
            function A(l) {
                o++, clearTimeout(e);
                var a = l && "playing" === l.type || 0 !== i.currentTime;
                !a && o < n ? e = setTimeout(A, t) : (i.removeEventListener("playing", A, !1), r("videoautoplay", a), i.parentNode && i.parentNode.removeChild(i))
            }
            var e, t = 200,
                n = 5,
                o = 0,
                i = l("video"),
                a = i.style;
            if (y.video && "autoplay" in i) {
                a.position = "absolute", a.height = 0, a.width = 0;
                try {
                    if (y.video.ogg) i.src = "data:video/ogg;base64,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";
                    else {
                        if (!y.video.h264) return void r("videoautoplay", !1);
                        i.src = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
                    }
                } catch (A) {
                    return void r("videoautoplay", !1)
                }
                i.setAttribute("autoplay", ""), i.style.cssText = "display:none", g.appendChild(i), setTimeout(function() {
                    i.addEventListener("playing", A, !1), e = setTimeout(A, t)
                }, 0)
            } else r("videoautoplay", !1)
        }),
        function() {
            var A, e, t, o, l, i;
            for (var a in f)
                if (f.hasOwnProperty(a)) {
                    if (A = [], (e = f[a]).name && (A.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                        for (t = 0; t < e.options.aliases.length; t++) A.push(e.options.aliases[t].toLowerCase());
                    for (o = n(e.fn, "function") ? e.fn() : e.fn, l = 0; l < A.length; l++) 1 === (i = A[l].split(".")).length ? y[i[0]] = o : (!y[i[0]] || y[i[0]] instanceof Boolean || (y[i[0]] = new Boolean(y[i[0]])), y[i[0]][i[1]] = o), w.push((o ? "" : "no-") + i.join("-"))
                }
        }(), o(w), delete m.addTest, delete m.addAsyncTest;
    for (var Z = 0; Z < y._q.length; Z++) y._q[Z]();
    A.Modernizr = y
}(window, document);