const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const fs = require('fs')

// Use Express's built-in JSON parser for request bodies.
app.use(express.json());
const dataDirectory = 'DataFiles';

// REST POST to save data
app.post('/savedata', (req, res) => {
    const data = req.body
    fs.mkdirSync(dataDirectory, { recursive: true })
    const filename = dataDirectory + '/' + data['name'] + data['age'] + '.json'
    fs.writeFile(filename, JSON.stringify(data), (err) => {
        if (err) {
        console.error(err)
        res.status(500).send('Error saving data')
        } else {
        console.log('Data saved successfully')
        res.status(200).json({ message: 'Data saved successfully' });
        }
    })
})

// Start the server on port 3001.
app.listen(3001, () => {
  console.log('Server started on port 3001')
})
