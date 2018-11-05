module.exports = function (app) {
    const notes = require('../controllers/note.controller.js');

    //Create New Note
    app.post('/notes', notes.create);
    app.get('/notes', notes.findAll);
    app.get('/notes/:note_id', notes.findOne);
    app.put('/notes/:notes_id', notes.update);
    app.delete('/notes/:note_id', notes.delete);
};