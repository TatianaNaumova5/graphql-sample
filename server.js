const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema}= require('graphql');
const cors = require('cors');
const db = require('./db')
const port = 8080;

// const schema = buildSchema(`
//
// type Query {
//   hello:String
//   users:[User]
// }
//
// type User {
//   id: ID!
//   firstName:String
//   lastName:String
//   email: String
// }
//
// type Mutation {
// createUser(input:UserInput): User
// updateUser(id:ID!, input:UserInput): User
// }
//
// input UserInput{
// firstName:String
// lastName:String
// }
//  `);

//resolver
const root = {
    hello: ()=> "Hello World!",
    users: ()=> db.users.list()
}

const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(port, ()=> {

    console.log(`Server Listening on ${port}`)
})