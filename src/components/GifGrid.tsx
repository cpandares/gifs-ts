import {useState, useEffect} from 'react';
import { GifItem } from './GifItem';

type Category = {
    category: string;
}
interface ImageProps {
    category: string;
    title: string;
    url: string;
    id: string;
    images: ImageArrayProps;
}

interface ImageArrayProps {
    downsized_medium: ImageProps;
    url: string;
    id: string;
}

export function GifGrid( { category  } : Category )  {

    const [images, setImages] = useState([]);
    const getGifs = async()=>{
        console.log(category);
        const url = `https://api.giphy.com/v1/gifs/search?api_key=mhGEMRQ8XULl6Gh6Wb9AfZg5UvmeDktP&q=${category}&limit=10`;
       await fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const gifs = data.data.map((img: ImageProps) => {
                    return {
                        id: img.id,
                        title: img.title,
                        url: img.images?.downsized_medium.url
                    }
                })
               /*  console.log(gifs); */
                setImages(gifs);
            })
    }
    useEffect(() => {
        getGifs();
    }, [])
    

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {
                    images.map((img: ImageProps) => (

                        <GifItem key={img.id} {...img} />
                    ))
                    
                }
            </ol>
        </div>
    );
}
