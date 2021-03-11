const fontSelector = (lang: string) => {
  let fontArray = [];
  switch (lang) {
    case "en":
      fontArray = ["Roboto", "Arial", "sans-serif"];
      break;
    case "fa":
      fontArray = ["IRANSans", "Arial", "Roboto"];
      break;
    default:
      fontArray = ["Roboto", "Arial", "sans-serif"];
      break;
  }
  return fontArray.join(",");
};

export default fontSelector;
