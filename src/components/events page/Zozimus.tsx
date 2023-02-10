import React from 'react';
import dummy from '/public/images/zozimus.png';
const bg = '/public/images/zozimusbg.jpg';
import Options from './Options';

function Zozimus() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={'zozimus'} />
      <div className="relative z-10">
        <h2 className="text-4xl font-semibold uppercase lg:text-[4rem] lg:font-bold">
          Zozimus
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:grow">
        <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
          <img src={dummy} alt="zozimus" />
        </div>
        <div className="py-5 lg:col-span-3 self-center">
          <p className="lg:text-[1.25rem]">
            It’s the Litfest! Time for Merriment and Jollification In the words
            of Roald Dahl, “A little magic can take you a long way.”
          </p>
        </div>
      </div>

      <div className="h-full w-full absolute top-0 left-0 -z-10 blur-sm ">
        <img src={bg} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
}

export default Zozimus;
