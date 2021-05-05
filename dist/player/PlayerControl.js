import { useLocalStore } from "easy-peasy";
import React, { memo, useCallback, useEffect } from "react";
import NextIcon from "../assets/icons/common/NextIcon";
import PauseIcon from "../assets/icons/common/PauseIcon";
import PlayIcon from "../assets/icons/common/PlayIcon";
import PreviousIcon from "../assets/icons/common/PreviousIcon";
import { playerStoreModel } from "./playerReducer";
import { usePlayer } from "./usePlayer";
import { SmallIconButton } from "@hesaba/theme-language";
import { useTDStoreActions } from "../store/reducerHooks";
import useStyles from "./PlayerControl.styles";
import { withStyles } from "@material-ui/core";
import clsx from "clsx";
import PlayReverseIcon from "../assets/icons/common/PlayReverseIcon";
import TimeSlider from "./styled-component/TimeSlider";
import { RenderComponent } from "./helperComponent";
import SpeedSlider from "./styled-component/SpeedSlider";
var BorderIconButton = withStyles(function (theme) { return ({
    root: {
        border: "1px solid " + theme.palette.primary.main + " ",
        margin: 4,
        "&:hover": {
            backgroundColor: theme.palette.primary.main + "55",
        },
    },
}); })(SmallIconButton);
var BUFFER = 5;
var PlayerControl = memo(function (_a) {
    var _b, _c;
    var leafletMap = _a.leafletMap, _d = _a.loop, loop = _d === void 0 ? false : _d, _e = _a.timeSteps, timeSteps = _e === void 0 ? 1 : _e, _f = _a.speedStep, speedStep = _f === void 0 ? 1 : _f, _g = _a.autoPlay, autoPlay = _g === void 0 ? false : _g, _h = _a.startedOver, startedOver = _h === void 0 ? true : _h, _j = _a.minSpeed, minSpeed = _j === void 0 ? 0.1 : _j, _k = _a.maxSpeed, maxSpeed = _k === void 0 ? 10 : _k, classes = _a.classes, transitionTime = _a.transitionTime, _l = _a.backwardButton, backwardButton = _l === void 0 ? true : _l, _m = _a.forwardButton, forwardButton = _m === void 0 ? true : _m, _o = _a.playButton, playButton = _o === void 0 ? true : _o, _p = _a.timeSlider, timeSlider = _p === void 0 ? true : _p, _q = _a.speedSlider, speedSlider = _q === void 0 ? true : _q, _r = _a.speedIcon, speedIcon = _r === void 0 ? true : _r, _s = _a.playReverseButton, playReverseButton = _s === void 0 ? false : _s;
    var _t = useLocalStore(function () { return playerStoreModel; }), state = _t[0], actions = _t[1];
    var playerClasses = useStyles();
    var previousTime = useTDStoreActions(function (actions) { return actions.previousTime; });
    var nextTime = useTDStoreActions(function (actions) { return actions.nextTime; });
    useEffect(function () {
        if (typeof transitionTime === "number") {
            actions.setTransitionTime({ bufferSize: BUFFER, transitionTime: transitionTime });
        }
    }, [transitionTime]);
    var setTransitionTime = useCallback(function (transitionTime) {
        actions.setTransitionTime({ bufferSize: BUFFER, transitionTime: transitionTime });
    }, []);
    var _u = usePlayer({
        bufferSize: state.bufferSize,
        loop: loop,
        transitionTime: state.transitionTime,
        animationFinished: actions.animationFinished,
        setPlay: actions.setPlay,
        setReversePlay: actions.setReversePlay,
        steps: timeSteps,
        startedOver: startedOver,
        autoPlay: autoPlay,
        isReversePlaying: state.isReversePlaying,
    }), start = _u.start, stop = _u.stop, startReverse = _u.startReverse;
    var rootClass = clsx(playerClasses.commonPlayerRoot, classes === null || classes === void 0 ? void 0 : classes.root, (_b = {},
        _b[playerClasses.playerRoot] = !(classes === null || classes === void 0 ? void 0 : classes.root),
        _b));
    var iconClass = (classes === null || classes === void 0 ? void 0 : classes.icons) || playerClasses.icon;
    var speedIconClass = clsx(classes === null || classes === void 0 ? void 0 : classes.icons, playerClasses.marginIcon, (_c = {},
        _c[playerClasses.icon] = !(classes === null || classes === void 0 ? void 0 : classes.icons),
        _c));
    return (React.createElement("div", { onMouseEnter: function () {
            leafletMap.dragging.disable();
            leafletMap.doubleClickZoom.disable();
        }, onMouseLeave: function () {
            leafletMap.dragging.enable();
            leafletMap.doubleClickZoom.enable();
        }, className: rootClass },
        React.createElement("div", { className: playerClasses.iconContainer },
            React.createElement(RenderComponent, { Component: backwardButton },
                React.createElement(BorderIconButton, { className: classes === null || classes === void 0 ? void 0 : classes.iconButton, onClick: function () {
                        previousTime({ numSteps: timeSteps, loop: loop });
                    } },
                    React.createElement(PreviousIcon, { className: iconClass }))),
            React.createElement(RenderComponent, { Component: playReverseButton },
                React.createElement(BorderIconButton, { className: classes === null || classes === void 0 ? void 0 : classes.iconButton, onClick: function () {
                        if (state.isReversePlaying) {
                            stop();
                        }
                        else {
                            startReverse();
                        }
                    } }, state.isReversePlaying ? (React.createElement(PauseIcon, { className: iconClass })) : (React.createElement(PlayReverseIcon, { className: iconClass })))),
            React.createElement(RenderComponent, { Component: playButton },
                React.createElement(BorderIconButton, { className: classes === null || classes === void 0 ? void 0 : classes.iconButton, onClick: function () {
                        if (state.isPlaying) {
                            stop();
                        }
                        else {
                            start();
                        }
                    } }, state.isPlaying ? (React.createElement(PauseIcon, { className: iconClass })) : (React.createElement(PlayIcon, { className: iconClass })))),
            React.createElement(RenderComponent, { Component: forwardButton },
                React.createElement(BorderIconButton, { className: classes === null || classes === void 0 ? void 0 : classes.iconButton, onClick: function () {
                        nextTime({ numSteps: timeSteps, loop: loop });
                    } },
                    React.createElement(NextIcon, { className: iconClass })))),
        React.createElement(RenderComponent, { Component: timeSlider },
            React.createElement(TimeSlider, { timeSteps: timeSteps, classes: classes, playerSliderClasses: playerClasses.playerSlider })),
        React.createElement(RenderComponent, { Component: speedSlider },
            React.createElement(SpeedSlider, { speedStep: speedStep, classes: classes, speedIcon: speedIcon, speedSliderClasses: playerClasses.speedSlider, whiteIconClasses: speedIconClass, setTransitionTime: setTransitionTime, min: minSpeed, max: maxSpeed, speedSliderValue: state.speedSlider }))));
});
export default PlayerControl;
