// @flow
/* eslint-disable no-console */

// #region imports
const { join } = require('path');
const fs = require('fs');
const chalk = require('chalk');
// #endregion

// #region constants
const indexRaw = join(__dirname, '../', 'src/statics/index-raw.html');
const destHtml = join(__dirname, '../', 'docs/index.html');
// #endregion

// #region utils
function copyFile(sourceFilePath, destFilePath) {
  fs.createReadStream(sourceFilePath).pipe(fs.createWriteStream(destFilePath));
}
// #endregion

// #region make production bundle
function prepareIndexHtml() {
  if (fs.existsSync(indexRaw)) {
    copyFile(indexRaw, destHtml);

    return console.log(
      `${chalk.greenBright('==== index.html generated 🏋️‍ ====')}`,
    );
  }

  return console.log(`${chalk.red('==== index.html not found... 😢 ====')}`);
}
// #endergion

prepareIndexHtml();
