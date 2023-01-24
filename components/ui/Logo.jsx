import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
        <Image src='/images/logo.png' width={250} height={250} alt=''/>
    </div>
  )
}

export default Logo