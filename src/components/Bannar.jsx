import React from 'react';

const Bannar = () => {

    return (
        <div className =' text-black shadow-md'>
          <h2 className ="text-4xl text-center font-bold pt-12  ">Searching Box </h2>
             <div className="grid px-4  h-[50vh] mt-8 place-items-center ">
                <div className="w-full max-w-3xl rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-500 text-white">
                   
                    <div className="relative m-px overflow-hidden rounded-lg bg-slate-900 px-3 py-3 text-lg">
                    
                        {/* <div className="absolute -top-[50px] -left-[15px] z-0 h-[140px] w-[140px] rounded-full border bg-pink-500 opacity-20 blur-[100px]"></div> */}
                        <div className="relative z-10 text-center">
                             <div className ='flex justify-between'>
                             <input className ='border-b-purple-600 w-full px-4 border-b-2 text-white bg-slate-900 ring-0 outline-none' type="text"  />
                             <button className ='ml-4 ring-2 ring-purple-600 px-3 rounded py-1'>Searching</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;