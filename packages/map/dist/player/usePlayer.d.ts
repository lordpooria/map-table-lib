interface Props {
    bufferSize: any;
    loop: any;
    transitionTime: any;
    animationFinished: any;
    steps: number;
    startedOver: boolean;
    autoPlay: boolean;
    setPlay: (_: boolean) => void;
}
export declare const usePlayer: ({ loop, transitionTime, animationFinished, steps, startedOver, autoPlay, setPlay, }: Props) => {
    start: () => void;
    stop: () => void;
};
export {};
