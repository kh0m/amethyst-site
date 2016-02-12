﻿/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.9 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */

/*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/**
 * Adapted from the official plugin text.js
 *
 * Uses UnderscoreJS micro-templates : http://documentcloud.github.com/underscore/#template
 * @author Julien CabanÃ¨s <julien@zeeagency.com>
 * @version 0.2
 *
 * @license RequireJS text 0.24.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/*
 * rwdImageMaps jQuery plugin v1.5
 *
 * Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
 *
 * Copyright (c) 2013 Matt Stow
 * https://github.com/stowball/jQuery-rwdImageMaps
 * http://mattstow.com
 * Licensed under the MIT license
 *
 *
 * Modifed 5/15/2014
 * Chris Couchoud chris@southeriverstudios.com
 *
 * Simplified implementaiton so it could be used as a utility
 *
 */

/*
 * jPlayer Plugin for jQuery JavaScript Library
 * http://www.jplayer.org
 *
 * Copyright (c) 2009 - 2014 Happyworm Ltd
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 *
 * Author: Mark J Panaghiston
 * Version: 2.6.1
 * Date: 3rd April 2014
 */

/**
 * interact.js v1.0.6
 *
 * Copyright (c) 2012, 2013, 2014 Taye Adeyemi <dev@taye.me>
 * Open source under the MIT License.
 * https://raw.github.com/taye/interact.js/master/LICENSE
 */

/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.2
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*! Respond.js v1.4.0: min/max-width media query polyfill. (c) Scott Jehl. MIT Lic. j.mp/respondjs  */

function FastClick(e, t) {
    function r(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }
    var n;
    t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = e, this.tapDelay = t.tapDelay || 200;
    if (FastClick.notNeeded(e)) return;
    var i = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"],
        s = this;
    for (var o = 0, u = i.length; o < u; o++) s[i[o]] = r(s[i[o]], s);
    deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, r) {
        var i = Node.prototype.removeEventListener;
        t === "click" ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
    }, e.addEventListener = function (t, n, r) {
        var i = Node.prototype.addEventListener;
        t === "click" ? i.call(e, t, n.hijacked || (n.hijacked = function (e) {
            e.propagationStopped || n(e)
        }), r) : i.call(e, t, n, r)
    }), typeof e.onclick == "function" && (n = e.onclick, e.addEventListener("click", function (e) {
        n(e)
    }, !1), e.onclick = null)
}
var requirejs, require, define;
(function (global) {
    function isFunction(e) {
        return ostring.call(e) === "[object Function]"
    }

    function isArray(e) {
        return ostring.call(e) === "[object Array]"
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length; n += 1)
                if (e[n] && t(e[n], n, e)) break
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1; n -= 1)
                if (e[n] && t(e[n], n, e)) break
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }

    function eachProp(e, t) {
        var n;
        for (n in e)
            if (hasProp(e, n) && t(e[n], n)) break
    }

    function mixin(e, t, n, r) {
        return t && eachProp(t, function (t, i) {
            if (n || !hasProp(e, i)) r && typeof t != "string" ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t
        }), e
    }

    function bind(e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(e) {
        throw e
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function (e) {
            t = t[e]
        }), t
    }

    function makeError(e, t, n, r) {
        var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
    }

    function newContext(e) {
        function v(e) {
            var t, n;
            for (t = 0; e[t]; t += 1) {
                n = e[t];
                if (n === ".") e.splice(t, 1), t -= 1;
                else if (n === "..") {
                    if (t === 1 && (e[2] === ".." || e[0] === "..")) break;
                    t > 0 && (e.splice(t - 1, 2), t -= 2)
                }
            }
        }

        function m(e, t, n) {
            var r, i, s, u, a, f, l, c, h, p, d, m = t && t.split("/"),
                g = m,
                y = o.map,
                b = y && y["*"];
            e && e.charAt(0) === "." && (t ? (getOwn(o.pkgs, t) ? g = m = [t] : g = m.slice(0, m.length - 1), e = g.concat(e.split("/")), v(e), i = getOwn(o.pkgs, r = e[0]), e = e.join("/"), i && e === r + "/" + i.main && (e = r)) : e.indexOf("./") === 0 && (e = e.substring(2)));
            if (n && y && (m || b)) {
                u = e.split("/");
                for (a = u.length; a > 0; a -= 1) {
                    l = u.slice(0, a).join("/");
                    if (m)
                        for (f = m.length; f > 0; f -= 1) {
                            s = getOwn(y, m.slice(0, f).join("/"));
                            if (s) {
                                s = getOwn(s, l);
                                if (s) {
                                    c = s, h = a;
                                    break
                                }
                            }
                        }
                    if (c) break;
                    !p && b && getOwn(b, l) && (p = getOwn(b, l), d = a)
                } !c && p && (c = p, h = d), c && (u.splice(0, h, c), e = u.join("/"))
            }
            return e
        }

        function g(e) {
            isBrowser && each(scripts(), function (t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === r.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function y(e) {
            var t = getOwn(o.paths, e);
            if (t && isArray(t) && t.length > 1) return t.shift(), r.require.undef(e), r.require([e]), !0
        }

        function b(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function w(e, t, n, i) {
            var s, o, u, a, f = null,
                l = t ? t.name : null,
                h = e,
                v = !0,
                g = "";
            return e || (v = !1, e = "_@r" + (p += 1)), a = b(e), f = a[0], e = a[1], f && (f = m(f, l, i), o = getOwn(c, f)), e && (f ? o && o.normalize ? g = o.normalize(e, function (e) {
                return m(e, l, i)
            }) : g = m(e, l, i) : (g = m(e, l, i), a = b(g), f = a[0], g = a[1], n = !0, s = r.nameToUrl(g))), u = f && !o && !n ? "_unnormalized" + (d += 1) : "", {
                prefix: f,
                name: g,
                parentMap: t,
                unnormalized: !!u,
                url: s,
                originalName: h,
                isDefine: v,
                id: (f ? f + "!" + g : g) + u
            }
        }

        function E(e) {
            var t = e.id,
                n = getOwn(u, t);
            return n || (n = u[t] = new r.Module(e)), n
        }

        function S(e, t, n) {
            var r = e.id,
                i = getOwn(u, r);
            hasProp(c, r) && (!i || i.defineEmitComplete) ? t === "defined" && n(c[r]) : (i = E(e), i.error && t === "error" ? n(i.error) : i.on(t, n))
        }

        function x(e, t) {
            var n = e.requireModules,
                r = !1;
            t ? t(e) : (each(n, function (t) {
                var n = getOwn(u, t);
                n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
            }), r || req.onError(e))
        }

        function T() {
            globalDefQueue.length && (apsp.apply(l, [l.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function N(e) {
            delete u[e], delete a[e]
        }

        function C(e, t, n) {
            var r = e.map.id;
            e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function (r, i) {
                var s = r.id,
                    o = getOwn(u, s);
                o && !e.depMatched[i] && !n[s] && (getOwn(t, s) ? (e.defineDep(i, c[s]), e.check()) : C(o, t, n))
            }), n[r] = !0)
        }

        function k() {
            var e, n, i, u, f = o.waitSeconds * 1e3,
                l = f && r.startTime + f < (new Date).getTime(),
                c = [],
                h = [],
                p = !1,
                d = !0;
            if (t) return;
            t = !0, eachProp(a, function (t) {
                e = t.map, n = e.id;
                if (!t.enabled) return;
                e.isDefine || h.push(t);
                if (!t.error)
                    if (!t.inited && l) y(n) ? (u = !0, p = !0) : (c.push(n), g(n));
                    else if (!t.inited && t.fetched && e.isDefine) {
                        p = !0;
                        if (!e.prefix) return d = !1
                    }
            });
            if (l && c.length) return i = makeError("timeout", "Load timeout for modules: " + c, null, c), i.contextName = r.contextName, x(i);
            d && each(h, function (e) {
                C(e, {}, {})
            }), (!l || u) && p && (isBrowser || isWebWorker) && !s && (s = setTimeout(function () {
                s = 0, k()
            }, 50)), t = !1
        }

        function L(e) {
            hasProp(c, e[0]) || E(w(e[0], null, !0)).init(e[1], e[2])
        }

        function A(e, t, n, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
        }

        function O(e) {
            var t = e.currentTarget || e.srcElement;
            return A(t, r.onScriptLoad, "load", "onreadystatechange"), A(t, r.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        function M() {
            var e;
            T();
            while (l.length) {
                e = l.shift();
                if (e[0] === null) return x(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                L(e)
            }
        }
        var t, n, r, i, s, o = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            pkgs: {},
            shim: {},
            config: {}
        }, u = {}, a = {}, f = {}, l = [],
            c = {}, h = {}, p = 1,
            d = 1;
        return i = {
            require: function (e) {
                return e.require ? e.require : e.require = r.makeRequire(e.map)
            },
            exports: function (e) {
                e.usingExports = !0;
                if (e.map.isDefine) return e.exports ? e.exports : e.exports = c[e.map.id] = {}
            },
            module: function (e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function () {
                        var t, n = getOwn(o.pkgs, e.map.id);
                        return t = n ? getOwn(o.config, e.map.id + "/" + n.main) : getOwn(o.config, e.map.id), t || {}
                    },
                    exports: c[e.map.id]
                }
            }
        }, n = function (e) {
            this.events = getOwn(f, e.id) || {}, this.map = e, this.shim = getOwn(o.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, n.prototype = {
            init: function (e, t, n, r) {
                r = r || {};
                if (this.inited) return;
                this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function (e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check()
            },
            defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function () {
                if (this.fetched) return;
                this.fetched = !0, r.startTime = (new Date).getTime();
                var e = this.map;
                if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                r.makeRequire(this.map, {
                    enableBuildCallback: !0
                })(this.shim.deps || [], bind(this, function () {
                    return e.prefix ? this.callPlugin() : this.load()
                }))
            },
            load: function () {
                var e = this.map.url;
                h[e] || (h[e] = !0, r.load(this.map.id, e))
            },
            check: function () {
                if (!this.enabled || this.enabling) return;
                var e, t, n = this.map.id,
                    i = this.depExports,
                    s = this.exports,
                    o = this.factory;
                if (!this.inited) this.fetch();
                else if (this.error) this.emit("error", this.error);
                else if (!this.defining) {
                    this.defining = !0;
                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(o)) {
                            if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                s = r.execCb(n, o, i, s)
                            } catch (u) {
                                e = u
                            } else s = r.execCb(n, o, i, s);
                            this.map.isDefine && (t = this.module, t && t.exports !== undefined && t.exports !== this.exports ? s = t.exports : s === undefined && this.usingExports && (s = this.exports));
                            if (e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", x(this.error = e)
                        } else s = o;
                        this.exports = s, this.map.isDefine && !this.ignore && (c[n] = s, req.onResourceLoad && req.onResourceLoad(r, this.map, this.depMaps)), N(n), this.defined = !0
                    }
                    this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                }
            },
            callPlugin: function () {
                var e = this.map,
                    t = e.id,
                    n = w(e.prefix);
                this.depMaps.push(n), S(n, "defined", bind(this, function (n) {
                    var i, s, a, f = this.map.name,
                        l = this.map.parentMap ? this.map.parentMap.name : null,
                        c = r.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                    if (this.map.unnormalized) {
                        n.normalize && (f = n.normalize(f, function (e) {
                            return m(e, l, !0)
                        }) || ""), s = w(e.prefix + "!" + f, this.map.parentMap), S(s, "defined", bind(this, function (e) {
                            this.init([], function () {
                                return e
                            }, null, {
                                enabled: !0,
                                ignore: !0
                            })
                        })), a = getOwn(u, s.id), a && (this.depMaps.push(s), this.events.error && a.on("error", bind(this, function (e) {
                            this.emit("error", e)
                        })), a.enable());
                        return
                    }
                    i = bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    }), i.error = bind(this, function (e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(u, function (e) {
                            e.map.id.indexOf(t + "_unnormalized") === 0 && N(e.map.id)
                        }), x(e)
                    }), i.fromText = bind(this, function (n, s) {
                        var u = e.name,
                            a = w(u),
                            f = useInteractive;
                        s && (n = s), f && (useInteractive = !1), E(a), hasProp(o.config, t) && (o.config[u] = o.config[t]);
                        try {
                            req.exec(n)
                        } catch (l) {
                            return x(makeError("fromtexteval", "fromText eval for " + t + " failed: " + l, l, [t]))
                        }
                        f && (useInteractive = !0), this.depMaps.push(a), r.completeLoad(u), c([u], i)
                    }), n.load(e.name, c, i, o)
                })), r.enable(n, this), this.pluginMaps[n.id] = n
            },
            enable: function () {
                a[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function (e, t) {
                    var n, s, o;
                    if (typeof e == "string") {
                        e = w(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, o = getOwn(i, e.id);
                        if (o) {
                            this.depExports[t] = o(this);
                            return
                        }
                        this.depCount += 1, S(e, "defined", bind(this, function (e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && S(e, "error", bind(this, this.errback))
                    }
                    n = e.id, s = u[n], !hasProp(i, n) && s && !s.enabled && r.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function (e) {
                    var t = getOwn(u, e.id);
                    t && !t.enabled && r.enable(e, this)
                })), this.enabling = !1, this.check()
            },
            on: function (e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            },
            emit: function (e, t) {
                each(this.events[e], function (e) {
                    e(t)
                }), e === "error" && delete this.events[e]
            }
        }, r = {
            config: o,
            contextName: e,
            registry: u,
            defined: c,
            urlFetched: h,
            defQueue: l,
            Module: n,
            makeModuleMap: w,
            nextTick: req.nextTick,
            onError: x,
            configure: function (e) {
                e.baseUrl && e.baseUrl.charAt(e.baseUrl.length - 1) !== "/" && (e.baseUrl += "/");
                var t = o.pkgs,
                    n = o.shim,
                    i = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(e, function (e, t) {
                    i[t] ? t === "map" ? (o.map || (o.map = {}), mixin(o[t], e, !0, !0)) : mixin(o[t], e, !0) : o[t] = e
                }), e.shim && (eachProp(e.shim, function (e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }), (e.exports || e.init) && !e.exportsFn && (e.exportsFn = r.makeShimExports(e)), n[t] = e
                }), o.shim = n), e.packages && (each(e.packages, function (e) {
                    var n;
                    e = typeof e == "string" ? {
                        name: e
                    } : e, n = e.location, t[e.name] = {
                        name: e.name,
                        location: n || e.name,
                        main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), o.pkgs = t), eachProp(u, function (e, t) {
                    !e.inited && !e.map.unnormalized && (e.map = w(t))
                }), (e.deps || e.callback) && r.require(e.deps || [], e.callback)
            },
            makeShimExports: function (e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function (t, n) {
                function s(o, a, f) {
                    var l, h, p;
                    return n.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0), typeof o == "string" ? isFunction(a) ? x(makeError("requireargs", "Invalid require call"), f) : t && hasProp(i, o) ? i[o](u[t.id]) : req.get ? req.get(r, o, t, s) : (h = w(o, t, !1, !0), l = h.id, hasProp(c, l) ? c[l] : x(makeError("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (M(), r.nextTick(function () {
                        M(), p = E(w(null, t)), p.skipMap = n.skipMap, p.init(o, a, f, {
                            enabled: !0
                        }), k()
                    }), s)
                }
                return n = n || {}, mixin(s, {
                    isBrowser: isBrowser,
                    toUrl: function (e) {
                        var n, i = e.lastIndexOf("."),
                            s = e.split("/")[0],
                            o = s === "." || s === "..";
                        return i !== -1 && (!o || i > 1) && (n = e.substring(i, e.length), e = e.substring(0, i)), r.nameToUrl(m(e, t && t.id, !0), n, !0)
                    },
                    defined: function (e) {
                        return hasProp(c, w(e, t, !1, !0).id)
                    },
                    specified: function (e) {
                        return e = w(e, t, !1, !0).id, hasProp(c, e) || hasProp(u, e)
                    }
                }), t || (s.undef = function (e) {
                    T();
                    var n = w(e, t, !0),
                        r = getOwn(u, e);
                    g(e), delete c[e], delete h[n.url], delete f[e], r && (r.events.defined && (f[e] = r.events), N(e))
                }), s
            },
            enable: function (e) {
                var t = getOwn(u, e.id);
                t && E(e).enable()
            },
            completeLoad: function (e) {
                var t, n, r, i = getOwn(o.shim, e) || {}, s = i.exports;
                T();
                while (l.length) {
                    n = l.shift();
                    if (n[0] === null) {
                        n[0] = e;
                        if (t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    L(n)
                }
                r = getOwn(u, e);
                if (!t && !hasProp(c, e) && r && !r.inited) {
                    if (o.enforceDefine && (!s || !getGlobal(s))) {
                        if (y(e)) return;
                        return x(makeError("nodefine", "No define call for " + e, null, [e]))
                    }
                    L([e, i.deps || [], i.exportsFn])
                }
                k()
            },
            nameToUrl: function (e, t, n) {
                var r, i, s, u, a, f, l, c, h;
                if (req.jsExtRegExp.test(e)) c = e + (t || "");
                else {
                    r = o.paths, i = o.pkgs, a = e.split("/");
                    for (f = a.length; f > 0; f -= 1) {
                        l = a.slice(0, f).join("/"), s = getOwn(i, l), h = getOwn(r, l);
                        if (h) {
                            isArray(h) && (h = h[0]), a.splice(0, f, h);
                            break
                        }
                        if (s) {
                            e === s.name ? u = s.location + "/" + s.main : u = s.location, a.splice(0, f, u);
                            break
                        }
                    }
                    c = a.join("/"), c += t || (/^data\:|\?/.test(c) || n ? "" : ".js"), c = (c.charAt(0) === "/" || c.match(/^[\w\+\.\-]+:/) ? "" : o.baseUrl) + c
                }
                return o.urlArgs ? c + ((c.indexOf("?") === -1 ? "?" : "&") + o.urlArgs) : c
            },
            load: function (e, t) {
                req.load(r, e, t)
            },
            execCb: function (e, t, n, r) {
                return t.apply(r, n)
            },
            onScriptLoad: function (e) {
                if (e.type === "load" || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = O(e);
                    r.completeLoad(t.id)
                }
            },
            onScriptError: function (e) {
                var t = O(e);
                if (!y(t.id)) return x(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        }, r.require = r.makeRequire(), r
    }

    function getInteractiveScript() {
        return interactiveScript && interactiveScript.readyState === "interactive" ? interactiveScript : (eachReverse(scripts(), function (e) {
            if (e.readyState === "interactive") return interactiveScript = e
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.9",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = typeof window != "undefined" && typeof navigator != "undefined" && !!window.document,
        isWebWorker = !isBrowser && typeof importScripts != "undefined",
        readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = typeof opera != "undefined" && opera.toString() === "[object Opera]",
        contexts = {}, cfg = {}, globalDefQueue = [],
        useInteractive = !1;
    if (typeof define != "undefined") return;
    if (typeof requirejs != "undefined") {
        if (isFunction(requirejs)) return;
        cfg = requirejs, requirejs = undefined
    }
    typeof require != "undefined" && !isFunction(require) && (cfg = require, require = undefined), req = requirejs = function (e, t, n, r) {
        var i, s, o = defContextName;
        return !isArray(e) && typeof e != "string" && (s = e, isArray(t) ? (e = t, t = n, n = r) : e = []), s && s.context && (o = s.context), i = getOwn(contexts, o), i || (i = contexts[o] = req.s.newContext(o)), s && i.configure(s), i.require(e, t, n)
    }, req.config = function (e) {
        return req(e)
    }, req.nextTick = typeof setTimeout != "undefined" ? function (e) {
        setTimeout(e, 4)
    } : function (e) {
        e()
    }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
        contexts: contexts,
        newContext: newContext
    }, req({}), each(["toUrl", "undef", "defined", "specified"], function (e) {
        req[e] = function () {
            var t = contexts[defContextName];
            return t.require[e].apply(t, arguments)
        }
    }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function (e, t, n) {
        var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
        return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
    }, req.load = function (e, t, n) {
        var r = e && e.config || {}, i;
        if (isBrowser) return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), i.attachEvent && !(i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0) && !isOpera ? (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)) : (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
        if (isWebWorker) try {
            importScripts(n), e.completeLoad(t)
        } catch (s) {
            e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, s, [t]))
        }
    }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function (e) {
        head || (head = e.parentNode), dataMain = e.getAttribute("data-main");
        if (dataMain) return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
    }), define = function (e, t, n) {
        var r, i;
        typeof e != "string" && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, n) {
            t.push(n)
        }), t = (n.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([e, t, n])
    }, define.amd = {
        jQuery: !0
    }, req.exec = function (text) {
        return eval(text)
    }, req(cfg)
})(this), define("../bower_components/requirejs/require.js", function () { }),
function (e, t) {
    function H(e) {
        var t = e.length,
            n = w.type(e);
        return w.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function j(e) {
        var t = B[e] = {};
        return w.each(e.match(S) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function q(e, n, r, i) {
        if (!w.acceptData(e)) return;
        var s, o, u = w.expando,
            a = e.nodeType,
            f = a ? w.cache : e,
            l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === t && typeof n == "string") return;
        l || (a ? l = e[u] = c.pop() || w.guid++ : l = u), f[l] || (f[l] = a ? {} : {
            toJSON: w.noop
        });
        if (typeof n == "object" || typeof n == "function") i ? f[l] = w.extend(f[l], n) : f[l].data = w.extend(f[l].data, n);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[w.camelCase(n)] = r), typeof n == "string" ? (s = o[n], s == null && (s = o[w.camelCase(n)])) : s = o, s
    }

    function R(e, t, n) {
        if (!w.acceptData(e)) return;
        var r, i, s = e.nodeType,
            o = s ? w.cache : e,
            u = s ? e[w.expando] : w.expando;
        if (!o[u]) return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                w.isArray(t) ? t = t.concat(w.map(t, w.camelCase)) : t in r ? t = [t] : (t = w.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !z(r) : !w.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!z(o[u])) return
        }
        s ? w.cleanData([e], !0) : w.support.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function U(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(I, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : F.test(r) ? w.parseJSON(r) : r
                } catch (s) { }
                w.data(e, n, r)
            } else r = t
        }
        return r
    }

    function z(e) {
        var t;
        for (t in e) {
            if (t === "data" && w.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ot() {
        try {
            return o.activeElement
        } catch (e) { }
    }

    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ht(e, t, n) {
        if (w.isFunction(t)) return w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return w.grep(e, function (e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (ut.test(t)) return w.filter(t, e, n);
            t = w.filter(t, e)
        }
        return w.grep(e, function (e) {
            return w.inArray(e, t) >= 0 !== n
        })
    }

    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _t(e) {
        return e.type = (w.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) w._data(n, "globalEval", !t || w._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !w.hasData(e)) return;
        var n, r, i, s = w._data(e),
            o = w._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) w.event.add(t, n, u[n][r])
        }
        o.data && (o.data = w.extend({}, o.data))
    }

    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!w.support.noCloneEvent && t[w.expando]) {
            i = w._data(t);
            for (r in i.events) w.removeEvent(t, r, i.handle);
            t.removeAttribute(w.expando)
        }
        if (n === "script" && t.text !== e.text) _t(t).text = e.text, Dt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), w.support.html5Clone && e.innerHTML && !w.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e;
                (s = r[o]) != null; o++) !n || w.nodeName(s, n) ? u.push(s) : w.merge(u, jt(s, n));
        return n === t || n && w.nodeName(e, n) ? w.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) {
            t = en[i] + n;
            if (t in e) return t
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = w._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = w._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && w._data(r, "olddisplay", i ? n : w.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += w.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= w.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= w.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += w.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += w.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = w.support.boxSizing && w.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Jt.test(i)) return i;
            r = o && (w.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = o,
            n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n) It = (It || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }

    function fn(e, t) {
        var n = w(t.createElement(e)).appendTo(t.body),
            r = w.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (w.isArray(t)) w.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && w.type(t) === "object")
            for (i in t) vn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function _n(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(S) || [];
            if (w.isFunction(n))
                while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, w.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {}, s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Pn(e, n) {
        var r, i, s = w.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && w.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes;
        while (f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function Bn(e, t, n, r) {
        var i, s, o, u, a, f = {}, l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*") s = a;
                else if (a !== "*" && a !== s) {
                    o = f[a + " " + s] || f["* " + s];
                    if (!o)
                        for (i in f) {
                            u = i.split(" ");
                            if (u[1] === s) {
                                o = f[a + " " + u[0]] || f["* " + u[0]];
                                if (o) {
                                    o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                    break
                                }
                            }
                        }
                    if (o !== !0)
                        if (o && e["throws"]) t = o(t);
                        else try {
                            t = o(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: o ? c : "No conversion from " + a + " to " + s
                            }
                        }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) { }
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }

    function Yn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = w.now()
    }

    function Zn(e, t, n) {
        var r, i = (Gn[t] || []).concat(Gn["*"]),
            s = 0,
            o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = w.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return w.map(l, Zn, f), w.isFunction(f.opts.start) && f.opts.start.call(e, f), w.fx.timer(w.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = w.camelCase(n), i = t[r], s = e[n], w.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = w.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f = this,
            l = {}, c = e.style,
            h = e.nodeType && nn(e),
            p = w._data(e, "fxshow");
        n.queue || (u = w._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function () {
            u.unqueued || a()
        }), u.unqueued++, f.always(function () {
            f.always(function () {
                u.unqueued--, w.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], w.css(e, "display") === "inline" && w.css(e, "float") === "none" && (!w.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? c.display = "inline-block" : c.zoom = 1)), n.overflow && (c.overflow = "hidden", w.support.shrinkWrapBlocks || f.always(function () {
            c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if ($n.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (h ? "hide" : "show")) continue;
                l[r] = p && p[r] || w.style(e, r)
            }
        }
        if (!w.isEmptyObject(l)) {
            p ? "hidden" in p && (h = p.hidden) : p = w._data(e, "fxshow", {}), s && (p.hidden = !h), h ? w(e).show() : f.done(function () {
                w(e).hide()
            }), f.done(function () {
                var t;
                w._removeData(e, "fxshow");
                for (t in l) w.style(e, t, l[t])
            });
            for (r in l) o = Zn(h ? p[r] : 0, r, f), r in p || (p[r] = o.start, h && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.location,
        o = e.document,
        u = o.documentElement,
        a = e.jQuery,
        f = e.$,
        l = {}, c = [],
        h = "1.10.2",
        p = c.concat,
        d = c.push,
        v = c.slice,
        m = c.indexOf,
        g = l.toString,
        y = l.hasOwnProperty,
        b = h.trim,
        w = function (e, t) {
            return new w.fn.init(e, t, r)
        }, E = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        S = /\S+/g,
        x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g,
        L = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        O = /^-ms-/,
        M = /-([\da-z])/gi,
        _ = function (e, t) {
            return t.toUpperCase()
        }, D = function (e) {
            if (o.addEventListener || e.type === "load" || o.readyState === "complete") P(), w.ready()
        }, P = function () {
            o.addEventListener ? (o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D))
        };
    w.fn = w.prototype = {
        jquery: h,
        constructor: w,
        init: function (e, n, r) {
            var i, s;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = T.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof w ? n[0] : n, w.merge(this, w.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0));
                        if (N.test(i[1]) && w.isPlainObject(n))
                            for (i in n) w.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    s = o.getElementById(i[2]);
                    if (s && s.parentNode) {
                        if (s.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = o, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return v.call(this)
        },
        get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return w.each(this, e, t)
        },
        ready: function (e) {
            return w.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(v.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    }, w.fn.init.prototype = w.fn, w.extend = w.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !w.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((s = arguments[a]) != null)
                for (i in s) {
                    e = u[i], r = s[i];
                    if (u === r) continue;
                    l && r && (w.isPlainObject(r) || (n = w.isArray(r))) ? (n ? (n = !1, o = e && w.isArray(e) ? e : []) : o = e && w.isPlainObject(e) ? e : {}, u[i] = w.extend(l, o, r)) : r !== t && (u[i] = r)
                }
        return u
    }, w.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        noConflict: function (t) {
            return e.$ === w && (e.$ = f), t && e.jQuery === w && (e.jQuery = a), w
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? w.readyWait++ : w.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? --w.readyWait : w.isReady) return;
            if (!o.body) return setTimeout(w.ready);
            w.isReady = !0;
            if (e !== !0 && --w.readyWait > 0) return;
            n.resolveWith(o, [w]), w.fn.trigger && w(o).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return w.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return w.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? l[g.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            var n;
            if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (r) {
                return !1
            }
            if (w.support.ownLast)
                for (n in e) return y.call(e, n);
            for (n in e);
            return n === t || y.call(e, n)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || o;
            var r = N.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w.buildFragment([e], t, i), i && w(i).remove(), w.merge([], r.childNodes))
        },
        parseJSON: function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = w.trim(t);
                if (t && C.test(t.replace(L, "@").replace(A, "]").replace(k, ""))) return (new Function("return " + t))()
            }
            w.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && w.error("Invalid XML: " + n), r
        },
        noop: function () { },
        globalEval: function (t) {
            t && w.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(O, "ms-").replace(M, _)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = H(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                    for (i in e) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else if (o)
                        for (; i < s; i++) {
                            r = t.call(e[i], i, e[i]);
                            if (r === !1) break
                        } else
                        for (i in e) {
                            r = t.call(e[i], i, e[i]);
                            if (r === !1) break
                        }
            return e
        },
        trim: b && !b.call("ï»¿Â ") ? function (e) {
            return e == null ? "" : b.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(x, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return e != null && (H(Object(e)) ? w.merge(n, typeof e == "string" ? [e] : e) : d.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (m) return m.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = H(e),
                u = [];
            if (o)
                for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return p.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), w.isFunction(e) ? (r = v.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(v.call(arguments)))
            }, i.guid = e.guid = e.guid || w.guid++, i) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = r == null;
            if (w.type(r) === "object") {
                s = !0;
                for (a in r) w.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, w.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                    return l.call(w(e), n)
                }));
                if (n)
                    for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        },
        swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), w.ready.promise = function (t) {
        if (!n) {
            n = w.Deferred();
            if (o.readyState === "complete") setTimeout(w.ready);
            else if (o.addEventListener) o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
            else {
                o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var r = !1;
                try {
                    r = e.frameElement == null && o.documentElement
                } catch (i) { }
                r && r.doScroll && function s() {
                    if (!w.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(s, 50)
                        }
                        P(), w.ready()
                    }
                }()
            }
        }
        return n.promise(t)
    }, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }), r = w(o),
    function (e, t) {
        function ot(e, t, n, i) {
            var s, o, u, a, f, l, p, m, g, w;
            (t ? t.ownerDocument || t : E) !== h && c(t), t = t || h, n = n || [];
            if (!e || typeof e != "string") return n;
            if ((a = t.nodeType) !== 1 && a !== 9) return [];
            if (d && !i) {
                if (s = Z.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode) return n;
                            if (o.id === u) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && y(t, o) && o.id === u) return n.push(o), n
                    } else {
                        if (s[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                        if ((u = s[3]) && r.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(u)), n
                    }
                if (r.qsa && (!v || !v.test(e))) {
                    m = p = b, g = t, w = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        l = mt(e), (p = t.getAttribute("id")) ? m = p.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = l.length;
                        while (f--) l[f] = m + gt(l[f]);
                        g = $.test(e) && t.parentNode || t, w = l.join(",")
                    }
                    if (w) try {
                        return H.apply(n, g.querySelectorAll(w)), n
                    } catch (S) { } finally {
                        p || t.removeAttribute("id")
                    }
                }
            }
            return Nt(e.replace(W, "$1"), t, n, i)
        }

        function ut() {
            function t(n, r) {
                return e.push(n += " ") > s.cacheLength && delete t[e.shift()], t[n] = r
            }
            var e = [];
            return t
        }

        function at(e) {
            return e[b] = !0, e
        }

        function ft(e) {
            var t = h.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"),
                r = e.length;
            while (r--) s.attrHandle[n[r]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || O) - (~e.sourceIndex || O);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt() { }

        function mt(e, t) {
            var n, r, i, o, u, a, f, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = s.preFilter;
            while (u) {
                if (!n || (r = X.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(i = []);
                n = !1;
                if (r = V.exec(u)) n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), u = u.slice(n.length);
                for (o in s.filter) (r = G[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }

        function gt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir,
                s = n && r === "parentNode",
                o = x++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (t.nodeType === 1 || s) return e(t, n, i)
            } : function (t, n, u) {
                var a, f, l, c = S + " " + o;
                if (u) {
                    while (t = t[r])
                        if (t.nodeType === 1 || s)
                            if (e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || s) {
                            l = t[b] || (t[b] = {});
                            if ((f = l[r]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === i) return a === !0
                            } else {
                                f = l[r] = [c], f[1] = e(t, n, u) || i;
                                if (f[1] === !0) return !0
                            }
                        }
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function Et(e, t, n, r, i, s) {
            return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, s)), at(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || Tt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? wt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = wt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--) (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--) (c = g[l]) && (f = i ? j.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : H.apply(o, g)
            })
        }

        function St(e) {
            var t, n, r, i = e.length,
                o = s.relative[e[0].type],
                u = o || s.relative[" "],
                a = o ? 1 : 0,
                l = yt(function (e) {
                    return e === t
                }, u, !0),
                c = yt(function (e) {
                    return j.call(t, e) > -1
                }, u, !0),
                h = [
                    function (e, n, r) {
                        return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }
                ];
            for (; a < i; a++)
                if (n = s.relative[e[a].type]) h = [yt(bt(h), n)];
                else {
                    n = s.filter[e[a].type].apply(null, e[a].matches);
                    if (n[b]) {
                        r = ++a;
                        for (; r < i; r++)
                            if (s.relative[e[r].type]) break;
                        return Et(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                            value: e[a - 2].type === " " ? "*" : ""
                        })).replace(W, "$1"), n, a < r && St(e.slice(a, r)), r < i && St(e = e.slice(r)), r < i && gt(e))
                    }
                    h.push(n)
                }
            return bt(h)
        }

        function xt(e, t) {
            var n = 0,
                r = t.length > 0,
                o = e.length > 0,
                u = function (u, a, l, c, p) {
                    var d, v, m, g = [],
                        y = 0,
                        b = "0",
                        w = u && [],
                        E = p != null,
                        x = f,
                        T = u || o && s.find.TAG("*", p && a.parentNode || a),
                        N = S += x == null ? 1 : Math.random() || .1;
                    E && (f = a !== h && a, i = n);
                    for (;
                        (d = T[b]) != null; b++) {
                        if (o && d) {
                            v = 0;
                            while (m = e[v++])
                                if (m(d, a, l)) {
                                    c.push(d);
                                    break
                                }
                            E && (S = N, i = ++n)
                        }
                        r && ((d = !m && d) && y--, u && w.push(d))
                    }
                    y += b;
                    if (r && b !== y) {
                        v = 0;
                        while (m = t[v++]) m(w, g, a, l);
                        if (u) {
                            if (y > 0)
                                while (b--) !w[b] && !g[b] && (g[b] = D.call(c));
                            g = wt(g)
                        }
                        H.apply(c, g), E && !u && g.length > 0 && y + t.length > 1 && ot.uniqueSort(c)
                    }
                    return E && (S = N, f = x), w
                };
            return r ? at(u) : u
        }

        function Tt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) ot(e, t[r], n);
            return n
        }

        function Nt(e, t, n, i) {
            var o, u, f, l, c, h = mt(e);
            if (!i && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && r.getById && t.nodeType === 9 && d && s.relative[u[1].type]) {
                    t = (s.find.ID(f.matches[0].replace(rt, it), t) || [])[0];
                    if (!t) return n;
                    e = e.slice(u.shift().value.length)
                }
                o = G.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    f = u[o];
                    if (s.relative[l = f.type]) break;
                    if (c = s.find[l])
                        if (i = c(f.matches[0].replace(rt, it), $.test(u[0].type) && t.parentNode || t)) {
                            u.splice(o, 1), e = i.length && gt(u);
                            if (!e) return H.apply(n, i), n;
                            break
                        }
                }
            }
            return a(e, h)(i, t, !d, n, $.test(e)), n
        }
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b = "sizzle" + -(new Date),
            E = e.document,
            S = 0,
            x = 0,
            T = ut(),
            N = ut(),
            C = ut(),
            k = !1,
            L = function (e, t) {
                return e === t ? (k = !0, 0) : 0
            }, A = typeof t,
            O = 1 << 31,
            M = {}.hasOwnProperty,
            _ = [],
            D = _.pop,
            P = _.push,
            H = _.push,
            B = _.slice,
            j = _.indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            }, F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = q.replace("w", "w#"),
            U = "\\[" + I + "*(" + q + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + I + "*\\]",
            z = ":(" + q + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + U.replace(3, 8) + ")*)|.*)\\)|)",
            W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            X = new RegExp("^" + I + "*," + I + "*"),
            V = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            $ = new RegExp(I + "*[+~]"),
            J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
            K = new RegExp(z),
            Q = new RegExp("^" + R + "$"),
            G = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + U),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i,
            tt = /^h\d$/i,
            nt = /'|\\/g,
            rt = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            it = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            H.apply(_ = B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType
        } catch (st) {
            H = {
                apply: _.length ? function (e, t) {
                    P.apply(e, B.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        u = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, r = ot.support = {}, c = ot.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : E,
                n = t.defaultView;
            if (t === h || t.nodeType !== 9 || !t.documentElement) return h;
            h = t, p = t.documentElement, d = !u(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                c()
            }), r.attributes = ft(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ft(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ft(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), r.getById = ft(function (e) {
                return p.appendChild(e).id = b, !t.getElementsByName || !t.getElementsByName(b).length
            }), r.getById ? (s.find.ID = function (e, t) {
                if (typeof t.getElementById !== A && d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete s.find.ID, s.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), s.find.TAG = r.getElementsByTagName ? function (e, t) {
                if (typeof t.getElementsByTagName !== A) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, s.find.CLASS = r.getElementsByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== A && d) return t.getElementsByClassName(e)
            }, m = [], v = [];
            if (r.qsa = Y.test(t.querySelectorAll)) ft(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + F + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
            }), ft(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            });
            return (r.matchesSelector = Y.test(g = p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ft(function (e) {
                r.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), m.push("!=", z)
            }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), y = Y.test(p.contains) || p.compareDocumentPosition ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, L = p.compareDocumentPosition ? function (e, n) {
                if (e === n) return k = !0, 0;
                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                if (i) return i & 1 || !r.sortDetached && n.compareDocumentPosition(e) === i ? e === t || y(E, e) ? -1 : n === t || y(E, n) ? 1 : l ? j.call(l, e) - j.call(l, n) : 0 : i & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0,
                    s = e.parentNode,
                    o = n.parentNode,
                    u = [e],
                    a = [n];
                if (e === n) return k = !0, 0;
                if (!s || !o) return e === t ? -1 : n === t ? 1 : s ? -1 : o ? 1 : l ? j.call(l, e) - j.call(l, n) : 0;
                if (s === o) return ct(e, n);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = n;
                while (r = r.parentNode) a.unshift(r);
                while (u[i] === a[i]) i++;
                return i ? ct(u[i], a[i]) : u[i] === E ? -1 : a[i] === E ? 1 : 0
            }, t
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== h && c(e), t = t.replace(J, "='$1']");
            if (r.matchesSelector && d && (!m || !m.test(t)) && (!v || !v.test(t))) try {
                var n = g.call(e, t);
                if (n || r.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
            } catch (i) { }
            return ot(t, h, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== h && c(e), y(e, t)
        }, ot.attr = function (e, n) {
            (e.ownerDocument || e) !== h && c(e);
            var i = s.attrHandle[n.toLowerCase()],
                o = i && M.call(s.attrHandle, n.toLowerCase()) ? i(e, n, !d) : t;
            return o === t ? r.attributes || !d ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
        }, ot.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                s = 0;
            k = !r.detectDuplicates, l = !r.sortStable && e.slice(0), e.sort(L);
            if (k) {
                while (t = e[s++]) t === e[s] && (i = n.push(s));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, o = ot.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                for (; t = e[r]; r++) n += o(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
            } else if (i === 3 || i === 4) return e.nodeValue;
            return n
        }, s = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var n, r = !e[5] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && K.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return e === "*" ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function (e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[b] || (m[b] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[b] || (t[b] = {}))[e]) && f[0] === S) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        y && ((c[b] || (c[b] = {}))[e] = [S, h]);
                                        if (c === t) break
                                    } return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = s.pseudos[e] || s.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = j.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [],
                        n = [],
                        r = a(e.replace(W, "$1"));
                    return r[b] ? at(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }),
                lang: at(function (e) {
                    return Q.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                    function (t) {
                        var n;
                        do
                            if (n = d ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === p
                },
                focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
                    return !0
                },
                parent: function (e) {
                    return !s.pseudos.empty(e)
                },
                header: function (e) {
                    return tt.test(e.nodeName)
                },
                input: function (e) {
                    return et.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },
                first: dt(function () {
                    return [0]
                }),
                last: dt(function (e, t) {
                    return [t - 1]
                }),
                eq: dt(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: dt(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: dt(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: dt(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, s.pseudos.nth = s.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) s.pseudos[n] = ht(n);
        for (n in {
            submit: !0,
            reset: !0
        }) s.pseudos[n] = pt(n);
        vt.prototype = s.filters = s.pseudos, s.setFilters = new vt, a = ot.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = C[e + " "];
            if (!s) {
                t || (t = mt(e)), n = t.length;
                while (n--) s = St(t[n]), s[b] ? r.push(s) : i.push(s);
                s = C(e, xt(i, r))
            }
            return s
        }, r.sortStable = b.split("").sort(L).join("") === b, r.detectDuplicates = k, c(), r.sortDetached = ft(function (e) {
            return e.compareDocumentPosition(h.createElement("div")) & 1
        }), ft(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || lt("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!r.attributes || !ft(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && lt("value", function (e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ft(function (e) {
            return e.getAttribute("disabled") == null
        }) || lt(F, function (e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), w.find = ot, w.expr = ot.selectors, w.expr[":"] = w.expr.pseudos, w.unique = ot.uniqueSort, w.text = ot.getText, w.isXMLDoc = ot.isXML, w.contains = ot.contains
    }(e);
    var B = {};
    w.Callbacks = function (e) {
        e = typeof e == "string" ? B[e] || j(e) : w.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
                for (; a && o < s; o++)
                    if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            }, c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            w.each(t, function (t, n) {
                                var r = w.type(n);
                                r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function () {
                    return a && w.each(arguments, function (e, t) {
                        var r;
                        while ((r = w.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function () {
                    return a = [], s = 0, this
                },
                disable: function () {
                    return a = f = r = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, r || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return a && (!i || f) && (t = t || [], t = [e, t.slice ? t.slice() : t], n ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, w.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                ["notify", "progress", w.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return w.Deferred(function (n) {
                            w.each(t, function (t, s) {
                                var o = s[0],
                                    u = w.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = u && u.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return e != null ? w.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, w.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = v.call(arguments),
                r = n.length,
                i = r !== 1 || e && w.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : w.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? v.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && w.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), w.support = function (t) {
        var n, r, s, u, a, f, l, c, h, p = o.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], r = p.getElementsByTagName("a")[0];
        if (!r || !r.style || !n.length) return t;
        u = o.createElement("select"), f = u.appendChild(o.createElement("option")), s = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = p.className !== "t", t.leadingWhitespace = p.firstChild.nodeType === 3, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = r.getAttribute("href") === "/a", t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!s.value, t.optSelected = f.selected, t.enctype = !!o.createElement("form").enctype, t.html5Clone = o.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        s = o.createElement("input"), s.setAttribute("value", ""), t.input = s.getAttribute("value") === "", s.value = "t", s.setAttribute("type", "radio"), t.radioValue = s.value === "t", s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = o.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box";
        for (h in w(t)) break;
        return t.ownLast = h !== "0", w(function () {
            var n, r, s, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = o.getElementsByTagName("body")[0];
            if (!a) return;
            n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = p.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", w.swap(a, a.style.zoom != null ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = p.offsetWidth === 4
            }), e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width === "4px", r = p.appendChild(o.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = s = r = null
        }), n = u = a = f = r = s = null, t
    }({});
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;
    w.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando], !!e && !z(e)
        },
        data: function (e, t, n) {
            return q(e, t, n)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, n) {
            return q(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), w.fn.extend({
        data: function (e, n) {
            var r, i, s = null,
                o = 0,
                u = this[0];
            if (e === t) {
                if (this.length) {
                    s = w.data(u);
                    if (u.nodeType === 1 && !w._data(u, "parsedAttrs")) {
                        r = u.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") === 0 && (i = w.camelCase(i.slice(5)), U(u, i, s[i]));
                        w._data(u, "parsedAttrs", !0)
                    }
                }
                return s
            }
            return typeof e == "object" ? this.each(function () {
                w.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                w.data(this, e, n)
            }) : u ? U(u, e, w.data(u, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                w.removeData(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = w._data(e, t), n && (!r || w.isArray(n) ? r = w._data(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = w._queueHooks(e, t),
                o = function () {
                    w.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return w._data(e, n) || w._data(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    w._removeData(e, t + "queue"), w._removeData(e, n)
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? w.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = w.queue(this, e, n);
                w._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = w.fx ? w.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = w.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = w._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var W, X, V = /[\t\r\n\f]/g,
        $ = /\r/g,
        J = /^(?:input|select|textarea|button|object)$/i,
        K = /^(?:a|area)$/i,
        Q = /^(?:checked|selected)$/i,
        G = w.support.getSetAttribute,
        Y = w.support.input;
    w.fn.extend({
        attr: function (e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = w.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) { }
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = w.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = arguments.length === 0 || typeof e == "string" && e;
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(S) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(V, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? w.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : w.isFunction(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var t, r = 0,
                        s = w(this),
                        o = e.match(S) || [];
                    while (t = o[r++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else if (n === i || n === "boolean") this.className && w._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : w._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(V, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = w.valHooks[s.type] || w.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace($, "") : n == null ? "" : n);
                return
            }
            return i = w.isFunction(e), this.each(function (n) {
                var s;
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, w(this).val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : w.isArray(s) && (s = w.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
            })
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return t != null ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (w.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                            t = w(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        s = w.makeArray(t),
                        o = i.length;
                    while (o--) {
                        r = i[o];
                        if (r.selected = w.inArray(w(r).val(), s) >= 0) n = !0
                    }
                    return n || (e.selectedIndex = -1), s
                }
            }
        },
        attr: function (e, n, r) {
            var s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            if (typeof e.getAttribute === i) return w.prop(e, n, r);
            if (u !== 1 || !w.isXMLDoc(e)) n = n.toLowerCase(), s = w.attrHooks[n] || (w.expr.match.bool.test(n) ? X : W);
            if (r === t) return s && "get" in s && (o = s.get(e, n)) !== null ? o : (o = w.find.attr(e, n), o == null ? t : o);
            if (r !== null) return s && "set" in s && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r);
            w.removeAttr(e, n)
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(S);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = w.propFix[n] || n, w.expr.match.bool.test(n) ? Y && G || !Q.test(n) ? e[r] = !1 : e[w.camelCase("default-" + n)] = e[r] = !1 : w.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !w.isXMLDoc(e), o && (n = w.propFix[n] || n, s = w.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : J.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function (e, t, n) {
            return t === !1 ? w.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && w.propFix[n] || n, n) : e[w.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = w.expr.attrHandle[n] || w.find.attr;
        w.expr.attrHandle[n] = Y && G || !Q.test(n) ? function (e, n, i) {
            var s = w.expr.attrHandle[n],
                o = i ? t : (w.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return w.expr.attrHandle[n] = s, o
        } : function (e, n, r) {
            return r ? t : e[w.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    });
    if (!Y || !G) w.attrHooks.value = {
        set: function (e, t, n) {
            if (!w.nodeName(e, "input")) return W && W.set(e, t, n);
            e.defaultValue = t
        }
    };
    G || (W = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && i.value !== "" ? i.value : null
    }, w.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: W.set
    }, w.attrHooks.contenteditable = {
        set: function (e, t, n) {
            W.set(e, t === "" ? !1 : t, n)
        }
    }, w.each(["width", "height"], function (e, t) {
        w.attrHooks[t] = {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        }
    })), w.support.hrefNormalized || w.each(["href", "src"], function (e, t) {
        w.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), w.support.style || (w.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), w.support.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    }), w.support.enctype || (w.propFix.enctype = "encoding"), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (w.isArray(t)) return e.checked = w.inArray(w(e).val(), t) >= 0
            }
        }, w.support.checkOn || (w.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    w.event = {
        global: {},
        add: function (e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = w._data(e);
            if (!y) return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = w.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                return typeof w === i || !!e && w.event.triggered === e.type ? t : w.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(S) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort();
                if (!v) continue;
                c = w.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = w.event.special[v] || {}, p = w.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), w.event.global[v] = !0
            }
            e = null
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = w.hasData(e) && w._data(e);
            if (!m || !(l = m.events)) return;
            t = (t || "").match(S) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l) w.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = w.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && w.removeEvent(e, p, m.handle), delete l[p])
            }
            w.isEmptyObject(l) && (delete m.handle, w._removeData(e, "events"))
        },
        trigger: function (n, r, i, s) {
            var u, a, f, l, c, h, p, d = [i || o],
                v = y.call(n, "type") ? n.type : n,
                m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || o;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (nt.test(v + w.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[w.expando] ? n : new w.Event(v, typeof n == "object" && n), n.isTrigger = s ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : w.makeArray(r, [n]), c = w.event.special[v] || {};
            if (!s && c.trigger && c.trigger.apply(i, r) === !1) return;
            if (!s && !c.noBubble && !w.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode) d.push(f), h = f;
                h === (i.ownerDocument || o) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (w._data(f, "events") || {})[n.type] && w._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && w.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!s && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && w.acceptData(i) && a && i[v] && !w.isWindow(i)) {
                h = i[a], h && (i[a] = null), w.event.triggered = v;
                try {
                    i[v]()
                } catch (g) { }
                w.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },
        dispatch: function (e) {
            e = w.event.fix(e);
            var n, r, i, s, o, u = [],
                a = v.call(arguments),
                f = (w._data(this, "events") || {})[e.type] || [],
                l = w.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = w.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click"))
                for (; f != this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                        s = [];
                        for (o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? w(r, this).index(f) >= 0 : w.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return a < n.length && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u
        },
        fix: function (e) {
            if (e[w.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new w.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || o), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || o, s = i.documentElement, r = i.body, e.pageX = n.clientX + (s && s.scrollLeft || r && r.scrollLeft || 0) - (s && s.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || r && r.scrollTop || 0) - (s && s.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ot() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === ot() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (w.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                },
                _default: function (e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? w.event.trigger(i, null, t) : w.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = o.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                if (!i || i !== r && !w.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), w.support.submitBubbles || (w.event.special.submit = {
        setup: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = w.nodeName(n, "input") || w.nodeName(n, "button") ? n.form : t;
                r && !w._data(r, "submitBubbles") && (w.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), w._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && w.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (w.nodeName(this, "form")) return !1;
            w.event.remove(this, "._submit")
        }
    }), w.support.changeBubbles || (w.event.special.change = {
        setup: function () {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") w.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), w.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), w.event.simulate("change", this, e, !0)
                });
                return !1
            }
            w.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !w._data(t, "changeBubbles") && (w.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && w.event.simulate("change", this.parentNode, e, !0)
                }), w._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return w.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), w.support.focusinBubbles || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                w.event.simulate(t, e.target, w.event.fix(e), !0)
            };
        w.event.special[t] = {
            setup: function () {
                n++ === 0 && o.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && o.removeEventListener(e, r, !0)
            }
        }
    }), w.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = st;
            else if (!i) return this;
            return s === 1 && (u = i, i = function (e) {
                return w().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = w.guid++)), this.each(function () {
                w.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = st), this.each(function () {
                w.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    });
    var ut = /^.[^:#\[\.,]*$/,
        at = /^(?:parents|prev(?:Until|All))/,
        ft = w.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if (typeof e != "string") return this.pushStack(w(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (w.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) w.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? w.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = w(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ht(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(ht(this, e || [], !1))
        },
        is: function (e) {
            return !!ht(this, typeof e == "string" && ft.test(e) ? w(e) : e || [], !1).length
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || typeof e != "string" ? w(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && w.find.matchesSelector(n, e))) {
                        n = s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? w.unique(s) : s)
        },
        index: function (e) {
            return e ? typeof e == "string" ? w.inArray(this[0], w(e)) : w.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                r = w.merge(this.get(), n);
            return this.pushStack(w.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ct(e, "nextSibling")
        },
        prev: function (e) {
            return ct(e, "previousSibling")
        },
        nextAll: function (e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return w.sibling(e.firstChild)
        },
        contents: function (e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = w.filter(r, i)), this.length > 1 && (lt[e] || (i = w.unique(i)), at.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), w.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
                return e.nodeType === 1
            }))
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !w(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, At = pt(o),
        Ot = At.appendChild(o.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, w.fn.extend({
        text: function (e) {
            return w.access(this, function (e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Mt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = e ? w.filter(e, this) : this,
                i = 0;
            for (;
                (n = r[i]) != null; i++) !t && n.nodeType === 1 && w.cleanData(jt(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && w.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && w.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return w.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (w.support.htmlSerialize || !mt.test(e)) && (w.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (w.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) { }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = w.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), w(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = p.apply([], e);
            var r, i, s, o, u, a, f = 0,
                l = this.length,
                c = this,
                h = l - 1,
                d = e[0],
                v = w.isFunction(d);
            if (v || !(l <= 1 || typeof d != "string" || w.support.checkClone || !Tt.test(d))) return this.each(function (r) {
                var i = c.eq(r);
                v && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (l) {
                a = w.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = a.firstChild, a.childNodes.length === 1 && (a = r);
                if (r) {
                    o = w.map(jt(a, "script"), _t), s = o.length;
                    for (; f < l; f++) i = a, f !== h && (i = w.clone(i, !0, !0), s && w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, w.map(o, Dt);
                        for (f = 0; f < s; f++) i = o[f], Nt.test(i.type || "") && !w._data(i, "globalEval") && w.contains(u, i) && (i.src ? w._evalUrl(i.src) : w.globalEval((i.text || i.textContent || i.innerHTML || "").replace(kt, "")))
                    }
                    a = r = null
                }
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                s = w(e),
                o = s.length - 1;
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
            return this.pushStack(i)
        }
    }), w.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = w.contains(e.ownerDocument, e);
            w.support.html5Clone || w.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || jt(e), r = r || jt(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) Ht(i, r[o])
                } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (w.type(s) === "object") w.merge(p, s.nodeType ? [s] : s);
                    else if (!Et.test(s)) p.push(t.createTextNode(s));
                    else {
                        u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                        while (i--) u = u.lastChild;
                        !w.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                        if (!w.support.tbody) {
                            s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                            while (i--) w.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                        }
                        w.merge(p, u.childNodes), u.textContent = "";
                        while (u.firstChild) u.removeChild(u.firstChild);
                        u = h.lastChild
                    }
            }
            u && h.removeChild(u), w.support.appendChecked || w.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && w.inArray(s, r) !== -1) continue;
                o = w.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },
        cleanData: function (e, t) {
            var n, r, s, o, u = 0,
                a = w.expando,
                f = w.cache,
                l = w.support.deleteExpando,
                h = w.event.special;
            for (;
                (n = e[u]) != null; u++)
                if (t || w.acceptData(n)) {
                    s = n[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (r in o.events) h[r] ? w.event.remove(n, r) : w.removeEvent(n, r, o.handle);
                        f[s] && (delete f[s], l ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, c.push(s))
                    }
                }
        },
        _evalUrl: function (e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), w.fn.extend({
        wrapAll: function (e) {
            if (w.isFunction(e)) return this.each(function (t) {
                w(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return w.isFunction(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = w.isFunction(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = new RegExp("^(" + E + ")(.*)$", "i"),
        Jt = new RegExp("^(" + E + ")(?!px)[a-z%]+$", "i"),
        Kt = new RegExp("^([+-])=(" + E + ")", "i"),
        Qt = {
            BODY: "block"
        }, Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Yt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    w.fn.extend({
        css: function (e, n) {
            return w.access(this, function (e, n, r) {
                var i, s, o = {}, u = 0;
                if (w.isArray(n)) {
                    s = qt(e), i = n.length;
                    for (; u < i; u++) o[n[u]] = w.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? w.style(e, n, r) : w.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function () {
                nn(this) ? w(this).show() : w(this).hide()
            })
        }
    }), w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = w.camelCase(n),
                f = e.style;
            n = w.cssProps[a] || (w.cssProps[a] = tn(f, a)), u = w.cssHooks[n] || w.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(w.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !w.cssNumber[a] && (r += "px"), !w.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) { }
        },
        css: function (e, n, r, i) {
            var s, o, u, a = w.camelCase(n);
            return n = w.cssProps[a] || (w.cssProps[a] = tn(e.style, a)), u = w.cssHooks[n] || w.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || w.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (qt = function (t) {
        return e.getComputedStyle(t, null)
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && (a === "" && !w.contains(e.ownerDocument, e) && (a = w.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : o.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && Xt.test(w.css(e, "display")) ? w.swap(e, Gt, function () {
                    return un(e, t, r)
                }) : un(e, t, r)
            },
            set: function (e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, w.support.boxSizing && w.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), w.support.opacity || (w.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && w.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }
    }), w(function () {
        w.support.reliableMarginRight || (w.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return w.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"])
            }
        }), !w.support.pixelPosition && w.fn.position && w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = Rt(e, t), Jt.test(n) ? w(e).position()[t] + "px" : n
                }
            }
        })
    }), w.expr && w.expr.filters && (w.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
    }, w.expr.filters.visible = function (e) {
        return !w.expr.filters.hidden(e)
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (w.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return n == null ? null : w.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), w.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = w.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = w.ajaxSettings && w.ajaxSettings.traditional);
        if (w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, gn, yn = w.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = w.fn.load,
        Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = s.href
    } catch (Mn) {
        gn = o.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], w.fn.load = function (e, n, r) {
        if (typeof e != "string" && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), w.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, u.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Pn(Pn(e, w.ajaxSettings), t) : Pn(w.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                if (b === 2) return;
                b = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || e === 304, r && (E = Hn(c, x, r)), E = Bn(c, E, x, l);
                if (l) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (w.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (w.etag[s] = S)), e === 204 || c.type === "HEAD" ? T = "nocontent" : e === 304 ? T = "notmodified" : (T = E.state, g = E.data, y = E.error, l = !y);
                else {
                    y = T;
                    if (e || !T) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --w.active || w.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = w.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                d = w.Deferred(),
                v = w.Callbacks("once memory"),
                m = c.statusCode || {}, g = {}, y = {}, b = 0,
                E = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (b === 2) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return b === 2 ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || E;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = w.trim(c.dataType || "*").toLowerCase().match(S) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (mn[3] || (mn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = w.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (b === 2) return x;
            a = c.global, a && w.active++ === 0 && w.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (w.lastModified[s] && x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s] && x.setRequestHeader("If-None-Match", w.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && b !== 2) {
                E = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f) N(-1, "No Transport");
                else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, f.send(g, N)
                    } catch (T) {
                        if (!(b < 2)) throw T;
                        N(-1, T)
                    }
                }
                return x
            }
            return x.abort()
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return w.get(e, t, n, "script")
        }
    }), w.each(["get", "post"], function (e, n) {
        w[n] = function (e, r, i, s) {
            return w.isFunction(r) && (s = s || i, i = r, r = t), w.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = o.head || w("head")[0] || o.documentElement;
            return {
                send: function (t, i) {
                    n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jn.pop() || w.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = w.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || w.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && w.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject && function () {
            var e;
            for (e in In) In[e](t, !0)
        };
    w.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = w.ajaxSettings.xhr(), w.support.cors = !!qn && "withCredentials" in qn, qn = w.support.ajax = !!qn, qn && w.ajaxTransport(function (n) {
        if (!n.crossDomain || w.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) { }
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = w.noop, Un && delete In[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    } !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, w(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = new RegExp("^(?:([+-])=|)(" + E + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t),
                        r = n.cur(),
                        i = Jn.exec(t),
                        s = i && i[3] || (w.cssNumber[e] ? "" : "px"),
                        o = (w.cssNumber[e] || s !== "px" && +r) && Jn.exec(w.css(n.elem, e)),
                        u = 1,
                        a = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], i = i || [], o = +r || 1;
                        do u = u || ".5", o /= u, w.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
                    }
                    return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                }
            ]
        };
    w.Animation = w.extend(er, {
        tweener: function (e, t) {
            w.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), w.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = w.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), w.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = w.isEmptyObject(e),
                s = w.speed(t, n, r),
                o = function () {
                    var t = er(this, w.extend({}, e), s);
                    (i || w._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = w.timers,
                    o = w._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && w.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = w._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = w.timers,
                    o = r ? r.length : 0;
                n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), w.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        w.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), w.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        r.duration = w.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in w.fx.speeds ? w.fx.speeds[r.duration] : w.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            w.isFunction(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.timers = [], w.fx = rr.prototype.init, w.fx.tick = function () {
        var e, n = w.timers,
            r = 0;
        Xn = w.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || w.fx.stop(), Xn = t
    }, w.fx.timer = function (e) {
        e() && w.timers.push(e) && w.fx.start()
    }, w.fx.interval = 13, w.fx.start = function () {
        Vn || (Vn = setInterval(w.fx.tick, w.fx.interval))
    }, w.fx.stop = function () {
        clearInterval(Vn), Vn = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fx.step = {}, w.expr && w.expr.filters && (w.expr.filters.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }), w.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            w.offset.setOffset(this, e, t)
        });
        var n, r, s = {
            top: 0,
            left: 0
        }, o = this[0],
            u = o && o.ownerDocument;
        if (!u) return;
        return n = u.documentElement, w.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r = w.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = w(e),
                s = i.offset(),
                o = w.css(e, "top"),
                u = w.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && w.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), w.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, w.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e, t, n = {
                top: 0,
                left: 0
            }, r = this[0];
            return w.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (n = e.offset()), n.top += w.css(e[0], "borderTopWidth", !0), n.left += w.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - w.css(r, "marginTop", !0),
                left: t.left - n.left - w.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || u;
                while (e && !w.nodeName(e, "html") && w.css(e, "position") === "static") e = e.offsetParent;
                return e || u
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        w.fn[e] = function (i) {
            return w.access(this, function (e, i, s) {
                var o = sr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? w(o).scrollLeft() : s, r ? s : w(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        w.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            w.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return w.access(this, function (n, r, i) {
                    var s;
                    return w.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? w.css(n, r, u) : w.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), w.fn.size = function () {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, typeof module == "object" && module && typeof module.exports == "object" ? module.exports = w : (e.jQuery = e.$ = w, typeof define == "function" && define.amd && define("jquery", [], function () {
        return w
    }))
}(window),
function () {
    var e = this,
        t = e._,
        n = {}, r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.concat,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function (e) {
            if (e instanceof x) return e;
            if (!(this instanceof x)) return new x(e);
            this._wrapped = e
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.6.0";
    var T = x.each = x.forEach = function (e, t, r) {
        if (e == null) return e;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else {
            var o = x.keys(e);
            for (var i = 0, s = o.length; i < s; i++)
                if (t.call(r, e[o[i]], o[i], e) === n) return
        }
        return e
    };
    x.map = x.collect = function (e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function (e, i, s) {
            r.push(t.call(n, e, i, s))
        }), r)
    };
    var N = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function (e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.reduceRight = x.foldr = function (e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = x.keys(e);
            s = o.length
        }
        T(e, function (u, a, f) {
            a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
        });
        if (!i) throw new TypeError(N);
        return n
    }, x.find = x.detect = function (e, t, n) {
        var r;
        return C(e, function (e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function (e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function (e, i, s) {
            t.call(n, e, i, s) && r.push(e)
        }), r)
    }, x.reject = function (e, t, n) {
        return x.filter(e, function (e, r, i) {
            return !t.call(n, e, r, i)
        }, n)
    }, x.every = x.all = function (e, t, r) {
        t || (t = x.identity);
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function (e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !!i)
    };
    var C = x.some = x.any = function (e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function (e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !!i)
    };
    x.contains = x.include = function (e, t) {
        return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function (e) {
            return e === t
        })
    }, x.invoke = function (e, t) {
        var n = u.call(arguments, 2),
            r = x.isFunction(t);
        return x.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function (e, t) {
        return x.map(e, x.property(t))
    }, x.where = function (e, t) {
        return x.filter(e, x.matches(t))
    }, x.findWhere = function (e, t) {
        return x.find(e, x.matches(t))
    }, x.max = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        var r = -Infinity,
            i = -Infinity;
        return T(e, function (e, s, o) {
            var u = t ? t.call(n, e, s, o) : e;
            u > i && (r = e, i = u)
        }), r
    }, x.min = function (e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        var r = Infinity,
            i = Infinity;
        return T(e, function (e, s, o) {
            var u = t ? t.call(n, e, s, o) : e;
            u < i && (r = e, i = u)
        }), r
    }, x.shuffle = function (e) {
        var t, n = 0,
            r = [];
        return T(e, function (e) {
            t = x.random(n++), r[n - 1] = r[t], r[t] = e
        }), r
    }, x.sample = function (e, t, n) {
        return t == null || n ? (e.length !== +e.length && (e = x.values(e)), e[x.random(e.length - 1)]) : x.shuffle(e).slice(0, Math.max(0, t))
    };
    var k = function (e) {
        return e == null ? x.identity : x.isFunction(e) ? e : x.property(e)
    };
    x.sortBy = function (e, t, n) {
        return t = k(t), x.pluck(x.map(e, function (e, r, i) {
            return {
                value: e,
                index: r,
                criteria: t.call(n, e, r, i)
            }
        }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;
            if (n !== r) {
                if (n > r || n === void 0) return 1;
                if (n < r || r === void 0) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var L = function (e) {
        return function (t, n, r) {
            var i = {};
            return n = k(n), T(t, function (s, o) {
                var u = n.call(r, s, o, t);
                e(i, u, s)
            }), i
        }
    };
    x.groupBy = L(function (e, t, n) {
        x.has(e, t) ? e[t].push(n) : e[t] = [n]
    }), x.indexBy = L(function (e, t, n) {
        e[t] = n
    }), x.countBy = L(function (e, t) {
        x.has(e, t) ? e[t]++ : e[t] = 1
    }), x.sortedIndex = function (e, t, n, r) {
        n = k(n);
        var i = n.call(r, t),
            s = 0,
            o = e.length;
        while (s < o) {
            var u = s + o >>> 1;
            n.call(r, e[u]) < i ? s = u + 1 : o = u
        }
        return s
    }, x.toArray = function (e) {
        return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
    }, x.size = function (e) {
        return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[0] : t < 0 ? [] : u.call(e, 0, t)
    }, x.initial = function (e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function (e, t, n) {
        return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = x.drop = function (e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function (e) {
        return x.filter(e, x.identity)
    };
    var A = function (e, t, n) {
        return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function (e) {
            x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
        }), n)
    };
    x.flatten = function (e, t) {
        return A(e, t, [])
    }, x.without = function (e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.partition = function (e, t) {
        var n = [],
            r = [];
        return T(e, function (e) {
            (t(e) ? n : r).push(e)
        }), [n, r]
    }, x.uniq = x.unique = function (e, t, n, r) {
        x.isFunction(t) && (r = n, n = t, t = !1);
        var i = n ? x.map(e, n, r) : e,
            s = [],
            o = [];
        return T(i, function (n, r) {
            if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
        }), s
    }, x.union = function () {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = function (e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function (e) {
            return x.every(t, function (t) {
                return x.contains(t, e)
            })
        })
    }, x.difference = function (e) {
        var t = a.apply(r, u.call(arguments, 1));
        return x.filter(e, function (e) {
            return !x.contains(t, e)
        })
    }, x.zip = function () {
        var e = x.max(x.pluck(arguments, "length").concat(0)),
            t = new Array(e);
        for (var n = 0; n < e; n++) t[n] = x.pluck(arguments, "" + n);
        return t
    }, x.object = function (e, t) {
        if (e == null) return {};
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }, x.indexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = 0,
            i = e.length;
        if (n) {
            if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
            r = n < 0 ? Math.max(0, i + n) : n
        }
        if (y && e.indexOf === y) return e.indexOf(t, n);
        for (; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function (e, t, n) {
        if (e == null) return -1;
        var r = n != null;
        if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        var i = r ? n : e.length;
        while (i--)
            if (e[i] === t) return i;
        return -1
    }, x.range = function (e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var O = function () { };
    x.bind = function (e, t) {
        var n, r;
        if (S && e.bind === S) return S.apply(e, u.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return n = u.call(arguments, 2), r = function () {
            if (this instanceof r) {
                O.prototype = e.prototype;
                var i = new O;
                O.prototype = null;
                var s = e.apply(i, n.concat(u.call(arguments)));
                return Object(s) === s ? s : i
            }
            return e.apply(t, n.concat(u.call(arguments)))
        }
    }, x.partial = function (e) {
        var t = u.call(arguments, 1);
        return function () {
            var n = 0,
                r = t.slice();
            for (var i = 0, s = r.length; i < s; i++) r[i] === x && (r[i] = arguments[n++]);
            while (n < arguments.length) r.push(arguments[n++]);
            return e.apply(this, r)
        }
    }, x.bindAll = function (e) {
        var t = u.call(arguments, 1);
        if (t.length === 0) throw new Error("bindAll must be passed function names");
        return T(t, function (t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function (e, t) {
        var n = {};
        return t || (t = x.identity),
        function () {
            var r = t.apply(this, arguments);
            return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }, x.delay = function (e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, n)
        }, t)
    }, x.defer = function (e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function (e, t, n) {
        var r, i, s, o = null,
            u = 0;
        n || (n = {});
        var a = function () {
            u = n.leading === !1 ? 0 : x.now(), o = null, s = e.apply(r, i), r = i = null
        };
        return function () {
            var f = x.now();
            !u && n.leading === !1 && (u = f);
            var l = t - (f - u);
            return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i), r = i = null) : !o && n.trailing !== !1 && (o = setTimeout(a, l)), s
        }
    }, x.debounce = function (e, t, n) {
        var r, i, s, o, u, a = function () {
            var f = x.now() - o;
            f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i), s = i = null))
        };
        return function () {
            s = this, i = arguments, o = x.now();
            var f = n && !r;
            return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i), s = i = null), u
        }
    }, x.once = function (e) {
        var t = !1,
            n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }, x.wrap = function (e, t) {
        return x.partial(t, e)
    }, x.compose = function () {
        var e = arguments;
        return function () {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function (e, t) {
        return function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = function (e) {
        if (!x.isObject(e)) return [];
        if (E) return E(e);
        var t = [];
        for (var n in e) x.has(e, n) && t.push(n);
        return t
    }, x.values = function (e) {
        var t = x.keys(e),
            n = t.length,
            r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = e[t[i]];
        return r
    }, x.pairs = function (e) {
        var t = x.keys(e),
            n = t.length,
            r = new Array(n);
        for (var i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
    }, x.invert = function (e) {
        var t = {}, n = x.keys(e);
        for (var r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
    }, x.functions = x.methods = function (e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        return T(n, function (n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.omit = function (e) {
        var t = {}, n = a.apply(r, u.call(arguments, 1));
        for (var i in e) x.contains(n, i) || (t[i] = e[i]);
        return t
    }, x.defaults = function (e) {
        return T(u.call(arguments, 1), function (t) {
            if (t)
                for (var n in t) e[n] === void 0 && (e[n] = t[n])
        }), e
    }, x.clone = function (e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function (e, t) {
        return t(e), e
    };
    var M = function (e, t, n, r) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
        var i = f.call(e);
        if (i != f.call(t)) return !1;
        switch (i) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var s = n.length;
        while (s--)
            if (n[s] == e) return r[s] == t;
        var o = e.constructor,
            u = t.constructor;
        if (o !== u && !(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
        n.push(e), r.push(t);
        var a = 0,
            l = !0;
        if (i == "[object Array]") {
            a = e.length, l = a == t.length;
            if (l)
                while (a--)
                    if (!(l = M(e[a], t[a], n, r))) break
        } else {
            for (var c in e)
                if (x.has(e, c)) {
                    a++;
                    if (!(l = x.has(t, c) && M(e[c], t[c], n, r))) break
                }
            if (l) {
                for (c in t)
                    if (x.has(t, c) && !(a--)) break;
                l = !a
            }
        }
        return n.pop(), r.pop(), l
    };
    x.isEqual = function (e, t) {
        return M(e, t, [], [])
    }, x.isEmpty = function (e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function (e) {
        return !!e && e.nodeType === 1
    }, x.isArray = w || function (e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        x["is" + e] = function (t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (e) {
        return !!e && !!x.has(e, "callee")
    }), typeof / . / != "function" && (x.isFunction = function (e) {
        return typeof e == "function"
    }), x.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, x.isNaN = function (e) {
        return x.isNumber(e) && e != +e
    }, x.isBoolean = function (e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function (e) {
        return e === null
    }, x.isUndefined = function (e) {
        return e === void 0
    }, x.has = function (e, t) {
        return l.call(e, t)
    }, x.noConflict = function () {
        return e._ = t, this
    }, x.identity = function (e) {
        return e
    }, x.constant = function (e) {
        return function () {
            return e
        }
    }, x.property = function (e) {
        return function (t) {
            return t[e]
        }
    }, x.matches = function (e) {
        return function (t) {
            if (t === e) return !0;
            for (var n in e)
                if (e[n] !== t[n]) return !1;
            return !0
        }
    }, x.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        for (var i = 0; i < e; i++) r[i] = t.call(n, i);
        return r
    }, x.random = function (e, t) {
        return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    }, x.now = Date.now || function () {
        return (new Date).getTime()
    };
    var _ = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    _.unescape = x.invert(_.escape);
    var D = {
        escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (e) {
        x[e] = function (t) {
            return t == null ? "" : ("" + t).replace(D[e], function (t) {
                return _[e][t]
            })
        }
    }), x.result = function (e, t) {
        if (e == null) return void 0;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function (e) {
        T(x.functions(e), function (t) {
            var n = x[t] = e[t];
            x.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), F.call(this, n.apply(x, e))
            }
        })
    };
    var P = 0;
    x.uniqueId = function (e) {
        var t = ++P + "";
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var H = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (e, t, n) {
        var r;
        n = x.defaults({}, n, x.templateSettings);
        var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(i, function (t, n, r, i, u) {
            return o += e.slice(s, u).replace(j, function (e) {
                return "\\" + B[e]
            }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
        }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", o)
        } catch (u) {
            throw u.source = o, u
        }
        if (t) return r(t, x);
        var a = function (e) {
            return r.call(this, e, x)
        };
        return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
    }, x.chain = function (e) {
        return x(e).chain()
    };
    var F = function (e) {
        return this._chain ? x(e).chain() : e
    };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = r[e];
        x.prototype[e] = function () {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    }), typeof define == "function" && define.amd && define("underscore", [], function () {
        return x
    })
}.call(this),
function () {
    var e = this,
        t = e.Backbone,
        n = [],
        r = n.push,
        i = n.slice,
        s = n.splice,
        o;
    typeof exports != "undefined" ? o = exports : o = e.Backbone = {}, o.VERSION = "1.0.0";
    var u = e._;
    !u && typeof require != "undefined" && (u = require("underscore")), o.$ = e.jQuery || e.Zepto || e.ender || e.$, o.noConflict = function () {
        return e.Backbone = t, this
    }, o.emulateHTTP = !1, o.emulateJSON = !1;
    var a = o.Events = {
        on: function (e, t, n) {
            if (!l(this, "on", e, [t, n]) || !t) return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }), this
        },
        once: function (e, t, n) {
            if (!l(this, "once", e, [t, n]) || !t) return this;
            var r = this,
                i = u.once(function () {
                    r.off(e, i), t.apply(this, arguments)
                });
            return i._callback = t, this.on(e, i, n)
        },
        off: function (e, t, n) {
            var r, i, s, o, a, f, c, h;
            if (!this._events || !l(this, "off", e, [t, n])) return this;
            if (!e && !t && !n) return this._events = {}, this;
            o = e ? [e] : u.keys(this._events);
            for (a = 0, f = o.length; a < f; a++) {
                e = o[a];
                if (s = this._events[e]) {
                    this._events[e] = r = [];
                    if (t || n)
                        for (c = 0, h = s.length; c < h; c++) i = s[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && r.push(i);
                    r.length || delete this._events[e]
                }
            }
            return this
        },
        trigger: function (e) {
            if (!this._events) return this;
            var t = i.call(arguments, 1);
            if (!l(this, "trigger", e, t)) return this;
            var n = this._events[e],
                r = this._events.all;
            return n && c(n, t), r && c(r, arguments), this
        },
        stopListening: function (e, t, n) {
            var r = this._listeners;
            if (!r) return this;
            var i = !t && !n;
            typeof t == "object" && (n = this), e && ((r = {})[e._listenerId] = e);
            for (var s in r) r[s].off(t, n, this), i && delete this._listeners[s];
            return this
        }
    }, f = /\s+/,
        l = function (e, t, n, r) {
            if (!n) return !0;
            if (typeof n == "object") {
                for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                return !1
            }
            if (f.test(n)) {
                var s = n.split(f);
                for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r));
                return !1
            }
            return !0
        }, c = function (e, t) {
            var n, r = -1,
                i = e.length,
                s = t[0],
                o = t[1],
                u = t[2];
            switch (t.length) {
                case 0:
                    while (++r < i) (n = e[r]).callback.call(n.ctx);
                    return;
                case 1:
                    while (++r < i) (n = e[r]).callback.call(n.ctx, s);
                    return;
                case 2:
                    while (++r < i) (n = e[r]).callback.call(n.ctx, s, o);
                    return;
                case 3:
                    while (++r < i) (n = e[r]).callback.call(n.ctx, s, o, u);
                    return;
                default:
                    while (++r < i) (n = e[r]).callback.apply(n.ctx, t)
            }
        }, h = {
            listenTo: "on",
            listenToOnce: "once"
        };
    u.each(h, function (e, t) {
        a[t] = function (t, n, r) {
            var i = this._listeners || (this._listeners = {}),
                s = t._listenerId || (t._listenerId = u.uniqueId("l"));
            return i[s] = t, typeof n == "object" && (r = this), t[e](n, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, u.extend(o, a);
    var p = o.Model = function (e, t) {
        var n, r = e || {};
        t || (t = {}), this.cid = u.uniqueId("c"), this.attributes = {}, u.extend(this, u.pick(t, d)), t.parse && (r = this.parse(r, t) || {});
        if (n = u.result(this, "defaults")) r = u.defaults({}, r, n);
        this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
    }, d = ["url", "urlRoot", "collection"];
    u.extend(p.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () { },
        toJSON: function (e) {
            return u.clone(this.attributes)
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        get: function (e) {
            return this.attributes[e]
        },
        escape: function (e) {
            return u.escape(this.get(e))
        },
        has: function (e) {
            return this.get(e) != null
        },
        set: function (e, t, n) {
            var r, i, s, o, a, f, l, c;
            if (e == null) return this;
            typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
            if (!this._validate(i, n)) return !1;
            s = n.unset, a = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = u.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
            for (r in i) t = i[r], u.isEqual(c[r], t) || o.push(r), u.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n)
            }
            if (f) return this;
            if (!a)
                while (this._pending) this._pending = !1, this.trigger("change", this, n);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function (e, t) {
            return this.set(e, void 0, u.extend({}, t, {
                unset: !0
            }))
        },
        clear: function (e) {
            var t = {};
            for (var n in this.attributes) t[n] = void 0;
            return this.set(t, u.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function (e) {
            return e == null ? !u.isEmpty(this.changed) : u.has(this.changed, e)
        },
        changedAttributes: function (e) {
            if (!e) return this.hasChanged() ? u.clone(this.changed) : !1;
            var t, n = !1,
                r = this._changing ? this._previousAttributes : this.attributes;
            for (var i in e) {
                if (u.isEqual(r[i], t = e[i])) continue;
                (n || (n = {}))[i] = t
            }
            return n
        },
        previous: function (e) {
            return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
        },
        previousAttributes: function () {
            return u.clone(this._previousAttributes)
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = this,
                n = e.success;
            return e.success = function (r) {
                if (!t.set(t.parse(r, e), e)) return !1;
                n && n(t, r, e), t.trigger("sync", t, r, e)
            }, j(this, e), this.sync("read", this, e)
        },
        save: function (e, t, n) {
            var r, i, s, o = this.attributes;
            e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t;
            if (r && (!n || !n.wait) && !this.set(r, n)) return !1;
            n = u.extend({
                validate: !0
            }, n);
            if (!this._validate(r, n)) return !1;
            r && n.wait && (this.attributes = u.extend({}, o, r)), n.parse === void 0 && (n.parse = !0);
            var a = this,
                f = n.success;
            return n.success = function (e) {
                a.attributes = o;
                var t = a.parse(e, n);
                n.wait && (t = u.extend(r || {}, t));
                if (u.isObject(t) && !a.set(t, n)) return !1;
                f && f(a, e, n), a.trigger("sync", a, e, n)
            }, j(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", i === "patch" && (n.attrs = r), s = this.sync(i, this, n), r && n.wait && (this.attributes = o), s
        },
        destroy: function (e) {
            e = e ? u.clone(e) : {};
            var t = this,
                n = e.success,
                r = function () {
                    t.trigger("destroy", t, t.collection, e)
                };
            e.success = function (i) {
                (e.wait || t.isNew()) && r(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
            };
            if (this.isNew()) return e.success(), !1;
            j(this, e);
            var i = this.sync("delete", this, e);
            return e.wait || r(), i
        },
        url: function () {
            var e = u.result(this, "urlRoot") || u.result(this.collection, "url") || B();
            return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (e, t) {
            return e
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return this.id == null
        },
        isValid: function (e) {
            return this._validate({}, u.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function (e, t) {
            if (!t.validate || !this.validate) return !0;
            e = u.extend({}, this.attributes, e);
            var n = this.validationError = this.validate(e, t) || null;
            return n ? (this.trigger("invalid", this, n, u.extend(t || {}, {
                validationError: n
            })), !1) : !0
        }
    });
    var v = ["keys", "values", "pairs", "invert", "pick", "omit"];
    u.each(v, function (e) {
        p.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.attributes), u[e].apply(u, t)
        }
    });
    var m = o.Collection = function (e, t) {
        t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, u.extend({
            silent: !0
        }, t))
    }, g = {
        add: !0,
        remove: !0,
        merge: !0
    }, y = {
        add: !0,
        merge: !1,
        remove: !1
    };
    u.extend(m.prototype, a, {
        model: p,
        initialize: function () { },
        toJSON: function (e) {
            return this.map(function (t) {
                return t.toJSON(e)
            })
        },
        sync: function () {
            return o.sync.apply(this, arguments)
        },
        add: function (e, t) {
            return this.set(e, u.defaults(t || {}, y))
        },
        remove: function (e, t) {
            e = u.isArray(e) ? e.slice() : [e], t || (t = {});
            var n, r, i, s;
            for (n = 0, r = e.length; n < r; n++) {
                s = this.get(e[n]);
                if (!s) continue;
                delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s)
            }
            return this
        },
        set: function (e, t) {
            t = u.defaults(t || {}, g), t.parse && (e = this.parse(e, t)), u.isArray(e) || (e = e ? [e] : []);
            var n, i, o, a, f, l, c = t.at,
                h = this.comparator && c == null && t.sort !== !1,
                p = u.isString(this.comparator) ? this.comparator : null,
                d = [],
                v = [],
                m = {};
            for (n = 0, i = e.length; n < i; n++) {
                if (!(o = this._prepareModel(e[n], t))) continue;
                (f = this.get(o)) ? (t.remove && (m[f.cid] = !0), t.merge && (f.set(o.attributes, t), h && !l && f.hasChanged(p) && (l = !0))) : t.add && (d.push(o), o.on("all", this._onModelEvent, this), this._byId[o.cid] = o, o.id != null && (this._byId[o.id] = o))
            }
            if (t.remove) {
                for (n = 0, i = this.length; n < i; ++n) m[(o = this.models[n]).cid] || v.push(o);
                v.length && this.remove(v, t)
            }
            d.length && (h && (l = !0), this.length += d.length, c != null ? s.apply(this.models, [c, 0].concat(d)) : r.apply(this.models, d)), l && this.sort({
                silent: !0
            });
            if (t.silent) return this;
            for (n = 0, i = d.length; n < i; n++) (o = d[n]).trigger("add", o, this, t);
            return l && this.trigger("sort", this, t), this
        },
        reset: function (e, t) {
            t || (t = {});
            for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
            return t.previousModels = this.models, this._reset(), this.add(e, u.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        push: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: this.length
            }, t)), e
        },
        pop: function (e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function (e, t) {
            return e = this._prepareModel(e, t), this.add(e, u.extend({
                at: 0
            }, t)), e
        },
        shift: function (e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function (e, t) {
            return this.models.slice(e, t)
        },
        get: function (e) {
            return e == null ? void 0 : this._byId[e.id != null ? e.id : e.cid || e]
        },
        at: function (e) {
            return this.models[e]
        },
        where: function (e, t) {
            return u.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                for (var n in e)
                    if (e[n] !== t.get(n)) return !1;
                return !0
            })
        },
        findWhere: function (e) {
            return this.where(e, !0)
        },
        sort: function (e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), u.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(u.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        sortedIndex: function (e, t, n) {
            t || (t = this.comparator);
            var r = u.isFunction(t) ? t : function (e) {
                return e.get(t)
            };
            return u.sortedIndex(this.models, e, r, n)
        },
        pluck: function (e) {
            return u.invoke(this.models, "get", e)
        },
        fetch: function (e) {
            e = e ? u.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
            var t = e.success,
                n = this;
            return e.success = function (r) {
                var i = e.reset ? "reset" : "set";
                n[i](r, e), t && t(n, r, e), n.trigger("sync", n, r, e)
            }, j(this, e), this.sync("read", this, e)
        },
        create: function (e, t) {
            t = t ? u.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return !1;
            t.wait || this.add(e, t);
            var n = this,
                r = t.success;
            return t.success = function (i) {
                t.wait && n.add(e, t), r && r(e, i, t)
            }, e.save(null, t), e
        },
        parse: function (e, t) {
            return e
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function (e, t) {
            if (e instanceof p) return e.collection || (e.collection = this), e;
            t || (t = {}), t.collection = this;
            var n = new this.model(e, t);
            return n._validate(e, t) ? n : (this.trigger("invalid", this, e, t), !1)
        },
        _removeReference: function (e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (e, t, n, r) {
            if ((e === "add" || e === "remove") && n !== this) return;
            e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
        }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    u.each(b, function (e) {
        m.prototype[e] = function () {
            var t = i.call(arguments);
            return t.unshift(this.models), u[e].apply(u, t)
        }
    });
    var w = ["groupBy", "countBy", "sortBy"];
    u.each(w, function (e) {
        m.prototype[e] = function (t, n) {
            var r = u.isFunction(t) ? t : function (e) {
                return e.get(t)
            };
            return u[e](this.models, r, n)
        }
    });
    var E = o.View = function (e) {
        this.cid = u.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, S = /^(\S+)\s*(.*)$/,
        x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    u.extend(E.prototype, a, {
        tagName: "div",
        $: function (e) {
            return this.$el.find(e)
        },
        initialize: function () { },
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function (e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof o.$ ? e : o.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function (e) {
            if (!e && !(e = u.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var n = e[t];
                u.isFunction(n) || (n = this[e[t]]);
                if (!n) continue;
                var r = t.match(S),
                    i = r[1],
                    s = r[2];
                n = u.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
            }
            return this
        },
        undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _configure: function (e) {
            this.options && (e = u.extend({}, u.result(this, "options"), e)), u.extend(this, u.pick(e, x)), this.options = e
        },
        _ensureElement: function () {
            if (!this.el) {
                var e = u.extend({}, u.result(this, "attributes"));
                this.id && (e.id = u.result(this, "id")), this.className && (e["class"] = u.result(this, "className"));
                var t = o.$("<" + u.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            } else this.setElement(u.result(this, "el"), !1)
        }
    }), o.sync = function (e, t, n) {
        var r = T[e];
        u.defaults(n || (n = {}), {
            emulateHTTP: o.emulateHTTP,
            emulateJSON: o.emulateJSON
        });
        var i = {
            type: r,
            dataType: "json"
        };
        n.url || (i.url = u.result(t, "url") || B()), n.data == null && t && (e === "create" || e === "update" || e === "patch") && (i.contentType = "application/json", i.data = JSON.stringify(n.attrs || t.toJSON(n))), n.emulateJSON && (i.contentType = "application/x-www-form-urlencoded", i.data = i.data ? {
            model: i.data
        } : {});
        if (n.emulateHTTP && (r === "PUT" || r === "DELETE" || r === "PATCH")) {
            i.type = "POST", n.emulateJSON && (i.data._method = r);
            var s = n.beforeSend;
            n.beforeSend = function (e) {
                e.setRequestHeader("X-HTTP-Method-Override", r);
                if (s) return s.apply(this, arguments)
            }
        }
        i.type !== "GET" && !n.emulateJSON && (i.processData = !1), i.type === "PATCH" && window.ActiveXObject && (!window.external || !window.external.msActiveXFilteringEnabled) && (i.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var a = n.xhr = o.ajax(u.extend(i, n));
        return t.trigger("request", t, a, n), a
    };
    var T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    o.ajax = function () {
        return o.$.ajax.apply(o.$, arguments)
    };
    var N = o.Router = function (e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g,
        k = /(\(\?)?:\w+/g,
        L = /\*\w+/g,
        A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    u.extend(N.prototype, a, {
        initialize: function () { },
        route: function (e, t, n) {
            u.isRegExp(e) || (e = this._routeToRegExp(e)), u.isFunction(t) && (n = t, t = ""), n || (n = this[t]);
            var r = this;
            return o.history.route(e, function (i) {
                var s = r._extractParameters(e, i);
                n && n.apply(r, s), r.trigger.apply(r, ["route:" + t].concat(s)), r.trigger("route", t, s), o.history.trigger("route", r, t, s)
            }), this
        },
        navigate: function (e, t) {
            return o.history.navigate(e, t), this
        },
        _bindRoutes: function () {
            if (!this.routes) return;
            this.routes = u.result(this, "routes");
            var e, t = u.keys(this.routes);
            while ((e = t.pop()) != null) this.route(e, this.routes[e])
        },
        _routeToRegExp: function (e) {
            return e = e.replace(A, "\\$&").replace(C, "(?:$1)?").replace(k, function (e, t) {
                return t ? e : "([^/]+)"
            }).replace(L, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function (e, t) {
            var n = e.exec(t).slice(1);
            return u.map(n, function (e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var O = o.History = function () {
        this.handlers = [], u.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
    }, M = /^[#\/]|\s+$/g,
        _ = /^\/+|\/+$/g,
        D = /msie [\w.]+/,
        P = /\/$/;
    O.started = !1, u.extend(O.prototype, a, {
        interval: 50,
        getHash: function (e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function (e, t) {
            if (e == null)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var n = this.root.replace(P, "");
                    e.indexOf(n) || (e = e.substr(n.length))
                } else e = this.getHash();
            return e.replace(M, "")
        },
        start: function (e) {
            if (O.started) throw new Error("Backbone.history has already been started");
            O.started = !0, this.options = u.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(),
                n = document.documentMode,
                r = D.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
            this.root = ("/" + this.root + "/").replace(_, "/"), r && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var i = this.location,
                s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(M, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function () {
            o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), O.started = !1
        },
        route: function (e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function (e) {
            var t = this.getFragment();
            t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
            if (t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function (e) {
            var t = this.fragment = this.getFragment(e),
                n = u.any(this.handlers, function (e) {
                    if (e.route.test(t)) return e.callback(t), !0
                });
            return n
        },
        navigate: function (e, t) {
            if (!O.started) return !1;
            if (!t || t === !0) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment === e) return;
            this.fragment = e;
            var n = this.root + e;
            if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
            else {
                if (!this._wantsHashChange) return this.location.assign(n);
                this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
            }
            t.trigger && this.loadUrl(e)
        },
        _updateHash: function (e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else e.hash = "#" + t
        }
    }), o.history = new O;
    var H = function (e, t) {
        var n = this,
            r;
        e && u.has(e, "constructor") ? r = e.constructor : r = function () {
            return n.apply(this, arguments)
        }, u.extend(r, n, t);
        var i = function () {
            this.constructor = r
        };
        return i.prototype = n.prototype, r.prototype = new i, e && u.extend(r.prototype, e), r.__super__ = n.prototype, r
    };
    p.extend = m.extend = N.extend = E.extend = O.extend = H;
    var B = function () {
        throw new Error('A "url" property or function must be specified')
    }, j = function (e, t) {
        var n = t.error;
        t.error = function (r) {
            n && n(e, r, t), e.trigger("error", e, r, t)
        }
    }
}.call(this), define("backbone", ["jquery", "underscore"], function (e) {
    return function () {
        var t, n;
        return t || e.Backbone
    }
}(this)), define("globals", ["module", "jquery", "underscore", "backbone"], function (e, t, n, r) {
    var i = r.Model.extend({
        defaults: {
            debug: !!e.config().debug,
            client: "",
            title: "",
            subtitle: "",
            course_version: "",
            content_version: "",
            description: "",
            disclaimer: "",
            product_number: "",
            copyright: "",
            summary_url: "",
            audioPath: e.config().audioPath || "assets/course/audio/",
            pagePath: e.config().pagePath || "assets/course/pages/",
            audioAutoplay: !0,
            assessmentRequiredScore: 90,
            assessmentUserScore: null,
            assessmentRandomize: !0,
            assessmentPoolCount: 0,
            gate: !1,
            splash: !1,
            showInitialHelp: !1,
            pages: null,
            references: null,
            router: null,
            terms: null,
            topics: null,
            selectedTopic: null,
            selectedPage: null,
            store: null,
            version: e.config().version || "xx.xx.xx"
        }
    });
    return new i
}), define("utils/log", ["jquery"], function (e) {
    var t = {
        logHistory: [],
        log: function () {
            this.logHistory.push(arguments), window.console && console.log(Array.prototype.slice.call(arguments))
        }
    };
    return t
}), define("router", ["jquery", "underscore", "backbone", "globals", "utils/log"], function (e, t, n, r, i) {
    return n.Router.extend({
        routes: {
            "": "topic",
            topics: "topic",
            "topics/:id": "topic",
            "topics/:id/pages/:page_id": "topicAndPage"
        },
        topic: function (e) {
            e = parseInt(e, 10);
            if (r.get("topics")) {
                var t = r.get("topics"),
                    n = t.get(e);
                n || (n = t.at(0)), r.set("selectedTopic", n)
            } else i.log("src/router", "topic : there is no topics data set on src/globals")
        },
        topicAndPage: function (e, t) {
            e = parseInt(e, 10), t = parseInt(t, 10), this.topic(e);
            var n = r.get("selectedTopic");
            if (n) {
                e !== n.id && (t = null);
                var s = n.get("pages"),
                    o = s.get(t) || s.at(0);
                r.set("selectedPage", o)
            } else i.log("src/router", "topicAndPage : there is no topic data set on src/globals")
        }
    })
}), define("mixins/state", ["jquery", "underscore", "backbone"], function (e, t, n) {
    var r = {};
    return r.states = {
        LOCKED: 0,
        NEW: 1,
        VISITED: 2,
        COMPLETED: 3
    }, r.defaultState = r.states.NEW, r.Stateful = function () {
        function e(e) {
            e.set("state", r.defaultState, {
                silent: !0
            })
        }
        return e
    }(), r
}), define("models/page", ["jquery", "underscore", "backbone", "mixins/state"], function (e, t, n, r) {
    return n.Model.extend({
        defaults: {
            audio: null,
            title: null,
            content: null,
            sid: null,
            customFields: null
        },
        initialize: function (e) {
            t.extend(this, new r.Stateful(this))
        }
    })
}), define("collections/pages", ["jquery", "underscore", "backbone", "models/page"], function (e, t, n, r) {
    return n.Collection.extend({
        model: r
    })
}), define("models/topic", ["jquery", "underscore", "backbone", "collections/pages"], function (e, t, n, r) {
    return n.Model.extend({
        defaults: {
            pages: null,
            title: null
        },
        parse: function (e) {
            return e && e.pages && (e.pages = new r(e.pages)), e
        },
        toJSON: function (e) {
            var n = t.clone(this.attributes);
            return this.attributes.pages && (n.pages = t.clone(this.attributes.pages.toJSON())), n
        }
    })
}), define("collections/topics", ["jquery", "underscore", "backbone", "models/topic"], function (e, t, n, r) {
    return n.Collection.extend({
        model: r
    })
}), define("models/term", ["jquery", "underscore", "backbone"], function (e, t, n) {
    return n.Model.extend({
        defaults: {
            name: null,
            definition: null
        },
        initialize: function (e) {
            this.set("name", t.unescape(this.get("name"))), this.set("definition", t.unescape(this.get("definition")))
        }
    })
}), define("collections/terms", ["jquery", "underscore", "backbone", "models/term"], function (e, t, n, r) {
    return n.Collection.extend({
        model: r,
        url: "assets/course/data/terms.json",
        comparator: function (e) {
            return e = e.get("name").replace(/-/g, ""), e.toLowerCase()
        },
        getTermByName: function (e) {
            return t.find(this.models, function (t) {
                return t.get("name").toLowerCase() === e.toLowerCase()
            })
        },
        getTermsStartingWith: function (e) {
            return e = e.toLowerCase(), t.filter(this.models, function (t) {
                return t.get("name").charAt(0).toLowerCase() === e
            })
        },
        getGroupedByLetter: function () {
            return t.groupBy(this.models, function (e) {
                var t = e.get("name").charAt(0);
                return isNaN(parseInt(t, 10)) ? t = t.toLowerCase() : t = "#", t
            })
        }
    })
}), define("models/reference", ["jquery", "underscore", "backbone"], function (e, t, n) {
    return n.Model.extend({
        defaults: {
            source: null,
            url: null,
            date: null
        }
    })
}), define("collections/references", ["jquery", "underscore", "backbone", "models/reference"], function (e, t, n, r) {
    return n.Collection.extend({
        model: r,
        url: "assets/course/data/references.json"
    })
}), define("views/common", ["jquery", "underscore", "backbone", "globals"], function (e, t, n, r) {
    var i = {};
    return i.BaseView = n.View.extend({
        navigate: function (e, t) {
            var n = r.get("router");
            n && n.navigate(e, t)
        },
        remove: function () {
            return this.off(), n.View.prototype.remove.call(this)
        },
        preventEvent: function (e) {
            e.preventDefault(), e.stopPropagation()
        }
    }), i
}), window.Modernizr = function (e, t, n) {
    function r(e) {
        d.cssText = e
    }

    function i(e, t) {
        return r(g.join(e + ";") + (t || ""))
    }

    function s(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return !1
    }
    var a = "2.6.2",
        f = {}, l = !0,
        c = t.documentElement,
        h = "modernizr",
        p = t.createElement(h),
        d = p.style,
        v, m = {}.toString,
        g = " -webkit- -moz- -o- -ms- ".split(" "),
        y = {
            svg: "http://www.w3.org/2000/svg"
        }, b = {}, w = {}, E = {}, S = [],
        x = S.slice,
        T, N = function (e, n, r, i) {
            var s, o, u, a, f = t.createElement("div"),
                l = t.body,
                p = l || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) u = t.createElement("div"), u.id = i ? i[r] : h + (r + 1), f.appendChild(u);
            return s = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), f.id = h, (l ? f : p).innerHTML += s, p.appendChild(f), l || (p.style.background = "", p.style.overflow = "hidden", a = c.style.overflow, c.style.overflow = "hidden", c.appendChild(p)), o = n(f, e), l ? f.parentNode.removeChild(f) : (p.parentNode.removeChild(p), c.style.overflow = a), !!o
        }, C = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t).matches;
            var r;
            return N("@media " + t + " { #" + h + " { position: absolute; } }", function (t) {
                r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
            }), r
        }, k = {}.hasOwnProperty,
        L;
    !s(k, "undefined") && !s(k.call, "undefined") ? L = function (e, t) {
        return k.call(e, t)
    } : L = function (e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if (typeof t != "function") throw new TypeError;
        var n = x.call(arguments, 1),
            r = function () {
                if (this instanceof r) {
                    var i = function () { };
                    i.prototype = t.prototype;
                    var s = new i,
                        o = t.apply(s, n.concat(x.call(arguments)));
                    return Object(o) === o ? o : s
                }
                return t.apply(e, n.concat(x.call(arguments)))
            };
        return r
    }), b.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : N(["@media (", g.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = e.offsetTop === 9
        }), n
    }, b.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(y.svg, "svg").createSVGRect
    }, b.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == y.svg
    }, b.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(m.call(t.createElementNS(y.svg, "clipPath")))
    };
    for (var A in b) L(b, A) && (T = A.toLowerCase(), f[T] = b[A](), S.push((f[T] ? "" : "no-") + T));
    return f.addTest = function (e, t) {
        if (typeof e == "object")
            for (var r in e) L(e, r) && f.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (f[e] !== n) return f;
            t = typeof t == "function" ? t() : t, typeof l != "undefined" && l && (c.className += " " + (t ? "" : "no-") + e), f[e] = t
        }
        return f
    }, r(""), p = v = null,
    function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e
        }

        function i(e) {
            var t = v[e[p]];
            return t || (t = {}, d++, e[p] = d, v[d] = t), t
        }

        function s(e, n, r) {
            n || (n = t);
            if (m) return n.createElement(e);
            r || (r = i(n));
            var s;
            return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
        }

        function o(e, n) {
            e || (e = t);
            if (m) return e.createDocumentFragment();
            n = n || i(e);
            var s = n.frag.cloneNode(),
                o = 0,
                u = r(),
                a = u.length;
            for (; o < a; o++) s.createElement(u[o]);
            return s
        }

        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return g.shivMethods ? s(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }

        function a(e) {
            e || (e = t);
            var r = i(e);
            return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
        }
        var f = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h, p = "_html5shiv",
            d = 0,
            v = {}, m;
        (function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, m = e.childNodes.length == 1 || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                h = !0, m = !0
            }
        })();
        var g = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: m,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: s,
            createDocumentFragment: o
        };
        e.html5 = g, a(t)
    }(this, t), f._version = a, f._prefixes = g, f.mq = C, f.testStyles = N, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (l ? " js " + S.join(" ") : ""), f
}(this, this.document),
function (e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function s() { }

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function u() {
        var e = v.shift();
        m = 1, e ? e.t ? h(function () {
            ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), u()) : m = 0
    }

    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    b.removeChild(c)
                }, 50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }
        var f = f || k.errorTimeout,
            c = t.createElement(e),
            d = 0,
            g = 0,
            w = {
                t: r,
                s: n,
                e: s,
                a: a,
                x: f
            };
        1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function () {
            l.call(this, g)
        }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
    }

    function f(e, t, n, r, s) {
        return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
    }

    function l() {
        var e = k;
        return e.loader = {
            load: f,
            i: 0
        }, e
    }
    var c = t.documentElement,
        h = e.setTimeout,
        p = t.getElementsByTagName("script")[0],
        d = {}.toString,
        v = [],
        m = 0,
        g = "MozAppearance" in c.style,
        y = g && !!t.createRange().compareNode,
        b = y ? c : p.parentNode,
        c = e.opera && "[object Opera]" == d.call(e.opera),
        c = !!t.attachEvent && !c,
        w = g ? "object" : c ? "script" : "img",
        E = c ? "script" : w,
        S = Array.isArray || function (e) {
            return "[object Array]" == d.call(e)
        }, x = [],
        T = {}, N = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        }, C, k;
    k = function (e) {
        function t(e) {
            var e = e.split("!"),
                t = x.length,
                n = e.pop(),
                r = e.length,
                n = {
                    url: n,
                    origUrl: n,
                    prefixes: e
                }, i, s, o;
            for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++) n = x[s](n);
            return n
        }

        function o(e, i, s, o, u) {
            var a = t(e),
                f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function () {
                l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
            })))
        }

        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e)) n || (f = function () {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    }), o(e, f, t, 0, u);
                    else if (Object(e) === e)
                        for (p in h = function () {
                            var t = 0,
                                n;
                            for (n in e) e.hasOwnProperty(n) && t++;
                            return t
                        }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function () {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        } : f[p] = function (e) {
                            return function () {
                                var t = [].slice.call(arguments);
                                e && e.apply(this, t), c()
                            }
                        }(l[p])), o(e[p], f, t, p, u))
                } else !n && c()
            }
            var u = !!e.test,
                a = e.load || e.both,
                f = e.callback || s,
                l = f,
                c = e.complete || s,
                h, p;
            n(u ? e.yep : e.nope, !!a), a && n(a)
        }
        var a, f, c = this.yepnope.loader;
        if (i(e)) o(e, 0, c, 0);
        else if (S(e))
            for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
        else Object(e) === e && u(e, c)
    }, k.addPrefix = function (e, t) {
        N[e] = t
    }, k.addFilter = function (e) {
        x.push(e)
    }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function () {
        t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function (e, n, r, i, a, f) {
        var l = t.createElement("script"),
            c, d, i = i || k.errorTimeout;
        l.src = e;
        for (d in r) l.setAttribute(d, r[d]);
        n = f ? u : n || s, l.onreadystatechange = l.onload = function () {
            !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
        }, h(function () {
            c || (c = 1, n(1))
        }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
    }, e.yepnope.injectCss = function (e, n, r, i, o, a) {
        var i = t.createElement("link"),
            f, n = a ? u : n || s;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (f in r) i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("ie8compat", function () {
    return !window.addEventListener && document.documentMode && document.documentMode === 7
}), define("vendor/custom.modernizr", ["jquery"], function (e) {
    return function () {
        var t, n;
        return t || e.Modernizr
    }
}(this)),
function () {
    var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        t = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        n = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        r = [],
        i = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g
        }, s = function (e, t) {
            var n = i,
                r = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.interpolate, function (e, t) {
                    return "'," + t.replace(/\\'/g, "'") + ",'"
                }).replace(n.evaluate || null, function (e, t) {
                    return "');" + t.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "; __p.push('"
                }).replace(/\r/g, "").replace(/\n/g, "").replace(/\t/g, "") + "');}return __p.join('');";
            return r
        };
    define("tpl", [], function () {
        var i, o, u;
        return typeof window != "undefined" && window.navigator && window.document ? o = function (e, t) {
            var n = i.createXhr();
            n.open("GET", e, !0), n.onreadystatechange = function (e) {
                n.readyState === 4 && t(n.responseText)
            }, n.send(null)
        } : typeof process != "undefined" && process.versions && !!process.versions.node && (u = require.nodeRequire("fs"), o = function (e, t) {
            t(u.readFileSync(e, "utf8"))
        }), i = {
            version: "0.24.0",
            strip: function (e) {
                if (e) {
                    e = e.replace(t, "");
                    var r = e.match(n);
                    r && (e = r[1])
                } else e = "";
                return e
            },
            jsEscape: function (e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "").replace(/[\t]/g, "").replace(/[\r]/g, "")
            },
            createXhr: function () {
                var t, n, r;
                if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
                for (n = 0; n < 3; n++) {
                    r = e[n];
                    try {
                        t = new ActiveXObject(r)
                    } catch (i) { }
                    if (t) {
                        e = [r];
                        break
                    }
                }
                if (!t) throw new Error("require.getXhr(): XMLHttpRequest not available");
                return t
            },
            get: o,
            load: function (e, t, n, o) {
                var u = !1,
                    a, f = e.indexOf("."),
                    l = e.substring(0, f),
                    c = e.substring(f + 1, e.length);
                f = c.indexOf("!"), f !== -1 && (u = c.substring(f + 1, c.length), u = u === "strip", c = c.substring(0, f)), a = "nameToUrl" in t ? t.nameToUrl(l, "." + c) : t.toUrl(l + "." + c), i.get(a, function (t) {
                    t = s(t), o.isBuild || (t = new Function("obj", t)), t = u ? i.strip(t) : t, o.isBuild && o.inlineText && (r[e] = t), n(t)
                })
            },
            write: function (e, t, n) {
                if (t in r) {
                    var s = i.jsEscape(r[t]);
                    n("define('" + e + "!" + t + "', function() {return function(obj) { " + s.replace(/(\\')/g, "'").replace(/(\\\\)/g, "\\") + "}});\n")
                }
            }
        }
    })
}(), define("tpl!templates/splash.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="outer-container">    <div class="inner-container">        <div class="header">            <h1>', title, '</h1>        </div>        <div class="splash-content-container">            <div class="splash-content">                <div class="intro-content">                    <p>', description, '</p>                    <p class="copy">', copyright, '</p>                    <p class="copy">Content Version: ', content_version, '</p>                    <p class="copy">Platform Version: ', version, '</p>                </div>                <div class="btn-container">                    <a class="btn text-center" href="#">', buttonText, '</a>                </div>            </div>            <div class="img-content">                <img src="assets/course/images/pages/splash.png">            </div>        </div>    </div></div><div class="bg"></div>');
        return __p.join("")
    }
}), define("views/splash", ["jquery", "underscore", "backbone", "mixins/state", "vendor/custom.modernizr", "views/common", "tpl!templates/splash.tpl"], function (e, t, n, r, i, s, o) {
    var u = s.BaseView.extend({
        className: "modal splash",
        events: function () {
            var e = {};
            return e["click a"] = "onBtnClick", e
        },
        render: function () {
            var e = this.model.get("topics");
            if (e) {
                var n = e.pluck("pages"),
                    i = t.flatten(t.pluck(n, "models")),
                    s = t.filter(i, function (e) {
                        return e.get("state") === r.states.COMPLETED
                    }),
                    u = s && s.length > 1 ? "Continue" : "Start";
                this.$el.html(o({
                    title: this.model.get("title"),
                    description: this.model.get("description"),
                    copyright: this.model.get("copyright"),
                    content_version: this.model.get("content_version"),
                    version: this.model.get("version"),
                    buttonText: u
                }))
            }
            return this
        },
        onBtnClick: function (e) {
            e && this.preventEvent(e), this.trigger(u.events.CONTINUE)
        }
    });
    return u.events = {
        CONTINUE: 0
    }, u
}), define("tpl!templates/globalnav.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="toc">    <h1 class="header">Menu</h1>    <nav class="topic-link-list"></nav></div>');
        return __p.join("")
    }
}), define("tpl!templates/topicLinkList.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push(""), _.each(topics, function (e) {
            __p.push('<div class="section topic">    <h2 class="title">', e.title, '</h1>    <ul class="unstyled">    '), _.each(e.pages, function (t) {
                __p.push("        ");
                var n = t.state === 3 ? "completed" : t.state === 0 ? "locked" : "";
                __p.push('        <li class="', n, '">            <a href="#topics/', e.id, "/pages/", t.id, '" data-pid="', t.id, '">                <i class="icon-ok"></i>                <i class="icon-lock"></i>                ', t.title, "            </a>        </li>    ")
            }), __p.push("    </ul></div>")
        }), __p.push("");
        return __p.join("")
    }
}), define("views/topicLinkList", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "mixins/state", "views/common", "tpl!templates/topicLinkList.tpl"], function (e, t, n, r, i, s, o) {
    return s.BaseView.extend({
        className: "topic-link-list",
        events: function () {
            var e = {};
            return e["click li a"] = "onLinkClick", e
        },
        initialize: function (e) {
            t.bindAll(this, "onPageStateChange");
            if (e && "collection" in e) {
                var n = this;
                e.collection.each(function (e) {
                    this.listenTo(e.get("pages"), "change:state", this.onPageStateChange)
                }, this)
            }
        },
        render: function () {
            var e = this.collection ? this.collection.toJSON() : [];
            return this.$el.html(o({
                topics: e
            })), this
        },
        setActivePage: function (e) {
            this.setActiveLink(this.$('[data-pid="' + e.id + '"]'))
        },
        setActiveLink: function (t) {
            this.$(".active").removeClass("active"), e(t).parent().addClass("active")
        },
        onLinkClick: function (t) {
            t && this.preventEvent(t);
            var n = e(t.currentTarget);
            n.parent().hasClass("locked") || (window.location.hash = n.attr("href"), this.setActiveLink(n))
        },
        onPageStateChange: function (e, t) {
            var n = this.$('[data-pid="' + e.id + '"]').parent();
            e.get("state") === i.states.COMPLETED ? n.removeClass("locked").addClass("completed") : e.get("state") === i.states.LOCKED ? n.removeClass("completed").addClass("locked") : n.removeClass("locked completed")
        }
    })
}), define("views/globalnav", ["jquery", "underscore", "backbone", "views/common", "tpl!templates/globalnav.tpl", "views/topicLinkList"], function (e, t, n, r, i, s) {
    return r.BaseView.extend({
        _topicLinkList: null,
        initialize: function (e) {
            t.bindAll(this, "onOrientationChange", "onSelectedPageChange")
        },
        render: function () {
            this.$el.html(i());
            if (this.model) {
                var t = this.model.get("topics");
                if (t && t.length) {
                    this._topicLinkList = new s({
                        collection: t
                    });
                    var n = this.model.get("selectedPage") || t.at(0).get("pages").at(0);
                    this.$(".topic-link-list").html(this._topicLinkList.render().el)
                }
                this.listenTo(this.model, "change:selectedPage", this.onSelectedPageChange)
            }
            return "DeviceOrientationEvent" in window && e(window).off("orientationchange", this.onOrientationChange).on("orientationchange", this.onOrientationChange), this
        },
        onSelectedPageChange: function (e) {
            var t = this.model.get("selectedPage");
            this._topicLinkList.setActivePage(t)
        },
        onOrientationChange: function (e) {
            this.el && (this.el.style.display = "none", this.el.offsetHeight, this.el.style.display = "block")
        },
        remove: function () {
            return this._topicLinkList && (this._topicLinkList.remove(), this._topicLinkList = null), r.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/topbar.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<section class="top-bar-section">    <a class="left text-center btn-menu btn-double-border-right" href="#"><i class="icon-reorder"></i></a>    <div class="logo"><h1 class="hide-text">', client, "</h1></div></section><h2>", title, "</h2>");
        return __p.join("")
    }
}), define("views/topbar", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "globals", "views/common", "tpl!templates/topbar.tpl"], function (e, t, n, r, i, s, o) {
    var u = s.BaseView.extend({
        _client: "",
        _title: "",
        tagName: "nav",
        className: "row top-bar",
        events: function () {
            var e = {};
            return e["click .btn-menu"] = "onMenuToggle", e
        },
        initialize: function (e) {
            e && (this._client = "client" in e && e.client || "", this._title = "title" in e && e.title || "")
        },
        render: function () {
            return this.$el.html(o({
                client: this._client,
                title: this._title
            })), this
        },
        onMenuToggle: function (e) {
            e.preventDefault(), this.trigger(u.events.MENU_TOGGLE)
        }
    });
    return u.events = {
        MENU_TOGGLE: 0
    }, u
}), define("utils/widgetManager", ["jquery", "underscore", "utils/log"], function (e, t, n) {
    var r = function () { };
    return t.extend(r.prototype, {
        widgets: {},
        registerWidget: function (e) {
            var t = e.prototype.selector;
            t ? this.widgets[t] = {
                constructor: e,
                selector: t
            } : n.log("utils/widgetManager", "registerWidget : the widget that is being registered does not have a selector attribute on its prototype")
        },
        attach: function (n) {
            n = e(n), t.each(this.widgets, function (e) {
                var r = n.find(e.selector);
                r.length && t.each(r, function (t) {
                    var n = new e.constructor({
                        el: t
                    });
                    e.instances = e.instances || [], e.instances.push(n)
                })
            })
        },
        detach: function (n) {
            n = e(n), t.each(this.widgets, function (e) {
                if (e.instances && e.instances.length) {
                    var r = n.find(e.selector),
                        i = [];
                    r.length && t.each(r, function (n) {
                        var r = t.where(e.instances, {
                            el: n
                        });
                        t.each(r, function (e) {
                            e.remove()
                        }), i = i.concat(r)
                    }), e.instances = t.difference(e.instances, i)
                }
            })
        },
        detachAll: function () {
            t.each(this.widgets, function (e) {
                e.instances && e.instances.length && (t.each(e.instances, function (e) {
                    e.remove()
                }), e.instances = [])
            })
        }
    }), new r
}), define("tpl!templates/page.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="title-container">    <h3>', topic.title, "</h3>    <h4>", page.title, '</h4>    <div class="sid">', page.sid, "</div></div>", page.content, "");
        return __p.join("")
    }
}),
function (e) {
    e.fn.rwdImageMaps = function () {
        return this.each(function () {
            if (typeof e(this).attr("usemap") == "undefined") return;
            var t = this,
                n = e(t);
            e("<img />").load(function () {
                var t = "width",
                    r = "height",
                    i = n.attr(t),
                    s = n.attr(r);
                if (!i || !s) {
                    var o = new Image;
                    o.src = n.attr("src"), i || (i = o.width), s || (s = o.height)
                }
                var u = n.width() / 100,
                    a = n.height() / 100,
                    f = n.attr("usemap").replace("#", ""),
                    l = "coords";
                e('map[name="' + f + '"]').find("area").each(function () {
                    var t = e(this);
                    t.data(l) || t.data(l, t.attr(l));
                    var n = t.data(l).split(","),
                        r = new Array(n.length);
                    for (var o = 0; o < r.length; ++o) o % 2 === 0 ? r[o] = parseInt(n[o] / i * 100 * u) : r[o] = parseInt(n[o] / s * 100 * a);
                    t.attr(l, r.toString())
                })
            }).attr("src", n.attr("src"))
        }), this
    }
}(jQuery), define("vendor/jquery.rwdImageMaps", ["jquery"], function (e) {
    return function () {
        var t, n;
        return t || e.$
    }
}(this)), define("views/page", ["jquery", "underscore", "backbone", "globals", "vendor/custom.modernizr", "views/common", "utils/log", "utils/widgetManager", "tpl!templates/page.tpl", "vendor/jquery.rwdImageMaps"], function (e, t, n, r, i, s, o, u, a) {
    function c(t) {
        f ? t && t(f) : l = e.get(r.get("pagePath") + "content.html", function (n) {
            f = e(n), t && t(f)
        })
    }
    var f, l, h = !1;
    return s.BaseView.extend({
        _topic: null,
        _page: null,
        _imageMaps: null,
        className: "row page",
        initialize: function (e) {
            t.bindAll(this, "onContentReady", "onContentPainted", "onWindowResize"), this._topic = e.topic || null, this._page = e.page || null
        },
        events: function () {
            var e = {};
            return i && i.touch ? e["touchstart .title-container"] = "onTitleTouchStart" : e["dblclick .title-container"] = "onTitleDoubleClick", e
        },
        render: function () {
            e(window).scrollTop(0);
            var t = this;
            h && this.$el.addClass("debug");
            if (this._page)
                if (!this._page.get("content"))
                    if (r.get("debug")) {
                        var n = r.get("pagePath") + this._page.get("sid") + ".html";
                        l = e.get(n, this.onContentReady)
                    } else c(function (e) {
                        var n = e.filter("#" + t._page.get("sid")).prop("outerHTML");
                        t.onContentReady(n)
                    });
                else this.onContentReady(this._page.get("content"));
            return this
        },
        onContentReady: function (e) {
            if (!t.isString(e)) {
                o.log("views/page onContentReady method expects content parameter to be a string");
                return
            }
            this._page.set("content", e);
            var n = this._topic.toJSON(),
                r = this._page.toJSON();
            this.$el.html(a({
                topic: n,
                page: r
            })), setTimeout(this.onContentPainted, 0)
        },
        onContentPainted: function (n) {
            u.attach(this.el);
            var r = this.$("img[usemap]");
            r.length && (this._imageMaps = r, e(window).on("resize." + this.cid, t.debounce(this.onWindowResize, 200)))
        },
        onWindowResize: function (e) {
            this._imageMaps && this._imageMaps.rwdImageMaps()
        },
        onTitleTouchStart: function (t) {
            var n = e.data(t.target),
                r = (new Date).getTime(),
                i = n.lastTouch ? r - n.lastTouch : 0,
                s = s == null ? 300 : s;
            i < s && i > 30 ? (n.lastTouch = null, ["clientX", "clientY", "pageX", "pageY"].forEach(function (e) {
                t[e] = t.originalEvent.changedTouches[0][e]
            }), this.onTitleDoubleClick()) : n.lastTouch = r
        },
        onTitleDoubleClick: function (e) {
            e && this.preventEvent(e), r.get("debug") && (h = !h, this.$el.toggleClass("debug"))
        },
        remove: function () {
            return l && (l.abort(), l = null), this._imageMaps && (e(window).off("resize." + this.cid), this._imageMaps.resize = null, this._imageMaps = null), this._topic = null, this._page = null, u.detach(this.el), s.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/audioPlayer.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div id="jquery_jplayer_1" class="jp-jplayer"></div><div id="jp_container_1" class="jp-audio">    <div class="jp-type-single">        <div class="jp-gui jp-interface">            <ul class="jp-controls">                <li><a href="javascript:;" class="jp-play" tabindex="1"><i class="icon-play-sign"></i></a></li>                <li><a href="javascript:;" class="jp-pause" tabindex="1"><i class="icon-pause"></i></a></li>            </ul>            <div class="jp-progress">                <div class="jp-seek-bar">                    <div class="jp-play-bar"></div>                </div>            </div>            <div class="jp-time-holder">                <div class="jp-current-time"></div> /                <div class="jp-duration"></div>            </div>        </div>    </div></div>');
        return __p.join("")
    }
}),
function (e, t) {
    typeof define == "function" && define.amd ? define("jplayer", ["jquery"], t) : e.jQuery ? t(e.jQuery) : t(e.Zepto)
}(this, function (e, t) {
    e.fn.jPlayer = function (n) {
        var r = "jPlayer",
            i = typeof n == "string",
            s = Array.prototype.slice.call(arguments, 1),
            o = this;
        return n = !i && s.length ? e.extend.apply(null, [!0, n].concat(s)) : n, i && n.charAt(0) === "_" ? o : (i ? this.each(function () {
            var i = e(this).data(r),
                u = i && e.isFunction(i[n]) ? i[n].apply(i, s) : i;
            if (u !== i && u !== t) return o = u, !1
        }) : this.each(function () {
            var t = e(this).data(r);
            t ? t.option(n || {}) : e(this).data(r, new e.jPlayer(n, this))
        }), o)
    }, e.jPlayer = function (t, n) {
        if (arguments.length) {
            this.element = e(n), this.options = e.extend(!0, {}, this.options, t);
            var r = this;
            this.element.bind("remove.jPlayer", function () {
                r.destroy()
            }), this._init()
        }
    }, typeof e.fn.stop != "function" && (e.fn.stop = function () { }), e.jPlayer.emulateMethods = "load play pause", e.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate", e.jPlayer.emulateOptions = "muted volume", e.jPlayer.reservedEvent = "ready flashreset resize repeat error warning", e.jPlayer.event = {}, e.each(["ready", "setmedia", "flashreset", "resize", "repeat", "click", "error", "warning", "loadstart", "progress", "suspend", "abort", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"], function () {
        e.jPlayer.event[this] = "jPlayer_" + this
    }), e.jPlayer.htmlEvent = ["loadstart", "abort", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough"], e.jPlayer.pause = function () {
        e.each(e.jPlayer.prototype.instances, function (e, t) {
            t.data("jPlayer").status.srcSet && t.jPlayer("pause")
        })
    }, e.jPlayer.timeFormat = {
        showHour: !1,
        showMin: !0,
        showSec: !0,
        padHour: !1,
        padMin: !0,
        padSec: !0,
        sepHour: ":",
        sepMin: ":",
        sepSec: ""
    };
    var n = function () {
        this.init()
    };
    n.prototype = {
        init: function () {
            this.options = {
                timeFormat: e.jPlayer.timeFormat
            }
        },
        time: function (e) {
            e = e && typeof e == "number" ? e : 0;
            var t = new Date(e * 1e3),
                n = t.getUTCHours(),
                r = this.options.timeFormat.showHour ? t.getUTCMinutes() : t.getUTCMinutes() + n * 60,
                i = this.options.timeFormat.showMin ? t.getUTCSeconds() : t.getUTCSeconds() + r * 60,
                s = this.options.timeFormat.padHour && n < 10 ? "0" + n : n,
                o = this.options.timeFormat.padMin && r < 10 ? "0" + r : r,
                u = this.options.timeFormat.padSec && i < 10 ? "0" + i : i,
                a = "";
            return a += this.options.timeFormat.showHour ? s + this.options.timeFormat.sepHour : "", a += this.options.timeFormat.showMin ? o + this.options.timeFormat.sepMin : "", a += this.options.timeFormat.showSec ? u + this.options.timeFormat.sepSec : "", a
        }
    };
    var r = new n;
    e.jPlayer.convertTime = function (e) {
        return r.time(e)
    }, e.jPlayer.uaBrowser = function (e) {
        var t = e.toLowerCase(),
            n = /(webkit)[ \/]([\w.]+)/,
            r = /(opera)(?:.*version)?[ \/]([\w.]+)/,
            i = /(msie) ([\w.]+)/,
            s = /(mozilla)(?:.*? rv:([\w.]+))?/,
            o = n.exec(t) || r.exec(t) || i.exec(t) || t.indexOf("compatible") < 0 && s.exec(t) || [];
        return {
            browser: o[1] || "",
            version: o[2] || "0"
        }
    }, e.jPlayer.uaPlatform = function (e) {
        var t = e.toLowerCase(),
            n = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,
            r = /(ipad|playbook)/,
            i = /(android)/,
            s = /(mobile)/,
            o = n.exec(t) || [],
            u = r.exec(t) || !s.exec(t) && i.exec(t) || [];
        return o[1] && (o[1] = o[1].replace(/\s/g, "_")), {
            platform: o[1] || "",
            tablet: u[1] || ""
        }
    }, e.jPlayer.browser = {}, e.jPlayer.platform = {};
    var i = e.jPlayer.uaBrowser(navigator.userAgent);
    i.browser && (e.jPlayer.browser[i.browser] = !0, e.jPlayer.browser.version = i.version);
    var s = e.jPlayer.uaPlatform(navigator.userAgent);
    s.platform && (e.jPlayer.platform[s.platform] = !0, e.jPlayer.platform.mobile = !s.tablet, e.jPlayer.platform.tablet = !!s.tablet), e.jPlayer.getDocMode = function () {
        var t;
        return e.jPlayer.browser.msie && (document.documentMode ? t = document.documentMode : (t = 5, document.compatMode && document.compatMode === "CSS1Compat" && (t = 7))), t
    }, e.jPlayer.browser.documentMode = e.jPlayer.getDocMode(), e.jPlayer.nativeFeatures = {
        init: function () {
            var e = document,
                t = e.createElement("video"),
                n = {
                    w3c: ["fullscreenEnabled", "fullscreenElement", "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenerror"],
                    moz: ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror"],
                    webkit: ["", "webkitCurrentFullScreenElement", "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", ""],
                    webkitVideo: ["webkitSupportsFullscreen", "webkitDisplayingFullscreen", "webkitEnterFullscreen", "webkitExitFullscreen", "", ""]
                }, r = ["w3c", "moz", "webkit", "webkitVideo"],
                i, s, o;
            this.fullscreen = i = {
                support: {
                    w3c: !!e[n.w3c[0]],
                    moz: !!e[n.moz[0]],
                    webkit: typeof e[n.webkit[3]] == "function",
                    webkitVideo: typeof t[n.webkitVideo[2]] == "function"
                },
                used: {}
            };
            for (s = 0, o = r.length; s < o; s++) {
                var u = r[s];
                if (i.support[u]) {
                    i.spec = u, i.used[u] = !0;
                    break
                }
            }
            if (i.spec) {
                var a = n[i.spec];
                i.api = {
                    fullscreenEnabled: !0,
                    fullscreenElement: function (t) {
                        return t = t ? t : e, t[a[1]]
                    },
                    requestFullscreen: function (e) {
                        return e[a[2]]()
                    },
                    exitFullscreen: function (t) {
                        return t = t ? t : e, t[a[3]]()
                    }
                }, i.event = {
                    fullscreenchange: a[4],
                    fullscreenerror: a[5]
                }
            } else i.api = {
                fullscreenEnabled: !1,
                fullscreenElement: function () {
                    return null
                },
                requestFullscreen: function () { },
                exitFullscreen: function () { }
            }, i.event = {}
        }
    }, e.jPlayer.nativeFeatures.init(), e.jPlayer.focus = null, e.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
    var o = function (t) {
        var n = e.jPlayer.focus,
            r;
        n && (e.each(e.jPlayer.keyIgnoreElementNames.split(/\s+/g), function (e, n) {
            if (t.target.nodeName.toUpperCase() === n.toUpperCase()) return r = !0, !1
        }), r || e.each(n.options.keyBindings, function (r, i) {
            if (i && t.which === i.key && e.isFunction(i.fn)) return t.preventDefault(), i.fn(n), !1
        }))
    };
    e.jPlayer.keys = function (t) {
        var n = "keydown.jPlayer";
        e(document.documentElement).unbind(n), t && e(document.documentElement).bind(n, o)
    }, e.jPlayer.keys(!0), e.jPlayer.prototype = {
        count: 0,
        version: {
            script: "2.6.1",
            needFlash: "2.6.0",
            flash: "unknown"
        },
        options: {
            swfPath: "js",
            solution: "html, flash",
            supplied: "mp3",
            preload: "metadata",
            volume: .8,
            muted: !1,
            remainingDuration: !1,
            toggleDuration: !1,
            captureDuration: !0,
            playbackRate: 1,
            defaultPlaybackRate: 1,
            minPlaybackRate: .5,
            maxPlaybackRate: 4,
            wmode: "opaque",
            backgroundColor: "#000000",
            cssSelectorAncestor: "#jp_container_1",
            cssSelector: {
                videoPlay: ".jp-video-play",
                play: ".jp-play",
                pause: ".jp-pause",
                stop: ".jp-stop",
                seekBar: ".jp-seek-bar",
                playBar: ".jp-play-bar",
                mute: ".jp-mute",
                unmute: ".jp-unmute",
                volumeBar: ".jp-volume-bar",
                volumeBarValue: ".jp-volume-bar-value",
                volumeMax: ".jp-volume-max",
                playbackRateBar: ".jp-playback-rate-bar",
                playbackRateBarValue: ".jp-playback-rate-bar-value",
                currentTime: ".jp-current-time",
                duration: ".jp-duration",
                title: ".jp-title",
                fullScreen: ".jp-full-screen",
                restoreScreen: ".jp-restore-screen",
                repeat: ".jp-repeat",
                repeatOff: ".jp-repeat-off",
                gui: ".jp-gui",
                noSolution: ".jp-no-solution"
            },
            smoothPlayBar: !1,
            fullScreen: !1,
            fullWindow: !1,
            autohide: {
                restored: !1,
                full: !0,
                fadeIn: 200,
                fadeOut: 600,
                hold: 1e3
            },
            loop: !1,
            repeat: function (t) {
                t.jPlayer.options.loop ? e(this).unbind(".jPlayerRepeat").bind(e.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
                    e(this).jPlayer("play")
                }) : e(this).unbind(".jPlayerRepeat")
            },
            nativeVideoControls: {},
            noFullWindow: {
                msie: /msie [0-6]\./,
                ipad: /ipad.*?os [0-4]\./,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android [0-3]\.(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/
            },
            noVolume: {
                ipad: /ipad/,
                iphone: /iphone/,
                ipod: /ipod/,
                android_pad: /android(?!.*?mobile)/,
                android_phone: /android.*?mobile/,
                blackberry: /blackberry/,
                windows_ce: /windows ce/,
                iemobile: /iemobile/,
                webos: /webos/,
                playbook: /playbook/
            },
            timeFormat: {},
            keyEnabled: !1,
            audioFullScreen: !1,
            keyBindings: {
                play: {
                    key: 32,
                    fn: function (e) {
                        e.status.paused ? e.play() : e.pause()
                    }
                },
                fullScreen: {
                    key: 13,
                    fn: function (e) {
                        (e.status.video || e.options.audioFullScreen) && e._setOption("fullScreen", !e.options.fullScreen)
                    }
                },
                muted: {
                    key: 8,
                    fn: function (e) {
                        e._muted(!e.options.muted)
                    }
                },
                volumeUp: {
                    key: 38,
                    fn: function (e) {
                        e.volume(e.options.volume + .1)
                    }
                },
                volumeDown: {
                    key: 40,
                    fn: function (e) {
                        e.volume(e.options.volume - .1)
                    }
                }
            },
            verticalVolume: !1,
            verticalPlaybackRate: !1,
            globalVolume: !1,
            idPrefix: "jp",
            noConflict: "jQuery",
            emulateHtml: !1,
            consoleAlerts: !0,
            errorAlerts: !1,
            warningAlerts: !1
        },
        optionsAudio: {
            size: {
                width: "0px",
                height: "0px",
                cssClass: ""
            },
            sizeFull: {
                width: "0px",
                height: "0px",
                cssClass: ""
            }
        },
        optionsVideo: {
            size: {
                width: "480px",
                height: "270px",
                cssClass: "jp-video-270p"
            },
            sizeFull: {
                width: "100%",
                height: "100%",
                cssClass: "jp-video-full"
            }
        },
        instances: {},
        status: {
            src: "",
            media: {},
            paused: !0,
            format: {},
            formatType: "",
            waitForPlay: !0,
            waitForLoad: !0,
            srcSet: !1,
            video: !1,
            seekPercent: 0,
            currentPercentRelative: 0,
            currentPercentAbsolute: 0,
            currentTime: 0,
            duration: 0,
            remaining: 0,
            videoWidth: 0,
            videoHeight: 0,
            readyState: 0,
            networkState: 0,
            playbackRate: 1,
            ended: 0
        },
        internal: {
            ready: !1
        },
        solution: {
            html: !0,
            flash: !0
        },
        format: {
            mp3: {
                codec: 'audio/mpeg; codecs="mp3"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4a: {
                codec: 'audio/mp4; codecs="mp4a.40.2"',
                flashCanPlay: !0,
                media: "audio"
            },
            m3u8a: {
                codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
                flashCanPlay: !1,
                media: "audio"
            },
            m3ua: {
                codec: "audio/mpegurl",
                flashCanPlay: !1,
                media: "audio"
            },
            oga: {
                codec: 'audio/ogg; codecs="vorbis, opus"',
                flashCanPlay: !1,
                media: "audio"
            },
            flac: {
                codec: "audio/x-flac",
                flashCanPlay: !1,
                media: "audio"
            },
            wav: {
                codec: 'audio/wav; codecs="1"',
                flashCanPlay: !1,
                media: "audio"
            },
            webma: {
                codec: 'audio/webm; codecs="vorbis"',
                flashCanPlay: !1,
                media: "audio"
            },
            fla: {
                codec: "audio/x-flv",
                flashCanPlay: !0,
                media: "audio"
            },
            rtmpa: {
                codec: 'audio/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "audio"
            },
            m4v: {
                codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !0,
                media: "video"
            },
            m3u8v: {
                codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
                flashCanPlay: !1,
                media: "video"
            },
            m3uv: {
                codec: "audio/mpegurl",
                flashCanPlay: !1,
                media: "video"
            },
            ogv: {
                codec: 'video/ogg; codecs="theora, vorbis"',
                flashCanPlay: !1,
                media: "video"
            },
            webmv: {
                codec: 'video/webm; codecs="vorbis, vp8"',
                flashCanPlay: !1,
                media: "video"
            },
            flv: {
                codec: "video/x-flv",
                flashCanPlay: !0,
                media: "video"
            },
            rtmpv: {
                codec: 'video/rtmp; codecs="rtmp"',
                flashCanPlay: !0,
                media: "video"
            }
        },
        _init: function () {
            var n = this;
            this.element.empty(), this.status = e.extend({}, this.status), this.internal = e.extend({}, this.internal), this.options.timeFormat = e.extend({}, e.jPlayer.timeFormat, this.options.timeFormat), this.internal.cmdsIgnored = e.jPlayer.platform.ipad || e.jPlayer.platform.iphone || e.jPlayer.platform.ipod, this.internal.domNode = this.element.get(0), this.options.keyEnabled && !e.jPlayer.focus && (e.jPlayer.focus = this), this.androidFix = {
                setMedia: !1,
                play: !1,
                pause: !1,
                time: NaN
            }, e.jPlayer.platform.android && (this.options.preload = this.options.preload !== "auto" ? "metadata" : "auto"), this.formats = [], this.solutions = [], this.require = {}, this.htmlElement = {}, this.html = {}, this.html.audio = {}, this.html.video = {}, this.flash = {}, this.css = {}, this.css.cs = {}, this.css.jq = {}, this.ancestorJq = [], this.options.volume = this._limitValue(this.options.volume, 0, 1), e.each(this.options.supplied.toLowerCase().split(","), function (t, r) {
                var i = r.replace(/^\s+|\s+$/g, "");
                if (n.format[i]) {
                    var s = !1;
                    e.each(n.formats, function (e, t) {
                        if (i === t) return s = !0, !1
                    }), s || n.formats.push(i)
                }
            }), e.each(this.options.solution.toLowerCase().split(","), function (t, r) {
                var i = r.replace(/^\s+|\s+$/g, "");
                if (n.solution[i]) {
                    var s = !1;
                    e.each(n.solutions, function (e, t) {
                        if (i === t) return s = !0, !1
                    }), s || n.solutions.push(i)
                }
            }), this.internal.instance = "jp_" + this.count, this.instances[this.internal.instance] = this.element, this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count), this.internal.self = e.extend({}, {
                id: this.element.attr("id"),
                jq: this.element
            }), this.internal.audio = e.extend({}, {
                id: this.options.idPrefix + "_audio_" + this.count,
                jq: t
            }), this.internal.video = e.extend({}, {
                id: this.options.idPrefix + "_video_" + this.count,
                jq: t
            }), this.internal.flash = e.extend({}, {
                id: this.options.idPrefix + "_flash_" + this.count,
                jq: t,
                swf: this.options.swfPath + (this.options.swfPath.toLowerCase().slice(-4) !== ".swf" ? (this.options.swfPath && this.options.swfPath.slice(-1) !== "/" ? "/" : "") + "Jplayer.swf" : "")
            }), this.internal.poster = e.extend({}, {
                id: this.options.idPrefix + "_poster_" + this.count,
                jq: t
            }), e.each(e.jPlayer.event, function (e, r) {
                n.options[e] !== t && (n.element.bind(r + ".jPlayer", n.options[e]), n.options[e] = t)
            }), this.require.audio = !1, this.require.video = !1, e.each(this.formats, function (e, t) {
                n.require[n.format[t].media] = !0
            }), this.require.video ? this.options = e.extend(!0, {}, this.optionsVideo, this.options) : this.options = e.extend(!0, {}, this.optionsAudio, this.options), this._setSize(), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this.status.noVolume = this._uaBlocklist(this.options.noVolume), e.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners(), this._restrictNativeVideoControls(), this.htmlElement.poster = document.createElement("img"), this.htmlElement.poster.id = this.internal.poster.id, this.htmlElement.poster.onload = function () {
                (!n.status.video || n.status.waitForPlay) && n.internal.poster.jq.show()
            }, this.element.append(this.htmlElement.poster), this.internal.poster.jq = e("#" + this.internal.poster.id), this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            }), this.internal.poster.jq.hide(), this.internal.poster.jq.bind("click.jPlayer", function () {
                n._trigger(e.jPlayer.event.click)
            }), this.html.audio.available = !1, this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)), this.html.video.available = !1, this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)), this.flash.available = this._checkForFlash(10.1), this.html.canPlay = {}, this.flash.canPlay = {}, e.each(this.formats, function (e, t) {
                n.html.canPlay[t] = n.html[n.format[t].media].available && "" !== n.htmlElement[n.format[t].media].canPlayType(n.format[t].codec), n.flash.canPlay[t] = n.format[t].flashCanPlay && n.flash.available
            }), this.html.desired = !1, this.flash.desired = !1, e.each(this.solutions, function (t, r) {
                if (t === 0) n[r].desired = !0;
                else {
                    var i = !1,
                        s = !1;
                    e.each(n.formats, function (e, t) {
                        n[n.solutions[0]].canPlay[t] && (n.format[t].media === "video" ? s = !0 : i = !0)
                    }), n[r].desired = n.require.audio && !i || n.require.video && !s
                }
            }), this.html.support = {}, this.flash.support = {}, e.each(this.formats, function (e, t) {
                n.html.support[t] = n.html.canPlay[t] && n.html.desired, n.flash.support[t] = n.flash.canPlay[t] && n.flash.desired
            }), this.html.used = !1, this.flash.used = !1, e.each(this.solutions, function (t, r) {
                e.each(n.formats, function (e, t) {
                    if (n[r].support[t]) return n[r].used = !0, !1
                })
            }), this._resetActive(), this._resetGate(), this._cssSelectorAncestor(this.options.cssSelectorAncestor), !this.html.used && !this.flash.used ? (this._error({
                type: e.jPlayer.error.NO_SOLUTION,
                context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                message: e.jPlayer.errorMsg.NO_SOLUTION,
                hint: e.jPlayer.errorHint.NO_SOLUTION
            }), this.css.jq.noSolution.length && this.css.jq.noSolution.show()) : this.css.jq.noSolution.length && this.css.jq.noSolution.hide();
            if (this.flash.used) {
                var r, i = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                if (e.jPlayer.browser.msie && (Number(e.jPlayer.browser.version) < 9 || e.jPlayer.browser.documentMode < 9)) {
                    var s = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>',
                        o = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + i + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                    r = document.createElement(s);
                    for (var u = 0; u < o.length; u++) r.appendChild(document.createElement(o[u]))
                } else {
                    var a = function (e, t, n) {
                        var r = document.createElement("param");
                        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
                    };
                    r = document.createElement("object"), r.setAttribute("id", this.internal.flash.id), r.setAttribute("name", this.internal.flash.id), r.setAttribute("data", this.internal.flash.swf), r.setAttribute("type", "application/x-shockwave-flash"), r.setAttribute("width", "1"), r.setAttribute("height", "1"), r.setAttribute("tabindex", "-1"), a(r, "flashvars", i), a(r, "allowscriptaccess", "always"), a(r, "bgcolor", this.options.backgroundColor), a(r, "wmode", this.options.wmode)
                }
                this.element.append(r), this.internal.flash.jq = e(r)
            }
            this.html.used && !this.flash.used ? this.status.playbackRateEnabled = this._testPlaybackRate("audio") : this.status.playbackRateEnabled = !1, this._updatePlaybackRate(), this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = e("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = e("#" + this.internal.video.id), this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.internal.video.jq.bind("click.jPlayer", function () {
                n._trigger(e.jPlayer.event.click)
            }))), this.options.emulateHtml && this._emulateHtmlBridge(), this.html.used && !this.flash.used && setTimeout(function () {
                n.internal.ready = !0, n.version.flash = "n/a", n._trigger(e.jPlayer.event.repeat), n._trigger(e.jPlayer.event.ready)
            }, 100), this._updateNativeVideoControls(), this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), e.jPlayer.prototype.count++
        },
        destroy: function () {
            this.clearMedia(), this._removeUiClass(), this.css.jq.currentTime.length && this.css.jq.currentTime.text(""), this.css.jq.duration.length && this.css.jq.duration.text(""), e.each(this.css.jq, function (e, t) {
                t.length && t.unbind(".jPlayer")
            }), this.internal.poster.jq.unbind(".jPlayer"), this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"), this._fullscreenRemoveEventListeners(), this === e.jPlayer.focus && (e.jPlayer.focus = null), this.options.emulateHtml && this._destroyHtmlBridge(), this.element.removeData("jPlayer"), this.element.unbind(".jPlayer"), this.element.empty(), delete this.instances[this.internal.instance]
        },
        enable: function () { },
        disable: function () { },
        _testCanPlayType: function (e) {
            try {
                return e.canPlayType(this.format.mp3.codec), !0
            } catch (t) {
                return !1
            }
        },
        _testPlaybackRate: function (e) {
            var t, n = .5;
            e = typeof e == "string" ? e : "audio", t = document.createElement(e);
            try {
                return "playbackRate" in t ? (t.playbackRate = n, t.playbackRate === n) : !1
            } catch (r) {
                return !1
            }
        },
        _uaBlocklist: function (t) {
            var n = navigator.userAgent.toLowerCase(),
                r = !1;
            return e.each(t, function (e, t) {
                if (t && t.test(n)) return r = !0, !1
            }), r
        },
        _restrictNativeVideoControls: function () {
            this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
        },
        _updateNativeVideoControls: function () {
            this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            })))
        },
        _addHtmlEventListeners: function (t, n) {
            var r = this;
            t.preload = this.options.preload, t.muted = this.options.muted, t.volume = this.options.volume, this.status.playbackRateEnabled && (t.defaultPlaybackRate = this.options.defaultPlaybackRate, t.playbackRate = this.options.playbackRate), t.addEventListener("progress", function () {
                n.gate && (r.internal.cmdsIgnored && this.readyState > 0 && (r.internal.cmdsIgnored = !1), r.androidFix.setMedia = !1, r.androidFix.play && (r.androidFix.play = !1, r.play(r.androidFix.time)), r.androidFix.pause && (r.androidFix.pause = !1, r.pause(r.androidFix.time)), r._getHtmlStatus(t), r._updateInterface(), r._trigger(e.jPlayer.event.progress))
            }, !1), t.addEventListener("timeupdate", function () {
                n.gate && (r._getHtmlStatus(t), r._updateInterface(), r._trigger(e.jPlayer.event.timeupdate))
            }, !1), t.addEventListener("durationchange", function () {
                n.gate && (r._getHtmlStatus(t), r._updateInterface(), r._trigger(e.jPlayer.event.durationchange))
            }, !1), t.addEventListener("play", function () {
                n.gate && (r._updateButtons(!0), r._html_checkWaitForPlay(), r._trigger(e.jPlayer.event.play))
            }, !1), t.addEventListener("playing", function () {
                n.gate && (r._updateButtons(!0), r._seeked(), r._trigger(e.jPlayer.event.playing))
            }, !1), t.addEventListener("pause", function () {
                n.gate && (r._updateButtons(!1), r._trigger(e.jPlayer.event.pause))
            }, !1), t.addEventListener("waiting", function () {
                n.gate && (r._seeking(), r._trigger(e.jPlayer.event.waiting))
            }, !1), t.addEventListener("seeking", function () {
                n.gate && (r._seeking(), r._trigger(e.jPlayer.event.seeking))
            }, !1), t.addEventListener("seeked", function () {
                n.gate && (r._seeked(), r._trigger(e.jPlayer.event.seeked))
            }, !1), t.addEventListener("volumechange", function () {
                n.gate && (r.options.volume = t.volume, r.options.muted = t.muted, r._updateMute(), r._updateVolume(), r._trigger(e.jPlayer.event.volumechange))
            }, !1), t.addEventListener("ratechange", function () {
                n.gate && (r.options.defaultPlaybackRate = t.defaultPlaybackRate, r.options.playbackRate = t.playbackRate, r._updatePlaybackRate(), r._trigger(e.jPlayer.event.ratechange))
            }, !1), t.addEventListener("suspend", function () {
                n.gate && (r._seeked(), r._trigger(e.jPlayer.event.suspend))
            }, !1), t.addEventListener("ended", function () {
                n.gate && (e.jPlayer.browser.webkit || (r.htmlElement.media.currentTime = 0), r.htmlElement.media.pause(), r._updateButtons(!1), r._getHtmlStatus(t, !0), r._updateInterface(), r._trigger(e.jPlayer.event.ended))
            }, !1), t.addEventListener("error", function () {
                n.gate && (r._updateButtons(!1), r._seeked(), r.status.srcSet && (clearTimeout(r.internal.htmlDlyCmdId), r.status.waitForLoad = !0, r.status.waitForPlay = !0, r.status.video && !r.status.nativeVideoControls && r.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                }), r._validString(r.status.media.poster) && !r.status.nativeVideoControls && r.internal.poster.jq.show(), r.css.jq.videoPlay.length && r.css.jq.videoPlay.show(), r._error({
                    type: e.jPlayer.error.URL,
                    context: r.status.src,
                    message: e.jPlayer.errorMsg.URL,
                    hint: e.jPlayer.errorHint.URL
                })))
            }, !1), e.each(e.jPlayer.htmlEvent, function (i, s) {
                t.addEventListener(this, function () {
                    n.gate && r._trigger(e.jPlayer.event[s])
                }, !1)
            })
        },
        _getHtmlStatus: function (e, t) {
            var n = 0,
                r = 0,
                i = 0,
                s = 0;
            isFinite(e.duration) && (this.status.duration = e.duration), n = e.currentTime, r = this.status.duration > 0 ? 100 * n / this.status.duration : 0, typeof e.seekable == "object" && e.seekable.length > 0 ? (i = this.status.duration > 0 ? 100 * e.seekable.end(e.seekable.length - 1) / this.status.duration : 100, s = this.status.duration > 0 ? 100 * e.currentTime / e.seekable.end(e.seekable.length - 1) : 0) : (i = 100, s = r), t && (n = 0, s = 0, r = 0), this.status.seekPercent = i, this.status.currentPercentRelative = s, this.status.currentPercentAbsolute = r, this.status.currentTime = n, this.status.remaining = this.status.duration - this.status.currentTime, this.status.videoWidth = e.videoWidth, this.status.videoHeight = e.videoHeight, this.status.readyState = e.readyState, this.status.networkState = e.networkState, this.status.playbackRate = e.playbackRate, this.status.ended = e.ended
        },
        _resetStatus: function () {
            this.status = e.extend({}, this.status, e.jPlayer.prototype.status)
        },
        _trigger: function (t, n, r) {
            var i = e.Event(t);
            i.jPlayer = {}, i.jPlayer.version = e.extend({}, this.version), i.jPlayer.options = e.extend(!0, {}, this.options), i.jPlayer.status = e.extend(!0, {}, this.status), i.jPlayer.html = e.extend(!0, {}, this.html), i.jPlayer.flash = e.extend(!0, {}, this.flash), n && (i.jPlayer.error = e.extend({}, n)), r && (i.jPlayer.warning = e.extend({}, r)), this.element.trigger(i)
        },
        jPlayerFlashEvent: function (t, n) {
            if (t === e.jPlayer.event.ready)
                if (!this.internal.ready) this.internal.ready = !0, this.internal.flash.jq.css({
                    width: "0px",
                    height: "0px"
                }), this.version.flash = n.version, this.version.needFlash !== this.version.flash && this._error({
                    type: e.jPlayer.error.VERSION,
                    context: this.version.flash,
                    message: e.jPlayer.errorMsg.VERSION + this.version.flash,
                    hint: e.jPlayer.errorHint.VERSION
                }), this._trigger(e.jPlayer.event.repeat), this._trigger(t);
                else if (this.flash.gate) {
                    if (this.status.srcSet) {
                        var r = this.status.currentTime,
                            i = this.status.paused;
                        this.setMedia(this.status.media), this.volumeWorker(this.options.volume), r > 0 && (i ? this.pause(r) : this.play(r))
                    }
                    this._trigger(e.jPlayer.event.flashreset)
                }
            if (this.flash.gate) switch (t) {
                case e.jPlayer.event.progress:
                    this._getFlashStatus(n), this._updateInterface(), this._trigger(t);
                    break;
                case e.jPlayer.event.timeupdate:
                    this._getFlashStatus(n), this._updateInterface(), this._trigger(t);
                    break;
                case e.jPlayer.event.play:
                    this._seeked(), this._updateButtons(!0), this._trigger(t);
                    break;
                case e.jPlayer.event.pause:
                    this._updateButtons(!1), this._trigger(t);
                    break;
                case e.jPlayer.event.ended:
                    this._updateButtons(!1), this._trigger(t);
                    break;
                case e.jPlayer.event.click:
                    this._trigger(t);
                    break;
                case e.jPlayer.event.error:
                    this.status.waitForLoad = !0, this.status.waitForPlay = !0, this.status.video && this.internal.flash.jq.css({
                        width: "0px",
                        height: "0px"
                    }), this._validString(this.status.media.poster) && this.internal.poster.jq.show(), this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show(), this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media), this._updateButtons(!1), this._error({
                        type: e.jPlayer.error.URL,
                        context: n.src,
                        message: e.jPlayer.errorMsg.URL,
                        hint: e.jPlayer.errorHint.URL
                    });
                    break;
                case e.jPlayer.event.seeking:
                    this._seeking(), this._trigger(t);
                    break;
                case e.jPlayer.event.seeked:
                    this._seeked(), this._trigger(t);
                    break;
                case e.jPlayer.event.ready:
                    break;
                default:
                    this._trigger(t)
            }
            return !1
        },
        _getFlashStatus: function (e) {
            this.status.seekPercent = e.seekPercent, this.status.currentPercentRelative = e.currentPercentRelative, this.status.currentPercentAbsolute = e.currentPercentAbsolute, this.status.currentTime = e.currentTime, this.status.duration = e.duration, this.status.remaining = e.duration - e.currentTime, this.status.videoWidth = e.videoWidth, this.status.videoHeight = e.videoHeight, this.status.readyState = 4, this.status.networkState = 0, this.status.playbackRate = 1, this.status.ended = !1
        },
        _updateButtons: function (e) {
            e === t ? e = !this.status.paused : this.status.paused = !e, this.css.jq.play.length && this.css.jq.pause.length && (e ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide())), this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide())), this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
        },
        _updateInterface: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%"), this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({
                width: this.status.currentPercentAbsolute + "%"
            }, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%"));
            var e = "";
            this.css.jq.currentTime.length && (e = this._convertTime(this.status.currentTime), e !== this.css.jq.currentTime.text() && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));
            var t = "",
                n = this.status.duration,
                r = this.status.remaining;
            this.css.jq.duration.length && (typeof this.status.media.duration == "string" ? t = this.status.media.duration : (typeof this.status.media.duration == "number" && (n = this.status.media.duration, r = n - this.status.currentTime), this.options.remainingDuration ? t = (r > 0 ? "-" : "") + this._convertTime(r) : t = this._convertTime(n)), t !== this.css.jq.duration.text() && this.css.jq.duration.text(t))
        },
        _convertTime: n.prototype.time,
        _seeking: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
        },
        _seeked: function () {
            this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
        },
        _resetGate: function () {
            this.html.audio.gate = !1, this.html.video.gate = !1, this.flash.gate = !1
        },
        _resetActive: function () {
            this.html.active = !1, this.flash.active = !1
        },
        _escapeHtml: function (e) {
            return e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
        },
        _qualifyURL: function (e) {
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + this._escapeHtml(e) + '">x</a>', t.firstChild.href
        },
        _absoluteMediaUrls: function (t) {
            var n = this;
            return e.each(t, function (e, r) {
                r && n.format[e] && (t[e] = n._qualifyURL(r))
            }), t
        },
        setMedia: function (t) {
            var n = this,
                r = !1,
                i = this.status.media.poster !== t.poster;
            this._resetMedia(), this._resetGate(), this._resetActive(), this.androidFix.setMedia = !1, this.androidFix.play = !1, this.androidFix.pause = !1, t = this._absoluteMediaUrls(t), e.each(this.formats, function (i, s) {
                var o = n.format[s].media === "video";
                e.each(n.solutions, function (i, u) {
                    if (n[u].support[s] && n._validString(t[s])) {
                        var a = u === "html";
                        return o ? (a ? (n.html.video.gate = !0, n._html_setVideo(t), n.html.active = !0) : (n.flash.gate = !0, n._flash_setVideo(t), n.flash.active = !0), n.css.jq.videoPlay.length && n.css.jq.videoPlay.show(), n.status.video = !0) : (a ? (n.html.audio.gate = !0, n._html_setAudio(t), n.html.active = !0, e.jPlayer.platform.android && (n.androidFix.setMedia = !0)) : (n.flash.gate = !0, n._flash_setAudio(t), n.flash.active = !0), n.css.jq.videoPlay.length && n.css.jq.videoPlay.hide(), n.status.video = !1), r = !0, !1
                    }
                });
                if (r) return !1
            }), r ? ((!this.status.nativeVideoControls || !this.html.video.gate) && this._validString(t.poster) && (i ? this.htmlElement.poster.src = t.poster : this.internal.poster.jq.show()), this.css.jq.title.length && typeof t.title == "string" && (this.css.jq.title.html(t.title), this.htmlElement.audio && this.htmlElement.audio.setAttribute("title", t.title), this.htmlElement.video && this.htmlElement.video.setAttribute("title", t.title)), this.status.srcSet = !0, this.status.media = e.extend({}, t), this._updateButtons(!1), this._updateInterface(), this._trigger(e.jPlayer.event.setmedia)) : this._error({
                type: e.jPlayer.error.NO_SUPPORT,
                context: "{supplied:'" + this.options.supplied + "'}",
                message: e.jPlayer.errorMsg.NO_SUPPORT,
                hint: e.jPlayer.errorHint.NO_SUPPORT
            })
        },
        _resetMedia: function () {
            this._resetStatus(), this._updateButtons(!1), this._updateInterface(), this._seeked(), this.internal.poster.jq.hide(), clearTimeout(this.internal.htmlDlyCmdId), this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
        },
        clearMedia: function () {
            this._resetMedia(), this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia(), this._resetGate(), this._resetActive()
        },
        load: function () {
            this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
        },
        focus: function () {
            this.options.keyEnabled && (e.jPlayer.focus = this)
        },
        play: function (e) {
            e = typeof e == "number" ? e : NaN, this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(e) : this.flash.active && this._flash_play(e)) : this._urlNotSetError("play")
        },
        videoPlay: function () {
            this.play()
        },
        pause: function (e) {
            e = typeof e == "number" ? e : NaN, this.status.srcSet ? this.html.active ? this._html_pause(e) : this.flash.active && this._flash_pause(e) : this._urlNotSetError("pause")
        },
        tellOthers: function (t, n) {
            var r = this,
                i = typeof n == "function",
                s = Array.prototype.slice.call(arguments);
            if (typeof t != "string") return;
            i && s.splice(1, 1), e.each(this.instances, function () {
                r.element !== this && (!i || n.call(this.data("jPlayer"), r)) && this.jPlayer.apply(this, s)
            })
        },
        pauseOthers: function (e) {
            this.tellOthers("pause", function () {
                return this.status.srcSet
            }, e)
        },
        stop: function () {
            this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
        },
        playHead: function (e) {
            e = this._limitValue(e, 0, 100), this.status.srcSet ? this.html.active ? this._html_playHead(e) : this.flash.active && this._flash_playHead(e) : this._urlNotSetError("playHead")
        },
        _muted: function (e) {
            this.mutedWorker(e), this.options.globalVolume && this.tellOthers("mutedWorker", function () {
                return this.options.globalVolume
            }, e)
        },
        mutedWorker: function (t) {
            this.options.muted = t, this.html.used && this._html_setProperty("muted", t), this.flash.used && this._flash_mute(t), !this.html.video.gate && !this.html.audio.gate && (this._updateMute(t), this._updateVolume(this.options.volume), this._trigger(e.jPlayer.event.volumechange))
        },
        mute: function (e) {
            e = e === t ? !0 : !!e, this._muted(e)
        },
        unmute: function (e) {
            e = e === t ? !0 : !!e, this._muted(!e)
        },
        _updateMute: function (e) {
            e === t && (e = this.options.muted), this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : e ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
        },
        volume: function (e) {
            this.volumeWorker(e), this.options.globalVolume && this.tellOthers("volumeWorker", function () {
                return this.options.globalVolume
            }, e)
        },
        volumeWorker: function (t) {
            t = this._limitValue(t, 0, 1), this.options.volume = t, this.html.used && this._html_setProperty("volume", t), this.flash.used && this._flash_volume(t), !this.html.video.gate && !this.html.audio.gate && (this._updateVolume(t), this._trigger(e.jPlayer.event.volumechange))
        },
        volumeBar: function (t) {
            if (this.css.jq.volumeBar.length) {
                var n = e(t.currentTarget),
                    r = n.offset(),
                    i = t.pageX - r.left,
                    s = n.width(),
                    o = n.height() - t.pageY + r.top,
                    u = n.height();
                this.options.verticalVolume ? this.volume(o / u) : this.volume(i / s)
            }
            this.options.muted && this._muted(!1)
        },
        _updateVolume: function (e) {
            e === t && (e = this.options.volume), e = this.options.muted ? 0 : e, this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](e * 100 + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
        },
        volumeMax: function () {
            this.volume(1), this.options.muted && this._muted(!1)
        },
        _cssSelectorAncestor: function (t) {
            var n = this;
            this.options.cssSelectorAncestor = t, this._removeUiClass(), this.ancestorJq = t ? e(t) : [], t && this.ancestorJq.length !== 1 && this._warning({
                type: e.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: t,
                message: e.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                hint: e.jPlayer.warningHint.CSS_SELECTOR_COUNT
            }), this._addUiClass(), e.each(this.options.cssSelector, function (e, t) {
                n._cssSelector(e, t)
            }), this._updateInterface(), this._updateButtons(), this._updateAutohide(), this._updateVolume(), this._updateMute()
        },
        _cssSelector: function (t, n) {
            var r = this;
            if (typeof n == "string")
                if (e.jPlayer.prototype.options.cssSelector[t]) {
                    this.css.jq[t] && this.css.jq[t].length && this.css.jq[t].unbind(".jPlayer"), this.options.cssSelector[t] = n, this.css.cs[t] = this.options.cssSelectorAncestor + " " + n, n ? this.css.jq[t] = e(this.css.cs[t]) : this.css.jq[t] = [];
                    if (this.css.jq[t].length && this[t]) {
                        var i = function (n) {
                            n.preventDefault(), r[t](n), e(this).blur()
                        };
                        this.css.jq[t].bind("click.jPlayer", i)
                    }
                    n && this.css.jq[t].length !== 1 && this._warning({
                        type: e.jPlayer.warning.CSS_SELECTOR_COUNT,
                        context: this.css.cs[t],
                        message: e.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[t].length + " found for " + t + " method.",
                        hint: e.jPlayer.warningHint.CSS_SELECTOR_COUNT
                    })
                } else this._warning({
                    type: e.jPlayer.warning.CSS_SELECTOR_METHOD,
                    context: t,
                    message: e.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                    hint: e.jPlayer.warningHint.CSS_SELECTOR_METHOD
                });
            else this._warning({
                type: e.jPlayer.warning.CSS_SELECTOR_STRING,
                context: n,
                message: e.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                hint: e.jPlayer.warningHint.CSS_SELECTOR_STRING
            })
        },
        duration: function (e) {
            this.options.toggleDuration && (this.options.captureDuration && e.stopPropagation(), this._setOption("remainingDuration", !this.options.remainingDuration))
        },
        seekBar: function (t) {
            if (this.css.jq.seekBar.length) {
                var n = e(t.currentTarget),
                    r = n.offset(),
                    i = t.pageX - r.left,
                    s = n.width(),
                    o = 100 * i / s;
                this.playHead(o)
            }
        },
        playbackRate: function (e) {
            this._setOption("playbackRate", e)
        },
        playbackRateBar: function (t) {
            if (this.css.jq.playbackRateBar.length) {
                var n = e(t.currentTarget),
                    r = n.offset(),
                    i = t.pageX - r.left,
                    s = n.width(),
                    o = n.height() - t.pageY + r.top,
                    u = n.height(),
                    a, f;
                this.options.verticalPlaybackRate ? a = o / u : a = i / s, f = a * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate, this.playbackRate(f)
            }
        },
        _updatePlaybackRate: function () {
            var e = this.options.playbackRate,
                t = (e - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
            this.status.playbackRateEnabled ? (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.show(), this.css.jq.playbackRateBarValue.length && (this.css.jq.playbackRateBarValue.show(), this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate ? "height" : "width"](t * 100 + "%"))) : (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.hide(), this.css.jq.playbackRateBarValue.length && this.css.jq.playbackRateBarValue.hide())
        },
        repeat: function () {
            this._loop(!0)
        },
        repeatOff: function () {
            this._loop(!1)
        },
        _loop: function (t) {
            this.options.loop !== t && (this.options.loop = t, this._updateButtons(), this._trigger(e.jPlayer.event.repeat))
        },
        option: function (n, r) {
            var i = n;
            if (arguments.length === 0) return e.extend(!0, {}, this.options);
            if (typeof n == "string") {
                var s = n.split(".");
                if (r === t) {
                    var o = e.extend(!0, {}, this.options);
                    for (var u = 0; u < s.length; u++) {
                        if (o[s[u]] === t) return this._warning({
                            type: e.jPlayer.warning.OPTION_KEY,
                            context: n,
                            message: e.jPlayer.warningMsg.OPTION_KEY,
                            hint: e.jPlayer.warningHint.OPTION_KEY
                        }), t;
                        o = o[s[u]]
                    }
                    return o
                }
                i = {};
                var a = i;
                for (var f = 0; f < s.length; f++) f < s.length - 1 ? (a[s[f]] = {}, a = a[s[f]]) : a[s[f]] = r
            }
            return this._setOptions(i), this
        },
        _setOptions: function (t) {
            var n = this;
            return e.each(t, function (e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function (t, n) {
            var r = this;
            switch (t) {
                case "volume":
                    this.volume(n);
                    break;
                case "muted":
                    this._muted(n);
                    break;
                case "globalVolume":
                    this.options[t] = n;
                    break;
                case "cssSelectorAncestor":
                    this._cssSelectorAncestor(n);
                    break;
                case "cssSelector":
                    e.each(n, function (e, t) {
                        r._cssSelector(e, t)
                    });
                    break;
                case "playbackRate":
                    this.options[t] = n = this._limitValue(n, this.options.minPlaybackRate, this.options.maxPlaybackRate), this.html.used && this._html_setProperty("playbackRate", n), this._updatePlaybackRate();
                    break;
                case "defaultPlaybackRate":
                    this.options[t] = n = this._limitValue(n, this.options.minPlaybackRate, this.options.maxPlaybackRate), this.html.used && this._html_setProperty("defaultPlaybackRate", n), this._updatePlaybackRate();
                    break;
                case "minPlaybackRate":
                    this.options[t] = n = this._limitValue(n, .1, this.options.maxPlaybackRate - .1), this._updatePlaybackRate();
                    break;
                case "maxPlaybackRate":
                    this.options[t] = n = this._limitValue(n, this.options.minPlaybackRate + .1, 16), this._updatePlaybackRate();
                    break;
                case "fullScreen":
                    if (this.options[t] !== n) {
                        var i = e.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                        if (!i || i && !this.status.waitForPlay) i || (this.options[t] = n), n ? this._requestFullscreen() : this._exitFullscreen(), i || this._setOption("fullWindow", n)
                    }
                    break;
                case "fullWindow":
                    this.options[t] !== n && (this._removeUiClass(), this.options[t] = n, this._refreshSize());
                    break;
                case "size":
                    !this.options.fullWindow && this.options[t].cssClass !== n.cssClass && this._removeUiClass(), this.options[t] = e.extend({}, this.options[t], n), this._refreshSize();
                    break;
                case "sizeFull":
                    this.options.fullWindow && this.options[t].cssClass !== n.cssClass && this._removeUiClass(), this.options[t] = e.extend({}, this.options[t], n), this._refreshSize();
                    break;
                case "autohide":
                    this.options[t] = e.extend({}, this.options[t], n), this._updateAutohide();
                    break;
                case "loop":
                    this._loop(n);
                    break;
                case "remainingDuration":
                    this.options[t] = n, this._updateInterface();
                    break;
                case "toggleDuration":
                    this.options[t] = n;
                    break;
                case "nativeVideoControls":
                    this.options[t] = e.extend({}, this.options[t], n), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this._restrictNativeVideoControls(), this._updateNativeVideoControls();
                    break;
                case "noFullWindow":
                    this.options[t] = e.extend({}, this.options[t], n), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this._restrictNativeVideoControls(), this._updateButtons();
                    break;
                case "noVolume":
                    this.options[t] = e.extend({}, this.options[t], n), this.status.noVolume = this._uaBlocklist(this.options.noVolume), this._updateVolume(), this._updateMute();
                    break;
                case "emulateHtml":
                    this.options[t] !== n && (this.options[t] = n, n ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                    break;
                case "timeFormat":
                    this.options[t] = e.extend({}, this.options[t], n);
                    break;
                case "keyEnabled":
                    this.options[t] = n, !n && this === e.jPlayer.focus && (e.jPlayer.focus = null);
                    break;
                case "keyBindings":
                    this.options[t] = e.extend(!0, {}, this.options[t], n);
                    break;
                case "audioFullScreen":
                    this.options[t] = n
            }
            return this
        },
        _refreshSize: function () {
            this._setSize(), this._addUiClass(), this._updateSize(), this._updateButtons(), this._updateAutohide(), this._trigger(e.jPlayer.event.resize)
        },
        _setSize: function () {
            this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass), this.element.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _addUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
        },
        _removeUiClass: function () {
            this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
        },
        _updateSize: function () {
            this.internal.poster.jq.css({
                width: this.status.width,
                height: this.status.height
            }), !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            }) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })
        },
        _updateAutohide: function () {
            var e = this,
                t = "mousemove.jPlayer",
                n = ".jPlayerAutohide",
                r = t + n,
                i = function () {
                    e.css.jq.gui.fadeIn(e.options.autohide.fadeIn, function () {
                        clearTimeout(e.internal.autohideId), e.internal.autohideId = setTimeout(function () {
                            e.css.jq.gui.fadeOut(e.options.autohide.fadeOut)
                        }, e.options.autohide.hold)
                    })
                };
            this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(n), this.css.jq.gui.unbind(n), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind(r, i), this.css.jq.gui.bind(r, i), this.css.jq.gui.hide()) : this.css.jq.gui.show())
        },
        fullScreen: function () {
            this._setOption("fullScreen", !0)
        },
        restoreScreen: function () {
            this._setOption("fullScreen", !1)
        },
        _fullscreenAddEventListeners: function () {
            var t = this,
                n = e.jPlayer.nativeFeatures.fullscreen;
            n.api.fullscreenEnabled && n.event.fullscreenchange && (typeof this.internal.fullscreenchangeHandler != "function" && (this.internal.fullscreenchangeHandler = function () {
                t._fullscreenchange()
            }), document.addEventListener(n.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
        },
        _fullscreenRemoveEventListeners: function () {
            var t = e.jPlayer.nativeFeatures.fullscreen;
            this.internal.fullscreenchangeHandler && document.removeEventListener(t.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
        },
        _fullscreenchange: function () {
            this.options.fullScreen && !e.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
        },
        _requestFullscreen: function () {
            var t = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0],
                n = e.jPlayer.nativeFeatures.fullscreen;
            n.used.webkitVideo && (t = this.htmlElement.video), n.api.fullscreenEnabled && n.api.requestFullscreen(t)
        },
        _exitFullscreen: function () {
            var t = e.jPlayer.nativeFeatures.fullscreen,
                n;
            t.used.webkitVideo && (n = this.htmlElement.video), t.api.fullscreenEnabled && t.api.exitFullscreen(n)
        },
        _html_initMedia: function (t) {
            var n = e(this.htmlElement.media).empty();
            e.each(t.track || [], function (e, t) {
                var r = document.createElement("track");
                r.setAttribute("kind", t.kind ? t.kind : ""), r.setAttribute("src", t.src ? t.src : ""), r.setAttribute("srclang", t.srclang ? t.srclang : ""), r.setAttribute("label", t.label ? t.label : ""), t.def && r.setAttribute("default", t.def), n.append(r)
            }), this.htmlElement.media.src = this.status.src, this.options.preload !== "none" && this._html_load(), this._trigger(e.jPlayer.event.timeupdate)
        },
        _html_setFormat: function (t) {
            var n = this;
            e.each(this.formats, function (e, r) {
                if (n.html.support[r] && t[r]) return n.status.src = t[r], n.status.format[r] = !0, n.status.formatType = r, !1
            })
        },
        _html_setAudio: function (e) {
            this._html_setFormat(e), this.htmlElement.media = this.htmlElement.audio, this._html_initMedia(e)
        },
        _html_setVideo: function (e) {
            this._html_setFormat(e), this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(e.poster) ? e.poster : ""), this.htmlElement.media = this.htmlElement.video, this._html_initMedia(e)
        },
        _html_resetMedia: function () {
            this.htmlElement.media && (this.htmlElement.media.id === this.internal.video.id && !this.status.nativeVideoControls && this.internal.video.jq.css({
                width: "0px",
                height: "0px"
            }), this.htmlElement.media.pause())
        },
        _html_clearMedia: function () {
            this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
        },
        _html_load: function () {
            this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load()), clearTimeout(this.internal.htmlDlyCmdId)
        },
        _html_play: function (e) {
            var t = this,
                n = this.htmlElement.media;
            this.androidFix.pause = !1, this._html_load();
            if (this.androidFix.setMedia) this.androidFix.play = !0, this.androidFix.time = e;
            else if (!isNaN(e)) {
                this.internal.cmdsIgnored && n.play();
                try {
                    if (!(!n.seekable || typeof n.seekable == "object" && n.seekable.length > 0)) throw 1;
                    n.currentTime = e, n.play()
                } catch (r) {
                    this.internal.htmlDlyCmdId = setTimeout(function () {
                        t.play(e)
                    }, 250);
                    return
                }
            } else n.play();
            this._html_checkWaitForPlay()
        },
        _html_pause: function (e) {
            var t = this,
                n = this.htmlElement.media;
            this.androidFix.play = !1, e > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId), n.pause();
            if (this.androidFix.setMedia) this.androidFix.pause = !0, this.androidFix.time = e;
            else if (!isNaN(e)) try {
                if (!(!n.seekable || typeof n.seekable == "object" && n.seekable.length > 0)) throw 1;
                n.currentTime = e
            } catch (r) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    t.pause(e)
                }, 250);
                return
            }
            e > 0 && this._html_checkWaitForPlay()
        },
        _html_playHead: function (e) {
            var t = this,
                n = this.htmlElement.media;
            this._html_load();
            try {
                if (typeof n.seekable == "object" && n.seekable.length > 0) n.currentTime = e * n.seekable.end(n.seekable.length - 1) / 100;
                else {
                    if (!(n.duration > 0 && !isNaN(n.duration))) throw "e";
                    n.currentTime = e * n.duration / 100
                }
            } catch (r) {
                this.internal.htmlDlyCmdId = setTimeout(function () {
                    t.playHead(e)
                }, 250);
                return
            }
            this.status.waitForLoad || this._html_checkWaitForPlay()
        },
        _html_checkWaitForPlay: function () {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _html_setProperty: function (e, t) {
            this.html.audio.available && (this.htmlElement.audio[e] = t), this.html.video.available && (this.htmlElement.video[e] = t)
        },
        _flash_setAudio: function (t) {
            var n = this;
            try {
                e.each(this.formats, function (e, r) {
                    if (n.flash.support[r] && t[r]) {
                        switch (r) {
                            case "m4a":
                            case "fla":
                                n._getMovie().fl_setAudio_m4a(t[r]);
                                break;
                            case "mp3":
                                n._getMovie().fl_setAudio_mp3(t[r]);
                                break;
                            case "rtmpa":
                                n._getMovie().fl_setAudio_rtmp(t[r])
                        }
                        return n.status.src = t[r], n.status.format[r] = !0, n.status.formatType = r, !1
                    }
                }), this.options.preload === "auto" && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (r) {
                this._flashError(r)
            }
        },
        _flash_setVideo: function (t) {
            var n = this;
            try {
                e.each(this.formats, function (e, r) {
                    if (n.flash.support[r] && t[r]) {
                        switch (r) {
                            case "m4v":
                            case "flv":
                                n._getMovie().fl_setVideo_m4v(t[r]);
                                break;
                            case "rtmpv":
                                n._getMovie().fl_setVideo_rtmp(t[r])
                        }
                        return n.status.src = t[r], n.status.format[r] = !0, n.status.formatType = r, !1
                    }
                }), this.options.preload === "auto" && (this._flash_load(), this.status.waitForLoad = !1)
            } catch (r) {
                this._flashError(r)
            }
        },
        _flash_resetMedia: function () {
            this.internal.flash.jq.css({
                width: "0px",
                height: "0px"
            }), this._flash_pause(NaN)
        },
        _flash_clearMedia: function () {
            try {
                this._getMovie().fl_clearMedia()
            } catch (e) {
                this._flashError(e)
            }
        },
        _flash_load: function () {
            try {
                this._getMovie().fl_load()
            } catch (e) {
                this._flashError(e)
            }
            this.status.waitForLoad = !1
        },
        _flash_play: function (e) {
            try {
                this._getMovie().fl_play(e)
            } catch (t) {
                this._flashError(t)
            }
            this.status.waitForLoad = !1, this._flash_checkWaitForPlay()
        },
        _flash_pause: function (e) {
            try {
                this._getMovie().fl_pause(e)
            } catch (t) {
                this._flashError(t)
            }
            e > 0 && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
        },
        _flash_playHead: function (e) {
            try {
                this._getMovie().fl_play_head(e)
            } catch (t) {
                this._flashError(t)
            }
            this.status.waitForLoad || this._flash_checkWaitForPlay()
        },
        _flash_checkWaitForPlay: function () {
            this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height
            })))
        },
        _flash_volume: function (e) {
            try {
                this._getMovie().fl_volume(e)
            } catch (t) {
                this._flashError(t)
            }
        },
        _flash_mute: function (e) {
            try {
                this._getMovie().fl_mute(e)
            } catch (t) {
                this._flashError(t)
            }
        },
        _getMovie: function () {
            return document[this.internal.flash.id]
        },
        _getFlashPluginVersion: function () {
            var e = 0,
                t;
            if (window.ActiveXObject) try {
                t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (t) {
                    var n = t.GetVariable("$version");
                    n && (n = n.split(" ")[1].split(","), e = parseInt(n[0], 10) + "." + parseInt(n[1], 10))
                }
            } catch (r) { } else navigator.plugins && navigator.mimeTypes.length > 0 && (t = navigator.plugins["Shockwave Flash"], t && (e = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1")));
            return e * 1
        },
        _checkForFlash: function (e) {
            var t = !1;
            return this._getFlashPluginVersion() >= e && (t = !0), t
        },
        _validString: function (e) {
            return e && typeof e == "string"
        },
        _limitValue: function (e, t, n) {
            return e < t ? t : e > n ? n : e
        },
        _urlNotSetError: function (t) {
            this._error({
                type: e.jPlayer.error.URL_NOT_SET,
                context: t,
                message: e.jPlayer.errorMsg.URL_NOT_SET,
                hint: e.jPlayer.errorHint.URL_NOT_SET
            })
        },
        _flashError: function (t) {
            var n;
            this.internal.ready ? n = "FLASH_DISABLED" : n = "FLASH", this._error({
                type: e.jPlayer.error[n],
                context: this.internal.flash.swf,
                message: e.jPlayer.errorMsg[n] + t.message,
                hint: e.jPlayer.errorHint[n]
            }), this.internal.flash.jq.css({
                width: "1px",
                height: "1px"
            })
        },
        _error: function (t) {
            this._trigger(e.jPlayer.event.error, t), this.options.errorAlerts && this._alert("Error!" + (t.message ? "\n" + t.message : "") + (t.hint ? "\n" + t.hint : "") + "\nContext: " + t.context)
        },
        _warning: function (n) {
            this._trigger(e.jPlayer.event.warning, t, n), this.options.warningAlerts && this._alert("Warning!" + (n.message ? "\n" + n.message : "") + (n.hint ? "\n" + n.hint : "") + "\nContext: " + n.context)
        },
        _alert: function (e) {
            var t = "jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + e;
            this.options.consoleAlerts ? window.console && window.console.log && window.console.log(t) : alert(t)
        },
        _emulateHtmlBridge: function () {
            var t = this;
            e.each(e.jPlayer.emulateMethods.split(/\s+/g), function (e, n) {
                t.internal.domNode[n] = function (e) {
                    t[n](e)
                }
            }), e.each(e.jPlayer.event, function (n, r) {
                var i = !0;
                e.each(e.jPlayer.reservedEvent.split(/\s+/g), function (e, t) {
                    if (t === n) return i = !1, !1
                }), i && t.element.bind(r + ".jPlayer.jPlayerHtml", function () {
                    t._emulateHtmlUpdate();
                    var e = document.createEvent("Event");
                    e.initEvent(n, !1, !0), t.internal.domNode.dispatchEvent(e)
                })
            })
        },
        _emulateHtmlUpdate: function () {
            var t = this;
            e.each(e.jPlayer.emulateStatus.split(/\s+/g), function (e, n) {
                t.internal.domNode[n] = t.status[n]
            }), e.each(e.jPlayer.emulateOptions.split(/\s+/g), function (e, n) {
                t.internal.domNode[n] = t.options[n]
            })
        },
        _destroyHtmlBridge: function () {
            var t = this;
            this.element.unbind(".jPlayerHtml");
            var n = e.jPlayer.emulateMethods + " " + e.jPlayer.emulateStatus + " " + e.jPlayer.emulateOptions;
            e.each(n.split(/\s+/g), function (e, n) {
                delete t.internal.domNode[n]
            })
        }
    }, e.jPlayer.error = {
        FLASH: "e_flash",
        FLASH_DISABLED: "e_flash_disabled",
        NO_SOLUTION: "e_no_solution",
        NO_SUPPORT: "e_no_support",
        URL: "e_url",
        URL_NOT_SET: "e_url_not_set",
        VERSION: "e_version"
    }, e.jPlayer.errorMsg = {
        FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
        FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
        NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
        NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
        URL: "Media URL could not be loaded.",
        URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
        VERSION: "jPlayer " + e.jPlayer.prototype.version.script + " needs Jplayer.swf version " + e.jPlayer.prototype.version.needFlash + " but found "
    }, e.jPlayer.errorHint = {
        FLASH: "Check your swfPath option and that Jplayer.swf is there.",
        FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
        NO_SOLUTION: "Review the jPlayer options: support and supplied.",
        NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
        URL: "Check media URL is valid.",
        URL_NOT_SET: "Use setMedia() to set the media URL.",
        VERSION: "Update jPlayer files."
    }, e.jPlayer.warning = {
        CSS_SELECTOR_COUNT: "e_css_selector_count",
        CSS_SELECTOR_METHOD: "e_css_selector_method",
        CSS_SELECTOR_STRING: "e_css_selector_string",
        OPTION_KEY: "e_option_key"
    }, e.jPlayer.warningMsg = {
        CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
        CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
        CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
        OPTION_KEY: "The option requested in jPlayer('option') is undefined."
    }, e.jPlayer.warningHint = {
        CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
        CSS_SELECTOR_METHOD: "Check your method name.",
        CSS_SELECTOR_STRING: "Check your css selector is a string.",
        OPTION_KEY: "Check your option name."
    }
}), define("views/audioPlayer", ["jquery", "views/common", "vendor/custom.modernizr", "tpl!templates/audioPlayer.tpl", "utils/log", "jplayer"], function (e, t, n, r, i) {
    return t.BaseView.extend({
        className: "disabled",
        _player: null,
        _playerLoaded: !1,
        _default_src: "assets/audio/blank.mp3",
        _playerSrc: "",
        autoplay: !1,
        events: function () {
            var e = {};
            return e["click .jp-pause"] = "onPauseClick", e["click .jp-play"] = "onPlayClick", e
        },
        initialize: function (e) {
            _.bindAll(this, "onPlayerLoaded", "onDisabledClick", "onMetadataLoaded"), this.autoplay = e && "autoplay" in e && e.autoplay, this._playerSrc = e && "src" in e ? e.src : this._default_src
        },
        render: function () {
            this.$el.html(r());
            var e = this;
            return setTimeout(function () {
                e.loadPlayer()
            }, 100), this
        },
        loadPlayer: function () {
            this.removePlayer(), this._player = this.$(".jp-jplayer").jPlayer({
                swfPath: "assets/vendor",
                solution: "html, flash",
                supplied: "mp3",
                ready: this.onPlayerLoaded
            })
        },
        disablePlayer: function () {
            this.$el.addClass("disabled"), this.$(".jp-current-time, .jp-duration").html("00:00")
        },
        removePlayer: function () {
            this._player && (this._player.off(), this._player.jPlayer("destroy"), this._player = null, this.disablePlayer())
        },
        onPlayerLoaded: function () {
            this._playerLoaded = !0, this._playerSrc && this.setSrc(this._playerSrc)
        },
        onDisabledClick: function (e) {
            e && this.preventEvent(e)
        },
        onPauseClick: function (e) {
            this.autoplay = !1
        },
        onPlayClick: function (e) {
            this.autoplay = !0
        },
        onMetadataLoaded: function (e) {
            this._playerSrc !== this._default_src && (this.$el.removeClass("disabled"), this.$el.off("touchstart, click", this.onDisabledClick))
        },
        stop: function () {
            this._player && this._player.jPlayer("stop")
        },
        load: function () {
            this._player && this._player.load()
        },
        pause: function () {
            this._player && this._player.jPlayer("pause"), this.autoplay = !1
        },
        play: function () {
            this._player && this._player.jPlayer("play"), this.autoplay = !0
        },
        setSrc: function (t) {
            this._playerSrc = t || this._default_src, this.$el.addClass("disabled"), this.$el.on("touchstart, click", this.onDisabledClick), this._player && this._playerLoaded ? (this.$("object").length ? this.onMetadataLoaded() : this._player.one(e.jPlayer.event.loadedmetadata, this.onMetadataLoaded), this._player.jPlayer("setMedia", {
                mp3: this._playerSrc
            }), this.autoplay && this._player.jPlayer("play")) : this.loadPlayer()
        },
        remove: function () {
            if (this._player) try {
                this.removePlayer()
            } catch (e) {
                i.log("## ERROR ## views/audioPlayer.remove : " + e)
            }
            return t.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/glossary.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) {
            __p.push('<div class="outer-container">    <div class="inner-container">        <div class="header">            <a href="#" class="btn-back"><i class="icon-angle-left"></i>Back</a>            <a href="#" class="btn-close"><i class="icon-remove-sign"></i></a>            <h1>Glossary</h1>        </div>        <div class="letters">            <div class="wrap">                <ul class="letter-list unstyled">                    ');
            var letters = ["#"];
            __p.push("                    ");
            for (var i = 65; i < 91; i++) __p.push("                            "), letters.push(String.fromCharCode(i)), __p.push("                    ");
            __p.push("                    "), _.each(letters, function (e, t) {
                __p.push('                          <li class="', t % 3 && e !== "A" ? "third" : "", '"><a href="#" class="disabled" data-ltr="', e.toLowerCase(), '">', e, "</a></li>                    ")
            }), __p.push('                </ul>            </div>        </div>        <div class="terms">            <!-- see templates/glossaryTermList.tpl -->        </div>        <div class="definition">            <h2></h2>            <p><em>Select a term from the list</em></p>        </div>        </div>    </div></div><div class="bg"></div>')
        }
        return __p.join("")
    }
}), define("tpl!templates/glossaryTermList.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) {
            __p.push('<ul class="term-list unstyled">');
            var start_letter = "";
            __p.push(" "), _.each(terms, function (e, t) {
                __p.push("    ");
                var n = isNaN(parseInt(e.name, 10)) ? e.name.charAt(0).toUpperCase() : "#";
                __p.push("    "), start_letter !== n && (__p.push("        "), start_letter = n, __p.push('        <li class="section" data-ltr="', start_letter, '">', n.toUpperCase(), "</li>    ")), __p.push('    <li><a href="#" data-id="', e.id, '">', e.name, "</a></li>")
            }), __p.push("</ul>")
        }
        return __p.join("")
    }
}), define("views/glossary", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "views/common", "collections/terms", "tpl!templates/glossary.tpl", "tpl!templates/glossaryTermList.tpl"], function (e, t, n, r, i, s, o, u) {
    var a = i.BaseView.extend({
        className: "modal glossary",
        initialize: function (e) {
            t.bindAll(this, "onTermsFetched")
        },
        events: function () {
            var e = {};
            return e["click .term-list a"] = "onTermClick", e["click .letter-list a"] = "onLetterClick", e["click .btn-close"] = "onCloseClick", e["click .btn-back"] = "onBackClick", e
        },
        render: function () {
            return this.$el.html(o()), this.collection = this.collection || new s, this.collection.length ? this.renderTerms(this.collection) : this.collection.fetch({
                success: this.onTermsFetched
            }), this
        },
        renderTerms: function (e) {
            this.$(".terms").html(u({
                terms: this.collection.toJSON()
            }));
            var t = this.collection.getGroupedByLetter(),
                n = this.$(".letter-list a");
            for (var r in t) n.filter('[data-ltr="' + r + '"]').removeClass("disabled")
        },
        selectLetter: function (e) {
            var t = this.$(".term-list .section").filter('[data-ltr="' + e.toUpperCase() + '"]');
            if (t.length) {
                var n = this.$(".terms");
                n.scrollTop(n.scrollTop() - n.offset().top + t.offset().top)
            }
        },
        selectTerm: function (e) {
            if (e && e instanceof this.collection.model) {
                this.termLinks().removeClass("selected");
                var t = this.termLinks().filter('[data-id="' + e.id + '"]');
                t.length && t.addClass("selected"), this.$(".definition h2").text(e.get("name")), this.$(".definition p").text(e.get("definition")), this.$(".inner-container").addClass("def-is-visible")
            }
        },
        onTermsFetched: function (e) {
            this.renderTerms(e)
        },
        onLetterClick: function (t) {
            t && this.preventEvent(t);
            var n = e(t.currentTarget),
                r = n.data("ltr");
            this.selectLetter(r)
        },
        onTermClick: function (t) {
            t && this.preventEvent(t);
            var n = e(t.currentTarget),
                r = n.data("id");
            this.selectTerm(this.collection.get(r))
        },
        onBackClick: function (e) {
            e && this.preventEvent(e), this.$(".inner-container").removeClass("def-is-visible")
        },
        onCloseClick: function (e) {
            e && this.preventEvent(e), this.trigger(a.events.CLOSE)
        },
        termLinks: function () {
            return this._$term_links = this._$term_links || this.$(".term-list a")
        },
        remove: function () {
            return this.$(".letter-list a").off(), i.BaseView.prototype.remove.call(this)
        }
    });
    return a.events = {
        CLOSE: "close"
    }, a
}), define("tpl!templates/references.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="outer-container">    <div class="inner-container">        <div class="header">            <a href="#" class="btn-close">                <i class="icon-remove-sign"></i>            </a>            <h1>References</h1>        </div>        <div class="reference">            <!-- see templates/referncesList.tpl -->        </div>    </div></div><div class="bg"></div>');
        return __p.join("")
    }
}), define("tpl!templates/referencesList.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="wrap">    '), references.length ? (__p.push('        <ol class="reference-list">            '), _.each(references, function (e, t) {
            __p.push("                <li>                    "), e.source != null && __p.push("                        ", e.source, "<br/>                     "), __p.push("                    "), e.url != null && __p.push("                        <a href=\"javascript:window.pinso.elearning.openURL('", e.url, "', '_blank', 'location=no,disallowoverscroll=yes');\">                        ", e.url, "</a><br/>                    "), __p.push("                    "), e.date != null && __p.push("                        ", e.date, "<br/>                    "), __p.push("                                    "), e.other != null && __p.push("                        <a href=\"javascript:window.pinso.elearning.openURL('", e.other.url, "', '_blank', 'location=no,disallowoverscroll=yes');\">                    ", e.other.url, "</a><br/>                    ", e.other.date, "<br/>                    "), __p.push("                </li>                     ")
        }), __p.push("            </ol>        ")) : __p.push("            <p>There are no references for this course.</p>        "), __p.push("</div>");
        return __p.join("")
    }
}), define("views/references", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "views/common", "collections/references", "tpl!templates/references.tpl", "tpl!templates/referencesList.tpl"], function (e, t, n, r, i, s, o, u) {
    var a = i.BaseView.extend({
        className: "modal references",
        events: function () {
            var e = {};
            return e["click .btn-close"] = "onCloseClick", e
        },
        initialize: function (e) {
            t.bindAll(this, "onRefsFetched")
        },
        render: function () {
            return this.$el.html(o()), this.collection = this.collection || new s, this.collection.length ? this.renderRefs(this.collection) : this.collection.fetch({
                success: this.onRefsFetched
            }), this
        },
        renderRefs: function (e) {
            this.$(".reference").html(u({
                references: this.collection.toJSON()
            }))
        },
        onRefsFetched: function (e) {
            this.renderRefs(e)
        },
        onCloseClick: function (e) {
            e && this.preventEvent(e), this.trigger(a.events.CLOSE)
        },
        remove: function () {
            return i.BaseView.prototype.remove.call(this)
        }
    });
    return a.events = {
        CLOSE: "close"
    }, a
}), define("tpl!templates/help.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="outer-container">    <div class="inner-container">            <div class="wrap">             <div id="help-text-menu" class="help-text">                <div id="help-arrow-menu" class="help-arrow"></div>                <p>The Menu icon opens a clickable table of contents that allows you to jump around the course.</p>            </div>            <div id="help-text-dismiss" class="help-text">                <h3>Click/Tap anywhere to dismiss.</h3>            </div>            <div id="help-text-resources" class="help-text">                <div id="help-arrow-resources" class="help-arrow"></div>                <p>The Resources Menu gives you access to additional information such as the Glossary and References.</p>            </div>            <div id="help-text-audio" class="help-text">                <div id="help-arrow-audio" class="help-arrow"></div>                <p>The Audio Player controls the audio on the page. Pausing the audio will prevent the audio from playing until you press Play again. </p>            </div>            <div id="help-text-nav" class="help-text">                <div id="help-arrow-nav" class="help-arrow"></div>                <div id="help-arrow-back-nav" class="help-arrow"></div>                <p>The Forward and Back buttons let you navigate between pages.</p>            </div>        </div>    </div></div><div class="bg"></div>');
        return __p.join("")
    }
}), define("views/help", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "views/common", "tpl!templates/help.tpl"], function (e, t, n, r, i, s) {
    var o = i.BaseView.extend({
        className: "modal help",
        events: function () {
            var e = {};
            return e["click .btn-close"] = "onCloseClick", e["click .inner-container"] = "onCloseClick", e
        },
        initialize: function () {
            e(window).bind("resize.help", t.bind(this.resize, this))
        },
        render: function () {
            return this.$el.html(s()), this
        },
        resize: function () {
            var t = e(window).width(),
                n = null,
                r = null,
                i = null;
            t < 481 ? this.fixModalForSmallScreens() : (e("#main").css({
                overflow: "hidden",
                height: "100%"
            }), n = e(".btn-resource").offset(), r = e(".wrap.audio").offset(), i = e(".right.page-nav").offset(), e("#help-text-resources", this.$el).offset({
                top: n.top - 185
            }), e("#help-text-audio", this.$el).offset({
                top: r.top - 220,
                left: r.left + 170
            }), e("#help-text-nav", this.$el).offset({
                top: i.top - 170,
                left: i.left - 170
            }))
        },
        fixModalForSmallScreens: function () {
            this.$el.css({
                "min-height": "900px"
            }), e("#main").css({
                overflow: "auto",
                height: "auto"
            }), e("body").animate({
                scrollTop: 0
            }, 200), e("#main").css({
                overflow: "hidden",
                height: "auto"
            })
        },
        onCloseClick: function (t) {
            t && this.preventEvent(t), e("#main").css({
                overflow: "hidden",
                height: "100%"
            }), this.$el.css({
                "min-height": "auto"
            }), this.trigger(o.events.CLOSE)
        },
        remove: function () {
            return e(window).unbind("resize.help"), i.BaseView.prototype.remove.call(this)
        }
    });
    return o.events = {
        CLOSE: "close"
    }, o
}), define("tpl!templates/about.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="outer-container">    <div class="inner-container">        <div class="header">            <a href="#" class="btn-close">                <i class="icon-remove-sign"></i>            </a>            <h1>', title, '</h1>        </div>        <div class="about">            <p><em>', copyright, "</em></p>            <br/>            <p><strong>Content Version:</strong> ", content_version, "</p>            <p><strong>Course Version:</strong> ", course_version, "</p>            <p><strong>Platform Version:</strong> ", platform_version, "</p>            <br/>            <p><strong>Screen ID:</strong> ", screen_id, '</p>        </div>    </div></div><div class="bg"></div>');
        return __p.join("")
    }
}), define("views/about", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "views/common", "tpl!templates/about.tpl"], function (e, t, n, r, i, s) {
    var o = i.BaseView.extend({
        className: "modal about",
        events: function () {
            var e = {};
            return e["click .btn-close"] = "onCloseClick", e
        },
        render: function () {
            return this.$el.html(s({
                title: this.model.get("title") || "",
                copyright: this.model.get("copyright") || "",
                platform_version: this.model.get("version") || "",
                course_version: this.model.get("course_version") || "",
                content_version: this.model.get("content_version") || "",
                screen_id: this.model.get("selectedPage").get("sid")
            })), this
        },
        onCloseClick: function (e) {
            e && this.preventEvent(e), this.trigger(o.events.CLOSE)
        }
    });
    return o.events = {
        CLOSE: "close"
    }, o
}), define("tpl!templates/toolbar.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="column small-2 text-center">    <div class="wrap wrap-resources-menu">        <div class="resources-menu trans-200">            <ul class="unstyled">                <li><a href="#" class="btn-course-content">Course Content</a></li>                <li><a href="#" class="btn-glossary">Glossary</a></li>                <li><a href="#" class="btn-help">Help</a></li>                <li><a href="#" class="btn-references">References</a></li>                <li><a href="#" class="btn-about">About</a></li>            </ul>        </div>    </div>    <a href="#" class="btn btn-resource"><i class="icon-angle-up"></i><span>Resources</span></a></div><div class="column small-10 large-7 text-center">    <div class="wrap audio">        <div class="js-player"></div>    </div></div><div class="column small-12 large-3 text-center js-navigation">    <div class="wrap js-navigation">        <nav>            <a href="#" class="left page-nav btn btn-previous btn-double-border-dark-right"><i class="icon-angle-left"></i><span class="label">Prev</span></a>            <a href="#" class="right page-nav btn btn-next btn-double-border-dark-left"><span class="label">Next</span><i class="icon-angle-right"></i></a>            <div class="page-count"></div>        </nav>    </div></div>');
        return __p.join("")
    }
}), define("views/toolbar", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "views/common", "views/audioPlayer", "views/glossary", "views/references", "views/help", "views/about", "tpl!templates/toolbar.tpl"], function (e, t, n, r, i, s, o, u, a, f, l) {
    function c(e, n) {
        var r = e.get("topics");
        if (r && r.length) {
            var i = e.get("selectedTopic") || r.at(0),
                s = e.get("selectedPage") || i.get("pages").at(0);
            return t.indexOf(n, s)
        }
    }
    return i.BaseView.extend({
        _pages: null,
        _$pageCount: null,
        _glossary: null,
        _references: null,
        _help: null,
        _about: null,
        _$resourcesMenu: null,
        player: null,
        className: "row toolbar text-center",
        events: function () {
            var e = {};
            return e["click .btn-next"] = "onPageNext", e["click .btn-previous"] = "onPagePrevious", e["click .btn-resource"] = "onResourcesClick", e["click .btn-glossary"] = "onGlossaryClick", e["click .btn-references"] = "onReferencesClick", e["click .btn-help"] = "onHelpClick", e["click .btn-course-content"] = "onCourseContentClick", e["click .btn-about"] = "onAboutClick", e
        },
        initialize: function (e) {
            t.bindAll(this, "onSelectedPageChange", "onGlossaryClose", "onReferencesClose", "onHelpClose", "onAboutClose");
            if (this.model) {
                var n = this.model.get("topics");
                n && n.length && (this._pages = n.reduce(function (e, t) {
                    return e.concat(t.get("pages").models)
                }, []))
            }
        },
        render: function () {
            return this.$el.html(l()), this._$pageCount = this.$(".page-count"), this.player = new s({
                el: this.$(".js-player"),
                autoplay: this.model.get("audioAutoplay")
            }), this.player.render(), this.listenTo(this.model, "change:selectedPage", this.onSelectedPageChange), this.updatePageCount(), this.updateNavigationState(), this.updateAudio(), this._$resourcesMenu = this.$(".resources-menu"), this
        },
        onSelectedPageChange: function (e) {
            this.updatePageCount(), this.updateNavigationState(), this.updateAudio(), this._$resourcesMenu.hasClass("opened") && this.onResourcesClick()
        },
        nextPage: function () {
            var e = this.model.get("topics"),
                t = this.model.get("selectedTopic") || e.at(0),
                n = t.get("pages"),
                r = this.model.get("selectedPage") || n.at(0),
                i = t,
                s;
            if (n.last() === r) {
                if (e.last() === t) return;
                i = e.at(e.indexOf(t) + 1), n = i.get("pages")
            }
            s = n.at(n.indexOf(r) + 1), window.location.hash = "#topics/" + i.id + "/pages/" + s.id
        },
        previousPage: function () {
            var e = this.model.get("topics"),
                t = this.model.get("selectedTopic") || e.at(0),
                n = t.get("pages"),
                r = this.model.get("selectedPage") || n.at(0),
                i = t,
                s = n.at(n.indexOf(r) - 1);
            if (n.first() === r) {
                if (e.first() === t) return;
                i = e.at(e.indexOf(t) - 1), n = i.get("pages"), s = n.last()
            }
            window.location.hash = "#topics/" + i.id + "/pages/" + s.id
        },
        showGlossary: function () {
            this.onGlossaryClose(), this._glossary = new o({
                collection: this.model.get("terms")
            }), this._glossary.once(o.events.CLOSE, this.onGlossaryClose), e("body").append(this._glossary.render().el)
        },
        showReferences: function () {
            this.onReferencesClose(), this._references = new u({
                collection: this.model.get("references")
            }), this._references.once(u.events.CLOSE, this.onReferencesClose), e("body").append(this._references.render().el)
        },
        showHelp: function () {
            this.onHelpClose(), this._help = new a, this._help.once(a.events.CLOSE, this.onHelpClose), e("body").append(this._help.render().el), this._help.resize()
        },
        showAbout: function () {
            this.onAboutClose(), this._about = new f({
                model: this.model
            }), this._about.once(f.events.CLOSE, this.onAboutClose), e("body").append(this._about.render().el)
        },
        onPageNext: function (e) {
            e && this.preventEvent(e), this.nextPage()
        },
        onPagePrevious: function (e) {
            e && this.preventEvent(e), this.previousPage()
        },
        onResourcesClick: function (e) {
            e && this.preventEvent(e), this._$resourcesMenu.hasClass("opened") ? (this._$resourcesMenu.removeClass("opened"), this._$resourcesMenu.parent().removeClass("opened"), this.$(".btn-resource .icon-angle-up").removeClass("icon-flip-vertical")) : (this._$resourcesMenu.addClass("opened"), this._$resourcesMenu.parent().addClass("opened"), this.$(".btn-resource .icon-angle-up").addClass("icon-flip-vertical"))
        },
        onGlossaryClick: function (e) {
            e && this.preventEvent(e), this.showGlossary(), this.onResourcesClick()
        },
        onReferencesClick: function (e) {
            e && this.preventEvent(e), this.showReferences(), this.onResourcesClick()
        },
        onHelpClick: function (e) {
            e && this.preventEvent(e), this.showHelp(), this.onResourcesClick()
        },
        onCourseContentClick: function (e) {
            e && this.preventEvent(e);
            var t = this.model.get("summary_url"),
                n = this.model.get("title");
            t && window.pinso.elearning.openURL(t, "_blank", "location=no,disallowoverscroll=yes,title=" + n), this.onResourcesClick()
        },
        onAboutClick: function (e) {
            e && this.preventEvent(e), this.showAbout(), this.onResourcesClick()
        },
        onGlossaryClose: function (e) {
            this._glossary && (this._glossary.remove(), this._glossary.off())
        },
        onReferencesClose: function (e) {
            this._references && (this._references.remove(), this._references.off())
        },
        onHelpClose: function (e) {
            this._help && (this._help.remove(), this._help.off())
        },
        onAboutClose: function (e) {
            this._about && (this._about.remove(), this._about.off())
        },
        updateAudio: function () {
            if (this.player) {
                var e = this.model.get("audioPath"),
                    t = this.model.get("selectedPage"),
                    n = t && t.get("audio");
                e && n ? (this.player.setSrc(e + n), this.player.load()) : (this.player.stop(), this.player.setSrc(""))
            }
        },
        updatePageCount: function () {
            var e = this.model.get("topics");
            if (e && e.length) {
                var t = c(this.model, this._pages) + 1;
                this._$pageCount.html(t + " of " + this._pages.length)
            }
        },
        updateNavigationState: function () {
            var e = c(this.model, this._pages),
                n = this.model.get("topics"),
                r = null,
                i = null;
            n && (r = n.pluck("pages"), i = t.reduceRight(r, function (e, t) {
                return e.concat(t.models)
            }, []), e === 0 ? this.$("nav .btn-previous").addClass("disabled") : this.$("nav .btn-previous").removeClass("disabled"), i.length === e + 1 ? this.$("nav .btn-next").addClass("disabled") : this.$("nav .btn-next").removeClass("disabled"))
        },
        remove: function () {
            return this.player && (this.player.remove(), this.player = null), this._$resourcesMenu && (this._$resourcesMenu = null), this._$modal && (this._$modal = null), this.onGlossaryClose(), i.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/disclaimer.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="disclaimer-container">    <div class="disclaimer-wrapper">', disclaimer, '</div>    <div class="product-number-wrapper">', product_number, "</div></div>");
        return __p.join("")
    }
}), define("views/disclaimer", ["jquery", "underscore", "backbone", "views/common", "tpl!templates/disclaimer.tpl"], function (e, t, n, r, i) {
    return r.BaseView.extend({
        className: "row disclaimer",
        render: function () {
            return this.$el.html(i({
                disclaimer: this.model.get("disclaimer"),
                product_number: this.model.get("product_number")
            })), this
        }
    })
}),
function (e, t) {
    typeof exports == "object" && typeof require == "function" ? module.exports = t(require("underscore"), require("backbone")) : typeof define == "function" && define.amd ? define("localstorage", ["underscore", "backbone"], function (n, r) {
        return t(n || e._, r || e.Backbone)
    }) : t(_, Backbone)
}(this, function (e, t) {
    function n() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
    }

    function r() {
        return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
    }
    return t.LocalStorage = window.Store = function (e) {
        if (!this.localStorage) throw "Backbone.localStorage: Environment does not support localStorage.";
        this.name = e;
        var t = this.localStorage().getItem(this.name);
        this.records = t && t.split(",") || []
    }, e.extend(t.LocalStorage.prototype, {
        save: function () {
            this.localStorage().setItem(this.name, this.records.join(","))
        },
        create: function (e) {
            return e.id || (e.id = r(), e.set(e.idAttribute, e.id)), this.localStorage().setItem(this.name + "-" + e.id, JSON.stringify(e)), this.records.push(e.id.toString()), this.save(), this.find(e)
        },
        update: function (t) {
            return this.localStorage().setItem(this.name + "-" + t.id, JSON.stringify(t)), e.include(this.records, t.id.toString()) || this.records.push(t.id.toString()), this.save(), this.find(t)
        },
        find: function (e) {
            return this.jsonData(this.localStorage().getItem(this.name + "-" + e.id))
        },
        findAll: function () {
            return (e.chain || e)(this.records).map(function (e) {
                return this.jsonData(this.localStorage().getItem(this.name + "-" + e))
            }, this).compact().value()
        },
        destroy: function (t) {
            return t.isNew() ? !1 : (this.localStorage().removeItem(this.name + "-" + t.id), this.records = e.reject(this.records, function (e) {
                return e === t.id.toString()
            }), this.save(), t)
        },
        localStorage: function () {
            return localStorage
        },
        jsonData: function (e) {
            return e && JSON.parse(e)
        },
        _clear: function () {
            var t = this.localStorage(),
                n = new RegExp("^" + this.name + "-");
            t.removeItem(this.name), (e.chain || e)(t).keys().filter(function (e) {
                return n.test(e)
            }).each(function (e) {
                t.removeItem(e)
            }), this.records.length = 0
        },
        _storageSize: function () {
            return this.localStorage().length
        }
    }), t.LocalStorage.sync = window.Store.sync = t.localSync = function (e, n, r) {
        var i = n.localStorage || n.collection.localStorage,
            s, o, u = t.$.Deferred && t.$.Deferred();
        try {
            switch (e) {
                case "read":
                    s = n.id != undefined ? i.find(n) : i.findAll();
                    break;
                case "create":
                    s = i.create(n);
                    break;
                case "update":
                    s = i.update(n);
                    break;
                case "delete":
                    s = i.destroy(n)
            }
        } catch (a) {
            a.code === 22 && i._storageSize() === 0 ? o = "Private browsing is unsupported" : o = a.message
        }
        return s ? (r && r.success && (t.VERSION === "0.9.10" ? r.success(n, s, r) : r.success(s)), u && u.resolve(s)) : (o = o ? o : "Record Not Found", r && r.error && (t.VERSION === "0.9.10" ? r.error(n, o, r) : r.error(o)), u && u.reject(o)), r && r.complete && r.complete(s), u && u.promise()
    }, t.ajaxSync = t.sync, t.getSyncMethod = function (e) {
        return e.localStorage || e.collection && e.collection.localStorage ? t.localSync : t.ajaxSync
    }, t.sync = function (e, n, r) {
        return t.getSyncMethod(n).apply(this, [e, n, r])
    }, t.LocalStorage
}), define("models/store", ["underscore", "backbone", "localstorage"], function (e, t) {
    function r(e) {
        return e && (e = e.toLowerCase().split(" ").join("_")), e
    }
    var n = ".store";
    return t.Model.extend({
        initialize: function (i) {
            if (i && "storageKey" in i) {
                var s = r(i.storageKey) + n;
                e.extend(this, {
                    localStorage: new t.LocalStorage(s)
                }), this.unset("storageKey", {
                    silent: !0
                })
            }
        }
    })
}), define("models/user", ["jquery", "underscore", "backbone"], function (e, t, n) {
    return n.Model.extend({
        defaults: {
            student_name: null,
            student_id: null,
            location: null,
            status: null,
            success: null,
            suspend_data: null,
            score_raw: null,
            score_max: null,
            score_min: null,
            score_scaled: null,
            required_score: null,
            credit: null,
            total_time: null,
            exit_status: null,
            progress: null
        }
    })
}), define("utils/local_storage", ["jquery", "underscore", "backbone", "globals", "models/store", "models/user"], function (e, t, n, r, i, s) {
    var o = function () {
        return {
            _store: null,
            initialize: function (e) {
                var n = r.get("client") + "." + r.get("title"),
                    s = i.extend({
                        keys: {
                            USER_STATUS: "user_status"
                        }
                    });
                this._store = new s({
                    id: 0,
                    storageKey: n
                });
                var o = t.bind(function () {
                    this.read(e)
                }, this);
                this._store.fetch({
                    success: o,
                    error: o
                })
            },
            read: function (e) {
                var t;
                this._store ? t = new s(this._store.get(this._store.keys.USER_STATUS)) : t = new s, e(t)
            },
            write: function (e) {
                this._store.set(this._store.keys.USER_STATUS, e), this._store.save()
            }
        }
    };
    return o
}), define("api", ["jquery", "underscore", "globals", "models/user", "mixins/state"], function (e, t, n, r, i) {
    function s() {
        var e = n.get("topics"),
            r = [];
        if (e && e.length) {
            var i = e.pluck("pages");
            r = t.reduceRight(i, function (e, t) {
                return e.concat(t.models)
            }, [])
        }
        return r
    }
    var o = {
        percentComplete: function () {
            var e = s(),
                n = 0;
            if (e && e.length) {
                var r = t.countBy(e, function (e) {
                    var t = e.get("state") === i.states.COMPLETED ? "complete" : "incomplete";
                    return e.get("state") === i.states.COMPLETED ? "complete" : "incomplete"
                });
                n = r.complete ? r.complete / e.length : 0
            }
            return n
        },
        suspendData: function () {
            var e = s(),
                n = [];
            if (e && e.length) {
                var r = t.filter(e, function (e) {
                    return e.get("state") === i.states.COMPLETED
                });
                n = t.pluck(r, "id")
            }
            return n
        },
        assessmentScore: function () {
            return n.get("assessmentUserScore")
        },
        assessmentRequiredScore: function () {
            return n.get("assessmentRequiredScore")
        },
        assessmentTotalQuestions: function () {
            return n.get("assessmentTotalQuestions")
        },
        userStatus: function () {
            var e = new r({
                location: window.location.hash,
                progress: this.percentComplete(),
                suspend_data: this.suspendData(),
                score_raw: this.assessmentScore(),
                score_min: 0,
                score_max: 100,
                required_score: this.assessmentRequiredScore()
            });
            return e
        },
        openURL: function (t, n, r) {
            !window.Cordova && !window.cordova && e("html").hasClass("ipad") && !e("html").hasClass("safari") ? window.alert("This resource can be found in the RESOURCES: Support Materials section of the Library application.") : window.open(t, n, r)
        }
    };
    return window.pinso = window.pinso || {}, window.pinso.elearning = o, o
}), define("utils/tracker", ["jquery", "underscore", "backbone", "globals", "utils/local_storage", "models/store", "models/user", "api"], function (e, t, n, r, i, s, o, u) {
    return {
        _adapter: null,
        _read_callback: null,
        initialize: function (n) {
            t.bindAll(this, "onRead", "write"), this._read_callback = n;
            try {
                window.pinso.data.adapter
            } catch (s) {
                window.pinso = window.pinso || {}, window.pinso.data = window.pinso.data || {}, window.pinso.data.adapter = i
            }
            this._adapter = new window.pinso.data.adapter(e, o), this._adapter.initialize(this.onRead), r.on("change:selectedPage change:assessmentUserScore", this.write)
        },
        onRead: function (e) {
            this._read_callback(e)
        },
        read: function (e) {
            this._read_callback = e, this._adapter && this._adapter.read(this.onRead)
        },
        write: function () {
            this._adapter && this._adapter.write(u.userStatus())
        },
        destroy: function () {
            this.write(), r.off(null, null, this)
        }
    }
}), define("views/app", ["jquery", "underscore", "backbone", "globals", "mixins/state", "views/common", "views/splash", "views/globalnav", "views/topbar", "views/page", "views/toolbar", "views/disclaimer", "views/help", "utils/tracker", "api"], function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
    return s.BaseView.extend({
        _splashView: null,
        _globalNavView: null,
        _pageView: null,
        _topbarView: null,
        _toolbarView: null,
        _disclaimerView: null,
        _help: null,
        _$content: null,
        id: "main",
        initialize: function (e) {
            t.bindAll(this, "onMenuToggle", "onSelectedPageChange", "onSplashContinue", "onHelpClose")
        },
        render: function () {
            var n = r.get("topics");
            if (n) {
                this._globalNavView = new u({
                    el: this.$("#globalnav"),
                    model: r
                }), this._globalNavView.render(), this._$content = this.$("#content-container"), this._topbarView = new a({
                    client: r.get("client"),
                    title: r.get("title")
                }), this._$content.append(this._topbarView.render().el), this._topbarView.on(a.events.MENU_TOGGLE, this.onMenuToggle), r.get("disclaimer") || r.get("product_number") ? (this._disclaimerView = new c({
                    model: r
                }), this._$content.append(this._disclaimerView.render().el)) : e("body").addClass("no-disclaimer"), this._toolbarView = new l({
                    model: r
                }), this._$content.append(this._toolbarView.render().el);
                var s = n.pluck("pages"),
                    f = t.reduceRight(s, function (e, t) {
                        return e.concat(t.models)
                    }, []),
                    p = t.find(f, function (e) {
                        return e.get("state") === i.states.COMPLETED
                    });
                r.get("audioAutoplay") && (r.get("splash") || r.get("showInitialHelp") && !p) ? this._toolbarView.player.pause() : r.get("audioAutoplay") && !(r.get("splash") || r.get("showInitialHelp") && !p) && this._toolbarView.player.play(), r.get("showInitialHelp") && !p ? (this._toolbarView.player.pause(), this._help = new h, this._help.once(h.events.CLOSE, this.onHelpClose), e("body").append(this._help.render().el), this._help.resize()) : r.get("splash") && (this._toolbarView.player.pause(), this._splashView = new o({
                    model: r
                }), this.$el.append(this._splashView.render().el), this._splashView.once(o.events.CONTINUE, this.onSplashContinue)), this.addPageView(), this.listenTo(r, "change:selectedPage", this.onSelectedPageChange);
                if (e("html").hasClass("safari ipad") || e("html").hasClass("safari iphone")) {
                    var d = t.debounce(function () {
                        window.scrollTo(0, 0)
                    }, 300);
                    e(window).bind("resize", d)
                }
            }
            return this
        },
        addPageView: function () {
            this._pageView && (this._pageView.remove(), this._pageView = null);
            var e = r.get("topics");
            if (e && e.length) {
                var t = r.get("selectedTopic") || e.at(0),
                    n = r.get("selectedPage") || t.get("pages").at(0);
                this.setPageComplete(n), this._pageView = new f({
                    topic: t,
                    page: n
                }), this._topbarView.$el.after(this._pageView.render().el)
            }
        },
        setPageComplete: function (e) {
            if (e) {
                e.set("state", i.states.COMPLETED);
                var n = d.suspendData(),
                    s = t.contains(n, e.get("id"));
                s || n.push(e.id), p.write();
                var o = r.get("gate");
                if (o) {
                    var u = r.get("pages"),
                        a = u.indexOf(e) + 1,
                        f = u.at(a);
                    f && f.get("state") === i.states.LOCKED && f.set("state", i.states.NEW)
                }
            }
        },
        onSelectedPageChange: function (e, t) {
            this.addPageView()
        },
        onMenuToggle: function (e) {
            this._$content.toggleClass("opened")
        },
        onSplashContinue: function (e) {
            this._splashView.remove(), this._splashView = null, r.get("audioAutoplay") && this._toolbarView.player.play()
        },
        onHelpClose: function (e) {
            this._help && (this._help.remove(), this._help.off()), r.get("audioAutoplay") && this._toolbarView.player.play()
        },
        remove: function () {
            return this._globalNavView && (this._globalNavView.remove(), this._globalNavView = null), this._topbarView && (this._topbarView.off(), this._topbarView.remove(), this._topbarView = null), this._pageView && (this._pageView.remove(), this._pageView = null), this._toolbarView && (this._toolbarView.remove(), this._toolbarView = null), this._$content = null, s.BaseView.prototype.remove.call(this)
        }
    })
}), define("views/iles/multipleChoice", ["jquery", "underscore", "vendor/custom.modernizr", "views/common"], function (e, t, n, r) {
    return r.BaseView.extend({
        _randomize: !1,
        _currentQuestion: null,
        className: "widget ile ile-multiple-choice",
        selector: ".ile-multiple-choice",
        events: function () {
            var e = {};
            return e["click .question li"] = "onAnswerSelected", e["click .btn-submit"] = "onSubmit", e["click .btn-continue"] = "onContinue", e
        },
        initialize: function (e) {
            e && "randomize" in e && (this._randomize = e.randomize), this.begin()
        },
        begin: function () {
            this._currentQuestion = e(this.questions().get(0)), this.updateStatus(), this.submitBtn().addClass("disabled"), this.continueBtn().addClass("concealed");
            var t = 1,
                n = this.questions().length;
            for (t; t < n; t++) e(this.questions()[t]).addClass("concealed");
            this.$el.addClass("ready")
        },
        setCurrentQuestion: function (t) {
            t !== this._currentQuestion && (this._currentQuestion = e(t))
        },
        nextQuestion: function () {
            this._currentQuestion.addClass("concealed");
            var e = this.questions().index(this._currentQuestion);
            this.setCurrentQuestion(this.questions().get(e + 1)), this.submitBtn().removeClass("concealed").addClass("disabled"), this.continueBtn().addClass("concealed"), this.feedback().addClass("hidden"), this.updateStatus(), this._currentQuestion.removeClass("concealed")
        },
        updateStatus: function () {
            if (this.questions().length > 1) {
                var e = this.questions().index(this._currentQuestion);
                this.status().html("Question " + (e + 1) + " of " + this.questions().length), this.status().show()
            } else this.status().hide()
        },
        updateButtons: function () {
            this.questions().last().index() === this._currentQuestion.index() ? (this.submitBtn().addClass("disabled"), this.continueBtn().addClass("concealed")) : (this.submitBtn().addClass("concealed"), this.continueBtn().removeClass("concealed"))
        },
        scoreQuestion: function () {
            var n = this._currentQuestion.data("response"),
                r = this._currentQuestion.find("li"),
                i;
            if (t.isString(n)) {
                var s = n.split(",");
                i = t.map(s, function (e) {
                    return parseInt(e, 10)
                })
            } else i = [n];
            t.each(r, function (n, r) {
                n = e(n);
                var s = r + 1,
                    o = t.find(i, function (e) {
                        return e === s
                    });
                o ? n.addClass("correct") : n.hasClass("selected") && n.addClass("incorrect")
            }), this._currentQuestion.data("answered", !0);
            var o, u;
            e(r).filter(".selected.correct").length === i.length && !e(r).filter(".selected.incorrect").length ? (o = "correct", u = this._currentQuestion.data("correct")) : (o = "incorrect", u = this._currentQuestion.data("incorrect")), this._currentQuestion.addClass(o), this.feedback().removeClass("hidden correct incorrect").addClass(o).html(u)
        },
        selectAnswer: function (t) {
            this._currentQuestion.data("answered") || (t = e(t), this._currentQuestion.hasClass("question-multi") ? t.toggleClass("selected") : (this._currentQuestion.find(".selected").removeClass(), t.addClass("selected")), this.submitBtn().removeClass("disabled"))
        },
        onAnswerSelected: function (t) {
            t.preventDefault();
            var n = e(t.currentTarget);
            this.selectAnswer(n)
        },
        onSubmit: function (e) {
            e.preventDefault(), this.submitBtn().hasClass("disabled") || (this.updateButtons(), this.scoreQuestion())
        },
        onContinue: function (e) {
            e.preventDefault(), this.nextQuestion()
        },
        status: function () {
            return this._$status = this._$status || this.$(".status")
        },
        feedback: function () {
            return this._$feedback = this._$feedback || this.$(".feedback")
        },
        submitBtn: function () {
            return this._$submitBtn = this._$submitBtn || this.$(".btn-submit")
        },
        continueBtn: function () {
            return this._$continueBtn = this._$continueBtn || this.$(".btn-continue")
        },
        questions: function () {
            if (!this._$questions) {
                var n = this.$(".question");
                this._randomize && (n = e(t.shuffle(n))), this._$questions = n
            }
            return this._$questions
        },
        remove: function () {
            return this._$status && (this._$status = null), this._$feedback && (this._$feedback = null), this._$submitBtn && (this._$submitBtn = null), this._$continueBtn && (this._$continueBtn = null), this._$questions && (this._$questions = null), r.BaseView.prototype.remove.call(this)
        }
    })
}), define("views/iles/category", ["jquery", "underscore", "vendor/custom.modernizr", "views/common"], function (e, t, n, r) {
    return r.BaseView.extend({
        _attempts: 0,
        _maxAttempts: 2,
        className: "widgets ile ile-category",
        selector: ".ile-category",
        _icon_default: "icon-circle-blank",
        _icon_selected: "icon-circle",
        _icon_correct: "icon-ok-sign",
        _icon_incorrect: "icon-remove-sign",
        _all_icons: null,
        _incorrect_user_answers: null,
        _correct_user_answers: null,
        events: function () {
            var e = {};
            return e["click .categories a"] = "onAnswerSelected", e["click .btn-submit"] = "onSubmit", e["click .btn-user-answers"] = "onUserAnswersClick", e["click .btn-correct-answers"] = "onCorrectAnswersClick", e
        },
        initialize: function (e) {
            this._all_icons = [this._icon_default, this._icon_selected, this._icon_correct, this._icon_incorrect].join(" "), this.begin()
        },
        begin: function () {
            this._attempts = 0, this.submitBtn().addClass("disabled"), this.correctBtn().addClass("concealed"), this.userAnswersBtn().addClass("concealed disabled"), this.hideFeedback(), this.$el.addClass("ready"), e("html").hasClass("lt-ie9") && this.$("td a").trigger("focus")
        },
        score: function () {
            this.submitBtn().addClass("disabled"), this._attempts = this._attempts + 1;
            var t = this.$("tr").slice(1),
                n = this;
            t.each(function (t, r) {
                r = e(r);
                var i = parseInt(r.data("response"), 10) - 1,
                    s = e(r.find("a").get(i));
                if (s.hasClass("selected")) n.setLinkCorrect(s), r.addClass("disabled");
                else {
                    var o = r.find("a.selected");
                    n._attempts !== n._maxAttempts ? o.removeClass("selected").find("i").removeClass(n._all_icons).addClass(n._icon_default) : n.setLinkIncorrect(o)
                }
            }), this.feedback().removeClass("correct incorrect");
            var r, i;
            t.find(".correct").length === t.length ? (r = "correct", i = ".correct", this.submitBtn().addClass("concealed")) : (r = "incorrect", this._attempts !== this._maxAttempts ? i = ".incorrect" : (i = ".incorrect-last", this.correctBtn().removeClass("concealed"), this.userAnswersBtn().removeClass("concealed"), this.submitBtn().addClass("concealed"), this._incorrect_user_answers = t.find("a.incorrect"), this._correct_user_answers = t.find("a.correct"))), this.feedback().removeClass("hidden").addClass(r).find(i).removeClass("concealed")
        },
        updateButtons: function () {
            var n = this.$("tr").slice(1),
                r = t.find(n, function (t) {
                    return !e(t).find("a").hasClass("selected")
                });
            r || this.submitBtn().removeClass("disabled")
        },
        hideFeedback: function () {
            this.feedback().addClass("hidden").children().addClass("concealed")
        },
        selectAnswer: function (t) {
            t = e(t);
            var n = t.parents("tr").find("a").not(t);
            n.removeClass("selected"), n.find("i").removeClass().addClass(this._icon_default), t.find("i").removeClass(this._icon_default).addClass(this._icon_selected), t.addClass("selected")
        },
        setLinkCorrect: function (t) {
            t = e(t), t.removeClass("incorrect").addClass("correct disabled").find("i").removeClass(this._all_icons).addClass(this._icon_correct)
        },
        setLinkIncorrect: function (t) {
            t = e(t), t.removeClass("correct disabled").addClass("incorrect").find("i").removeClass(this._all_icons).addClass(this._icon_incorrect)
        },
        showCorrectAnswers: function () {
            this.$(".categories a").removeClass("correct incorrect selected"), this.$(".categories i").removeClass(this._all_icons).addClass(this._icon_default);
            var n = this.$("tr").slice(1),
                r = this;
            t.each(n, function (t) {
                t = e(t);
                var n = parseInt(t.data("response"), 10) - 1;
                r.setLinkCorrect(t.find("a").get(n))
            })
        },
        showUserAnswers: function () {
            this.$(".categories a").removeClass("correct incorrect selected"), this.$(".categories i").removeClass(this._all_icons).addClass(this._icon_default);
            var e = this;
            t.each(this._correct_user_answers, function (t) {
                e.setLinkCorrect(t)
            }), t.each(this._incorrect_user_answers, function (t) {
                e.setLinkIncorrect(t)
            })
        },
        onAnswerSelected: function (t) {
            t && this.preventEvent(t);
            var n = e(t.currentTarget);
            !n.hasClass("disabled") && !n.parents("tr").hasClass("disabled") && (this.selectAnswer(t.currentTarget), this.updateButtons(), this.hideFeedback())
        },
        onSubmit: function (e) {
            e && this.preventEvent(e), this.submitBtn().hasClass("disabled") || this.score()
        },
        onUserAnswersClick: function (e) {
            e && this.preventEvent(e), this.userAnswersBtn().hasClass("disabled") || (this.correctBtn().removeClass("disabled"), this.userAnswersBtn().addClass("disabled"), this.showUserAnswers())
        },
        onCorrectAnswersClick: function (e) {
            e && this.preventEvent(e), this.correctBtn().hasClass("disabled") || (this.userAnswersBtn().removeClass("disabled"), this.correctBtn().addClass("disabled"), this.showCorrectAnswers())
        },
        submitBtn: function () {
            return this._$submitBtn = this._$submitBtn || this.$(".btn-submit")
        },
        correctBtn: function () {
            return this._$correctBtn = this._$correctBtn || this.$(".btn-correct-answers")
        },
        userAnswersBtn: function () {
            return this._$userAnswersBtn = this._$userAnswersBtn || this.$(".btn-user-answers")
        },
        feedback: function () {
            return this._$feedback = this._$feedback || this.$(".feedback")
        },
        remove: function () {
            return this._$submitBtn && (this._$submitBtn = null), this._$correctBtn && (this._$correctBtn = null), this._$userAnswersBtn && (this._$userAnswersBtn = null), this._$feedback && (this._$feedback = null), r.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/assessmentSummary.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="score"><span>Your Score:</span> ', score, "%</div><div>"), score >= required_score ? __p.push("    <p>You have finished the <em>", title ? title + " " : "", "</em>assessment. Use the main menu to revisit any page within the program.</p>") : __p.push("    <p>You have finished the <em>", title ? title + " " : "", "</em>assessment. You must receive ", required_score, "% or above on the final exam in order to receive credit for this course. Please review the program again to obtain a better understanding of the content, then try the exam again. Use the left margin menu to revisit any page within the program.</p>"), __p.push('<h5>Review Your Responses:</h5><ol class="unstyled">'), _.each(responses, function (e, t) {
            __p.push("    <li>        "), e.isCorrect ? __p.push('            <h5 class="correct"><i class="icon-check-sign"></i> Question ', t + 1, "</h5>        ") : __p.push('            <h5 class="incorrect"><i class="icon-remove-sign"></i> Question ', t + 1, "</h5>        "), __p.push("        <p><strong>Question:</strong> ", e.question, "</p>        <p><strong>You chose:</strong> ", e.selected, "</p>        <p><em>", e.feedback, "</em></p>    </li>")
        }), __p.push("</ol></div>");
        return __p.join("")
    }
}), define("views/iles/assessment", ["jquery", "underscore", "vendor/custom.modernizr", "globals", "views/iles/multipleChoice", "tpl!templates/assessmentSummary.tpl"], function (e, t, n, r, i, s) {
    return i.extend({
        className: "widget ile ile-assessment",
        selector: ".ile-assessment",
        events: function () {
            var e = i.prototype.events.call(this);
            return e["click .btn-begin"] = "onBegin", e
        },
        initialize: function (e) {
            this._randomize = r.get("assessmentRandomize") || e && "randomize" in e, r.get("title") && this.$(".course-title").html(r.get("title")), r.get("assessmentRequiredScore") && this.$(".required-score").html(r.get("assessmentRequiredScore")), this.$el.addClass("ready")
        },
        begin: function (e) {
            i.prototype.begin.call(this), this.$(".intro").addClass("concealed"), this.$(".feedback").addClass("hidden"), this.$(".questions").removeClass("concealed"), this.continueBtn().removeClass("concealed").addClass("disabled")
        },
        end: function () {
            var e = this.summary();
            this.continueBtn().addClass("concealed"), this.$(".questions").addClass("concealed"), this.$(".feedback").html(e).removeClass("hidden");
            var t = this.score(),
                n = r.get("assessmentRequiredScore");
            t >= n && r.set("assessmentUserScore", t)
        },
        score: function () {
            var e = this.$(".question.incorrect").length,
                t = this.questions().length - e;
            return Math.round(t / this.questions().length * 100)
        },
        scoreQuestion: function () {
            var n = this._currentQuestion.data("response"),
                r = this._currentQuestion.find("li"),
                i;
            if (t.isString(n)) {
                var s = n.split(",");
                i = t.map(s, function (e) {
                    return parseInt(e, 10)
                })
            } else i = [n];
            t.each(r, function (n, r) {
                n = e(n);
                var s = r + 1,
                    o = t.find(i, function (e) {
                        return e === s
                    });
                o ? n.addClass("correct") : n.hasClass("selected") && n.addClass("incorrect")
            }), this._currentQuestion.data("answered", !0);
            var o, u;
            e(r).filter(".selected.correct").length === i.length && !e(r).filter(".selected.incorrect").length ? (o = "correct", u = this._currentQuestion.data("correct")) : (o = "incorrect", u = this._currentQuestion.data("incorrect")), this._currentQuestion.addClass(o)
        },
        summary: function () {
            var n = [];
            return this.questions().each(function (r, i) {
                i = e(i);
                var s = i.hasClass("correct"),
                    o, u = i.find(".selected .content");
                i.hasClass("question-multi") && u.length > 1 ? o = t.reduce(u, function (t, n, r) {
                    var i = r === u.length - 1 ? "" : "; ";
                    return t + e(n).text() + i
                }, "") : o = i.find(".selected .content").text();
                var a = {
                    isCorrect: s,
                    question: i.find("p").text(),
                    selected: o,
                    feedback: s ? i.data("correct") : i.data("incorrect")
                };
                n.push(a)
            }), s({
                title: r.get("title"),
                score: this.score(),
                required_score: r.get("assessmentRequiredScore"),
                responses: n
            })
        },
        selectAnswer: function (e) {
            this._currentQuestion.data("answered") || (i.prototype.selectAnswer.call(this, e), this.continueBtn().removeClass("disabled"))
        },
        nextQuestion: function () {
            this.questions().last().index() === this._currentQuestion.index() ? this.end() : (i.prototype.nextQuestion.call(this), this.continueBtn().removeClass("concealed").addClass("disabled"))
        },
        updateButtons: function () { },
        onBegin: function (e) {
            e && this.preventEvent(e), this.begin()
        },
        questions: function () {
            var e = r.get("assessmentPoolCount");
            if (e) {
                var n = this.$(".question"),
                    s = n.length - e;
                if (s > 0) {
                    var o = t.sample(n, s);
                    n.filter(o).remove()
                }
            }
            return i.prototype.questions.call(this)
        },
        onContinue: function (e) {
            e && this.preventEvent(e), this.continueBtn().hasClass("disabled") || (this.scoreQuestion(), this.nextQuestion())
        }
    })
}),
function (e) {
    function et() { }

    function tt(e) {
        u = e.pageX, a = e.pageY, f = e.clientX, l = e.clientY
    }

    function nt(e, t) {
        var n, r, i;
        return e = e || "page", t.touches ? (n = t.touches.length ? t.touches[0] : t.changedTouches[0], r = n[e + "X"], i = n[e + "Y"]) : (r = t[e + "X"], i = t[e + "Y"]), {
            x: r,
            y: i
        }
    }

    function rt(t) {
        if (V) {
            var n = nt("screen", t);
            return n.x += e.scrollX, n.y += e.scrollY, n
        }
        return nt("page", t)
    }

    function it(e) {
        return nt(V ? "screen" : "client", e)
    }

    function st() {
        return {
            x: e.scrollX || t.documentElement.scrollLeft,
            y: e.scrollY || t.documentElement.scrollTop
        }
    }

    function ot(e) {
        var t, n = e.touches,
            r = 0,
            i = 0,
            s = 0,
            o = 0;
        for (t = 0; t < n.length; t++) r += n[t].pageX / n.length, i += n[t].pageY / n.length, s += n[t].clientX / n.length, o += n[t].clientY / n.length;
        return {
            pageX: r,
            pageY: i,
            clientX: s,
            clientY: o
        }
    }

    function ut(e) {
        if (!e.touches.length) return;
        var t, n = e.touches,
            r = e.touches[0].pageX,
            i = e.touches[0].pageY,
            s = r,
            o = i;
        for (t = 1; t < n.length; t++) r = r > e.touches[t].pageX ? r : e.touches[t].pageX, i = r > e.touches[t].pageX ? i : e.touches[t].pageY;
        return {
            left: r,
            top: i,
            width: s - r,
            height: o - i
        }
    }

    function at(e) {
        var t = (x && x.options || C).deltaSource,
            n = t + "X",
            r = t + "Y",
            i = e.touches[0][n],
            s = e.touches[0][r];
        return e.type === "touchend" && e.touches.length === 1 ? (i -= e.changedTouches[0][n], s -= e.changedTouches[0][r]) : (i -= e.touches[1][n], s -= e.touches[1][r]), Math.sqrt(i * i + s * s)
    }

    function ft(e, t) {
        var n = (x && x.options || C).deltaSource,
            r = n + "X",
            i = n + "Y",
            s = e.touches[0][r],
            o = e.touches[0][i];
        e.type === "touchend" && e.touches.length === 1 ? (s -= e.changedTouches[0][r], o -= e.changedTouches[0][i]) : (s -= e.touches[1][r], o -= e.touches[1][i]);
        var u = 180 * Math.atan(o / s) / Math.PI;
        if (typeof t == "number") {
            var a = u - t,
                f = a % 360;
            f > 315 ? u -= 360 + u / 360 | 0 : f > 135 ? u -= 180 + u / 360 | 0 : f < -315 ? u += 360 + u / 360 | 0 : f < -135 && (u += 180 + u / 360 | 0)
        }
        return u
    }

    function lt(e) {
        e = e || x;
        var t = e ? e.options.origin : C.origin;
        return t instanceof Element ? (t = Lt(t).getRect(), t.x = t.left, t.y = t.top) : typeof t == "function" && (t = t(e && e._element)), t
    }

    function ct(e) {
        for (var t = 0, n = e.length; t < n; t++) e[t].rect = e[t].getRect()
    }

    function ht(e) {
        if (e.length) {
            var n, s = e[0],
                u, a = [],
                f = [],
                l, c, h;
            for (c = 1; c < e.length; c++) {
                n = e[c];
                if (!a.length) {
                    u = s;
                    while (u.parentNode !== t) a.unshift(u), u = u.parentNode
                }
                if (s instanceof o && n instanceof r && !(n instanceof i)) {
                    if (n === s.parentNode) continue;
                    u = n.ownerSVGElement
                } else u = n;
                f = [];
                while (u.parentNode !== t) f.unshift(u), u = u.parentNode;
                h = 0;
                while (f[h] && f[h] === a[h]) h++;
                var p = [f[h - 1], f[h], a[h]];
                l = p[0].lastChild;
                while (l) {
                    if (l === p[1]) {
                        s = n, a = [];
                        break
                    }
                    if (l === p[2]) break;
                    l = l.previousSibling
                }
            }
            return {
                element: s,
                index: e.indexOf(s)
            }
        }
    }

    function pt(e, n) {
        if (y.length || E.length) {
            var r, i = [],
                s = [],
                o = [],
                u = [],
                a;
            for (r = 0; r < y.length; r++) y[r].dropCheck(e) && (i.push(y[r]), s.push(y[r]._element));
            a = ht(s), T = a ? i[a.index] : null;
            if (E.length) {
                var f = x._element;
                for (r = 0; r < E.length; r++) {
                    var l = E[r],
                        c = t.querySelectorAll(l.selector);
                    for (var h = 0, p = c.length; h < p; h++) l._element = c[h], l.rect = l.getRect(), l._element !== f && s.indexOf(l._element) === -1 && u.indexOf(l._element === -1) && l.dropCheck(e) && (o.push(l), u.push(l._element))
                }
                u.length && (T && (o.push(T), u.push(T._element)), a = ht(u), a && (T = o[a.index], T.selector && (T._element = u[a.index])))
            }
            return T
        }
    }

    function dt(e, t, n, r, i) {
        var s, o, v = (x && x.options || C).deltaSource,
            g = v + "X",
            y = v + "Y",
            b = x ? x.options : C,
            w = lt(x);
        r = r || x._element;
        if (t === "gesture") {
            var E = ot(e);
            o = {
                x: E.pageX - w.x,
                y: E.pageY - w.y
            }, s = {
                x: E.clientX - w.x,
                y: E.clientY - w.y
            }
        } else {
            o = rt(e), s = it(e), o.x -= w.x, o.y -= w.y, s.x -= w.x, s.y -= w.y;
            if (x.options.snapEnabled && x.options.snap.actions.indexOf(t) !== -1) {
                var S = b.snap;
                this.snap = {
                    mode: S.mode,
                    anchors: k.anchors,
                    range: k.range,
                    locked: k.locked,
                    x: k.x,
                    y: k.y,
                    realX: k.realX,
                    realY: k.realY,
                    dx: k.dx,
                    dy: k.dy
                }, k.locked && (S.mode === "path" ? (k.xInRange && (o.x += k.dx, s.x += k.dx), k.yInRange && (o.y += k.dy, s.y += k.dy)) : (o.x += k.dx, o.y += k.dy, s.x += k.dx, s.y += k.dy))
            }
        } if (x.options.restrictions[t]) {
            var T = x.options.restrictions[t],
                N, L = o.x,
                A = o.y;
            T instanceof Element ? N = Lt(T).getRect() : (typeof T == "function" && (T = T(o.x, o.y, x._element)), N = T, "x" in T && "y" in T && (N = {
                left: T.x,
                top: T.y,
                right: T.x + T.width,
                bottom: T.y + T.height
            })), o.x = Math.max(Math.min(N.right, o.x), N.left), o.y = Math.max(Math.min(N.bottom, o.y), N.top);
            var O = o.x - L,
                M = o.y - A;
            s.x += O, s.y += M
        }
        this.x0 = c, this.y0 = h, this.clientX0 = p, this.clientY0 = d, this.pageX = o.x, this.pageY = o.y, this.clientX = s.x, this.clientY = s.y, this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.button = e.button, this.target = r, this.timeStamp = (new Date).getTime(), this.type = t + (n || ""), i && (this.relatedTarget = i), n === "end" || t === "drop" ? v === "client" ? (this.dx = s.x - c, this.dy = s.y - h) : (this.dx = o.x - c, this.dy = o.y - h) : v === "client" ? (this.dx = s.x - f, this.dy = s.y - l) : (this.dx = o.x - u, this.dy = o.y - a), t === "resize" ? b.squareResize || e.shiftKey ? (F === "y" ? this.dx = this.dy : this.dy = this.dx, this.axes = "xy") : (this.axes = F, F === "x" ? this.dy = 0 : F === "y" && (this.dx = 0)) : t === "gesture" && (this.touches = e.touches, this.distance = at(e), this.box = ut(e), n === "start" ? (this.scale = 1, this.ds = 0, this.angle = ft(e), this.da = 0) : (this.scale = this.distance / m.startDistance, this.angle = ft(e, m.prevAngle), n === "end" ? (this.da = this.angle - m.startAngle, this.ds = this.scale - 1) : (this.da = this.angle - m.prevAngle, this.ds = this.scale - m.prevScale)))
    }

    function vt(e, t) {
        if (typeof e != "string") return null;
        t = t || x;
        var n = e.indexOf("resize") !== -1 ? "resize" : e,
            r = (t || x).options;
        if ((n === "resize" && r.resizeable || e === "drag" && r.draggable || e === "gesture" && r.gestureable) && q[n]) {
            if (e === "resize" || e === "resizeyx") e = "resizexy";
            return e
        }
        return null
    }

    function mt(e, n) {
        var r;
        if (H || j || P) return;
        if (S.length && e.type === "mousedown") r = St(e, S);
        else {
            var i, o = e.target instanceof s ? e.target.correspondingUseElement : e.target,
                u;
            while (o !== t.documentElement && !r) {
                S = [];
                for (i in w) u = Element.prototype[$] === J ? t.querySelectorAll(i) : undefined, o[$](i, u) && (w[i]._element = o, S.push(w[i]));
                r = St(e, S), o = o.parentNode
            }
        } if (r) return M = !0, gt(e, r)
    }

    function gt(e, n) {
        if (e.touches && e.touches.length < 2 && !x || !M) {
            var r = Z.useAttachEvent ? e.currentTarget : this;
            x = g.get(r)
        }
        var i = x && x.options;
        if (x && !(H || j || P)) {
            var s = vt(n || x.getAction(e)),
                o, u, a, f = lt(x);
            e.touches ? (o = ot(e), u = {
                x: o.pageX,
                y: o.pageY
            }, a = {
                x: o.clientX,
                y: o.clientY
            }) : (u = rt(e), a = it(e));
            if (!s) return e;
            M = !0, _ = !1, i.styleCursor && (t.documentElement.style.cursor = I[s].cursor), F = s === "resizexy" ? "xy" : s === "resizex" ? "x" : s === "resizey" ? "y" : "", R = s, c = u.x - f.x, h = u.y - f.y, p = a.x - f.x, d = a.y - f.y, k.x = null, k.y = null, e.preventDefault(), v = e
        }
    }

    function yt(e) {
        if (M) {
            c === u && h === a && (_ = !0);
            if (R && x)
                if (x.options.snapEnabled && x.options.snap.actions.indexOf(R) !== -1) {
                    var t = x.options.snap,
                        n = rt(e),
                        r = lt(x),
                        i, s, o, f, l, v, m, g, y;
                    k.realX = n.x, k.realY = n.y, n.x -= r.x, n.y -= r.y, t.range < 0 && (t.range = Infinity);
                    if (t.mode === "anchor" && t.anchors.length) {
                        i = {
                            anchor: null,
                            distance: 0,
                            range: 0,
                            distX: 0,
                            distY: 0
                        };
                        for (g = 0, y = t.anchors.length; g < y; g++) {
                            var b = t.anchors[g];
                            s = typeof b.range == "number" ? b.range : t.range, l = b.x - n.x, v = b.y - n.y, m = Math.sqrt(l * l + v * v), o = m < s, s === Infinity && i.inRange && i.range !== Infinity && (o = !1);
                            if (!i.anchor || (o ? i.inRange && s !== Infinity ? m / s < i.distance / i.range : m < i.distance : !i.inRange && m < i.distance)) s === Infinity && (o = !0), i.anchor = b, i.distance = m, i.range = s, i.inRange = o, i.distX = l, i.distY = v, k.range = s
                        }
                        o = i.inRange, f = i.anchor.x !== k.x || i.anchor.y !== k.y, k.x = i.anchor.x, k.y = i.anchor.y, k.dx = i.distX, k.dy = i.distY, x.options.snap.anchors.closest = k.anchors.closest = i.anchor
                    } else if (t.mode === "grid") {
                        var w = Math.round((n.x - t.gridOffset.x) / t.grid.x),
                            E = Math.round((n.y - t.gridOffset.y) / t.grid.y),
                            S = w * t.grid.x + t.gridOffset.x,
                            T = E * t.grid.y + t.gridOffset.y;
                        l = S - n.x, v = T - n.y, m = Math.sqrt(l * l + v * v), o = m < t.range, f = S !== k.x || T !== k.y, k.x = S, k.y = T, k.dx = l, k.dy = v, k.range = t.range
                    }
                    if (t.mode === "path" && t.paths.length) {
                        i = {
                            path: {},
                            distX: 0,
                            distY: 0,
                            range: 0
                        };
                        for (g = 0, y = t.paths.length; g < y; g++) {
                            var N = t.paths[g],
                                C = !1,
                                A = !1,
                                O = N,
                                D, B;
                            typeof N == "function" && (O = N(n.x, n.y)), typeof O.x == "number" ? (D = O.x, C = !0) : D = n.x, typeof O.y == "number" ? (B = O.y, A = !0) : B = n.y, s = typeof O.range == "number" ? O.range : t.range, l = D - n.x, v = B - n.y;
                            var F = Math.abs(l) < s && C,
                                q = Math.abs(v) < s && A;
                            s === Infinity && i.xInRange && i.range !== Infinity && (F = !1);
                            if (!("x" in i.path) || (F ? i.xInRange && s !== Infinity ? m / s < i.distX / i.range : Math.abs(l) < Math.abs(i.distX) : !i.xInRange && Math.abs(l) < Math.abs(i.distX))) s === Infinity && (F = !0), i.path.x = D, i.distX = l, i.xInRange = F, i.range = s, k.range = s;
                            s === Infinity && i.yInRange && i.range !== Infinity && (q = !1);
                            if (!("y" in i.path) || (q ? i.yInRange && s !== Infinity ? m / s < i.distY / i.range : Math.abs(v) < Math.abs(i.distY) : !i.yInRange && Math.abs(v) < Math.abs(i.distY))) s === Infinity && (q = !0), i.path.y = B, i.distY = v, i.yInRange = q, i.range = s, k.range = s
                        }
                        o = i.xInRange || i.yInRange, i.xInRange && i.yInRange && (!k.xInRange || !k.yInRange) ? f = !0 : f = !i.xInRange || !i.yInRange || i.path.x !== k.x || i.path.y !== k.y, k.x = i.path.x, k.y = i.path.y, k.dx = i.distX, k.dy = i.distY, k.xInRange = i.xInRange, k.yInRange = i.yInRange, x.options.snap.paths.closest = k.paths.closest = i.path
                    }
                    if ((f || !k.locked) && o) {
                        k.locked = !0;
                        if (!(H || j || P)) {
                            var U = rt(e),
                                z = it(e);
                            c = U.x - r.x + k.dx, h = U.y - r.y + k.dy, p = z.x - r.x + k.dx, d = z.y - r.y + k.dy
                        }
                        I[R].moveListener(e)
                    } else if (f || !o) k.locked = !1, I[R].moveListener(e)
                } else I[R].moveListener(e)
        } (H || j) && L.edgeMove(e)
    }

    function bt(e) {
        e.preventDefault();
        var n, r, i, s, o;
        if (!H) {
            tt(v), n = new dt(v, "drag", "start"), H = !0, x.fire(n);
            if (!B) {
                ct(y);
                for (var u = 0; u < E.length; u++) E[u]._elements = t.querySelectorAll(E[u].selector)
            }
            tt(n)
        }
        var a = x._element,
            f = s ? s._element : null;
        n = new dt(e, "drag", "move"), s = pt(e, x), x._element = a, s !== N && (N && (i = new dt(e, "drag", "leave", f, a), n.dragLeave = N._element, o = N, N = null), s && (r = new dt(e, "drag", "enter", f, a), n.dragEnter = s._element, N = s)), x.fire(n), i && o.fire(i), r && s.fire(r), tt(n)
    }

    function wt(e) {
        e.preventDefault();
        var t;
        j || (tt(v), t = new dt(v, "resize", "start"), x.fire(t), x.fire(t), j = !0, tt(t)), t = new dt(e, "resize", "move"), x.fire(t), tt(t)
    }

    function Et(e) {
        if (!e.touches || e.touches.length < 2) return;
        e.preventDefault();
        var t;
        if (!P) {
            tt(v);
            var t = new dt(v, "gesture", "start");
            t.ds = 0, m.startDistance = m.prevDistance = t.distance, m.startAngle = m.prevAngle = t.angle, m.scale = 1, P = !0, x.fire(t), tt(t)
        }
        t = new dt(e, "gesture", "move"), t.ds = t.scale - m.scale, x.fire(t), tt(t), m.prevAngle = t.angle, m.prevDistance = t.distance, t.scale !== Infinity && t.scale !== null && t.scale !== undefined && !isNaN(t.scale) && (m.scale = t.scale)
    }

    function St(e, t) {
        for (var n = 0, r = t.length; n < r; n++) {
            var i = t[n],
                s = vt(i.getAction(e, i), i);
            if (s) return x = i, s
        }
    }

    function xt(e) {
        if (M || H || j || P) return;
        var t = [],
            n = x && x._element,
            r = e.target instanceof s ? e.target.correspondingUseElement : e.target;
        for (var i in w) w.hasOwnProperty(i) && w[i] && r[$](i) && (w[i]._element = r, t.push(w[i]));
        var o = g.get(r),
            u = o && vt(o.getAction(e, o), o);
        if (!o || !vt(o.getAction(e), o))
            if (St(e, t)) S = t, Nt(e, S), Z.addToElement(r, "mousemove", Nt);
            else if (x) {
                var a = n.querySelectorAll("*");
                if (Array.prototype.indexOf.call(a, r) !== -1) {
                    for (var f = 0; f < S.length; f++) S[f]._element = n;
                    Nt(e, S), Z.addToElement(x._element, "mousemove", Nt)
                } else x = null, S = []
            }
    }

    function Tt(e) {
        var n = e.target instanceof s ? e.target.correspondingUseElement : e.target;
        g.get(n) || Z.removeFromElement(n, Nt), x && x.options.styleCursor && !(H || j || P) && (t.documentElement.style.cursor = "")
    }

    function Nt(e, n) {
        if (!(M || H || j || P)) {
            var r;
            n ? r = St(e, n) : x && (r = vt(x.getAction(e))), x && x.options.styleCursor && (r ? t.documentElement.style.cursor = I[r].cursor : t.documentElement.style.cursor = "")
        } else e.preventDefault()
    }

    function Ct(e) {
        var t;
        if (e.touches && e.touches.length >= 2) return;
        if (H) {
            t = new dt(e, "drag", "end");
            var n, r = x._element,
                i = pt(e, x),
                s = i ? i._element : null;
            x._element = r;
            if (i) n = new dt(e, "drop", null, s, r), t.dropzone = s;
            else if (N) {
                var o = new dt(e, "drag", "leave", s, r);
                N.fire(o, r), t.dragLeave = N._element
            }
            x.fire(t), n && T.fire(n)
        } else if (j) t = new dt(e, "resize", "end"), x.fire(t);
        else if (P) t = new dt(e, "gesture", "end"), x.fire(t);
        else if ((e.type === "mouseup" || e.type === "touchend") && x && M && !_) {
            var u = {};
            for (var a in e) e.hasOwnProperty(a) && (u[a] = e[a]);
            u.type = "tap", x.fire(u)
        }
        return Lt.stop(), e
    }

    function kt() {
        x.selector || (x = null), T = N = null
    }

    function Lt(e) {
        return g.get(e) || new Ot(e)
    }

    function At(e) {
        for (var t in C) e.hasOwnProperty(t) && typeof e[t] == typeof C[t] && (this[t] = e[t])
    }

    function Ot(e, n) {
        this._element = e, this._iEvents = this._iEvents || {}, typeof e == "string" ? (t.querySelector(e), w[e] = this, this.selector = e) : (e instanceof Element && (Z.add(this, "mousemove", Nt), Z.add(this, "mousedown", gt), Z.add(this, "touchmove", Nt), Z.add(this, "touchstart", gt)), b.push(this)), g.push(this), this.set(n)
    }
    var t = e.document,
        n = e.console,
        r = e.SVGElement || et,
        i = e.SVGSVGElement || et,
        s = e.SVGElementInstance || et,
        o = e.HTMLElement || e.Element,
        u = 0,
        a = 0,
        f = 0,
        l = 0,
        c = 0,
        h = 0,
        p = 0,
        d = 0,
        v = null,
        m = {
            start: {
                x: 0,
                y: 0
            },
            startDistance: 0,
            prevDistance: 0,
            distance: 0,
            scale: 1,
            startAngle: 0,
            prevAngle: 0
        }, g = [],
        y = [],
        b = [],
        w = {}, E = [],
        S = [],
        x = null,
        T = null,
        N = null,
        C = {
            draggable: !1,
            dropzone: !1,
            resizeable: !1,
            squareResize: !1,
            gestureable: !1,
            styleCursor: !0,
            snap: {
                mode: "grid",
                actions: ["drag"],
                range: Infinity,
                grid: {
                    x: 100,
                    y: 100
                },
                gridOffset: {
                    x: 0,
                    y: 0
                },
                anchors: [],
                paths: [],
                arrayTypes: /^anchors$|^paths$|^actions$/,
                objectTypes: /^grid$|^gridOffset$/,
                stringTypes: /^mode$/,
                numberTypes: /^range$/
            },
            snapEnabled: !1,
            restrictions: {},
            autoScroll: {
                container: e,
                margin: 60,
                interval: 20,
                distance: 10,
                elementTypes: /^container$/,
                numberTypes: /^range$|^interval$|^distance$/
            },
            autoScrollEnabled: !1,
            origin: {
                x: 0,
                y: 0
            },
            deltaSource: "page"
        }, k = {
            locked: !1,
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            realX: 0,
            realY: 0,
            anchors: [],
            paths: []
        }, L = {
            margin: 60,
            interval: 20,
            i: null,
            distance: 10,
            x: 0,
            y: 0,
            scroll: function () {
                var t = x.options.autoScroll.container;
                t === e ? e.scrollBy(L.x, L.y) : t && (t.scrollLeft += L.x, t.scrollTop += L.y)
            },
            edgeMove: function (t) {
                if (x && x.options.autoScrollEnabled && (H || j)) {
                    var n, r, i, s, o = x.options.autoScroll;
                    if (o.container === e) s = t.clientX < L.margin, n = t.clientY < L.margin, r = t.clientX > e.innerWidth - L.margin, i = t.clientY > e.innerHeight - L.margin;
                    else {
                        var u = Lt(o.container).getRect();
                        s = t.clientX < u.left + L.margin, n = t.clientY < u.top + L.margin, r = t.clientX > u.right - L.margin, i = t.clientY > u.bottom - L.margin
                    }
                    L.x = L.distance * (r ? 1 : s ? -1 : 0), L.y = L.distance * (i ? 1 : n ? -1 : 0), L.isScrolling || (L.margin = o.margin, L.distance = o.distance, L.interval = o.interval, L.start())
                }
            },
            isScrolling: !1,
            start: function () {
                L.isScrolling = !0, e.clearInterval(L.i), L.i = e.setInterval(L.scroll, L.interval)
            },
            stop: function () {
                e.clearInterval(L.i), L.isScrolling = !1
            }
        }, A = "createTouch" in t,
        O = A ? 20 : 10,
        M = !1,
        _ = !1,
        D = !1,
        P = !1,
        H = !1,
        B = !1,
        j = !1,
        F = "xy",
        I = {
            drag: {
                cursor: "move",
                moveListener: bt
            },
            resizex: {
                cursor: "e-resize",
                moveListener: wt
            },
            resizey: {
                cursor: "s-resize",
                moveListener: wt
            },
            resizexy: {
                cursor: "se-resize",
                moveListener: wt
            },
            gesture: {
                cursor: "",
                moveListener: Et
            }
        }, q = {
            drag: !0,
            resize: !0,
            gesture: !0
        }, R = null,
        U = "onmousewheel" in t ? "mousewheel" : "wheel",
        z = ["resizestart", "resizemove", "resizeend", "dragstart", "dragmove", "dragend", "dragenter", "dragleave", "drop", "gesturestart", "gesturemove", "gestureend", "tap"],
        W = {}, X = {
            onevent: 0,
            directBind: 1,
            globalBind: 2
        }, V = navigator.appName == "Opera" && A && navigator.userAgent.match("Presto"),
        $ = "matchesSelector" in Element.prototype ? "matchesSelector" : "webkitMatchesSelector" in Element.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in Element.prototype ? "mozMatchesSelector" : "oMatchesSelector" in Element.prototype ? "oMatchesSelector" : "msMatchesSelector",
        J, K = {
            _element: e,
            events: {}
        }, Q = {
            _element: t,
            events: {}
        }, G = {
            _element: e.parent,
            events: {}
        }, Y = {
            _element: null,
            events: {}
        }, Z = function () {
            function f(e, n, s, f) {
                var l = a[u.indexOf(e)];
                l || (l = {
                    events: {},
                    typeCount: 0
                }, u.push(e), a.push(l)), n in l.events || (l.events[n] = [], l.typeCount++);
                if (l.events[n].indexOf(s) === -1) {
                    var c;
                    return r ? c = e[i](o + n, function (n) {
                        n.immediatePropagationStopped || (n.target = n.srcElement, n.currentTarget = e, /mouse|click/.test(n.type) && (n.pageX = n.clientX + t.documentElement.scrollLeft, n.pageY = n.clientY + t.documentElement.scrollTop), s(n))
                    }, s, f || !1) : c = e[i](n, s, f || !1), l.events[n].push(s), c
                }
            }

            function l(e, t, n, r) {
                var i, f = a[u.indexOf(e)];
                if (!f || !f.events) return;
                if (t === "all") {
                    for (t in f.events) f.events.hasOwnProperty(t) && l(e, t, "all");
                    return
                }
                if (f.events[t]) {
                    var c = f.events[t].length;
                    if (n === "all") {
                        for (i = 0; i < c; i++) e[s](o + t, f.events[t][i], r || !1);
                        f.events[t] = null, f.typeCount--
                    } else
                        for (i = 0; i < c; i++)
                            if (f.events[t][i] === n) {
                                e[s](o + t, f.events[t][i], r || !1), f.events[t].splice(i, 1);
                                break
                            } f.events[t] && f.events[t].length === 0 && (f.events[t] = null, f.typeCount--)
                }
                f.typeCount || (a.splice(a.indexOf(f), 1), u.splice(u.indexOf(e), 1))
            }
            var n = e.Event,
                r = "attachEvent" in e && !("addEventListener" in e),
                i = r ? "attachEvent" : "addEventListener",
                s = r ? "detachEvent" : "removeEventListener",
                o = r ? "on" : "",
                u = [],
                a = [];
            return "indexOf" in Array.prototype || (Array.prototype.indexOf = function (e) {
                var t = this.length >>> 0,
                    n = Number(arguments[1]) || 0;
                n = n < 0 ? Math.ceil(n) : Math.floor(n), n < 0 && (n += t);
                for (; n < t; n++)
                    if (n in this && this[n] === e) return n;
                return -1
            }), "stopPropagation" in n.prototype || (n.prototype.stopPropagation = function () {
                this.cancelBubble = !0
            }, n.prototype.stopImmediatePropagation = function () {
                this.cancelBubble = !0, this.immediatePropagationStopped = !0
            }), "preventDefault" in n.prototype || (n.prototype.preventDefault = function () {
                this.returnValue = !1
            }), "hasOwnProperty" in n.prototype || (n.prototype.hasOwnProperty = Object.prototype.hasOwnProperty), {
                add: function (e, t, n, r) {
                    f(e._element, t, n, r)
                },
                remove: function (e, t, n, r) {
                    l(e._element, t, n, r)
                },
                addToElement: f,
                removeFromElement: l,
                useAttachEvent: r
            }
        }();
    dt.prototype = {
        preventDefault: et,
        stopImmediatePropagation: function (e) {
            D = !0
        },
        stopPropagation: et
    }, g.indexOfElement = y.indexOfElement = function (t) {
        for (var n = 0; n < this.length; n++) {
            var r = this[n];
            if (r.selector === t || !r.selector && r._element === t) return n
        }
        return -1
    }, g.get = function (t) {
        return typeof t == "string" ? w[t] : this[this.indexOfElement(t)]
    }, y.get = function (t) {
        return this[this.indexOfElement(t)]
    }, At.prototype = C, Ot.prototype = {
        setOnEvents: function (e, t) {
            var n = t.onstart || t.onStart,
                r = t.onmove || t.onMove,
                i = t.onend || t.onEnd;
            e = "on" + e, typeof n == "function" && (this[e + "start"] = n), typeof r == "function" && (this[e + "move"] = r), typeof i == "function" && (this[e + "end"] = i)
        },
        draggable: function (e) {
            return e instanceof Object ? (this.options.draggable = !0, this.setOnEvents("drag", e), this) : typeof e == "boolean" ? (this.options.draggable = e, this) : e === null ? (delete this.options.draggable, this) : this.options.draggable
        },
        dropzone: function (e) {
            if (e instanceof Object) {
                var t = e.ondrop || e.onDrop;
                return typeof t == "function" && (this.ondrop = t), this.options.dropzone = !0, (this.selector ? E : y).push(this), !B && !this.selector && (this.rect = this.getRect()), this
            }
            if (typeof e == "boolean") {
                if (e) (this.selector ? E : y).push(this), !B && !this.selector && (this.rect = this.getRect());
                else {
                    var n = this.selector ? E : y,
                        r = n.indexOf(this);
                    r !== -1 && n.splice(r, 1)
                }
                return this.options.dropzone = e, this
            }
            return e === null ? (delete this.options.dropzone, this) : this.options.dropzone
        },
        dropCheck: function (e) {
            var t = rt(e),
                n, r;
            return B && (this.rect = this.getRect()), n = t.x > this.rect.left && t.x < this.rect.right, r = t.y > this.rect.top && t.y < this.rect.bottom, n && r
        },
        dropChecker: function (e) {
            return typeof e == "function" ? (this.dropCheck = e, this) : this.dropCheck
        },
        resizeable: function (e) {
            return e instanceof Object ? (this.options.resizeable = !0, this.setOnEvents("resize", e), this) : typeof e == "boolean" ? (this.options.resizeable = e, this) : this.options.resizeable
        },
        squareResize: function (e) {
            return typeof e == "boolean" ? (this.options.squareResize = e, this) : e === null ? (delete this.options.squareResize, this) : this.options.squareResize
        },
        gestureable: function (e) {
            return e instanceof Object ? (this.options.gestureable = !0, this.setOnEvents("gesture", e), this) : typeof e == "boolean" ? (this.options.gestureable = e, this) : e === null ? (delete this.options.gestureable, this) : this.options.gestureable
        },
        autoScroll: function (e) {
            var t = C.autoScroll;
            if (e instanceof Object) {
                var n = this.options.autoScroll;
                return n === t && (n = this.options.autoScroll = {
                    margin: t.margin,
                    distance: t.distance,
                    interval: t.interval,
                    container: t.container
                }), n.margin = this.validateSetting("autoScroll", "margin", e.margin), n.distance = this.validateSetting("autoScroll", "distance", e.distance), n.interval = this.validateSetting("autoScroll", "interval", e.interval), n.container = this.validateSetting("autoScroll", "container", e.container), this.options.autoScrollEnabled = !0, this.options.autoScroll = n, this
            }
            return typeof e == "boolean" ? (this.options.autoScrollEnabled = e, this) : e === null ? (delete this.options.autoScrollEnabled, delete this.options.autoScroll, this) : this.options.autoScrollEnabled ? this.options.autoScroll : !1
        },
        snap: function (e) {
            var t = C.snap;
            if (e instanceof Object) {
                var n = this.options.snap;
                return n === t && (n = this.options.snap = {
                    mode: t.mode,
                    range: t.range,
                    grid: t.grid,
                    gridOffset: t.gridOffset,
                    anchors: t.anchors
                }), n.mode = this.validateSetting("snap", "mode", e.mode), n.actions = this.validateSetting("snap", "actions", e.actions), n.range = this.validateSetting("snap", "range", e.range), n.paths = this.validateSetting("snap", "paths", e.paths), n.grid = this.validateSetting("snap", "grid", e.grid), n.gridOffset = this.validateSetting("snap", "gridOffset", e.gridOffset), n.anchors = this.validateSetting("snap", "anchors", e.anchors), this.options.snapEnabled = !0, this.options.snap = n, this
            }
            return typeof e == "boolean" ? (this.options.snapEnabled = e, this) : e === null ? (delete this.options.snapEnabled, delete this.options.snap, this) : this.options.snapEnabled ? this.options.snap : !1
        },
        getAction: function (t) {
            var n = this.getRect(),
                r, i, s, o = rt(t),
                u = this.options;
            return q.resize && u.resizeable && (r = o.x > n.right - O, i = o.y > n.bottom - O), q.gesture && t.touches && t.touches.length >= 2 && !H && !j ? s = "gesture" : (F = (r ? "x" : "") + (i ? "y" : ""), s = F ? "resize" + F : q.drag && u.draggable ? "drag" : null), s
        },
        actionChecker: function (e) {
            return typeof e == "function" ? (this.getAction = e, this) : e === null ? (delete this.options.getAction, this) : this.getAction
        },
        getRect: function () {
            this.selector && !(this._element instanceof Element) && (this._element = t.querySelector(this.selector));
            var n = st(),
                i = this._element instanceof r ? this._element.getBoundingClientRect() : this._element.getClientRects()[0];
            return {
                left: i.left + n.x,
                right: i.right + n.x,
                top: i.top + n.y,
                bottom: i.bottom + n.y,
                width: i.width || i.right - i.left,
                height: i.heigh || i.bottom - i.top
            }
        },
        rectChecker: function (e) {
            return typeof e == "function" ? (this.getRect = e, this) : e === null ? (delete this.options.getRect, this) : this.getRect
        },
        styleCursor: function (e) {
            return typeof e == "boolean" ? (this.options.styleCursor = e, this) : e === null ? (delete this.options.styleCursor, this) : this.options.styleCursor
        },
        origin: function (e) {
            return e instanceof Object ? (this.options.origin = e, this) : e === null ? (delete this.options.origin, this) : this.options.origin
        },
        deltaSource: function (e) {
            return e === "page" || e === "client" ? (this.options.deltaSource = e, this) : e === null ? (delete this.options.deltaSource, this) : this.options.deltaSource
        },
        restrict: function (e) {
            return e === undefined ? this.options.restrictions : (e instanceof Object ? this.options.restrictions = e : e === null && delete this.options.restrictions, this)
        },
        validateSetting: function (e, t, n) {
            var r = C[e],
                i = this.options[e];
            if (r !== undefined && r[t] !== undefined) {
                if ("objectTypes" in r && r.objectTypes.test(t)) return n instanceof Object ? n : t in i && i[t] instanceof Object ? i[t] : r[t];
                if ("arrayTypes" in r && r.arrayTypes.test(t)) return n instanceof Array ? n : t in i && i[t] instanceof Array ? i[t] : r[t];
                if ("stringTypes" in r && r.stringTypes.test(t)) return typeof n == "string" ? n : t in i && typeof i[t] == "string" ? i[t] : r[t];
                if ("numberTypes" in r && r.numberTypes.test(t)) return typeof n == "number" ? n : t in i && typeof i[t] == "number" ? i[t] : r[t];
                if ("elementTypes" in r && r.elementTypes.test(t)) return n instanceof Element ? n : t in i && i[t] instanceof Element ? i[t] : r[t]
            }
            return null
        },
        element: function () {
            return this._element
        },
        fire: function (e) {
            if (!e || !e.type || z.indexOf(e.type) === -1) return this;
            var t, r = 0,
                i = 0,
                s, o = "on" + e.type;
            while (r < 3) try {
                switch (r) {
                    case X.onevent:
                        typeof this[o] == "function" && this[o](e);
                        break;
                    case X.directBind:
                        if (e.type in this._iEvents) {
                            t = this._iEvents[e.type];
                            for (s = t.length; i < s && !D; i++) t[i](e);
                            break
                        }
                        break;
                    case X.globalBind:
                        if (e.type in W && (t = W[e.type])) {
                            t = W[e.type];
                            for (s = t.length; i < s && !D; i++) t[i](e)
                        }
                }
                i = 0, r++
            } catch (u) {
                n.error("Error thrown from " + e.type + " listener"), n.error(u), i++, r === X.onevent && r++
            }
            return D = !1, this
        },
        on: function (e, n, r) {
            e === "wheel" && (e = U);
            if (z.indexOf(e) !== -1) e in this._iEvents ? this._iEvents[e].indexOf(n) === -1 && this._iEvents[e].push(n) : this._iEvents[e] = [n];
            else if (this.selector) {
                var i = t.querySelectorAll(this.selector);
                for (var s = 0, o = i.length; s < o; s++) Z.addToElement(i[s], e, n, r)
            } else Z.add(this, e, n, r);
            return this
        },
        off: function (e, n, r) {
            e === "wheel" && (e = U);
            if (z.indexOf(e) !== -1) {
                var i = this._iEvents[e],
                    s;
                i && (s = i.indexOf(n)) !== -1 && this._iEvents[e].splice(s, 1)
            } else if (this.selector) {
                var o = t.querySelectorAll(this.selector);
                for (var u = 0, a = o.length; u < a; u++) Z.removeFromElement(o[u], e, n, r)
            } else Z.remove(this._element, n, r);
            return this
        },
        set: function (e) {
            if (!e || typeof e != "object") e = {};
            return this.options = new At(e), this.draggable("draggable" in e ? e.draggable : this.options.draggable), this.dropzone("dropzone" in e ? e.dropzone : this.options.dropzone), this.resizeable("resizeable" in e ? e.resizeable : this.options.resizeable), this.gestureable("gestureable" in e ? e.gestureable : this.options.gestureable), "autoScroll" in e && this.autoScroll(e.autoScroll), this
        },
        unset: function () {
            return Z.remove(this, "all"), typeof this.selector == "string" ? delete w[this.selector] : (Z.remove(this, "all"), this.options.styleCursor && (this._element.style.cursor = ""), b.splice(b.indexOf(this.element()))), this.dropzone(!1), g.splice(g.indexOf(this), 1), Lt
        }
    }, Lt.isSet = function (e) {
        return g.indexOfElement(e) !== -1
    }, Lt.on = function (e, t) {
        return z.indexOf(e) !== -1 && (W[e] ? W[e].indexOf(t) === -1 && W[e].push(t) : W[e] = [t]), Lt
    }, Lt.off = function (e, t) {
        var n = W[e].indexOf(t);
        return n !== -1 && W[e].splice(n, 1), Lt
    }, Lt.simulate = function (e, t, n) {
        var i = {}, s, o;
        e === "resize" && (e = "resizexy");
        if (e in I) {
            if (n)
                for (s in n) n.hasOwnProperty(s) && (i[s] = n[s]);
            else o = x._element instanceof r ? t.getBoundingClientRect() : o = t.getClientRects()[0], e === "drag" ? (i.pageX = o.left + o.width / 2, i.pageY = o.top + o.height / 2) : (i.pageX = o.right, i.pageY = o.bottom);
            return i.target = i.currentTarget = t, i.preventDefault = i.stopPropagation = et, gt(i, e), Lt
        }
        return Lt
    }, Lt.enableDragging = function (e) {
        return e !== null && e !== undefined ? (q.drag = e, Lt) : q.drag
    }, Lt.enableResizing = function (e) {
        return e !== null && e !== undefined ? (q.resize = e, Lt) : q.resize
    }, Lt.enableGesturing = function (e) {
        return e !== null && e !== undefined ? (q.gesture = e, Lt) : q.gesture
    }, Lt.eventTypes = z, Lt.debug = function () {
        return {
            target: x,
            dragging: H,
            resizing: j,
            gesturing: P,
            prepared: R,
            prevX: u,
            prevY: a,
            x0: c,
            y0: h,
            Interactable: Ot,
            IOptions: At,
            interactables: g,
            dropzones: y,
            pointerIsDown: M,
            defaultOptions: C,
            actions: I,
            dragMove: bt,
            resizeMove: wt,
            gestureMove: Et,
            pointerUp: Ct,
            pointerDown: gt,
            pointerMove: yt,
            pointerHover: Nt,
            events: Z,
            globalEvents: W,
            touchAverage: ot,
            touchAngle: ft,
            getTouchBBox: ut,
            touchDistance: at,
            log: function () {
                n.log("target         :  " + x), n.log("prevX, prevY   :  " + u, a), n.log("x0, y0         :  " + c, h), n.log("supportsTouch  :  " + A), n.log("pointerIsDown  :  " + M), n.log("currentAction  :  " + Lt.currentAction())
            }
        }
    }, Lt.margin = function (e) {
        return typeof e == "number" ? (O = e, Lt) : O
    }, Lt.styleCursor = function (e) {
        return typeof e == "boolean" ? (C.styleCursor = e, Lt) : C.styleCursor
    }, Lt.autoScroll = function (e) {
        var t = C.autoScroll;
        return e instanceof Object ? (C.autoScrollEnabled = !0, typeof e.margin == "number" && (t.margin = e.margin), typeof e.distance == "number" && (t.distance = e.distance), typeof e.interval == "number" && (t.interval = e.interval), t.container = e.container instanceof Element ? e.container : t.container, Lt) : typeof e == "boolean" ? (C.autoScrollEnabled = e, Lt) : C.autoScrollEnabled ? t : !1
    }, Lt.snap = function (e) {
        var t = C.snap;
        return e instanceof Object ? (C.snapEnabled = !0, typeof e.mode == "string" && (t.mode = e.mode), typeof e.range == "number" && (t.range = e.range), e.actions instanceof Array && (t.actions = e.actions), e.anchors instanceof Array && (t.anchors = e.anchors), e.grid instanceof Object && (t.grid = e.grid), e.gridOffset instanceof Object && (t.gridOffset = e.gridOffset), Lt) : typeof e == "boolean" ? (C.snapEnabled = e, Lt) : {
            enabled: C.snapEnabled,
            mode: t.mode,
            actions: t.actions,
            grid: t.grid,
            gridOffset: t.gridOffset,
            anchors: t.anchors,
            paths: t.paths,
            range: t.range,
            locked: k.locked,
            x: k.x,
            y: k.y,
            realX: k.realX,
            realY: k.realY,
            dx: k.dx,
            dy: k.dy
        }
    }, Lt.supportsTouch = function () {
        return A
    }, Lt.currentAction = function () {
        return H && "drag" || j && "resize" || P && "gesture" || null
    }, Lt.stop = function (e) {
        if (H || j || P) {
            L.stop(), S = [], x.options.styleCursor && (t.documentElement.style.cursor = ""), kt();
            for (var n = 0; n < E.length; n++) E._elements = [];
            e && typeof e.preventDefault == "function" && e.preventDefault()
        }
        return M = k.locked = H = j = P = !1, _ = !0, R = v = null, Lt
    }, Lt.dynamicDrop = function (e) {
        return typeof e == "boolean" ? (H && B !== e && !e && ct(y), B = e, Lt) : B
    }, Lt.deltaSource = function (e) {
        return e === "page" || e === "client" ? (C.deltaSource = e, this) : C.deltaSource
    }, Lt.restrict = function (e, t) {
        return e === undefined ? C.restrictions : (e instanceof Object ? C.restrictions = e : e === null && (C.restrictions = {}), this)
    }, Z.add(Q, "mousedown", mt), Z.add(Q, "touchstart", mt), Z.add(Q, "mousemove", yt), Z.add(Q, "touchmove", yt), Z.add(Q, "mouseover", xt), Z.add(Q, "mouseout", Tt), Z.add(Q, "mouseup", Ct), Z.add(Q, "touchend", Ct), Z.add(Q, "touchcancel", Ct), Z.add(K, "blur", Ct);
    try {
        e.frameElement && (Y._element = e.frameElement.ownerDocument, Z.add(Y, "mouseup", Ct), Z.add(Y, "touchend", Ct), Z.add(Y, "touchcancel", Ct), Z.add(G, "blur", Ct))
    } catch (Mt) {
        Lt.windowParentError = Mt
    }
    Z.add(Q, "selectstart", function (e) {
        (H || j || P) && e.preventDefault()
    });
    if (!($ in Element.prototype) || typeof Element.prototype[$] != "function") Element.prototype[$] = J = function (e, t) {
        t = t || this.parentNode.querySelectorAll(e), count = t.length;
        for (var n = 0; n < count; n++)
            if (t[n] === this) return !0;
        return !1
    };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = Lt), exports.interact = Lt) : e.interact = Lt
}(this), define("interactjs", function () { }),
function (e) {
    var t = {
        positionLine: function (t, n, r, i, s) {
            var o = navigator.userAgent.indexOf("MSIE") > -1;
            if (i < n) {
                var u = n;
                n = i, i = u, u = r, r = s, s = u
            }
            var a = Math.sqrt((n - i) * (n - i) + (r - s) * (r - s));
            t.style.width = a + "px";
            if (e("html").hasClass("lt-ie9")) {
                t.style.top = s > r ? r + "px" : s + "px", t.style.left = n + "px";
                var f = (i - n) / a,
                    l = (s - r) / a;
                t.style.filter = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=" + f + ", M12=" + -1 * l + ", M21=" + l + ", M22=" + f + ")"
            } else {
                var c = Math.atan((s - r) / (i - n));
                t.style.top = r + .5 * a * Math.sin(c) + "px", t.style.left = n - .5 * a * (1 - Math.cos(c)) + "px", t.style.MozTransform = t.style.WebkitTransform = t.style.OTransform = t.style.msTransform = t.style.transform = "rotate(" + c + "rad)"
            }
        },
        createLine: function (e, t, n, r, i) {
            var s = document.createElement("div");
            return s.style.borderBottom = i.stroke + "px solid", s.style.borderColor = i.color, s.style.position = "absolute", s.style.zIndex = i.zindex, s.className = s.className + i.className, s.id = i.id || "", this.positionLine(s, e, t, n, r), s
        }
    };
    e.fn.line = function (n, r, i, s, o, u) {
        return e(this).each(function () {
            e.isFunction(o) ? (callback = o, o = null) : callback = u, o = e.extend({}, e.fn.line.defaults, o), e(this).append(t.createLine(n, r, i, s, o)).promise().done(function () {
                e.isFunction(callback) && callback.call()
            })
        })
    }, e.fn.updateLine = function (n, r, i, s) {
        return e(this).each(function () {
            t.positionLine(this, n, r, i, s)
        })
    }, e.fn.line.defaults = {
        zindex: 1e4,
        color: "#000000",
        stroke: "1"
    }
}(jQuery), define("vendor/jquery.line", function () { }), define("views/iles/matching", ["jquery", "underscore", "vendor/custom.modernizr", "views/common", "interactjs", "vendor/jquery.line"], function (e, t, n, r) {
    var i = {
        DROPPABLE: "droppable",
        DRAGGABLE: "draggable",
        CURRENT_OFFSET: "current_offset",
        LINE: "line",
        START_POS: "start_position",
        START_OFFSET: "start_offset",
        MATCH_ID: "match_id",
        CLONE_ID: "clone_id"
    }, s = window.interact;
    return r.BaseView.extend({
        className: "widgets ile ile-matching",
        selector: ".ile-matching",
        _draggables: null,
        _droppables: null,
        _attempts: null,
        _maxAttempts: 2,
        _icon_correct: "icon-ok-sign",
        _icon_incorrect: "icon-remove-sign",
        _all_icons: null,
        _$items: null,
        _$dropZones: null,
        _$feedback: null,
        _$targets: null,
        _$submitBtn: null,
        _$correctBtn: null,
        _$userAnswersBtn: null,
        events: {
            "click .btn-submit": "onSubmit",
            "click .btn-user-answers": "onUserAnswersClick",
            "click .btn-correct-answers": "onCorrectAnswersClick"
        },
        initialize: function (n) {
            t.bindAll(this, "onDragStart", "onDrag", "onDragStop", "onDrop", "onDragLeave", "onWindowResize"), e(window).on("resize." + this.cid, t.debounce(this.onWindowResize, 200)), this.begin()
        },
        begin: function () {
            this._attempts = 0;
            var n = this.$(".wrap"),
                r = this.$(".target").remove();
            r = t.shuffle(r), this.$(".targets").append(r), this.$(".drag").each(function (r, s) {
                s = e(s), s.attr("data-clone-id", r);
                var o = e('<div class="item hidden"><i></i></div>').appendTo(n);
                o.data(i.MATCH_ID, t.uniqueId("match_")), o.data(i.CLONE_ID, r);
                var u = o.position().left + o.width() / 2,
                    a = o.position().top + o.height() / 2,
                    f = t.uniqueId("line_");
                n.line(u, a, u, a, {
                    color: "#dddddd",
                    stroke: "4",
                    id: f,
                    className: "item-line",
                    zindex: 1
                });
                var l = n.find("#" + f);
                o.data(i.LINE, l)
            }), this._draggables = s(".ile-matching .item").draggable({
                onstart: this.onDragStart,
                onmove: this.onDrag,
                onend: this.onDragStop
            }), this._droppables = s(".ile-matching .drop-zone").dropzone(!0).on("drop", this.onDrop).on("dragleave", this.onDragLeave);
            var o = this.items();
            this.targets().each(function (t, n) {
                n = e(n);
                var r = o.get(parseInt(n.data("response") - 1, 10));
                n.find(".drop-zone").data(i.MATCH_ID, e(r).data(i.MATCH_ID)), n.removeAttr("data-response")
            }), t.defer(e.proxy(this.layout, this), 100), this.updateButtons(), this.updateFeedback()
        },
        layout: function () {
            var t = this.$(".drag");
            this.items().each(function (n, r) {
                r = e(r);
                var i = e(t.get(n));
                r.offset(i.offset()).removeClass("hidden")
            }), this.$el.addClass("ready")
        },
        isIncomplete: function () {
            return t.find(this.items(), function (t) {
                return !e(t).data(i.DROPPABLE)
            })
        },
        isCorrect: function () {
            var n = t.find(this.dropZones(), function (t) {
                t = e(t);
                var n = t.data(i.DRAGGABLE),
                    r = t.data(i.MATCH_ID);
                return !n || n.data(i.MATCH_ID) !== r
            });
            return !n
        },
        score: function () {
            if (this.isIncomplete()) return !1;
            this._attempts = this._attempts + 1;
            var t = this.isCorrect(),
                n = this;
            this.updateFeedback(), this.updateButtons(), this.dropZones().each(function (t, r) {
                r = e(r);
                var o = r.data(i.DRAGGABLE),
                    u = r.data(i.MATCH_ID),
                    a = "",
                    f = "";
                if (o.data(i.MATCH_ID) === u) a = "correct", f = n._icon_correct, s(o[0]).draggable(!1);
                else if (n._attempts === n._maxAttempts) a = "incorrect", f = n._icon_incorrect;
                else {
                    a = "trans-500";
                    var l = n.$(".wrap"),
                        c = l.find('[data-clone-id="' + o.data(i.CLONE_ID) + '"]');
                    o.offset(c.offset()), o.removeData([i.DROPPABLE, i.CURRENT_OFFSET, i.START_OFFSET]), r.removeData(i.DRAGGABLE);
                    var h = o.data(i.LINE);
                    h.addClass("transparent")
                }
                o.removeClass("item-dropped").addClass(a).find("i").removeClass().addClass(f), n._attempts === n._maxAttempts && s(".ile-matching .item").draggable(!1)
            })
        },
        updateButtons: function () {
            this.isIncomplete() ? (this.submitBtn().addClass("disabled"), this.correctBtn().addClass("concealed"), this.userAnswersBtn().addClass("disabled concealed")) : (this.submitBtn().removeClass("disabled"), this._attempts > 0 && (this.isCorrect() ? this.$(".actions").addClass("concealed") : this._attempts === this._maxAttempts && (this.submitBtn().addClass("concealed"), this.correctBtn().removeClass("concealed"), this.userAnswersBtn().removeClass("concealed"))))
        },
        resetFeedback: function () {
            this.feedback().removeClass("correct incorrect").addClass("hidden").children().addClass("concealed")
        },
        updateFeedback: function () {
            if (!this.isIncomplete()) {
                var e, t;
                this.isCorrect() ? (t = ".correct", e = "correct") : (e = "incorrect", this._attempts === this._maxAttempts ? t = ".incorrect-last" : t = ".incorrect"), this.updateButtons(), this.feedback().removeClass("hidden").addClass(e).find(t).removeClass("concealed")
            }
        },
        showCorrectAnswers: function () {
            var n = this.items(),
                r = this;
            this.dropZones().each(function (s, o) {
                o = e(o);
                var u = e(o.data(i.DRAGGABLE)),
                    a = o.data(i.MATCH_ID);
                if (u.data(i.MATCH_ID) !== a) {
                    var f = t.find(n, function (t) {
                        return e(t).data(i.MATCH_ID) === a
                    });
                    e(f).removeClass("incorrect item-dropped").addClass("correct").offset(o.offset()).find("i").removeClass().addClass(r._icon_correct), r.updateLineForDraggable(f)
                }
            })
        },
        showUserAnswers: function () {
            var t = this.items(),
                n = this;
            this.dropZones().each(function (t, r) {
                r = e(r);
                var s = e(r.data(i.DRAGGABLE)),
                    o = r.data(i.MATCH_ID),
                    u = s.data(i.MATCH_ID) === o ? "correct" : "incorrect";
                s.removeClass("correct incorrect item-dropped").addClass(u).offset(r.offset()).find("i").removeClass().addClass(u === "correct" ? n._icon_correct : n._icon_incorrect), n.updateLineForDraggable(s)
            })
        },
        resetDraggable: function (e) {
            var t = e.data(i.LINE);
            this.updateLineForDraggable(e), t.addClass("transparent");
            var n = this.$(".wrap"),
                r = n.find('[data-clone-id="' + e.data(i.CLONE_ID) + '"]');
            e.removeClass("item-dropped").addClass("trans-500").offset(r.offset()).removeData([i.DROPPABLE, i.CURRENT_OFFSET, i.START_OFFSET, i.START_POS])
        },
        updateLineForDraggable: function (t) {
            t = e(t);
            var n = t.data(i.LINE),
                r = t.data(i.START_POS),
                s = t.data(i.DROPPABLE),
                o = r.left + t.width() / 2,
                u = r.top + t.height() / 2,
                a = s ? t.position().left + s.width() / 2 : t.position().left + t.width() / 2,
                f = s ? t.position().top + s.height() / 2 : t.position().top + t.height() / 2;
            n.updateLine(o, u, a, f)
        },
        onDragStart: function (t) {
            var n = e(t.target),
                r = n.data(i.DROPPABLE),
                s = n.data(i.START_OFFSET),
                o = n.data(i.START_POS),
                u = n.data(i.LINE);
            r && r.removeData(i.DRAGGABLE);
            if (!o) {
                var a = n.offsetParent(),
                    f = 0;
                a === this.$el.parents(".page") && (f = a.scrollTop()), o = n.position(), o.top = o.top - f, n.data(i.START_POS, o)
            }
            s || n.data(i.START_OFFSET, n.offset()), u && u.addClass("transparent"), n.removeClass("trans-500 item-dropped").addClass("active").removeData(i.DROPPABLE), this.isIncomplete() && this.resetFeedback()
        },
        onDrag: function (t) {
            var n = e(t.target),
                r = n.data(i.CURRENT_OFFSET) || n.offset(),
                s = {
                    left: r.left + t.dx,
                    top: r.top + t.dy
                };
            n.offset(s), n.data(i.CURRENT_OFFSET, s)
        },
        onDragLeave: function (t) {
            var n = e(t.target);
            n.removeData(i.DRAGGABLE)
        },
        onDragStop: function (t) {
            var n = e(t.target);
            t.dropzone || this.resetDraggable(n), n.removeClass("active")
        },
        onDrop: function (t) {
            var n = e(t.target),
                r = n.data(i.DRAGGABLE),
                s;
            r && !r.is(t.relatedTarget) && this.resetDraggable(r);
            var o = n.offset();
            r = e(t.relatedTarget), s = r.data(i.LINE), r && (r.offset({
                left: o.left,
                top: o.top
            }).addClass("item-dropped").data(i.DROPPABLE, n).removeData(i.CURRENT_OFFSET), n.data(i.DRAGGABLE, r), s && (s.removeClass("transparent"), this.updateLineForDraggable(r)), this.isIncomplete() ? this.submitBtn().addClass("disabled") : this.submitBtn().removeClass("disabled"))
        },
        onWindowResize: function () {
            var n = this.$el.parents(),
                r = t.find(n.get().reverse(), function (t) {
                    return t = e(t), t.height() < t[0].scrollHeight && t.css("overflow") !== "hidden"
                });
            n.off("scroll"), r && e(r).on("scroll", t.debounce(this.onWindowResize, 200));
            var s = this.$(".wrap"),
                o = this;
            this.items().each(function (t, n) {
                n = e(n);
                var r = n.data(i.DROPPABLE),
                    u = s.find('[data-clone-id="' + t + '"]'),
                    a = n.data(i.LINE),
                    f = r ? r.offset() : u.offset();
                n.removeClass("trans-500").offset(f).data(i.START_OFFSET, u.offset());
                var l = n.position();
                if (r) {
                    var c = n.offsetParent().offset();
                    l.left = u.offset().left - c.left, l.top = u.offset().top - c.top
                }
                n.data(i.START_POS, l), a && o.updateLineForDraggable(n)
            })
        },
        onSubmit: function (t) {
            t && this.preventEvent(t), e(t.target).hasClass("disabled") || (this.submitBtn().addClass("disabled"), this.score())
        },
        onUserAnswersClick: function (e) {
            e && this.preventEvent(e), this.userAnswersBtn().hasClass("disabled") || (this.correctBtn().removeClass("disabled"), this.userAnswersBtn().addClass("disabled"), this.showUserAnswers())
        },
        onCorrectAnswersClick: function (e) {
            e && this.preventEvent(e), this.correctBtn().hasClass("disabled") || (this.userAnswersBtn().removeClass("disabled"), this.correctBtn().addClass("disabled"), this.showCorrectAnswers())
        },
        items: function () {
            return this._$items = this._$items || this.$(".item")
        },
        dropZones: function () {
            return this._$dropZones = this.$dropZones || this.$(".drop-zone")
        },
        targets: function () {
            return this._$targets = this._$targets || this.$(".target")
        },
        submitBtn: function () {
            return this._$submitBtn = this._$submitBtn || this.$(".btn-submit")
        },
        correctBtn: function () {
            return this._$correctBtn = this._$correctBtn || this.$(".btn-correct-answers")
        },
        userAnswersBtn: function () {
            return this._$userAnswersBtn = this._$userAnswersBtn || this.$(".btn-user-answers")
        },
        feedback: function () {
            return this._$feedback = this._$feedback || this.$(".feedback")
        },
        remove: function () {
            return this._draggables && (this._draggables.off(), this._draggables = null), this._droppables && (this._droppables.off(), this._droppables = null), this._$items = null, this._$dropZones = null, this._$targets = null, this._$submitBtn = null, this._$correctBtn = null, this._$$userAnswersBtn = null, this._$feedback = null, r.BaseView.prototype.remove.call(this)
        }
    })
}), define("views/iles/characterize", ["jquery", "underscore", "vendor/custom.modernizr", "views/iles/category"], function (e, t, n, r) {
    return r.extend({
        className: "widgets ile ile-characterize",
        selector: ".ile-characterize",
        _icon_default: "icon-check-empty",
        _icon_selected: "icon-sign-blank",
        _icon_correct: "icon-ok",
        _icon_incorrect: "icon-remove",
        _parseResponsePositionsForRow: function (n) {
            n = e(n);
            var r = n.data("response"),
                i;
            return t.isString(r) ? i = t.map(r.split(","), function (e) {
                return parseInt(e, 10)
            }) : i = [r], i
        },
        score: function () {
            this.submitBtn().addClass("disabled"), this._attempts = this._attempts + 1;
            var n = this.$("tr").slice(1),
                r = this,
                i = [],
                s = !1;
            n.each(function (n, o) {
                o = e(o);
                var u = o.data("response"),
                    a = r._parseResponsePositionsForRow(o),
                    f = o.find("a");
                t.each(f, function (n, o) {
                    n = e(n);
                    var u = t.contains(a, o + 1),
                        f = n.hasClass("selected");
                    u ? f ? (r.setLinkCorrect(n), s = !1) : (s = s || !0, r._attempts !== r._maxAttempts && r.resetLink(n)) : f && (s = s || !0, r._attempts === r._maxAttempts ? r.setLinkIncorrect(n) : r.resetLink(n)), s && i.push(s)
                })
            }), this.feedback().removeClass("correct incorrect").children().addClass("concealed");
            var o, u;
            i.length > 0 ? (o = "incorrect", this._attempts === this._maxAttempts ? (u = ".incorrect-last", this.correctBtn().removeClass("concealed"), this.userAnswersBtn().removeClass("concealed"), this.submitBtn().addClass("concealed")) : u = ".incorrect") : (o = "correct", u = ".correct", this.submitBtn().addClass("concealed"), this.$("tr").addClass("disabled")), this._attempts === this._maxAttempts && this.$("td a").addClass("disabled"), this.feedback().removeClass("hidden").addClass(o).find(u).removeClass("concealed")
        },
        resetLink: function (t) {
            t = e(t), t.removeClass("selected").find("i").removeClass(this._all_icons).addClass(this._icon_default)
        },
        selectAnswer: function (t) {
            t = e(t), t.hasClass("selected") ? (t.find("i").removeClass(this._icon_selected).addClass(this._icon_default), t.removeClass("selected")) : (t.find("i").removeClass(this._icon_default).addClass(this._icon_selected), t.addClass("selected"))
        },
        showCorrectAnswers: function () {
            this.$(".categories a").removeClass("correct incorrect"), this.$(".categories i").removeClass(this._all_icons).addClass(this._icon_default);
            var n = this.$("tr").slice(1),
                r = this;
            t.each(n, function (n) {
                n = e(n);
                var i = n.find("a"),
                    s = r._parseResponsePositionsForRow(n);
                t.each(s, function (e) {
                    var t = i.get(e - 1);
                    r.setLinkCorrect(t)
                })
            })
        },
        showUserAnswers: function () {
            this.$(".categories a").removeClass("incorrect correct"), this.$(".categories i").removeClass(this._all_icons).addClass(this._icon_default);
            var n = this.$("tr").slice(1),
                r = this;
            n.each(function (n, i) {
                i = e(i);
                var s = i.data("response"),
                    o = r._parseResponsePositionsForRow(i),
                    u = i.find("a");
                t.each(u, function (n, i) {
                    n = e(n);
                    var s = t.contains(o, i + 1),
                        u = n.hasClass("selected");
                    s ? u && r.setLinkCorrect(n) : u && r.setLinkIncorrect(n)
                })
            })
        }
    })
}), define("views/iles/categoryClicker", ["jquery", "underscore", "vendor/custom.modernizr", "views/common"], function (e, t, n, r) {
    return r.BaseView.extend({
        _randomize: !1,
        _currentStatement: null,
        _icon_correct: "icon-ok",
        _icon_incorrect: "icon-remove",
        className: "widgets ile ile-category-clicker",
        selector: ".ile-category-clicker",
        events: function () {
            var e = {};
            return e["click .categories a"] = "onAnswerSelected", e["click .btn-next"] = "onNextClick", e
        },
        initialize: function (e) {
            this.begin()
        },
        begin: function () {
            this.setCurrentStatement(this.statements().first()), this.updateStatus(), this.$el.addClass("ready")
        },
        score: function () {
            var e = this.categories().filter(".selected").first();
            if (e) {
                var t = parseInt(this._currentStatement.data("response"), 10),
                    n = this.categories().index(e) + 1;
                t === n ? e.addClass("correct").find("i").addClass(this._icon_correct) : (e.addClass("incorrect").find("i").addClass(this._icon_incorrect), this.categories().eq(t - 1).addClass("correct").find("i").addClass(this._icon_correct))
            }
        },
        end: function () {
            this.statements().addClass("concealed"), this.$(".feedback-end").removeClass("concealed"), this.setCurrentStatement(null), this.categories().addClass("completed")
        },
        selectAnswer: function (t) {
            e(t).addClass("selected"), this.categories().addClass("disabled")
        },
        updateButtons: function () {
            var e = this._currentStatement.hasClass("answered");
            e && this.nextBtn().removeClass("hidden")
        },
        updateStatus: function () {
            if (this._currentStatement) {
                var e = this.statements().index(this._currentStatement) + 1,
                    t = this.statements().length;
                this.status().find("h2").text("Round " + e + " of " + t)
            }
        },
        setCurrentStatement: function (t) {
            t = e(t), t.is(this._currentStatement) || (this._currentStatement = t, this._currentStatement.removeClass("concealed"), this.statements().not(t).addClass("concealed")), this.categories().removeClass("correct incorrect selected disabled").find("i").removeClass(this._icon_correct + " " + this._icon_incorrect)
        },
        onAnswerSelected: function (t) {
            t && this.preventEvent(t);
            var n = e(t.currentTarget);
            n.hasClass("disabled") || (this.selectAnswer(t.currentTarget), this._currentStatement.addClass("answered"), this.score(), this.updateButtons())
        },
        onNextClick: function (e) {
            e && this.preventEvent(e);
            if (this.isCompleted()) this.end();
            else {
                var t = this._currentStatement.next();
                this.setCurrentStatement(t), this.updateStatus()
            }
            this.nextBtn().addClass("hidden")
        },
        isCompleted: function () {
            var e = this.statements().filter(".answered").length,
                t = this.statements().length;
            return e === t
        },
        categories: function () {
            return this._$categories = this._$categories || this.$(".categories a")
        },
        statements: function () {
            if (!this._$statements) {
                var n = this.$(".statements li");
                this._randomize && (n = e(t.shuffle(n))), this._$statements = n
            }
            return this._$statements
        },
        status: function () {
            return this._$status = this._$status || this.$(".status")
        },
        nextBtn: function () {
            return this._$nextBtn = this._$nextBtn || this.$(".btn-next")
        },
        remove: function () {
            return this._$categories && (this._$categories = null), this._$status && (this._$status = null), this._$nextBtn && (this._$nextBtn = null), r.BaseView.prototype.remove.call(this)
        }
    })
}), define("views/iles/textInput", ["jquery", "underscore", "vendor/custom.modernizr", "views/common"], function (e, t, n, r) {
    return r.BaseView.extend({
        className: "widget ile ile-text-input",
        selector: ".ile-text-input",
        events: function () {
            var e = {};
            return e["click .btn-submit"] = "onSubmit", e["keyup textarea"] = "onTextAreaChange", e
        },
        initialize: function (e) {
            this.begin()
        },
        begin: function () {
            this.$el.addClass("ready"), this.submitBtn().addClass("disabled")
        },
        updateButtons: function () {
            this.userInput().val().length ? this.submitBtn().removeClass("disabled") : this.submitBtn().addClass("disabled")
        },
        onTextAreaChange: function (e) {
            this.updateButtons()
        },
        onSubmit: function (e) {
            e && this.preventEvent(e), this.submitBtn().hasClass("disabled") || (this.$(".ideal-response").removeClass("hidden"), this.submitBtn().addClass("disabled"), this.$("textarea").attr("disabled", !0))
        },
        submitBtn: function () {
            return this._$submitBtn = this._$submitBtn || this.$(".btn-submit")
        },
        userInput: function () {
            return this._$userInput = this._$userInput || this.$("textarea")
        },
        remove: function () {
            return this._$submitBtn && (this._$submitBtn = null), this._$userInput && (this._$userInput = null), r.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/tooltip.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="arrow"></div><div class="title">', title, '</div><div class="content">', content, "</div>");
        return __p.join("")
    }
}), define("views/tooltip", ["jquery", "underscore", "backbone", "views/common", "tpl!templates/tooltip.tpl"], function (e, t, n, r, i) {
    return r.BaseView.extend({
        _arrowOffset: 15,
        _container: "body",
        _origin: null,
        _title: "",
        _content: "",
        className: "tooltip",
        initialize: function (e) {
            this.options && (this._title = e.title || "", this._content = e.content || "", this._origin = e.origin || {
                left: 0,
                top: 0
            })
        },
        render: function () {
            return this.$el.html(i({
                title: this._title,
                content: this._content
            })), this
        },
        position: function () {
            var e = this._origin,
                t = document.body,
                n = document.documentElement,
                r = window.pageYOffset || n.scrollTop || t.scrollTop,
                i = n.clientTop || t.clientTop || 0,
                s = r - i;
            e.top = e.top + s;
            var o = this.$el,
                u = o[0].offsetWidth,
                a = o[0].offsetHeight,
                f = u / 2,
                l = a / 2,
                c = {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }, h = this.container();
            c.top = h.offset() ? h.offset().top : 0, c.left = h.offset() ? h.offset().left : 0, c.width = h.width() || 0, c.height = h.height() || 0;
            var p, d;
            e.top - a - this._arrowOffset >= s && e.left - f > 0 && e.left + f < c.left + c.width ? (p = "south", d = {
                top: e.top - a - this._arrowOffset,
                left: e.left - f
            }) : e.left + u + this._arrowOffset <= c.left + c.width ? (p = "west", d = {
                top: e.top - l,
                left: e.left + this._arrowOffset
            }) : e.top + a + this._arrowOffset <= s + c.height && e.left - f > 0 && e.left + f < c.left + c.width ? (p = "north", d = {
                top: e.top + this._arrowOffset / 2,
                left: e.left - f
            }) : e.left - u - this._arrowOffset >= c.left ? (p = "east", d = {
                top: e.top - l,
                left: e.left - u - this._arrowOffset
            }) : d = {
                top: e.top - l,
                left: e.left - u - this._arrowOffset
            };
            if (d.left <= c.left || d.left + u >= c.left + c.width) d.left = c.width / 2 - f, p = "";
            if (d.top <= c.top || d.top + a >= c.top + c.height + r) d.top = c.height / 2 - l, p = "";
            o.removeClass("north south east west").addClass(p).offset(d)
        },
        container: function (t) {
            return t && t !== this._container && (this._container = t, this.$container = e(t), this.position()), this.$container = this.$container || e(this._container)
        },
        remove: function () {
            return r.BaseView.prototype.remove.call(this)
        }
    })
}), define("views/widgets/tooltipLink", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "views/common", "views/tooltip"], function (e, t, n, r, i, s) {
    var o = i.BaseView.extend({
        _tip: null,
        _$body: null,
        _off_event: "",
        _$off_hit_areas: null,
        _originX: 0,
        _originY: 0,
        selector: '[data-toggle="tooltip"]',
        events: function () {
            var e = {};
            return e.click = "onLinkClick", e
        },
        initialize: function (n) {
            t.bindAll(this, "onTooltipShown", "onBodyClick", "_onTooltipCreated", "hideTooltip"), o.vent.on("tooltip:shown", this.onTooltipShown), this._off_event = (r && r.touch ? "touchstart" : "click") + ".tooltip_off_" + this.cid, this._$body = e("body"), this._$off_hit_areas = e("body, a")
        },
        createTip: function (e) {
            var t = new s({
                title: this.$el.data("title"),
                content: this.$el.data("content"),
                origin: {
                    left: this._originX,
                    top: this._originY
                }
            });
            e && e(t)
        },
        showTooltip: function () {
            this._tip && this.hideTooltip(), this.createTip(this._onTooltipCreated)
        },
        setupTooltip: function (t) {
            this._tip.container("body");
            var n = this._tip.$el;
            n.addClass("hidden transparent"), this._$body.append(this._tip.render().el), this._tip.position(), n.addClass("transparent").removeClass("hidden");
            var r = this,
                i = "tooltip_" + this.cid;
            this._$off_hit_areas.on(this._off_event, this.onBodyClick), o.vent.trigger("tooltip:shown", this._tip), setTimeout(function () {
                r.$el.parents().one("scroll." + i, r.hideTooltip), e(window).one("orientationchange." + i + ", resize." + i, this.hideTooltip), n.addClass("trans-200").removeClass("transparent")
            }, 0)
        },
        hideTooltip: function () {
            if (this._tip) {
                var t = "tooltip_" + this.cid;
                this.$el.parents().off("scroll." + t), e(window).off("orientationchange." + t + ", resize." + t), this._$off_hit_areas.off(this._off_event, this.onBodyClick), this._tip.remove(), this._tip = null
            }
        },
        toggleTooltip: function () {
            this._tip ? this.hideTooltip() : this.showTooltip()
        },
        _onTooltipCreated: function (e) {
            this._tip = e, this.setupTooltip(e)
        },
        onLinkClick: function (e, t, n) {
            e && this.preventEvent(e), this._originX = e.clientX || t, this._originY = e.clientY || n, this.toggleTooltip()
        },
        onBodyClick: function (t) {
            var n = e(t.target);
            if (this._tip)
                if (n.is(this._tip.el) || this._tip.$(n).length) return;
            n === this.$el ? this.toggleTooltip() : this.hideTooltip()
        },
        onTooltipShown: function (e) {
            this._tip && e.cid !== this._tip.cid && this.hideTooltip()
        },
        remove: function () {
            return this._tip && (this._tip.remove(), this._tip = null), this._$off_hit_areas && (this._$off_hit_areas.off(this._off_event), this._$off_hit_areas = null), this._$body = null, this._off_event = null, o.vent.off("tooltip:shown", this.onTooltipToggled), i.BaseView.prototype.remove.call(this)
        }
    });
    return o.vent = t.extend({}, n.Events), o
}), define("views/moreInfoTooltip", ["views/tooltip"], function (e) {
    return e.extend({
        className: "tooltip tooltip-more-info"
    })
}), define("views/widgets/moreInfoTooltipLink", ["jquery", "underscore", "backbone", "views/widgets/tooltipLink", "views/moreInfoTooltip"], function (e, t, n, r, i) {
    return r.extend({
        selector: '[data-toggle="tooltip-more-info"]',
        createTip: function (e) {
            var t = new i({
                title: this.$el.data("title"),
                content: this.$el.data("content"),
                origin: {
                    left: this._originX,
                    top: this._originY
                }
            });
            e && e(t)
        }
    })
}), define("views/termTooltip", ["views/tooltip"], function (e) {
    return e.extend({
        className: "tooltip tooltip-term"
    })
}), define("views/widgets/termTooltipLink", ["jquery", "underscore", "backbone", "globals", "views/widgets/tooltipLink", "views/termTooltip", "collections/terms"], function (e, t, n, r, i, s, o) {
    return i.extend({
        selector: '[data-toggle="tooltip-term"]',
        createTip: function (e) {
            var t = this;
            this.constructor.terms(function (n) {
                var r = t.$el.data("tid"),
                    i = t.$el.data("term"),
                    o = n.get(r) || n.getTermByName(i),
                    u = new s({
                        title: o.get("name"),
                        content: o.get("definition"),
                        origin: {
                            left: t._originX,
                            top: t._originY
                        }
                    });
                e && e(u)
            })
        }
    }, {
        _terms: r.get("terms"),
        terms: function (e) {
            this._terms ? e && e(this._terms) : (this._terms = new o, this._terms.fetch({
                success: function (t) {
                    e && e(t)
                }
            }))
        }
    })
}), define("views/widgets/moreAccordion", ["jquery", "underscore", "vendor/custom.modernizr", "views/common"], function (e, t, n, r) {
    return r.BaseView.extend({
        className: "widget widget-more-accordion",
        selector: ".widget-more-accordion",
        events: function () {
            var e = {};
            return e["click a.title"] = "onTabClick", e
        },
        initialize: function (t) {
            this.$el.addClass("ready");
            if (e("html").hasClass("lt-ie9")) {
                var n = this.$("a.title"),
                    r = n.html();
                n.empty(), n.html(r)
            }
        },
        toggle: function () {
            this.$el.toggleClass("is-opened")
        },
        onTabClick: function (e) {
            e && this.preventEvent(e), this.toggle()
        }
    })
}), define("views/widgets/vertTabs", ["jquery", "underscore", "vendor/custom.modernizr", "views/common"], function (e, t, n, r) {
    return r.BaseView.extend({
        className: "widget widget-vertical-tabs",
        selector: ".widget-vertical-tabs",
        _$sections: null,
        events: {
            "click a.title": "onTabClick"
        },
        initialize: function (n) {
            t.bindAll(this, "onTabClick", "onWindowResize"), e(window).on("resize." + this.cid, t.debounce(this.onWindowResize, 200)), this.position(), this._$sections = this.$("section"), this._$sections.first().addClass("selected"), this.$el.addClass("ready")
        },
        position: function () {
            var t = this.$("a.title"),
                n = this.$(".content"),
                r = 0;
            t.each(function (t, n) {
                n = e(n), n.css("top", r), r += n.outerHeight()
            }), n.each(function (t, n) {
                e(n).css("min-height", r)
            })
        },
        showSection: function (t) {
            t = e(t), this._$sections.removeClass("selected"), t.addClass("selected")
        },
        onTabClick: function (t) {
            t && this.preventEvent(t);
            var n = e(t.currentTarget).parent("section");
            this.showSection(n)
        },
        onWindowResize: function (e) {
            this.position()
        },
        remove: function () {
            return this._$sections = null, e(window).off("resize." + this.cid, this.onWindowResize), r.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/videoPlayer.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="jp-video">    <div class="jp-type-single">        <div class="jp-jplayer"></div>        <div class="jp-gui">            <div class="jp-video-play">                <a href="javascript:;" class="jp-video-play-icon" tabindex="1"><i class="icon-play-circle"></i></a>            </div>            <div class="jp-interface">                <div class="jp-progress">                    <div class="jp-seek-bar">                        <div class="jp-play-bar"></div>                    </div>                </div>                <div class="jp-time">                    <div class="jp-current-time"></div> /                    <div class="jp-duration"></div>                </div>                <div class="jp-controls-holder">                    <ul class="jp-controls">                        <li><a href="javascript:;" class="jp-play" tabindex="1"><i class="icon-play"></i></a></li>                        <li><a href="javascript:;" class="jp-pause" tabindex="1"><i class="icon-pause"></i></a></li>                    </ul>                    <ul class="jp-toggles">                        <li><a href="javascript:;" class="jp-full-screen" tabindex="1" title="full screen"><i class="icon-fullscreen"></i></a></li>                        <li><a href="javascript:;" class="jp-restore-screen" tabindex="1" title="restore screen"><i class="icon-resize-small"></i></a></li>                    </ul>                </div>            </div>        </div>    </div></div>');
        return __p.join("")
    }
}), define("views/widgets/videoPlayer", ["jquery", "underscore", "backbone", "views/common", "jplayer", "tpl!templates/videoPlayer.tpl"], function (e, t, n, r, i, s) {
    return r.BaseView.extend({
        className: "widget widget-video",
        selector: ".widget-video",
        initialize: function () {
            this.render()
        },
        render: function () {
            this.$el.html(s());
            var n = t.uniqueId("jp-container-");
            this.$(".jp-video").addClass(n);
            var r = this.$el.data("src") || "",
                i = this.$el.data("poster") || "",
                o = e("html").hasClass("chrome") ? "none" : "metadata";
            return r && this.$(".jp-jplayer").jPlayer({
                size: {
                    width: "100%",
                    height: "100%",
                    cssClass: "jp-video-360p"
                },
                noFullWindow: {
                    msie: /msie [0-9]\./,
                    ipad: /ipad.*?os [0-4]\./,
                    iphone: /iphone/,
                    ipod: /ipod/,
                    android_pad: /android [0-3]\.(?!.*?mobile)/,
                    android_phone: /android.*?mobile/,
                    blackberry: /blackberry/,
                    windows_ce: /windows ce/,
                    iemobile: /iemobile/,
                    webos: /webos/
                },
                preload: o,
                swfPath: "assets/vendor",
                solution: "html, flash",
                supplied: "m4v",
                cssSelectorAncestor: "." + n,
                ready: function () {
                    e(this).jPlayer("setMedia", {
                        m4v: r,
                        poster: i
                    })
                }
            }), this.$el.addClass("ready"), this
        },
        remove: function () {
            return this.$(".jp-player").jPlayer("destroy"), r.BaseView.prototype.remove.call(this)
        }
    })
}), define("tpl!templates/imageZoomModal.tpl", function () {
    return function (obj) {
        var __p = [],
            print = function () {
                __p.push.apply(__p, arguments)
            };
        with (obj || {}) __p.push('<div class="modal modal-image-zoom">    <div class="outer-container">        <div class="inner-container" style="width:', width, ';">            <div class="header">                <a href="#" class="btn-close"><i class="icon-remove-sign"></i></a>            </div>            <img src="', src, '"/>        </div>    </div>    <div class="bg"></div></div>');
        return __p.join("")
    }
}), define("views/widgets/imageZoom", ["jquery", "underscore", "backbone", "vendor/custom.modernizr", "views/common", "tpl!templates/imageZoomModal.tpl"], function (e, t, n, r, i, s) {
    return i.BaseView.extend({
        _maxSizePercent: 75,
        _minImageMargin: 60,
        className: "widget widget-image-zoom",
        selector: ".widget-image-zoom",
        events: function () {
            var e = {};
            return e.click = "onZoom", e
        },
        initialize: function () {
            t.bindAll(this, "onModalClose"), this.render()
        },
        render: function () {
            return this.$el.addClass("ready").append('<i class="icon-zoom-in"></i>'), this
        },
        showModal: function () {
            var t = this.$("img"),
                n = t.attr("src"),
                r = e("body").outerHeight(),
                i = e("body").outerWidth(),
                o = "px",
                u, a;
            t && "naturalHeight" in t[0] ? (u = t[0].naturalHeight, a = t[0].naturalWidth) : (t = new Image, t.src = n, a = t.width);
            if (a > i || u > r) {
                var f = i - this._minImageMargin,
                    l = r - this._minImageMargin,
                    c = Math.max((Math.floor(f / a * 100), this._maxSizePercent)),
                    h = Math.max((Math.floor(l / u * 100), this._maxSizePercent));
                a = Math.min(c, h), o = "%"
            }
            e("body").append(s({
                src: n,
                width: a + o
            })), e(".modal-image-zoom .btn-close").click(this.onModalClose)
        },
        hideModal: function () {
            e(".modal-image-zoom").off().remove()
        },
        onModalClose: function (e) {
            e && this.preventEvent(e), this.hideModal()
        },
        onZoom: function (e) {
            e && this.preventEvent(e), this.showModal()
        },
        remove: function () {
            return this.hideModal(), i.BaseView.prototype.remove.call(this)
        }
    })
}), require(["utils/widgetManager", "views/iles/multipleChoice", "views/iles/category", "views/iles/assessment", "views/iles/matching", "views/iles/characterize", "views/iles/categoryClicker", "views/iles/textInput", "views/widgets/tooltipLink", "views/widgets/moreInfoTooltipLink", "views/widgets/termTooltipLink", "views/widgets/moreAccordion", "views/widgets/vertTabs", "views/widgets/videoPlayer", "views/widgets/imageZoom"], function (e) {
    if (arguments && arguments.length) {
        var t = 1,
            n = arguments.length;
        for (t; t < n; t++) {
            var r = arguments[t];
            e.registerWidget(r)
        }
    }
}), define("widgets", function () { }), define("app", ["module", "jquery", "underscore", "backbone", "globals", "router", "collections/topics", "collections/terms", "collections/references", "views/app", "mixins/state", "utils/tracker", "api", "widgets"], function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
    function v(e) {
        p ? e && e(p) : d = t.getJSON("assets/course/data/course.json", function (t) {
            p = t, e && e(p)
        })
    }
    var p = e.config().course || null,
        d;
    return {
        _appView: null,
        initialize: function () {
            v(n.bind(this.hydrate, this))
        },
        hydrate: function (e) {
            "config" in e && (i.set(e.config), delete e.config), e.topics = "topics" in e ? new o(e.topics, {
                parse: !0
            }) : null;
            var t = e.topics.pluck("pages"),
                s = n.flatten(n.pluck(t, "models"));
            e.pages = new r.Collection(s), e.terms = "terms" in e ? new u(e.terms) : null, e.references = "references" in e ? new a(e.references) : null, e.selectedTopic = e.topics.at(0), e.selectedPage = e.topics.at(0).get("pages").at(0), i.set(e), c.initialize(n.bind(this.onTrackerInitialized, this))
        },
        start: function () {
            i.set("router", new s), this._appView = (new f({
                el: t("#main")
            })).render(), r.history.start()
        },
        onTrackerInitialized: function (e) {
            if (e) {
                e.get("location") && (window.location.hash = e.get("location"));
                var t = i.get("pages"),
                    r = e.get("suspend_data"),
                    s = i.get("gate");
                r && r.length && n.each(r, function (e) {
                    var n = t.get(e);
                    n && n.set("state", l.states.COMPLETED)
                }), s && t.each(function (e, t, n) {
                    var r = n[t + 1];
                    if (r && r.get("state") !== l.states.COMPLETED) {
                        var i = l.states.LOCKED;
                        e.get("state") === l.states.COMPLETED && (i = l.states.NEW), e.set("state", i)
                    }
                })
            }
            this.start()
        },
        destroy: function () {
            d && (d.abort(), d = null), this._appView && (this._appView.remove(), this._appView = null), c.destroy(), r.history.stop()
        }
    }
});
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
FastClick.prototype.needsClick = function (e) {
    switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled) return !0;
            break;
        case "input":
            if (deviceIsIOS && e.type === "file" || e.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(e.className)
}, FastClick.prototype.needsFocus = function (e) {
    switch (e.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (e.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
    }
}, FastClick.prototype.sendClick = function (e, t) {
    var n, r;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
}, FastClick.prototype.determineEventType = function (e) {
    return deviceIsAndroid && e.tagName.toLowerCase() === "select" ? "mousedown" : "click"
}, FastClick.prototype.focus = function (e) {
    var t;
    deviceIsIOS && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
}, FastClick.prototype.updateScrollParent = function (e) {
    var t, n;
    t = e.fastClickScrollParent;
    if (!t || !t.contains(e)) {
        n = e;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                t = n, e.fastClickScrollParent = n;
                break
            }
            n = n.parentElement
        } while (n)
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function (e) {
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
}, FastClick.prototype.onTouchStart = function (e) {
    var t, n, r;
    if (e.targetTouches.length > 1) return !0;
    t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0];
    if (deviceIsIOS) {
        r = window.getSelection();
        if (r.rangeCount && !r.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
            this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function (e) {
    var t = e.changedTouches[0],
        n = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
}, FastClick.prototype.onTouchMove = function (e) {
    if (!this.trackingClick) return !0;
    if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) this.trackingClick = !1, this.targetElement = null;
    return !0
}, FastClick.prototype.findControl = function (e) {
    return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function (e) {
    var t, n, r, i, s, o = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
    this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, deviceIsIOSWithBadTarget && (s = e.changedTouches[0], o = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || o, o.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = o.tagName.toLowerCase();
    if (r === "label") {
        t = this.findControl(o);
        if (t) {
            this.focus(o);
            if (deviceIsAndroid) return !1;
            o = t
        }
    } else if (this.needsFocus(o)) {
        if (e.timeStamp - n > 100 || deviceIsIOS && window.top !== window && r === "input") return this.targetElement = null, !1;
        this.focus(o), this.sendClick(o, e);
        if (!deviceIsIOS || r !== "select") this.targetElement = null, e.preventDefault();
        return !1
    }
    if (deviceIsIOS && !deviceIsIOS4) {
        i = o.fastClickScrollParent;
        if (i && i.fastClickLastScrollTop !== i.scrollTop) return !0
    }
    return this.needsClick(o) || (e.preventDefault(), this.sendClick(o, e)), !1
}, FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function (e) {
    return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
}, FastClick.prototype.onClick = function (e) {
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : e.target.type === "submit" && e.detail === 0 ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
}, FastClick.prototype.destroy = function () {
    var e = this.layer;
    deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function (e) {
    var t, n;
    if (typeof window.ontouchstart == "undefined") return !0;
    n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
    if (n) {
        if (!deviceIsAndroid) return !0;
        t = document.querySelector("meta[name=viewport]");
        if (t) {
            if (t.content.indexOf("user-scalable=no") !== -1) return !0;
            if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
    }
    return e.style.msTouchAction === "none" ? !0 : !1
}, FastClick.attach = function (e, t) {
    return new FastClick(e, t)
}, typeof define == "function" && typeof define.amd == "object" && define.amd ? define("fastclick", [], function () {
    return FastClick
}) : typeof module != "undefined" && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick,
function (e) {
    function x() {
        b(!0)
    }
    var t = {};
    e.respond = t, t.update = function () { };
    var n = [],
        r = function () {
            var t = !1;
            try {
                t = new e.XMLHttpRequest
            } catch (n) {
                t = new e.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function () {
                return t
            }
        }(),
        i = function (e, t) {
            var n = r();
            if (!n) return;
            n.open("GET", e, !0), n.onreadystatechange = function () {
                if (n.readyState !== 4 || n.status !== 200 && n.status !== 304) return;
                t(n.responseText)
            };
            if (n.readyState === 4) return;
            n.send(null)
        };
    t.ajax = i, t.queue = n, t.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
        maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
    }, t.mediaQueriesSupported = e.matchMedia && e.matchMedia("only all") !== null && e.matchMedia("only all").matches;
    if (t.mediaQueriesSupported) return;
    var s = e.document,
        o = s.documentElement,
        u = [],
        a = [],
        f = [],
        l = {}, c = 30,
        h = s.getElementsByTagName("head")[0] || o,
        p = s.getElementsByTagName("base")[0],
        d = h.getElementsByTagName("link"),
        v, m, g, y = function () {
            var e, t = s.createElement("div"),
                n = s.body,
                r = o.style.fontSize,
                i = n && n.style.fontSize,
                u = !1;
            return t.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = u = s.createElement("body"), n.style.background = "none"), o.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(t), u && o.insertBefore(n, o.firstChild), e = t.offsetWidth, u ? o.removeChild(n) : n.removeChild(t), o.style.fontSize = r, i && (n.style.fontSize = i), e = g = parseFloat(e), e
        }, b = function (t) {
            var n = "clientWidth",
                r = o[n],
                i = s.compatMode === "CSS1Compat" && r || s.body[n] || r,
                l = {}, p = d[d.length - 1],
                w = (new Date).getTime();
            if (t && v && w - v < c) {
                e.clearTimeout(m), m = e.setTimeout(b, c);
                return
            }
            v = w;
            for (var E in u)
                if (u.hasOwnProperty(E)) {
                    var S = u[E],
                        x = S.minw,
                        T = S.maxw,
                        N = x === null,
                        C = T === null,
                        k = "em";
                    !x || (x = parseFloat(x) * (x.indexOf(k) > -1 ? g || y() : 1)), !T || (T = parseFloat(T) * (T.indexOf(k) > -1 ? g || y() : 1));
                    if (!S.hasquery || (!N || !C) && (N || i >= x) && (C || i <= T)) l[S.media] || (l[S.media] = []), l[S.media].push(a[S.rules])
                }
            for (var L in f) f.hasOwnProperty(L) && f[L] && f[L].parentNode === h && h.removeChild(f[L]);
            f.length = 0;
            for (var A in l)
                if (l.hasOwnProperty(A)) {
                    var O = s.createElement("style"),
                        M = l[A].join("\n");
                    O.type = "text/css", O.media = A, h.insertBefore(O, p.nextSibling), O.styleSheet ? O.styleSheet.cssText = M : O.appendChild(s.createTextNode(M)), f.push(O)
                }
        }, w = function (e, n, r) {
            var i = e.replace(t.regex.keyframes, "").match(t.regex.media),
                s = i && i.length || 0;
            n = n.substring(0, n.lastIndexOf("/"));
            var o = function (e) {
                return e.replace(t.regex.urls, "$1" + n + "$2$3")
            }, f = !s && r;
            n.length && (n += "/"), f && (s = 1);
            for (var l = 0; l < s; l++) {
                var c, h, p, d;
                f ? (c = r, a.push(o(e))) : (c = i[l].match(t.regex.findStyles) && RegExp.$1, a.push(RegExp.$2 && o(RegExp.$2))), p = c.split(","), d = p.length;
                for (var v = 0; v < d; v++) h = p[v], u.push({
                    media: h.split("(")[0].match(t.regex.only) && RegExp.$2 || "all",
                    rules: a.length - 1,
                    hasquery: h.indexOf("(") > -1,
                    minw: h.match(t.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: h.match(t.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                })
            }
            b()
        }, E = function () {
            if (n.length) {
                var t = n.shift();
                i(t.href, function (n) {
                    w(n, t.href, t.media), l[t.href] = !0, e.setTimeout(function () {
                        E()
                    }, 0)
                })
            }
        }, S = function () {
            for (var t = 0; t < d.length; t++) {
                var r = d[t],
                    i = r.href,
                    s = r.media,
                    o = r.rel && r.rel.toLowerCase() === "stylesheet";
                if (!!i && o && !l[i])
                    if (r.styleSheet && r.styleSheet.rawCssText) w(r.styleSheet.rawCssText, i, s), l[i] = !0;
                    else if (!/^([a-zA-Z:]*\/\/)/.test(i) && !p || i.replace(RegExp.$1, "").split("/")[0] === e.location.host) i.substring(0, 2) === "//" && (i = e.location.protocol + i), n.push({
                        href: i,
                        media: s
                    })
            }
            E()
        };
    S(), t.update = S, t.getEmValue = y, e.addEventListener ? e.addEventListener("resize", x, !1) : e.attachEvent && e.attachEvent("onresize", x)
}(this), define("respond", function () { }), define("utils/browserDetect", ["jquery"], function (e) {
    function r() {
        var e, r = n.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        return r && (e = n.match(/version\/([\.\d]+)/i)) != null && (r[2] = e[1]), r = r ? [r[1], r[2]] : [t, navigator.appVersion, "-?"], r[0]
    }

    function i() {
        var e, r = n.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        return r && (e = n.match(/version\/([\.\d]+)/i)) != null && (r[2] = e[1]), r = r ? [r[1], r[2]] : [t, navigator.appVersion, "-?"], r[1]
    }
    var t = navigator.appName,
        n = navigator.userAgent;
    return e("html").addClass(r().toLowerCase() + " " + navigator.platform.toLowerCase() + " v" + i().split(".")[0]), {
        browser: r(),
        version: i(),
        platform: navigator.platform || ""
    }
}), requirejs.config({
    baseUrl: "src",
    paths: {
        jquery: "../bower_components/jquery/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        localstorage: "../bower_components/Backbone.localStorage/backbone.localStorage",
        jplayer: "../bower_components/jplayer/jquery.jplayer/jquery.jplayer",
        interactjs: "../bower_components/interact.js/interact",
        text: "../bower_components/requirejs-text/text",
        tpl: "../bower_components/requirejs-tpl/tpl",
        respond: "../bower_components/respond/src/respond",
        fastclick: "../bower_components/fastclick/lib/fastclick",
        templates: "../templates",
        vendor: "./vendor"
    },
    shim: {
        jquery: {
            exports: "$"
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "vendor/custom.modernizr": {
            deps: ["jquery"],
            exports: "Modernizr"
        },
        "jquery.jplayer": {
            deps: ["jquery"],
            exports: "$"
        },
        "jquery.line": {
            deps: ["jquery"],
            exports: "$"
        },
        "vendor/jquery.rwdImageMaps": {
            deps: ["jquery"],
            exports: "$"
        }
    }
}), define("main", ["app", "fastclick", "respond", "vendor/custom.modernizr", "utils/browserDetect"], function (e, t) {
    t.attach(document.body), e.initialize()
});
