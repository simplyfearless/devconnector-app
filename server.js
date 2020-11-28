const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect DB
connectDB()

app.get('/', (req, res) => res.send('API up and running'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server up on port ${PORT}'))

