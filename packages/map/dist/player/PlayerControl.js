"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _easyPeasy = require("easy-peasy");

var _react = _interopRequireWildcard(require("react"));

var _NextIcon = _interopRequireDefault(require("../assets/icons/common/NextIcon"));

var _PauseIcon = _interopRequireDefault(require("../assets/icons/common/PauseIcon"));

var _PlayIcon = _interopRequireDefault(require("../assets/icons/common/PlayIcon"));

var _PreviousIcon = _interopRequireDefault(require("../assets/icons/common/PreviousIcon"));

var _playerReducer = require("./playerReducer");

var _usePlayer = require("./usePlayer");

var _themeLanguage = require("@hesaba/theme-language");

var _reducerHooks = require("../store/reducerHooks");

var _PlayerControl = _interopRequireDefault(require("./PlayerControl.styles"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _PlayReverseIcon = _interopRequireDefault(require("../assets/icons/common/PlayReverseIcon"));

var _TimeSlider = _interopRequireDefault(require("./styled-component/TimeSlider"));

var _helperComponent = require("./helperComponent");

var _SpeedSlider = _interopRequireDefault(require("./styled-component/SpeedSlider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BorderIconButton = (0, _core.withStyles)(theme => ({
  root: {
    border: `1px solid ${theme.palette.primary.main} `,
    margin: 4,
    "&:hover": {
      backgroundColor: `${theme.palette.primary.main}55`
    }
  }
}))(_themeLanguage.SmallIconButton);
const BUFFER = 5;
const PlayerControl = (0, _react.memo)(({
  leafletMap,
  loop = false,
  timeSteps = 1,
  speedStep = 1,
  autoPlay = false,
  startedOver = true,
  minSpeed = 0.1,
  maxSpeed = 10,
  classes,
  transitionTime,
  backwardButton = true,
  forwardButton = true,
  playButton = true,
  timeSlider = true,
  speedSlider = true,
  speedIcon = true,
  playReverseButton = false
}) => {
  const [state, actions] = (0, _easyPeasy.useLocalStore)(() => _playerReducer.playerStoreModel);
  const playerClasses = (0, _PlayerControl.default)();
  const previousTime = (0, _reducerHooks.useTDStoreActions)(actions => actions.previousTime);
  const nextTime = (0, _reducerHooks.useTDStoreActions)(actions => actions.nextTime);
  (0, _react.useEffect)(() => {
    if (typeof transitionTime === "number") {
      actions.setTransitionTime({
        bufferSize: BUFFER,
        transitionTime
      });
    }
  }, [transitionTime]);
  const setTransitionTime = (0, _react.useCallback)(transitionTime => {
    actions.setTransitionTime({
      bufferSize: BUFFER,
      transitionTime
    });
  }, []);
  const {
    start,
    stop,
    startReverse
  } = (0, _usePlayer.usePlayer)({
    bufferSize: state.bufferSize,
    loop,
    transitionTime: state.transitionTime,
    animationFinished: actions.animationFinished,
    setPlay: actions.setPlay,
    setReversePlay: actions.setReversePlay,
    steps: timeSteps,
    startedOver,
    autoPlay,
    isReversePlaying: state.isReversePlaying
  });
  const rootClass = (0, _clsx.default)(playerClasses.commonPlayerRoot, classes === null || classes === void 0 ? void 0 : classes.root, {
    [playerClasses.playerRoot]: !(classes !== null && classes !== void 0 && classes.root)
  });
  const iconClass = (classes === null || classes === void 0 ? void 0 : classes.icons) || playerClasses.icon;
  const speedIconClass = (0, _clsx.default)(classes === null || classes === void 0 ? void 0 : classes.icons, playerClasses.marginIcon, {
    [playerClasses.icon]: !(classes !== null && classes !== void 0 && classes.icons)
  });
  return _react.default.createElement("div", {
    onMouseEnter: () => {
      leafletMap.dragging.disable();
      leafletMap.doubleClickZoom.disable();
    },
    onMouseLeave: () => {
      leafletMap.dragging.enable();
      leafletMap.doubleClickZoom.enable();
    },
    className: rootClass
  }, _react.default.createElement("div", {
    className: playerClasses.iconContainer
  }, _react.default.createElement(_helperComponent.RenderComponent, {
    Component: backwardButton
  }, _react.default.createElement(BorderIconButton, {
    className: classes === null || classes === void 0 ? void 0 : classes.iconButton,
    onClick: () => {
      previousTime({
        numSteps: timeSteps,
        loop
      });
    }
  }, _react.default.createElement(_PreviousIcon.default, {
    className: iconClass
  }))), _react.default.createElement(_helperComponent.RenderComponent, {
    Component: playReverseButton
  }, _react.default.createElement(BorderIconButton, {
    className: classes === null || classes === void 0 ? void 0 : classes.iconButton,
    onClick: () => {
      if (state.isReversePlaying) {
        stop();
      } else {
        startReverse();
      }
    }
  }, state.isReversePlaying ? _react.default.createElement(_PauseIcon.default, {
    className: iconClass
  }) : _react.default.createElement(_PlayReverseIcon.default, {
    className: iconClass
  }))), _react.default.createElement(_helperComponent.RenderComponent, {
    Component: playButton
  }, _react.default.createElement(BorderIconButton, {
    className: classes === null || classes === void 0 ? void 0 : classes.iconButton,
    onClick: () => {
      if (state.isPlaying) {
        stop();
      } else {
        start();
      }
    }
  }, state.isPlaying ? _react.default.createElement(_PauseIcon.default, {
    className: iconClass
  }) : _react.default.createElement(_PlayIcon.default, {
    className: iconClass
  }))), _react.default.createElement(_helperComponent.RenderComponent, {
    Component: forwardButton
  }, _react.default.createElement(BorderIconButton, {
    className: classes === null || classes === void 0 ? void 0 : classes.iconButton,
    onClick: () => {
      nextTime({
        numSteps: timeSteps,
        loop
      });
    }
  }, _react.default.createElement(_NextIcon.default, {
    className: iconClass
  })))), _react.default.createElement(_helperComponent.RenderComponent, {
    Component: timeSlider
  }, _react.default.createElement(_TimeSlider.default, {
    timeSteps: timeSteps,
    classes: classes,
    playerSliderClasses: playerClasses.playerSlider
  })), _react.default.createElement(_helperComponent.RenderComponent, {
    Component: speedSlider
  }, _react.default.createElement(_SpeedSlider.default, {
    speedStep: speedStep,
    classes: classes,
    speedIcon: speedIcon,
    speedSliderClasses: playerClasses.speedSlider,
    whiteIconClasses: speedIconClass,
    setTransitionTime: setTransitionTime,
    min: minSpeed,
    max: maxSpeed,
    speedSliderValue: state.speedSlider
  })));
});
var _default = PlayerControl;
exports.default = _default;
//# sourceMappingURL=PlayerControl.js.map