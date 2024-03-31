import React from 'react'
import Car from "@/assets/car3.jpg"
import CarMan from "@/assets/Limpacar.jpg"
import Car3 from "@/assets/Car2.jpg"
import { Gallery,Separator } from '@/components'

const DataImage=[
    {
      id:1,
      image: Car
    },
    {
      id:2,
      image: CarMan
    },
    {
      id:3,
      image:  CarMan
    },
    {
      id:4,
      image: Car
    }
    ,
    {
      id:5,
      image: CarMan
    }
    ,
    {
      id:6,
      image: Car
    },
    {
      id:7,
      image: Car3
    },
    {
      id:8,
      image: Car3
    }
    ,
    {
      id:9,
      image: Car
    }
    ,
    {
      id:10,
      image: CarMan
    }
    ,
    /*
    {
      id:11,
      image: Car
    },
    {
      id:12,
      image: Car
    },
    {
      id:13,
      image: Car
    },
    {
      id:14,
      image: Car
    },
    {
      id:15,
      image: Car
    },
    {
      id:16,
      image: Car
    },
    {
      id:17,
      image: Car
    },
    {
      id:18,
      image: Car
    }
    ,
    {
      id:19,
      image: Car
    },
    {
      id:20,
      image: Car
    },
    {
      id:21,
      image: Car
    },
    {
      id:22,
      image: Car
    },
    {
      id:23,
      image: Car
    },
    {
      id:24,
      image: Car
    },
    {
      id:25,
      image: Car
    },
    {
      id:26,
      image: Car
    }*/
  ] 

function Section6() {
  return (
    <React.Fragment>

        <div className=' px-4 lg:px-8 md:px-8 py-24 '>
        <div className='flex flex-col gap-3 mb-8'>
          <h3 className='text-blue-700 font-semibold '>Our images</h3>
          <Separator className="w-16 h-1 rounded-full bg-blue-500"/>
          <h2 className='text-2xl lg:text-4xl md:text-4xl font-semibold'>Gallary Image</h2>
          <p className='text-sm'> 
            Check out some images of our washing services, carried <br/>out with dedication and special care.
            </p>
        </div>
        <Gallery Image={DataImage}/>
        </div>
    </React.Fragment>
  )
}

export {Section6}