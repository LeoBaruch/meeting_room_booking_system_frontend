"use client";
import Password from "antd/lib/input/Password";
import FormItem from "antd/lib/form/FormItem";
export default function ConfirmItem() {
  return (
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
  );
}
