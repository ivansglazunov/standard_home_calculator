webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _imports_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imports/i18n */ "./imports/i18n.js");
/* harmony import */ var _imports_packages_use_url_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imports/packages/use-url-state */ "./imports/packages/use-url-state/index.jsx");
/* harmony import */ var _imports_wrap_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imports/wrap-page */ "./imports/wrap-page.jsx");
/* harmony import */ var _imports_project_calc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imports/project/calc */ "./imports/project/calc.jsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _date_io_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @date-io/moment */ "./node_modules/@date-io/moment/build/index.esm.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");




var _jsxFileName = "/workspace/standard_home_calculator/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;












var Body = function Body(_ref) {
  var children = _ref.children;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children));
};

var ItemRangeInput = function ItemRangeInput(_ref2) {
  var _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _imports_project_calc__WEBPACK_IMPORTED_MODULE_10__["CalcContext"] : _ref2$context,
      label = _ref2.label,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? 16 : _ref2$padding,
      _ref2$background = _ref2.background,
      background = _ref2$background === void 0 ? '#76a5af' : _ref2$background,
      _ref2$end = _ref2.end,
      end = _ref2$end === void 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null) : _ref2$end,
      _ref2$min = _ref2.min,
      min = _ref2$min === void 0 ? 1 : _ref2$min,
      _ref2$max = _ref2.max,
      max = _ref2$max === void 0 ? 100 : _ref2$max,
      _ref2$helperText = _ref2.helperText,
      helperText = _ref2$helperText === void 0 ? null : _ref2$helperText,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref2, ["context", "label", "padding", "background", "end", "min", "max", "helperText"]);

  var _useTranslation = Object(_imports_i18n__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(context),
      state = _useContext.state,
      values = _useContext.values,
      setState = _useContext.setState;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    item: true
  }, props, {
    style: {
      padding: padding,
      background: background
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
    label: t(label),
    type: "number",
    value: +values[label],
    onChange: function onChange(e) {
      var v = +e.target.value;
      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, label, +v)));
    },
    variant: "standard",
    fullWidth: true,
    InputProps: {
      endAdornment: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["InputAdornment"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, end)
    },
    helperText: helperText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Slider"], {
    value: +values[label],
    onChange: function onChange(e, v) {
      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, label, +v)));
    },
    step: 1,
    min: min,
    max: max,
    style: {
      position: 'absolute',
      width: '100%',
      left: 0,
      top: 38
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })));
};

var ItemDateInput = function ItemDateInput(_ref3) {
  var _ref3$context = _ref3.context,
      context = _ref3$context === void 0 ? _imports_project_calc__WEBPACK_IMPORTED_MODULE_10__["CalcContext"] : _ref3$context,
      label = _ref3.label,
      _ref3$padding = _ref3.padding,
      padding = _ref3$padding === void 0 ? 16 : _ref3$padding,
      _ref3$background = _ref3.background,
      background = _ref3$background === void 0 ? '#76a5af' : _ref3$background,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["context", "label", "padding", "background"]);

  var _useTranslation2 = Object(_imports_i18n__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation2.t;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(context),
      state = _useContext2.state,
      values = _useContext2.values,
      setState = _useContext2.setState;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    item: true
  }, props, {
    style: {
      padding: padding,
      position: 'relative',
      background: background
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__["KeyboardDatePicker"], {
    variant: "inline",
    format: "MM/DD/YYYY",
    margin: "normal",
    label: t(label),
    fullWidth: true,
    value: new Date(values[label]),
    onChange: function onChange(date) {
      setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, label, date.valueOf())));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }));
};

var ItemTextInput = function ItemTextInput(_ref4) {
  var _ref4$context = _ref4.context,
      context = _ref4$context === void 0 ? _imports_project_calc__WEBPACK_IMPORTED_MODULE_10__["CalcContext"] : _ref4$context,
      title = _ref4.title,
      description = _ref4.description,
      _ref4$padding = _ref4.padding,
      padding = _ref4$padding === void 0 ? 16 : _ref4$padding,
      _ref4$background = _ref4.background,
      background = _ref4$background === void 0 ? '#76a5af' : _ref4$background,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref4, ["context", "title", "description", "padding", "background"]);

  var _useTranslation3 = Object(_imports_i18n__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation3.t;

  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(context),
      state = _useContext3.state,
      values = _useContext3.values,
      setState = _useContext3.setState;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    item: true
  }, props, {
    style: {
      padding: padding,
      position: 'relative',
      background: background
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
    variant: "caption",
    style: {
      opacity: 0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, description));
};

var ItemChildren = function ItemChildren(_ref5) {
  var _ref5$context = _ref5.context,
      context = _ref5$context === void 0 ? _imports_project_calc__WEBPACK_IMPORTED_MODULE_10__["CalcContext"] : _ref5$context,
      _ref5$padding = _ref5.padding,
      padding = _ref5$padding === void 0 ? 16 : _ref5$padding,
      _ref5$background = _ref5.background,
      background = _ref5$background === void 0 ? '#76a5af' : _ref5$background,
      children = _ref5.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref5, ["context", "padding", "background", "children"]);

  var _useTranslation4 = Object(_imports_i18n__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation4.t;

  var _useContext4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(context),
      state = _useContext4.state,
      values = _useContext4.values,
      setState = _useContext4.setState;

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    item: true
  }, props, {
    style: {
      padding: padding,
      position: 'relative',
      background: background
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, children));
};

var Divider = function Divider() {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    item: true,
    xs: 12,
    style: {
      height: 4,
      background: 'black'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  });
};

var Progress = function Progress(_ref6) {
  var _ref6$background = _ref6.background,
      background = _ref6$background === void 0 ? '#000' : _ref6$background,
      _ref6$width = _ref6.width,
      width = _ref6$width === void 0 ? '100%' : _ref6$width,
      _ref6$label = _ref6.label,
      label = _ref6$label === void 0 ? '' : _ref6$label,
      _ref6$labelDir = _ref6.labelDir,
      labelDir = _ref6$labelDir === void 0 ? 'top' : _ref6$labelDir;
  return __jsx("div", {
    style: {
      display: 'inline-block',
      height: 20,
      background: background,
      width: width,
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  });
};

var Form = function Form(_ref7) {
  var _ref7$context = _ref7.context,
      context = _ref7$context === void 0 ? _imports_project_calc__WEBPACK_IMPORTED_MODULE_10__["CalcContext"] : _ref7$context;

  var _useTranslation5 = Object(_imports_i18n__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation5.t;

  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(context),
      state = _useContext5.state,
      v = _useContext5.values,
      setState = _useContext5.setState;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(ItemTextInput, {
    xs: 12,
    background: '#fff',
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null),
    description: t('calculatorForPartner'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "ownerMonths",
    xs: 6,
    md: 3,
    background: '#76a5af',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('m.')),
    min: 6,
    max: 36,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx(ItemDateInput, {
    label: "startDate",
    xs: 6,
    md: 3,
    background: '#8ea3c4',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "plainMonthPrice",
    xs: 6,
    md: 3,
    background: '#ffe599',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.'), "/", t('m.')),
    min: 1,
    max: 100000,
    helperText: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('plainPeriodPrice'), " ", +v.plainPeriodPrice, t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "liquidMonthPrice",
    xs: 6,
    md: 3,
    background: '#deaaaa',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.'), "/", t('m.')),
    min: 1,
    max: 100000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "firstRepair",
    xs: 12,
    md: 4,
    background: '#c9daf8',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.')),
    min: 1,
    max: 700000,
    helperText: t('fromMeasurer'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "beforeRepare",
    xs: 6,
    md: 4,
    background: '#c9daf8',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.')),
    min: 1,
    max: 400000,
    helperText: t('fromMeasurer'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "afterRepare",
    xs: 6,
    md: 4,
    background: '#c9daf8',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.')),
    min: 1,
    max: 400000,
    helperText: t('fromMeasurer'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    md: 3,
    background: '#6fa8dc',
    title: t('repairPeriodPrice'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.repairPeriodPrice, " ", t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    md: 3,
    background: '#a4c2f4',
    title: t('repairMonthPrice'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.repairMonthPrice, " ", t('r.'), "/", t('m.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    md: 3,
    background: '#93c47d',
    title: t('basePeriodSum'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.basePeriodSum, " ", t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    md: 3,
    background: '#b6d7a8',
    title: t('baseMonthSum'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.baseMonthSum, " ", t('r.'), "/", t('m.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "minMonthCash",
    xs: 6,
    md: 4,
    background: '#9fff73',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.'), "/", t('m.')),
    min: 1,
    max: 400000,
    helperText: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('minMonthCashPercent'), " ", +v.minMonthCashPercent, t('%')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "minPercent",
    xs: 6,
    md: 4,
    background: '#9fff73',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('%')),
    min: 1,
    max: 100,
    helperText: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('minPercentCash'), " ", +v.minPercentCash, t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 12,
    md: 4,
    background: '#50ff00',
    title: t('percent'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.percent, " ", t('%')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    background: '#67da8b',
    title: t('cashPeriod'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.cashPeriod, " ", t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    background: '#89eda8',
    title: t('cashMonth'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.cashMonth, " ", t('r.'), "/", t('m.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 4,
    background: '#e06666',
    title: t('sumPeriod'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.sumPeriod, " ", t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 4,
    background: '#ea9999',
    title: t('sumMonth'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.sumMonth, " ", t('r.'), "/", t('m.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "bankPercent",
    xs: 4,
    background: '#ff93ff',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('%')),
    min: 1,
    max: 100,
    helperText: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, t('sumPeriodBank'), " ", +v.sumPeriodBank, t('r.'), "/", t('m.')), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, t('sumMonthBank'), " ", +v.sumMonthBank, t('r.'), "/", t('m.'))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "tax",
    xs: 6,
    background: '#935b22',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('%')),
    min: 1,
    max: 100,
    helperText: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, t('taxPeriod'), " ", +v.taxPeriod, t('r.')), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, t('taxMonth'), " ", +v.taxMonth, t('r.'), "/", t('m.'))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "rollback",
    xs: 6,
    background: '#ba5353',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('%')),
    min: 1,
    max: 100,
    helperText: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, t('rollbackPeriod'), " ", +v.rollbackPeriod, t('r.')), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, t('rollbackMonth'), " ", +v.rollbackMonth, t('r.'), "/", t('m.'))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    background: '#a97d7d',
    title: t('minusPeriod'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.minusPeriod, " ", t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    background: '#c39a9a',
    title: t('minusMonth'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.minusMonth, " ", t('r.'), "/", t('m.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    background: '#c3ac57',
    title: t('liveCashPeriod'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.liveCashPeriod, " ", t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 6,
    background: '#dfc76a',
    title: t('liveCashMonth'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.liveCashMonth, " ", t('r.'), "/", t('m.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "agentFixPeriod",
    xs: 4,
    background: '#b1b200',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.')),
    min: 1,
    max: 100000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }), __jsx(ItemRangeInput, {
    label: "partnersFixPeriod",
    xs: 4,
    background: '#ffff00',
    end: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, t('r.')),
    min: 1,
    max: 300000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 4,
    background: '#ff9f00',
    title: t('fundedLiveCashPeriod'),
    description: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, +v.fundedLiveCashPeriod, " ", t('r.')),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }), __jsx(ItemTextInput, {
    xs: 12,
    background: '#fff',
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null),
    description: t('partsCash'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }), __jsx(ItemChildren, {
    xs: 12,
    background: '#fff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, __jsx(Progress, {
    background: '#b1b200',
    width: "".concat(+v.agentFixPeriod / (+v.liveCashPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }), __jsx(Progress, {
    background: '#ffff00',
    width: "".concat(+v.partnersFixPeriod / (+v.liveCashPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }), __jsx(Progress, {
    background: '#ff9f00',
    width: "".concat(+v.fundedLiveCashPeriod / (+v.liveCashPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  })), __jsx(ItemTextInput, {
    xs: 12,
    background: '#fff',
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null),
    description: t('totalSum'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }), __jsx(ItemChildren, {
    xs: 12,
    background: '#fff',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, __jsx(Progress, {
    background: '#e06666',
    width: '100%',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }), __jsx(Progress, {
    background: '#6fa8dc',
    width: "".concat(+v.repairPeriodPrice / (+v.sumPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), __jsx(Progress, {
    background: '#ffd966',
    width: "".concat(+v.plainPeriodPrice / (+v.sumPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }), __jsx(Progress, {
    background: '#935b22',
    width: "".concat(+v.taxPeriod / (+v.sumPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }), __jsx(Progress, {
    background: '#ba5353',
    width: "".concat(+v.rollbackPeriod / (+v.sumPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }), __jsx(Progress, {
    background: '#b1b200',
    width: "".concat(+v.agentFixPeriod / (+v.sumPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }), __jsx(Progress, {
    background: '#ffff00',
    width: "".concat(+v.partnersFixPeriod / (+v.sumPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }), __jsx(Progress, {
    background: '#ff9f00',
    width: "".concat(+v.fundedLiveCashPeriod / (+v.sumPeriod / 100), "%"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  })), __jsx(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_imports_wrap_page__WEBPACK_IMPORTED_MODULE_9__["wrapPage"])(function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_14__["MuiPickersUtilsProvider"], {
    utils: _date_io_moment__WEBPACK_IMPORTED_MODULE_13__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }, __jsx(_imports_project_calc__WEBPACK_IMPORTED_MODULE_10__["CalcProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, __jsx(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }))));
}));

/***/ })

})
//# sourceMappingURL=index.js.e50746b3802507c02ea2.hot-update.js.map