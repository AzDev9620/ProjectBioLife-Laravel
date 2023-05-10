const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://javlonbek:to0CSqZSGegao7tD@cluster0.tudrz.mongodb.net/bioLab'

module.exports = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        const db = mongoose.connection

        db.on('error', console.error.bind(console, 'Connection error: '))
        db.once('open', function () {
            console.log('MongoDB global connected');
        })
    } catch (e) {
        console.log(e);
    }
}