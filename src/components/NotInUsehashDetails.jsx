import bcrypt from 'bcryptjs'

export default function HashDetails(id_) {
    try {
        console.log(`login details from hashDetails:- ${id_}`);
        const id = bcrypt.hashSync(id_, 10);
        localStorage.setItem("cref", JSON.stringify(id));

    } catch (error) {
        console.log(error)
    }

};