export interface HeroProps {
  temperature: string;
  weatherDescription: string;
  minTemperature: string;
  maxTemperature: string;
  icon?: string;
  image: string;
  currentCity: string;
  onChangeCity: (city: string) => void;
}