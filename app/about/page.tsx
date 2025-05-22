"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "../(root)/components/Animations/FadeInSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-white text-black">
      {/* About Us Section */}
      <motion.section
        className="py-16 sm:py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            {/* Image */}
            <motion.div
              className="relative w-full h-64 sm:h-80 md:h-[400px] md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/about/about_hero_01.png"
                alt="About illustration"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="mt-10 md:mt-0 md:w-1/2 space-y-4 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                About Us
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Goldfish Ladder is a launchpad for high school innovators.
                <br />
                We empower teenage founders to take their first steps into
                entrepreneurship—with tools, mentorship, and real funding. From
                idea to execution, our platform provides AI support, expert
                guidance, and opportunities to pitch in our Mini Shark Tank.Our
                mission is simple: make building a startup as accessible as
                starting a school project.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <FadeInSection>
        <section className="bg-white py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-10 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Our Team
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Meet the people behind the mission
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-start text-left space-y-4 bg-white rounded-3xl shadow-[0px_0px_10px_rgba(0,0,0,0.2)] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 overflow-hidden rounded-full border self-center">
                    <Image
                      src={`/about/about_people_0${i}.png`}
                      alt={`Team member ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-base font-semibold">Team Member {i}</h3>
                  <p className="text-sm font-medium text-gray-600">
                    Role or short bio goes here
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
