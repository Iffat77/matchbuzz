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
        console.log("here");
        // console.log(player?.Hitting?.battingOrder, player.playerID)
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
      {playerStats ? (
        <div>
          {getPlayersAway(playerStats).map((player) => (
            <div>
              <p>{player.name}</p>
              <p>{`cta: ${player.completions}/${player.attempts}`}</p>
              <p>{`yds: ${player.passYards}`}</p>
              <p>{`avg: ${player.passAvg}`}</p>
              <p>{`td: ${player.td}`}</p>
              <p>{`int: ${player.int}`}</p>
              <p>{`sak: ${player.sacks}`}</p>
              <p>{`qbr: ${player.qbr}`}</p>
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
