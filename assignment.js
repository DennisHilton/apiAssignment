const { application } = require('express');
const express = require('express');
const assignment = express();
const router = require('./router')

assignment.use('/nsp', router);
assignment.use(express.json());

assignment.get('/', (req,res) => 
res.send("Welcome, NSPs")
)

const port = process.env.port || 8000
assignment.listen(port,() => {
    console.log(`listening on port ${port}...`)
} )
