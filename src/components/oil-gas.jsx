import React from 'react'
import Right from "../partials/right";
import Left from "../partials/left";
import Topimg from '../partials/topimg';

const top={img:"https://ntwist.com/wp-content/uploads/2022/04/oil-and-gas.jpg",p:"Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps O&G customers analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",hedding:"Mine-To-Mill-To-Mine Optimization"}

const one ={p:"NTWIST’s Clairvoyance solution is designed to help pipeline operators consistently achieve flow rate targets, minimize input costs, reduce the carbon footprint — all while optimizing pipeline life. Its machine learning engine analyzes millions of possible permutations of pipeline parameters (e.g. pump regime, injection of drag reducing agents, pipeline length/ elevations/ pressure, etc.) to generate the best flow rate at any given time.",img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-518368534.jpg",hedding:"Oil & Gas"}
const two ={p:"Oil sands are a challenging source of bitumen. Operating a primary separation cell efficiently requires careful balancing of multiple parameters — a difficult task considering the poor visibility inside the apparatus. NTWIST offers a computer vision solution that monitors the level of middlings continuously and autonomously.",img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-517340891.jpg",hedding:"Bitumen Flotation Level Detection"}

function Oil() {
  return (
    <>
    <Topimg brand={top}/>

<div className="mx-auto w-full max-w-screen-2xl relative">
   <Left brand={one}/>
   <Right  brand={two}/>
   </div>
    </>
  )
}

export default Oil
