import React from 'react';
import {useFetchData} from './Components/FetchData.tsx';
// import {FetchEachDogsImg} from './Components/FetchImage.tsx'
const App = () => {
  const {api, fetchError} = useFetchData();
//  FetchEachDogsImg();

  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
