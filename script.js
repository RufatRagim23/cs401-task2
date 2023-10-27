//let fullName = "Rufat  Ragimov Mahir ";

//const myArray = fullName.split("");
//console.log(myArray);


//  let fullName = "Rufat Ragimov";
// function changeNamePlace(fullName) {
//     var names = fullName.split(/\s+/); 
//     if (names.length >= 2) {
//       var lastName = names.pop(); 
//       var firstName = names.join(" "); 
  
//       return  lastName + " " + firstName ;
//     } else {
//       return "O deyile";
//     }
//   }
  
  
//   var FullName = changeNamePlace(fullName);
  
//   console.log( fullName);
//   console.log(  FullName);
  




 


//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// function sum (arr, num) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === num) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const numberOfsum = sum(arr, 5);
//   console.log(numberOfsum);


// const sum = arr.reduce ((accumlator, value) =>  {
//     return accumlator + value;

// }, 0);
// console.log(sum);


// arr.sort(function(a, b){return a-b});
// console.log(arr);



// const maxNumber = Math.max(...arr);
// console.log(maxNumber);
// const count = arr.filter(num => num === maxNumber).length;
// console.log(count);


// let resultNumber = null;
// let resultIndex = -1;

// for (let i = 0; i < arr.length; i++) {
//   const number = arr[i];
//   if (number % 3 === 2) {
//     resultNumber = number;
//     resultIndex = i;
   
//      break; 
//   }
// }

// if (resultNumber !== null) {
//   console.log( resultNumber);
//   console.log(resultIndex);
// } else {
//   console.log();

//     }


// const isLargeNumber = (item) => item > 6 ;
// console.log(arr.findIndex(isLargeNumber));

// const targetNumber = 4;
// const sum = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === targetNumber) {
//     sum.push(i);
//   }
// }

// console.log(sum.join(", "));




// const targetNumber = 5;
// let minIndex = -1;
// let maxIndex = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === targetNumber) {
//     if (minIndex === -1) {
//       minIndex = i;
//     }
//     maxIndex = i;
//   }
// }

// if (minIndex !== -1) {
//   console.log(minIndex);
//   console.log(maxIndex);
// } else {
//   console.log();
// }


// const newArray = arr.filter(item => item > 2);
// const lengthDifference = newArray.length - arr.length;
//  console.log(newArray);
//  console.log(lengthDifference);


// const targetNumber = 7;
//  let indexSum = 0;

//  for ( let i = 0; i < arr.length; i++) {
//     if (arr[i] === targetNumber){
//         indexSum += i;
//     }
//  }
//   console.log(indexSum);



let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


// var  filtarr2 = arr2.filter(function(item){
//     return item.name.startsWith("t");

// });
// console.log(filtarr2);

// var count  = arr2.filter(function(item){
//    return item.name.startsWith("t")  && item.name.endsWith("t")
// });
// console.log(count);



// var count  = arr2.filter(function(item){
//     return item.name.startsWith("t")  && item.name.endsWith("t")
//  })
//  .reduce(function(total , item){
//     return total + item.key ;
//  }, 0);
//  console.log(count);


// for (var i = 0; i < arr2.length; i++) {
//     if ( arr2[i].name.endsWith("e")){
//         arr2[i].name = "SuperDev";

//     }
// }
//  console.log(arr2);



// var longestNameKey = null;
// var longestNameLength = 0;


// for (var i = 0; i < arr2.length; i++) {
//     var name = arr2[i].name;
//     if (name.length > longestNameLength) {
//         longestNameLength = name.length;
//         longestNameKey = arr2[i].key;
//     }
// }
 
// console.log(longestNameKey);



// var newArray = arr2.filter(function(item) {
//     return item.name.length === 4;
// })
// console.log(newArray);



// var maxKey = -Infinity;
// var maxKeyName = null;

// for (var i = 0; i < arr2.length; i++){
//     if (arr2[i].key > maxKey ){
//         maxKey = arr2[i].key;
//         maxKeyName = arr2[i].name;

//     }
// }
//  console.log(maxKeyName);

// var indexes = [];

// for (var i = 0; i < arr2.length; i++) {
//     var name = arr2[i].name;
//     var lCount = name.split('l').length - 1;

//     if (lCount >= 2) {
//         indexes.push(i);
//     }
// }
// console.log(indexes);


// var keys = [];

// for (var i = 0; i < arr2.length; i++) {
//     var name = arr2[i].name;
//     var tCount = (name.match(/t/g) || []).length; 

//     if (tCount >= 2) {
//         keys.push(arr2[i].key); 
//     }
// }

// console.log(keys)
