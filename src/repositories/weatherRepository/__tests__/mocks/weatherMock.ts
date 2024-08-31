const weatherMock = {
  "coord": {
      "lon": -0.1181,
      "lat": 51.5099
  },
  "weather": [
      {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 14.9,
      "feels_like": 14.61,
      "temp_min": 13.29,
      "temp_max": 16,
      "pressure": 1024,
      "humidity": 83,
      "sea_level": 1024,
      "grnd_level": 1020
  },
  "visibility": 10000,
  "wind": {
      "speed": 2.06,
      "deg": 350
  },
  "clouds": {
      "all": 100
  },
  "dt": 1725082113,
  "sys": {
      "type": 2,
      "id": 2075535,
      "country": "GB",
      "sunrise": 1725081130,
      "sunset": 1725130181
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
}

export default weatherMock;
