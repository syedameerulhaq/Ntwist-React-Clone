import React from 'react'
import Right from "../partials/right";
import Left from "../partials/left";
import Topimg from '../partials/topimg';

const top={img:"https://ntwist.com/wp-content/uploads/2023/01/iStock-1188996771-scaled-e1674842758764.jpg",p:"NTWIST offers a new product that unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. ",hedding:"Mine-To-Mill-To-Mine Optimization"}

const one ={p:"The mining side of a gold operation is often isolated from downstream ore processing. Although there is plenty of geological information available on the mining side, seldom does a mill receive information about its feed beyond expected averages. The siloed nature of operation also prevents mine planners from learning from downstream indicators (such as plant throughput and gold recovery) and ultimately correcting resource estimation biases. NTWIST’s solution is designed to address these issues in open-pit gold mines. ",img:"https://ntwist.com/wp-content/uploads/2023/01/dominik-vanyi-Mk2ls9UBO2E-unsplash-1536x1024.jpg"}
const two ={p:"One of the key features of NTWIST’s mine-to-mill-to-mine optimization solution is the ability to track material flow from the mine to the stockpile. By connecting block models, fleet management systems, and stockpile photogrammetry, our software is able to create a granular dynamic block model of the stockpile and provide the downstream plant with real-time information on ore freed properties such as grade and hardness. This level of material tracking enables mills, and leach plants, to make more informed decisions and ultimately improve the overall efficiency of the operation. It is expected that costs can be reduced by up to $30/oz through better blending decisions and revenue can be boosted by up to $90/oz thanks to improved recoveries. ",img:"https://ntwist.com/wp-content/uploads/2023/01/iStock-1309492800-1536x1022.jpg"}
const three ={p:"In addition to material tracking, NTWIST’s software also includes reconciliation and discrepancy analysis features that are designed to reduce losses and dilution and improve production planning. By tracking ore properties throughout the value chain, it is possible to calculate discrepancies that can be attributed to specific block characteristics. This information can then be used to correct resource estimation biases and improve the overall accuracy of the block model. The result is a more accurate and detailed understanding of the ore body, which can lead to increased production and improved profitability for the mine. ",img:"https://ntwist.com/wp-content/uploads/2023/01/Screenshot-2023-01-30-at-2.15.11-AM-1536x764.png"}


function Mine() {
  return (
    <>
    <Topimg brand={top}/>
            <div className="mx-auto w-full max-w-screen-2xl relative">
   <Left brand={one}/>
   <Right  brand={two}/>
   <Left  brand={three}/>
   </div>
    </>
  )
}

export default Mine
