const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {db} = require('./config/db.js')

const app = express()

dotenv.config
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on port ${process.env.PORT}||3001`);
})

app.get('/products/shoes', (req,res) => {
    db('shoes')
    .select('*')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err);
    })
})

app.get('/products/harnesses', (req,res) => {
    db('harnesses')
    .select('*')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err);
    })
})

app.get('/products/ropes', (req,res) => {
    db('ropes')
    .select('*')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err);
    })
})

app.get('/products/helmets', (req,res) => {
    db('helmets')
    .select('*')
    .then(rows => {
        res.json(rows)
    })
    .catch(err => {
        console.log(err);
    })
})

app.post('/cart', (req,res) => {
    db('cart')
    .insert(req.body)
    .returning('*')
    .then(rows => {
        res.json({msg:'added'})
    }) 
    .catch(e => {
        console.log(e);
    })
})

app.get('/cart', (req,res) => {
    db('cart')
    .select('*')
    .then(rows => {
        res.json(rows)
    })
    .catch(e => {
        console.log(e);
    })
})