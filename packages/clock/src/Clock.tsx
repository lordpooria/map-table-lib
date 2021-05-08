import React from "react";
import clsx from "clsx";
import { getHours, getMinutes, getSeconds } from "@wojtekmaj/date-utils";

import { Hand } from "./Hand";
import { Mark } from "./Mark";

import { createUseStyles } from "react-jss";
import { ClockProps } from "./types";
import {
  FONT_SIZE_RATIO,
  MIDDLE_CIRCLE_RATIO,
  ORANGE,
  HOUR_HAND_WIDTH_RATIO,
  HOUR_MARK_WIDTH_RATIO,
  MINUTE_HAND_WIDTH_RATIO,
  MINUTE_MARK_WIDTH_RATIO,
  SECOND_HAND_WIDTH_RATIO,
} from "./constants";

const useStyle = createUseStyles({
  clockRoot: {
    display: "block",
    position: "relative",
  },
  root: {
    fontFamily: "arial",
    fontWeight: 500,
  },
  face: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: "50%",
  },
  clockFace: {
    backgroundColor: "#FFF",
   
  },
  secondHand: {
    backgroundColor: ORANGE,
  },
  mark: {},
  clockCircle: {
    position: "absolute",
    boxShadow: "1px 1px 1px rgba(0,0,0,0.3)",
  },
  middleCircle: {
    backgroundColor: ORANGE,
  },
});

export const Clock = ({
  className,
  classes = {},
  hourHandLength = 70,
  hourHandOppositeLength,
  hourHandWidthRatio = HOUR_HAND_WIDTH_RATIO,
  hourMarksLength = 13,
  hourMarksWidthRatio = HOUR_MARK_WIDTH_RATIO,
  minuteHandLength = 90,
  minuteHandOppositeLength,
  minuteHandWidthRatio = MINUTE_HAND_WIDTH_RATIO,
  minuteMarksLength = 7,
  minuteMarksWidthRatio = MINUTE_MARK_WIDTH_RATIO,
  renderHourMarks = true,
  renderMinuteHand = true,
  renderMinuteMarks = true,
  renderNumbers,
  middleCircleRatio = MIDDLE_CIRCLE_RATIO,
  fontSizeRatio = FONT_SIZE_RATIO,
  renderSecondHand = true,
  secondHandLength = 97,
  secondHandOppositeLength,
  secondHandWidthRatio = SECOND_HAND_WIDTH_RATIO,
  size = 150,
  value,
}: ClockProps) => {
  const clockClasses = useStyle();
  function renderMinuteMarksFn() {
    if (!renderMinuteMarks) {
      return null;
    }

    const minuteMarks = [];
    for (let i = 1; i <= 60; i += 1) {
      const isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push(
          <Mark
            key={`minute_${i}`}
            angle={i * 6}
            length={minuteMarksLength}
            name="minute"
            width={size / minuteMarksWidthRatio}
            classes={{ mark: classes?.mark, markBody: classes?.markBody }}
          />
        );
      }
    }
    return minuteMarks;
  }

  function renderHourMarksFn() {
    if (!renderHourMarks) {
      return null;
    }

    const hourMarks = [];
    for (let i = 1; i <= 12; i += 1) {
      hourMarks.push(
        <Mark
          key={`hour_${i}`}
          angle={i * 30}
          length={hourMarksLength}
          name="hour"
          number={renderNumbers ? i : null}
          width={size / hourMarksWidthRatio}
          classes={{ mark: classes?.mark, markBody: classes?.markBody }}
        />
      );
    }
    return hourMarks;
  }

  function renderFace() {
    return (
      <div
        className={clsx(clockClasses.face, {
          [clockClasses.clockFace]: !classes?.clockFace,
          [classes.clockFace as string]: classes?.clockFace,
        })}
      >
        {renderMinuteMarksFn()}
        {renderHourMarksFn()}
      </div>
    );
  }

  function renderHourHandFn() {
    const angle = value
      ? getHours(value) * 30 + getMinutes(value) / 2 + getSeconds(value) / 600
      : 0;

    return (
      <Hand
        angle={angle}
        length={hourHandLength}
        name="hour"
        oppositeLength={hourHandOppositeLength}
        width={size / hourHandWidthRatio}
        classes={{ hand: classes?.hand, handBody: classes?.handBody }}
      />
    );
  }

  function renderMinuteHandFn() {
    if (!renderMinuteHand) {
      return null;
    }

    const angle = value
      ? getHours(value) * 360 + getMinutes(value) * 6 + getSeconds(value) / 10
      : 0;

    return (
      <Hand
        angle={angle}
        length={minuteHandLength}
        name="minute"
        oppositeLength={minuteHandOppositeLength}
        width={size / minuteHandWidthRatio}
        classes={{ hand: classes?.hand, handBody: classes?.handBody }}
      />
    );
  }

  function renderSecondHandFn() {
    if (!renderSecondHand) {
      return null;
    }

    const angle = value ? getMinutes(value) * 360 + getSeconds(value) * 6 : 0;

    return (
      <Hand
        angle={angle}
        length={secondHandLength}
        name="second"
        classes={{
          handBody: clsx(classes?.handBody, {
            [clockClasses.secondHand]: !classes?.secondMarkClasses,
            [classes.secondMarkClasses as string]: classes?.secondMarkClasses,
          }),
          hand: classes?.hand,
        }}
        oppositeLength={secondHandOppositeLength}
        width={size / secondHandWidthRatio}
      />
    );
  }
  function renderMiddleCircle() {
    return (
      <div
        className={clsx(clockClasses.clockCircle, {
          [classes.middleCircle as string]: classes?.middleCircle,
          [clockClasses.middleCircle]: !classes?.middleCircle,
        })}
        style={{
          width: size / middleCircleRatio,
          height: size / middleCircleRatio,
          borderRadius: size / (2 * middleCircleRatio),
          left: `calc(50% - ${size / (2 * middleCircleRatio)}px)`,
          top: `calc(50% - ${size / (2 * middleCircleRatio)}px)`,
        }}
      />
    );
  }

  return (
    <time
      className={clsx(clockClasses.clockRoot, className, {
        [classes.root as string]: classes.root,
        [clockClasses.root]: !classes.root,
      })}
      dateTime={value instanceof Date ? value.toISOString() : value}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: size / fontSizeRatio,
      }}
    >
      {renderFace()}
      {renderHourHandFn()}
      {renderMinuteHandFn()}
      {renderSecondHandFn()}
      {renderMiddleCircle()}
    </time>
  );
};

// Clock.displayName = "Clock";
