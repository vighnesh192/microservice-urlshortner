import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    original_url: 'string'
});

export const UrlDb = mongoose.model('UrlDb', UrlSchema);