import axios from "axios";

async function SaveErrDetail(errDetails) {

    const errorDetailUrl = "http://localhost:9001/client/err/";
    const todayDate = new Date().toISOString().slice(0, 19);

    const err = {
        error_Location: errDetails.error_Location,
        error_Date: todayDate,
        error_Detail: errDetails.error_Detail + "\nOops! Something went wrong, please try again later."
    }
    const response = await axios.post(errorDetailUrl, err);
    return response

}

export default SaveErrDetail
