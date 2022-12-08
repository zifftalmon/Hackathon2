const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./config/db.js')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on port ${process.env.PORT}||3001`);
})

app.get('/products', (req,res) => {
    db('products')
    .select('*')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err);
    })
})