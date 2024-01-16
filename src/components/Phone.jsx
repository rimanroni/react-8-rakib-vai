import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Phone = ({ data }) => {
    const {id, image, brand_name, phone_name, price, rating } = data || {};

    return (
        <div>

            <div className="md:h-[390px]  mt-2 rounded overflow-hidden shadow-lg">
                <img className="w-1/2 mx-auto " src={image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{phone_name}</div>
                    <p className="text-gray-700 text-base">
                        {brand_name}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        rating : {rating}</span>
                </div>
                <div className ='px-6 py-4'>
                  <NavLink to={`/phones/${id}`}>
                  <button className ='uppercase ring-2 ring-purple-600 p-1 px-2 rounded'> See Details ⤵  </button>
                  </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Phone;