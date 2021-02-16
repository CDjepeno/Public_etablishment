import React from 'react'


export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return (<>
         <footer className="bg-dark text-center text-white" style={{height:"5vh"}}>
            @CDjepeno - Tous droit reservé
         </footer>
    </>);
}
 
export default Footer;