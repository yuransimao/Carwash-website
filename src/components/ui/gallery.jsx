import React from 'react'

function Gallery({Image = []}) {

    const NumberGridRowSpan2 =[3, 6, 11,12,15,16,18,19,20,22];
  return (
    <React.Fragment>
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] grid-rows-[200px] grid-flow-dense gap-6'>
                {Image.map((item, index) => {
                    const isRowSpan2 = NumberGridRowSpan2.includes(index + 1)
                   
                   return (
                     <div className={`flex justify-center items-center ${isRowSpan2 &&  'row-span-2'}`} key={index}>
                     <img src={item.image} className={`w-full h-full object-cover rounded-md inline-block `}/>
                  </div>
                )})}
                </div>
        </div>
    </React.Fragment>
  )
}

export  {Gallery}