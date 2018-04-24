const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title: {type: String, required: true, unique: true},
    url: {type: String,},
    synopsis: {type: String},
    snippet: {type: String},
    source: {type: String},
    pubDate: {type: String},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;