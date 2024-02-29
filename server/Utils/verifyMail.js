import nodemailer from "nodemailer";

const verifyMail = async (email, link) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAIL_EMAIL,
        pass: process.env.NODEMAIL_PASSWORD,
      },
    });

    transporter.sendMail({
      from: process.env.NODEMAIL_EMAIL,
      to: email,
      subject: "Account Verification",
      text: "welcome to MakeiT",
      html: `
            <div>
            <a href=${link}>Click here to activate your account</a>
            </div>
            `,
    });
    console.log("mail send successfully");
  } catch (err) {
    console.log(err, "mail failed");
  }
};

export default verifyMail;
