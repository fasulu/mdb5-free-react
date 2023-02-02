
const PwdValidation = (props) => {
  let pwdLength = props.replace(/\s+/g, "").length;
  let pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\ ])(?=.{8,})";
  let validPwd=pattern.test(props);
  if ((pwdLength < 6 || pwdLength > 10) && !validPwd ){
    return false; // return errInfo if password is invalid
  } else {

    return true; // return true if password is valid
  }
};

export default PwdValidation;
