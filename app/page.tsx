"use client";
import Logo from "@/components/logo";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import useWeather from "@/hooks/useWeather";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);
  const { weather, isLoading, isError } = useWeather(debouncedSearch);
  console.log(weather);

  return (
    <div>
      <div className="">
        <Logo />
        <div className="mt-[192px]  max-w-[311px] mx-auto  ">
          <div className=" flex flex-col gap-8">
            <div className="text-center    ">
              <h1 className=" text-heading-md text-base-white">
                Welcome to <span className=" text-product">TypeWeather</span>
              </h1>
              <p className=" font-normal text-[14px] leading-[19.6px] text-base-200">
                Choose a location to see the weather forecast
              </p>
            </div>
            <div className=" relative">
              <input
                type="text"
                className="  w-full rounded-lg px-5 h-14 focus:outline-none bg-[#1E1E29] placeholder:text-base-400 text-base-white text-[16px] leading-[22.4px]"
                placeholder="Search location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {isLoading && (
                <Image
                  src="/spinner.svg"
                  width={32}
                  height={32}
                  alt="spinner"
                  className=" absolute top-3 right-3 animate-spin"
                />
              )}
              {isError && <p>Error</p>}
              {weather && (
                <div>
                  <Link
                    href={`/details/${weather?.id}`}
                    className=" py-4 px-5 w-full absolute top-16 rounded-lg bg-base-500 text-md text-base-white font-normal"
                  >
                    {weather.name} - {weather.sys.country}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
