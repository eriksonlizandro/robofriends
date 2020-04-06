import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        //This is the information that will be displayed on the card 
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={'https://robohash.org/${id}?set=set2&size=200x200'} />
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card; 