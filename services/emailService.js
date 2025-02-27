import nodemailer from 'nodemailer'
import { createTransport } from 'nodemailer'

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'juanandres1029@gmail.com', //process.env.EMAIL_USER,
        pass: 'vtnd yedf fkrh nidu' //process.env.EMAIL_PASS,
    }
});

const sendEmail = async (email, token) => {
    const link = `http://localhost:3000/verify-email/?token=${token}`
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