"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageProvider = LanguageProvider;
exports.useLanguageState = useLanguageState;
exports.useLanguageAction = useLanguageAction;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LangContext = (0, _react.createContext)({});

function LanguageProvider({
  children,
  language = "fa",
  direction = "rtl"
}) {
  const [langSetting, setAppLanguage] = (0, _react.useState)({
    lang: language,
    direction
  });
  const langSettingRef = (0, _react.useRef)({
    language,
    direction
  });
  const changeLanguage = (0, _react.useCallback)(lang => {
    setAppLanguage({
      lang,
      direction: _utils.languageDirections[lang]
    });
  }, []);
  (0, _react.useEffect)(() => {
    if (langSettingRef.current.direction !== direction && langSettingRef.current.language !== language) {
      setAppLanguage({
        lang: language,
        direction
      });
    } else {
      if (langSettingRef.current.direction !== direction) {
        setAppLanguage(prevState => ({ ...prevState,
          direction
        }));
      }

      if (langSettingRef.current.language !== language) {
        setAppLanguage(prevState => ({ ...prevState,
          language
        }));
      }
    }
  }, [direction, language]);
  return _react.default.createElement(LangContext.Provider, {
    value: {
      langSetting,
      changeLanguage
    }
  }, children);
}

function useLanguageState() {
  const {
    langSetting
  } = (0, _react.useContext)(LangContext);

  if (!langSetting) {
    throw new Error("Language Setting should use inside language provider");
  }

  return langSetting;
}

function useLanguageAction() {
  const {
    changeLanguage
  } = (0, _react.useContext)(LangContext);

  if (!changeLanguage) {
    throw new Error("Change Language should use inside language provider");
  }

  return changeLanguage;
}
//# sourceMappingURL=language.js.map