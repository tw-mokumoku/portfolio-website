export default function Home() {
  return (
    <div className="home">
      <div className="flex h-screen flex items-center justify-center">
        <div className="text-lg lg: text-center w-[90%] md:w-[70%] lg:w-[80%] xl:w-[55%] mb-[150px] sm:mt-16 mt-32">
          <h2 className="text-white align-center md:text-xl mb-10 select-none ">
            Welcome to the 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">web portfolio </span>
            of
          </h2>
          <h1 className="text-white text-6xl xs:text-8xl font-extrabold leading-none sm:whitespace-nowrap tracking-tight md:text-7xl lg:text-8xl select-none">
            mk-
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600">
               mokumoku
            </span>
          </h1>
          <div>
            <p className="text-xs md:text-xs  text-center text-gray-400 tracking-widest  font-semibold uppercase mt-16">
              Scroll down to learn more about my skills &amp; experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}