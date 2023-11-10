import { type } from "os";

interface CampProps {
  backgroundImage:string;
  title:string;
  subtitle:string;
  peoplejoined:string;
}

const CampSite = ({ backgroundImage, title, subtitle, peoplejoined }) => {
  return (
  <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}>
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-blue-500">
      <div className=""></div>
    </div>
  </div>
  )
};

function camp() {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg-mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peoplejoined="50+ Joined"
        />
        <CampSite
          backgroundImage={undefined}
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peoplejoined='50+ Joined'
        />
      </div>
    </section>
  );
}

export default camp;
