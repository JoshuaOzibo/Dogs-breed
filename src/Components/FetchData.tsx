import { useEffect, useState } from "react";

type fetchType =[
    {
    id: number,
    name: string,
    bred_for: string,
    breed_group: string,
    life_span: string,
    temperament: string,
    reference_image_id: string,
    weight: {imperial: string; metric: string},
    height: {imperial: string; metric: string},
    image_url?: string;
    }
]

export const useFetchData = (pageNum: number) => {
    const [api, setApi] = useState<fetchType[]>([]);
    const [fetchError, setFetchError] = useState<string>('');
    
    const fetchImageById = async (id: string) => {
        try {
            const response = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
            if (!response.ok) {
              throw new Error('There was a problem fetching the image');
        }
        const image = await response.json();
            return image.url;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=16&page=${pageNum}`);
                if(!response.ok){
                    throw new Error('There was a problem fetching Data')
                }else{
                    const data: fetchType[] = await response.json();
                    

                    const newData:fetchType[] = await Promise.all(data.map(async(breed: any) =>{
                        const imgUrl = await fetchImageById(breed.reference_image_id);
                        return {...breed, image_url: imgUrl}
                    }));

                    setApi(newData);
                }
            }catch(error){
                if (error instanceof Error) {
                    setFetchError(error.message);
                  } else {
                    setFetchError('An unknown error occurred');
                  }
            }
        };

        fetchData()
    }, [pageNum]);

    return {
        api,
        fetchError,
    }
}
