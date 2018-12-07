const express = require('express')
const router = express.Router()
const request = require('request')

// Handle geographic branch search
router.post('/get-branches', function(req, res) {
    let query = req.query.q;

    // Appending "UK" to query rather than using the Google-recommended region param seems to handle edge cases better
    // Eg. "Halifax"
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}, UK&key=${process.env.GOOGLE_API_KEY}`
    
    // TODO: Refactor to use async/await pattern
    request(endpoint, { json: true }, (err, googleResponse) => {
        if (err) { return console.log(err); }
        res.json({
            query: query,
            interpretation: googleResponse.body.results[0].formatted_address,
            geolocation: googleResponse.body.results[0].geometry.location
        })
    });

})

module.exports = router