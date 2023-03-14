var moment = require('moment');

const ConvertToTimeStamp = (date_) => {

    try {
        const localDate = moment(date_).format('YYYY-MM-DD');
        const timeStamp_ = moment(localDate).format("X");
        console.log(`Timestamp ${timeStamp_}`);
        return timeStamp_
    } catch (error) {
        console.log(error);
    }
}

const ConvertToDate = (timeStamp_) => {

    try {
        const givenDate = moment.unix(timeStamp_).format('YYYY-MM-DD')
        console.log(`converted timeStamp_ in to local date ${givenDate}`)
        return givenDate
    
    } catch (error) {
        console.log(error);
    }
}

export {
    ConvertToTimeStamp,
    ConvertToDate
}