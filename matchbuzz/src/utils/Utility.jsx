
export function getPlayerName(playerID, allPlayersData) {
  const player = allPlayersData.find((player) => player.playerID === playerID);
  return player ? player.longName : null;
}


export function getHittersAway(playerStats, boxScore, allPlayersData) {
  const awayHitters = Object.values(playerStats).reduce((hitters, player) => {
    if (player.team === boxScore.away && player?.Hitting !== false && player?.Hitting?.battingOrder) {
      hitters.push({
        id: getPlayerName(player.playerID, allPlayersData),
        battingOrder: player?.Hitting?.battingOrder,
      });
    }
    return hitters;
  }, []);
  const sortAwayHitters = awayHitters.sort((a, b) => a.battingOrder - b.battingOrder);
  return sortAwayHitters;
}

export function getHittersHome(playerStats, boxScore, allPlayersData) {
  const homeHitters = Object.values(playerStats).reduce((hitters, player) => {
    if (player.team === boxScore.home && player?.Hitting !== false && player?.Hitting?.battingOrder) {
      hitters.push({
        id: getPlayerName(player.playerID, allPlayersData),
        battingOrder: player?.Hitting?.battingOrder,
      });
    }
    return hitters;
  }, []);
  const sortHomeHitters = homeHitters.sort((a, b) => a.battingOrder - b.battingOrder);
  return sortHomeHitters;
}
