# TypeTags.`isDefaultTag`

### Overview

The `.isDefaultTag` method allow us to check if an object's `toStringTag` value is one of the native built-in type tags.

### Usage

#### `TypeTags.isDefaultTag(value)`

- Checks if `value` is one of the built-in's type tag values.

```js
import { TypeTags } from 'typetags'

TypeTags.isDefaultTag('[object Function]') // → true
TypeTags.isDefaultTag('[object Bazzinga]') // → false
```

### Signature

```ts
isDefaulTag(tag: string): boolean
```
