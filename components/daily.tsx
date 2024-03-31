import Image from "next/image";

const Daily = () => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <p className=" font-bold text-[14px] leading-[19.6px] text-base-200">
        Mon
      </p>
      <Image src={"/daily.svg"} alt="daily" width={56} height={56} />
      <div>
        <p className=" text-base-100 font-bold text-[14px] leading-[19.6px] text-center">
          32ºc
        </p>
        <p className=" text-base-400 text-[14px]  leading-[19.6px] text-center">
          26ºc
        </p>
      </div>
    </div>
  );
};

export default Daily;
