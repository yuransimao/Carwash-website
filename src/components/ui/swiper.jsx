import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {BookPlus, CarTaxiFront  } from 'lucide-react'
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
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        
        className="mySwiper h-[85vh]"
      >
        <SwiperSlide>
          <div className='h-full w-full flex px-8'>
            <div className='flex flex-col justify-center gap-10 w-full h-full '>
              <div>
                <h2 className='text-4xl leading-snug '>Care That Shows,<br/> Everywhere You<br/> CarWash Go </h2>
              </div>

              <div className='flex  gap-3'>
                <div className='p-2 bg-blue-500 rounded-full text-white cursor-pointer'><BookPlus /></div>
                <div className='border-[1px] p-2 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:bg-blue-500 hover:text-white'><CarTaxiFront /></div>
                <div className='border-[1px] p-2 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:bg-blue-500 hover:text-white'><BookPlus /></div>
                <div className='border-[1px] p-2 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:bg-blue-500 hover:text-white'><CarTaxiFront /></div>
              </div>
              <div>
                <p className='text-sm text-justify'>
                  Our metculous care your shows in every detail ensuring <br/> that wherever you go, your vehice stands out  with its <br/> refreshed and spotiess appearance.
                </p>
              </div>

              <div className='flex gap-6 items-center justify-start'>
                <div><Button className='bg-blue-500 rounded-full transition-all duration-300 hover:bg-blue-700'>Book appontment</Button></div>
                <div><Button variant="outline" className="transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-full">How  we Work</Button></div>
              </div>
            </div>
            <div  className='w-full flex h-full relative items-end'>
              <div className='w-full h-full'>
                <img src={Car} alt="Car"  className='w-full'/>
              </div>

              <div className='absolute  right-32 bottom-20 bg-zinc-400/40   w-52  rounded-md'>

                <div className='relative after:w-48 after:bg-zinc-800/100 after:blur-sm after:absolute after:right-32 p-2'>
                <div className='h-24 w-48 rounded-md overflow-hidden blur-none'>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-full w-full flex px-8'>
            <div className='flex flex-col justify-center gap-10 w-full h-full '>
              <div>
                <h2 className='text-4xl leading-snug '>Care That Shows,<br/> Everywhere You<br/> CarWash Go </h2>
              </div>

              <div className='flex  gap-3'>
                <div className='p-2 bg-blue-500 rounded-full text-white cursor-pointer'><BookPlus /></div>
                <div className='border-[1px] p-2 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:bg-blue-500 hover:text-white'><CarTaxiFront /></div>
                <div className='border-[1px] p-2 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:bg-blue-500 hover:text-white'><BookPlus /></div>
                <div className='border-[1px] p-2 rounded-full transition-all ease-in-out duration-300 cursor-pointer hover:bg-blue-500 hover:text-white'><CarTaxiFront /></div>
              </div>
              <div>
                <p className='text-sm text-justify'>
                  Our metculous care your shows in every detail ensuring <br/> that wherever you go, your vehice stands out  with its <br/> refreshed and spotiess appearance.
                </p>
              </div>

              <div className='flex gap-6 items-center justify-start'>
                <div><Button className='bg-blue-500 rounded-full transition-all duration-300 hover:bg-blue-700'>Book appontment</Button></div>
                <div><Button variant="outline" className="transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-full">How  we Work</Button></div>
              </div>
            </div>
            <div  className='w-full flex h-full relative items-end'>
              <div className='w-full h-full'>
                <img src={Car} alt="Car"  className='w-full'/>
              </div>

              <div className='absolute  right-32 bottom-20 bg-zinc-400/40   w-52  rounded-md'>

                <div className='relative after:w-48 after:bg-zinc-800/100 after:blur-sm after:absolute after:right-32 p-2'>
                <div className='h-24 w-48 rounded-md overflow-hidden blur-none'>
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
        </SwiperSlide>
        
        
      </Swiper>
    </React.Fragment>
  );
}


export {Swipers}