import { ourIdealPartners } from "@/app/utils/OurIdealPartners";

const OurIdealPartners = () => {
  return (
    <div className="px-5 lg:px-4 lg:mt-16 mt-7">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <h2 className="text-[#ED1C25] lg:text-4xl text-2xl lg:text-center roboto-serif-light">
          Advantages to Landowners
        </h2>
        <h5 className="text-[#646464] lg:text-2xl text-xl lg:text-center">
          Chartered projects command a higher prestige and better value in the
          market due to following reasons
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
          {ourIdealPartners.map((item, i) => (
            <div key={i} className="border border-[#ED1C25] p-5 space-y-1">
              <h3 className="text-[#ED1C25] lg:text-2xl text-xl font-medium">
                {item.title}
              </h3>
              <p className="text-[#646464] lg:text-2xl text-xl py-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurIdealPartners;
