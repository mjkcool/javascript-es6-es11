{ //1. Shorthand property name
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

{ //2. Destructuring assignment
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

    const animals = ['🐺', '🦝', '멍청이']
    const [first, second, third] = animals;
    // console.log(first, 'X', third);
}

{ //3. Spread Syntax (배열 데이터 복사)
    const obj1 = { key_1: 'key1'};
    let obj2 = { key_2: 'key2'};
    const arr = [obj1, obj2]; //객체의 주소값이 담긴다
    
    //배열 복사
    const arrCopy = [...arr, {key: 'key3'}]; //copy and append
    obj1.key_1 = 'key1-1'; //주소 참조
    // console.log(arrCopy);

    delete obj2.key_2; //속성 삭제
    //객체 복사
    const obj3 = {...obj1, ...obj2}; //속성 병합(배열도 가능)
    // console.log('obj3 =>', obj3);
}

{ //4. Default parameters
    const printMessage = (message = 'default text') => {
        console.log(message);
    }
    // printMessage('hello minjeong');
    // printMessage();
}

{ //5. Ternary Operator (삼항연산자)
     console.log(true ? '참' : '거짓')
}

{6. 

}