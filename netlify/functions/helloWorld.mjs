// import { getDb } from "#config/mongodb.js";

// const db=await getDb()
export default async (req, context) => {
  // const data=await db.collection('contents').find().toArray()
  const data={name:'yudhees'}
  return new Response(JSON.stringify(data),{ headers: {
    'Content-Type': 'application/json', 
  },})
};
export const config = {
  path: "/hello",
};