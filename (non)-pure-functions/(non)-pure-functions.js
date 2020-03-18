const discriminator = 4;

// impurepure cause the results depends on contextual data
function impureReduce(num) {
  return num / discriminator;
}

// impure cause it has side effects
function impureFunction(num, dis) {
  discriminator = dis; // side effect

  return num / dis;
}

// pure
function pureReduce(num, discriminator) {
  return num / discriminator;
}

// pure function should ALWAYS return the same thing, independently from anything else but the parameters