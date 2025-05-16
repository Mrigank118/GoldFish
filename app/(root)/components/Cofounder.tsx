
"use client";

import Image from "next/image";
import chatgpt from "@/assets/chatgpt.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeInSection from "./Animations/FadeInSection";
import React from "react";






const Cofounder = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("cofounder-section");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section id="cofounder-section" className="max-w-6xl mx-auto mt-20 md:mt-28 mb-20 md:mb-36 px-4 md:px-6">
      <FadeInSection>
        <div className="max-w-[482px] mx-auto md:mx-0 space-y-6 py-10 text-center md:text-left">
          <motion.h1 
            className="text-4xl font-bold md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Co-Founder
          </motion.h1>
        </div>
      </FadeInSection>
      
      <motion.figure
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { 
          opacity: 1, 
          scale: 1,
          boxShadow: ["0px 0px 0px rgba(0,0,0,0.1)", "0px 20px 30px rgba(0,0,0,0.15)", "0px 0px 0px rgba(0,0,0,0.1)"]
        } : { opacity: 0 }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.3 },
          scale: { duration: 0.8, delay: 0.3 },
          boxShadow: { duration: 4, repeat: Infinity, delay: 1 }
        }}
        className="rounded-xl overflow-hidden"
      >
          
        <Image
          src={chatgpt}
          alt="Chat GPT"
          height={714}
          width={1070}
          className="object-contain"
        />
  </motion.figure>
      
      <motion.div 
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.button 
          className="bg-[#FFB32C] text-lg md:text-3xl font-bold py-3 px-4 md:py-7 md:px-8 rounded-md"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
          animate={isVisible ? { 
            boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 5px 15px rgba(0,0,0,0.3)", "0px 0px 0px rgba(0,0,0,0)"] 
          } : {}}
          transition={{ boxShadow: { duration: 3, repeat: Infinity, delay: 1 } }}
        >
          Meet Your AI co-founder
        </motion.button>
      </motion.div>
    </section>
  );
};
export default Cofounder;