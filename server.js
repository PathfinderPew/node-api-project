const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const nameRoutes = require('./routes/nameRoutes');
app.use('/', nameRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
