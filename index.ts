import express from 'express';
import bodyParser from 'body-parser';
import rootRouter from './api/routes';
import db from './schema/index';
import dbConfig from './config/dbConfig';
import mysql from 'mysql2/promise';

const app = express();


//for bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
}).then((connection:any) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.DB};`).then(() => {
        // Safe to use sequelize now
        console.log("db creation complete");
        db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err:any) => {
        console.log("Failed to sync db: " + err.message);
    });
    })
})

app.use('/', rootRouter);
//for error handling
app.use((req, res, next) => {
    const error:any = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error:any, req:any, res:any, next:any) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
