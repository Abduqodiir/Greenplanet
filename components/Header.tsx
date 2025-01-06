"use client"

import { BasketIcon, LoginIcon, SearchIcon } from "@/icons";
import { NavListType } from "@/types/NavListType";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { Modal } from "antd";
import { FormEvent, useState } from "react";
import LoginInputs from "./LoginInputs";

const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useState<"login" | "register">("login")

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = {
        usernameoremail: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
    }
    console.log(data)
  }

  return (
    <>
      <header className="pt-[25px]">
        <div className="w-[1200px] mx-auto px-[10px] flex items-center justify-between">
          <Image
            style={{ width: "150px", height: "34px" }}
            priority
            src={"/logo.svg"}
            alt="Site Logo"
            width={150}
            height={34}
          />

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
            <CustomButton type="button" onClick={() => setOpenModal(true)} leftIcon={<LoginIcon />} title="Login" />
          </div>
        </div>
      </header>
      <Modal footer="" open={openModal} onCancel={() =>setOpenModal(false)}>
            <ul className="flex items-center justify-center gap-3 cursor-pointer">
                <li onClick={() => setIsLogin("login")} className={`text-[20px] font-medium  ${isLogin === "login" ? "text-[#46A358]" : "text-[#3D3D3D]"}`}>Login</li>
                <li className="w-[1.2px] h-4 bg-[#3D3D3D]"></li>
                <li onClick={() => setIsLogin("register")} className={`text-[20px] font-medium ${isLogin === "register" ? "text-[#46A358]" : "text-[#3D3D3D]"}`}>Register</li>
            </ul>
            <form onSubmit={handleSubmit}>
                <LoginInputs />
            </form>
      </Modal>
    </>
  );
};

export default Header;
