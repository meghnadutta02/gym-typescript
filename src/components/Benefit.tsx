import React, { Dispatch, SetStateAction } from 'react'
import { BenefitType } from './shared/types'
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
type Props = BenefitType & { setSelectedPage:Dispatch<SetStateAction<string>>}
const childVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  };
const Benefit = ({icon,title,description,key,setSelectedPage}: Props) => {
  return (
    <motion.div
    key={key}
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-5">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage("contactus")}
        href={`#contactus`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  )
}

export default Benefit