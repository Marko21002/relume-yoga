import React from "react";
;
import { EventItemHeader8 } from "@/components/EventItemHeader8";
import { Layout249 } from "@/components/Layout249";
import { Cta27 } from "@/components/Cta27";
import { Gallery9 } from "@/components/Gallery9";
import PortfolioCms from "@/components/PortfolioCms";
import { Layout5 } from "@/components/Layout5";
import { Contact10 } from "@/components/Contact10";
import { Footer1 } from "@/components/Footer1";
import { Portfolio16 } from "@/components/Portfolio16"; 
import { Navbar3 } from "@/components/Navbar3";
import { Header78 } from "@/components/Header78";
import { Contact18 } from "@/components/Contact18";
import { Header26 } from "@/components/Header26";
export default async function Home() {
  return (
    <div>
     <Navbar3/> 
       {/* <Header78 /> */}
       <EventItemHeader8/>  
      {/* <EventItemHeader8 /> */}
      <Portfolio16 />
      <Contact18/>
      
      <Contact10 />
      <Footer1 />
    </div>
  );
}
