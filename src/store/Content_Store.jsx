/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useState } from "react"

export const Content = createContext({
  ip:"",
  geo:{},
  weather:[]
});

const Content_Store = ({children}) => {
  const [ip,up_ip] = useState('');
  const [geo,up_geo] = useState({});
  const [weather,up_weather] = useState([]);

  useEffect(()=>{
    getVisitorIp();
  },[])

  async function getVisitorIp(){
    try{
      const res = await fetch('https://api.ipify.org');
      const data = await res.text();
      up_ip(data);

      getIpInfo(data);
    }
    catch(e){
      console.error('failed',e);
    }
  }
  
  async function getIpInfo(ip){
    try{
      const res = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await res.json();
      up_geo(data);

      const lat = data.lat;
      const lon = data.lon;

      getWeather(lat,lon)
    }
    catch(e){
      console.log('failed',e);
    }
  }

  async function getWeather(lat,lon){
     try{
      const res = await fetch(`http://localhost:3000/forcast/${lat}/${lon}`)

      const data = await res.json();
      up_weather(data)
     }
     catch(e){
      console.log('failed',e);
     }
  }

  return (
    <Content.Provider value={{ip,geo,weather}}>
       {children}
    </Content.Provider>
  )
}

export default Content_Store
