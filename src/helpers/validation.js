export const validateEmail = (email) => {
  const re =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone, length = 11) => {
  return phone.match(/\d/g).length === length;
};

export const validatePassword = (password) => {
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
};

export const validateName = (name) => {
  if (name.length < 3) {
    return false;
  } else {
    return true;
  }
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword !== password) {
    return false;
  } else {
    return true;
  }
};
