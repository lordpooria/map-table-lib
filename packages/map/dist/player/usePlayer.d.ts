interface Props {
    bufferSize: any;
    loop: any;
    transitionTime: any;
    animationFinished: any;
    steps: number;
    startedOver: boolean;
    autoPlay: boolean;
    isReversePlaying: boolean;
    setPlay: (_: boolean) => void;
    setReversePlay: (_: boolean) => void;
}
export declare const usePlayer: ({ loop, transitionTime, animationFinished, steps, startedOver, autoPlay, setPlay, setReversePlay, isReversePlaying, }: Props) => {
    start: () => void;
    stop: () => void;
    startReverse: () => void;
};
export {};
