var Mammal = function(name) {
    this.name = name
}

Mammal.prototype.getName = function() {
    return this.name
}

Mammal.prototype.says = function() {
    return this.saying || ''
};

var myMammal = new Mammal('Herb')
console.log(myMammal.getName()) //Herb


var Maker = function(object) {
    this.f = object.first
}

var myObject = Maker({
    first: f,
    middle: m,
    last: l,
    state: s,
    city: c
})

var myMammal = {
    name: 'MM',
    getName: function() {
        return this.name
    },
    says: function() {
        return this.saying || ''
    }
}

var myCat = Object.create(myMammal)
myCat.name = 'Kitty'
myCat.saying = 'meow'
myCat.run = function() {
    return 'Kitty is running'
}
myCat.getName = function() {
    return this.says + ' ' + this.name + ' ' + this.says
}

var mammal = function(spec) {
    var that = {}

    that.getName = function() {
        return spec.name
    }
    that.says = function() {
        return spec.saying || ''
    }

    return that
}

var myMammal = mammal({
    name: 'Herb',
    saying: 'Cheers!'
})

console.log(myMammal.getName()) //Herb
console.log(myMammal.says()) //Cheers!
