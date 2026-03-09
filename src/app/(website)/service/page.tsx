import Client from '@/src/components/Client'
import PageBanner from '@/src/components/common/PageBanner'
import DedicatedSupport from '@/src/components/DedicatedSupport'
import WhatWeDo from '@/src/components/WhatWeDo'
import React from 'react'

const page = () => {
  return (
    <div>
        <PageBanner heading={'Our Services'} description={''}/>
        <WhatWeDo/>
        <Client/>
        <DedicatedSupport/>
    </div>
  )
}

export default page