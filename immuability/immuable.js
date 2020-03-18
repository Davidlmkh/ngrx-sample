const original = {
  name: 'Mister bean',
  age: 45,
}

const copy = Object.assign({}, original, {
  age: 30,
}); // copy, new reference

copy.age = 35;

console.log(copy === original) // false !
console.log(original); // { name: 'Mister bean', age: 45 }

// no side effect, no impact out of scope
