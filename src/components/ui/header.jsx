import React,{useState, useEffect} from 'react'
import { NavLink,useLocation } from 'react-router-dom'
import { MenuResponsive } from './menuResponsive'
import { Button } from '../';

function Header() {

    const [MenuResponViseble, setMenuResponViseble] = useState(false);
    const [FixedMenu, setFixedMenu] = useState(false)
    const Location = useLocation()
    const PageActive = ({ isActive }) => (isActive ? `relative after:absolute after:left-0 after:bottom-[-0.8rem] after:w-full after:h-1 after:bg-blue-300 after:rounded-full` : ` relative after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-0 after:bottom-[-0.8rem] after:w-0 after:h-1 hover:after:bg-blue-300 hover:after:w-full  after:rounded-full`)

    useEffect(() => {
        window.addEventListener("resize", function(){
            this.innerWidth <= 1024 ? setMenuResponViseble(true) : setMenuResponViseble(false);
            
        })

        window.addEventListener("scroll", function(){

            const position = this.innerHeight < this.scrollY
           
            position  ? setFixedMenu(true) : setFixedMenu(false)

            
           }
            )
        },[])

        console.log(Location.pathname === "/")
  return (
    <React.Fragment>
    
       {Location.pathname === "/" ? FixedMenu &&( <div className='flex top-0 justify-between fixed left-0 right-0 w-full z-50 bg-white items-center py-4 px-2 lg:px-8 md:px-8 shadow-md'>
            <div>
                <h2>Logo</h2>
            </div>
            <div className='flex gap-2 items-center'>
               <ul className='hidden lg:flex md:flex  gap-6 relative'>
                <li> <NavLink to='/'  className={PageActive}><h2>Home</h2></NavLink></li>
                <li> <NavLink to='/service' className={PageActive}><h2>Services</h2></NavLink></li>
                <li> <NavLink to='/about' className={PageActive}><h2>About</h2></NavLink></li>
                <li> <NavLink to='/contact' className={PageActive}><h2>Contact</h2></NavLink></li>
               </ul>

               <div className='flex lg:hidden md:hidden'>
               <MenuResponsive/>
               </div>
               
            </div>
        </div>
       ):(
        <div className={`flex top-0 justify-between ${FixedMenu && 'fixed'} left-0 right-0 w-full z-50 bg-white items-center py-4 px-2 lg:px-8 md:px-8 shadow-md`}>
            <div>
                <h2>Logo</h2>
            </div>
            <div className='flex gap-2 items-center'>
               <ul className='hidden lg:flex md:flex  gap-6 relative'>
                <li> <NavLink to='/'  className={PageActive}><h2>Home</h2></NavLink></li>
                <li> <NavLink to='/service' className={PageActive}><h2>Services</h2></NavLink></li>
                <li> <NavLink to='/about' className={PageActive}><h2>About</h2></NavLink></li>
                <li> <NavLink to='/contact' className={PageActive}><h2>Contact</h2></NavLink></li>
               </ul>

               <div className='flex lg:hidden md:hidden'>
               <MenuResponsive/>
               </div>
               
            </div>
        </div>
       )}
    </React.Fragment>
  )
}

export {Header}