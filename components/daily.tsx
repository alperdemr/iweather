import Image from "next/image";

interface DailyProps {
  day: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  max: number;
  min: number;
}

const Daily: React.FC<DailyProps> = ({
  day,
  src,
  alt,
  width,
  height,
  max,
  min,
}) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <p className=" font-bold text-[14px] leading-[19.6px] text-base-200">
        {day}
      </p>
      <Image src={src} alt={alt} width={width} height={height} />
      <div>
        <p className=" text-base-100 font-bold text-[14px] leading-[19.6px] text-center">
          {max}
        </p>
        <p className=" text-base-400 text-[14px]  leading-[19.6px] text-center">
          {min}
        </p>
      </div>
    </div>
  );
};

export default Daily;
