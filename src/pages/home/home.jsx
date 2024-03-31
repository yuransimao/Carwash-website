import React from 'react'

import Main from '@/components/main/main'

import { Swipers } from '@/components'
import { Section1,Section2, Section3,Section } from './components'

function Home() {
  return (
    <React.Fragment>
     
      
     <Section/>
      <Section1/>
      <Section2/>
      <Section3/>
       {/* <Main />*/}
       

    </React.Fragment>
  )
}

export { Home }