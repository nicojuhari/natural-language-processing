const express = require('express');
const dotenv = require('dotenv'); 
      dotenv.config();
var AYLIENTextAPI = require('aylien_textapi');
      
//declare variables
const port = 8080;
const app = express();
var nlp = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(express.static('dist'));


//start the server
app.listen(port, () => {
    console.log('The server is running on http://localhost:'+port);
})

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

app.get('/apiCall', (req, res) => {
    
    nlp.sentiment({
        'text': 'John is a very good football player!'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });


});