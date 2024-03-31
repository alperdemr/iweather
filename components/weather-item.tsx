import Image from "next/image";
const WeatherItem = () => {
  return (
    <li className=" border-b-[1px] py-4 border-base-700 flex items-center justify-between">
      <div className=" flex items-center gap-3">
        <Image
          src="/thermometer.svg"
          alt="thermometer"
          width={11.62}
          height={22.12}
        />
        <p className=" text-base-200 text-[14px] leading-[19.6px] font-bold">
          Thermal sensation
        </p>
      </div>
      <p className=" font-bold text-base-100 leading-[22.4px] text-[16px]">
        26ºc
      </p>
    </li>
  );
};

export default WeatherItem;
