import {exp} from 'react-native-reanimated';

const validation = (value, rules, form) => {
  let valid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isRequired':
        valid = valid && validateRequired(value);
        // console.log(valid)
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        // console.log(valid)
        break;
      case 'minLength':
        valid = valid && validateMinLength(value, rules[rule]);
        // console.log(valid)
        break;
      case 'confirmPassword':
        valid =
          valid &&
          validateConfirmPassword(value, form[rules.confirmPassword].value);
        // console.log(valid)
        // rules: {
        //     confirmPassword: 'password'
        //   },

        break;
      default:
        valid = true;
    }
  }
  return valid;
};

const validateConfirmPassword = (confirmPassword, password) => {
  return confirmPassword === password;
};

const validateMinLength = (value, ruleValue) => {
  return value.length >= ruleValue;
};

const validateEmail = value => {
  const expression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\['\d'{1,3}\.'\d'{1,3}\.'\d'{1,3}\.'\d'{1,3})|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(value).toLocaleLowerCase());
};

const validateRequired = value => {
  return value !== '';
};

export default validation;
