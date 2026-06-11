const fs = require('fs')
const path = require('path')

// File likhna
fs.writeFileSync('notes.txt', 'Setting up and learning nodejs')

// File padhna
const data = fs.readFileSync('notes.txt', 'utf-8')
console.log('File content:', data)

// File mein aur content add karna
fs.appendFileSync('notes.txt', '\nFS module samajh aa gaya!')

console.log('Done! check notes.txt ')