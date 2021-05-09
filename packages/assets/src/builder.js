const fse = require("fs-extra");

const path = require("path");

const globAsync = require("fast-glob");

async function generateIndex(options) {
  const files = await globAsync(path.join(options.outputDir, "*.tsx"));
  console.log(path.join(options.outputDir, "*.tsx"))
  const index = files
    .map((file) => {
      const typename = path.basename(file).replace(".tsx", "");
      return `export { default as ${typename} } from './icons/${typename}';\n`;
    })
    .join("");

  await fse.writeFile(path.join(options.outputDir,"..", "index.ts"), index);
}

async function runbuild() {
  await generateIndex({ outputDir: "./src/icons" });
}

runbuild();
