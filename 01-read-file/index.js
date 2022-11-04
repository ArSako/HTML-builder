const fs = require('fs')
const { stdout } = process
const path = require('path');

const file = path.join('01-read-file','text.txt')
const readTxt = fs.createReadStream(file, 'utf-8')
readTxt.on('data', data => {stdout.write(`${data}`)})
