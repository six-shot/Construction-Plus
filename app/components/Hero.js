
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
     
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center w-full "
          style={{
            backgroundImage: `url("/background.png")`,
          }}
        >
          <div className="px-5 sm:px-20">
            <h4
              
              className="font-Agency relative v flex items-center sm:pl-20 pl-14 text-base font-bold text-primary"
            >
              C O N S T R U C T I O N B U S I N E S S
            </h4>
            <h2 className="sm:text-6xl text-5xl sm:leading-[72px] font-Agency -translate-x-[2px] font-bold text-white">
              Crafting Excellence, One <br className="sm:flex hidden" />
              Project at a Time. Your <br className="sm:flex hidden" />
              Trusted Construction Partner.
            </h2>
          </div>
        </div>
      
    </div>
  );
};

export default Hero;
