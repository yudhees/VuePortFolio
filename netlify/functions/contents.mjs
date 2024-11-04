import { getDb } from "#config/mongodb.js";
import { toJson } from "#helper/basehelper.js";
import collect from "collect.js";

const db=await getDb()
export default async (req, context) => {
  const dbData=await db.collection('contents').find().toArray()
  const data=collect(dbData).mapWithKeys(val=>[val.name,val]).all()
  return toJson({success:true,data})
};
export const config = {
  path: "/contents",
};