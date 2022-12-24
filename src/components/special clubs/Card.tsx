import React from 'react'

function Card({bgColor='bg-white',textColor='text-black', imgUrl='', title='dummy', desc='', link='', buttonBg = 'bg-blue-500', buttonText='text-white' }) {
  return (
    <div className={`min-w-[16.875rem] max-w-[20rem] h-fit ${bgColor} rounded-2xl p-[1.5rem]`}>
      <div><h2 className={`${textColor} text-2xl font-semibold`}>{title}</h2></div>
      <div className='h-[15rem] w-[12rem] relative flex justify-center'>
        <img src={imgUrl} className='object-contain absolute' alt="" />
      </div>
      <div>
        <p>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Card