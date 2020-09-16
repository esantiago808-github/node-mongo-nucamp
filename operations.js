const assert = require('assert').strict;

//analogous to CRUD, create = insert, read = insert, update = update, delete = remove

exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);     //example of collection (table) campsites, partners

    coll.insertOne(document, (err, result) => {
        assert.strictEqual(err, null);        //this is the err part of the argument in the line above
        callback(result);                        //the callback will return from index.js
    });
};

exports.findDocuments = (db, collection, callback) => {         //list all the documents
    const coll = db.collection(collection);

    coll.find().toArray((err, docs) => {           //find all documents and list in an array
        assert.strictEqual(err, null);
        callback(docs);
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);

    coll.updateOne(document, { $set: update }, null, (err, result) => {        //update requires 4 parameters
        assert.strictEqual(err, null);
        callback(result);
    });
};
