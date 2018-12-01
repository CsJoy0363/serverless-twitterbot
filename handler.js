'use strict';
const axios = require('axios');
const tw = require('./twitter');

module.exports.twitterBot = async event => {
  console.log(process.env.consumer_api_key)
    try {
        const getJoke = await axios({
            url: 'https://icanhazdadjoke.com/',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'bot-jokes (https://twitter.com/botjokes1)'
            }
        });

        await tw.post('statuses/update', {
            status: getJoke.data.joke
        })
    } catch (e) {
      console.log(e);
      
    }
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };