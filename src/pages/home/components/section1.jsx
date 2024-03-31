import React from 'react'
import { Card, Separator,Button } from '@/components'
import CarWashing from "@/assets/Mancar-wash.png"
import CarRepair from "@/assets/carRepair.png"
import Tire from "@/assets/tire.png"
import { ArrowRight  } from 'lucide-react'
import CarPolish from "@/assets/car-polish.png"

import { Link } from 'react-router-dom'

const Cards = [
    { title: "Washing", image: CarWashing, description:'We will come to you, whether thoroughly clean and condition both the interior and exterior of your vehicle, leving it in showroom condition.' },
    { title: "Repairing", image: CarRepair, description:'We will come to you, whether thoroughly clean and condition both the interior and exterior of your vehicle, leving it in showroom condition.' },
    { title: "Cleaning", image: Tire, description:'We will come to you, whether thoroughly clean and condition both the interior and exterior of your vehicle, leving it in showroom condition.' },
    /*{ title: "Polish", image: CarPolish, description:'We will come to you, whether thoroughly clean and condition both the interior and exterior of your vehicle, leving it in showroom condition.' }*/
]
function Section1() {
    return (
        <React.Fragment>
            <div className='block  px-4 lg:px-8 md:px-8  py-24 justify-between'>
                <div className='flex flex-col gap-3 w-full mb-4'>
                <h3 className='text-black font-bold uppercase text-2xl'>Our Service</h3>
          <Separator className="w-14 h-1 rounded-full bg-blue-600"/>
                    
                    
                   
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full'>
                    {Cards.map((item, index) => (
                        <Card className={`px-4 bg-zinc-200/10 py-4 flex flex-col border-zinc-200/10  gap-2 `} key={index}>
                            <div className='w-9 rounded-full bg-slate-400/20 p-2'>
                                <img src={item.image} alt="Mancarwash" className='w-full' />
                            </div>
                            <h3 className={`font-semibold text-base `}>{item.title}</h3>
                           
                            <p className='text-sm font-light leading-6'>{item.description}</p>

                            <Link className='flex items-center gap-2 font-semibold transition-all duration-300 hover:text-blue-700'>
                            <h3 className='text-sm'>Learn more</h3>
                            <span><ArrowRight  size={14}/></span>
                            </Link>
                        </Card>
                    ))}
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export { Section1 }