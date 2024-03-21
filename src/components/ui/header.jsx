import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { MenuResponsive } from './menuResponsive'
function Header() {

    const [MenuResponViseble, setMenuResponViseble] = useState(false)
    const PageActive = ({ isActive }) => (isActive ? `relative after:absolute after:left-0 after:bottom-[-0.8rem] after:w-full after:h-1 after:bg-blue-700 after:rounded-full` : ` relative after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-0 after:bottom-[-0.8rem] after:w-0 after:h-1 hover:after:bg-blue-700 hover:after:w-full  after:rounded-full`)

    useEffect(() => {
        window.addEventListener("resize", function(){
            this.innerWidth >= 1024 ? setMenuResponViseble(false) : setMenuResponViseble(true)
        })
    },[])
  return (
    <React.Fragment>
        <div className='flex justify-between items-center py-7 px-8 shadow-md'>
            <div>
                <h2>Logo</h2>
            </div>
            <div>
               <ul className='hidden lg:flex md:flex  gap-6 relative'>
                <li> <NavLink to='/'  className={PageActive}><h2>Home</h2></NavLink></li>
                <li> <NavLink to='/service' className={PageActive}><h2>Services</h2></NavLink></li>
                <li> <NavLink to='/about' className={PageActive}><h2>About</h2></NavLink></li>
                <li> <NavLink to='/contact' className={PageActive}><h2>Contact</h2></NavLink></li>
               </ul>

               <div className='flex lg:hidden md:hidden'>
                    {MenuResponViseble && <MenuResponsive/>}
               </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export {Header}