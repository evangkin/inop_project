const { client, dbName } = require('./mongo.connection');

// Create a new job post
async function createDocument(collection, document) {

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collection).insertOne(document);
    console.log('Document created:', result.insertedId);
  } finally {
    client.close();
  }
}

// Read job posts
async function readDocuments(collection) {

  try {
    await client.connect();
    const db = client.db(dbName);
    const documents = await db.collection(collection).find().toArray();
    console.log('Documents:', documents);
    return documents;
  } finally {
    client.close();
  }
}

// Update a job post
async function updateDocument(collection, filter, update) {

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collection).updateOne(filter, { $set: update });
    console.log('Document updated:', result.modifiedCount);
  } finally {
    client.close();
  }
}

// Delete a job post
async function deleteDocument(collection, filter) {

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collection).deleteOne(filter);
    console.log('Document deleted:', result.deletedCount);
  } finally {
    client.close();
  }
}

module.exports = {
  createDocument,
  readDocuments,
  updateDocument,
  deleteDocument,
}