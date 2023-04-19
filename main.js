let stocks={
  Fruits:["strawberry","grapes","banana","apple"],
  Liquids:["water","Ice"],
  Holders: ["Cone","Cup","Stick"],
  Toppings:["Chocolate","Peanuts"]
} 
// let order=(fruit_name,call_1)=>{
  
//   setTimeout(()=>{
//     console.log(`${stocks.Fruits[fruit_name]}`);
//     call_1();

//   },2000);
  

// };
// let production=()=>{
//   setTimeout(()=>{

//     setTimeout(()=>{
//       console.log("The fruit has been chopped");

//       setTimeout(()=>{
//         console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`);
//       },2000)
//     },2000)
//     console.log("Production has started");

//   },5000 );
// };
// order(0,production);
//Trying to understand async function
//eg 
//console.log("hi")
//delay(2)=>console.log("process")
//console.log("bye")
// output:
// hi
//bye
//process


const a=require('./names')
const os=require('os')
console.log(`${os.uptime()} in seconds`)
const currentOS={
  name:os.type(),
  release: os.release()
}
console.log(currentOS)