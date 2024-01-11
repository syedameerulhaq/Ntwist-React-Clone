import React from 'react'
import Right from "../partials/right";
import Left from "../partials/left";
import Topimg from '../partials/topimg';
const top={img:"https://ntwist.com/wp-content/uploads/2022/04/metalore-1024x475-1.jpg",p:"NTWIST offers a number of solutions for mills, concentrators, and leach plants.Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption",hedding:"Mineral Processing"}

const one={p:"Variability in hardness and mineralogy of run-of-mine ore is a serious problem that reduces throughput and causes recovery issues downstream. NTWIST addresses this issue by offering a solution that identifies feed origin and provides grade and lithology tracking throughout feed stockpiles. With the help of our mill feed identification and tracking solutions, a gold operation processing 2 mil tons of ore from multiple sources can increase throughput and improve recovery to generate additional US $3 mil/year",img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",hedding:"Mill Feed Identification And Tracking"}
const two ={p:"The need to maintain throughput and grind size targets while keeping costs down is what makes comminution so challenging. NTWIST offers a number of solutions to assist mill operators with this task. With the help of computer vision, we can help you detect oversized ore that can cause jams in crusher circuits so the problem can be addressed immediately. Using secondary circuit instrumentation, our solution can generate a continuous estimate of grind size and unbiased pulp density readings. NTWIST’s optimization solution can also provide setpoint recommendations to keep operation on target. With the help of NTWIST’s P80 virtual instrument, a nickel concentrator identified a 20% improvement in grind size target conformance unlocking more than a quarter million dollars a year.",img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-1323962854.jpg",hedding:"Crushing & Grinding Optimization"}
const three={p:"Flotation circuits often bottleneck concentrator operation both in terms of throughput and recovery. NTWIST offers a computer vision solution that can monitor froth quality and alert operators about emerging issues. Coupled with a density virtual instrument, our flotation solution can help stabilize and optimize your flotation circuit ",img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-1266810222.jpg",hedding:"Flotation Circuit Optimization"}
const fore={p:"Pressure leaching processes (HPAL and POX) require significant steam/acid or oxygen addition to promote metal dissolution (or liberation in the case of gold) which drives up operating costs. Temperature, acidity and oxygen addition also affect the output chemistry and, in turn, the cost of downstream refining and the environmental impact of the residue produced. The complexity of the process makes it difficult to model it using chemistry-based models alone. NTWIST tackles the problem by building models based on actual historical data and offering optimal operating setpoints to the operator. An assessment of NTWIST’s optimization solution for Ambatovy carried out by Sherritt Technologies uncovered potential annual savings of US $1.7 mil. ",img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-120671509.jpg",hedding:"Leaching Optimization"}

function Metal() {
  return (
   <>
   <Topimg brand={top} />
   <div className="mx-auto w-full max-w-screen-2xl relative">
   <Left brand={one}/>
   <Right  brand={two}/>
   <Left  brand={three}/>
   <Right  brand={fore}/>
   </div>
   </>
  )
}

export default Metal
