import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import ScoreBoard from "./ScoreBoard";
import { useState } from 'react'

export function DailyGameCard({ game, getTeamLogo}) {

  const [isScoreBoardModalOpen, setIsScoreBoardModalOpen] = useState(false);

  const toggleScoreBoardModal = () => {
    setIsScoreBoardModalOpen(!isScoreBoardModalOpen);
  };



  return (
    <>
    <Card className="max-w-[24rem] overflow-hidden "  onClick={toggleScoreBoardModal}
    key={game.gameID}>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 py-6 rounded-none flex flex-row items-center justify-evenly space-x-10 bg-blue-gray-300"
        >
        <img
          src={getTeamLogo(game?.away)}
          alt={`${game?.away} Logo`}
          className="w-1/3 h-1/3  "
          />
        <img
          src={getTeamLogo(game?.home)}
          alt={`${game?.home} Logo`}
          className="w-1/3 h-1/3 "
          />
      </CardHeader>
      <CardBody>
        <div className="mb-4 border rounded-xl ">
          <Typography variant="h6" color="blue-gray" className=" flex justify-center">
          {game?.gameStatus}
        </Typography>
        </div>
        <div className="flex flex-row justify-evenly space-x-4">
        <Typography variant="h5" color="blue-gray" className="w-1/3  flex justify-center">
        {game?.away}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="w-1/3  flex justify-center ">
        {game?.home}
        </Typography>
        </div>

      </CardBody>
      <CardFooter className="">
        <div className="flex flex-row justify-evenly space-x-4">
        <Typography variant="h5" className="w-1/3  flex justify-center">{game?.awayPts}</Typography>
        <Typography variant="h5" className="w-1/3  flex justify-center">{game?.homePts}</Typography>
        </div>
      </CardFooter>
      </Card>


      
      {isScoreBoardModalOpen && (
        <ScoreBoard gameId={game.gameID} onClose={toggleScoreBoardModal} />
      )}
    </>
  );
}
