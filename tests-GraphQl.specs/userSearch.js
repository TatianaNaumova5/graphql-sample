const { expect } = require('chai');
const request = require('supertest-graphql');
const chaiQraphQL = require('chai-graphql');
const gql = require('graphql-tag');
chai.use(chaiQraphQL);

const app = require('../../../index');
describe('USER', () => {
    describe('USER POSITIVE TESTS', () => {
        it('get all users names', (done) => {
            request(app)
                .query(
                    gql`
            query UserSearch($input: UserSearchInput) {
              userSearch(input: $input) {
                name
              }
            }
          `,
                )
                .set('Cookie', process.env.COOKIE_ADMIN.split(','))
                .expectNoErrors();
            // assert.graphQl(data)
            // expect(data.UserSearch.Name).to.be.graphQl()
            done();
        });

        it('get all users by email', (done) => {
            request(app)
                .query(
                    gql`
            query UserSearch($input: UserSearchInput) {
              userSearch(input: $input) {
                email
              }
            }
          `,
                )
                .set('Cookie', process.env.COOKIE_ADMIN.split(','))
                .expectNoErrors();
            done();
        });

        it('get all users by role', (done) => {
            request(app)
                .query(
                    gql`
            query UserSearch($input: UserSearchInput) {
              userSearch(input: $input) {
                roles
              }
            }
          `,
                )
                .set('Cookie', process.env.COOKIE_ADMIN.split(','))
                .expectNoErrors();
            done();
        });

        it('get all users by role + firstName', (done) => {
            request(app)
                .query(
                    gql`
            query UserSearch($input: UserSearchInput) {
              userSearch(input: $input) {
                firstName
                roles
              }
            }
          `,
                )
                .set('Cookie', process.env.COOKIE_ADMIN.split(','))
                .expectNoErrors();
            done();
        });
    });
});

//   describe('USER NEGATIVE TESTS', () => {});
//
