async function assignMentName() {
  // code here
  let arr = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = {
  runTest: assignMentName,
};
