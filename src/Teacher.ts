"use strict";
export default class Teacher {
  fullName: string;
  age: number;
  constructor(firstName: string, middleInitial: any, lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
