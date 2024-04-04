import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useForecast = (id: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`,
    fetcher
  );

  return {
    forecast: data,
    isLoading,
    isError: error,
  };
};

export default useForecast;
