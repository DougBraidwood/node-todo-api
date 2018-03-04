'use strict';

// remember to start database from cmd prompt in mongo program bin directory
// mongod --dbpath \Data\NodeUdemy\mongo-data
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Gadzooks! Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a95c4b4a89f0d588cd77c57')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({name: 'Cool Doug'}).toArray().then((docs) => {
    console.log(`Users called Doug`);
    console.log(JSON.stringify(docs, undefined, 2))
}, (err) => {
    console.log('Unable to fetch users', err);
});


    // client.close();

});