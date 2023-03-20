"use strict";
let dog1 = {
    name: "구름",
    age: 3
};
let dog2 = {
    name: "달래",
    age: 2
};
let stu1 = {
    name: "창민",
    age: 30,
    gender: "남자",
    1: "A"
};
let stu2 = {
    name: "요한",
    age: 22,
    gender: "남자",
    1: "C"
}
//모든 파라미터 readonly
interface ReadUser {
    name: string,
    age: number,
    phone:number
}
let readuser1:Readonly<ReadUser> = {
    name: "그린",
    age: 30,
    phone: "01012341234",
}
// readuser1.name = "ddd";
// readuser1.age = 50;
// readuser1.phone = "Aa";

interface TV {
    turnOn(): Boolean;
    turnOff(): void;
}
const myTv:TV = {
    turnOn() {
        return true;
    },
    turnOff() {
        console.log("off");
    }
}
interface Signup {
    email: string;
    id: string;
    password: string;
}
//클래스타입 인터페이스!!!
// implements 키워드
interface IStudent {
    name: string,
    getName(): string
}
class Student2 implements IStudent {
    name: string;
    constructor(name:string){
        this.name = name;
    }
    getName():string {
        return this.name;
    }
}
const green = new Student2("green");
console.log(green.getName());