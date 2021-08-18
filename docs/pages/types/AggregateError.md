# TypeTags.`AggregateError`

### Info

The `AggregateError` object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by `Promise.any()`, when all promises passed to it reject.

### Usage

```js
import { TypeTags } from 'typetags'

console.log(TypeTags.AggregateError) // → [object AggregateError]

TypeTags.get(new AggregateError([])) // → [object AggregateError]
```

### Metadata

| Metadata        |                           |
| --------------- | ------------------------- |
| Type            | `AggregateError`          |
| Tag             | `[object AggregateError]` |
| `typeof`        | `'function'`              |
| `isConstructor` | `true`                    |
| `isFactory`     | `false`                   |
| `isSyntatic`    | `false`                   |

#### [See MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
