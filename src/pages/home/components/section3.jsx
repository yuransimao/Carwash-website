import React from 'react'
import { Price, Separator } from '@/components'

import { Check } from 'lucide-react'


const DataPlan = [
  {
    TitlePlan: 'Basic Cleaning',
    Price: 25,
    SubPrice: ".99",
    list: [
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      }
    ]
  },
  {
    TitlePlan: 'Full Cleaning',
    Price: 500,
    SubPrice: ".99",
    list: [
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      }
    ]
  },
  {
    TitlePlan: 'Medium Cleaning',
    Price: 350,
    SubPrice: ".99",
    list: [
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      },
      {
        title: 'Seats Washing',
        icon: <Check size={16} />
      }
    ]
  }
]
function Section3() {
  return (
    <React.Fragment>
     
      <div className='px-2 lg:px-8 md:px-8 py-28 flex flex-col  justify-center items-center'>
        <div className='mb-24 text-center flex flex-col justify-center items-center gap-2'>
          <h3 className='text-blue-700 font-semibold '>Washing Plan</h3>
          <Separator className="w-1/4 h-1 rounded-full bg-blue-500"/>
          <h2 className='text-2xl lg:text-4xl md:text-4xl font-semibold'>Choose Your Plan</h2>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-y-24 gap-x-8`}>{DataPlan.map( (item, index) => <Price key={index} {...item} index={index +1}/>)}
        </div>
      </div>
    </React.Fragment>
  )
}

export {Section3}