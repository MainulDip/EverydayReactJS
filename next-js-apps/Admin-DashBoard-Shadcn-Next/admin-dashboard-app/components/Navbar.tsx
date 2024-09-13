
import images from '@/img'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="bg-primary text-white py-2 px-4 flex justify-between">
      <Link href="/">
        <Image alt="Logo" src={images.Logo} />
      </Link>
    </div>
  )
}

export default Navbar