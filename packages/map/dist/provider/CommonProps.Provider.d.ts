import React from "react";
declare type CommonState = {
    withTable: boolean;
};
export default function CommonPropsProvider({ children, state, }: {
    children: React.ReactNode;
    state: CommonState;
}): JSX.Element;
export declare function useCommonProps(): CommonState;
export declare function useCommonPropsAction(): (_: CommonState) => void;
export {};
