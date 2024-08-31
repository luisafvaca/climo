import { describe, it, expect, vi, afterEach} from "vitest";
import WeatherRepository from "../index";
import axios from 'axios'

import forecastMock from "./mocks/forecastMock";
import weatherMock from "./mocks/weatherMock";

vi.mock('axios');

describe('WeatherRepository', () => {
    const mockBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const mockApiKey = '123456'
    const weatherRepositoryInstance = new WeatherRepository(mockBaseUrl, mockApiKey);

    afterEach(async () => {
        vi.restoreAllMocks()
    })

    it('should return weather data', async () => {
        const response = weatherMock
        vi.spyOn(axios, 'get').mockResolvedValue({data: response})
        
        const mockLat = 35;
        const mockLong = 139;
        const data = await weatherRepositoryInstance.getWeatherByCity(mockLat, mockLong);
        expect(data).toEqual(weatherMock);      
    });

    it('should return getWeatherForecast data', async () => {
        const response = forecastMock

        vi.spyOn(axios, 'get').mockResolvedValue({data: response})
        const mockLat = 35;
        const mockLong = 139;
        const data = await weatherRepositoryInstance.getWeatherForecast(mockLat, mockLong);
        expect(data).toEqual(forecastMock);      

    })
})
