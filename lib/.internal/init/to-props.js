const meta = require('./types.json')

// normalizes the create-meta initializer
export const toProps = (meta) =>
  Object.entries(meta)
    .flat(1)
    .filter((v) => typeof v !== 'string')
    .filter((v) => !!v.isAvailable)

// expected prop schema for TypeTag class
export const propSchema = (o) => ({
  type: o.name,
  tag: o.tag,
  kind: o.typeof,
})

// INFO: tests
// let res = toProps(meta)
// console.log(res)
// console.log(res.map(propSchema))
