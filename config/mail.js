import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // Use TLS
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});
const sendMail=async(mailOptions)=>{
   return await transporter.sendMail({from:process.env.MAIL_USERNAME,...mailOptions});
}
export {sendMail}