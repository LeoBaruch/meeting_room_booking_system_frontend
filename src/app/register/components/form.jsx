"use client";
import { Button, Space, Row, Input, Form, message } from "antd";
import Password from "antd/lib/input/Password";
import FormItem from "antd/lib/form/FormItem";
import request from "@/utils/request";

export default function RegisterForm() {
  const [form] = Form.useForm();

  const sendCaptcha = async () => {
    try {
      const email = await form.validateFields(["email"]);
      const res = await request.post("/user/register/captcha", { ...email });
      console.log("res: ", res);
    } catch (e) {
      const msg = e?.errorFields?.[0]?.errors?.[0] || "请输入正确邮箱";

      message.error(msg);
    }
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      onFinish={(values) => {
        console.log(values);
      }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
    >
      <FormItem
        label="用户名"
        name="username"
        rules={[{ required: true, message: "请输入用户名!" }]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="昵称"
        name="nickname"
        rules={[{ required: true, message: "请输入昵称!" }]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Password />
      </FormItem>
      <FormItem
        label="确认密码"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "请确认密码!" },
          ({ getFieldValue }) => {
            return {
              async validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次密码输入不一致!"));
              },
            };
          },
        ]}
      >
        <Password />
      </FormItem>
      <FormItem
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: "请输入邮箱!" },
          { type: "email", message: "请输入正确邮箱!" },
        ]}
      >
        <Input />
      </FormItem>
      <Row>
        <Space>
          <FormItem
            label="验证码"
            name="captcha"
            rules={[{ required: true, message: "请输入验证吗!" }, {}]}
          >
            <Input />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={sendCaptcha}>
              发送验证码
            </Button>
          </FormItem>
        </Space>
      </Row>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
          className="block w-1/2 mx-auto mt"
        >
          注册
        </Button>
      </FormItem>
    </Form>
  );
}
