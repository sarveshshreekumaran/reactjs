# reactjs
Learning journey of reactjs

## what is React?
React is a javascript Library for building User Interfaces.

### javascript library:
It is about building javascript-driven apps, react apps run on browser. They don't run on server, that gives as an great advantage to things happen instanly on user's browser.we don't wait for server response to get a new page or render something new. <br/>

###  user interfaces:
React is all about components, you can split up your web app/web page as a separate component. Using components codes are more manageable and reusable if any thing wrong you can go to that particular component and update it. <br/>
React component = custom HTML element. <br/>
example : `<Header/>, <Sidebar/>, <Footer/>`,etc. <br/>

### first react code ->
Recommented online code editor : codepen.io <br/>
**There a another branch for code examples you can find out all code examples. On that branch.** <br/>
First react code example on codepen.io : [code example](https://codepen.io/sarveshshreekumaran/details/yLRyXQb)

## Why react ? <br />
- UI state becomes difficult to handle with vanilla javascript.
- Focus on business logic, not on preventing your app from exploding.
- Huge ecosystem. active community, high performance.

### React alternatives:
Angular, Vuejs, Backbonejs, Ember. <br/>
Most recommented alternatives are : Angular, vue.

### Two kinds of web applications: <br/>
- single page application 
- multi page application 

### single page application:
we get only one HTML page from the server, and that all managable by javascript with react. <br/>

### multi page application:
we can get multiple HTML pages where each page has the content for a given route. <br/>
example : example.com/users <br/>
In multi page application we only use react for to create little widgets. <br/>

Most popular approach is **single page application.** Because entire page is manage by javascript, and you never go back to the server and reload the page. <br/>
  
**Single page application** built up with components and every component is a react component. so that the entire page is managed by root react component, which means all are under react's control. <br>

**Multi page application** lot of the page is just going to be normal HTML and CSS and some widgets only are built with react. eg:Image gallery etc,. <br/>

**single page application** : Typically only one ReactDOM.render() call. <br/>
**multi page application** : One ReactDOM.render() call per "widget" in different page. 
***

### ES6 let and const:
**let** is a keyword, it is used to declare a variable. <br>
**const** is a keyword, it is used to declare a constant variable, it means the value could assign only once.

### ES6 Arrow Function:
Arrow function allow as to write shorter function. <br>
Ex: `let say = () => { console.log("Hello") }` for more examples refer code-examples branch.

### ES6 import and export:
Using these two keywords import and export are used in javascript module. <br>
For example: 
```
const pi = 3.14;
export default pi;
```
```
import piValue from "./pi.js"
```
The above example pi.js is a module, and that module export the default value pi. In another file we import that module value pi as piValue from **./pi.js**. Using **default** keyword you can import that pi value name as your wise. <br>
  
In other side exporting more the one value <br>
For example: 
```
const name = "sarvesh"; 
let age = "23"; 
export default name;
export {age};
``` 
```
import {user, age} from "./person.js;"
```
Here you can see person.js module contain two values. Importing two values from **./person.js**.
  
Remind, there is only on default value in a module. So you can import that default value name as your wise, And the other values name are same as respect of that module, When importing.
  
But there is another way to use that other values name as your wise.

For example: 
```
import {age as userAge} from "./person.js"
```

You can also import all values from a module at once.

For example: 
```
import * as person from "./person.js"
```

### ES6 classes: 
* Class are blueprints for javascript objects.
* A class has create with class keyword, class have both property and method.
* Methods are simply functions, property are variables attached to class.
* Use classes is same way, how we use constructor function. For example: `const person = new Person(); person.printGender();`
* Classes also support inheritance, it means taking all properties and methodes from another class, and potentially adding new properties and methods.
* Using extends and super keyword to inheritance a class. Refer code-examples branch for examples.

### ES7 Properties & Methods for class:
Property Example: `gender = 'male';`  
Method Example: `printGender = () => {console.log(this.gender)};`
  
Using ES7, property and method syntex are written shorted. Here bable will convert into normal js, because some browser doesn't support ES6 or other higher ES versions of js.

### Spread operator:
The spread (...) syntax allow an iterable, both array and object.
  
Array example: 
```
const number = [1,2,3]; 
const newNumber = [...number, 4];
console.log(newNumber);
```
Object example: 
```
const person = {name: "sarvesh"};
const newPerson = {...person, age:23};
console.log(newPerson);
```
### Rest parameter:
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

For example:
```
const filter = (...args) => {
  return args.filter(el => el === 1)
};
filter(1,2,3);
```
### Destructuring:
Destructuring allows yout to easily extract array elements or object properties and store them in variables.
  
  Array Destructure Example:
  ```
  const number = [1, 2, 3];
  [one, two] = number;
  console.log(one, two);
  ```
  
  Object Destructure Example:
  ```
  const person = {
    name: "sarvesh",
    age: 23
  };
  const {name, age} = person;
  console.log(name);
  ```
### Primitive type:
In Javascript there are 7 primitive types. eg.string, number, boolean etc,.
All primitive are immutable, it means thet can't be altreded.

  ```
  const number = 2;
  const num = number;
  console.log(num);
  ```
  See the above example it copied the number constant into num constant.

### Reference type:
In javascript Array and Object are reference type. Reference type means if you copy a object and store it in another const or var, it can't copy. Meanwhile it just copy the pointer only. See the below example to understarand.  

```
const person = {
  name: "sarvesh"
};
const copyPerson = person;
person.name = "seeni"; 
console.log(copyPerson) //{name: 'seeni'}
```
  So, if you want copy the object use spread operator (...), This way the object properties and values are copied to that respect const or variable. See the below example. The same way array also works.  
```
const person = {
  name: "sarvesh"
};
const copyPerson = {...person};
person.name = "seeni"; 
console.log(copyPerson) //{name: 'sarvesh'}
```
### In-built array function - map:
The map method iterate all the elements in a array inside a callback function provided by the map method.
  
For example:
```
const number = [1, 2, 3];
const doubleNumber = number.map( num => num * 2 );
console.log(number, doubleNumber);
```
***  
