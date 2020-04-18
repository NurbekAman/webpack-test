const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'config', 'build')));
app.get('/*', (req, res) => {
    console.log(path.join(__dirname, 'config', 'build', 'index.html'));
    res.sendFile(path.join(__dirname, 'config', 'build', 'index.html'));
});
app.listen(3000);