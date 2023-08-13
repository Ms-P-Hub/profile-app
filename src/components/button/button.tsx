import { FC } from 'react'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({ children, btnType }) => {
    let style = "text-xs"
    switch (btnType) {
        case "text":
            style += " hover:text-gray-500"
            break
        case "container":
            style += " bg-primary text-white px-3 py-1 rounded-xl hover:bg-secondary"
            break
        case "outline":
            style += " border border-primary px-3 py-1 rounded-xl hover:bg-secondary hover:text-white"
            break
        case "square":
            style += " bg-primary text-white px-3 py-1 hover:bg-secondary"
            break
        default:
            style += " bg-primary text-white px-3 py-1 rounded-xl hover:bg-secondary"
    } 
    return (
        <button className={style} >{children}</button>
    )
}
