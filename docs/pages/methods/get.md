# TypeTags.`get`

### Signature

```ts
get(name: Types | NestedTypes): Tags | undefined
get(value: any): Tags
```

### Usage

- Returns the tag of any type based on its name, if it can't find it by its name it will return the _value_'s type tag.

```js
TypeTags.get('Array') // → [object Array]

TypeTags.get('Tuple') // → [object String]

TypeTags.get([]) // → [object Array]
```
