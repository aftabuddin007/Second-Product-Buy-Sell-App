import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./mongodb";
// import { mongoClient } from "./mongodb";

const client = await clientPromise;
const db = client.db("SecondHandDB");

export const authe = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },
});