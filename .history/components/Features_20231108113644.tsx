import Image from "next/image"


function Features() {
  return (
    <section className="border-2 border-red-500 flex-col  flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image src='/phone.png' alt="phone" height={1000} width={440} className="feature-phone"/>
        </div>
        <div className="z-20 flex w-full flex-col  lg:2-[60%]">
          <div>
            
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Features