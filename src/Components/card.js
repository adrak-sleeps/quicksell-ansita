import React from 'react';

const Card = (props) => {
    console.log(props)
    return (
      <div className="card flex-item">
        <div className="card-header">
          <h2>{props.title}</h2>
        </div>
        <div className="card-content">
          <p>{props.content}</p>
        </div>
        <div className='card-tags'>
          <p>{props.tags}</p>
        </div>
      </div>
    );
}

export default Card;
