import { Input } from 'antd'
import React from 'react'

const ForgotPassword = () => {
  return (
    <Input className='my-5' size='large' allowClear required name='email' type='email' placeholder='Enter your email' />
  )
}

export default ForgotPassword