"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "svg",
        _extends({}, this.props, { width: "24", height: "24", viewBox: "0 0 24 24" }),
        _react2.default.createElement(
          "g",
          { fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("path", { d: "M0 0h24v24H0z" }),
          _react2.default.createElement("path", { fill: "currentColor", d: "m14.573745,4.713318l-0.710592,-0.18447c-0.091463,-0.028883 -0.181561,-0.0198 -0.269171,0.027173c-0.087891,0.047011 -0.147247,0.117584 -0.177748,0.211605l-4.273908,14.007748c-0.030501,0.094059 -0.020949,0.18276 0.028695,0.265837c0.049644,0.083228 0.124011,0.139284 0.22346,0.168167l0.710392,0.184546c0.091663,0.029111 0.181441,0.01999 0.269291,-0.027059c0.087891,-0.047239 0.147127,-0.117584 0.177588,-0.211453l4.274028,-14.007976c0.030461,-0.094021 0.020989,-0.182722 -0.028735,-0.265989c-0.049684,-0.083228 -0.12397,-0.139284 -0.223299,-0.168129z" }),
          _react2.default.createElement("path", { fill: "currentColor", d: "m8.168743,7.447769c0,-0.094021 -0.038247,-0.177288 -0.114619,-0.249571l-0.572977,-0.542542c-0.076373,-0.072321 -0.164264,-0.108577 -0.263552,-0.108577s-0.18722,0.036294 -0.263552,0.108577l-5.339435,5.056179c-0.076493,0.072321 -0.114619,0.15555 -0.114619,0.249571c0,0.094021 0.038247,0.17725 0.114619,0.249533l5.339395,5.056179c0.076333,0.072435 0.164103,0.108463 0.263552,0.108463s0.18722,-0.036142 0.263552,-0.108463l0.572977,-0.542238c0.076373,-0.072283 0.114619,-0.15555 0.114619,-0.249685c0,-0.093907 -0.038247,-0.177136 -0.114619,-0.249419l-4.503026,-4.264369l4.503066,-4.264065c0.076493,-0.072283 0.114619,-0.15555 0.114619,-0.249571z" }),
          _react2.default.createElement("path", { fill: "currentColor", d: "m22.353578,11.71172l-5.339555,-5.056179c-0.076333,-0.072283 -0.164264,-0.108577 -0.263392,-0.108577c-0.099449,0 -0.187059,0.036294 -0.263673,0.108577l-0.572736,0.542504c-0.076333,0.072321 -0.114419,0.155436 -0.114419,0.249571s0.038046,0.177288 0.114419,0.249571l4.503146,4.264179l-4.503146,4.264407c-0.076333,0.072283 -0.114419,0.15555 -0.114419,0.249419c0,0.094173 0.038046,0.177402 0.114419,0.249685l0.572736,0.542238c0.076614,0.072435 0.164264,0.108463 0.263673,0.108463c0.099168,0 0.187059,-0.036142 0.263392,-0.108463l5.339555,-5.056141c0.076373,-0.072283 0.114539,-0.155664 0.114539,-0.249685c0,-0.094059 -0.038166,-0.177288 -0.114539,-0.249571z" })
        )
      );
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;