import React from "react";
interface Props {
    className?: string;
    id: string;
    children: any;
    style?: any;
}
declare const SvgIcon: React.MemoExoticComponent<({ className, id, children, ...SvgProps }: Props) => JSX.Element>;
export default SvgIcon;
