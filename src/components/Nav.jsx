import icon  from '../assets/images/icon.webp'


const Nav = () => {
  return (
    <div className='w-full relative flex flex-1 items-center justify-between lg:justify-evenly px-4'>
       <div className="relative flex items-center gap-1">
          <img src={icon} width={25} height={25} />
          <p className="text-white font-montserrat font-bold p-3 whitespace-nowrap">Weather Forever</p>
       </div>
       <div className="relative">
          <a href="#Footer" className=''>
          <p className="text-white hover:text-purple-400 font-montserrat p-4">Contact</p>
          </a>
       </div>
    </div>
  )
}

export default Nav
