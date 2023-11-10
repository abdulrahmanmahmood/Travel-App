import Image from "next/image"


function Features() {
  return (
    <section className="border-2 border-red-500 flex-col  flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full justify-end">
        <div>
          <Image src='/phone.png' alt="phone" height={1}/>
        </div>
      </div>
      
    </section>
  )
}

export default Features