import React from 'react'
import { useFetch, useSpinnerSuspense } from '../Helpers/Helpers'
import { weather } from '../MainSection/refs/links'
import WeatherForecast from './WeatherForecast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { weather as Weather, weatherIconStyle } from './styles'
import { defineIcon, extractWeather } from '../MainSection/WeatherContent'
import { Link } from 'react-router-dom'
import { Chapter } from '../Helpers/DesignAssistants'

export default React.memo(() => {
  let [ response, loading, error ] = useFetch(weather.url, weather.headers, extractWeather, 'Weather')
    
  let output

  if (response !== null && !error.hasError ){
    response = JSON.parse(response[0].replace(/[$]/g,','))
    let icon = defineIcon(response.weather, false)
    output = 
    <>
      <li><FontAwesomeIcon icon={icon.icon} style={Object.assign({}, weatherIconStyle, icon.style)}/></li>
      <li><WeatherForecast type={response.weather} temps={{max: response.high, min: response.low, temp: response.temperature}}/></li>
    </>
  } else if (error.hasError) {
    output = <Chapter additionalStyle={{color: '#ddd', fontSize: '1rem'}}>Cannot load weather</Chapter>
  }

  return (
    <Link to="/weather">
      <ul style={Weather}>
        {output}
      </ul>
    </Link>
  )  
})