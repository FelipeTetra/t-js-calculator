"use strict"
function search(e, all = false){
  if (!all) 
  return document.querySelector(e);
  else {
    return Array.from(document.querySelectorAll(e));
  }
}

const numbers = search('[data-calc="number"]', true);
const operators = search('[data-calc="operator"]', true);
const result = search('[data-calc="="]');;
const clear = search('[data-calc="clear"]');
const input = search('input');

numbers.forEach(e => {
  e.addEventListener('click', t => {
    input.value += e.innerHTML
  })
})
 
result.addEventListener('click', t => {
  const x = eval(input.value);
  let parts = x.toFixed(2).toString().split(".");
  if (parts[1] == 0) {
    return input.value = x;
  }
  input.value = x.toFixed(2);
})

operators.forEach( e => {
  e.addEventListener('click', t => {
    if (
      e.innerHTML == '-' && input.value[input.value.length-1] != '-' && input.value[input.value.length-1] != '+' ||
      e.innerHTML == '+' && input.value[input.value.length-1] != '+' && input.value[input.value.length-1] != '-') 
      {
      return input.value += e.innerHTML;
    } 
    if (
      input.value[input.value.length-1] !== '/' &&
      input.value[input.value.length-1] !== '-' &&
      input.value[input.value.length-1] !== '+' &&
      input.value[input.value.length-1] !== '*') 
      {
      return input.value += e.innerHTML;
    }
  })
})

clear.addEventListener('click', type => {
  input.value = null;
})