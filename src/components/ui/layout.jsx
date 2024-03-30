import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Header,Footer } from '../'
function Layout({children}) {
    const [FixedMenu, setFixedMenu] = useState(false)
    const Location = useLocation()

    const PageHomeMenu =Location.pathname === "/"
    useEffect (() => {

        window.addEventListener("scroll", function(){

            const position = this.innerHeight < this.scrollY
           
            position  ? setFixedMenu(true) : setFixedMenu(false)

            
           }
            )
    }, [])
  return (
    <React.Fragment>
        <div>
            {PageHomeMenu ? FixedMenu && <Header FixedMenu={FixedMenu}/> : <Header FixedMenu={FixedMenu}/>}
            <div className='h-sdv'> 
            {children}
            </div>
            <Footer/>
        </div>
    </React.Fragment>
  )
}

export {Layout}