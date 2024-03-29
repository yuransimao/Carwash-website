import React from 'react'

import { Button, Card } from '@/components'

function Price({Price, SubPrice, TitlePlan,icon, list =[], index }) {
    const Card = index === 2;
  return (
    <React.Fragment>
        <div className={`w-60  bg-zinc-500/10 rounded-md   ${Card  ? 'scale-110 shadow-2xl shadow-zinc-500/50 border-red-600 border-solid border-[1px] ': "scale-105"}`}>
            <div className='w-full relative'>
                <div className={`absolute z-20 top-[-2.7rem] left-16 shadow-lg flex justify-center items-center shadow-zinc-800/40 bg-white h-28 w-28 rounded-full  border-2 border-solid ${Card ? 'border-red-500': 'border-blue-500' }`}>
                   <div className='flex justify-center'>
                       <span className='text-sm'>$</span>
                       <h3 className={`text-3xl font-semibold ${Card ? 'text-red-500' :'text-blue-500'}`}>{Price}</h3>
                       <span className={`text-sm ${Card ? 'text-red-500' :'text-blue-800'}`}>{SubPrice}</span>
                   </div>
                    </div>
                <div className={`${Card ?'bg-red-600' :'bg-blue-500'} Clip-path-polygon w-full h-36 rounded-md flex justify-center items-center `}>
                    <h2 className='mt-12 font-semibold text-base text-white'>{TitlePlan}</h2>
                </div>
            </div>
            <div>
                <ul className='p-4 flex flex-col justify-center items-center gap-3'>

                    {list.map((item, index) => (
                        <li className='flex gap-2 items-center' key={index}> 
                        <span className={`border-[1px] boder-solid ${Card ? 'text-red-500 border-red-500' :'text-blue-500 border-blue-500'}  rounded-full p-1`}>
                            {item.icon}
                        </span>
                        <div>
                            <h4 className={`text-sm ${Card ? 'text-red-500' :'text-blue-500'} font-semibold `}>{item.title}</h4>
                            </div>
                        </li>
                    ))}
                    
    
                </ul>


            </div>

            <div className='w-full p-4'>
                <Button className={`w-full ${ Card ? 'bg-red-500 transition-all ease-linear duration-300 hover:bg-red-700 rounded-full':'bg-transparent rounded-full border-blue-500'}`} 
                variant ={Card ? "default" : "outline"}>
                    <h5>Book Now</h5>
                </Button>
            </div>
        </div>
    </React.Fragment>
  )
}

export {Price}