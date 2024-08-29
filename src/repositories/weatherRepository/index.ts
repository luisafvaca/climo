import axios from "axios";
import type { WeatherByCityType, WeatherForecast} from "./types";

export default class WeatherRepository {
  private apiUrlBase: string
  private apiKey: string

  constructor(apiUrlBase: string, apiKey: string) {
      this.apiUrlBase = apiUrlBase
      this.apiKey = apiKey
  }

  async getWeatherByCity(lat: number, long: number): Promise<WeatherByCityType> {
    const response = await axios.get(`${this.apiUrlBase}/weather?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=metric`)
    return response.data
  }

  async getWeatherForecast(lat: number, long: number): Promise<WeatherForecast> {
    const response = await axios.get(`${this.apiUrlBase}/forecast?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=metric`)
    return response.data
  }
}
