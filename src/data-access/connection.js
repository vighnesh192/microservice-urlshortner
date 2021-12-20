import mongoose from 'mongoose';

// DB Connection
export default function connectDB(app) {
    (function() {
        const url = process.env.MONGO_URI
        mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
            if(err){
                console.log("Could not connect to MongoDB (DATA CENTER) ", err);
                }else{
                    console.log("DATA CENTER - Connected")
                }
            })
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', function() {
            console.log('Connected to DB!!');
            app.listen(process.env.PORT || 3000, function() {
                console.log(`Listening on port ${process.env.PORT || 3000}`);
            });
        });
    })()
}