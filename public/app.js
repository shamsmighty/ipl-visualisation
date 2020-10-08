
function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}
fetchAndVisualizeData();

async function visualizeData(data) {
  //console.log("yo", data)
  await visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  await visualizeExtraRunsConcededByEachTeam(data.extraRunsConcededByEachTeam);
  await visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  await visualizeTopEconomicalBowlers(data.topEconomicalBowlers);
  await visualizeStory(data.story);
  await visualizeDynamic(data.dynamic);
  return;
}

async function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  let seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name : "Year",
        data: seriesData
      }
    ]
  });
}

async function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
  //console.log("matchwon", matchesWonByEachTeam)
  let kkr = [];
  let rcb = [];
  let kxp = [];
  let csk = [];
  let rr = [];
  let dd = [];
  let mi = [];
  let dc = [];
  let ktk = [];
  let pw = [];
  let nr = [];
  let sh = [];
  let rps = [];
  let gl = [];
  let dcl = [];

  for (let year in matchesWonByEachTeam) {
    kkr.push(matchesWonByEachTeam[year]["Kolkata Knight Riders"] || 0);
    rcb.push(matchesWonByEachTeam[year]["Royal Challengers Bangalore"] || 0);
    csk.push(matchesWonByEachTeam[year]["Chennai Super Kings"] || 0);
    kxp.push(matchesWonByEachTeam[year]["Kings XI Punjab"]);
    rr.push(matchesWonByEachTeam[year]["Rajasthan Royals"] || 0);
    dd.push(matchesWonByEachTeam[year]["Delhi Daredevils"] || 0);
    mi.push(matchesWonByEachTeam[year]["Mumbai Indians"] || 0);
    dc.push(matchesWonByEachTeam[year]["Deccan Chargers"] || 0);
    ktk.push(matchesWonByEachTeam[year]["Kochi Tuskers Kerala"] || 0);
    pw.push(matchesWonByEachTeam[year]["Pune Warriors"] || 0);
    nr.push(matchesWonByEachTeam[year][""] || 0);
    sh.push(matchesWonByEachTeam[year]["Sunrisers Hyderabad"] || 0);
    rps.push(matchesWonByEachTeam[year]["Rising Pune Supergiants"] || 0);
    gl.push(matchesWonByEachTeam[year]["Gujarat Lions"] || 0);
    dcl.push(matchesWonByEachTeam[year]["Delhi Capitals"] || 0);
  }

  Highcharts.chart("matches-won-each-team-years", {
    chart: {
      type: "column",
    },
    title: {
      text: "2. Matches won by each team over all the year of IPL",
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>',
    },
    xAxis: {
      categories: [
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches won",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Kolkata Knight Riders",
        data: kkr,
      },
      {
        name: "Royal Challengers Bangalore",
        data: rcb,
      },
      {
        name: "Chennai Super Kings",
        data: csk,
      },
      {
        name: "Kings XI Punjab",
        data: kxp,
      },
      {
        name: "Rajasthan Royals",
        data: rr,
      },
      {
        name: "Delhi Daredevils",
        data: dd,
      },
      {
        name: "Mumbai Indians",
        data: mi,
      },
      {
        name: "Deccan Chargers",
        data: dc,
      },

      {
        name: "Kochi Tuskers Kerala",
        data: ktk,
      },
      {
        name: "Pune Warriors",
        data: pw,
      },
      {
        name: "no result",
        data: nr,
      },
      {
        name: "Sunrisers Hyderabad",
        data: sh,
      },
      {
        name: "Rising Pune Supergiants",
        data: rps,
      },
      {
        name: "Gujarat Lions",
        data: gl,
      },
      {
        name: "Delhi Capitals",
        data: dcl,
      },
    ],
  });
}


async function visualizeExtraRunsConcededByEachTeam(extraRunsConcededByEachTeam) {
  let res = [];
  for (let team in extraRunsConcededByEachTeam) {
    res.push([team, extraRunsConcededByEachTeam[team]]);
  }

  Highcharts.chart("extra-runs-in-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs Conceded By Each Team in Year 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "Extra Runs",
        data: res
      }
    ]
  });
}

async function visualizeTopEconomicalBowlers(topEconomicalBowlers) {
  //console.log("here", topEconomicalBowlers)
  let seriesData = [];
  for (let name in topEconomicalBowlers) {
    seriesData.push([name, topEconomicalBowlers[name]]);
  }

  Highcharts.chart("top-economical-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "4. Top Economical Bowlers"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economic"
      }
    },
    series: [
      {
        name : "Bowlers",
        data: seriesData
      }
    ]
  });
}

async function visualizeStory(story) {
  //console.log("here",story);
  let seriesData = [];
  for (let year in story) {
    seriesData.push([year, story[year]]);
  }

  Highcharts.chart("story", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Top Ten Player Names Won Man of the Match in year 2013"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Man Of the Match"
      }
    },
    series: [
      {
        name : "Match",
        data: seriesData
      }
    ]
  });
}

