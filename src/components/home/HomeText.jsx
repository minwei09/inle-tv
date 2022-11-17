import React from 'react'
import { useSelector } from 'react-redux'

const HomeText = () => {

  const heading = useSelector( state => state.language.choose_Language[2].HomePage[3].HomeText[0].heading)

  const paragraph = useSelector( state => state.language.choose_Language[2].HomePage[3].HomeText[1].para)


  return (
    <div >
        <div className='flex flex-col gap-y-5 text-lg sm:text-base lg:text-lg p-4  rounded-md shadow-md'>
            <h1 className='text-xl leading-[2.5rem]'>{heading}</h1>
            {paragraph.map( item => (
              <p key={item.name} >{item.name}</p>
            ))}
        </div>
    </div>
  )
}

export default HomeText