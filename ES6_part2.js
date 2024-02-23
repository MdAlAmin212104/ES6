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

console.log(data2.data[0].bookDetails.book);
console.log(data2.data[1].bookCategory);