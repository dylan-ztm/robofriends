import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
     return (
        <div>
             {
                 robots.map( (user,i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    );
                }//end of robots.map
                )
             }           
        </div>
    );
} //end of CardList

export default CardList;