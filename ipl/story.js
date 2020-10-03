function story(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      const manOfTheMatch = match.player_of_match;
      if (!result[season]) {
        result[season] = {};
      } else {
        if (result[season][manOfTheMatch]) {
          result[season][manOfTheMatch] += 1;
        } else {
          result[season][manOfTheMatch] = 1;
        }
      }
    }
    let arr = [];
    for(let i in result[2013]){
        arr.push([i,result[2013][i]]);
    }

    arr.sort((a,b) =>  b[1] - a[1])
    arr = arr.slice(0,10);
    let name = {};
    for(let i =0; i < arr.length; i++){
        name[arr[i][0]] = arr[i][1]; 
    }
    return name;

  }
    
  module.exports = story;