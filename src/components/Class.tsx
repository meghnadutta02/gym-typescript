import { ClassType } from './shared/types'

const Class = ({key,name,description,image}: ClassType) => {
    const overLaystyles=`p-5 absolute z-20 flex flex-col h-full w-full items-center justify-center whitespace-normal bg-primary-500 text-center opacity-0 text-white transition duration-500 hover:opacity-80`
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
        <div className={`${overLaystyles}`}>
            <p className='text-2xl'>{name}</p>
            <p className='mt-5'>{description}</p>
            
        </div>
        <img alt={`classes-image${key}`} src={image}/>
    </li>
  )
}

export default Class