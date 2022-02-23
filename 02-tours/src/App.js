import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ tours, setTours ] = useState([]);
  
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log("🚀 ~ file: App.js ~ line 15 ~ fetchTours ~ tours", tours)
      setLoading(false);
      setTours(tours);
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 20 ~ fetchTours ~ error", error)
      setLoading(false);
      
    }
 }
   
  useEffect(() => {
   fetchTours();
  }, []);


  const handleRemoveTour = id => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
    console.log("🚀 ~ file: App.js ~ line 34 ~ App ~ newTours", newTours)
    
  }

  const NoTours = () =>{
    return (
      <main>
        <div className='title'>
         <h2>no tours left</h2>
         <button className='btn' onClick={fetchTours}> Refresh</button>
        </div>
      </main>
    )
  }

  return ( 
    <div className="App">
      <main>
      {loading ? <Loading/> : tours.length === 0 ? <NoTours /> :
      <Tours tours={tours} handleRemoveTour={handleRemoveTour} />
    }
      </main>   
    </div>
  );
}

export default App;
