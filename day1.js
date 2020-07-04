// Here i will use array some methods 


var my_array = [2 ,"HI",3,3];



var person = {
    name: "shahid Khan",
    age: 22,
    city: "Rawalpindi",
    education:{
        matric: "APS School",
        FSC: "APS College",
        Unversity: "Comsats Islamabad"
    }
}

var example = {
    test: "pass"
}

//

console.log(person.education.Unversity);
var assosiative_array = [my_array , "shahid Khan", example];

for (let index = 0; index < assosiative_array.length; index++) {
    const element = assosiative_array[index];
    console.log(typeof (element));
    console.log(element);
    
}

for ( index = 0; index < my_array.length; index++) {
   console.log(my_array[index]);
    
}
console.log(my_array.join("\t"))
//  So here join opertaor diiplay all element with separator between each element
console.log(typeof(my_array));


my_array.push(22);
console.log(my_array);
my_array.pop(my_array[my_array.length - 1]);
console.log(my_array);
// we can also use shift eleement to remove first element of array other element index will be changed

// by using unshoft element we can add elemenet to first index 
// like array_name.unshift(element to be added);


// using delete will remove element but it will cause undefined index if array so it is not recommended





// console.log()



// Now array to string method

console.log((assosiative_array.toString()));



// For each finction in javascript

const apps = ['WhatsApp', 'Instagram', 'Facebook'];
const playStore = [];

var index = 2;
apps.forEach(function(item){
  playStore.push(item)
});

console.log(playStore);



// for each function in javascript apply function on every element of array without using loop ////

// array map function 



let map_array = my_array.map(myfunction)

function myfunction(item){
  return item + 2;  
};

console.log(map_array);
console.log(my_array);



// so map array returns array without efffecting origional array .... speeed of map method is fast


