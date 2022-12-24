import React from "react";
import Options from "./Options";
const dummy = 'https://cdn.discordapp.com/attachments/1006640769819475988/1053297294818168852/white_vertical.png'
const bg = 'https://res.cloudinary.com/dxe7myxfw/image/upload/v1671621514/Elan/Gallery/17_mll8qu.jpg'

function Elan() {
  return (
    <section className="px-[2rem] py-[2rem] bg-[#000000d1] text-white relative lg:px-[7rem] lg:pt-[4rem] min-h-[100vh] lg:flex lg:flex-col lg:justify-center">
      <div className="w-full  h-[5rem]"></div>
      <Options eventId={'elan'}></Options>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-left text-center font-semibold uppercase lg:text-[4rem] lg:font-bold">Elan & nVision</h2>
      </div>
     <div className="lg:grid lg:grid-cols-5 lg:grow"> 
     <div className="w-full h-auto my-6 px-[2rem] lg:col-span-2 lg:flex justify-center items-center">
        <img src={dummy} alt="Elan & nVision" />
      </div>
      <div className="py-5 lg:col-span-3 self-center">
        <p className="lg:text-[1.25rem]">
        Elan & ηVision is the annual techno-cultural fest of IIT Hyderabad and is one of the largest fests in South India. It is entirely organized by IITH students.

Elan refers to the cultural part and ηVision cites the technological part of the fest. This festival features several professional and semi-professional crowd-pulling events and promises to be a grand event showcasing the best of cultural performances, technical solutions, and student community advances 2022
        </p>
        <div className="my-8 justify-end lg:flex">
        <a href='https://elan.org.in/' target='_blank' rel='noopener noreferrer'> <button className=" scale-90 disabled text-xl bg-blue-700 text-white px-4 py-3 rounded-lg">
          Navigate to Website
        </button></a>
        </div>
      </div>
      
      </div>
      <div className="h-full w-full absolute top-0 left-0 -z-10 blur-sm ">
        <img src={bg} alt="" className="h-full w-full object-cover"/>
      </div>
    </section>
  );
}

export default Elan;
