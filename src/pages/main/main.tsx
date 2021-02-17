import React from 'react'
import Title from '../../components/title/Title'
import Image from 'react-bootstrap/Image'


const Main: React.FC = () => {
    return ( 
        <div className="container">
            <Title text="Bienvenue sur le site de l'ile de france !" />

            <p>Le site vous aidant à trouver les établissement public de l'ile de france </p>

            <Image className="mb-3" src="https://www.usinenouvelle.com/mediatheque/0/7/5/000353570_896x598_c.jpg" fluid thumbnail style={{width:"100%"}}/>
        </div>
     );
}
 
export default Main;