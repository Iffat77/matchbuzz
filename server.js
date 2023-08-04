const PORT = 8000
const express = require('express')
const app = express()
const axios = require('axios');
const cors = require('cors')
require('dotenv').config()

app.use(cors())

app.get('/dailyscoreboard', async (req, res) => {
  
  const options = {
    method: 'GET',
    url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBScoresOnly',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
  }

})


// app.get('/boxscore', async (req, res) => {
  

//   const axios = require('axios');

//   const options = {
//     method: 'GET',
//     url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBBoxScore',
//     params: {
//       gameID: '20230802_CHW@TEX'
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//       'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }

// })



app.listen(PORT, () => console.log('running on port' + PORT))