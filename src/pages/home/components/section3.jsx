import React from 'react'
import { Card, Separator,Button } from '@/components'
import CarAbout from "@/assets/Aboutcar-wash.png"
function Section3() {
    return (
        <React.Fragment>
            <div className=' lg:px-8 px-4 md:px-8   '>
                <div className='flex flex-col justify-center items-center gap-3 text-center'>
                    <h4 className='text-blue-400'>About us</h4>
                    <Separator className="w-14 h-1 rounded-full bg-blue-500"/>
                    <h2 className={`text-2xl lg:text-4xl md:text-4xl font-semibold`}>
                        We're Something Deferent<br/>  From Outhers 
                    </h2>

                    <p className='text-sm lg:text-sm md:text-base font-light mb-5'>A car wash, carwash, or auto wash is a facility used to clean the exterior,and  <br className='hidden lg:block md:block'/> in some cases the interior of motor vehicies.</p>

                    
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    <Card className="p-6 flex flex-col gap-5 bg-slate-300"> 
                        <h3 className='text-base font-semibold'>Impeccable Cleaning</h3>
                        <p className='font-light text-justify leading-6'>Our team of skilled profissionals will pamper your car with meliculous care, leaving no speck of dirt or grime behind.From the exterior shine to the the interior freshness, your car will be revitalized and restored to its original glory. </p>
                    </Card>
                    <div className='flex justify-end items-center'>
                        <div className='w-32'>
                            <img src={CarAbout} alt="" className='w-full' />
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export { Section3 }