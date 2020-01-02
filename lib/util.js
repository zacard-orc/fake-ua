const genRand = (lower, upper, q = 0.5) => {
  const nlower = parseInt(lower, 0);
  const nupper = parseInt(upper, 0);

  const rand = Math.random();
  if (q === 0.5) {
    return Math.floor(rand * (nupper - nlower)) + nlower;
  }
  let rawRand = rand + q - 0.5;
  if (rawRand > 1) rawRand = 0.9999;
  if (rawRand < 0) rawRand = 0.0001;

  return Math.floor(rawRand * (nupper - nlower)) + nlower;
};

const chooseOneFromArray = (someArray, q = 0.5) => someArray[genRand(0, someArray.length, q)];

module.exports = {
  genRand,
  chooseOneFromArray,
};
