import AmenitiesSlider from "../components/AmenitiesSlider";
import AmenitiesTitle from "../components/AmenitiesTitle";

const AmenitiesSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <AmenitiesTitle />
        </div>
        <div className="h-full ">
          <AmenitiesSlider />
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
