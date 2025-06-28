//logs and alerts
//console.log("I love zucchini!");
//console.log("Eggplant emoji");
//window.alert("I LIKE DOING BLACKFACE!")

//this is a comment

/* 
this
is
a
miltiline
comment
*/

//Declaration (Variables var, let, const)
//Assignments = assign. operator.

//let student= false;//true //boolean

//let firstName="Yehor"; //string

//let age;
//let age="21"+1;
//let age=18; //number
//age=18+1;
//console.log("Hello,",firstName);
//console.log("You are",age,"years old");
//console.log("Enrolled:",student);

//document.getElementById("p1").innerHTML = "Hello " + firstName;
//document.getElementById("p2").innerHTML = "You are " + age + " years old";
//document.getElementById("p3").innerHTML = "Enrolled: " + student;

//let students = 20;
//students = students + 1;
//console.log(students);
//console.log(extraStudents);
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 3;
//let Students = students % 3;
//students +(*/-)= 1; augmented assign operator

//let result = 1 + 2 * (3 + 4);
//console.log(result);

//user input window prompt and HTML textbox
//let username = window.prompt("What is your name ?");
//console.log(username);

//let username;
//document.getElementById("THEtextbox").onclick = function(){
//username = document.getElementById("THEtextbox").value;
//console.log(username);
//document.getElementById("THElabel").innerHTML = "Hello " + username;
//}

//Type conversion changing the datatype of a value to another

//let age = window.prompt("How old are you?");

//console.log(typeof age);
//age=Number(age);
//age += 1;

//console.log("Happy Birthday! You are", age, "years old");

/*let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("yes");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);*/

//const

/*const PI = 3.14159;
//let pi = 420.69;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;
console.log("The circumference of a circle is", circumference);*/

//let x = 3.14;
//let y = 5;
//let z = 9;
//let maximum;
//let minimum;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Matg.sqrt(x);
//x = Math.abs(x);
//x = Math.PI;
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);

//console.log(minimum);

/*
let a;
let b;
let c;

a = window.prompt("Input the side a");
a = Number(a);

b = window.prompt("Input the side b");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Side c:", c);
*/

/*
document.getElementById("SubmissionButton").onclick = function(){
    a = document.getElementById("TextBox A").value;
    a = Number(a);
    
    b = document.getElementById("TextBox B").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));  

    document.getElementById("label C").innerHTML = "Side C: " + c;
}
*/

/*
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}
*/

/*
let x;
let y;
let z;
*/


/*
console.log(x);
console.log(y);
console.log(z);
*/

/*
document.getElementById("RollButton").onclick = function(){

    x = Math.floor(Math.random()* 20) + 1;
    y = Math.floor(Math.random()* 6) + 1;
    z = Math.floor(Math.random()* 12) + 1;
    
    document.getElementById("XLabel").innerHTML = x;
    document.getElementById("YLabel").innerHTML = y;
    document.getElementById("ZLabel").innerHTML = z;

}
*/

//let userName = "   Kachiga  ";
//let phoneNumber = "096-412-4859";

//let nameLength = userName.length; 
//console.log(userName.length);
//userName.charAt(0);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("c"));
//console.log(userName.lastIndexOf("c"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();
//phoneNumber = phoneNumber.replace("-","/");

//console.log(userName);

/*
let fullName = "Yehor Avramenko";
let firstName;
let lastName;

//firstName = fullName.slice(0,5);
//lastName = fullName.slice(6);

firstName = fullName.slice(0, fullName.indexOf(" ") + 1);
lastName = fullName.slice(fullName.indexOf(" ") + 1);


console.log(firstName);
console.log(lastName);
*/

/*
let userName = "yehor";


//let letter = userName.charAt(0);
//letter = letter.toUpperCase();

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);
*/

/*
let age = 65;

if(age >= 65){
    console.log("You are a senior");
}
else if(age >= 18){
console.log("You are an adult");
}
else if(age < 0){
    console.log("You have not been born yet");
}
else{
    console.log("You are NOT an adult");
}
*/

/*
let online = true;

if(online){ 
console.log("You are online");
}
else{
    console.log("You are offline");
}
*/


/*
document.getElementById("button1").onclick = function(){

    const myCheckBox = document.getElementById("checkbox1");
    */

    /*
    const visabutton = document.getElementById("visabutton");
    const mastercardbutton = document.getElementById("mastercardbutton");
    const paypalbutton = document.getElementById("paypalbutton");
    */

    /*
    if(myCheckBox.checked){
console.log("You are subscribed");
    }
    else{
console.log("You are NOT subscribed");
    }
    */

    /*
    if(visabutton.checked){
        console.log("You are paying with a Visa");
    }
    else if(mastercardbutton.checked){
        console.log("You are paying with Mastercard");
    }
    else if(paypalbutton.checked){
        console.log("You are paying with Paypal");
    }
    else{
        console.log("You must select a payment method first");
    }
    */
//}

/*
let grade ="Jopa";

switch(grade){
    case "A":
        console.log("You did amazing");
        break;
    case "B":
        console.log("You did good");
        break;
    case "C":
        console.log("You did okay");
        break;
    case "D":
        console.log("You did bad");
        break;
    case "F":
        console.log("You did awful");
        break;
        default:
        console.log(grade, "is not a letter grade");
}
*/

//AND 

/*
let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
    console.log("The temperature is ideal");
}
else{
    console.log("The temperature is not ideal");
}
*/

/*
if(temp <= 0 || temp >= 30 && sunny){
    console.log("The temperature is not ideal");
}
else{
    console.log("The temperature is ideal");
}
*/

/*
let temp = 15;
let sunny = true;

if(!(temp > 0)){
    console.log("The temperature is cold");
}
else{
    console.log("The temperature is warm");
}
if(!sunny){
    console.log("It is cloudy");
}
else{
    console.log("It is sunny");
}
*/

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello, ", userName);










