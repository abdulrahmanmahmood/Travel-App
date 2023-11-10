import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { type } from "os";

interface CampProps {
  backgroundImage:string;
  title:string;
  subtitle:string;
  peoplejoined:string;
}

const CampSite = ({ backgroundImage, title, subtitle, peoplejoined }:CampProps) => {
  return (
  <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}>
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
      <div className=" flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image src='/folded-map.svg' alt="folded" height={28} width={28}/>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flexCenter gap-6 ">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url,index)=>(
            <Image src={url} key={index} height={53} width={53} alt="alt" className="inline-block h-10 w-10 r-4"/>
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peoplejoined}</p>
      </div>
    </div>
  </div>
  )
};

function camp() {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg-mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peoplejoined="50+ Joined"
        />
        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peoplejoined='50+ Joined'
        />
      </div>

      <div className="border-2 border-red-500 flexEnd  mt-10 px-6 lg:-mt-60 lg:mr-6 ">
        <div className="bg-green-">

        </div>
      </div>
    </section>
  );
}

export default camp;
