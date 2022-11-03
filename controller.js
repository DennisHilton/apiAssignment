const nssp = require('./nssp')

const getAllPersonnel = (req, res) => 
res.json({nssp})

const getPersonnel = (req, res) => {
const id = req.params.id;
for( i = 0; i<nssp.length; i++){
    if (id === i) {
        res.json(i);
    } else {res.send("errrrrror")}
    }
}

const addPersonnel = (req, res) => 
res.send(req.body)

module.exports= {getAllPersonnel, getPersonnel, addPersonnel};