(this["webpackJsonprms-widget"] = this["webpackJsonprms-widget"] || []).push([[0], {
  138: function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t(0)
        , a = t.n(o)
        , c = t(13)
        , r = t.n(c)
        , i = (t(95),
      t(31))
        , l = t(21)
        , u = t(9)
        , s = t(74)
        , d = t(43)
        , b = t(179)
        , j = t(4)
        , p = t(201)
        , h = t(140)
        , f = t(202)
        , m = t(185)
        , v = t(186)
        , O = t(188)
        , g = t(191)
        , x = t(77)
        , w = t(192)
        , y = t(193)
        , C = t(194)
        , X = t(195)
        , T = t(196)
        , N = t(197)
        , M = t(207)
        , S = t(199)
        , I = t(200)
        , k = t(206)
        , F = t(208)
        , L = t(203)
        , R = t(205)
        , q = t(184)
        , B = t(198)
        , P = t(2)
        , V = t(66)
        , A = t.n(V)
        , E = t(17)
        , z = t(67)
        , _ = t(189)
        , W = t(204)
        , D = t(190)
        , G = t(68)
        , H = t.n(G)
        , U = t(5)
        , $ = Object(b.a)((function(e) {
          return {
              root: {
                  width: "100%"
              },
              button: {
                  marginRight: e.spacing(1)
              },
              completed: {
                  display: "inline-block"
              },
              media: {
                  height: 0,
                  paddingTop: "56.25%"
              },
              stepContainer: {
                  padding: e.spacing(2),
                  textAlign: "center"
              },
              stepContainerActions: {
                  margin: "0 auto",
                  textAlign: "center",
                  minHeight: "68px",
                  marginTop: "".concat(E.isMobile ? "20" : "0", "px"),
                  paddingBottom: "".concat(E.isMobile ? "20" : e.spacing(4), "px")
              },
              tableContainer: {
                  boxShadow: "none"
              }
          }
      }
      ))
        , J = Object(j.a)({
          root: {
              color: "white",
              "& label.Mui-focused": {
                  color: "white"
              },
              "& .MuiInput-underline:after": {
                  borderBottomColor: "#E82F24"
              },
              "& .MuiIconButton-root": {
                  color: "white"
              },
              "& .MuiInputLabel-outlined": {
                  color: "white"
              }
          }
      })(p.a)
        , K = Object(j.a)({
          alternativeLabel: {
              top: 19
          },
          active: {
              "& $line": {
                  backgroundImage: "linear-gradient(135deg,#ff6900,#cf2e2e)"
              }
          },
          completed: {
              "& $line": {
                  backgroundImage: "linear-gradient(135deg,#ff6900,#cf2e2e)"
              }
          },
          line: {
              height: 3,
              border: 0,
              backgroundColor: "#5a5b5c",
              borderRadius: 1
          }
      })(h.a)
        , Q = Object(b.a)({
          root: {
              backgroundColor: "#5a5b5c",
              zIndex: 1,
              color: "#fff",
              width: 40,
              height: 40,
              display: "flex",
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
          },
          circle: {
              width: 10,
              height: 5,
              borderRadius: "50%",
              backgroundColor: "currentColor"
          },
          active: {
              backgroundImage: "linear-gradient(135deg,#ff6900,#cf2e2e)"
          },
          completed: {
              backgroundColor: "linear-gradient(135deg,#ff6900,#cf2e2e)",
              backgroundImage: "linear-gradient(135deg,#ff6900,#cf2e2e)"
          }
      });
      function Y(e) {
          var n = e.children
            , t = e.value
            , o = e.index
            , a = Object(s.a)(e, ["children", "value", "index"]);
          return Object(U.jsx)("div", Object(u.a)(Object(u.a)({
              role: "tabpanel",
              hidden: t !== o,
              id: "full-width-tabpanel-".concat(o),
              "aria-labelledby": "full-width-tab-".concat(o)
          }, a), {}, {
              children: t === o && Object(U.jsx)(f.a, {
                  p: 3,
                  children: n
              })
          }))
      }
      function Z(e) {
          return {
              id: "full-width-tab-".concat(e),
              "aria-controls": "full-width-tabpanel-".concat(e)
          }
      }
      var ee = function() {
          var e, n = $(), t = Object(o.useState)({
              manufacturer: null,
              model: null,
              version: null,
              motor: null
          }), c = Object(l.a)(t, 2), r = c[0], s = c[1], b = Object(o.useState)(!1), j = Object(l.a)(b, 2), p = j[0], h = j[1], f = Object(o.useState)([]), V = Object(l.a)(f, 2), G = V[0], ee = V[1], ne = Object(o.useState)([]), te = Object(l.a)(ne, 2), oe = te[0], ae = te[1], ce = Object(o.useState)([]), re = Object(l.a)(ce, 2), ie = re[0], le = re[1], ue = Object(o.useState)([]), se = Object(l.a)(ue, 2), de = se[0], be = se[1], je = Object(o.useState)(null), pe = Object(l.a)(je, 2), he = pe[0], fe = pe[1], me = Object(o.useState)(!1), ve = Object(l.a)(me, 2), Oe = ve[0], ge = ve[1], xe = Object(o.useState)(0), we = Object(l.a)(xe, 2), ye = we[0], Ce = we[1], Xe = Object(o.useRef)(null), Te = ["Marque", "Mod\xe8le", "Version", "Moteur", "R\xe9sultat"], Ne = a.a.useState(0), Me = Object(l.a)(Ne, 2), Se = Me[0], Ie = Me[1], ke = null !== (e = window.RMS_OLSX_API_BASE_URL) && void 0 !== e ? e : "/wp-json/rms-olsx/v2";
          Object(o.useEffect)((function() {
              h(!0),
              fetch("".concat(ke, "/manufacturers")).then((function(e) {
                  return e.json()
              }
              )).then((function(e) {
                  ee(Object(i.a)(e.manufacturers))
              }
              )).catch(console.log).finally((function() {
                  return h(!1)
              }
              ));
              var e = new URL(window.location.href)
                , n = e.searchParams.get("manufacturer")
                , t = e.searchParams.get("model")
                , o = e.searchParams.get("version")
                , a = e.searchParams.get("engine");
              n && (h(!0),
              fetch("".concat(ke, "/manufacturer/").concat(n)).then((function(e) {
                  return e.json()
              }
              )).then((function(e) {
                  ae(Object(i.a)(e.models))
              }
              )).catch(console.log),
              fetch("".concat(ke, "/model/").concat(t)).then((function(e) {
                  return e.json()
              }
              )).then((function(e) {
                  var n = e.versions.map((function(e) {
                      return Object(u.a)(Object(u.a)({}, e), {}, {
                          label: e.name ? "".concat(e.from, " - ").concat(e.name) : e.from
                      })
                  }
                  ));
                  le(Object(i.a)(n))
              }
              )).catch(console.log),
              fetch("".concat(ke, "/version/").concat(o)).then((function(e) {
                  return e.json()
              }
              )).then((function(e) {
                  var n = e.engines.sort((function(e, n) {
                      return e.powerType < n.powerType ? -1 : e.powerType > n.powerType ? 1 : 0
                  }
                  )).map((function(e) {
                      return Object(u.a)(Object(u.a)({}, e), {}, {
                          label: "".concat(e.name, " - ").concat(e.horsepower, "ch").concat(!1 === e.developed ? " - en cours de d\xe9veloppement" : "")
                      })
                  }
                  ));
                  be(Object(i.a)(n))
              }
              )).catch(console.log),
              fetch("".concat(ke, "/engine/").concat(a)).then((function(e) {
                  return e.json()
              }
              )).then((function(e) {
                  fe(Object(u.a)({}, e)),
                  s({
                      manufacturer: e.manufacturer.name,
                      model: e.model.name,
                      version: e.modelVersion.name ? "".concat(e.modelVersion.from, " - ").concat(e.modelVersion.name) : e.modelVersion.from,
                      motor: "".concat(e.name, " - ").concat(e.horsepower, "ch")
                  })
              }
              )).catch(console.log).finally((function() {
                  h(!1),
                  Ce(E.isMobile ? 4 : 5)
              }
              )))
          }
          ), []),
          Object(o.useEffect)((function() {
              var e;
              null === Xe || void 0 === Xe || null === (e = Xe.current) || void 0 === e || e.slickGoTo(ye)
          }
          ), [ye]);
          var Fe = function() {
              3 !== ye || E.isMobile ? Ce((function(e) {
                  return e + 1
              }
              )) : Ce((function(e) {
                  return e + 2
              }
              ))
          }
            , Le = function() {
              5 !== ye || E.isMobile ? Ce((function(e) {
                  return e - 1
              }
              )) : Ce((function(e) {
                  return ye - 2
              }
              ))
          }
            , Re = function(e, n) {
              return Object(U.jsx)(J, Object(u.a)(Object(u.a)({}, e), {}, {
                  label: n,
                  variant: "outlined",
                  InputProps: Object(u.a)(Object(u.a)({}, e.InputProps), {}, {
                      endAdornment: Object(U.jsxs)(a.a.Fragment, {
                          children: [p ? Object(U.jsx)(m.a, {
                              size: 20
                          }) : null, e.InputProps.endAdornment]
                      })
                  })
              }))
          }
            , qe = function(e) {
              var n, t, o, a;
              switch (e) {
              case 0:
                  return null === (n = G.find((function(e) {
                      return e.name === r.manufacturer
                  }
                  ))) || void 0 === n ? void 0 : n.name;
              case 1:
                  return null === (t = oe.find((function(e) {
                      return e.name === r.model
                  }
                  ))) || void 0 === t ? void 0 : t.name;
              case 2:
                  return null === (o = ie.find((function(e) {
                      return e.label === r.version
                  }
                  ))) || void 0 === o ? void 0 : o.label;
              case 3:
                  return null === (a = de.find((function(e) {
                      return e.label === r.motor
                  }
                  ))) || void 0 === a ? void 0 : a.label
              }
          }
            , Be = E.isMobile ? "100%" : "300px"
            , Pe = function(e, n) {
              Ie(n)
          }
            , Ve = function(e) {
              Ie(e)
          }
            , Ae = function() {
              var e = [Object(U.jsx)(Y, {
                  value: Se,
                  index: 0,
                  children: Object(U.jsxs)("div", {
                      className: "slide-container",
                      children: [_e(), Object(U.jsx)(v.a, {
                          component: "p",
                          children: "Voici les r\xe9sultats obtenus apr\xe8s reprogrammation du calculateur moteur. Nous veillons \xe0 ne pas d\xe9passer les tol\xe9rances fix\xe9es par le constructeur, tant au niveau du moteur que de la bo\xeete de vitesse."
                      }), Object(U.jsxs)(v.a, {
                          component: "p",
                          className: "price",
                          children: ["Stage 1: ", Object(U.jsxs)("span", {
                              className: "highlighted",
                              children: [(null === he || void 0 === he ? void 0 : he.price) ? 10 * Math.ceil(.8 * (null === he || void 0 === he ? void 0 : he.price) / 10) : "XXX", "\u20ac"]
                          }), " TTC"]
                      })]
                  })
              })];
              return null == he || "petrol" !== (null === he || void 0 === he ? void 0 : he.powerType) && "hybrid" !== (null === he || void 0 === he ? void 0 : he.powerType) || (e.push(Object(U.jsx)(Y, {
                  value: Se,
                  index: 1,
                  children: Object(U.jsxs)("div", {
                      className: "slide-container",
                      children: [_e(!1), Object(U.jsx)(v.a, {
                          component: "p",
                          children: "La pr\xe9paration E85 flex-fuel permet \xe0 votre v\xe9hicule de fonctionner gr\xe2ce \xe0 deux types de carburant : le Bio-\xe9thanol, l'essence ou les deux carburants simultan\xe9ment. Suite \xe0 l'optimisation de la cartographie moteur, votre moteur adaptera son fonctionnement selon la quantit\xe9 de Bio-\xe9thanol inject\xe9e. N'h\xe9sitez pas \xe0 nous contacter pour plus d'informations."
                      }), Object(U.jsx)(v.a, {
                          component: "p",
                          children: Object(U.jsx)("small", {
                              children: "Lorsque la conversion E85 n'est pas envisageable au niveau de la cartographie moteur, un bo\xeetier additionnel flex-fuel peut \xeatre propos\xe9 en option."
                          })
                      }), Object(U.jsxs)(v.a, {
                          component: "p",
                          className: "price",
                          children: ["Conversion FlexFuel: ", Object(U.jsxs)("span", {
                              className: "no-break",
                              children: [Object(U.jsxs)("span", {
                                  className: "highlighted",
                                  children: [(null === he || void 0 === he ? void 0 : he.price) ? 10 * Math.ceil(.8 * (null === he || void 0 === he ? void 0 : he.price) / 10) + 100 : "XXX", "\u20ac"]
                              }), " TTC"]
                          })]
                      })]
                  })
              })),
              e.push(Object(U.jsx)(Y, {
                  value: Se,
                  index: 2,
                  children: Object(U.jsxs)("div", {
                      className: "slide-container",
                      children: [_e(), Object(U.jsx)(v.a, {
                          component: "p",
                          children: "Stage 1 + FlexFuel combine la reprogrammation et la conversion E85 flex-fuel. Vous r\xe9cup\xe9rerez donc un v\xe9hicule plus performant pouvant fonctionner avec du carburant E85 ou de l'essence. N'h\xe9sitez pas \xe0 nous contacter pour plus d'informations."
                      }), Object(U.jsx)(v.a, {
                          component: "p",
                          children: Object(U.jsx)("small", {
                              children: "Dans certains cas, la conversion flex-fuel ne peut \xeatre combin\xe9e avec une reprogrammation standard."
                          })
                      }), Object(U.jsxs)(v.a, {
                          component: "p",
                          className: "price",
                          children: ["Stage 1 + FlexFuel: ", Object(U.jsxs)("span", {
                              className: "no-break",
                              children: [Object(U.jsxs)("span", {
                                  className: "highlighted",
                                  children: [(null === he || void 0 === he ? void 0 : he.price) ? 10 * Math.ceil(.8 * (null === he || void 0 === he ? void 0 : he.price) / 10) + 260 : "XXX", "\u20ac"]
                              }), " TTC"]
                          })]
                      })]
                  })
              }))),
              e
          }
            , Ee = function(e) {
              var n, t, o, a;
              switch (e) {
              case 0:
                  return Object(U.jsx)(L.a, {
                      "data-test-id": "rms-olsx-manufacturers",
                      options: G,
                      getOptionLabel: function(e) {
                          var n;
                          return null !== (n = null === e || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
                      },
                      style: {
                          width: Be
                      },
                      disabled: p,
                      loading: p,
                      clearOnBlur: !1,
                      renderInput: function(e) {
                          return Re(e, "Marque")
                      },
                      value: null !== (n = G.find((function(e) {
                          return e.name === r.manufacturer
                      }
                      ))) && void 0 !== n ? n : null,
                      onChange: function(e, n) {
                          n && (n.name !== r.manufacturer && s(Object(u.a)(Object(u.a)({}, r), {}, {
                              manufacturer: n.name,
                              model: null,
                              version: null,
                              motor: null
                          })),
                          function(e) {
                              h(!0),
                              fetch("".concat(ke, "/manufacturer/").concat(e.id)).then((function(e) {
                                  return e.json()
                              }
                              )).then((function(e) {
                                  ae(Object(i.a)(e.models)),
                                  window.history.replaceState(null, null, "")
                              }
                              )).catch(console.log).finally((function() {
                                  return h(!1)
                              }
                              ))
                          }(n),
                          Fe())
                      },
                      onInputChange: function(e, n) {
                          n !== r.manufacturer && s(Object(u.a)(Object(u.a)({}, r), {}, {
                              manufacturer: n,
                              model: null,
                              version: null,
                              motor: null
                          }))
                      }
                  });
              case 1:
                  return Object(U.jsx)(L.a, {
                      "data-test-id": "rms-olsx-Models",
                      options: oe,
                      getOptionLabel: function(e) {
                          var n;
                          return null !== (n = e.name) && void 0 !== n ? n : ""
                      },
                      style: {
                          width: Be
                      },
                      disabled: p,
                      loading: p,
                      clearOnBlur: !1,
                      renderInput: function(e) {
                          return Re(e, "Mod\xe8le")
                      },
                      value: null !== (t = oe.find((function(e) {
                          return e.name === r.model
                      }
                      ))) && void 0 !== t ? t : null,
                      onChange: function(e, n) {
                          n && (n.name !== r.model && s(Object(u.a)(Object(u.a)({}, r), {}, {
                              model: n.name,
                              version: null,
                              motor: null
                          })),
                          function(e) {
                              h(!0),
                              fetch("".concat(ke, "/model/").concat(e.id)).then((function(e) {
                                  return e.json()
                              }
                              )).then((function(e) {
                                  var n = e.versions.map((function(e) {
                                      return Object(u.a)(Object(u.a)({}, e), {}, {
                                          label: e.name ? "".concat(e.from, " - ").concat(e.name) : e.from
                                      })
                                  }
                                  ));
                                  le(Object(i.a)(n))
                              }
                              )).catch(console.log).finally((function() {
                                  return h(!1)
                              }
                              ))
                          }(n),
                          Fe())
                      },
                      onInputChange: function(e, n) {
                          n !== r.model && s(Object(u.a)(Object(u.a)({}, r), {}, {
                              model: n,
                              version: null,
                              motor: null
                          }))
                      }
                  });
              case 2:
                  return Object(U.jsx)(L.a, {
                      "data-test-id": "rms-olsx-versions",
                      options: ie,
                      getOptionLabel: function(e) {
                          var n;
                          return null !== (n = e.label) && void 0 !== n ? n : ""
                      },
                      style: {
                          width: Be
                      },
                      disabled: p,
                      loading: p,
                      clearOnBlur: !1,
                      renderInput: function(e) {
                          return Re(e, "Version")
                      },
                      value: null !== (o = ie.find((function(e) {
                          return e.label === r.version
                      }
                      ))) && void 0 !== o ? o : null,
                      onChange: function(e, n) {
                          n && (n.label !== r.version && s(Object(u.a)(Object(u.a)({}, r), {}, {
                              version: n.label,
                              motor: null
                          })),
                          function(e) {
                              h(!0),
                              fetch("".concat(ke, "/version/").concat(e.id)).then((function(e) {
                                  return e.json()
                              }
                              )).then((function(e) {
                                  var n = e.engines.sort((function(e, n) {
                                      return e.powerType < n.powerType ? -1 : e.powerType > n.powerType ? 1 : 0
                                  }
                                  )).map((function(e) {
                                      return Object(u.a)(Object(u.a)({}, e), {}, {
                                          powerType: (n = "petrol" === e.powerType ? "essence" : e.powerType,
                                          n ? n[0].toUpperCase() + n.substr(1).toLowerCase() : n),
                                          label: "".concat(e.name, " - ").concat(e.horsepower, "ch").concat(!1 === e.developed ? " - en cours de d\xe9veloppement" : "")
                                      });
                                      var n
                                  }
                                  ));
                                  be(Object(i.a)(n))
                              }
                              )).catch(console.log).finally((function() {
                                  return h(!1)
                              }
                              ))
                          }(n),
                          Fe())
                      },
                      onInputChange: function(e, n) {
                          n !== r.version && s(Object(u.a)(Object(u.a)({}, r), {}, {
                              version: n,
                              motor: null
                          }))
                      }
                  });
              case 3:
                  return Object(U.jsx)(L.a, {
                      "data-test-id": "rms-olsx-engines",
                      options: de,
                      getOptionLabel: function(e) {
                          var n;
                          return null !== (n = e.label) && void 0 !== n ? n : ""
                      },
                      getOptionDisabled: function(e) {
                          return !e.developed
                      },
                      groupBy: function(e) {
                          return e.powerType
                      },
                      style: {
                          width: Be
                      },
                      disabled: p,
                      loading: p,
                      clearOnBlur: !1,
                      renderInput: function(e) {
                          return Re(e, "Moteur")
                      },
                      value: null !== (a = de.find((function(e) {
                          return e.label === r.motor
                      }
                      ))) && void 0 !== a ? a : null,
                      onChange: function(e, n) {
                          n && (n.label !== r.motor && (s(Object(u.a)(Object(u.a)({}, r), {}, {
                              motor: n.label
                          })),
                          fe(null)),
                          function(e) {
                              h(!0),
                              fetch("".concat(ke, "/engine/").concat(e.id)).then((function(e) {
                                  return e.json()
                              }
                              )).then((function(e) {
                                  fe(Object(u.a)({}, e)),
                                  window.history.replaceState(null, null, "?manufacturer=".concat(e.manufacturer.id, "&model=").concat(e.model.id, "&version=").concat(e.modelVersion.id, "&engine=").concat(e.id))
                              }
                              )).catch(console.log).finally((function() {
                                  return h(!1)
                              }
                              ))
                          }(n),
                          Fe())
                      },
                      onInputChange: function(e, n) {
                          n !== r.motor && s(Object(u.a)(Object(u.a)({}, r), {}, {
                              motor: n
                          }))
                      }
                  });
              case 4:
                  return Object(U.jsx)("div", {
                      className: "result",
                      children: p ? Object(U.jsx)(O.a, {}) : Object(U.jsx)(U.Fragment, {
                          children: Object(U.jsxs)(_.a, {
                              position: "static",
                              color: "default",
                              children: [Object(U.jsxs)(W.a, {
                                  value: Se,
                                  onChange: Pe,
                                  indicatorColor: "primary",
                                  textColor: "primary",
                                  variant: "fullWidth",
                                  "aria-label": "full width tabs example",
                                  children: [Object(U.jsx)(D.a, Object(u.a)({
                                      label: "Stage 1"
                                  }, Z(0)), "stage-1"), null != he && ("petrol" === (null === he || void 0 === he ? void 0 : he.powerType) || "hybrid" === (null === he || void 0 === he ? void 0 : he.powerType)) && [Object(U.jsx)(D.a, Object(u.a)({
                                      label: "FlexFuel"
                                  }, Z(1)), "flex-fuel"), Object(U.jsx)(D.a, Object(u.a)({
                                      label: "Stage 1 + FlexFuel"
                                  }, Z(2)), "stage-1-flex-fuel")]]
                              }), Object(U.jsx)(H.a, {
                                  animateHeight: !0,
                                  index: Se,
                                  onChangeIndex: Ve,
                                  children: Ae()
                              })]
                          })
                      })
                  })
              }
          };
          function ze(e, n, t) {
              return {
                  chiffres: e,
                  puissance: n,
                  couple: t
              }
          }
          var _e = function() {
              var e, t, o, a, c, r, i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], l = [ze("Origine:", "".concat(null !== (e = null === he || void 0 === he ? void 0 : he.horsepower) && void 0 !== e ? e : "XXX", "ch"), "".concat(null !== (t = null === he || void 0 === he ? void 0 : he.torque) && void 0 !== t ? t : "XXX", "Nm"))];
              i ? (l.push(ze("Gain:", "+".concat((null === he || void 0 === he ? void 0 : he.horsepowerTotal) && (null === he || void 0 === he ? void 0 : he.horsepower) ? (null === he || void 0 === he ? void 0 : he.horsepowerTotal) - (null === he || void 0 === he ? void 0 : he.horsepower) : "XXX", "ch"), "+".concat((null === he || void 0 === he ? void 0 : he.torqueTotal) && (null === he || void 0 === he ? void 0 : he.torque) ? (null === he || void 0 === he ? void 0 : he.torqueTotal) - (null === he || void 0 === he ? void 0 : he.torque) : "XXX", "Nm"))),
              l.push(ze("R\xe9sultat:", "".concat(null !== (o = null === he || void 0 === he ? void 0 : he.horsepowerTotal) && void 0 !== o ? o : "XXX", "ch"), "".concat(null !== (a = null === he || void 0 === he ? void 0 : he.torqueTotal) && void 0 !== a ? a : "XXX", "Nm")))) : (l.push(ze("Gain:", "+0ch", "+0Nm")),
              l.push(ze("R\xe9sultat:", "".concat(null !== (c = null === he || void 0 === he ? void 0 : he.horsepower) && void 0 !== c ? c : "XXX", "ch"), "".concat(null !== (r = null === he || void 0 === he ? void 0 : he.torque) && void 0 !== r ? r : "XXX", "Nm"))));
              return Object(U.jsx)(g.a, {
                  className: n.tableContainer,
                  component: x.a,
                  children: Object(U.jsxs)(w.a, {
                      "aria-label": "simple table",
                      children: [Object(U.jsx)(y.a, {
                          children: Object(U.jsxs)(C.a, {
                              children: [Object(U.jsx)(X.a, {
                                  children: "Chiffres"
                              }), Object(U.jsx)(X.a, {
                                  children: "Puissance"
                              }), Object(U.jsx)(X.a, {
                                  children: "Couple"
                              })]
                          })
                      }), Object(U.jsx)(T.a, {
                          children: l.map((function(e) {
                              return Object(U.jsxs)(C.a, {
                                  children: [Object(U.jsx)(X.a, {
                                      component: "th",
                                      scope: "row",
                                      children: e.chiffres
                                  }), Object(U.jsx)(X.a, {
                                      children: e.puissance
                                  }), Object(U.jsx)(X.a, {
                                      children: e.couple
                                  })]
                              }, e.chiffres)
                          }
                          ))
                      })]
                  })
              })
          }
            , We = function(e, n) {
              "clickaway" !== n && ge(!1)
          }
            , De = function(e) {
              var t = e || ye;
              return Object(U.jsxs)("div", {
                  className: n.stepContainerActions,
                  children: [0 !== t && Object(U.jsx)(N.a, {
                      onClick: Le,
                      className: n.button,
                      children: "Retour"
                  }), qe(t) && Object(U.jsx)(N.a, {
                      variant: "contained",
                      color: "primary",
                      disabled: !qe(t),
                      onClick: Fe,
                      className: n.button,
                      children: "Suivant"
                  }), t === (E.isMobile ? 4 : 5) && Object(U.jsxs)(U.Fragment, {
                      children: [Object(U.jsx)(z.CopyToClipboard, {
                          text: window.location.href,
                          onCopy: function() {
                              return ge(!0)
                          },
                          children: Object(U.jsxs)(N.a, {
                              variant: "contained",
                              color: "primary",
                              children: ["Partager ", Object(U.jsx)(B.a, {})]
                          })
                      }), Object(U.jsx)(M.a, {
                          open: Oe,
                          autoHideDuration: 2e3,
                          onClose: We,
                          children: Object(U.jsx)(R.a, {
                              onClose: We,
                              variant: "filled",
                              severity: "success",
                              children: "Le lien a bien \xe9t\xe9 copi\xe9."
                          })
                      })]
                  })]
              })
          }
            , Ge = function() {
              var e = G.find((function(e) {
                  return e.name === r.manufacturer
              }
              ));
              return (null === e || void 0 === e ? void 0 : e.logo_dark) ? null === e || void 0 === e ? void 0 : e.logo_dark : ""
          };
          return Object(U.jsxs)("section", {
              children: [Object(U.jsx)("h1", {
                  className: "has-text-align-center",
                  children: "Sélectionnez votre véhicule"
              }), Object(U.jsx)(v.a, {
                  component: "p",
                  className: "has-text-align-center",
                  children: "Veuillez s\xe9lectionner un v\xe9hicule afin de d\xe9couvrir les r\xe9sultats obtenus en termes de puissance et de couple suite \xe0 l\u2019optimisation moteur:"
              }), Object(U.jsx)(S.a, {
                  alternativeLabel: !E.isMobile,
                  activeStep: ye,
                  connector: E.isMobile ? null : Object(U.jsx)(K, {}),
                  orientation: E.isMobile ? "vertical" : "horizontal",
                  children: Te.map((function(e, t) {
                      return Object(U.jsxs)(I.a, {
                          children: [Object(U.jsx)(k.a, {
                              StepIconComponent: function(e) {
                                  return function(e, n) {
                                      var t, o = Q(), a = e.active, c = e.completed;
                                      return Object(U.jsx)("div", {
                                          className: Object(P.a)(o.root, (t = {},
                                          Object(d.a)(t, o.active, a),
                                          Object(d.a)(t, o.completed, c),
                                          t)),
                                          children: c ? Object(U.jsx)(q.a, {}) : n
                                      })
                                  }(e, t + 1)
                              },
                              children: qe(t) ? Object(U.jsx)("b", {
                                  onClick: (o = t,
                                  function() {
                                      Ce(o)
                                  }
                                  ),
                                  children: qe(t)
                              }) : e
                          }), E.isMobile && Object(U.jsx)(F.a, {
                              children: Object(U.jsxs)("div", {
                                  className: n.stepContainer,
                                  children: [Ee(t), De(t)]
                              })
                          })]
                      }, e);
                      var o
                  }
                  ))
              }), !E.isMobile && Object(U.jsxs)(U.Fragment, {
                  children: [Object(U.jsxs)("div", {
                      className: "rms-content",
                      children: [Object(U.jsx)("div", {
                          className: "bg-logo",
                          style: {
                              backgroundImage: Ge() ? "url(https://".concat(Ge(), ")") : ""
                          }
                      }), Object(U.jsx)(A.a, {
                          ref: function(e) {
                              return Xe.current = e
                          },
                          slidesToShow: 1,
                          dots: !1,
                          arrows: !1,
                          value: ye,
                          draggable: !1,
                          touchMove: !1,
                          swipe: !1,
                          infinite: !1,
                          children: Te.map((function(e, t) {
                              return Object(U.jsx)("div", {
                                  className: n.stepContainer,
                                  children: Ee(t)
                              }, t)
                          }
                          ))
                      })]
                  }), De()]
              })]
          })
      };
      Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
      window.RmsOlsxWidget = {
          mount: function(e) {
              r.a.render(Object(U.jsx)(ee, {}), e)
          },
          unmount: function(e) {
              r.a.unmountComponentAtNode(e)
          }
      },
      "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
          e.unregister()
      }
      )).catch((function(e) {
          console.error(e.message)
      }
      ))
  },
  95: function(e, n, t) {}
}, [[138, 1, 2]]]);
