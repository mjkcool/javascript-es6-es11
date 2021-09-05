{ //Shorthand property name
    const name = 'mjkcool';
    const age = 19;

    const myobj = {
        name: name,
        age: age,
    }
    const myobj2 = {
        name,
        age,
    }

    // console.log("myobj", myobj);
    // console.log("Shorthand myobj2", myobj2);
}

{ //Destructuring assignment
    const student = {
        id: 3302,
        name: 'anne',
    }
    const {id, name} = student;
    let {id: studentId, name: studentName} = student;
    studentId = 3301;
    
    // console.log(student.id, student.name);
    // console.log(id, name);
    // console.log(studentId, studentName);

    const animals = ['🐺', '🦝', '김선우']
    const [first, second, third] = animals;
    // console.log(first, 'X', third);
}

{ //Spread Syntax (배열 데이터 복사)
    const obj1 = { key: 'key1'};
    const obj2 = { key: 'key2'};
    const arr = [obj1, obj2];

    const arrCopy = [...arr]; //copy!

    // console.log(arrCopy);
}

{
    
}