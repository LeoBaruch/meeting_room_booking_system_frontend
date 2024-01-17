import React from "react";
import { Button, Space, Row, Input } from "antd";
import Password from "antd/lib/input/Password";
import FormItem from "antd/lib/form/FormItem";
import ConfirmItem from "./components/comfirmInput";
import Form from "./components/form";

export default async function Register() {

  return (
    <div className="max-w-screen-md m-auto">
      <h2 className="px-3 py-6 text-2xl font-medium text-center">
        会议室预定系统 
      </h2>
      <main>
        <Form>
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
          <ConfirmItem />
          <FormItem
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: "请输入验证吗!" },
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
                rules={[{ required: true, message: "请输入验证吗!" }, { }]}
              >
                <Input />
              </FormItem>
              <FormItem>
                <Button type="primary">发送验证码</Button>
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
      </main>
    </div>
  );
}
