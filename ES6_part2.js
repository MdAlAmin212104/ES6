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

console.log(data.shopia.study[1].secondary[1].location);
