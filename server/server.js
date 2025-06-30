const express = require('express')
const cors = require('cors')


const path = require('path')

const app = express()

app.use(cors())

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'db.json'))
})

app.listen(3001)