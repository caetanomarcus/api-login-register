import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://caetanomarcusf:v75704593@marks.8k3n8.mongodb.net/mark-db');

let db = mongoose.connection;

export default db;