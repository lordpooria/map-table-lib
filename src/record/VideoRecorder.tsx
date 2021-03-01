import { useCallback, useRef } from "react";
import download from "downloadjs";
declare global {
  interface MediaDevices {
    getDisplayMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
  }

  // if constraints config still lose some prop, you can define it by yourself also
  interface MediaTrackConstraintSet {
    displaySurface?: ConstrainDOMString;
    logicalSurface?: ConstrainBoolean;
    // more....
  }
}

interface Props {
  setRecording: (_: boolean) => void;
}

const useVideoRecorder = ({ setRecording }: Props) => {
  const recorder = useRef<MediaRecorder>();
  const stream = useRef<MediaStream>();
  // const videoRef = useRef<HTMLVideoElement>();

  const startRecording = useCallback(async () => {
    stream.current = await navigator.mediaDevices.getDisplayMedia({
      video: {
        displaySurface: "browser",
        logicalSurface: true,
      },
    });

    setRecording(true);
    recorder.current = new MediaRecorder(stream.current);

    const chunks: Array<BlobPart> = [];
    recorder.current.ondataavailable = (e) => chunks.push(e.data);
    recorder.current.onstop = () => {
      setRecording(false);
      const completeBlob = new Blob(chunks, { type: (chunks[0] as any).type });
      download(completeBlob, `${new Date().getTime()}.mp4`, "video/mp4");
      // videoRef.current.src = URL.createObjectURL(completeBlob);
    };

    recorder.current.start();
  }, []);

  const stopRecording = useCallback(() => {
    recorder?.current?.stop();
    stream?.current?.getVideoTracks()[0].stop();
  }, []);

  return { startRecording, stopRecording };
};

export default useVideoRecorder;
