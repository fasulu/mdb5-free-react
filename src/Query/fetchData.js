import axios from "axios";

const fetchData = async (getUrl, getId) => {

    console.log(`I am  in fetchData module ${getUrl} ${getId}`)
    const response = await axios.get(getUrl + getId)
    const msg = response.data.message;
    const fname = response.data.clientExist.client_firstname;
    const sname = response.data.clientExist.client_middlename;

    console.log(msg);
    console.log(fname, sname);
    return (fname + " " + sname);
    // return response.json();
}
export default fetchData;