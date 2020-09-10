import React from 'react';
import { Form, Input } from 'antd';
import { MailOutlined, UserOutlined, LockOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Block } from '../../../componets';
import { Link } from "react-router-dom";

import { validateField } from "../../../utils/helper/index"

const RegisterForm = props => {
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
      <div className="auth__top">
        <h2>Зарегистрироваться</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        <Form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <Form.Item
            validateStatus={validateField("email", errors, touched)}
            hasFeedback
            help={errors.email && touched.email && <div id="feedback">{errors.email}</div>}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} size="large" placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email" />

          </Form.Item>
          <Form.Item
            hasFeedback validateStatus=""
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} size="large" placeholder="Ваше имя" />
          </Form.Item>
          <Form.Item
            validateStatus={validateField("password", errors, touched)}
            hasFeedback
            help={errors.password && touched.password && <div id="feedback">{errors.password}</div>}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} size="large" placeholder="Пароль"
              value={values.password}
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              name="password" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<ReloadOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Повторите пароль"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button onClick={handleSubmit} type="primary" htmlType="submit" size="large" >
              Зарегистрироваться
        </Button>
          </Form.Item>

          <Link className="auth__register" href="#" to="/login">Войти в аккаунт</Link>

        </Form>
      </Block>
    </div>
  )
}

export default RegisterForm;
