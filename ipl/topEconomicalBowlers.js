function topEconomicalBowlers(matches,deliveries) {
      let arr_match_id = [];
      for (let match of matches) {
            const season = match.season;
            if(season == 2015){
                arr_match_id.push(match.id);   
            }
      }
      
      let overBalled = [];
      let totalRun = [];
      for (let deliverie of deliveries) {
          const bowler = deliverie.bowler;
          const match_id = deliverie.match_id;
          const total_runs = deliverie.total_runs;
          if (arr_match_id.includes(match_id)) {
              if (totalRun[bowler]) {
                totalRun[bowler] += parseInt(total_runs);
              } else {
                totalRun[bowler] = parseInt(total_runs);
              }

              if (overBalled[bowler]) {
                overBalled[bowler] += 1;
              } else {
                overBalled[bowler] = 1;
              }
          }
      }
      
      for (let data in overBalled) {
        overBalled[data] = parseFloat(overBalled[data] / 6);
      }

      for (let data in totalRun) {
        totalRun[data] = parseFloat(totalRun[data] / overBalled[data]);
      }

      const arr = [];
      for (let data in totalRun) {
          arr.push(totalRun[data]);
      }

      for (let i = arr.length-1; i >= 0 ; i--) {
          for (let j = 1; j < i; j++) {
              if(arr[j-1]>arr[j]){
                  let temp = arr[j-1];
                  arr[j-1] = arr[j];
                  arr[j] = temp;
              }
          }
      }
      let test = [];
      for (let i = 0; i < 10; i++) {
          test.push(arr[i]);
      }

      let result = {};
      for (let data in totalRun) {
          if (test.includes(parseFloat(totalRun[data]))) {
              result[data] = totalRun[data];
          }
      }
      let newArr= [];
      for (let i in result) {
          newArr.push([i, result[i]])
      }


      newArr.sort(function(a, b) {
          return a[1] - b[1];
      });


      let newResult = {};
      for (let data of newArr) {
          let name = data[0];
          let value = data[1];
          newResult[name] = parseFloat(value.toFixed(2));
      }

      return newResult;  
  }
  
  module.exports = topEconomicalBowlers;
