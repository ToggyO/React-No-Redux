import React, { useCallback } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';

import s from './style.module.sass';

const LoginPageView = ({ history }) => {
  const onFinish = async values => {
    try {
      const request = await fetch('http://localhost:3011/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(values),
      });
      const response = await request.json();
      console.log(response);
      history.push('/home');
    } catch (error) {
      console.log(error);
    }
  };
  const memoizeOnFinish = useCallback((values) => onFinish(values), []);
  return (
    <Form
      name="basic"
      layout="vertical"
      size="large"
      initialValues={{
        remember: true,
      }}
      onFinish={memoizeOnFinish}
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item className={s.submit}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

LoginPageView.propTypes = {
  history: PropTypes.object,
};

export default LoginPageView;
