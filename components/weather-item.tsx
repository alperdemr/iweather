import Image from "next/image";
interface WeatherItemProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  value: string;
}
const WeatherItem: React.FC<WeatherItemProps> = ({
  src,
  alt,
  width,
  height,
  title,
  value,
}) => {
  const weatherDetails = [
    {
      
    }
  ]
  return (
    <li className=" border-b-[1px] py-4 border-base-700 flex items-center justify-between">
      <div className=" flex items-center gap-3">
        <Image src={src} alt={alt} width={width} height={height} />
        <p className=" text-base-200 text-[14px] leading-[19.6px] font-bold">
          {title}
        </p>
      </div>
      <p className=" font-bold text-base-100 leading-[22.4px] text-[16px]">
        {value}
      </p>
    </li>
  );
};

export default WeatherItem;
