import { useState } from "react";

function General() {
  const [councilState, setCouncilState] = useState("general");
  return (
    <>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left">
          General Secretaries
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">General Secretary 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Shahidhar Rao Thumula
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">7013583615</h4>
              <a
                href="mailto:general_secy_1@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                general_secy_1@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">General Secretary 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Bathini Lakshmi Pranathi
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">6303626493</h4>
              <a
                href="mailto:general_secy_2@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                general_secy_2@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left mt-8">
          Undergraduate Representatives
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">Undergraduate Representative 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Uday Kiran Timala
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">8790636162</h4>
              <a
                href="mailto:ug_rep@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                ug_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">Undergraduate Representative 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Akyam L Dhatri Nanda
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9346419127</h4>
              <a
                href="mailto:ug_rep@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                ug_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left mt-8">
          Postgraduate Representative
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">Postgraduate Representative 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Ajay Bachipale
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9356488300</h4>
              <a
                href="mailto:pg_rep@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                pg_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">Undergraduate Representative 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Adamya Dubey
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">8545966197</h4>
              <a
                href="mailto:pg_rep@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                pg_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
      <div>
        <h2 className="lg:text-4xl text-3xl font-bold text-center text-black lg:text-left mt-8">
          Doctoral Representative
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mt-5 lg:justify-start">
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">Doctoral Representative 1</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Nuli Krishna Chaitanya
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9542904459</h4>
              <a
                href="mailto:phd_rep@gymkhana.iith.ac.in"
                className=" lg:text-xl text-[1rem]"
              >
                phd_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
          <div className="bg-white text-p px-4 py-6 lg:py-6 lg:px-8 mt-1 rounded-xl lg:rounded-2xl border-[0.25rem] border-g">
            <h4 className="italic text-p">Doctoral Representative 2</h4>
            <h3 className="lg:text-2xl text-xl font-semibold text-black">
              Ankita Paul
            </h3>
            <address className="pt-3">
              <h4 className="lg:text-xl text-lg font-semibold">9647146397</h4>
              <a
                href="mailto:pg_rep@gymkhana.iith.ac.in"
                className="lg:text-xl text-[1rem]"
              >
                phd_rep@gymkhana.iith.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
