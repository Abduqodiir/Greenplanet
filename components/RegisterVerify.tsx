import { RegisterVerifyType } from '@/types/RegisterVerifyType'
import { Input } from 'antd'
import React from 'react'

const RegisterVerify:React.FC<RegisterVerifyType> = ({setRegisterCode}) => {
  return (
    <div className='text-center my-5'>
        <Input.OTP onChange={(e) => setRegisterCode(e)} size='large' />
    </div>
  )
}

export default RegisterVerify