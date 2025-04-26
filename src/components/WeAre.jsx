import Button from "./common/Button";
import SecHeading from "./common/SecHeading";

const values = [
  {
    name: "Our Mission",
    desc: "To share the love of Christ through worship, discipleship, and service.",
  },
  {
    name: "Our Vision",
    desc: "A thriving community transformed by faith, love, and action.",
  },
  { name: "Our Values", desc: "Faith, Community, Service, and Compassion." },
];

const WeAre = () => {
  return (
    <section className="p-8 py-24 flex flex-col items-start gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
        <div className="weare_text flex flex-col items-start gap-6 md:w-[55%]">
          <SecHeading
            substyle={
              "text-stone-100 text-[.9rem] md:text-[1.2rem] bg-[#242424]"
            }
            subhead={"who we are"}
            mainhead={"A Christ-Centered Community for Worship & Growth"}
            mainstyle={
              "font-extrabold leading-6 text-[1.3rem] md:text-[2.2rem] md:leading-8"
            }
            divstyle={"items-start gap-4"}
          />
          <p className="text-[1rem] md:text-[1.2rem]">
            <b className="capitalize">mystery embassy international</b> is an
            independent, Christ-centered congregation dedicated to worship,
            spiritual growth, and serving our neighbors. We believe in creating
            a space where people can authentically encounter God, deepen their
            faith, and build meaningful relationships.
          </p>
          <Button
            text={"about us"}
            style={
              "uppercase font-semibold bg-[#ed5a2f] py-3 px-6 text-stone-100"
            }
            link={"#"}
          />
        </div>
        <div className="imgBox overflow-hidden rounded-lg mt-4 md:w-[50%]">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054653/homchapel/DSC_0394_uoverd.webp"
            className="w-full h-full object-cover hover:scale-110 ease-in-out duration-300 rounded-lg"
            alt="mystery embassy"
          />
        </div>
      </div>
      <div className="values border relative mt-0 md:mt-12 border-[#2424244b] rounded-2xl w-full grid grid-cols-1 md:grid-cols-3 md:px-2 px-12 min-h-[24vh] py-12 gap-4">
        {values.map((value) => (
          <div className="value border-r-0 md:border-r border-b md:border-b-0 flex flex-col gap-2 items-center text-center border-[#2424244b] px-3 py-4 md:py-0">
            <p className="font-bold text-[1.6rem]">{value.name}</p>
            <p className="font-[400] text-[1.1rem] max-w-[230px]">
              {value.desc}
            </p>
          </div>
        ))}
        <p className="always_welcome absolute text-[1.8rem] bottom-[-15px] left-0 right-0 mx-auto max-w-[300px] text-center  bg-[#fff]">
          you're always welcome here
        </p>
      </div>
    </section>
  );
};

export default WeAre;
