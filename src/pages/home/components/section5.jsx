import React from 'react'
import Car from "@/assets/Car2.jpg"
import { Card,Button } from '@/components'
function Section5() {
  return (
    <React.Fragment>
        <div className='relative bg-[#101314] mb-10 px-8 py-24 flex justify-between'>
            <div></div>
        <div className='absolute bg-white top-48 left-72 rounded-lg z-20'>
            <div className='p-4'>
                <h2 className='font-bold text-2xl'>Not enough for your fleet?</h2>
                <p className='py-4 text-sm'>No warries, we can prepare custom package tailored to your<br/> business needs!</p>
                <Button className='bg-blue-600 font-bold'><h4>Contact us</h4></Button>
            </div>

        </div>
        <div className='w-1/2 h-2/3  '>
            <Card className="w-full h-full rounded-lg border-transparent overflow-hidden relative after:absolute after:w-full after:h-full after:bg-zinc-800/40 after:z-10 after:left-0 after:right-0 after:top-0">
                <img src={Car} alt=""  className='w-full h-full object-contain'/>
                </Card>
        </div>
        </div>
    </React.Fragment>
  )
}

export  {Section5}