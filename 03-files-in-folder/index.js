const path = require('path');
const { readdir, stat } = require('fs/promises');

const showFiles = async () => {
  const dir = path.join(__dirname, 'secret-folder');
  const files = await readdir(dir);
  for (const file of files) {
    const dirFile = path.join(__dirname, 'secret-folder', file);
    const stats = await stat(dirFile);
      if (stats.isFile()) {
        const fileName = path.parse(dirFile);
        let ext = fileName.ext;
        let name = fileName.name;
        let size = stats.size;
        size = size / 1024;
        ext = ext.split('').splice(1).join('');
        console.log(`${name} - ${ext} - ${size}kb`);
      }
  }
};

showFiles();