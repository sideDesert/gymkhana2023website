import React from 'react';
import TCard from './teamCard';
const PR = [
  {
    position: 'head',
    name: 'Kuntal Suman',
    mobile: ' +91-8578001808',
    mail: 'ce21btech11022@iith.ac.in',
  },
  {
    position: 'coordinator',
    name: 'Nakul Garg',
    mobile: ' +91-9354662767',
    mail: ' me21btech11035@iith.ac.in',
  },
  {
    position: 'coordinator',
    name: 'Laxmi Sreya',
    mobile: '  +91-9391322582',
    mail: ' ce21btech11038@iith.ac.in',
  },
  {
    position: 'coordinator',
    name: 'Hadi Afnan',
    mobile: ' +91-7994344759',
    mail: 'ms20btech11009@iith.ac.in',
  },
  {
    position: 'coordinator',
    name: 'Kartik Katekar',
    mobile: ' +91-7083797250',
    mail: 'me21btech11024@iith.ac.in',
  },
];
const Des = [];
const Content = [];
const Web = [];
const Int = [];
const Events = [];

const teams = {
  PR: [
    ['Kuntal Suman', '+91-8578001808', 'ce21btech11022@iith.ac.in', 'head'],
    [
      'Nakul Garg',
      '+91-9354662767',
      'me21btech11035@iith.ac.in',
      'coordinator',
    ],
    ['Sreyaa', '+91-9391322582', 'ce21btech11038@iith.ac.in', 'coordinator'],
    [
      'Hadi Afnan',
      '+91-7994344759',
      'ms20btech11009@iith.ac.in',
      'coordinator',
    ],
    [
      'Kartik katekar',
      '+91-7083797250',
      'me21btech11024@iith.ac.in',
      'coordinator',
    ],
  ],
  Design: [
    ['Prachi Anand', '+91-9867166443', 'md21mdes14031@iith.ac.in', 'head'],
    [
      'Gatikrushna Mohapatra',
      '+91-7205869973',
      'bd21bdes11008@iith.ac.in',
      'coordinator',
    ],
    [
      'Anand Sharma',
      '+91-9111280778',
      'ic21btech11002@iith.ac.in',
      'coordinator',
    ],
    [
      'Boda Premchand',
      '+91-7013640047',
      'bd21bdes11006@iith.ac.in',
      'coordinator',
    ],
    [
      'Digjoy Nandi',
      '+91-9706709050',
      'ai20btech11007@iith.ac.in',
      'coordinator',
    ],
  ],
  Content: [
    ['Suvitti', '+91-8901028748', 'ai21resch11005@iith.ac.in', 'head'],
    [
      'Bhanu Teja Reddy chemikala',
      '+91-9346570712',
      'es20btech11010@iith.ac.in',
      'coordinator',
    ],
    [
      'Abhijit Kasle',
      '+91-9112137266',
      'ep21btech11002@iith.ac.in',
      'coordinator',
    ],
    [
      'Supriya Rawat',
      '+91-9068270073',
      'ma21mscst11004@iith.ac.in',
      'coordinator',
    ],
  ],
  Web: [
    ['Siddarth Saha', '+91-9810552384', 'ce21btech11039@iith.ac.in', 'head'],
    [
      'Gaurang Dahad',
      '+91-9810552384',
      'ee21btech11014@iith.ac.in',
      'coordinator',
    ],
  ],
  ICT: [
    ['Nandini Louganee', '+91-9717588840', 'md21mdes14019@iith.ac.in', 'head'],
    [
      'Amulya Tallamraju',
      '+91-9542695808',
      'ai20btech11003@iith.ac.in',
      'coordinator',
    ],
    [
      'Palthi Bhargav',
      '+91-9959912411',
      'bm21btech11017@iith.ac.in',
      'coordinator',
    ],
    [
      'A. Aaryan Kumar',
      '+91-7995761724',
      'ms21btech11017@iith.ac.in',
      'coordinator',
    ],
    [
      'Harthik Kancham',
      '+91-9154641925',
      'ee21btech11023@iith.ac.in',
      'coordinator',
    ],
  ],
  Events: [
    ['Uday Ratna', '+91-9989795055', 'ee20btech11039@iith.ac.in', 'head'],
    [
      'Nikhil Singampalli',
      '+91-9492476086',
      'me20btech11042@iith.ac.in',
      'coordinator',
    ],
    [
      'Aryan Sharan Reddy',
      '+91-83740 64960',
      'bt21btech11002@iith.ac.in',
      'coordinator',
    ],
    [
      'B.Charan Chandra',
      '+91-9398577068',
      'me20btech11014@iith.ac.in',
      'coordinator',
    ],
    [
      'Harshitha jallarapu',
      '+91-8520872747',
      'ms21btech11017@iith.ac.in',
      'coordinator',
    ],
  ],
};

const teamTitles = {
  PR: 'Public Relations & Networking Team',
  Design: 'Design Team',
  Web: 'Web Development Team',
  ICT: 'Interview & Hosting Team',
  Content: 'Content Team',
  Events: 'Events Team',
};

function Media() {
  return (
    <div>
      <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
        Media & Public Relations Secretary
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
        <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
          <h4 className=" text-p">Media & Public Relations Secretary</h4>
          <h3 className="lg:text-2xl text-xl font-semibold text-black">
            Ekshan Raj Verma
          </h3>
          <address className="pt-3">
            <h4 className="lg:text-xl text-lg font-semibold">+91 6266875616</h4>
            <a
              href="mailto:general_secy_1@gymkhana.iith.ac.in"
              className=" lg:text-xl text-[1rem]"
            >
              media_secy@gymkhana.iith.ac.in
            </a>
          </address>
        </div>
      </div>
      <div className="mx-5">
        <h2 className="mt-9 lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
          Team
        </h2>
        {Object.keys(teams).map((key, index) => {
          const info = teams[key];
          return (
            <>
              <h3 className="font-semibold text-3xl mt-5">{teamTitles[key]}</h3>
              <div className="flex flex-wrap gap-6 flex-col md:flex-row">
                {info.map((member) => {
                  return (
                    <TCard
                      name={member[0]}
                      mobile={member[1]}
                      email={member[2]}
                      position={member[3]}
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Media;
