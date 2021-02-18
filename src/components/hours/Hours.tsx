import React from 'react'


export interface HoursProps {
    horaires: Array<{
        du: string;
        au: string;
        heures: Array<{
            de: string;
            a: string; 
        }>
    }>;
}
 
const Hours: React.FC<HoursProps> = ({ horaires }) => {
    console.log(horaires);
    const content = horaires.map((horaire, index)=> {
        return (<> 
            <ul>
                <li key={index}>Du {horaire.du} au {horaire.au} - De {horaire.heures[0].de} à {horaire.heures[0].a}</li>       
            </ul>
        </>);
    })
    
    return (<>
        {content}
    </>)
}
 
export default Hours;