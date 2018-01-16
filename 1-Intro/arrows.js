var square1 = (x) => {
    return x * x;
}

var square = (x) => x * x;
console.log(square(9))

var person = {
    name: 'Amar',
    sayHi : () => {
        console.log(arguments);
        console.log('Hi', this.name);
    },
    sayHi2 () {
        console.log(arguments);
        console.log('Hi', this.name);
    }
}

person.sayHi(0, 1, 2);
person.sayHi2(0, 1, 2, 3);