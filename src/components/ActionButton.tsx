import React from 'react'
import { Dispatch, SetStateAction } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
type Props = {
    button:React.ReactNode,
    setSection:Dispatch<SetStateAction<string>>
}

const ActionButton = ({button,setSection}: Props) => {
  return (
    <AnchorLink className='rounded-md bg-secondary-500 px-5 py-2 hover:bg-primary-500 hover:text-white'
    onClick={()=>setSection("contactus")}
    href="#contactus">{button}</AnchorLink>
  )
}

export default ActionButton