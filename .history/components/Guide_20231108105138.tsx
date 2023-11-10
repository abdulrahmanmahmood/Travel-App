import Image from "next/image";

function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24  ">
        <Image src='/camp.svg' alt="camp" width={50} height={50}/>
        <p className="uppercase text-xl bold text-green-500 -mt-1 mb-3 ">WE ARE here FOR YOU</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2>Guide You to Easy Path</h2>
        </div>
      </div>
    </section>
  );
}

export default Guide;
