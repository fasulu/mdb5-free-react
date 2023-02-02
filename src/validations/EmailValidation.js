const EmailValidation = (props) => {
  let emailPattern =
    /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let emailLength = props.replace(/\s+/g, "").length;

  if (!emailPattern.test(props) || emailLength > 35) {
    return false; // return errInfo if email is invalid
  } else {
    return true; // return true if email is valid
  }
};

export default EmailValidation;
