import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Block } from '../../../componets';
import { Link } from "react-router-dom";
import { validateField } from "../../../utils/helper/index"

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,

  } = props;
  return (
    <div>
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуиста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <Form.Item
              validateStatus={validateField('user', errors, touched)}
              hasFeedback
              help={errors.user && touched.user && <div id="feedback">{errors.user}</div>}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" placeholder="Username"
                value={values.user}
                onChange={handleChange}
                onBlur={handleBlur}
                name="user"
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField('password', errors, touched)}
              hasFeedback
              help={errors.password && touched.password && <div id="feedback">{errors.password}</div>}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name="password"
              />
            </Form.Item>

            <Form.Item>
              <Button onClick={handleSubmit} type="primary" htmlType="submit" size="large" >
                Войти в аккаунт
        </Button>
            </Form.Item>

            <Link className="auth__register" href="#" to="/register">Зарегистрироваться</Link>

          </Form>
        </Block>
      </div>
    </div>
  );
}

export default LoginForm;
