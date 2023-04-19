// Please do not change the name of this function
function dnaPairs(dna) {
  let pairs = []
  let str = dna.replace(/[^GCTA]/ig, '').toUpperCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "G") {
            pairs.push(["G","C"])
        } if (str[i] === "C") {
            pairs.push(["C", "G"]) 
        } if (str[i] === "T") {
            pairs.push(["T", "A"])
        } if (str[i] === "A") {
            pairs.push(["A", "T"])
        }
    }
    console.log(pairs);
    return pairs;
    }

module.exports = dnaPairs;
