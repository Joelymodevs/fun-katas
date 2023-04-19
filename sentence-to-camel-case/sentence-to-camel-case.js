// Please do not change the name of this function
function sentenceToCamelCase (sentence, bool) {
  if (sentence.length === 0) return 'that is not a sentence'
  if (typeof bool !== 'boolean') return 'please provide a boolean';
  if (bool === true) {
    let upperCamel = sentence.split(" ").map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    return upperCamel.join("")
  } else {
    let lowerCamel = sentence.toLowerCase().split(" ")
    for (let i = 1; i < lowerCamel.length; i++) {
      lowerCamel[i] = lowerCamel[i].charAt(0).toUpperCase() + lowerCamel[i].slice(1);
    }
    return lowerCamel.join("");
  }
};

module.exports = sentenceToCamelCase;
