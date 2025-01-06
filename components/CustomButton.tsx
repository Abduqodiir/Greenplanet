import { ButtonType } from "@/types/ButtonType"
import React from "react"

const CustomButton:React.FC<ButtonType> = ({title, leftIcon, rightIcon, onClick, extraClass, type}) => {
  return (
    <button type={type} onClick={onClick} className={`bg-[#46A358] flex items-center justify-center gap-[4px] px-3 py-[7px] rounded-[6px] text-white font-medium text-[16px] leading-[20px] ${extraClass}`}>
        {leftIcon && leftIcon}
        <span>{title}</span>
        {rightIcon &&rightIcon}
    </button>
  )
}

export default CustomButton