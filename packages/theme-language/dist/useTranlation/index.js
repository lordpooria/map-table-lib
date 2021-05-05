"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = useTranslation;

var _react = require("react");

var _language = require("../provider/language");

var _common = require("../locale/en/common");

var _common2 = require("../locale/fa/common");

function useTranslation() {
  const {
    lang
  } = (0, _language.useLanguageState)();
  const translateFile = (0, _react.useRef)(_common2.fa);
  (0, _react.useEffect)(() => {
    switch (lang) {
      case "en":
        translateFile.current = _common.en;
        break;

      case "fa":
        translateFile.current = _common2.fa;
        break;

      default:
        translateFile.current = _common2.fa;
    }
  }, []);
  return {
    t: translateFile.current
  };
}
//# sourceMappingURL=index.js.map