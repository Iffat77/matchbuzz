import { useState, useEffect } from "react";
import scoreData from "../assets/boxScoreData.json";
import playersData from "../assets/allPlayersData.json";
import PassingStatTable from "./PassingStatTable";
import RushingStatTable from "./RushingStatTable";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

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

function ScoreBoard({ gameId, onClose }) {
  const [boxScore, setBoxScore] = useState(null);
  const [allPlayers, setAllPlayers] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);

  function getPassingAway(playerStats) {
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

  function getRushingAway(playerStats) {
    const awayRushing = []

    const mapAwayRushing = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Rushing) {
        awayRushing.push({
          name: player?.longName,
          carries: player?.Rushing?.carries,
          rushingYards: player?.Rushing?.rushYds,
          rushingAvg: player?.Rushing?.rushAvg,
          td: player?.Rushing?.rushTD,
          long: player?.Rushing?.longRush
        })
      }
    })
    const sortAwayRushing = awayRushing.sort(
      (a,b) => b?.rushingYards - a?.rushingYards
    )
    return sortAwayRushing
  }


  useEffect(() => {
    setBoxScore(scoreData.body);
    setAllPlayers(playersData.body);
    setPlayerStats(scoreData.body.playerStats);
  }, []);

  return (
    <div>
      {playerStats ? (
        <Dialog
          open={true} 
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>  ScoreBoard for {gameId} </DialogHeader>
          <div>
            <PassingStatTable stats={getPassingAway(playerStats)} />
            <RushingStatTable stats={getRushingAway(playerStats)} />
          </div>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={onClose}
              className="mr-1"
            >
              <span>close</span>
            </Button>
          </DialogFooter>
        </Dialog>
      ) : (
        <p> </p>
      )}
    </div>
  );
}

export default ScoreBoard;
