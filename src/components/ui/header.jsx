import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { MenuResponsive } from './menuResponsive'
function Header() {

    const [MenuResponViseble, setMenuResponViseble] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", function(){
            this.innerWidth >= 1024 ? setMenuResponViseble(false) : setMenuResponViseble(true)
        })
    },[])
  return (
    <React.Fragment>
        <div className='flex justify-between items-center py-4 px-8'>
            <div>
                <h2>Logo</h2>
            </div>
            <div>
               <ul className='hidden lg:flex md:flex  gap-6'>
                <li> <NavLink to='/'><h2>Home</h2></NavLink></li>
                <li> <NavLink><h2>Services</h2></NavLink></li>
                <li> <NavLink><h2>About</h2></NavLink></li>
                <li> <NavLink><h2>Contact</h2></NavLink></li>
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