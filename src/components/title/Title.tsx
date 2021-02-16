import React from 'react'


export interface TitleProps {
    text: string;
}
 
const Title: React.FC<TitleProps> = ({ text }) => {
    return ( 
        <h1 className="border border-dark p-2 mt-2 text-white text-center bg-primary rounded">{text}</h1>
     );
}
 
export default Title;