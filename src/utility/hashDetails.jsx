// import * as CryptoJS from 'crypto-js'
import { AES } from "crypto-js";;
import Utf8 from 'crypto-js/enc-utf8';
// import {secretKey} from '../utility';

function encryptDetails(id_) {
    try {
        console.log(`login details from hashDetails:- ${id_}`);
        const hashedID = AES.encrypt(JSON.stringify(id_), 'abc123').toString();
        console.log(`Encrypted hashedID is:- ${hashedID}`)
        window.localStorage.setItem("cref", hashedID);
    } catch (error) {
        console.log(error);
    }
}

function decryptDetails() {
    try {
        const cryptedData = window.localStorage.getItem('cref');
        console.log(`login details from hashDetails:- ${cryptedData}`);
        const bytesData = AES.decrypt(cryptedData, 'abc123');
        const decryptedID = JSON.parse(bytesData.toString(Utf8));
        console.log(`Encrypted hashedID is:- ${decryptedID}`)
        return decryptedID
    } catch (error) {
        console.log(error);
    }
}

export {
    encryptDetails,
    decryptDetails
}