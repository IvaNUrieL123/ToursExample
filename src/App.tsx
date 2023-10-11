
import { useEffect, useState } from 'react';
import './App.css';
import Tours from './assets/components/Tours';
import Loading from './assets/components/Loading'
import {Tour} from './types';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const[tours, setTours] = useState<Tour []>([]);
  const[isLoading, setIsloading] = useState(false);
  const fetchTours = async () => {
    setIsloading(true);
    
  
    try{
    const response =  await fetch(url);
    const toursData = await response.json();

    console.log(data);
    
    setIsloading(false);
    setTours(toursData );
    } catch (error){
      setIsloading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTours();
  },[]);

  if (isLoading){
    return(
      <main>
        <Loading />
      </main>
    );
  }

  return(
   <main>
    <Tours tours={tours} />  
  </main>
  );
}


export default App
