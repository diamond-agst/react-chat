import { withFormik } from 'formik';
import LoginForm from '../components/LoginForm';
import validateFunc from "../../../utils/validations"


export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', user: ""}),
  validate: values => {
    const errors = {};
        validateFunc({isAuth: true, errors, values})
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);
