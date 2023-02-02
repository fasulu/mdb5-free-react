
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
  let patternN = /^[a-zA-Z0-9- ]*$/;
  let validPostcode = patternN.test(postcode);
  let nameLength = postcode.replace(/\s+/g, "").length;

  if (!validPostcode || (nameLength < 4 || nameLength > 8)) {
    return false;
  } else {
    return true;
  }
};

export const validName = (name) => {
  let patternN = /^[a-zA-Z- ]*$/; // /^[a-zA-Z]+$/
  let validName = patternN.test(name);
  let nameLength = name.replace(/\s+/g, "").length;

  if (!validName || (nameLength < 6 || nameLength > 20)) {
    return false;
  } else {
    return true;
  }
};

export const emailMatch = (email, reEnterEmail) => {
  if (email !== reEnterEmail)  {
    console.log('Error:- Emails are not same');
    return false
  } else {
    console.log('Emails are matches')
    return true
  }
};

export const pwdMatch = (pwd, repwd) => {
  if (pwd !== repwd)  {
    console.log('Error:- Passwords are not same');
    return false
  } else {
    console.log('Password and memorable dates are matches')
    return true
  }
};

export const memDateMatch = (memDate, reMemDate) => {
  if (memDate !== reMemDate) {
    console.log('Error:- Memorable are not same');
    return false
  } else {
    console.log('Memorable dates are matches')
    return true
  }
};