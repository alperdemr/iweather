"use client";
import WeatherItem from "@/components/weather-item";
import Image from "next/image";
import useForecast from "@/hooks/useForecast";
import getCustomIcon from "@/utils/getCustomIcon";

const DetailsPage = ({ params }: { params: { id: string } }) => {
  const { forecast, isLoading, isError } = useForecast(params.id);
  
  const weather = forecast?.list[0];
  // 5 day forecast
  const fiveDayForecast = forecast?.list.filter(
    (day: any, index: number) => index % 8 === 0
  );
  
  return (
    <div className=" px-2 pb-5 pt-2 flex flex-col items-center gap-2 max-w-[375px] mx-auto">
      <div className=" p-3 rounded-xl bg-base-800 max-w-[359px] mx-auto w-full">
        <div className=" rounded-lg h-[304px] w-full bg-blue-800 relative p-5">
          <div className=" absolute top-5 left-5">
            <div className=" space-y-[2px]">
              <p className=" font-bold text-base text-base-white">
                {forecast?.city.name}, {forecast?.city.country}
              </p>
              <p className=" font-normal text-[12px] leading-[16.8px] text-base-100">
                {weather?.dt_txt ? new Date(weather.dt_txt).toDateString() : ""}
              </p>
            </div>
          </div>
          <div className="absolute top-[172px] left-4 space-y-2">
            <h1 className=" font-extrabold text-[48px] leading-[57.6px] text-base-white">
              {weather?.main.temp.toFixed(0)}°
            </h1>
            <div>
              <p className=" text-base text-base-white font-bold">
                {weather?.main.temp_min.toFixed(0)}° /
                {weather?.main.temp_max.toFixed(0)}°
              </p>
              <p className=" font-normal text-[14px] leading-5 text-base-white">
                {weather?.weather[0].description}
              </p>
            </div>
          </div>
          <div className=" absolute top-[144px] left-[175px] ">
            <Image src={
              weather?.weather[0].icon
                ? getCustomIcon(weather.weather[0].icon)
                : "/weather-icons/clear-day.svg"
            
            } alt="icons" width={160} height={160} />
          </div>
        </div>
      </div>
      <div className=" w-full bg-base-800 rounded-xl py-1 px-4">
        <ul>
          <WeatherItem
            src="/thermometer.svg"
            title="Thermal sensation"
            value={weather?.main.feels_like.toFixed(0) + "°"}
            width={11.62}
            height={22.12}
            alt="thermometer"
          />
          <WeatherItem
            src="/clouds.svg"
            title="Probability of rain"
            value={weather?.pop + "%"}
            width={19.1}
            height={21.38}
            alt="clouds"
          />
          <WeatherItem
            src="/wind.svg"
            title="Wind speed"
            value={weather?.wind.speed.toFixed(0) + "km/h"}
            width={20.62}
            height={16.12}
            alt="wind"
          />
          <WeatherItem
            src="/humidity.svg"
            title="Air humidity"
            value={weather?.main.humidity + "%"}
            width={16.12}
            height={20.63}
            alt="humidity"
          />
          <WeatherItem
            src="/sun.svg"
            title="UV Index"
            value={weather?.main.temp_kf.toFixed(0)}
            width={19.12}
            height={19.12}
            alt="uv index"
          />
        </ul>
      </div>
      <div className=" w-full bg-base-800 rounded-xl grid grid-cols-5 p-3">
        {fiveDayForecast?.map((day: any, index: number) => (
          <div key={index} className="flex flex-col gap-1 items-center">
            <p className=" font-bold text-[14px] leading-[19.6px] text-base-200">
              {day.dt_txt
                ? new Date(day.dt_txt).toDateString().slice(0, 3)
                : ""}
            </p>
            <Image
              src={
                day.weather[0].icon
                  ? getCustomIcon(day.weather[0].icon)
                  : "/weather-icons/clear-day.svg"
              }
              alt={day.weather[0].description}
              width={56}
              height={56}
            />
            <div>
              <p className=" text-base-100 font-bold text-[14px] leading-[19.6px] text-center">
                {day.main.temp_max.toFixed(0)}°
              </p>
              <p className=" text-base-400 text-[14px]  leading-[19.6px] text-center">
                {day.main.temp_min.toFixed(0)}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
