import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

type Breed = {
  bred_for: string;
  country_code: string;
  height: { imperial: string; metric: string };
  id: number;
  life_span: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
};

type objectData ={
  breeds: Breed[],
  height: number,
  id: string,
  url: string,
  width: number
}
const AboutBreed = () => {
  const [api, setApi] = useState<objectData | null>(null);
  const { Name } = useParams<{ Name: string }>();
    console.log(api)

    const dataSlice = Name?.slice(1);

    useEffect(() => {
      const fetchData = async(): Promise<void> => {
        const response = await fetch(`https://api.thedogapi.com/v1/images/${dataSlice}`);
        try{
          if(!response.ok){
            throw new Error('cant find this data, please recheck the url');
          }
          const data:objectData = await response.json();
          setApi(data)
            
        }catch(error){
          console.log(error.message);
        }
      }

      fetchData();
    }, [dataSlice]);

    console.log(api);

    return (
      <div>
        <Link to="/">Go Back</Link>
        <div className="bg-white rounded-lg shadow p-4">
          {api ? (
            <>
              <img src={api.url} alt="Breed" />
              {/* Add more details if needed */}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
}

export default AboutBreed
