// Chapter:15 Array:-
var a = ["mango","apple","banana","grapes","cherry","orange"];
a [6] = "pomegranate";
console.log(a);

// Chapter:16 Arrays:Adding and removing element:-

var pets = [];

pets[0] = "snake";
pets[1] ="dog";
pets[2] = "cat";
pets[3] = "birds";

pets.pop();
pets.push("fish","lion");
console.log(pets);

// Chapter:17 Arrays:Removing, inserting,and extracting elements:-

var pets = [];

pets[0] = "snake";
pets[1] ="dog";
pets[2] = "cat";
pets[3] = "birds";

pets.shift();
pets.unshift("fish","snake");
console.log(pets);

var pets = [];

pets[0] = "snake";
pets[1] ="dog";

pets[2] = "cat";
pets[3] = "birds";

pets.splice(2 ,0, "duck","pigeon")
console.log(pets);

var pets = [];

pets[0] = "cat";
pets[1] ="dog";
pets[2] = "fly";
pets[3] = "ox";
pets[4] = "emu";

pets.splice(2,2);
console.log(pets);

var pets = [];
var nopets =[];

pets[0] = "cat";
pets[1] = "dog";
pets[2] = "fly";
pets[3] = "ox";
pets[4] = "emu";

nopets=pets.slice(2,4);
console.log(nopets);

// Chapter:18 for loops:-

for (var i = 0; i < 5; i++) {
    console.log("Hello World");
}

var cities = ["Lahore","Islamabad","Multan","Quetta","Peshawar","Karachi"];

for (var i = 0; i < cities.length; i++){
    if(cities[i] === "Karachi"){
        alert("Karachi is a cleanest city!")
    }
}

// Chapter 19: for loops: Flags, Booleans, array length,and loopus interruptus:-

var cities = ["Lahore","Islamabad","Multan","Quetta","Peshawar","Karachi"];

for (var i = 0; i < cities.length; i++){
    if(cities[i] === "Islamabad"){
        alert("Islamabad is a cleanest city!")
        break;
    }
}

// Chapter:20 for loops nested:-

var firstname = ["Sufyan","Affan","Abdullah"];
var lastname = ["Sohail","Shahid","Sabir"];
var fullname = [];

for (var i = 0; i < firstname.length; i++){
    for (var j = 0; i < lastname.length; j++){
        fullname.push(firstname[i] + lastname[j]);
    }
}
