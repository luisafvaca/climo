import { describe, it, expect, vi, afterEach} from "vitest";
import WeatherRepository from "../index";
import axios from 'axios'

vi.mock('axios');

describe('WeatherRepository', () => {
    const mockBaseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const mockApiKey = '123456'
    const weatherRepositoryInstance = new WeatherRepository(mockBaseUrl, mockApiKey);

    afterEach(async () => {
        vi.restoreAllMocks()
    })

    it('should return weather data', async () => {
       
        const response = {
            city: 'Tokyo',
            country: 'JP',
            temperature: 20,
            feelsLike: 20,
            humidity: 20,
            pressure: 20,
            windSpeed: 20,
            weather: 'Clear',
            icon: '01d',
        }
        vi.spyOn(axios, 'get').mockResolvedValue({data: response})
        
        const mockLat = 35;
        const mockLong = 139;
        const data = await weatherRepositoryInstance.getWeatherByCity(mockLat, mockLong);
        expect(data).toEqual(response);      
    });
})
