(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(6857)
        }
        ])
    },
    7498: function(e, t) {
        "use strict";
        var r, l;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            PrefetchKind: function() {
                return r
            },
            ACTION_REFRESH: function() {
                return a
            },
            ACTION_NAVIGATE: function() {
                return n
            },
            ACTION_RESTORE: function() {
                return s
            },
            ACTION_SERVER_PATCH: function() {
                return i
            },
            ACTION_PREFETCH: function() {
                return o
            },
            ACTION_FAST_REFRESH: function() {
                return c
            },
            ACTION_SERVER_ACTION: function() {
                return d
            }
        });
        let a = "refresh"
          , n = "navigate"
          , s = "restore"
          , i = "server-patch"
          , o = "prefetch"
          , c = "fast-refresh"
          , d = "server-action";
        (l = r || (r = {})).AUTO = "auto",
        l.FULL = "full",
        l.TEMPORARY = "temporary",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    30: function(e, t, r) {
        "use strict";
        function getDomainLocale(e, t, r, l) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return getDomainLocale
            }
        }),
        r(2866),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5170: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return g
            }
        });
        let l = r(8754)
          , a = l._(r(7294))
          , n = r(4450)
          , s = r(2227)
          , i = r(4364)
          , o = r(109)
          , c = r(3607)
          , d = r(1823)
          , u = r(9031)
          , f = r(920)
          , m = r(30)
          , p = r(7192)
          , h = r(7498)
          , x = new Set;
        function prefetch(e, t, r, l, a, n) {
            if (!n && !(0,
            s.isLocalURL)(t))
                return;
            if (!l.bypassPrefetchedCheck) {
                let a = void 0 !== l.locale ? l.locale : "locale"in e ? e.locale : void 0
                  , n = t + "%" + r + "%" + a;
                if (x.has(n))
                    return;
                x.add(n)
            }
            let i = n ? e.prefetch(t, a) : e.prefetch(t, r, l);
            Promise.resolve(i).catch(e => {}
            )
        }
        function formatStringOrUrl(e) {
            return "string" == typeof e ? e : (0,
            i.formatUrl)(e)
        }
        let b = a.default.forwardRef(function(e, t) {
            let r, l;
            let {href: i, as: x, children: b, prefetch: g=null, passHref: v, replace: j, shallow: w, scroll: y, locale: N, onClick: _, onMouseEnter: O, onTouchStart: S, legacyBehavior: E=!1, ...T} = e;
            r = b,
            E && ("string" == typeof r || "number" == typeof r) && (r = a.default.createElement("a", null, r));
            let k = a.default.useContext(d.RouterContext)
              , C = a.default.useContext(u.AppRouterContext)
              , M = null != k ? k : C
              , P = !k
              , D = !1 !== g
              , R = null === g ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL
              , {href: A, as: I} = a.default.useMemo( () => {
                if (!k) {
                    let e = formatStringOrUrl(i);
                    return {
                        href: e,
                        as: x ? formatStringOrUrl(x) : e
                    }
                }
                let[e,t] = (0,
                n.resolveHref)(k, i, !0);
                return {
                    href: e,
                    as: x ? (0,
                    n.resolveHref)(k, x) : t || e
                }
            }
            , [k, i, x])
              , L = a.default.useRef(A)
              , U = a.default.useRef(I);
            E && (l = a.default.Children.only(r));
            let F = E ? l && "object" == typeof l && l.ref : t
              , [H,K,V] = (0,
            f.useIntersection)({
                rootMargin: "200px"
            })
              , X = a.default.useCallback(e => {
                (U.current !== I || L.current !== A) && (V(),
                U.current = I,
                L.current = A),
                H(e),
                F && ("function" == typeof F ? F(e) : "object" == typeof F && (F.current = e))
            }
            , [I, F, A, V, H]);
            a.default.useEffect( () => {
                M && K && D && prefetch(M, A, I, {
                    locale: N
                }, {
                    kind: R
                }, P)
            }
            , [I, A, K, N, D, null == k ? void 0 : k.locale, M, P, R]);
            let q = {
                ref: X,
                onClick(e) {
                    E || "function" != typeof _ || _(e),
                    E && l.props && "function" == typeof l.props.onClick && l.props.onClick(e),
                    M && !e.defaultPrevented && function(e, t, r, l, n, i, o, c, d, u) {
                        let {nodeName: f} = e.currentTarget
                          , m = "A" === f.toUpperCase();
                        if (m && (function(e) {
                            let t = e.currentTarget
                              , r = t.getAttribute("target");
                            return r && "_self" !== r || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !d && !(0,
                        s.isLocalURL)(r)))
                            return;
                        e.preventDefault();
                        let navigate = () => {
                            let e = null == o || o;
                            "beforePopState"in t ? t[n ? "replace" : "push"](r, l, {
                                shallow: i,
                                locale: c,
                                scroll: e
                            }) : t[n ? "replace" : "push"](l || r, {
                                forceOptimisticNavigation: !u,
                                scroll: e
                            })
                        }
                        ;
                        d ? a.default.startTransition(navigate) : navigate()
                    }(e, M, A, I, j, w, y, N, P, D)
                },
                onMouseEnter(e) {
                    E || "function" != typeof O || O(e),
                    E && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e),
                    M && (D || !P) && prefetch(M, A, I, {
                        locale: N,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: R
                    }, P)
                },
                onTouchStart(e) {
                    E || "function" != typeof S || S(e),
                    E && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e),
                    M && (D || !P) && prefetch(M, A, I, {
                        locale: N,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: R
                    }, P)
                }
            };
            if ((0,
            o.isAbsoluteUrl)(I))
                q.href = I;
            else if (!E || v || "a" === l.type && !("href"in l.props)) {
                let e = void 0 !== N ? N : null == k ? void 0 : k.locale
                  , t = (null == k ? void 0 : k.isLocaleDomain) && (0,
                m.getDomainLocale)(I, e, null == k ? void 0 : k.locales, null == k ? void 0 : k.domainLocales);
                q.href = t || (0,
                p.addBasePath)((0,
                c.addLocale)(I, e, null == k ? void 0 : k.defaultLocale))
            }
            return E ? a.default.cloneElement(l, q) : a.default.createElement("a", {
                ...T,
                ...q
            }, r)
        })
          , g = b;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    920: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return useIntersection
            }
        });
        let l = r(7294)
          , a = r(3436)
          , n = "function" == typeof IntersectionObserver
          , s = new Map
          , i = [];
        function useIntersection(e) {
            let {rootRef: t, rootMargin: r, disabled: o} = e
              , c = o || !n
              , [d,u] = (0,
            l.useState)(!1)
              , f = (0,
            l.useRef)(null)
              , m = (0,
            l.useCallback)(e => {
                f.current = e
            }
            , []);
            (0,
            l.useEffect)( () => {
                if (n) {
                    if (c || d)
                        return;
                    let e = f.current;
                    if (e && e.tagName) {
                        let l = function(e, t, r) {
                            let {id: l, observer: a, elements: n} = function(e) {
                                let t;
                                let r = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , l = i.find(e => e.root === r.root && e.margin === r.margin);
                                if (l && (t = s.get(l)))
                                    return t;
                                let a = new Map
                                  , n = new IntersectionObserver(e => {
                                    e.forEach(e => {
                                        let t = a.get(e.target)
                                          , r = e.isIntersecting || e.intersectionRatio > 0;
                                        t && r && t(r)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: r,
                                    observer: n,
                                    elements: a
                                },
                                i.push(r),
                                s.set(r, t),
                                t
                            }(r);
                            return n.set(e, t),
                            a.observe(e),
                            function() {
                                if (n.delete(e),
                                a.unobserve(e),
                                0 === n.size) {
                                    a.disconnect(),
                                    s.delete(l);
                                    let e = i.findIndex(e => e.root === l.root && e.margin === l.margin);
                                    e > -1 && i.splice(e, 1)
                                }
                            }
                        }(e, e => e && u(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: r
                        });
                        return l
                    }
                } else if (!d) {
                    let e = (0,
                    a.requestIdleCallback)( () => u(!0));
                    return () => (0,
                    a.cancelIdleCallback)(e)
                }
            }
            , [c, r, t, d, f.current]);
            let p = (0,
            l.useCallback)( () => {
                u(!1)
            }
            , []);
            return [m, d, p]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    6857: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return Home
            }
        });
        var l = r(5893)
          , a = r(7294)
          , components_button = e => (0,
        l.jsx)("button", {
            className: "w-5 max-h-[1.75rem] flex items-center justify-center bg-98lightgray border-l-98white border-t-98white border-b-black border-r-black border-[2px] ".concat(e.disabled ? "text-98darkgray" : "text-black", " ").concat(e.className),
            children: (0,
            l.jsx)("span", {
                className: e.titlebarbutton ? "" : "border-black border-dotted hover:border w-full h-[1.25rem] m-[0.1rem]",
                children: e.children
            })
        })
          , titlebar = e => (0,
        l.jsx)("div", {
            children: (0,
            l.jsxs)("h1", {
                className: "text-98white text-base w-full flex flex-row items-center justify-between h-7 p-1 bg-gradient-to-r from-98blue to-98lightblue gap-2",
                children: [(0,
                l.jsx)("strong", {
                    children: e.title
                }), (0,
                l.jsxs)("div", {
                    className: "flex flex-row h-full",
                    children: [e.windowcontrols && (0,
                    l.jsxs)(l.Fragment, {
                        children: [(0,
                        l.jsx)(components_button, {
                            titlebarbutton: "true",
                            disabled: e.windowdisabled,
                            children: "\uD83D\uDDD5"
                        }), (0,
                        l.jsx)(components_button, {
                            titlebarbutton: "true",
                            disabled: e.windowdisabled,
                            children: "\uD83D\uDDD6"
                        })]
                    }), (0,
                    l.jsx)(components_button, {
                        titlebarbutton: "true",
                        disabled: e.windowdisabled,
                        className: "ml-1",
                        children: "X"
                    })]
                })]
            })
        })
          , components_window = e => (0,
        l.jsxs)("div", {
            className: "p-1 select-none place-self-center text-sm flex flex-col min-w-[20rem] max-w-full w-min h-min bg-98lightgray border-l-98white border-t-98white border-b-98darkgray border-r-98darkgray border-[2px]",
            children: [(0,
            l.jsx)(titlebar, {
                title: e.title,
                windowcontrols: e.windowcontrols,
                windowdisabled: e.windowdisabled
            }), "message" === e.type ? (0,
            l.jsx)("div", {
                className: "flex flex-col p-2",
                children: (0,
                l.jsx)("p", {
                    children: e.children
                })
            }) : (0,
            l.jsx)(l.Fragment, {
                children: e.children
            }), e.buttons && (0,
            l.jsx)("div", {
                className: "flex flex-row justify-end gap-2 p-1",
                children: e.buttons.map(e => (0,
                l.jsx)(components_button, {
                    disabled: e.disabled,
                    className: "min-w-[5rem]",
                    children: e.message
                }))
            })]
        })
          , n = r(1664)
          , s = r.n(n)
          , spotifyActivity = e => {
            var t, r, a;
            let {spotify: n} = e.presenceData.data || {}
              , i = e.currentTime - ((null == n ? void 0 : null === (t = n.timestamps) || void 0 === t ? void 0 : t.start) || 0)
              , o = (null == n ? void 0 : null === (r = n.timestamps) || void 0 === r ? void 0 : r.end) - (null == n ? void 0 : null === (a = n.timestamps) || void 0 === a ? void 0 : a.start) || 0
              , c = Math.floor(i / 1e3)
              , d = Math.floor(o / 1e3)
              , u = "".concat(String(Math.floor(c / 60)).padStart(2, "0"), ":").concat(String(c % 60).padStart(2, "0"))
              , f = "".concat(String(Math.floor(d / 60)).padStart(2, "0"), ":").concat(String(d % 60).padStart(2, "0"));
            return n && (0,
            l.jsxs)(s(), {
                className: "w-full",
                href: "https://open.spotify.com/track/".concat(n.track_id),
                children: [(0,
                l.jsx)("h1", {
                    className: "text-sm",
                    children: "Listening to"
                }), (0,
                l.jsxs)("div", {
                    className: "flex flex-row gap-2 mt-1",
                    children: [(0,
                    l.jsx)("img", {
                        src: n.album_art_url,
                        className: "w-12 h-12",
                        alt: "Album Art"
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0,
                        l.jsx)("h1", {
                            className: "text-sm",
                            children: n.song
                        }), (0,
                        l.jsxs)("h2", {
                            className: "text-xs",
                            children: ["by ", n.artist]
                        }), (0,
                        l.jsxs)("h2", {
                            className: "text-xs",
                            children: ["on ", n.album]
                        })]
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "flex flex-row gap-2 mt-1 items-center",
                    children: [(0,
                    l.jsx)("h1", {
                        className: "text-sm",
                        children: u
                    }), (0,
                    l.jsx)("div", {
                        className: "w-full h-1 bg-98darkgray",
                        children: (0,
                        l.jsx)("div", {
                            className: "h-1 bg-98white",
                            style: {
                                width: "".concat(i / o * 100, "%")
                            }
                        })
                    }), (0,
                    l.jsx)("h1", {
                        className: "text-sm",
                        children: f
                    })]
                }), (0,
                l.jsx)("span", {
                    className: "w-full flex my-2 border-b-98white border-t-98darkgray border-[1px]"
                })]
            })
        }
          , components_activity = e => {
            var t, r, a, n;
            let s = e.activity
              , i = e.currentTime - ((null == s ? void 0 : null === (t = s.timestamps) || void 0 === t ? void 0 : t.start) || s.created_at || 0)
              , o = Math.floor(i / 1e3)
              , c = Math.floor(o / 60)
              , d = Math.floor(c / 60)
              , u = Math.floor(d / 24)
              , f = "".concat(d > 0 ? (d % 24).toString().padStart(2, "0") + ":" : "").concat((c % 60).toString().padStart(2, "0"), ":").concat((o % 60).toString().padStart(2, "0"));
            return (0,
            l.jsx)(l.Fragment, {
                children: s && (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsxs)("h1", {
                        className: "text-sm",
                        children: [{
                            0: "Playing",
                            1: "Streaming",
                            2: "Listening",
                            3: "Watching"
                        }[s.type], " ", s.name]
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex flex-row mt-1",
                        children: [(null == s ? void 0 : null === (r = s.assets) || void 0 === r ? void 0 : r.large_image) && (0,
                        l.jsxs)("div", {
                            className: "relative mr-2",
                            children: [(null == s ? void 0 : null === (a = s.assets) || void 0 === a ? void 0 : a.large_image) && (0,
                            l.jsx)("img", {
                                src: "https://cdn.discordapp.com/app-assets/".concat(s.application_id, "/").concat(s.assets.large_image, ".png"),
                                className: "w-12 h-12",
                                alt: "Visual Studio Code"
                            }), (null == s ? void 0 : null === (n = s.assets) || void 0 === n ? void 0 : n.small_image) && (0,
                            l.jsx)("img", {
                                src: "https://cdn.discordapp.com/app-assets/".concat(s.application_id, "/").concat(s.assets.small_image, ".png"),
                                className: "absolute -bottom-1 -right-1 w-4 h-4",
                                alt: "Visual Studio Code"
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0,
                            l.jsx)("h1", {
                                className: "text-sm",
                                children: s.state
                            }), (0,
                            l.jsx)("h2", {
                                className: "text-xs",
                                children: s.details
                            })]
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-row gap-2 mt-1 items-center",
                        children: (0,
                        l.jsxs)("h1", {
                            className: "text-sm",
                            children: [(u > 0 ? "".concat(u, "d ") : null) || f, " elapsed"]
                        })
                    }), (0,
                    l.jsx)("span", {
                        className: "w-full my-2 border-b-98white border-t-98darkgray border-[1px]"
                    })]
                })
            })
        }
          , profile = e => {
            let {title: t} = e
              , [r,n] = (0,
            a.useState)({
                data: {
                    spotify: null
                }
            })
              , [s,i] = (0,
            a.useState)(new Date);
            (0,
            a.useEffect)( () => {
                let fetchData = async () => {
                    let e = await fetch("https://api.lanyard.rest/v1/users/1169111190824308768")
                      , t = await e.json();
                    n(t)
                }
                  , e = setInterval(fetchData, 5e3);
                return fetchData(),
                () => clearInterval(e)
            }
            , []),
            (0,
            a.useEffect)( () => {
                let e = setInterval( () => i(new Date), 1e3);
                return () => clearInterval(e)
            }
            , []);
            let emojiDataToURL = e => "https://cdn.discordapp.com/emojis/".concat(e.id, ".").concat(e.animated ? "gif" : "png");
            return (0,
            l.jsxs)(components_window, {
                title: "Profile",
                type: "custom",
                buttons: [{
                    message: "OK",
                    disabled: !0
                }],
                moveable: !1,
                windowcontrols: !1,
                windowdisabled: !0,
                children: [(0,
                l.jsxs)("div", {
                    className: "relative mb-8 mt-2",
                    children: [(0,
                    l.jsx)("img", {
                        className: "object-cover w-full h-24",
                        src: "img/banner98.png"
                    }), (0,
                    l.jsx)("img", {
                        className: "h-16 w-16 absolute -bottom-8",
                        src: "img/irrvlo98.png"
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "flex flex-col px-1",
                    children: [(0,
                    l.jsx)("h1", {
                        className: "text-xl font-bold",
                        children: "irrvlo"
                    }), (0,
                    l.jsx)("h2", {
                        className: "text-sm",
                        children: "@irrvlo"
                    }), r.data.activities && r.data.activities.filter(e => 4 === e.type).map( (e, t) => (0,
                    l.jsxs)("div", {
                        className: "flex flex-row gap-1 mt-1 items-center",
                        children: [e.emoji ? e.emoji.id ? (0,
                        l.jsx)("img", {
                            src: emojiDataToURL(e.emoji),
                            className: "w-5 h-5"
                        }) : (0,
                        l.jsx)("h2", {
                            className: "text-sm",
                            children: e.emoji.name
                        }) : null, (0,
                        l.jsx)("h2", {
                            className: "text-sm",
                            children: e.state
                        })]
                    })), (0,
                    l.jsx)("span", {
                        className: "w-full my-2 border-b-98white border-t-98darkgray border-[1px]"
                    }), (0,
                    l.jsx)(spotifyActivity, {
                        presenceData: r,
                        currentTime: s
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-col gap-1 overflow-y-auto max-h-[8rem]",
                        children: r.data.activities && r.data.activities.filter(e => 2 !== e.type && 4 !== e.type).map( (e, t) => (0,
                        l.jsx)(components_activity, {
                            activity: e,
                            currentTime: s
                        }))
                    }), (0,
                    l.jsx)("h1", {
                        className: "text-sm",
                        children: "Socials"
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex flex-row gap-1 mt-1",
                        children: [(0,
                        l.jsx)("a", {
                            href: "https://x.com/irrvlo",
                            children: (0,
                            l.jsx)("img", {
                                src: "img/x98.png",
                                className: "w-6 h-6",
                                alt: "X"
                            })
                        }), (0,
                        l.jsx)("a", {
                            href: "https://twitch.tv/irrvlo",
                            children: (0,
                            l.jsx)("img", {
                                src: "img/twitch98.png",
                                className: "w-6 h-6",
                                alt: "Twitch"
                            })
                        }), (0,
                        l.jsx)("a", {
                            href: "https://discord.com/users/1169111190824308768",
                            children: (0,
                            l.jsx)("img", {
                                src: "img/discord98.png",
                                className: "w-fit h-6",
                                alt: "Discord"
                            })
                        })]
                    })]
                })]
            })
        }
        ;
        function Home() {
            return (0,
            l.jsx)("main", {
                className: "bg-98teal w-full h-screen flex items-center justify-center",
                children: (0,
                l.jsx)(profile, {})
            })
        }
    },
    1664: function(e, t, r) {
        e.exports = r(5170)
    }
}, function(e) {
    e.O(0, [774, 888, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);
