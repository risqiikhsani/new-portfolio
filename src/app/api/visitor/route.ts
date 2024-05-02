import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://risqiikhsani:kucingimut123@cluster0.jvtng7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = 'portfolio';
const collectionName = 'visitor';

export async function GET(request: Request) {
    try {
        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const viewerCount = await collection.findOne({});
        const count = viewerCount ? viewerCount.count : 0;

        return Response.json({ count });
    } catch (err) {
        console.error(err);
        return Response.json({ error: 'Failed to fetch viewer count' });
    }
}

export async function POST() {
    try {
        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const viewerCount = await collection.findOne({});
        const newCount = viewerCount ? viewerCount.count + 1 : 1;

        await collection.updateOne({}, { $set: { count: newCount } }, { upsert: true });

        return Response.json({ count: newCount });
    } catch (err) {
        console.error(err);
        return Response.json({ error: 'Failed to update viewer count' });
    }
}