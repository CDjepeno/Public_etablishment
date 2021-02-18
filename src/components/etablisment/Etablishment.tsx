import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Hours from '../hours/Hours';


export interface EtablishmentProps {
    features: {
        properties: {
            nom: string;
            adresses: Array<{
                codePostal: string;
                commune: string;
                lignes: string;

            }>;
            telephone: number;
            mail: string;
            url: string;
            horaires: Array<{
                du: string;
                au: string;
                heures: Array<any>
            }>;
        };
        geometry: any;
        type: any;
    };
}       
 
const Etablishment: React.FC<EtablishmentProps> = ({ features }) => {
    
    const organization = features.properties;
    const address = organization.adresses[0];

    return ( <>
        <Card>
            <Card.Header>{organization.nom}</Card.Header>
            <Card.Body>
                <Card.Title>Telephone : {organization.telephone}</Card.Title>
                {organization.mail &&
                    <Card.Title>mail : {organization.mail}</Card.Title>
                }
                <Card.Text>
                    Adresse : {address.lignes} {address.codePostal} {address.commune}
                </Card.Text>
                {organization.horaires &&
                    <Card.Text>
                        Horraire :
                            <Hours horaires={organization.horaires} />
                    </Card.Text>
                }
                {organization.url && 
                    <Button variant="primary" href={organization.url} target="_blank">Visitez le site web</Button>
                }
            </Card.Body>
        </Card>
    </>);
}
 
export default Etablishment;