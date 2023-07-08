import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import Htext from "./Htext";
type Props = {
  setSelectedPage: Dispatch<SetStateAction<string>>;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
  } = useForm();
  const inputStyles =
    "w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    //console.log(getValues().email);
    console.log(getValues("email"));
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <motion.section
      onViewportEnter={() => setSelectedPage("contactus")}
      className="mx-auto w-5/6 py-24 md:min-h-full"
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
        className="md:w-3/5"
      >
        <Htext>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </Htext>
        <p className="my-5">
          Join now and get in shape with our gym! Our expert trainers,
          state-of-the-art facilities, and diverse classes are designed to help
          you achieve your fitness goals. Don't wait any longer – start your
          fitness journey today and experience the transformation firsthand.
        </p>
      </motion.div>
      {/* form and image */}
      <div className="mt-10 justify-between gap-8 md:flex z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-3/5 "
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/08d1e19a425b12e98a324c64805a676d"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500">
                {errors.name.type === "required" && "This field is required"}
                {errors.name.type === "maxLength" &&
                  "Maximum characters is 100"}
              </p>
            )}
            <input
              className={inputStyles}
              type="email"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Not a valid email"}
              </p>
            )}
            <textarea
              className={inputStyles}
              rows={4}
              cols={50}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-primary-500">
                {errors.message.type === "required" && "This field is required"}
                {errors.message.type === "maxLength" &&
                  "Maximum characters is 2000"}
              </p>
            )}
            <button
              type="submit"
              className="mt-5 rounded-lg bg-secondary-500 px-10 py-3 transition duration-500 hover:text-white"
            >
              Submit
            </button>
          </form>
        </motion.div>
        <motion.div
          className="relative mt-16 basis-2/5 md:mt-0 z-100 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="before:z-1 w-full before:absolute before:-bottom-20 before:-right-10 md:before:content-evolvetext">
            <img src={ContactUsPageGraphic} className="mx-auto w-full " />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
