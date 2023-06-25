const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9000;

const rootRouter = require('./routes/rootRouter');
const userRouter = require('./routes/userRouter');
const pageNotFound = require('./middlewares/pageNotFound')
const initializer = require('./helpers/intializeDatabase')
const userModel = require('./models/UserSchema')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
        console.log(err.message)
        if (err.code === 'ECONNREFUSED') {
            console.log('Database Server is not running. Please start it then try running the server')
        }
    } 
}

main()
