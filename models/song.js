const mongoose = require('mongoose');

const songData = new mongoose.Schema({                               //**Unique**: Ensure all values in this field are unique.
  title: { type: String, required: true, unique: true, trim: true },//- **Trim**: Remove whitespace from strings.
  description: { type: String, default: 'No description provided', select: false },
  comment: { 
    type: String, 
    validate: {    // Custom validation logic.
      validator: function(v) {
        return v.length <= 500;
      },
      message: props => `${props.value} exceeds the maximum length of 500 characters!`
    } 
  },
  genre: { type: String, enum: ['rock', 'pop', 'jazz', 'classical'] },//- **Enum**: Restrict values to a set of specified values.
  rating: { type: Number, min: 0, max: 10 },
  releaseDate: { type: Date, default: Date.now },
  artistEmail: { type: String, lowercase: true }
});

songData.index({ title: 1 });  // Adding index to title
songData.index({ genre: 1, rating: -1 });  // Compound index on genre and rating

const Song = mongoose.model('Song', songData);

module.exports = Song;