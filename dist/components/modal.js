"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("section", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-text"
  }, "Employee Created!"), /*#__PURE__*/_react.default.createElement("button", {
    className: "close-modal",
    onClick: props.close
  }, "X"))));
}

var _default = Modal;
exports.default = _default;