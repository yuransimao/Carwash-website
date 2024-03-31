import React from 'react'
import Logo1 from "@/assets/logo1.svg"
import Logo2 from "@/assets/logo2.svg"
import Logo3 from "@/assets/logo3.svg"
import Logo4 from "@/assets/logo4.svg"

const Imagens= [{image : Logo1}, {image : Logo2}, {image :Logo3}, {image :Logo4}]
function Section4() {
  return (
    <React.Fragment>

        <div className='px-4 lg:px-8 md:px-8'>
            
            <div className='grid grid-cols-4 gap-2'>
                {Imagens.map((item, index) => (
                
                <div key={index}>
                    <img src={item.image} alt="logo" />
                </div>
                ))}
            </div>
        </div>
    </React.Fragment>
  )
}

export  {Section4}