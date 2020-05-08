import React from 'react';

const Card = (props) => {
    const { name, email, id } = props; //Use destructuring to use simple variables
                                       //made from props object.
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img  alt='robot friend' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}//end of Card

export default Card;