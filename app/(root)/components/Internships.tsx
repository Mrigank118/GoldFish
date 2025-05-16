"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";


const internships = [
  {
    title: "Wave",
    description:
      "Wave is a mental health tech startup dedicated to making emotional well-being more accessible through personalised, AI-driven support tools...",
    image: "/internship/wave.avif",
  },
  {
    title: "Project Clay",
    description:
      "Project Clay is a mentorship platform that connects high school students with near-peer mentors...",
    image: "/internship/project-clay.png",
  },
  {
    title: "Junior Economics Club",
    description:
      "The Junior Economic Club (JEC) is a student-led organisation dedicated to expanding high school students' knowledge of economics...",
    image: "/internship/je.avif",
  },
  {
    title: "Finomic",
    description:
      "Finomic is a youth-led organization specializing in increasing financial literacy among the youth...",
    image: "/internship/fin.avif",
  },
  {
    title: "EconUnited",
    description:
      "EconUnited helps high school students worldwide learn about economics, finance, and business...",
    image: "/internship/eco.avif",
  },
  {
    title: "Cognify Wealth",
    description:
      "Cognify Wealth is an international nonprofit focused on bringing financial literacy to neurodivergent individuals...",
    image: "/internship/cog.avif",
  },
  {
    title: "HumaraPundit",
    description:
      "Humara Pandit is a Bengaluru-based faith-tech startup that offers a range of services including booking pandits...",
    image: "/internship/ham.avif",
  },
  {
    title: "TeeMeUp",
    description:
      "Teemeup is a student-led custom T-shirt brand that blends creativity, youth-driven design, and quality apparel...",
    image: "/internship/tec.avif",
  },
  {
    title: "WomenUp",
    description:
      "WomenUp is dedicated to supporting and empowering women in business. They aim to build a strong community...",
    image: "/internship/wom.avif",
  },
  {
    title: "Pinkface",
    description:
      "Pinkface is a youth-led organisation focused on teenage mental health...",
    image: "/internship/tee.avif",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Internships = () => {
  return (
    <motion.section
  className="max-w-[1000px] mx-auto mt-[272px] md:px-0 w-full flex flex-col justify-center items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }} 
  variants={containerVariants}
>
  <div className="mx-[80px]">
    <motion.div
      className="mb-12 text-center lg:text-left"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-7">
        Internships
      </h2>
      <p className="font-[400] text-lg md:text-3xl">
        Discover exciting internships with impactful youth-led startups
      </p>
    </motion.div>

    <motion.div
      className="space-y-12 md:space-y-16"
      variants={containerVariants}
    >
      {internships.map(({ title, description, image }, i) => (
        <motion.div
          key={i}
          className=""
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="bg-white flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-8 md:py-12 rounded-none rounded-b-xl border-b-[15px] border-b-[#b17e11] text-black">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-10">
              <div>
                <h3 className="font-bold text-[24px] md:text-[36px]">
                  {title}
                </h3>
                <p className="mt-4 text-[16px] md:text-[20px] max-w-3xl">
                  {description}
                </p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 self-center md:self-auto">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={image}
                  alt={title}
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>

    <motion.div
      className="mt-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <motion.button
        className="bg-[#FFB32C] text-[#6B3F2D] hover:bg-[#FDBA3C]/90 py-3 px-9 text-3xl rounded-2xl font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View More
      </motion.button>
    </motion.div>
  </div>
</motion.section>

  );
};

export default Internships;
