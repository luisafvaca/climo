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
      const response = await axios.get(`${this.apiUrlBase}?lat=${lat}&lon=${long}&appid=${this.apiKey}`)
      return response.data
  }
}