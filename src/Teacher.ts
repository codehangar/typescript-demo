"use strict";
/**
 * A Teacher, definitely not a Person
 */
export default class Teacher {
  /** Full Name of the teacher (first + middile + last) */
  fullName: string;
  /** Age of the teacher in years */
  age: number;
  constructor(firstName: string, middleInitial: any, lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
