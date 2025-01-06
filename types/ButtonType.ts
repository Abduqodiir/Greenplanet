import React from "react";

export interface ButtonType {
    title: string;
    leftIcon?: React.JSX.Element;
    rightIcon?: React.JSX.Element;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    extraClass?: string;
    type: "button" | "submit" | "reset";
}