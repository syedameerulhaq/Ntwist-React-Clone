import React from 'react'
import Right from '../partials/right'
import Left from "../partials/left";
import Topimg from '../partials/topimg';

const top={img:"https://ntwist.com/wp-content/uploads/2022/04/Ai-platform2.jpg",p:"",hedding:"AI SOFTWARE"}

const one={p:"nSensor is our cutting edge tool providing operators with accurate, real-time measurements of process variables that would be expensive, difficult or impossible to measure using traditional techniques. nSensor uses all data streams available including video feeds to deliver a wide variety of tailored information. nSensor empowers operators by improving process visibility.",img:"https://ntwist.com/wp-content/uploads/2022/04/1-ntw.jpg",hedding:"nSensor"}
const two={p:"nAnalyser further enhances our nSensor technology by adding an additional layer of AI – to map and quantify – direct, indirect and hidden influencers of any given process variable. This provides operators with a deep understanding of the circuit, the relationships between circuit variables and their impact on process outcomes and plant KPIs.",img:"https://ntwist.com/wp-content/uploads/2022/04/2-ntw.jpg",hedding:"nAnalyser"}
const three={p:"nOptimum works in real-time to optimize the process while helping to reach predetermined goals. Having nOptimum in the control room allows the operators to pick a course of action that improves process outcomes, increases profits and reduces the environmental impact.",img:"https://ntwist.com/wp-content/uploads/2022/04/control-room.jpg",hedding:"nOptimum"}
const fore={p:"Using our extensive knowledge of IT and OT, we help industrial operations implement and optimize data management processes and tools.nDatum ensures process plants are ready for the next phase of operation management with the help of ML/AI.",img:"https://ntwist.com/wp-content/uploads/2022/04/3ntw.jpg",hedding:"nDatum"}
const five={p:"NTWIST’s nEnviron suite of solutions provides analysis of greenhouse gas emissions and sustainability KPIs. These tools enable better and simpler GHG accounting and reporting. In conjunction with NTWIST’s other tools, nEnviron can be used to reduce greenhouse gas emissions.",img:"https://ntwist.com/wp-content/uploads/2022/04/istockphoto-1315584803-612x612-1.jpg",hedding:"nEnviron"}

function Ai() {
  return (
    <>
         <Topimg brand={top}/>

      <h1>NTWIST develops AI solutions to improve industrial processes. A team of process, control and chemical engineers work with data scientists and software engineers side-by-side, tailoring AI and machine learning technologies to solve industrial problems.</h1>
    <h1>Process engineers and control room operators are the key users of our platform.</h1>
     <h1>NTWIST product suite consists of nSensors, nAnalyser, nOptimum, nDatum, and nEnviron. Please find more details of these products below.</h1> 

     <div className="mx-auto w-full max-w-screen-2xl relative">
      <Left brand={one}/>
      <Right  brand={two}/>
      <Left  brand={three}/>
      <Right  brand={fore}/>
      <Left  brand={five}/>
      </div>

    </>
  )
}

export default Ai
