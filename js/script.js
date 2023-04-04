
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates Volume of Triangula Pyramid.
 */
function calculate () {
  // input
  let h = parseFloat(document.getElementById('height-of-triangular-pyramid').value);
  let b = parseFloat(document.getElementById('side-b-of-triangular-pyramid').value);
  let a = parseFloat(document.getElementById('side-a-of-triangular-pyramid').value);

  // process
  let volume = (1/6)*a*b*h
  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm²'
}
