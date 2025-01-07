import { Input } from 'antd'
import React, { SetStateAction } from 'react'

interface ResetPasswordType {
    setRegisterCode: React.Dispatch<SetStateAction<string | null>>
}

const ResetPassword:React.FC<ResetPasswordType> = ({setRegisterCode}) => {
  return (
    <div className='my-5'>
        <Input.Password size='large' allowClear required name="newPassword" type='password' placeholder='Enter new password' />
        <label className='mt-2 inline-block'>
            Enter your code: <Input.OTP onChange={(e) => setRegisterCode(e)} size='large' />
        </label>
    </div>
  )
}

export default ResetPassword