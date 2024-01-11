import React from 'react'
import { Link,NavLink } from "react-router-dom";

function Right({brand}) {
    console.log(brand.p)
  return (
    <>
<div className=" m gap-4 overflow-hidden flex flex-wrap pt-10 ">
          <div className="h-100	 md:w-2/4 overflow-hidden pt-5" >
            <img src={brand.img} alt="Placeholder image" className="w-full  bg-cover bg-center "/>
            </div>

          <div className="w-full md:w-1/3 " >
            <div className="pl-10">
            <h2 className='text-4xl text-left font-semibold	text-orange-600 pb-8 	'>{brand.hedding}</h2>
                        <p className="text-left	leading-7	font-semibold  ">
                        {brand.p}                            
                        <span className="hidden sm:block text-4xl pb-8 " ></span>
                        </p>   
                        <Link
                            className="inline-flex	text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 "
                            to="/oil-gas"
                        >
                            Read More
                        </Link>         
                </div>
              </div>
        </div>
     

                
        </>
  )
}

export default Right
