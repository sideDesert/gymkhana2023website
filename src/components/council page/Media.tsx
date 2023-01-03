import React from "react";
import TCard from "./teamCard";
const PR = [
  {
    position: "head",
    name: "Kuntal Suman",
    mobile: " +91-8578001808",
    mail: "ce21btech11022@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Nakul Garg",
    mobile: " +91-9354662767",
    mail: " me21btech11035@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Laxmi Sreya",
    mobile: "  +91-9391322582",
    mail: " ce21btech11038@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Hadi Afnan",
    mobile: " +91-7994344759",
    mail: "ms20btech11009@iith.ac.in",
  },
  {
    position: "coordinator",
    name: "Kartik Katekar",
    mobile: " +91-7083797250",
    mail: "me21btech11024@iith.ac.in",
  },
];
const Des = [];
const Content = [];
const Web = [];
const Int = [];
const Events = [];

const team = {
  PR: ["Public Relations & Networking Team", PR],
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
      <div>
        <h2 className="mt-9 lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
          Team
        </h2>
        {Object.keys(team).map((key, index) => {
          const info = team[key];
          return (
            <>
              <h3 className="font-semibold text-3xl mt-5">{info[0]}</h3>
              <div className="flex flex-wrap gap-6 flex-col md:flex-row">
                {info[1].map((member) => {
                  return (
                    <TCard
                      name={member.name}
                      mobile={member.mobile}
                      email={member.mail}
                      position={member.position}
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
