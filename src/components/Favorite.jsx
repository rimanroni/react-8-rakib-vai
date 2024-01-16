import React, { useEffect, useState } from 'react';
import FavoriteData from './FavoriteData';

const Favorite = () => {
    const [data, setdata] = useState([])
    const [noFound, setNoFound] = useState('')
    const [sliceLength, setSliceLenght] = useState(4)
    const [istrue, setIstrue] = useState(false)
    useEffect(()=>{
    const getData = JSON.parse(localStorage.getItem('add'))
    if(getData){
        setdata(getData)
    }else{
        setNoFound('No Data Found ')
       
    }
     },[ ])

const clearData = ()=>{
    localStorage.clear()
    alert('all data clear done')
    setdata([])
    setNoFound('No Data Found ')
}
console.log(istrue) 
    return (
        <div>
          {noFound?<p className='h-screen flex justify-center items-center'>{noFound}</p>:<div>
           <div className='flex justify-center my-4 '>
           <button onClick={clearData } className='ring-2  text-center px-2' >Clear all Data</button>
           </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {data.slice(0,sliceLength).map(item=><FavoriteData key={item.id} item={item}/>)}
            
            </div>
            <div className='text-center py-4'>
            {data.length>4&& <button
             
            className='ring-2 ring-purple-600 px-2'>{istrue?'show less' :" show all"}</button>}
            </div>
              <button onClick={()=> setIstrue(!istrue)}>show all</button>
            </div>}
        </div>
    );
};

export default Favorite;