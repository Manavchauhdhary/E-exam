// //var my_name="manav chaudhary";
// //console.log(my_name);
// //console.log(typeof(my_name))
// // swapping two number
// // var a=10;
// //var b=34;
// //console.log(a);
// // console.log(b);
// //console.log(a);
// //console.log(b);
// //write the program given year is leap year or not

//  var year=2000;
//  if(year%4==0){

//     console.log("year is leap year")
//  }
//   else if(year%10==0){
//       console.log("it is not leap year")
//   }
//   else if(year%400==0){
//       console.log("nyear is leap year"+year)
//   }
//   else {
//       console.log("enter the valid number")
//   }

//var a=20;
//console.log((a%2==0)?"even":"odd")

arr=[2,4,5,6,7,8,9,10,56,68];
let newarr=arr.map(num=>num*2).filter(num=>num>50)
console.log(newarr)