import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  FacebookFilled,
  AppleFilled,
  GoogleOutlined,
} from '@ant-design/icons';
import { Form, Input, Button, Checkbox, Tabs, message, Divider } from 'antd';
import { useState } from 'react';

const { TabPane } = Tabs;

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<string>('signin');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    message.success(`${activeTab === 'signin' ? 'Signed in' : 'Signed up'} successfully!`);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('Please check your input and try again.');
  };

  const renderSocialLogin = () => (
    <>
      <div className="mb-6 flex justify-center space-x-4">
        <Button icon={<FacebookFilled />} shape="circle" size="large" className="text-blue-600" />
        <Button icon={<AppleFilled />} shape="circle" size="large" />
        <Button icon={<GoogleOutlined />} shape="circle" size="large" className="text-red-500" />
      </div>
      <Divider plain className="text-gray-500">
        or
      </Divider>
    </>
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-lg p-8 shadow-md">
        <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
          <TabPane tab="Sign In" key="signin">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Welcome Back</h2>
            {renderSocialLogin()}
          </TabPane>
          <TabPane tab="Sign Up" key="signup">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Register with</h2>
          </TabPane>
        </Tabs>

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {activeTab === 'signup' && (
            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input
                prefix={<UserOutlined />}
                placeholder="Your full name"
                className="rounded-md"
              />
            </Form.Item>
          )}

          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address!' },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Your email address"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Your password"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-teal-500 hover:bg-teal-600 border-teal-500 hover:border-teal-600 w-full rounded-md"
            >
              {activeTab === 'signin' ? 'SIGN IN' : 'SIGN UP'}
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center">
          {activeTab === 'signin' ? (
            <span className="text-gray-600">
              <Button
                onClick={() => setActiveTab('signup')}
                className="text-teal-500 hover:text-teal-600 cursor-pointer"
              >
                Sign up
              </Button>
            </span>
          ) : (
            <span className="text-gray-600">
              Already have an account?{' '}
              <Button
                onClick={() => setActiveTab('signin')}
                className="text-teal-500 hover:text-teal-600 cursor-pointer"
              >
                Sign in
              </Button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
