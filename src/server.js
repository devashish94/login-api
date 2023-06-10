const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');

app.use('/users', userRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is live at http://${HOST}:${PORT}`);
});

