import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { BsDatabaseAdd, BsPlusCircle } from "react-icons/bs";
import swal from 'sweetalert';
const PhonesDeatils = () => {
    const [dataDeatils, setData] = useState([])
    const { ids } = useParams()
    const data = useLoaderData();
    const idInt = parseInt(ids);
    useEffect(() => {
        const phoneData = data.find(phone => phone.id == idInt)
        setData(phoneData)
    }, [])
    const { id, image, brand_name, phone_name, price, rating } = dataDeatils;


    const handleAdd = ()=>{
       const dataArray = [];
       const addItems = JSON.parse(localStorage.getItem('add'))
       if(!addItems){
        dataArray.push(dataDeatils)
        localStorage.setItem('add', JSON.stringify(dataArray))
        swal("Good job!", "Products added success !", "success");
       }else{
          const isExite = addItems.find(item=>item.id===id);
          if(!isExite){
            dataArray.push(...addItems, dataDeatils);
            localStorage.setItem('add', JSON.stringify(dataArray))
            swal("Good job!", "Products added success !", "success");
          }else{
            swal("Heyy !", "No duplicate !", "error");
          }
       }
   
    }
       
    return (
        <div className='shadow-lg md:flex gap-2 space-x-4 my-10 h-[400px]'>
            <div className='w-1/4 border-purple-500 border'>
                <img src={image} className=' mx-auto' alt="" />
            </div>
            <div className='text-2xl'>
                <h1>Phone Names : <span className='font-bold'>{phone_name}</span></h1>
                <h2>Brand Name : {brand_name}</h2>
                <br />
                <h2>Price : $<span className='font-bold'>{price}</span></h2>
                <h2>Rating Point : {rating}</h2><br />


                <button onClick={handleAdd} className='ring-2 px-4 rounded py-2 text-xl hover:bg-black hover:ring-orange-400 hover:text-white ring-purple-600 '> Add to Favorite   <BsPlusCircle className='inline-block ml-2' /> </button>
            </div>

        </div>
    );
};

export default PhonesDeatils;