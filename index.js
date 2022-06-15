const express = require('express') 
const app = express() // express 객체

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {res.send('Server Response Success!')})

app.get('/api/data', (req, res) => res.json({data: 'data'}))

app.listen(PORT, () => {
  console.log(`server running port : ${PORT}!!`)
})