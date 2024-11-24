import Linkedin from '../assets/images/linkedin.webp'
const Footer = () => {
  return (
    <div id='Footer' className="w-full bg-black px-5 flex flex-col text-center relative bottom-0">
         <div className='relative flex items-center  flex-1 justify-evenly gap-2'>
         <div className="text-white p-5 text-center">
           <h1 className="font-montserrat    font-normal">This Web Site is Developed By</h1>
           <p className="text-slate-gray">Yaswanth</p>
         </div>
         <div className='flex flex-col justify-center    items-center gap-2'>
            <h1 className='text-coral-red     font-montserrat font-medium'>Contact</h1>
            <a href="https://www.linkedin.com/in/alaparthi-yaswanth-kiran-65aa53272" target='_blank'>
            <img src={Linkedin} width={25} />
            </a>
            
         </div>
      </div>
      <div className='text-white-400'>
        <h1 className='font-medium text-sm font-palanquin'>All Copyrights are reserved</h1>
      </div>
    </div>
  )
}

export default Footer
