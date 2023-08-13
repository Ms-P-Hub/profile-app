import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode 
    btnType?: "text" | "outline" | "container" | "square"
}