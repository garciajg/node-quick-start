const Note = require('../models/note.model.js');

// Create and save new note
exports.create = function (req, res) {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content cannot be empty"
        });
    }

    // Create Note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // Save Note in the database
    note.save()
        .then(data => {
            res.status(201).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while trying to create note"
            });
        });
};

// Retrieve and return all notes
exports.findAll = function (req, res) {
    Note.find()
        .then(notes => {
            res.status(200).send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving notes"
            });
        });
};

// Find a single note with a noteID
exports.findOne = function (req, res) {
    Note.findById(req.params['note_id'])
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.status(200).send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};

// Update a note
exports.update = function (req, res) {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    
    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params['notes_id'], {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.status(200).send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

// Delete Note
exports.delete = function (req, res) {
    Note.findByIdAndRemove(req.params['note_id'])
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};