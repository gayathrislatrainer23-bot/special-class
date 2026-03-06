//  flatten nested array
// let arr1 =[[23,45],3,67,[45,78]]
// console.log(Array.isArray(arr1))
// let flattened =[]
// for(i=0;i<arr1.length;i++){
//    if(!Array.isArray(arr1[i])){
// flattened.push(arr1[i])
//    }else{
//        for(let j of arr1[i]){
//         flattened.push(j)
//     }
//    }
// }



// console.log(flattened)

// let myMap = function(arr,method){
//     let result =[]
// for(let n of arr){
//    result.push( method(n))
// }
// return result
// }

// let addTwo =(n)=>{
// return n+2
// }
// console.log(myMap([1,2], addTwo))


// let count =10
//  let coutTimer = setInterval(()=>{
//     console.log(count)
// count--
// if(count < 0){
//     clearInterval(coutTimer)
// }
//  },1000)


//  sort an array

function sortArray(arr){
for(let i=0;i<arr.length;i++){

let temp ;
for(let j=0;j<arr.length;j++){
if(arr[i]<arr[j] && i!==j){

    temp = arr[i]
    arr[i]= arr[j]
    arr[j] =temp
   
}
}
}
return arr
}
console.log(sortArray([34,45,23,2,1]))

// Given an array of numbers, print only the numbers that are both even AND greater than 20 using a loop (no filter method).
let arr6 = [45,22,66,80,99,1,2]
let filtedNums =[]
for(let i =0;i<arr6.length ;i++){
    if(arr6[i]%2 ===0 && arr6[i]>20){
        // console.log(arr6[i])
        filtedNums[filtedNums.length]= arr6[i]
    }
}
console.log(filtedNums)

// 2. Loop + Accumulator (Count Categories)
// You are given an array of student marks.
//  Write a loop that counts:
// how many students passed (≥ 40)

// how many failed (< 40)
let arr7 =[20,40,44,56,89,23,34,67,6,43]
let numOfPassedStudents = 0
let numOfFailedStudents = 0

for(let i=0;i<arr7.length;i++){
    if(arr7[i]>=40){
numOfPassedStudents++
    }else{
numOfFailedStudents++
    }

}
console.log(numOfPassedStudents,"is passed ")
console.log(numOfFailedStudents,"is failed ")

// Given an array of products:
// [{name:"Pen", price:20}, {name:"Book", price:80}, {name:"Bag", price:500}]

// Print all product names where price is < 100 using a loop.

let arr8 =[{name:"Pen", price:20}, {name:"Book", price:80}, {name:"Bag", price:500}]
for(let i=0;i<arr8.length;i++){
if(arr8[i].price<100){
    console.log("product less than 100:", arr8[i].name)
}
}