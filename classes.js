/**
 * Classes 
 */

class Foo {
    constructor(foo) {
        this.foo = foo
    }

    logFoo() {
        console.log("O valor de foo é:", this.foo)
    }
}

const foo = new Foo('foo')
foo.logFoo()

class Bar extends Foo {
    constructor(foo, bar) {
        super(foo)
        this.bar = bar
    }

    logBar() {
        console.log("O valor de bar é:", this.bar)
    }
}

const bar = new Bar('foo', 'bar')
bar.logFoo()
bar.logBar()
