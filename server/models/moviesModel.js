//moviesModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesShema = new Schema(
    {
        name: { type: String, required: true },
        yearPremiered: { type: String, required: true },
        genres: { type: Array, required: true },
        imageUrl: { type: String, required: true },
        watchMovies: { type: Array, required: false}
        
    } , { versionKey: false } ) 

const Movies = mongoose.model('Movies', moviesShema, 'movies');

module.exports = Movies;