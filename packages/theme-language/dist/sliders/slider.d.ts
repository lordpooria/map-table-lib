import * as React from "react";
import { ValueLabelProps } from "@material-ui/core";
export declare const PlayerSlider: React.JSXElementConstructor<Omit<{
    color?: "primary" | "secondary" | undefined;
    classes?: ({
        root?: string | undefined;
        marked?: string | undefined;
        vertical?: string | undefined;
        disabled?: string | undefined;
        dragging?: string | undefined;
        rail?: string | undefined;
        track?: string | undefined;
        trackFalse?: string | undefined;
        trackInverted?: string | undefined;
        thumb?: string | undefined;
        active?: string | undefined;
        focusVisible?: string | undefined;
        valueLabel?: string | undefined;
        valueLabelOpen?: string | undefined;
        valueLabelCircle?: string | undefined;
        valueLabelLabel?: string | undefined;
        mark?: string | undefined;
        markActive?: string | undefined;
        markLabel?: string | undefined;
        markLabelActive?: string | undefined;
    } & {
        colorPrimary?: string | undefined;
        colorSecondary?: string | undefined;
        thumbColorPrimary?: string | undefined;
        thumbColorSecondary?: string | undefined;
    }) | undefined;
    sx?: import("@material-ui/system").SxProps<import("@material-ui/core").Theme> | undefined;
} & {
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-valuetext'?: string | undefined;
    classes?: {
        root?: string | undefined;
        marked?: string | undefined;
        vertical?: string | undefined;
        disabled?: string | undefined;
        dragging?: string | undefined;
        rail?: string | undefined;
        track?: string | undefined;
        trackFalse?: string | undefined;
        trackInverted?: string | undefined;
        thumb?: string | undefined;
        active?: string | undefined;
        focusVisible?: string | undefined;
        valueLabel?: string | undefined;
        valueLabelOpen?: string | undefined;
        valueLabelCircle?: string | undefined;
        valueLabelLabel?: string | undefined;
        mark?: string | undefined;
        markActive?: string | undefined;
        markLabel?: string | undefined;
        markLabelActive?: string | undefined;
    } | undefined;
    components?: {
        Root?: React.ElementType<any> | undefined;
        Track?: React.ElementType<any> | undefined;
        Rail?: React.ElementType<any> | undefined;
        Thumb?: React.ElementType<any> | undefined;
        Mark?: React.ElementType<any> | undefined;
        MarkLabel?: React.ElementType<any> | undefined;
        ValueLabel?: React.ElementType<any> | undefined;
    } | undefined;
    componentsProps?: {
        root?: {
            as: React.ElementType<any>;
            styleProps?: Omit<any, "components" | "componentsProps"> | undefined;
        } | undefined;
        track?: {
            as?: React.ElementType<any> | undefined;
            styleProps?: Omit<any, "components" | "componentsProps"> | undefined;
        } | undefined;
        rail?: {
            as?: React.ElementType<any> | undefined;
            styleProps?: Omit<any, "components" | "componentsProps"> | undefined;
        } | undefined;
        thumb?: {
            as?: React.ElementType<any> | undefined;
            styleProps?: Omit<any, "components" | "componentsProps"> | undefined;
        } | undefined;
        mark?: {
            as?: React.ElementType<any> | undefined;
            styleProps?: (Omit<any, "components" | "componentsProps"> & {
                markActive?: boolean | undefined;
            }) | undefined;
        } | undefined;
        markLabel?: {
            as?: React.ElementType<any> | undefined;
            styleProps?: (Omit<any, "components" | "componentsProps"> & {
                markLabelActive?: boolean | undefined;
            }) | undefined;
        } | undefined;
        valueLabel?: {
            as?: React.ElementType<any> | undefined;
            styleProps?: Omit<any, "components" | "componentsProps"> | undefined;
        } | undefined;
    } | undefined;
    defaultValue?: number | number[] | undefined;
    disabled?: boolean | undefined;
    disableSwap?: boolean | undefined;
    getAriaLabel?: ((index: number) => string) | undefined;
    getAriaValueText?: ((value: number, index: number) => string) | undefined;
    isRtl?: boolean | undefined;
    marks?: boolean | import("@material-ui/core").Mark[] | undefined;
    max?: number | undefined;
    min?: number | undefined;
    name?: string | undefined;
    onChange?: ((event: Event, value: number | number[], activeThumb: number) => void) | undefined;
    onChangeCommitted?: ((event: Event | React.SyntheticEvent<Element, Event>, value: number | number[]) => void) | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    scale?: ((value: number) => number) | undefined;
    step?: number | null | undefined;
    tabIndex?: number | undefined;
    track?: false | "normal" | "inverted" | undefined;
    value?: number | number[] | undefined;
    valueLabelDisplay?: "auto" | "on" | "off" | undefined;
    valueLabelFormat?: string | ((value: number, index: number) => React.ReactNode) | undefined;
} & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
}, "color" | "scale" | "disabled" | "track" | "classes" | "defaultValue" | "tabIndex" | "aria-label" | "aria-labelledby" | "aria-valuetext" | "onChange" | "sx" | "components" | "componentsProps" | "disableSwap" | "getAriaLabel" | "getAriaValueText" | "isRtl" | "marks" | "max" | "min" | "name" | "onChangeCommitted" | "orientation" | "step" | "value" | "valueLabelDisplay" | "valueLabelFormat">, "classes"> & import("@material-ui/core").StyledComponentProps<"root" | "active" | "thumb" | "track" | "rail">>;
export declare const PlayerThumb: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;
export declare function ValueLabelComponent(props: ValueLabelProps): JSX.Element;
