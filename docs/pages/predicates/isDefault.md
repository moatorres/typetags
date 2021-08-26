# TypeTags `.isDefault`

### Overview

The `.isDefault` method allow us to check if an object's `toStringTag` value is one of the native built-in type tags.

### Usage

##### `TypeTags.isDefault(value)`

- Checks if `value` **has** a default type tag.

```js
import { TypeTags } from 'typetags'

TypeTags.isDefault('[object Function]')
// → true

TypeTags.isDefault('[object Bazzinga]')
// → false
```

### Signature

```ts
isDefaulTag(tag: string): boolean
```
