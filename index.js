const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World33');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// 39.05