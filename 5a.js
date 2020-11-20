let dataType = (arg) =>{
    let tmp;
    for (let obj in arg) {
        tmp = arg[obj];
        console.log(`${obj}'s data type: ${typeof(tmp)}`);
        // console.log(obj + " ------> " + " (" + typeof (tmp) + ")\n");
    }
};


const person = {
    name: 'Rizo',
    age : 12,
    myAge: function() {
        console.log(`I am ${this.age} years old`)
    },
    myName: function() {
        console.log(`My name is ${this.name}`);
    },
};
person.myAge();
person.myName();

dataType(person);