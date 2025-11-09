/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />

import  Cpp  from './subjects/Cpp';

// Create and export constants for each subject
export const cpp: Cpp = new Cpp();
export const java: Java = new Java();
export const react: React = new React();

// Create and export a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp Subject
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
