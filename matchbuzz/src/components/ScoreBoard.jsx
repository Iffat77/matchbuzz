import { useState, useEffect } from "react";
import scoreData from "../assets/boxScoreData.json";
import playersData from "../assets/allPlayersData.json";
import { getHittersAway, getHittersHome, getPlayerName } from "../utils/Utility";

function ScoreBoard({ gameId }) {
  const [boxScore, setBoxScore] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);

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
          {console.log(getHittersAway(playerStats, boxScore, allPlayers))}
          <div>
            <h3>Away</h3>
            {getHittersAway(playerStats, boxScore, allPlayers).map((hitter) => (
              <div key={hitter.id}>{hitter.id}</div>
            ))}
          </div>

          {console.log(getHittersHome(playerStats, boxScore, allPlayers))}
          <div>
            <h3>Home</h3>
            {getHittersHome(playerStats, boxScore, allPlayers).map((hitter) => (
              <div key={hitter.id}>{hitter.id}</div>
            ))}
          </div>
        </div>
      ) : (
        <p> Loading ....</p>
      )}
    </div>
  );
}

export default ScoreBoard;
