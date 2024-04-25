import React, { useState, useEffect } from 'react';
// import 'dotenv/config';
import style from '../Module_CSS/Main.module.css';
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBRadio,
  MDBRow,
  MDBTypography,
  MDBSpinner,
} from 'mdb-react-ui-kit';

const WeatherForecast = () => {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState(null);
  const [inputVal, setinput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cityName, setcityName] = useState(null);
  const openCageApiKey = process.env.REACT_APP_OPENCAGE_API;
  const openWeatherMapApiKey = process.env.REACT_APP_OPENWEATHER_API;

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      try {
        setLoading(true);

        const openCageResponse = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${openCageApiKey}`
        );

        const { lat, lng } = openCageResponse.data.results[0].geometry;
        if (openCageResponse && openCageResponse.data.results.length > 0) {
          setcityName(openCageResponse.data.results[0].formatted);
        }

        // Step 2: Use OpenWeatherMap API to get weather forecast using coordinates
        const openWeatherMapResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherMapApiKey}&units=metric`
        );

        setForecast(openWeatherMapResponse.data);
        // console.log(openWeatherMapResponse);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (location) {
      fetchWeatherForecast();
    }
  }, [location]);

  const handleInputChange = (e) => {
    setinput(e.target.value);
  };
  const handlesubmit = () => {
    setLocation(inputVal);
  };
  return (
    <section className='vh-100 '>
      <MDBContainer className='h-100 py-5'>
        <MDBRow className='justify-content-center align-items-center h-100'>
          <MDBCol md='8' lg='6' xl='4'>
            <MDBTypography tag='h3' className='mb-4 pb-2 fw-normal'>
              Check the weather forecast
            </MDBTypography>
            <MDBInputGroup className='mb-3'>
              <input
                className='form-control rounded'
                type='text'
                onChange={handleInputChange}
                placeholder='Enter Location'
              />
              <a href='#!' type='button' onClick={() => handlesubmit()}>
                <span
                  className='input-group-text border-0 fw-bold'
                  id='search-addon'
                >
                  Check!
                </span>
              </a>
            </MDBInputGroup>
            <div className='mb-4 p-2'>
              <MDBRadio
                inline
                name='flexRadioDefault'
                id='flexRadioDefault1'
                label='Celcius'
                defaultChecked
              />
              <MDBRadio
                inline
                name='flexRadioDefault'
                id='flexRadioDefault2'
                label='Farenheit'
              />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <MDBCard className='shadow-0 border'>
              {forecast && (
                <MDBCardBody className='p-4'>
                  <MDBTypography tag='h4' className='mb-1 sfw-normal'>
                    {cityName}
                  </MDBTypography>
                  <p className='mb-2'>
                    Current temperature: <strong>{forecast.main.temp}°C</strong>
                  </p>
                  <p>
                    Humidity : <strong>{forecast.main.humidity}</strong>
                  </p>
                  <p>
                    Max Temp. : <strong>{forecast.main.temp_max}°C</strong> ,
                    Min Temp. : <strong>{forecast.main.temp_min}°C</strong>
                  </p>
                  <p>
                    Wind speed : <strong>{forecast.wind.speed} km/h</strong>
                  </p>

                  <div className='d-flex flex-row align-items-center'>
                    <p className='mb-0 me-4'>Scattered Clouds</p>
                    <MDBIcon
                      fas
                      icon='cloud'
                      size='3x'
                      style={{ color: '#eee' }}
                    />
                  </div>
                </MDBCardBody>
              )}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default WeatherForecast;
