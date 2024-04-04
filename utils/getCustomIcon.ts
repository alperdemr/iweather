const getCustomIcon = (icon: string) => {
  switch (icon) {
    case "01d":
      return "/weather-icons/clear-day.svg";
    case "01n":
      return "/weather-icons/clear-night.svg";
    case "02d":
      return "/weather-icons/few-clouds-day.svg";
    case "02n":
      return "/weather-icons/few-clouds-night.svg";
    case "03d":
      return "/weather-icons/cloudy-day.svg";
    case "03n":
      return "/weather-icons/cloudy-night.svg";
    case "04d":
      return "/weather-icons/cloudy-day.svg";
    case "04n":
      return "/weather-icons/cloudy-night.svg";
    case "09d":
      return "/weather-icons/rain-day.svg";
    case "09n":
      return "/weather-icons/rain-night.svg";
    case "10d":
      return "/weather-icons/rain-day.svg";
    case "10n":
      return "/weather-icons/rain-night.svg";
    case "11d":
      return "/weather-icons/thunderstorm-day.svg";
    case "11n":
      return "/weather-icons/thunderstorm-night.svg";
  }
};
export default getCustomIcon;
