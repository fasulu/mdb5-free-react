// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';
import { emailConfig } from '../ConfigEmail/emailConfig';

export const SendMail = async (props) => {

    let status = "";

    const serviceId = JSON.stringify(emailConfig[0].serviceId);
    const templateId = JSON.stringify(emailConfig[1].templateId);
    const publicKey = JSON.stringify(emailConfig[2].publicKey);

    console.log(`serviceId ${serviceId} templateId ${templateId} publicKey ${publicKey}`)

    const user_email = props.email;
    const sendToName = props.fname;
    const sendMessage = `Your new password ${props.pwd}`;
    const messageBody = {
        from_name: "Housing team",
        to_name: sendToName,
        message: sendMessage,
        to_email: user_email
    };

    console.log(`email address from forgot email ${user_email}, ${sendToName}, ${sendMessage}`)

    try {

        await emailjs.sendForm(
            `${process.env.REACT_APP_SERVICE_ID}`,
            `${process.env.REACT_APP_TEMPLATE_ID}`,
            messageBody,
            `${process.env.REACT_APP_USER_ID}`
        ).then(res => {
            // console.log(res);
            status = res.status

            alert(`Password sent to your email`)

            return status
        }).catch(err => console.log(err));
        // await emailjs.sendForm('service_bhamchoice', 'template_7ouxwkn', messageBody, '9cS7iwD7dUnTu3nw-')
        //     .then((result) => {
        //         //   console.log(result.text);
        //         alert("Password sent to your email")
        //     }, (error) => {
        //         console.log(error.text);
        //     });

    } catch (error) {
        console.log(error)
    }
}

