"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _downloadjs = _interopRequireDefault(require("downloadjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useVideoRecorder = ({
  setRecording
}) => {
  const recorder = (0, _react.useRef)();
  const stream = (0, _react.useRef)();
  const startRecording = (0, _react.useCallback)(async () => {
    stream.current = await navigator.mediaDevices.getDisplayMedia({
      video: {
        displaySurface: "browser",
        logicalSurface: true
      }
    });
    setRecording(true);
    recorder.current = new MediaRecorder(stream.current);
    const chunks = [];

    recorder.current.ondataavailable = e => chunks.push(e.data);

    recorder.current.onstop = () => {
      setRecording(false);
      const completeBlob = new Blob(chunks, {
        type: chunks[0].type
      });
      (0, _downloadjs.default)(completeBlob, `${new Date().getTime()}.mp4`, "video/mp4");
    };

    recorder.current.start();
  }, []);
  const stopRecording = (0, _react.useCallback)(() => {
    var _recorder$current, _stream$current;

    recorder === null || recorder === void 0 ? void 0 : (_recorder$current = recorder.current) === null || _recorder$current === void 0 ? void 0 : _recorder$current.stop();
    stream === null || stream === void 0 ? void 0 : (_stream$current = stream.current) === null || _stream$current === void 0 ? void 0 : _stream$current.getVideoTracks()[0].stop();
  }, []);
  return {
    startRecording,
    stopRecording
  };
};

var _default = useVideoRecorder;
exports.default = _default;
//# sourceMappingURL=VideoRecorder.js.map