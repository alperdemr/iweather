import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useWeather = (city: string) => {
  const { data, error, isLoading } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`,
    fetcher
  );

  return {
    weather: data,
    isLoading,
    isError: error,
  };
};

export default useWeather;