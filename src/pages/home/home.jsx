import React from 'react'

import Main from '@/components/main/main'

import { Swipers } from '@/components'
import { Section1,Section2, Section3 } from './components'

function Home() {
  return (
    <React.Fragment>
     
      
      <Swipers/>
      <Section2/>
      <Section3/>
       {/* <Main />*/}
      <Section1/>
       

    </React.Fragment>
  )
}

export { Home }