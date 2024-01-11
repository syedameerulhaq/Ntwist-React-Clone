import React from 'react'
import Topimg from '../partials/topimg'
import Right from "../partials/right";
import Left from "../partials/left";
function Sustainability() {
   
  const one={p:"With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.",img:"https://ntwist.com/wp-content/uploads/elementor/thumbs/rich-1160x774-1-qcbh0ds9fzedmrz2md95b0w34edspthcr4rw7ewkyw.jpg",hedding:""}
  const two={p:"Implementation of online greenhouse gas (GHG) emissions tracking is the first step towards GHG reduction. NTWIST’s software automatically counts Scope 1 and 2 GHG emissions.",img:"https://ntwist.com/wp-content/uploads/elementor/thumbs/accounting-degree-1024x683-1-qcbh0jf9c994oiiqa0cy9lmq5qdystapnnvli1sxz4.jpg",hedding:""}
  const three={p:"NTWIST’s optimization solutions for mills, concentrators and leach plants take into account how process control decisions impact energy usage and GHG emissions. They can help you operate the process better while minimizing or at least capping the environmental impact. ",img:"https://ntwist.com/wp-content/uploads/2021/12/energy-Block-3-2020.jpg",hedding:""}
  const fore={p:"Whether you need a regulatory report or an online public-facing dashboard, NTWIST’s software will make it happen for you. With automated reporting, our software can free up your time for what truly matters — finding ways to reduce GHG emissions.",img:"https://ntwist.com/wp-content/uploads/elementor/thumbs/NTWIST-Dashboard-Demo-qcbh0dscrpibxed1wfa5m15fa8qyjz5onbtqxsbofi.png",hedding:""}


  const top={img:"https://ntwist.com/wp-content/uploads/2022/04/sustainabilitybanner.jpg",p:"Environmental stewardship is a priority for NTWIST. We help our customers to minimize their Carbon impact on the planet.",hedding:"Sustainability"}

  return (
    <>
    <Topimg brand={top}/>
    <div className="mx-auto w-full max-w-screen-2xl relative">
  <Left brand={one}/>
  <Right  brand={two}/>
  <Left  brand={three}/>
  <Right  brand={fore}/>
  </div>
  </>


  )
}

export default Sustainability
