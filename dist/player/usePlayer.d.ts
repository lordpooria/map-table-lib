interface Props {
    bufferSize: any;
    minBufferReady: any;
    loop: any;
    transitionTime: any;
    animationFinished: any;
    steps: number;
    loadingTimeout: number;
    startedOver: boolean;
    autoPlay: boolean;
    setPlay: (_: boolean) => void;
}
export declare const usePlayer: ({ loadingTimeout, bufferSize, minBufferReady, loop, transitionTime, animationFinished, steps, autoPlay, setPlay, }: Props) => {
    start: () => void;
    pause: () => void;
    isPlaying: () => boolean;
    stop: () => void;
};
export {};
