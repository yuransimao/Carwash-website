import React from 'react'
import Car from "@/assets/car3.jpg"
import { Gallery } from '@/components'
const DataImage=[
    {
      id:1,
      image: Car
    },
    {
      id:2,
      image: Car
    },
    {
      id:3,
      image: Car
    },
    {
      id:4,
      image: Car
    }
    ,
    {
      id:5,
      image: Car
    }
    ,
    {
      id:6,
      image: Car
    },
    {
      id:7,
      image: Car
    },
    {
      id:8,
      image: Car
    }
    ,
    {
      id:9,
      image: Car
    }
    ,
    {
      id:10,
      image: Car
    }
    ,
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
    }
  ]
function Section6() {
  return (
    <React.Fragment>

        <div className=' px-4 lg:px-8 md:px-8 py-24 '>
        <Gallery Image={DataImage}/>
        </div>
    </React.Fragment>
  )
}

export {Section6}