import nodemailer from 'nodemailer'
import { createTransport } from 'nodemailer'
import  dotenv from 'dotenv'

dotenv.config()

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, //'juanandres1029@gmail.com', 
        pass: process.env.EMAIL_PASS,
    }
});
//cambiar nombre archivo
const sendEmail = async (email, token) => {
    const link = `${process.env.FRONTEND_ROUTE}/?token=${token}`
    const mailOptions = {
        from: '',
        to: email,
        subject: "Recuperación de contraseña",
        html: `
            <h2>Recuperación de Contraseña</h2>
            <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
            <a href="${link}">Recuperar contraseña</a>
            <p>Si no solicitaste este cambio, ignora este mensaje.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Correo enviado a ${email}`);
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        throw new Error("No se pudo enviar el correo");
    }
}

export default sendEmail;