import { Input } from "antd"
import { LoginType } from "@/types/LoginType"

const LoginInputs:React.FC<LoginType> = ({setIsLogin}) => {
  return (
    <>
        <p className="text-base font-normal text-[#3D3D3D] mb-[14px]">Enter your username and password to login.</p>
        <Input size="large" allowClear required name="email" type="email" placeholder="almamun_uxui@outlook.com"/>
        <Input.Password className="mt-4" size="large" allowClear required name="password" type="password" placeholder="***********"/>
        <p onClick={() => setIsLogin("forgot-password")} className="text-[#46A358] text-end mt-[14px] mb-7 cursor-pointer">Forgot Password?</p>
    </>
  )
}

export default LoginInputs