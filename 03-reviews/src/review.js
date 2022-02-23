import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft ,FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {

    const [ reviewIndex, setReviewIndex ] = useState(0);
    const { name, job, image, text } = people[reviewIndex];

    const handlePersonOverflow = (reviewIndex) =>{
      if (reviewIndex === people.length){
          return 0;
      }
      if (reviewIndex === 0){
          return 4;
      }
      return reviewIndex;
    }

    const getPrevPerson = () => {
       setReviewIndex((reviewIndex) =>{
           const prePerson = reviewIndex - 1;
           return handlePersonOverflow(prePerson);
       })
    }

    const getNextPerson = () => {
      setReviewIndex((reviewIndex) => {
          const nextPerson = reviewIndex + 1;
          return handlePersonOverflow(nextPerson);
      })
    }
      
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'> {name} </h4>
            <p className='job'> {job}</p>
            <p className='info'> { text } </p>
            <div className='button-container'>
                <button className='prev-btn' onClick={getPrevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className='next-btn ' onClick={getNextPerson}>
                    <FaChevronRight/>
                </button>
            </div>
            <div className='random-btn'>
                suprise-me
            </div>
        </article>
    );
}

export default Review;