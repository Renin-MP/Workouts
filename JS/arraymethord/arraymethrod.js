let arr = [10, 20, 30, 40];
// unshift
// return new length of array
// array ude frontl add cheyyan multpple value  add cheyyam

let addElementstart = arr.unshift(88, 32, "raju");
console.log(" addElementstart",  addElementstart);
console.log(" arr after unshift", arr);

console.log("=============");

// push
// return new length of array
//  arrayude backil add cheyyam mulpple value 
let addElementend = arr.push(50, "ajay");
console.log("addElementend", addElementend);



console.log(" arr after push", arr);
console.log("=============");

// shift
// return the remove elements
//  arayude frontl ninnum remove cheyyan 1 value pattollu
let removeElementstart = arr.shift();
console.log("removeElementstart", removeElementstart);
console.log(" arr after shift ", arr);
console.log("=============");
//  pop
// return the remove elements
//  arrayude backil ninnum remove cheyyan 1 value pattollu
let removeElementend = arr.pop();
console.log("removeElementend", removeElementend);
console.log(" arr after pop  ", arr);

// slice(strIndx,endIndx)
// return new array
// doesn't modify the orgninal array
// can be used to take shallow coppy

let arr1 = [30, 40, 50, 32];
let slicedArr1 = arr1.slice(1, 4);
console.log("slicedArr1", slicedArr1);
console.log("arr1 after slice", arr1);
console.log("===============");

// splice (strIndx,delcount,elmnttoBeAdded)
// return removed elements
// it modify the orgninal array
let nums1 = [22, 33, 30, 40, 50, 32];
let removedElmntsplice = nums1.splice(1, 2, 23, 24, 25);
console.log("removedElmntsplice", removedElmntsplice);
console.log("nums1 after splice", nums1);

// length
let nums1length = nums1.length;
console.log(" nums1length", nums1length);
console.log("===============");

// concat
let concatNums1 = nums1.concat();
console.log("concatNums1", concatNums1);
console.log("===============");

// join=> covert to array to string , can accept seprator

let arr2 = [12, 23, "raju", "ajay"];
let joinarr2 = arr2.join(" ");
console.log("joinarr2", joinarr2);
console.log("===============");

// to string=>covert array to string
let arr2Tostring = arr2.toString();
console.log("arr2Tostring", arr2Tostring);
console.log("===============");

// flat
let multidiArr = [10, 20, [30, 40], [[45, 45]]];
let flatArr = multidiArr.flat(2);
console.log("flatArr", flatArr);
console.log("===============");

// reduce
let nums2 = [2, 3, 4, 6];
let reduceNums2 = nums2.reduce((accVal, curVal) => accVal - curVal);
console.log("reduceNums2", reduceNums2);

// reduceRight => start from right to left

let reduceRightNums2 = nums2.reduceRight((accVal, curVal) => accVal - curVal);
console.log("reduceRightNums2", reduceRightNums2);


// forEach
// doesn't returns anything (undefined)
let nums3 = [1, 2, 3, 4, 6, 7, 8, 10];
let newNumsArr = [];
let numsPlus2 = nums3.forEach((value, index) => {
  // console.log(`value is ${value}: index is ${index}`);
  newNumsArr.push(value + 2);
});

console.log(" numsPlus2", numsPlus2);
console.log("newNumsArr", newNumsArr);
console.log("===============");

// map

// return a new array

let numsPlus3 = nums3.map((value, index) => {
  // console.log(`value is ${value}: index is ${index}`);
  return value + 5;
});

console.log("numsPlus3", numsPlus3);
console.log("===============");

// filter
// return new array with filtered Elements
let nums4 = [400, 600, 500, 700, 789, 1232];
let GreaterThan500 = nums4.filter((element) => element > 500);
console.log("GreaterThan500", GreaterThan500);
console.log("===============");

// find
// find single elements , based on the condition (first occurence)

let findNumGreaterThan500 = nums4.find((element) => element > 500);
console.log("findNumGreaterThan500", findNumGreaterThan500);
console.log("===============");

// find index
// find index of the elements
// based on the condition  (first occurence)
let findindexNumGreaterThan500 = nums4.find((element) => element > 500);
console.log("fifindindexNumGreaterThan500", findindexNumGreaterThan500);
console.log("===============");

// indexOf
// if the elements is not present =>returns -1

let bikes = ["Himalaya", "Rx100", "Rx135", "R15"];
let indexOfRx100 = bikes.indexOf("Rx100");
console.log("indexOfRx100", indexOfRx100);
console.log("===============");
// includes
// returns boolean value

let nums4Includes400 = nums4.includes(4000);
console.log(nums4Includes400 ? "400 is present" : "400 is not present");
console.log("nums4Includes400", nums4Includes400);
console.log("===============");

// sort
let arr3 = [3, 2, 1, 4, 5, 6];
let sortAscen = arr3.sort((a, b) => a - b);
console.log("sortAscen", sortAscen);
let sortDescen = arr3.sort((a, b) => b - a);
console.log(" sortDescen", sortDescen);
console.log("===============");

// reverse
let arr4 = ["H", "e", "l", "l", "o"];
let revArr4 = arr4.reverse();

console.log("revArr4", revArr4);
console.log("===============");

// eg
let str = `MY NAME IS RAJU`;
let revstr = str.split(` `).reverse().join(` `);
console.log("revstr=str", (revstr = str));
console.log("===============");

// fill (fillvalue ,strIndx,endIndx)

let arr5 = [2, 4, 5, 6, 7, 44, 56, 22, 32];
let fill5 = arr5.fill(5, 1, 4);
console.log("fill5", fill5);
console.log("===============");

// largest num

let sampleArr = [43, 54, 2, 45, 78, 90];
// let largestNum=Math.max(...sampleArr)
// console.log("largestNum",largestNum);

// or
// incase of duplicate , remove the duplicate and then sort the array

// let largestNum = sampleArr.sort((a,b)=>b-a)
// console.log(" largestNum", largestNum[0]);
// // second largest num
// console.log("secondLargestNum",largestNum[1]);

let firstfunc = () => {
  console.log("firstfunc");
  setTimeout(() => {
    console.log("test ur brain");
  }, 2000);
};
let seconfunc = () => {
  console.log(" seconfunc");
  setTimeout(() => {
    console.log("test ur brain again");
  }, 3000);
};
let thirdfunc = () => {
  console.log("thirdfunc");
  setTimeout(() => {
    console.log("Now guess the out put");
  }, 0);
};

firstfunc();
seconfunc();
thirdfunc();


// copy with (target, strIdx=>default=0,endIndx=>default = arr length)
// strIndx and endIndx are optional
let arr6=[1,2,3,4,5,6,7,8,9]
let copyElemnt=arr.copyWithin(2,5,7)
console.log(" copyElemnt", copyElemnt);
