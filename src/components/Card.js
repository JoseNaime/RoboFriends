import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className={'tc bg-light-red dib br3 pa3 ma2 bw2 shadow-5 grow'}>
            <img alt='photo' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
