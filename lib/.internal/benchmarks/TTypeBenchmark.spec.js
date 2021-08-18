import { TType as TTypeClass } from '../../resources/TType'
import { TType as TTypeFunction } from './TTypeFunction'
import { TType as TTypePrototype } from './TTypePrototype'

describe('TType Benchmarks', () => {
  it('should perform', () => {
    // const cla = TTypeClass.create('Array')
    // const fun = TTypeFunction('Array')
    // const pro = new TTypePrototype('Array')

    var iterations = 1000
    console.time('Class')
    for (var i = 0; i < iterations; i++) TTypeClass.create('Array')
    console.timeEnd('Class')

    console.time('Function')
    for (var i = 0; i < iterations; i++) TTypeFunction('Array')
    console.timeEnd('Function')

    console.time('Prototype')
    for (var i = 0; i < iterations; i++) new TTypePrototype('Array')
    console.timeEnd('Prototype')
  })
})
