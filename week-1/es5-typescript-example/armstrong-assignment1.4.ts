/*
============================================
; Title:  Assignment 1.4 - TypeScript
; Author: Tyler Armstrong
; Date:   14 Jul 2019
; Modified By: N/A
; Description: Building an angular app with Angular CLI
;===========================================
*/

let firstName: string = "Tyler";
let lastName: string = "Armstrong";

// function
function myName(firstName, lastName) {
  return "Hello " + firstName + " " + lastName;
}

// Log to console
console.log(myName(firstName, lastName));