import React from 'react';
import Tour from './Tour';


const Tours = ({tours, handleRemoveTour}) => {
    return (
      <section>
          <div className='title'>
              <h2>out tours</h2>
              <div className='underline'>
              </div>
              <div>
                  {
                     tours.map((tour) => {
                         return(
                             <Tour key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
                         )
                     })
                  }
              </div>
          </div>
      </section>
    );
}

export default Tours;