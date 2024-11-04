import { getDb } from "#config/mongodb.js";
import { toJson } from "#helper/basehelper.js";
import collect from "collect.js";

const db=await getDb()
export default async (req, context) => {
  const [contents, experience, skills] = await Promise.all([
    getContents(),
    getExperience(),
    getSkills()
  ]);
  const data={contents,experience,skills}
  return toJson({success:true,data})
};
export const config = {
  path: "/contents",
};

async function getContents(){
  const dbData=await db.collection('contents').find().toArray()
  const data=collect(dbData).mapWithKeys(val=>[val.name,val]).all()
  return data
}
async function getExperience(){
  const data=await db.collection('experience').find().toArray()
  return data
}
async function getSkills(){
  const data=await db.collection('skills').find().sort({percentage:-1}).toArray()
  return data
}