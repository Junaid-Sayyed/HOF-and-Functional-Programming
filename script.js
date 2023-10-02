// // Array.prptotype.push()

// console.log(count);

// Array.prototype.unshift()

// const animals = ['pigs', 'goats', 'sheeps'];
// const count = animals.unshift ('checken');   
// console.log(count);
// console.log(animals);

// const myNumber = [1,2,3,5];
// myNumber.unshift(4,6);
// console.log(myNumber);

// Array.prototype.pop()

// const plants = ['kale','tomato', 'potato'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// Array.prototype.shift()

// const plants = ['kale','tomato', 'potato'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// # challange time 

//  const months = ['jan' , 'march' , 'april' , 'july'];
//  const addEnd = months.push("Dec");
//  console.log(addEnd);
//  console.log(months);

// const months = ['jan' , 'march' , 'april' , 'july'];
// const updateMonth = month.splice (1,1,"March");
// console.log(months);

// const month = ['jan' , 'March' , 'april' , 'july'];
// const indexOfMonth= month.indexOf('March');
// if (indexOfMonth!= -1) {
// const updateMonth= month.splice(indexOfMonth,1,'march');
// console.log(month);

// }else{
//     console.log('No Such Data Found');
// }



// const month = ['jan' , 'March' , 'april' ,'june' , 'july'];
// const indexOfMonth= month.indexOf('april'/ 'june');
// if (indexOfMonth!= -1) {
// const updateMonth= month.splice(indexOfMonth);         problem
// console.log(month);

// }else{
//     console.log('No Such Data Found');
// }

// // Array.prototype.map()
// const arr1 =[1,4,9,16,25];
// let newArr = arr1.map((curElm,index, arr) => {
//     return curElm > 9;})
//     console.log(arr1);
//     console.log(newArr);


//     const arr1 =[1,4,9,16,25];
// let newArr = arr1.map((curElem,index, arr) => {
//     return `indexno= ${index} and the value is ${curElem} belong to ${arr} ` })
//         console.log(newArr);


// challange time

// let arr = [25,36,49,64,81];
// let arrSqr = arr.map((curElem) => {
//     return Math.sqrt(curElem);
// })
// console.log(arrSqr);

// let arr = [2,3,4,6,8];
// let arr2 = arr.map((curElm) => {
//     return curElm*2;
//  }).filter((curElm) => {   
//     return curElm > 10;
// })
// console.log(arr2);

      //   or

    //   let arr = [2,3,4,6,8];
    //   let arr2 = arr.map ((curElm) => curElm*2).filter((curElm) => curElm>10);
    //   console.log(arr2)



