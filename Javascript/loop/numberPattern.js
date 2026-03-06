// Using nested loops, print the following pattern for n = 4:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(let i=1;i<=4;i++){
    let pattern =''
    for(j=1;j<=i;j++){
       pattern += j
    }
    console.log(pattern)

}
