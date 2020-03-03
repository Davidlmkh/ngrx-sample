const original = {
  name: 'Mister bean',
  age: 45,
}

const copy = original; // reference assignement

copy.age = 30;

console.log(copy === original) // true cause of reference
console.log(original); // { name: 'Mister bean', age: 30 }

// the problem here is (as for pure functions) we have unexpected side effects
