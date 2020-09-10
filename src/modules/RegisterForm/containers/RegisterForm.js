
import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validateFunc from "../../../utils/validations"


export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: values => {
    const errors = {};

    validateFunc({ isAuth: false, errors, values })

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);
