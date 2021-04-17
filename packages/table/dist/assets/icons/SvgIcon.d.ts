import React, { SVGProps } from "react";
interface Props {
    className?: string;
    id: string;
    children: any;
    SvgProps?: SVGProps<any>;
}
declare const SvgIcon: React.MemoExoticComponent<({ className, id, children, SvgProps }: Props) => JSX.Element>;
export default SvgIcon;
