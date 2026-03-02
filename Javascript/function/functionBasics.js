// const readline = require('readline')
// const rl =readline.createInterface({
// input:process.stdin,
// output:process.stdout
// })
// rl.question('enter your name:', function(name){
//     console.log('hello' + name)
//     rl.close()
// })

// function greet() {
//   console.log("Hello, welcome!");
// }
// greet();
// Even or Odd Function
//  Create a function that takes a number and prints whether it’s even or odd.

function evenOrOdd(num){
    let msg ;
    if(num%2 === 0){
   msg = 'This is an even number'
        
    }else{
        msg = 'This is an odd number'
    }
    return  msg
}
let value = evenOrOdd(6)
console.log(value)

// let name = prompt("enter your name")
// console.log(name)

function sum(num){
    let sum1 = 0;
for(i=1;i<=num;i++){
    sum1 +=i
}
return sum1
}
let value1 = sum(2)
console.log(value1)

// Factorial Function
//  Write a function that returns the factorial of a number using a for loop

function factorial(num){
    let factorial=1;
    if(num === 0){
        return 1
    }
    for(i=1; i<=num;i++){
        factorial *= i
    }
    return factorial
}

console.log('factorial', factorial(10))

// Array Sum Function
//  Write a function that accepts an array and returns the sum of all numbers.

function arraySum(arr){
    let sum =0;
for(i=0; i<arr.length;i++){
sum += arr[i]
}
return sum
}
console.log('ArraySum', arraySum([2,5,44,50]))

// let arr = new Array
// console.log(arr)

// Largest of Three Numbers
//  Write a function that uses if-else to find the largest among 3 numbers.

function largest(num1,num2,num3){
let l = num1;
if(num2 > num3 && num2>num1){
    l= num2
}else if(num3 > num1 && num3>num2){
      l= num3
}else{
    l= num1
}
return l
}

console.log(largest(2,3,4))

function seconLargest(arr){
    let l = arr[0];
    let sl = arr[0];
        for(j=0; j<arr.length;j++){
            if(arr[j]>l){
                sl= l;
                l=arr[j]
            }
            if(arr[j]>sl && arr[j]<l){
                sl = arr[j]
            }
        }

    return [sl,l]

}

// console.log(seconLargest([30,40,50,60]))


let arr12 = [0,0,67,23,0,0,45,0,34,0]

for(let i=arr12.length-1;i>=0;i--){
    if(arr12[i]===0){
    for(let j=0;j<i;j++){
    // for(let j=i-1;j>=0;j--){
            let temp;
            if(arr12[j]!== 0){
                temp =arr12[j];
                arr12[j]=arr12[i]
                arr12[i]=temp
                break;
            }
        }
    }
}
console.log('arr12',arr12)
// empty an array
let arr13 = [5,3,45]
// arr13 =[]
// arr13.length = 0

// for(let i =0;i<arr13.length;i++){

// }