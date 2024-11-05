import { sendMail } from "#config/mail.js";
import { getDb } from "#config/mongodb.js";
import { toJson } from "#helper/basehelper.js";

const db=await getDb()
export default async (req, context) => {
    if(req.method=="POST"){
        const data = await req.json();
        data.created_at=new Date()
        const {name,email,message}=data
        await db.collection('contact').insertOne(data)
        const text=`Name:${name},Email:${email}, message:${message}`;
        await sendMail({to:process.env.MAIL_USERNAME,subject:'New Recruit Message',text})
        return toJson({success:true,messaeg:"Data Updated Successfully"})
    }
};
export const config = {
  path: "/submit-contact",
};
