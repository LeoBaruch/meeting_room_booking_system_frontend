"use client";
import { Form } from "antd";

export default function RegisterForm({ children }) {
  return (
    <Form
      labelCol={{ span: 8 }}
      onFinish={(values) => {
        console.log(values);
      }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
    >
      {children}
    </Form>
  );
}
