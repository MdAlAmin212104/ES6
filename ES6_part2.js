//tasks 1 : console.log the secondary school location of shopia

let data ={
      shopia :{
            id: 33,
            study : [
                  {
                        primary : [
                             { school_name : "ABC primary school"},
                             { location : "peters burg" }
                        ]
                  },
                  {
                        secondary : [
                              { school_name : "ABC secondary school"},
                              { location : "Ranachandi School"}
                        ]
                  }
            ]
      }
}

//console.log(data.shopia.study[1].secondary[1].location);


//task 2 : console log petersburg and Herry
let students = {
      2222 :{
            name : "jack",
            section : "C",
            class : "IX",
            address : {
                  "building no" : 12,
                  "street" : "St Jonson",
                  "city" : "petersburg",
                  "country" : "UK"
            }
      },
      3333 : {
            name : "Herry",
            section : "D",
            class : "x",
            address : {
                  "building no" : 85,
                  "street" : "DC Road",
                  "city" : "kakurhat",
                  "country" : "bangladesh"
            }
      }
}
// console.log(students[2222].address['city']);
// console.log(students[3333].name);

// task -3 : output habluder adda and Beginner;

let data2 ={
      data :[
            {
                  bookId : 1,
                  bookDetails : {
                        book : "habluder adda",
                        category : "XYZ",
                        price : "20$"
                  },
                  bookCategory : "Basic",
            },
            {
                  bookId : 2,
                  bookDetails : {
                        book : "gabluder adda",
                        category : "ABC",
                        price : "40$"
                  },
                  bookCategory : "beginner",
            },

      ]
}

// console.log(data2.data[0].bookDetails.book);
// console.log(data2.data[1].bookCategory);

// task -4 

// using map property
let number =[1,3,5,7,9];
const result = number.map(n=> n+1);
//console.log(result);


const count = (array) => {
      let newArray = [];
      for (const n of array){
            const count = n+1;
            newArray.push(count);
      }
      return newArray;
}
//console.log(count(number));

// task using filter property

const number1 = [33, 50, 79, 78, 90, 101, 30];
const output = number1.filter(n => n%10 === 0);
const output1 = number1.find(n => n%10 === 0);
//console.log(output, output1);


// task using filter with object property

const instructor = [
      {name : "Nodi", age : 28, position : "senior"},
      {name : "Akil", age : 26, position : "junior"},
      {name : "Shobuj", age : 38, position : "senior"},
]

const position = instructor.filter(position => position.position == "senior");
//console.log(position);

// task using reduce property

const people =[
      {name : "Meena", age : 20},
      {name : "Rahim", age : 15},
      {name : "Karim", age : 22}
]

const sum = people.reduce((accumulator, current) => accumulator + current.age, 0);
console.log(sum);