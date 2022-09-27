/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code
//write a loop to go through each individual item in the array

let i = 0; // or you can use ctr

while(i < students.length){
   console.log(i);
   console.log(students[i]);
   i++;
}

  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

  let gradesReverse = grades.reverse();
  i = 0; // or you can use ctr

while(i < gradesReverse.length){
  console.log(i);
   console.log(gradesReverse[i]);
   i++;
}

  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code
  const even = positiveNumbers.filter(number => {
    return number % 2 === 0;
  });

  console.log (even);
 
  i = 0
 while(i < even.length){
  console.log(even[i]);
  i++;
 }



  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  const evenNum = mixedSignNumbers.filter(number => {
    return number % 2 === 0;
  });
  
  console.log (evenNum);
 
  i = 0
 while(i < evenNum.length){
  console.log(evenNum[i]);
  i++;
 }
  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
// .pop() removes an item from the end of an array
// .shift() removes item from array
//.slice

let noFirstLast = symmetricalCapitals.slice(1,-1);
console.log(noFirstLast);

i = 0
while(i < noFirstLast.length){
  console.log(i);
  console.log(symmetricalCapitals[i]);
  i++;
}


  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  //myArray.unshift("Monkey");
  //.push()
  
fibonacciNumbers.unshift(14); 
fibonacciNumbers.push(45, 50);
console.log(fibonacciNumbers);

i = 0;
while(i < fibonacciNumbers.length){
  console.log(fibonacciNumbers[i]);
  i++;
}

  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code

  const riceRoni = ["rice", "onion", "parsley", "garlic", "chives", "chili"];
  console.log(riceRoni);

  i = 0; // or you can use ctr

  while(i < riceRoni.length){
     console.log(i);
     console.log(riceRoni[i]);
     i++;
  }


  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code

  //myArray.unshift("Monkey");
  //.push()
  
  emptyArray.unshift("smoothy", "milkshake", "beer"); 
  emptyArray.push("frappe", "coffee", "matcha");
    console.log(emptyArray);

  i = 0
  while(i < emptyArray.length){
    console.log(i);
    console.log(emptyArray[i]);
    i++;
  }


  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  
  i = 3
  while(i < 11){
    console.log(i);
    console.log(students[i]);
    i++;
 }

//let newStudents = students.slice(2,-3);
//console.log(newStudents);



  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code
  

  const students1 = ["Ilyas", "Greg", "Fernando", "Timothy", 
"Patrick", "Steve", "Jimothy", "Pat"];
   
    students1.unshift("Tre", "Sonny", "Crystal"); 
    students1.push("Arnold", "Andy");
      console.log(students1);
  
    i = 0
    while(i < students1.length){
      console.log(i);
      console.log(students1[i]);
      i++;
    }
 
  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  let students2 = students.slice(3,-2);
  console.log(students2);

  i = 0
  while(i < students2.length){
    console.log(i);
    console.log(students2[i]);
    i++;
  }

//let newStudents1 = students2.slice(2,-3);
//console.log(newStudents1);




  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

  let splicedDino = dinosaurs.splice(4, 3);
  console.log(splicedDino);
  
i = 0
while(i < dinosaurs.length){
console.log(dinosaurs[i]);
i++;
}

console.log(dinosaurs);

  
  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code
  
  console.log(dinosaurs.join("*"));

  console.log(dinosaurs);

 // .join(" ") -separates them by a space instead of a comma. you can chang what's inside the () to whatever you want

 //console.log(myArray.join()); //commas
 //console.log(myArray.join(" ")); // spaces
 //console.log(myArray.join("_")); // underscors
 //console.log(myArray.join("")); //no spaces between
 //console.log(myArray.join(" Hi ")); //concats into this sentence. "Dog Hi Cat Hi Deer Hi Bear Hi Bird"
 //console.log(myArray); // returns the array


  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

console.log(dinosaurs.reverse());
  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code


  const disney = ["Mickey", "Donald", "Dumbo", "Goofy"]
  const princess = ["Ariel", "Jasmine", "Cinderella", "Elsa"]

  let disneyPrincess = disney.concat(princess);
  console.log(disneyPrincess);
  console.log(disney);
  console.log(princess);


  console.log("\n");
  
  i = 0;
  while(i < disneyPrincess.length){

    console.log(disneyPrincess[i]);
    i++;

  }

  console.log("\n");


  i = 0;
  while(i < disney.length){

    console.log(disney[i]);
    i++;

  }

  console.log("\n");

  i = 0;
  while(i < princess.length){

    console.log(princess[i]);
    i++;

  }