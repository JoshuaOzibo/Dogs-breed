import React, { useState } from "react";
import { useFetchData } from "./Components/FetchData.tsx";
import UseAutocomplete from "./Components/SearchDogs.tsx";
import { useNavigate } from "react-router-dom";
import Pagination from "./Components/Pagination.tsx";
const App = () => {
  const navigation = useNavigate();
  const [pageNum, setPageNum] = useState<number>(0);
  console.log(pageNum);
  const { api, fetchError } = useFetchData(pageNum);

  //Handle Next Page
  const HandleNextPage = () => {
    if (pageNum <= 9) {
      setPageNum((next) => next + 1);
    } else {
      setPageNum(0);
    }
  };

  //Handle Previous Page;
  const HandlePreviousPage = () => {
    if (pageNum <= 0) {
      setPageNum(10);
    } else {
      setPageNum((next) => next - 1);
    }
  };

  //navition to the about page
  const HandleNavigation = (Name) => {
    navigation(`/AboutBreed/:${Name}`);
  };

  return (
    <div className="container mx-auto p-4">
      <UseAutocomplete />
      {api.length <= 0 ? (
        <h1 className="text-2xl font-bold mb-4">Loading Breeds</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {api.map(
            (item: any): React.JSX.Element => (
              <div
                onClick={() => HandleNavigation(item.reference_image_id)}
                key={item.id}
                className="bg-white rounded-lg shadow p-4"
              >
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>Breed Group: {item.breed_group}</p>
                {item.image_url && (
                  <div className="mt-2">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-auto rounded"
                    />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}

      <div className="w-full">
        <Pagination
          HandlePreviousPage={HandlePreviousPage}
          pageNum={pageNum}
          HandleNextPage={HandleNextPage}
        />
      </div>
    </div>
  );
};

export default App;
