import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(process.env.URL_DATABASE);

let db = mongoose.connection;

export default db;