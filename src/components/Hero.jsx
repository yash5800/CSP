import rain from '../assets/images/rain.jpg'

const Hero = () => {

  return (
     <div className="w-full relative flex items-center px-6 mt-5 max-lg:gap-5 gap-24 justify-center max-sm:flex-col ">
        <div className="text-white">
           <h1 className="text-xl font-medium max-w-sm ">Next <span className="text-purple-600 ">24-Hour</span> Weather Forecast</h1>
           <p className="font-palanquin relative max-w-[20rem] mt-3 left-2 text-blue-300">{
              '" Stay prepared for the next 24 hours with real-time weather updates. Our forecast provides you with detailed information on temperature changes, precipitation chances, wind conditions, and more "'
            }</p>
        </div>
        <div className="relative">
            <img src={rain} className="w-[200px] h-[200px] object-cover rounded-md" />
        </div>
     </div>
  )
}

export default Hero
