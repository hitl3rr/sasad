let Hesen = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];
  
  
  for (let i = 0; i < Hesen.length; i++) {
    let heello = Hesen[i];
    if (heello.age >= 18) {
      console.log(heello.name + " kinoya gede biler.");
    } else {
      console.log(heello.name + " kinoya gede bilmez.");
    }
  }
  