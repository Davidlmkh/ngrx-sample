const object = {
  name: 'john',
  age: 12,
};

// this always returns a new instance
const copy = { ...object };
console.log('copy', copy);




const addProp = {
  ...object,
  location: 'lyon',
};
console.log('add prop', addProp);





const { age, ...withoutAge } = object;
console.log('without age', withoutAge);





const merged = { ...object, ...{ country: 'france', city: 'lyon' } };
console.log('merged', merged);





const array = [1, 2, 3];

const arrayCopy = [...array];





const push = [...array, 4];
console.log('push', push);





const popped = [1, ...array];
console.log('pop', popped);



// ALL OF THESE EXEMPLES RETURN NEW REFERENCES