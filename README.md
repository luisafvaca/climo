# Welcome to climo 🌦️
¡Overview daily and week weather, perfect for planning your day!

# How to install
*__NOTE:__ Be sure that you have Node __v 22.6.0__ or higher

#### 1. Clone Repo
☁️ [Climo](https://github.com/luisafvaca/climo) project ☁️ 


#### 2. Install dependencies using yarn
```bash
$ yarn install
```

#### 3. Execute 
```bash
$ yarn dev
```

#### 4. Add the .env file

*__NOTE:__ Please use a 2.5 version of openweathermap API

```md
VITE_API_KEY_WEATHER_MAP = {USE YOUR API KEY}
VITE_BASE_URL_WEATHER_MAP = https://api.openweathermap.org/data/2.5
```

## Project stack:
#### Core Technologies using in this project

1. __React (^18.3.1)__
2. __React DOM (^18.3.1)__
3. __React Router DOM__

#### Build & Development
1.  __Vite (^5.4.1)__
2.  __TypeScript (^5.5.3)__

#### Styling
1.  __Tailwind CSS (^3.4.10)__
2.  __PostCSS (^8.4.41) & Autoprefixer (^10.4.20)__ 


## 🌳 Project tree:
```
# climo
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ crossIcon.svg
│  ├─ dowmArrowIcon.svg
│  ├─ locationIcon.svg
│  ├─ statics
│  │  ├─ 2xx.png
│  │  ├─ 3xx.png
│  │  ├─ 5xx.png
│  │  ├─ 6xx.png
│  │  ├─ 7xx.png
│  │  ├─ 800.png
│  │  ├─ 803.png
│  │  ├─ 804.png
│  │  ├─ 80x.png
│  │  ├─ 90x.png
│  │  └─ default.png
│  ├─ translateIcon.svg
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ climLogo.svg
│  │  └─ translations.svg
│  ├─ components
│  │  ├─ contactForm
│  │  │  ├─ index.css
│  │  │  └─ index.tsx
│  │  ├─ dayForecast
│  │  │  ├─ index.css
│  │  │  ├─ index.tsx
│  │  │  └─ types.ts
│  │  ├─ hero
│  │  │  ├─ index.css
│  │  │  ├─ index.tsx
│  │  │  └─ types.ts
│  │  ├─ navBar
│  │  │  ├─ __tests__
│  │  │  │  └─ index.spec.tsx
│  │  │  ├─ index.css
│  │  │  └─ index.tsx
│  │  └─ weekForecast
│  │     ├─ index.css
│  │     ├─ index.tsx
│  │     └─ types.ts
│  ├─ i18n.js
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ dashboard
│  │  │  ├─ __tests__
│  │  │  │  └─ index.spec.tsx
│  │  │  ├─ index.css
│  │  │  └─ index.tsx
│  │  └─ signIn
│  │     ├─ __tests__
│  │     │  └─ index.spec.tsx
│  │     ├─ index.css
│  │     └─ index.tsx
│  ├─ repositories
│  │  └─ weatherRepository
│  │     ├─ __tests__
│  │     │  └─ index.spec.tsx
│  │     ├─ index.ts
│  │     └─ types.ts
│  ├─ translations
│  │  ├─ en.json
│  │  └─ es.json
│  ├─ utils
│  │  ├─ countries.json
│  │  ├─ forecast.tsx
│  │  └─ resolveImage.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
├─ vitest.config.ts
└─ yarn.lock

```