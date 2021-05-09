/// <reference types="react" />
import { IconButtonProps } from "@material-ui/core";
declare type Props = IconButtonProps & {
    title: string;
    status?: "primary" | "secondary" | "success" | "error" | "warning";
};
export declare function ButtonTooltip({ title, status, ...rest }: Props): JSX.Element;
export {};
