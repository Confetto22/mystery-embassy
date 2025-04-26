import { Link } from "react-router-dom";

const HeroCard = () => {
  return (
    <section className="hero_card bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')] bg-cover bg-center">
      <div className="cover relative bg-[#000000aa] min-h-[100vh] px-8  pb-20 md:pb-0 flex flex-col items-center md:items-start justify-center gap-8 text-white">
        <div className="church_name flex flex-col items-center md:items-start md:gap-8 lg:gap-12">
          <h1 className="text-[#f4dcb5] text-[2.8rem] md:text-[4.6rem] lg:text-[6.6rem]">
            mystery
          </h1>
          <h1 className="text-[#f4dcb5] text-[2.8rem] md:text-[4.6rem] lg:text-[6.6rem]">
            embassy
          </h1>
          <h1 className="text-[#ffc646] text-[2.8rem] md:text-[4.6rem] lg:text-[6.6rem]">
            international
          </h1>
        </div>
        <p className="text-[1.4rem] font-semibold text-center">
          Connecting people to God and to each other.
        </p>
        <div className="herocard_buttons flex flex-col md:items-start items-center gap-5 md:flex-row">
          <Link
            to={"#"}
            className="join us bg-[#ed5a2f] text-stone-100 uppercase font-bold text-[.9rem] py-4 px-7"
          >
            join us this sunday
          </Link>
          <Link
            to={"#"}
            className="join us text-[#242424] font-bold text-[.9rem] bg-white py-4 px-7 uppercase"
          >
            watch live
          </Link>
        </div>
        <div className="bg-[#404f40] md:rounded-tl-[4rem] absolute bottom-0 w-full py-9 md:max-w-[380px] right-0  min-h-[20vh] max-h-[30vh] flex flex-col items-center md:items-start px-12 justify-center">
          <p className="text-[#242424] bg-white px-2 font-semibold text-[.9rem]">
            7:00 - 10:45 AM
          </p>
          <p className="text-[2.8rem] uppercase font-extrabold tracking-wide">
            sundays
          </p>
          <p className="text-[1.1rem] font-semibold uppercase">
            restoration service
          </p>
          <span className="dancing_script text-[2rem] text-[#ed5a2f] -rotate-30 absolute top-[10%] right-[20%] hidden md:flex bg-[#ffc646] font-bold px-2">
            join us
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
