"use strict";
/**
 * A Student, qualifies as a Person
 */
export default class Student {
  /** First name of the student */
  firstName: string;
  /** Last name of the student */
  lastName: string;
  /** Full Name of the student (first + middile + last) */
  fullName: string;
  constructor(firstName: string, middleInitial: any, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
