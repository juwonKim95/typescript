//Generic
function getSize<T>(arr: T []):number{
    return arr.length;
}
const numArr = [1,2,3,4];
getSize<number>(numArr);  //4

const strArr23 = ['a','b','c'];
getSize<string>(strArr23);  //3
const boolArr2 = [true, false, true, true];
getSize<boolean>(boolArr2); //4
const objArr2 = [{},{name:"a"},{},{age:30},{}];
getSize<object>(objArr2);  //5

interface Animal<T> {
    name: string;
    color: string;
    option: T;
}
const animal2: Animal<string> = {
    name: "고양이",
    color: "검정색",
    option: "특이함"
}
const animal1: Animal<{ age: number; hobby: string}> ={
    name: "강아지",
    color: "흰색",
    option: {
        age:3,
        hobby: "공놀이"
    }
}

//제네릭 확장 extends
interface Student100 {
    name: string;
    age: number;
}
interface Car {
    name: string;
}
interface Fruit {
    // name: string;
    color: string;
}
const stu100:Student100 = {
    name: "a",
    age: 19
}
const car1:Car = {
    name: "소나타"
}
const fruit1:Fruit = {
    // name: "딸기",
    color: "빨강"
}
function printobjName<T extends { name: string }>(data:T): string{
    return data.name;
}
printobjName(stu100);
printobjName(car1);
//printobjName(fruit1);
type U = number | string | boolean;
//제네릭 확장으로 U넣어주면 된다.
interface MyType<T extends U> {
    name: string;
    value: T
}
const dataA: MyType<string> = {
    name: "하하",
    value: "제네릭"
}
const dataB: MyType<number> = {
    name: "호호",
    value: 123
}
const dataC: MyType<boolean> = {
    name: "히히",
    value: true
}
//인터페이스 3개
interface 민준 {
    name: string;
    color: string;
}
interface 요한 {
    name: string;
    color: string;
}
interface 창민 {
    name: string;
}
//객체
const s1:민준 = {
    name: "민준",
    color: "흰색"
}
const s2:요한 = {
    name: "요한",
    color: "노랑"
}
const s3:창민 = {
    name: "창민"
}
function printColor<T extends {color: string} >(data: T){
    console.log(data.color);
}
printColor(s1);
printColor(s2);
// printColor(s3);