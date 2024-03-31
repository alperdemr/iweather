import Daily from "@/components/daily";
import WeatherItem from "@/components/weather-item";
import Image from "next/image";

const DetailsPage = () => {
  return (
    <div className=" px-2 pb-5 pt-2 flex flex-col items-center gap-2 max-w-[375px] mx-auto">
      <div className=" p-3 rounded-xl bg-base-800 max-w-[359px] mx-auto w-full">
        <div className=" rounded-lg h-[304px] w-full bg-blue-800 relative p-5">
          <div className=" absolute top-5 left-5">
            <div className=" space-y-[2px]">
              <p className=" font-bold text-base text-base-white">
                Istanbul, TR
              </p>
              <p className=" font-normal text-[12px] leading-[16.8px] text-base-100">
                Monday, May 15, 2023
              </p>
            </div>
          </div>
          <div className="absolute top-[172px] left-4 space-y-2">
            <h1 className=" font-extrabold text-[48px] leading-[57.6px] text-base-white">
              28ºc
            </h1>
            <div>
              <p className=" text-base text-base-white font-bold">
                26ºc / 32ºc
              </p>
              <p className=" font-normal text-[14px] leading-5 text-base-white">
                Few clouds
              </p>
            </div>
          </div>
          <div className=" absolute top-[144px] left-[175px] ">
            <Image src="/icons.svg" alt="icons" width={160} height={160} />
          </div>
        </div>
      </div>
      <div className=" w-full bg-base-800 rounded-xl py-1 px-4">
        <ul>
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
          <WeatherItem />
        </ul>
      </div>
      <div className=" w-full bg-base-800 rounded-xl grid grid-cols-5 p-3">
        <Daily />
        <Daily />
        <Daily />
        <Daily />
        <Daily />
      </div>
    </div>
  );
};

export default DetailsPage;
