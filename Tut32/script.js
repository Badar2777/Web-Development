console.log("Hello World");
//data types
let a = 34;
let b = "Badar";
let c = true;
let d = undefined;
let e = null;

//Object
 let employee = {
    name: "Badar",
    salary: 10,
    role: "Developer",
    "role 2": "Student"
 }
 console.log(employee);
//Arrays
//  let names = [1,3,"Badar",true,undefined];
let names = new Array(30,2,12,"Badar",null);
 console.log(names);
 names.sort();
 console.log(names);

//Functions
    let name = "Badar";
    let name1 = "Ali";
    let name2 = "Ali";
    let name3 = "Ali";
    let greetText = "Good Morning";
    // console.log(name1 + " is a good boy");
    // console.log(name2 + " is a good boy");
    // console.log(name3 + " is a good boy");
    
    function greet(name, greetText) {
        console.log(greetText + " " + name);
        console.log(name + " is a good boy");
    }

    greet(name, greetText);
    greet(name1, greetText);
    greet(name2, greetText);
    greet(name3, greetText);

    