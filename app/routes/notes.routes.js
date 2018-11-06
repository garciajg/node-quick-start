module.exports = function (app) {
    const notes = require('../controllers/note.controller.js');

    //Create New Note
    app.post('/notes', notes.create);
    app.get('/notes', notes.findAll); // Get all Notes
    app.get('/notes/:note_id', notes.findOne); // Get specific Note
    app.put('/notes/:notes_id', notes.update); // Update Note
    app.delete('/notes/:note_id', notes.delete); // Delete Note
};