const Users = require('./model/users')

module.exports = {
    users: async () => {
        return await Users.find()
    },

    hello:  ()=> { 'Hello my friend!'}
}