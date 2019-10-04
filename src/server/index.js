const express = require('express');



const port = 8080;
const app = express();

app.use(express.static('dist'));


//start the server
app.listen(port, () => {
    console.log('The server is running on http://localhost:'+port);
})

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});