//Monkey Creative :
//=================
(window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = [].slice,
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = function(t) {
                        return t.jquery || t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType)
                    },
                    a = r.prototype = i.to({}, .1, {}),
                    o = [];
                r.version = "1.0.0", a.constructor = r, a.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.ticker = i.ticker, a.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, a.updateTo = function(t, e) {
                    var s, r = this.ratio;
                    e && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var n = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                    }
                    return this
                }, a.render = function(t, e, i) {
                    var s, r, n, a, h, l, _, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._totalTime,
                        c = this._cycle;
                    if (t >= u ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== f || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = this._duration + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / this._duration, l = this._easeType, _ = this._easePower, (1 === l || 3 === l && h >= .5) && (h = 1 - h), 3 === l && (h *= 2), 1 === _ ? h *= h : 2 === _ ? h *= h * h : 3 === _ ? h *= h * h * h : 4 === _ && (h *= h * h * h * h), this.ratio = 1 === l ? 1 - h : 2 === l ? h : .5 > this._time / this._duration ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), p === this._time && !i) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== p && t >= 0 && (this._active = !0), 0 === f && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)), this._cycle !== c && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || o)))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, a, h, l, _, u) {
                    h = h || 0;
                    var p, f, c, m, d = a.delay || 0,
                        g = [],
                        v = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), l.apply(u || this, _ || o)
                        };
                    for (t instanceof Array || ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s.call(t, 0))), p = t.length, c = 0; p > c; c++) {
                        f = {};
                        for (m in a) f[m] = a[m];
                        f.delay = d, c === p - 1 && l && (f.onComplete = v), g[c] = new r(t[c], e, f), d += h
                    }
                    return g
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    for (var e, s = i.getTweensOf(t), r = s.length; --r > -1;)
                        if (e = s[r], e._active || e._startTime === e._timeline._time && e._timeline._active) return !0;
                    return !1
                };
                var h = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(h(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    l = r.getAllTweens = function(e) {
                        return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = l(0 != r),
                        _ = h.length,
                        u = i && s && r;
                    for (o = 0; _ > o; o++) a = h[o], (u || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var a, o, h, l, _, u = i._tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = s(t, 0)), t instanceof Array)
                            for (l = t.length; --l > -1;) r.killChildTweensOf(t[l], e);
                        else {
                            a = [];
                            for (h in u)
                                for (o = u[h].target.parentNode; o;) o === t && (a = a.concat(u[h].tweens)), o = o.parentNode;
                            for (_ = a.length, l = 0; _ > l; l++) e && a[l].totalTime(a[l].totalDuration()), a[l]._enabled(!1, !1)
                        }
                    }
                };
                var _ = function(t, i, s, r) {
                    i = !1 !== i, s = !1 !== s, r = !1 !== r;
                    for (var n, a, o = l(r), h = i && s && r, _ = o.length; --_ > -1;) a = o[_], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    _(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    _(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || 1e-6, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, a.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, a.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, a.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, a.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, a.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, a.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, a.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, a.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r)(i = r[s]) instanceof Array && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        r.tweens instanceof Array && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = [],
                    n = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    a = function(t, e, i, s) {
                        t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || r)
                    },
                    o = r.slice,
                    h = s.prototype = new e;
                return s.version = "1.10.2", h.constructor = s, h.kill()._gc = !1, h.to = function(t, e, s, r) {
                    return e ? this.add(new i(t, e, s), r) : this.set(t, s, r)
                }, h.from = function(t, e, s, r) {
                    return this.add(i.from(t, e, s), r)
                }, h.fromTo = function(t, e, s, r, n) {
                    return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, h.staggerTo = function(t, e, r, a, h, l, _, u) {
                    var p, f = new s({
                        onComplete: l,
                        onCompleteParams: _,
                        onCompleteScope: u
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), !(t instanceof Array) && t.length && t !== window && t[0] && (t[0] === window || t[0].nodeType && t[0].style && !t.nodeType) && (t = o.call(t, 0)), a = a || 0, p = 0; t.length > p; p++) r.startAt && (r.startAt = n(r.startAt)), f.to(t[p], e, n(r), p * a);
                    return this.add(f, h)
                }, h.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, h.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, h.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, h.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, h.add = function(r, n, a, o) {
                    var h, l, _, u, p;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array) {
                            for (a = a || "normal", o = o || 0, h = n, l = r.length, _ = 0; l > _; _++)(u = r[_]) instanceof Array && (u = new s({
                                tweens: u
                            })), this.add(u, h), "string" != typeof u && "function" != typeof u && ("sequence" === a ? h = u._startTime + u.totalDuration() / u._timeScale : "start" === a && (u._startTime -= u.delay())), h += o;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                        for (p = this; p._gc && p._timeline;) p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
                    return this
                }, h.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, h._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this._last._startTime && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                }, h.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, h.insert = h.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, h.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, h.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, h.addPause = function(t, e, i, s) {
                    return this.call(a, ["{self}", e, i, s], this, t)
                }, h.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, h.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, h._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r instanceof Array)
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, h.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, h.stop = function() {
                    return this.paused(!0)
                }, h.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, h.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, l = this._dirty ? this.totalDuration() : this._totalDuration,
                        _ = this._time,
                        u = this._startTime,
                        p = this._timeScale,
                        f = this._paused;
                    if (t >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, t = l + 1e-6) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== _ && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= _)
                            for (s = this._first; s && (a = s._next, !this._paused || f);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || f);)(s._active || _ >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._gc || (u === this._startTime || p !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                    }
                }, h._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, h.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== s && (n[o++] = a), !1 !== t && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, h.getTweensOf = function(t, e) {
                    for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (n[a++] = s[r]);
                    return n
                }, h._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, h.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, h._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, h.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, h.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return this
                }, h._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * t, !1) : this._time / this.duration()
                }, h.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, h.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, h.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, h.rawTime = function() {
                    return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    r = [],
                    n = new i(null, null, 1, 0),
                    a = function(t) {
                        for (; t;) {
                            if (t._paused) return !0;
                            t = t._timeline
                        }
                        return !1
                    },
                    o = s.prototype = new t;
                return o.constructor = s, o.kill()._gc = !1, s.version = "1.10.2", o.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, o.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, o.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, o.tweenTo = function(t, i) {
                    i = i || {};
                    var s, a, o = {
                        ease: n,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(t), a = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || .001, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || r)
                    }, a
                }, o.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, o.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, h, l, _ = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._duration,
                        p = this._time,
                        f = this._totalTime,
                        c = this._startTime,
                        m = this._timeScale,
                        d = this._rawPrevTime,
                        g = this._paused,
                        v = this._cycle;
                    if (t >= _ ? (this._locked || (this._totalTime = _, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === u && (0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > 0 && (o = "onReverseComplete"))), this._rawPrevTime = t, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = u, t = u + 1e-6)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === u && this._rawPrevTime > 0 && !this._locked) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === u && this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = t, t = 0, this._initted || (h = !0))) : (this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = u + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = u - this._time), this._time > u ? (this._time = u, t = u + 1e-6) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== v && !this._locked) {
                        var y = this._yoyo && 0 != (1 & v),
                            T = y === (this._yoyo && 0 != (1 & this._cycle)),
                            x = this._totalTime,
                            w = this._cycle,
                            b = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = v * u, v > this._cycle ? y = !y : this._totalTime += u, this._time = p, this._rawPrevTime = 0 === u ? d - 1e-5 : d, this._cycle = v, this._locked = !0, p = y ? 0 : u, this.render(p, e, 0 === u), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (p = y ? u + 1e-6 : -1e-6, this.render(p, !0, !1)), this._locked = !1, this._paused && !g) return;
                        this._time = P, this._totalTime = x, this._cycle = w, this._rawPrevTime = b
                    }
                    if (!(this._time !== p && this._first || i || h)) return void(f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= p)
                        for (s = this._first; s && (a = s._next, !this._paused || g);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || g);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), o && (this._locked || this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || _ >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || r)))
                }, o.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        o = this.getChildren(t, e, i),
                        h = 0,
                        l = o.length;
                    for (s = 0; l > s; s++) r = o[s], r._paused || r._timeline._time >= r._startTime && r._timeline._time < r._startTime + r._totalDuration / r._timeScale && (a(r._timeline) || (n[h++] = r));
                    return n
                }, o.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, o.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, o.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, o.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, o.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, o.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, o.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, o.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, o.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, o.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, o.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = Math.PI / 180,
                    i = [],
                    s = [],
                    r = [],
                    n = {},
                    a = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    o = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            f = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + f, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - f, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, e, n, a, h) {
                        var l, _, u, p, f, c, m, d, g, v, y, T, x, w = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; w > l; l++) f = t[b], _ = f.a, u = f.d, p = t[b + 1].d, h ? (y = i[l], T = s[l], x = .25 * (T + y) * e / (a ? .5 : r[l] || .5), c = u - (u - _) * (a ? .5 * e : 0 !== y ? x / y : 0), m = u + (p - u) * (a ? .5 * e : 0 !== T ? x / T : 0), d = u - (c + ((m - c) * (3 * y / (y + T) + .5) / 4 || 0))) : (c = u - .5 * (u - _) * e, m = u + .5 * (p - u) * e, d = u - (c + m) / 2), c += d, m += d, f.c = g = c, f.b = 0 !== l ? P : P = f.a + .6 * (f.c - f.a), f.da = u - _, f.ca = g - _, f.ba = P - _, n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        f = t[b], f.b = P, f.c = P + .4 * (f.d - P), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = P - f.a, n && (v = o(f.a, P, f.c, f.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    l = function(t, e, r, n) {
                        var o, h, l, _, u, p, f = [];
                        if (n)
                            for (t = [n].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][e]) && "=" === p.charAt(1) && (t[h][e] = n[e] + Number(p.charAt(0) + p.substr(2)));
                        if (0 > (o = t.length - 2)) return f[0] = new a(t[0][e], 0, 0, t[-1 > o ? 0 : 1][e]), f;
                        for (h = 0; o > h; h++) l = t[h][e], _ = t[h + 1][e], f[h] = new a(l, 0, 0, _), r && (u = t[h + 2][e], i[h] = (i[h] || 0) + (_ - l) * (_ - l), s[h] = (s[h] || 0) + (u - _) * (u - _));
                        return f[h] = new a(t[h][e], 0, 0, t[h + 1][e]), f
                    },
                    _ = function(t, e, a, o, _, u) {
                        var p, f, c, m, d, g, v, y, T = {},
                            x = [],
                            w = u || t[0];
                        _ = "string" == typeof _ ? "," + _ + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], v = !0, p = x.length; --p > -1;)
                                if (f = x[p], Math.abs(w[f] - y[f]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (i.length = s.length = r.length = 0, p = x.length; --p > -1;) f = x[p], n[f] = -1 !== _.indexOf("," + f + ","), T[f] = l(t, f, n[f], u);
                        for (p = i.length; --p > -1;) i[p] = Math.sqrt(i[p]), s[p] = Math.sqrt(s[p]);
                        if (!o) {
                            for (p = x.length; --p > -1;)
                                if (n[f])
                                    for (c = T[x[p]], g = c.length - 1, m = 0; g > m; m++) d = c[m + 1].da / s[m] + c[m].da / i[m], r[m] = (r[m] || 0) + d * d;
                            for (p = r.length; --p > -1;) r[p] = Math.sqrt(r[p])
                        }
                        for (p = x.length, m = a ? 4 : 1; --p > -1;) f = x[p], c = T[f], h(c, e, a, o, n[f]), v && (c.splice(0, m), c.splice(c.length - m, m));
                        return T
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var s, r, n, o, h, l, _, u, p, f, c, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], f = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(c = t[_][p]) && "=" === c.charAt(1) ? i[p] + Number(c.charAt(0) + c.substr(2)) : Number(c), g && _ > 1 && u - 1 > _ && (h[f++] = (s + h[f - 2]) / 2), h[f++] = s;
                            for (u = f - d + 1, f = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[f++] = c = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
                            h.length = f
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, f, c = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = c * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), f = m * i + _ - 1, e[f] = (e[f] || 0) + s * s
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            f = [];
                        for (i in t) p(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, f[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = f, o[n] = l, h = 0, f = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    c = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                p = h[0],
                                c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [
                                ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
                            ] : null;
                            for (s in p) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (c = this._autoRotate)
                                for (c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;)
                                    for (a = 0; 3 > a; a++) s = c[n][a], this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)];
                            return !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                f = this._func,
                                c = this._target;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = h + (h > 0 ? .5 : -.5) >> 0), f[n] ? c[n](h) : c[n] = h;
                            if (this._autoRotate) {
                                var m, d, g, v, y, T, x, w = this._autoRotate;
                                for (r = w.length; --r > -1;) n = w[r][2], T = w[r][3] || 0, x = !0 === w[r][4] ? 1 : t, a = this._beziers[w[r][0]], m = this._beziers[w[r][1]], a && m && (a = a[i], m = m[i], d = a.a + (a.b - a.a) * o, v = a.b + (a.c - a.b) * o, d += (v - d) * o, v += (a.c + (a.d - a.c) * o - v) * o, g = m.a + (m.b - m.a) * o, y = m.b + (m.c - m.b) * o, g += (y - g) * o, y += (m.c + (m.d - m.c) * o - y) * o, h = Math.atan2(y - g, v - d) * x + T, f[n] ? c[n](h) : c[n] = h)
                            }
                        }
                    }),
                    m = c.prototype;
                c.bezierThrough = _, c.cubicToQuadratic = o, c._autoCSS = !0, c.quadraticToCubic = function(t, e, i) {
                    return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, c._cssRegister = function() {
                    var t = window._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var i = t._internals,
                            s = i._parseToProxy,
                            r = i._setPluginRatio,
                            n = i.CSSPropTween;
                        i._registerComplexSpecialProp("bezier", {
                            parser: function(t, i, a, o, h, l) {
                                i instanceof Array && (i = {
                                    values: i
                                }), l = new c;
                                var _, u, p, f = i.values,
                                    m = f.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > m) return h;
                                for (_ = 0; m >= _; _++) p = s(t, f[_], o, h, l, m !== _), d[_] = p.end;
                                for (u in i) g[u] = i[u];
                                return g.values = d, h = new n(t, "bezier", 0, 0, p.pt, 2), h.data = p, h.plugin = l, h.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (_ = !0 === g.autoRotate ? 0 : Number(g.autoRotate) * e, g.autoRotate = null != p.end.left ? [
                                    ["left", "top", "rotation", _, !0]
                                ] : null != p.end.x && [
                                    ["x", "y", "rotation", _, !0]
                                ]), g.autoRotate && (o._transform || o._enableTransforms(!1), p.autoRotate = o._target._gsTransform), l._onInitTween(p.proxy, g, o._tween), h
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, m._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.10.2", a.API = 2, a.defaultTransformPerspective = 0, h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h
                };
                var l, _, u, p, f, c, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/,
                    x = /opacity:([^;]*)/,
                    w = /^(rgb|hsl)/,
                    b = /([A-Z])/g,
                    P = /-([a-z])/gi,
                    S = function(t, e) {
                        return e.toUpperCase()
                    },
                    R = /(?:Left|Right|Width)/i,
                    k = /,(?=[^\)]*(?:\(|$))/gi,
                    A = Math.PI / 180,
                    C = 180 / Math.PI,
                    O = {},
                    M = document,
                    D = M.createElement("div"),
                    I = M.createElement("img"),
                    F = a._internals = {
                        _specialProps: o
                    },
                    X = navigator.userAgent,
                    N = function() {
                        var t, e = X.indexOf("Android"),
                            i = M.createElement("div");
                        return u = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || Number(X.substr(e + 8, 1)) > 3), f = u && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)), p = -1 !== X.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X), c = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", !!(t = i.getElementsByTagName("a")[0]) && /^0.55/.test(t.style.opacity)
                    }(),
                    L = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    E = function(t) {
                        window.console && console.log(t)
                    },
                    z = "",
                    Y = "",
                    U = function(t, e) {
                        e = e || D;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (Y = 3 === s ? "ms" : i[s], z = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    B = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                    j = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return N || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || B(t, null)) ? (t = i.getPropertyValue(e.replace(b, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : L(t)
                    },
                    V = function(t, e, i, s, r) {
                        if ("px" === s || !s) return i;
                        if ("auto" === s || !i) return 0;
                        var n, a = R.test(e),
                            o = t,
                            h = D.style,
                            l = 0 > i;
                        return l && (i = -i), "%" === s && -1 !== e.indexOf("border") ? n = i / 100 * (a ? t.clientWidth : t.clientHeight) : (h.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== s && o.appendChild ? h[a ? "borderLeftWidth" : "borderTopWidth"] = i + s : (o = t.parentNode || M.body, h[a ? "width" : "height"] = i + s), o.appendChild(D), n = parseFloat(D[a ? "offsetWidth" : "offsetHeight"]), o.removeChild(D), 0 !== n || r || (n = V(t, e, i, s, !0))), l ? -n : n
                    },
                    q = function(t, e, i) {
                        if ("absolute" !== j(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = j(t, "margin" + s, i);
                        return t["offset" + s] - (V(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    Z = function(t, e) {
                        var i, s, r = {};
                        if (e = e || B(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(P, S)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) r[i.replace(P, S)] = e[i];
                        return N || (r.opacity = L(t)), s = vt(t, e, !1), r.rotation = s.rotation * C, r.skewX = s.skewX * C, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, gt && (r.z = s.z, r.rotationX = s.rotationX * C, r.rotationY = s.rotationY * C, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    W = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : q(t, a), void 0 !== l[a] && (o = new ot(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    G = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    Q = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = $[e],
                            n = r.length;
                        for (i = i || B(t, null); --n > -1;) s -= parseFloat(j(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(j(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    H = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    K = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    J = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    tt = function(t, e, i, s) {
                        var r, n, a, o;
                        return null == t ? o = e : "number" == typeof t ? o = t * A : (r = 2 * Math.PI, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? A : 1) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o
                    },
                    et = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    it = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    st = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), et[t] ? et[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = it(r + 1 / 3, e, i), t[1] = it(r, e, i), t[2] = it(r - 1 / 3, e, i), t) : (t = t.match(m) || et.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : et.black
                    },
                    rt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in et) rt += "|" + h + "\\b";
                rt = RegExp(rt + ")", "gi");
                var nt = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(rt) || [""])[0] : "",
                            a = t.split(n).join("").match(g) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(m, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, f, c;
                            if ("number" == typeof t) t += u;
                            else if (s && k.test(t)) {
                                for (c = t.replace(k, "|").split("|"), f = 0; c.length > f; f++) c[f] = r(c[f]);
                                return c.join(",")
                            }
                            if (e = (t.match(rt) || [n])[0], p = t.split(e).join("").match(g) || [], f = p.length, _ > f--)
                                for (; _ > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : a[f];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && k.test(t)) {
                                for (n = t.replace(k, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(g) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    at = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ot = (F._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT; o;) e = a[o.v], o.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    ht = (F._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            f = {},
                            c = i._transform,
                            m = O;
                        for (i._transform = null, O = e, s = _ = i.parse(t, e, s, r), O = m, n && (i._transform = c, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, f[o] = s.s + s.c, p[o] = s.s, n || (l = new ot(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, f[o] = s.data[h], p[o] = s[h], n || (l = new ot(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: l,
                            pt: _
                        }
                    }, F.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof ht || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    lt = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
                        i = i || n || "", a = new ht(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, f, c, g, v, y, T, x, b, P, S, R = i.split(", ").join(",").split(" "),
                            A = s.split(", ").join(",").split(" "),
                            C = R.length,
                            O = !1 !== l;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (R = R.join(" ").replace(k, ", ").split(" "), A = A.join(" ").replace(k, ", ").split(" "), C = R.length), C !== A.length && (R = (n || "").split(" "), C = R.length), a.plugin = h, a.setRatio = _, u = 0; C > u; u++)
                            if (c = R[u], g = A[u], (T = parseFloat(c)) || 0 === T) a.appendXtra("", T, K(g, T), g.replace(d, ""), O && -1 !== g.indexOf("px"), !0);
                            else if (r && ("#" === c.charAt(0) || et[c] || w.test(c))) S = "," === g.charAt(g.length - 1) ? ")," : ")", c = st(c), g = st(g), x = c.length + g.length > 6, x && !N && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(A[u]).join("transparent")) : (N || (x = !1), a.appendXtra(x ? "rgba(" : "rgb(", c[0], g[0] - c[0], ",", !0, !0).appendXtra("", c[1], g[1] - c[1], ",", !0).appendXtra("", c[2], g[2] - c[2], x ? "," : S, !0), x && (c = 4 > c.length ? 1 : c[3], a.appendXtra("", c, (4 > g.length ? 1 : g[3]) - c, S, !1)));
                        else if (v = c.match(m)) {
                            if (!(y = g.match(d)) || y.length !== v.length) return a;
                            for (f = 0, p = 0; v.length > p; p++) P = v[p], b = c.indexOf(P, f), a.appendXtra(c.substr(f, b - f), Number(P), K(y[p], P), "", O && "px" === c.substr(b + P.length, 2), 0 === p), f = b + P.length;
                            a["xs" + a.l] += c.substr(f)
                        } else a["xs" + a.l] += a.l ? " " + c : c;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    _t = 9;
                for (h = ht.prototype, h.l = h.pr = 0; --_t > 0;) h["xn" + _t] = 0, h["xs" + _t] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new ht(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var ut = function(t, e) {
                        e = e || {}, this.p = e.prefix ? U(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || nt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    pt = F._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r = t.split(","),
                            n = e.defaultValue;
                        for (i = i || [n], s = 0; r.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || n, new ut(r[s], e)
                    };
                h = ut.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (k.test(i) || k.test(e) ? (o = e.replace(k, "|").split("|"), h = i.replace(k, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return lt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(j(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    pt(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new ht(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                };
                var ft = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ct = U("transform"),
                    mt = z + "transform",
                    dt = U("transformOrigin"),
                    gt = null !== U("perspective"),
                    vt = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, n, o, h, l, _, u, p, f, c, m, d, g, v = i ? t._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            y = 0 > v.scaleX,
                            T = 2e-5,
                            x = 1e5,
                            w = 1e-4 - Math.PI,
                            b = Math.PI - 1e-4,
                            P = gt ? parseFloat(j(t, dt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        for (ct ? r = j(t, mt, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]), n[o] = (l = h - (h |= 0)) ? (0 | l * x + (0 > l ? -.5 : .5)) / x + h : h;
                        if (16 === n.length) {
                            var S = n[8],
                                R = n[9],
                                k = n[10],
                                A = n[12],
                                C = n[13],
                                O = n[14];
                            if (v.zOrigin && (O = -v.zOrigin, A = S * O - n[12], C = R * O - n[13], O = k * O + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                                var M, D, I, F, X, N, L, E = n[0],
                                    z = n[1],
                                    Y = n[2],
                                    U = n[3],
                                    B = n[4],
                                    V = n[5],
                                    q = n[6],
                                    Z = n[7],
                                    W = n[11],
                                    $ = v.rotationX = Math.atan2(q, k),
                                    G = w > $ || $ > b;
                                $ && (F = Math.cos(-$), X = Math.sin(-$), M = B * F + S * X, D = V * F + R * X, I = q * F + k * X, S = B * -X + S * F, R = V * -X + R * F, k = q * -X + k * F, W = Z * -X + W * F, B = M, V = D, q = I), $ = v.rotationY = Math.atan2(S, E), $ && (N = w > $ || $ > b, F = Math.cos(-$), X = Math.sin(-$), M = E * F - S * X, D = z * F - R * X, I = Y * F - k * X, R = z * X + R * F, k = Y * X + k * F, W = U * X + W * F, E = M, z = D, Y = I), $ = v.rotation = Math.atan2(z, V), $ && (L = w > $ || $ > b, F = Math.cos(-$), X = Math.sin(-$), E = E * F + B * X, D = z * F + V * X, V = z * -X + V * F, q = Y * -X + q * F, z = D), L && G ? v.rotation = v.rotationX = 0 : L && N ? v.rotation = v.rotationY = 0 : N && G && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(E * E + z * z) * x + .5) / x, v.scaleY = (0 | Math.sqrt(V * V + R * R) * x + .5) / x, v.scaleZ = (0 | Math.sqrt(q * q + k * k) * x + .5) / x, v.skewX = 0, v.perspective = W ? 1 / (0 > W ? -W : W) : 0, v.x = A, v.y = C, v.z = O
                            }
                        } else if (!(gt && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === j(t, "display", e))) {
                            var Q = n.length >= 6,
                                H = Q ? n[0] : 1,
                                K = n[1] || 0,
                                J = n[2] || 0,
                                tt = Q ? n[3] : 1;
                            v.x = n[4] || 0, v.y = n[5] || 0, _ = Math.sqrt(H * H + K * K), u = Math.sqrt(tt * tt + J * J), p = H || K ? Math.atan2(K, H) : v.rotation || 0, f = J || tt ? Math.atan2(J, tt) + p : v.skewX || 0, c = _ - Math.abs(v.scaleX || 0), m = u - Math.abs(v.scaleY || 0), Math.abs(f) > Math.PI / 2 && Math.abs(f) < 1.5 * Math.PI && (y ? (_ *= -1, f += 0 >= p ? Math.PI : -Math.PI, p += 0 >= p ? Math.PI : -Math.PI) : (u *= -1, f += 0 >= f ? Math.PI : -Math.PI)), d = (p - v.rotation) % Math.PI, g = (f - v.skewX) % Math.PI, (void 0 === v.skewX || c > T || -T > c || m > T || -T > m || d > w && b > d && !1 | d * x || g > w && b > g && !1 | g * x) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = f), gt && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                        }
                        v.zOrigin = P;
                        for (o in v) T > v[o] && v[o] > -T && (v[o] = 0);
                        return i && (t._gsTransform = v), v
                    },
                    yt = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation,
                            n = r + s.skewX,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var f, m, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                w = s.x,
                                b = s.y;
                            if (null != s.ox && (f = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, w += f - (f * o + m * h), b += m - (f * l + m * _)), v) f = d / 2, m = g / 2, x += ", Dx=" + (f - (f * o + m * h) + w) + ", Dy=" + (m - (f * l + m * _) + b) + ")";
                            else {
                                var P, S, R, k = 8 > c ? 1 : -1;
                                for (f = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + w), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), _t = 0; 4 > _t; _t++) S = G[_t], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : V(this.t, S, parseFloat(P), P.replace(y, "")) || 0, R = i !== s[S] ? 2 > _t ? -s.ieOffsetX : -s.ieOffsetY : 2 > _t ? f - s.ieOffsetX : m - s.ieOffsetY, u[S] = (s[S] = Math.round(i - R * (0 === _t || 2 === _t ? 1 : k))) + "px";
                                x += ", sizingMethod='auto expand')"
                            }
                            u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, x) : x + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === x.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(") && u.removeAttribute("filter"))
                        }
                    },
                    Tt = function() {
                        var t, e, i, s, r, n, a, o, h, l, _, u, f, c, m, d, g, v, y, T, x, w, b, P, S, R, k, A = this.data,
                            C = this.t.style,
                            O = A.rotation,
                            M = A.scaleX,
                            D = A.scaleY,
                            I = A.scaleZ;
                        if (p && (S = C.top ? "top" : C.bottom ? "bottom" : parseFloat(j(this.t, "top", null, !1)) ? "bottom" : "top", x = j(this.t, S, null, !1), R = parseFloat(x) || 0, k = x.substr((R + "").length) || "px", A._ffFix = !A._ffFix, C[S] = (A._ffFix ? R + .05 : R - .05) + k), O || A.skewX) y = Math.cos(O), T = Math.sin(O), t = y, r = T, A.skewX && (O -= A.skewX, y = Math.cos(O), T = Math.sin(O)), e = -T, n = y;
                        else {
                            if (!A.rotationY && !A.rotationX && 1 === I) return void(C[ct] = "translate3d(" + A.x + "px," + A.y + "px," + A.z + "px)" + (1 !== M || 1 !== D ? " scale(" + M + "," + D + ")" : ""));
                            t = n = 1, e = r = 0
                        }
                        _ = 1, i = s = a = o = h = l = u = f = c = 0, d = A.perspective, m = d ? -1 / d : 0, g = A.zOrigin, v = 1e5, O = A.rotationY, O && (y = Math.cos(O), T = Math.sin(O), h = _ * -T, f = m * -T, i = t * T, a = r * T, _ *= y, m *= y, t *= y, r *= y), O = A.rotationX, O && (y = Math.cos(O), T = Math.sin(O), x = e * y + i * T, w = n * y + a * T, b = l * y + _ * T, P = c * y + m * T, i = e * -T + i * y, a = n * -T + a * y, _ = l * -T + _ * y, m = c * -T + m * y, e = x, n = w, l = b, c = P), 1 !== I && (i *= I, a *= I, _ *= I, m *= I), 1 !== D && (e *= D, n *= D, l *= D, c *= D), 1 !== M && (t *= M, r *= M, h *= M, f *= M), g && (u -= g, s = i * u, o = a * u, u = _ * u + g), s = (x = (s += A.x) - (s |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + s : s, o = (x = (o += A.y) - (o |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + o : o, u = (x = (u += A.z) - (u |= 0)) ? (0 | x * v + (0 > x ? -.5 : .5)) / v + u : u, C[ct] = "matrix3d(" + [(0 | t * v) / v, (0 | r * v) / v, (0 | h * v) / v, (0 | f * v) / v, (0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | c * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, s, o, u, d ? 1 + -u / d : 1].join(",") + ")"
                    },
                    xt = function() {
                        var t, e, i, s, r, n, a, o, h, l = this.data,
                            _ = this.t,
                            u = _.style;
                        p && (t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(j(_, "top", null, !1)) ? "bottom" : "top", e = j(_, t, null, !1), i = parseFloat(e) || 0, s = e.substr((i + "").length) || "px", l._ffFix = !l._ffFix, u[t] = (l._ffFix ? i + .05 : i - .05) + s), l.rotation || l.skewX ? (r = l.rotation, n = r - l.skewX, a = 1e5, o = l.scaleX * a, h = l.scaleY * a, u[ct] = "matrix(" + (0 | Math.cos(r) * o) / a + "," + (0 | Math.sin(r) * o) / a + "," + (0 | Math.sin(n) * -h) / a + "," + (0 | Math.cos(n) * h) / a + "," + l.x + "," + l.y + ")") : u[ct] = "matrix(" + l.scaleX + ",0,0," + l.scaleY + "," + l.x + "," + l.y + ")"
                    };
                pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function(t, e, i, s, n, a, o) {
                        if (s._transform) return n;
                        var h, l, _, u, p, f, c, m = s._transform = vt(t, r, !0, o.parseTransform),
                            d = t.style,
                            g = ft.length,
                            v = o,
                            y = {};
                        if ("string" == typeof v.transform && ct) _ = d.cssText, d[ct] = v.transform, d.display = "block", h = vt(t, null, !1), d.cssText = _;
                        else if ("object" == typeof v) {
                            if (h = {
                                    scaleX: J(null != v.scaleX ? v.scaleX : v.scale, m.scaleX),
                                    scaleY: J(null != v.scaleY ? v.scaleY : v.scale, m.scaleY),
                                    scaleZ: J(null != v.scaleZ ? v.scaleZ : v.scale, m.scaleZ),
                                    x: J(v.x, m.x),
                                    y: J(v.y, m.y),
                                    z: J(v.z, m.z),
                                    perspective: J(v.transformPerspective, m.perspective)
                                }, null != (c = v.directionalRotation))
                                if ("object" == typeof c)
                                    for (_ in c) v[_] = c[_];
                                else v.rotation = c;
                            h.rotation = tt("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : m.rotation * C, m.rotation, "rotation", y), gt && (h.rotationX = tt("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : m.rotationX * C || 0, m.rotationX, "rotationX", y), h.rotationY = tt("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : m.rotationY * C || 0, m.rotationY, "rotationY", y)), h.skewX = null == v.skewX ? m.skewX : tt(v.skewX, m.skewX), h.skewY = null == v.skewY ? m.skewY : tt(v.skewY, m.skewY), (l = h.skewY - m.skewY) && (h.skewX += l, h.rotation += l)
                        }
                        for (null != v.force3D && (m.force3D = v.force3D, f = !0), (p = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == v.scale || (h.scaleZ = 1); --g > -1;) i = ft[g], ((u = h[i] - m[i]) > 1e-6 || -1e-6 > u || null != O[i]) && (f = !0, n = new ht(m, i, m[i], u, n), i in y && (n.e = y[i]), n.xs0 = 0, n.plugin = a, s._overwriteProps.push(n.n));
                        return u = v.transformOrigin, (u || gt && p && m.zOrigin) && (ct ? (f = !0, i = dt, u = (u || j(t, i, r, !1, "50% 50%")) + "", n = new ht(d, i, 0, 0, n, -1, "transformOrigin"), n.b = d[i], n.plugin = a, gt ? (_ = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === _ || "0px" !== u[2]) ? parseFloat(u[2]) : _) || 0, n.xs0 = n.e = d[i] = u[0] + " " + (u[1] || "50%") + " 0px", n = new ht(m, "zOrigin", 0, 0, n, -1, n.n), n.b = _, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = d[i] = u) : H(u + "", m)), f && (s._transformType = p || 3 === this._transformType ? 3 : 2), n
                    },
                    prefix: !0
                }), pt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), pt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, f, c, m, d, g, v, y, T, x, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = U(b[h])), u = _ = j(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], f = parseFloat(u), v = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.substr((c + "").length - (0 > c ? 1 : 0)) || "") : (c = parseFloat(p), g = p.substr((c + "").length)), "" === g && (g = s[i] || v), g !== v && (T = V(t, "borderLeft", f, v), x = V(t, "borderTop", f, v), "%" === g ? (u = T / m * 100 + "%", _ = x / d * 100 + "%") : "em" === g ? (w = V(t, "borderLeft", 1, "em"), u = T / w + "em", _ = x / w + "em") : (u = T + "px", _ = x + "px"), y && (p = parseFloat(u) + c + g, l = parseFloat(_) + c + g)), a = lt(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: nt("0px 0px 0px 0px", !1, !0)
                }), pt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, f = "background-position",
                            m = r || B(t, null),
                            d = this.format((m ? c ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = j(t, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) && "none" !== p) {
                            for (o = d.split(" "), h = g.split(" "), I.setAttribute("src", p), l = 2; --l > -1;) d = o[l], (_ = -1 !== d.indexOf("%")) !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: H
                }), pt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: H
                }), pt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), pt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), pt("transformStyle", {
                    prefix: !0
                }), pt("backfaceVisibility", {
                    prefix: !0
                }), pt("margin", {
                    parser: at("marginTop,marginRight,marginBottom,marginLeft")
                }), pt("padding", {
                    parser: at("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), pt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > c ? (h = t.currentStyle, l = 8 > c ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(j(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), pt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), pt("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), pt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(j(t, "borderTopWidth", r, !1, "0px") + " " + j(t, "borderTopStyle", r, !1, "solid") + " " + j(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(rt) || ["#000"])[0]
                    }
                }), pt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new ht(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var wt = function(t) {
                    var e, i = this.t,
                        s = i.filter || j(this.data, "filter"),
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") ? (i.removeAttribute("filter"), e = !j(this.data, "filter")) : (i.filter = s.replace(/alpha\(opacity *=.+?\)/i, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? 0 === r && this.xn1 || (i.filter += " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
                };
                pt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(j(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return e = parseFloat(e), l && 1 === o && "hidden" === j(t, "visibility", r) && 0 !== e && (o = 0), N ? n = new ht(h, "opacity", o, e - o, n) : (n = new ht(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = wt), l && (n = new ht(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n)), n
                    }
                });
                var bt = function(t, e) {
                        e && (t.removeProperty ? t.removeProperty(e.replace(b, "-$1").toLowerCase()) : t.removeAttribute(e))
                    },
                    Pt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.className = 0 === t ? this.b : this.e;
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : bt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                pt("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, f, c = t.className,
                            m = t.style.cssText;
                        if (a = n._classNamePT = new ht(t, s, 0, 0, a, 2), a.setRatio = Pt, a.pr = -11, i = !0, a.b = c, _ = Z(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : c.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.className = a.e, l = W(t, _, Z(t), h, p), t.className = c, a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var St = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration) {
                        if ("all" === this.e) return this.t.style.cssText = "", void(this.t._gsTransform && delete this.t._gsTransform);
                        for (var e, i = this.t.style, s = this.e.split(","), r = s.length, n = o.transform.parse; --r > -1;) e = s[r], o[e] && (e = o[e].parse === n ? ct : o[e].p), bt(i, e)
                    }
                };
                for (pt("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new ht(t, s, 0, 0, n, 2), n.setRatio = St, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), _t = h.length; _t--;) ! function(t) {
                    if (!o[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        pt(t, {
                            parser: function(t, i, s, r, n, a, h) {
                                var l = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (E("Error: " + e + " js file not loaded."), n)
                            }
                        })
                    }
                }(h[_t]);
                h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = B(t, ""), n = this._overwriteProps;
                    var h, p, c, m, d, g, v, y, T, w = t.style;
                    if (_ && "" === w.zIndex && ("auto" === (h = j(t, "zIndex", r)) || "" === h) && (w.zIndex = 0), "string" == typeof e && (m = w.cssText, h = Z(t, r), w.cssText = m + ";" + e, h = W(t, h, Z(t)).difs, !N && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, ct ? u && (_ = !0, "" === w.zIndex && ("auto" === (v = j(t, "zIndex", r)) || "" === v) && (w.zIndex = 0), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = p; c && c._next;) c = c._next;
                        y = new ht(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && gt ? Tt : ct ? xt : yt, y.data = this._transform || vt(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (g = p._next, c = m; c && c.pr > p.pr;) c = c._next;
                            (p._prev = c ? c._prev : d) ? p._prev._next = p: m = p, (p._next = c) ? c._prev = p : d = p, p = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, h, _, u, p, f, c, m, d, g, v = t.style;
                    for (a in e) f = e[a], h = o[a], h ? i = h.parse(t, f, a, this, i, n, e) : (p = j(t, a, r) + "", d = "string" == typeof f, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && w.test(f) ? (d || (f = st(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = lt(v, a, p, f, !0, "transparent", i, 0, n)) : !d || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (_ = parseFloat(p), c = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = Q(t, a, r), c = "px") : "left" === a || "top" === a ? (_ = q(t, a, r), c = "px") : (_ = "opacity" !== a ? 0 : 1, c = "")), g = d && "=" === f.charAt(1), g ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = d ? f.substr((u + "").length) || "" : ""), "" === m && (m = s[a] || c), f = u || 0 === u ? (g ? u + _ : u) + m : e[a], c !== m && "" !== m && (u || 0 === u) && (_ || 0 === _) && (_ = V(t, a, _, c), "%" === m ? (_ /= V(t, a, 100, "%") / 100, _ > 100 && (_ = 100), !0 !== e.strictUnits && (p = _ + "%")) : "em" === m ? _ /= V(t, a, 1, "em") : (u = V(t, a, u, m), m = "px"), g && (u || 0 === u) && (f = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (f || "NaN" != f + "" && null != f) ? (i = new ht(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : p) : E("invalid " + a + " tween value: " + e[a]) : (i = new ht(v, a, _, u - _, i, 0, a, !1 !== l && ("px" === m || "zIndex" === a), 0, p, f), i.xs0 = m)) : i = lt(v, a, p, f, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = e > 0 ? 0 | e + .5 : 0 | e - .5 : 1e-6 > e && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, h._enableTransforms = function(t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || vt(this._target, r, !0)
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var Rt = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Rt(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push(Z(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Rt(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, Rt(t, l, u), o.render(i, !0), Rt(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = W(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        }
                    return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev),
                            e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(t, e) {
                    var i;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {};
                    for (i in e) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length; --s > -1;) e = i[s], this._target.setAttribute(e, this._proxy[e] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h) !== a % (h / 2) && (a = 0 > a ? a + h : a - h), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > 1e-6 || -1e-6 > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = window.GreenSockGlobals || window,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    c = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, c = !1 !== e.randomize, m = !0 === e.clamp, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = c ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), c ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), f = u; --f > -1;) a = l[f], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1))) * Math.sin((t - this._p3) * a / this._p2)
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return 1 - Math.cos(t * o)
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), c
            }, !0)
    }),
    function(t) {
        "use strict";
        var e, i, s, r, n, a = t.GreenSockGlobals || t,
            o = function(t) {
                var e, i = t.split("."),
                    s = a;
                for (e = 0; i.length > e; e++) s[i[e]] = s = s[i[e]] || {};
                return s
            },
            h = o("com.greensock"),
            l = [].slice,
            _ = function() {},
            u = {},
            p = function(e, i, s, r) {
                this.sc = u[e] ? u[e].sc : [], u[e] = this, this.gsClass = null, this.func = s;
                var n = [];
                this.check = function(h) {
                    for (var l, _, f, c, m = i.length, d = m; --m > -1;)(l = u[i[m]] || new p(i[m], [])).gsClass ? (n[m] = l.gsClass, d--) : h && l.sc.push(this);
                    if (0 === d && s)
                        for (_ = ("com.greensock." + e).split("."), f = _.pop(), c = o(_.join("."))[f] = this.gsClass = s.apply(s, n), r && (a[f] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function() {
                                return c
                            }) : "undefined" != typeof module && module.exports && (module.exports = c)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                }, this.check(!0)
            },
            f = t._gsDefine = function(t, e, i, s) {
                return new p(t, e, i, s)
            },
            c = h._class = function(t, e, i) {
                return e = e || function() {}, f(t, [], function() {
                    return e
                }, i), e
            };
        f.globals = a;
        var m = [0, 0, 1, 1],
            d = [],
            g = c("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? m.concat(e) : m
            }, !0),
            v = g.map = {},
            y = g.register = function(t, e, i, s) {
                for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (n = l[_], r = s ? c("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], v[n + "." + o] = v[o + n] = r[o] = t.getRatio ? t : t[o] || new t
            };
        for (s = g.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > -1;) s = e[i] + ",Power" + i, y(new g(null, null, 1, i), s, "easeOut", !0), y(new g(null, null, 2, i), s, "easeIn" + (0 === i ? ",easeNone" : "")), y(new g(null, null, 3, i), s, "easeInOut");
        v.linear = h.easing.Linear.easeIn, v.swing = h.easing.Quad.easeInOut;
        var T = c("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function(t, e, i, s, a) {
            a = a || 0;
            var o, h, l = this._listeners[t],
                _ = 0;
            for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) o = l[h], o.c === e && o.s === i ? l.splice(h, 1) : 0 === _ && a > o.pr && (_ = h + 1);
            l.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: a
            }), this !== r || n || r.wake()
        }, s.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return void s.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, s, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
        };
        var x = t.requestAnimationFrame,
            w = t.cancelAnimationFrame,
            b = Date.now || function() {
                return (new Date).getTime()
            },
            P = b();
        for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > -1 && !x;) x = t[e[i] + "RequestAnimationFrame"], w = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
        c("Ticker", function(t, e) {
            var i, s, a, o, h, l = this,
                u = b(),
                p = !1 !== e && x,
                f = function(t) {
                    P = b(), l.time = (P - u) / 1e3;
                    var e, r = l.time - h;
                    (!i || r > 0 || !0 === t) && (l.frame++, h += r + (r >= o ? .004 : o - r), e = !0), !0 !== t && (a = s(f)), e && l.dispatchEvent("tick")
                };
            T.call(l), this.time = this.frame = 0, this.tick = function() {
                f(!0)
            }, this.sleep = function() {
                null != a && (p && w ? w(a) : clearTimeout(a), s = _, a = null, l === r && (n = !1))
            }, this.wake = function() {
                null !== a && l.sleep(), s = 0 === i ? _ : p && x ? x : function(t) {
                    return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                }, l === r && (n = !0), f(2)
            }, this.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), h = this.time + o, void l.wake()) : i
            }, this.useRAF = function(t) {
                return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
            }, l.fps(t), setTimeout(function() {
                p && (!a || 5 > l.frame) && l.useRAF(!1)
            }, 1500)
        }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
        var S = c("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, E) {
                n || r.wake();
                var i = this.vars.useFrames ? L : E;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        r = S.ticker = new h.Ticker, s = S.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var R = function() {
            b() - P > 2e3 && r.wake(), setTimeout(R, 2e3)
        };
        R(), s.play = function(t, e) {
            return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return arguments.length && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, s.reverse = function(t, e) {
            return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {}, s.invalidate = function() {
            return this
        }, s._enabled = function(t, e) {
            return n || r.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (n || r.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        a = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? s - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                        for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
            }
            return this
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                n || t || r.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === s || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var k = c("core.SimpleTimeline", function(t) {
            S.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = k.prototype = new S, s.constructor = k, s.kill()._gc = !1, s._first = s._last = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, s.rawTime = function() {
            return n || r.wake(), this._totalTime
        };
        var A = c("TweenLite", function(e, i, s) {
                if (S.call(this, i, s), this.render = A.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : A.selector(e) || e;
                var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    h = this.vars.overwrite;
                if (this._overwrite = h = null == h ? N[A.defaultOverwrite] : "number" == typeof h ? h >> 0 : N[h], (o || e instanceof Array) && "number" != typeof e[0])
                    for (this._targets = a = l.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(l.call(n, 0))) : (this._siblings[r] = z(n, this, !1), 1 === h && this._siblings[r].length > 1 && Y(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = a[r--] = A.selector(n)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                else this._propLookup = {}, this._siblings = z(e, this, !1), 1 === h && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
            }, !0),
            C = function(e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            O = function(t, e) {
                var i, s = {};
                for (i in t) X[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!D[i] || D[i] && D[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        s = A.prototype = new S, s.constructor = A, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = !1, A.version = "1.10.2", A.defaultEase = s._ease = new g(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = r, A.autoSleep = !0, A.selector = t.$ || t.jQuery || function(e) {
            return t.$ ? (A.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
        };
        var M = A._internals = {},
            D = A._plugins = {},
            I = A._tweenLookup = {},
            F = 0,
            X = M.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            N = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            L = S._rootFramesTimeline = new k,
            E = S._rootTimeline = new k;
        E._startTime = r.time, L._startTime = r.frame, E._active = L._active = !0, S._updateRoot = function() {
            if (E.render((r.time - E._startTime) * E._timeScale, !1, !1), L.render((r.frame - L._startTime) * L._timeScale, !1, !1), !(r.frame % 120)) {
                var t, e, i;
                for (i in I) {
                    for (e = I[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete I[i]
                }
                if ((!(i = E._first) || i._paused) && A.autoSleep && !L._first && 1 === r._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || r.sleep()
                }
            }
        }, r.addEventListener("tick", S._updateRoot);
        var z = function(t, e, i) {
                var s, r, n = t._gsTweenID;
                if (I[n || (t._gsTweenID = n = "t" + F++)] || (I[n] = {
                        target: t,
                        tweens: []
                    }), e && (s = I[n].tweens, s[r = s.length] = e, i))
                    for (; --r > -1;) s[r] === e && s.splice(r, 1);
                return I[n].tweens
            },
            Y = function(t, e, i, s, r) {
                var n, a, o, h;
                if (1 === s || s >= 4) {
                    for (h = r.length, n = 0; h > n; n++)
                        if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var l, _ = e._startTime + 1e-10,
                    u = [],
                    p = 0,
                    f = 0 === e._duration;
                for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || U(e, 0, f), 0 === U(o, l, f) && (u[p++] = o)) : _ >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + 1e-10 > _ && ((f || !o._initted) && 2e-10 >= _ - o._startTime || (u[p++] = o)));
                for (n = p; --n > -1;) o = u[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            U = function(t, e, i) {
                for (var s = t._timeline, r = s._timeScale, n = t._startTime, a = 1e-10; s._timeline;) {
                    if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * a > n - e ? a : (n += t.totalDuration() / t._timeScale / r) > e + a ? 0 : n - e - a
            };
        s._init = function() {
            var t, e, i, s, r = this.vars,
                n = this._overwrittenProps,
                a = this._duration,
                o = r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), r.startAt.overwrite = 0, r.startAt.immediateRender = !0, this._startAt = A.to(this.target, 0, r.startAt), o)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== a) return
            } else if (r.runBackwards && r.immediateRender && 0 !== a)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else if (0 === this._time) {
                i = {};
                for (s in r) X[s] && "autoCSS" !== s || (i[s] = r[s]);
                return i.overwrite = 0, void(this._startAt = A.to(this.target, 0, i))
            }
            if (this._ease = h ? h instanceof g ? r.easeParams instanceof Array ? h.config.apply(h, r.easeParams) : h : "function" == typeof h ? new g(h, r.easeParams) : v[h] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], n ? n[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, n);
            if (e && A._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, s, r) {
            var n, a, o, h, l, _;
            if (null == e) return !1;
            this.vars.css || e.style && e !== t && e.nodeType && D.css && !1 !== this.vars.autoCSS && O(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], X[n]) _ instanceof Array && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                else if (D[n] && (h = new D[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = l = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: n,
                            pg: !0,
                            pr: h._priority
                        }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = l = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                l && l._next && (l._next._prev = l)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Y(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o
        }, s.render = function(t, e, i) {
            var s, r, n, a = this._time;
            if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (r = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === this._duration && this._rawPrevTime > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var o = t / this._duration,
                    h = this._easeType,
                    l = this._easePower;
                (1 === h || 3 === h && o >= .5) && (o = 1 - o), 3 === h && (o *= 2), 1 === l ? o *= o : 2 === l ? o *= o * o : 3 === l ? o *= o * o * o : 4 === l && (o *= o * o * o * o), this.ratio = 1 === h ? 1 - o : 2 === h ? o : .5 > t / this._duration ? o / 2 : 1 - o / 2
            } else this.ratio = this._ease.getRatio(t / this._duration);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / this._duration) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d)), r && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || d)))
            }
        }, s._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : A.selector(e) || e;
            var i, s, r, n, a, o, h, l;
            if ((e instanceof Array || C(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    h = t || a, l = t !== s && "all" !== s && t !== a && (null == t || !0 !== t._tempKill);
                    for (r in h)(n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, s._enabled = function(t, e) {
            if (n || r.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = z(s[i], this, !0);
                else this._siblings = z(this.target, this, !0)
            }
            return S.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && A._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, A.to = function(t, e, i) {
            return new A(t, e, i)
        }, A.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(t, e, i)
        }, A.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new A(t, e, s)
        }, A.delayedCall = function(t, e, i, s, r) {
            return new A(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, A.set = function(t, e) {
            return new A(t, 0, e)
        }, A.killTweensOf = A.killDelayedCallsTo = function(t, e) {
            for (var i = A.getTweensOf(t), s = i.length; --s > -1;) i[s]._kill(e, t)
        }, A.getTweensOf = function(t) {
            if (null == t) return [];
            t = "string" != typeof t ? t : A.selector(t) || t;
            var e, i, s, r;
            if ((t instanceof Array || C(t)) && "number" != typeof t[0]) {
                for (e = t.length, i = []; --e > -1;) i = i.concat(A.getTweensOf(t[e]));
                for (e = i.length; --e > -1;)
                    for (r = i[e], s = e; --s > -1;) r === i[s] && i.splice(e, 1)
            } else
                for (i = z(t).concat(), e = i.length; --e > -1;) i[e]._gc && i.splice(e, 1);
            return i
        };
        var B = c("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = B.prototype
        }, !0);
        if (s = B.prototype, B.version = "1.10.1", B.API = 2, s._firstPT = null, s._addTween = function(t, e, i, s, r, n) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: n
                }, o._next && (o._next._prev = o), o) : void 0
            }, s.setRatio = function(t) {
                for (var e, i = this._firstPT; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, s._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, s._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, A._onPluginEvent = function(t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, B.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === B.API && (D[(new t[e])._propName] = t[e]);
                return !0
            }, f.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    r = t.overwriteProps,
                    n = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = c("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        B.call(this, i, s), this._overwriteProps = r || []
                    }, !0 === t.global),
                    o = a.prototype = new B(i);
                o.constructor = a, a.API = t.API;
                for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, B.activate([a]), a
            }, e = t._gsQueue) {
            for (i = 0; e.length > i; i++) e[i]();
            for (s in u) u[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        n = !1
    }(window);
! function() {
    var e = {},
        o = null,
        n = !0,
        r = !1;
    try {
        "undefined" != typeof AudioContext ? o = new AudioContext : "undefined" != typeof webkitAudioContext ? o = new webkitAudioContext : n = !1
    } catch (e) {
        n = !1
    }
    if (!n)
        if ("undefined" != typeof Audio) try {
            new Audio
        } catch (e) {
            r = !0
        } else r = !0;
    if (n) {
        var t = void 0 === o.createGain ? o.createGainNode() : o.createGain();
        t.gain.value = 1, t.connect(o.destination)
    }
    var a = function(e) {
        this._volume = 1, this._muted = !1, this.usingWebAudio = n, this.ctx = o, this.noAudio = r, this._howls = [], this._codecs = e, this.iOSAutoEnable = !0
    };
    a.prototype = {
        volume: function(e) {
            var o = this;
            if ((e = parseFloat(e)) >= 0 && 1 >= e) {
                o._volume = e, n && (t.gain.value = e);
                for (var r in o._howls)
                    if (o._howls.hasOwnProperty(r) && !1 === o._howls[r]._webAudio)
                        for (var a = 0; a < o._howls[r]._audioNode.length; a++) o._howls[r]._audioNode[a].volume = o._howls[r]._volume * o._volume;
                return o
            }
            return n ? t.gain.value : o._volume
        },
        mute: function() {
            return this._setMuted(!0), this
        },
        unmute: function() {
            return this._setMuted(!1), this
        },
        _setMuted: function(e) {
            var o = this;
            o._muted = e, n && (t.gain.value = e ? 0 : o._volume);
            for (var r in o._howls)
                if (o._howls.hasOwnProperty(r) && !1 === o._howls[r]._webAudio)
                    for (var a = 0; a < o._howls[r]._audioNode.length; a++) o._howls[r]._audioNode[a].muted = e
        },
        codecs: function(e) {
            return this._codecs[e]
        },
        _enableiOSAudio: function() {
            var e = this;
            if (!o || !e._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                e._iOSEnabled = !1;
                var n = function() {
                    var r = o.createBuffer(1, 1, 22050),
                        t = o.createBufferSource();
                    t.buffer = r, t.connect(o.destination), void 0 === t.start ? t.noteOn(0) : t.start(0), setTimeout(function() {
                        (t.playbackState === t.PLAYING_STATE || t.playbackState === t.FINISHED_STATE) && (e._iOSEnabled = !0, e.iOSAutoEnable = !1, window.removeEventListener("touchend", n, !1))
                    }, 0)
                };
                return window.addEventListener("touchend", n, !1), e
            }
        }
    };
    var i = null,
        u = {};
    r || (i = new Audio, u = {
        mp3: !!i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(i.canPlayType("audio/x-mp4;") || i.canPlayType("audio/mp4;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var d = new a(u),
        l = function(e) {
            var r = this;
            r._autoplay = e.autoplay || !1, r._buffer = e.buffer || !1, r._duration = e.duration || 0, r._format = e.format || null, r._loop = e.loop || !1, r._loaded = !1, r._sprite = e.sprite || {}, r._src = e.src || "", r._pos3d = e.pos3d || [0, 0, -.5], r._volume = void 0 !== e.volume ? e.volume : 1, r._urls = e.urls || [], r._rate = e.rate || 1, r._model = e.model || null, r._onload = [e.onload || function() {}], r._onloaderror = [e.onloaderror || function() {}], r._onend = [e.onend || function() {}], r._onpause = [e.onpause || function() {}], r._onplay = [e.onplay || function() {}], r._onendTimer = [], r._webAudio = n && !r._buffer, r._audioNode = [], r._webAudio && r._setupAudioNode(), void 0 !== o && o && d.iOSAutoEnable && d._enableiOSAudio(), d._howls.push(r), r.load()
        };
    if (l.prototype = {
            load: function() {
                var e = this,
                    o = null;
                if (r) return void e.on("loaderror", new Error("No audio support."));
                for (var n = 0; n < e._urls.length; n++) {
                    var t, i;
                    if (e._format) t = e._format;
                    else {
                        if (i = e._urls[n], t = /^data:audio\/([^;,]+);/i.exec(i), t || (t = /\.([^.]+)$/.exec(i.split("?", 1)[0])), !t) return void e.on("loaderror", new Error("Could not extract format from passed URLs, please add format parameter."));
                        t = t[1].toLowerCase()
                    }
                    if (u[t]) {
                        o = e._urls[n];
                        break
                    }
                }
                if (!o) return void e.on("loaderror", new Error("No codec support for selected audio sources."));
                if (e._src = o, e._webAudio) f(e, o);
                else {
                    var l = new Audio;
                    l.addEventListener("error", function() {
                        l.error && 4 === l.error.code && (a.noAudio = !0), e.on("loaderror", {
                            type: l.error ? l.error.code : 0
                        })
                    }, !1), e._audioNode.push(l), l.src = o, l._pos = 0, l.preload = "auto", l.volume = d._muted ? 0 : e._volume * d.volume();
                    var s = function() {
                        e._duration = Math.ceil(10 * l.duration) / 10, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                            _default: [0, 1e3 * e._duration]
                        }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play(), l.removeEventListener("canplaythrough", s, !1)
                    };
                    l.addEventListener("canplaythrough", s, !1), l.load()
                }
                return e
            },
            urls: function(e) {
                var o = this;
                return e ? (o.stop(), o._urls = "string" == typeof e ? [e] : e, o._loaded = !1, o.load(), o) : o._urls
            },
            play: function(e, n) {
                var r = this;
                return "function" == typeof e && (n = e), e && "function" != typeof e || (e = "_default"), r._loaded ? r._sprite[e] ? (r._inactiveNode(function(t) {
                    t._sprite = e;
                    var a = t._pos > 0 ? t._pos : r._sprite[e][0] / 1e3,
                        i = 0;
                    r._webAudio ? (i = r._sprite[e][1] / 1e3 - t._pos, t._pos > 0 && (a = r._sprite[e][0] / 1e3 + a)) : i = r._sprite[e][1] / 1e3 - (a - r._sprite[e][0] / 1e3);
                    var u, l = !(!r._loop && !r._sprite[e][2]),
                        f = "string" == typeof n ? n : Math.round(Date.now() * Math.random()) + "";
                    if (function() {
                            var o = {
                                id: f,
                                sprite: e,
                                loop: l
                            };
                            u = setTimeout(function() {
                                !r._webAudio && l && r.stop(o.id).play(e, o.id), r._webAudio && !l && (r._nodeById(o.id).paused = !0, r._nodeById(o.id)._pos = 0, r._clearEndTimer(o.id)), r._webAudio || l || r.stop(o.id), r.on("end", f)
                            }, i / r._rate * 1e3), r._onendTimer.push({
                                timer: u,
                                id: o.id
                            })
                        }(), r._webAudio) {
                        var s = r._sprite[e][0] / 1e3,
                            _ = r._sprite[e][1] / 1e3;
                        t.id = f, t.paused = !1, c(r, [l, s, _], f), r._playStart = o.currentTime, t.gain.value = r._volume, void 0 === t.bufferSource.start ? l ? t.bufferSource.noteGrainOn(0, a, 86400) : t.bufferSource.noteGrainOn(0, a, i) : l ? t.bufferSource.start(0, a, 86400) : t.bufferSource.start(0, a, i)
                    } else {
                        if (4 !== t.readyState && (t.readyState || !navigator.isCocoonJS)) return r._clearEndTimer(f),
                            function() {
                                var o = r,
                                    a = e,
                                    i = n,
                                    u = t,
                                    d = function() {
                                        o.play(a, i), u.removeEventListener("canplaythrough", d, !1)
                                    };
                                u.addEventListener("canplaythrough", d, !1)
                            }(), r;
                        t.readyState = 4, t.id = f, t.currentTime = a, t.muted = d._muted || t.muted, t.volume = r._volume * d.volume(), setTimeout(function() {
                            t.play()
                        }, 0)
                    }
                    return r.on("play"), "function" == typeof n && n(f), r
                }), r) : ("function" == typeof n && n(), r) : (r.on("load", function() {
                    r.play(e, n)
                }), r)
            },
            pause: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.pause(e)
                }), o;
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n)
                    if (n._pos = o.pos(null, e), o._webAudio) {
                        if (!n.bufferSource || n.paused) return o;
                        n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                    } else n.pause();
                return o.on("pause"), o
            },
            stop: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.stop(e)
                }), o;
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n)
                    if (n._pos = 0, o._webAudio) {
                        if (!n.bufferSource || n.paused) return o;
                        n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                    } else isNaN(n.duration) || (n.pause(), n.currentTime = 0);
                return o
            },
            mute: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.mute(e)
                }), o;
                var n = e ? o._nodeById(e) : o._activeNode();
                return n && (o._webAudio ? n.gain.value = 0 : n.muted = !0), o
            },
            unmute: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.unmute(e)
                }), o;
                var n = e ? o._nodeById(e) : o._activeNode();
                return n && (o._webAudio ? n.gain.value = o._volume : n.muted = !1), o
            },
            volume: function(e, o) {
                var n = this;
                if ((e = parseFloat(e)) >= 0 && 1 >= e) {
                    if (n._volume = e, !n._loaded) return n.on("play", function() {
                        n.volume(e, o)
                    }), n;
                    var r = o ? n._nodeById(o) : n._activeNode();
                    return r && (n._webAudio ? r.gain.value = e : r.volume = e * d.volume()), n
                }
                return n._volume
            },
            loop: function(e) {
                var o = this;
                return "boolean" == typeof e ? (o._loop = e, o) : o._loop
            },
            sprite: function(e) {
                var o = this;
                return "object" == typeof e ? (o._sprite = e, o) : o._sprite
            },
            pos: function(e, n) {
                var r = this;
                if (!r._loaded) return r.on("load", function() {
                    r.pos(e)
                }), "number" == typeof e ? r : r._pos || 0;
                e = parseFloat(e);
                var t = n ? r._nodeById(n) : r._activeNode();
                if (t) return e >= 0 ? (r.pause(n), t._pos = e, r.play(t._sprite, n), r) : r._webAudio ? t._pos + (o.currentTime - r._playStart) : t.currentTime;
                if (e >= 0) return r;
                for (var a = 0; a < r._audioNode.length; a++)
                    if (r._audioNode[a].paused && 4 === r._audioNode[a].readyState) return r._webAudio ? r._audioNode[a]._pos : r._audioNode[a].currentTime
            },
            pos3d: function(e, o, n, r) {
                var t = this;
                if (o = void 0 !== o && o ? o : 0, n = void 0 !== n && n ? n : -.5, !t._loaded) return t.on("play", function() {
                    t.pos3d(e, o, n, r)
                }), t;
                if (!(e >= 0 || 0 > e)) return t._pos3d;
                if (t._webAudio) {
                    var a = r ? t._nodeById(r) : t._activeNode();
                    a && (t._pos3d = [e, o, n], a.panner.setPosition(e, o, n), a.panner.panningModel = t._model || "HRTF")
                }
                return t
            },
            fade: function(e, o, n, r, t) {
                var a = this,
                    i = Math.abs(e - o),
                    u = e > o ? "down" : "up",
                    d = i / .01,
                    l = n / d;
                if (!a._loaded) return a.on("load", function() {
                    a.fade(e, o, n, r, t)
                }), a;
                a.volume(e, t);
                for (var f = 1; d >= f; f++) ! function() {
                    var e = a._volume + ("up" === u ? .01 : -.01) * f,
                        n = Math.round(1e3 * e) / 1e3,
                        i = o;
                    setTimeout(function() {
                        a.volume(n, t), n === i && r && r()
                    }, l * f)
                }()
            },
            fadeIn: function(e, o, n) {
                return this.volume(0).play().fade(0, e, o, n)
            },
            fadeOut: function(e, o, n, r) {
                var t = this;
                return t.fade(t._volume, e, o, function() {
                    n && n(), t.pause(r), t.on("end")
                }, r)
            },
            _nodeById: function(e) {
                for (var o = this, n = o._audioNode[0], r = 0; r < o._audioNode.length; r++)
                    if (o._audioNode[r].id === e) {
                        n = o._audioNode[r];
                        break
                    }
                return n
            },
            _activeNode: function() {
                for (var e = this, o = null, n = 0; n < e._audioNode.length; n++)
                    if (!e._audioNode[n].paused) {
                        o = e._audioNode[n];
                        break
                    }
                return e._drainPool(), o
            },
            _inactiveNode: function(e) {
                for (var o = this, n = null, r = 0; r < o._audioNode.length; r++)
                    if (o._audioNode[r].paused && 4 === o._audioNode[r].readyState) {
                        e(o._audioNode[r]), n = !0;
                        break
                    }
                if (o._drainPool(), !n) {
                    var t;
                    if (o._webAudio) t = o._setupAudioNode(), e(t);
                    else {
                        o.load(), t = o._audioNode[o._audioNode.length - 1];
                        var a = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
                            i = function() {
                                t.removeEventListener(a, i, !1), e(t)
                            };
                        t.addEventListener(a, i, !1)
                    }
                }
            },
            _drainPool: function() {
                var e, o = this,
                    n = 0;
                for (e = 0; e < o._audioNode.length; e++) o._audioNode[e].paused && n++;
                for (e = o._audioNode.length - 1; e >= 0 && !(5 >= n); e--) o._audioNode[e].paused && (o._webAudio && o._audioNode[e].disconnect(0), n--, o._audioNode.splice(e, 1))
            },
            _clearEndTimer: function(e) {
                for (var o = this, n = -1, r = 0; r < o._onendTimer.length; r++)
                    if (o._onendTimer[r].id === e) {
                        n = r;
                        break
                    }
                var t = o._onendTimer[n];
                t && (clearTimeout(t.timer), o._onendTimer.splice(n, 1))
            },
            _setupAudioNode: function() {
                var e = this,
                    n = e._audioNode,
                    r = e._audioNode.length;
                return n[r] = void 0 === o.createGain ? o.createGainNode() : o.createGain(), n[r].gain.value = e._volume, n[r].paused = !0, n[r]._pos = 0, n[r].readyState = 4, n[r].connect(t), n[r].panner = o.createPanner(), n[r].panner.panningModel = e._model || "equalpower", n[r].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]), n[r].panner.connect(n[r]), n[r]
            },
            on: function(e, o) {
                var n = this,
                    r = n["_on" + e];
                if ("function" == typeof o) r.push(o);
                else
                    for (var t = 0; t < r.length; t++) o ? r[t].call(n, o) : r[t].call(n);
                return n
            },
            off: function(e, o) {
                var n = this,
                    r = n["_on" + e];
                if (o) {
                    for (var t = 0; t < r.length; t++)
                        if (o === r[t]) {
                            r.splice(t, 1);
                            break
                        }
                } else n["_on" + e] = [];
                return n
            },
            unload: function() {
                for (var o = this, n = o._audioNode, r = 0; r < o._audioNode.length; r++) n[r].paused || (o.stop(n[r].id), o.on("end", n[r].id)), o._webAudio ? n[r].disconnect(0) : n[r].src = "";
                for (r = 0; r < o._onendTimer.length; r++) clearTimeout(o._onendTimer[r].timer);
                var t = d._howls.indexOf(o);
                null !== t && t >= 0 && d._howls.splice(t, 1), delete e[o._src], o = null
            }
        }, n) var f = function(o, n) {
            if (n in e) return o._duration = e[n].duration, void _(o);
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var r = atob(n.split(",")[1]), t = new Uint8Array(r.length), a = 0; a < r.length; ++a) t[a] = r.charCodeAt(a);
                s(t.buffer, o, n)
            } else {
                var i = new XMLHttpRequest;
                i.open("GET", n, !0), i.responseType = "arraybuffer", i.onload = function() {
                    s(i.response, o, n)
                }, i.onerror = function() {
                    o._webAudio && (o._buffer = !0, o._webAudio = !1, o._audioNode = [], delete o._gainNode, delete e[n], o.load())
                };
                try {
                    i.send()
                } catch (e) {
                    i.onerror()
                }
            }
        },
        s = function(n, r, t) {
            o.decodeAudioData(n, function(o) {
                o && (e[t] = o, _(r, o))
            }, function(e) {
                r.on("loaderror", e)
            })
        },
        _ = function(e, o) {
            e._duration = o ? o.duration : e._duration, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                _default: [0, 1e3 * e._duration]
            }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play()
        },
        c = function(n, r, t) {
            var a = n._nodeById(t);
            a.bufferSource = o.createBufferSource(), a.bufferSource.buffer = e[n._src], a.bufferSource.connect(a.panner), a.bufferSource.loop = r[0], r[0] && (a.bufferSource.loopStart = r[1], a.bufferSource.loopEnd = r[1] + r[2]), a.bufferSource.playbackRate.value = n._rate
        };
    "function" == typeof define && define.amd && define(function() {
        return {
            Howler: d,
            Howl: l
        }
    }), "undefined" != typeof exports && (exports.Howler = d, exports.Howl = l), "undefined" != typeof window && (window.Howler = d, window.Howl = l)
}();
var vis = function() {
    var i, e, n = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (i in n)
        if (i in document) {
            e = n[i];
            break
        }
    return function(n) {
        return n && document.addEventListener(e, n), !document[i]
    }
}();
vis(function() {
    vis() ? setTimeout(function() {
        visibleResume()
    }, 300) : visiblePause()
});
var notIE = void 0 === document.documentMode,
    isChromium = window.chrome;
notIE && !isChromium || (window.addEventListener ? (window.addEventListener("focus", function(i) {
    setTimeout(function() {
        visibleResume()
    }, 300)
}, !1), window.addEventListener("blur", function(i) {
    visiblePause()
}, !1)) : (window.attachEvent("focus", function(i) {
    setTimeout(function() {
        visibleResume()
    }, 300)
}), window.attachEvent("blur", function(i) {
    visiblePause()
})));

function visibleResume() {
    muted || manualPause || Howler.unmute()
}

function visiblePause() {
    Howler.mute()
}

function isStock() {
    var t = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
    return t && parseFloat(t[1]) < 537
}

function extGameLoad() {
    curLang = "en", curLang = curLang.toUpperCase(), preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "loader",
        file: "images/loader.png"
    }, {
        id: "loadSpinner",
        file: "images/loadSpinner.png"
    }, {
        id: "levelText",
        file: "levels.json"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets)
}

function initSplash() {
    gameState = "splash", resizeCanvas(), textDisplay || (textDisplay = new Utils.TextDisplay), gameHintsMax = assetLib.textData.levelText.text.gameHintsMax, hintTime = assetLib.textData.levelText.text.hintTime;
    var t = 0;
    aRandomLevels = new Array;
    for (var a = 0; a < textDisplay.categoryTotal; a++)
        for (var e = 0; e < textDisplay.oLevelTextData[a].aGameData.length; e++) aRandomLevels.push(t++);
    aRandomLevels = randomise(aRandomLevels), saveDataHandler = new Utils.SaveDataHandler(assetLib.textData.levelText.text.saveId), 999999 == saveDataHandler.getHints() && (saveDataHandler.setHints(assetLib.textData.levelText.text.totalHints), saveDataHandler.saveData());
    for (var i = 0, a = 1; a < saveDataHandler.aLevelStore.length; a++) 0 != saveDataHandler.aLevelStore[a] && i++;
    0 == i && (firstRun = !0), totalHints = saveDataHandler.getHints(), window.gradle_onPauseRequested = function() {
        "game" != gameState || manualPause ? muted ? overridePause = !0 : toggleMute() : toggleManualPause()
    }, window.gradle_onResumeRequested = function() {
        "game" == gameState && manualPause ? toggleManualPause() : muted && !overridePause && toggleMute(), overridePause = !1
    }, 
	localStorage.getItem("muted") && (muted = !0, toggleMute(!0)), 1 != audioType || muted || music.play(), initStartScreen()
}

function randomise(t) {
    for (var a = t.length - 1; a > 0; a--) {
        var e = Math.floor(Math.random() * (a + 1)),
            i = t[a];
        t[a] = t[e], t[e] = i
    }
    return t
}

function initStartScreen() {
    gradle.trackScreen("SCREEN_HOME"), gameState = "start", userInput.removeHitArea("moreGames"), 1 == audioType && (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, 1, {
        volume: .25,
        ease: "Linear.easeNone"
    }));
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [80, 30],
            align: [0, 0],
            id: oImageIds.settingsBut,
            noMove: !0
        },
        /*a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 0],
            align: [.5, .55],
            id: oImageIds.genSmallBut,
            noMove: !0,
            text: "quickGame"
        },*/
		a = {
            oImgData: assetLib.getData("quickplay_btn"),
            aPos: [0, 0],
            align: [.5, .55],
			scale: .38,
            id: "none",
            noMove: !0,
            //text: "quickGame"
        },

        e = {
            oImgData: assetLib.getData("selectLevel_btn"),
            aPos: [0, 80],
            align: [.5, .55],
			scale: .38,
            id: "none",
            noMove: !0,
            //text: "selectLevel"
        },
        i = {
            oImgData: assetLib.getData("moreGamesBut"),
            aPos: [0, 170],
            align: [.5, .55],
            id: "none",
            scale: .38,
            noMove: !0
			
        };
    userInput.addHitArea("settingsFromStart", butEventHandler, null, "image", t), 
	userInput.addHitArea("quickGame", butEventHandler, null, "image", a), 
	userInput.addHitArea("selectLevel", butEventHandler, null, "image", e), 
	userInput.addHitArea("moreGames", butEventHandler, null, "image", i);
    var s = new Array(t, a, e, i);
    panel = new Elements.Panel(gameState, s), panel.startTween2(), previousTime = (new Date).getTime(), 
	background = new Elements.Background, 
	updateStartScreenEvent()
}

function initStartSettings(t) {
    gameState = "startSettings", prevScreen = t;
    for (var a = 0, e = 0, i = 0, s = 1; s < saveDataHandler.aLevelStore.length; s++) a += saveDataHandler.aLevelStore[s], 0 != saveDataHandler.aLevelStore[s] && i++, e++;
    oGameData = {
        gameTime: a,
        averageTime: Math.round(a / i),
        completedGames: i,
        totalGames: e
    };
    var r = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.backBut,
            noMove: !0
        },
        n = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-70, -30],
            align: [1, 1],
            id: oImageIds.resetBut,
            noMove: !0
        },
        o = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 180],
            align: [.5, .2],
            id: oImageIds.genSmallBut,
            noMove: !0,
            text: "moreHints"
        };
    userInput.addHitArea("backFromStartSettings", butEventHandler, null, "image", r), userInput.addHitArea("resetData", butEventHandler, null, "image", n);
    var d = new Array(r, n);
    if (window.hasIap && (userInput.addHitArea("moreHintsFromStartSettings", butEventHandler, null, "image", o), d.push(MoreHintsBut)), 1 == audioType) {
        var h = oImageIds.muteBut0;
        muted && (h = oImageIds.muteBut1);
        var g = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-70, 30],
            align: [1, 0],
            id: h,
            noMove: !0
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", g), d.push(g)
    }
    panel = new Elements.Panel(gameState, d), panel.startTween2(), previousTime = (new Date).getTime(), background = new Elements.Background, updateStartSettingsEvent()
}

function initCategorySelect() {
    gradle.trackScreen("SCREEN_LEVELSELECT", "CATEGORIES"), gameState = "categorySelect", multiButId = 0;
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.settingsBut,
            noMove: !0
        },
        a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, -30],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0
        };
    userInput.addHitArea("settingsFromCategorySelect", butEventHandler, null, "image", t), userInput.addHitArea("backFromCategorySelect", butEventHandler, null, "image", a), userInput.addHitArea("categorySelectTouch", butEventHandler, null, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0);
    var e = new Array(t, a);
    panel = new Elements.Panel(gameState, e), panel.startTween2(), previousTime = (new Date).getTime(), background = new Elements.Background, updateCategorySelectScreenEvent()
}

function initGameSelect(t) {
    gradle.trackScreen("SCREEN_LEVELSELECT", "CATEGORY_" + t), gameState = "gameSelect", categoryId = t, multiButId = 0;
    try {
        //window.simpleHighscoreAPI.listCategoryScore(categoryId, getAPIDataForGameSelect)
		getAPIDataForGameSelect();
    } catch (t) {
        console.log(t)
    }
}

function getAPIDataForGameSelect(t) {
    oRankData = t;
    var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.settingsBut,
            noMove: !0
        },
        e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, -30],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0
        };
    userInput.addHitArea("settingsFromGameSelect", butEventHandler, null, "image", a), userInput.addHitArea("backFromGameSelect", butEventHandler, null, "image", e), userInput.addHitArea("gameSelectTouch", butEventHandler, null, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0);
    var i = new Array(a, e);
    panel = new Elements.Panel(gameState, i), background = new Elements.Background, panel.startTween2(), previousTime = (new Date).getTime(), updateGameSelectScreenEvent()
}

function initGame() {
    if (gameState = "game", 0 == gameType) {
        for (var t = 0, a = 0; a < textDisplay.categoryTotal; a++)
            for (var e = 0; e < textDisplay.oLevelTextData[a].aGameData.length; e++) t == aRandomLevels[randomLevelId] && (categoryId = a, gameId = e), t++;
        ++randomLevelId >= aRandomLevels.length && (randomLevelId = 0)
    }
    gradle.trackEvent("EVENT_LEVELSTART", {
        levelName: categoryId + "_" + gameId
    }), gradle.trackScreen("SCREEN_LEVEL"), gameTime = 0, gameHints = Math.min(totalHints, gameHintsMax), tempGameTime = 0, starGoneCount = 0, gridSize = textDisplay.oLevelTextData[categoryId].aGameData[gameId].gridSize, aWordGrid = new Array;
    for (var a = 0; a < gridSize; a++) {
        aWordGrid[a] = new Array;
        for (var e = 0; e < gridSize; e++) aWordGrid[a][e] = ""
    }
    if (fillWordGrid(), wordLineHandler = new Elements.WordLineHandler, firstRun) {
        var i = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [267, -160],
                align: [0, 1],
                id: oImageIds.genSmallBut,
                noMove: !0,
                text: "ok"
            },
            s = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [70, -30],
                align: [0, 1],
                id: oImageIds.hintBut,
                noMove: !0
            };
        userInput.addHitArea("hintOk", butEventHandler, null, "image", i);
        var r = new Array(i, s);
        clockRunning = !1
    } else {
        clockRunning = !0;
        var n = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.settingsBut,
            noMove: !0
        };
        userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", n, !0);
        var s = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, -30],
            align: [0, 1],
            id: oImageIds.hintBut,
            noMove: !0
        };
        userInput.addHitArea("hintFromGame", butEventHandler, null, "image", s, !0);
        var r = new Array(n, s);
        userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: !0,
            multiTouch: !0
        }, "rect", {
            aRect: [0, 0, canvas.width, canvas.height]
        }, !0)
    }
    aEffects = new Array, panel = new Elements.Panel(gameState, r), panel.startTween2(), previousTime = (new Date).getTime(), background = new Elements.Background, updateGameEvent()
}

function initGameSettings() {
    gradle.trackScreen("SCREEN_SETTINGS"), gameState = "gameSettings";
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.backBut,
            noMove: !0
        },
	
        a = {
            oImgData: assetLib.getData("restart_btn"),
            aPos: [0, -80],
            align: [.5, .5],
			scale: .38,
            id: "none",
            noMove: !0,
            //text: "restart"
        },
        e = {
            oImgData: assetLib.getData("quit_btn"),
            aPos: [0, 0],
            align: [.5, .5],
			scale: .38,
            id: "none",
            noMove: !0,
            //text: "quit"
        },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 80],
            align: [.5, .5],
            id: oImageIds.genSmallBut,
            noMove: !0,
            text: "moreHints"
        };
    userInput.addHitArea("backFromGameSettings", butEventHandler, null, "image", t), userInput.addHitArea("restartGame", butEventHandler, null, "image", a), userInput.addHitArea("quitGame", butEventHandler, null, "image", e);
    var s = new Array(t, a, e);
    if (window.hasIap && (userInput.addHitArea("moreHintsFromGameSettings", butEventHandler, null, "image", i), s.push(i)), 1 == audioType) {
        var r = oImageIds.muteBut0;
        muted && (r = oImageIds.muteBut1);
        var n = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-70, 30],
            align: [1, 0],
            id: r,
            noMove: !0
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", n), s.push(n)
    }
    panel = new Elements.Panel(gameState, s), panel.startTween2(), previousTime = (new Date).getTime(), background = new Elements.Background, updateGameSettingsEvent()
}

function initGameCompleteSettings() {
    gameState = "gameCompleteSettings";
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.backBut,
            noMove: !0
        },
        a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, -40],
            align: [.5, .5],
            id: oImageIds.genSmallBut,
            noMove: !0,
            text: "restart"
        },
        e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 40],
            align: [.5, .5],
            id: oImageIds.genSmallBut,
            noMove: !0,
            text: "quit"
        };
    userInput.addHitArea("backFromGameCompleteSettings", butEventHandler, null, "image", t), userInput.addHitArea("restartGame", butEventHandler, null, "image", a), userInput.addHitArea("quitGame", butEventHandler, null, "image", e);
    var i = new Array(t, a, e);
    if (1 == audioType) {
        var s = oImageIds.muteBut0;
        muted && (s = oImageIds.muteBut1);
        var r = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [-70, 30],
            align: [1, 0],
            id: s,
            noMove: !0
        };
        userInput.addHitArea("mute", butEventHandler, null, "image", r), i.push(r)
    }
    panel = new Elements.Panel(gameState, i), panel.startTween2(), previousTime = (new Date).getTime(), background = new Elements.Background, updateGameCompleteSettingsEvent()
}

function initGameComplete() {
    gameState = "gameComplete", saveDataHandler.setTime(categoryId, gameId, gameTime), totalHints = Math.min(++totalHints, totalHintsMax), saveDataHandler.setHints(totalHints), saveDataHandler.saveData(), prevGameTime = gameTime;
    try {
        //window.simpleHighscoreAPI.submitHighscore(prevGameTime, gameId, categoryId)
    } catch (t) {
        console.log(t)
    }
    fireworkTime = 0, userInput.removeHitArea("gameTouch"), userInput.removeHitArea("settingsFromGame"), userInput.removeHitArea("hintFromGame"), clockRunning = !1;
    try {
        //window.simpleHighscoreAPI.listCategoryScore(categoryId, getAPIDataForGameComplete)
		getAPIDataForGameComplete();
    } catch (t) {
        console.log(t)
    }
}

function getAPIDataForGameComplete(t) {
    gradle.trackScreen("SCREEN_LEVELRESULT"), oRankData = 0;//t;
    var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.settingsBut,
            noMove: !0,
            scale: .001
        },
        e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, -30],
            align: [0, 1],
            id: oImageIds.backBut,
            noMove: !0,
            scale: .001
        },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [0, 0],
            align: [.5, .75],
            id: oImageIds.genSmallBut,
            noMove: !0,
            scale: .001
        },
        s = new Array(a, e, i);
    panel = new Elements.Panel(gameState, s), panel.resultText = "complete" + Math.floor(4 * Math.random()), background = new Elements.Background, panel.startTween2(), panel.startTween3(), previousTime = (new Date).getTime(), updateGameCompleteEvent();
    var r = null,
        n = null,
        o = function() {
            i.scale = a.scale = e.scale = 1, i.text = "next", userInput.addHitArea("nextFromGameComplete", butEventHandler, null, "image", i), userInput.addHitArea("settingsFromGameComplete", butEventHandler, null, "image", a), userInput.addHitArea("backFromGameComplete", butEventHandler, null, "image", e)
        };
    n = setInterval(function() {
        null == (r = document.getElementById("simpleHighscoreAPIOverlay")) && (clearInterval(n), setTimeout(function() {
            gradle.trackEvent("EVENT_LEVELSUCCESS", {
                levelName: categoryId + "_" + gameId
            });
			o();
        }, 100))
    }, 100)
}

function fillWordGrid() {
    var t = assetLib.textData.levelText.text[curLang][categoryId].gameWords[gameId]["@words"].slice();
    aWordsToGuess = new Array;
    for (var a = 0; a < t.length; a++) aWordsToGuess.push({
        guessed: !1,
        word: t[a].replace(/\s/g, ""),
        lineId: null,
        oLetterGridPos: {
            startGridX: 0,
            startGridY: 0,
            endGridX: 0,
            endGridY: 0
        }
    });
    t.sort(function(t, a) {
        return a.length - t.length
    }), wordDir = Math.floor(8 * Math.random());
    for (var a = 0; a < t.length; a++)
        for (var e = addWordToGrid(t[a].replace(/\s/g, "")), i = 0; i < aWordsToGuess.length; i++) aWordsToGuess[i].word == t[a].replace(/\s/g, "") && (aWordsToGuess[i].oLetterGridPos = e);
    for (var a = 0; a < gridSize; a++)
        for (var i = 0; i < gridSize; i++) "" == aWordGrid[a][i] && (aWordGrid[a][i] = spareLetters.charAt(Math.floor(Math.random() * spareLetters.length)));
    textDisplay.getWordGridData()
}

function addWordToGrid(t) {
    var a = 0,
        e = !1,
        i = {
            startGridX: 0,
            startGridY: 0,
            endGridX: 0,
            endGridY: 0
        };
    ++wordDir;
    for (var s = wordDir % 8; ++a < 100 && !e;) switch (e = !0, a > 50 && (s = Math.floor(8 * Math.random())), s) {
        case 0:
            for (var r = Math.floor(Math.random() * gridSize), n = Math.round(Math.random() * (gridSize - t.length)), o = 0; o < t.length; o++)
                if ("" != aWordGrid[r][n + o] && aWordGrid[r][n + o] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r][n + o] = t.charAt(o), 0 == o ? (i.startGridX = r, i.startGridY = n + o) : o == t.length - 1 && (i.endGridX = r, i.endGridY = n + o);
            break;
        case 1:
            for (var r = Math.floor(Math.random() * gridSize), n = gridSize - Math.round(Math.random() * (gridSize - t.length)) - 1, o = 0; o < t.length; o++)
                if ("" != aWordGrid[r][n - o] && aWordGrid[r][n - o] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r][n - o] = t.charAt(o), 0 == o ? (i.startGridX = r, i.startGridY = n - o) : o == t.length - 1 && (i.endGridX = r, i.endGridY = n - o);
            break;
        case 2:
            for (var r = Math.round(Math.random() * (gridSize - t.length)), n = Math.floor(Math.random() * gridSize), o = 0; o < t.length; o++)
                if ("" != aWordGrid[r + o][n] && aWordGrid[r + o][n] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r + o][n] = t.charAt(o), 0 == o ? (i.startGridX = r + o, i.startGridY = n) : o == t.length - 1 && (i.endGridX = r + o, i.endGridY = n);
            break;
        case 3:
            for (var r = gridSize - Math.round(Math.random() * (gridSize - t.length)) - 1, n = Math.floor(Math.random() * gridSize), o = 0; o < t.length; o++)
                if ("" != aWordGrid[r - o][n] && aWordGrid[r - o][n] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r - o][n] = t.charAt(o), 0 == o ? (i.startGridX = r - o, i.startGridY = n) : o == t.length - 1 && (i.endGridX = r - o, i.endGridY = n);
            break;
        case 4:
            for (var r = Math.round(Math.random() * (gridSize - t.length)), n = Math.round(Math.random() * (gridSize - t.length)), o = 0; o < t.length; o++)
                if ("" != aWordGrid[r + o][n + o] && aWordGrid[r + o][n + o] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r + o][n + o] = t.charAt(o), 0 == o ? (i.startGridX = r + o, i.startGridY = n + o) : o == t.length - 1 && (i.endGridX = r + o, i.endGridY = n + o);
            break;
        case 5:
            for (var r = gridSize - Math.round(Math.random() * (gridSize - t.length)) - 1, n = gridSize - Math.round(Math.random() * (gridSize - t.length)) - 1, o = 0; o < t.length; o++)
                if ("" != aWordGrid[r - o][n - o] && aWordGrid[r - o][n - o] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r - o][n - o] = t.charAt(o), 0 == o ? (i.startGridX = r - o, i.startGridY = n - o) : o == t.length - 1 && (i.endGridX = r - o, i.endGridY = n - o);
            break;
        case 6:
            for (var r = Math.round(Math.random() * (gridSize - t.length)), n = gridSize - Math.round(Math.random() * (gridSize - t.length)) - 1, o = 0; o < t.length; o++)
                if ("" != aWordGrid[r + o][n - o] && aWordGrid[r + o][n - o] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r + o][n - o] = t.charAt(o), 0 == o ? (i.startGridX = r + o, i.startGridY = n - o) : o == t.length - 1 && (i.endGridX = r + o, i.endGridY = n - o);
            break;
        case 7:
            for (var r = gridSize - Math.round(Math.random() * (gridSize - t.length)) - 1, n = Math.round(Math.random() * (gridSize - t.length)), o = 0; o < t.length; o++)
                if ("" != aWordGrid[r - o][n + o] && aWordGrid[r - o][n + o] != t.charAt(o)) {
                    e = !1;
                    break
                }
            if (e)
                for (var o = 0; o < t.length; o++) aWordGrid[r - o][n + o] = t.charAt(o), 0 == o ? (i.startGridX = r - o, i.startGridY = n + o) : o == t.length - 1 && (i.endGridX = r - o, i.endGridY = n + o)
    }
    return a >= 100 && fillWordGrid(), s != wordDir % 8 && --wordDir, i
}

function backToGame(t) {
    if (gameState = "game", t) {
        gradle.trackEvent("EVENT_LEVELRESTART", {
            levelName: categoryId + "_" + gameId
        }), gradle.trackScreen("SCREEN_LEVEL"), gameHints = Math.min(totalHints, gameHintsMax), gameTime = 0, tempGameTime = 0, starGoneCount = 0, aWordGrid = new Array;
        for (var a = 0; a < gridSize; a++) {
            aWordGrid[a] = new Array;
            for (var e = 0; e < gridSize; e++) aWordGrid[a][e] = ""
        }
        fillWordGrid(), wordLineHandler = new Elements.WordLineHandler
    }
    clockRunning = !0;
    var i = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [70, 30],
        align: [0, 0],
        id: oImageIds.settingsBut,
        noMove: !0
    };
    userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", i, !0);
    var s = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [70, -30],
        align: [0, 1],
        id: oImageIds.hintBut,
        noMove: !0
    };
    userInput.addHitArea("hintFromGame", butEventHandler, null, "image", s, !0);
    var r = new Array(i, s);
    userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0), aEffects = new Array, panel = new Elements.Panel(gameState, r), panel.startTween2(), previousTime = (new Date).getTime(), background = new Elements.Background, updateGameEvent()
}

function butEventHandler(t, a) {
    switch (trace = t + Math.random().toString(), gradle.event(t), t) {
        case "langSelect":
            curLang = a.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), preAssetLib = new Utils.AssetLoader(curLang, [{
                id: "loader",
                file: "images/loader.png"
            }, {
                id: "loadSpinner",
                file: "images/loadSpinner.png"
            }, {
                id: "levelText",
                file: "levels.json"
            }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets);
            break;
        case "settingsFromStart":
            gradle.trackScreen("SCREEN_OTHER", "SCREEN_STATISTICS_CREDITS"), playSound("click"), userInput.removeHitArea("settingsFromStart"), userInput.removeHitArea("quickGame"), userInput.removeHitArea("selectLevel"), userInput.removeHitArea("moreGames"), initStartSettings("start");
            break;
        case "moreHintsFromStartSettings":
            playSound("click"), initHintPurchase();
            break;
        case "backFromStartSettings":
            playSound("click"), userInput.removeHitArea("moreHintsFromStartSettings"), userInput.removeHitArea("backFromStartSettings"), userInput.removeHitArea("mute"), userInput.removeHitArea("resetData"), "start" == prevScreen ? initStartScreen() : "categorySelect" == prevScreen ? initCategorySelect() : "gameSelect" == prevScreen && initGameSelect(categoryId);
            break;
        case "resetData":
            userInput.removeHitArea("moreHintsFromStartSettings"), userInput.removeHitArea("backFromStartSettings"), userInput.removeHitArea("mute"), userInput.removeHitArea("resetData"), saveDataHandler.resetData(), 999999 == saveDataHandler.getHints() && (saveDataHandler.setHints(assetLib.textData.levelText.text.totalHints), saveDataHandler.saveData()), totalHints = saveDataHandler.getHints(), gradle.trackEvent("EVENT_CUSTOM", {
                event: "EVENT_RESETDATA"
            }), firstRun = !0, initStartScreen();
            break;
        case "quickGame":
            gradle.trackEvent("EVENT_CUSTOM", {
                event: "EVENT_QUICKGAME"
            }), playSound("click"), userInput.removeHitArea("settingsFromStart"), userInput.removeHitArea("quickGame"), userInput.removeHitArea("selectLevel"), userInput.removeHitArea("moreGames"), gameType = 0, initGame();
            break;
        case "selectLevel":
            playSound("click"), userInput.removeHitArea("settingsFromStart"), userInput.removeHitArea("quickGame"), userInput.removeHitArea("selectLevel"), userInput.removeHitArea("moreGames"), initCategorySelect();
            break;
        case "moreGames":
        case "moreGamesPause":
            playSound("click");
            try {
                gradle.event('MORE_GAMES');
            } catch (t) {}
            break;
        case "backFromCategorySelect":
            playSound("click"), userInput.removeHitArea("backFromCategorySelect"), userInput.removeHitArea("settingsFromCategorySelect"), userInput.removeHitArea("categorySelectTouch"), initStartScreen();
            break;
        case "settingsFromCategorySelect":
            playSound("click"), userInput.removeHitArea("backFromCategorySelect"), userInput.removeHitArea("settingsFromCategorySelect"), userInput.removeHitArea("categorySelectTouch"), initStartSettings("categorySelect");
            break;
        case "categorySelectTouch":
            playSound("click");
            for (var e = Math.min(textDisplay.categoryTotal, Math.floor((canvas.height - 210) / 80)), i = (canvas.height - 210 - 80 * e) / 2, s = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width, r = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height, n = 0; n < e; n++)
                if (a.x > canvas.width / 2 - s / 2 && a.x < canvas.width / 2 + s / 2 && a.y > 175 - r / 2 + 80 * n + i && a.y < 175 + r / 2 + 80 * n + i) {
                    userInput.removeHitArea("backFromCategorySelect"), userInput.removeHitArea("settingsFromCategorySelect"), userInput.removeHitArea("categorySelectTouch"), initGameSelect(n + multiButId);
                    break
                }
            var s = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width,
                r = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
            multiButId > 0 && e < textDisplay.categoryTotal && a.x > canvas.width / 2 - s / 2 && a.x < canvas.width / 2 + s / 2 && a.y > 102 - r / 2 && a.y < 102 + r / 2 && (multiButId = Math.max(0, multiButId - 1));
            var s = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width,
                r = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
            multiButId < textDisplay.categoryTotal - e && e < textDisplay.categoryTotal && a.x > canvas.width / 2 - s / 2 && a.x < canvas.width / 2 + s / 2 && a.y > canvas.height - 40 - r / 2 && a.y < canvas.height - 40 + r / 2 && (multiButId = Math.min(textDisplay.categoryTotal - e, multiButId + 1));
            break;
        case "backFromGameSelect":
            playSound("click"), userInput.removeHitArea("backFromGameSelect"), userInput.removeHitArea("settingsFromGameSelect"), userInput.removeHitArea("gameSelectTouch"), initCategorySelect();
            break;
        case "settingsFromGameSelect":
            playSound("click"), userInput.removeHitArea("backFromGameSelect"), userInput.removeHitArea("settingsFromGameSelect"), userInput.removeHitArea("gameSelectTouch"), userInput.removeHitArea("mute"), initStartSettings("gameSelect");
            break;
        case "gameSelectTouch":
            playSound("click");
            for (var e = Math.min(textDisplay.oLevelTextData[categoryId].aGameData.length, Math.floor((canvas.height - 210) / 80)), i = (canvas.height - 210 - 80 * e) / 2, s = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width, r = panel.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height, n = 0; n < e; n++)
                if (a.x > canvas.width / 2 - s / 2 && a.x < canvas.width / 2 + s / 2 && a.y > 175 - r / 2 + 80 * n + i && a.y < 175 + r / 2 + 80 * n + i) {
                    userInput.removeHitArea("backFromGameSelect"), userInput.removeHitArea("settingsFromGameSelect"), userInput.removeHitArea("gameSelectTouch"), gameId = n + multiButId, gameType = 1, initGame();
                    break
                }
            var s = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width,
                r = panel.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
            multiButId > 0 && e < textDisplay.oLevelTextData[categoryId].aGameData.length && a.x > canvas.width / 2 - s / 2 && a.x < canvas.width / 2 + s / 2 && a.y > 102 - r / 2 && a.y < 102 + r / 2 && (multiButId = Math.max(0, multiButId - 1));
            var s = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width,
                r = panel.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
            multiButId < textDisplay.oLevelTextData[categoryId].aGameData.length - e && e < textDisplay.oLevelTextData[categoryId].aGameData.length && a.x > canvas.width / 2 - s / 2 && a.x < canvas.width / 2 + s / 2 && a.y > canvas.height - 40 - r / 2 && a.y < canvas.height - 40 + r / 2 && (multiButId = Math.min(textDisplay.oLevelTextData[categoryId].aGameData.length - e, multiButId + 1));
            break;
        case "hintOk":
            playSound("click"), userInput.removeHitArea("hintOk"), clockRunning = !0;
            var o = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [70, 30],
                align: [0, 0],
                id: oImageIds.settingsBut,
                noMove: !0
            };
            userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", o, !0);
            var d = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [70, -30],
                align: [0, 1],
                id: oImageIds.hintBut,
                noMove: !0
            };
            userInput.addHitArea("hintFromGame", butEventHandler, null, "image", d, !0), panel.aButs = new Array(o, d), userInput.addHitArea("gameTouch", butEventHandler, {
                isDraggable: !0,
                multiTouch: !0
            }, "rect", {
                aRect: [0, 0, canvas.width, canvas.height]
            }, !0), firstRun = !1;
            break;
        case "gameTouch":
            a.isDown && !a.isBeingDragged ? isInWordGrid(a.x, a.y) && (playSound("click"), wordLineHandler.reset(a.x, a.y), wordLineHandler.visible = !0) : a.isBeingDragged && !a.hasLeft && (gameSettingsIsOn && (wordLineHandler.visible && playSound("dragLine"), toggleGameSettingsBut(!1)), isInWordGrid(a.x, a.y) && (wordLineHandler.endX = a.x, wordLineHandler.endY = a.y)), a.isDown || (gameSettingsIsOn || toggleGameSettingsBut(!0), wordLineHandler.visible && wordLineHandler.checkLine());
            break;
        case "settingsFromGame":
            playSound("click"), userInput.removeHitArea("settingsFromGame"), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("hintFromGame"), initGameSettings();
            break;
        case "hintFromGame":
            gameHints > 0 ? (playSound("click"), gameHints--, totalHints--, gradle.trackEvent("EVENT_CUSTOM", {
                event: "EVENT_HINT",
                gameHintsLeft: gameHints,
                totalHintsLeft: totalHints
            }), saveDataHandler.setHints(totalHints), saveDataHandler.saveData(), findHintWord()) : 0 == totalHints ? (playSound("starGone"), initHintPurchase()) : playSound("starGone");
            break;
        case "moreHintsFromGameSettings":
            playSound("click"), initHintPurchase();
            break;
        case "backFromGameSettings":
            gradle.trackScreen("SCREEN_LEVEL"), playSound("click"), userInput.removeHitArea("backFromGameSettings"), userInput.removeHitArea("moreHintsFromGameSettings"), userInput.removeHitArea("restartGame"), userInput.removeHitArea("quitGame"), userInput.removeHitArea("mute"), backToGame(!1);
            break;
        case "restartGame":
            playSound("click"), userInput.removeHitArea("backFromGameSettings"), userInput.removeHitArea("moreHintsFromGameSettings"), userInput.removeHitArea("backFromGameCompleteSettings"), userInput.removeHitArea("restartGame"), userInput.removeHitArea("quitGame"), userInput.removeHitArea("mute"), gradle.trackEvent("EVENT_LEVELFAIL", {
                levelName: categoryId + "_" + gameId,
                reason: "draw"
            });
			backToGame(!0);
            break;
        case "quitGame":
            playSound("click"), userInput.removeHitArea("backFromGameSettings"), userInput.removeHitArea("moreHintsFromGameSettings"), userInput.removeHitArea("backFromGameCompleteSettings"), userInput.removeHitArea("restartGame"), userInput.removeHitArea("quitGame"), userInput.removeHitArea("mute"), gradle.trackEvent("EVENT_LEVELFAIL", {
                levelName: categoryId + "_" + gameId,
                reason: "quit"
            });
			initStartScreen();
            break;
        case "settingsFromGameComplete":
            playSound("click"), userInput.removeHitArea("backFromGameComplete"), userInput.removeHitArea("settingsFromGameComplete"), userInput.removeHitArea("nextFromGameComplete"), initGameCompleteSettings();
            break;
        case "backFromGameCompleteSettings":
            playSound("click"), userInput.removeHitArea("backFromGameCompleteSettings"), userInput.removeHitArea("restartGame"), userInput.removeHitArea("quitGame"), userInput.removeHitArea("mute"), initGameComplete();
            break;
        case "backFromGameComplete":
            playSound("click"), userInput.removeHitArea("backFromGameComplete"), userInput.removeHitArea("settingsFromGameComplete"), userInput.removeHitArea("nextFromGameComplete"), 0 == gameType ? initStartScreen() : initGameSelect(categoryId);
            break;
        case "nextFromGameComplete":
            playSound("click"), userInput.removeHitArea("backFromGameComplete"), userInput.removeHitArea("settingsFromGameComplete"), userInput.removeHitArea("nextFromGameComplete"), 0 == gameType ? initGame() : (gameId++, gameId >= textDisplay.oLevelTextData[categoryId].aGameData.length ? initCategorySelect() : initGame());
            break;
        case "mute":
            manualPause || (playSound("click"), toggleMute()), panel.aButs.pop();
            var h = oImageIds.muteBut0;
            muted && (h = oImageIds.muteBut1);
            var g = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [-70, 30],
                align: [1, 0],
                id: h,
                noMove: !0
            };
            userInput.addHitArea("mute", butEventHandler, null, "image", g), panel.aButs.push(g)
    }
}

function initHintPurchase() {
    try {
        gradle.showSelection("default", {
            overlayColor: "#000"
        }, function(t) {
            totalHints += t.value, saveDataHandler.setHints(totalHints), saveDataHandler.saveData(), "game" == gameState && 0 == gameHints && (gameHints = Math.min(totalHints, gameHintsMax))
        })
    } catch (t) {}
}

function addFirework(t, a) {
    var e = new Elements.Firework;
    e.x = t, e.y = a, e.scaleX = e.scaleY = 1, aEffects.push(e), playSound("firework" + Math.floor(3 * Math.random()))
}

function toggleGameSettingsBut(t) {
    if (gameSettingsIsOn = t) {
        var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, 30],
            align: [0, 0],
            id: oImageIds.settingsBut,
            noMove: !0
        };
        userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", a, !0);
        var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [70, -30],
            align: [0, 1],
            id: oImageIds.hintBut,
            noMove: !0
        };
        userInput.addHitArea("hintFromGame", butEventHandler, null, "image", e, !0), userInput.addHitArea("gameTouch", butEventHandler, {
            isDraggable: !0,
            multiTouch: !0
        }, "rect", {
            aRect: [0, 0, canvas.width, canvas.height]
        }, !0)
    } else userInput.removeHitArea("settingsFromGame"), userInput.removeHitArea("hintFromGame")
}

function isInWordGrid(t, a) {
    return t > gridData.x && t < gridData.x + gridData.width && a > gridData.y && a < gridData.y + gridData.width
}

function findHintWord() {
    for (var t = 0; t < aWordsToGuess.length; t++)
        if (!aWordsToGuess[t].guessed) {
            wordLineHandler.hintWord(aWordsToGuess[t].oLetterGridPos);
            break
        }
}

function checkWord(t) {
    for (var a = "", e = t.length - 1; e >= 0; e--) a += t[e];
    for (var e = 0; e < aWordsToGuess.length; e++)
        if (!aWordsToGuess[e].guessed && (aWordsToGuess[e].word == t || aWordsToGuess[e].word == a)) {
            if (aWordsToGuess[e].guessed = !0, aWordsToGuess[e].lineId = wordLineHandler.aFixedLines.length, checkGridComplete()) playSound("endGame"), initGameComplete();
            else {
                var i = (wordLineHandler.endX - wordLineHandler.startX) / 2 + wordLineHandler.startX,
                    s = (wordLineHandler.endY - wordLineHandler.startY) / 2 + wordLineHandler.startY;
                addFirework(i, s), panel.setJiggle(i, s), playSound("gotWord")
            }
            return !0
        }
    return !1
}

function checkGridComplete() {
    for (var t = !0, a = 0; a < aWordsToGuess.length; a++)
        if (!aWordsToGuess[a].guessed) {
            t = !1;
            break
        }
    return t
}

function updateGameEvent() {
    if (!manualPause && !rotatePause && "game" == gameState) {
        delta = getDelta(), clockRunning && (tempGameTime += delta, tempGameTime > 5999 && (tempGameTime = 5999), gameTime = Math.floor(100 * tempGameTime)), background.render(), wordLineHandler.update(), wordLineHandler.render(), panel.update(), panel.render();
        for (var t = 0; t < aEffects.length; t++) aEffects[t].update(), aEffects[t].render(), aEffects[t].removeMe && (aEffects.splice(t, 1), t -= 1);
        requestAnimFrame(updateGameEvent)
    }
}

function updateStartSettingsEvent() {
    rotatePause || "startSettings" != gameState || (delta = getDelta(), background.render(), panel.render(), renderMuteBut(), requestAnimFrame(updateStartSettingsEvent))
}

function updateGameSettingsEvent() {
    rotatePause || "gameSettings" != gameState || (delta = getDelta(), background.render(), panel.render(), renderMuteBut(), requestAnimFrame(updateGameSettingsEvent))
}

function updateGameCompleteSettingsEvent() {
    rotatePause || "gameCompleteSettings" != gameState || (delta = getDelta(), background.render(), panel.render(), renderMuteBut(), requestAnimFrame(updateGameCompleteSettingsEvent))
}

function updateGameCompleteEvent() {
    if (!rotatePause && "gameComplete" == gameState) {
        delta = getDelta(), background.render(), panel.render(), renderMuteBut(), fireworkTime += delta, fireworkTime > .8 && (fireworkTime = 0, addFirework(Math.random() * (canvas.width - 200) + 100, Math.random() * (canvas.height / 2 - 200) + 100));
        for (var t = 0; t < aEffects.length; t++) aEffects[t].update(), aEffects[t].render(), aEffects[t].removeMe && (aEffects.splice(t, 1), t -= 1);
        requestAnimFrame(updateGameCompleteEvent)
    }
}

function updateGameEndFail() {
    rotatePause || "gameEndFail" != gameState || (delta = getDelta(), background.render(), panel.render(), renderMuteBut(), requestAnimFrame(updateGameEndFail))
}

function updateSplashScreenEvent() {
    if (!rotatePause && "splash" == gameState) {
        if (delta = getDelta(), (splashTimer += delta) > 2.5) return 1 != audioType || muted || music.play(), void initStartScreen();
        background.render(), panel.update(), panel.render(), requestAnimFrame(updateSplashScreenEvent)
    }
}

function updateStartScreenEvent() {
    rotatePause || "start" != gameState || (delta = getDelta(), background.render(), panel.update(), panel.render(), renderMuteBut(), requestAnimFrame(updateStartScreenEvent))
}

function updateLoaderEvent() {
    rotatePause || "load" != gameState || (delta = getDelta(), assetLib.render(), requestAnimFrame(updateLoaderEvent))
}

function updateCategorySelectScreenEvent() {
    rotatePause || "categorySelect" != gameState || (delta = getDelta(), background.render(), panel.update(), panel.render(), renderMuteBut(), requestAnimFrame(updateCategorySelectScreenEvent))
}

function updateGameSelectScreenEvent() {
    rotatePause || "gameSelect" != gameState || (delta = getDelta(), background.render(), panel.update(), panel.render(), renderMuteBut(), requestAnimFrame(updateGameSelectScreenEvent))
}

function getDelta() {
    var t = (new Date).getTime(),
        a = (t - previousTime) / 1e3;
    return previousTime = t, a > .5 && (a = 0), a
}

function checkSpriteCollision(t, a) {
    var e = t.x,
        i = t.y,
        s = a.x,
        r = a.y;
    return (e - s) * (e - s) + (i - r) * (i - r) < t.radius * a.radius
}

function getScaleImageToMax(t, a) {
    return t.isSpriteSheet ? a[0] / t.oData.spriteWidth < a[1] / t.oData.spriteHeight ? Math.min(a[0] / t.oData.spriteWidth, 1) : Math.min(a[1] / t.oData.spriteHeight, 1) : a[0] / t.img.width < a[1] / t.img.height ? Math.min(a[0] / t.img.width, 1) : Math.min(a[1] / t.img.height, 1)
}

function getCentreFromTopLeft(t, a, e) {
    var i = new Array;
    return i.push(t[0] + a.oData.spriteWidth / 2 * e), i.push(t[1] + a.oData.spriteHeight / 2 * e), i
}

function loadPreAssets() {
    if (aLangs.length > 1) {
        for (var t = new Array, a = 0; a < aLangs.length; a++) t.push({
            id: "lang" + aLangs[a],
            file: "images/lang" + aLangs[a] + ".png"
        });
        preAssetLib = new Utils.AssetLoader(curLang, t, ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLangSelect)
    } else curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "loader",
        file: "images/loader.png"
    }, {
        id: "loadSpinner",
        file: "images/loadSpinner.png"
    }, {
        id: "levelText",
        file: "levels.json"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets)
}

function initLangSelect() {
    for (var t, a, e, i = 0, s = 0, r = 0; r < aLangs.length && (t = preAssetLib.getData("lang" + aLangs[r]), (r + 1) * (1 * t.img.width) + 10 * (r + 2) < canvas.width); r++) i++;
    s = Math.ceil(aLangs.length / i);
    for (var r = 0; r < aLangs.length; r++) {
        t = preAssetLib.getData("lang" + aLangs[r]), a = canvas.width / 2 - i / 2 * (1 * t.img.width) - (i - 1) / 2 * 10, a += r % i * (1 * t.img.width + 10), e = canvas.height / 2 - s / 2 * (1 * t.img.height) - (s - 1) / 2 * 10, e += Math.floor(r / i) % s * (1 * t.img.height + 10), ctx.drawImage(t.img, 0, 0, t.img.width, t.img.height, a, e, 1 * t.img.width, 1 * t.img.height);
        var n = {
            oImgData: t,
            aPos: [a + 1 * t.img.width / 2, e + 1 * t.img.height / 2],
            scale: 1,
            id: "none",
            noMove: !0
        };
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[r]
        }, "image", n)
    }
}

function initLoadAssets() {
    void 0 == preAssetLib.textData.levelText.text[curLang] && (curLang = "EN"), 
	aLoadItems = new Array;
    for (var t = 0; t < preAssetLib.textData.levelText.text[curLang].length; t++) aLoadItems.push({
        id: "bg" + t,
        file: "images/" + preAssetLib.textData.levelText.text[curLang][t]["@bgImage"]
    });
    loadAssets()
}

function loadAssets() {
    gradle.trackScreen("SCREEN_SPLASH");
    var t;
    t = 'images/more_games.png';
    
    var a = aLoadItems.concat([{
        id: "bgMain",
        file: "images/bgMain.jpg"
    }, {
        id: "bgComplete0",
        file: "images/bgComplete0.jpg"
    }, {
        id: "bgComplete1",
        file: "images/bgComplete1.jpg"
    }, {
        id: "bgComplete2",
        file: "images/bgComplete2.jpg"
    }, {
        id: "bgComplete3",
        file: "images/bgComplete3.jpg"
    }, {
        id: "bg0",
        file: "images/bg0.jpg"
    }, {
        id: "bg1",
        file: "images/bg1.jpg"
    }, {
        id: "bg2",
        file: "images/bg2.jpg"
    }, {
        id: "bg3",
        file: "images/bg3.jpg"
    }, {
        id: "bg4",
        file: "images/bg4.jpg"
    }, {
        id: "bg5",
        file: "images/bg5.jpg"
    }, {
        id: "uiButs",
        file: "images/uiButs.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 72,
                width: 265,
                height: 70
            },
            id1: {
                x: 52,
                y: 312,
                width: 50,
                height: 50
            },
            id2: {
                x: 0,
                y: 0,
                width: 448,
                height: 70
            },
            id3: {
                x: 0,
                y: 144,
                width: 122,
                height: 56
            },
            id4: {
                x: 0,
                y: 202,
                width: 122,
                height: 56
            },
            id5: {
                x: 52,
                y: 364,
                width: 50,
                height: 50
            },
            id6: {
                x: 52,
                y: 260,
                width: 50,
                height: 50
            },
            id7: {
                x: 0,
                y: 312,
                width: 50,
                height: 50
            },
            id8: {
                x: 0,
                y: 364,
                width: 50,
                height: 50
            },
            id9: {
                x: 0,
                y: 260,
                width: 50,
                height: 50
            }
        }
    }, {
        id: "uiElements",
        file: "images/uiElements.png",
        oAtlasData: {
            id0: {
                x: 0,
                y: 581,
                width: 375,
                height: 182
            },
            id1: {
                x: 0,
                y: 0,
                width: 680,
                height: 106
            },
            id10: {
                x: 587,
                y: 228,
                width: 5,
                height: 305
            },
            id11: {
                x: 495,
                y: 108,
                width: 100,
                height: 38
            },
            id12: {
                x: 479,
                y: 722,
                width: 100,
                height: 38
            },
            id13: {
                x: 495,
                y: 188,
                width: 100,
                height: 38
            },
            id14: {
                x: 435,
                y: 537,
                width: 100,
                height: 38
            },
            id15: {
                x: 435,
                y: 497,
                width: 100,
                height: 38
            },
            id16: {
                x: 479,
                y: 682,
                width: 100,
                height: 38
            },
            id17: {
                x: 377,
                y: 682,
                width: 100,
                height: 38
            },
            id18: {
                x: 495,
                y: 148,
                width: 100,
                height: 38
            },
            id19: {
                x: 537,
                y: 545,
                width: 29,
                height: 28
            },
            id2: {
                x: 0,
                y: 108,
                width: 493,
                height: 152
            },
            id20: {
                x: 556,
                y: 335,
                width: 29,
                height: 28
            },
            id21: {
                x: 377,
                y: 581,
                width: 312,
                height: 89
            },
            id22: {
                x: 435,
                y: 380,
                width: 119,
                height: 115
            },
            id23: {
                x: 435,
                y: 262,
                width: 119,
                height: 116
            },
            id24: {
                x: 537,
                y: 497,
                width: 40,
                height: 46
            },
            id25: {
                x: 377,
                y: 722,
                width: 100,
                height: 38
            },
            id26: {
                x: 0,
                y: 262,
                width: 433,
                height: 317
            },
            id3: {
                x: 556,
                y: 297,
                width: 29,
                height: 36
            },
            id4: {
                x: 556,
                y: 259,
                width: 29,
                height: 36
            },
            id5: {
                x: 377,
                y: 678,
                width: 303,
                height: 2
            },
            id6: {
                x: 377,
                y: 672,
                width: 304,
                height: 4
            },
            id7: {
                x: 495,
                y: 228,
                width: 37,
                height: 29
            },
            id8: {
                x: 534,
                y: 228,
                width: 36,
                height: 29
            },
            id9: {
                x: 594,
                y: 228,
                width: 2,
                height: 303
            }
        }
    }, {
        id: "firework",
        file: "images/firework_175x175.png",
        oAnims: {
            explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
        }
    }, {
        id: "langText",
        file: "json/text.json"
    }, {
        id: "levelText",
        file: "levels.json"
    }, {
        id: "fontData0",
        file: "json/font0.json"
    }, {
        id: "font0",
        file: "images/font0.png"
    }, {
        id: "fontData1",
        file: "json/font1.json"
    }, {
        id: "font1",
        file: "images/font1.png"
    }, {
        id: "diagBg",
        file: "images/diagBg.png"
    }, {
        id: "gridBg",
        file: "images/gridBg.png"
    }, {
        id: "moreGamesBut",
        file: t
    }, {
        id: "restart_btn",
        file: "images/restart_btn.png"
    },{
        id: "quit_btn",
        file: "images/quit_btn.png"
    },{
        id: "quickplay_btn",
        file: "images/quickplay_btn.png"
    }, {
        id: "selectLevel_btn",
        file: "images/selectLevel_btn.png"
    }
	]);
    assetLib = new Utils.AssetLoader(curLang, a, ctx, canvas.width, canvas.height), oImageIds.genSmallBut = "id0", oImageIds.settingsBut = "id1", oImageIds.genBigBut = "id2", oImageIds.downBut = "id3", oImageIds.upBut = "id4", oImageIds.backBut = "id5", oImageIds.muteBut0 = "id6", oImageIds.muteBut1 = "id7", oImageIds.resetBut = "id8", oImageIds.hintBut = "id9", oImageIds.titleVert = "id0", oImageIds.titleHoriz = "id1", oImageIds.titleBg = "id2", oImageIds.starMarkerVert0 = "id3", oImageIds.starMarkerVert1 = "id4", oImageIds.timeLineVert0 = "id5", oImageIds.timeLineVert1 = "id6", oImageIds.starMarkerHoriz0 = "id7", oImageIds.starMarkerHoriz1 = "id8", oImageIds.timeLineHoriz0 = "id9", oImageIds.timeLineHoriz1 = "id10", oImageIds.wordLine0 = "id11", oImageIds.wordLine1 = "id12", oImageIds.wordLine2 = "id13", oImageIds.wordLine3 = "id14", oImageIds.wordLine4 = "id15", oImageIds.wordLine5 = "id16", oImageIds.wordLine6 = "id17", oImageIds.wordLine7 = "id18", oImageIds.levelStar0 = "id19", oImageIds.levelStar1 = "id20", oImageIds.credits = "id21", oImageIds.bigStar0 = "id22", oImageIds.bigStar1 = "id23", oImageIds.clock = "id24", oImageIds.hintLine = "id25", oImageIds.hintBg = "id26", assetLib.onReady(initSplash), gameState = "load", previousTime = (new Date).getTime(), updateLoaderEvent()
}

function resizeCanvas() {
    var t = window.innerWidth,
        a = window.innerHeight;
    canvas.height = a, canvas.width = t, canvas.style.width = t + "px", canvas.style.height = a + "px", t > a ? canvas.height < minSquareSize ? (canvas.height = minSquareSize, canvas.width = minSquareSize * (t / a), canvasScale = minSquareSize / a) : canvas.height > maxSquareSize ? (canvas.height = maxSquareSize, canvas.width = maxSquareSize * (t / a), canvasScale = maxSquareSize / a) : canvasScale = 1 : canvas.width < minSquareSize ? (canvas.width = minSquareSize, canvas.height = minSquareSize * (a / t), canvasScale = minSquareSize / t) : canvas.width > maxSquareSize ? (canvas.width = maxSquareSize, canvas.height = maxSquareSize * (a / t), canvasScale = maxSquareSize / t) : canvasScale = 1, "game" == gameState ? userInput.addHitArea("gameTouch", butEventHandler, {
        isDraggable: !0,
        multiTouch: !0
    }, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0) : "categorySelect" == gameState ? (multiButId = 0, userInput.addHitArea("categorySelectTouch", butEventHandler, null, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0)) : "gameSelect" == gameState && (multiButId = 0, userInput.addHitArea("gameSelectTouch", butEventHandler, null, "rect", {
        aRect: [0, 0, canvas.width, canvas.height]
    }, !0))
}

function playSound(t) {
    1 == audioType && sound.play(t)
}

function toggleMute(t) {
    muted = !muted, 1 == audioType ? muted ? (Howler.mute(), musicTween && musicTween.kill(), t || (gradle.trackEvent('EVENT_VOLUMECHANGE', {
        bgmVolume: 0,
        sfxVolume: 0
    }), localStorage.setItem("muted", "1"))) : (Howler.unmute(), musicTween && musicTween.kill(), music.volume = .25, t || (window.gradle.trackEvent('EVENT_VOLUMECHANGE', {
        bgmVolume: 1,
        sfxVolume: 1
    }), localStorage.removeItem("muted"))) : 2 == audioType && (muted ? music.pause() : music.play()), renderMuteBut()
}

function renderMuteBut() {}

function toggleManualPause() {
    manualPause ? (manualPause = !1, pauseCoreOff()) : (manualPause = !0, pauseCoreOn())
}

function rotatePauseOn() {
    rotatePause = !0, ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0), userInput.pauseIsOn = !0, pauseCoreOn()
}

function rotatePauseOff() {
    rotatePause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), pauseCoreOff()
}

function pauseCoreOn() {
    switch (1 == audioType ? Howler.mute() : 2 == audioType && music.pause(), gameState) {
        case "start":
        case "help":
            break;
        case "game":
            firstRun ? userInput.removeHitArea("hintOk") : (userInput.removeHitArea("settingsFromGame"), userInput.removeHitArea("hintFromGame"), userInput.removeHitArea("gameTouch"))
    }
}

function pauseCoreOff() {
    switch (1 == audioType ? muted || Howler.unmute() : 2 == audioType && (muted || music.play()), previousTime = (new Date).getTime(), userInput.pauseIsOn = !1, gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "game":
            if (manualPause) manualPause = !1, updateGameEvent(), toggleManualPause();
            else {
                if (firstRun) {
                    var t = {
                            oImgData: assetLib.getData("uiButs"),
                            aPos: [267, -160],
                            align: [0, 1],
                            id: oImageIds.genSmallBut,
                            noMove: !0,
                            text: "ok"
                        },
                        a = {
                            oImgData: assetLib.getData("uiButs"),
                            aPos: [70, -30],
                            align: [0, 1],
                            id: oImageIds.hintBut,
                            noMove: !0
                        };
                    userInput.addHitArea("hintOk", butEventHandler, null, "image", t)
                } else {
                    var e = {
                        oImgData: assetLib.getData("uiButs"),
                        aPos: [70, 30],
                        align: [0, 0],
                        id: oImageIds.settingsBut,
                        noMove: !0
                    };
                    userInput.addHitArea("settingsFromGame", butEventHandler, null, "image", e, !0);
                    var a = {
                        oImgData: assetLib.getData("uiButs"),
                        aPos: [70, -30],
                        align: [0, 1],
                        id: oImageIds.hintBut,
                        noMove: !0
                    };
                    userInput.addHitArea("hintFromGame", butEventHandler, null, "image", a, !0), userInput.addHitArea("gameTouch", butEventHandler, {
                        isDraggable: !0,
                        multiTouch: !0
                    }, "rect", {
                        aRect: [0, 0, canvas.width, canvas.height]
                    }, !0)
                }
                updateGameEvent()
            }
    }
}
var Utils;
! function(t) {
    var a = function() {
        function t(t, a, e, i, s, r) {
            void 0 === r && (r = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.textData = {}, this.spinnerRot = 0, this.totalAssets = a.length, this.showBar = r;
            for (var n = 0; n < a.length; n++) - 1 != a[n].file.indexOf(".json") ? this.loadJSON(a[n]) : this.loadImage(a[n]);
            r && (this.oLoaderImgData = preAssetLib.getData("loader"), this.oLoadSpinnerImgData = preAssetLib.getData("loadSpinner"))
        }
        return t.prototype.render = function() {
            ctx.fillStyle = "rgba(0, 0, 0, 1)", ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.fillStyle = "#FFFFFF", ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 + 20, 300 / this.totalAssets * this.assetsLoaded, 30), ctx.drawImage(this.oLoaderImgData.img, canvas.width / 2 - this.oLoaderImgData.img.width / 2, canvas.height / 2 - this.oLoaderImgData.img.height / 2), this.spinnerRot += 3 * delta, ctx.save(), ctx.translate(canvas.width / 2 - 30, canvas.height / 2 - 20), ctx.rotate(this.spinnerRot), ctx.drawImage(this.oLoadSpinnerImgData.img, -this.oLoadSpinnerImgData.img.width / 2, -this.oLoadSpinnerImgData.img.height / 2), ctx.restore(), this.displayNumbers()
        }, t.prototype.displayNumbers = function() {
            ctx.textAlign = "left", ctx.font = "bold 40px arial", ctx.fillStyle = "#ffffff", ctx.fillText(Math.round(this.assetsLoaded / this.totalAssets * 100) + "%", canvas.width / 2 + 10, canvas.height / 2 - 3)
        }, t.prototype.loadExtraAssets = function(t, a) {
            this.showBar = !1, this.totalAssets = a.length, this.assetsLoaded = 0, this.loadedCallback = t;
            for (var e = 0; e < a.length; e++) - 1 != a[e].file.indexOf(".json") ? this.loadJSON(a[e]) : this.loadImage(a[e])
        }, t.prototype.loadJSON = function(t) {
            var a = this,
                e = new XMLHttpRequest;
            e.open("GET", t.file, !0), e.onreadystatechange = function() {
                var i = new RegExp("^file:", "i"),
                    s = i.test(e.responseURL);
					if( 4 == e.readyState && (200 == e.status || s && 0 === e.status) )
					try{
					a.textData[t.id] = JSON.parse(e.responseText)
					}
					catch(e){console.log(t.id, curLang, e.responseText, t.file);}
                4 == e.readyState && (200 == e.status || s && 0 === e.status) && 
					(
					//console.log(t.id,e.responseText), 
					a.textData[t.id] = JSON.parse(e.responseText), 
					++a.assetsLoaded, 
					a.checkLoadComplete()
					)
            }, e.send(null)
        }, t.prototype.loadImage = function(t) {
            var a = this,
                e = new Image;
            e.onload = function() {
                a.oAssetData[t.id] = {}, a.oAssetData[t.id].img = e, a.oAssetData[t.id].oData = {};
                var i = a.getSpriteSize(t.file);
                0 != i[0] ? (a.oAssetData[t.id].oData.spriteWidth = i[0], a.oAssetData[t.id].oData.spriteHeight = i[1]) : (a.oAssetData[t.id].oData.spriteWidth = a.oAssetData[t.id].img.width, a.oAssetData[t.id].oData.spriteHeight = a.oAssetData[t.id].img.height), t.oAnims && (a.oAssetData[t.id].oData.oAnims = t.oAnims), t.oAtlasData ? a.oAssetData[t.id].oData.oAtlasData = t.oAtlasData : a.oAssetData[t.id].oData.oAtlasData = {
                    none: {
                        x: 0,
                        y: 0,
                        width: a.oAssetData[t.id].oData.spriteWidth,
                        height: a.oAssetData[t.id].oData.spriteHeight
                    }
                }, ++a.assetsLoaded, a.checkLoadComplete()
            }, e.src = t.file
        }, t.prototype.getSpriteSize = function(t) {
            for (var a = new Array, e = "", i = "", s = 0, r = t.lastIndexOf("."), n = !0; n;) r--, 0 == s && this.isNumber(t.charAt(r)) ? e = t.charAt(r) + e : 0 == s && e.length > 0 && "x" == t.charAt(r) ? (r--, s = 1, i = t.charAt(r) + i) : 1 == s && this.isNumber(t.charAt(r)) ? i = t.charAt(r) + i : 1 == s && i.length > 0 && "_" == t.charAt(r) ? (n = !1, a = [parseInt(i), parseInt(e)]) : (n = !1, a = [0, 0]);
            return a
        }, t.prototype.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }, t.prototype.checkLoadComplete = function() {
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, t.prototype.onReady = function(t) {
            this.loadedCallback = t
        }, t.prototype.getImg = function(t) {
            return this.oAssetData[t].img
        }, t.prototype.getData = function(t) {
            return this.oAssetData[t]
        }, t
    }();
    t.AssetLoader = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t, a, e, i) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.alpha = 1, this.oImgData = t, this.oAnims = this.oImgData.oData.oAnims, this.fps = a, this.radius = e, this.animId = i, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2)
        }
        return t.prototype.updateAnimation = function(t) {
            this.frameInc += this.fps * t
        }, t.prototype.changeImgData = function(t, a) {
            this.oImgData = t, this.oAnims = this.oImgData.oData.oAnims, this.animId = a, this.centreX = Math.round(this.oImgData.oData.spriteWidth / 2), this.centreY = Math.round(this.oImgData.oData.spriteHeight / 2), this.resetAnim()
        }, t.prototype.resetAnim = function() {
            this.frameInc = 0
        }, t.prototype.setFrame = function(t) {
            this.fixedFrame = t
        }, t.prototype.setAnimType = function(t, a, e) {
            switch (void 0 === e && (e = !0), this.animId = a, this.animType = t, e && this.resetAnim(), t) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, t.prototype.render = function(t) {
            if (t.save(), t.translate(this.x, this.y), t.rotate(this.rotation), t.scale(this.scaleX, this.scaleY), t.globalAlpha = this.alpha, null != this.animId) {
                var a = this.oAnims[this.animId].length,
                    e = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][e % a];
                var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && e > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][a - 1], this.animId = null, null != this.animEndedFunc && this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            t.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.centreX + this.offsetX, -this.centreY + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), t.restore()
        }, t.prototype.renderSimple = function(t) {
            if (null != this.animId) {
                var a = this.oAnims[this.animId].length,
                    e = Math.floor(this.frameInc);
                this.curFrame = this.oAnims[this.animId][e % a];
                var i = this.curFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(this.curFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && e > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][a - 1], this.animId = null, null != this.animEndedFunc && this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            t.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, this.x - (this.centreX - this.offsetX) * this.scaleX, this.y - (this.centreY - this.offsetY) * this.scaleY, this.oImgData.oData.spriteWidth * this.scaleX, this.oImgData.oData.spriteHeight * this.scaleY)
        }, t
    }();
    t.AnimSprite = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t, a, e) {
            void 0 === e && (e = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = t, this.radius = a, this.setFrame(e)
        }
        return t.prototype.setFrame = function(t) {
            this.frameNum = t
        }, t.prototype.render = function(t) {
            t.save(), t.translate(this.x, this.y), t.rotate(this.rotation), t.scale(this.scaleX, this.scaleY);
            var a = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                e = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            t.drawImage(this.oImgData.img, a, e, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight), t.restore()
        }, t
    }();
    t.BasicSprite = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t, a) {
            var e = this;
            this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isBugBrowser = a, this.keyDownEvtFunc = function(t) {
                e.keyDown(t)
            }, this.keyUpEvtFunc = function(t) {
                e.keyUp(t)
            }, t.addEventListener("touchstart", function(t) {
                for (var a = 0; a < t.changedTouches.length; a++) e.hitDown(t, t.changedTouches[a].pageX, t.changedTouches[a].pageY, t.changedTouches[a].identifier)
            }, !1), t.addEventListener("touchend", function(t) {
                for (var a = 0; a < t.changedTouches.length; a++) e.hitUp(t, t.changedTouches[a].pageX, t.changedTouches[a].pageY, t.changedTouches[a].identifier)
            }, !1), t.addEventListener("touchcancel", function(t) {
                for (var a = 0; a < t.changedTouches.length; a++) e.hitCancel(t, t.changedTouches[a].pageX, t.changedTouches[a].pageY, t.changedTouches[a].identifier)
            }, !1), t.addEventListener("touchmove", function(t) {
                for (var a = 0; a < t.changedTouches.length; a++) e.move(t, t.changedTouches[a].pageX, t.changedTouches[a].pageY, t.changedTouches[a].identifier, !0)
            }, !1), t.addEventListener("mousedown", function(t) {
                e.isDown = !0, e.hitDown(t, t.pageX, t.pageY, 1)
            }, !1), t.addEventListener("mouseup", function(t) {
                e.isDown = !1, e.hitUp(t, t.pageX, t.pageY, 1)
            }, !1), t.addEventListener("mousemove", function(t) {
                e.move(t, t.pageX, t.pageY, 1, e.isDown)
            }, !1), t.addEventListener("mouseout", function(t) {
                e.isDown = !1, e.hitUp(t, Math.abs(t.pageX), Math.abs(t.pageY), 1)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }
        return t.prototype.hitDown = function(t, a, e, i) {
            if (t.preventDefault(), t.stopPropagation(), !this.pauseIsOn) {
                var s = (new Date).getTime();
                a *= canvasScale, e *= canvasScale;
                for (var r = 0; r < this.aHitAreas.length; r++)
                    if (this.aHitAreas[r].rect) {
                        var n = canvas.width * this.aHitAreas[r].align[0],
                            o = canvas.height * this.aHitAreas[r].align[1];
                        if (a > n + this.aHitAreas[r].area[0] && e > o + this.aHitAreas[r].area[1] && a < n + this.aHitAreas[r].area[2] && e < o + this.aHitAreas[r].area[3]) {
                            if (this.aHitAreas[r].aTouchIdentifiers.push(i), this.aHitAreas[r].oData.hasLeft = !1, !this.aHitAreas[r].oData.isDown) {
                                if (this.aHitAreas[r].oData.isDown = !0, this.aHitAreas[r].oData.x = a, this.aHitAreas[r].oData.y = e, s - this.prevHitTime < 500 && ("game" != gameState || "pause" == this.aHitAreas[r].id) && isBugBrowser) return;
                                this.aHitAreas[r].callback(this.aHitAreas[r].id, this.aHitAreas[r].oData)
                            }
                            break
                        }
                    }
                this.prevHitTime = s
            }
        }, t.prototype.hitUp = function(t, a, e, i) {
            if (ios9FirstTouch || (playSound("silence"), ios9FirstTouch = !0), !this.pauseIsOn) {
                t.preventDefault(), t.stopPropagation(), a *= canvasScale, e *= canvasScale;
                for (var s = 0; s < this.aHitAreas.length; s++)
                    if (this.aHitAreas[s].rect) {
                        var r = canvas.width * this.aHitAreas[s].align[0],
                            n = canvas.height * this.aHitAreas[s].align[1];
                        if (a > r + this.aHitAreas[s].area[0] && e > n + this.aHitAreas[s].area[1] && a < r + this.aHitAreas[s].area[2] && e < n + this.aHitAreas[s].area[3]) {
                            for (var o = 0; o < this.aHitAreas[s].aTouchIdentifiers.length; o++) this.aHitAreas[s].aTouchIdentifiers[o] == i && (this.aHitAreas[s].aTouchIdentifiers.splice(o, 1), o -= 1);
                            0 == this.aHitAreas[s].aTouchIdentifiers.length && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].oData.multiTouch && (this.aHitAreas[s].oData.x = a, this.aHitAreas[s].oData.y = e, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)));
                            break
                        }
                    }
            }
        }, t.prototype.hitCancel = function(t, a, e, i) {
            t.preventDefault(), t.stopPropagation(), a *= canvasScale, e *= canvasScale;
            for (var s = 0; s < this.aHitAreas.length; s++) this.aHitAreas[s].oData.isDown && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].aTouchIdentifiers = new Array, this.aHitAreas[s].oData.multiTouch && (this.aHitAreas[s].oData.x = a, this.aHitAreas[s].oData.y = e, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)))
        }, t.prototype.move = function(t, a, e, i, s) {
            if (!this.pauseIsOn && s) {
                a *= canvasScale, e *= canvasScale;
                for (var r = 0; r < this.aHitAreas.length; r++)
                    if (this.aHitAreas[r].rect) {
                        var n = canvas.width * this.aHitAreas[r].align[0],
                            o = canvas.height * this.aHitAreas[r].align[1];
                        if (a > n + this.aHitAreas[r].area[0] && e > o + this.aHitAreas[r].area[1] && a < n + this.aHitAreas[r].area[2] && e < o + this.aHitAreas[r].area[3]) this.aHitAreas[r].oData.hasLeft = !1, this.aHitAreas[r].oData.isDraggable && !this.aHitAreas[r].oData.isDown && (this.aHitAreas[r].oData.isDown = !0, this.aHitAreas[r].oData.x = a, this.aHitAreas[r].oData.y = e, this.aHitAreas[r].aTouchIdentifiers.push(i), this.aHitAreas[r].oData.multiTouch && this.aHitAreas[r].callback(this.aHitAreas[r].id, this.aHitAreas[r].oData)), this.aHitAreas[r].oData.isDraggable && (this.aHitAreas[r].oData.isBeingDragged = !0, this.aHitAreas[r].oData.x = a, this.aHitAreas[r].oData.y = e, this.aHitAreas[r].callback(this.aHitAreas[r].id, this.aHitAreas[r].oData), this.aHitAreas[r] && (this.aHitAreas[r].oData.isBeingDragged = !1));
                        else if (this.aHitAreas[r].oData.isDown && !this.aHitAreas[r].oData.hasLeft) {
                            for (var d = 0; d < this.aHitAreas[r].aTouchIdentifiers.length; d++) this.aHitAreas[r].aTouchIdentifiers[d] == i && (this.aHitAreas[r].aTouchIdentifiers.splice(d, 1), d -= 1);
                            0 == this.aHitAreas[r].aTouchIdentifiers.length && (this.aHitAreas[r].oData.hasLeft = !0, this.aHitAreas[r].oData.isBeingDragged || (this.aHitAreas[r].oData.isDown = !1), this.aHitAreas[r].oData.multiTouch && this.aHitAreas[r].callback(this.aHitAreas[r].id, this.aHitAreas[r].oData))
                        }
                    }
            }
        }, t.prototype.keyDown = function(t) {
            for (var a = 0; a < this.aKeys.length; a++) t.keyCode == this.aKeys[a].keyCode && (this.aKeys[a].oData.isDown = !0, this.aKeys[a].callback(this.aKeys[a].id, this.aKeys[a].oData))
        }, t.prototype.keyUp = function(t) {
            for (var a = 0; a < this.aKeys.length; a++) t.keyCode == this.aKeys[a].keyCode && (this.aKeys[a].oData.isDown = !1, this.aKeys[a].callback(this.aKeys[a].id, this.aKeys[a].oData))
        }, t.prototype.checkKeyFocus = function() {
            window.focus(), this.aKeys.length > 0 && (window.removeEventListener("keydown", this.keyDownEvtFunc, !1), window.removeEventListener("keyup", this.keyUpEvtFunc, !1), window.addEventListener("keydown", this.keyDownEvtFunc, !1), window.addEventListener("keyup", this.keyUpEvtFunc, !1))
        }, t.prototype.addKey = function(t, a, e, i) {
            null == e && (e = new Object), this.aKeys.push({
                id: t,
                callback: a,
                oData: e,
                keyCode: i
            }), this.checkKeyFocus()
        }, t.prototype.removeKey = function(t) {
            for (var a = 0; a < this.aKeys.length; a++) this.aKeys[a].id == t && (this.aKeys.splice(a, 1), a -= 1)
        }, t.prototype.addHitArea = function(t, a, e, i, s, r) {
            void 0 === r && (r = !1), null == e && (e = new Object), r && this.removeHitArea(t), s.scale || (s.scale = 1), s.align || (s.align = [0, 0]);
            var n = new Array;
            switch (i) {
                case "image":
                    var o;
                    o = new Array(s.aPos[0] - s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, s.aPos[1] - s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale, s.aPos[0] + s.oImgData.oData.oAtlasData[s.id].width / 2 * s.scale, s.aPos[1] + s.oImgData.oData.oAtlasData[s.id].height / 2 * s.scale), this.aHitAreas.push({
                        id: t,
                        aTouchIdentifiers: n,
                        callback: a,
                        oData: e,
                        rect: !0,
                        area: o,
                        align: s.align
                    });
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: t,
                        aTouchIdentifiers: n,
                        callback: a,
                        oData: e,
                        rect: !0,
                        area: s.aRect,
                        align: s.align
                    })
            }
        }, t.prototype.removeHitArea = function(t) {
            for (var a = 0; a < this.aHitAreas.length; a++) this.aHitAreas[a].id == t && (this.aHitAreas.splice(a, 1), a -= 1)
        }, t.prototype.resetAll = function() {
            for (var t = 0; t < this.aHitAreas.length; t++) this.aHitAreas[t].oData.isDown = !1, this.aHitAreas[t].oData.isBeingDragged = !1, this.aHitAreas[t].aTouchIdentifiers = new Array;
            this.isDown = !1
        }, t
    }();
    t.UserInput = a
}(Utils || (Utils = {}));
var Utils;
! function(t) {
    var a = function() {
        function t() {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function() {
                this.frameAverage += delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), ctx.textAlign = "left", ctx.font = "20px Helvetica", ctx.fillStyle = "#333333", ctx.beginPath(), ctx.rect(0, canvas.height - 28, 70, 28), ctx.closePath(), ctx.fill(), ctx.fillStyle = "#ffffff", ctx.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, canvas.height - 5)
            }
        }
        return t
    }();
    t.FpsMeter = a
}(Utils || (Utils = {}));
var Elements;
! function(t) {
    var a = function() {
        function t() {
            this.x = 0, this.y = 0, this.targY = 0, this.incY = 0, this.oImgData = "game" == gameState ? assetLib.getData("bg" + categoryId) : "gameComplete" == gameState ? assetLib.getData("bgComplete" + Math.floor(4 * Math.random())) : assetLib.getData("bgMain")
        }
        return t.prototype.render = function() {
            canvas.width > canvas.height ? ctx.drawImage(this.oImgData.img, 0, (1 - canvas.height / canvas.width) / 2 * this.oImgData.img.height, this.oImgData.img.width, canvas.height / canvas.width * this.oImgData.img.height, 0, 0, canvas.width, canvas.height) : ctx.drawImage(this.oImgData.img, (1 - canvas.width / canvas.height) / 2 * this.oImgData.img.width, 0, canvas.width / canvas.height * this.oImgData.img.width, this.oImgData.img.width, 0, 0, canvas.width, canvas.height)
        }, t
    }();
    t.Background = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t(t, a, e) {
            this.inc = 0, this.oSplashScreenImgData = t, this.canvasWidth = a, this.canvasHeight = e, this.posY = -this.canvasHeight, TweenLite.to(this, .5, {
                posY: 0
            })
        }
        return t.prototype.render = function() {
            this.inc += 5 * delta, ctx.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY)
        }, t
    }();
    t.Splash = a
}(Elements || (Elements = {}));
var Elements;
! function(t) {
    var a = function() {
        function t(t, a) {
            this.timer = .3, this.endTime = 0, this.posY = 0, this.numberSpace = 17, this.incY = 0, this.wordListScale = 1, this.starY0 = 0, this.starY1 = 0, this.starY2 = 0, this.oPanelsImgData = assetLib.getData("panels"), this.oUiElementsImgData = assetLib.getData("uiElements"), this.oUiButsImgData = assetLib.getData("uiButs"), this.oDiagBgImgData = assetLib.getData("diagBg"), this.oGridBgImgData = assetLib.getData("gridBg"), this.oNumbersImgData = assetLib.getData("numbers"), this.panelType = t, this.aButs = a, this.aJiggle = new Array;
            for (var e = 0; e < gridSize; e++) {
                this.aJiggle[e] = new Array;
                for (var i = 0; i < gridSize; i++) this.aJiggle[e][i] = {
                    inc: 0,
                    dist: 0,
                    vx: 0,
                    vy: 0
                }
            }
        }
        return t.prototype.update = function() {
            this.incY += 10 * delta
        }, t.prototype.startTween1 = function() {
            this.posY = 550, TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, t.prototype.startTween2 = function() {
            this.posY = 550, TweenLite.to(this, .3, {
                posY: 0,
                ease: "Quad.easeOut"
            })
        }, t.prototype.startTween3 = function() {
            this.starY0 = -50, TweenLite.to(this, 1, {
                starY0: 0,
                ease: "Bounce.easeOut"
            }), this.starY1 = -50, TweenLite.to(this, 1, {
                starY1: 0,
                delay: .1,
                ease: "Bounce.easeOut"
            }), this.starY2 = -50, TweenLite.to(this, 1, {
                starY2: 0,
                delay: .2,
                ease: "Bounce.easeOut"
            })
        }, t.prototype.setJiggle = function(t, a) {
            for (var e = 0; e < gridSize; e++) {
                this.aJiggle[e] = new Array;
                for (var i = 0; i < gridSize; i++) {
                    var s = gridData.x + e * (gridData.width / gridSize) + gridData.width / 20,
                        r = gridData.y + i * (gridData.width / gridSize) + gridData.width / 20,
                        n = (t - s) * (t - s) + (a - r) * (a - r),
                        o = Math.atan2(a - r, t - s),
                        d = Math.max(6e4 - n, 0) / 700;
                    this.aJiggle[e][i] = {
                        inc: 0,
                        dist: d / 2.5,
                        vx: d * Math.cos(o),
                        vy: d * Math.sin(o)
                    }
                }
            }
        }, t.prototype.convertTime = function(t) {
            var a = Math.floor(t / 6e3).toString(),
                e = (Math.floor(t / 100) - 60 * Math.floor(t / 6e3)).toString(),
                i = (t - (6e3 * Math.floor(t / 6e3) + 100 * (Math.floor(t / 100) - 60 * Math.floor(t / 6e3)))).toString();
            return e.length < 2 && (e = "0" + e), i.length < 2 && (i = "0" + i), a + ":" + e + ":" + i
        }, t.prototype.render = function(t) {
            switch (void 0 === t && (t = !0), t || this.addButs(ctx), this.panelType) {
                case "splash":
                    var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].height;
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 - this.posY, canvas.height / 2 - s / 2, i, s);
                    break;
                case "startSettings":
                    var r = {
                        text: "stats0",
                        addedText: " " + oGameData.completedGames + "/" + oGameData.totalGames,
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 130 + this.posY,
                        y: .2 * canvas.height,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75,
                        maxWidth: .4 * canvas.width
                    };
                    textDisplay.renderGenText(r);
                    var n = this.convertTime(oGameData.averageTime);
                    isNaN(oGameData.averageTime) && (n = "---");
                    var r = {
                        text: "stats1",
                        addedText: " " + n,
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 130 + this.posY,
                        y: .2 * canvas.height + 35,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75,
                        maxWidth: .4 * canvas.width
                    };
                    textDisplay.renderGenText(r);
                    var r = {
                        text: "stats2",
                        addedText: " " + this.convertTime(oGameData.gameTime),
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 130 + this.posY,
                        y: .2 * canvas.height + 70,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75,
                        maxWidth: .4 * canvas.width
                    };
                    textDisplay.renderGenText(r);
                    var r = {
                        text: "stats3",
                        addedText: " " + totalHints,
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 130 + this.posY,
                        y: .2 * canvas.height + 105,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75,
                        maxWidth: .4 * canvas.width
                    };
                    textDisplay.renderGenText(r);
                    var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.credits].height,
                        o = Math.min(1, (.6 * canvas.height - 30) / s);
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 * o - this.posY, .85 * canvas.height - s / 2 * o - 30, i * o, s * o);
                    break;
                case "start":
                    var d = canvas.width,
                        h = .35 * canvas.height;
                    d > this.oDiagBgImgData.img.width && (d = this.oDiagBgImgData.img.width, h *= this.oDiagBgImgData.img.width / canvas.width), ctx.drawImage(this.oDiagBgImgData.img, 0, 0, d, h, 0, .1 * canvas.height, canvas.width, .35 * canvas.height);
                    var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].height;
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, 0 - this.posY, .12 * canvas.height, canvas.width, .31 * canvas.height);
                    var a, e, i, s, a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleVert].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleVert].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleVert].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleVert].height;
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 - this.posY, .275 * canvas.height - s / 2, i, s);
                    break;
                case "categorySelect":
                    var r = {
                        text: "categorySelect",
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 + this.posY,
                        y: 27,
                        alignX: "centre",
                        alignY: "centre",
                        scale: 1,
                        maxWidth: canvas.width - 200
                    };
                    textDisplay.renderGenText(r);
                    for (var g = Math.min(textDisplay.categoryTotal, Math.floor((canvas.height - 210) / 80)), l = (canvas.height - 210 - 80 * g) / 2, m = 0; m < g; m++) {
                        var a = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].x,
                            e = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].y,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 - this.posY / (m + 1), 175 - s / 2 + 80 * m + l, i, s);
                        var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].x,
                            e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].y,
                            i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].width,
                            s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].height,
                            c = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
                        ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, canvas.width / 2 - c / 2 + 9 - this.posY / (m + 1), 175 + 80 * m + l - 19 - 3, c - 18, s + 6);
                        var r = {
                            textId: m + multiButId,
                            x: canvas.width / 2 - this.posY / (m + 1),
                            y: 175 + 80 * m + l,
                            alignX: "centre",
                            alignY: "centre",
                            scale: .75,
                            maxWidth: 400
                        };
                        textDisplay.renderGameTitleText(r)
                    }
                    if (multiButId > 0 && g < textDisplay.categoryTotal) {
                        var a = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].x,
                            e = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].y,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 + this.posY, 102 - s / 2, i, s)
                    }
                    if (multiButId < textDisplay.categoryTotal - g && g < textDisplay.categoryTotal) {
                        var a = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].x,
                            e = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].y,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 + this.posY, canvas.height - 40 - s / 2, i, s)
                    }
                    break;
                case "gameSelect":
                    var r = {
                        textId: categoryId,
                        x: canvas.width / 2 + this.posY,
                        y: 27,
                        alignX: "centre",
                        alignY: "centre",
                        scale: 1,
                        maxWidth: canvas.width - 200
                    };
                    textDisplay.renderGameTitleText(r);
                    for (var g = Math.min(textDisplay.oLevelTextData[categoryId].aGameData.length, Math.floor((canvas.height - 210) / 80)), l = (canvas.height - 210 - 80 * g) / 2, m = 0; m < g; m++) {
                        var a = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].x,
                            e = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].y,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 - this.posY / (m + 1), 175 - s / 2 + 80 * m + l, i, s);
                        var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].x,
                            e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].y,
                            i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].width,
                            s = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + (m + multiButId) % 8]].height,
                            c = this.oUiButsImgData.oData.oAtlasData[oImageIds.genBigBut].width;
                        ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, canvas.width / 2 - c / 2 + 9 - this.posY / (m + 1), 175 + 80 * m + l - 19 - 3, c - 18, s + 6);
                        var r = {
                            text: "level",
                            addedText: " " + (m + 1 + multiButId),
                            oTextData: textDisplay.oGenTextData,
                            x: canvas.width / 2 - 200 - this.posY / (m + 1),
                            y: 175 + 80 * m + l,
                            alignX: "left",
                            alignY: "centre",
                            scale: .75,
                            maxWidth: 200
                        };
                        textDisplay.renderGenText(r);
                        var u = 0,
                            D = "---";
                        if (false && oRankData[m + multiButId] && (D = oRankData[m + multiButId].rank.toString(), u = parseInt(oRankData[m + multiButId].score)), 0 == u) {
                            var r = {
                                text: "noTimeSet",
                                oTextData: textDisplay.oGenTextData,
                                x: canvas.width / 2 + 50 - this.posY / (m + 1),
                                y: 175 + 80 * m + l,
                                alignX: "left",
                                alignY: "centre",
                                scale: .7,
                                maxWidth: 160
                            };
                            //textDisplay.renderGenText(r)
                        } else {
                            var r = {
                                text: this.convertTime(u),
                                x: canvas.width / 2 - 70 - this.posY / (m + 1),
                                y: 175 + 80 * m + l - 16,
                                alignX: "centre",
                                alignY: "bottom",
                                scale: .7
                            };
                            if (textDisplay.renderDynamicText(r), parseInt(D) <= 9999999) {
                                var r = {
                                    text: "rank",
                                    addedText: D,
                                    oTextData: textDisplay.oGenTextData,
                                    x: canvas.width / 2 + 50 - this.posY / (m + 1),
                                    y: 175 + 80 * m + l,
                                    alignX: "left",
                                    alignY: "centre",
                                    scale: .7,
                                    maxWidth: 75
                                };
                                textDisplay.renderGenText(r)
                            } else {
                                var r = {
                                    text: "notRanked",
                                    oTextData: textDisplay.oGenTextData,
                                    x: canvas.width / 2 + 50 - this.posY / (m + 1),
                                    y: 175 + 80 * m + l,
                                    alignX: "left",
                                    alignY: "centre",
                                    scale: .7,
                                    maxWidth: 160
                                };
                                textDisplay.renderGenText(r)
                            }
                        }
                    }
                    if (multiButId > 0 && g < textDisplay.oLevelTextData[categoryId].aGameData.length) {
                        var a = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].x,
                            e = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].y,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].width,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.upBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 + this.posY, 102 - s / 2, i, s)
                    }
                    if (multiButId < textDisplay.oLevelTextData[categoryId].aGameData.length - g && g < textDisplay.oLevelTextData[categoryId].aGameData.length) {
                        var a = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].x,
                            e = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].y,
                            i = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].width,
                            s = this.oUiButsImgData.oData.oAtlasData[oImageIds.downBut].height;
                        ctx.drawImage(this.oUiButsImgData.img, a, e, i, s, canvas.width / 2 - i / 2 + this.posY, canvas.height - 40 - s / 2, i, s)
                    }
                    break;
                case "game":
                    var d = 450 * canvasScale,
                        h = 450 * canvasScale,
                        o = 1;
                    d > this.oGridBgImgData.img.width && (d = this.oGridBgImgData.img.width, h *= this.oGridBgImgData.img.width / canvas.width);
                    var I, v;
                    if (canvas.width < canvas.height) {
                        canvas.width / canvas.height > .65 && (o = .65 / (canvas.width / canvas.height)), gridData.width = .9 * canvas.width * o, gridData.x = canvas.width / 2 - gridData.width / 2, gridData.y = Math.max(.55 * canvas.height - gridData.width, 60), ctx.drawImage(this.oGridBgImgData.img, 0, 0, d, h, gridData.x + this.posY, gridData.y, gridData.width, gridData.width);
                        var r = {
                            textId: categoryId,
                            addedText: " " + (gameId + 1) + "/" + textDisplay.oLevelTextData[categoryId].aGameData.length,
                            x: 110 + this.posY,
                            y: 27,
                            alignX: "left",
                            alignY: "centre",
                            scale: .75,
                            maxWidth: canvas.width - 150
                        };
                        textDisplay.renderGameTitleText(r), textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 2 * 40 > canvas.height - (gridData.y + gridData.width + 100) ? this.wordListScale = (canvas.height - (gridData.y + gridData.width + 100)) / (textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 2 * 40) : this.wordListScale = 1;
                        for (var p = 40 * this.wordListScale, m = 0; m < Math.round(textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 2); m++) {
                            var r = {
                                textId: m,
                                x: gridData.width / 4 + gridData.x - this.posY,
                                y: m * p + (canvas.height - (gridData.y + gridData.width + 100)) / 2 + (gridData.y + gridData.width) - p * (textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 4) + textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords[m].blockHeight / 2,
                                alignX: "centre",
                                alignY: "centre",
                                scale: 1 * this.wordListScale,
                                maxWidth: gridData.width / 2.5
                            };
                            textDisplay.renderGameText(r)
                        }
                        for (var m = Math.round(textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 2); m < textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length; m++) {
                            var r = {
                                textId: m,
                                x: gridData.width / 4 * 3 + gridData.x - this.posY,
                                y: (m - Math.round(textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 2)) * p + (canvas.height - (gridData.y + gridData.width + 100)) / 2 + (gridData.y + gridData.width) - p * (textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 4) + textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords[m].blockHeight / 2,
                                alignX: "centre",
                                alignY: "centre",
                                scale: 1 * this.wordListScale,
                                maxWidth: gridData.width / 2.5
                            };
                            textDisplay.renderGameText(r)
                        }
                        I = canvas.width / 2 - 20 - this.posY, v = canvas.height - 42
                    } else {
                        canvas.height / canvas.width > .65 && (o = .65 / (canvas.height / canvas.width)), gridData.width = .9 * canvas.height * o, gridData.x = Math.min(.5 * canvas.width, canvas.width - gridData.width - .05 * canvas.height), gridData.y = canvas.height / 2 - gridData.width / 2, ctx.drawImage(this.oGridBgImgData.img, 0, 0, d, h, gridData.x + this.posY, gridData.y, gridData.width, gridData.width);
                        var r = {
                            textId: categoryId,
                            addedText: " " + (gameId + 1) + "/" + textDisplay.oLevelTextData[categoryId].aGameData.length,
                            x: 110 + this.posY,
                            y: 27,
                            alignX: "left",
                            alignY: "centre",
                            scale: .75,
                            maxWidth: canvas.width - gridData.width - (150 + .05 * canvas.height)
                        };
                        textDisplay.renderGameTitleText(r), 40 * textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length > .7 * canvas.height ? this.wordListScale = .7 * canvas.height / (40 * textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length) : this.wordListScale = 1;
                        for (var p = 40 * this.wordListScale, m = 0; m < textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length; m++) {
                            var r = {
                                textId: m,
                                x: gridData.x / 2 - this.posY,
                                y: m * p + canvas.height / 2 - p * (textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords.length / 2) + textDisplay.oLevelTextData[categoryId].aGameData[gameId].aWords[m].blockHeight / 2,
                                alignX: "centre",
                                alignY: "centre",
                                scale: 1 * this.wordListScale,
                                maxWidth: gridData.x - 100 - 20
                            };
                            textDisplay.renderGameText(r)
                        }
                        I = 200 - this.posY, v = canvas.height - 42
                    }
                    var r = {
                        text: "x" + gameHints,
                        x: 105 + this.posY,
                        y: canvas.height - 50,
                        alignX: "centre",
                        alignY: "bottom",
                        scale: 1
                    };
                    textDisplay.renderDynamicText(r);
                    var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].height;
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, I - 35, v - 3, .75 * i, .75 * s);
                    var r = {
                        text: this.convertTime(gameTime),
                        x: I - this.posY,
                        y: v,
                        alignX: "centre",
                        alignY: "bottom",
                        scale: .7
                    };
                    textDisplay.renderDynamicText(r);
                    var x, f, w, y;
                    w = 8, y = .75;
                    for (var m = 0; m < gridSize; m++)
                        for (var A = 0; A < gridSize; A++) {
                            this.aJiggle[m][A].inc < w ? (this.aJiggle[m][A].inc += this.aJiggle[m][A].dist * delta, x = this.aJiggle[m][A].vx * (this.aJiggle[m][A].inc / w) * (this.aJiggle[m][A].inc / w - 2) + this.aJiggle[m][A].vx, f = this.aJiggle[m][A].vy * (this.aJiggle[m][A].inc / w) * (this.aJiggle[m][A].inc / w - 2) + this.aJiggle[m][A].vy) : (x = 0, f = 0, this.aJiggle[m][A].inc = w);
                            var r = {
                                text: aWordGrid[m][A],
                                oTextData: textDisplay.oWordGridTextData,
                                x: gridData.x + m * (gridData.width / gridSize) + gridData.width / (2 * gridSize) + this.posY - Math.sin(this.aJiggle[m][A].inc / 4) * (x * y),
                                y: gridData.y + A * (gridData.width / gridSize) + gridData.width / (2 * gridSize) - Math.sin(this.aJiggle[m][A].inc / 4) * (f * y),
                                alignX: "centre",
                                alignY: "centre",
                                scale: gridData.width / 450 * Math.max(1, 11 / gridSize * .75)
                            };
                            textDisplay.renderGenText(r)
                        }
                    if (firstRun) {
                        ctx.fillStyle = "rgba(0, 0, 0, 0.75)", ctx.fillRect(0, 0, canvas.width, canvas.height - 70), ctx.fillRect(160, canvas.height - 70, canvas.width, canvas.height);
                        var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintBg].x,
                            e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintBg].y,
                            i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintBg].width,
                            s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintBg].height;
                        ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, 53 - this.posY, canvas.height - 45 - s - 5, i, s);
                        var r = {
                            text: "hintHelp0",
                            oTextData: textDisplay.oGenTextData,
                            x: 90 + this.posY,
                            y: canvas.height - 330,
                            alignX: "left",
                            alignY: "centre",
                            scale: .7,
                            maxWidth: 340
                        };
                        textDisplay.renderGenText(r);
                        var r = {
                            text: "hintHelp1",
                            addedText: " " + totalHints,
                            oTextData: textDisplay.oGenTextData,
                            x: 90 + this.posY,
                            y: canvas.height - 270,
                            alignX: "left",
                            alignY: "centre",
                            scale: .7,
                            maxWidth: 340
                        };
                        textDisplay.renderGenText(r);
                        var r = {
                            text: "hintHelp2",
                            addedText: " " + gameHints,
                            oTextData: textDisplay.oGenTextData,
                            x: 90 + this.posY,
                            y: canvas.height - 235,
                            alignX: "left",
                            alignY: "centre",
                            scale: .7,
                            maxWidth: 340
                        };
                        textDisplay.renderGenText(r)
                    }
                    break;
                case "gameComplete":
                    var r = {
                        textId: categoryId,
                        addedText: " " + (gameId + 1) + "/" + textDisplay.oLevelTextData[categoryId].aGameData.length,
                        x: 110 + this.posY,
                        y: 27,
                        alignX: "left",
                        alignY: "centre",
                        scale: .75
                    };
                    textDisplay.renderGameTitleText(r);
                    var r = {
                        text: this.resultText,
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - this.posY,
                        y: .2 * canvas.height,
                        alignX: "centre",
                        alignY: "centre",
                        scale: 1
                    };
                    textDisplay.renderGenText(r);
                    var d = canvas.width,
                        h = 160;
                    d > this.oDiagBgImgData.img.width && (d = this.oDiagBgImgData.img.width, h *= this.oDiagBgImgData.img.width / canvas.width), ctx.drawImage(this.oDiagBgImgData.img, 0, 0, d, h, 0, .4 * canvas.height - h / 2, canvas.width, h);
                    var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.titleBg].height;
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, 0 - this.posY, .4 * canvas.height - 65, canvas.width, 130);
                    var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].height;
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, canvas.width / 2 - 85 - i / 2 - this.posY, .4 * canvas.height - s / 2 * 1.3, 1.3 * i, 1.3 * s);
                    var r = {
                        text: this.convertTime(prevGameTime),
                        x: canvas.width / 2 - 42 - this.posY,
                        y: .4 * canvas.height - 25,
                        alignX: "centre",
                        alignY: "centre",
                        scale: 1.3,
                        maxWidth: 400
                    };
                    textDisplay.renderDynamicText(r);
                    var u = 0,
                        D = "---";
                    oRankData[gameId] && (D = oRankData[gameId].rank.toString(), u = parseInt(oRankData[gameId].score));
                    var a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].x,
                        e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].y,
                        i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].width,
                        s = this.oUiElementsImgData.oData.oAtlasData[oImageIds.clock].height;
                    ctx.drawImage(this.oUiElementsImgData.img, a, e, i, s, canvas.width / 2 - 220 - i / 2 - this.posY, .57 * canvas.height - 2, i, s);
                    var r = {
                        text: "best",
                        addedText: " " + this.convertTime(u),
                        oTextData: textDisplay.oGenTextData,
                        x: canvas.width / 2 - 190 - this.posY,
                        y: .57 * canvas.height + 23,
                        alignX: "left",
                        alignY: "centre",
                        scale: 1
                    };
                    if (textDisplay.renderGenText(r), parseInt(D) <= 9999999) {
                        var r = {
                            text: "rank",
                            addedText: D,
                            oTextData: textDisplay.oGenTextData,
                            x: canvas.width / 2 + 55 - this.posY,
                            y: .57 * canvas.height + 23,
                            alignX: "left",
                            alignY: "centre",
                            scale: 1,
                            maxWidth: 400
                        };
                        textDisplay.renderGenText(r)
                    } else {
                        var r = {
                            text: "notRanked",
                            oTextData: textDisplay.oGenTextData,
                            x: canvas.width / 2 + 55 - this.posY,
                            y: .57 * canvas.height + 23,
                            alignX: "left",
                            alignY: "centre",
                            scale: 1,
                            maxWidth: 400
                        };
                        textDisplay.renderGenText(r)
                    }
                    break;
                case "pause":
                    ctx.fillStyle = "rgba(0, 0, 0, 0.75)", ctx.fillRect(0, 0, canvas.width, canvas.height)
            }
            t && this.addButs(ctx)
        }, t.prototype.addButs = function(t) {
            for (var a = 0; a < this.aButs.length; a++) {
                var e = this.posY,
                    i = 0;
                0 == this.incY || this.aButs[a].noMove || (i = 3 * Math.sin(this.incY + 45 * a)), this.aButs[a].scale || (this.aButs[a].scale = 1);
                var s = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].x,
                    r = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].y,
                    n = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].width,
                    o = this.aButs[a].oImgData.oData.oAtlasData[this.aButs[a].id].height,
                    d = canvas.width * this.aButs[a].align[0],
                    h = canvas.height * this.aButs[a].align[1];
                if (t.drawImage(this.aButs[a].oImgData.img, s, r, n, o, d + this.aButs[a].aPos[0] - n / 2 * this.aButs[a].scale + e - i / 2, h + this.aButs[a].aPos[1] - o / 2 * this.aButs[a].scale + i / 2, n * this.aButs[a].scale + i, o * this.aButs[a].scale - i), this.aButs[a].text) {
                    var g = {
                        text: this.aButs[a].text,
                        oTextData: textDisplay.oGenTextData,
                        x: d + this.aButs[a].aPos[0] + e,
                        y: h + this.aButs[a].aPos[1],
                        alignX: "centre",
                        alignY: "centre",
                        scale: .8,
                        colourId: a % 8,
                        maxWidth: n - 40
                    };
                    textDisplay.renderGenText(g)
                }
            }
        }, t
    }();
    t.Panel = a
}(Elements || (Elements = {}));
var Utils;
! function(t) {
    var a = function() {
        function t() {
            this.oGenTextData = {}, this.oLevelTextData = {}, this.oUiButsImgData = {}, this.oWordGridTextData = {}, this.inc = 0, this.categoryTotal = 0, this.oUiElementsImgData = assetLib.getData("uiElements"), this.oUiButsImgData = assetLib.getData("uiButs"), this.createTextObjects()
        }
        return t.prototype.createTextObjects = function() {
            for (var t in assetLib.textData.langText.text[curLang]) 
					this.oGenTextData[t] = {}, 
					//console.log(assetLib.textData.langText.text[curLang][t]["@text"]);
					this.oGenTextData[t].aLineData = this.getCharDataFromArray(assetLib.textData.langText.text[curLang][t]["@text"], assetLib.textData.langText.text[curLang][t]["@fontId"]), 
					this.oGenTextData[t].aLineWidths = this.getLineWidths(this.oGenTextData[t].aLineData), this.oGenTextData[t].blockWidth = this.getBlockWidth(this.oGenTextData[t].aLineData), this.oGenTextData[t].blockHeight = this.getBlockHeight(this.oGenTextData[t].aLineData, assetLib.textData.langText.text[curLang][t]["@fontId"]), this.oGenTextData[t].lineHeight = parseInt(assetLib.textData["fontData" + assetLib.textData.langText.text[curLang][t]["@fontId"]].text.common["@lineHeight"]), this.oGenTextData[t].oFontImgData = assetLib.getData("font" + assetLib.textData.langText.text[curLang][t]["@fontId"]);
					
			//assetLib.textData.levelText = gradle_levels
            for (var t in assetLib.textData.levelText.text[curLang]) {
                this.categoryTotal++;
                var a = new Array;
                a.push(assetLib.textData.levelText.text[curLang][t]["@title"]), this.oLevelTextData[t] = {}, this.oLevelTextData[t].title = {}, this.oLevelTextData[t].title.aLineData = this.getCharDataFromArray(a, 0), this.oLevelTextData[t].title.aLineWidths = this.getLineWidths(this.oLevelTextData[t].title.aLineData), this.oLevelTextData[t].title.blockWidth = this.getBlockWidth(this.oLevelTextData[t].title.aLineData), this.oLevelTextData[t].title.blockHeight = this.getBlockHeight(this.oLevelTextData[t].title.aLineData, 0), this.oLevelTextData[t].title.lineHeight = parseInt(assetLib.textData.fontData0.text.common["@lineHeight"]), this.oLevelTextData[t].title.oFontImgData = assetLib.getData("font0"), this.oLevelTextData[t].aGameData = [];
                for (var e in assetLib.textData.levelText.text[curLang][t].gameWords) {
                    this.oLevelTextData[t].aGameData[e] = {}, this.oLevelTextData[t].aGameData[e].gridSize = assetLib.textData.levelText.text[curLang][t].gameWords[e]["@gridSize"], this.oLevelTextData[t].aGameData[e].aWords = new Array;
                    for (var i in assetLib.textData.levelText.text[curLang][t].gameWords[e]["@words"]) {
                        var a = new Array;
                        a.push(assetLib.textData.levelText.text[curLang][t].gameWords[e]["@words"][i]), this.oLevelTextData[t].aGameData[e].aWords[i] = {}, this.oLevelTextData[t].aGameData[e].aWords[i].aLineData = this.getCharDataFromArray(a, 0), this.oLevelTextData[t].aGameData[e].aWords[i].aLineWidths = this.getLineWidths(this.oLevelTextData[t].aGameData[e].aWords[i].aLineData), this.oLevelTextData[t].aGameData[e].aWords[i].blockWidth = this.getBlockWidth(this.oLevelTextData[t].aGameData[e].aWords[i].aLineData), this.oLevelTextData[t].aGameData[e].aWords[i].blockHeight = this.getBlockHeight(this.oLevelTextData[t].aGameData[e].aWords[i].aLineData, 0), this.oLevelTextData[t].aGameData[e].aWords[i].lineHeight = parseInt(assetLib.textData.fontData0.text.common["@lineHeight"]), this.oLevelTextData[t].aGameData[e].aWords[i].oFontImgData = assetLib.getData("font0")
                    }
                }
            }
        }, t.prototype.getWordGridData = function() {
            for (var t = 0; t < gridSize; t++)
                for (var a = 0; a < gridSize; a++) {
                    var e = new Array;
                    e.push(aWordGrid[t][a]), this.oWordGridTextData[aWordGrid[t][a]] = {}, this.oWordGridTextData[aWordGrid[t][a]].aLineData = this.getCharDataFromArray(e, 0), this.oWordGridTextData[aWordGrid[t][a]].aLineWidths = this.getLineWidths(this.oWordGridTextData[aWordGrid[t][a]].aLineData), this.oWordGridTextData[aWordGrid[t][a]].blockWidth = this.getBlockWidth(this.oWordGridTextData[aWordGrid[t][a]].aLineData), this.oWordGridTextData[aWordGrid[t][a]].blockHeight = this.getBlockHeight(this.oWordGridTextData[aWordGrid[t][a]].aLineData, 0), this.oWordGridTextData[aWordGrid[t][a]].lineHeight = parseInt(assetLib.textData.fontData0.text.common["@lineHeight"]), this.oWordGridTextData[aWordGrid[t][a]].oFontImgData = assetLib.getData("font0")
                }
        }, t.prototype.getLineWidths = function(t) {
            for (var a, e = new Array, i = 0; i < t.length; i++) {
                a = 0;
                for (var s = 0; s < t[i].length; s++) a += parseInt(t[i][s]["@xadvance"]), 0 == s ? a -= parseInt(t[i][s]["@xoffset"]) : s == t[i].length - 1 && (a += parseInt(t[i][s]["@xoffset"]));
                e.push(a)
            }
            return e
        }, t.prototype.getBlockWidth = function(t) {
            for (var a, e = 0, i = 0; i < t.length; i++) {
                a = 0;
                for (var s = 0; s < t[i].length; s++) a += parseInt(t[i][s]["@xadvance"]), 0 == s ? a -= parseInt(t[i][s]["@xoffset"]) : s == t[i].length - 1 && (a += parseInt(t[i][s]["@xoffset"]));
                a > e && (e = a)
            }
            return e
        }, t.prototype.getBlockHeight = function(t, a) {
            return t.length * parseInt(assetLib.textData["fontData" + a].text.common["@lineHeight"])
        }, t.prototype.getCharDataFromArray = function(t, a) {
            for (var e = new Array, i = 0; i < t.length; i++) e[i] = this.getCharData(t[i], a);
            return e
        }, t.prototype.getCharData = function(t, a) {
            void 0 === a && (a = 0);
            for (var e = new Array, i = 0; i < t.length; i++)
                for (var s = 0; s < assetLib.textData["fontData" + a].text.chars.char.length; s++)
                    if (t[i].charCodeAt() == assetLib.textData["fontData" + a].text.chars.char[s]["@id"]) {
                        e.push(assetLib.textData["fontData" + a].text.chars.char[s]);
                        break
                    }
            return e
        }, t.prototype.renderGenText = function(t) {
            var a = t.oTextData[t.text].aLineData.slice(0),
                e = t.oTextData[t.text].oFontImgData;
            if (t.addedText) {
                var i = new Array;
                i.push(t.addedText), a[0] = a[0].concat(this.getCharDataFromArray(i, 0)[0])
            }
            var s, r = 0,
                n = 0,
                o = 0,
                d = 1,
                h = 0;
            t.lineOffsetY && (o = t.lineOffsetY), t.scale && (d = t.scale);
            var g = 1 * d;
            t.maxWidth && t.oTextData[t.text].blockWidth * d > t.maxWidth && (g = t.maxWidth / t.oTextData[t.text].blockWidth), t.anim && (this.inc += 7 * delta), "centre" == t.alignY ? n = t.oTextData[t.text].blockHeight / 2 + o * (a.length - 1) / 2 : "bottom" == t.alignY && (n = t.oTextData[t.text].blockHeight + o * (a.length - 1));
            for (var l = 0; l < a.length; l++) {
                s = 0, "centre" == t.alignX && (r = t.oTextData[t.text].aLineWidths[l] / 2);
                for (var m = 0, c = 0; c < a[l].length; c++) m += parseInt(a[l][c]["@xadvance"]);
                if (void 0 != t.colourId) {
                    var u = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + t.colourId]].x,
                        D = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + t.colourId]].y,
                        I = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + t.colourId]].width,
                        v = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + t.colourId]].height,
                        p = this.oUiButsImgData.oData.oAtlasData[oImageIds.genSmallBut].width;
                    ctx.drawImage(this.oUiElementsImgData.img, u, D, I, v, t.x - p / 2 + 9, t.y - 19 - 3, p - 18, v + 6)
                }
                for (var c = 0; c < a[l].length; c++) {
                    var u = a[l][c]["@x"],
                        D = a[l][c]["@y"],
                        I = a[l][c]["@width"],
                        v = a[l][c]["@height"];
                    t.anim && (h = Math.sin(this.inc + c / 2) * (v / 15 * g)), ctx.drawImage(e.img, u, D, I, v, t.x + (s + parseInt(a[l][c]["@xoffset"]) - r) * g, t.y + (parseInt(a[l][c]["@yoffset"]) + l * t.oTextData[t.text].lineHeight + l * o - n) * g + h, I * g, v * g), s += parseInt(a[l][c]["@xadvance"])
                }
            }
        }, t.prototype.renderGameTitleText = function(t) {
            var a = this.oLevelTextData[t.textId].title.aLineData.slice(0),
                e = this.oLevelTextData[t.textId].title.oFontImgData;
            if (t.addedText) {
                var i = new Array;
                i.push(t.addedText), a[0] = a[0].concat(this.getCharDataFromArray(i, 0)[0])
            }
            var s, r = 0,
                n = 0,
                o = 0,
                d = 1,
                h = 0;
            t.lineOffsetY && (o = t.lineOffsetY), t.scale && (d = t.scale);
            var g = 1 * d;
            t.maxWidth && this.oLevelTextData[t.textId].title.blockWidth * d > t.maxWidth && (g = t.maxWidth / this.oLevelTextData[t.textId].title.blockWidth), t.anim && (this.inc += 7 * delta);
            for (var l = 0; l < a.length; l++) {
                s = 0, "centre" == t.alignX && (r = this.oLevelTextData[t.textId].title.aLineWidths[l] / 2), "centre" == t.alignY && (n = this.oLevelTextData[t.textId].title.blockHeight / 2 + o * (a.length - 1) / 2);
                for (var m = 0; m < a[l].length; m++) {
                    var c = a[l][m]["@x"],
                        u = a[l][m]["@y"],
                        D = a[l][m]["@width"],
                        I = a[l][m]["@height"];
                    t.anim && (h = Math.sin(this.inc + m / 2) * (I / 15 * g)), ctx.drawImage(e.img, c, u, D, I, t.x + (s + parseInt(a[l][m]["@xoffset"]) - r) * g, t.y + (parseInt(a[l][m]["@yoffset"]) + l * this.oLevelTextData[t.textId].title.lineHeight + l * o - n) * g + h, D * g, I * g), s += parseInt(a[l][m]["@xadvance"])
                }
            }
        }, t.prototype.renderDynamicText = function(t) {
            var a = new Array;
            a.push(t.text);
            var e, i = this.getCharDataFromArray(a, 0),
                s = this.oLevelTextData[categoryId].title.oFontImgData,
                r = 1,
                n = 0;
            t.scale && (r = t.scale);
            var o = 1 * r;
            t.anim && (this.inc += 7 * delta);
            for (var d = 0, h = 0, g = 0; g < i.length; g++) {
                e = 0;
                for (var l = 0; l < i[g].length; l++) {
                    var m = i[g][l]["@x"],
                        c = i[g][l]["@y"],
                        u = i[g][l]["@width"],
                        D = i[g][l]["@height"];
                    d = e + parseInt(i[g][l]["@xoffset"]), h = parseInt(i[g][l]["@yoffset"]) + g * this.oLevelTextData[categoryId].title.lineHeight, 1 == t.text.length && (d = -u / 2, h = -D / 2), t.anim && (n = Math.sin(this.inc + l / 2) * (D / 15 * o)), ctx.drawImage(s.img, m, c, u, D, t.x + d * o, t.y + h * o + n, u * o, D * o), e += parseInt(i[g][l]["@xadvance"])
                }
            }
        }, t.prototype.renderGameText = function(t) {
            var a, e = this.oLevelTextData[categoryId].aGameData[gameId].aWords[t.textId],
                i = e.aLineData,
                s = e.oFontImgData,
                r = 0,
                n = 0,
                o = 1,
                d = 0;
            t.lineOffsetY && t.lineOffsetY, t.scale && (o = t.scale);
            var h = 1 * o;
            t.maxWidth && e.blockWidth * o > t.maxWidth && (h = t.maxWidth / e.blockWidth), t.anim && (this.inc += 7 * delta), a = 0, "centre" == t.alignX && (r = e.aLineWidths[0] / 2), "centre" == t.alignY && (n = e.blockHeight / 2);
            for (var g = 0, l = 0; l < i[0].length; l++) g += parseInt(i[0][l]["@xadvance"]);
            if (aWordsToGuess[t.textId].guessed) {
                var m = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[t.textId].lineId]].x,
                    c = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[t.textId].lineId]].y,
                    u = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[t.textId].lineId]].width,
                    D = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + aWordsToGuess[t.textId].lineId]].height;
                ctx.drawImage(this.oUiElementsImgData.img, m, c, u, D, t.x + (parseInt(i[0][0]["@xoffset"]) - r - 10) * h, t.y - D / 2 * h, (g + 20) * h, D * h)
            }
            for (var l = 0; l < i[0].length; l++) {
                var m = parseInt(i[0][l]["@x"]),
                    c = parseInt(i[0][l]["@y"]),
                    u = parseInt(i[0][l]["@width"]),
                    D = parseInt(i[0][l]["@height"]);
                t.anim && (d = Math.sin(this.inc + l / 2) * (D / 15 * h)), ctx.drawImage(s.img, m, c, u, D, t.x + (a + parseInt(i[0][l]["@xoffset"]) - r) * h, t.y + (parseInt(i[0][l]["@yoffset"]) - n) * h + d, u * h, D * h), a += parseInt(i[0][l]["@xadvance"])
            }
        }, t
    }();
    t.TextDisplay = a
}(Utils || (Utils = {}));
var Elements;
! function(t) {
    var a = function() {
        function t() {
            this.aFixedLines = new Array, this.visible = !1, this.aHintLines = new Array, this.oUiElementsImgData = assetLib.getData("uiElements"), this.reset()
        }
        return t.prototype.update = function() {
            this.realX = this.endX, this.realY = this.endY;
            var t = this.realX - this.getPosX(this.startGridX),
                a = this.realY - this.getPosY(this.startGridY);
            this.rotation = 45 * Math.round(Math.atan2(a, t) / radian / 45) * radian;
            var e = Math.abs(this.rotation / radian);
            this.lineLength = 135 == e || 45 == e ? 1.414 * Math.min(Math.abs(this.startX - this.endX), Math.abs(this.startY - this.endY)) : Math.sqrt(t * t + a * a)
        }, t.prototype.reset = function(t, a) {
            void 0 === t && (t = 0), void 0 === a && (a = 0), this.startGridX = this.getGridPosX(t), this.startGridY = this.getGridPosY(a), this.endX = this.realX = this.startX = this.getPosX(this.startGridX), this.endY = this.realY = this.startY = this.getPosY(this.startGridY), this.rotation = 0, this.visible = !1, this.lineLength = 0
        }, t.prototype.getGridPosX = function(t) {
            return Math.round((t - gridData.width / gridSize / 2 - gridData.x) / gridData.width * gridSize)
        }, t.prototype.getGridPosY = function(t) {
            return Math.round((t - gridData.width / gridSize / 2 - gridData.y) / gridData.width * gridSize)
        }, t.prototype.getPosX = function(t) {
            return gridData.x + t * (gridData.width / gridSize) + gridData.width / gridSize / 2
        }, t.prototype.getPosY = function(t) {
            return gridData.y + t * (gridData.width / gridSize) + gridData.width / gridSize / 2
        }, t.prototype.hintWord = function(t) {
            this.aHintLines.push({
                startGridX: t.startGridX,
                startGridY: t.startGridY,
                endGridX: t.endGridX,
                endGridY: t.endGridY,
                alpha: .75
            }), TweenLite.to(this.aHintLines[this.aHintLines.length - 1], hintTime, {
                alpha: 0,
                ease: "Quad.easeOut"
            })
        }, t.prototype.checkLine = function() {
            wordLineHandler.visible = !1;
            var t = "",
                a = !1;
            switch (this.rotation / radian) {
                case 0:
                case -0:
                    for (var e = this.startGridX; e <= this.getGridPosX(this.endX) + 1; e++)
                        if (e < gridSize && (t += aWordGrid[e][this.startGridY], (t.length == this.getGridPosX(this.endX) - this.startGridX || t.length == this.getGridPosX(this.endX) - this.startGridX + 1) && checkWord(t))) {
                            this.fixCurLine(e, this.getGridPosY(this.startY)), a = !0;
                            break
                        }
                    break;
                case 45:
                    for (var e = 0; e <= this.getGridPosX(this.endX) - this.startGridX + 1; e++)
                        if (e + this.startGridX < gridSize && e + this.startGridY < gridSize && (t += aWordGrid[e + this.startGridX][e + this.startGridY], (t.length == this.getGridPosX(this.endX) - this.startGridX || t.length == this.getGridPosX(this.endX) - this.startGridX + 1) && checkWord(t))) {
                            this.fixCurLine(e + this.startGridX, e + this.startGridY), a = !0;
                            break
                        }
                    break;
                case 90:
                    for (var e = this.startGridY; e <= this.getGridPosY(this.endY) + 1; e++)
                        if (e < gridSize && (t += aWordGrid[this.startGridX][e], (t.length == this.getGridPosY(this.endY) - this.startGridY || t.length == this.getGridPosY(this.endY) - this.startGridY + 1) && checkWord(t))) {
                            this.fixCurLine(this.getGridPosX(this.startX), e), a = !0;
                            break
                        }
                    break;
                case 135:
                    for (var e = 0; e <= this.startGridX - this.getGridPosX(this.endX) + 1; e++)
                        if (this.startGridX - e > -1 && e + this.startGridY < gridSize && (t += aWordGrid[this.startGridX - e][e + this.startGridY], (t.length == this.startGridX - this.getGridPosX(this.endX) || t.length == this.startGridX - this.getGridPosX(this.endX) + 1) && checkWord(t))) {
                            this.fixCurLine(this.startGridX - e, e + this.startGridY), a = !0;
                            break
                        }
                    break;
                case 180:
                case -180:
                    for (var e = 0; e <= this.startGridX - this.getGridPosX(this.endX) + 1; e++)
                        if (this.startGridX - e > -1 && (t += aWordGrid[this.startGridX - e][this.startGridY], (t.length == this.startGridX - this.getGridPosX(this.endX) || t.length == this.startGridX - this.getGridPosX(this.endX) + 1) && checkWord(t))) {
                            this.fixCurLine(this.startGridX - e, this.getGridPosY(this.startY)), a = !0;
                            break
                        }
                    break;
                case -135:
                    for (var e = 0; e <= this.startGridX - this.getGridPosX(this.endX) + 1; e++)
                        if (this.startGridX - e > -1 && this.startGridY - e > -1 && (t += aWordGrid[this.startGridX - e][this.startGridY - e], (t.length == this.startGridX - this.getGridPosX(this.endX) || t.length == this.startGridX - this.getGridPosX(this.endX) + 1) && checkWord(t))) {
                            this.fixCurLine(this.startGridX - e, this.startGridY - e), a = !0;
                            break
                        }
                    break;
                case -90:
                    for (var e = 0; e <= this.startGridY - this.getGridPosY(this.endY) + 1; e++)
                        if (this.startGridY - e > -1 && (t += aWordGrid[this.startGridX][this.startGridY - e], (t.length == this.startGridY - this.getGridPosY(this.endY) || t.length == this.startGridY - this.getGridPosY(this.endY) + 1) && checkWord(t))) {
                            this.fixCurLine(this.getGridPosX(this.startX), this.startGridY - e), a = !0;
                            break
                        }
                    break;
                case -45:
                    for (var e = 0; e <= this.getGridPosX(this.endX) - this.startGridX + 1; e++)
                        if (e + this.startGridX < gridSize && this.startGridY - e > -1 && (t += aWordGrid[e + this.startGridX][this.startGridY - e], (t.length == this.getGridPosX(this.endX) - this.startGridX || t.length == this.getGridPosX(this.endX) - this.startGridX + 1) && checkWord(t))) {
                            this.fixCurLine(e + this.startGridX, this.startGridY - e), a = !0;
                            break
                        }
            }
            a || playSound("noWord")
        }, t.prototype.fixCurLine = function(t, a) {
            this.aFixedLines.push({
                startGridX: this.startGridX,
                startGridY: this.startGridY,
                endGridX: t,
                endGridY: a
            })
        }, t.prototype.render = function() {
            if (wordLineHandler.visible) {
                ctx.save(), ctx.translate(this.getPosX(this.startGridX), this.getPosY(this.startGridY)), ctx.rotate(this.rotation);
                var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].x,
                    a = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].y,
                    e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].width,
                    i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + this.aFixedLines.length]].height;
                ctx.drawImage(this.oUiElementsImgData.img, t, a, e, i, -gridData.width / gridSize * .4, -gridData.width / 26 * Math.max(1, 11 / gridSize * .75), this.lineLength + gridData.width / gridSize * .6, gridData.width / 13 * Math.max(1, 11 / gridSize * .75)), ctx.restore()
            }
            for (var s = 0; s < this.aFixedLines.length; s++) {
                var r = this.getPosX(this.aFixedLines[s].endGridX) - this.getPosX(this.aFixedLines[s].startGridX),
                    n = this.getPosY(this.aFixedLines[s].endGridY) - this.getPosY(this.aFixedLines[s].startGridY),
                    o = Math.atan2(this.aFixedLines[s].endGridY - this.aFixedLines[s].startGridY, this.aFixedLines[s].endGridX - this.aFixedLines[s].startGridX),
                    d = Math.sqrt(r * r + n * n);
                ctx.save(), ctx.translate(this.getPosX(this.aFixedLines[s].startGridX) + panel.posY, this.getPosY(this.aFixedLines[s].startGridY)), ctx.rotate(o);
                var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + s]].x,
                    a = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + s]].y,
                    e = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + s]].width,
                    i = this.oUiElementsImgData.oData.oAtlasData[oImageIds["wordLine" + s]].height;
                ctx.drawImage(this.oUiElementsImgData.img, t, a, e, i, -gridData.width / gridSize * .4, -gridData.width / 26 * Math.max(1, 11 / gridSize * .75), d + gridData.width / gridSize * .8, gridData.width / 13 * Math.max(1, 11 / gridSize * .75)), ctx.restore()
            }
            for (var s = 0; s < this.aHintLines.length; s++) {
                var r = this.getPosX(this.aHintLines[s].endGridX) - this.getPosX(this.aHintLines[s].startGridX),
                    n = this.getPosY(this.aHintLines[s].endGridY) - this.getPosY(this.aHintLines[s].startGridY),
                    o = Math.atan2(this.aHintLines[s].endGridY - this.aHintLines[s].startGridY, this.aHintLines[s].endGridX - this.aHintLines[s].startGridX),
                    d = Math.sqrt(r * r + n * n);
                ctx.save(), ctx.translate(this.getPosX(this.aHintLines[s].startGridX) + panel.posY, this.getPosY(this.aHintLines[s].startGridY)), ctx.rotate(o), ctx.globalAlpha = this.aHintLines[s].alpha;
                var t = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintLine].x,
                    a = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintLine].y,
                    e = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintLine].width,
                    i = this.oUiElementsImgData.oData.oAtlasData[oImageIds.hintLine].height;
                ctx.drawImage(this.oUiElementsImgData.img, t, a, e, i, -gridData.width / gridSize * .4, -gridData.width / 26 * Math.max(1, 11 / gridSize * .75), d + gridData.width / gridSize * .8, gridData.width / 13 * Math.max(1, 11 / gridSize * .75)), ctx.restore()
            }
        }, t
    }();
    t.WordLineHandler = a
}(Elements || (Elements = {}));
var Utils;
! function(t) {
    var a = function() {
        function t(t) {
            this.dataGroupNum = 2, this.saveDataId = t, localStorage = localStorage ? localStorage : window.localStorage, this.clearData(), this.setInitialData()
        }
        return t.prototype.clearData = function() {
            this.aLevelStore = new Array, this.aLevelStore.push(999999);
            for (var t = 0; t < textDisplay.categoryTotal; t++)
                for (var a = 0; a < textDisplay.oLevelTextData[t].aGameData.length; a++) this.aLevelStore.push(0)
        }, t.prototype.resetData = function() {
            localStorage.clear(), this.clearData(), this.saveData()
        }, t.prototype.setInitialData = function() {
            if (null != localStorage.getItem(this.saveDataId) && "" != localStorage.getItem(this.saveDataId)) {
                this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                for (var t in this.aLevelStore) this.aLevelStore[t] = parseInt(this.aLevelStore[t]);
                this.checkAddedCategory()
            } else this.resetData(), this.saveData()
        }, t.prototype.checkAddedCategory = function() {
            for (var t = 0, a = 0; a < textDisplay.categoryTotal; a++)
                for (var e = 0; e < textDisplay.oLevelTextData[a].aGameData.length; e++) isNaN(this.aLevelStore[t + 1]) && (this.aLevelStore[t + 1] = 0), t++
        }, t.prototype.setHints = function(t) {
            this.aLevelStore[0] = t
        }, t.prototype.setTime = function(t, a, e) {
            for (var i = 0, s = 0; s <= t; s++)
                for (var r = 0; r < textDisplay.oLevelTextData[s].aGameData.length && (s < t || s == t && r < a); r++) i++;
            (0 == this.aLevelStore[i + 1] || e < this.aLevelStore[i + 1]) && (this.aLevelStore[i + 1] = e)
        }, t.prototype.getHints = function() {
            return this.aLevelStore[0]
        }, t.prototype.getTime = function(t, a) {
            for (var e = 0, i = 0; i <= t; i++)
                for (var s = 0; s < textDisplay.oLevelTextData[i].aGameData.length && (i < t || i == t && s < a); s++) e++;
            return this.aLevelStore[e + 1]
        }, t.prototype.saveData = function() {
            for (var t = "", a = 0; a < this.aLevelStore.length; a++) t += this.aLevelStore[a], a < this.aLevelStore.length - 1 && (t += ",");
            localStorage.setItem(this.saveDataId, t)
        }, t
    }();
    t.SaveDataHandler = a
}(Utils || (Utils = {}));
var __extends = this.__extends || function(t, a) {
        function e() {
            this.constructor = t
        }
        e.prototype = a.prototype, t.prototype = new e
    },
    Elements;
! function(t) {
    var a = function(t) {
        function a() {
            t.call(this, assetLib.getData("firework"), 30, 30, "explode"), this.vy = 0, this.setAnimType("once", "explode"), this.animEndedFunc = function() {
                this.removeMe = !0
            };
            TweenLite.to(this, 1, {
                scaleX: 3,
                scaleY: 3,
                ease: "Quad.easeOut"
            })
        }
        return __extends(a, t), a.prototype.update = function() {
            this.vy += 150 * delta, this.y += this.vy * delta, t.prototype.updateAnimation.call(this, delta)
        }, a.prototype.render = function() {
            t.prototype.renderSimple.call(this, ctx)
        }, a
    }(Utils.AnimSprite);
    t.Firework = a
}(Elements || (Elements = {}));
var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60, (new Date).getTime())
        }
    }(),
    previousTime, canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    minSquareSize = 500,
    maxSquareSize = 900,
    canvasX, canvasY, canvasScale, div = document.getElementById("canvas-wrapper"),
    sound, music, audioType = 0,
    muted = !1,
    splash, splashTimer = 0,
    assetLib, preAssetLib, rotatePause = !1,
    manualPause = !1,
    isMobile = !1,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    isIE10 = !1,
    delta, radian = Math.PI / 180,
    ios9FirstTouch = !1,
    textDisplay, saveDataHandler;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var fpsMeter = new Utils.FpsMeter,
    deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas(), window.onresize = function() {
    setTimeout(function() {
        resizeCanvas()
    }, 1)
}, window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas()
    }, 0), window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            resizeCanvas()
        }, 500), setTimeout(function() {
            resizeCanvas()
        }, 2e3)
    }, !1)
});
var ua = navigator.userAgent,
    isSharpStock = /SHL24|SH-01F/i.test(ua) && isStock(),
    isXperiaAStock = /SO-04E/i.test(ua) && isStock(),
    isFujitsuStock = /F-01F/i.test(ua) && isStock();
isIE10 || isSharpStock || isXperiaAStock || isFujitsuStock || void 0 === window.AudioContext && void 0 === window.webkitAudioContext && -1 != navigator.userAgent.indexOf("Android") ? audioType = 0 : (audioType = 1, sound = new Howl({
    urls: ["audio/sound.ogg", "audio/sound.m4a"],
    sprite: {
        click: [0, 200],
        dragLine: [500, 400],
        noWord: [1e3, 400],
        gotWord: [1500, 1400],
        starGone: [3e3, 700],
        endGame: [4e3, 1400],
        firework0: [5500, 1200],
        firework1: [7e3, 1200],
        firework2: [8500, 1200]
    }
}), music = new Howl({
    urls: ["audio/music.ogg", "audio/music.ogg"],
    volume: 1,
    loop: !0
}));
var panel, background, aTutorials = new Array,
    musicTween, oImageIds = {},
    gameType = 0,
    gridData = {
        width: 450,
        x: 0,
        y: 0
    },
    gameTime, tempGameTime, aWordGrid, gridSize, spareLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    wordLineHandler, aWordsToGuess, clockRunning, multiButId = 0,
    levelButId = 0,
    categoryId, gameId, prevScreen, aRandomLevels, randomLevelId = 0,
    gameSettingsIsOn = !0,
    prevGameTime, trace = "---",
    aEffects, fireworkTime, wordDir, oGameData, wordsPerGame = 8,
    starGoneCount, totalHints = 0,
    totalHintsMax = 10,
    gameHints = 0,
    gameHintsMax = 0,
    hintTime = 0,
    oRankData, firstRun = !1,
    aLoadItems, overridePause = !1;