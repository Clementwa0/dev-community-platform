import Image from "next/image"

const Home = () => {
  return (
    <section className=" w-full h-[100vh] min-h-[500px] flex items-center justify-center">
        <Image 
        src="/images/hero.png"
        alt="Justice"
        fill
        priority
        className="object-fill"
        />
        <div className="absolute inset-0 bg-black/60"/>

    </section>
  )
}

export default Home