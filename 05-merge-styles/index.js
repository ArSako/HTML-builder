const path = require('path');
const { readdir, stat, readFile, writeFile} = require('fs/promises');

const dirStyle = path.join(__dirname, 'styles');

(async () => {
  const template = [];
  const files = await readdir(dirStyle);
  for (const file of files) {
    const dirStyleFile = path.join(__dirname, 'styles', file);
    const stats = await stat(dirStyleFile);
    if (stats.isFile()) {
      const extname = path.extname(dirStyleFile);
      if (extname === '.css') {
        const input = await readFile(dirStyleFile);
        template.push(input);
      }
    }
  }
  await writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), template.join('\n'));
})();