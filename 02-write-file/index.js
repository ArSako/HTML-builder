const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

process.on('exit', () => {stdout.write('Пока!');});

file = path.join(__dirname, 'text.txt');
process.on('SIGINT', () => process.exit());
const out = fs.createWriteStream(file, 'utf-8');
stdout.write('Введите любой текст:\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  out.write(data);
});