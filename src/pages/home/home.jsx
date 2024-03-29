import React from 'react'

import Main from '@/components/main/main'

import { Swipers } from '@/components'
import { Section1,Section2 } from './components'

function Home() {
  return (
    <React.Fragment>
     
      
      <Swipers/>
      <Section2/>

       {/* <Main />*/}
      <Section1/>
       

    </React.Fragment>
  )
}

export { Home }