 import {useState, useEffect} from 'react';
 
 export const FetchEachDogsImg = () => {
    const [imgUrl, setImgUrl] = useState<string>('');
    const [imgUrlError, setImgUrlError] = useState<string>('')
    

    useEffect(() => {
        const fetchImg = async() => {
            const response = await fetch('https://api.thedogapi.com/v1/images/SkmRJl9VQ');
            try{
                if(!response.ok){
                    throw new Error('Error loading image')
                }
                const data = await response.json();
                console.log(data)

            }catch(error){

            }
        }
        fetchImg()
    }, [])
};