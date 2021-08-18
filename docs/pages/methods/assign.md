# TypeTags.`assign`

### Overview

The `.assign` method wraps a built-in type into a `TType` object and provides us methods for introspection.

### Usage

#### `TypeTags.assign(object, name)`

- Assigns a `toStringTag` property into an object.

```js
import { TypeTags } from 'typetags'
```

### Signature

```ts
assign<T>(name: Types | NestedTypes): TTypeInterface<T>
```
