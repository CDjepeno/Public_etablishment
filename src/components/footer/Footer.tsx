import React from 'react'
import classes from './footer.module.css'


export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    const css = `bg-dark text-center text-white ${classes.footer}`
    return (<>
         <footer className={css} style={{height:"5vh"}}>
            <p className="my-2">@CDjepeno - Tous droit reservé</p>
         </footer>
    </>);
}
 
export default Footer;