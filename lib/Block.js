"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _megadraft = require("megadraft");

var _BlockText = require("./BlockText");

var _BlockText2 = _interopRequireDefault(_BlockText);

var _brace = require("brace");

var _brace2 = _interopRequireDefault(_brace);

var _reactAce = require("react-ace");

var _reactAce2 = _interopRequireDefault(_reactAce);

require("brace/mode/html");

require("brace/mode/css");

require("brace/mode/javascript");

require("brace/theme/tomorrow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Jon McClure <jmcclure@politico.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BlockContent = _megadraft.MegadraftPlugin.BlockContent,
    BlockData = _megadraft.MegadraftPlugin.BlockData,
    BlockInput = _megadraft.MegadraftPlugin.BlockInput,
    CommonBlock = _megadraft.MegadraftPlugin.CommonBlock;

var Block = function (_Component) {
  _inherits(Block, _Component);

  function Block(props) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, props));

    _this._handleCodeChange = _this._handleCodeChange.bind(_this);
    _this._handleEdit = _this._handleEdit.bind(_this);

    _this.actions = [
    // {"key": "edit", "icon": MegadraftIcons.EditIcon, "action": this._handleEdit},
    { "key": "delete", "icon": _megadraft.MegadraftIcons.DeleteIcon, "action": _this.props.container.remove }];
    return _this;
  }

  _createClass(Block, [{
    key: "_handleEdit",
    value: function _handleEdit() {
      alert(JSON.stringify(this.props.data, null, 4));
    }
  }, {
    key: "_handleCodeChange",
    value: function _handleCodeChange(value) {
      this.props.container.updateData({ code: value });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        CommonBlock,
        _extends({}, this.props, { actions: this.actions }),
        _react2.default.createElement(
          BlockData,
          null,
          _react2.default.createElement(_reactAce2.default, {
            mode: this.props.data.display,
            theme: "tomorrow",
            onChange: this._handleCodeChange,
            value: this.props.data.code,
            fontSize: "14",
            name: "editable-code-block__" + this.props.data.key,
            editorProps: { $blockScrolling: true },
            height: "140px",
            width: "100%",
            showPrintMargin: false
          })
        )
      );
    }
  }]);

  return Block;
}(_react.Component);

exports.default = Block;