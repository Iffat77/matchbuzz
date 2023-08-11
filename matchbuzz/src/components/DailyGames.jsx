import React, { useEffect, useState } from "react";
import axios from "axios";
import gameData from "../assets/gameData.json";
import teamData from "../assets/teamsData.json";
import ScoreBoard from "./ScoreBoard";
import { DailyGameCard } from "./DailyGameCard";

function getTeamLogo(teamAbv) {
  const team = teamData.body.find((team) => team.teamAbv === teamAbv);
  return team ? team.nflComLogo1 : null;
}

function DailyGames() {
  const [dailyGameData, setDailyGameData] = useState(null);
  const [teamInfo, setTeamInfo] = useState(null);
  const [selectedGameId, setSelectedGameId] = useState(null);

  useEffect(() => {
    setDailyGameData(gameData.body);
    setTeamInfo(teamData);
  }, []);

  const handleGameClick = (gameID) => {
    setSelectedGameId(gameID);
  };
  //   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8000/dailyscoreboard");
  //       setDailyGameData(response.data.body);
  //       setTeamInfo(teamData);
  //     } catch (error) {
  //       console.error("Error fetching daily game data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="allGames-container p-2 md:p-4 md:m-2  rounded-lg w-full">
      {dailyGameData ? (
        <div className="dailyGameData-container space-y-4">
          <div className="m-4 p-2 flex justify-center items-center">
            <h1 className="font-bold text-lg">Today's Games</h1>
          </div>
          {Object.values(dailyGameData).map((game) => (
            <DailyGameCard
              key={game.gameId}
              game={game}
              getTeamLogo={getTeamLogo}
              handleGameClick={handleGameClick}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {selectedGameId && <ScoreBoard gameId={selectedGameId} />}
    </div>
  );
}

export default DailyGames;
