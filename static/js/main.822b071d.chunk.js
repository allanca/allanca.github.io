(this["webpackJsonpicfpc-site"] = this["webpackJsonpicfpc-site"] || []).push([
    [0], {
        107: function(e, t, a) {},
        17: function(e, t, a) {
            e.exports = {
                root: "styles_root__7CnG0",
                table: "styles_table__3R6dw",
                pre: "styles_pre__22RU1",
                radio: "styles_radio__1cLrw",
                buttons: "styles_buttons__2cvGr",
                chooseButton: "styles_chooseButton__2oe2V",
                toastButton: "styles_toastButton__3eM7i"
            }
        },
        18: function(e, t, a) {
            e.exports = {
                checklist: "styles_checklist__2EPJ5",
                table: "styles_table__1V-km",
                pre: "styles_pre__sSo32",
                statusFailed: "styles_statusFailed__Tnzla",
                logLink: "styles_logLink__1LR70",
                branch: "styles_branch__1zqjP",
                help: "styles_help__1bSOq",
                icon: "styles_icon__cvhNe",
                succeeded: "styles_succeeded__1UWXK"
            }
        },
        190: function(e, t, a) {},
        191: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                o = a(47),
                s = a.n(o),
                l = a(32),
                i = a(78),
                c = a(15),
                u = (a(98), a(99), a(9)),
                m = a(10),
                d = a(12),
                h = a(11),
                p = a(16),
                f = a(13),
                v = a(61),
                g = a.n(v),
                b = a(30),
                y = a.n(b),
                E = a(62),
                _ = a.n(E),
                w = "/rules",
                x = "/registration",
                k = "/login",
                S = "/team",
                T = "/submissions",
                N = "/scoreboard",
                I = "/testing",
                A = "/games",
                O = "/visualize",
                V = "/blog",
                R = "/post",
                C = "#orgs",
                L = "#pegoovka",
                M = "#rating",
                D = "#nonRating",
                j = "#lightning",
                B = "#full",
                G = [{
                    url: x,
                    content: "Sign up"
                }, {
                    url: k,
                    content: "Log in"
                }, {
                    url: V,
                    content: "Blog"
                }, {
                    url: N,
                    content: "Scoreboard"
                }],
                P = [{
                    url: S,
                    content: "Profile"
                }, {
                    url: T,
                    content: "Submissions"
                }, {
                    url: I,
                    content: "Testing"
                }, {
                    url: A + M,
                    content: "Games"
                }, {
                    url: V + C,
                    content: "Blog"
                }, {
                    url: N + B,
                    content: "Scoreboard"
                }];

            function U(e) {
                return r.a.createElement(r.a.Fragment, null, e.map((function(e) {
                    return r.a.createElement(p.c, {
                        to: e.url,
                        className: y.a.link,
                        key: e.url,
                        activeClassName: y.a.activeLink
                    }, e.content)
                })))
            }
            var K = function(e) {
                    var t = Boolean(e.team);
                    return r.a.createElement("header", {
                        className: y.a.root
                    }, r.a.createElement("h1", null, r.a.createElement(p.b, {
                        to: "/",
                        className: y.a.titleLink
                    }, "ICFP Programming Contest 2020"), r.a.createElement("div", {
                        className: y.a.subtitle
                    }, "has started ", r.a.createElement(_.a, {
                        date: "2020-07-17T13:00Z",
                        fromNow: !0
                    }), ", will end ", r.a.createElement(_.a, {
                        date: "2020-07-20T13:00Z",
                        fromNow: !0
                    }))), !e.isTeamLoading && r.a.createElement(r.a.Fragment, null, t ? function(e) {
                        if (!e.team) return;
                        return r.a.createElement("div", {
                            className: y.a.navMenuLinks
                        }, U(P))
                    }(e) : r.a.createElement("div", {
                        className: y.a.links
                    }, U(G))))
                },
                F = "general",
                W = a(50),
                H = a.n(W),
                z = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).interval = void 0, e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.onClose;
                            void 0 !== e && (this.interval = setTimeout(e, 5e3))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.interval && clearTimeout(this.interval)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.message,
                                a = e.isError;
                            return r.a.createElement("div", {
                                className: H.a.root
                            }, r.a.createElement("div", {
                                className: H.a.box + (a ? " " + H.a.error : "")
                            }, t))
                        }
                    }]), a
                }(r.a.Component);
            var J = function(e) {
                    var t = e.closeError,
                        a = e.error,
                        n = "string" === typeof a ? a : a.message;
                    return r.a.createElement(z, {
                        message: n,
                        isError: !0,
                        onClose: t
                    })
                },
                Z = a(3),
                Y = a.n(Z);
            var q = function() {
                return r.a.createElement("div", {
                    className: Y.a.root
                }, r.a.createElement("section", {
                    className: Y.a.video
                }, r.a.createElement("div", {
                    className: Y.a.subtitle
                }, "Welcome to the contest!", r.a.createElement("br", null), "Watch the video and read ", r.a.createElement(p.b, {
                    to: R + "/2048",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "task specification")), r.a.createElement("iframe", {
                    title: "title-video",
                    width: "666",
                    height: "375",
                    src: "https://www.youtube.com/embed/PzJ6gfo92oA",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                })), r.a.createElement("section", {
                    className: Y.a.section
                }, r.a.createElement("ul", {
                    className: Y.a.features__double
                }, r.a.createElement("li", null, r.a.createElement("h2", null, "Get funky"), r.a.createElement("p", null, "Join #icfp-contest in ", r.a.createElement("a", {
                    href: "https://discord.com/invite/xvMJbas",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Discord")), r.a.createElement("p", null, "Follow @icfpcontest2020 on ", r.a.createElement("a", {
                    href: "https://twitter.com/icfpcontest2020",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Twitter")), r.a.createElement("p", null, "Read updates in ", r.a.createElement("a", {
                    href: "https://icfpcontest2020.github.io/#/blog",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "blog"))), r.a.createElement("li", null, r.a.createElement("h2", null, "Get help"), r.a.createElement("p", null, "Check #support in ", r.a.createElement("a", {
                    href: "https://discord.com/invite/xvMJbas",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Discord")), r.a.createElement("p", null, "Write a direct message on ", r.a.createElement("a", {
                    href: "https://twitter.com/icfpcontest2020",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Twitter")), r.a.createElement("p", null, "Have a look at the ", r.a.createElement(p.b, {
                    to: w,
                    target: "_blank"
                }, "rules"))), r.a.createElement("li", null, r.a.createElement("div", null)))), r.a.createElement("section", {
                    className: Y.a.section
                }, r.a.createElement("h2", null, "Something to compete for"), r.a.createElement("ul", {
                    className: Y.a.features
                }, r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83e\udd2a")), r.a.createElement("div", {
                    className: Y.a.features__title
                }, "Fun & joy."), r.a.createElement("div", null, "These are noble feelings to pursue during the contest")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83c\udf96")), r.a.createElement("div", {
                    className: Y.a.features__title
                }, "1st @ lightning division."), r.a.createElement("div", null, "One team will take the 1st place after 24 hours"), r.a.createElement("div", {
                    className: Y.a.features__pro
                }, "Their tools will be named very suitable for rapid prototyping")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83c\udfc5")), r.a.createElement("div", {
                    className: Y.a.features__title
                }, "Judges' prize."), r.a.createElement("div", null, "One team which will do something outstanding will take the judges' prize"), r.a.createElement("div", {
                    className: Y.a.features__pro
                }, "This team will be named an extremely cool bunch of hackers")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83e\udd47")), r.a.createElement("div", {
                    className: Y.a.features__title
                }, "1st @ full contest."), r.a.createElement("div", null, "One team will take the 1st place after 72 hours"), r.a.createElement("div", {
                    className: Y.a.features__pro
                }, "Their tools will be named programming tools of choice for discriminating hackers")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83e\udd48")), r.a.createElement("div", {
                    className: Y.a.features__title
                }, "2nd @ full contest."), r.a.createElement("div", null, "One team will take the 2nd place after 72 hours"), r.a.createElement("div", {
                    className: Y.a.features__pro
                }, "Their tools will be named fine programming tools for many applications")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83e\udd49")), r.a.createElement("div", {
                    className: Y.a.features__title
                }, "3rd @ full contest."), r.a.createElement("div", null, "One team will take the 3rd place after 72 hours"), r.a.createElement("div", {
                    className: Y.a.features__pro
                }, "Their tools will be named not too shabby")))), r.a.createElement("section", {
                    className: Y.a.section
                }, r.a.createElement("h2", null, "Look what has happened at Pegovka Observatory"), r.a.createElement("ul", {
                    className: Y.a.features
                }, r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83d\ude31\ud83d\ude40")), r.a.createElement("div", null, "Read through a ", r.a.createElement("a", {
                    href: "https://pegovka.space",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "surprising story"), " of Russian astronomer Ivan Zaitsev")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83d\udc69\u200d\ud83d\udcbb\ud83d\udc68\u200d\ud83d\udcbb")), r.a.createElement("div", null, "Join the ", r.a.createElement("a", {
                    href: "https://discord.com/invite/xvMJbas",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "collective chat"), " with passionate participants")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.features__emoji
                }, r.a.createElement("span", {
                    role: "img",
                    "aria-label": ""
                }, "\ud83d\udcc8\ud83d\udcc9")), r.a.createElement("div", null, "Recollect what's already known via the ", r.a.createElement("a", {
                    href: "https://message-from-space.readthedocs.io/en/latest/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Read the Docs"), " page"))), r.a.createElement("ul", {
                    className: Y.a.videos
                }, r.a.createElement("li", null, r.a.createElement("iframe", {
                    title: "first-video",
                    width: "444",
                    height: "250",
                    src: "https://www.youtube.com/embed/EjL-5EuQeCU",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                })), r.a.createElement("li", null, r.a.createElement("iframe", {
                    title: "second-video",
                    width: "444",
                    height: "250",
                    src: "https://www.youtube.com/embed/j7kVUaZCcMU",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                })))), r.a.createElement("section", {
                    className: Y.a.section
                }, r.a.createElement("h2", null, "Special thanks"), r.a.createElement("ul", {
                    className: Y.a.thanks
                }, r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.thanks__title
                }, r.a.createElement("a", {
                    href: "https://www.icfpconference.org",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "ICFP")), r.a.createElement("div", {
                    className: Y.a.thanks__script
                }, "for sponsoring ICFP Contest and making it happen for 23 years in a row")), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.thanks__title
                }, r.a.createElement("a", {
                    href: "https://tech.kontur.ru",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Kontur")), r.a.createElement("div", {
                    className: Y.a.thanks__script
                }, "for sponsoring ICFP Contest 2020 and employing the team of its organizers")))), r.a.createElement("section", {
                    className: Y.a.section
                }, r.a.createElement("h2", null, "Warm wishes to our supporters"), r.a.createElement("ul", {
                    className: Y.a.supporters
                }, r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.supporters__title
                }, r.a.createElement("a", {
                    href: "https://adventofcode.com",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Advent of Code")), r.a.createElement("div", {
                    className: Y.a.supporters__script
                }, "and its creator ", r.a.createElement("a", {
                    href: "https://twitter.com/ericwastl",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Eric\xa0Wastl"))), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.supporters__title
                }, r.a.createElement("a", {
                    href: "https://atcoder.jp",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "AtCoder")), r.a.createElement("div", {
                    className: Y.a.supporters__script
                }, "and its founder ", r.a.createElement("a", {
                    href: "https://twitter.com/chokudai",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Naohiro\xa0Takahashi"))), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.supporters__title
                }, r.a.createElement("a", {
                    href: "https://codeforces.com/?locale=en",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Codeforces")), r.a.createElement("div", {
                    className: Y.a.supporters__script
                }, "and its founder ", r.a.createElement("a", {
                    href: "https://twitter.com/MikeMirzayanov",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Mike\xa0Mirzayanov"))), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.supporters__title
                }, r.a.createElement("a", {
                    href: "https://devzen.ru",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "DevZen Podcast")), r.a.createElement("div", {
                    className: Y.a.supporters__script
                }, "and its hosts ", r.a.createElement("a", {
                    href: "https://twitter.com/SBozhko",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Sveta"), ", ", r.a.createElement("a", {
                    href: "https://twitter.com/afiskon",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Aleksander"), ", ", r.a.createElement("a", {
                    href: "https://twitter.com/gliush",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Ivan"), ", and\xa0", r.a.createElement("a", {
                    href: "https://twitter.com/sum3rman",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Valery"))), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.supporters__title
                }, r.a.createElement("a", {
                    href: "https://it-people.ru",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "IT People")), r.a.createElement("div", {
                    className: Y.a.supporters__script
                }, "and its founder ", r.a.createElement("a", {
                    href: "https://twitter.com/gerasimovich_yu",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Yulia\xa0Gerasimovich"))), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.supporters__title
                }, r.a.createElement("a", {
                    href: "https://jugru.org/en/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "JUG Ru Group")), r.a.createElement("div", {
                    className: Y.a.supporters__script
                }, "and its producer ", r.a.createElement("a", {
                    href: "https://twitter.com/23derevo",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Alexey\xa0Fyodorov"))), r.a.createElement("li", null, r.a.createElement("div", {
                    className: Y.a.supporters__title
                }, "And also:"), r.a.createElement("div", {
                    className: Y.a.supporters__script
                }, r.a.createElement("a", {
                    href: "https://twitter.com/ilyasergey",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Ilya\xa0Sergey"), ", ", r.a.createElement("a", {
                    href: "https://twitter.com/nikitonsky",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Nikita\xa0Prokopov"), ", and ", r.a.createElement("a", {
                    href: "https://twitter.com/VBragilevsky",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "Vitaly\xa0Bragilevsky"))))))
            };
            var Q = function() {
                    return r.a.createElement("main", null, r.a.createElement("h2", null, "Contest Rules"), r.a.createElement("h3", null, "1. Participants"), r.a.createElement("p", null, "This is an open contest. Anyone may participate in ICFP Programming Contest 2020 except for its Organizers. Employees of the company which Organizers are affiliated with are not eligible for prizes."), r.a.createElement("h3", null, "2. Teams"), r.a.createElement("p", null, "Contestants are free to organize themselves into teams of any size. A contestant may only be a member of a single team. Teams may not divide, merge, or collaborate after the start of the contest."), r.a.createElement("h3", null, "3. Registration"), r.a.createElement("p", null, "No advance registration or entry fee is required. Teams must register during the contest to obtain a team-specific private identifier that will be used for submissions and profiles. Teams using more than one private identifier during the contest may be disqualified."), r.a.createElement("h3", null, "4. Languages & platforms"), r.a.createElement("p", null, "Teams are free to use any programming language(s) on any platform(s). Some programming languages and platforms may require additional tuning of the submission system. Participants are encouraged to check the ", r.a.createElement("a", {
                        href: "https://github.com/icfpcontest2020/dockerfiles/blob/master/README.md",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "supported languages and platforms"), " in advance and inform Organizers if their language or platform of choice is missing."), r.a.createElement("h3", null, "5. Prizes"), r.a.createElement("p", null, "Teams wishing to be considered for prizes must submit source code at the end of the contest. The exact details of contest submissions will be announced at the start of the contest. Teams may submit multiple times during the contest."), r.a.createElement("p", null, "The Organizers will distribute US $2,000 in prize money between the teams that will take the 1st, the 2nd, and the 3rd places in the contest (full  72-hour division)."), r.a.createElement("h3", null, "6. Records"), r.a.createElement("p", null, "The Organizers retain the right to monitor, record, and investigate the submissions, other contest-related activities, or lack thereof, of contestants and teams. The records are used for the sole purpose of judgment and are discarded once the contest-related events are over."), r.a.createElement("h3", null, "7. Fair play"), r.a.createElement("p", null, "Contestants are kindly asked not to attempt to attack the contest server. That will spoil the fun for the other teams and the Organizers, who worked hard to bring you this experience. Violations of these rules, attempts to compromise the integrity of the contest infrastructure, attempts to interfere with other contestants, collusion between the teams, or attempts to contravene the spirit of the contest will lead to disqualification of the involved contestants and/or teams."), r.a.createElement("h3", null, "8. Intellectual property"), r.a.createElement("p", null, "Contestants retain ownership of all intellectual property rights in and to any submitted solutions, source code, custom tools, and related materials (\u201cSubmissions\u201d) that contestants had before submission. As a condition of submission, contestants grant the Organizers a non-exclusive, perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, publish, distribute, publicly perform and publicly display the Submissions, allowing the Organizers to test and evaluate the Submissions for purposes of the contest."), r.a.createElement("h3", null, "9. Authority"), r.a.createElement("p", null, "All decisions of the Organizers are final."), r.a.createElement("h2", null, "Changelog"), r.a.createElement("h3", null, "Jul 6, 2020 \u2014 1. Participants"), r.a.createElement("p", null, "Organizers deem unfeasible to prevent ~9,000 employees of Kontur, the company which also employs the majority of Organizers, from participation in the contest. However, Organizers declare that they kept secret from their coworkers everything which may give them any competitive advantage. Therefore, Organizers have removed the limitation for employees of Kontur to participate in the contest. At the same time, Organizes have added the rule that employees of Kontur are not eligible for prizes."), r.a.createElement("h3", null, "Jul 6, 2020 \u2014 4. Languages & platforms"), r.a.createElement("p", null, "Organizers have decided to use a particular kind of ", r.a.createElement("a", {
                        href: "https://github.com/icfpcontest2020/dockerfiles/blob/master/README.md",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "submission system"), " for this contest which requires teams to use Git and Docker. Therefore, Organizers have added the suggestion for teams to check the supported languages and platforms in advance."), r.a.createElement("h3", null, "Jul 14, 2020 \u2014 5. Prizes"), r.a.createElement("p", null, "Organizers have clarified the amount of prize money awarded to the winning teams."))
                },
                X = a(65),
                $ = a.n(X),
                ee = {
                    teamName: "",
                    gitRepositoryUrl: "",
                    customData_country: "World",
                    customData_peopleAmount: "",
                    customData_email: ""
                },
                te = a(2),
                ae = a.n(te),
                ne = a(7),
                re = a(26),
                oe = a(4),
                se = a(43),
                le = a.n(se),
                ie = a(34),
                ce = a.n(ie),
                ue = a(48),
                me = ue,
                de = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(u.a)(this, a), (n = t.call(this, e)).onChange = function(e) {
                            return function(t) {
                                var a = t.target.value;
                                n.setState({
                                    teamInfo: Object(oe.a)(Object(oe.a)({}, n.state.teamInfo), {}, Object(re.a)({}, e, a))
                                })
                            }
                        }, n.registerTeam = function() {
                            var e = Object(ne.a)(ae.a.mark((function e(t) {
                                return ae.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), n.validate()) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            n.props.onSubmit(n.state.teamInfo);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.state = {
                            teamInfo: Object(oe.a)({}, e.startValue),
                            validations: {}
                        }, n
                    }
                    return Object(m.a)(a, [{
                        key: "render",
                        value: function() {
                            var e, t = this.props,
                                a = t.isEditForm,
                                n = t.loading;
                            return e = a ? n ? "Updating..." : "Update" : n ? "Registering..." : "Register", r.a.createElement("form", {
                                className: ce.a.form,
                                onSubmit: this.registerTeam
                            }, this.renderRow("Team name *", "teamName", !0, {
                                autoFocus: !a,
                                maxLength: 100
                            }), this.renderRow("Contact email *", "customData_email", !0, {
                                type: "email",
                                maxLength: 100
                            }), this.renderRow("Repository SSH URL *", "gitRepositoryUrl", !0, {
                                maxLength: 1024,
                                placeholder: "git@example.com:user/repo.git"
                            }), this.renderCountrySelect(), this.renderRow("Team size", "customData_peopleAmount", !1, {
                                type: "number",
                                maxLength: 100
                            }), r.a.createElement("div", {
                                className: le.a.buttonRow
                            }, r.a.createElement("span", null), r.a.createElement("div", null, r.a.createElement("button", {
                                type: "submit",
                                disabled: n
                            }, e))))
                        }
                    }, {
                        key: "renderRow",
                        value: function(e, t) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                n = arguments.length > 3 ? arguments[3] : void 0,
                                o = this.state.validations,
                                s = t in o;
                            return r.a.createElement("label", {
                                className: le.a.row
                            }, r.a.createElement("span", null, e), r.a.createElement("span", {
                                style: {
                                    width: "100%"
                                }
                            }, r.a.createElement("input", Object.assign({
                                className: s ? " " + le.a.error : "",
                                name: t,
                                value: this.state.teamInfo[t],
                                required: a,
                                onChange: this.onChange(t)
                            }, n)), s && r.a.createElement(z, {
                                message: o[t],
                                isError: !0
                            })))
                        }
                    }, {
                        key: "renderCountrySelect",
                        value: function() {
                            return r.a.createElement("label", {
                                className: le.a.row
                            }, r.a.createElement("span", null, "Your country"), r.a.createElement("select", {
                                name: "customData_country",
                                value: this.state.teamInfo.customData_country,
                                onChange: this.onChange("customData_country")
                            }, me.map((function(e) {
                                return r.a.createElement("option", {
                                    value: e.value,
                                    key: e.value
                                }, e.text)
                            }))))
                        }
                    }, {
                        key: "validate",
                        value: function() {
                            var e = this.state.teamInfo,
                                t = e.teamName,
                                a = e.gitRepositoryUrl,
                                n = {};
                            return t || (n.teamName = "Team Name is required for registration"), a || (n.gitRepositoryUrl = "Repository SSH URL is required for registration"), /[^@]+@[^@:]+/.test(a) || (n.gitRepositoryUrl = "Make sure the url you enter is a valid SSH URL"), this.setState({
                                validations: n
                            }), 0 === Object.keys(n).length
                        }
                    }]), a
                }(r.a.Component);
            var he = function(e) {
                    return r.a.createElement("div", {
                        className: $.a.root
                    }, r.a.createElement("h2", null, "Team Registration"), r.a.createElement("div", {
                        className: $.a.disclaimer
                    }, r.a.createElement("p", null, "As part of registration, we kindly ask to create a private Git repository for your team and provide its SSH URL."), r.a.createElement("p", null, "Don't worry, all information you enter here can be updated later.")), r.a.createElement(de, {
                        startValue: ee,
                        onSubmit: e.register,
                        loading: e.loading
                    }))
                },
                pe = "_START",
                fe = "_FINISH",
                ve = "application/json";

            function ge(e) {
                return _e(e, {})
            }

            function be(e, t) {
                return _e(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": ve
                    },
                    body: t ? JSON.stringify(t) : void 0
                })
            }

            function ye(e, t) {
                return _e(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: t
                })
            }

            function Ee(e, t) {
                return _e(e, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: t
                })
            }

            function _e(e, t) {
                return fetch(e, t).then(function() {
                    var e = Object(ne.a)(ae.a.mark((function e(t) {
                        var a, n, r, o;
                        return ae.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = null === (a = t.headers.get("Content-Type")) || void 0 === a ? void 0 : a.split(";")[0], !t.ok || n !== ve) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", t.json());
                                case 3:
                                    if (!t.ok) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    if (n !== ve) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 8, t.json();
                                case 8:
                                    return r = e.sent, e.abrupt("return", Promise.reject(r.message || r.error || JSON.stringify(r)));
                                case 10:
                                    return o = "Something went wrong. Server answer is ".concat(t.status).concat(t.statusText ? ":" + t.statusText : ""), e.abrupt("return", Promise.reject(o));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }())
            }
            var we = "https://icfpc2020-api.testkontur.ru",
                xe = "".concat(we, "/teams"),
                ke = "".concat(xe, "/register"),
                Se = "".concat(xe, "/current"),
                Te = "".concat(we, "/submissions"),
                Ne = "".concat(Te, "/other-teams"),
                Ie = "".concat(we, "/events/"),
                Ae = "".concat(we, "/scoreboard"),
                Oe = "".concat(Ae, "/lightning"),
                Ve = "".concat(we, "/tournaments"),
                Re = "".concat(Ve, "/current"),
                Ce = "".concat("/games"),
                Le = "".concat(Ce, "/non-rating"),
                Me = "".concat(Le, "/run"),
                De = "".concat(we, "/logs"),
                je = function(e) {
                    return {
                        type: "SET_ERROR",
                        payload: e
                    }
                };

            function Be(e) {
                return Object.entries(e).map((function(e) {
                    return "".concat(e[0], "=").concat(encodeURIComponent(e[1]))
                })).join("&")
            }
            var Ge = a(88);

            function Pe(e) {
                return Object.entries(e).map((function(e) {
                    var t = Object(Ge.a)(e, 2),
                        a = t[0],
                        n = t[1];
                    return "".concat(a, "=").concat(encodeURIComponent(n))
                })).join("&")
            }
            var Ue = function(e) {
                    return {
                        type: "UPDATE_API_KEY",
                        payload: e
                    }
                },
                Ke = function(e) {
                    return {
                        type: "UPDATE_TEAM",
                        payload: e
                    }
                },
                Fe = function() {
                    return {
                        type: "LOAD_TEAM" + pe
                    }
                },
                We = function() {
                    return {
                        type: "LOAD_TEAM" + fe
                    }
                };
            var He = function(e) {
                    return {
                        type: "",
                        payload: e
                    }
                },
                ze = Object(c.b)((function(e) {
                    return {
                        loading: e.team.teamLoading
                    }
                }), (function(e) {
                    return {
                        register: function(t) {
                            return e((a = He(t), function() {
                                var e = Object(ne.a)(ae.a.mark((function e(t) {
                                    var n, r;
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(Fe()), n = Be(a.payload), e.prev = 2, e.next = 5, ye(ke, n);
                                            case 5:
                                                r = e.sent, window.localStorage.setItem("apiKey", r.apiKey), t(Ue(r.apiKey)), t(Ke(r)), e.next = 14;
                                                break;
                                            case 11:
                                                e.prev = 11, e.t0 = e.catch(2), t(je(e.t0));
                                            case 14:
                                                return e.prev = 14, t(We()), e.finish(14);
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [2, 11, 14, 17]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                            var a
                        }
                    }
                }))(he),
                Je = a(51),
                Ze = a.n(Je),
                Ye = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(u.a)(this, a), (n = t.call(this, e)).onChange = function(e) {
                            n.setState({
                                apiKey: e.target.value
                            })
                        }, n.onSubmit = function() {
                            var e = Object(ne.a)(ae.a.mark((function e(t) {
                                var a;
                                return ae.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), a = n.state.apiKey, n.props.login(a);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.state = {
                            apiKey: ""
                        }, n
                    }
                    return Object(m.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props.loading;
                            return r.a.createElement("div", null, r.a.createElement("h2", null, "Log In"), r.a.createElement("form", {
                                className: "".concat(Ze.a.form, " ").concat(ce.a.form),
                                onSubmit: this.onSubmit
                            }, r.a.createElement("label", {
                                className: Ze.a.row
                            }, r.a.createElement("span", null, "API key"), r.a.createElement("input", {
                                name: "apiKey",
                                required: !0,
                                autoFocus: !0,
                                onChange: this.onChange
                            })), r.a.createElement("label", {
                                className: Ze.a.buttonRow
                            }, r.a.createElement("span", null), r.a.createElement("div", null, r.a.createElement("button", {
                                type: "submit",
                                disabled: e
                            }, e ? "Logging In..." : "Log In")))))
                        }
                    }]), a
                }(r.a.Component),
                qe = Object(c.b)((function(e) {
                    return {
                        loading: e.team.teamLoading
                    }
                }), (function(e) {
                    return {
                        login: function(t) {
                            return e((a = He(t), function() {
                                var e = Object(ne.a)(ae.a.mark((function e(t) {
                                    var n, r;
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(Fe()), n = "".concat(Se, "?").concat(Pe({
                                                    apiKey: a.payload
                                                })), e.prev = 2, e.next = 5, ge(n);
                                            case 5:
                                                r = e.sent, window.localStorage.setItem("apiKey", a.payload), t(Ue(a.payload)), t(Ke(r)), e.next = 14;
                                                break;
                                            case 11:
                                                e.prev = 11, e.t0 = e.catch(2), t(je(e.t0));
                                            case 14:
                                                return e.prev = 14, t(We()), e.finish(14);
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [2, 11, 14, 17]
                                    ])
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                            var a
                        }
                    }
                }))(Ye),
                Qe = a(80),
                Xe = a.n(Qe),
                $e = a(81),
                et = a.n($e),
                tt = a(82),
                at = a.n(tt),
                nt = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            showToast: !1
                        }, e.showToast = function() {
                            e.setState({
                                showToast: !0
                            })
                        }, e.closeToast = function() {
                            e.setState({
                                showToast: !1
                            })
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.state.showToast,
                                t = this.props.rows || 1;
                            return r.a.createElement("form", {
                                className: "".concat(et.a.root, " ").concat(ce.a.form)
                            }, 1 === t && r.a.createElement("input", {
                                type: "text",
                                disabled: !0,
                                value: this.props.value
                            }), 1 !== t && r.a.createElement("textarea", {
                                disabled: !0,
                                rows: t,
                                value: this.props.value
                            }), r.a.createElement("div", null, r.a.createElement(at.a, {
                                text: this.props.value
                            }, r.a.createElement("button", {
                                type: "button",
                                onClick: this.showToast
                            }, "Copy ", this.props.name))), e && r.a.createElement(z, {
                                message: "Copied to clipboard",
                                onClose: this.closeToast
                            }))
                        }
                    }]), a
                }(r.a.Component);
            var rt, ot = function(e) {
                    var t = e.team;
                    if (!t) return null;
                    var a = {
                        teamName: t.teamName,
                        gitRepositoryUrl: t.gitRepositoryUrl,
                        customData_peopleAmount: t.customData.peopleAmount || "",
                        customData_country: t.customData.country || "",
                        customData_email: t.customData.email || ""
                    };
                    return r.a.createElement("main", {
                        className: Xe.a.root
                    }, r.a.createElement("h2", null, "Profile: ", t.teamName), r.a.createElement("h3", null, "API key"), r.a.createElement("p", null, "Beware not to lose your API key. Use it:"), r.a.createElement("ul", null, r.a.createElement("li", null, "to log in to the team profile (this page)"), r.a.createElement("li", null, "to send requests to Organizers' server")), r.a.createElement("br", null), r.a.createElement(nt, {
                        name: "API key",
                        value: t.apiKey
                    }), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("h3", null, "Deploy key"), r.a.createElement("p", null, "Add it to your repository as per ", r.a.createElement("a", {
                        href: "https://github.com/icfpcontest2020/dockerfiles#getting-started",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "submission rules"), "."), r.a.createElement(nt, {
                        name: "Deploy key",
                        value: t.deployKey
                    }), r.a.createElement("br", null), r.a.createElement("br", null), r.a.createElement("h3", null, "Team Info"), r.a.createElement("div", null, r.a.createElement(de, {
                        startValue: a,
                        loading: e.loading,
                        onSubmit: e.editTeam,
                        isEditForm: !0
                    })))
                },
                st = Object(c.b)((function(e) {
                    return {
                        team: e.team.team,
                        loading: e.team.teamLoading
                    }
                }), (function(e) {
                    return {
                        editTeam: function(t) {
                            return e((a = He(t), function() {
                                var e = Object(ne.a)(ae.a.mark((function e(t, n) {
                                    var r, o, s, l, i;
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(Fe()), r = n(), o = r.team.apiKey, s = "".concat(Se, "?").concat(Pe({
                                                    apiKey: o
                                                })), l = Be(a.payload), e.prev = 5, e.next = 8, Ee(s, l);
                                            case 8:
                                                i = e.sent, t(Ke(i)), e.next = 15;
                                                break;
                                            case 12:
                                                e.prev = 12, e.t0 = e.catch(5), t(je(e.t0));
                                            case 15:
                                                return e.prev = 15, t(We()), e.finish(15);
                                            case 18:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [5, 12, 15, 18]
                                    ])
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                            var a
                        }
                    }
                }))(ot),
                lt = a(18),
                it = a.n(lt);
            ! function(e) {
                e.Building = "Building", e.Testing = "Testing", e.Failed_Build = "Failed_Build", e.Failed_Test = "Failed_Test", e.Failed_Unknown = "Failed_Unknown", e.Succeeded = "Succeeded"
            }(rt || (rt = {}));
            var ct = a(83),
                ut = a.n(ct),
                mt = new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    month: "short",
                    day: "2-digit",
                    hour12: !1
                });
            var dt = function(e) {
                var t = e.dateStr,
                    a = new Date(t);
                return r.a.createElement("span", {
                    className: ut.a.root,
                    title: Intl.DateTimeFormat().resolvedOptions().timeZone
                }, mt.format(a))
            };
            var ht = function(e) {
                    return r.a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        width: "25px",
                        height: "20px",
                        viewBox: "20 60 110 90",
                        enableBackground: "new 0 0 150 190",
                        xmlSpace: "preserve"
                    }, r.a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        fill: e.color || "#00bfff",
                        d: "M95.693,86.301c-4.998-4.416-10.621-5.84-14.584-3.823 c-2.53,1.289-4.058,3.9-4.397,7.361l1.697,0.188l2.094,8.631c12.766,0.131,25.108,0.266,33.579,0.337 c6.308,0.053,10.649,1.572,10.649,10.935c0,9.363,0.229,22.767,0.198,28.352c-0.034,6.369-4.154,8.633-9.891,8.726 c-3.172,0.051-65.049-0.578-81.744-0.048c-5.542,0.176-8.242-3.824-8.355-10.988c-0.114-7.164,0.158-18.532,0.158-26.877 c0-8.346,3.366-10.778,10.192-10.778c7.658,0,19.349,0.092,31.781,0.209l2.19-9.509l1.489,0.165 c0.569-5.47,3.272-9.826,7.636-12.047c6.188-3.15,14.329-1.372,21.244,4.641c6.601,5.737,16.484,4.271,21.189-2.913l4.268,3.754 C119.143,92.188,104.568,94.142,95.693,86.301z M112.932,137.325c4.271-4.271-2.671-10.989-7.141-6.52 C101.407,135.189,107.864,142.391,112.932,137.325z M98.204,137.325c4.271-4.271-2.671-10.989-7.141-6.52 C86.679,135.189,93.137,142.391,98.204,137.325z M94.136,124.476c4.077-0.017,12.968-0.183,16.218-0.112 c11.747,0.255,10.067-16.551,1.118-16.775c-8.747-0.219-14.666-0.085-18.694-0.015C82.342,107.754,82.887,124.521,94.136,124.476z M59.696,121.976l-8.083,0.284v-6.991l-8.083,0.172l-0.161,7.109l-8.094,0.285l0.344,7.223l7.576,0.108l-0.181,7.974h8.599v-7.854 l8.083,0.116V121.976z M98.204,119.188c-5.067,5.066-11.525-2.135-7.141-6.52C95.533,108.2,102.476,114.917,98.204,119.188z M112.932,119.188c-5.067,5.066-11.524-2.135-7.141-6.52C110.261,108.2,117.203,114.917,112.932,119.188z"
                    }))
                },
                pt = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).state = {
                            showChangeSubmission: !1
                        }, e.getSubmissions = function() {
                            e.props.loadSubmissions()
                        }, e.stopEvent = function(e) {
                            e.stopPropagation()
                        }, e.closeToast = function() {
                            e.setState({
                                showChangeSubmission: !1
                            })
                        }, e.activateSubmission = function(t) {
                            return function() {
                                t.active || t.status !== rt.Succeeded || e.props.activateSubmission(t.submissionId)
                            }
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.submissions || this.getSubmissions()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.checkLastSeenSubmission(e), this.checkActiveSubmissionChange(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.team,
                                t = this.state.showChangeSubmission;
                            return e ? r.a.createElement("div", null, r.a.createElement("h2", null, "Submissions: ", e.teamName), r.a.createElement("p", {
                                className: it.a.help
                            }, "A successful submission should ", r.a.createElement("code", {
                                className: it.a.branch
                            }, "join"), " and ", r.a.createElement("code", {
                                className: it.a.branch
                            }, "start"), " a game on ", r.a.createElement("a", {
                                href: "https://message-from-space.readthedocs.io/en/latest/game.html#join",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "the alien server"), ".", r.a.createElement("br", null), "Note that any starter kit is no longer a successful submission."), this.renderSubmissions(), this.renderHelpMessage(), t && r.a.createElement(z, {
                                message: "Active submission changed",
                                onClose: this.closeToast
                            })) : null
                        }
                    }, {
                        key: "renderSubmissions",
                        value: function() {
                            var e = this,
                                t = this.props.submissions;
                            return r.a.createElement("table", {
                                className: it.a.table
                            }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "#"), r.a.createElement("th", null, "Commit Message"), r.a.createElement("th", null, "Created At"), r.a.createElement("th", null, "Status"), r.a.createElement("th", null, "Build"), r.a.createElement("th", null, "Test"), r.a.createElement("th", null, "In Rating Games"))), r.a.createElement("tbody", null, t && 0 === t.length && r.a.createElement("tr", null, r.a.createElement("td", {
                                colSpan: 7,
                                style: {
                                    textAlign: "center"
                                }
                            }, r.a.createElement("p", null, "No submissions yet."))), t && t.map((function(t) {
                                return e.renderRow(t)
                            }))))
                        }
                    }, {
                        key: "renderRow",
                        value: function(e) {
                            var t, a, n = this.props.team,
                                o = (t = {}, Object(re.a)(t, rt.Failed_Build, "Build failed"), Object(re.a)(t, rt.Failed_Test, "Test failed"), Object(re.a)(t, rt.Failed_Unknown, "Failed"), Object(re.a)(t, rt.Succeeded, "Test passed"), t)[e.status] || e.status,
                                s = -1 !== o.toLowerCase().indexOf("failed");
                            return r.a.createElement("tr", {
                                key: e.commitHash + e.createdAt,
                                className: e.status !== rt.Succeeded ? "" : it.a.succeeded,
                                onClick: this.activateSubmission(e)
                            }, r.a.createElement("td", null, null === (a = e.commitHash) || void 0 === a ? void 0 : a.substring(0, 6)), r.a.createElement("td", null, r.a.createElement("span", {
                                className: it.a.pre
                            }, e.branchName && r.a.createElement("span", {
                                className: it.a.branch
                            }, "[", e.branchName, "] "), e.commitMessage)), r.a.createElement("td", null, r.a.createElement(dt, {
                                dateStr: e.createdAt
                            })), r.a.createElement("td", {
                                className: s ? it.a.statusFailed : ""
                            }, o), r.a.createElement("td", null, e.buildLogKey && n && r.a.createElement("a", {
                                target: "_blank",
                                rel: "noopener nofollow noreferrer",
                                className: it.a.logLink,
                                onClick: this.stopEvent,
                                href: "https://icfpc2020-api.testkontur.ru/logs/?logKey=".concat(encodeURIComponent(e.buildLogKey), "&apiKey=").concat(n.apiKey)
                            }, "Log")), r.a.createElement("td", null, e.attackerTestLogKey && n && r.a.createElement("div", null, r.a.createElement("a", {
                                target: "_blank",
                                rel: "noopener nofollow noreferrer",
                                className: it.a.logLink,
                                onClick: this.stopEvent,
                                href: "https://icfpc2020-api.testkontur.ru/logs/?logKey=".concat(encodeURIComponent(e.attackerTestLogKey), "&apiKey=").concat(n.apiKey)
                            }, "Attacker Log")), e.defenderTestLogKey && n && r.a.createElement("div", null, r.a.createElement("a", {
                                target: "_blank",
                                rel: "noopener nofollow noreferrer",
                                className: it.a.logLink,
                                onClick: this.stopEvent,
                                href: "https://icfpc2020-api.testkontur.ru/logs/?logKey=".concat(encodeURIComponent(e.defenderTestLogKey), "&apiKey=").concat(n.apiKey)
                            }, "Defender Log"))), r.a.createElement("td", null, e.active ? r.a.createElement(ht, null) : r.a.createElement("button", {
                                className: it.a.icon
                            }, r.a.createElement(ht, null), " play")))
                        }
                    }, {
                        key: "renderHelpMessage",
                        value: function() {
                            return r.a.createElement("div", {
                                className: it.a.help
                            }, r.a.createElement("p", null, "Please note that the ", r.a.createElement("code", {
                                className: it.a.branch
                            }, "[submission]"), " branch is required."), r.a.createElement("p", null, "If you need assistance, please read the ", r.a.createElement("a", {
                                href: "https://github.com/icfpcontest2020/dockerfiles/blob/master/README.md",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "submission rules"), ", then file an ", r.a.createElement("a", {
                                href: "https://github.com/icfpcontest2020/dockerfiles/issues/new?labels=submissions&template=submissions.md&title=Submissions%3A+",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "issue"), "."))
                        }
                    }, {
                        key: "checkLastSeenSubmission",
                        value: function(e) {
                            var t, a;
                            if (this.props.submissions && this.props.submissions.length > 0) {
                                var n = this.props.submissions,
                                    r = !e.submissions && Boolean(this.props.submissions),
                                    o = e.submissions && (null === (t = e.submissions[0]) || void 0 === t ? void 0 : t.submissionId) !== (null === (a = n[0]) || void 0 === a ? void 0 : a.submissionId);
                                if (r || o) {
                                    var s, l = null === (s = n[0]) || void 0 === s ? void 0 : s.submissionId;
                                    this.props.updateLastSeenSubmission(l)
                                }
                            }
                        }
                    }, {
                        key: "checkActiveSubmissionChange",
                        value: function(e) {
                            if (this.props.submissions && e.submissions) {
                                var t = this.props.submissions.find((function(e) {
                                        return e.active
                                    })),
                                    a = e.submissions.find((function(e) {
                                        return e.active
                                    }));
                                t && t.submissionId !== (null === a || void 0 === a ? void 0 : a.submissionId) && this.setState({
                                    showChangeSubmission: !0
                                })
                            }
                        }
                    }]), a
                }(r.a.Component),
                ft = function(e) {
                    return {
                        type: "LOAD_CURRENT_TOURNAMENT",
                        payload: e
                    }
                };
            var vt = function() {
                return {
                    type: "RUN_NON_RATING_GAME" + fe
                }
            };

            function gt() {
                return function() {
                    var e = Object(ne.a)(ae.a.mark((function e(t, a) {
                        var n, r, o, s;
                        return ae.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = a(), r = n.team.apiKey, o = "".concat(Te, "?").concat(Pe({
                                        apiKey: r
                                    })), e.prev = 3, e.next = 6, ge(o);
                                case 6:
                                    s = e.sent, t({
                                        type: "LOAD_SUBMISSIONS",
                                        payload: s
                                    }), e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(3), t(je(e.t0));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 10]
                        ])
                    })));
                    return function(t, a) {
                        return e.apply(this, arguments)
                    }
                }()
            }
            var bt = Object(c.b)((function(e) {
                    return {
                        team: e.team.team,
                        submissions: e.submissions.submissions
                    }
                }), (function(e) {
                    return {
                        loadSubmissions: function() {
                            return e(gt())
                        },
                        updateLastSeenSubmission: function(t) {
                            return e((a = He(t), function(e) {
                                e({
                                    type: "UPDATE_LAST_SEEN_SUBMISSION",
                                    payload: a.payload
                                })
                            }));
                            var a
                        },
                        activateSubmission: function(t) {
                            return e((a = He(t), function() {
                                var e = Object(ne.a)(ae.a.mark((function e(t, n) {
                                    var r, o, s;
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = n(), o = r.team.apiKey, s = "".concat((l = a.payload, "".concat(Te, "/").concat(l, "/activate")), "?").concat(Pe({
                                                    apiKey: o
                                                })), e.prev = 3, e.next = 6, be(s, null);
                                            case 6:
                                                t({
                                                    type: "ACTIVATE_SUBMISSION",
                                                    payload: a.payload
                                                }), e.next = 12;
                                                break;
                                            case 9:
                                                e.prev = 9, e.t0 = e.catch(3), t(je(e.t0));
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                        var l
                                    }), e, null, [
                                        [3, 9]
                                    ])
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                            var a
                        }
                    }
                }))(pt),
                yt = (a(107), a(36)),
                Et = a.n(yt);
            var _t = function(e) {
                    var t = e.location.hash;
                    return r.a.createElement("nav", {
                        className: Et.a.root
                    }, r.a.createElement("ul", {
                        className: Et.a.list
                    }, e.tabs.map((function(e) {
                        return r.a.createElement("li", {
                            className: Et.a.listItem,
                            key: e.text
                        }, r.a.createElement(p.b, {
                            to: e.hash,
                            className: Et.a.link + (t === e.hash ? " " + Et.a.active : "")
                        }, e.text))
                    }))))
                },
                wt = a(49),
                xt = a(5),
                kt = a.n(xt),
                St = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(o))).state = {
                            sortBy: F,
                            sortDirection: Tt.decrease
                        }, e.cellForProblem = function(t) {
                            var a = e.state,
                                n = a.sortBy,
                                o = a.sortDirection,
                                s = t.problemId,
                                l = t.description;
                            "request" === s && (s = "R"), "submission" === s && (s = "T", l = "Made submission passed the test"), s.startsWith("tutorial") && (s = s.replace("tutorial:", ""));
                            var i = "".concat(kt.a.sortButton, " ").concat(n === t.problemId ? o === Tt.decrease ? kt.a.sortDown : kt.a.sortUp : "");
                            return r.a.createElement("th", {
                                key: t.problemId,
                                className: kt.a.alignRight,
                                title: l
                            }, r.a.createElement("button", {
                                onClick: e.changeSorted(t.problemId),
                                className: i
                            }, s))
                        }, e.renderRow = function(t, a) {
                            var n = e.props,
                                o = n.team,
                                s = n.scoreboard,
                                l = t.team;
                            return r.a.createElement("tr", {
                                key: a,
                                className: (null === o || void 0 === o ? void 0 : o.teamId) === l.teamId ? kt.a.activeTeam : ""
                            }, r.a.createElement("td", {
                                className: kt.a.alignCenter
                            }, a + 1), Vt.renderTeamName(l), s.problems.map((function(a) {
                                return e.renderScoreCell(a, t)
                            })), r.a.createElement("td", {
                                className: kt.a.score
                            }, t.score), r.a.createElement("td", {
                                className: kt.a.alignRight
                            }, r.a.createElement(dt, {
                                dateStr: t.solvedAt
                            })))
                        }, e.changeSorted = function(t) {
                            return function() {
                                if (t !== e.state.sortBy) e.setState({
                                    sortBy: t,
                                    sortDirection: Tt.decrease
                                });
                                else {
                                    var a = e.state.sortDirection === Tt.decrease ? Tt.increase : Tt.decrease;
                                    e.setState({
                                        sortDirection: a
                                    })
                                }
                            }
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.sortBy,
                                a = e.sortDirection,
                                n = this.props,
                                o = n.scoreboard,
                                s = n.team,
                                l = Object(wt.a)(o.teams).sort(function(e, t) {
                                    return function(a, n) {
                                        var r, o;
                                        if (e === F) r = {
                                            score: a.score,
                                            solvedAt: a.solvedAt
                                        }, o = {
                                            score: n.score,
                                            solvedAt: n.solvedAt
                                        };
                                        else {
                                            var s = a.problems[e],
                                                l = n.problems[e];
                                            r = s || {
                                                score: 0,
                                                solvedAt: new Date(0)
                                            }, o = l || {
                                                score: 0,
                                                solvedAt: new Date(0)
                                            }
                                        }
                                        return t === Tt.decrease ? r.score > o.score ? -1 : r.score < o.score ? 1 : r.solvedAt < o.solvedAt ? -1 : r.solvedAt > o.solvedAt ? 1 : 0 : r.score < o.score ? -1 : r.score > o.score ? 1 : r.solvedAt > o.solvedAt ? -1 : r.solvedAt < o.solvedAt ? 1 : 0
                                    }
                                }(t, a)),
                                i = !!o.frozenAt && new Date(o.frozenAt) <= new Date;
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", null, "Scoreboard", s && ": " + s.teamName, " ", i && r.a.createElement("span", {
                                className: kt.a.frozenTitle
                            }, " (frozen at ", r.a.createElement(dt, {
                                dateStr: o.frozenAt
                            }), ")")), r.a.createElement("table", {
                                className: kt.a.table
                            }, this.renderHead(l), r.a.createElement("tbody", null, l && l.map(this.renderRow))))
                        }
                    }, {
                        key: "renderHead",
                        value: function(e) {
                            var t = this,
                                a = this.props,
                                n = a.scoreboard,
                                o = a.team,
                                s = this.state,
                                l = s.sortBy,
                                i = s.sortDirection,
                                c = n.problems.length > 0,
                                u = c ? 2 : 1,
                                m = "".concat(kt.a.sortButton, " ").concat(l === F ? i === Tt.decrease ? kt.a.sortDown : kt.a.sortUp : "");
                            return r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {
                                style: {
                                    width: 40
                                },
                                rowSpan: u
                            }, "#"), r.a.createElement("th", {
                                rowSpan: u,
                                className: kt.a.alignLeft
                            }, "Team Name"), c && r.a.createElement("th", {
                                colSpan: n.problems.length
                            }, "Problems"), r.a.createElement("th", {
                                style: {
                                    width: 70
                                },
                                className: kt.a.score,
                                rowSpan: u
                            }, r.a.createElement("button", {
                                className: m,
                                onClick: this.changeSorted(F)
                            }, "Score")), r.a.createElement("th", {
                                rowSpan: u,
                                className: kt.a.alignRight
                            }, "Solved at")), c && r.a.createElement("tr", null, n.problems.map(this.cellForProblem)), e && e.map((function(e, t) {
                                return {
                                    team: e,
                                    i: t
                                }
                            })).filter((function(e) {
                                return e.team.team.teamId === (null === o || void 0 === o ? void 0 : o.teamId) && e.i > 5
                            })).map((function(e) {
                                return t.renderRow(e.team, e.i)
                            })))
                        }
                    }, {
                        key: "renderScoreCell",
                        value: function(e, t) {
                            return r.a.createElement("td", {
                                key: e.problemId,
                                className: kt.a.alignRight,
                                title: e.problemId in t.problems ? "Solved at ".concat(Vt.createDate(t.problems[e.problemId].solvedAt)) : void 0
                            }, e.problemId in t.problems ? t.problems[e.problemId].score : r.a.createElement("span", {
                                className: kt.a.lighten
                            }, "\u2014"))
                        }
                    }]), a
                }(r.a.Component);
            var Tt, Nt = function(e) {
                Object(d.a)(a, e);
                var t = Object(h.a)(a);

                function a(e) {
                    var n;
                    Object(u.a)(this, a), (n = t.call(this, e)).renderTournamentHeadCell = function(e) {
                        var t = n.state,
                            a = t.sortBy,
                            o = t.openTournament,
                            s = "".concat(kt.a.sortButton, " ").concat(a === e.tournamentId ? kt.a.sortDown : ""),
                            l = o === e.tournamentId,
                            i = r.a.createElement("button", {
                                onClick: n.changeSorted(e.tournamentId),
                                className: s
                            }, e.tournamentId),
                            c = "".concat(kt.a.smallRow);
                        return r.a.createElement("td", {
                            key: e.tournamentId,
                            rowSpan: l ? 1 : 2,
                            colSpan: l ? 4 : 1,
                            className: l ? c : kt.a.alignRight,
                            title: e.startedAt ? "Started at ".concat(Vt.createDate(e.startedAt)) : void 0
                        }, l ? e.tournamentId : i)
                    }, n.renderOpenTournamentHeadCell = function(e) {
                        var t = n.state.sortBy,
                            a = "".concat(kt.a.sortButton, " ").concat(t === e.tournamentId ? kt.a.sortDown : ""),
                            o = "".concat(kt.a.alignRight, " ").concat(kt.a.details),
                            s = "".concat(kt.a.alignRight, " ").concat(kt.a.details, " ").concat(kt.a.sortDetails);
                        return [r.a.createElement("td", {
                            key: "rating",
                            className: o
                        }, "Rating"), r.a.createElement("td", {
                            key: "mu",
                            className: o
                        }, "\u03bc"), r.a.createElement("td", {
                            key: "sigma",
                            className: o
                        }, "\u03c3"), r.a.createElement("td", {
                            key: e.tournamentId,
                            className: s,
                            title: e.startedAt ? "Started at ".concat(Vt.createDate(e.startedAt)) : void 0
                        }, r.a.createElement("button", {
                            onClick: n.changeSorted(e.tournamentId),
                            className: a
                        }, "Score"))]
                    }, n.renderRow = function(e, t) {
                        var a, o = n.props.scoreboard,
                            s = n.state.currentTournament,
                            l = n.props.team,
                            i = e.team,
                            c = null === s || void 0 === s ? void 0 : s.tournamentId;
                        return r.a.createElement("tr", {
                            key: e.team.teamId,
                            className: (null === l || void 0 === l ? void 0 : l.teamId) === i.teamId ? kt.a.activeTeam : ""
                        }, r.a.createElement("td", {
                            className: kt.a.alignRight
                        }, t + 1), Vt.renderTeamName(i), r.a.createElement("td", null, c && (null === (a = e.tournaments[c]) || void 0 === a ? void 0 : a.submission.platform)), o.tournaments.filter(It).map((function(t) {
                            return n.renderTournamentCell(t, e)
                        })), r.a.createElement("td", {
                            className: kt.a.score
                        }, e.score))
                    }, n.renderTournamentCell = function(e, t) {
                        var a = n.state.openTournament === e.tournamentId,
                            o = e.tournamentId in t.tournaments,
                            s = "".concat(kt.a.alignRight, " ").concat(kt.a.details),
                            l = "".concat(kt.a.alignRight, " ").concat(kt.a.details, " ").concat(kt.a.sortDetails);
                        return [a && r.a.createElement("td", {
                            key: "rating",
                            className: s
                        }, o && t.tournaments[e.tournamentId].rating.conservativeRating.toFixed(2)), a && r.a.createElement("td", {
                            key: "mu",
                            className: s
                        }, o && t.tournaments[e.tournamentId].rating.mu.toFixed(2)), a && r.a.createElement("td", {
                            key: "sigma",
                            className: s
                        }, o && t.tournaments[e.tournamentId].rating.sigma.toFixed(2)), r.a.createElement("td", {
                            key: e.tournamentId,
                            className: a ? l : kt.a.alignRight
                        }, o ? t.tournaments[e.tournamentId].score : r.a.createElement("span", {
                            className: kt.a.lighten
                        }, "\u2014"))]
                    }, n.changeSorted = function(e) {
                        return function() {
                            e !== n.state.sortBy && n.setState({
                                sortBy: e,
                                openTournament: "string" === typeof e ? n.state.openTournament : e
                            })
                        }
                    };
                    var o = a.getCurrentTournament(e.scoreboard.tournaments);
                    return n.state = {
                        sortBy: F,
                        openTournament: (null === o || void 0 === o ? void 0 : o.tournamentId) || null,
                        currentTournament: o
                    }, n
                }
                return Object(m.a)(a, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.scoreboard,
                            a = e.team,
                            n = this.state.sortBy,
                            o = !!t.frozenAt && new Date(t.frozenAt) <= new Date,
                            s = Object(wt.a)(t.teams).sort(function(e) {
                                return function(t, a) {
                                    var n = e === F ? t.score : t.tournaments[e],
                                        r = e === F ? a.score : a.tournaments[e];
                                    if (!n && !r) return 0;
                                    if (!n && r) return 1;
                                    if (n && !r) return -1;
                                    var o = "number" === typeof n ? n : n.rating.conservativeRating || 0,
                                        s = "number" === typeof r ? r : r.rating.conservativeRating || 0;
                                    return o > s ? -1 : o < s ? 1 : 0
                                }
                            }(n));
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("h2", null, "Scoreboard", a && ": " + a.teamName, " ", o && r.a.createElement("span", {
                            className: kt.a.frozenTitle
                        }, " (frozen at ", r.a.createElement(dt, {
                            dateStr: t.frozenAt
                        }), ")")), this.renderTopText(), r.a.createElement("table", {
                            className: kt.a.table
                        }, this.renderHead(s), r.a.createElement("tbody", null, s.map(this.renderRow))))
                    }
                }, {
                    key: "renderTopText",
                    value: function() {
                        var e = this.state.currentTournament;
                        return r.a.createElement(r.a.Fragment, null, r.a.createElement("p", {
                            className: kt.a.help
                        }, "Ratings are calculated using ", r.a.createElement("a", {
                            href: "https://en.wikipedia.org/wiki/TrueSkill",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "TrueSkill ranking system"), ". Read more about stages and scoring in ", r.a.createElement("a", {
                            href: "https://message-from-space.readthedocs.io/en/latest/game.html#scoring",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }, "our documentation"), "."), e && r.a.createElement("p", {
                            className: kt.a.help
                        }, "Current stage #", null === e || void 0 === e ? void 0 : e.tournamentId, " ends ", r.a.createElement(dt, {
                            dateStr: (null === e || void 0 === e ? void 0 : e.finishedAt) || ""
                        })))
                    }
                }, {
                    key: "renderHead",
                    value: function(e) {
                        var t = this,
                            a = this.props,
                            n = a.scoreboard,
                            o = a.team,
                            s = this.state,
                            l = s.sortBy,
                            i = s.openTournament,
                            c = n.tournaments,
                            u = c.filter(It),
                            m = "".concat(kt.a.sortButton, " ").concat(l === F ? kt.a.sortDown : ""),
                            d = c.find((function(e) {
                                return e.tournamentId === i
                            }));
                        return r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {
                            style: {
                                width: 40
                            },
                            rowSpan: 3
                        }, "#"), r.a.createElement("th", {
                            rowSpan: 3,
                            className: kt.a.alignLeft
                        }, "Team Name"), r.a.createElement("th", {
                            rowSpan: 3,
                            className: kt.a.alignLeft
                        }, "Platform"), r.a.createElement("th", {
                            colSpan: u.length + 3
                        }, "Stages"), r.a.createElement("th", {
                            style: {
                                width: 70
                            },
                            className: kt.a.score,
                            rowSpan: 3
                        }, r.a.createElement("button", {
                            onClick: this.changeSorted(F),
                            className: m
                        }, "Total Score"))), r.a.createElement("tr", null, u.map(this.renderTournamentHeadCell)), r.a.createElement("tr", null, d && this.renderOpenTournamentHeadCell(d)), e && e.map((function(e, t) {
                            return {
                                team: e,
                                i: t
                            }
                        })).filter((function(e) {
                            return e.team.team.teamId === (null === o || void 0 === o ? void 0 : o.teamId) && e.i > 5
                        })).map((function(e) {
                            return t.renderRow(e.team, e.i)
                        })))
                    }
                }], [{
                    key: "getCurrentTournament",
                    value: function(e) {
                        return e.find((function(e) {
                            return e.acceptSubmissions && e.runGames
                        }))
                    }
                }]), a
            }(r.a.Component);

            function It(e) {
                return !(!e.acceptSubmissions || !e.runGames) || !e.acceptSubmissions
            }! function(e) {
                e.increase = "increase", e.decrease = "decrease"
            }(Tt || (Tt = {}));
            var At = [{
                    text: "Lightning",
                    hash: j
                }, {
                    text: "Full Round",
                    hash: B
                }],
                Ot = ue,
                Vt = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        return Object(u.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.loadProblemScoreboard(), this.props.loadTotalScoreboard()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.location,
                                a = e.totalScoreboard,
                                n = e.lightningScoreboard,
                                o = t.hash;
                            return r.a.createElement("div", null, r.a.createElement(_t, {
                                tabs: At,
                                location: t
                            }), o === j && n && r.a.createElement(St, {
                                team: this.props.team,
                                scoreboard: n
                            }), (!o || o === B) && a && r.a.createElement(Nt, {
                                team: this.props.team,
                                scoreboard: a
                            }))
                        }
                    }], [{
                        key: "renderTeamName",
                        value: function(e) {
                            var t = e.customData.country,
                                a = Ot.find((function(e) {
                                    return e.value === t
                                }));
                            return r.a.createElement("td", null, r.a.createElement("span", {
                                className: "flag-icons ".concat(null === a || void 0 === a ? void 0 : a.shortValue),
                                title: null === a || void 0 === a ? void 0 : a.text
                            }), "\xa0", e.teamName)
                        }
                    }, {
                        key: "createDate",
                        value: function(e) {
                            var t = new Date(e);
                            return mt.format(t)
                        }
                    }]), a
                }(r.a.Component),
                Rt = Vt;

            function Ct() {
                return function() {
                    var e = Object(ne.a)(ae.a.mark((function e(t) {
                        var a;
                        return ae.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, ge(Oe);
                                case 3:
                                    a = e.sent, t({
                                        type: "LOAD_PROBLEM_SCOREBOARD",
                                        payload: a
                                    }), e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), t(je(e.t0));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }

            function Lt() {
                return function() {
                    var e = Object(ne.a)(ae.a.mark((function e(t) {
                        var a;
                        return ae.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, ge(Ae);
                                case 3:
                                    a = e.sent, t({
                                        type: "LOAD_SCOREBOARD",
                                        payload: a
                                    }), e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7, e.t0 = e.catch(0), t(je(e.t0));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }
            var Mt = Object(c.b)((function(e) {
                    return {
                        team: e.team.team,
                        lightningScoreboard: e.scoreboard.lightningScoreboard,
                        totalScoreboard: e.scoreboard.totalScoreboard
                    }
                }), (function(e) {
                    return {
                        loadProblemScoreboard: function() {
                            return e(Ct())
                        },
                        loadTotalScoreboard: function() {
                            return e(Lt())
                        }
                    }
                }))(Rt),
                Dt = a(66),
                jt = a.n(Dt),
                Bt = a(84),
                Gt = a.n(Bt),
                Pt = a(37),
                Ut = a.n(Pt);
            var Kt = function(e) {
                var t = e.title,
                    a = e.date,
                    n = e.author,
                    o = e.text,
                    s = e.isInList,
                    l = e.id,
                    i = new Intl.DateTimeFormat("en-GB", {
                        timeZoneName: "short",
                        hour: "numeric",
                        minute: "2-digit",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    });
                return r.a.createElement("article", {
                    className: Ut.a.root + " container"
                }, r.a.createElement("header", {
                    className: Ut.a.header
                }, function(e, t, a) {
                    if (!e) return r.a.createElement("h2", {
                        className: Ut.a.title
                    }, t);
                    return r.a.createElement("h3", {
                        className: Ut.a.title
                    }, r.a.createElement(p.b, {
                        to: "".concat(R, "/").concat(a)
                    }, t))
                }(s, t, l), r.a.createElement("div", {
                    className: Ut.a.subtitle
                }, r.a.createElement("time", null, i.format(new Date(a))), ", by ", n)), r.a.createElement(Gt.a, {
                    linkTarget: "_blank",
                    escapeHtml: !1,
                    source: o
                }))
            };

            function Ft(e) {
                return r.a.createElement("main", {
                    className: jt.a.root
                }, e.posts.map((function(e) {
                    return r.a.createElement("div", {
                        className: jt.a.listItem,
                        key: e.id
                    }, r.a.createElement(Kt, Object.assign({}, e, {
                        isInList: !0
                    })))
                })))
            }
            var Wt = a(41),
                Ht = a(42),
                zt = [{
                    text: "Contest Updates",
                    hash: C
                }, {
                    text: "Pegovka",
                    hash: L
                }];
            var Jt = function(e) {
                    var t = e.location,
                        a = t.hash;
                    return r.a.createElement("div", null, r.a.createElement(_t, {
                        tabs: zt,
                        location: t
                    }), r.a.createElement(Ft, {
                        posts: a === L ? Wt : Ht
                    }))
                },
                Zt = a(44),
                Yt = a.n(Zt);
            var qt, Qt = function(e) {
                    var t = e.match.params.postId,
                        a = Wt.findIndex((function(e) {
                            return e.id === parseInt(t, 10)
                        })),
                        n = Ht.findIndex((function(e) {
                            return e.id === parseInt(t, 10)
                        }));
                    if (-1 === a && -1 === n) return r.a.createElement("p", null, "404: Post Not Found");
                    var o = -1 !== a ? a : n,
                        s = -1 !== a ? Wt : Ht,
                        l = s[o],
                        i = o > 0 && s[o - 1],
                        c = o < s.length - 1 && s[o + 1];
                    return r.a.createElement("div", {
                        className: Yt.a.root
                    }, r.a.createElement(Kt, Object.assign({}, l, {
                        isInList: !1
                    })), r.a.createElement("footer", {
                        className: Yt.a.footer + " container"
                    }, r.a.createElement("div", {
                        className: Yt.a.footerItem
                    }, c && r.a.createElement(r.a.Fragment, null, "Prev: ", r.a.createElement(p.b, {
                        to: "".concat(R, "/").concat(c.id)
                    }, c.title))), r.a.createElement("div", {
                        className: Yt.a.footerItem
                    }, i && r.a.createElement(r.a.Fragment, null, "Next: ", r.a.createElement(p.b, {
                        to: "".concat(R, "/").concat(i.id)
                    }, i.title)))))
                },
                Xt = a(17),
                $t = a.n(Xt),
                ea = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a() {
                        var e;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(o))).state = {
                            attacker: null,
                            defender: null
                        }, e.renderSubmissionRow = function(t) {
                            var a, n = e.state,
                                o = n.attacker,
                                s = n.defender,
                                l = t.submissionId.toString() === o,
                                i = t.submissionId.toString() === s;
                            return r.a.createElement("tr", {
                                key: t.commitHash + t.createdAt
                            }, r.a.createElement("td", null, t.submissionId), r.a.createElement("td", null, null === (a = t.commitHash) || void 0 === a ? void 0 : a.substr(0, 6)), r.a.createElement("td", {
                                className: $t.a.pre
                            }, t.commitMessage), r.a.createElement("td", {
                                className: $t.a.buttons
                            }, r.a.createElement("label", {
                                className: $t.a.chooseButton,
                                title: "play as attacker"
                            }, r.a.createElement("input", {
                                type: "radio",
                                name: "attacker",
                                value: t.submissionId,
                                onChange: e.chooseAttacker,
                                checked: l,
                                className: $t.a.radio
                            }), r.a.createElement(ht, {
                                color: !o || l ? "orange" : "grey"
                            })), r.a.createElement("label", {
                                className: $t.a.chooseButton,
                                title: "play as defender"
                            }, r.a.createElement("input", {
                                type: "radio",
                                name: "defender",
                                value: t.submissionId,
                                onChange: e.chooseDefender,
                                checked: i,
                                className: $t.a.radio
                            }), r.a.createElement(ht, {
                                color: !s || i ? "teal" : "grey"
                            }))))
                        }, e.chooseDefender = function(t) {
                            var a = t.target.value;
                            e.setState({
                                defender: a
                            })
                        }, e.chooseAttacker = function(t) {
                            var a = t.target.value;
                            e.setState({
                                attacker: a
                            })
                        }, e.clearSelection = function() {
                            e.setState({
                                defender: null,
                                attacker: null
                            })
                        }, e.runSelection = function() {
                            var t = e.state,
                                a = t.attacker,
                                n = t.defender;
                            a && n && (e.props.runNonRatingGame({
                                attacker: a,
                                defender: n
                            }), e.setState({
                                attacker: null,
                                defender: null
                            }))
                        }, e
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.submissions,
                                a = e.loadSubmissions,
                                n = e.loadOtherTeamSubmissions;
                            t || a(), n()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.justStarted,
                                t = this.state,
                                a = t.attacker,
                                n = t.defender;
                            return r.a.createElement("div", {
                                className: $t.a.root
                            }, this.renderUserSubmissions(), this.renderOtherTeamsSubmissions(), (a || n) && r.a.createElement(z, {
                                message: this.renderToastContent()
                            }), e && !a && !n && r.a.createElement(z, {
                                message: this.renderSuccessToastContent()
                            }))
                        }
                    }, {
                        key: "renderUserSubmissions",
                        value: function() {
                            var e = this.props.submissions;
                            return r.a.createElement("div", null, r.a.createElement("h3", null, "Your submissions"), r.a.createElement("table", {
                                className: $t.a.table
                            }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "Id"), r.a.createElement("th", null, "Hash"), r.a.createElement("th", null, "Commit message"), r.a.createElement("th", null, "Choose"))), r.a.createElement("tbody", null, null === e || void 0 === e ? void 0 : e.filter((function(e) {
                                return e.status === rt.Succeeded
                            })).map(this.renderSubmissionRow))))
                        }
                    }, {
                        key: "renderOtherTeamsSubmissions",
                        value: function() {
                            var e = this,
                                t = this.props.otherTeams;
                            return r.a.createElement("div", null, r.a.createElement("h3", null, "Other"), r.a.createElement("table", {
                                className: $t.a.table
                            }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "#"), r.a.createElement("th", null, "Team name"), r.a.createElement("th", null, "Choose"))), r.a.createElement("tbody", null, null === t || void 0 === t ? void 0 : t.map((function(t, a) {
                                return e.renderOtherTeamSubmissionRow(t, a, e.props.team)
                            })))))
                        }
                    }, {
                        key: "renderOtherTeamSubmissionRow",
                        value: function(e, t, a) {
                            if (a && a.teamId === e.team.teamId) return null;
                            var n = this.state,
                                o = n.attacker,
                                s = n.defender,
                                l = e.submissionId.toString() === o,
                                i = e.submissionId.toString() === s;
                            return r.a.createElement("tr", {
                                key: e.team.teamId
                            }, r.a.createElement("td", null, t + 1), r.a.createElement("td", null, e.team.teamName), r.a.createElement("td", {
                                className: $t.a.buttons
                            }, r.a.createElement("label", {
                                className: $t.a.chooseButton,
                                title: "play as attacker"
                            }, r.a.createElement("input", {
                                type: "radio",
                                name: "attacker",
                                value: e.submissionId,
                                onChange: this.chooseAttacker,
                                checked: l,
                                className: $t.a.radio
                            }), r.a.createElement(ht, {
                                color: !o || l ? "orange" : "grey"
                            })), r.a.createElement("label", {
                                className: $t.a.chooseButton,
                                title: "play as defender"
                            }, r.a.createElement("input", {
                                type: "radio",
                                name: "defender",
                                value: e.submissionId,
                                onChange: this.chooseDefender,
                                checked: i,
                                className: $t.a.radio
                            }), r.a.createElement(ht, {
                                color: !s || i ? "teal" : "grey"
                            }))))
                        }
                    }, {
                        key: "renderToastContent",
                        value: function() {
                            var e = this.state,
                                t = e.attacker,
                                a = e.defender;
                            return r.a.createElement("div", null, this.createToastText(), r.a.createElement("button", {
                                className: $t.a.toastButton,
                                onClick: this.clearSelection
                            }, "cancel"), t && a && r.a.createElement("button", {
                                className: $t.a.toastButton,
                                onClick: this.runSelection
                            }, "run"))
                        }
                    }, {
                        key: "renderSuccessToastContent",
                        value: function() {
                            return r.a.createElement("div", null, "Non Rating game is running. It will be ", r.a.createElement(p.b, {
                                to: A + D
                            }, "here"))
                        }
                    }, {
                        key: "createToastText",
                        value: function() {
                            var e = this.state,
                                t = e.attacker,
                                a = e.defender,
                                n = "You choose ";
                            return t && (n += "".concat(this.createSubmissionText(t), " as attacker")), t && a && (n += " and "), a && (n += "".concat(this.createSubmissionText(a), " as defender")), n
                        }
                    }, {
                        key: "createSubmissionText",
                        value: function(e) {
                            var t = this.props,
                                a = t.submissions,
                                n = t.otherTeams,
                                r = null === a || void 0 === a ? void 0 : a.find((function(t) {
                                    return t.submissionId.toString() === e
                                })),
                                o = null === n || void 0 === n ? void 0 : n.find((function(t) {
                                    return t.submissionId.toString() === e
                                }));
                            return r ? "your submission #".concat(e) : o ? "team ".concat(o.team.teamName, " submission") : ""
                        }
                    }]), a
                }(r.a.Component),
                ta = Object(c.b)((function(e) {
                    return {
                        team: e.team.team,
                        submissions: e.submissions.submissions,
                        otherTeams: e.submissions.otherTeamSubmissions,
                        justStarted: e.submissions.justStarted
                    }
                }), (function(e) {
                    return {
                        loadSubmissions: function() {
                            return e(gt())
                        },
                        loadOtherTeamSubmissions: function() {
                            return e(function() {
                                var e = Object(ne.a)(ae.a.mark((function e(t, a) {
                                    var n, r, o, s, l, i, c;
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = a(), r = n.team.apiKey, o = n.tournament.current, e.prev = 3, o) {
                                                    e.next = 12;
                                                    break
                                                }
                                                return e.next = 7, ge(Re);
                                            case 7:
                                                l = e.sent, t(ft(l)), s = l.tournamentId, e.next = 13;
                                                break;
                                            case 12:
                                                s = o.tournamentId;
                                            case 13:
                                                return i = "".concat(Ne, "?").concat(Pe({
                                                    apiKey: r,
                                                    tournamentId: s
                                                })), e.next = 16, ge(i);
                                            case 16:
                                                c = e.sent, t({
                                                    type: "LOAD_OTHER_TEAMS_SUBMISSION",
                                                    payload: c
                                                }), e.next = 23;
                                                break;
                                            case 20:
                                                e.prev = 20, e.t0 = e.catch(3), t(je(e.t0));
                                            case 23:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [3, 20]
                                    ])
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        },
                        runNonRatingGame: function(t) {
                            return e((a = He(t), function() {
                                var e = Object(ne.a)(ae.a.mark((function e(t, n) {
                                    var r, o, s;
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t({
                                                    type: "RUN_NON_RATING_GAME" + pe
                                                }), r = n(), o = r.team.apiKey, s = "".concat(Me, "?").concat(Pe({
                                                    apiKey: o,
                                                    attackerSubmissionId: a.payload.attacker,
                                                    defenderSubmissionId: a.payload.defender
                                                })), e.prev = 4, e.next = 7, be(s, null);
                                            case 7:
                                                t({
                                                    type: "RUN_NON_RATING_GAME_SUCCESS"
                                                }), setTimeout((function() {
                                                    return t(vt())
                                                }), 3e3), e.next = 15;
                                                break;
                                            case 11:
                                                e.prev = 11, e.t0 = e.catch(4), t(je(e.t0)), t(vt());
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [4, 11]
                                    ])
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                            var a
                        }
                    }
                }))(ea),
                aa = a(52),
                na = a.n(aa);
            ! function(e) {
                e.Nobody = "Nobody", e.Attacker = "Attacker", e.Defender = "Defender"
            }(qt || (qt = {}));
            var ra, oa, sa, la = [{
                text: "Rating",
                hash: M
            }, {
                text: "Non-Rating",
                hash: D
            }];
            ! function(e) {
                e.attacker = "attacker", e.defender = "defender"
            }(ra || (ra = {})), (sa = oa || (oa = {})).inProgress = "In progress", sa.win = "Win", sa.lose = "Lose", sa.draw = "Draw";
            var ia = function(e) {
                Object(d.a)(a, e);
                var t = Object(h.a)(a);

                function a() {
                    var e;
                    Object(u.a)(this, a);
                    for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++) o[s] = arguments[s];
                    return (e = t.call.apply(t, [this].concat(o))).renderRow = function(t) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.props.team,
                            o = e.calcGameResult(t);
                        return r.a.createElement("tr", {
                            key: t.gameId
                        }, r.a.createElement("td", {
                            className: o ? na.a[o] : void 0,
                            style: {
                                whiteSpace: "nowrap"
                            }
                        }, o), r.a.createElement("td", null, t.attacker.team.teamName, a && (null === n || void 0 === n ? void 0 : n.teamId) === t.attacker.team.teamId ? " #" + t.attacker.submissionId : ""), r.a.createElement("td", null, t.defender.team.teamName, a && (null === n || void 0 === n ? void 0 : n.teamId) === t.defender.team.teamId ? " #" + t.defender.submissionId : ""), r.a.createElement("td", null, o === oa.inProgress ? null : e.renderLogLinks(t)), r.a.createElement("td", null, o !== oa.inProgress && void 0 !== t.ticks && t.ticks >= 0 && r.a.createElement("a", {
                            href: "/#".concat(O, "?game=").concat(t.gameId),
                            rel: "noopener noreferrer",
                            target: "_blank"
                        }, "Watch")), r.a.createElement("td", null, e.renderStats(t)))
                    }, e
                }
                return Object(m.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.ratingGames || this.props.loadRatingGames(), this.props.nonRatingGames || this.props.loadNonRatingGames()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.location.hash;
                        return r.a.createElement("div", null, r.a.createElement(_t, {
                            tabs: la,
                            location: this.props.location
                        }), (!e || e === M) && this.renderRatingGames(), e === D && this.renderNonRatingGames())
                    }
                }, {
                    key: "renderRatingGames",
                    value: function() {
                        var e = this,
                            t = this.props.ratingGames;
                        return r.a.createElement("table", {
                            className: na.a.table
                        }, this.renderTableHeader(), r.a.createElement("tbody", null, t && t.map((function(t) {
                            return e.renderRow(t)
                        }))))
                    }
                }, {
                    key: "renderNonRatingGames",
                    value: function() {
                        var e = this,
                            t = this.props.nonRatingGames;
                        return r.a.createElement("table", {
                            className: na.a.table
                        }, this.renderTableHeader(), r.a.createElement("tbody", null, t && t.map((function(t) {
                            return e.renderRow(t, !0)
                        }))))
                    }
                }, {
                    key: "renderTableHeader",
                    value: function() {
                        return r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", null, "Result"), r.a.createElement("th", null, "Attacker"), r.a.createElement("th", null, "Defender"), r.a.createElement("th", null, "Logs"), r.a.createElement("th", null, "Viz"), r.a.createElement("th", null, "Stats")))
                    }
                }, {
                    key: "renderLogLinks",
                    value: function(e) {
                        var t = this.props.team;
                        return r.a.createElement(r.a.Fragment, null, e.attacker.debugLog && r.a.createElement("div", null, r.a.createElement("a", {
                            href: "".concat(De, "?").concat(Pe({
                                logKey: e.attacker.debugLog,
                                apiKey: null === t || void 0 === t ? void 0 : t.apiKey
                            })),
                            rel: "noopener noreferrer",
                            target: "_blank"
                        }, "attacker debug log")), e.defender.debugLog && r.a.createElement("div", null, r.a.createElement("a", {
                            href: "".concat(De, "?").concat(Pe({
                                logKey: e.defender.debugLog,
                                apiKey: null === t || void 0 === t ? void 0 : t.apiKey
                            })),
                            rel: "noopener noreferrer",
                            target: "_blank"
                        }, "defender debug log")))
                    }
                }, {
                    key: "renderStats",
                    value: function(e) {
                        return r.a.createElement(r.a.Fragment, null, e.createdAt && r.a.createElement("div", {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        }, "Start: ", r.a.createElement(dt, {
                            dateStr: e.createdAt
                        })), e.finishedAt && r.a.createElement("div", {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        }, "Finish: ", r.a.createElement(dt, {
                            dateStr: e.finishedAt
                        })), !!e.ticks && r.a.createElement("div", {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        }, "Duration: ", e.ticks || 0, " ", 1 !== e.ticks ? "ticks" : "tick"), e.defender.timeout && r.a.createElement("div", {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        }, "Defender timeout"), e.attacker.timeout && r.a.createElement("div", {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        }, "Attacker timeout"))
                    }
                }, {
                    key: "calcGameResult",
                    value: function(e) {
                        var t = this.props.team;
                        if (!t) return null;
                        if (!e.winner) return oa.inProgress;
                        if (e.winner === qt.Nobody) return oa.draw;
                        var a = null;
                        return e.attacker.team.teamId === t.teamId && (a = ra.attacker), e.defender.team.teamId === t.teamId && (a = ra.defender), a && e.attacker.team.teamId !== e.defender.team.teamId ? e.winner.toLowerCase() === a ? oa.win : oa.lose : e.winner + " wins"
                    }
                }]), a
            }(r.a.Component);

            function ca() {
                return function() {
                    var e = Object(ne.a)(ae.a.mark((function e(t, a) {
                        var n, r, o, s, l, i, c;
                        return ae.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = a(), r = n.team.apiKey, o = n.tournament.current, e.prev = 3, o) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 7, ge(Re);
                                case 7:
                                    l = e.sent, t(ft(l)), s = l.tournamentId, e.next = 13;
                                    break;
                                case 12:
                                    s = o.tournamentId;
                                case 13:
                                    return i = "".concat(Le, "?").concat(Pe({
                                        apiKey: r,
                                        tournamentId: s
                                    })), e.next = 16, ge(i);
                                case 16:
                                    c = e.sent, t({
                                        type: "LOAD_NON_RATING_GAMES",
                                        payload: c
                                    }), e.next = 23;
                                    break;
                                case 20:
                                    e.prev = 20, e.t0 = e.catch(3), t(je(e.t0));
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 20]
                        ])
                    })));
                    return function(t, a) {
                        return e.apply(this, arguments)
                    }
                }()
            }
            var ua = Object(c.b)((function(e) {
                var t, a;
                return {
                    team: e.team.team,
                    ratingGames: null === (t = e.games.rating) || void 0 === t ? void 0 : t.games,
                    nonRatingGames: null === (a = e.games.nonRating) || void 0 === a ? void 0 : a.games
                }
            }), (function(e) {
                return {
                    loadRatingGames: function() {
                        return e(function() {
                            var e = Object(ne.a)(ae.a.mark((function e(t, a) {
                                var n, r, o, s, l, i, c;
                                return ae.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = a(), r = n.team.apiKey, o = n.tournament.current, e.prev = 3, o) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 7, ge(Re);
                                        case 7:
                                            l = e.sent, t(ft(l)), s = l.tournamentId, e.next = 13;
                                            break;
                                        case 12:
                                            s = o.tournamentId;
                                        case 13:
                                            return i = "".concat(Ce, "?").concat(Pe({
                                                apiKey: r,
                                                tournamentId: s
                                            })), e.next = 16, ge(i);
                                        case 16:
                                            c = e.sent, t({
                                                type: "LOAD_RATING_GAMES",
                                                payload: c
                                            }), e.next = 23;
                                            break;
                                        case 20:
                                            e.prev = 20, e.t0 = e.catch(3), t(je(e.t0));
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 20]
                                ])
                            })));
                            return function(t, a) {
                                return e.apply(this, arguments)
                            }
                        }())
                    },
                    loadNonRatingGames: function() {
                        return e(ca())
                    }
                }
            }))(ia);

            function ma(e) {
                var t = e.team,
                    a = e.isTeamLoading;
                return r.a.createElement(f.d, null, r.a.createElement(f.b, {
                    exact: !0,
                    path: "/",
                    component: q
                }), r.a.createElement(f.b, {
                    path: w,
                    component: Q
                }), r.a.createElement(f.b, {
                    path: x,
                    children: function() {
                        return da(t, r.a.createElement(ze, null))
                    }
                }), r.a.createElement(f.b, {
                    path: k,
                    children: function() {
                        return da(t, r.a.createElement(qe, null))
                    }
                }), r.a.createElement(f.b, {
                    path: S,
                    children: function() {
                        return ha(t, a, r.a.createElement(st, null))
                    }
                }), r.a.createElement(f.b, {
                    path: T,
                    children: function() {
                        return ha(t, a, r.a.createElement(bt, null))
                    }
                }), r.a.createElement(f.b, {
                    path: N,
                    component: Mt
                }), r.a.createElement(f.b, {
                    path: V,
                    component: Jt
                }), r.a.createElement(f.b, {
                    path: "".concat(R, "/:postId"),
                    component: Qt
                }), r.a.createElement(f.b, {
                    path: I,
                    children: function() {
                        return ha(t, a, r.a.createElement(ta, null))
                    }
                }), r.a.createElement(f.b, {
                    path: A,
                    children: function(e) {
                        var n = e.location;
                        return ha(t, a, r.a.createElement(ua, {
                            location: n
                        }))
                    }
                }), r.a.createElement(f.b, {
                    path: N,
                    children: function(e) {
                        var t = e.location;
                        return r.a.createElement(Mt, {
                            location: t
                        })
                    }
                }))
            }

            function da(e, t) {
                return e ? r.a.createElement(f.a, {
                    to: S
                }) : t
            }

            function ha(e, t, a) {
                return e || t ? e ? a : null : r.a.createElement(f.a, {
                    to: k
                })
            }
            var pa, fa, va, ga, ba = a(67),
                ya = a(87);
            ! function(e) {
                e.Submission = "Submission", e.Scoreboard = "Scoreboard", e.LightningScoreboard = "LightningScoreboard", e.NonRatingGame = "NonRatingGame", e.Team = "Team"
            }(pa || (pa = {})),
            function(e) {
                e.Added = "Added", e.BuildStatusChanged = "BuildStatusChanged", e.Activated = "Activated", e.TestStatusChanged = "TestStatusChanged"
            }(fa || (fa = {})),
            function(e) {
                e.Added = "Added", e.Finished = "Finished"
            }(va || (va = {})),
            function(e) {
                e.Updated = "Updated", e.Activated = "Activated", e.Deactivated = "Deactivated"
            }(ga || (ga = {}));
            var Ea, _a, wa, xa, ka, Sa = a(27);
            a(190);

            function Ta(e, t, a) {
                var n = document.getElementById("field"),
                    r = document.getElementById("console");
                if (n && r) {
                    var o = n,
                        s = o.getContext("2d");
                    if (s) {
                        var l, i = s,
                            c = 10,
                            u = 0,
                            m = {
                                isSucceeded: (l = e)[0],
                                gameType: l[1],
                                gameStatus: l[2],
                                ticks: l[3],
                                players: l[4].map(Na),
                                gameLog: l[5] && 0 !== l[5][0] ? Ia(l[5]) : void 0
                            },
                            d = !0,
                            h = 0,
                            p = 100,
                            f = function() {
                                v(), x()
                            };
                        window.addEventListener("resize", f), document.body.addEventListener("keydown", g), o.addEventListener("click", _), v(), x(), y()
                    }
                }

                function v() {
                    o.width = window.innerWidth - 64, o.height = window.innerHeight - 260 + t
                }

                function g(e) {
                    if (m.gameLog) {
                        var t = e.code;
                        if ("ArrowRight" === t || "KeyD" === t) w(1), b();
                        else if ("ArrowLeft" === t || "KeyA" === t) w(-1), b();
                        else if ("Home" === t || "KeyQ" === t) u = 0, b();
                        else if ("End" === t || "KeyE" === t) u = m.gameLog.ticks.length - 1, b();
                        else if ("Equal" === t) c *= 1.2;
                        else if ("Minus" === t) c /= 1.2;
                        else if ("Comma" === t) p = Math.min(1e3, p + 10), b(), y();
                        else if ("Period" === t) p = Math.max(20, p - 10), b(), y();
                        else {
                            if ("KeyP" !== t && "Space" !== t) return;
                            h ? b() : y()
                        }
                        e.preventDefault(), x()
                    }
                }

                function b() {
                    clearTimeout(h), h = 0
                }

                function y() {
                    h = setInterval(E, p)
                }

                function E() {
                    w(1), x(), m.gameLog && u >= m.gameLog.ticks.length - 1 && (b(), a && (window.removeEventListener("resize", f), document.body.removeEventListener("keydown", g), o.removeEventListener("click", _), a()))
                }

                function _() {
                    d = !d, x()
                }

                function w(e) {
                    m.gameLog && (u = Math.min(m.gameLog.ticks.length - 1, Math.max(0, u + e)))
                }

                function x() {
                    m.gameLog && function(e) {
                        var t = e.ships;
                        (function(e) {
                            for (; c > .2 && e.some((function(e) {
                                    return !T(e.ship.position)
                                }));) c /= 1.2
                        })(t), void i.clearRect(0, 0, o.width, o.height), m.gameLog && m.gameLog.planet && m.gameLog.planet.safeRadius >= 0 && (a = m.gameLog.planet.safeRadius, i.fillStyle = "rgb(0,0,0)", i.fill(V(0, 0, a)));
                        var a;
                        m.gameLog && m.gameLog.planet && m.gameLog.planet.radius >= 0 && function(e) {
                            i.fillStyle = "white", i.fill(V(0, 0, e))
                        }(m.gameLog.planet.radius);
                        (function(e) {
                            if (!d) return;
                            i.globalAlpha = .5;
                            var t, a = Object(Sa.a)(e);
                            try {
                                for (a.s(); !(t = a.n()).done;) {
                                    var n = t.value,
                                        r = I(n.ship, 15),
                                        o = new Path2D;
                                    o.moveTo(A(n.ship.position.x + .5), O(n.ship.position.y + .5));
                                    var s, l = Object(Sa.a)(r);
                                    try {
                                        for (l.s(); !(s = l.n()).done;) {
                                            var c = s.value,
                                                u = A(c.x + .5),
                                                m = O(c.y + .5);
                                            o.lineTo(u, m)
                                        }
                                    } catch (h) {
                                        l.e(h)
                                    } finally {
                                        l.f()
                                    }
                                    i.strokeStyle = Ca(n.ship), i.stroke(o)
                                }
                            } catch (h) {
                                a.e(h)
                            } finally {
                                a.f()
                            }
                            i.globalAlpha = 1
                        })(t),
                        function(e) {
                            var t, a = Object(Sa.a)(e);
                            try {
                                for (a.s(); !(t = a.n()).done;) {
                                    var n, r = t.value,
                                        o = Object(Sa.a)(r.appliedCommands);
                                    try {
                                        for (o.s(); !(n = o.n()).done;) {
                                            var s = n.value,
                                                l = {
                                                    type: s[0],
                                                    payload: s.slice(1)
                                                };
                                            l.type === Ea.Detonate ? S(r.ship, l) : l.type === Ea.Shoot && k(r.ship, l)
                                        }
                                    } catch (i) {
                                        o.e(i)
                                    } finally {
                                        o.f()
                                    }
                                }
                            } catch (i) {
                                a.e(i)
                            } finally {
                                a.f()
                            }
                        }(t);
                        var n, s = Object(Sa.a)(t);
                        try {
                            for (s.s(); !(n = s.n()).done;) {
                                N(n.value.ship)
                            }
                        } catch (f) {
                            s.e(f)
                        } finally {
                            s.f()
                        }
                        var l, u = "".concat(e.tick),
                            h = Object(Sa.a)(t);
                        try {
                            for (h.s(); !(l = h.n()).done;) {
                                var p = l.value;
                                u += '<p style="color: '.concat(Ca(p.ship), '">').concat(JSON.stringify(p), "</p>")
                            }
                        } catch (f) {
                            h.e(f)
                        } finally {
                            h.f()
                        }
                        r && (r.innerHTML = u)
                    }(m.gameLog.ticks[u])
                }

                function k(e, t) {
                    var a = t.payload[0],
                        n = (t.payload[2], t.payload[3], new Path2D);
                    n.moveTo(A(e.position.x + .5), O(e.position.y + .5)), n.lineTo(A(a[0] + .5), O(a[1] + .5)), i.fillStyle = "white", i.fill(V(a[0], a[1], 1)), i.strokeStyle = "yellow", i.stroke(n)
                }

                function S(e, t) {
                    i.fillStyle = "magenta", i.fill(V(e.position.x, e.position.y, 10))
                }

                function T(e) {
                    var t = A(e.x),
                        a = O(e.y);
                    return t > 0 && t < o.width && a > 0 && a < o.height
                }

                function N(e) {
                    var t = e.position;
                    i.fillStyle = Ca(e), i.fill(V(t.x, t.y))
                }

                function I(e, t) {
                    for (var a = [], n = {
                            position: e.position,
                            velocity: e.velocity
                        }, r = 0; r < t; r++) {
                        var o = Math.abs(n.position.x),
                            s = Math.abs(n.position.y),
                            l = Math.max(o, s),
                            i = Object(oe.a)({}, n.velocity);
                        m.gameLog && m.gameLog.planet && m.gameLog.planet.radius >= 0 && (o === l && (i.x -= Math.sign(n.position.x)), s === l && (i.y -= Math.sign(n.position.y))), n.velocity = i, n.position = {
                            x: n.position.x + n.velocity.x,
                            y: n.position.y + n.velocity.y
                        }, a.push(n.position)
                    }
                    return a
                }

                function A(e) {
                    return o.width / 2 - c / 2 + e * c
                }

                function O(e) {
                    return o.height / 2 - c / 2 + e * c
                }

                function V(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = new Path2D,
                        r = (2 * a + 1) * c,
                        o = A(e - a),
                        s = O(t - a),
                        l = 4;
                    return r < l && (o -= (l - r) / 2, s -= (l - r) / 2, r = l), n.rect(o, s, r, r), n
                }
            }

            function Na(e) {
                return {
                    role: e[0],
                    score: e[1],
                    status: e[2]
                }
            }

            function Ia(e) {
                return {
                    planet: e[0] && e[0][1] ? Aa(e[0]) : void 0,
                    ticks: e[1].map(Oa)
                }
            }

            function Aa(e) {
                return {
                    radius: e[0],
                    safeRadius: e[1]
                }
            }

            function Oa(e) {
                return {
                    tick: e[0],
                    ships: e[1].map(Va)
                }
            }

            function Va(e) {
                return {
                    ship: Ra(e[0]),
                    appliedCommands: e[1]
                }
            }

            function Ra(e) {
                return {
                    role: e[0],
                    shipId: e[1],
                    position: {
                        x: e[2][0],
                        y: e[2][1]
                    },
                    velocity: {
                        x: e[3][0],
                        y: e[3][1]
                    },
                    x4: e[4],
                    x5: e[5],
                    x6: e[6],
                    x7: e[7]
                }
            }

            function Ca(e) {
                return e.role === _a.Defender ? "teal" : "orange"
            }

            function La() {
                return window.location.hash.replace(/#\/[^?]*\?/, "").split("&").map((function(e) {
                    return e.split("=")
                })).reduce((function(e, t) {
                    return e[t[0].toLowerCase()] = t[1], e
                }), {})
            }! function(e) {
                e[e.BurnFuel = 0] = "BurnFuel", e[e.Detonate = 1] = "Detonate", e[e.Shoot = 2] = "Shoot", e[e.SplitShip = 3] = "SplitShip"
            }(Ea || (Ea = {})),
            function(e) {
                e[e.Attacker = 0] = "Attacker", e[e.Defender = 1] = "Defender"
            }(_a || (_a = {})),
            function(e) {
                e[e.AttackDefense = 0] = "AttackDefense", e[e.Tutorial_Fly = 1] = "Tutorial_Fly", e[e.Tutorial_Detonate = 2] = "Tutorial_Detonate", e[e.Tutorial_Burn = 3] = "Tutorial_Burn", e[e.Tutorial_BurnWithOverheat = 4] = "Tutorial_BurnWithOverheat", e[e.Tutorial_Radiators = 5] = "Tutorial_Radiators", e[e.Tutorial_ShootOne = 6] = "Tutorial_ShootOne", e[e.Tutorial_ShootZeroTempTarget = 7] = "Tutorial_ShootZeroTempTarget", e[e.Tutorial_ShootAttackers = 8] = "Tutorial_ShootAttackers", e[e.Tutorial_FlyAndShootTarget = 9] = "Tutorial_FlyAndShootTarget", e[e.Tutorial_Split = 10] = "Tutorial_Split", e[e.Tutorial_Planet = 11] = "Tutorial_Planet", e[e.Tutorial_ShootSatellite = 12] = "Tutorial_ShootSatellite", e[e.Tutorial_KillDefenderBoss = 13] = "Tutorial_KillDefenderBoss"
            }(wa || (wa = {})),
            function(e) {
                e[e.New = 0] = "New", e[e.Joined = 1] = "Joined", e[e.InProgress = 2] = "InProgress", e[e.Finished = 3] = "Finished"
            }(xa || (xa = {})),
            function(e) {
                e[e.NotJoined = 0] = "NotJoined", e[e.Thinking = 1] = "Thinking", e[e.ReadyToGo = 2] = "ReadyToGo", e[e.Won = 3] = "Won", e[e.Lost = 4] = "Lost", e[e.Tied = 5] = "Tied"
            }(ka || (ka = {}));
            var Ma = function(e) {
                Object(d.a)(a, e);
                var t = Object(h.a)(a);

                function a() {
                    var e;
                    Object(u.a)(this, a);
                    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return (e = t.call.apply(t, [this].concat(r))).runAutoGames = Object(ne.a)(ae.a.mark((function t() {
                        var a, n, r, o, s;
                        return ae.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (a = e.props.apiKey) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5, fetch("".concat(Ce, "/interesting-games/?").concat(Pe({
                                        apiKey: a
                                    }))).then((function(e) {
                                        return e.json()
                                    }));
                                case 5:
                                    n = t.sent, r = Object(Sa.a)(n), t.prev = 7, s = ae.a.mark((function t() {
                                        var a, n;
                                        return ae.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return a = o.value, n = new Promise((function(t) {
                                                        e.getLog(a, void 0, (function() {
                                                            t()
                                                        }))
                                                    })), t.next = 4, n;
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })), r.s();
                                case 10:
                                    if ((o = r.n()).done) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.delegateYield(s(), "t0", 12);
                                case 12:
                                    t.next = 10;
                                    break;
                                case 14:
                                    t.next = 19;
                                    break;
                                case 16:
                                    t.prev = 16, t.t1 = t.catch(7), r.e(t.t1);
                                case 19:
                                    return t.prev = 19, r.f(), t.finish(19);
                                case 22:
                                    e.runAutoGames();
                                case 23:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [7, 16, 19, 22]
                        ])
                    }))), e.getLog = function() {
                        var t = Object(ne.a)(ae.a.mark((function t(a, n, r) {
                            var o, s, l, i, c, u, m, d;
                            return ae.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!a) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.prev = 1, o = "https://logs.rumbletoon.com/games/".concat(a), t.next = 5, fetch(o).then((function(e) {
                                            return e.text()
                                        }));
                                    case 5:
                                        return s = t.sent, l = s.replace(/\(/g, "[").replace(/\)/g, "]"), i = "https://logs.rumbletoon.com/games/".concat(a, ".json"), t.next = 10, fetch(i).then((function(e) {
                                            return e.json()
                                        }));
                                    case 10:
                                        c = t.sent, Ta(JSON.parse(l), r ? 130 : 0, r), e.renderTitle(c), t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t.catch(1), r && r();
                                    case 18:
                                        return t.abrupt("return");
                                    case 19:
                                        if (!n) {
                                            t.next = 33;
                                            break
                                        }
                                        return t.prev = 20, u = "".concat(Ce, "/log?").concat(Pe({
                                            playerKey: n
                                        })), t.next = 24, fetch(u).then((function(e) {
                                            return e.text()
                                        }));
                                    case 24:
                                        m = t.sent, d = m.replace(/\(/g, "[").replace(/\)/g, "]"), Ta(JSON.parse(d), r ? 170 : 40, r), t.next = 32;
                                        break;
                                    case 29:
                                        t.prev = 29, t.t1 = t.catch(20), r && r();
                                    case 32:
                                        return t.abrupt("return");
                                    case 33:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 15],
                                [20, 29]
                            ])
                        })));
                        return function(e, a, n) {
                            return t.apply(this, arguments)
                        }
                    }(), e
                }
                return Object(m.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        this.runGame()
                    }
                }, {
                    key: "runGame",
                    value: function() {
                        var e = La(),
                            t = e.game,
                            a = e.playerkey;
                        e.autogames ? this.runAutoGames() : (t || a) && this.getLog(t, a)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = La(),
                            t = e.game,
                            a = {
                                color: "gray"
                            },
                            n = e.autogames;
                        return r.a.createElement("div", {
                            id: "visualizerWrapper"
                        }, !n && r.a.createElement("ul", {
                            className: "instruction"
                        }, r.a.createElement("li", null, r.a.createElement("span", {
                            style: a
                        }, "Controls:"), " A D Q E ", r.a.createElement("span", {
                            style: a
                        }, "/"), " \u2190 \u2192 Home End"), r.a.createElement("li", null, r.a.createElement("span", {
                            style: a
                        }, "Trajectories:"), " click"), r.a.createElement("li", null, r.a.createElement("span", {
                            style: a
                        }, "Autoplay:"), " Space , . -"), r.a.createElement("li", null, r.a.createElement("span", {
                            style: a
                        }, "Zoom:"), " + -")), t && r.a.createElement("h3", {
                            id: "title"
                        }, "\xa0"), r.a.createElement("canvas", {
                            id: "field",
                            width: 800,
                            height: 500
                        }), r.a.createElement("div", {
                            id: "console"
                        }))
                    }
                }, {
                    key: "renderTitle",
                    value: function(e) {
                        var t = document.getElementById("title");
                        if (t) {
                            var a = e.attacker.team.teamName,
                                n = e.defender.team.teamName,
                                r = e.winner && e.winner !== qt.Nobody ? e.winner : null,
                                o = '<span class="attacker '.concat(r === qt.Defender ? "streak" : "", '">').concat(a, "</span>"),
                                s = '<span class="defender '.concat(r === qt.Attacker ? "streak" : "", '">').concat(n, "</span>");
                            t.innerHTML = "".concat(s, " vs ").concat(o)
                        }
                    }
                }]), a
            }(r.a.Component);

            function Da() {
                var e;
                try {
                    var t = La();
                    t.apikey ? (e = t.apikey, window.localStorage.setItem("apiKey", e)) : e = window.localStorage.getItem("apiKey")
                } catch (a) {}
                return e
            }
            var ja = function(e) {
                    Object(d.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        Object(u.a)(this, a), (n = t.call(this, e)).listener = void 0, n.deleteApiKey = function() {
                            try {
                                window.localStorage.getItem("apiKey") === n.props.apiKey && window.localStorage.removeItem("apiKey")
                            } catch (e) {}
                            n.setState({
                                hasApiKey: !1
                            }), n.props.updateApiKey(null), n.props.updateTeam(null)
                        }, n.closeError = function() {
                            n.props.setError(null)
                        };
                        var r = Da();
                        return n.state = {
                            hasApiKey: Boolean(r),
                            apiKey: r
                        }, n
                    }
                    return Object(m.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Da();
                            e && (this.props.updateApiKey(e), this.props.loadTeam())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.listener && this.listener.close()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = !e.team && Boolean(this.props.team);
                            Boolean(e.team) && !this.props.team && this.listener && this.listener.close(), t && this.addListeners()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.hasApiKey,
                                a = e.apiKey,
                                n = this.props,
                                o = n.team,
                                s = n.error,
                                l = t && !o;
                            return r.a.createElement(r.a.Fragment, null, r.a.createElement(p.a, null, r.a.createElement(f.d, null, r.a.createElement(f.b, {
                                path: O,
                                children: function() {
                                    return r.a.createElement(Ma, {
                                        apiKey: a
                                    })
                                }
                            }), r.a.createElement(f.b, null, r.a.createElement("div", {
                                className: g.a.container
                            }, r.a.createElement(K, {
                                team: o,
                                isTeamLoading: l,
                                logout: this.deleteApiKey
                            }), r.a.createElement("div", {
                                className: g.a.narrowContainer
                            }, r.a.createElement(ma, {
                                team: o,
                                isTeamLoading: l
                            })))))), null !== s && r.a.createElement(J, {
                                error: s,
                                closeError: this.closeError
                            }))
                        }
                    }, {
                        key: "addListeners",
                        value: function() {
                            var e = this;
                            this.props.apiKey && (this.listener = function(e, t) {
                                var a = {},
                                    n = !1,
                                    r = !1,
                                    o = "".concat(Ie, "?").concat(Pe({
                                        sticky: Object(ya.uuid)(),
                                        apiKey: e
                                    })),
                                    s = (new ba.a).withUrl(o).withAutomaticReconnect().configureLogging(ba.b.Information).build();

                                function l() {
                                    return i.apply(this, arguments)
                                }

                                function i() {
                                    return (i = Object(ne.a)(ae.a.mark((function e() {
                                        return ae.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!n) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 2:
                                                    return e.prev = 2, e.next = 5, s.start();
                                                case 5:
                                                    r = !0, console.log("connected"), e.next = 14;
                                                    break;
                                                case 9:
                                                    return e.prev = 9, e.t0 = e.catch(2), console.log("failed to start", e.t0), setTimeout((function() {
                                                        return l()
                                                    }), 1e4), e.abrupt("return");
                                                case 14:
                                                    return e.next = 16, m();
                                                case 16:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [2, 9]
                                        ])
                                    })))).apply(this, arguments)
                                }

                                function c() {
                                    return u.apply(this, arguments)
                                }

                                function u() {
                                    return (u = Object(ne.a)(ae.a.mark((function e() {
                                        return ae.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, s.stop();
                                                case 3:
                                                    e.next = 8;
                                                    break;
                                                case 5:
                                                    e.prev = 5, e.t0 = e.catch(0), console.log("failed to stop", e.t0);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 5]
                                        ])
                                    })))).apply(this, arguments)
                                }

                                function m() {
                                    return d.apply(this, arguments)
                                }

                                function d() {
                                    return (d = Object(ne.a)(ae.a.mark((function e() {
                                        var t;
                                        return ae.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (e.prev = 0, !(t = Object.entries(a).filter((function(e) {
                                                            return e[1]
                                                        })).map((function(e) {
                                                            return e[0]
                                                        }))).length) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 5, s.send("subscribe", t.join(","));
                                                case 5:
                                                    e.next = 9;
                                                    break;
                                                case 7:
                                                    return e.next = 9, s.send("subscribe", 0);
                                                case 9:
                                                    console.log("subscribed", t), e.next = 17;
                                                    break;
                                                case 12:
                                                    return e.prev = 12, e.t0 = e.catch(0), console.log("failed to subscribe", e.t0), e.next = 17, c();
                                                case 17:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 12]
                                        ])
                                    })))).apply(this, arguments)
                                }
                                return s.onclose(Object(ne.a)(ae.a.mark((function e() {
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                console.log("closed"), r = !1, n || setTimeout((function() {
                                                    return l()
                                                }), 1e4);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))), s.on("onEvent", (function(e, a) {
                                    n || (console.log(e, a), t(e, a))
                                })), l(), {
                                    close: function() {
                                        n = !0, c()
                                    },
                                    subscribe: function(e) {
                                        a[e] = !0, r && m()
                                    },
                                    unsubscribe: function() {
                                        var e = Object(ne.a)(ae.a.mark((function e(t) {
                                            return ae.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        a[t] = !1, r && m();
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()
                                }
                            }(this.props.apiKey, (function(t, a) {
                                if (a) switch (t) {
                                    case pa.Submission:
                                        return e.props.loadSubmissions();
                                    case pa.Team:
                                        return e.props.loadTeam();
                                    case pa.LightningScoreboard:
                                        return e.props.loadLightningScoreboard();
                                    case pa.Scoreboard:
                                        return e.props.loadScoreboard();
                                    case pa.NonRatingGame:
                                        return e.props.loadNonRatingGames()
                                }
                            })), this.listener.subscribe(pa.Submission), this.listener.subscribe(pa.Team), this.listener.subscribe(pa.LightningScoreboard), this.listener.subscribe(pa.Scoreboard), this.listener.subscribe(pa.NonRatingGame))
                        }
                    }]), a
                }(r.a.Component),
                Ba = Object(c.b)((function(e) {
                    return {
                        apiKey: e.team.apiKey,
                        team: e.team.team,
                        error: e.app.error
                    }
                }), (function(e) {
                    return {
                        updateApiKey: function(t) {
                            return e((a = He(t), function(e) {
                                e(Ue(a.payload))
                            }));
                            var a
                        },
                        updateTeam: function(t) {
                            return e((a = He(t), function(e) {
                                e(Ke(a.payload))
                            }));
                            var a
                        },
                        loadTeam: function() {
                            return e(function() {
                                var e = Object(ne.a)(ae.a.mark((function e(t, a) {
                                    var n, r, o, s;
                                    return ae.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t(Fe()), n = a(), r = n.team.apiKey, o = "".concat(Se, "?").concat(Pe({
                                                    apiKey: r
                                                })), e.prev = 4, e.next = 7, ge(o);
                                            case 7:
                                                s = e.sent, t(Ke(s)), e.next = 14;
                                                break;
                                            case 11:
                                                e.prev = 11, e.t0 = e.catch(4), t(je(e.t0));
                                            case 14:
                                                return e.prev = 14, t(We()), e.finish(14);
                                            case 17:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [4, 11, 14, 17]
                                    ])
                                })));
                                return function(t, a) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        },
                        setError: function(t) {
                            return e((a = He(t), function(e) {
                                e(je(a.payload))
                            }));
                            var a
                        },
                        loadSubmissions: function() {
                            return e(gt())
                        },
                        loadLightningScoreboard: function() {
                            return e(Ct())
                        },
                        loadScoreboard: function() {
                            return e(Lt())
                        },
                        loadNonRatingGames: function() {
                            return e(ca())
                        }
                    }
                }))(ja),
                Ga = {
                    error: null
                };
            var Pa = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ga,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "SET_ERROR":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                error: t.payload
                            });
                        default:
                            return e
                    }
                },
                Ua = {
                    apiKey: null,
                    team: null,
                    teamLoading: !1
                };
            var Ka = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ua,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "UPDATE_API_KEY":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                apiKey: t.payload
                            });
                        case "UPDATE_TEAM":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                team: t.payload
                            });
                        case "LOAD_TEAM" + pe:
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                teamLoading: !0
                            });
                        case "LOAD_TEAM" + fe:
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                teamLoading: !1
                            });
                        default:
                            return e
                    }
                },
                Fa = {
                    submissions: null,
                    lastSeen: null,
                    otherTeamSubmissions: null,
                    running: !1,
                    justStarted: !1
                };
            var Wa = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fa,
                        a = arguments.length > 1 ? arguments[1] : void 0;
                    switch (a.type) {
                        case "LOAD_SUBMISSIONS":
                            return Object(oe.a)(Object(oe.a)({}, t), {}, {
                                submissions: a.payload
                            });
                        case "UPDATE_LAST_SEEN_SUBMISSION":
                            return Object(oe.a)(Object(oe.a)({}, t), {}, {
                                lastSeen: a.payload
                            });
                        case "ACTIVATE_SUBMISSION":
                            return Object(oe.a)(Object(oe.a)({}, t), {}, {
                                submissions: null === (e = t.submissions) || void 0 === e ? void 0 : e.map((function(e) {
                                    return e.submissionId === a.payload ? Object(oe.a)(Object(oe.a)({}, e), {}, {
                                        active: !0
                                    }) : e.active ? Object(oe.a)(Object(oe.a)({}, e), {}, {
                                        active: !1
                                    }) : e
                                }))
                            });
                        case "LOAD_OTHER_TEAMS_SUBMISSION":
                            return Object(oe.a)(Object(oe.a)({}, t), {}, {
                                otherTeamSubmissions: a.payload
                            });
                        case "RUN_NON_RATING_GAME" + pe:
                            return Object(oe.a)(Object(oe.a)({}, t), {}, {
                                running: !0
                            });
                        case "RUN_NON_RATING_GAME_SUCCESS":
                            return Object(oe.a)(Object(oe.a)({}, t), {}, {
                                running: !1,
                                justStarted: !0
                            });
                        case "RUN_NON_RATING_GAME" + fe:
                            return Object(oe.a)(Object(oe.a)({}, t), {}, {
                                running: !1,
                                justStarted: !1
                            });
                        default:
                            return t
                    }
                },
                Ha = {
                    lightningScoreboard: null,
                    totalScoreboard: null
                };
            var za = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ha,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "LOAD_PROBLEM_SCOREBOARD":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                lightningScoreboard: t.payload
                            });
                        case "LOAD_SCOREBOARD":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                totalScoreboard: t.payload
                            });
                        default:
                            return e
                    }
                },
                Ja = {
                    current: null
                };
            var Za = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ja,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "LOAD_CURRENT_TOURNAMENT":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                current: t.payload
                            });
                        default:
                            return e
                    }
                },
                Ya = {
                    rating: null,
                    nonRating: null
                };
            var qa = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ya,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "LOAD_RATING_GAMES":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                rating: t.payload
                            });
                        case "LOAD_NON_RATING_GAMES":
                            return Object(oe.a)(Object(oe.a)({}, e), {}, {
                                nonRating: t.payload
                            });
                        default:
                            return e
                    }
                },
                Qa = Object(l.c)({
                    app: Pa,
                    team: Ka,
                    submissions: Wa,
                    scoreboard: za,
                    tournament: Za,
                    games: qa
                }),
                Xa = Object(l.d)(Qa, Object(l.a)(i.a));
            s.a.render(r.a.createElement(c.a, {
                store: Xa
            }, r.a.createElement(Ba, null)), document.getElementById("root"))
        },
        3: function(e, t, a) {
            e.exports = {
                root: "styles_root__2xfq7",
                subtitle: "styles_subtitle__3h6J1",
                audiences: "styles_audiences__19Dt0",
                audiences__emoji: "styles_audiences__emoji__14Rms",
                audiences__scope: "styles_audiences__scope__3mOb8",
                timer: "styles_timer__2AN8b",
                timer__download: "styles_timer__download__2TgKw",
                section: "styles_section__3heFa",
                section__title: "styles_section__title__g5_Gi",
                section__cta: "styles_section__cta__2Ajtu",
                features: "styles_features__2ceUO",
                features__double: "styles_features__double__58VQ0",
                features__emoji: "styles_features__emoji__Se29P",
                features__title: "styles_features__title__6TdBU",
                features__pro: "styles_features__pro__2v0M3",
                demos: "styles_demos__SQAUW",
                tweet: "styles_tweet__1TlJk",
                videos: "styles_videos__Hy-LD",
                thanks: "styles_thanks__14zDs",
                thanks__title: "styles_thanks__title__1SWZB",
                thanks__script: "styles_thanks__script__2XAoZ",
                supporters: "styles_supporters__2at3v",
                supporters__title: "styles_supporters__title__39ocH",
                supporters__script: "styles_supporters__script__b6DMP",
                video: "styles_video__1EF-v"
            }
        },
        30: function(e, t, a) {
            e.exports = {
                root: "styles_root__2e9Hh",
                subtitle: "styles_subtitle__Cnbu2",
                note: "styles_note__3GPDT",
                blink: "styles_blink__1lnWj",
                wide: "styles_wide__8QXQS",
                navMenu: "styles_navMenu__21UOb",
                navMenuLinks: "styles_navMenuLinks__2uUkI",
                logoutWrapper: "styles_logoutWrapper__3pqjI",
                links: "styles_links__21dbQ",
                link: "styles_link__3vf9Z",
                activeLink: "styles_activeLink__3cx_h",
                titleLink: "styles_titleLink__3mE_7",
                logoutLink: "styles_logoutLink__1fnhg"
            }
        },
        34: function(e, t, a) {
            e.exports = {
                form: "forms_form__3YnzN"
            }
        },
        36: function(e, t, a) {
            e.exports = {
                root: "styles_root__1yrlt",
                list: "styles_list__3I-q0",
                listItem: "styles_listItem__1gwLr",
                link: "styles_link__2wKUa",
                active: "styles_active__3YV-O"
            }
        },
        37: function(e, t, a) {
            e.exports = {
                root: "styles_root__1fIrI",
                title: "styles_title__3Gvai",
                subtitle: "styles_subtitle__356-R",
                header: "styles_header__Gm18o"
            }
        },
        41: function(e) {
            e.exports = JSON.parse('[{"id":1033,"date":"2020-07-17T17:10:00.450+05:00","author":"Ivan Zaitsev","title":"Ping \u2014 Pong!","text":"Hi.\\n\\nAs you have recently suggested on [Discord](https://discord.gg/xvMJbas), we have transmitted the modulated representation of number 42 to a possible location of the recently discovered spacecraft.\\n\\nOh my\u2014 Oh my goggles! It looks like we\'ve made the right thing! At least I hope so.\\n\\nThe spacecraft is not going anywhere. It is transmitting new messages! We have already received a bunch of them and it looks like more are coming.  \\n\\nI will decode them and add to [previous messages](https://message-from-space.readthedocs.io/en/latest/index.html). If only you had enough time and dedication to help the scientific community to understand them for the greater good of the humankind!"},{"id":1032,"date":"2020-07-16T18:03:28.940+05:00","author":"Ivan Zaitsev","title":"It\u2019s a Tra... Spacecraft!","text":"<iframe width=\\"640\\" height=\\"340\\" src=\\"https://www.youtube.com/embed/6ks0Gzc1SOE\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\nOK, folks. This is BIG. We\u2019ve just got the [new message](https://message-from-space.readthedocs.io/en/latest/message15.html).\\n\\n![message 15](/images/message15.png)\\n\\nAnd even if I don\u2019t understand the whole meaning of it, it is obvious that it is coming from a spacecraft that is flying nearby our planet.\\n\\nWe will try to locate this spacecraft and send a message to it. Meanwhile you keep [deciphering the message](https://discord.gg/xvMJbas). Your work is very important. Keep up!"},{"id":1031,"date":"2020-07-12T18:02:23.001+05:00","author":"Ivan Zaitsev","title":"Following the Advice of Our Audience","text":"During the last few days several people have asked me via the [Discord chat](https://discord.gg/xvMJbas) to share the original raw transmission data from our telescope. I don\u2019t see the point in doing this, because all the transmissions so far seem uniform. Sharing images is much more convenient than sharing WAV files: image files consume less bandwidth and are much easier to comprehend visually.\\n\\nBut thinking about this and discussing this idea inspired our team to further investigate the variations in strength and carrier frequency of the transmissions. \\n\\nFirst of all, the carrier frequency decreases over time. This kind of observation is usually explained by the Doppler effect and suggests that the source is accelerating in a direction away from us.\\n\\nSecond, the strength of the signal increases ever-so-slightly from one transmission to another. This effect suggests that the source is moving towards us.\\n\\nWe\u2019re not ready to make any hard statements at this time. Our equipment is not perfect, and this effect can be caused by slight deviations of the positioning of our antenna. But if true, these observations may suggest that the source of the transmissions is moving towards the Earth and is slowing down.\\n\\nAs usual, join us in the [Discord chat](https://discord.gg/xvMJbas) to decipher [today\u2019s message](https://message-from-space.readthedocs.io/en/latest/message10.html)."},{"id":1030,"date":"2020-07-10T17:59:56.834+05:00","author":"Ivan Zaitsev","title":"Not a Reflection Either","text":"We\u2019re still receiving regular radio transmissions from the same region of the sky. You can see the eighth one in [our documentation](https://message-from-space.readthedocs.io/en/latest/message8.html) and join the dicussion in [our chat](https://discord.gg/xvMJbas).\\n\\nAs far as our investigation goes, we\u2019ve checked all the registered objects in this specific sector: comets, asteroids, satellites, known space garbage. Any one of these objects could theoretically reflect a signal from elsewhere, even from the Earth. Neither of these objects fits the uniform time pattern of the transmissions. We have to rule out this possibility.\\n\\nIt is also peculiar that no other observatories have reported receiving any similar messages yet. We will continue our search for knowledge."},{"id":1029,"date":"2020-07-08T18:00:01.302+05:00","author":"Ivan Zaitsev","title":"The Origin Is Still Unknown","text":"We\u2019ve checked the specifications of each piece of our radio equipment and analyzed the archives of our observations for the past five years. We found nothing that would support our suspicion of a terrestrial origin of the signal.\\n\\nWe\u2019ve also consulted with several computer security specialists and checked the raw telescope data to rule out malicious hacker activity. So far our investigation results support the extraterrestrial origin theory.\\n\\nOur research group will continue the investigation. Meanwhile, [join us](https://discord.gg/xvMJbas) in dechipering [today\u2019s message](https://message-from-space.readthedocs.io/en/latest/message6.html)."},{"id":1028,"date":"2020-07-08T02:32:55.089+05:00","author":"Ivan Zaitsev","title":"What Do We Know So Far?","text":"We\u2019ve got five radio transmissions while monitoring a region of sky around HD 190360. We\u2019re not sure of the source, but we strongly suspect that they are not coming from a star system 52 lightyears away.\\n\\nWe suspect that humans are the intended recipients of these messages because the transmissions are so precisely synchronized with the rotation of our planet. So far each message was received around 12:45 UTC every day, except for the first one.\\n\\nThe messages are frequency-encoded bit sequences that align neatly into 2D rectangles suggested by a frame. We have some theories on how to interpret them. Most of the theories are speculative until we get more information.\\n\\nThe first two messages introduce glyphs used to denote the natural numbers. The third message extends this construction to the negative numbers. The fourth message probably introduces the equality sign. The fifth message probably introduces the successor (+1) function for numbers and the application operator.\\n\\nThanks to our [Discord chat](https://discord.gg/xvMJbas) participants, we have nice tooling that allows us to render images from a radio transmission and to annotate these images with known glyph interpretations:\\n\\n![annotated image from day 5](/images/message5-annotated-full.svg)"},{"id":1027,"date":"2020-07-06T18:03:30.422+05:00","author":"Ivan Zaitsev","title":"Not a Distant Planet?","text":"Today I\u2019ve got good news and also somewhat worrying news for you.\\n\\nFirst, there is a transmission. Posted to [docs](https://message-from-space.readthedocs.io/en/latest/message4.html), as always. Some new glyphs for you to decipher.\\n\\nSecond, I think we have something to worry about. There is a strong suspicion among my colleagues that this signal comes not from a distant planet at all. We will thoroughly investigate this and try to eliminate possible terrestrial and low-orbit sources of this signal. I\u2019ll get back to you with more details later."},{"id":1026,"date":"2020-07-05T18:00:09.078+05:00","author":"Ivan Zaitsev","title":"Once Is Luck, Twice Is Coincidence, Three Times Is a Pattern","text":"Not entirely unexpected, we got a third message today. I\u2019ve already posted it to our [documentation page](https://message-from-space.readthedocs.io/en/latest/message3.html). Can somebody take a look?\\n\\nFeels like this is not the last one. What\u2019s weird: we get these transmissions precisely at the same time each day, **around 12:45 UTC**. It\u2019s almost like whatever sends them knows about us, and our planet is the intended target of these messages. Otherwise, why would timing of these messages be synchronized to the rotation of our planet?\\n\\nI\u2019ll be monitoring our radiotelescope carefully during the same time window tomorrow, expecting more answers from the Universe.\\n\\nJoin me in our [Discord chat](https://discord.gg/xvMJbas) to share your ideas and interpretations!"},{"id":1025,"date":"2020-07-04T18:02:34.670+05:00","author":"Ivan Zaitsev","title":"One Small Step for Scientists and Engineers, a Giant Leap for Mankind","text":"<iframe width=\\"640\\" height=\\"360\\" src=\\"https://www.youtube.com/embed/j7kVUaZCcMU\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\n Hi.\\n\\nYesterday I posted a video asking for your help deciphering a strange radio signal from space. Thanks to my friends from the [ICFP Contest](https://twitter.com/icfpcontest2020/status/1278965948461056000), it was a tremendous success.\\n\\nWith help from enthusiasts all over the world we were able to make [great progress](https://message-from-space.readthedocs.io/en/latest/radio-transmission-recording.html) in understanding the message. Thank you very much to all the participants!\\n\\nFirst of all, we understand that the signal is probably a sequence of frequency-encoded ones and zeroes. When arranged into a particular two-dimensional grid they look like a picture that makes sense to a human eye!\\n\\n![transmission signal in 2d](images/radio-transmission-2d.png)\\n\\nSecond, we have some theories on how to interpret this picture. It looks like a binary encoding of numbers from 1 to 8 that follows a regular pattern that can be extended further to construct any natural number. However, we don\u2019t have any hard data to support our construction\u2026\\n\\n![how to encode numbers](images/numbers-encoding4.png)\\n\\nOkay, here is the exciting part! I just got a second message! I\u2019m going to apply the code I got from you yesterday to convert this second signal into a picture. I\u2019ll post this picture to [a separate page](https://message-from-space.readthedocs.io/en/latest/message2.html) in our documentation so we can collaborate on the explanation.\\n\\nSo excited! Can\u2019t wait to [work with you](https://discord.gg/xvMJbas) once again!"},{"id":1024,"date":"2020-07-03T12:10:18.321+05:00","author":"Ivan Zaitsev","title":"A Personal Appeal to Scientists and Engineers From All Over the World","text":"<iframe width=\\"640\\" height=\\"360\\" src=\\"https://www.youtube.com/embed/EjL-5EuQeCU\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>\\n\\n Hello.\\n\\nMy name is Ivan Zaitsev. I\'m a staff astronomer at Pegovka observatory in the Urals region of Russia.\\n\\nSeveral days ago we have been monitoring radio signals from a small region of sky around [HD 190360](http://simbad.u-strasbg.fr/simbad/sim-id?Ident=HD+190360) for our exoplanet research purposes. We have registered a peculiar radio transmission which cannot be attributed to any natural source in this area.\\n\\nWe tried to analyze and decode this message. But we don\'t have any trained deciphering specialists here on site, and we don\'t have appropriate software to analyze this message. We have made very little progress so far.\\n\\nI believe that decoding this message can lead to a major breakthrough in our understanding of the Universe. I believe that science should be a joint effort. Together we can crack this problem much faster that any single research group.\\n\\nThat\'s why I decided to publish a [recording of this message](https://message-from-space.readthedocs.io/en/latest/_downloads/822b494d13eb35a97f159e041a004fa9/radio-transmission-recording.wav) and create a [special documentation page](https://message-from-space.readthedocs.io/en/latest/radio-transmission-recording.html) to collaborate on the explanation.\\n\\nIf you have any idea at all on how to decode and explain the message, please send a Pull Request to the [appropriate page](https://github.com/zaitsev85/message-from-space/blob/master/source/radio-transmission-recording.rst)! We cannot move forward without this!\\n\\nSincerely,\\nIvan Zaitsev\\n\\nP.S. Don\'t hesitate to join my personal [chat server](https://discord.gg/xvMJbas) to combine our efforts in the spirit of open scientific collaboration."},{"id":1023,"date":"2015-06-29T18:04:55.780+05:00","author":"Ivan Zaitsev","title":"No Title","text":"![flowers](/images/flowers.jpeg)\\n\\nPetunias look great this year!"},{"id":0,"date":"2008-03-21T02:14:43.890+05:00","author":"Ivan Zaitsev","title":"First Post","text":"Dear diary,\\n\\nI don\'t know why I\'m here. Maybe one day I\'ll need a place for amazing news about space. So I\'ll try to blog something interesting once in a while."}]')
        },
        42: function(e) {
            e.exports = JSON.parse('[{"id":2059,"date":"2020-07-19T14:15:00.000+05:00","author":"Igor Lukanin","title":"Relatively Fresh News From the World of Reverse-Engineering","text":"Numerous clicks had to be applied to our \u201c[galaxy evaluator](https://icfpcontest2020.github.io/#/post/2055)\u201d to evolve our understanding of the alien protocol. We believe that it\'s a major achievement. Here\'s why:\\n\\nFirst, it enabled us to create the game visualizer (behold it in <b>Games</b> section).\\n\\nSecond, we included every bit of this novel knowledge into the [documentation](https://message-from-space.readthedocs.io/en/latest/game.html#protocol). We think this would help teams to take part in the \u201clocal tournament\u201c. We mean, definitely have a look at it.\\n\\nP.S. Seriously, isn\'t it [beautiful](https://twitter.com/icfpcontest2020/status/1284633483005100034)?"},{"id":2058,"date":"2020-07-19T01:40:00.000+05:00","author":"Igor Lukanin","title":"Please Evaluate Our Galaxy Evaluator","text":"Running the galaxy protocol from the [message #42](https://message-from-space.readthedocs.io/en/latest/message42.html) may still be a tough thing to do. Pavel Egorov has written a short \u201c[galaxy evaluator](https://message-from-space.readthedocs.io/en/latest/implementation.html)\u201d which is guaranteed to work. It\'s in pseudo code so no team will get competitive advantage using it."},{"id":2057,"date":"2020-07-18T22:45:00.000+05:00","author":"Igor Lukanin","title":"Full Contest Scoring Rules","text":"As promised, we\'ve published the [scoring rules](https://message-from-space.readthedocs.io/en/latest/game.html#scoring) for the full contest.\\n\\nWe\'ve triggered the re-evaluation of your submissions. Note that any starter kit is no longer a successful submission. Please check if your submission is still successful.\\n\\nHappy hacking!"},{"id":2056,"date":"2020-07-18T18:45:00.000+05:00","author":"Igor Lukanin","title":"HOW TO ACTUALLY WIN THE CONTEST","text":"Hi. We have news!\\n\\nAfter a little bit of tinkering with our own \u201c[galaxy evaluator](https://icfpcontest2020.github.io/#/post/2055)\u201d we\'ve come to understanding about the true meaning of images we get by running any \u201cevaluator\u201d.\\n\\nWe were able to understand what the \u201caliens\u201d [want to express](https://message-from-space.readthedocs.io/en/latest/game.html).\\n\\nSince we have to combine this \u201calien story\u201d with the ICFP Contest, we\'ve decided to recognize the winners of the \u201c[local tournament](https://message-from-space.readthedocs.io/en/latest/game.html)\u201c as the winners of the ICFP Contest. The exact scoring rules will be published soon.\\n\\nWe encourage you to study the \u201calien story\u201d, bravely fight the \u201cbattles\u201d, and gloriously win the \u201clocal tournament\u201d. Good luck!"},{"id":2055,"date":"2020-07-18T16:30:00.000+05:00","author":"Igor Lukanin","title":"Galaxy Notes","text":"We\'re so much thrilled to watch the teams progressing through the lightning round (which ends on July 18 at 13:00 UTC) and posting [beautiful images](https://twitter.com/icfpcontest2020/status/1284413782937280512) of their galaxies in [Discord](https://discord.gg/xvMJbas). It took some time and effort to create our own \u201cgalaxy evaluator\u201d and render our own images properly.\\n\\nFirst, we decided to [overlay all images](https://twitter.com/icfpcontest2020/status/1284425816458383360) with different opacities.\\n\\nSecond, we found a way to [enter two-dimensional vectors](https://twitter.com/icfpcontest2020/status/1284432081787944960) into the evaluator. We use mouse clicks for that as every click produces a convenient <b>(x,y)</b> pair.\\n\\nThird, we\'ve got our hands on the galaxy. [So beautiful!](https://twitter.com/icfpcontest2020/status/1284432799009824768)\\n\\nFourth, we continued to explore. We immediately saw that our evaluator sent something to our own proxy! And we\'ve got [very complicated images](https://twitter.com/icfpcontest2020/status/1284435466209693696) as a result. As of this moment, we have no idea about their meaning.\\n\\nWe hope that our galaxy notes will help you to render your own images!\\n\\nP.S. We\'re glad to see that participants continue to contribute more detailed interpretations of the messages. In particular, we like the [message #38](https://message-from-space.readthedocs.io/en/latest/message38.html)."},{"id":2054,"date":"2020-07-18T04:15:00.000+05:00","author":"Igor Lukanin","title":"How to Run the Galaxy (Video Course)","text":"Running the galaxy protocol from the [message #42](https://message-from-space.readthedocs.io/en/latest/message42.html) may be a tough thing to do. Pavel Egorov has recorded a short video course which addresses this issue. Watch [Part 1](https://www.youtube.com/watch?v=Jfd20wOImnI), [Part 2](https://www.youtube.com/watch?v=oU4RAEQCTDE), and [Part 3](https://www.youtube.com/watch?v=A4WdLfHWZF0)."},{"id":2053,"date":"2020-07-18T00:00:00.000+05:00","author":"Igor Lukanin","title":"Galaxy as an Interaction Protocol","text":"We\'ve compiled all knowledge available in [Discord](https://discord.gg/xvMJbas) about the message #42 and updated the docs. Have a look at the [interpretation](https://message-from-space.readthedocs.io/en/latest/message42.html) if you\'re confused or in need of a gentle nudge."},{"id":2052,"date":"2020-07-17T22:30:00.000+05:00","author":"Igor Lukanin","title":"SCORE POINTS & WIN CONTEST","text":"Okay, we\'re ready to publish the [REALLY HUGE message](https://icfpcontest2020.github.io/#/post/2049). We\'ve decided not to render it as an image and just [publish it as text](https://message-from-space.readthedocs.io/en/latest/message42.html). Really, who has a monitor this large?\\n\\nWe\'ve also enabled the [scoreboard](https://icfpcontest2020.github.io/#/scoreboard). To score points and win the lightning round (which ends on July 18 at 13:00 UTC), we ask you to make progress with understanding that REALLY HUGE message. Feel free to collaborate in [Discord](https://discord.gg/xvMJbas) or play secretly.\\n\\nNote that you can get 1 point right now for using the [proxy](https://icfpcontest2020.github.io/#/post/2051). Also, for historical reasons, you can still get 1 point for making a successful [submission](https://github.com/icfpcontest2020/dockerfiles/blob/master/README.md)."},{"id":2051,"date":"2020-07-17T21:55:00.000+05:00","author":"Igor Lukanin","title":"A Proxy to Send Messages to Space","text":"Ready!\\n\\nWe\'ve added a few <b>AlienApi</b> methods to the API we\'ve already prepared for the contest and glued them to the antenna at Pegovka Observatory. Hope it\'ll be working flawlessly.\\n\\nSo, here\'s our [Swagger documentation](https://icfpc2020-api.testkontur.ru/swagger) for the API.\\n\\nAll you need is the API key from your team profile."},{"id":2050,"date":"2020-07-17T21:25:00.000+05:00","author":"Igor Lukanin","title":"Everyone Has a Say","text":"When Ivan Zaitsev read the suggestion to transmit something to the spacecraft again in regard to the [message #36](https://message-from-space.readthedocs.io/en/latest/message36.html) in [Discord](https://discord.gg/xvMJbas), he was energized. We modulated a list of a single zero element for Ivan, and he transmitted that message with his antenna at Pegovka Observatory.\\n\\nAnd\u2026 he got the response! This one: <b>110110000111011111100001001111110101000000</b>.\\n\\nWhen Ivan repeated the transmission after approximately 10 seconds, he received another response: <b>110110000111011111100001001111110100110000</b>.\\n\\nNeither Ivan, nor we have any idea about the meaning of these responses. That\'s why now we\'re going to create a proxy so any team is able to transmit something and get something in return.\\n\\nCan\'t wait to share this proxy with you!"},{"id":2049,"date":"2020-07-17T19:25:00.000+05:00","author":"Igor Lukanin","title":"A Huge Message is Coming, and Text is Better Than Images","text":"We\'re really amused by the great progress you\'re making with [decoding the messages](https://message-from-space.readthedocs.io/en/latest/). We\'re monitoring the chat in [Discord](https://discord.gg/xvMJbas) for your suggestions on the meaning of messages and names for unknown symbols appearing in these messages. We\'re updating the documentation accordingly. Keep going!\\n\\nAt the same time, we have more news from Pegovka Observatory! Our friend Ivan Zaitsev says that a new message which appears to be REALLY HUGE is being received right now. We don\'t really know if we\'ll be able to render this message as an image. In this case, we\'ll post this message as text. That is why it is very important that you give names to unknown symbols in the messages.\\n\\nWe\'ll make a new post when this REALLY HUGE message is ready."},{"id":2048,"date":"2020-07-17T18:00:00.000+05:00","author":"Igor Lukanin","title":"Welcome to the Contest","text":"Dear participants of the ICFP Contest 2020. We have prepared a great contest for you! But we have strong reasons to throw it out and ask you to put your efforts into something else.\\n\\nOur friend Ivan Zaitsev, a staff astronomer at Pegovka Observatory, has recently become a part of a very peculiar story. During the last two weeks he has received many messages from an unidentified source which was later recognized as a spacecraft. Ivan has made some progress in decoding and understanding the messages but recently the spacecraft has [transmitted a lot more](https://message-from-space.readthedocs.io/en/latest/).\\n\\nPlease help to decode the messages! The humankind needs your help.\\n\\nIvan will be right here with the ICFP Contest organizers. Reach out to him on [Discord](https://discord.gg/xvMJbas)."}]')
        },
        43: function(e, t, a) {
            e.exports = {
                row: "styles_row__1BPlo",
                buttonRow: "styles_buttonRow__1LLhO",
                blackText: "styles_blackText__1nUbW",
                error: "styles_error__7j77G"
            }
        },
        44: function(e, t, a) {
            e.exports = {
                root: "styles_root__BUQrS",
                footer: "styles_footer__OF_kJ",
                footerItem: "styles_footerItem__JxyTB"
            }
        },
        48: function(e) {
            e.exports = JSON.parse('[{"value":"World","text":"World","shortValue":"WW"},{"value":"EUR","text":"European Union","shortValue":"EU"},{"value":"AFG","text":"Afghanistan","shortValue":"AF"},{"value":"ALA","text":"\xc5land Islands","shortValue":"AX"},{"value":"ALB","text":"Albania","shortValue":"AL"},{"value":"DZA","text":"Algeria","shortValue":"DZ"},{"value":"ASM","text":"American Samoa","shortValue":"AS"},{"value":"AND","text":"Andorra","shortValue":"AD"},{"value":"AGO","text":"Angola","shortValue":"AO"},{"value":"AIA","text":"Anguilla","shortValue":"AI"},{"value":"ATA","text":"Antarctica","shortValue":"AQ"},{"value":"ATG","text":"Antigua and Barbuda","shortValue":"AG"},{"value":"ARG","text":"Argentina","shortValue":"AR"},{"value":"ARM","text":"Armenia","shortValue":"AM"},{"value":"ABW","text":"Aruba","shortValue":"AW"},{"value":"AUS","text":"Australia","shortValue":"AU"},{"value":"AUT","text":"Austria","shortValue":"AT"},{"value":"AZE","text":"Azerbaijan","shortValue":"AZ"},{"value":"BHS","text":"Bahamas","shortValue":"BS"},{"value":"BHR","text":"Bahrain","shortValue":"BH"},{"value":"BGD","text":"Bangladesh","shortValue":"BD"},{"value":"BRB","text":"Barbados","shortValue":"BB"},{"value":"BLR","text":"Belarus","shortValue":"BY"},{"value":"BEL","text":"Belgium","shortValue":"BE"},{"value":"BLZ","text":"Belize","shortValue":"BZ"},{"value":"BEN","text":"Benin","shortValue":"BJ"},{"value":"BMU","text":"Bermuda","shortValue":"BM"},{"value":"BTN","text":"Bhutan","shortValue":"BT"},{"value":"BOL","text":"Bolivia, Plurinational State of","shortValue":"BO"},{"value":"BES","text":"Bonaire, Sint Eustatius and Saba","shortValue":"BQ"},{"value":"BIH","text":"Bosnia and Herzegovina","shortValue":"BA"},{"value":"BWA","text":"Botswana","shortValue":"BW"},{"value":"BVT","text":"Bouvet Island","shortValue":"BV"},{"value":"BRA","text":"Brazil","shortValue":"BR"},{"value":"IOT","text":"British Indian Ocean Territory","shortValue":"IO"},{"value":"BRN","text":"Brunei Darussalam","shortValue":"BN"},{"value":"BGR","text":"Bulgaria","shortValue":"BG"},{"value":"BFA","text":"Burkina Faso","shortValue":"BF"},{"value":"BDI","text":"Burundi","shortValue":"BI"},{"value":"KHM","text":"Cambodia","shortValue":"KH"},{"value":"CMR","text":"Cameroon","shortValue":"CM"},{"value":"CAN","text":"Canada","shortValue":"CA"},{"value":"CPV","text":"Cape Verde","shortValue":"CV"},{"value":"CYM","text":"Cayman Islands","shortValue":"KY"},{"value":"CAF","text":"Central African Republic","shortValue":"CF"},{"value":"TCD","text":"Chad","shortValue":"TD"},{"value":"CHL","text":"Chile","shortValue":"CL"},{"value":"CHN","text":"China","shortValue":"CN"},{"value":"CXR","text":"Christmas Island","shortValue":"CX"},{"value":"CCK","text":"Cocos (Keeling) Islands","shortValue":"CC"},{"value":"COL","text":"Colombia","shortValue":"CO"},{"value":"COM","text":"Comoros","shortValue":"KM"},{"value":"COG","text":"Congo","shortValue":"CG"},{"value":"COD","text":"Congo, the Democratic Republic of the","shortValue":"CD"},{"value":"COK","text":"Cook Islands","shortValue":"CK"},{"value":"CRI","text":"Costa Rica","shortValue":"CR"},{"value":"CIV","text":"C\xf4te d\'Ivoire","shortValue":"CI"},{"value":"HRV","text":"Croatia","shortValue":"HR"},{"value":"CUB","text":"Cuba","shortValue":"CU"},{"value":"CUW","text":"Cura\xe7ao","shortValue":"CW"},{"value":"CYP","text":"Cyprus","shortValue":"CY"},{"value":"CZE","text":"Czech Republic","shortValue":"CZ"},{"value":"DNK","text":"Denmark","shortValue":"DK"},{"value":"DJI","text":"Djibouti","shortValue":"DJ"},{"value":"DMA","text":"Dominica","shortValue":"DM"},{"value":"DOM","text":"Dominican Republic","shortValue":"DO"},{"value":"ECU","text":"Ecuador","shortValue":"EC"},{"value":"EGY","text":"Egypt","shortValue":"EG"},{"value":"SLV","text":"El Salvador","shortValue":"SV"},{"value":"GNQ","text":"Equatorial Guinea","shortValue":"GQ"},{"value":"ERI","text":"Eritrea","shortValue":"ER"},{"value":"EST","text":"Estonia","shortValue":"EE"},{"value":"ETH","text":"Ethiopia","shortValue":"ET"},{"value":"FLK","text":"Falkland Islands (Malvinas)","shortValue":"FK"},{"value":"FRO","text":"Faroe Islands","shortValue":"FO"},{"value":"FJI","text":"Fiji","shortValue":"FJ"},{"value":"FIN","text":"Finland","shortValue":"FI"},{"value":"FRA","text":"France","shortValue":"FR"},{"value":"GUF","text":"French Guiana","shortValue":"GF"},{"value":"PYF","text":"French Polynesia","shortValue":"PF"},{"value":"ATF","text":"French Southern Territories","shortValue":"TF"},{"value":"GAB","text":"Gabon","shortValue":"GA"},{"value":"GMB","text":"Gambia","shortValue":"GM"},{"value":"GEO","text":"Georgia","shortValue":"GE"},{"value":"DEU","text":"Germany","shortValue":"DE"},{"value":"GHA","text":"Ghana","shortValue":"GH"},{"value":"GIB","text":"Gibraltar","shortValue":"GI"},{"value":"GRC","text":"Greece","shortValue":"GR"},{"value":"GRL","text":"Greenland","shortValue":"GL"},{"value":"GRD","text":"Grenada","shortValue":"GD"},{"value":"GLP","text":"Guadeloupe","shortValue":"GP"},{"value":"GUM","text":"Guam","shortValue":"GU"},{"value":"GTM","text":"Guatemala","shortValue":"GT"},{"value":"GGY","text":"Guernsey","shortValue":"GG"},{"value":"GIN","text":"Guinea","shortValue":"GN"},{"value":"GNB","text":"Guinea-Bissau","shortValue":"GW"},{"value":"GUY","text":"Guyana","shortValue":"GY"},{"value":"HTI","text":"Haiti","shortValue":"HT"},{"value":"HMD","text":"Heard Island and McDonald Islands","shortValue":"HM"},{"value":"VAT","text":"Holy See (Vatican City State)","shortValue":"VA"},{"value":"HND","text":"Honduras","shortValue":"HN"},{"value":"HKG","text":"Hong Kong","shortValue":"HK"},{"value":"HUN","text":"Hungary","shortValue":"HU"},{"value":"ISL","text":"Iceland","shortValue":"IS"},{"value":"IND","text":"India","shortValue":"IN"},{"value":"IDN","text":"Indonesia","shortValue":"ID"},{"value":"IRN","text":"Iran, Islamic Republic of","shortValue":"IR"},{"value":"IRQ","text":"Iraq","shortValue":"IQ"},{"value":"IRL","text":"Ireland","shortValue":"IE"},{"value":"IMN","text":"Isle of Man","shortValue":"IM"},{"value":"ISR","text":"Israel","shortValue":"IL"},{"value":"ITA","text":"Italy","shortValue":"IT"},{"value":"JAM","text":"Jamaica","shortValue":"JM"},{"value":"JPN","text":"Japan","shortValue":"JP"},{"value":"JEY","text":"Jersey","shortValue":"JE"},{"value":"JOR","text":"Jordan","shortValue":"JO"},{"value":"KAZ","text":"Kazakhstan","shortValue":"KZ"},{"value":"KEN","text":"Kenya","shortValue":"KE"},{"value":"KIR","text":"Kiribati","shortValue":"KI"},{"value":"PRK","text":"Korea, Democratic People\'s Republic of","shortValue":"KP"},{"value":"KOR","text":"Korea, Republic of","shortValue":"KR"},{"value":"KWT","text":"Kuwait","shortValue":"KW"},{"value":"KGZ","text":"Kyrgyzstan","shortValue":"KG"},{"value":"LAO","text":"Lao People\'s Democratic Republic","shortValue":"LA"},{"value":"LVA","text":"Latvia","shortValue":"LV"},{"value":"LBN","text":"Lebanon","shortValue":"LB"},{"value":"LSO","text":"Lesotho","shortValue":"LS"},{"value":"LBR","text":"Liberia","shortValue":"LR"},{"value":"LBY","text":"Libya","shortValue":"LY"},{"value":"LIE","text":"Liechtenstein","shortValue":"LI"},{"value":"LTU","text":"Lithuania","shortValue":"LT"},{"value":"LUX","text":"Luxembourg","shortValue":"LU"},{"value":"MAC","text":"Macao","shortValue":"MO"},{"value":"MKD","text":"Macedonia, the former Yugoslav Republic of","shortValue":"MK"},{"value":"MDG","text":"Madagascar","shortValue":"MG"},{"value":"MWI","text":"Malawi","shortValue":"MW"},{"value":"MYS","text":"Malaysia","shortValue":"MY"},{"value":"MDV","text":"Maldives","shortValue":"MV"},{"value":"MLI","text":"Mali","shortValue":"ML"},{"value":"MLT","text":"Malta","shortValue":"MT"},{"value":"MHL","text":"Marshall Islands","shortValue":"MH"},{"value":"MTQ","text":"Martinique","shortValue":"MQ"},{"value":"MRT","text":"Mauritania","shortValue":"MR"},{"value":"MUS","text":"Mauritius","shortValue":"MU"},{"value":"MYT","text":"Mayotte","shortValue":"YT"},{"value":"MEX","text":"Mexico","shortValue":"MX"},{"value":"FSM","text":"Micronesia, Federated States of","shortValue":"FM"},{"value":"MDA","text":"Moldova, Republic of","shortValue":"MD"},{"value":"MCO","text":"Monaco","shortValue":"MC"},{"value":"MNG","text":"Mongolia","shortValue":"MN"},{"value":"MNE","text":"Montenegro","shortValue":"ME"},{"value":"MSR","text":"Montserrat","shortValue":"MS"},{"value":"MAR","text":"Morocco","shortValue":"MA"},{"value":"MOZ","text":"Mozambique","shortValue":"MZ"},{"value":"MMR","text":"Myanmar","shortValue":"MM"},{"value":"NAM","text":"Namibia","shortValue":"NA"},{"value":"NRU","text":"Nauru","shortValue":"NR"},{"value":"NPL","text":"Nepal","shortValue":"NP"},{"value":"NLD","text":"Netherlands","shortValue":"NL"},{"value":"NCL","text":"New Caledonia","shortValue":"NC"},{"value":"NZL","text":"New Zealand","shortValue":"NZ"},{"value":"NIC","text":"Nicaragua","shortValue":"NI"},{"value":"NER","text":"Niger","shortValue":"NE"},{"value":"NGA","text":"Nigeria","shortValue":"NG"},{"value":"NIU","text":"Niue","shortValue":"NU"},{"value":"NFK","text":"Norfolk Island","shortValue":"NF"},{"value":"MNP","text":"Northern Mariana Islands","shortValue":"MP"},{"value":"NOR","text":"Norway","shortValue":"NO"},{"value":"OMN","text":"Oman","shortValue":"OM"},{"value":"PAK","text":"Pakistan","shortValue":"PK"},{"value":"PLW","text":"Palau","shortValue":"PW"},{"value":"PSE","text":"Palestinian Territory, Occupied","shortValue":"PS"},{"value":"PAN","text":"Panama","shortValue":"PA"},{"value":"PNG","text":"Papua New Guinea","shortValue":"PG"},{"value":"PRY","text":"Paraguay","shortValue":"PY"},{"value":"PER","text":"Peru","shortValue":"PE"},{"value":"PHL","text":"Philippines","shortValue":"PH"},{"value":"PCN","text":"Pitcairn","shortValue":"PN"},{"value":"POL","text":"Poland","shortValue":"PL"},{"value":"PRT","text":"Portugal","shortValue":"PT"},{"value":"PRI","text":"Puerto Rico","shortValue":"PR"},{"value":"QAT","text":"Qatar","shortValue":"QA"},{"value":"REU","text":"R\xe9union","shortValue":"RE"},{"value":"ROU","text":"Romania","shortValue":"RO"},{"value":"RUS","text":"Russian Federation","shortValue":"RU"},{"value":"RWA","text":"Rwanda","shortValue":"RW"},{"value":"BLM","text":"Saint Barth\xe9lemy","shortValue":"BL"},{"value":"SHN","text":"Saint Helena, Ascension and Tristan da Cunha","shortValue":"SH"},{"value":"KNA","text":"Saint Kitts and Nevis","shortValue":"KN"},{"value":"LCA","text":"Saint Lucia","shortValue":"LC"},{"value":"MAF","text":"Saint Martin (French part)","shortValue":"MF"},{"value":"SPM","text":"Saint Pierre and Miquelon","shortValue":"PM"},{"value":"VCT","text":"Saint Vincent and the Grenadines","shortValue":"VC"},{"value":"WSM","text":"Samoa","shortValue":"WS"},{"value":"SMR","text":"San Marino","shortValue":"SM"},{"value":"STP","text":"Sao Tome and Principe","shortValue":"ST"},{"value":"SAU","text":"Saudi Arabia","shortValue":"SA"},{"value":"SEN","text":"Senegal","shortValue":"SN"},{"value":"SRB","text":"Serbia","shortValue":"RS"},{"value":"SYC","text":"Seychelles","shortValue":"SC"},{"value":"SLE","text":"Sierra Leone","shortValue":"SL"},{"value":"SGP","text":"Singapore","shortValue":"SG"},{"value":"SXM","text":"Sint Maarten (Dutch part)","shortValue":"SX"},{"value":"SVK","text":"Slovakia","shortValue":"SK"},{"value":"SVN","text":"Slovenia","shortValue":"SI"},{"value":"SLB","text":"Solomon Islands","shortValue":"SB"},{"value":"SOM","text":"Somalia","shortValue":"SO"},{"value":"ZAF","text":"South Africa","shortValue":"ZA"},{"value":"SGS","text":"South Georgia and the South Sandwich Islands","shortValue":"GS"},{"value":"SSD","text":"South Sudan","shortValue":"SS"},{"value":"ESP","text":"Spain","shortValue":"ES"},{"value":"LKA","text":"Sri Lanka","shortValue":"LK"},{"value":"SDN","text":"Sudan","shortValue":"SD"},{"value":"SUR","text":"Suriname","shortValue":"SR"},{"value":"SJM","text":"Svalbard and Jan Mayen","shortValue":"SJ"},{"value":"SWZ","text":"Swaziland","shortValue":"SZ"},{"value":"SWE","text":"Sweden","shortValue":"SE"},{"value":"CHE","text":"Switzerland","shortValue":"CH"},{"value":"SYR","text":"Syrian Arab Republic","shortValue":"SY"},{"value":"TWN","text":"Taiwan","shortValue":"TW"},{"value":"TJK","text":"Tajikistan","shortValue":"TJ"},{"value":"TZA","text":"Tanzania, United Republic of","shortValue":"TZ"},{"value":"THA","text":"Thailand","shortValue":"TH"},{"value":"TLS","text":"Timor-Leste","shortValue":"TL"},{"value":"TGO","text":"Togo","shortValue":"TG"},{"value":"TKL","text":"Tokelau","shortValue":"TK"},{"value":"TON","text":"Tonga","shortValue":"TO"},{"value":"TTO","text":"Trinidad and Tobago","shortValue":"TT"},{"value":"TUN","text":"Tunisia","shortValue":"TN"},{"value":"TUR","text":"Turkey","shortValue":"TR"},{"value":"TKM","text":"Turkmenistan","shortValue":"TM"},{"value":"TCA","text":"Turks and Caicos Islands","shortValue":"TC"},{"value":"TUV","text":"Tuvalu","shortValue":"TV"},{"value":"UGA","text":"Uganda","shortValue":"UG"},{"value":"UKR","text":"Ukraine","shortValue":"UA"},{"value":"ARE","text":"United Arab Emirates","shortValue":"AE"},{"value":"GBR","text":"United Kingdom","shortValue":"GB"},{"value":"USA","text":"United States","shortValue":"US"},{"value":"UMI","text":"United States Minor Outlying Islands","shortValue":"UM"},{"value":"URY","text":"Uruguay","shortValue":"UY"},{"value":"UZB","text":"Uzbekistan","shortValue":"UZ"},{"value":"VUT","text":"Vanuatu","shortValue":"VU"},{"value":"VEN","text":"Venezuela, Bolivarian Republic of","shortValue":"VE"},{"value":"VNM","text":"Viet Nam","shortValue":"VN"},{"value":"VGB","text":"Virgin Islands, British","shortValue":"VG"},{"value":"VIR","text":"Virgin Islands, U.S.","shortValue":"VI"},{"value":"WLF","text":"Wallis and Futuna","shortValue":"WF"},{"value":"ESH","text":"Western Sahara","shortValue":"EH"},{"value":"YEM","text":"Yemen","shortValue":"YE"},{"value":"ZMB","text":"Zambia","shortValue":"ZM"},{"value":"ZWE","text":"Zimbabwe","shortValue":"ZW"}]')
        },
        5: function(e, t, a) {
            e.exports = {
                table: "styles_table__yP7pN",
                alignLeft: "styles_alignLeft__3pZ7p",
                alignCenter: "styles_alignCenter__iu3xM",
                alignRight: "styles_alignRight__1iauJ",
                lighten: "styles_lighten__-4OgN",
                problemsHeader: "styles_problemsHeader__2-O8S",
                activeTeam: "styles_activeTeam__1rxXI",
                problemScore: "styles_problemScore__15jnr",
                score: "styles_score__1WsB6",
                sortButton: "styles_sortButton__16pYX",
                sortDown: "styles_sortDown__1xiRz",
                sortUp: "styles_sortUp__3mx9g",
                details: "styles_details__kEHM7",
                sortDetails: "styles_sortDetails__xNinA",
                smallRow: "styles_smallRow__3Cdm3",
                frozenTitle: "styles_frozenTitle__3qiVq",
                help: "styles_help__1D0Dt"
            }
        },
        50: function(e, t, a) {
            e.exports = {
                root: "styles_root__q7V3z",
                box: "styles_box__4f_RE",
                error: "styles_error__35IO7"
            }
        },
        51: function(e, t, a) {
            e.exports = {
                form: "styles_form__2Ebhh",
                row: "styles_row__3N1E7",
                buttonRow: "styles_buttonRow__3VxaM"
            }
        },
        52: function(e, t, a) {
            e.exports = {
                table: "styles_table__1aa56",
                Win: "styles_Win__2ox4t",
                Lose: "styles_Lose__5tYHt",
                Draw: "styles_Draw__F5_02"
            }
        },
        61: function(e, t, a) {
            e.exports = {
                container: "styles_container__fAA0Z",
                narrowContainer: "styles_narrowContainer__TZDE3"
            }
        },
        65: function(e, t, a) {
            e.exports = {
                root: "styles_root__2DNLe",
                disclaimer: "styles_disclaimer__40iq-"
            }
        },
        66: function(e, t, a) {
            e.exports = {
                listItem: "styles_listItem__2Glde",
                root: "styles_root__1b49X"
            }
        },
        80: function(e, t, a) {
            e.exports = {
                root: "styles_root__2cSWM",
                value: "styles_value__2NNr2",
                form: "styles_form__3ly6z",
                row: "styles_row__2sZ9r",
                buttonRow: "styles_buttonRow__26sw-"
            }
        },
        81: function(e, t, a) {
            e.exports = {
                root: "styles_root__1Tz1F",
                delimiter: "styles_delimiter__zRs7s",
                branch: "styles_branch__2eebS"
            }
        },
        83: function(e, t, a) {
            e.exports = {
                root: "style_root__qqxoi"
            }
        },
        89: function(e, t, a) {
            e.exports = a(191)
        },
        98: function(e, t, a) {},
        99: function(e, t, a) {}
    },
    [
        [89, 1, 2]
    ]
]);