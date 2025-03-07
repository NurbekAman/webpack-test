const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'config', 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'config', 'build', 'index.html'));
});
app.listen(3000);