"use strict";

import Person from './Person';
import Student from './Student';
import Teacher from './Teacher';

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

function addToDocumentBody(text: string) {
  const div = document.createElement('div')
  div.innerHTML = text;
  document.body.appendChild(div);
}

const student = new Student("Jane", "M.", "Student");

const teacher = new Teacher("John", "K.", "Teacher");

const followsPersonInterface = {
  firstName: 'Jane',
  lastName: 'Student',
  fullName: 'Jane Student'
};

const notFollowsPersonInterface = {
  firstName: 'John',
  lastName: 'Teacher'
};

addToDocumentBody(greeter(student));

// Throws TypeScript error because Teacher Class does not follow the Person interface rules
addToDocumentBody(greeter(teacher));

addToDocumentBody(greeter(followsPersonInterface));

// Throws TypeScript error because this object does not follow the Person interface rules
addToDocumentBody(greeter(notFollowsPersonInterface));
