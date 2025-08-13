require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.MY_PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Page from github')
})

app.get('/contact',(req,res)=>{
    res.send('<a href="https://www.w3schools.com">This is a link</a>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//console.log(process.env)

