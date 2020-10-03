function extraRunsConcededByEachTeam(matches,deliveries) {
    let arr_match_id = [];
    for (let match of matches) {
        const season = match.season;
        if(season == 2016){
            arr_match_id.push(match.id);   
        }
    }
    const result = {};
    for (let deliverie of deliveries) {
      const deliverie_id = deliverie.match_id;
      const bowlingTeam = deliverie.bowling_team;
      let extra_run = deliverie.extra_runs;
      if (arr_match_id.includes(deliverie_id)) {
        if(result[bowlingTeam]){
          result[bowlingTeam] += parseInt(extra_run);
        }
        else {
          result[bowlingTeam] = parseInt(extra_run);
        }
      }
    }
    return result;
  }
  
  module.exports = extraRunsConcededByEachTeam;