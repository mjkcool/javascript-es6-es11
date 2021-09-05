class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //getter, setter 호출
    }

    get age() {
        return this._age;
    }
    set age(value) {
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }

    toString() {
        return `User, firstName:${this.firstName}, lastName:${this.lastName}, _age:${this.age}`;
    }
}

const user1 = new User('Lose', 'Lee', -1);
console.log(user1);
console.log(user1.toString());