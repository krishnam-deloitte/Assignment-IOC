export const transformedSeedData = (rawData) => {
  const rounds = {
    "round 16": [],
    "quarter-final": [],
    "semi-final": [],
    final: [],
    winner: [],
  };

  rawData.forEach((match) => {
    const { matchID, team1, team2, winner, stage } = match;

    // Check if stage exists in rounds
    if (rounds[stage]) {
      const seed = {
        id: rounds[stage].length + 1,
        date: new Date().toDateString(),
        teams: [{ name: team1 }, { name: team2 }],
        winner: winner,
      };
      rounds[stage].push(seed);
    } else {
      console.error(`Stage "${stage}" is not recognized.`);
    }
  });

  if (rounds["final"].length > 0) {
    const finalMatch = rounds["final"][0];
    rounds["winner"].push({
      id: 1,
      date: new Date().toDateString(),
      teams: [{ name: finalMatch.winner }],
    });
  }

  const formattedRounds = Object.keys(rounds).map((stage) => ({
    title: stage.charAt(0).toUpperCase() + stage.slice(1).replace("-", " "),
    seeds: rounds[stage],
  }));

  return formattedRounds;
};
