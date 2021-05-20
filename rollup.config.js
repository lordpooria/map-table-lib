import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import bundleSize from "rollup-plugin-bundle-size";
import replace from "@rollup/plugin-replace";
import typescript from "rollup-plugin-typescript2";
import path from "path";
import findLernaPackages from "find-lerna-packages";

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const isProd = process.env.NODE_ENV === "production";
const processEnv = isProd ? "production" : "development";
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, "src/index.ts");
const OUTPUT_DIR = path.join(PACKAGE_ROOT_PATH, "dist");
const ALL_MODULES = ['@hesaba/assets','@hesaba/theme-language','@hesaba/table','@hesaba/map']

// findLernaPackages.sync(process.cwd()).map(pkg => {
//   console.log(pkg.name, pkg.location);
// });

const LOCAL_GLOBALS = {
  react: "React",
  "react-dom": "ReactDOM",
};

const LOCAL_EXTERNALS = ["react", "react-dom"];

const mirror = (array) =>
  array.reduce((acc, val) => ({ ...acc, [val]: val }), {});
const IS_BROWSER_BUNDLE = true
const formats = IS_BROWSER_BUNDLE ? ["es"] : ["es", "cjs"];

export default formats.map((format) => ({
  plugins: [
    typescript({
      clean: true,
    }),
    resolve(),
    bundleSize(),
    postcss({
      minimize: isProd,
    }),

    commonjs({
      include: /node_modules/,
      namedExports: {
        "react-js": ["isValidElementType"],
      },
    }),
    babel({
      exclude: /node_modules/,
      babelHelpers: "runtime",
    }),
  ],
  input: INPUT_FILE,

  external: IS_BROWSER_BUNDLE ? LOCAL_EXTERNALS : ALL_MODULES,

  output: {
    file: path.join(OUTPUT_DIR, `index.${format}.js`),
    format,
    sourcemap: true,
    name: LERNA_PACKAGE_NAME,
    globals: IS_BROWSER_BUNDLE ? mirror(ALL_MODULES) : LOCAL_GLOBALS,
    amd: {
      id: LERNA_PACKAGE_NAME,
    },
    globals: LOCAL_GLOBALS,
  },
}));
