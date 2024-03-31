import Image from "next/image";

const Logo = () => {
  return (
    <div className=" mt-12 mx-auto  ">
      <div className=" flex items-center justify-center gap-[6.6px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={36.4}
          height={24}
          className=" opacity-80"
        />
        <h1 className=" text-[#FFFFFF] font-semibold text-[20px] leading-7 opacity-80">
          iWeather
        </h1>
      </div>
    </div>
  );
};

export default Logo;
