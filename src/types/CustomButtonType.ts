import { ReactElement } from "react";

export type CustomButtonType = {
    label: ReactElement<any, any> | string | undefined;
    bgColor?: string | undefined;
    bgColorHover: string;
    isDisabled?: boolean | undefined;
    variant?: "outlined" | "contained";
    labelColor?: string | undefined;
    borderColor?: string | undefined
    labelColorHover?: string | undefined;
    borderColorHover?: string | undefined;
    onClick?: any
}