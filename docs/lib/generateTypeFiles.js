const fs = require('fs')

const h1 = (name) => `# TypeTags \`.${name}\`\n### Overview\n`
const description = (name) => `The \`${name}\`...\n### Usage\n`
const usage = (meta) =>
  `\`\`\`js
import { TypeTags } from 'typetags'

console.log(TypeTags.${meta.name})
// → ${meta.tag}
\`\`\` `
const metadata = (meta) => `
### Metadata (TType)

| Metadata             | Value                         |
| -------------------- | ----------------------------- |
| \`.type\`              | \`${meta.name}\`            |
| \`.tag\`               | \`${meta.tag}\`             |
| \`.builtin()\`         | \`${meta.builtin}\`         |
| \`.getTag()\`          | \`${meta.tag}\`             |
| \`.hasSpecialArgs()\`  | \`${meta.hasSpecialArgs}\`  |
| \`.instance()\`        | \`${meta.instance}\`        |
| \`.instanceTypeOf()\`  | \`${meta.instanceTypeOf}\`  |
| \`.info()\`            | [see more]()                |
| \`.isAvailable()\`     | \`${meta.isAvailable}\`     |
| \`.isConstructor()\`   | \`${meta.isConstructor}\`   |
| \`.isFactory()\`       | \`${meta.isFactory}\`       |
| \`.isFunction()\`      | \`${meta.isFunction}\`      |
| \`.isGlobal()\`        | \`${meta.isGlobal}\`        |
| \`.isIterator()\`      | \`${meta.isIterator}\`      |
| \`.isNested()\`        | \`${meta.isNested}\`        |
| \`.isObject()\`        | \`${meta.isObject}\`        |
| \`.isPrimitive()\`     | \`${meta.isPrimitive}\`     |
| \`.isStringifiable()\` | \`${meta.isStringifiable}\` |
| \`.isSyntatic()\`      | \`${meta.isSyntatic}\`      |
| \`.isTypedArray()\`    | \`${meta.isTypedArray}\`    |
| \`.ownKeys()\`         | \`[${
  meta.ownKeys.length > 1
    ? String(meta.ownKeys).split(',').join(', ')
    : meta.ownKeys
}]\` |
| \`.toString()\`        | \`${meta.toString}\`        |
| \`.typeOf()\`          | \`${meta.typeOf}\`          |
`

const signature = `
### Signature

\`\`\`ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
\`\`\`

#### [See MDN Web Docs]()
`

const data = [
  {
    name: 'AbortController',
    tag: '[object AbortController]',
    hasSpecialArgs: false,
    isGlobal: true,
    isAvailable: true,
    isConstructor: true,
    isFactory: false,
    isFunction: true,
    isIterator: false,
    isNested: false,
    isObject: false,
    isPrimitive: false,
    isStringifiable: true,
    isSyntatic: false,
    isTypedArray: false,
    ownKeys: ['length', 'prototype', 'name'],
    typeOf: 'function',
    instanceTypeOf: 'object',
  },
  {
    name: 'AbortSignal',
    tag: '[object AbortSignal]',
    hasSpecialArgs: false,
    isGlobal: false,
    isAvailable: true,
    isConstructor: false,
    isFactory: false,
    isFunction: false,
    isIterator: false,
    isNested: false,
    isObject: true,
    isPrimitive: false,
    isStringifiable: true,
    isSyntatic: false,
    isTypedArray: false,
    ownKeys: [],
    typeOf: 'object',
    instanceTypeOf: 'object',
  },
  {
    name: 'AggregateError',
    tag: '[object Error]',
    hasSpecialArgs: true,
    isGlobal: true,
    isAvailable: true,
    isConstructor: true,
    isFactory: true,
    isFunction: true,
    isIterator: false,
    isNested: false,
    isObject: false,
    isPrimitive: false,
    isStringifiable: true,
    isSyntatic: false,
    isTypedArray: false,
    ownKeys: ['length', 'name', 'prototype'],
    typeOf: 'function',
    instanceTypeOf: 'object',
  },
  {
    name: 'Array',
    tag: '[object Array]',
    hasSpecialArgs: false,
    isGlobal: true,
    isAvailable: true,
    isConstructor: true,
    isFactory: true,
    isFunction: true,
    isIterator: false,
    isNested: false,
    isObject: false,
    isPrimitive: false,
    isStringifiable: true,
    isSyntatic: false,
    isTypedArray: false,
    ownKeys: ['length', 'name', 'prototype', 'isArray', 'from', 'of'],
    typeOf: 'function',
    instanceTypeOf: 'object',
  },
]

data.map((meta) => {
  const fileData =
    h1(meta.name) +
    description(meta.name) +
    usage(meta) +
    metadata(meta) +
    signature

  fs.writeFileSync(`${meta.name}.md`, fileData)
})
