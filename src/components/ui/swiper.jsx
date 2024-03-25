import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {ArrowRight } from 'lucide-react'
import Car from '@/assets/car.png'
import ManCleaningCar from "@/assets/Limpacar.jpg"
import { Button } from '../';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { BookCheck } from 'lucide-react';


// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

 function Swipers() {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        
        className="mySwiper h-[88.5vh]"
      >
        
        <SwiperSlide>
          <div className='h-full w-full flex px-8 image-1-slide relative after:h-full  after:w-full after:bg-zinc-900/50 after:absolute after:left-0 after:right-0 after:blur-lg after:z-10'>


            <div className='h-full w-full flex absolute z-20'>

             <div className='h-full w-full flex flex-col gap-3 justify-center'>
                <div className='flex flex-col gap-1'>
                  <h5 className='font-semibold text-xl text-gray-300'>Came your car </h5>
                  <h2 className='font-bold text-4xl text-white uppercase'>It's To Come</h2>
                  <h3 className='font-semibold text-2xl text-white' >Clean Your Car</h3>
                  <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>cupiditate molestias est cumque illum sint, dignissimos, <br/>inventore eveniet dolores? Officia iure dicta nemo <br/></p>
                </div>
                <div>
                    <Button className="bg-blue-700 flex items-center gap-4 transition-all duration-300 hover:bg-blue-800">
                      <h4 className='font-bold'>Explore your service</h4> 
                    <span><ArrowRight size={14}/></span></Button>
                  </div>
             </div>
              <div  className='w-full flex h-full relative items-end'>
              
                <div className='absolute  right-36 bottom-12 bg-zinc-400/40 shadow-md  w-56  rounded-md'>
                  <div className='relative after:w-48  p-2'>
                  <div className='h-24 w-52 rounded-md overflow-hidden blur-none'>
                    <img src={ManCleaningCar} alt="ManCleaningCar" className='w-full h-full object-cover'/>
                  </div>
                  <div  className='py-2 flex flex-col gap-2'>
                    <div className='flex items-center justify-start gap-2'>
                      <span className='bg-blue-400 p-1 rounded-full text-white'><BookCheck size={14}/></span>
                      <h3 className='text-white text-base font-bold'> Exterior Wash</h3>
                    </div>
                    <p className='text-start font-medium text-white text-sm'>Thorough cleaning washing  and tire cleaning for a polished loock. </p>
                  </div>
                  </div>
                </div>
              
              </div>
            </div>


          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='h-full w-full flex px-8 image-2-slide relative after:h-full  after:w-full after:bg-zinc-900/50 after:absolute after:left-0 after:right-0 after:blur-lg after:z-10'>


            <div className='h-full w-full flex absolute z-20'>

             <div className='h-full w-full flex flex-col gap-3 justify-center'>
                <div className='flex flex-col gap-1'>
                  <h5 className='font-semibold text-xl text-gray-300'>Came your car </h5>
                  <h2 className='font-bold text-4xl text-white uppercase'>It's To Come</h2>
                  <h3 className='font-semibold text-2xl text-white' >Clean Your Car</h3>
                  <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>cupiditate molestias est cumque illum sint, dignissimos, <br/>inventore eveniet dolores? Officia iure dicta nemo <br/></p>
                </div>
                <div>
                    <Button className="bg-blue-700 flex items-center gap-4 transition-all duration-300 hover:bg-blue-800">
                      <h4 className='font-bold'>Explore your service</h4> 
                    <span><ArrowRight size={14}/></span></Button>
                  </div>
             </div>
              <div  className='w-full flex h-full relative items-end'>
              
                <div className='absolute  right-36 bottom-12 bg-zinc-400/40 shadow-md  w-56  rounded-md'>
                  <div className='relative after:w-48  p-2'>
                  <div className='h-24 w-52 rounded-md overflow-hidden blur-none'>
                    <img src={ManCleaningCar} alt="ManCleaningCar" className='w-full h-full object-cover'/>
                  </div>
                  <div  className='py-2 flex flex-col gap-2'>
                    <div className='flex items-center justify-start gap-2'>
                      <span className='bg-blue-400 p-1 rounded-full text-white'><BookCheck size={14}/></span>
                      <h3 className='text-white text-base font-bold'> Exterior Wash</h3>
                    </div>
                    <p className='text-start font-medium text-white text-sm'>Thorough cleaning washing  and tire cleaning for a polished loock. </p>
                  </div>
                  </div>
                </div>
              
              </div>
            </div>


          </div>
        </SwiperSlide>
        
        
        
      </Swiper>
    </React.Fragment>
  );
}


export {Swipers}