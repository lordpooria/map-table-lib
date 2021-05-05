import { __awaiter, __generator } from "tslib";
import { useCallback, useRef } from "react";
import download from "downloadjs";
var useVideoRecorder = function (_a) {
    var setRecording = _a.setRecording;
    var recorder = useRef();
    var stream = useRef();
    // const videoRef = useRef<HTMLVideoElement>();
    var startRecording = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, chunks;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = stream;
                    return [4 /*yield*/, navigator.mediaDevices.getDisplayMedia({
                            video: {
                                displaySurface: "browser",
                                logicalSurface: true,
                            },
                        })];
                case 1:
                    _a.current = _b.sent();
                    setRecording(true);
                    recorder.current = new MediaRecorder(stream.current);
                    chunks = [];
                    recorder.current.ondataavailable = function (e) { return chunks.push(e.data); };
                    recorder.current.onstop = function () {
                        setRecording(false);
                        var completeBlob = new Blob(chunks, { type: chunks[0].type });
                        download(completeBlob, new Date().getTime() + ".mp4", "video/mp4");
                        // videoRef.current.src = URL.createObjectURL(completeBlob);
                    };
                    recorder.current.start();
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var stopRecording = useCallback(function () {
        var _a, _b;
        (_a = recorder === null || recorder === void 0 ? void 0 : recorder.current) === null || _a === void 0 ? void 0 : _a.stop();
        (_b = stream === null || stream === void 0 ? void 0 : stream.current) === null || _b === void 0 ? void 0 : _b.getVideoTracks()[0].stop();
    }, []);
    return { startRecording: startRecording, stopRecording: stopRecording };
};
export default useVideoRecorder;
