const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://evgk2016s:inop1234@inop-project.l4ctnhu.mongodb.net/?retryWrites=true&w=majority"; // password can be hidden using a .env file and dotenv npm package
const dbName = 'inop-project';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = {
  client,
  dbName,
}