# Weather App

This Weather App is a simple web application built using React.js that allows users to get the current weather forecast for a given location. It utilizes the OpenCage Geocoding API to convert location inputs into geographical coordinates and the OpenWeatherMap API to retrieve weather forecast data based on those coordinates.

## Technologies Used

- **React.js**: The frontend of the application is built using React.js, a popular JavaScript library for building user interfaces. React enables the creation of reusable components, making it easy to manage complex UIs.
  
- **Axios**: Axios is used for making HTTP requests in the application. It provides a simple and easy-to-use interface for interacting with APIs.
  
- **dotenv**: The dotenv package is used to load environment variables from a `.env` file into the application. This allows for the secure storage of sensitive information such as API keys.

## APIs Used

- **OpenCage Geocoding API**: This API is used to convert location inputs (such as city names or addresses) into latitude and longitude coordinates. These coordinates are then used to fetch weather forecast data.

- **OpenWeatherMap API**: The OpenWeatherMap API provides weather forecast data based on geographical coordinates. It offers a wide range of weather information, including current weather conditions, forecasts, and more.

## How It Works

1. **Input Location**: Users input a location (e.g., city name, postal code) into the search bar on the Weather App.

2. **Geocoding**: The application uses the OpenCage Geocoding API to convert the location input into latitude and longitude coordinates.

3. **Weather Forecast**: Using the obtained coordinates, the application fetches weather forecast data from the OpenWeatherMap API.

4. **Display Forecast**: The retrieved weather forecast data is displayed on the screen, showing details such as temperature, weather conditions, wind speed, and more.

## Deployment

The Weather App is deployed and accessible online. You can try it out [here](https://weatherapp-navy-nine.vercel.app/) 

## How to Run Locally

To run the Weather App locally on your machine, follow these steps:

1. Clone this repository to your local machine using Git:

