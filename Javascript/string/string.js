let email= 'gayathri@gmail.com';
let arr =email.split('@')
let username =arr[0]
let output = username.charAt(0).toUpperCase() + username.substring(1,username.length)
console.log(output)
