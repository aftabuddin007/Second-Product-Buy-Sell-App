import { MongoClient } from "mongodb";


const uri = `mongodb+srv://${process.env.DBUser}:${process.env.DBPassword}@cluster0.7n9qtku.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri,{
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  }
});
export const dbConnect = (cname:any)=>{
  return client.db(cname).collection(cname)

}




