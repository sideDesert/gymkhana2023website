
import { useState } from 'react'

function General() {
    const [councilState, setCouncilState] = useState('general')
  return (
    <>
        <div>
          <h2 className='lg:text-4xl text-3xl font-bold text-center text-black lg:text-left'>General Secretaries</h2>
          <div className='flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start' >
            <div className='bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g'>
              <h4 className='italic text-p'>General Secretary 1</h4>
              <h3 className='lg:text-2xl text-xl font-semibold text-black'>Shahidhar Rao Thumula</h3>
              <address className='pt-3'>
              <h4 className='lg:text-xl text-lg font-semibold'>7013583615</h4> 
              <a href="mailto:general_secy_1@gymkhana.iith.ac.in" className=' lg:text-xl text-[1rem]'>general_secy_1@gymkhana.iith.ac.in</a>
              </address>
            </div>
            <div className='bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g'>
              <h4 className='italic text-p'>General Secretary 2</h4>
              <h3 className='lg:text-2xl text-xl font-semibold text-black'>BATHINI LAKSHMI PRANATHI</h3>
              <address className='pt-3'>
              <h4 className='lg:text-xl text-lg font-semibold'>6303626493</h4> 
              <a href="mailto:general_secy_2@gymkhana.iith.ac.in" className='lg:text-xl text-[1rem]'>general_secy_2@gymkhana.iith.ac.in</a>
              </address>
            </div>
          </div>
        </div>
    </>
  )
}

export default General