const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const app = express();

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 47008;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const rootRouter = require('./routes/rootRouter');
const userRouter = require('./routes/userRouter');
const pageNotFound = require('./middlewares/pageNotFound')
const initializer = require('./helpers/intializeDatabase')
const userModel = require('./models/UserSchema')

app.use('/', rootRouter);
app.use('/api', userRouter);
app.use(pageNotFound);

async function main() {
    try {    
        await initializer.initializeDatabase();
        await userModel.sync();
        app.listen(PORT, HOST, () => {
          console.log(`Server is live at http://${HOST}:${PORT}`);
        });
    } catch(err) {
        console.log(err)
    } 
}

main()
