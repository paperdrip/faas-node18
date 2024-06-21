'use strict'

module.exports = async (event, context) => {
  const axios = require("axios")
  /*
  const result = {
    'body': JSON.stringify(event.body),
    'content-type': event.headers["content-type"]
  }
  */
   
  const options = {
    method: 'GET',
    url: 'https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=C2b9nu4jFfv2rr2eBCyaChGtF9JtrrcQ',
    headers: {accept: 'application/json'}
  };
  
  /*
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  */
  let res = await axios.request(options)
  let body = res.data
  return context
    .status(200)
    .headers({"Content-Type": "application/json"})  
    .succeed(body)

  /*
  let res = await axios.get("http://api.open-notify.org/astros.json")
  let body = `There are currently ${res.data.number} astronauts in space.`
  return context
    .status(200)
    .headers({"Content-Type": "application/json"})
    .succeed(body)
  */

}
