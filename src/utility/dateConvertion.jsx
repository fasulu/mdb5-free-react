var moment = require('moment');

function ConvertToTimeStamp(date_){
    
    try {
        console.log(date_)
        const localDate = moment(date_).format('YYYY-MM-DD');
        const timeStamp_ = moment(localDate).format("X");
        console.log(`Timestamp ${timeStamp_}`);
        return timeStamp_
    } catch (error) {
        console.log(error);
    }
}

function ConvertToDate(timeStamp_){

    try {
        const givenDate = moment.unix(timeStamp_).format('YYYY-MM-DD')
        console.log(`converted timeStamp_ in to local date ${givenDate}`)
        return givenDate
        
    } catch (error) {
        console.log(error);
    }
}

// to change timestamp into local date format
function ConvertToLocalDate(formatdate_){

    try {
        const givenDate = moment.unix(formatdate_).format('DD MMM YYYY')
        console.log(`converted timeStamp_ in to local date ${givenDate}`)
        return givenDate
        
    } catch (error) {
        console.log(error);
    }
}

// to change timestamp into local date format
function ConvertToLocalToDoDate(formatdate_){

    try {
        const givenDate = moment.unix(formatdate_).format('DD/MM/YYYY')
        console.log(`converted to local date ${givenDate}`)
        return givenDate
        
    } catch (error) {
        console.log(error);
    }
}

export {
    ConvertToTimeStamp,
    ConvertToDate,
    ConvertToLocalDate,
    ConvertToLocalToDoDate
}
