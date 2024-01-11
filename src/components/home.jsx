import React from "react";
import { Link,NavLink } from "react-router-dom";
import Right from "../partials/right";
import Left from "../partials/left";
import "./dropdown.css"
const cardInfo = {p: "Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics." , img: "https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg", hedding: "Mine-To-Mill-To-Mine Optimization"};
const cardInfo1 ={p:"NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",img:"https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg",hedding:"Sustainability",}
const cardInfo2 ={p:"NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",hedding:"Mineral Processing"}
const cardInfo3 ={p:"Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",img:"https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884-720x480.png",hedding:"Oil & Gas"} 
export default function Home() {
    return (
        <>
          <div className="relative ">
      {/* Background Image */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png")' }}
      ></div>

     {/* Foreground Container */}
     <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white m-60">
        <div className="text-left">
          {/* Left Section */}
          <div className="p-8">
          
            <h1 className="text-5xl font-bold mb-4">Data-powered solutions for Industrial Excellence</h1>
            <Link to="/metal-mining"><button className="bg-sky-500 text-white px-6 py-2 rounded-md text-lg">
              Read More
            </button></Link>
           
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center p-8">
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt="Right Image"
            className="w-full h-auto max-w-md md:max-w-full lg:max-w-4xl mx-auto"
          />
        </div>
      </div>
    </div>
       
        <div className="mx-auto w-full max-w-screen-2xl relative">
            <Left  brand={ cardInfo1 }/>
            <Right  brand={ cardInfo }/>
            <Left  brand={ cardInfo2 }/>
            <Right  brand={ cardInfo3 }/>
        </div>
        </>
    );
}
