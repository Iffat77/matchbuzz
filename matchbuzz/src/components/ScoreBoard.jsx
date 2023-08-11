import { useState, useEffect } from "react";
import scoreData from "../assets/boxScoreData.json";
import playersData from "../assets/allPlayersData.json";


function getPlayerName(playerID) {
  const player = playersData.body.find(
    (player) => player.playerID === playerID
  );
  return player ? player?.longName : null;
}

function getPlayerPos(playerID) {
  const player = playersData.body.find(
    (player) => player.playerID === playerID
  );
  return player ? player?.pos : null;
}

function ScoreBoard({ gameId }) {
  const [boxScore, setBoxScore] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);

  function getPlayersAway(playerStats) {
    const awayPassing = [];
    const mapAwayPassing = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Passing) {
        awayPassing.push({
          name: player?.longName,
          completions: player?.Passing?.passCompletions,
          attempts: player?.Passing?.passAttempts,
          passYards: Number(player?.Passing?.passYds),
          passAvg: player?.Passing?.passYds,
          td: player?.Passing?.passTD,
          int: player?.Passing?.int,
          sacks: player?.Passing?.sacked,
          qbr: player?.Passing?.qbr,
        });
      }
    });
    const sortAwayPassing = awayPassing.sort(
      (a, b) => b?.passYards - a?.passYards
    );
    return sortAwayPassing;
  }

  useEffect(() => {
    setBoxScore(scoreData.body);
    setAllPlayers(playersData.body);
    setPlayerStats(scoreData.body.playerStats);
  }, []);

  return (
    <div>
      ScoreBoard for {gameId}
      <p>cta yds avg td int sak qbr</p>
      {playerStats ? (
        <div>
          {getPlayersAway(playerStats).map((player) => (
            <div className="flex flex-row ">
              <p>{player.name}</p>
              <p>{` ${player.completions}/${player.attempts}`}</p>
              <p>{` ${player.passYards}`}</p>
              <p>{` ${player.passAvg}`}</p>
              <p>{` ${player.td}`}</p>
              <p>{` ${player.int}`}</p>
              <p>{` ${player.sacks}`}</p>
              <p>{` ${player.qbr}`}</p>
            </div>
          ))}
        </div>
      ) : (
        <p> Loading ....</p>
      )}
    </div>
  );
}

export default ScoreBoard;
