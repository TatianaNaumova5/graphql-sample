const { buildSchema } = require('graphql');
 const schema = buildSchema(`
type Query {
  hello:String
  users:[User]
}

type User {
  id: ID!
  firstName:String
  lastName:String
  email: String
}

type Mutation {
createUser(input:UserInput): User
updateUser(id:ID!, input:UserInput): User
}

input UserInput{
firstName:String
lastName:String
}
`);

 module.schema = schema