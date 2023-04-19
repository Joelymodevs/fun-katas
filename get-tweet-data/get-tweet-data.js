// Please do not change the name of this function
function getTweetData (tweet) {
  const tObj = {
    tags: [],
  mentions: [],
  tagCount: 0,
  mentionCount: 0,
  length: tweet.length,
  }
  console.log(tObj);
  if (tweet.length !== 0) {
    const tagReg = /#(\w+)\b/g;
    const atReg = /@(\w+)\b/g;
    const tagMatch = tweet.matchAll(tagReg);
    for (const match of tagMatch) {
      tObj.tags.push(match[0])
      tObj.tagCount++;
    }
    const atMatch = tweet.matchAll(atReg);
    for (const match of atMatch ) {
      tObj.mentions.push(match[0]);
      tObj.mentionCount++;
    }
    
  
  }
  return tObj
};

module.exports = getTweetData;
