"use strict";
let myFunction;
myFunction = function (x, y) {
    return x + y;
};
let num = myFunction(10, 20);
console.log(num);
function myFunction2(x, y) {
    return x + y;
}
function myFunction3() {
    console.log("hi");
}
let myFunction4;
myFunction4 = function () {
    console.log("hi");
};
let myFunction5 = function (num1, num2) {
    return num1 + num2;
};
function showName(name) {
    return `Hello ${name} || 'aaa'`;
}
function showName2(name = "aaa") {
    return `Hello ${name}`;
}
showName("green");
showName();
showName2("green");
showName2();
function addArr(...nums) {
    console.log(nums);
}
addArr(1, 2, 3);
addArr(1, 2, 3, 4, 5, 6, 7, 8);
let yellow = {
    name: "yellow"
};
function printUserName() {
    console.log(this.name);
}
const myFun = printUserName.bind(yellow);
myFun();
function printUserName2(age) {
    console.log(age, this.name);
}
const myFun2 = printUserName2.bind(yellow);
myFun2(30);

//함수 오버로드
interface Person {
    name: string;
    age: number;
}
function join(name: string, age: string): string;
function join(name: string, age: number): Person;
function join(name: string, age: number | string): Person | string {
    if(typeof age === "number"){
        return {
            name: name,
            age:age
        }
    }else {
        return "나이는 숫자로 입력하세요";
    }
}
const green2:Person = join("green",30);
const blue:string = join("blue","hi");