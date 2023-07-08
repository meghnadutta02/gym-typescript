import React, { Dispatch, SetStateAction } from "react";
import Class from "./Class"
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import { ClassType } from "./shared/types";
import { motion } from "framer-motion";
import Htext from "./Htext";
type Props = { setSelectedPage: Dispatch<SetStateAction<string>> };
const classes:Array<ClassType> =[
    {
    name: "Weight Training Classes",
    description:
    "Build strength and sculpt your body with our intensive weight training classes. Our experienced trainers will guide you through a variety of exercises and techniques to help you maximize muscle growth and improve overall strength.",
    image: image1,
    },
    {
    name: "Yoga Classes",
    description:
    "Discover inner peace and enhance your flexibility with our invigorating yoga classes. Led by our skilled instructors, our yoga sessions cater to all levels, from beginners to experienced practitioners. Immerse yourself in a calming atmosphere as you flow through poses, improve your posture, and focus on mindfulness.",
    image: image2,
    },
    {
    name: "Ab Core Classes",
    description:
    "Strengthen and tone your core muscles with our dynamic ab core classes. Targeting your abdominal muscles and lower back, these classes are designed to help you achieve a sculpted midsection and improve overall stability. Our expert trainers will guide you through a series of exercises, including planks, crunches, and twists, to help you build a strong and defined core.",
    image: image3,
    },
    {
    name: "Adventure Classes",
    description:
    "Embark on thrilling adventures with our adrenaline-pumping adventure classes. These high-energy sessions combine elements of cardiovascular training, functional movements, and outdoor activities to provide a unique and exhilarating fitness experience.Join us and unleash your inner adventurer.",
    image: image4,
    },
    {
    name: "Fitness Classes",
    description:
    "Our fitness classes offer a diverse range of workouts to cater to all fitness enthusiasts. From cardio-based sessions to circuit training and HIIT workouts, our classes are designed to burn calories, boost your metabolism, and improve overall cardiovascular fitness. Led by our motivating instructors, these classes provide a dynamic and energetic atmosphere that will keep you engaged.",
    image: image5,
    },
    {
    name: "Training Classes",
    description:
    "Take your fitness journey to the next level with our comprehensive training classes. These sessions combine elements of strength training, cardiovascular exercises, and functional movements to help you build a well-rounded fitness foundation. Our knowledgeable trainers will provide guidance on proper form and technique, ensuring your workouts are effective and safe.",
    image: image6,
    },
    ];
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <motion.section
      onViewportEnter={() => setSelectedPage("ourclasses")}
      id="ourclasses"
      className="py-30 mx-auto w-full bg-primary-100"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mx-auto w-5/6 py-10"
      >
        <div className="md:w-3/4">
          {" "}
          <div className="mb-8">
            <Htext>OUR CLASSES</Htext>
          </div>
          <p>
            Our classes are the heartbeat of our gym, offering a dynamic and
            diverse range of fitness experiences for every individual.Led by our
            skilled instructors, our classes provide a motivating and inclusive
            atmosphere where you can push your limits, and have fun along the
            way. With a wide variety of class options and schedules, you'll
            always find something that fits your interests and availability.
            Join our classes and embark on a fitness journey that will leave you
            feeling inspired, energized, and excited to come back for more.
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[355px] w-full overflow-x overflow-y-hidden">
    <ul className="w-[2800px] whitespace-nowrap">
        {classes.map((item:ClassType,index)=>(
            <Class key={index} name={item.name} description={item.description} image={item.image}/>
        ))}
    </ul>
      </div>
    </motion.section>
  );
};

export default OurClasses;
