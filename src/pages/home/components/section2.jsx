import React from 'react'
import { Card, Separator,Button } from '@/components'
import CarWashing from "@/assets/Mancar-wash.png"
import CarRepair from "@/assets/carRepair.png"
import Tire from "@/assets/tire.png"
import CarPolish from "@/assets/car-polish.png"

const Cards = [
    { title: "Washing", image: CarWashing },
    { title: "Repairing", image: CarRepair },
    { title: "Cleaning", image: Tire },
    { title: "Polish", image: CarPolish }
]
function Section2() {
    return (
        <React.Fragment>
            <div className='block lg:flex md:flex lg:px-8 px-4 md:px-8  py-24 justify-between'>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-blue-400'>Our Services</h4>
                    <Separator className="w-14 h-1 rounded-full bg-blue-500"/>
                    <h2 className={`text-2xl lg:text-4xl md:text-4xl font-semibold`}>
                        We Offer Something <br/> Deferent For You 
                    </h2>

                    <p className='text-sm lg:text-base md:text-base font-light mb-5'>At Cleannery Car Washing Center. We take pride in  providing <br className='hidden lg:block md:block'/> top-notch car wash solutions to keep your vehicie looking<br className='hidden lg:block md:block'/> pristine and showroom-ready. </p>

                    <div className='hidden lg:inline md:inline'>
                        <Button className={`rounded-full bg-blue-600`}><h4>See all service</h4></Button>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    {Cards.map((item, index) => (
                        <Card className={`px-16 py-6 flex flex-col justify-center ${index + 1 === 1 && "border-blue-500"} shadow-md items-center gap-4`} key={index}>
                            <div className='w-16'>
                                <img src={item.image} alt="Mancarwash" className='w-full' />
                            </div>
                            <h3 className={`font-semibold text-base ${index +1 === 1 && "text-blue-500 font-bold"}`}>{item.title}</h3>
                        </Card>
                    ))}
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export { Section2 }