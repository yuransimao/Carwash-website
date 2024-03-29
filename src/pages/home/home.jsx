import React from 'react'

import Main from '@/components/main/main'

import { Swipers } from '@/components'
import { Section1 } from './components'

function Home() {
  return (
    <React.Fragment>
     
      
      <Swipers/>
      

        <Main />
      <Section1/>
       

    </React.Fragment>
  )
}

export { Home }