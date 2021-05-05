"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _easyPeasy = require("easy-peasy");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _timeReducer = require("./timeReducer");

var _dateFormatter = require("./dateFormatter");

var _core = require("@material-ui/core");

var _reducerHooks = require("../store/reducerHooks");

var _TimeComponent = _interopRequireDefault(require("./TimeComponent.styles"));

var _clsx = _interopRequireDefault(require("clsx"));

var _ClockComponent = _interopRequireDefault(require("./ClockComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TimerComponent = ({
  am = _dateFormatter.getAMText,
  pm = _dateFormatter.getPMText,
  noTimeError = _dateFormatter.getDisplayNoTimeError,
  clockProps,
  dateWrapperClasses,
  dateClasses,
  amPmClasses
}) => {
  const [state, actions] = (0, _easyPeasy.useLocalStore)(() => _timeReducer.timerStoreModel);
  (0, _dateFormatter.usePerisan)();
  const currentTime = (0, _reducerHooks.useTDStoreState)(state => state.currentTime);
  const timeClasses = (0, _TimeComponent.default)();
  (0, _react.useEffect)(() => {
    update(currentTime);
  }, [currentTime]);
  const update = (0, _react.useCallback)(currentTime => {
    if (currentTime >= 0) {
      try {
        const date = (0, _dayjs.default)(currentTime);
        actions.setDisplayDate({
          displayDate: (0, _dateFormatter.formatPersianDateComplete)(date),
          displayTime: new Date(currentTime),
          isAM: (0, _dateFormatter.findIsAM)(date)
        });
      } catch (e) {}
    } else {
      actions.setDisplayDate({
        displayDate: noTimeError,
        displayTime: "",
        isAM: true
      });
    }
  }, []);
  return _react.default.createElement("div", {
    className: timeClasses.root
  }, _react.default.createElement("div", {
    className: timeClasses.clockWrapper
  }, _react.default.createElement(_ClockComponent.default, {
    displayTime: state.displayTime,
    clockProps: clockProps
  }), _react.default.createElement(_core.Typography, {
    className: (0, _clsx.default)(timeClasses.amPm, amPmClasses)
  }, state.isAM ? am : pm)), _react.default.createElement("div", {
    className: (0, _clsx.default)(timeClasses.dateWrapper, dateWrapperClasses)
  }, _react.default.createElement("p", {
    className: (0, _clsx.default)(timeClasses.date, dateClasses)
  }, state.displayDate)));
};

var _default = TimerComponent;
exports.default = _default;
//# sourceMappingURL=TimeComponent.js.map