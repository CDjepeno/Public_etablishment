import React from 'react'

export interface ButtonProps {
    text: string;
}
 
const Button: React.FC<ButtonProps> = ({ text }) => {
    return ( 
        <button ></button>
     );
}
 
export default Button;