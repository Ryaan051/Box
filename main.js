
// if statement 
// syntax
//  let age = 13
//  if (age > 15){
//    console.log("You are adult ")
//  }
//  let age = 13
//  if (age >= 15){
//    console.log("You are adult ")
//  }
//  let age = 13
//  if (age <= 15){
//    console.log("You are adult ")
//  }

//  let name = "Aisha"
//  if (name == "Rayan"){
//     document.write("So dhawoow")
//  }
//  else {
//     document.write("Go back")
//  }


//  let pass = 9197
//  if (pass == 9197){
//     document.write("So dhawoow")
//  }
//  else {
//     document.write("Go back")
//  }

//  let email = "Ali@gmail.com"
//  let password = 9197

//  if (email == "Ali@gmail.com" && password == 9197){
//     document.write("Soo dhawoow Ali")
//  }
//  else{
//     document.write("Go back, try again")
//  }

// let name = "Ali"

// if (name == "Rayan" || name == "Abdi"){
//     console.log("So dhawoow")
// }
// else{
//     console.log("Laguma Yaqano . Go back")
// }


//for loop
// for (let num = 0; num <=5 ;num++){
//     document.write(num,"Rayan","<br>")
// }

//Do while loop
// let num =1
// do{
//     num+=1;
//     document.write(num)
// }while(num<5)

//function

// function sayhi(){
//     document.write("Hello Geedi <br>")
// }
// function age(){
//     document.write(20, "<br>")
// }
// sayhi()
// age()



// function addition(){
//     let num1 = 20
//     let num2 = 200
//     document.write(num1+num2 ,"<br>")
// }
// addition()


// function Multiple(){
//     let num1 = 30
//     let num2 = 7   
//     let num3 = 20
//     document.write(num1*num2*num3)
// }
// Multiple()


// function subtract(){
//     let num1 = prompt("Enter your number one")
//     let num2 = prompt("Enter your number two")
//     document.write(num1-num2)
// }
// subtract()

// function divide(){
//     let num1 = prompt("Enter your number one")
//     let num2 = prompt("Enter your number two")
//     document.write(num1/num2)
// }
// divide()


//Parameter vs Argument

// function myName(name , age){
//     document.write(name , "<br>" ,age)
// }
// myName("Rayan", 90)

// function theirNames(name,age,address){
//     document.write(name ,age ,address , "<br>")
// }
// theirNames("Rayan :",50 ,"  Madiina")
// theirNames("Samira :",40 ,"  Hodan")
// theirNames("Kowther :",30 ,"  Yaaqshid")
// theirNames("Nasteha :",20 ,"  Xmar jadid")

//function with return

// function addition(num1,num2){
//     return num1+num2
// }
// document.write(addition(100,5))



// //FAT 
// let sayHi=()=>{
//     document.write("Hello World")
// }
// sayHi

// Elements: data array uu noo haayo
//Index position data mesha ay tgan thay

// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda",0.0099,20,8.9]
// let num = 0
// while(num < names.length){
// document.write( names[num] ,"<br>" )
// num++
// }

// Join function
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// let addition = names.join("+")
// document.write(addition)

//pop remove the last element from array
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.pop()
// document.write(names)


//push add the last element from array
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.push("Ayan")
// document.write(names)

// shift remove the first element from array
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.shift()
// document.write(names)


// unshift add the first element from array
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.unshift("Ahmed")
// document.write(names)

// sort wxa wye siday xarfaha ukala horeyan A-Z
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.sort()
// document.write(names)

// reverse kla gedi
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.reverse()
// document.write(names)

//splice remove/add every where in the element from array
// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.splice(2,1)
// document.write(names)

// let names = ["Ali","Asli","Aisha","Hanad","Hassan","Hamda"]
// names.splice(3,0,"Ayan")
// document.write(names)

//  forEach
// let fruits = ["Mango","Cherry","Blueberry","Kiwi","Mangosteen"]
// fruits.forEach(function(item){
//     document.write(item, "<br>")
// })

// filter method
// let age = [10,29,30,49,98]
// let below10 = age.filter(function(newAge){
//     return newAge > 10
// })
// document.write(below10)


// let names = ["Rayan","Hawa","Ali","Ahmed"]
// let nameRayan = names.filter(function(newName){
//     return newName == "Ahmed"
// })
// document.write(nameRayan)

// Map function is same as loop.
// let names = ["Hassan", "Hussein" ,"Anas"]
// names.map(function(items){
//     document.write(items , "<br>")
// })


// //By Id
// let elementh1 = document.getElementById("title")
// console.log(elementh1)

// //By TagName
// let btn = document.getElementsByTagName("button")[0]
// console.log(btn)

// //By ClassName
// let para = document.getElementsByClassName("section")[0]
// console.log(para)

// //By QuerySelector
// let elementh5 = document.querySelector("h5")
// console.log(elementh5)

// let heading = document.querySelector("#hero")

// heading.innerHTML = "Waa JavaScript....Hello"
// heading.style.color = "purple"


// let paragraphy = document.querySelector(".para")

// paragraphy.innerHTML = "wxa ku sameye js dhexdeda"
// paragraphy.style.color = "purple"
// paragraphy.style.backgroundColor = "cyan"
// paragraphy.style.fontSize = "20px"
// paragraphy.style.paddingTop = "15px"


////Assignment One on JAVASCRIPT
// let container = document.querySelector(".one");
// container.style.display = "flex";
// container.style.gap = "50px";  
// container.style.margin = "60px";

// let firstElement = document.querySelector(".first");


// firstElement.style.display = "flex";
// firstElement.style.height = "250px"; 
// firstElement.style.width = "200px";
// firstElement.style.border = "7px solid red"; 
// firstElement.style.borderRadius="20px"; 


// let centerElement = document.querySelector(".center");

// centerElement.style.display = "flex";
// centerElement.style.height = "250px"; 
// centerElement.style.width = "200px";
// centerElement.style.border = "7px solid blue";  
// centerElement.style.borderRadius="20px"; 

 

// let lastElement = document.querySelector(".last");

 
// lastElement.style.display = "flex";
// lastElement.style.height = "250px";   
// lastElement.style.width = "200px";
// lastElement.style.border = "7px solid yellow";  
// lastElement.style.borderRadius="20px";

// let button = document.querySelector(".btn")
// button.addEventListener("click",function(){
//     document.body.style.backgroundColor = "purple"
// })

let box = document.querySelector("#light")
let button1 = document.querySelector("#btnOn")
let button2 = document.querySelector("#btnOff")

button1.addEventListener("click",function(){
    box.style.backgroundColor = "yellow"
})

button2.addEventListener("click",function(){
    box.style.backgroundColor = "transparent"
})