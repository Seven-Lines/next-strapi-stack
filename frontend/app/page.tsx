'use client';

import Image from 'next/image'
import { fetchData } from './utils/fetch-data';
import DisplayDogs from './components/DisplayDogs'
import { useCallback, useEffect, useState } from "react"; 

export default function Home() {
  const [data, setData] = useState(); 

  const callAPI = useCallback(async (start: number, limit: number)=> {
    const path = "/dogs";
    const api_parameters = { 
      headers: {
        "Content-Type": "application/json",
      }, 
      populate: { 

      }, 
      pagination: { 
        start: start, 
        limit: limit
      }
    } 
    const response = await fetchData(path, api_parameters);  

    setData(response.data); 
  }, []);

  /* 
  useEffect(() => {
    callAPI(0, 0);
  }, [callAPI]); 
  */

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <button className="btn btn-blue" onClick={() => callAPI(0, 5)}>CLICK THIS FOR SOME DOG BREEDS</button>

      <h1 className="text-lime-300"><br/>SPECIFIC BREEDS </h1>
      <DisplayDogs data={data} />

      <h1 className="text-lime-300"><br/>RAW DATA </h1>
      <div>
        {JSON.stringify(data) != null ? ( 
            <p>{JSON.stringify(data)}</p>
          ) : ( 
            <p>No dogs yet...</p>
          )}
        </div>

      <div className="text-red-900"><br/><br/><br/>You need to click on the button to call on the API to see dogs.. that's kinda the whole fucking point of this example.</div>
    </main>
  )
}
