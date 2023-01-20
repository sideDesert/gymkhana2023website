import React, { useState, useEffect } from "react";
import TCard from "./teamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface club {
  name: string;
  desc: string;
}
const clubs: club[] = [
  {
    name: "aero",
    desc: "Want some thrilling flying stuff? Fascinated with flying things? Wanna blow your mind with the flow of wind? Come join us for an exciting experience! Aeromodelling is the art of designing and getting the design to build some awe-inspiring stuff to meet the skies. At IITH; we aviation enthusiasts fuel innovation to re-invent “flying” like it has never been before. Let’s re-energise aviation.",
  },
  {
    name: "cepheid",
    desc: "The Astronomy & Astrophysics Club of IIT Hyderabad. Here at Cepheid we try to bring awareness in the field of Astronomy and Astrophysics.We conduct various Events, Talks and other activities as a group.",
  },
  {
    name: "elektronica",
    desc: "Elektronica is the de facto electronics, artificial intelligence andmachine learning club of IIT Hyderabad.This is the platform for our students to dream innovative practical projects and achieve them. We strive to create interest in the students for electronics..",
  },
  {
    name: "kludge",
    desc: 'Welcome to VIBES - The music club of IITH! We conduct regular jamming sessions, guitar sessions, vocal sessions etc. to encourage learning new things and having fun. We want to bring out the musician in everyone. Join us if you love to sing, play or write music! Vibes was the winner of the "Best Cultural Club" title in the year 2017-18!',
  },
  {
    name: "infero",
    desc: "Infero is the Competitive Programming Club of IIT Hyderabad. We are a bunch who take care of everyone’s problems in our own nice geeky way, we think logically, we talk reasonably but well, we are too clumsy and lazy to act, our programs do it instead ;)",
  },
  {
    name: "lambda",
    desc: "We are the software development club of IITH. We build solutions and help others to do the same. Contributing to a quality piece of open source software can be a great learning experience. Keeping this in mind Hacktoberfest is conducted every year. It is open to everyone and is aimed to encourage involvement in the open source community.",
  },
  {
    name: "prakriti",
    desc: "Prakriti is the Nature Club of IIT Hyderabad. Prakriti is be a place where anyone interested in Nature, and willing to stay engaged, should be able to contribute with minimal procedural or structural hindrances.I",
  },
  {
    name: "robotix",
    desc: "Since the first appearance of a robot in a movie in 1927, robots have intrigued us through innumerable appearances in fictional stories in the media, be it the print or the film. The Robotix club IIT Hyderabad is a place where some of the most hardworking individuals strive to achieve perfection in the field of Robotics. The club came up in 2009 and since its formation, it has come a long way in terms of development and technology.",
  },
  {
    name: "torque",
    desc: "Torque, a club started by automobile aficionados, is aimed to nourish the passion of automobile enthusiasts. The purpose of this club is to enhance the mechanical knowledge amongst student enthusiasts at IITH. We aim to motivate the students, to coordinate and participate in co-curricular Activities along with their regular Academics which helps them to be more competitive in the era of industrialisation.",
  },
  {
    name: "glitch",
    desc: "Glitch is the official video game club of IIT Hyderabad.",
  },
];

const clubLogos = {
  aero: "https://scitech-iith.netlify.app/images/aero_logo.png",
  cepheid: "https://scitech-iith.netlify.app/images/cepheid.jpg",
  elektronica: "https://scitech-iith.netlify.app/images/elektronica.png",
  kludge: "https://scitech-iith.netlify.app/images/kludge.jpeg",
  infero: "https://scitech-iith.netlify.app/images/infero_logo.png",
  lambda: "https://scitech-iith.netlify.app/images/lambda_logo.png",
  prakriti: "https://scitech-iith.netlify.app/images/prakriti_logo.png",
  robotix: "https://scitech-iith.netlify.app/images/robotix_logo.png",
  torque: "https://scitech-iith.netlify.app/images/torque_logo.png",
  glitch:
    "https://static-cdn.jtvnw.net/jtv_user_pictures/e91b853c-5709-4786-afc3-01e956dfbea5-profile_image-300x300.png",
};

const coords = {
  cepheid: [
    {
      name: "Rushikesh Nilapalle",
      roll: "es20btech11022",
      position: "Coordinator",
    },
    {
      name: "Ambica Govind",
      roll: "ep21btech11007",
      position: "Coordinator",
    },
  ],
  aero: [
    {
      name: "Aditya Pillai",
      roll: "ME20BTECH11002".toLowerCase(),
      position: "Coordinator",
    },
    { name: "Arpita Gautam", roll: "ME20BTECH11008", position: "Coordinator" },
    { name: "Amaan", roll: "EP20BTECH11003", position: "Coordinator" },
  ],
  infero: [
    {
      name: "Gautham Bellamkonda",
      roll: "cs20btech11017",
      position: "Coordinator",
    },
    {
      name: "Perambuduri Srikaran",
      roll: "ai20btech11018",
      position: "Coordinator",
    },
    { name: "Varad Yergole", roll: "ch20btech11038", position: "Coordinator" },
  ],
  lambda: [
    { name: "Aayush Patel", roll: "cs20btech11001", position: "Coordinator" },
    { name: "Vikhyath", roll: "cs20btech11056", position: "Coordinator" },
  ],
  elektronica: [
    { name: "Ameya Chatur", roll: "bm20btech11002", position: "Coordinator" },
    {
      name: "Yenugula Hashish",
      roll: "ee20btech11056",
      position: "Coordinator",
    },
  ],
  robotix: [
    { name: "Atharv Ramesh", roll: "ee20btech11006", position: "Coordinator" },
    { name: "Anurag Manda", roll: "ee20btech11027", position: "Coordinator" },
    { name: "Samar Singhai", roll: "bm20btech11012", position: "Coordinator" },
  ],
  torque: [
    { name: "Harsh Jaiswal", roll: "ce20btech11013", position: "Coordinator" },
    { name: "Saket Kumar", roll: "ch20btech11030", position: "Coordinator" },
  ],
  epoch: [
    {
      name: "Ayush Kumar Singh",
      roll: "ai20btech11028",
      position: "Coordinator",
    },
    {
      name: "Anirudh Srinivasan",
      roll: "cs20btech11059",
      position: "Coordinator",
    },
  ],
  glitch: [
    { name: "Raghav Ambati", roll: "ma20btech11022", position: "Coordinator" },
    { name: "Vishal Datta", roll: "es20btech11009", position: "Coordinator" },
    { name: "Ojjas Tyagi", roll: "cs20btech11060", position: "Coordinator" },
  ],
  kludge: [
    {
      name: "Vks Deepak Reddy",
      roll: "ma20btech11019",
      position: "Coordinator",
    },
    {
      name: "Syed Saqib Habeeb",
      roll: "bm20btech11015",
      position: "Coordinator",
    },
  ],
  prakriti: [
    { name: "Trishna Gunna", roll: "me21btech11018", position: "Coordinator" },
    {
      name: "Vishnupriya Yarramasu",
      roll: "ce20btech11046",
      position: "Coordinator",
    },
  ],
};

function Scitech() {
  const [club, setClub] = useState("aero");
  const [desc, setDesc] = useState(clubs[0].desc);

  useEffect(() => {
    console.log({ club });
    let description = clubs.filter((el) => el.name === club);
    setDesc(description[0].desc);
  }, [club]);
  return (
    <React.Fragment>
      <div>
        <a
          href="https://scitech-iith.netlify.app/"
          target="_blank"
          rel="noopener"
        >
          <button className="bg-p text-w px-3 py-2 rounded-md hover:scale-105 transition-all mb-8">
            Know More
          </button>
        </a>
      </div>

      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
          Science and Technology Secretary
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className=" text-p">Science and Technology Secretary </h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Kotha Harshith
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">
                +91 9618365084
              </h4>
              <a
                href="mailto:scitech_secy@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                scitech_secy@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
        <h2 className="lg:text-4xl text-4xl font-bold text-center text-black lg:text-left mt-[2rem] mb-[1rem]">
          Clubs
        </h2>
        <div className="lg:grid lg:grid-cols-5 pt-4 hidden z-0 relative">
          <ul
            className={`lg:col-span-1 hidden text-2xl lg:flex lg:flex-col gap-3 [&>li]:cursor-pointer `}
          >
            <li
              className={`text-p ${club === "aero" ? "" : "text-opacity-40"}`}
              onClick={() => {
                setClub("aero");
              }}
            >
              Aero Club
            </li>
            <li
              className={`text-p ${
                club === "cepheid" ? "" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("cepheid");
              }}
            >
              Cepheid
            </li>
            <li
              className={`text-p ${
                club === "elektronica" ? "" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("elektronica");
              }}
            >
              Elektronica
            </li>
            <li
              className={`text-p ${club === "kludge" ? "" : "text-opacity-40"}`}
              onClick={() => {
                setClub("kludge");
              }}
            >
              Kludge
            </li>
            <li
              className={`text-p ${club === "infero" ? "" : "text-opacity-40"}`}
              onClick={() => {
                setClub("infero");
              }}
            >
              Infero
            </li>
            <li
              className={`text-p ${club === "lambda" ? "" : "text-opacity-40"}`}
              onClick={() => {
                setClub("lambda");
              }}
            >
              Lambda
            </li>
            <li
              className={`text-p ${
                club === "prakriti" ? "" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("prakriti");
              }}
            >
              Prakriti
            </li>
            <li
              className={`text-p ${
                club === "robotix" ? "" : "text-opacity-40"
              }`}
              onClick={() => {
                setClub("robotix");
              }}
            >
              Robotix
            </li>
            <li
              className={`text-p ${club === "torque" ? "" : "text-opacity-40"}`}
              onClick={() => {
                setClub("torque");
              }}
            >
              Torque
            </li>
            <li
              className={`text-p ${club === "glitch" ? "" : "text-opacity-40"}`}
              onClick={() => {
                setClub("glitch");
              }}
            >
              Glitch
            </li>
          </ul>
          <div className="lg:col-span-4 col-span-6 grid grid-cols-6 gap-6 lg:gap-[2rem] items-center relative">
            <div className="lg:col-span-4 lg:text-[18px] col-span-full lg:row-span-full ">
              <p className="mt-8 justify-self-start">{desc}</p>
              <div className="grid grid-cols-2">
                {coords[club]?.map((coord) => {
                  return (
                    <TCard
                      name={coord.name}
                      mobile={""}
                      position={"Coordinator"}
                      email={coord.roll.toLowerCase() + "@iith.ac.in"}
                      activePosition="Coordinator"
                    />
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-2 pointer-events-none h-full col-span-full lg:row-span-full relative flex justify-center items-center">
              <img
                className="w-full object-contain"
                src={clubLogos[club]}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ScitechMobile />
      </div>
    </React.Fragment>
  );
}

function Card({ title, imgUrl, desc }) {
  return (
    <div className="">
      <div className="">
        <h2 className="">{title}</h2>
      </div>
      <div className="">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="">
        <p>{desc}</p>
      </div>
    </div>
  );
}

function ScitechMobile() {
  return (
    <div className="lg:hidden">
      <Swiper
        loop={true}
        autoHeight={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        navigation={true}
        className="[&>div]:w-[80%]"
      >
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["aero"]}
            title={"Infocus"}
            desc={clubs[0].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["aero"]}
            title={"Litsoc"}
            desc={clubs[1].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["aero"]}
            title={"Behind The Lens"}
            desc={clubs[2].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["aero"]}
            title={"Vibes"}
            desc={clubs[3].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["aero"]}
            title={"Shuffle"}
            desc={clubs[4].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["aero"]}
            title={"Gesture"}
            desc={clubs[5].desc}
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card
            imgUrl={clubLogos["aero"]}
            title={"Rang de Manch"}
            desc={clubs[6].desc}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Scitech;
