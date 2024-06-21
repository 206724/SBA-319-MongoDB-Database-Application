const express = require('express');
const router = express.Router();
const songController = require('../controllers/songController');

router.get('/songs', songController.getAllSongs);
router.post('/songs', songController.createSong);
router.get('/songs/:id', songController.getSong);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);
router.put('/songs/:id/comment',songController.updateComment)
router.get('/songs/:id/comment',songController.getComment)
// router.get('./songs/comment',songController.getAllComment)


module.exports = router;