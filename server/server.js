const express = require('express');
const path = require('path');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello from the web server side...')
});

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use(express.static(path.join(__dirname, 'public')))



app.listen(3000);