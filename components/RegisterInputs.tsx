import { Input } from "antd";
import React from "react";

const RegisterInputs = () => {
  return (
    <>
      <p className="text-[15px] font-normal text-[#3D3D3D] mb-[14px]">
        Enter your email and password to register.
      </p>
      <Input
      className="mb-[18px]"
        size="large"
        allowClear
        required
        name="username"
        type="text"
        placeholder="Username"
      />
      <Input
      className="mt-[18px]"
        size="large"
        allowClear
        required
        name="email"
        type="email"
        placeholder="Enter your email address"
      />
      <Input.Password
        className="mt-[17px]"
        size="large"
        allowClear
        required
        name="password"
        type="password"
        placeholder="Password"
      />
      <Input.Password
        className="my-[17px]"
        size="large"
        allowClear
        required
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
    </>
  );
};

export default RegisterInputs;
