import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import updates from "../updates/updates";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function UpdatesSection2() {
  return (
    <section className="bg-w px-0 pt-[1.5rem]  lg:pt-[3rem] mb-3">
      <div className="px-7">
        <div className="bg-r h-[6px] w-full self-center">
          <div className="bg-p h-[6px] w-16 ml-16"></div>
        </div>
      </div>
      <h2 className="text-p font-bold text-4xl pt-3 px-7 mb-4 lg:pl-[4rem] lg:text-5xl lg:py-[2rem]">
        Latest
      </h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        autoHeight={true}
      >
        {updates.map((data) => (
          <SwiperSlide key={data.title}>
            <UpdateCard
              {...data}
              imgUrl={data.img}
              altText={data.title}
              desc={data.desc}
              title={data.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const additionalDetails = [
  "organiser",
  "topic",
  "speaker",
  "dateTime",
  "venue",
  "preRequisite",
];

function UpdateCard({
  imgUrl = "",
  altText = "",
  desc = "",
  title = "",
  organiser = "",
  topic = "",
  speaker = "",
  dateTime = "",
  venue = "",
  preRequisite = "",
}) {
  function isThere(param) {
    return !(param.length === 0);
  }

  return (
    <div className="min-h-[500px] bg-white flex justify-center items-center flex-col md:flex-row md:grid md:grid-cols-5 2xl:grid-cols-7">
      <div className="flex-shrink-0 md:col-span-2 2xl:col-span-3">
        <img src={imgUrl} alt={altText} className="object-cover" />
      </div>
      <div className="p-8 md:col-span-3 2xl:col-span-4">
        <h2 className="font-bold text-2xl pb-3">{title}</h2>
        <p>{desc}</p>
        <div className="py-2">
          <ul>
            {isThere(preRequisite) && (
              <li>
                <b>Pre-Requisite</b> : {preRequisite}
              </li>
            )}
            {isThere(topic) && (
              <li>
                <b>Topic</b> : {topic}
              </li>
            )}
            {isThere(speaker) && (
              <li>
                <b>Speaker</b> : {speaker}
              </li>
            )}
            {isThere(dateTime) && (
              <li>
                <b>Date & Time</b> : {dateTime}
              </li>
            )}
            {isThere(venue) && (
              <li>
                <b>Venue</b> : {venue}
              </li>
            )}
            {isThere(organiser) && (
              <li>
                <b>Organiser</b> : {organiser}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UpdatesSection2;
