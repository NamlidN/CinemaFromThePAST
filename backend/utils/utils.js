
import fs from 'fs';
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

export const readFile = () => {

    return new Promise((resolve, reject) => {
        fs.readFile("./data.json", (error, data) => {
            const seats = JSON.parse(data);
            resolve(seats);
        });
    });

};
export const writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./data.json", JSON.stringify(data, null, 2), (error) => {
            if (error) {
                reject(error);

            }
            resolve("Daten geschrieben");
        });
    });
};

export const sendmail = (data) => {
    return new Promise((resolve, reject) => {
        const message = {
            to: "namlid.999@gmail.com",
            from: "ehk.hho@geoo.com",
            subject: `Es wurde Platz ${data}  reserviert`,
            text: `Es wurde Platz ${data}  reserviert`,
            html: `<p>Es wurde Platz ${data}  reserviert</p>`,
        }
        transport.sendMail(message, (error, info) => {
            console.log("dsjdfjkkhgjfdösfhksfjbjhfkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsnkdjfdfjffdhgdfshhgdfghdgfffdgfgdfdggfsgfdgfdgfdsgfdsfgfgfgdsgdsfgdgdfgtcbuzzrzcrbzcbzzbcbzuczbocrtbzuoirtczbbcrczedecncnrncrtcnrsntcnctooczouirztdounortdnnsrl");
            resolve(info),
            reject(error)
        });
    });
}

