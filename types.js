/**
 * Tipos e Variáveis
 */
// string
const foo = 'foo'
console.log(typeof foo)

// number
const int = 1
console.log(typeof int)
console.log(parseFloat(int))

const float = 1.5
console.log(typeof float)
console.log(parseInt(float))

// NaN :cry_cat:
let bar = parseInt('foo')
console.log(bar)

bar = 'foo'
console.log(bar / 2)

// Infinity :cry_cat:
console.log(2 / 0)

// boolean
const bool = true
console.log(typeof bool)

// Objetos

// Objeto chave-valor

const obj = {
    foo: "foo",
    bar: "bar"
}

console.log(typeof obj)
console.log(Object.keys(obj.foo))

// Arrays

const list = ['foo', 'bar']
console.log(typeof list)
console.log(list[0])

// undefined

let baz
console.log(baz)

// null

baz = null
console.log(baz)
