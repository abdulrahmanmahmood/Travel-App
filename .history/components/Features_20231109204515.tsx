import { FEATURES } from "@/constants";
import Image from "next/image";
import { title } from "process";

function Features() {
  return (
    <section className="border-2 border-red-500 flex-col  flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            height={1000}
            width={440}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col  lg:2-[60%]">
          <div className="relative ">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute top-[-30px] left-[5] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64 -mt-1">Our Features</h2>
          </div>
          <ul>
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
type FeatureItem = {
  'title'=string
}

const FeatureItem = ({ title, icon, variant, description }:FeatureItem) => {
  return (
    <div>
      {title}
      {icon}
      {variant}
      {description}
    </div>
  );
};

export default Features;
