import { ReactElement, ReactNode } from "react";

export type CustomButtonType = {
    children: ReactNode;
    bgColor?: string | undefined;
    bgColorHover: string;
    isDisabled?: boolean | undefined;
    variant?: "outlined" | "contained";
    labelColor?: string | undefined;
    borderColor?: string | undefined
    labelColorHover?: string | undefined;
    borderColorHover?: string | undefined;
    onClick?: any
    type?: "submit"
}