const { MongoClient } = require('mongodb');

// connection url
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'etasData';

async function main() {
    // use connect method to connect tothe server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    return 'done';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());