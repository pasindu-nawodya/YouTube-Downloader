const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
require('dotenv/config');

var PORT = process.env.PORT || 4000;

app.use(cors());

app.listen(PORT, () => {
    console.log('Server Works !!! At port ' + PORT);
});

app.get('/',(req,res)=>{
    res.send('Server Running '+ PORT)
})

app.get('/video', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
    }
);

app.get('/mp3', (req,res) => {
    var URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="ytdownloader.mp3"');
    ytdl(URL, {
        format: 'mp3'
        }).pipe(res);
    }
);