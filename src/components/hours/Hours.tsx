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

interface Hours {
    heures: Array<{
        de: string;
        a: string; 
        du: string;
        au: string;
    }>
}
 
const Hours: React.FC<HoursProps> = ({ horaires }) => {
    console.log(horaires);
    const content = horaires.map((horaire, index)=> {
        console.log(horaire.heures[0].de);
        
        return (<> 
            <ul>
                {/* <li key={index}>Du {horaire.du} au {horaire.au} - De {Horraire.heures[0].de} à {Horraire.heures[0].a} </li>     */}
                <li>Vendredi - De  </li>    
            </ul>
        </>);
    })
    
    return (<>
        {content}
    </>)
}
 
export default Hours;