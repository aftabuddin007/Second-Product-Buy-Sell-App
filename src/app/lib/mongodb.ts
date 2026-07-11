import { MongoClient, ServerApiVersion } from "mongodb";


const uri = `mongodb+srv://${process.env.DBUser}:${process.env.DBPassword}@cluster0.7n9qtku.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri,{
  serverApi: {
    version:ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// export const dbConnect = (cname:any)=>{
//   return client.db(process.env.DBUser).collection(cname)

// }
const clientPromise = client.connect();
// console.log(
//   "Connected to database:",
//   client.db("users").databaseName
// );
export default clientPromise;




