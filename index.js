import pkg from "mongodb";
const { MongoClient } = pkg;

import students from "./first.json";
import overallStudents from "./second.json";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();

    const database = client.db("study");
    const studentsCollection = database.collection("students");
    const overallStudentsCollection = database.collection("overallStudents");

    const result1 = await studentsCollection.insertMany(students);
    console.log(`${result1.insertedCount} documents were inserted`);

    const result2 = await overallStudentsCollection.insertMany(overallStudents);
    console.log(`${result2.insertedCount} documents were inserted`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
