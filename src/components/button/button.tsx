import React from 'react'

export interface ButtonProps {
    text: string;
    clic?: any;
}
 
const Button: React.FC<ButtonProps> = ({ text, clic }) => {
    return ( 
        <button className="btn btn-dark my-3" onClick={clic}>{text}</button>
     );
}
 
export default Button;