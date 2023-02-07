
export const validPwd = (password) => {
  let pwdLength = password.replace(/\s+/g, "").length;
  let patternP = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  let validPwd = password.match(patternP);

  if ((pwdLength < 8 || pwdLength > 10) || !validPwd) {
    return false;
  } else {
    return true;
  }
};

export const validEmail = (email) => {
  let patternE = /[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  if (email.match(patternE)) {
    console.log("Email good");
    return true;
  } else {
    console.log("Email Not good");
    return false;
  }
};

export const validPostcode = (postcode) => {
  let patternN = '^[a-zA-Z]{1,2}[0-9]{1,2}[ ]{1}[0-9]{1,1}[a-zA-Z]{2}$';
  let validPostcode = postcode.match(patternN);
  if (!validPostcode) {
    return false;
  } else {
    return true;
  }
};

export const validName = (name) => {
  let patternN = /^[a-zA-Z- ]*$/; // /^[a-zA-Z]+$/
  let validName = name.match(patternN);
  let nameLength = name.replace(/\s+/g, "").length;

  if (!validName || (nameLength < 6 || nameLength > 20)) {
    return false;
  } else {
    return true;
  }
};

export const validNumber = (num) => {
  let numLength = num.replace(/\s+/g, "").length;
  let patternNum = '^[0-9]{0,15}$';
  let validNnum = num.match(patternNum);

  if ((numLength < 9 || numLength > 20) || !validNnum) {
    return false;
  } else {
    return true;
  }
};

export const validAddress = (address) => {
  let addressLength = address.length;

  if (addressLength < 4) {
    return false;
  } else {
    return true;
  }
};

export const ValidNINO = (nino) => {
  let patternNino = '^[a-zA-Z]{2}[0-9]{6}[a-zA-Z]{1}$';
  let resultNino = nino.match(patternNino);

  if (resultNino) {
    return true;
  } else {
    return false;
  }
};

export const emailMatch = (email, reEnterEmail) => {
  if ((email !== reEnterEmail) || (email === "") || (reEnterEmail === "")) {
    console.log('Error:- Emails are not same');
    return false
  } else {
    console.log('Emails are matches')
    return true
  }
};

export const pwdMatch = (pwd, repwd) => {
  if ((pwd !== repwd) || (pwd === "") || (repwd === "")) {
    console.log('Error:- Passwords are not same');
    return false
  } else {
    console.log('Password are same')
    return true
  }
};

export const memDateMatch = (memDate, reMemDate) => {
  if ((memDate !== reMemDate) || (memDate === "") || (reMemDate === "")) {
    console.log('Error:- Memorable dates are not same');
    return false
  } else {
    console.log('Memorable dates are same')
    return true
  }
};