/******/ (function() { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./src/taskpane/taskpane.ts ***!
  \**********************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* global document, Office, Word */

/* ==========================================================
 * Style Guide Checker - taskpane.ts  (Fixed version with better error handling)
 *  - Added comprehensive error handling
 *  - Fixed content control operations
 *  - Improved field access patterns
 *  - Better batch processing
 * ========================================================== */

Office.onReady(function (info) {
  var _document$getElementB, _document$getElementB2;
  if (info.host !== Office.HostType.Word) return;
  (_document$getElementB = document.getElementById("sideload-msg")) === null || _document$getElementB === void 0 || _document$getElementB.setAttribute("style", "display:none");
  (_document$getElementB2 = document.getElementById("app-body")) === null || _document$getElementB2 === void 0 || _document$getElementB2.setAttribute("style", "display:flex");
  bindRulesLoader();
  bindScan();
  bindIssueRowClicks();
  var clearBtn = document.getElementById("clearMarkersBtn") || document.getElementById("clearMarkers");
  clearBtn === null || clearBtn === void 0 || clearBtn.addEventListener("click", function () {
    return clearMarkers().catch(console.error);
  });
});

/* ---------------------------- Types/Consts ---------------------------- */

var ISSUE_TAG_PREFIX = "sgc-";
var POINTS_PER_CM = 28.3464567;
var toCm = function toCm(pt) {
  return (pt || 0) / POINTS_PER_CM;
};
var toPt = function toPt(cm) {
  return (cm || 0) * POINTS_PER_CM;
};
var round2 = function round2(v) {
  return Math.round(v * 100) / 100;
};
var BATCH_SIZE = 500; // Reduced batch size for better stability

/* ------------------------------ Globals ------------------------------ */

function getRules() {
  return window.styleGuideRules;
}
function setRules(obj) {
  window.styleGuideRules = obj;
}

/* ------------------------------ Utilities with Error Handling ------------------------------ */

function normalizeStyle(name, aliases) {
  try {
    var raw = (name || "").toString().trim();
    var base = raw.replace(/\s+/g, " ").toLowerCase();
    if (!aliases) return base;
    for (var _i = 0, _Object$entries = Object.entries(aliases); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        k = _Object$entries$_i[0],
        v = _Object$entries$_i[1];
      var kk = (k || "").toString().trim().replace(/\s+/g, " ").toLowerCase();
      if (kk === base) return (v || "").toString().trim().replace(/\s+/g, " ").toLowerCase();
    }
    return base;
  } catch (error) {
    console.warn("Error normalizing style:", error);
    return (name || "").toString().trim().toLowerCase();
  }
}
function normalizeStyleList(input, aliases) {
  try {
    var arr = Array.isArray(input) ? input : [input];
    var set = new Set();
    var _iterator = _createForOfIteratorHelper(arr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var n = _step.value;
        set.add(n);
        set.add(normalizeStyle(n, aliases));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return {
      set: set,
      has: function has(raw) {
        try {
          return set.has(raw) || set.has(normalizeStyle(raw, aliases));
        } catch (_unused) {
          return false;
        }
      }
    };
  } catch (error) {
    console.warn("Error creating normalized style list:", error);
    return {
      set: new Set(),
      has: function has() {
        return false;
      }
    };
  }
}
function labelsToArray(v, fallback) {
  try {
    if (Array.isArray(v)) return v;
    if (typeof v === "string" && v.trim()) return [v.trim()];
    return fallback;
  } catch (_unused2) {
    return fallback;
  }
}
var __issueCounter = 0;
function newIssueTag() {
  __issueCounter += 1;
  return String(__issueCounter).padStart(6, "0");
}

/* Marker: hidden content control with better error handling */
function markParagraph(_x, _x2) {
  return _markParagraph.apply(this, arguments);
}
/* ------------------------------ Enhanced TOC Skip ------------------------------ */
function _markParagraph() {
  _markParagraph = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(ctx, p) {
    var tag, r, cc, _t21;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          tag = newIssueTag();
          r = p.getRange();
          cc = r.insertContentControl();
          cc.tag = ISSUE_TAG_PREFIX + tag;
          cc.title = "Style Guide Issue";
          cc.appearance = "Hidden";

          // Ensure sync happens immediately for content control creation
          _context0.n = 1;
          return ctx.sync();
        case 1:
          return _context0.a(2, tag);
        case 2:
          _context0.p = 2;
          _t21 = _context0.v;
          console.error("Error marking paragraph:", _t21);
          // Return a fallback tag even if marking fails
          return _context0.a(2, newIssueTag());
      }
    }, _callee9, null, [[0, 2]]);
  }));
  return _markParagraph.apply(this, arguments);
}
function isTocStyleName(rawOrStd) {
  try {
    var s = (rawOrStd || "").toString().trim().toLowerCase();
    return /^toc(\s*\d+)?$/.test(s) || s === "toc heading" || s === "목차" || /목차\s*\d+/.test(s) || s === "table of contents" || /^contents(\s*\d+)?$/.test(s) || /^차례(\s*\d+)?$/.test(s) || s === "차례" || s.includes("table of contents") || s.includes("목차");
  } catch (_unused3) {
    return false;
  }
}
function isLikelyTocText(text) {
  try {
    var t = (text || "").replace(/\u00A0/g, " ").trim();
    var reLeaderTabPage = /[.\u2026\u00B7\u2219]{3,}\s*\t+\s*\d+$/;
    var reLongLeaderNumber = /[.\u2026\u00B7\u2219]{5,}\s*\d+$/;
    var reSpacesNumber = /[.\u2026\u00B7\u2219]{3,}\s{2,}\d+$/;
    var reTabNumber = /\t+\s*\d+$/;
    var reMultipleSpacesNumber = /\s{3,}\d+$/;
    var reChapterPattern = /\d+\.\d+.*[\.\u2026\u00B7\u2219]{2,}.*\d+$/;
    return reLeaderTabPage.test(t) || reLongLeaderNumber.test(t) || reSpacesNumber.test(t) || reTabNumber.test(t) || reMultipleSpacesNumber.test(t) || reChapterPattern.test(t);
  } catch (_unused4) {
    return false;
  }
}
function computeTocSkips(_x3, _x4) {
  return _computeTocSkips.apply(this, arguments);
}
/* ------------------------------ Enhanced List Checker (Bullets + Numbered) ------------------------------ */
function _computeTocSkips() {
  _computeTocSkips = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(ctx, paras) {
    var skip, fields, _i3, _arr, f, _load, _ref0, _i4, _arr2, _f, _code, code, _getRange, _ref1, tocRange, tocParas, _iterator4, _step4, _loop3, _paras$items, _t22, _t23, _t24, _t25, _t26;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          skip = new Array(paras.items.length).fill(false); // Enhanced style/text checks
          paras.items.forEach(function (p, i) {
            try {
              var raw = (p.style || "").toLowerCase();
              var txt = (p.text || "").trim();
              if (isTocStyleName(raw) || isLikelyTocText(txt)) {
                skip[i] = true;
                return;
              }
              if (txt.toLowerCase().includes("table of contents") || txt.toLowerCase().includes("목차") || txt.toLowerCase().includes("차례")) {
                skip[i] = true;
              }
            } catch (error) {
              console.warn("Error checking TOC for paragraph ".concat(i, ":"), error);
              // If there's an error, don't skip by default
            }
          });

          // Field-based TOC detection with comprehensive error handling
          _context10.p = 1;
          fields = ctx.document.body.getRange().fields;
          fields.load("items");
          _context10.n = 2;
          return ctx.sync();
        case 2:
          if (!(fields.items && fields.items.length > 0)) {
            _context10.n = 19;
            break;
          }
          for (_i3 = 0, _arr = fields.items; _i3 < _arr.length; _i3++) {
            f = _arr[_i3];
            try {
              (_load = (_ref0 = f).load) === null || _load === void 0 || _load.call(_ref0, "code");
            } catch (fieldError) {
              console.warn("Error loading field code:", fieldError);
            }
          }
          _context10.p = 3;
          _context10.n = 4;
          return ctx.sync();
        case 4:
          _context10.n = 6;
          break;
        case 5:
          _context10.p = 5;
          _t22 = _context10.v;
          console.warn("Error syncing field codes:", _t22);
          return _context10.a(2, skip);
        case 6:
          _i4 = 0, _arr2 = fields.items;
        case 7:
          if (!(_i4 < _arr2.length)) {
            _context10.n = 19;
            break;
          }
          _f = _arr2[_i4];
          _context10.p = 8;
          code = String((_code = _f === null || _f === void 0 ? void 0 : _f.code) !== null && _code !== void 0 ? _code : "");
          if (!/^\s*TOC\b/i.test(code)) {
            _context10.n = 16;
            break;
          }
          tocRange = (_getRange = (_ref1 = _f).getRange) === null || _getRange === void 0 ? void 0 : _getRange.call(_ref1);
          if (!tocRange) {
            _context10.n = 16;
            break;
          }
          tocParas = tocRange.paragraphs;
          tocParas.load("items");
          _context10.n = 9;
          return ctx.sync();
        case 9:
          _iterator4 = _createForOfIteratorHelper(tocParas.items);
          _context10.p = 10;
          _loop3 = /*#__PURE__*/_regenerator().m(function _loop3() {
            var tp, text, style;
            return _regenerator().w(function (_context1) {
              while (1) switch (_context1.n) {
                case 0:
                  tp = _step4.value;
                  try {
                    text = tp.text;
                    style = tp.style;
                    paras.items.forEach(function (p, i) {
                      if (p.text === text && p.style === style) {
                        skip[i] = true;
                      }
                    });
                  } catch (tocParaError) {
                    console.warn("Error processing TOC paragraph:", tocParaError);
                  }
                case 1:
                  return _context1.a(2);
              }
            }, _loop3);
          });
          _iterator4.s();
        case 11:
          if ((_step4 = _iterator4.n()).done) {
            _context10.n = 13;
            break;
          }
          return _context10.d(_regeneratorValues(_loop3()), 12);
        case 12:
          _context10.n = 11;
          break;
        case 13:
          _context10.n = 15;
          break;
        case 14:
          _context10.p = 14;
          _t23 = _context10.v;
          _iterator4.e(_t23);
        case 15:
          _context10.p = 15;
          _iterator4.f();
          return _context10.f(15);
        case 16:
          _context10.n = 18;
          break;
        case 17:
          _context10.p = 17;
          _t24 = _context10.v;
          console.warn("Error processing individual field:", _t24);
        case 18:
          _i4++;
          _context10.n = 7;
          break;
        case 19:
          _context10.n = 21;
          break;
        case 20:
          _context10.p = 20;
          _t25 = _context10.v;
          console.warn("Error with field-based TOC detection:", _t25);
          // Continue with style/text-based detection only
        case 21:
          return _context10.a(2, skip);
        case 22:
          _context10.p = 22;
          _t26 = _context10.v;
          console.error("Critical error in computeTocSkips:", _t26);
          // Return safe default - don't skip any paragraphs if we can't determine
          return _context10.a(2, new Array(((_paras$items = paras.items) === null || _paras$items === void 0 ? void 0 : _paras$items.length) || 0).fill(false));
      }
    }, _callee0, null, [[10, 14, 15, 16], [8, 17], [3, 5], [1, 20], [0, 22]]);
  }));
  return _computeTocSkips.apply(this, arguments);
}
function checkBulletedListCompliance(_x5, _x6, _x7, _x8, _x9) {
  return _checkBulletedListCompliance.apply(this, arguments);
}
/** After "<Label> 1[.2]*", return the remaining text (trimmed-left). */
function _checkBulletedListCompliance() {
  _checkBulletedListCompliance = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(ctx, paragraph, rules, aliases, issues) {
    var _rules$rules$styles$b, _rules$rules5, _rules$rules$styles$n, _rules$rules6, _bulletRule$allowed, _numberedRule$allowed, _bulletRule$allowedIn, _numberedRule$allowed2, _rules$rules7, _rules$rules$indentat2, _rules$rules8, _rules$rules$styles$h2, _rules$rules9, raw, std, txt, bulletRule, numberedRule, allowedBulletNames, allowedNumberedNames, allowedBulletIndentsCm, allowedNumberedIndentsCm, allAllowedListNames, allAllowedIndents, allowedListStyles, indentPolicy, indentTolCm, headingAllowedRaw, HEADING_ALLOWED, isHeading, trimmedText, looksLikeHeading, listHeuristics, hasVisualListMarkers, isAnyKindOfList, isRealList, hasWrongStyleList, isBulletType, isNumberedType, leftCm, firstCm, currentIndent, hasCorrectListStyle, tag, allowedStylesDisplay, issueKind, fixMeta, textStartIndent, expectedIndent, normalizedStyle, indentDifference, _tag8, allowedIndentsCm, nearestAllowedIndent, tierTolerance, _tag9, allowedIndentsDisplay, _t27, _t28, _t29, _t30, _t31;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          raw = paragraph.style || "";
          std = normalizeStyle(raw, aliases);
          txt = paragraph.text || "";
          console.log("[DEBUG] Checking paragraph: \"" + txt.substring(0, 50) + "...\" | Style: \"" + raw + "\" | Normalized: \"" + std + "\"");

          // Skip placeholder text controls and empty paragraphs
          if (!(txt.includes("텍스트를 입력하려면 여기를 클릭하거나 탭하세요") || txt.includes("Click or tap here to enter text") || txt.includes("Type here") || txt.trim() === "" || /^(\[.*\]|\{.*\}|\(.*\))$/.test(txt.trim()))) {
            _context11.n = 1;
            break;
          }
          console.log("[DEBUG] Skipping placeholder/empty paragraph");
          return _context11.a(2);
        case 1:
          if (!(isTocStyleName(raw) || isTocStyleName(std) || isLikelyTocText(txt))) {
            _context11.n = 2;
            break;
          }
          console.log("[DEBUG] Skipping TOC-like content");
          return _context11.a(2);
        case 2:
          // Extract rules from the configuration
          bulletRule = (_rules$rules$styles$b = rules === null || rules === void 0 || (_rules$rules5 = rules.rules) === null || _rules$rules5 === void 0 || (_rules$rules5 = _rules$rules5.styles) === null || _rules$rules5 === void 0 ? void 0 : _rules$rules5.bullets) !== null && _rules$rules$styles$b !== void 0 ? _rules$rules$styles$b : {};
          numberedRule = (_rules$rules$styles$n = rules === null || rules === void 0 || (_rules$rules6 = rules.rules) === null || _rules$rules6 === void 0 || (_rules$rules6 = _rules$rules6.styles) === null || _rules$rules6 === void 0 ? void 0 : _rules$rules6.numberedLists) !== null && _rules$rules$styles$n !== void 0 ? _rules$rules$styles$n : {};
          allowedBulletNames = (_bulletRule$allowed = bulletRule.allowed) !== null && _bulletRule$allowed !== void 0 ? _bulletRule$allowed : ["TCC 글머리1", "TCC 글머리2", "TCC 글머리3", "TCC 글머리4"];
          allowedNumberedNames = (_numberedRule$allowed = numberedRule.allowed) !== null && _numberedRule$allowed !== void 0 ? _numberedRule$allowed : ["TCC 번호1", "TCC 번호2", "TCC 번호3"];
          allowedBulletIndentsCm = (_bulletRule$allowedIn = bulletRule.allowedIndentsCm) !== null && _bulletRule$allowedIn !== void 0 ? _bulletRule$allowedIn : [0.71, 1.21, 1.71, 2.21];
          allowedNumberedIndentsCm = (_numberedRule$allowed2 = numberedRule.allowedIndentsCm) !== null && _numberedRule$allowed2 !== void 0 ? _numberedRule$allowed2 : [0.71, 1.21, 1.71]; // Combine all allowed list styles
          allAllowedListNames = [].concat(_toConsumableArray(allowedBulletNames), _toConsumableArray(allowedNumberedNames));
          allAllowedIndents = [].concat(_toConsumableArray(allowedBulletIndentsCm), _toConsumableArray(allowedNumberedIndentsCm)); // Create normalized set of allowed list styles
          allowedListStyles = new Set();
          allAllowedListNames.forEach(function (styleName) {
            allowedListStyles.add(styleName);
            allowedListStyles.add(normalizeStyle(styleName, aliases));
          });

          // Get indentation policy and heading info
          indentPolicy = (rules === null || rules === void 0 || (_rules$rules7 = rules.rules) === null || _rules$rules7 === void 0 || (_rules$rules7 = _rules$rules7.indentation) === null || _rules$rules7 === void 0 ? void 0 : _rules$rules7.expectedCmByStyle) || {};
          indentTolCm = Math.max((_rules$rules$indentat2 = rules === null || rules === void 0 || (_rules$rules8 = rules.rules) === null || _rules$rules8 === void 0 || (_rules$rules8 = _rules$rules8.indentation) === null || _rules$rules8 === void 0 ? void 0 : _rules$rules8.toleranceCm) !== null && _rules$rules$indentat2 !== void 0 ? _rules$rules$indentat2 : 0.03, 0.02);
          headingAllowedRaw = (_rules$rules$styles$h2 = rules === null || rules === void 0 || (_rules$rules9 = rules.rules) === null || _rules$rules9 === void 0 || (_rules$rules9 = _rules$rules9.styles) === null || _rules$rules9 === void 0 || (_rules$rules9 = _rules$rules9.headings) === null || _rules$rules9 === void 0 ? void 0 : _rules$rules9.allowed) !== null && _rules$rules$styles$h2 !== void 0 ? _rules$rules$styles$h2 : [];
          HEADING_ALLOWED = new Set(headingAllowedRaw.map(function (s) {
            return normalizeStyle(s, aliases);
          })); // Check if this is a heading style - if so, skip list processing
          isHeading = HEADING_ALLOWED.has(std) || HEADING_ALLOWED.has(raw) || /^(heading|제목)\s*\d+/.test(std) || /^(heading|제목)\s*\d+/.test((raw || "").toLowerCase());
          if (!isHeading) {
            _context11.n = 3;
            break;
          }
          console.log("[DEBUG] Skipping heading style:", raw);
          return _context11.a(2);
        case 3:
          // Enhanced list detection
          trimmedText = txt.trim(); // First check if text looks like a heading
          looksLikeHeading = /^(\d+\.)*\d+\s+[A-Z]/.test(trimmedText) || /^\d+\.\s+[A-Z]/.test(trimmedText) || /^Chapter\s+\d+/i.test(trimmedText) || /^제\s*\d+/i.test(trimmedText);
          if (!looksLikeHeading) {
            _context11.n = 4;
            break;
          }
          console.log("[DEBUG] Skipping heading-like text:", trimmedText.substring(0, 30));
          return _context11.a(2);
        case 4:
          listHeuristics = {
            hasBulletChar: /^[\u2022\u25E6\u25AA\u25CF\u25CB\u25A0•◦○▪□]\s+/.test(trimmedText),
            hasDashBullet: /^[\-–—]\s+/.test(trimmedText),
            hasNumbering: /^(\(?\d{1,2}\)|(\d{1,2}[\.)]))(\s+)/.test(trimmedText) && !looksLikeHeading,
            hasLettering: /^(\(?[A-Za-z]\)|([A-Za-z][\.)]))(\s+)/.test(trimmedText),
            hasRoman: /^(\(?[ivxlc]{1,4}\)|([ivxlc]{1,4}[\.)]))(\s+)/i.test(trimmedText),
            isWordList: !!paragraph.isListItem,
            hasTabBullet: /^\t+[\u2022\u25E6\u25AA\u25CF\u25CB\u25A0•◦○▪□\-–—]\s+/.test(trimmedText),
            hasSpaceBullet: /^\s{2,}[\u2022\u25E6\u25AA\u25CF\u25CB\u25A0•◦○▪□\-–—]\s+/.test(trimmedText)
          };
          hasVisualListMarkers = listHeuristics.hasBulletChar || listHeuristics.hasDashBullet || listHeuristics.hasNumbering || listHeuristics.hasLettering || listHeuristics.hasRoman || listHeuristics.hasTabBullet || listHeuristics.hasSpaceBullet;
          isAnyKindOfList = listHeuristics.isWordList || hasVisualListMarkers;
          isRealList = listHeuristics.isWordList && hasVisualListMarkers;
          hasWrongStyleList = hasVisualListMarkers && !listHeuristics.isWordList;
          isBulletType = listHeuristics.hasBulletChar || listHeuristics.hasDashBullet;
          isNumberedType = listHeuristics.hasNumbering || listHeuristics.hasLettering || listHeuristics.hasRoman; // Only check paragraphs that actually look like lists
          if (isAnyKindOfList) {
            _context11.n = 5;
            break;
          }
          console.log("[DEBUG] Not a list, skipping list checks");
          return _context11.a(2);
        case 5:
          // Calculate current indent for fixMeta
          leftCm = toCm(paragraph.leftIndent || 0);
          firstCm = toCm(paragraph.firstLineIndent || 0);
          currentIndent = leftCm + firstCm; // Check 1: Style compliance for all list-like paragraphs
          hasCorrectListStyle = allowedListStyles.has(raw) || allowedListStyles.has(std);
          if (hasCorrectListStyle) {
            _context11.n = 9;
            break;
          }
          console.log("[DEBUG] ❌ STYLE ISSUE FOUND - adding to issues");
          _context11.p = 6;
          _context11.n = 7;
          return markParagraph(ctx, paragraph);
        case 7:
          tag = _context11.v;
          if (isBulletType) {
            allowedStylesDisplay = Array.from(new Set(allowedBulletNames)).join(", ");
            issueKind = "bullet-style";
            fixMeta = {
              currentIndent: currentIndent,
              allowedStyles: allowedBulletNames,
              allowedIndents: allowedBulletIndentsCm
            };
          } else if (isNumberedType) {
            allowedStylesDisplay = Array.from(new Set(allowedNumberedNames)).join(", ");
            issueKind = "numbered-style";
            fixMeta = {
              currentIndent: currentIndent,
              allowedStyles: allowedNumberedNames,
              allowedIndents: allowedNumberedIndentsCm
            };
          } else {
            allowedStylesDisplay = Array.from(new Set(allAllowedListNames)).join(", ");
            issueKind = "bullet-style";
            fixMeta = {
              currentIndent: currentIndent,
              allowedStyles: allowedBulletNames,
              allowedIndents: allowedBulletIndentsCm
            };
          }
          issues.push({
            tag: tag,
            kind: issueKind,
            message: "List paragraph must use: " + allowedStylesDisplay + " (found \"" + (raw || std || "unknown") + "\").",
            fixMeta: fixMeta
          });
          _context11.n = 9;
          break;
        case 8:
          _context11.p = 8;
          _t27 = _context11.v;
          console.error("Error marking paragraph for style issue:", _t27);
          // Continue processing other issues even if marking fails
        case 9:
          if (!isRealList) {
            _context11.n = 21;
            break;
          }
          _context11.p = 10;
          textStartIndent = currentIndent; // Check if there's a specific indent policy for this style
          if (indentPolicy[raw]) {
            expectedIndent = indentPolicy[raw];
          } else {
            normalizedStyle = normalizeStyle(raw, aliases);
            if (indentPolicy[normalizedStyle]) {
              expectedIndent = indentPolicy[normalizedStyle];
            }
          }
          if (!(expectedIndent !== undefined)) {
            _context11.n = 15;
            break;
          }
          indentDifference = Math.abs(textStartIndent - expectedIndent);
          if (!(indentDifference > indentTolCm)) {
            _context11.n = 14;
            break;
          }
          console.log("[DEBUG] ❌ INDENT ISSUE FOUND (specific policy) - adding to issues");
          _context11.p = 11;
          _context11.n = 12;
          return markParagraph(ctx, paragraph);
        case 12:
          _tag8 = _context11.v;
          issues.push({
            tag: _tag8,
            kind: "indent",
            message: "Indent " + round2(textStartIndent) + " cm (expected " + round2(expectedIndent) + " cm) for style \"" + (raw || std) + "\".",
            fixMeta: {
              expectedCm: expectedIndent
            }
          });
          _context11.n = 14;
          break;
        case 13:
          _context11.p = 13;
          _t28 = _context11.v;
          console.error("Error marking paragraph for indent issue:", _t28);
        case 14:
          _context11.n = 19;
          break;
        case 15:
          // No specific policy - check against appropriate allowed indent tiers

          if (isBulletType) {
            allowedIndentsCm = allowedBulletIndentsCm;
          } else if (isNumberedType) {
            allowedIndentsCm = allowedNumberedIndentsCm;
          } else {
            allowedIndentsCm = allAllowedIndents;
          }
          nearestAllowedIndent = allowedIndentsCm.reduce(function (best, cm) {
            var distance = Math.abs(textStartIndent - cm);
            return distance < best.distance ? {
              cm: cm,
              distance: distance
            } : best;
          }, {
            cm: allowedIndentsCm[0],
            distance: Number.POSITIVE_INFINITY
          });
          tierTolerance = indentTolCm + 0.03;
          if (!(nearestAllowedIndent.distance > tierTolerance)) {
            _context11.n = 19;
            break;
          }
          console.log("[DEBUG] ❌ INDENT ISSUE FOUND (tier-based) - adding to issues");
          _context11.p = 16;
          _context11.n = 17;
          return markParagraph(ctx, paragraph);
        case 17:
          _tag9 = _context11.v;
          allowedIndentsDisplay = allowedIndentsCm.map(function (v) {
            return round2(v);
          }).join(", ");
          issues.push({
            tag: _tag9,
            kind: "indent",
            message: "List indent " + round2(textStartIndent) + " cm not in " + allowedIndentsDisplay + " cm.",
            fixMeta: {
              expectedCm: nearestAllowedIndent.cm
            }
          });
          _context11.n = 19;
          break;
        case 18:
          _context11.p = 18;
          _t29 = _context11.v;
          console.error("Error marking paragraph for tier indent issue:", _t29);
        case 19:
          _context11.n = 21;
          break;
        case 20:
          _context11.p = 20;
          _t30 = _context11.v;
          console.error("Error checking indent compliance:", _t30);
        case 21:
          console.log("[DEBUG] --- End of list check for this paragraph ---\n");
          _context11.n = 23;
          break;
        case 22:
          _context11.p = 22;
          _t31 = _context11.v;
          console.error("Error in checkBulletedListCompliance:", _t31);
          // Don't throw - continue processing other paragraphs
        case 23:
          return _context11.a(2);
      }
    }, _callee1, null, [[16, 18], [11, 13], [10, 20], [6, 8], [0, 22]]);
  }));
  return _checkBulletedListCompliance.apply(this, arguments);
}
function tailAfterLabelNumber(text, labels) {
  try {
    var t = (text || "").replace(/\u00A0/g, " ");
    var labelAlt = labels.map(function (l) {
      return l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("|");
    var re = new RegExp("^\\s*(?:" + labelAlt + ")\\s*\\d+(?:\\.\\d+)*\\s*([\\s\\S]*)$", "i");
    var m = re.exec(t);
    return m ? m[1].replace(/^\s+/, "") : "";
  } catch (_unused5) {
    return "";
  }
}

/** True if the tail clearly continues as a sentence (not a caption head). */
function hasRealSentenceAfterNumber(text, labels) {
  try {
    var tail = tailAfterLabelNumber(text, labels);
    if (!tail) return false;
    if (/^[.:—–-]/.test(tail)) return false;
    var firstWord = /^[A-Za-z]+/.exec(tail);
    if (firstWord && firstWord[0].charAt(0) === firstWord[0].charAt(0).toLowerCase()) {
      return true;
    }
    var determiners = /\b(the|this|that|these|those|a|an|our|its?|their|there|here|we|it|they|will|can|should|would|could|may|might|must)\b/i;
    var earlyVerbs = /\b(shows?|illustrates?|lists?|presents?|summarizes?|depicts?|compares?|gives?|displays?|demonstrates?|indicates?|describes?|contains?|includes?|provides?|represents?|reveals?|explains?|outlines?|details?|reports?|records?|tracks?|measures?|analyzes?|examines?)\b/i;
    var explanatoryPatterns = /\b(is|are|was|were|has|have|had|does|do|did|will|would|can|could|should|may|might|must)\b/i;
    var conjunctions = /\b(and|but|or|so|yet|for|nor|because|since|although|though|while|whereas|however|therefore|thus|hence)\b/i;
    var firstEight = tail.split(/\s+/).slice(0, 8).join(" ");
    if (determiners.test(firstEight) || earlyVerbs.test(firstEight) || explanatoryPatterns.test(firstEight) || conjunctions.test(firstEight)) {
      return true;
    }
    if (/^[([{}]/.test(tail)) return false;
    if (/[.!?]\s+[A-Z]/.test(tail)) return true;
    return false;
  } catch (_unused6) {
    return false;
  }
}

/* ------------------------------ Caption helpers ------------------------------ */

function joinLabelsToWordBoundary(labels) {
  try {
    return labels.map(function (l) {
      return l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("|");
  } catch (_unused7) {
    return "";
  }
}
function looksLikeCaptionText(text, labels) {
  try {
    var t = (text || "").replace(/\u00A0/g, " ");
    var re = new RegExp("^\\s*(?:" + joinLabelsToWordBoundary(labels) + ")\\b", "i");
    return re.test(t);
  } catch (_unused8) {
    return false;
  }
}
function descriptionAfterNumber(text, labels) {
  try {
    var t = (text !== null && text !== void 0 ? text : "").replace(/\u00A0/g, " ");
    var head = new RegExp("^\\s*(?:" + joinLabelsToWordBoundary(labels) + ")\\s*\\d+(?:\\.\\d+)*\\s*[:.\\-—–]?\\s*", "i");
    return t.replace(head, "").trim();
  } catch (_unused9) {
    return "";
  }
}
function hasChapterSeqForLabelRobust(_x0, _x1, _x10) {
  return _hasChapterSeqForLabelRobust.apply(this, arguments);
}
function _hasChapterSeqForLabelRobust() {
  _hasChapterSeqForLabelRobust = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(ctx, p, label) {
    var fields, fieldPromises, hasStyle, hasSeq, hasArabic, hasReset, reSeq, _i5, _arr3, f, _f$code, code, oox, xml, hasFldSimpleStyle, hasFldSimpleSeq, parts, reInstr, m, joined, _hasStyle, _hasSeq, _hasArabic, _hasReset, _t32, _t33, _t34;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          _context12.p = 0;
          _context12.p = 1;
          fields = p.getRange().fields;
          fields.load("items");
          _context12.n = 2;
          return ctx.sync();
        case 2:
          if (!(fields.items && fields.items.length)) {
            _context12.n = 4;
            break;
          }
          fieldPromises = fields.items.map(function (f) {
            try {
              var _load2, _ref10;
              return (_load2 = (_ref10 = f).load) === null || _load2 === void 0 ? void 0 : _load2.call(_ref10, "code");
            } catch (_unused1) {
              return null;
            }
          }).filter(Boolean);
          if (!(fieldPromises.length > 0)) {
            _context12.n = 4;
            break;
          }
          _context12.n = 3;
          return ctx.sync();
        case 3:
          hasStyle = false, hasSeq = false, hasArabic = false, hasReset = false;
          reSeq = new RegExp("\\bSEQ\\s+" + label + "\\b", "i");
          for (_i5 = 0, _arr3 = fields.items; _i5 < _arr3.length; _i5++) {
            f = _arr3[_i5];
            try {
              code = String((_f$code = f === null || f === void 0 ? void 0 : f.code) !== null && _f$code !== void 0 ? _f$code : "");
              if (/\bSTYLEREF\s+1\s+\\s\b/i.test(code)) hasStyle = true;
              if (reSeq.test(code)) hasSeq = true;
              if (/\*\s*ARABIC\b/i.test(code)) hasArabic = true;
              if (/\\s\s*1\b/i.test(code)) hasReset = true;
            } catch (fieldError) {
              console.warn("Error processing field code:", fieldError);
            }
          }
          if (!(hasStyle && hasSeq && hasArabic && hasReset)) {
            _context12.n = 4;
            break;
          }
          return _context12.a(2, true);
        case 4:
          _context12.n = 6;
          break;
        case 5:
          _context12.p = 5;
          _t32 = _context12.v;
          console.warn("Field API approach failed:", _t32);
        case 6:
          _context12.p = 6;
          oox = p.getRange().getOoxml();
          _context12.n = 7;
          return ctx.sync();
        case 7:
          xml = String(oox.value || "");
          hasFldSimpleStyle = /<w:fldSimple[^>]*\binstr="[^"]*\bSTYLEREF\s+1\s+\\s\b[^"]*"/i.test(xml);
          hasFldSimpleSeq = new RegExp("<w:fldSimple[^>]*\\binstr=\"[^\"]*\\bSEQ\\s+" + label + "\\b[^\"]*\\*\\s*ARABIC[^\"]*\\\\s\\s*1[^\"]*\"", "i").test(xml);
          if (!(hasFldSimpleStyle && hasFldSimpleSeq)) {
            _context12.n = 8;
            break;
          }
          return _context12.a(2, true);
        case 8:
          parts = [];
          reInstr = /<w:instrText\b[^>]*>([\s\S]*?)<\/w:instrText>/gi;
          while ((m = reInstr.exec(xml)) !== null) {
            parts.push(m[1]);
            if (reInstr.lastIndex === m.index) reInstr.lastIndex++;
          }
          if (!parts.length) {
            _context12.n = 9;
            break;
          }
          joined = parts.join("");
          _hasStyle = /\bSTYLEREF\s*1\s*\\s\b/i.test(joined);
          _hasSeq = new RegExp("\\bSEQ\\s*" + label + "\\b", "i").test(joined);
          _hasArabic = /\*\s*ARABIC\b/i.test(joined);
          _hasReset = /\\s\s*1\b/i.test(joined);
          if (!(_hasStyle && _hasSeq && _hasArabic && _hasReset)) {
            _context12.n = 9;
            break;
          }
          return _context12.a(2, true);
        case 9:
          return _context12.a(2, false);
        case 10:
          _context12.p = 10;
          _t33 = _context12.v;
          console.warn("OOXML approach failed:", _t33);
          return _context12.a(2, false);
        case 11:
          _context12.p = 11;
          _t34 = _context12.v;
          console.error("Critical error in hasChapterSeqForLabelRobust:", _t34);
          return _context12.a(2, false);
        case 12:
          return _context12.a(2);
      }
    }, _callee10, null, [[6, 10], [1, 5], [0, 11]]);
  }));
  return _hasChapterSeqForLabelRobust.apply(this, arguments);
}
function stripManualPrefix(text, labels) {
  try {
    var head = new RegExp("^\\s*(?:" + joinLabelsToWordBoundary(labels) + ")\\s*[.\\-—–:]?\\s*\\d+(?:[.\\-]\\d+)*\\s*[.\\-—–:]?\\s*", "i");
    return (text || "").replace(head, "").trimStart();
  } catch (_unused0) {
    return text || "";
  }
}
function prependLabelChapterSeqPrefix(range, label) {
  try {
    var L = label.replace(/[&<>"]/g, function (m) {
      var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      return map[m] || m;
    });
    var runs = "<w:r><w:t>" + L + " </w:t></w:r>" + "<w:r><w:fldChar w:fldCharType=\"begin\"/></w:r>" + "<w:r><w:instrText xml:space=\"preserve\"> STYLEREF 1 \\s </w:instrText></w:r>" + "<w:r><w:fldChar w:fldCharType=\"separate\"/></w:r>" + "<w:r><w:t>1</w:t></w:r>" + "<w:r><w:fldChar w:fldCharType=\"end\"/></w:r>" + "<w:r><w:t>.</w:t></w:r>" + "<w:r><w:fldChar w:fldCharType=\"begin\"/></w:r>" + "<w:r><w:instrText xml:space=\"preserve\"> SEQ " + L + " \\* ARABIC \\s 1 </w:instrText></w:r>" + "<w:r><w:fldChar w:fldCharType=\"separate\"/></w:r>" + "<w:r><w:t>1</w:t></w:r>" + "<w:r><w:fldChar w:fldCharType=\"end\"/></w:r>" + "<w:r><w:t xml:space=\"preserve\"> </w:t></w:r>";
    range.insertOoxml(runs, Word.InsertLocation.start);
  } catch (error) {
    console.error("Error inserting OOXML:", error);
  }
}

/* ------------------------------ Load Rules / Preview / Clear ------------------------------ */

function renderRulesPreview(rules) {
  try {
    var box = document.getElementById("rulesDump") || document.getElementById("rulesPreview") || document.getElementById("rulesBox");
    if (!box) {
      var statusEl = document.getElementById("rulesStatus");
      box = document.createElement("pre");
      box.id = "rulesPreview";
      var st = box.style;
      st.whiteSpace = "pre-wrap";
      st.wordBreak = "break-word";
      st.marginTop = "8px";
      st.padding = "8px 10px";
      st.border = "1px solid #ddd";
      st.borderRadius = "4px";
      st.background = "#f4f4f4";
      st.maxHeight = "260px";
      st.overflow = "auto";
      if (statusEl !== null && statusEl !== void 0 && statusEl.parentElement) statusEl.parentElement.appendChild(box);else document.body.appendChild(box);
    }
    var pretty = JSON.stringify(rules !== null && rules !== void 0 ? rules : {}, null, 2);
    var MAX = 80 * 1024;
    box.textContent = pretty.length > MAX ? pretty.slice(0, MAX) + "\n…(truncated)…" : pretty;
  } catch (error) {
    console.error("Error rendering rules preview:", error);
  }
}
function bindRulesLoader() {
  try {
    var readFile = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(f) {
        var txt, json, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return f.text();
            case 1:
              txt = _context.v;
              json = JSON.parse(txt);
              applyRules(json);
              return _context.a(2, true);
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("[SGC] Failed to read/parse file:", _t);
              setStatus("Invalid rules.json (cannot parse).", "#c00");
              return _context.a(2, false);
          }
        }, _callee, null, [[0, 2]]);
      }));
      return function readFile(_x11) {
        return _ref.apply(this, arguments);
      };
    }();
    var openPickerAndRead = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!fileInput) {
                _context4.n = 2;
                break;
              }
              _context4.n = 1;
              return new Promise(function (resolve) {
                fileInput.value = "";
                var _handler = /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
                    var _t2, _t3;
                    return _regenerator().w(function (_context3) {
                      while (1) switch (_context3.n) {
                        case 0:
                          fileInput.removeEventListener("change", _handler);
                          if (!(fileInput.files && fileInput.files.length > 0)) {
                            _context3.n = 2;
                            break;
                          }
                          _t2 = resolve;
                          _context3.n = 1;
                          return readFile(fileInput.files[0]);
                        case 1:
                          _t3 = _context3.v;
                          _t2(_t3);
                          _context3.n = 3;
                          break;
                        case 2:
                          resolve(false);
                        case 3:
                          return _context3.a(2);
                      }
                    }, _callee3);
                  }));
                  return function handler() {
                    return _ref4.apply(this, arguments);
                  };
                }();
                fileInput.addEventListener("change", _handler, {
                  once: true
                });
                fileInput.click();
              });
            case 1:
              return _context4.a(2, _context4.v);
            case 2:
              return _context4.a(2, false);
          }
        }, _callee4);
      }));
      return function openPickerAndRead() {
        return _ref3.apply(this, arguments);
      };
    }();
    var fileInput = document.getElementById("rulesFileInput");
    var loadBtn = document.getElementById("loadRulesBtn");
    var statusEl = document.getElementById("rulesStatus");
    var setStatus = function setStatus(msg) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#555";
      if (statusEl) {
        statusEl.textContent = msg;
        statusEl.style.color = color;
      }
    };
    var applyRules = function applyRules(obj) {
      setRules(obj);
      setStatus("Rules loaded.", "#0a0");
      renderRulesPreview(obj);
    };
    if (fileInput) {
      fileInput.accept = ".json,application/json";
      fileInput.addEventListener("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(!fileInput.files || fileInput.files.length === 0)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.n = 2;
              return readFile(fileInput.files[0]);
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      })));
    }
    if (loadBtn) {
      loadBtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _fileInput$files;
        var ok, picked;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              setStatus("Loading rules…");
              if (!(fileInput !== null && fileInput !== void 0 && (_fileInput$files = fileInput.files) !== null && _fileInput$files !== void 0 && _fileInput$files.length)) {
                _context5.n = 2;
                break;
              }
              _context5.n = 1;
              return readFile(fileInput.files[0]);
            case 1:
              ok = _context5.v;
              if (!ok) {
                _context5.n = 2;
                break;
              }
              return _context5.a(2);
            case 2:
              _context5.n = 3;
              return openPickerAndRead();
            case 3:
              picked = _context5.v;
              if (!picked) setStatus("Please choose rules.json manually.", "#c00");
            case 4:
              return _context5.a(2);
          }
        }, _callee5);
      })));
    }
  } catch (error) {
    console.error("Error binding rules loader:", error);
  }
}
function clearMarkers() {
  return _clearMarkers.apply(this, arguments);
}
/* ------------------------------ Scan with Better Error Handling ------------------------------ */
function _clearMarkers() {
  _clearMarkers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
    var _t38;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          _context14.p = 0;
          _context14.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(ctx) {
              var all, _iterator5, _step5, cc, _r2, toDelete, _iterator6, _step6, _cc, paras, _iterator7, _step7, p, r, tables, _iterator8, _step8, t, _r, allRange, _t35, _t36, _t37;
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.p = _context13.n) {
                  case 0:
                    _context13.p = 0;
                    all = ctx.document.contentControls;
                    all.load("items/tag");
                    _context13.n = 1;
                    return ctx.sync();
                  case 1:
                    // Clear highlighting first
                    _iterator5 = _createForOfIteratorHelper(all.items);
                    _context13.p = 2;
                    _iterator5.s();
                  case 3:
                    if ((_step5 = _iterator5.n()).done) {
                      _context13.n = 6;
                      break;
                    }
                    cc = _step5.value;
                    if (!(!cc.tag || !cc.tag.startsWith(ISSUE_TAG_PREFIX))) {
                      _context13.n = 4;
                      break;
                    }
                    return _context13.a(3, 5);
                  case 4:
                    try {
                      _r2 = cc.getRange();
                      _r2.font.highlightColor = "NoColor";
                      _r2.font.highlightColor = "None";
                    } catch (highlightError) {
                      console.warn("Error clearing highlight:", highlightError);
                    }
                  case 5:
                    _context13.n = 3;
                    break;
                  case 6:
                    _context13.n = 8;
                    break;
                  case 7:
                    _context13.p = 7;
                    _t35 = _context13.v;
                    _iterator5.e(_t35);
                  case 8:
                    _context13.p = 8;
                    _iterator5.f();
                    return _context13.f(8);
                  case 9:
                    _context13.n = 10;
                    return ctx.sync();
                  case 10:
                    // Delete content controls
                    toDelete = all.items.filter(function (cc) {
                      return cc.tag && cc.tag.startsWith(ISSUE_TAG_PREFIX);
                    });
                    _iterator6 = _createForOfIteratorHelper(toDelete);
                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        _cc = _step6.value;
                        try {
                          _cc.delete(true);
                        } catch (deleteError) {
                          console.warn("Error deleting content control:", deleteError);
                        }
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                    _context13.n = 11;
                    return ctx.sync();
                  case 11:
                    _context13.p = 11;
                    paras = ctx.document.body.paragraphs;
                    paras.load("items");
                    _context13.n = 12;
                    return ctx.sync();
                  case 12:
                    _iterator7 = _createForOfIteratorHelper(paras.items);
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        p = _step7.value;
                        try {
                          r = p.getRange();
                          r.font.highlightColor = "NoColor";
                          r.font.highlightColor = "None";
                        } catch (paraHighlightError) {
                          console.warn("Error clearing paragraph highlight:", paraHighlightError);
                        }
                      }
                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }
                    _context13.n = 13;
                    return ctx.sync();
                  case 13:
                    tables = ctx.document.body.tables;
                    tables.load("items");
                    _context13.n = 14;
                    return ctx.sync();
                  case 14:
                    _iterator8 = _createForOfIteratorHelper(tables.items);
                    try {
                      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                        t = _step8.value;
                        try {
                          _r = t.getRange();
                          _r.font.highlightColor = "NoColor";
                          _r.font.highlightColor = "None";
                        } catch (tableHighlightError) {
                          console.warn("Error clearing table highlight:", tableHighlightError);
                        }
                      }
                    } catch (err) {
                      _iterator8.e(err);
                    } finally {
                      _iterator8.f();
                    }
                    _context13.n = 15;
                    return ctx.sync();
                  case 15:
                    allRange = ctx.document.body.getRange();
                    allRange.font.highlightColor = "NoColor";
                    allRange.font.highlightColor = "None";
                    _context13.n = 16;
                    return ctx.sync();
                  case 16:
                    _context13.n = 18;
                    break;
                  case 17:
                    _context13.p = 17;
                    _t36 = _context13.v;
                    console.warn("Error with global highlight clearing:", _t36);
                  case 18:
                    _context13.n = 20;
                    break;
                  case 19:
                    _context13.p = 19;
                    _t37 = _context13.v;
                    console.error("Error in clearMarkers main logic:", _t37);
                  case 20:
                    return _context13.a(2);
                }
              }, _callee11, null, [[11, 17], [2, 7, 8, 9], [0, 19]]);
            }));
            return function (_x16) {
              return _ref11.apply(this, arguments);
            };
          }());
        case 1:
          _context14.n = 3;
          break;
        case 2:
          _context14.p = 2;
          _t38 = _context14.v;
          console.error("Critical error in clearMarkers:", _t38);
        case 3:
          return _context14.a(2);
      }
    }, _callee12, null, [[0, 2]]);
  }));
  return _clearMarkers.apply(this, arguments);
}
function bindScan() {
  try {
    var btn = document.getElementById("scanBtn");
    var status = document.getElementById("scanStatus");
    var list = document.getElementById("issuesList");
    if (!btn || !status || !list) return;
    btn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var _rules$meta, _rules$rules, _rules$rules$indentat, _rules$rules2, _rules$rules$styles$h, _rules$rules3, _rules$rules4, _figRule$style, _ref7, _tblRule$styles, rules, issues, aliases, indentPolicy, indentTolCm, headingAllowedRaw, HEADING_ALLOWED, capRules, figRule, tblRule, figAllowed, tblAllowed, FIG_LABELS, TBL_LABELS, requireFigSeq, requireTblSeq, _t19, _t20;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            rules = getRules();
            if (rules) {
              _context9.n = 1;
              break;
            }
            status.textContent = "Load a rules JSON first.";
            status.style.color = "#c00";
            return _context9.a(2);
          case 1:
            status.textContent = "Scanning…";
            status.style.color = "#555";
            list.innerHTML = "";
            issues = [];
            aliases = (rules === null || rules === void 0 || (_rules$meta = rules.meta) === null || _rules$meta === void 0 ? void 0 : _rules$meta.styleNameAliases) || {};
            indentPolicy = (rules === null || rules === void 0 || (_rules$rules = rules.rules) === null || _rules$rules === void 0 || (_rules$rules = _rules$rules.indentation) === null || _rules$rules === void 0 ? void 0 : _rules$rules.expectedCmByStyle) || {};
            indentTolCm = Math.max((_rules$rules$indentat = rules === null || rules === void 0 || (_rules$rules2 = rules.rules) === null || _rules$rules2 === void 0 || (_rules$rules2 = _rules$rules2.indentation) === null || _rules$rules2 === void 0 ? void 0 : _rules$rules2.toleranceCm) !== null && _rules$rules$indentat !== void 0 ? _rules$rules$indentat : 0.03, 0.02);
            headingAllowedRaw = (_rules$rules$styles$h = rules === null || rules === void 0 || (_rules$rules3 = rules.rules) === null || _rules$rules3 === void 0 || (_rules$rules3 = _rules$rules3.styles) === null || _rules$rules3 === void 0 || (_rules$rules3 = _rules$rules3.headings) === null || _rules$rules3 === void 0 ? void 0 : _rules$rules3.allowed) !== null && _rules$rules$styles$h !== void 0 ? _rules$rules$styles$h : [];
            HEADING_ALLOWED = new Set(headingAllowedRaw.map(function (s) {
              return normalizeStyle(s, aliases);
            }));
            capRules = (rules === null || rules === void 0 || (_rules$rules4 = rules.rules) === null || _rules$rules4 === void 0 || (_rules$rules4 = _rules$rules4.styles) === null || _rules$rules4 === void 0 ? void 0 : _rules$rules4.captions) || {};
            figRule = capRules.figure || {};
            tblRule = capRules.table || {};
            figAllowed = normalizeStyleList((_figRule$style = figRule.style) !== null && _figRule$style !== void 0 ? _figRule$style : "TCC 그림 캡션", aliases);
            tblAllowed = normalizeStyleList((_ref7 = (_tblRule$styles = tblRule.styles) !== null && _tblRule$styles !== void 0 ? _tblRule$styles : tblRule.style) !== null && _ref7 !== void 0 ? _ref7 : "캡션,TCC 표 캡션,표캡션TCC", aliases);
            FIG_LABELS = labelsToArray(figRule.seqLabels, ["Figure", "그림"]);
            TBL_LABELS = labelsToArray(tblRule.seqLabels, ["Table", "표"]);
            requireFigSeq = figRule.requireAutoNumber !== false;
            requireTblSeq = tblRule.requireAutoNumber !== false; // Clear existing markers first
            _context9.p = 2;
            _context9.n = 3;
            return Word.run(/*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(context) {
                var all, toDelete, _iterator2, _step2, cc;
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.n) {
                    case 0:
                      all = context.document.contentControls;
                      all.load("items/tag");
                      _context6.n = 1;
                      return context.sync();
                    case 1:
                      toDelete = all.items.filter(function (cc) {
                        return cc.tag && cc.tag.startsWith(ISSUE_TAG_PREFIX);
                      });
                      _iterator2 = _createForOfIteratorHelper(toDelete);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          cc = _step2.value;
                          try {
                            cc.delete(true);
                          } catch (deleteError) {
                            console.warn("Error deleting existing marker:", deleteError);
                          }
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                      _context6.n = 2;
                      return context.sync();
                    case 2:
                      return _context6.a(2);
                  }
                }, _callee6);
              }));
              return function (_x12) {
                return _ref8.apply(this, arguments);
              };
            }());
          case 3:
            _context9.n = 5;
            break;
          case 4:
            _context9.p = 4;
            _t19 = _context9.v;
            console.warn("Error clearing existing markers:", _t19);
          case 5:
            _context9.n = 6;
            return Word.run(/*#__PURE__*/function () {
              var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(context) {
                var body, skip, paras, tocSkip, _loop, _ret, i, cskip, caps, tocSkip2, _i2, p, raw, std, txt, styleIsFig, styleIsTbl, looksFig, looksTbl, needFigCheck, needTblCheck, figOK, tblOK, tag, rest, _tag, _tag2, _tag3, _tag4, _rest, _tag5, _tag6, _tag7, _t7, _t8, _t9, _t0, _t1, _t10, _t11, _t12, _t13, _t14, _t15, _t16, _t17, _t18;
                return _regenerator().w(function (_context8) {
                  while (1) switch (_context8.p = _context8.n) {
                    case 0:
                      _context8.p = 0;
                      body = context.document.body;
                      skip = 0;
                    case 1:
                      if (false) // removed by dead control flow
{}
                      _context8.p = 2;
                      paras = body.paragraphs;
                      paras.load({
                        select: "style,text,isListItem,leftIndent,firstLineIndent",
                        top: BATCH_SIZE,
                        skip: skip
                      });
                      _context8.n = 3;
                      return context.sync();
                    case 3:
                      if (!(paras.items.length === 0)) {
                        _context8.n = 4;
                        break;
                      }
                      return _context8.a(3, 12);
                    case 4:
                      _context8.n = 5;
                      return computeTocSkips(context, paras);
                    case 5:
                      tocSkip = _context8.v;
                      _loop = /*#__PURE__*/_regenerator().m(function _loop() {
                        var p, raw, std, txt, isHeading, leftCm, firstCm, textStart, expected, trimmedText, listHeuristic, isRealList, tag, _t4, _t5, _t6;
                        return _regenerator().w(function (_context7) {
                          while (1) switch (_context7.p = _context7.n) {
                            case 0:
                              _context7.p = 0;
                              p = paras.items[i];
                              if (!tocSkip[i]) {
                                _context7.n = 1;
                                break;
                              }
                              return _context7.a(2, 0);
                            case 1:
                              _context7.n = 2;
                              return checkBulletedListCompliance(context, p, rules, aliases, issues);
                            case 2:
                              raw = p.style || "";
                              std = normalizeStyle(raw, aliases);
                              txt = p.text || ""; // Skip placeholder/empty content
                              if (!(txt.includes("텍스트를 입력하려면 여기를 클릭하거나 탭하세요") || txt.includes("Click or tap here to enter text") || txt.includes("Type here") || txt.trim() === "" || /^(\[.*\]|\{.*\}|\(.*\))$/.test(txt.trim()))) {
                                _context7.n = 3;
                                break;
                              }
                              return _context7.a(2, 0);
                            case 3:
                              // Skip headings
                              isHeading = HEADING_ALLOWED.has(std) || /^(heading|제목)\s*\d+/.test(std) || /^(heading|제목)\s*\d+/.test((raw || "").toLowerCase());
                              if (!isHeading) {
                                _context7.n = 4;
                                break;
                              }
                              return _context7.a(2, 0);
                            case 4:
                              _context7.p = 4;
                              leftCm = toCm(p.leftIndent || 0);
                              firstCm = toCm(p.firstLineIndent || 0);
                              textStart = leftCm + firstCm;
                              expected = function () {
                                if (indentPolicy[raw]) return indentPolicy[raw];
                                var n = normalizeStyle(raw, aliases);
                                if (indentPolicy[n]) return indentPolicy[n];
                                return undefined;
                              }();
                              if (!(typeof expected === "number")) {
                                _context7.n = 8;
                                break;
                              }
                              trimmedText = txt.trim();
                              listHeuristic = /^[\u2022\u25E6\u25AA\u25CF\u25CB\u25A0\-–·•◦○▪□]\s+/.test(trimmedText) || /^(\(?\d{1,3}|\(?[A-Za-z]{1,3}|\(?[IVXLCM]{1,4})[.)]\s+/i.test(trimmedText) || /^\d+\s+/.test(trimmedText);
                              isRealList = !!p.isListItem && listHeuristic;
                              if (!(!isRealList && Math.abs(textStart - expected) > indentTolCm)) {
                                _context7.n = 8;
                                break;
                              }
                              _context7.p = 5;
                              _context7.n = 6;
                              return markParagraph(context, p);
                            case 6:
                              tag = _context7.v;
                              issues.push({
                                tag: tag,
                                kind: "indent",
                                message: "Indent " + round2(textStart) + " cm (expected " + round2(expected) + " cm) for style \"" + (raw || std) + "\".",
                                fixMeta: {
                                  expectedCm: expected
                                }
                              });
                              _context7.n = 8;
                              break;
                            case 7:
                              _context7.p = 7;
                              _t4 = _context7.v;
                              console.warn("Error marking indent issue:", _t4);
                            case 8:
                              _context7.n = 10;
                              break;
                            case 9:
                              _context7.p = 9;
                              _t5 = _context7.v;
                              console.warn("Error checking indentation:", _t5);
                            case 10:
                              _context7.n = 12;
                              break;
                            case 11:
                              _context7.p = 11;
                              _t6 = _context7.v;
                              console.warn("Error processing paragraph ".concat(i, ":"), _t6);
                            case 12:
                              return _context7.a(2);
                          }
                        }, _loop, null, [[5, 7], [4, 9], [0, 11]]);
                      });
                      i = 0;
                    case 6:
                      if (!(i < paras.items.length)) {
                        _context8.n = 9;
                        break;
                      }
                      return _context8.d(_regeneratorValues(_loop()), 7);
                    case 7:
                      _ret = _context8.v;
                      if (!(_ret === 0)) {
                        _context8.n = 8;
                        break;
                      }
                      return _context8.a(3, 8);
                    case 8:
                      i++;
                      _context8.n = 6;
                      break;
                    case 9:
                      skip += paras.items.length;
                      _context8.n = 11;
                      break;
                    case 10:
                      _context8.p = 10;
                      _t7 = _context8.v;
                      console.error("Error processing batch starting at ".concat(skip, ":"), _t7);
                      skip += BATCH_SIZE; // Continue with next batch
                      if (!(skip > 10000)) {
                        _context8.n = 11;
                        break;
                      }
                      return _context8.a(3, 12);
                    case 11:
                      _context8.n = 1;
                      break;
                    case 12:
                      // Caption checking
                      cskip = 0;
                    case 13:
                      if (false) // removed by dead control flow
{}
                      _context8.p = 14;
                      caps = body.paragraphs;
                      caps.load({
                        select: "style,text",
                        top: BATCH_SIZE,
                        skip: cskip
                      });
                      _context8.n = 15;
                      return context.sync();
                    case 15:
                      if (!(caps.items.length === 0)) {
                        _context8.n = 16;
                        break;
                      }
                      return _context8.a(3, 73);
                    case 16:
                      _context8.n = 17;
                      return computeTocSkips(context, caps);
                    case 17:
                      tocSkip2 = _context8.v;
                      _i2 = 0;
                    case 18:
                      if (!(_i2 < caps.items.length)) {
                        _context8.n = 70;
                        break;
                      }
                      _context8.p = 19;
                      if (!tocSkip2[_i2]) {
                        _context8.n = 20;
                        break;
                      }
                      return _context8.a(3, 69);
                    case 20:
                      p = caps.items[_i2];
                      raw = p.style || "";
                      std = normalizeStyle(raw, aliases);
                      txt = p.text || ""; // Skip placeholder/empty content
                      if (!(txt.includes("텍스트를 입력하려면 여기를 클릭하거나 탭하세요") || txt.includes("Click or tap here to enter text") || txt.includes("Type here") || txt.trim() === "" || /^(\[.*\]|\{.*\}|\(.*\))$/.test(txt.trim()))) {
                        _context8.n = 21;
                        break;
                      }
                      return _context8.a(3, 69);
                    case 21:
                      styleIsFig = figAllowed.has(std) || figAllowed.has(raw);
                      styleIsTbl = tblAllowed.has(std) || tblAllowed.has(raw);
                      looksFig = looksLikeCaptionText(txt, FIG_LABELS);
                      looksTbl = looksLikeCaptionText(txt, TBL_LABELS);
                      needFigCheck = styleIsFig || looksFig;
                      needTblCheck = styleIsTbl || looksTbl;
                      if (!(!needFigCheck && !needTblCheck)) {
                        _context8.n = 22;
                        break;
                      }
                      return _context8.a(3, 69);
                    case 22:
                      figOK = false, tblOK = false;
                      if (!needFigCheck) {
                        _context8.n = 26;
                        break;
                      }
                      _context8.p = 23;
                      _context8.n = 24;
                      return hasChapterSeqForLabelRobust(context, p, "Figure");
                    case 24:
                      figOK = _context8.v;
                      _context8.n = 26;
                      break;
                    case 25:
                      _context8.p = 25;
                      _t8 = _context8.v;
                      console.warn("Error checking figure fields:", _t8);
                    case 26:
                      if (!needTblCheck) {
                        _context8.n = 30;
                        break;
                      }
                      _context8.p = 27;
                      _context8.n = 28;
                      return hasChapterSeqForLabelRobust(context, p, "Table");
                    case 28:
                      tblOK = _context8.v;
                      _context8.n = 30;
                      break;
                    case 29:
                      _context8.p = 29;
                      _t9 = _context8.v;
                      console.warn("Error checking table fields:", _t9);
                    case 30:
                      if (!styleIsFig) {
                        _context8.n = 40;
                        break;
                      }
                      if (!(!figOK && requireFigSeq)) {
                        _context8.n = 35;
                        break;
                      }
                      _context8.p = 31;
                      _context8.n = 32;
                      return markParagraph(context, p);
                    case 32:
                      tag = _context8.v;
                      issues.push({
                        tag: tag,
                        kind: "figure-style",
                        message: "Figure caption uses manual numbering. Expected { STYLEREF 1 \\s }.{ SEQ Figure \\* ARABIC \\s 1 }"
                      });
                      _context8.n = 34;
                      break;
                    case 33:
                      _context8.p = 33;
                      _t0 = _context8.v;
                      console.warn("Error marking figure issue:", _t0);
                    case 34:
                      _context8.n = 39;
                      break;
                    case 35:
                      if (!figOK) {
                        _context8.n = 39;
                        break;
                      }
                      rest = descriptionAfterNumber(txt, FIG_LABELS);
                      if (rest) {
                        _context8.n = 39;
                        break;
                      }
                      _context8.p = 36;
                      _context8.n = 37;
                      return markParagraph(context, p);
                    case 37:
                      _tag = _context8.v;
                      issues.push({
                        tag: _tag,
                        kind: "figure-empty",
                        message: "Figure caption is empty."
                      });
                      _context8.n = 39;
                      break;
                    case 38:
                      _context8.p = 38;
                      _t1 = _context8.v;
                      console.warn("Error marking empty figure:", _t1);
                    case 39:
                      _context8.n = 48;
                      break;
                    case 40:
                      if (!looksFig) {
                        _context8.n = 48;
                        break;
                      }
                      if (figOK) {
                        _context8.n = 45;
                        break;
                      }
                      if (hasRealSentenceAfterNumber(txt, FIG_LABELS)) {
                        _context8.n = 44;
                        break;
                      }
                      _context8.p = 41;
                      _context8.n = 42;
                      return markParagraph(context, p);
                    case 42:
                      _tag2 = _context8.v;
                      issues.push({
                        tag: _tag2,
                        kind: "figure-style",
                        message: "Figure-like text uses neither automatic numbering nor the correct caption style."
                      });
                      _context8.n = 44;
                      break;
                    case 43:
                      _context8.p = 43;
                      _t10 = _context8.v;
                      console.warn("Error marking figure style issue:", _t10);
                    case 44:
                      _context8.n = 48;
                      break;
                    case 45:
                      _context8.p = 45;
                      _context8.n = 46;
                      return markParagraph(context, p);
                    case 46:
                      _tag3 = _context8.v;
                      issues.push({
                        tag: _tag3,
                        kind: "figure-style",
                        message: "Figure caption uses the wrong style. Apply the designated figure caption style."
                      });
                      _context8.n = 48;
                      break;
                    case 47:
                      _context8.p = 47;
                      _t11 = _context8.v;
                      console.warn("Error marking figure wrong style:", _t11);
                    case 48:
                      if (!styleIsTbl) {
                        _context8.n = 58;
                        break;
                      }
                      if (!(!tblOK && requireTblSeq)) {
                        _context8.n = 53;
                        break;
                      }
                      _context8.p = 49;
                      _context8.n = 50;
                      return markParagraph(context, p);
                    case 50:
                      _tag4 = _context8.v;
                      issues.push({
                        tag: _tag4,
                        kind: "table-style",
                        message: "Table caption uses manual numbering. Expected { STYLEREF 1 \\s }.{ SEQ Table \\* ARABIC \\s 1 }"
                      });
                      _context8.n = 52;
                      break;
                    case 51:
                      _context8.p = 51;
                      _t12 = _context8.v;
                      console.warn("Error marking table issue:", _t12);
                    case 52:
                      _context8.n = 57;
                      break;
                    case 53:
                      if (!tblOK) {
                        _context8.n = 57;
                        break;
                      }
                      _rest = descriptionAfterNumber(txt, TBL_LABELS);
                      if (_rest) {
                        _context8.n = 57;
                        break;
                      }
                      _context8.p = 54;
                      _context8.n = 55;
                      return markParagraph(context, p);
                    case 55:
                      _tag5 = _context8.v;
                      issues.push({
                        tag: _tag5,
                        kind: "table-empty",
                        message: "Table caption is empty."
                      });
                      _context8.n = 57;
                      break;
                    case 56:
                      _context8.p = 56;
                      _t13 = _context8.v;
                      console.warn("Error marking empty table:", _t13);
                    case 57:
                      _context8.n = 67;
                      break;
                    case 58:
                      if (!looksTbl) {
                        _context8.n = 67;
                        break;
                      }
                      if (tblOK) {
                        _context8.n = 63;
                        break;
                      }
                      if (hasRealSentenceAfterNumber(txt, TBL_LABELS)) {
                        _context8.n = 62;
                        break;
                      }
                      _context8.p = 59;
                      _context8.n = 60;
                      return markParagraph(context, p);
                    case 60:
                      _tag6 = _context8.v;
                      issues.push({
                        tag: _tag6,
                        kind: "table-style",
                        message: "Table-like text uses neither automatic numbering nor the correct caption style."
                      });
                      _context8.n = 62;
                      break;
                    case 61:
                      _context8.p = 61;
                      _t14 = _context8.v;
                      console.warn("Error marking table style issue:", _t14);
                    case 62:
                      _context8.n = 67;
                      break;
                    case 63:
                      if (styleIsTbl) {
                        _context8.n = 67;
                        break;
                      }
                      _context8.p = 64;
                      _context8.n = 65;
                      return markParagraph(context, p);
                    case 65:
                      _tag7 = _context8.v;
                      issues.push({
                        tag: _tag7,
                        kind: "table-style",
                        message: "Table caption uses the wrong style. Apply the designated table caption style."
                      });
                      _context8.n = 67;
                      break;
                    case 66:
                      _context8.p = 66;
                      _t15 = _context8.v;
                      console.warn("Error marking table wrong style:", _t15);
                    case 67:
                      _context8.n = 69;
                      break;
                    case 68:
                      _context8.p = 68;
                      _t16 = _context8.v;
                      console.warn("Error processing caption ".concat(_i2, ":"), _t16);
                    case 69:
                      _i2++;
                      _context8.n = 18;
                      break;
                    case 70:
                      cskip += caps.items.length;
                      _context8.n = 72;
                      break;
                    case 71:
                      _context8.p = 71;
                      _t17 = _context8.v;
                      console.error("Error processing caption batch starting at ".concat(cskip, ":"), _t17);
                      cskip += BATCH_SIZE;
                      if (!(cskip > 10000)) {
                        _context8.n = 72;
                        break;
                      }
                      return _context8.a(3, 73);
                    case 72:
                      _context8.n = 13;
                      break;
                    case 73:
                      _context8.n = 75;
                      break;
                    case 74:
                      _context8.p = 74;
                      _t18 = _context8.v;
                      console.error("Error in main scan logic:", _t18);
                      status.textContent = "Scan failed with error: " + _t18.message;
                      status.style.color = "#c00";
                      return _context8.a(2);
                    case 75:
                      return _context8.a(2);
                  }
                }, _callee7, null, [[64, 66], [59, 61], [54, 56], [49, 51], [45, 47], [41, 43], [36, 38], [31, 33], [27, 29], [23, 25], [19, 68], [14, 71], [2, 10], [0, 74]]);
              }));
              return function (_x13) {
                return _ref9.apply(this, arguments);
              };
            }());
          case 6:
            window.__SGC_ISSUES__ = issues;
            renderIssues(issues);
            if (issues.length === 0) {
              status.textContent = "Scan complete. No issues found.";
              status.style.color = "#0a0";
            } else {
              status.textContent = "Scan complete. Found " + issues.length + " issue(s).";
              status.style.color = "#a60";
            }
            _context9.n = 8;
            break;
          case 7:
            _context9.p = 7;
            _t20 = _context9.v;
            console.error("Critical error in scan:", _t20);
            status.textContent = "Scan failed: " + _t20.message;
            status.style.color = "#c00";
          case 8:
            return _context9.a(2);
        }
      }, _callee8, null, [[2, 4], [0, 7]]);
    })));
  } catch (error) {
    console.error("Error binding scan:", error);
  }
}

/* ------------------------------ Issue List / Actions with Error Handling ------------------------------ */

function renderIssues(issues) {
  try {
    var list = document.getElementById("issuesList");
    if (!list) return;
    list.innerHTML = "";
    var noFixKinds = new Set(["figure-style", "table-style"]);
    var _iterator3 = _createForOfIteratorHelper(issues),
      _step3;
    try {
      var _loop2 = function _loop2() {
        var it = _step3.value;
        try {
          var li = document.createElement("li");
          li.className = "issue";
          li.dataset.tag = it.tag;
          li.style.cursor = "pointer";
          var msg = document.createElement("div");
          msg.textContent = "[" + it.kind + "] " + it.message;
          li.appendChild(msg);
          if (!noFixKinds.has(it.kind)) {
            var fix = document.createElement("button");
            fix.textContent = "Fix";
            fix.addEventListener("click", function (e) {
              e.stopPropagation();
              fixIssue(it).catch(function (err) {
                console.error("Error fixing issue:", err);
                // Could show user feedback here
              });
            });
            li.appendChild(fix);
          }
          list.appendChild(li);
        } catch (itemError) {
          console.warn("Error rendering issue item:", itemError);
        }
      };
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } catch (error) {
    console.error("Error rendering issues:", error);
  }
}
function bindIssueRowClicks() {
  try {
    var list = document.getElementById("issuesList");
    if (!list) return;
    list.addEventListener("click", function (e) {
      try {
        var row = e.target.closest("li.issue");
        if (!row) return;
        var tag = row.dataset.tag;
        if (!tag) return;
        jumpToIssue(tag).catch(function (err) {
          console.error("Error jumping to issue:", err);
        });
      } catch (error) {
        console.warn("Error handling issue row click:", error);
      }
    });
  } catch (error) {
    console.error("Error binding issue row clicks:", error);
  }
}
function jumpToIssue(_x14) {
  return _jumpToIssue.apply(this, arguments);
}
/* ------------------------------ Fix Logic with Error Handling ------------------------------ */
function _jumpToIssue() {
  _jumpToIssue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(tag) {
    var _t40;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          _context16.p = 0;
          _context16.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(ctx) {
              var controls, _t39;
              return _regenerator().w(function (_context15) {
                while (1) switch (_context15.p = _context15.n) {
                  case 0:
                    _context15.p = 0;
                    controls = ctx.document.contentControls.getByTag(ISSUE_TAG_PREFIX + tag);
                    controls.load("items");
                    _context15.n = 1;
                    return ctx.sync();
                  case 1:
                    if (!(controls.items.length > 0)) {
                      _context15.n = 2;
                      break;
                    }
                    controls.items[0].select();
                    _context15.n = 2;
                    return ctx.sync();
                  case 2:
                    _context15.n = 4;
                    break;
                  case 3:
                    _context15.p = 3;
                    _t39 = _context15.v;
                    console.warn("Error jumping to specific issue:", _t39);
                  case 4:
                    return _context15.a(2);
                }
              }, _callee13, null, [[0, 3]]);
            }));
            return function (_x17) {
              return _ref12.apply(this, arguments);
            };
          }());
        case 1:
          _context16.n = 3;
          break;
        case 2:
          _context16.p = 2;
          _t40 = _context16.v;
          console.error("Critical error jumping to issue:", _t40);
        case 3:
          return _context16.a(2);
      }
    }, _callee14, null, [[0, 2]]);
  }));
  return _jumpToIssue.apply(this, arguments);
}
function fixIssue(_x15) {
  return _fixIssue.apply(this, arguments);
}
function _fixIssue() {
  _fixIssue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(it) {
    var _rules$meta2, _rules$rules$styles$b2, _rules$rules0, _rules$rules$styles$n2, _rules$rules1, _bulletRule$allowed2, _numberedRule$allowed3, _rules$rules10, _bulletRule$allowedIn2, _numberedRule$allowed4, _rules$rules11, rules, aliases, bulletRule, numberedRule, allowedBulletNames, allowedNumberedNames, indentPolicy, allowedBulletIndentsCm, allowedNumberedIndentsCm, capRules, figRule, tblRule, figStyle, tblStyles, tblStyle, _t49;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          _context18.p = 0;
          rules = getRules() || {};
          aliases = (rules === null || rules === void 0 || (_rules$meta2 = rules.meta) === null || _rules$meta2 === void 0 ? void 0 : _rules$meta2.styleNameAliases) || {};
          bulletRule = (_rules$rules$styles$b2 = rules === null || rules === void 0 || (_rules$rules0 = rules.rules) === null || _rules$rules0 === void 0 || (_rules$rules0 = _rules$rules0.styles) === null || _rules$rules0 === void 0 ? void 0 : _rules$rules0.bullets) !== null && _rules$rules$styles$b2 !== void 0 ? _rules$rules$styles$b2 : {};
          numberedRule = (_rules$rules$styles$n2 = rules === null || rules === void 0 || (_rules$rules1 = rules.rules) === null || _rules$rules1 === void 0 || (_rules$rules1 = _rules$rules1.styles) === null || _rules$rules1 === void 0 ? void 0 : _rules$rules1.numberedLists) !== null && _rules$rules$styles$n2 !== void 0 ? _rules$rules$styles$n2 : {};
          allowedBulletNames = (_bulletRule$allowed2 = bulletRule.allowed) !== null && _bulletRule$allowed2 !== void 0 ? _bulletRule$allowed2 : ["TCC 글머리1", "TCC 글머리2", "TCC 글머리3", "TCC 글머리4"];
          allowedNumberedNames = (_numberedRule$allowed3 = numberedRule.allowed) !== null && _numberedRule$allowed3 !== void 0 ? _numberedRule$allowed3 : ["TCC 번호1", "TCC 번호2", "TCC 번호3"];
          indentPolicy = (rules === null || rules === void 0 || (_rules$rules10 = rules.rules) === null || _rules$rules10 === void 0 || (_rules$rules10 = _rules$rules10.indentation) === null || _rules$rules10 === void 0 ? void 0 : _rules$rules10.expectedCmByStyle) || {};
          allowedBulletIndentsCm = (_bulletRule$allowedIn2 = bulletRule.allowedIndentsCm) !== null && _bulletRule$allowedIn2 !== void 0 ? _bulletRule$allowedIn2 : [0.71, 1.21, 1.71, 2.21];
          allowedNumberedIndentsCm = (_numberedRule$allowed4 = numberedRule.allowedIndentsCm) !== null && _numberedRule$allowed4 !== void 0 ? _numberedRule$allowed4 : [0.71, 1.21, 1.71];
          capRules = (rules === null || rules === void 0 || (_rules$rules11 = rules.rules) === null || _rules$rules11 === void 0 || (_rules$rules11 = _rules$rules11.styles) === null || _rules$rules11 === void 0 ? void 0 : _rules$rules11.captions) || {};
          figRule = capRules.figure || {};
          tblRule = capRules.table || {};
          figStyle = Array.isArray(figRule.style) ? figRule.style[0] : figRule.style || "TCC 그림 캡션";
          tblStyles = tblRule.styles || tblRule.style || "캡션,TCC 표 캡션,표캡션TCC";
          tblStyle = Array.isArray(tblStyles) ? tblStyles[0] : tblStyles;
          _context18.n = 1;
          return Word.run(/*#__PURE__*/function () {
            var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(ctx) {
              var controls, cc, para, fixMeta, allowedStyles, allowedIndents, currentIndent, bestMatch, minDistance, i, distance, targetStyle, targetIndent, _fixMeta, _allowedStyles, _allowedIndents, _currentIndent, _bestMatch, _minDistance, _i6, _distance, _targetStyle, _targetIndent, _it$fixMeta$expectedC, _it$fixMeta, expectedCm, curFirst, newLeft, _t41, _t42, _t43, _t44, _t45, _t46, _t47, _t48;
              return _regenerator().w(function (_context17) {
                while (1) switch (_context17.p = _context17.n) {
                  case 0:
                    _context17.p = 0;
                    controls = ctx.document.contentControls.getByTag(ISSUE_TAG_PREFIX + it.tag);
                    controls.load("items");
                    _context17.n = 1;
                    return ctx.sync();
                  case 1:
                    if (!(controls.items.length === 0)) {
                      _context17.n = 2;
                      break;
                    }
                    return _context17.a(2);
                  case 2:
                    cc = controls.items[0];
                    para = cc.getRange().paragraphs.getFirst();
                    para.load(["style", "isListItem", "leftIndent", "firstLineIndent", "text"]);
                    _context17.n = 3;
                    return ctx.sync();
                  case 3:
                    _t41 = it.kind;
                    _context17.n = _t41 === "bullet-style" ? 4 : _t41 === "numbered-style" ? 8 : _t41 === "indent" ? 12 : _t41 === "figure-empty" ? 16 : _t41 === "table-empty" ? 21 : 26;
                    break;
                  case 4:
                    _context17.p = 4;
                    fixMeta = it.fixMeta || {};
                    allowedStyles = fixMeta.allowedStyles || allowedBulletNames;
                    allowedIndents = fixMeta.allowedIndents || allowedBulletIndentsCm;
                    currentIndent = fixMeta.currentIndent || 0;
                    bestMatch = 0;
                    minDistance = Math.abs(currentIndent - allowedIndents[0]);
                    for (i = 1; i < allowedIndents.length; i++) {
                      distance = Math.abs(currentIndent - allowedIndents[i]);
                      if (distance < minDistance) {
                        minDistance = distance;
                        bestMatch = i;
                      }
                    }
                    targetStyle = allowedStyles[bestMatch];
                    targetIndent = allowedIndents[bestMatch];
                    para.style = targetStyle;
                    para.leftIndent = toPt(targetIndent);
                    para.firstLineIndent = 0;
                    _context17.n = 5;
                    return ctx.sync();
                  case 5:
                    console.log("[FIX] Applied ".concat(targetStyle, " with ").concat(targetIndent, "cm indent"));
                    _context17.n = 7;
                    break;
                  case 6:
                    _context17.p = 6;
                    _t42 = _context17.v;
                    console.error("Error fixing bullet style:", _t42);
                  case 7:
                    return _context17.a(3, 26);
                  case 8:
                    _context17.p = 8;
                    _fixMeta = it.fixMeta || {};
                    _allowedStyles = _fixMeta.allowedStyles || allowedNumberedNames;
                    _allowedIndents = _fixMeta.allowedIndents || allowedNumberedIndentsCm;
                    _currentIndent = _fixMeta.currentIndent || 0;
                    _bestMatch = 0;
                    _minDistance = Math.abs(_currentIndent - _allowedIndents[0]);
                    for (_i6 = 1; _i6 < _allowedIndents.length; _i6++) {
                      _distance = Math.abs(_currentIndent - _allowedIndents[_i6]);
                      if (_distance < _minDistance) {
                        _minDistance = _distance;
                        _bestMatch = _i6;
                      }
                    }
                    _targetStyle = _allowedStyles[_bestMatch];
                    _targetIndent = _allowedIndents[_bestMatch];
                    para.style = _targetStyle;
                    para.leftIndent = toPt(_targetIndent);
                    para.firstLineIndent = 0;
                    _context17.n = 9;
                    return ctx.sync();
                  case 9:
                    console.log("[FIX] Applied ".concat(_targetStyle, " with ").concat(_targetIndent, "cm indent"));
                    _context17.n = 11;
                    break;
                  case 10:
                    _context17.p = 10;
                    _t43 = _context17.v;
                    console.error("Error fixing numbered style:", _t43);
                  case 11:
                    return _context17.a(3, 26);
                  case 12:
                    _context17.p = 12;
                    expectedCm = (_it$fixMeta$expectedC = (_it$fixMeta = it.fixMeta) === null || _it$fixMeta === void 0 ? void 0 : _it$fixMeta.expectedCm) !== null && _it$fixMeta$expectedC !== void 0 ? _it$fixMeta$expectedC : function () {
                      var raw = para.style || "";
                      if (raw in indentPolicy) return indentPolicy[raw];
                      var n = normalizeStyle(raw, aliases);
                      if (n in indentPolicy) return indentPolicy[n];
                      var txt = para.text || "";
                      var isBulletType = /^[\u2022\u25E6\u25AA\u25CF\u25CB\u25A0•◦○▪□\-–—]\s+/.test(txt.trim());
                      return isBulletType ? allowedBulletIndentsCm[0] : allowedNumberedIndentsCm[0];
                    }();
                    curFirst = toCm(para.firstLineIndent || 0);
                    newLeft = expectedCm - curFirst;
                    para.leftIndent = toPt(newLeft);
                    _context17.n = 13;
                    return ctx.sync();
                  case 13:
                    _context17.n = 15;
                    break;
                  case 14:
                    _context17.p = 14;
                    _t44 = _context17.v;
                    console.error("Error fixing indent:", _t44);
                  case 15:
                    return _context17.a(3, 26);
                  case 16:
                    _context17.p = 16;
                    para.style = figStyle;
                    _context17.n = 17;
                    return ctx.sync();
                  case 17:
                    para.select("End");
                    _context17.n = 18;
                    return ctx.sync();
                  case 18:
                    _context17.n = 20;
                    break;
                  case 19:
                    _context17.p = 19;
                    _t45 = _context17.v;
                    console.error("Error fixing empty figure:", _t45);
                  case 20:
                    return _context17.a(3, 26);
                  case 21:
                    _context17.p = 21;
                    para.style = tblStyle;
                    _context17.n = 22;
                    return ctx.sync();
                  case 22:
                    para.select("End");
                    _context17.n = 23;
                    return ctx.sync();
                  case 23:
                    _context17.n = 25;
                    break;
                  case 24:
                    _context17.p = 24;
                    _t46 = _context17.v;
                    console.error("Error fixing empty table:", _t46);
                  case 25:
                    return _context17.a(3, 26);
                  case 26:
                    _context17.p = 26;
                    cc.delete(true);
                    _context17.n = 27;
                    return ctx.sync();
                  case 27:
                    _context17.n = 29;
                    break;
                  case 28:
                    _context17.p = 28;
                    _t47 = _context17.v;
                    console.warn("Error deleting content control after fix:", _t47);
                  case 29:
                    _context17.n = 31;
                    break;
                  case 30:
                    _context17.p = 30;
                    _t48 = _context17.v;
                    console.error("Error in Word.run for fix:", _t48);
                  case 31:
                    return _context17.a(2);
                }
              }, _callee15, null, [[26, 28], [21, 24], [16, 19], [12, 14], [8, 10], [4, 6], [0, 30]]);
            }));
            return function (_x18) {
              return _ref13.apply(this, arguments);
            };
          }());
        case 1:
          _context18.n = 3;
          break;
        case 2:
          _context18.p = 2;
          _t49 = _context18.v;
          console.error("Critical error in fixIssue:", _t49);
          throw _t49;
        case 3:
          return _context18.a(2);
      }
    }, _callee16, null, [[0, 2]]);
  }));
  return _fixIssue.apply(this, arguments);
}
}();
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./src/taskpane/taskpane.html ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Style Guide Checker</title>\n\n    <!-- Office JavaScript API -->\n    <" + "script type=\"text/javascript\" src=\"https://appsforoffice.microsoft.com/lib/1/hosted/office.js\"><" + "/script>\n\n    <!-- Fluent UI -->\n    <link rel=\"stylesheet\" href=\"https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-core/11.1.0/css/fabric.min.css\"/>\n\n    <style>\n        body {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            margin: 0;\n            padding: 12px;\n            background: #ffffff;\n            color: #333;\n        }\n\n        main {\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n        }\n\n        h3 {\n            font-size: 14px;\n            margin: 0 0 8px 0;\n            color: #333;\n        }\n\n        .section {\n            padding: 12px;\n            border: 1px solid #ddd;\n            border-radius: 6px;\n            margin-bottom: 12px;\n            background: #fff;\n            width: 100%;\n            box-sizing: border-box;\n        }\n\n        button {\n            background: #0078d4;\n            color: white;\n            border: none;\n            padding: 8px 16px;\n            border-radius: 3px;\n            cursor: pointer;\n            font-size: 13px;\n            margin-right: 8px;\n            margin-bottom: 8px;\n        }\n\n        button:hover {\n            background: #106ebe;\n        }\n\n        .secondary {\n            background: #6c757d;\n        }\n\n        .secondary:hover {\n            background: #545b62;\n        }\n\n        input[type=\"file\"] {\n            margin-bottom: 8px;\n            font-size: 13px;\n        }\n\n        .status {\n            margin-top: 8px;\n            padding: 8px;\n            border-radius: 3px;\n            font-size: 12px;\n        }\n\n        .status-success {\n            background: #d4edda;\n            color: #155724;\n            border: 1px solid #c3e6cb;\n        }\n\n        .status-error {\n            background: #f8d7da;\n            color: #721c24;\n            border: 1px solid #f5c6cb;\n        }\n\n        .status-info {\n            background: #d1ecf1;\n            color: #0c5460;\n            border: 1px solid #bee5eb;\n        }\n\n        .preview-box {\n            max-height: 200px;\n            overflow: auto;\n            background: #f8f9fa;\n            border: 1px solid #dee2e6;\n            border-radius: 3px;\n            padding: 8px;\n            font-family: 'Consolas', 'Monaco', monospace;\n            font-size: 11px;\n            white-space: pre-wrap;\n            word-break: break-word;\n            margin-top: 8px;\n            display: none;\n        }\n\n        .issues-list {\n            list-style: decimal;\n            padding: 0 0 0 20px;\n            margin: 8px 0 0 0;\n        }\n\n        .issue-item {\n            background: #f8f9fa;\n            border-left: 3px solid #dc3545;\n            padding: 8px;\n            margin-bottom: 8px;\n            cursor: pointer;\n            font-size: 12px;\n            line-height: 1.4;\n            position: relative;\n            border-radius: 3px;\n            list-style-type: decimal;\n        }\n\n        .issue-item:hover {\n            background: #e9ecef;\n        }\n\n        .issue-type {\n            font-weight: bold;\n            color: #dc3545;\n            font-size: 11px;\n            text-transform: uppercase;\n        }\n\n        .fix-btn {\n            position: absolute;\n            right: 8px;\n            top: 8px;\n            background: #28a745;\n            color: white;\n            border: none;\n            padding: 4px 8px;\n            border-radius: 3px;\n            font-size: 10px;\n            margin: 0;\n        }\n\n        .fix-btn:hover {\n            background: #218838;\n        }\n\n        .hidden {\n            display: none;\n        }\n    </style>\n</head>\n\n<body class=\"ms-font-m ms-Fabric\">\n    <section id=\"sideload-msg\" class=\"hidden\">\n        <h2>Please sideload your add-in to see app body.</h2>\n    </section>\n\n    <main id=\"app-body\">\n        <section class=\"section\">\n            <h2 style=\"font-size: 18px; margin: 0 0 8px 0;\">Welcome to Style Guide Checker</h2>\n            <p style=\"margin: 0; color: #666; font-size: 12px; line-height: 1.4;\">\n                Load your style rules and scan your document to ensure consistent formatting and style compliance.\n            </p>\n        </section>\n\n        <section class=\"section\">\n            <h3>Load Style Guide Rules</h3>\n            <input type=\"file\" id=\"rulesFileInput\" accept=\".json,application/json\" style=\"display: none;\">\n            <button type=\"button\" id=\"chooseFileBtn\" onclick=\"document.getElementById('rulesFileInput').click()\">Choose File</button>\n            <br>\n            <div id=\"rulesStatus\"></div>\n            <div id=\"rulesPreview\" class=\"preview-box\"></div>\n        </section>\n\n        <section class=\"section\">\n            <h3>Scan Document</h3>\n            <button id=\"scanBtn\" type=\"button\">Scan</button>\n            <div id=\"scanStatus\"></div>\n            <ol id=\"issuesList\" class=\"issues-list\"></ol>\n        </section>\n    </main>\n</body>\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=taskpane.js.map