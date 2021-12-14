// Import mongoose and establish a connection
// Import URL Model and inject it to makeUrlDb

import makeUrlDb from "./url-db.js";
import { UrlDb } from './Url.js'

import mongoose from 'mongoose';

// DB Connection
const url = process.env.MONGO_URI
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('Connected to DB!!'))
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const urlDbAccess = makeUrlDb({ UrlDb })

export default urlDbAccess