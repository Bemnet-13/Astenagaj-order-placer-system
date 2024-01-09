const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Astenagaj';

async function main() {
    try {
        // Connect to the MongoDB server
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Connected to MongoDB');

        // Use the connected client to interact with the database
        const db = client.db(dbName);

        // Example: Insert a document into a collection
        const collection = db.collection('Astenagaj-User');
        const result = await collection.insertOne({ name: 'John Doe', age: 30 });
        console.log('Document inserted:', result.ops[0]);

        // Close the connection
        await client.close();
        console.log('Connection closed');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

// Run the main function
main();
