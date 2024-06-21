
const Song = require('../models/song');
// Create a new song
exports.createSong = async (req, res) => {
 const { title, description,comment,genre,rating,artistEmail } = req.body;
 try {
   const song = new Song({ title, description,comment,genre,rating,artistEmail });
   const savedSong = await song.save();
   res.status(201).json(savedSong);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while creating the song' });
 }
};

// Get all songs
exports.getAllSongs = async (req, res) => {
 try {
   const song = await Song.find();
   res.json(song);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching song' });
 }
};

// Get a specific song by ID
exports.getSong = async (req, res) => {
 const songId = req.params.id;
 try {
   const song = await Song.findById(songId);
     if (!song) {
       return res.status(404).json({ error: 'Song not found' });
       }
       res.json(song);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while fetching the song' });
 }
};

// Update a song by ID
exports.updateSong = async (req, res) => {
 const songId = req.params.id;
 const {  title, description,comment,genre,rating,artistEmail } = req.body;
 try {
   const updatedSong = await Song.findByIdAndUpdate(
   songId,{  title, description,comment,genre,rating,artistEmail },{ new: true });
   if (!updatedSong) {
       return res.status(404).json({ error: 'Song not found' });
   }
   res.json(updatedSong);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while updating the song' });
 }
};

// Delete a song by ID
exports.deleteSong = async (req, res) => {
 const songId = req.params.id;
 try {
   const deletedSong = await Song.findByIdAndRemove(songId);
   if (!deletedSong) {
 return res.status(404).json({ error: 'Song not found' });
 }
   res.json(deletedSong);
 } catch (error) {
   res.status(500).json({ error: 'An error occurred while deleting the song' });
 }
};

//updating comment
exports.updateComment = async (req, res) => {
  const songId = req.params.id;
  const {  title, description,comment,genre,rating,artistEmail } = req.body;
  try {
    const updatedSong = await Song.findByIdAndUpdate(
    songId,{  title, description,comment,genre,rating,artistEmail },{ new: true });
    if (!updatedSong) {
        return res.status(404).json({ error: 'Song not found' });
    }
    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the song' });
  }
 };

 exports.getComment= async (req, res) => {
  const songId = req.params.id;
  try {
    const song = await Song.findById(songId);
      if (!song) {
        return res.status(404).json({ error: 'Song not found' });
        }
        res.json(song);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the song' });
  }
 };