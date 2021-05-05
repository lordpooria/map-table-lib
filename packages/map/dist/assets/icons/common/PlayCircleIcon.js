"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlayCircleIcon = ({
  className
}) => {
  return _react.default.createElement(_SvgIcon.default, {
    className: className,
    id: "mdi-play-outline"
  }, _react.default.createElement("path", {
    d: "M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 22 C 6.476562 22 2 17.523438 2 12 C 2 6.476562 6.476562 2 12 2 C 17.523438 2 22 6.476562 22 12 C 22 17.523438 17.523438 22 12 22 Z M 12 22 "
  }), _react.default.createElement("path", {
    d: "M 17.601562 11.199219 L 9.601562 5.199219 C 8.941406 4.707031 8 5.175781 8 6 L 8 18 C 8 18.824219 8.941406 19.292969 9.601562 18.800781 L 17.601562 12.800781 C 18.132812 12.398438 18.132812 11.601562 17.601562 11.199219 Z M 10 16 L 10 8 L 15.332031 12 Z M 10 16 "
  }));
};

var _default = PlayCircleIcon;
exports.default = _default;
//# sourceMappingURL=PlayCircleIcon.js.map