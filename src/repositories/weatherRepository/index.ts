import axios from "axios";
import type { WeatherType } from "./types";

export default class WeatherRepository {
  private apiUrlBase: string
  private apiKey: string

  constructor(apiUrlBase: string, apiKey: string) {
      this.apiUrlBase = apiUrlBase
      this.apiKey = apiKey
  }

  async getWeatherByCity(lat: number, long: number): Promise<WeatherType> {
    const response = await axios.get(`${this.apiUrlBase}/weather?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=metric`)
    return response.data
  }

  async getWeatherForecast(lat: number, long: number): Promise<WeatherType> {
    const response = await axios.get(`${this.apiUrlBase}/forecast?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=metric`)
    return response.data
  }
}
