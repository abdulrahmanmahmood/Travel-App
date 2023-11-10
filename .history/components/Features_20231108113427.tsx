import Image from "next/image"


function Features() {
  return (
    <section className="border-2 border-red-500 flex-col  flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[">
          <Image src='/phone.png' alt="phone" height={1000} width={440} className="feature-phone"/>
        </div>
      </div>
      
    </section>
  )
}

export default Features