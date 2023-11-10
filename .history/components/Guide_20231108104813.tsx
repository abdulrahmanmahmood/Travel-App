import Image from "next/image";

function Guide() {
  return (
    <section className="flexCenter flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24  ">
        <Image src='/camp.svg' alt="camp" width={50} height={50}/>
        <p className="capitalize text-xl bold text-green-500">WE ARE HERE FOR YOU</p>
      </div>
    </section>
  );
}

export default Guide;
