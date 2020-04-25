/*
Post
- title - string
- price - string
- description - string
- images - array of strings
- location - string
- lattitude - number
- longitude - number
- author - object id (ref User)
- reviews - array of object ids (ref Review)
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  price: String,
  description: String,
  images: [String],
  location: String,
  lat: Number,
  lng: Number,
  author: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);