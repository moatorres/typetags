# TypeTags.`AbortSignal`

### Info

The `signal` read-only property of the `AbortController` interface returns an `AbortSignal` object instance, which can be used to communicate with/abort a DOM request as desired.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.AbortSignal) // → [object AbortSignal]

TypeTags.get(new AbortController().signal) // → [object AbortSignal]
```

### Metadata

| Metadata        |                        |
| --------------- | ---------------------- |
| Type            | `AbortSignal`          |
| Tag             | `[object AbortSignal]` |
| `typeof`        | `'function'`           |
| `isConstructor` | `false`                |
| `isFactory`     | `false`                |
| `isSyntatic`    | `false`                |

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal)
