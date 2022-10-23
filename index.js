const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hello World</h2>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// 1:53:43