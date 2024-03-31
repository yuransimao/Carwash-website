import React from 'react'
import { NavLink} from 'react-router-dom'
import { MenuResponsive } from './menuResponsive'
import { Button } from '../';

function Header({FixedMenu}) {

   
    
    const PageActive = ({ isActive }) => (isActive ? `relative after:absolute after:left-0 after:bottom-[-0.8rem] after:w-full after:h-1 after:bg-blue-300 after:rounded-full` : ` relative after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-0 after:bottom-[-0.8rem] after:w-0 after:h-1 hover:after:bg-blue-300 hover:after:w-full  after:rounded-full`)

   

       
  return (
    <React.Fragment>
    
        <div className={`flex top-0 justify-between ${FixedMenu && 'fixed shadow-md'} left-0 right-0 w-full z-50 bg-white items-center py-4 px-2 lg:px-8 md:px-8 `}>
            <div>
                <h2>Logo</h2>
            </div>
            <div className='flex gap-6 items-center '>
               <ul className='hidden lg:flex md:flex  gap-6 relative'>
                <li> <NavLink to='/'  className={PageActive}><h2 className='text-sm'>Home</h2></NavLink></li>
                <li> <NavLink to='/service' className={PageActive}><h2 className='text-sm'>Services</h2></NavLink></li>
                <li> <NavLink to='/about' className={PageActive}><h2 className='text-sm'>About</h2></NavLink></li>
                <li> <NavLink to='/contact' className={PageActive}><h2 className='text-sm'>Contact</h2></NavLink></li>
               </ul>
                <div>
                    <Button className="hidden lg:flex md:flex rounded-full bg-blue-700"><h3 className='text-sm'>Book Now</h3></Button>
                </div>
               <div className='flex lg:hidden md:hidden'>
               <MenuResponsive/>
               </div>
               
            </div>
        </div>
    
    </React.Fragment>
  )
}

export {Header}