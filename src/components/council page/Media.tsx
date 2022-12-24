import React from 'react'

function Media() {
  return (
    <div>
        <h2 className='lg:text-4xl text-3xl font-bold text-center text-black lg:text-left'>General Secretaries</h2>
        <div className='flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start' >
            <div className='bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl'>
              <h4 className=' text-p'>Media & Public Relations Secretary 1</h4>
              <h3 className='lg:text-2xl text-xl font-semibold text-black'>Ekshan Raj Verma</h3>
              <address className='pt-3'>
              <h4 className='lg:text-xl text-lg font-semibold'>+91 6266875616</h4> 
              <a href="mailto:general_secy_1@gymkhana.iith.ac.in" className=' lg:text-xl text-[1rem]'>media_secy@gymkhana.iith.ac.in</a>
              </address>
        </div>
        </div>
        {/* <div>
            <h2 className='mt-9 lg:text-4xl text-3xl font-bold text-center text-black lg:text-left'>Team</h2>
        </div> */}
    </div>
  )
}

export default Media