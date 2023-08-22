// function getPassingHome(playerStats) {
//   const homePassing = [];
//   const maphomePassing = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Passing) {
//       homePassing.push({
//         name: player?.longName,
//         completions: player?.Passing?.passCompletions,
//         attempts: player?.Passing?.passAttempts,
//         passYards: Number(player?.Passing?.passYds),
//         passAvg: player?.Passing?.passYds,
//         td: player?.Passing?.passTD,
//         int: player?.Passing?.int,
//         sacks: player?.Passing?.sacked,
//         qbr: player?.Passing?.qbr,
//       });
//     }
//   });
//   const sorthomePassing = homePassing.sort(
//     (a, b) => b?.passYards - a?.passYards
//   );
//   return sorthomePassing;
// }

// function getRushingHome(playerStats) {
//   const homeRushing = [];

//   const maphomeRushing = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Rushing) {
//       homeRushing.push({
//         name: player?.longName,
//         carries: player?.Rushing?.carries,
//         rushingYards: player?.Rushing?.rushYds,
//         rushingAvg: player?.Rushing?.rushAvg,
//         td: player?.Rushing?.rushTD,
//         long: player?.Rushing?.longRush,
//       });
//     }
//   });
//   const sorthomeRushing = homeRushing.sort(
//     (a, b) => b?.rushingYards - a?.rushingYards
//   );
//   return sorthomeRushing;
// }

// function getReceivingHome(playerStats) {
//   const homeReceiving = [];

//   const maphomeReceiving = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Receiving) {
//       homeReceiving.push({
//         name: player?.longName,
//         receptions: player?.Receiving?.receptions,
//         recYds: player?.Receiving?.recYds,
//         recAvg: player?.Receiving?.recAvg,
//         td: player?.Receiving?.recTD,
//         longRec: player?.Receiving?.longRec,
//         targets: player?.Receiving?.targets,
//       });
//     }
//   });
//   const sorthomeReceiving = homeReceiving.sort(
//     (a, b) => b?.recYds - a?.recYds
//   );
//   return sorthomeReceiving;
// }

// function getDefenseHome(playerStats) {
//   const homeDefense = [];
//   // "TOT", "SOLO", "SACKS", "TFL", "PD", "QB HTS", "TD"
//   const maphomeDefense = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Defense) {
//       homeDefense.push({
//         name: player?.longName,
//         totalTackles: player?.Defense?.totalTackles,
//         soloTackles: player?.Defense?.soloTackles,
//         tfl: player?.Defense?.tfl,
//         sacks: player?.Defense?.sacks,
//         passDeflections: player?.Defense?.passDeflections,
//         qbHits: player?.Defense?.qbHits,
//         defTD: player?.Defense?.defTD,
//       });
//     }
//   });
//   const sorthomeDefense = homeDefense.sort(
//     (a, b) => b?.totalTackles - a?.totalTackles
//   );
//   return sorthomeDefense;
// }

// function getKickReturnsHome(playerStats) {
//   const homeKickReturns = [];
//   const maphomeKickReturns = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Kicking) {
//       homeKickReturns.push({
//         name: player?.longName,
//         kickReturns: player?.Kicking?.kickReturns,
//         kickReturnTD: player?.Kicking?.kickReturnTD,
//         kickReturnYds: player?.Kicking?.kickReturnYds,
//         kickReturnAvg: player?.Kicking?.kickReturnAvg,
//         kickReturnLong: player?.Kicking?.kickReturnLong,
//       });
//     }
//   });
//   const sorthomeKickReturns = homeKickReturns.sort(
//     (a, b) => b?.kickReturnYds - a?.kickReturnYds
//   );
//   return sorthomeKickReturns;
// }

// function getPuntReturnsHome(playerStats) {
//   const homePuntReturns = [];
//   // "RET", "YDS", "AVG", "TD", "LONG"
//   const maphomePuntReturns = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Punting?.puntReturns) {
//       homePuntReturns.push({
//         name: player?.longName,
//         puntReturns: player?.Punting?.puntReturns,
//         puntReturnYds: player?.Punting?.puntReturnYds,
//         puntReturnAvg: player?.Punting?.puntReturnAvg,
//         puntReturnLong: player?.Punting?.puntReturnLong,
//         puntReturnTD: player?.Punting?.puntReturnTD,
//       });
//     }
//   });
//   const sorthomePuntReturns = homePuntReturns.sort(
//     (a, b) => b?.puntReturnYds - a?.puntReturnYds
//   );
//   return sorthomePuntReturns;
// }

// function getPuntingHome(playerStats) {
//   const homePunting = [];
//   // "PUNTS", "YDS", "AVG", "TB", "IN 20", "LONG"
//   const maphomePunting = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Punting?.puntYds) {
//       homePunting.push({
//         name: player?.longName,
//         punts: player?.Punting?.punts,
//         puntYds: player?.Punting?.puntYds,
//         puntAvg: player?.Punting?.puntAvg,
//         puntsin20: player?.Punting?.puntsin20,
//         puntTouchBacks: player?.Punting?.puntTouchBacks,
//         puntLong: player?.Punting?.puntLong,
//       });
//     }
//   });
//   const sorthomePunting = homePunting.sort(
//     (a, b) => b?.puntYds - a?.puntYds
//   );
//   return sorthomePunting;
// }

// function getKickingHome(playerStats) {
//   const homeKicking = [];
//   // "FG", "PCT", "LONG", "XP", "PTS"
//   const maphomeKicking = Object.values(playerStats).map((player) => {
//     if (player.team === boxScore.home && player?.Kicking?.fgLong) {
//       homeKicking.push({
//         name: player?.longName,
//         fgMade: player?.Kicking?.fgMade,
//         fgAttempts: player?.Kicking?.fgAttempts,
//         fgPct: player?.Kicking?.fgPct,
//         fgLong: player?.Kicking?.fgLong,
//         xpMade: player?.Kicking?.xpMade,
//         xpAttempts: player?.Kicking?.xpAttempts,
//         kickingPts: player?.Kicking?.kickingPts,
//       });
//     }
//   });
//   const sorthomeKicking = homeKicking.sort(
//     (a, b) => b?.puntReturnYds - a?.puntReturnYds
//   );
//   return sorthomeKicking;
// }

