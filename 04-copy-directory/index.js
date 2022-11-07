const { stdout } = require('process');
const path = require('path');
const { mkdir, readdir, copyFile } = require('fs/promises');

const oldDir = path.join(__dirname, 'files');
const newDir = path.join(__dirname, 'files-copy');

async function copyDirectory() {
  try {
    await mkdir(newDir, { recursive: true });
    const files = await readdir(oldDir, {withFileTypes: true});
    const filteredFiles = files.filter( (file) => file.isFile());
    for (const file of filteredFiles) {
      copyFile(path.join(oldDir, file.name), path.join(newDir, file.name))
    }
  } catch (err) {
    console.error(err.message);
  }
}

copyDirectory();