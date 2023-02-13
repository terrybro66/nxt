require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URI;
async function fetchPosts() {
  const client = new MongoClient(uri, { useNewUrlParser: true });
  await client.connect();
  const db = client.db();
  const collection = db.collection('posts');
  const posts = await collection.find({}).toArray();
  return posts;
}

export default async function Profile() {
  const posts = await fetchPosts();
  return (
    <>
      <h1>Profile here</h1>
      {posts[0].message}
    </>
  );
}
