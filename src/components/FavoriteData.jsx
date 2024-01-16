import React from 'react';

const FavoriteData = ({item}) => {
    const {id, image, brand_name, phone_name, price, rating } = item || {};
    return (
        <div>
             <div className="   mt-2 rounded overflow-hidden shadow-lg">
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
                
            </div>
    </div>
    );
};

export default FavoriteData;