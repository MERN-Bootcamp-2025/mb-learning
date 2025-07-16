import React, {  Fragment, useState } from "react"
import type { Place } from "../api/Place"
import { search } from "../api/search";

interface LocationSearchProps{
    onPlaceClick: (place: Place)=> void;
}

const LocationSearch = ({onPlaceClick}: LocationSearchProps) => {
    const [term,setTerm] = useState('');
    const [places, setPlaces] = useState<Place[]>([]);

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        // console.log(term)
        const result= await search(term);
        setPlaces(result)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="term" className="font-bold">
                Search
            </label>
            <input 
            className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
            id="term"
            // type="text" 
            value={term} 
            onChange={(e)=>setTerm(e.target.value)} 
            />
        </form>
        <h1 className="font-bold mt-4">Found Locations</h1>
        <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
            {
                places.map(place=>{
                    return(
                        <Fragment key={place.id}>
                            <h1 className="text-sm">{place.name}</h1>
                            <button className="bg-blue-500 text-sm text-white px-2 py-2 font-bold rounded" onClick={()=>onPlaceClick(place)}>Go</button>
                            <div className="border-b border-gray-300 w-full col-span-2"></div>
                        </Fragment>

                    )
                })
            }
        </div>
    </div>
  )
}

export default LocationSearch