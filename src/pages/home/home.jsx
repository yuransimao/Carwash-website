import Main from '@/components/main/main'

import React from 'react'
import { Swipers} from '@/components'
import { Section1 } from './components'

function Home() {
  return (
    <React.Fragment>

      <Swipers />
      <Section1/>
        <Main />
        <Swipers/>

    </React.Fragment>
  )
}

export { Home }