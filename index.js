import pkg from 'mongodb';
const { MongoClient } = pkg;

import students from './first.json';
import overallStudents from './second.json';

// process.exit(-1);

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri,  { useUnifiedTopology: true } );


async function run() {
  try {
    await client.connect();

    const database = client.db('study');
    const collection1= database.collection('students');
    const collection2= database.collection('overallStudents');

    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await collection.findOne(query);
    // console.log(movie);

    const result1 = await collection1.insertMany(students);
    console.log(`${result1.insertedCount} documents were inserted`);

    const result2 = await collection2.insertMany(overallStudents);
    console.log(`${result2.insertedCount} documents were inserted`);


    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);