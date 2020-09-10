export default ({ isAuth, errors, values }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = 'Required';
      } else if (!/^[a-z]+@[\w-]+\.[a-z]{2,4}$/i.test(value)) {
        errors.email = 'Invalid email adddress';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/i.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Invalid password ';
      }
    },
    user: (value) => {
      if (!value) {
        errors.user = 'Введите логин';
      } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/i.test(value)) {
        errors.user = 'Invalid username';
      }
    },
  };
  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
