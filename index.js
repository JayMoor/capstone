const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

app.listen(
    PORT,
    () => console.log (`its here on http://localhost:${PORT}`)
)

app.get('/albums', (req, res) => {
    res.status(200).send({
        album: 'Drunk',
        artist: 'thndercat',
        producer: 'Flying Lotus',
        releaseDate: '',
        genre:'',
        dateAdded:'',
       })
})

app.post('/albums', (req, res) =>{
    const { id } = req.params;
    const { album } = req.body

    if (!album){
        res.status(418).send({ message: 'We need an album stoopid! '})
    }

    res.send({
        album: `print your album name ${album} and ID of ${id}`,
    })
})