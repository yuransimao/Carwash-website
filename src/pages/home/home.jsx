import React from 'react'

import Main from '@/components/main/main'

import { Swipers } from '@/components'
import { Section1 } from './components'

function Home() {
  return (
    <React.Fragment>
      Home
      <Main />
      <Swipers/>
      <Swipers />
      <Section1/>
      <Main />
      <Swipers/>
    </React.Fragment>
  )
}

export { Home }