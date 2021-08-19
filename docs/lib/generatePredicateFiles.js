const fs = require('fs')
const predicates = require('./meta.json')

let names = Object.keys(predicates)

names.map((n) => fs.writeFileSync(`${n}.md`, `# TypeTags.\`${n}\``))
