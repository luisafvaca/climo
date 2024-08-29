export default function resolveImage (weatherCode: number ) {
  switch (true) {
    case(weatherCode >= 200 && weatherCode < 300):
      return '2xx.png'
    case(weatherCode >= 300 && weatherCode < 400):
      return '3xx.png'
    case(weatherCode >= 500 && weatherCode < 600):
      return '5xx.png'
    case(weatherCode >= 600 && weatherCode < 700):
      return '6xx.png'
    case(weatherCode >= 700 && weatherCode < 800):
      return '7xx.png'
    case(weatherCode === 800):
      return '80x.png'
    case(weatherCode >= 801 && weatherCode <= 802):
      return '80x.png'
    case(weatherCode === 803):
      return '803.png'
    case(weatherCode === 804):
      return '804.png'
    case(weatherCode === 900):
      return '90x.png'
    default: 
      return 'default.png'
  }
}