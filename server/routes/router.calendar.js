const express = require('express');
const router = express.Router();
const axios = require('axios')


router.get('/', (req, res) => {
    console.log("My giphy api key:", process.env.CALENDLY_API_KEY)
    const apiKey = process.env.CALENDLY_API_KEY

    const options = {
        method: 'GET',
        url: 'https://api.calendly.com/users/me',
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}`}
      };


    axios.request(options).then(function (response) {
        console.log("here is the Data", response.data);
        res.send(response.data)

      }).catch(function (error) {
        console.error(error);
      });
})
// test
module.exports = router;