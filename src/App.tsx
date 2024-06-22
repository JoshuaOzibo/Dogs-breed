import React from 'react';
import {useFetchData} from './Components/FetchData.tsx';
import UseAutocomplete from './Components/SearchDogs.tsx'

const App = () => {
  const {api, fetchError} = useFetchData();
  console.log(api)
  

  return (
    <div className="container mx-auto p-4">
      <UseAutocomplete />
      {api.length <= 0 ? <h1 className="text-2xl font-bold mb-4">Loading Breeds</h1> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {api.map((item: any): React.JSX.Element => (
          <div onClick={() => console.log(item)} key={item.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>Breed Group: {item.breed_group}</p>
            {item.image_url && (
              <div className="mt-2">
 4               <img src={item.image_url} alt={item.name} className="w-full h-auto rounded" />
              </div>
            )}
          </div>
        ))}
      </div>}
    </div>
  );
}

export default App
