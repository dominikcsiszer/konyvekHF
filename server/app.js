const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
require('dotenv').config()

const cors = require('cors')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    res.status(200).json("Some data")
})

/* Routes */
const konyvekRoute = require('./routes/konyvekRoute')

/* API */
app.use('/api', konyvekRoute)

app.listen(PORT, () => console.log('Listening on ' + PORT))