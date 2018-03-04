'use strict';

// remember to start database from cmd prompt in mongo program bin directory
// mongod --dbpath \Data\NodeUdemy\mongo-data
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Doug', age: 33};
// //object destructuring ES6
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Gadzooks! Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Cool Doug',
        age: 33,
        location: 'Londinium'
    }, (err, result) => {
        if (err) {
            return console.log('Failed to insert user');
        }
        console.log(result.ops[0]._id.getTimestamp());
        // console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});