import Image from "next/image";

const Logo = () => {
  return (
    <div className=" mt-12 mx-auto  ">
      <div className=" flex items-center justify-center gap-[6.6px]">
        <Image src="/logo.svg" alt="logo" width={36.4} height={24} />
        <h1 className=" text-base-white">iWeather</h1>
      </div>
    </div>
  );
};

export default Logo;
