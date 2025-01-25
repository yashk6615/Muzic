const mongoose = require('mongoose')

const Playlist = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  songs: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Song',
    },
  ],
  collabolators: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
  ],
})

const PlaylistModel = new mongoose.model('Playlist', Playlist)

module.exports = PlaylistModel
