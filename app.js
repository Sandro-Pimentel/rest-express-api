require('dotenv').config({path: `${process.cwd()}/.env`});
const express = require('express');
const authRouter = require('./routes/authRoute');

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'sucess',
        message: 'REST API Working'
    });
});

app.use('/api/v1/auth', authRouter);

app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'Route not found'
    })
})

app.listen(process.env.APP_PORT, () => {
    console.log(`Server up and running on ${PORT}`);
});
