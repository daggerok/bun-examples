import * as process from "process";
const Bun = require('bun');

(async () => {
    const packageJson = Bun.file(`${process.cwd()}/package.json`);
    console.log('package.json:', packageJson);

    const text = await packageJson.text();
    console.log('package.json text:', text);

    const json = await packageJson.json();
    console.log('package.json json:', json);
})();
