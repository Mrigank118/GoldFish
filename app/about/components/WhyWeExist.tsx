import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/app/(root)/components/Animations/FadeInSection";

const WhyWeExist = () => {
  return (
    <FadeInSection>
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 max-w-screen-xl mx-auto">
            {/* Image */}
            <motion.div
              className="relative h-64 sm:h-[400px] md:h-[550px] w-full md:w-[300px] mx-auto md:mx-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/about/about_hero_02.png"
                alt="Walking woman illustration"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Text & Quotes */}
            <motion.div
              className="mt-10 md:mt-0 space-y-8 text-center md:text-left w-full md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Why we exist?
              </h2>

              <div className="space-y-6">
                <motion.div
                  className="bg-[#FDBA3C] text-black rounded-xl px-6 py-4 text-sm sm:text-base font-medium mx-auto md:mx-0 md:-translate-x-4 max-w-md"
                  whileHover={{ scale: 1.05 }}
                >
                  “I went from idea to launch, and learned so much along the
                  way”
                  <br />
                  -- Student
                </motion.div>

                <motion.div
                  className="bg-[#C0705A] text-white rounded-xl px-6 py-4 text-sm sm:text-base font-medium mx-auto md:mx-0 md:translate-x-20 max-w-md"
                  whileHover={{ scale: 1.05 }}
                >
                  “AI HELP has been invaluable on my startup journey”
                  <br />
                  -- Student
                </motion.div>

                <motion.div
                  className="bg-[#FBE9D2] text-black rounded-xl px-6 py-4 text-sm sm:text-base font-medium mx-auto md:mx-0 md:-translate-x-4 max-w-md"
                  whileHover={{ scale: 1.05 }}
                >
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  -- Student
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default WhyWeExist;
