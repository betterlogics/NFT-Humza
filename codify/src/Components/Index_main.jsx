import React from 'react'
import Benefits from './Benefits/Benefits'
import Collection from './Collection/Collection'
import Footer from './Footer/Footer'
import Explor from './Explor/Explor'
import Group from './Group/Group'
import Mints from './Mints/Mints'
import Nft from './Nft/Nft'
import Roadmap from './Roadmap/Roadmap'
import Second from './Second/Second'

function Index_main() {
  return (
    <div>
      <Second />
      {/* <Nft /> */}
      <Benefits />
      <Group />
      <Collection />
      <Mints />
      <Roadmap />
      <Explor />
      
    </div>
  )
}

export default Index_main
