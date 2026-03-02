//  flatten nested array
let arr1 =[[23,45],3,67,[45,78]]
console.log(Array.isArray(arr1))
let flattened =[]
for(i=0;i<arr1.length;i++){
   if(!Array.isArray(arr1[i])){
flattened.push(arr1[i])
   }else{
       for(let j of arr1[i]){
        flattened.push(j)
    }
   }
}



// console.log(flattened)

let myMap = function(arr,method){
    let result =[]
for(let n of arr){
   result.push( method(n))
}
return result
}

let addTwo =(n)=>{
return n+2
}
console.log(myMap([1,2], addTwo))


let count =10
 let coutTimer = setInterval(()=>{
    console.log(count)
count--
if(count < 0){
    clearInterval(coutTimer)
}
 },1000)


 