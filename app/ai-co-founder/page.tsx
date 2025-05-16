"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import right from "@/assets/icons/right.svg";

export default function AiCoFounderPage() {
  return (
    <section className="max-w-[965px] mx-auto mt-20 md:mt-20 mb-20 md:mb-44 px-[40px]">
      {/* Header Section */}
      <motion.div
        className="text-center max-w-[770px] mx-auto mb-5 md:mb-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-bold text-4xl md:text-6xl mb-4">
          Let's build together
        </h1>
        <p className="text-xl md:text-4xl">
          “Work with an AI Co-founder to Launch Your Startup Idea”
        </p>
      </motion.div>

      {/* Subheading */}
      <motion.p
        className="bg-[#854836] text-center text-white rounded-3xl py-3 text-sm px-2 md:text-xl font-bold mb-5 md:mb-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        From idea to impact—AI helps you plan, build, and pitch.
      </motion.p>

      {/* Form Section */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="w-full shadow-inner bg-[#FFEED3] flex md:py-3 p-2 md:pl-8 rounded-3xl justify-start md:mt-0 mt-[30px]">
          {/* Input Field */}
          <input
            type="text"
            className="flex-1 w-[30px] bg-[#FFEED3] border-none focus:outline-none text-2xl md:text-4xl font-normal  ml-2"
            placeholder="Tell us your ideas"
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="h-[50px] w-[100px] md:h-[100px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={right} height={104} width={92} alt="Right Icon" className=" max-w-[60px] max-h-[70px] ml-auto lg:max-w-[90px] lg:max-h-[150px] lg:mr-[10px]"/>
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}