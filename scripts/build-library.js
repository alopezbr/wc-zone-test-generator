var fs = require('fs');
const {execSync} = require('child_process');

var path = './projects/web-components';

const components = process.argv[2] !== undefined ? [process.argv[2]] : fs.readdirSync(path);
console.log(components);

components.forEach(component => {
  compileWebComponents(component);
});

setLibraryVersion();

function compileWebComponents(component) {
  const buildFiles = `ng build bundler --prod --main projects/bundler/web-component-modules/${component}/compile.ts`;
  const bundleComponent = `cat dist/tmp/runtime.js dist/tmp/polyfills.js dist/tmp/scripts.js dist/tmp/main.js > dist/tmp/${component}.js`;
  const copyComponent = `xcopy dist\\tmp\\${component}.js dist\\web-components\\`;

  execSync(`${buildFiles} && ${bundleComponent} && ${copyComponent}`);
}

function setLibraryVersion() {
  const setVersion = `node scripts/version-control.js`;
  const copyVersion = `xcopy projects\\bundler\\package.json dist\\web-components\\`;

  execSync(`${setVersion} && ${copyVersion}`);
}
