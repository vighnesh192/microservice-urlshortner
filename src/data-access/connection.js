import mongoose from 'mongoose';

// DB Connection
export default(function() {
    const url = process.env.MONGO_URI
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('Connected to DB!!'))
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
})()