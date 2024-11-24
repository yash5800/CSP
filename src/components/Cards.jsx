import { useContext } from 'react'
import { Content } from '../store/Content_Store';

const Cards = () => {
  const {ip,geo,weather} = useContext(Content);


  return (
    <div className='text-white w-full text-center items-center'>
      { weather.length>0 ?
         <>
                  <div className='text-center font-montserrat gap-3 flex flex-col'>
            <h1 className='font-palanquin font-medium text-xl text-orange-300'>User Details</h1>
          <p><span className='text-violet-400'>IP : </span>{ip}</p>
          <p><span className='text-violet-400'>Country : </span>{geo.country}</p>
          <p><span className='text-violet-400'>Region : </span>{geo.regionName}</p>
       </div>
       <div className='w-full px-3 mt-5 flex flex-wrap justify-evenly gap-2'>
        {
          weather.map((item,index)=>(
           <div key={index} className='bg-[#00587b] w-[150px] h-[150px] rounded-lg flex flex-col justify-center gap-2 '>

              <p className='text-black font-palanquin font-medium text-xl'>{item.time}</p>
              <p className='text-2xl mycol font-medium'>{item.temp}°C</p>
              <p className=''>{item.weather}</p>
        
           </div>
          ))
        }
       </div>
         </>
     : <p>Loading...</p>}
    </div>
  )
}

export default Cards
