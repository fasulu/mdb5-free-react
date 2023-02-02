const NameValidation = (props) => {
  let onlyAphaPattern = /^[a-zA-Z- ]*$/; // /^[a-zA-Z]+$/
  let validName = onlyAphaPattern.test(props);
  let nameLength = props.replace(/\s+/g, "").length;

  if (!validName || nameLength < 4 || nameLength > 20) {
    return false; // return false if name is invalid
  } else {
    return true; // return true if name is valid
  }
};

export default NameValidation;
