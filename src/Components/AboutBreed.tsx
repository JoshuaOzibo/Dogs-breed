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

    /**
     *
  bred_for: string;
  country_code: string;
  height: { imperial: string; metric: string };
  id: number;
  life_span: string;
  name: string;
  reference_image_id: string;
  temperament: string;
  weight: { imperial: string; metric: string };
     */
    return (
      <div className='bg-green-500 flex justify-center'>
        <div className="bg-white object-contain rounded-lg shadow pb-[10px] px-[30px] pt-[30px] space-y-[30px] m-auto">
        <Link className='shadow px-[40px] py-[10px]' to="/">Go Back</Link>
        <div>
          {api ? (
            <>
            {api.breeds.map((item) => <div>
              <h2 className='text-2xl font-bold mb-[10px] text-center'>{item.name}</h2>
            </div>)}
              <img className='w-full rounded-lg object-contain md:h-[500px]' src={api.url} alt="Breed" />
              {api.breeds.map((item) => <div className='px-[70px]'>
                <div className='md:flex items-center block pt-3 justify-between w-full'>
                  <p className=' font-bold'>bred_for: {item.bred_for}</p>
                  <p className=' font-bold'>temperament: {item.temperament}</p>
                </div>

                <p className='font-bold text-center text-lg mt-[20px]'>life_span: {item.life_span}</p>

                <div >
                  <h2 className='font-bold text-center mt-[20px]'>Height</h2>
                  <div className='flex bg-green-200 items-center pt-3 mt-2 px-3 pb-3 justify-between w-full'>
                  <p  className=' font-bold'>imperial: {item.height.imperial}</p>
                  <p  className=' font-bold'>metric: {item.height.metric}</p>
                  </div>
                </div>
                <div>
                  <h2 className='font-bold text-center mt-[20px]'>weight</h2>
                  <div className='flex items-center bg-green-200 pt-3 mt-2 px-3 pb-3 justify-between w-full'>
                  <p className=' font-bold'>imperial: {item.weight.imperial}</p>
                  <p className=' font-bold'>metric: {item.weight.metric}</p>
                  </div>
                </div>
              </div>)}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        </div>
      </div>
    );
}

export default AboutBreed
