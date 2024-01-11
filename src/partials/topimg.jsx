import React from 'react';

const Topimg = (props) => {
  console.log(props)
  return (

  <div className="relative ">
      {/* Background Image */}
      <div
        className="h-96 bg-cover bg-center  "
        style={{ backgroundImage: `url(${props.brand.img})`, height: "600px",  filter:" grayscale(40%)"   }}
      ></div>

     {/* Foreground Container */}
     <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start text-white m-60">
        <div className="text-left">
          {/* Left Section */}
          <div className="p-8">
            <h1 className="text-5xl font-bold mb-4 pb-4">{props.brand.hedding}</h1>
            <p className="text-left	leading-7  text-white font-bold pb-2	">{props.brand.p}</p>
            <a href="https://ntwist.com/contact-us/"><button className="bg-amber-500 text-black px-6 py-2 rounded-md text-lg font-bold">
              Request Demo
            </button></a>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center p-8">
         
        </div>
      </div>
    </div>
   
  );
};

export default Topimg;
