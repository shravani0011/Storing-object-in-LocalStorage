let myObj = {
    name: "Shravani", 
    age: 26
}; 
let myobj_serialized = JSON.stringify(myObj); 
localStorage.setItem("myObj", myobj_serialized); 
let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));  
console.log(myObj_deserialized);