import clientPromise from "../../util/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("resumeParser");
  const collection = db.collection("resumes");

  if (req.method === "POST") {
    let body = req.body;
    let post = await collection.insertOne(body);
    if (post.acknowledged == true) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false, message: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Only POST requests allowed" });
  }
}
