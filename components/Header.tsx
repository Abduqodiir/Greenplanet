"use client";

import { BasketIcon, LoginIcon, SearchIcon } from "@/icons";
import { NavListType } from "@/types/NavListType";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Modal } from "antd";
import { FormEvent, useContext, useState } from "react";
import LoginInputs from "./LoginInputs";
import { Context } from "@/context/Context";
import { instance } from "@/hook/instance";
import RegisterInputs from "./RegisterInputs";
import RegisterVerify from "./RegisterVerify";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const Header = () => {
  const { setToken } = useContext(Context);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<
    | "login"
    | "register"
    | "register-verify"
    | "forgot-password"
    | "reset-password"
  >("login");

  const navList: NavListType[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Plant Care",
      path: "/plant-care",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  const [registerCode, setRegisterCode] = useState<string | null>(null);
  const [registerEmail, setRegisterEmail] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLogin === "login") {
      const data = {
        usernameoremail: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
      };
      instance()
        .post("/login", data)
        .then((res) => {
          setOpenModal(false);
          setToken(res.data.access_token);
        });
    } else if (isLogin === "register") {
      const data = {
        email: (e.target as HTMLFormElement).email.value,
        firstName: (e.target as HTMLFormElement).username.value,
        lastName: (e.target as HTMLFormElement).username.value,
        password: (e.target as HTMLFormElement).password.value,
      };
      instance()
        .post("/register", data)
        .then((res) => {
          setIsLogin("register-verify");
          setRegisterEmail(data.email);
        });
    } else if (isLogin === "register-verify") {
      const data = {
        email: registerEmail,
        code: registerCode,
      };
      instance()
        .post("/users/verify", {}, { params: data })
        .then((res) => {
          setIsLogin("login");
        });
    } else if (isLogin === "forgot-password") {
      const email = (e.target as HTMLFormElement).email.value;
      instance()
        .post(`/forgot/${email}`)
        .then((res) => {
          setRegisterEmail(email);
          setIsLogin("reset-password");
        });
    } else if (isLogin === "reset-password") {
      const data = {
        email: registerEmail,
        new_password: (e.target as HTMLFormElement).newPassword.value,
        otp: registerCode,
      };
      instance()
        .put("/reset-password", data)
        .then((res) => {
          setIsLogin("login");
        });
    }
  }

  return (
    <>
      <header className="pt-[25px]">
        <div className="w-[1200px] mx-auto px-[10px] flex items-center justify-between">
          <Link href={"/"}>
            <Image
              style={{ width: "150px", height: "34px" }}
              priority
              src={"/logo.svg"}
              alt="Site Logo"
              width={150}
              height={34}
            />
          </Link>

          <nav className="space-x-[50px]">
            {navList.map((item: NavListType, index: number) => (
              <Link
                className="font-normal text-[16px] leading-[20px]"
                key={index}
                href={`${item.path}`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-[30px]">
            <button>
              <SearchIcon />
            </button>
            <button>
              <BasketIcon />
            </button>
            <CustomButton
              type="button"
              onClick={() => setOpenModal(true)}
              leftIcon={<LoginIcon />}
              title="Login"
            />
          </div>
        </div>
      </header>
      <Modal footer="" open={openModal} onCancel={() => setOpenModal(false)}>
        <ul className="flex items-center justify-center gap-3 cursor-pointer">
          <li
            onClick={() => setIsLogin("login")}
            className={`text-[20px] font-medium  ${
              isLogin === "login" ? "text-[#46A358]" : "text-[#3D3D3D]"
            }`}
          >
            Login
          </li>
          <li className="w-[1.2px] h-4 bg-[#3D3D3D]"></li>
          <li
            onClick={() => setIsLogin("register")}
            className={`text-[20px] font-medium ${
              isLogin === "register" ? "text-[#46A358]" : "text-[#3D3D3D]"
            }`}
          >
            Register
          </li>
        </ul>
        <form onSubmit={handleSubmit} autoComplete="off">
          {isLogin === "login" && <LoginInputs setIsLogin={setIsLogin} />}
          {isLogin === "register" && <RegisterInputs />}
          {isLogin === "register-verify" && (
            <RegisterVerify setRegisterCode={setRegisterCode} />
          )}
          {isLogin === "forgot-password" && <ForgotPassword />}
          {isLogin === "reset-password" && (
            <ResetPassword setRegisterCode={setRegisterCode} />
          )}
          <CustomButton
            type="submit"
            extraClass="!w-full !py-4 !font-bold !text-[16px]"
            title={
              isLogin === "login"
                ? "Login"
                : isLogin === "register"
                ? "Register"
                : isLogin === "register-verify"
                ? "Verify"
                : "Send"
            }
          />
        </form>
      </Modal>
    </>
  );
};

export default Header;
