import { Dispatch, SetStateAction } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import ActionButton from "./ActionButton";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from ".././assets/HomePageGraphic.png";
import SponsorRedBull from ".././assets/SponsorRedBull.png";
import SponsorForbes from ".././assets/SponsorForbes.png";
import SponsorFortune from ".././assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SponsorAdidas from ".././assets/SponsorAdidas.png";
import { motion } from "framer-motion";

type Props = { setSelectedPage: Dispatch<SetStateAction<string>> };

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:888px)");

  return (
    <section id="home" className="bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6" onViewportEnter={()=>setSelectedPage("home")}>
        {/* main header and action buttons */}
        <div className={`z-10 mt-[11%]`}>
          {/* main header */}
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
            {/* image */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext ">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            {/* intro */}
            <div className="text-md mt-[2%] md:text-start">
              Welcome to Evogym, where your fitness goals become reality. With
              top-notch facilities and dedicated trainers, we empower you to
              transform your body and achieve peak performance.
            </div>
          </motion.div>
          {/* action buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7,delay:0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }} className="mt-8 flex items-center gap-6">
            <ActionButton button={"Join Now"} setSection={setSelectedPage} />
            <AnchorLink
              className="text-m font-bold text-primary-500 underline hover:text-secondary-500"
              href="#contactus"
              onClick={() => setSelectedPage("contactus")}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        {/* graphic image */}
        <div className="mt-[4%] flex justify-center  md:z-10 md:justify-items-end sm:w-3/4 sm:mx-auto">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/* sponsors */}
      {isAboveMediumScreens && (
        <div className="flex h-[150px] w-full gap-10 bg-primary-100 py-10">
          <div className="mx-auto flex w-5/6 items-center justify-between">
            <div>
              <img alt="redbull-sponsor" src={SponsorRedBull} />
            </div>
            <div>
              <img alt="forbes-sponsor" src={SponsorForbes} />
            </div>
            <div>
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
            <div>
              <img
                alt="fortune-adidas"
                src={SponsorAdidas}
                className="h-17 w-20"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
