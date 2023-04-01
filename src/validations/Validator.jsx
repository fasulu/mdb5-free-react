import moment from 'moment/moment';

function validEmail(email) {
  let patternE = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

  if (!email == "") {
    if (email.match(patternE)) {
      console.log("Email good");
      return true;
    } else {
      console.log("Email Not good");
      return false;
    }
  } else {
    return false;
  }

};

// the below postcode will check, is the postcode is in right format or empty field.
// if it is right and empty field send true else send false flag
function validPostcode(postcode) {
  let patternN = '^[a-zA-Z]{1,2}[0-9]{1,2}[ ]{1}[0-9]{1,1}[a-zA-Z]{2}$';
  let validPostcode = postcode.match(patternN);
  if (validPostcode || postcode == "") {
    return true;
  } else if (!validPostcode) {
    return false;
  }
};

function validName(name) {
  let patternN = /^[a-zA-Z- ]*$/; // /^[a-zA-Z]+$/
  let validName = name.match(patternN);
  let nameLength = name.replace(/\s+/g, "").length;

  if (!validName || (nameLength < 4 || nameLength > 20)) {
    return false;
  } else {
    return true;
  }
};

function validMName(name) {
  let patternN = /^[a-zA-Z- ]*$/; // /^[a-zA-Z]+$/
  let validName = name.match(patternN);

  if (!validName) {
    return false;
  } else {
    return true;
  }
};

function validNumber(num) {
  let numLength = num.replace(/\s+/g, "").length;
  let patternNum = '^[0-9]{0,15}$';
  let validNnum = num.match(patternNum);

  if ((numLength < 9 || numLength > 20) || !validNnum) {
    return false;
  } else {
    return true;
  }
};

function validAddress(address) {
  let addressLength = address.length;

  if (addressLength < 4) {
    return false;
  } else {
    return true;
  }
};

function validNINO(nino) {
  let patternNino = '^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$';
  let resultNino = nino.match(patternNino);

  if (resultNino) {
    return true;
  } else {
    return false;
  }
};

function emailMatch(email, reEnterEmail) {
  if ((email !== reEnterEmail) || (email === "") || (reEnterEmail === "")) {
    console.log('Error:- Emails are not same');
    return false
  } else {
    console.log('Emails are matches')
    return true
  }
};

function validPwd(password) {
  let pwdLength = password.replace(/\s+/g, "").length;
  let patternP = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  let validPwd = password.match(patternP);

  if ((pwdLength < 8 || pwdLength > 10) || !validPwd) {
    return false;
  } else {
    return true;
  }
};

function pwdMatch(pwd, repwd) {
  if ((pwd !== repwd) || (pwd === "") || (repwd === "")) {
    console.log('Error:- Passwords are not same');
    return false
  } else {
    console.log('Password are same')
    return true
  }
};

function memDateMatch(date1, date2) {

  if (date1 !== date2) {
    console.log('Error:- Memorable dates are not same');
    return false
  } else {
    console.log('Memorable dates are same');
    return true
  }
};

function validDate(date_) {
  // let memDatePattern = '^(?:(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])|(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9]))/[0-9]{4}$';
  // let result = date_.match(memDatePattern);
  console.log(date_)
  if (!date_ == "--") {
    let result = moment(date_, "YYYY-MM-DD").isValid()
    if (result) {
      console.log('Valid date')
      return true
    } else {
      console.log('Error:- Not a valid date');
      return false
    }
  } else {
    return false
  }

};

function ToCamelCase(props) {
  return props.replace(/\b(\w)/g, s => s.toUpperCase());
}

export {
  ToCamelCase,
  validNINO,
  validPwd,
  validEmail,
  validPostcode,
  validName,
  validMName,
  validNumber,
  validAddress,
  emailMatch,
  pwdMatch,
  memDateMatch,
  validDate
}