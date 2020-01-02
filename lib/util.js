const genRand = (lower, upper) => {
  const nlower = parseInt(lower, 0);
  const nupper = parseInt(upper, 0);
  return Math.floor(Math.random() * (nupper - nlower)) + nlower;
};

const chooseOneFromArray = (someArray) => someArray[genRand(0, someArray.length)];

module.exports = {
  genRand,
  chooseOneFromArray,
};
