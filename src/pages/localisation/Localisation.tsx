import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../../components/button/button'
import Etablishment from '../../components/etablisment/Etablishment'
import Title from '../../components/title/Title'
import GouvService from '../../services/GouvAPI'


interface Organization {
    type: any;
    geometry: any;
    properties: object;
}
 
const Localisation: React.FC = () => {
    const [organizations, setOrganizations] = useState<Organization[]>()
    const [loading, setLoading] = useState(false)


    const handleOrganization = (organization: string) => {
        GouvService.getOrganization(organization)
        .then(data => {                 
            setOrganizations(data.features);
        })
    }

    useEffect(() => {
        GouvService.getOrganization('mairie')
        .then(data => {            
            setOrganizations(data.features);
        })
    }, [])    
    
    return ( <>
        <div>
            <Title text="Rechercher un établissement : " />
            <Button text="Mairie" clic={() => handleOrganization("mairie")}/>
            <Button text="Commissariat" clic={() => handleOrganization("commissariat_police")}/>
            <Button text="Pôle-emploi" clic={() => handleOrganization("pole_emploi")}/>
            {/* <Button text="Mission locale" clic={() => handleOrganization("mission_locale")}/> */}
        </div>
        <Row>
            {organizations && organizations.map((organization: any , index:any) => {
                return( 
                    <Col md={6} key={index}>
                        <Etablishment features={organization} />
                    </Col>
                ) 
            }) 
            }   
             
        </Row>
    </>);
}
 
export default Localisation;