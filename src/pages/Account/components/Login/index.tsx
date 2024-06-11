import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

// const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form bg-white/60 backdrop-blur-sm w-96 h-fit p-4 rounded-md shadow-md md:p-8"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <div className="flex justify-between">
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div>
          <Link to={"/advisor/account/register"}>Or register now!</Link>
        </div>
      </div>
    </Form>
  );
}
