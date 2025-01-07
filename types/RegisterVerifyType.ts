import { SetStateAction } from "react";

export interface RegisterVerifyType {
    setRegisterCode: React.Dispatch<SetStateAction<null | string>>
}