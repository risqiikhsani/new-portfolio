import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import EmailLayout from '@/components/email';

export async function POST(request: Request) {
    // const formData = await request.formData()
    // const name = formData.get('name')
    // const email = formData.get('email')
    const res = await request.json()
    const { email, message } = res;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'risqiikhsani12@gmail.com',
            pass: process.env.APP_PASSWORD,
        },
    });

    const emailHtml = render(EmailLayout({sender:email,message:message}));

    // Set up email data
    const mailOptions = {
        from: 'risqiikhsani12@gmail.com',
        to: "risqiikhsani16@gmail.com",
        subject: "Message from portfolio",
        html: emailHtml
    };

    try {
        await transporter.sendMail(mailOptions);
        return Response.json({ message: 'Email sent successfully!' })
    } catch (error) {
        return Response.json({ message: 'Email is not sent!' })
    }
}