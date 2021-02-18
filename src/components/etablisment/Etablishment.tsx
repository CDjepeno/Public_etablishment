import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Horraire from '../hours/Hours';


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
                heures: Array<
                    // de: string;
                    // a: string;
                    any
                >
            }>;
        };
        geometry: any;
        type: any;
    };
}       
 
const Etablishment: React.FC<EtablishmentProps> = ({ features }) => {
    
    const organization = features.properties;
    console.log(organization);
    const address = organization.adresses[0];

    // const horraireLunMat = organization.horaires[0].heures[0];
    // const horraireJeuap = organization.horaires[1].heures[1];

    // const horraireVenmat = organization.horaires[0].heures[0]
    // const horraireVenap = organization.horaires[0].heures[1]

    // {address.lignes} {address.codePostal} {address.commune}
    return ( <>
        <h2>Liste des Mairie</h2>
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
                <Card.Text>
                    Horraire :
                        <Horraire horaires={organization.horaires} />
                </Card.Text>
                {organization.url && 
                    <Button variant="primary" href={organization.url} target="_blank">Visitez le site web</Button>
                }
            </Card.Body>
        </Card>
    </>);
}
 
export default Etablishment;