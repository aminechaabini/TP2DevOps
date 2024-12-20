const express = require('express');
const { getFormattedDate, getFormattedTime } = require('./utils');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/time', (req, res) => {
    const now = new Date();
    const date = getFormattedDate(now);
    const time = getFormattedTime(now);

    res.json({ date, time });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
