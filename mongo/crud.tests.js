const { readDocuments, createDocument, updateDocument } = require('./mongo.crud');

async function runCrudTestCases() {
  const collectionName = 'job_posts';

  // Test Case 1: Create a job post
  const newDocument = { title: 'NodeJS developer', description: 'A nice NodeJS developer' };
  await createDocument(collectionName, newDocument);
  console.log('Test Case 1: Job post created');

  // Test Case 2: Read and update a job post
  const documents = await readDocuments(collectionName);
  if (documents.length > 0) {
    const documentToUpdate = documents[0];
    const updatedDocument = {
      _id: documentToUpdate._id,
      title: 'INOP rocks',
      description: 'An Updated job post'
    };
    const modifiedCount = await updateDocument(collectionName, { _id: documentToUpdate._id }, updatedDocument);
    console.log('Test Case 2: Job post updated:', modifiedCount);
    console.log(updatedDocument);
  } else {
    console.log('Test Case 2: No job posts found to update');
  }
}

module.exports = {
  runCrudTestCases,
}