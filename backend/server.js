const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');



const api = require('./route/api');



const app = express();



app.use(cors());
app.use(bodyparser.json());
app.use('/api', api)

const port =  process.env.PORT || 3000;
// const posts = [
//     {message: 'hello'},
//     {message: 'introduction'}
// ]

app.get('/', (req, res) => {
    res.send('posts')
})


app.listen ( process.env.port || port, function() {
    console.log(`app listening on port ${port}`);
})