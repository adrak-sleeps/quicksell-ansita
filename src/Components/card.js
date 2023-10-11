import React from 'react';
import imageContent from '../Images/person.jpg';
import tagImage from '../Images/tagIcon.png';

const Card = (props) => {
    console.log(props)
    return (
      <div className="card flex-item">
        <div className="card-header flex-parent">
          <h2 className='flex-child'>{props.title}</h2> 
          <img className = "card-profile-image flex-child" src = {imageContent} alt = "hehe"/>
        </div>
        <div className="card-content">
          <div>{props.content}</div>
        </div>
        <div className='flex-parent card-tags'>
          <img className = "card-tag-image flex-child" src = {tagImage}></img>
          <div className='flex-child tags'>{props.tags}</div>
        </div>
      </div>
    );
}

export default Card;
