import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, handleRemoveTour }) => {

    const [readMore, setReadMore] = useState(false);
    console.log("🚀 ~ file: Tour.js ~ line 6 ~ Tour ~ readMore", readMore)

    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'> ${price}</h4>
                </div>
                <p>{readMore? info: `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore?'show less' : 'read more'}
                </button>
                </p>
                <button className='delete-btn' onClick={() => handleRemoveTour(id)}>not intrested</button>
            </footer>

        </article>
    );
}

export default Tour;