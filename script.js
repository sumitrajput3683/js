 // output
// alert("hello world ")
// window.alert("hello world ")

// console.log("hello world")

// document.write("ello world")

//

// console.log(hisName);

// var myName = "sumit rajput"
// var age = 24;
// var isMale = true;
// var hisHeight = 1.80
// var interests = ["a","b","c"]
// var aboutMe = {
//     name : "sumit rajput",
//     age : 24
// }

// console.log(typeof myName)
// console.log(typeof age)
// console.log(typeof isMale)
// console.log(typeof hisHeight)
// console.log(typeof interests)
// console.log(typeof aboutMe)

// strings

// var hisName = prompt("enter your name here : " , "your name here")

// var interests = ["a","b","c"]
// interests[1] = "rohan sharma"
// console.log(interests)
// console.log(hisName[5]);

// console.log(hisName.length);
// console.log(hisName[5]);

// var myName = "Sumit Rajput"

// console.log(myName.slice(2,5))
// console.log(myName.substring(9,2))
// console.log(myName.toLowerCase())
// console.log(myName.toUpperCase())

// console.log(myName.replace("Rajput", "kumar"))
// console.log(myName.endsWith("d"))

// arithmetic operators
// var a = 12;
// var b = 3;

// console.log(a*b);
// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a%b);

// console.log(++a)
// console.log(--a)

//  if(12> 15){
// console.log("i won");
// }else{
// console.log("lost");
// }

// var age = Number(prompt("Enter your age : ", "Age"))
// if (age > 18 ){
//     console.log("Eligible for vote");
// }else{
//     console.log("not eligible for vote");
// }

//  console.log("10"+"10");
// console.log(10+10);

// var age = Number(prompt("Enetr your age;", "age"));
// if (age<18){
//     console.log("Not eligibe for cast vote");
// }else{
//     console.log("Eligible for caste vote");
// }

// if (age > 60) {
//   console.log("not fit to vote");
// } else if (age > 18) {
//   alert("eligible  to vote");
// } else {
//   alert("not eligible to vote");
// }

// var day = prompt("enter a day : ", "Monday - sunday").toLowerCase()
// if(day === "monday"){
//     console.log("it's a working day");
// }
// else if(day === "tuesday"){
//     console.log("it's a working day");
// }
// else if(day === "wednesday"){
//     console.log("it's a working day");
// }
// else if(day === "thursday"){
//     console.log("it's a working day");
// }
// else if(day === "friday"){
//     console.log("it's a working day");
// }
// else if(day === "saturday"){
//     console.log("it's not a working day");
// }
// else if(day === "sunday"){
//     console.log("it's not a working day");
// }
// else{
//     console.log("not a valid value");
// }
  
// var month = prompt("enter a month: ","jan - dec").toLowerCase()
// if(month==="jan"){
// console.log("its a month");
// } 
// else if(month==="feb"){
//     console.log("its a month");
// }
// else if(month==="mar")
// console.log("its a month");
// else{
//     console.log("its not a month");
// }

// loops

// for lops

// var name = "rohan"
// for (var i = 0; i < 100; i++) {
//   console.log(`${name},the value of i is ${i}`);
// }

// for( var i=1; i<11; i++){
//     var num = 2;
//    var result = num * i
//    console.log(`${num} * ${i} = ${result} `);
// }

// for( var i=1; i<11; i++ ){
//     var num = 5;
//     var result = num + i
//     console.log(`${num} + ${i} = ${result}`);
// }

// while loops

// var i=0;
// while(i<100){
//     console.log(i);
//     i++
// }

// var i = 1;
// while(i <  11){
//     var num = 2;
//     var result = num * i
//     console.log(`${num} * ${i} = ${result}`)
//     i++;
// }

// var i = 0 ;
// while (i<100) {
//      console.log(`the value of i is : ${i}`);
//      i++;
// }

//     fUNCTION

// function greet() {
// alert("hello world")
// }

// // greet() 

// function greet(fullName) {
//     alert(`good morning ! ${fullName}`)
// }

// greet("Sumit Rajput")

// var greet = function (params) {
//  alert("hello world")
// }

// console.log(typeof greet);
// greet()

// const greet = (name)=>{
//     alert("hello world " + name)
// }
// greet("Sumit Rajput")


// intialization ; condition ; increment

// for(var i = 0 ;i < 18 ; i++){
//   console.log(`the value of i is : ${i}`)
//  }

// var i = 0;

// while (i < 10) {
//   console.log(`the value of i is : ${i}`);
//   i++;
// }

// var i = 0;
// do {
//   i ++;
//   console.log(`the value of i is ${i}`);
// }while(i < 10)

//     calculate space
// var aboutme = "my name is sumit rajput"
// for (var i = 0 ; i <  aboutme.length ; i++){
//     if (aboutme[i] == " "){
//         console.log("space is there")
//     }
//     else{
//         console.log("no space")
//     }
// }

// // to find out month,weeks,days
// var cy = new Date().getFullYear()
// // console.log(cy)
// var average_age = 90
// var dob = Number(prompt("Enter your birth Year : ", "Birth Year"))
// var age = cy - dob
// var yearsleft = average_age - age
// var month = yearsleft * 12
// var days = yearsleft * 365
// var week = yearsleft * 7
// console.log(`Years left ${yearsleft}  weeks left ${week} month left ${month} days left ${days} `)


// 16/8/2022

// to calculate the length and find the serial number of letter

// var myName = "my name is sumit rajput"
// console.log(myName.length)
// console.log(myName[19]);

//    complete

// to make a calculator that's name is bmi

// bmi calculator
// conditions
// underweight = <18.5
// normalweight = 18.5 - 24.9
// overweight = 25 - 29.9
// // obesity = bmi of 30 or greater

// const bmicalculator = ()=>{
// var height = Number(prompt("enter your height : ","in meters"))
// var weight = Number(prompt("enter your weight : ","in kilograms"))
// var bmi = weight/(height*height)
// if(bmi<18.5){
//     console.log(`you are underweight as your bmi is ${bmi}`)
// }
// else if (bmi>18.5 && bmi <24.9){
//     console.log(`your weight is normal as your bmi is ${bmi}`)
// }
// else if (bmi>=25 && bmi <= 29.9){
//     console.log(`you are overweight as your bmi is ${bmi}`)
// }
// else if(bmi >= 30){
//     console.log(`you are obesse as your bmi is ${bmi}`)
// }
// }

// bmicalculator()

// complete

// to find out this is leap year or not

// var checkly = ()=>{
//     var year = Number(prompt("enter your year :","year"));
// if(year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log(year + `is a leap year`);
//         }else{
//             console.log(year + `is not a leap year`);
//     }
//     }else{
//         console.log(year +`is a leap year`);
//     }
// }else{
//     console.log(year +`is not a leap year`);
// }
// }
// checkly()

// complete

// to count the year month days week when average is given

// given
// averageage = 90

// var lifespain = ()=>{
//     var yob = Number(prompt("enter your birth year","year"))
//     var cy = new Date().getFullYear()
//     var age = cy-yob
//     var averageage = 90
//     var yearsleft = averageage-age
//      console.log(`year left ${yearsleft}
//      month left ${yearsleft*12}
//      week left ${yearsleft*52}
//      days left ${yearsleft*365}`)
// }

// lifespain()

// complete

// array method in javascript
// Pop,push,splice/slice,shift,unshift,merging

// var cars = ["sentro","nano","bolero",12,true,0.5]
// console.log(cars.push("hello world"))
// console.log(cars)

// console.log(cars.pop())
// console.log(cars)

// console.log(cars.unshift("bye bye world"))
// console.log(cars)

// console.log(cars.shift())
// console.log(cars)

// console.log(cars.slice(0,4))
// console.log(cars);

// cars.splice(2,1,"maruti","honda")
// console.log(cars)
// merging

// var myName = ["sumit",25,"amit"]
// var surname = [...myName,"rajput",12,"rajput"]
// console.log(surname);

// complete

// array in loops
// var banks = ["sbi", "pun", 2, true];
// for loop

// var i = 0
// for(var i = 0; i < banks.length;i++){
//     console.log(banks[i])
// }

// while loop

// var i = 0;
// while(i < banks.length){
//     console.log(banks[i]);
// i++;
// }

// do while

// var i = 0;
// do{console.log(banks[i]);
//     i++;
// }
// while(i < banks.length){
//     console.log(banks[i]);
//     i++;
// }

// complete

// JAVA SCRIPT OBJECT

// var cars ={
//     carName :"alto",
//     brand : "suzuki",
//     year : 1998,
//     clearence :1.5,
//     details : ()=>{
//         alert("in a function inside a car")
//         console.log(cars["carName"])
//         // console.log(cars.brand);
//     }
// }

// concept of this

// var cars ={
//     carName : "alto",
//     brand : "suzuki",
//     year : 1998,
//     clearence : 1.5,
//     details: function(){
//         console.log(this)
//     }
// }
// here this is called a global object

// var cars ={
//     carName:"alto",
//     brand:"suzuki",
//     year:1998,
//     clearence:1.5,
//     details :function(){
//         console.log(this);
//         alert("in a function inside a car")
//     }
// }

// var cars ={
//     carName:"alto",
//     brand:"suzuki",
//     year:1998,
//     clearence:1.8,
//     details : function(){
//         console.log(
//             `carname : ${this.carName}\nbrand:${this.brand}\nyear:${this.year}\nclearence:${this.clearence}`
//         );
// //     }
// // }
// // another example 
// class Book {
//   bookName = "the last lesson";
//   author = "alexabird";
//   releaseYear = 1996;
//   cy = new Date().getFullYear();
//   age = this.cy - this.releaseYear
//   details = ()=>{
//     console.log(`name:${this.bookName}\nauthor:${this.author}\nreleaseYear:${this.releaseYear}\nage:{this.age}`)
//   }
// }
// var mybook =new Book();
// console.log(mybook);
// mybook.details()

// complete


// OBJECT CONSTRUCTOR


// class Person{
//     constructor(name,age,gender){
//         this.personName = name;
//         this.personAge = age;
//         this.personGender = gender;
//     }
//     details = ()=>{
//                 alert(`Name:${this.personName}\nage:${this.personAge}\ngender:${this.personGender}`)
//     }
// }

// var sumit = new Person("sumit",23,"male")


// Person.prototype.nationality = "indian"
// Person.prototype.caste = "RAJPUT"
// console.log(sumit)


// DOCUMENT OBJECT MODEL
// IN THIS MODEL WE ALWAYS USE CAMEL CaSING

// BY ID

// var title = document.getElementById("title")
// console.log(title);

// by class

// var paras = document.getElementsByClassName("para")[0]
// console.log(paras);

// // tag Name

// var raj = document.getElementsByTagName("h1")
// console.log(raj[0].innerText);

// queryselector

// var time = document.querySelector(".para")
// console.log(time);

// queryselectorall

// var time = document.querySelectorAll("#title")
// console.log(time[0].innerText);

// complete



// INNER HTML V/S INNER TEXT

// var title = document.getElementById("title")
// console.log(title.innerText);
// console.log(title.innerHTML);


// coomplete

       // SET         

// const title = document.querySelector("#title")
// title.innerText = "<b>my name </b> is sumit"
// title.innerHTML = "<b>my name </b> is sumit"
// title.style = "border: 5px solid green"
// console.log(title.style);

// complete

// link (attribute)


// var link = document.getElementById("link")

// link.setAttribute("href","https://www.google.com")
// console.log(link.getAttributeNS("href"))


// complete


// TASK BULB (ON/OFF)

// const bulb = document.getElementById("bulb")

// const on =()=>{
//        bulb.setAttribute("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAVQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADUQAAEDAgQDBQYFBQAAAAAAAAEAAgMEEQUSITETUWEiMkFxsQaBkaHR8BQjQmLhMzRScsH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APuKIiAiHTdQn1hebUwaR/m7b3DxQTUVf+Y4duV58jl9FjKRqJJQf9yfVBYoq9tRPFa9pm9bB3x29FMgmZOzMw7aEEWIPVB0REQEREBEXKqk4UD3DvWsPPYII1TJx3uhb/TabO/ceXkgbbYLaliDWDkF0cN0HGyWW1kQaLjI18buNCbPaNjs4cipOW6yY7g2QdqadlRC2WPY+B3B8QV1VXh7jFXSwE9mVvEaOosD6tVogIiICjV3cjHgZBdSVHrmk07iP0Wd8Cg2Z3BZazZgzskA3FyRfRYifdvRZdrugjmN2bWV9uVgB6LDoWkjWTzEjvqtg4iIkDM5t9OZC1ikdI6zoi0Ab3FkGzWPY9mWRzgTqHAaBShZcYzdxPLT7+/BdLgNJKCG/s4rS/uzj5XVmqyE8bFgLX4EVyeRcbD5AqzQEREBYIuLLKIIMbTC50B/Tq08x96Los1zSI+M0XdFr5jxH3yXNriW5hqDsg12mLfBwuPMaH/iwHBjXuPgLrSqe6N0Trfrt8QR62UWKoMjY7SMlDpWtJYLWIF/ognxgxsDSbkb+a1nmZDC+aU9loWcrrE2KjRH8biOUgmGkIJ00Mh2HuGvvCCZhlM6CFz5R+dM7PJ05D3CwUxEQEREBERBg6ixUOgFqVgPg0Kaq6aZtCOGA9wA0DRc2+7/AAQc8UhdUcKFjshJL7+Q/lV9HSVVPKxzpOK1sjS7a9u6PADQe9ZqsfpqeZks8dQ1jWOB/LvqbW8ehUFntbhs0csVPJKZiBkHCJ1CLr1pAyHyUPAmZaSR570k8rj17RA+QC5DF4XBgDZBxHBrA+MtuTsNVOoKb8JSshzZiCSTzJJJ9URIREQEREBERAVTjtmshflzPDjlAOu3p9VbKn9pP7eIXb375T49b8kHk/aCad1K+zKe/V5v6LymDSzMrw5wpx2vB4P0XpMcdEYXWdQHppqvLYW9sdfqKOPtbsd/KNPoVJM+fEKCNzQ9nEDyWEZgRtpfbmvZDZeLwu0+J0Lm5JMpvdrrOGm++o59F7REoiIiCIiAiIgKNX0oq6cxE2O7SRcX6hSUQfIfbCsqcFmMVdwY2u7r/wAJofJ2Wy83heL0stexkEwdPI6zQyn1J9zV93xPDKPFaN9HiNOyeB4sWPHzHI9VT+zfsRgXs3PLUYdTOM7zpJM7O5g5NJ2CRbXXAMMkbDDUV/amb2mAsDS35aeSvkREEREBERAREQEREBERAREQEREBERB//9k=")              
// }
// const off =()=>{
//        bulb.setAttribute("src","https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg")
// }


// complete



         // HTML DOCUMENT ADDEVENTLISTENER

// var title = document.getElementById("main")

// 1st way

// title.addEventListener("click",function(){
//        console.log("alert hello")
// })

// 2nd Way

// title.addEventListener("click",()=>{
//        console.log("alert hello")
// })

// 3rd way

// title.addEventListener("click",greet)

// function greet(){
//        alert("hello world")
// }



// exampple 2


// var last = document.getElementsByClassName("last")[0]
// last.addEventListener("click",()=>{
//        console.log("JAI HIND")
// })


// complete















