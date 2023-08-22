import { useState, useEffect } from "react";
import scoreData from "../assets/boxScoreData.json";
import playersData from "../assets/allPlayersData.json";
import PassingStatTable from "./PassingStatTable";
import RushingStatTable from "./RushingStatTable";
import ReceivingStatTable from "./ReveivingStatTable";
import DefenseStatTable from "./DefenseStatTable";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
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
    const awayRushing = [];

    const mapAwayRushing = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Rushing) {
        awayRushing.push({
          name: player?.longName,
          carries: player?.Rushing?.carries,
          rushingYards: player?.Rushing?.rushYds,
          rushingAvg: player?.Rushing?.rushAvg,
          td: player?.Rushing?.rushTD,
          long: player?.Rushing?.longRush,
        });
      }
    });
    const sortAwayRushing = awayRushing.sort(
      (a, b) => b?.rushingYards - a?.rushingYards
    );
    return sortAwayRushing;
  }

  function getReceivingAway(playerStats) {
    const awayReceiving = [];

    const mapAwayReceiving = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Receiving) {
        awayReceiving.push({
          name: player?.longName,
          receptions: player?.Receiving?.receptions,
          recYds: player?.Receiving?.recYds,
          recAvg: player?.Receiving?.recAvg,
          td: player?.Receiving?.recTD,
          longRec: player?.Receiving?.longRec,
          targets: player?.Receiving?.targets,
        });
      }
    });
    const sortAwayReceiving = awayReceiving.sort(
      (a, b) => b?.recYds - a?.recYds
    );
    return sortAwayReceiving;
  }

  function getDefenseAway(playerStats) {
    const awayDefense = [];
    // "TOT", "SOLO", "SACKS", "TFL", "PD", "QB HTS", "TD"
    const mapAwayDefense = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Defense) {
        awayDefense.push({
          name: player?.longName,
          totalTackles: player?.Defense?.totalTackles,
          soloTackles: player?.Defense?.soloTackles,
          tfl: player?.Defense?.tfl,
          sacks: player?.Defense?.sacks,
          passDeflections: player?.Defense?.passDeflections,
          qbHits: player?.Defense?.qbHits,
          defTD: player?.Defense?.defTD,
        });
      }
    });
    const sortAwayDefense = awayDefense.sort(
      (a, b) => b?.totalTackles - a?.totalTackles
    );
    return sortAwayDefense;
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
          className=" md:overflow-auto "
          open={true}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader> ScoreBoard for {gameId} </DialogHeader>
          <DialogBody divider className="max-h-[30rem] overflow-auto md:max-h-[40rem] md:overflow-auto">
            <PassingStatTable stats={getPassingAway(playerStats)} />
            <RushingStatTable stats={getRushingAway(playerStats)} />
            <ReceivingStatTable stats={getReceivingAway(playerStats)} />
            <DefenseStatTable stats={getDefenseAway(playerStats)} />
          </DialogBody>
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
