import { useState, useEffect } from "react";
import scoreData from "../assets/boxScoreData.json";
import playersData from "../assets/allPlayersData.json";
import PassingStatTable from "./PassingStatTable";
import RushingStatTable from "./RushingStatTable";
import ReceivingStatTable from "./ReveivingStatTable";
import DefenseStatTable from "./DefenseStatTable";
import KickReturnStatTable from "./KickReturnStatTable";
import PuntReturnStatTable from "./PuntReturnStatTable";
import KickingStatTable from "./KickingStatTable";
import PuntingStatTable from "./PuntingStatTable";
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
          team: player?.teamAbv,
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
          team: player?.teamAbv,
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
          team: player?.teamAbv,
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

    const mapAwayDefense = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Defense) {
        awayDefense.push({
          team: player?.teamAbv,
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

  function getKickReturnsAway(playerStats) {
    const awayKickReturns = [];
    const mapAwayKickReturns = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Kicking) {
        awayKickReturns.push({
          team: player?.teamAbv,
          name: player?.longName,
          kickReturns: player?.Kicking?.kickReturns,
          kickReturnTD: player?.Kicking?.kickReturnTD,
          kickReturnYds: player?.Kicking?.kickReturnYds,
          kickReturnAvg: player?.Kicking?.kickReturnAvg,
          kickReturnLong: player?.Kicking?.kickReturnLong,
        });
      }
    });
    const sortAwayKickReturns = awayKickReturns.sort(
      (a, b) => b?.kickReturnYds - a?.kickReturnYds
    );
    return sortAwayKickReturns;
  }

  function getPuntReturnsAway(playerStats) {
    const awayPuntReturns = [];

    const mapAwayPuntReturns = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Punting?.puntReturns) {
        awayPuntReturns.push({
          team: player?.teamAbv,
          name: player?.longName,
          puntReturns: player?.Punting?.puntReturns,
          puntReturnYds: player?.Punting?.puntReturnYds,
          puntReturnAvg: player?.Punting?.puntReturnAvg,
          puntReturnLong: player?.Punting?.puntReturnLong,
          puntReturnTD: player?.Punting?.puntReturnTD,
        });
      }
    });
    const sortAwayPuntReturns = awayPuntReturns.sort(
      (a, b) => b?.puntReturnYds - a?.puntReturnYds
    );
    return sortAwayPuntReturns;
  }

  function getPuntingAway(playerStats) {
    const awayPunting = [];

    const mapAwayPunting = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Punting?.puntYds) {
        awayPunting.push({
          team: player?.teamAbv,
          name: player?.longName,
          punts: player?.Punting?.punts,
          puntYds: player?.Punting?.puntYds,
          puntAvg: player?.Punting?.puntAvg,
          puntsin20: player?.Punting?.puntsin20,
          puntTouchBacks: player?.Punting?.puntTouchBacks,
          puntLong: player?.Punting?.puntLong,
        });
      }
    });
    const sortAwayPunting = awayPunting.sort((a, b) => b?.puntYds - a?.puntYds);
    return sortAwayPunting;
  }

  function getKickingAway(playerStats) {
    const awayKicking = [];

    const mapAwayKicking = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.away && player?.Kicking?.fgLong) {
        awayKicking.push({
          team: player?.teamAbv,
          name: player?.longName,
          fgMade: player?.Kicking?.fgMade,
          fgAttempts: player?.Kicking?.fgAttempts,
          fgPct: player?.Kicking?.fgPct,
          fgLong: player?.Kicking?.fgLong,
          xpMade: player?.Kicking?.xpMade,
          xpAttempts: player?.Kicking?.xpAttempts,
          kickingPts: player?.Kicking?.kickingPts,
        });
      }
    });
    const sortAwayKicking = awayKicking.sort(
      (a, b) => b?.puntReturnYds - a?.puntReturnYds
    );
    return sortAwayKicking;
  }

  function getPassingHome(playerStats) {
    const homePassing = [];
    const maphomePassing = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Passing) {
        homePassing.push({
          team: player?.teamAbv,
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
    const sorthomePassing = homePassing.sort(
      (a, b) => b?.passYards - a?.passYards
    );
    return sorthomePassing;
  }

  function getRushingHome(playerStats) {
    const homeRushing = [];

    const maphomeRushing = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Rushing) {
        homeRushing.push({
          team: player?.teamAbv,
          name: player?.longName,
          carries: player?.Rushing?.carries,
          rushingYards: player?.Rushing?.rushYds,
          rushingAvg: player?.Rushing?.rushAvg,
          td: player?.Rushing?.rushTD,
          long: player?.Rushing?.longRush,
        });
      }
    });
    const sorthomeRushing = homeRushing.sort(
      (a, b) => b?.rushingYards - a?.rushingYards
    );
    return sorthomeRushing;
  }

  function getReceivingHome(playerStats) {
    const homeReceiving = [];

    const maphomeReceiving = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Receiving) {
        homeReceiving.push({
          team: player?.teamAbv,
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
    const sorthomeReceiving = homeReceiving.sort(
      (a, b) => b?.recYds - a?.recYds
    );
    return sorthomeReceiving;
  }

  function getDefenseHome(playerStats) {
    const homeDefense = [];

    const maphomeDefense = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Defense) {
        homeDefense.push({
          team: player?.teamAbv,
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
    const sorthomeDefense = homeDefense.sort(
      (a, b) => b?.totalTackles - a?.totalTackles
    );
    return sorthomeDefense;
  }

  function getKickReturnsHome(playerStats) {
    const homeKickReturns = [];
    const maphomeKickReturns = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Kicking) {
        homeKickReturns.push({
          team: player?.teamAbv,
          name: player?.longName,
          kickReturns: player?.Kicking?.kickReturns,
          kickReturnTD: player?.Kicking?.kickReturnTD,
          kickReturnYds: player?.Kicking?.kickReturnYds,
          kickReturnAvg: player?.Kicking?.kickReturnAvg,
          kickReturnLong: player?.Kicking?.kickReturnLong,
        });
      }
    });
    const sorthomeKickReturns = homeKickReturns.sort(
      (a, b) => b?.kickReturnYds - a?.kickReturnYds
    );
    return sorthomeKickReturns;
  }

  function getPuntReturnsHome(playerStats) {
    const homePuntReturns = [];

    const maphomePuntReturns = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Punting?.puntReturns) {
        homePuntReturns.push({
          team: player?.teamAbv,
          name: player?.longName,
          puntReturns: player?.Punting?.puntReturns,
          puntReturnYds: player?.Punting?.puntReturnYds,
          puntReturnAvg: player?.Punting?.puntReturnAvg,
          puntReturnLong: player?.Punting?.puntReturnLong,
          puntReturnTD: player?.Punting?.puntReturnTD,
        });
      }
    });
    const sorthomePuntReturns = homePuntReturns.sort(
      (a, b) => b?.puntReturnYds - a?.puntReturnYds
    );
    return sorthomePuntReturns;
  }

  function getPuntingHome(playerStats) {
    const homePunting = [];

    const maphomePunting = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Punting?.puntYds) {
        homePunting.push({
          team: player?.teamAbv,
          name: player?.longName,
          punts: player?.Punting?.punts,
          puntYds: player?.Punting?.puntYds,
          puntAvg: player?.Punting?.puntAvg,
          puntsin20: player?.Punting?.puntsin20,
          puntTouchBacks: player?.Punting?.puntTouchBacks,
          puntLong: player?.Punting?.puntLong,
        });
      }
    });
    const sorthomePunting = homePunting.sort((a, b) => b?.puntYds - a?.puntYds);
    return sorthomePunting;
  }

  function getKickingHome(playerStats) {
    const homeKicking = [];

    const maphomeKicking = Object.values(playerStats).map((player) => {
      if (player.team === boxScore.home && player?.Kicking?.fgLong) {
        homeKicking.push({
          team: player?.teamAbv,
          name: player?.longName,
          fgMade: player?.Kicking?.fgMade,
          fgAttempts: player?.Kicking?.fgAttempts,
          fgPct: player?.Kicking?.fgPct,
          fgLong: player?.Kicking?.fgLong,
          xpMade: player?.Kicking?.xpMade,
          xpAttempts: player?.Kicking?.xpAttempts,
          kickingPts: player?.Kicking?.kickingPts,
        });
      }
    });
    const sorthomeKicking = homeKicking.sort(
      (a, b) => b?.puntReturnYds - a?.puntReturnYds
    );
    return sorthomeKicking;
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
          className=" md:overflow-visible "
          size={"xxl"}
          open={true}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader> ScoreBoard for {gameId} </DialogHeader>
          <DialogBody
            divider
            className="max-h-[30rem] overflow-auto md:max-h-full  border-2 border-green-400"
          >
            <div>
              <p>{boxScore.away}</p>
              <PassingStatTable stats={getPassingAway(playerStats)} />
              <RushingStatTable stats={getRushingAway(playerStats)} />
              <ReceivingStatTable stats={getReceivingAway(playerStats)} />
              <DefenseStatTable stats={getDefenseAway(playerStats)} />
              <KickReturnStatTable stats={getKickReturnsAway(playerStats)} />
              <PuntReturnStatTable stats={getPuntReturnsAway(playerStats)} />
              <KickingStatTable stats={getKickingAway(playerStats)} />
              <PuntingStatTable stats={getPuntingAway(playerStats)} />
            </div>

            <div>
              <p>{boxScore.home}</p>
              <PassingStatTable stats={getPassingHome(playerStats)} />
              <RushingStatTable stats={getRushingHome(playerStats)} />
              <ReceivingStatTable stats={getReceivingHome(playerStats)} />
              <DefenseStatTable stats={getDefenseHome(playerStats)} />
              <KickReturnStatTable stats={getKickReturnsHome(playerStats)} />
              <PuntReturnStatTable stats={getPuntReturnsHome(playerStats)} />
              <KickingStatTable stats={getKickingHome(playerStats)} />
              <PuntingStatTable stats={getPuntingHome(playerStats)} />
            </div>
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
