/**
 * Sobre variáveis
 */

// var (não recomendado)

var foo = 'foo'
foo = 'bar'
console.log(foo)

// var é global
if (true) {
    var foo = 'foo'
}
console.log(foo)

// let 

let bar = 'foo'
bar = 'bar'
console.log(bar)

// const 

const baz = 'foo'
baz = 'bar' // vai quebrar