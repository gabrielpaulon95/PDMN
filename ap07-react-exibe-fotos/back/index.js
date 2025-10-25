require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const axios = require('axios')
console.log(process.env)

app.use(cors());

app.get('/search',async (req, res) => {
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1/',
        headers: {
            Authorization: process.env.PEXELS_KEY
        }
    })
    const result = await pexelsClient.get('/search', {
        params: {
            query: req.query.query 
        }
    })
    res.json({photos: result.data.photos})
})
const port = 3000
app.listen(port, () => console.log(`Back. porta ${port}.`))