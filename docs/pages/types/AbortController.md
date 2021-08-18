# TypeTags.`AbortController`

### Info

The `AbortController` interface represents a controller object that allows you to abort one or more Web requests as and when desired.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.AbortController) // → [object AbortController]
```

### Signature

```ts
declare type ITypeTags = {
  [key in Types | NestedTypes]: Tags
}
```

### Metadata

| Metadata        |                            |
| --------------- | -------------------------- |
| Type            | `AbortController`          |
| Tag             | `[object AbortController]` |
| `typeof`        | `'function'`               |
| `isConstructor` | `true`                     |
| `isFactory`     | `true`                     |
| `isSyntatic`    | `false`                    |

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
