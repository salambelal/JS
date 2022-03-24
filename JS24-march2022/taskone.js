console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var person = {
    firstName: 'Marah',
    lastName: 'Al-khateeb',
    dop: '13.12.1995',
    favoriteFood: ['Potato', 'Pizza', 'Dawali'],
    favoriteMovie: ["Seven Samurai", "Raiders of the lost ark", "Godfather"]
}
document.write(`<br>ex.1 <br>My name is : ${person.firstName} ${person.lastName} ,My Birth date is : ${person.dop} ,My favorite food is: ${person.favoriteFood} ,My favorite movie is: ${person.favoriteMovie}`);


/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function firstName(p) {
    arr = [];
    for (i = 0; i < persons.length; i++) {
        arr[i] = p[i].name.first + ' ';

    }
    return arr;
}
document.write(`<br><br>ex.2 <br>all the first name is ${firstName(persons)}`);


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
function averageAge(ob) {
    sum = 0;
    for (i = 0; i < ob.length; i++) {
        sum = sum + ob[i].age;
    }
    avg = sum / ob.length;
    return avg;
}
document.write(`<br><br>ex.3 <br>The average is ${averageAge(persons)}`);

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(ob) {
    fullname = '';
    old = ob[0].age;
    for (i = 1; i < ob.length; i++) {
        if (ob[i].age > old) {
            old = ob[i].age;
            fullname = ob[i].name.first + ' ' + ob[i].name.last;
        }
    }
    return fullname;
}
document.write(`<br><br>ex.4 <br>The older person is ${olderPerson(persons)}`);

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(ob) {
    long = ob[0].name.first + ' ' + ob[0].name.last;
    for (i = 1; i < ob.length; i++) {
        fullname = ob[i].name.first + ' ' + ob[i].name.last
        if (fullname.length > long.length) {
            long = fullname;
        }
    }
    return long;
}
document.write(`<br><br>ex.5 <br>The longest full name is ${longestName(persons)}`);

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(ob) {
    long = ob[0].name.first + ' ' + ob[0].name.last;
    for (i = 1; i < ob.length; i++) {
        fullname = ob[i].name.first + ' ' + ob[i].name.last
        if (fullname.length > long.length) {
            long = fullname;
        }
    }
    return long;
}
document.write(`<br><br>ex.6 <br>The longest full name is ${longestName(persons)}`);
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str) {
    var s = str.split(' ');
    //s=s.toLowerCase();
    ob = {};
    for (i = 0; i < s.length; i++) {
        s[i] = s[i].toLowerCase();
        if (!ob.hasOwnProperty(s[i])) {
            ob[`${s[i]}`] = 1;

        }
        else {
            ob[`${s[i]}`]++;
        }
    }
    return ob;
}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"));
document.write(`<br><br>ex.7 <br> ${repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")} On the consol!`);


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str) {
    str = str.toLowerCase();
    ob = {};
    for (i = 0; i < str.length; i++) {
        if (!ob.hasOwnProperty(str[i])) {
            ob[`${str[i]}`] = 1;

        } else {
            ob[`${str[i]}`]++;
        }
    }

    return ob;
}

console.log(repeatChar("maMababatetacedo"));
document.write(`<br><br>ex.8 <br> ${repeatChar("maMababatetacedo")} On the consol!`);


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(ob, arr) {
    obj = {};
    for (i = 0; i < arr.length; i++) {
        for (const [key, val] of Object.entries(ob)) {
            if (key == arr[i]) {
                obj[`${arr[i]}`] = val;

            }
        }
    }

    return obj;

}
console.log(selectFromObject({ a: 1, cat: 3 }, ['a', 'cat', 'd']));
document.write(`<br><br>ex.9 <br> ${selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])} On the consol!`);