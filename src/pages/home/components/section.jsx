import React from 'react'
import { Button,Swipers } from '@/components'
import CarMan from "@/assets/Limpacar.jpg"
import Car2 from "@/assets/Car2.jpg"
import Car3 from "@/assets/car3.jpg"
import {SwiperSlide } from 'swiper/react';
function Section() {
  return (
    <React.Fragment>

      <div className='h-svh'>
        <div className='h-full flex flex-col items-center justify-center gap-6'>
          <div className='text-center flex flex-col gap-2'> 
            <h2 className='text-2xl lg:text-4xl md:text-4xl font-bold'>Take care of your business</h2>
            <h4 className='text-sm lg:text-lg md:text-lg capitalize text-light'>while we take care of 
            <span className="text-blue-600 font-medium"> your cars</span></h4>
            <p className='text-[.800rem] lg:text-sm md:text-sm text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <Button className='bg-blue-600'><h3>Start washing</h3></Button>
            <Button variant="outline"><h3>Booking</h3></Button>
          </div>

          <div className='relative w-10/12 lg:w-2/3 md:w-2/3 h-[45%] overflow-hidden rounded-md after:absolute after:bg-zinc-800/50 after:w-full after:h-96 after:top-0 after:left-0 after:right-0 after:z-10'> 
          <Swipers>
            <SwiperSlide>

          <img src={CarMan} alt="ManCar" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
          <img src={Car2} alt="ManCar" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
          <img src={Car3} alt="ManCar" className='w-full h-full object-cover'/>
            </SwiperSlide>
          </Swipers>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export  {Section}