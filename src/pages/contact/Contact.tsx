import React from 'react'
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Route, RouteComponentProps } from 'react-router-dom';
import Title from '../../components/title/Title'
import ContactForm from './ContactForm';


 
const Contact: React.FC<RouteComponentProps> = ( {match} ) => {
    console.log(match.url);
    
    return ( 
        <>
            <Title text="Contactez-nous !" />
            <div>
                <h2>Adresse : </h2>
                xxxxxxxxxxxxxx
                <h2>Télephone : </h2>
                0000 000 000 
            </div>
            <h2>Vous préférez nous écrire ?</h2>
            <LinkContainer to={match.path+"/form"}>
                <Button variant="primary">Formulaire de contact</Button>
            </LinkContainer>
            <Route path={match.path + "/form"} render={(props) => <ContactForm/>} />
           

        </>
     );
}
 
export default Contact;