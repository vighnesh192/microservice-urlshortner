// Import mongoose and establish a connection
// Import URL Model and inject it to makeUrlDb
// import connection from './connection.js';
// connection();
import { UrlDb } from './Url.js';
import makeUrlDb from "./url-db.js";

const urlDbAccess = makeUrlDb({ UrlDb })

export default urlDbAccess