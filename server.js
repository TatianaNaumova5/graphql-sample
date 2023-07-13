const mongoose = require('mongoose');
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema')
const resolver = require('./resolvers')

//connection URL for mongoDB
//const mongoDB = 'mongodb://localhost:27017/'
const mongoDB = 'mongodb://127.0.0.1:27017/graphqlSample'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB failed to connect'))
db.on('connected', console.log.bind(console, 'MongoDB connected to the server'))

const express = require('express');
const app = express()
const port = 8080;

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:resolver,
    graphiql:true
}))
app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
}   )