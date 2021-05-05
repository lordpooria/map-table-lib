declare global {
    interface MediaDevices {
        getDisplayMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
    }
    interface MediaTrackConstraintSet {
        displaySurface?: ConstrainDOMString;
        logicalSurface?: ConstrainBoolean;
    }
}
interface Props {
    setRecording: (_: boolean) => void;
}
declare const useVideoRecorder: ({ setRecording }: Props) => {
    startRecording: () => Promise<void>;
    stopRecording: () => void;
};
export default useVideoRecorder;
