import React from 'react'

import {Droplet} from'lucide-react'
import { FaRegHourglassHalf } from "react-icons/fa6";
import { RiCarWashingFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";

function Section3() {
    return (
        <React.Fragment>
            <div className=' lg:px-8 px-4 md:px-8  bg-[#122D48] py-24 flex flex-col items-center justify-center gap-10 '>
                <div className='flex flex-col justify-center items-center gap-3 text-center'>
                    
                    <h2 className={`text-2xl lg:text-4xl md:text-4xl font-semibold text-white`}>
                       Why Choose Use
                    </h2>

                    <p className='text-sm lg:text-sm md:text-base font-light mb-5 text-white'>A car wash, carwash, or auto wash is a facility used to clean the exterior,and  <br className='hidden lg:block md:block'/> in some cases the interior of motor vehicies.</p>

                    
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div className='w-full  grid  grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-4 lg:gap-8 md:gap-8 sm:gap-4'>

                        <div className='col-auto'>
                            <div className='w-40 h-44 lg:h-80 lg:w-80 md:h-60 md:w-60 sm:w-56 sm:h-56  flex flex-col gap-2 items-center justify-center rounded-lg  px-4 Clip-path-Pentagono bg-slate-400/30 transition-all duration-300 ease-in-out hover:bg-blue-600'>
                                <div className='text-sm lg:text-lg md:text-lg p-2 lg:p-4 md:p-4 sm:p-4 rounded-full bg-white text-blue-400'>
                                <Droplet size={16}/>
                                </div>
                                <h3 className='text-sm lg:text-base md:text-base text-white font-bold'>Conserves Water</h3>
                                <p className='text-white text-[11px] lg:text-sm md:text-sm text-center font-medium '>We use less water in vehicele washing.</p>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className='w-40 h-44 lg:h-80 lg:w-80 md:h-60 md:w-60 sm:w-56 sm:h-56  shadow-lg flex flex-col gap-2 items-center justify-center rounded-lg  px-4 Clip-path-Pentagono bg-slate-400/30 lg:bg-blue-500 md:bg-blue-500 transition-all duration-300 ease-in-out hover:bg-blue-600'>
                                <div className='p-2  rounded-full bg-white text-blue-400'>
                                <div className='border-2 border-solid rounded-full border-blue-400 p-2  '>
                                    <h4 className='font-bold text-sm lg:text-base md:text-base'>24</h4>
                                </div>
                                </div>
                                <h3 className='text-sm lg:text-base md:text-base text-white font-bold'>Our Availability</h3>
                                <p className='text-white text-[11px] lg:text-sm md:text-sm text-center font-medium '>We use less water in vehicele washing.</p>
                            </div>
                        </div>

                        <div className='w-full  flex items-center col-span-3 lg:col-auto md:col-auto justify-center '>
                            <div className={`w-40 h-44 lg:h-80 lg:w-80 md:h-60 md:w-60 sm:w-56 sm:h-56   flex flex-col gap-2 items-center justify-center px-4 Clip-path-Pentagono bg-blue-600 lg:bg-slate-400/30 md:bg-slate-400/30  transition-all duration-300 ease-in-out hover:bg-blue-600`}>
                                <div className='text-sm lg:text-lg md:text-lg p-2 lg:p-4 md:p-4 sm:p-4 rounded-full bg-white text-blue-400'>
                                <FaRegHourglassHalf size={16}/>
                                </div>
                                <h3 className='text-sm lg:text-base md:text-base text-white font-bold'>Save your time</h3>
                                <p className='text-white text-[11px] lg:text-sm md:text-sm text-center font-medium '>We use less water in vehicele washing.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 lg:p-4 md:p-4 sm:p-4'>

                    <div className='w-40 h-44 lg:h-80 lg:w-80 md:h-60 md:w-60 sm:w-56 sm:h-56  flex px-4 flex-col gap-2 items-center justify-center rounded-lg Clip-path-Pentagono bg-slate-400/30 transition-all duration-300 ease-in-out hover:bg-blue-600'>
                            <div className='text-sm lg:text-lg md:text-lg p-2 lg:p-4 md:p-4 sm:p-4 rounded-full bg-white text-blue-400'> 
                            <RiCarWashingFill size={16}/>
                            </div>

                            <h3 className='text-sm lg:text-base md:text-base text-white font-bold'> Expert Cleaners</h3>
                            <p className='text-white text-[11px] lg:text-sm md:text-sm text-center font-medium '>We use less water in vehicele washing.</p>
                        </div>
                        
                        <div className='w-40 h-44 lg:h-80 lg:w-80 md:h-60 md:w-60 sm:w-56 sm:h-56  flex flex-col gap-2 items-center justify-center rounded-lg px-4 Clip-path-Pentagono bg-slate-400/30 transition-all duration-300 ease-in-out hover:bg-blue-600'>
                            <div className='text-sm lg:text-lg md:text-lg p-2 lg:p-4 md:p-4 sm:p-4 rounded-full bg-white text-blue-400'> <FaTools size={16} /></div>

                            <h3 className='text-sm lg:text-base md:text-base text-white font-bold'>Car Repair</h3>
                            <p className='text-white text-[11px] lg:text-sm md:text-sm text-center font-medium '>We use less water in vehicele washing.</p>
                        </div>
                        
                    </div>
                </div>
                    
                </div>
            
        </React.Fragment>
    )
}

export { Section3 }