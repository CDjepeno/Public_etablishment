import React from 'react'
import Title from '../../components/title/Title';



 
const Error404: React.FC = () => {
    return ( <>
        <Title text="Erreur 404 !" />
        <p>La page n'existe pas</p>
    </>);
}
 
export default Error404;