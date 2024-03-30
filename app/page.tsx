import Logo from "@/components/logo";

export default function Home() {
  return (
    <div>
      <div className="">
        <Logo />
        <div className="mt-[192px]  max-w-[311px] mx-auto  ">
          <div className=" flex flex-col gap-8">
            <div className="text-center ">
              <h1 className=" font-bold text-[20px] leading-7 text-base-white">
                Welcome to <span className=" text-product">TypeWeather</span>
              </h1>
              <p className=" font-normal text-[14px] leading-[19.6px] text-base-200">
                Choose a location to see the weather forecast
              </p>
            </div>
            <div>
              <input
                type="text"
                className=" w-full rounded-lg px-5 h-14 focus:outline-none bg-[#1E1E29] placeholder:text-base-400 text-base-white text-[16px] leading-[22.4px]"
                placeholder="Search location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
