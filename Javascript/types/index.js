console.log(num)
var num = 20;
// console.log(str)
let str = 'hello'
 console.log(str)
d()
function d(){
    console.log('haii')
}
// str = 90
console.log(str)
let  result = str*2
// console.log(result)

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Example
console.log(capitalizeWords("make capitalise each word in the sentence"));
// Output: "Make Capitalise Each Word In The Sentence"

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }





  const p1 = new Promise((res ,rej)=> setTimeout(() => res("P1"), 3000));
const p2 = new Promise((res, rej) => setTimeout(() => rej("P2 Error"), 1000));
const p3 = new Promise((res, rej) => setTimeout(() => res("P3"), 2000));

Promise.all([p1, p2, p3])
  .then(result => console.log(result))
  .catch(err => console.log(err));
//   rej("P2 Error")


console.log("Start");

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");
