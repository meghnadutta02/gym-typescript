import React, { Dispatch, SetStateAction } from "react";
import Benefit from "./Benefit";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitImage from "../assets/BenefitsPageGraphic.png";
import Htext from "./Htext";
import { BenefitType } from "./shared/types";
import ActionButton from "./ActionButton";
//for child components
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const benefits: Array<BenefitType> = [
  {
    
    icon: <HomeModernIcon className="h-7 w-7" />,
    title: "State of the Art Facilities",
    description:
      "Experience the pinnacle of fitness amenities with our state-of-the-art facilities. From cutting-edge equipment to spacious workout areas, we provide everything you need to elevate your fitness routine and achieve remarkable results.",
  },
  {
    
    icon: <UserGroupIcon className="h-7 w-7" />,
    title: "100's of Diverse Classes",
    description:
      "Immerse yourself in a world of fitness variety with our extensive range of diverse classes. Whether you prefer high-intensity interval training, yoga, spin, or dance-inspired workouts, we have something for everyone. ",
  },
  {
   
    icon: <AcademicCapIcon className="h-7 w-7" />,
    title: "Expert and Pro Trainers",
    description:
      "Receive personalized guidance and support from our team of expert and professional trainers. They possess the knowledge, expertise, and passion to help you reach your fitness goals effectively and safely. ",
  },
];
type Props = { setSelectedPage: Dispatch<SetStateAction<string>> };

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      onViewportEnter={() => setSelectedPage("benefits")}
      id="benefits"
      className="min:h-full mx-auto w-5/6 py-20"
    >
      {/* headers */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        }}
        className="md:w-3/4"
      >
        <Htext>Unleash Your Inner Strength at Our Cutting-Edge Gym!</Htext>
        <p className="text-md my-5">
          Whether you're a beginner looking to kickstart your journey or a
          seasoned athlete seeking new challenges, we have the tools and support
          to guide you every step of the way. Join us today and embark on a path
          of growth, empowerment, and optimal wellness.
        </p>
      </motion.div>
      {/* benefits */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="mt-5 items-center justify-between gap-8 md:flex"
      >
        {benefits.map((benefit: BenefitType,index) => (
          <Benefit
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>
      {/* graphics and description */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-[8.5%] md:flex">
        
        <img className="mx-auto md:w-3/6 sm:w-4/6" alt="benefit-graphic" src={BenefitImage} />
        
        

        <div>
          {/* title */}
          <div className="relative sm:my-10">
            <div className="before:absolute before:-left-20 before:-top-20 before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Htext>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT!</span>{" "}
                </Htext>
              </motion.div>
            </div>
          </div>
          {/* description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Join our gym community and become one of the millions of happy
              members who are achieving their fitness goals and getting fit. Our
              inclusive and supportive environment welcomes individuals of all
              fitness levels, from beginners to advanced athletes. With
              state-of-the-art facilities, expert trainers, and a wide range of
              classes, we provide the perfect platform for you to embark on your
              fitness journey.
            </p>
            <p className="mb-5">
              We believe that exercise should be enjoyable and rewarding, which
              is why we offer a variety of programs and amenities to suit your
              individual needs. From innovative workout equipment to fun and
              challenging classes, we have everything you need to make fitness a
              part of your lifestyle. Our dedicated team of trainers is
              passionate about helping you reach your goals, providing
              personalized guidance and support along the way.
            </p>
          </motion.div>
          {/*button */}
          <div className="relative mt-12">
            <div className="before:absolute before:-top-10 before:right-40 before:content-sparkles">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ActionButton button={"Join Us"} setSection={setSelectedPage} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
