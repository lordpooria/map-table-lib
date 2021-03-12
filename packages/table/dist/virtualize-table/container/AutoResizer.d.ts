import React from "react";
interface Props {
    className?: string;
    /**
     * the width of the component, will be the container's width if not set
     */
    width?: number;
    /**
     * the height of the component, will be the container's width if not set
     */
    height?: number;
    /**
     * A callback function to render the children component
     * The handler is of the shape of `({ width, height }) => node`
     */
    children: ({ width, height, }: {
        width: number | undefined;
        height: number | undefined;
    }) => React.ReactNode;
    /**
     * A callback function when the size of the table container changed if the width and height are not set
     * The handler is of the shape of `({ width, height }) => *`
     */
    onResize?: () => void;
}
/**
 * Decorator component that automatically adjusts the width and height of a single child
 */
declare const AutoResizer: ({ className, width, height, children, onResize, }: Props) => JSX.Element;
export default AutoResizer;
