import Link from "next/link";
export default function Home() {
  return (
    <div className="home flex w-full overflow-hidden 
    sm:mx-auto sm:max-w-[1350px]">
      <div className="p-6 xs:px-10 xs:py-20 md:p-0 flex flex-grow items-center md:items-end justify-center flex-col md:flex-row gap-6">
        <div className="text-center md:text-left max-w-lg mx-auto md:w-full md:max-w-none">
          <span className="uppercase font-barlowCon tracking-widest text-blueLight xs:text-2xl ">
            So, you want to travel to
          </span>
          <h1 className="font-belle text-[5rem] xs:text-8xl sm:text-[9.375rem] uppercase my-6">
              Space
          </h1>
          <p className="font-barlow text-blueLight leading-7 md:text-lg">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex-grow md:flex-grow-0 md:w-full flex justify-center items-center md:justify-end text-center py-6">
          <Link href="/destination" className="explore-btn relative grid items-center font-belle text-blueDark uppercase
          bg-white text-lg xs:text-3xl w-36 xs:w-[272px] aspect-square rounded-full">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
