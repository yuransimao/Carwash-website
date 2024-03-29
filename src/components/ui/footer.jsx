import React from 'react'
import { Link } from 'react-router-dom'
import { Input,Button } from '../'
import { Facebook, Instagram,MoveRight } from 'lucide-react'
function Footer() {
  return (
    <React.Fragment>

        <footer>
            <div className='grid grid-cols-1 gap-12 p-8 lg:grid-cols-4 md:grid-cols-2 '>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>Logo</h2>
                    <p className='text-sm  font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam tempora, libero perspiciatis odio voluptatem officiis</p>
                    <div className='flex  flex-col gap-2'>
                        <h3 className='text-sm'><span>Phone: </span><span className='text-blue-500'>(1)</span> 470 593 - 8201</h3>
                        <h4 className='text-sm'><span>Email: </span>sahelbravo2012@gmail.com</h4>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div className='p-2 cursor-pointer bg-blue-500 rounded-full text-white border-[1px] border-solid'><Facebook size={20}/></div>
                        <div className='p-2  rounded-full  border-[1px] border-solid transition-all duration-300 hover:bg-black hover:text-white cursor-pointer'><Instagram size={20}/></div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>Open Hour</h2>
                    <h3 className='text-sm font-light'>Mon-wed(9:00 AM 2:00 PM)</h3>
                    <h4 className='text-sm font-light'>Tue-Thurs(7:30 AM 4:00 PM)</h4>
                    <h5 className='text-sm font-light'>Fri-Sat(9:00 AM - 8:00 PM)</h5>
                    <h6 className='text-sm font-light'>Sunday- <span className='text-red-500 font-bold'>(Closed)</span></h6>
                </div>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-xl font-semibold'>Quick Links</h2>
                    <ul className='flex flex-col gap-4'>
                        <li>
                            <Link className='text-sm font-normal transition-all duration-300 hover:text-gray-400'><h3>Home</h3></Link>
                        </li>
                        <li>
                            <Link  className='text-sm font-normal transition-all duration-300 hover:text-gray-400'><h3>About</h3></Link>
                        </li>
                        <li>
                            <Link  className='text-sm font-normal transition-all duration-300 hover:text-gray-400'><h3>Services</h3></Link>
                        </li>
                        <li>
                            <Link  className='text-sm font-normal transition-all duration-300 hover:text-gray-400'><h3>Contact</h3></Link>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-xl font-semibold'>Newsltter</h2>
                    <p className='text-sm font-light'>Stay in the know about the latest trends and innovations in car wash and detailing with our exclusive newsletters.</p>
                    <div className='flex justify-center items-start flex-col gap-4'>
            
                    <form action="" className='flex items-center gap-2'>
                    <Input type="email" placeholder="Email" />
                    <Button className="bg-blue-600">Subscribe</Button>
                    </form>
                    <h4 className='text-sm font-light flex items-center' > Let me read it first <span><MoveRight size={14}/></span></h4>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center border-[1px] border-solid px-3 py-5'>
                <p className='text-sm text-center'>Copyright  ©️ 2024 FLAMES Inc. All rights reserved ®️ Created by <span className='font-bold'>G</span></p>

            </div>
        </footer>
    </React.Fragment>
  )
}

export {Footer}