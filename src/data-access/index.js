// Import mongoose and establish a connection
// Import URL Model and inject it to makeUrlDb

import makeUrlDb from "./url-db.js";
import UrlDb from "./Url.js";

import mongoose from 'mongoose';

// DB Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const urlDbAccess = makeUrlDb({ UrlDb })

export default urlDbAccess