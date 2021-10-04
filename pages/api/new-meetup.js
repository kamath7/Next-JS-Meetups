// This folder is for all api methods. needs to be named as api for next js to recognise.
// route here -> /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data; ->all inputs from the post request
    try {
      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();
      const meetupsCollection = db.collection("meetups");
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      client.close();
      res.status(201).json({
          message:'Meetup successfully added!'
      })
    } catch (error) {
        res.status(401).json({
            message:'Error adding'
        })
    }
  }
}

export default handler;
