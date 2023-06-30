const { DataStore}= require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    user:store.collection('users')
}


