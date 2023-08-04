import React, { useEffect, useState } from "react";
import axios from "axios";
import gameData from "../assets/gameData.json";
import teamData from "../assets/teamsData.json";

function getTeamLogo(teamAbv) {
  const team = teamData.body.find((team) => team.teamAbv === teamAbv);
  return team ? team.mlbLogo1 : null;
}

function DailyGames() {
  const [dailyGameData, setDailyGameData] = useState(null);
  const [teamInfo, setTeamInfo] = useState(null);

  useEffect(() => {
    setDailyGameData(gameData.body);
    setTeamInfo(teamData);
  }, []);

  return (
    <div className="allGames-container p-2 md:p-4 md:m-2  rounded-lg w-full md:w-1/3">
      {dailyGameData ? (
        <div className="dailyGameData-container space-y-4">
          <div className="m-4 p-2 flex justify-center items-center">
            <h1 className="font-bold text-lg">Today's Games</h1>
          </div>
          {Object.values(dailyGameData).map((game) => (
            <div className="game-container border rounded-xl" key={game.gameID}>
              <p className="p-2">{game?.gameStatus}</p>
              <div className="p-4 flex justify-between border-t">
                <div className="teams  w-1/3">
                  <div className="flex justify-center ">
                    <h3 className="p-2 mt-1">{game?.away}</h3>
                    <img
                      src={getTeamLogo(game?.away)}
                      alt={`${game?.away} Logo`}
                      className="w-8 h-8 m-2"
                    />
                  </div>
                  <div className="flex justify-center   ">
                    <h3 className="p-2 mt-1">{game?.home}</h3>
                    <img
                      src={getTeamLogo(game?.home)}
                      alt={`${game?.home} Logo`}
                      className="w-8 h-8 m-2"
                    />
                  </div>
                </div>

                <div className="teams-runs ">
                  <p className="font-bold">R</p>
                  <p className="my-2 font-medium">{game.lineScore?.away?.R}</p>
                  <p className="my-2 font-medium">{game.lineScore?.home?.R}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DailyGames;
