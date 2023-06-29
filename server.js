const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema}= require('graphql');
const cors = require('cors')