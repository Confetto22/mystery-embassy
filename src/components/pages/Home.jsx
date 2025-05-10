// import CountDown from "../common/countdown/CountDown";
import HeroCard from "../common/HeroCard";
import SecHeading from "../common/SecHeading";
import UpcomingEvts from "../UpcomingEvts";
import WeAre from "../WeAre";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <section className="home">
      <HeroCard />
      <section className="welcome gap-7 bg-[#f4dcb5] min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="font-extrabold uppercase md:text-[3rem] md:leading-11 max-w-[600px] text-[2.2rem] leading-9">
          Welcome to mystery embassy international
        </h2>
        <p className="font-[400] text-[1rem] max-w-[900px]">
          We are a warm and welcoming community of believers committed to
          growing in faith, serving others, and sharing the love of Christ.
          Whether you&apos;re exploring faith for the first time or looking for
          a church to call home, we invite you to join us and experience the
          love and fellowship of our congregation.
        </p>
      </section>
      <WeAre />
      <UpcomingEvts />
      <section className="leader px-8 py-24 flex flex-col gap-8">
        <SecHeading
          substyle={"text-stone-100 text-[.9rem] md:text-[1.2rem] bg-[#242424]"}
          subhead={"Leading with Love"}
          mainhead={"Meet Our human founder"}
          mainstyle={
            "font-extrabold leading-6 text-[1.8rem] md:text-[2.2rem] md:leading-8"
          }
          divstyle={"items-start gap-4"}
        />
        <div className="sec_text flex-col md:flex-row">
          <div className="head_pastor flex flex-col items-start gap-8 ">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722537867/homchapel/DADDYEXCLUSIVE3_i3gk7d.jpg"
                  alt="Apostle Dr. Cloudio"
                  className="daddypic object-center object-cover rounded-md "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458646/homchapel/IMG-20250415-WA0014_fv68ns.webp"
                  alt="Apostle Dr. Cloudio"
                  className="daddypic object-center object-cover rounded-md "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1733017721/homchapel/DSC_5010_lh1wfh.webp"
                  alt="Apostle Dr. Cloudio"
                  className="daddypic object-center object-cover rounded-md "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1745458645/homchapel/IMG-20250415-WA0018_ovy4ky.webp"
                  alt="Apostle Dr. Cloudio"
                  className="daddypic object-center object-cover rounded-md "
                />
              </SwiperSlide>
              {/* <SwiperSlide>
              <img
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722537867/homchapel/DADDYEXCLUSIVE3_i3gk7d.jpg"
                alt="Apostle Dr. Cloudio"
                className="object-center object-cover rounded-md "
              />
            </SwiperSlide> */}
            </Swiper>
            <div>
              <p>
                Hello! my name is Apostle Dr. Cloudio Tetteh. The head pastor of
                <b> Mystery Embassy International</b>... a church you are proud
                of, a family you are part of. I want to extend a warm welcome to
                you to our church's digital home, where every pixel is infused
                with the warmth of our congregation's spirit. Here, amidst the
                digital waves, may you find solace, community, and a deep
                connection to the divine. Together, let us embark on a digital
                pilgrimage of love, hope, faith and growth. Your presence
                enriches our online family, and together, we shall illuminate
                the digital realm with the light of our shared faith. Welcome,
                dear one, to a place where pixels and prayers unite to create a
                sacred online space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
