const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    original_url: 'string'
});

module.exports = mongoose.model('UrlDb', UrlSchema);