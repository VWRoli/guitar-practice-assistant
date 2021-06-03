const express = require('express');
const path = require('path');
require('./backend/db/mongoose');
//Routers
const itemRouter = require('./backend/routers/practiceItem');
const userRouter = require('./backend/routers/user');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.use(itemRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
