import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e799dcaf2f3e86",
      pass: "eb71e7089ad588"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Kelvin Feltrin <kelvin.delucca@gmail.com>',
            subject,
            html: body,
        });
    };
}