interface CampProps {
  backgroundImage:string;
  title:str
}

const CampSite = ({ backgroundImage, title, subtitle, peoplejoined }) => {
  return <div></div>;
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
