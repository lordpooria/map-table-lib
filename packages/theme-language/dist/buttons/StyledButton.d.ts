import React from "react";
import { IconButtonProps } from "@material-ui/core";
export declare const SmallIconButton: React.JSXElementConstructor<Omit<{
    children?: React.ReactNode;
    classes?: {
        root?: string | undefined;
        edgeStart?: string | undefined;
        edgeEnd?: string | undefined;
        colorInherit?: string | undefined;
        colorPrimary?: string | undefined;
        colorSecondary?: string | undefined;
        disabled?: string | undefined;
        sizeSmall?: string | undefined;
        label?: string | undefined;
    } | undefined;
    color?: "inherit" | "primary" | "secondary" | undefined;
    disabled?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    edge?: false | "end" | "start" | undefined;
    size?: "small" | "medium" | undefined;
    sx?: import("@material-ui/system").SxProps<import("@material-ui/core").Theme> | undefined;
} & Omit<{
    action?: React.Ref<import("@material-ui/core").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: React.ReactNode;
    classes?: {
        root?: string | undefined;
        disabled?: string | undefined;
        focusVisible?: string | undefined;
    } | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: React.ElementType<any> | undefined;
    onFocusVisible?: React.FocusEventHandler<any> | undefined;
    sx?: import("@material-ui/system").SxProps<import("@material-ui/core").Theme> | undefined;
    tabIndex?: string | number | undefined;
    TouchRippleProps?: Partial<import("@material-ui/core/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
}, "classes"> & import("@material-ui/core/OverridableComponent").CommonProps & Omit<Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof React.ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
}, "children" | "color" | "size" | "disabled" | keyof import("@material-ui/core/OverridableComponent").CommonProps | "tabIndex" | "sx" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "disableFocusRipple" | "edge">, "classes"> & import("@material-ui/core").StyledComponentProps<"root">>;
declare type Props = IconButtonProps & {
    title: string;
};
export declare function ButtonTooltip({ title, ...rest }: Props): JSX.Element;
export {};
