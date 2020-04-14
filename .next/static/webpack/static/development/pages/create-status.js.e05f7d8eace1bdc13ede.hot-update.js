webpackHotUpdate("static/development/pages/create-status.js",{

/***/ "./pages/create-status.js":
/*!********************************!*\
  !*** ./pages/create-status.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "/home/joliveira/Documents/mydailystatus/pages/create-status.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var CreateStatus = function CreateStatus() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    status: 'bem',
    coords: {
      lat: null,
      "long": null
    }
  }),
      dados = _useState[0],
      setDados = _useState[1];

  var getMyLocation = function getMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setDados(function (old) {
          return _objectSpread({}, old, {
            coords: {
              lat: position.coords.latitude,
              "long": position.coords.longitude
            }
          });
        });
      });
    }
  };

  var onStatusChange = function onStatusChange(evt) {
    //Necessário guardar do lado de fora pq a função interna é chamada de forma assíncrona e o valor pode não existir mais
    var value = evt.target.value;
    setDados(function (old) {
      return _objectSpread({}, old, {
        status: value
      });
    });
    console.log(evt.target.value);
  };

  var save = function save() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function save$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/save-status', dados));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    className: "py-2 px-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, "Status do dia:"), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "bem",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }), "Estou bem e sem sintomas."), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "gripe",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }), "Estou com sintomas de gripe / resfriado."), __jsx("label", {
    className: "block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "status",
    value: "covid",
    onClick: onStatusChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }), "Estou com sintomas de COVID."), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }), "Sua posi\xE7\xE3o atual: Status: ", dados.status, " - Localiza\xE7\xE3o: Latitude:", dados.coords.lat, ", Longitude: ", dados.coords["long"], __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "flex items-center justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    onClick: getMyLocation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, "Pegar a minha localiza\xE7\xE3o"), __jsx("button", {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "Salvar meu status")))));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (CreateStatus);

/***/ })

})
//# sourceMappingURL=create-status.js.e05f7d8eace1bdc13ede.hot-update.js.map