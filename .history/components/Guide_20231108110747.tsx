import Image from "next/image";

function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24  ">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase text-xl bold text-green-500 -mt-1 mb-3 ">
          WE ARE here FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="capitalize  bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className=" regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>  
      </div>
      <div className=" flexCenter max-container relative w-full border-2 border-blue-500 ">
        <Image src='/boat.png' alt="image" width={1440} height={580} className="w-full object-cover object-center 2xl:rounded-5"/>
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <div className="flexBetween flex-col ">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full ">
                  <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
