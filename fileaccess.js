const fs = require('fs');

const textdata = fs.readFileSync('./TextFolder/input.txt', 'utf-8');
console.log(textdata);
const textOut = `This is the file I am going to write and save it inside the a file of my own name created on ${((Date.now())/1000)/(60*60)}`;
const nodeBasicInstructions = `This is to create for node basic instructions created on ${Date.now()}`;

fs.writeFileSync('./TextFolder/writeText.txt', textOut);
fs.writeFileSync('./TextFolder/nodeBasicText.txt', nodeBasicInstructions);
console.log('File written');