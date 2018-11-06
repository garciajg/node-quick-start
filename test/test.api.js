const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const mongoose = require('mongoose');
require('sinon-mongoose');

var Note = require('../app/models/note.model');

describe("Get all Notes", () => {
    it("should return all Notes", (done) => {
        var NoteMock = sinon.mock(Note);
        var expectedResult = {status:true, notes: []};
        NoteMock.expects('find').yields(null, expectedResult);
        Note.find( (err, result) => {
            NoteMock.verify();
            NoteMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    it("should return error", function(done){
        var NoteMock = sinon.mock(Note);
        var expectedResult = {status: false, error: "Something went wrong"};
        NoteMock.expects('find').yields(expectedResult, null);
        Note.find( (err, result) => {
            NoteMock.verify();
            NoteMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});

describe("Post a new note", () => {
    it("should create new post", function(done){
        var NoteMock = sinon.mock(new Note({ title: 'Save new todo from mock', content: 'This is the content'}));
        var note = NoteMock.object;
        var expectedResult = { status: true };
        NoteMock.expects('save').yields(null, expectedResult);
        note.save(function (err, result) {
            NoteMock.verify();
            NoteMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });
    // Test will pass if the todo is not saved
    it("should return error, if post not saved", function(done){
        var NoteMock = sinon.mock(new Note({ title: 'Save new todo from mock', content:'More content'}));
        var note = NoteMock.object;
        var expectedResult = { status: false };
        NoteMock.expects('save').yields(expectedResult, null);
        note.save(function (err, result) {
            NoteMock.verify();
            NoteMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});
