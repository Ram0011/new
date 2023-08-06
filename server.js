const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const path = require('path');
const connentDB = require('./config/connectDB');

dotenv.config();

//database call
connentDB();

//rest obj
const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
//user routes
app.use("/api/v1/users", require('./routes/userRoute'));

//transaction routes
app.use("/api/v1/transactions", require('./routes/transactionRoutes'));

//static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

//PORT
const PORT = 8080 || process.env.PORT;


//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});