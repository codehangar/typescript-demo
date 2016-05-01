"use strict";
export default class Student {
  firstName: string;
  lastName: string;
  fullName: string;
  constructor(firstName: string, middleInitial: any, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
