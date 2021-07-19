module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
      return false;
  }
  str = str.split("");
  console.log(str);
  let brackets = {};
  let arr = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
      brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  console.log(brackets);
  for (let j = 0; j < str.length; j++) {
      if (brackets[arr[arr.length - 1]] === str[j]) {
          arr.pop();
      } else {
          arr.push(str[j]);
      }
      console.log(arr);
  }

  return arr.length === 0;
};